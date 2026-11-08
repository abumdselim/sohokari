import json
import re

def slugify(text):
    # Convert 'bd-epassport-application-fee-guide' to camelCase for variable name
    clean = re.sub(r'^bd-', '', text)
    clean = re.sub(r'-(guide|fee-scale|form-2|rates|breakdown|rules)$', '', clean)
    parts = clean.split('-')
    return parts[0] + ''.join(p.capitalize() for p in parts[1:])

def file_name_from_id(sid):
    clean = re.sub(r'^bd-', '', sid)
    clean = re.sub(r'-(guide|fee-scale|form-2|rates|breakdown|rules)$', '', clean)
    parts = clean.split('-')
    return parts[0] + ''.join(p.capitalize() for p in parts[1:])

print("Test slugify:", slugify('bd-land-eporcha-certified-copy-guide'))
print("Test slugify 2:", slugify('bd-bmet-smart-card-emigration-clearance'))
