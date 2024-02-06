import os
import json

# Function to extract timestamp and chainIds from the bot JSON file
def extract_info_from_bot_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
        manifest = data.get('manifest', {})
        timestamp = manifest.get('timestamp', '')
        chain_ids = manifest.get('chainIds', [])
    return timestamp, chain_ids

# Function to update the test_data.json file
def update_test_data(bot_id, timestamp, chain_ids):
    file_path = r'weaviate\data\test_data.json'  # Use raw string literal

    if not os.path.exists(file_path):
        # Create an empty test_data.json file if it doesn't exist
        with open(file_path, 'w') as file:
            json.dump([], file)

    with open(file_path, 'r') as file:
        test_data = json.load(file)

    for entry in test_data:
        if entry['bot_id'] == bot_id:
            entry['timestamp'] = timestamp
            entry['chainIds'] = chain_ids

    with open(file_path, 'w') as file:
        json.dump(test_data, file, indent=2)

# Rest of the code remains unchanged


# Full path to the directory containing bot JSON files
bot_folder = r'M:\FortaInfinity-BotWeiser\weaviate\data\bots_date_chain_IDs'

# Iterate through each file in the folder
for filename in os.listdir(bot_folder):
    if filename.endswith('.json'):
        bot_id = filename[:-5]  # Extract bot_id from the filename
        bot_file_path = os.path.join(bot_folder, filename)

        # Extract timestamp and chainIds from the bot JSON file
        timestamp, chain_ids = extract_info_from_bot_file(bot_file_path)

        # Update the test_data.json file with the extracted information
        update_test_data(bot_id, timestamp, chain_ids)

print('Update completed.')
