import csv
import json

csv_file_path = 'test_summary.csv'

json_file_path = 'test_data.json'

# Read CSV and convert to JSON
data = []

with open(csv_file_path, 'r',encoding = 'utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        row.pop('_source.id', None)
        row.pop('_source.current.repository', None)
        data.append(row)
for item in data:
    item['bot_id'] = item.pop('_id', None)
    item['developer_id'] = item.pop('_source.current.developer', None)
    item['name'] = item.pop('_source.current.name', None)
    item['description'] = item.pop('_source.current.description', None)
    item['summary'] = item.pop('Summary', None)
    item['version'] = item.pop('_source.current.version', None)

    # Concatenate long_description with description
    description = item.pop('_source.current.description', None)
    long_description = item.pop('_source.current.long_description', None)
    
    # Concatenate long_description with description if description is not None
    if description is not None:
        item['description'] = f"{description} {long_description}".strip()
    else:
        item['description'] = long_description

# Write JSON
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file, indent=2)

print(f'Conversion complete. JSON file saved at: {json_file_path}')