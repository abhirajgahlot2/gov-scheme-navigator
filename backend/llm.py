import os
from google import genai
from google.genai import types
from dotenv import load_dotenv

# Load environment variables from the .env file in the same directory
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))
API_KEY = os.getenv("API_KEY")

def query_llm(prompt: str, response_schema=None) -> str:
    """
    Sends the prompt to Gemini and optionally validates the JSON output
    against the provided Pydantic response schema.
    """
    if not API_KEY:
        raise ValueError("API_KEY not found in environment variables. Please check your .env file.")

    client = genai.Client(api_key=API_KEY)

    config = types.GenerateContentConfig(
        temperature=0.0
    )
    if response_schema is not None:
        config.response_mime_type = "application/json"
        config.response_schema = response_schema

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
        config=config
    )

    return response.text