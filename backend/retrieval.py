import json
import faiss
import os

from embeddings import generate_query_embedding

INDEX_FILE = "vectorstore/index.faiss"
index = faiss.read_index(INDEX_FILE)

def load_full_metadata():
    """
    Dynamically loads the full metadata from schemes.json and raw markdown documents.
    This prevents IndexError if vectorstore/metadata.json has been overwritten with search results.
    """
    schemes_file = "data/schemes.json"
    documents_dir = "data/documents"

    with open(schemes_file, "r", encoding="utf-8") as f:
        scheme_catalog = json.load(f)

    scheme_lookup = {
        scheme.get("id"): scheme for scheme in scheme_catalog if scheme.get("id")
    }

    metadata = []
    # Loop over sorted files to maintain identical FAISS index mapping
    for filename in sorted(os.listdir(documents_dir)):
        if not filename.endswith(".md"):
            continue

        doc_id = os.path.splitext(filename)[0]
        filepath = os.path.join(documents_dir, filename)

        with open(filepath, "r", encoding="utf-8") as f_doc:
            text = f_doc.read()

        scheme = scheme_lookup.get(doc_id, {})
        cat = scheme.get("category")
        cat_str = ", ".join(cat) if isinstance(cat, list) else (cat or "General")

        metadata.append({
            "id": doc_id,
            "name": scheme.get("name") or doc_id.replace("_", " ").title(),
            "category": cat_str,
            "source": scheme.get("source") or filename,
            "content": text
        })

    return metadata

# Always load full database metadata from source directory for indexing reference
metadata = load_full_metadata()

def retrieve(query, top_k=5, min_score=0.7):
    query_embedding = generate_query_embedding(query)

    # Retrieve candidate list from FAISS (use all items in index for robust re-ranking on a small database)
    num_candidates = min(len(metadata), 30)
    scores, indices = index.search(query_embedding, num_candidates)

    results = []
    for score, index_id in zip(scores[0], indices[0]):
        if index_id == -1:
            continue

        # Safe lookup in the loaded source metadata
        result = metadata[index_id].copy()
        result["score"] = float(score)
        results.append(result)

    # Re-rank based on category and keyword match boosts to refine FAISS results
    query_lower = query.lower()
    for res in results:
        boost = 0.0
        category = res.get("category", "").lower()
        content = res.get("content", "").lower()
        name = res.get("name", "").lower()

        # Agriculture / Farmers
        if any(w in query_lower for w in ["farmer", "farming", "agricultur", "crop", "cultivat", "kisan", "land"]):
            if "agriculture" in category or "farmer" in content or "kisan" in name or "land" in content or "crop" in content:
                boost += 0.6

        # Education / Students
        if any(w in query_lower for w in ["student", "school", "college", "scholarship", "education", "studi"]):
            if "education" in category or "student" in content or "scholarship" in name:
                boost += 0.6

        # Healthcare / Medical
        if any(w in query_lower for w in ["health", "medical", "hospital", "treatment", "doctor", "pregnant"]):
            if "health" in category or "medical" in content or "hospital" in content:
                boost += 0.6

        # Senior Citizens / Pension
        if any(w in query_lower for w in ["pension", "senior", "old age", "elderly", "retirement"]):
            if "senior" in category or "pension" in content or "pension" in name:
                boost += 0.6

        # Women / Girls
        if any(w in query_lower for w in ["women", "girl", "female", "mother", "mahila"]):
            if "women" in category or "girl" in content or "female" in content or "mahila" in name:
                boost += 0.6

        # Housing
        if any(w in query_lower for w in ["house", "housing", "home", "awaas", "dilapidated"]):
            if "housing" in category or "house" in content or "awaas" in name:
                boost += 0.6

        # Entrepreneurship / Business
        if any(w in query_lower for w in ["business", "entrepreneur", "enterprise", "startup", "micro"]):
            if "entrepreneur" in category or "business" in content or "micro" in content:
                boost += 0.6

        res["score"] += boost

    # Sort results by the updated score descending
    results.sort(key=lambda x: x["score"], reverse=True)

    # Filter results by relevance score threshold
    filtered_results = [r for r in results if r["score"] >= min_score]
    if not filtered_results and results:
        filtered_results = [results[0]]

    return filtered_results[:top_k]