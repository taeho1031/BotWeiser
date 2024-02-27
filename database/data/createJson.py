import csv
import json
import os

def create_combined_json(csv_file, json_folder, output_file):
    combined_data = []

    with open(csv_file, 'r', encoding='utf-8-sig') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            bot_id = row['bot_id']
            json_file_path = os.path.join(json_folder, f'{bot_id}.json')

            if os.path.exists(json_file_path):
                with open(json_file_path, 'r') as json_file:
                    json_data = json.load(json_file)

                    combined_data.append({
                        "bot_id": bot_id,
                        "developer_id": json_data['manifest']['from'],
                        "name": json_data['manifest']['name'],
                        "description": json_data['manifest']['description'],
                        "timestamp": json_data['manifest']['timestamp'],
                        "chainIds": json_data['manifest']['chainIds']
                    })
            else:
                print(f"Skipping {bot_id} as no matching JSON file found.")

    with open(output_file, 'w') as output_json:
        json.dump(combined_data, output_json, indent=2)

if __name__ == "__main__":
    combined_bots_csv = 'data\combined_bots.csv'
    bots_date_chain_IDs_folder = 'data\bots_date_chain_IDs'
    output_json_file = 'data\jsonoutput.json'

    create_combined_json(combined_bots_csv, bots_date_chain_IDs_folder, output_json_file)
