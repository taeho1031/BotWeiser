from client import get_weaviate_client
import weaviate
import json
import os

class_obj = {
    "class": "FortaBot",
    "vectorizer": "text2vec-openai",
    "moduleConfig": {
        "text2vec-openai": {},
        "generative-openai": {}
    }
}

client = get_weaviate_client()

if client.schema.exists("FortaBot"):
    client.schema.delete_class("FortaBot")

client.schema.create_class(class_obj)

# Update the file path construction using os.path.join
file_path = os.path.join('database', 'data', 'bots.json')

with open(file_path, 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

client.batch.configure(batch_size=100)
with client.batch as batch:
    for i, d in enumerate(data):
        print(f"importing bot: {i+1}")
        properties = {
            "bot_id": d["bot_id"],
            "name": d["name"],
            "description": d["description"],
            "timestamp": d["timestamp"],
            "chainIds": d["chainIds"]
        }

        client.batch.add_data_object(
            properties,
            "FortaBot",
        )