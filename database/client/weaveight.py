import weaviate
import json
import os

class WeaviateSearch:
    def __init__(self, config_path='config.json'):
        self.client = self.get_weaviate_client(config_path)

    def get_weaviate_client(self, config_path):
        script_directory = os.path.dirname(os.path.abspath(__file__))

        # Construct the absolute path to config.json
        config_path = os.path.join(script_directory,  'config.json')
        with open(config_path, 'r') as config_file:
            config = json.load(config_file)


        weaviate_config = config.get('weaviate', {})
        weaviate_url = weaviate_config.get('url', '')
        weaviate_api_key = weaviate_config.get('api_key', '')
        openai_config = config.get('openai', {})
        openai_inference_api_key = openai_config.get('api_key', '')


        client = weaviate.Client(
            url=weaviate_url,
            auth_client_secret=weaviate.AuthApiKey(api_key=weaviate_api_key),
            additional_headers={"X-OpenAI-Api-Key": openai_inference_api_key}
        )

        return client

    def import_forta_bots(self):
        data_file_path = '../data/bots.json'

        class_obj = {
            "class": "FortaBot",
            "vectorizer": "text2vec-openai",
            "moduleConfig": {
                "text2vec-openai": {},
                "generative-openai": {}
            }
        }

        if self.client.schema.exists("FortaBot"):
            self.client.schema.delete_class("FortaBot")

        self.client.schema.create_class(class_obj)

        with open(data_file_path, 'r', encoding='utf-8') as json_file:
            data = json.load(json_file)

        self.client.batch.configure(batch_size=100)
        with self.client.batch as batch:
            for i, d in enumerate(data):
                print(f"Importing bot: {i + 1}")
                properties = {
                    "bot_id": d["bot_id"],
                    "name": d["name"],
                    "description": d["description"],
                    "timestamp": d["timestamp"],
                    "chainIds": d["chainIds"]
                }
                print(f"Bot properties: {properties}")
                batch.add_data_object(properties, "FortaBot")

    def search_with_prompt(self, concepts, chainIds, limit=3):
        
        generative_prompt = "Explain how {description} answers 'concepts' in a single short paragraph in 3-5 sentences."
        
        if chainIds:
            where_filter  = {
                "path": ["chainIds"], 
                "operator": "ContainsAll", 
                "valueNumber": chainIds
            }
            
            response = (
                self.client.query
                .get("FortaBot", ['bot_id', "name", 'timestamp', 'chainIds', "_additional { certainty }"])
                .with_where(where_filter)
                .with_near_text({"concepts": concepts})
                .with_generate(single_prompt=generative_prompt)
                .with_limit(limit)
                .do()
            )

        else:
            response = (
                self.client.query
                .get("FortaBot", ['bot_id', "name", 'timestamp', 'chainIds', "_additional { certainty }"])
                .with_near_text({"concepts": concepts})
                .with_generate(single_prompt=generative_prompt)
                .with_limit(limit)
                .do()
            )
        
        response_json = json.dumps(response, indent=2)
        print(response_json)

        return response_json

