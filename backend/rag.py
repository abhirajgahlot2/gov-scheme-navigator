import os
import json
import faiss

from embeddings import generate_embeddings


DOCUMENT_FOLDER = "data/documents"
VECTORSTORE_FOLDER = "vectorstore"
SCHEMES_FILE = os.path.join("data", "schemes.json")

INDEX_FILE = os.path.join(VECTORSTORE_FOLDER, "index.faiss")
METADATA_FILE = os.path.join(VECTORSTORE_FOLDER, "metadata.json")


def read_markdown_files():
    documents = []

    for filename in sorted(os.listdir(DOCUMENT_FOLDER)):
        if not filename.endswith(".md"):
            continue

        filepath = os.path.join(DOCUMENT_FOLDER, filename)

        with open(filepath, "r", encoding="utf-8") as file:
            text = file.read()

        documents.append({
            "id": os.path.splitext(filename)[0],
            "source": filename,
            "text": text
        })

    return documents


def normalize_category(category):
    if isinstance(category, list):
        return ", ".join(category)
    return category or "General"


def build_index():
    os.makedirs(VECTORSTORE_FOLDER, exist_ok=True)

    with open(SCHEMES_FILE, "r", encoding="utf-8") as file:
        scheme_catalog = json.load(file)

    scheme_lookup = {
        scheme.get("id"): scheme for scheme in scheme_catalog if scheme.get("id")
    }

    documents = read_markdown_files()
    metadata = []

    for document in documents:
        scheme = scheme_lookup.get(document["id"], {})
        metadata.append({
            "id": document["id"],
            "name": scheme.get("name") or document["id"].replace("_", " ").title(),
            "category": normalize_category(scheme.get("category")),
            "source": scheme.get("source") or document["source"],
            "content": document["text"]
        })

    if not metadata:
        print("No .md files found.")
        return

    texts = [entry["content"] for entry in metadata]
    embeddings = generate_embeddings(texts)

    dimension = embeddings.shape[1]
    index = faiss.IndexFlatIP(dimension)
    index.add(embeddings)

    faiss.write_index(index, INDEX_FILE)

    with open(METADATA_FILE, "w", encoding="utf-8") as file:
        json.dump(metadata, file, ensure_ascii=False, indent=2)

    print("FAISS index created successfully.")
    print("Total documents:", len(metadata))


if __name__ == "__main__":
    build_index()