import weaviate
import json

def get_weaviate_client():
    # Load configuration from the file
    # Original path (using single backslashes)


    # Modified path using a raw string literal
    with open(r'weaviate\config.json', 'r') as config_file:
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
