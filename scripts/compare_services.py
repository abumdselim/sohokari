import json
import os

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    all_json_services = json.load(f)

# Existing files in src/data/services/
existing_files = os.listdir('src/data/services')
print(f"Total services in citizen_services.json: {len(all_json_services)}")
print(f"Total service files in src/data/services/: {len(existing_files)}")

# Read all IDs in src/data/index.ts
with open('src/data/index.ts', 'r', encoding='utf-8') as f:
    index_content = f.read()

print(f"index.ts size: {len(index_content)} bytes")
