import os
import re

existing_ids = {}
files = [f for f in os.listdir('src/data/services') if f.endswith('.ts')]
for f in files:
    with open(f'src/data/services/{f}', 'r', encoding='utf-8') as file:
        content = file.read()
        m = re.search(r"id:\s*'([^']+)'", content)
        if m:
            existing_ids[m.group(1)] = f
        else:
            print("No id found in", f)

print(f"Total mapped IDs: {len(existing_ids)}")
for k, v in existing_ids.items():
    print(f"  {k} -> {v}")
