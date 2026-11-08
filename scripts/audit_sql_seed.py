import re

with open('data/processed/d1_services_seed.sql', 'r', encoding='utf-8') as f:
    sql = f.read()

target_ids = [
    'bd-epassport-application-fee-guide',
    'bd-land-e-mutation-namjari-guide',
    'bd-nid-correction-reissue-guide',
    'bd-brta-driving-license-smartcard-guide',
    'bd-police-clearance-online-application-guide',
    'bd-birth-registration-bdris-guide',
    'bd-nbr-etin-tax-return-guide',
    'bd-trade-license-city-pourashava-guide'
]

print("=== DEEP GRANULAR AUDIT OF SEED DATA ===")
for tid in target_ids:
    # check service definition
    svc_match = re.search(rf"INSERT INTO services .*?VALUES\s*\('{tid}',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*(?:'[^']*'|NULL),\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)'", sql)
    
    fee_matches = re.findall(rf"INSERT INTO service_fees \(service_id, category_name, amount_bdt, vat_included, payment_method, remarks\)\s*VALUES \('{tid}',\s*'([^']*)',\s*([0-9.]+),\s*([0-9]+),\s*(?:'([^']*)'|NULL),\s*(?:'([^']*)'|NULL)\);", sql)
    
    doc_matches = re.findall(rf"INSERT INTO service_documents \(service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain\)\s*VALUES \('{tid}',\s*'([^']*)',\s*([0-9]+),\s*([0-9]+),\s*(?:'([^']*)'|NULL),\s*(?:'([^']*)'|NULL)\);", sql)
    
    step_matches = re.findall(rf"INSERT INTO service_steps \(service_id, step_number, title, description, responsible_actor, action_url\)\s*VALUES \('{tid}',\s*([0-9]+),\s*'([^']*)',\s*'([^']*)',\s*(?:'([^']*)'|NULL),\s*(?:'([^']*)'|NULL)\);", sql)
    
    print(f"\n{'='*70}")
    print(f"SERVICE ID: {tid}")
    if svc_match:
        print(f"Title: {svc_match.group(1)}")
        print(f"Category: {svc_match.group(3)}")
        print(f"Agency: {svc_match.group(4)}")
        print(f"SLA: {svc_match.group(6)}")
        print(f"Portal: {svc_match.group(7)}")
    else:
        print("Service header not matched via regex (or not in seed).")
        
    print(f"\nFEES ({len(fee_matches)} entries):")
    for f in fee_matches:
        print(f"  • {f[0]}: {f[1]} BDT [VAT included: {'Yes' if f[2]=='1' else 'No'}] (Remarks: {f[4]})")
        
    print(f"\nDOCUMENTS ({len(doc_matches)} entries):")
    for d in doc_matches:
        print(f"  • {d[0]} [Mandatory: {'Yes' if d[1]=='1' else 'No'}] - Format: {d[3]}")
        
    print(f"\nPROCEDURE STEPS ({len(step_matches)} steps):")
    for s in step_matches:
        print(f"  {s[0]}. {s[1]}: {s[2]}")
