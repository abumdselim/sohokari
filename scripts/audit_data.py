import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

print(f"Total services in catalog: {len(services)}")

target_keys = [
    'bd-brta-driving-license-smartcard-guide',
    'bd-birth-registration-bdris-guide',
    'bd-police-clearance-online-application-guide',
    'bd-trade-license-city-pourashava-guide',
    'bd-nbr-etin-tax-return-guide',
    'bd-nid-correction-reissue-guide',
    'bd-epassport-application-fee-guide',
    'bd-land-e-mutation-namjari-guide'
]

found = {s['service_id']: s for s in services}

for tk in target_keys:
    if tk in found:
        s = found[tk]
        print("="*60)
        print(f"ID: {s['service_id']}")
        print(f"Title: {s['title_bn']}")
        print(f"Agency: {s['department_agency']}")
        print(f"SLA: {s['processing_time_sla']}")
        print(f"Portal: {s['official_portal_url']}")
        print(f"Warning: {s['anti_broker_warning']}")
        print(f"Fees ({len(s.get('fees', []))}):")
        for fee in s.get('fees', []):
            print(f"  - {fee.get('category_name')}: {fee.get('amount_bdt')} BDT ({fee.get('remarks')})")
        print(f"Documents ({len(s.get('documents', []))}):")
        for doc in s.get('documents', []):
            print(f"  - {doc.get('document_name')} [{'Mandatory' if doc.get('is_mandatory') else 'Optional'}] ({doc.get('format_type')})")
        print(f"Steps ({len(s.get('steps', []))}):")
        for step in s.get('steps', []):
            print(f"  {step.get('step_number')}. {step.get('title')}: {step.get('description')[:80]}...")
    else:
        print(f"NOT FOUND: {tk}")
