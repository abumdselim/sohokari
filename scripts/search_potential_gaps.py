import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

queries = [
    'ফ্রিল্যান্সার', 'freelancer',
    'রেমিট্যান্স', 'remittance',
    'এনভিআর', 'nvr', 'no visa',
    'ট্রান্সক্রিপ্ট', 'transcript', 'জাতীয় বিশ্ববিদ্যালয়', 'national university',
    'ডুপ্লিকেট সনদ', 'duplicate', 'সার্টিফিকেট হারানো',
    'মৌজা ম্যাপ', 'mouza map',
    'ভূমি অধিগ্রহণ', 'la case', 'ক্ষতিপূরণ',
    'মিস কেস', 'miss case', 'নামজারি আপিল',
    'হলফনামা', 'affidavit', 'নোটারি', 'notary',
    'কৃষি কার্ড', 'krishi card',
    'প্রধানমন্ত্রী', 'ত্রাণ তহবিল', 'চিকিৎসা অনুদান',
    'ওয়ান স্টপ ক্রাইসিস', 'occ',
    'টিন বাতিল', 'tin cancel'
]

print("=== GAP ANALYSIS SEARCH IN 133 SERVICES ===")
for q in queries:
    matches = [s for s in services if q.lower() in s['title_bn'].lower() or q.lower() in s['service_id'].lower() or q.lower() in s['summary'].lower()]
    print(f"Query '{q}': {len(matches)} match(es)")
    for m in matches[:2]:
        print(f"   -> [{m['service_id']}] {m['title_bn']}")
