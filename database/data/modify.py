import json

def modify_json_order(filename):
    with open(filename, 'r') as file:
        data = json.load(file)

    for bot in data:
        bot['name'], bot['description'] = bot['description'], bot['name']

    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)

if __name__ == "__main__":
    modify_json_order(r'M:\FortaInfinity-BotWeiser\weaviate\data\bots.json')
