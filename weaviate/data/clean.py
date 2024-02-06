import json
import os

# Get the current directory where the script is located
script_directory = os.path.dirname(os.path.realpath(__file__))

# Load the existing JSON data from the file
file_path = os.path.join(script_directory, 'test_data.json')
with open(file_path, 'r') as file:
    data = json.load(file)

# Function to remove newline characters and concatenate 'description' and 'summary'
def process_entry(entry):
    description = entry.get('description', '')
    summary = entry.get('summary', '')
    
    if description.lower() != "none":
        entry['description'] = description + summary
    else:
        entry['description'] = summary
    
    entry.pop('summary', None)

def process_entries(entries):
    for entry in entries:
        remove_newlines(entry)
        process_entry(entry)

# Function to remove newline characters from specified fields
def remove_newlines(obj):
    for key, value in obj.items():
        if isinstance(value, str):
            obj[key] = value.replace('\n', '')
        elif isinstance(value, dict):
            remove_newlines(value)
        elif isinstance(value, list):
            for item in value:
                remove_newlines(item)

# Process entries to remove newlines, concatenate 'description' and 'summary', and remove 'summary'
process_entries(data)

# Save the modified JSON data back to the file in the script's directory
with open(file_path, 'w') as file:
    json.dump(data, file, indent=2)

print('Newlines removed, description and summary concatenated, and modified JSON data saved in the same directory.')
