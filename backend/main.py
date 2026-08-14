import sys
import json
import os
from retrieval import retrieve
from schema import process_query

def main():
    # Ensure stdout handles Unicode characters on Windows console
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')

    default_query = (
        "I am a farmer from Gujarat. I own 2 acres of land, "
        "earn around ₹2 lakh per year, and need financial assistance for farming."
    )

    # 1. Take user query
    if len(sys.argv) > 1:
        query = " ".join(sys.argv[1:])
    else:
        query = input("Enter your query: ").strip()
        if not query:
            query = default_query

    print(f"User Query: '{query}'")

    # 2. Retrieve most relevant documents
    print("Retrieving relevant schemes from vectorstore...")
    results = retrieve(query, top_k=10, min_score=0.7)

    # Format the retrieved documents to conform to the document schema
    cleaned_results = []
    for res in results:
        cleaned_results.append({
            "id": res["id"],
            "name": res["name"],
            "category": res.get("category", "General"),
            "source": res["source"],
            "content": res["content"]
        })

    # 3. Write them to vectorstore/metadata.json (overwriting context)
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    metadata_path = os.path.join(base_dir, "vectorstore", "metadata.json")

    with open(metadata_path, "w", encoding="utf-8") as f:
        json.dump(cleaned_results, f, indent=2, ensure_ascii=False)
    print(f"Overwrote {metadata_path} with {len(cleaned_results)} retrieved documents.")

    # 4. Invoke LLM orchestration to generate output.json
    print("Invoking LLM orchestration to generate output.json...")
    process_query(query)

if __name__ == "__main__":
    main()