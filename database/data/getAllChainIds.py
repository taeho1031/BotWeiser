import json

# Read data from the file
with open('weaviate/data/bots.json', 'r') as file:
    json_data = file.read()

# Parse JSON
data = json.loads(json_data)

# Extract chainIds
chain_ids = set(chain_id for item in data for chain_id in item["chainIds"])

# Convert to a list
chain_ids_list = list(chain_ids)

# Output the lists
print(chain_ids_list)
