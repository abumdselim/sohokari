import json

with open('data/processed/citizen_services.json', 'r', encoding='utf-8') as f:
    services = json.load(f)

services.sort(key=lambda s: (s.get('category', ''), s.get('title_bn', '')))

current_cat = None
for s in services:
    cat = s.get('category', 'অনির্দিষ্ট')
    if cat != current_cat:
        print(f"\n📁 【{cat}】 ({sum(1 for x in services if x.get('category') == cat)} টি সেবা)")
        current_cat = cat
    print(f"  • {s.get('title_bn')} (ID: {s.get('service_id')})")
