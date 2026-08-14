import os
import json
import sys
from pydantic import BaseModel
from typing import List

# Ensure we import local modules correctly
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from prompts import generate_prompt
from llm import query_llm

class QueryRequest(BaseModel):
    query: str

class SchemeResponse(BaseModel):
    name: str
    match: str
    reason: str
    eligibility: str
    benefits: str
    application: str
    source: str

class QueryResponse(BaseModel):
    schemes: List[SchemeResponse]

def process_query(query_text: str, output_file: str = "output.json") -> QueryResponse:
    """
    Orchestrates the entire query pipeline:
    1. Validates the input query with QueryRequest.
    2. Reads the metadata.json context.
    3. Formats the prompt using prompts.py.
    4. Submits prompt to llm.py to generate answer (conforming to QueryResponse).
    5. Validates the structure and saves output.json.
    """
    # 1. Validate the input query
    request = QueryRequest(query=query_text)

    # Resolve paths relative to project root
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    metadata_path = os.path.join(base_dir, "vectorstore", "metadata.json")

    # Load context from metadata.json
    if os.path.exists(metadata_path):
        with open(metadata_path, "r", encoding="utf-8") as f:
            metadata_data = json.load(f)
            context_str = json.dumps(metadata_data, indent=2, ensure_ascii=False)
    else:
        raise FileNotFoundError(f"Retrieved context file not found at {metadata_path}")

    # 2. Get prompt from prompts.py
    prompt = generate_prompt(request.query, context_str)

    # 3. Call LLM to get raw answer (using QueryResponse as structured schema)
    raw_response_text = query_llm(prompt, response_schema=QueryResponse)

    # 4. Verify and parse structure matches QueryResponse schema
    try:
        response_json = json.loads(raw_response_text)
        validated_response = QueryResponse(**response_json)
    except (json.JSONDecodeError, ValueError) as e:
        print("Error: LLM output failed to match QueryResponse schema structure.")
        print("Raw output:", raw_response_text)
        raise e

    # Write output.json in the project root
    output_path = os.path.join(base_dir, output_file)
    with open(output_path, "w", encoding="utf-8") as f_out:
        json.dump(validated_response.model_dump(), f_out, indent=2, ensure_ascii=False)

    print(f"Successfully processed query. Output verified and saved to {output_path}")
    return validated_response

if __name__ == "__main__":
    # Ensure stdout handles Unicode characters on Windows console
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')

    default_query = (
        "I am a farmer from Gujarat. I own 2 acres of land, "
        "earn around ₹2 lakh per year, and need financial assistance for farming."
    )

    query = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else default_query
    print(f"Running pipeline from schema.py for query: '{query}'")
    process_query(query)
