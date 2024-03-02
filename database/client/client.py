import weaviate
import os
import json

def get_weaviate_client():
    # Load configuration from the file
    # Get the absolute path of the current script's directory
    script_directory = os.path.dirname(os.path.abspath(__file__))

    # Construct the absolute path to config.json
    config_path = os.path.join(script_directory,  'config.json')

    # Modified path using a raw string literal
    with open(config_path, 'r') as config_file:
        config = json.load(config_file)

    # Get Weaviate configuration
    weaviate_config = config.get('weaviate', {})
    weaviate_url = weaviate_config.get('url', '')
    weaviate_api_key = weaviate_config.get('api_key', '')
    
    # Get OpenAI configuration
    openai_config = config.get('openai', {})
    openai_inference_api_key = openai_config.get('api_key', '')

    # Create and return Weaviate client
    return weaviate.Client(
        url=weaviate_url,
        auth_client_secret=weaviate.AuthApiKey(api_key=weaviate_api_key),
        additional_headers={
            "X-OpenAI-Api-Key": openai_inference_api_key
        }
    )
