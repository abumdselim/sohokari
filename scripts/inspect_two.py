import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

for sid in ['bd-titas-gas-bill-correction-name-change', 'bd-biwta-river-ghat-passenger-toll-rates']:
    s = next((x for x in services if x['service_id'] == sid), None)
    if s:
        print(f"Service: {sid}")
        print("Keys:", list(s.keys()))
        print("Steps:", len(s.get('steps') or s.get('step_by_step_process') or []))
        print("Docs:", len(s.get('documents') or s.get('required_documents') or []))
