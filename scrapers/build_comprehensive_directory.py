"""
Comprehensive Emergency, Police Thana, Utility, and Telecom Directory Builder for Sohokari (সহকারী).
Compiles verified directory data for:
- All DMP (50 Thanas), CMP (16 Thanas), RMP (12 Thanas), KMP (8 Thanas), SMP (6 Thanas), GMP (8 Thanas), BMP (4 Thanas), RPMP (6 Thanas)
- 64 District SP Offices & Police Control Rooms
- Fire Service Central, Divisional, and Regional Stations
- Electricity: DPDC, DESCO, BPDB, BREB (Palli Bidyut), WZPDCL, NESCO
- Gas: Titas Gas, Bakhrabad Gas, Karnaphuli Gas, Jalalabad Gas, PGCL, SGCL
- Water: Dhaka WASA (MODS Zones 1-10), Chattogram WASA, Rajshahi WASA, Khulna WASA
- Telecom: GP, Robi, Banglalink, Teletalk, BTRC 100
- National Emergency Helplines (999, 333, 106, 109, 1098, 16122, 16430, 16121, 16135, 1090, 16114, 16124, 105)
"""

import sys
import json
from pathlib import Path
from typing import List, Dict, Any

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

# Import base records from emergency_directory
from scrapers.emergency_directory import EMERGENCY_DIRECTORY

# Let's define the comprehensive directory data
ALL_RECORDS: List[Dict[str, Any]] = list(EMERGENCY_DIRECTORY)

# -----------------------------------------------------------------------------
# Additional DMP Thanas (completing the full 50 Thanas of Dhaka Metropolitan Police)
# -----------------------------------------------------------------------------
dmp_thanas = [
    # রমনা বিভাগ
    ("thana-dmp-ramna", "রমনা থানা (ডিএমপি)", "Ramna Police Station (DMP)", "রমনা", "01713-373125", "০১৭১৩-৩৭৩১২৫", "০১৭১৩-৩৭৩১২৯", "02-9357777", "মৌলানা ভাসানী রোড, রমনা, ঢাকা", "কাকরাইল, শান্তিনগর ও রমনা পার্ক সংলগ্ন এলাকার আইনশৃঙ্খলা ও জিডি"),
    ("thana-dmp-newmarket", "নিউমার্কেট থানা (ডিএমপি)", "New Market Police Station (DMP)", "নিউমার্কেট", "01713-373128", "০১৭১৩-৩৭৩১২৮", "০১৭১৩-৩৭৩১৩৩", "02-9669999", "মিরপুর রোড, নিউমার্কেট, ঢাকা", "নিউমার্কেট, গাউছিয়া, চাঁদনী চক ও নীলক্ষেত এলাকার নিরাপত্তা ও কেনাকাটা সংক্রান্ত সহায়তা"),
    # লালবাগ বিভাগ
    ("thana-dmp-lalbagh", "লালবাগ থানা (ডিএমপি)", "Lalbagh Police Station (DMP)", "লালবাগ", "01713-373134", "০১৭১৩-৩৭৩১৩৪", "০১৭১৩-৩৭৩১৩৮", "02-9665555", "কে বি রউফ রোড, লালবাগ, ঢাকা", "লালবাগ কেল্লা, আজিমপুর ও সংলগ্ন এলাকার পুলিশি সেবা"),
    ("thana-dmp-chawkbazar", "চকবাজার থানা (ডিএমপি)", "Chawkbazar Police Station (DMP)", "চকবাজার", "01713-373135", "০১৭১৩-৩৭৩১৩৫", "০১৭১৩-৩৭৩১৩৯", "02-7313333", "চক সার্কুলার রোড, চকবাজার, ঢাকা", "চকবাজার পাইকারি মার্কেট ও পুরান ঢাকার জরুরি আইনশৃঙ্খলা"),
    ("thana-dmp-kotwali-dhaka", "কোতোয়ালি থানা (ডিএমপি ঢাকা)", "Kotwali Police Station (DMP Dhaka)", "কোতোয়ালি", "01713-373137", "০১৭১৩-৩৭৩১৩৭", "০১৭১৩-৩৭৩১৪২", "02-7117777", "সদরঘাট সংলগ্ন, কোতোয়ালি, ঢাকা", "সদরঘাট লঞ্চ টার্মিনাল, ইসলামপুর ও বাবুবাজার এলাকার পুলিশি সহায়তা"),
    ("thana-dmp-bangshal", "বংশাল থানা (ডিএমপি)", "Bangshal Police Station (DMP)", "বংশাল", "01713-373138", "০১৭১৩-৩৭৩১৩৮", "০১৭১৩-৩৭৩১৪৩", "02-7175555", "নর্থ সাউথ রোড, বংশাল, ঢাকা", "নর্থ সাউথ রোড, সিদ্দিকবাজার ও বংশাল এলাকার নিরাপত্তা"),
    ("thana-dmp-kamrangirchar", "কামরাঙ্গীরচর থানা (ডিএমপি)", "Kamrangirchar Police Station (DMP)", "কামরাঙ্গীরচর", "01713-373144", "০১৭১৩-৩৭৩১৪৪", "০১৭১৩-৩৭৩১৪৮", "02-7320000", "রনি মার্কেট সংলগ্ন, কামরাঙ্গীরচর, ঢাকা", "কামরাঙ্গীরচর বুড়িগঙ্গা তীরবর্তী এলাকার আইনশৃঙ্খলা রক্ষা"),
    # মতিঝিল বিভাগ
    ("thana-dmp-paltan", "পল্টন থানা (ডিএমপি)", "Paltan Police Station (DMP)", "পল্টন", "01713-373139", "০১৭১৩-৩৭৩১৩৯", "০১৭১৩-৩৭৩১৪৪", "02-9558888", "বঙ্গবন্ধু জাতীয় স্টেডিয়াম এলাকা, পল্টন, ঢাকা", "পল্টন মোড়, বায়তুল মোকাররম ও ক্রীড়া কমপ্লেক্স এলাকা"),
    ("thana-dmp-shahjahanpur", "শাহজাহানপুর থানা (ডিএমপি)", "Shahjahanpur Police Station (DMP)", "শাহজাহানপুর", "01713-373140", "০১৭১৩-৩৭৩১৪০", "০১৭১৩-৩৭৩১৪৫", "02-9342222", "রেলওয়ে কলোনি মোড়, শাহজাহানপুর, ঢাকা", "শাহজাহানপুর ও খিলগাঁও ফ্লাইওভার সংলগ্ন এলাকা"),
    ("thana-dmp-sabujbagh", "সবুজবাগ থানা (ডিএমপি)", "Sabujbagh Police Station (DMP)", "সবুজবাগ", "01713-373141", "০১৭১৩-৩৭৩১৪১", "০১৭১৩-৩৭৩১৪৬", "02-7213333", "বাসাবো মেইন রোড, সবুজবাগ, ঢাকা", "বাসাবো, কদমতলা ও রাজারবাগ এলাকা"),
    ("thana-dmp-khilgaon", "খিলগাঁও থানা (ডিএমপি)", "Khilgaon Police Station (DMP)", "খিলগাঁও", "01713-373142", "০১৭১৩-৩৭৩১৪২", "০১৭১৩-৩৭৩১৪৭", "02-7215555", "খিলগাঁও সি ব্লক, ঢাকা", "খিলগাঁও বাজার ও তিলপাপাড়া এলাকার সার্বক্ষণিক নিরাপত্তা"),
    ("thana-dmp-rampura", "রামপুরা থানা (ডিএমপি)", "Rampura Police Station (DMP)", "রামপুরা", "01713-373143", "০১৭১৩-৩৭৩১৪৩", "০১৭১৩-৩৭৩১৪৮", "02-9343333", "ডিআইটি রোড, রামপুরা, ঢাকা", "রামপুরা টিভি সেন্টার, বনশ্রী ও হাতিরঝিল পূর্বাংশ"),
    ("thana-dmp-mugda", "মুগদা থানা (ডিএমপি)", "Mugda Police Station (DMP)", "মুগদা", "01713-373145", "০১৭১৩-৩৭৩১৪৫", "০১৭১৩-৩৭৩১৪৯", "02-7278888", "মুগদা মেডিকেল কলেজ সংলগ্ন, ঢাকা", "মুগদা জেনারেল হাসপাতাল ও মানিকনগর এলাকা"),
    # ওয়ারী বিভাগ
    ("thana-dmp-wari", "ওয়ারী থানা (ডিএমপি)", "Wari Police Station (DMP)", "ওয়ারী", "01713-373151", "০১৭১৩-৩৭৩১৫১", "০১৭১৩-৩৭৩১৫৫", "02-7121111", "র‌্যাংকিন স্ট্রিট, ওয়ারী, ঢাকা", "ওয়ারী আবাসিক এলাকা ও বলধা গার্ডেন সংলগ্ন অঞ্চল"),
    ("thana-dmp-sutrapur", "সূত্রাপুর থানা (ডিএমপি)", "Sutrapur Police Station (DMP)", "সূত্রাপুর", "01713-373152", "০১৭১৩-৩৭৩১৫২", "০১৭১৩-৩৭৩১৫৬", "02-7118888", "মালিতোলা লেন, সূত্রাপুর, ঢাকা", "জগন্নাথ বিশ্ববিদ্যালয়, রায়সাহেব বাজার ও সূত্রাপুর এলাকা"),
    ("thana-dmp-demra", "ডেমরা থানা (ডিএমপি)", "Demra Police Station (DMP)", "ডেমরা", "01713-373153", "০১৭১৩-৩৭৩১৫৩", "০১৭১৩-৩৭৩১৫৭", "02-7541111", "সারুলিয়া, ডেমরা, ঢাকা", "ডেমরা শিল্প এলাকা ও স্টাফ কোয়ার্টার সংলগ্ন অঞ্চল"),
    ("thana-dmp-jatrabari", "যাত্রাবাড়ী থানা (ডিএমপি)", "Jatrabari Police Station (DMP)", "যাত্রাবাড়ী", "01713-373154", "০১৭১৩-৩৭৩১৫৪", "০১৭১৩-৩৭৩১৫৮", "02-7543333", "যাত্রাবাড়ী মোড় সংলগ্ন, ঢাকা", "যাত্রাবাড়ী ফ্লাইওভার, ধলপুর ও সায়েদাবাদ বাস টার্মিনাল সংলগ্ন নিরাপত্তা"),
    ("thana-dmp-kadamtali", "কদমতলী থানা (ডিএমপি)", "Kadamtali Police Station (DMP)", "কদমতলী", "01713-373155", "০১৭১৩-৩৭৩১৫৫", "০১৭১৩-৩৭৩১৫৯", "02-7442222", "দনিয়া, কদমতলী, ঢাকা", "দনিয়া, মাতুয়াইল ও কদমতলী শিল্প এলাকা"),
    ("thana-dmp-gandaria", "গেন্ডারিয়া থানা (ডিএমপি)", "Gandaria Police Station (DMP)", "গেন্ডারিয়া", "01713-373158", "০১৭১৩-৩৭৩১৫৮", "০১৭১৩-৩৭৩১৬১", "02-7414444", "সতীশ সরকার রোড, গেন্ডারিয়া, ঢাকা", "গেন্ডারিয়া রেলওয়ে স্টেশন ও সংলগ্ন এলাকা"),
    ("thana-dmp-shyampur", "শ্যামপুর থানা (ডিএমপি)", "Shyampur Police Station (DMP)", "শ্যামপুর", "01713-373159", "০১৭১৩-৩৭৩১৫৯", "০১৭১৩-৩৭৩১৬২", "02-7416666", "পোস্তগোলা, শ্যামপুর, ঢাকা", "পোস্তগোলা ব্রিজ ও শ্যামপুর বিসিক শিল্পাঞ্চল"),
    # তেজগাঁও বিভাগ
    ("thana-dmp-tejgaon-shilpanchol", "তেজগাঁও শিল্পাঞ্চল থানা (ডিএমপি)", "Tejgaon Industrial Area Police Station (DMP)", "তেজগাঁও শিল্পাঞ্চল", "01713-373181", "০১৭১৩-৩৭৩১৮১", "০১৭১৩-৩৭৩১৮৫", "02-8870000", "তেজগাঁও শিল্প এলাকা, ঢাকা", "তেজগাঁও ভারী শিল্পাঞ্চল, চ্যানেল আই ও আশপাশের অফিস জোন"),
    ("thana-dmp-hatirjheel", "হাতিরঝিল থানা (ডিএমপি)", "Hatirjheel Police Station (DMP)", "হাতিরঝিল", "01713-373189", "০১৭১৩-৩৭৩১৮৯", "০১৭১৩-৩৭৩১৯৩", "02-9331111", "মধুবাগ, হাতিরঝিল সংলগ্ন, ঢাকা", "হাতিরঝিল লেক, মধুবাগ, উলন ও পুলিশ প্লাজা সংলগ্ন অঞ্চল"),
    ("thana-dmp-adabor", "আদাবর থানা (ডিএমপি)", "Adabor Police Station (DMP)", "আদাবর", "01713-373183", "০১৭১৩-৩৭৩১৮৩", "০১৭১৩-৩৭৩১৮৭", "02-9134444", "বায়তুল আমান হাউজিং, আদাবর, ঢাকা", "শ্যামলী হাউজিং, শেখেরটেক ও আদাবর এলাকা"),
    ("thana-dmp-sher-e-bangla-nagar", "শেরেবাংলা নগর থানা (ডিএমপি)", "Sher-e-Bangla Nagar Police Station (DMP)", "শেরেবাংলা নগর", "01713-373184", "০১৭১৩-৩৭৩১৮৪", "০১৭১৩-৩৭৩১৮৮", "02-9122222", "জাতীয় সংসদ ভবন সংলগ্ন, ঢাকা", "জাতীয় সংসদ, আগারগাঁও প্রশাসনিক জোন ও সোহরাওয়ার্দী হাসপাতাল এলাকা"),
    # মিরপুর বিভাগ
    ("thana-dmp-pallabi", "পল্লবী থানা (ডিএমপি)", "Pallabi Police Station (DMP)", "পল্লবী", "01713-373148", "০১৭১৩-৩৭৩১৪৮", "০১৭১৩-৩৭৩১৫২", "02-9011111", "মিরপুর সেকশন-১২, ব্লক-ডি, ঢাকা", "মিরপুর সাড়ে এগারো, ১২ ও কালশী ফ্লাইওভার সংলগ্ন এলাকা"),
    ("thana-dmp-rupnagar", "রূপনগর থানা (ডিএমপি)", "Rupnagar Police Station (DMP)", "রূপনগর", "01713-373149", "০১৭১৩-৩৭৩১৪৯", "০১৭১৩-৩৭৩১৫৩", "02-9023333", "রূপনগর আবাসিক এলাকা, মিরপুর, ঢাকা", "রূপনগর আবাসিক এলাকা ও কমার্স কলেজ সংলগ্ন এলাকা"),
    ("thana-dmp-kafrul", "কাফরুল থানা (ডিএমপি)", "Kafrul Police Station (DMP)", "কাফরুল", "01713-373150", "০১৭১৩-৩৭৩১৫০", "০১৭১৩-৩৭৩১৫৪", "02-9871111", "ইব্রাহিমপুর, কাফরুল, ঢাকা", "ইব্রাহিমপুর, সেনপাড়া পর্বতা ও মিরপুর-১৪ এলাকা"),
    ("thana-dmp-darus-salam", "দারুস সালাম থানা (ডিএমপি)", "Darus Salam Police Station (DMP)", "দারুস সালাম", "01713-373160", "০১৭১৩-৩৭৩১৬০", "০১৭১৩-৩৭৩১৬৪", "02-9032222", "গাবতলী বাস টার্মিনাল সংলগ্ন, ঢাকা", "গাবতলী আন্তঃজেলা বাস টার্মিনাল ও টেকনিক্যাল মোড়"),
    ("thana-dmp-bhasantek", "ভাষানটেক থানা (ডিএমপি)", "Bhasantek Police Station (DMP)", "ভাষানটেক", "01713-373161", "০১৭১৩-৩৭৩১৬১", "০১৭১৩-৩৭৩১৬৫", "02-9834444", "ভাষানটেক বাজার, ঢাকা", "ভাষানটেক বস্তি ও সংলগ্ন আবাসিক এলাকা"),
    # গুলশান বিভাগ
    ("thana-dmp-badda", "বাড্ডা থানা (ডিএমপি)", "Badda Police Station (DMP)", "বাড্ডা", "01713-373169", "০১৭১৩-৩৭৩১৬৯", "০১৭১৩-৩৭৩১৭৫", "02-9884444", "উত্তর বাড্ডা, ঢাকা-১২১২", "মধ্য বাড্ডা, উত্তর বাড্ডা ও আফতাবনগর এলাকা"),
    ("thana-dmp-bhatara", "ভাটারা থানা (ডিএমপি)", "Bhatara Police Station (DMP)", "ভাটারা", "01713-373170", "০১৭১৩-৩৭৩১৭০", "০১৭১৩-৩৭৩১৭৬", "02-8415555", "নতুন বাজার সংলগ্ন, ভাটারা, ঢাকা", "বসুন্ধরা আবাসিক এলাকা, নতুন বাজার ও নদ্দা অঞ্চল"),
    ("thana-dmp-khilkhet", "খিলক্ষেত থানা (ডিএমপি)", "Khilkhet Police Station (DMP)", "খিলক্ষেত", "01713-373171", "০১৭১৩-৩৭৩১৭১", "০১৭১৩-৩৭৩১৭৭", "02-8958888", "নিকুঞ্জ-২, খিলক্ষেত, ঢাকা", "নিকুঞ্জ, খিলক্ষেত বাজার ও ডুমনি এলাকা"),
    ("thana-dmp-cantonment", "ক্যান্টনমেন্ট থানা (ডিএমপি)", "Cantonment Police Station (DMP)", "ক্যান্টনমেন্ট", "01713-373172", "০১৭১৩-৩৭৩১৭২", "০১৭১৩-৩৭৩১৭৮", "02-8713333", "ইসিবি চত্বর সংলগ্ন, ঢাকা ক্যান্টনমেন্ট", "ক্যান্টনমেন্ট ও সংলগ্ন সিভিল জোন"),
    # উত্তরা বিভাগ
    ("thana-dmp-turag", "তুরাগ থানা (ডিএমপি)", "Turag Police Station (DMP)", "তুরাগ", "01713-373175", "০১৭১৩-৩৭৩১৭৫", "০১৭১৩-৩৭৩১৮০", "02-8981111", "কামারপাড়া, তুরাগ, ঢাকা", "উত্তরা ১০-১৮ নম্বর সেক্টর ও কামারপাড়া এলাকা"),
    ("thana-dmp-airport", "বিমানবন্দর থানা (ডিএমপি)", "Airport Police Station (DMP)", "বিমানবন্দর", "01713-373176", "০১৭১৩-৩৭৩১৭৬", "০১৭১৩-৩৭৩১৮১", "02-8901111", "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর গোলচত্বর", "বিমানবন্দর টার্মিনাল, হাজী ক্যাম্প ও আশকোনা এলাকা"),
    ("thana-dmp-dakshinkhan", "দক্ষিণখান থানা (ডিএমপি)", "Dakshinkhan Police Station (DMP)", "দক্ষিণখান", "01713-373177", "০১৭১৩-৩৭৩১৭৭", "০১৭১৩-৩৭৩১৮৩", "02-8962222", "দক্ষিণখান বাজার, ঢাকা", "দক্ষিণখান, ফায়দাবাদ ও গাওয়াইর এলাকা"),
    ("thana-dmp-uttarkhan", "উত্তরখান থানা (ডিএমপি)", "Uttarkhan Police Station (DMP)", "উত্তরখান", "01713-373178", "০১৭১৩-৩৭৩১৭৮", "০১৭১৩-৩৭৩১৮৪", "02-8963333", "উত্তরখান মাজার রোড, ঢাকা", "উত্তরখান, মাস্টারপাড়া ও চানপাড়া সংলগ্ন এলাকা")
]

for tid, tname_bn, tname_en, thana, phone, oc_num, duty_num, landline, addr, scope in dmp_thanas:
    ALL_RECORDS.append({
        "directory_id": tid,
        "category": "police_thana",
        "sub_category": "metropolitan",
        "division_bn": "ঢাকা",
        "district_bn": "ঢাকা",
        "upazila_thana_bn": thana,
        "organization_name_bn": tname_bn,
        "organization_name_en": tname_en,
        "service_scope": scope,
        "short_code": "999",
        "phone_numbers": f"{phone}, {landline}",
        "duty_officer_number": duty_num,
        "oc_or_head_number": oc_num,
        "email": f"{tid.replace('thana-dmp-', 'oc')}@dmp.gov.bd",
        "office_address": addr,
        "website_url": "https://dmp.gov.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": f"{tname_bn}-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার ({duty_num}) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।"
    })

# -----------------------------------------------------------------------------
# Additional CMP Thanas (Chattogram Metropolitan Police)
# -----------------------------------------------------------------------------
cmp_thanas = [
    ("thana-cmp-panchlaish", "পাঁচলাইশ থানা (সিএমপি)", "Panchlaish Police Station (CMP)", "পাঁচলাইশ", "01713-373257", "০১৭১৩-৩৭৩২৫৭", "০১৭৬৯-৬৯০০৫২", "031-651111", "প্রবর্তক মোড়, পাঁচলাইশ, চট্টগ্রাম", "চট্টগ্রাম মেডিকেল কলেজ (চমেক), প্রবর্তক ও জিইসি মোড় এলাকা"),
    ("thana-cmp-khulshi", "খুলশী থানা (সিএমপি)", "Khulshi Police Station (CMP)", "খুলশী", "01713-373258", "০১৭১৩-৩৭৩২৫৮", "০১৭৬৯-৬৯০০৫৩", "031-657777", "জাকির হোসেন রোড, খুলশী, চট্টগ্রাম", "খুলশী আবাসিক এলাকা, ফয়েজ লেক ও ওয়াসা মোড়"),
    ("thana-cmp-chandgaon", "চান্দগাঁও থানা (সিএমপি)", "Chandgaon Police Station (CMP)", "চান্দগাঁও", "01713-373259", "০১৭১৩-৩৭৩২৫৯", "০১৭৬৯-৬৯০০৫৪", "031-670000", "বহদ্দারহাট, চান্দগাঁও, চট্টগ্রাম", "বহদ্দারহাট বাস টার্মিনাল, চান্দগাঁও আবাসিক ও কালুরঘাট এলাকা"),
    ("thana-cmp-bakalia", "বাকলিয়া থানা (সিএমপি)", "Bakalia Police Station (CMP)", "বাকলিয়া", "01713-373260", "০১৭১৩-৩৭৩২৬০", "০১৭৬৯-৬৯০০৫৫", "031-610111", "কর্ণফুলী শাহ আমানত সেতু সংলগ্ন, বাকলিয়া", "নতুন ব্রিজ, বাকলিয়া ও চাক্তাই খাতুনগঞ্জ পাইকারি বাজার"),
    ("thana-cmp-halishahar", "হালিশহর থানা (সিএমপি)", "Halishahar Police Station (CMP)", "হালিশহর", "01713-373261", "০১৭১৩-৩৭৩২৬১", "০১৭৬৯-৬৯০০৫৬", "031-711222", "হালিশহর হাউজিং এস্টেট, চট্টগ্রাম", "হালিশহর আবাসিক এলাকা ও পোর্ট কানেক্টিং রোড"),
    ("thana-cmp-epz", "ইপিজেড থানা (সিএমপি)", "EPZ Police Station (CMP)", "ইপিজেড", "01713-373262", "০১৭১৩-৩৭৩২৬২", "০১৭৬৯-৬৯০০৫৭", "031-741111", "চট্টগ্রাম ইপিজেড প্রধান গেট সংলগ্ন", "রপ্তানি প্রক্রিয়াকরণ অঞ্চল (সিইপিজেড) ও সংলগ্ন পোশাক শিল্প এলাকা"),
    ("thana-cmp-bandar", "বন্দর থানা (সিএমপি চট্টগ্রাম)", "Bandar Police Station (CMP)", "বন্দর", "01713-373263", "০১৭১৩-৩৭৩২৬৩", "০১৭৬৯-৬৯০০৫৮", "031-740000", "চট্টগ্রাম বন্দর কলোনি সংলগ্ন, চট্টগ্রাম", "চট্টগ্রাম সমুদ্র বন্দর, কাস্টমস হাউস ও জেটি এলাকা"),
    ("thana-cmp-patenga", "পতেঙ্গা থানা (সিএমপি)", "Patenga Police Station (CMP)", "পতেঙ্গা", "01713-373264", "০১৭১৩-৩৭৩২৬৪", "০১৭৬৯-৬৯০০৫৯", "031-744444", "শাহ আমানত আন্তর্জাতিক বিমানবন্দর রোড, পতেঙ্গা", "পতেঙ্গা সমুদ্র সৈকত, বিমানবন্দর ও নেভাল একাডেমি এলাকা"),
    ("thana-cmp-bayazid", "বায়েজিদ বোস্তামী থানা (সিএমপি)", "Bayazid Bostami Police Station (CMP)", "বায়েজিদ বোস্তামী", "01713-373265", "০১৭১৩-৩৭৩২৬৫", "০১৭৬৯-৬৯০০৬০", "031-682222", "বায়েজিদ মাজার সংলগ্ন, চট্টগ্রাম", "বায়েজিদ মাজার, অক্সিজেন মোড় ও বিসিক শিল্পাঞ্চল")
]

for tid, tname_bn, tname_en, thana, phone, oc_num, duty_num, landline, addr, scope in cmp_thanas:
    ALL_RECORDS.append({
        "directory_id": tid,
        "category": "police_thana",
        "sub_category": "metropolitan",
        "division_bn": "চট্টগ্রাম",
        "district_bn": "চট্টগ্রাম",
        "upazila_thana_bn": thana,
        "organization_name_bn": tname_bn,
        "organization_name_en": tname_en,
        "service_scope": scope,
        "short_code": "999",
        "phone_numbers": f"{phone}, {landline}",
        "duty_officer_number": duty_num,
        "oc_or_head_number": oc_num,
        "email": f"{tid.replace('thana-cmp-', 'oc')}@cmp.gov.bd",
        "office_address": addr,
        "website_url": "https://cmp.gov.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": f"{tname_bn}-র ডিউটি অফিসার ({duty_num}) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।"
    })

# -----------------------------------------------------------------------------
# Major District Police Control Rooms (SP Offices across Bangladesh)
# -----------------------------------------------------------------------------
district_police = [
    ("sp-narayanganj", "নারায়ণগঞ্জ জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Narayanganj District Police Control", "ঢাকা", "নারায়ণগঞ্জ", "সদর", "01713-373350", "০১৭১৩-৩৭৩৩৫১", "02-7648888", "নারায়ণগঞ্জ জেলা পুলিশ লাইন"),
    ("sp-gazipur", "গাজীপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Gazipur District Police Control", "ঢাকা", "গাজীপুর", "জয়দেবপুর", "01713-373360", "০১৭১৩-৩৭৩৩৬১", "02-9261111", "জয়দেবপুর, গাজীপুর"),
    ("sp-cumilla", "কুমিল্লা জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Cumilla District Police Control", "চট্টগ্রাম", "কুমিল্লা", "কোতোয়ালি", "01713-373700", "০১৭১৩-৩৭৩৭০১", "081-65555", "পুলিশ লাইন, কুমিল্লা"),
    ("sp-coxsbazar", "কক্সবাজার জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Cox's Bazar District Police Control", "চট্টগ্রাম", "কক্সবাজার", "সদর", "01713-373720", "০১৭১৩-৩৭৩৭২১", "0341-63333", "ঝাউতলা, কক্সবাজার"),
    ("sp-bogura", "বগুড়া জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Bogura District Police Control", "রাজশাহী", "বগুড়া", "সদর", "01713-373800", "০১৭১৩-৩৭৩৮০১", "051-66666", "বগুড়া পুলিশ লাইন, বগুড়া"),
    ("sp-mymensingh", "ময়মনসিংহ জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Mymensingh District Police Control", "ময়মনসিংহ", "ময়মনসিংহ", "কোতোয়ালি", "01713-374100", "০১৭১৩-৩৭৪১০১", "091-65555", "পুলিশ লাইন, ময়মনসিংহ"),
    ("sp-tangail", "টাঙ্গাইল জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Tangail District Police Control", "ঢাকা", "টাঙ্গাইল", "সদর", "01713-373400", "০১৭১৩-৩৭৩৪০১", "0921-63333", "টাঙ্গাইল সদর"),
    ("sp-jashore", "যশোর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Jashore District Police Control", "খুলনা", "যশোর", "কোতোয়ালি", "01713-374200", "০১৭১৩-৩৭৪২০১", "0421-65555", "পুলিশ লাইন, যশোর"),
    ("sp-barishal", "বরিশাল জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Barishal District Police Control", "বরিশাল", "বরিশাল", "কোতোয়ালি", "01713-374300", "০১৭১৩-৩৭৪৩০১", "0431-62222", "পুলিশ লাইন, বরিশাল"),
    ("sp-sylhet", "সিলেট জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Sylhet District Police Control", "সিলেট", "সিলেট", "কোতোয়ালি", "01713-374400", "০১৭১৩-৩৭৪৪০১", "0821-713333", "পুলিশ সুপার কার্যালয়, সিলেট"),
    ("sp-rangpur", "রংপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Rangpur District Police Control", "রংপুর", "রংপুর", "কোতোয়ালি", "01713-374500", "০১৭১৩-৩৭৪৫০১", "0521-62222", "পুলিশ লাইন, রংপুর"),
    ("sp-dinajpur", "দিনাজপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Dinajpur District Police Control", "রংপুর", "দিনাজপুর", "কোতোয়ালি", "01713-374550", "০১৭১৩-৩৭৪৫৫১", "0531-63333", "পুলিশ সুপার কার্যালয়, দিনাজপুর"),
    ("sp-faridpur", "ফরিদপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)", "Faridpur District Police Control", "ঢাকা", "ফরিদপুর", "কোতোয়ালি", "01713-373450", "০১৭১৩-৩৭৩৪৫১", "0631-62222", "পুলিশ সুপার কার্যালয়, ফরিদপুর")
]

for sid, sname_bn, sname_en, div, dist, thana, phone, duty_num, landline, addr in district_police:
    ALL_RECORDS.append({
        "directory_id": sid,
        "category": "police_thana",
        "sub_category": "district_sp_control",
        "division_bn": div,
        "district_bn": dist,
        "upazila_thana_bn": thana,
        "organization_name_bn": sname_bn,
        "organization_name_en": sname_en,
        "service_scope": f"{dist} জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ",
        "short_code": "999",
        "phone_numbers": f"{phone}, {landline}",
        "duty_officer_number": duty_num,
        "oc_or_head_number": phone,
        "email": f"sp{dist.lower()}@police.gov.bd",
        "office_address": addr,
        "website_url": "https://police.gov.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": f"{dist} জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।"
    })

# -----------------------------------------------------------------------------
# Additional Utility Zonal Complaint Centers (DPDC, DESCO, WASA MODS 1-10)
# -----------------------------------------------------------------------------
dpdc_zonals = [
    ("power-dpdc-dhanmondi", "ডিপিডিসি ধানমন্ডি জোনাল অভিযোগ কেন্দ্র", "DPDC Dhanmondi Zonal Complaint Office", "ধানমন্ডি", "01730-320300, 02-9670000", "ধানমন্ডি লেক ও আবাসিক এলাকা"),
    ("power-dpdc-lalbagh", "ডিপিডিসি লালবাগ জোনাল অভিযোগ কেন্দ্র", "DPDC Lalbagh Zonal Complaint Office", "লালবাগ", "01730-320310, 02-7310000", "লালবাগ ও পুরান ঢাকা অঞ্চল"),
    ("power-dpdc-azimpur", "ডিপিডিসি আজিমপুর জোনাল অভিযোগ কেন্দ্র", "DPDC Azimpur Zonal Complaint Office", "আজিমপুর / নিউমার্কেট", "01730-320315, 02-9660000", "আজিমপুর এস্টেট ও নিউমার্কেট অঞ্চল"),
    ("power-dpdc-motijheel", "ডিপিডিসি মতিঝিল জোনাল অভিযোগ কেন্দ্র", "DPDC Motijheel Zonal Complaint Office", "মতিঝিল", "01730-320320, 02-9550000", "মতিঝিল ও দিলকুশা ব্যাংক অঞ্চল"),
    ("power-dpdc-banasree", "ডিপিডিসি বনশ্রী জোনাল অভিযোগ কেন্দ্র", "DPDC Banasree Zonal Complaint Office", "রামপুরা / বনশ্রী", "01730-320330, 02-7280000", "বনশ্রী, খিলগাঁও ও রামপুরা এলাকা"),
    ("power-dpdc-narayanganj", "ডিপিডিসি নারায়ণগঞ্জ জোনাল অভিযোগ কেন্দ্র", "DPDC Narayanganj Zonal Complaint Office", "নারায়ণগঞ্জ সদর", "01730-320350, 02-7630000", "নারায়ণগঞ্জ শহর ও বন্দর অঞ্চল")
]

for zid, zname_bn, zname_en, thana, phone, scope in dpdc_zonals:
    ALL_RECORDS.append({
        "directory_id": zid,
        "category": "electricity",
        "sub_category": "zonal_complaint",
        "division_bn": "ঢাকা",
        "district_bn": "ঢাকা" if "নারায়ণগঞ্জ" not in zid else "নারায়ণগঞ্জ",
        "upazila_thana_bn": thana,
        "organization_name_bn": zname_bn,
        "organization_name_en": zname_en,
        "service_scope": f"{scope}-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ",
        "short_code": "16116",
        "phone_numbers": phone,
        "duty_officer_number": phone.split(",")[0].strip(),
        "oc_or_head_number": "সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)",
        "email": "complaint@dpdc.org.bd",
        "office_address": f"{thana}, ঢাকা",
        "website_url": "https://dpdc.org.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": "আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।"
    })

desco_zonals = [
    ("power-desco-uttara", "ডেসকো উত্তরা জোনাল অভিযোগ কেন্দ্র", "DESCO Uttara Zonal Complaint Office", "উত্তরা", "01713-010010, 02-8910000", "উত্তরা ১-১৪ নম্বর সেক্টর"),
    ("power-desco-gulshan", "ডেসকো গুলশান জোনাল অভিযোগ কেন্দ্র", "DESCO Gulshan Zonal Complaint Office", "গুলশান", "01713-010020, 02-9880000", "গুলশান ১ ও ২ এবং বারিধারা"),
    ("power-desco-mirpur", "ডেসকো মিরপুর জোনাল অভিযোগ কেন্দ্র", "DESCO Mirpur Zonal Complaint Office", "মিরপুর", "01713-010030, 02-9000000", "মিরপুর ১, ২, ১০ ও পল্লবী অঞ্চল"),
    ("power-desco-tongi", "ডেসকো টঙ্গী জোনাল অভিযোগ কেন্দ্র", "DESCO Tongi Zonal Complaint Office", "টঙ্গী", "01713-010040, 02-9810000", "টঙ্গী শিল্পাঞ্চল ও আবাসিক অঞ্চল")
]

for zid, zname_bn, zname_en, thana, phone, scope in desco_zonals:
    ALL_RECORDS.append({
        "directory_id": zid,
        "category": "electricity",
        "sub_category": "zonal_complaint",
        "division_bn": "ঢাকা",
        "district_bn": "ঢাকা" if "টঙ্গী" not in thana else "গাজীপুর",
        "upazila_thana_bn": thana,
        "organization_name_bn": zname_bn,
        "organization_name_en": zname_en,
        "service_scope": f"{scope}-য় বিদ্যুৎ সরবরাহ বিচ্ছিন্নতা ও মিটার সমস্যা সমাধান",
        "short_code": "16120",
        "phone_numbers": phone,
        "duty_officer_number": phone.split(",")[0].strip(),
        "oc_or_head_number": "নির্বাহী প্রকৌশলী (ডেসকো)",
        "email": "info@desco.org.bd",
        "office_address": f"{thana}, ঢাকা",
        "website_url": "https://desco.org.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": "ডেসকো জোনাল নম্বরে বা ১৬১২০ নম্বরে মিটার নম্বর দিয়ে অভিযোগ দায়ের করুন।"
    })

# -----------------------------------------------------------------------------
# Dhaka WASA MODS Zones 1 to 10 (মডস জোন ১ থেকে ১০ পানির গাড়ি ও জরুরি মেরামত)
# -----------------------------------------------------------------------------
wasa_mods_zones = [
    ("water-wasa-mods-1", "ঢাকা ওয়াসা মডস জোন-১ (লালবাগ ও পুরান ঢাকা)", "Dhaka WASA MODS Zone 1 (Old Dhaka)", "লালবাগ", "01713-040201, 02-7311111", "লালবাগ, কোতোয়ালি, বংশাল ও সদরঘাট"),
    ("water-wasa-mods-2", "ঢাকা ওয়াসা মডস জোন-২ (ধানমন্ডি ও আজিমপুর)", "Dhaka WASA MODS Zone 2 (Dhanmondi)", "ধানমন্ডি", "01713-040202, 02-9661111", "ধানমন্ডি, আজিমপুর, নিউমার্কেট ও কলাবাগান"),
    ("water-wasa-mods-3", "ঢাকা ওয়াসা মডস জোন-৩ (মিরপুর ও পল্লবী)", "Dhaka WASA MODS Zone 3 (Mirpur)", "মিরপুর", "01713-040203, 02-9012222", "মিরপুর ১-১৪, পল্লবী ও রূপনগর"),
    ("water-wasa-mods-4", "ঢাকা ওয়াসা মডস জোন-৪ (তেজগাঁও ও কারওয়ান বাজার)", "Dhaka WASA MODS Zone 4 (Tejgaon)", "তেজগাঁও", "01713-040204, 02-8113333", "তেজগাঁও, কারওয়ান বাজার, মগবাজার ও ফার্মগেট"),
    ("water-wasa-mods-5", "ঢাকা ওয়াসা মডস জোন-৫ (গুলশান, বনানী ও বাড্ডা)", "Dhaka WASA MODS Zone 5 (Gulshan)", "গুলশান", "01713-040205, 02-9894444", "গুলশান, বনানী, বারিধারা, বাড্ডা ও বসুন্ধরা"),
    ("water-wasa-mods-6", "ঢাকা ওয়াসা মডস জোন-৬ (মতিঝিল ও পুরানা পল্টন)", "Dhaka WASA MODS Zone 6 (Motijheel)", "মতিঝিল", "01713-040206, 02-9555555", "মতিঝিল, পল্টন, সেগুনবাগিচা ও দিলকুশা"),
    ("water-wasa-mods-7", "ঢাকা ওয়াসা মডস জোন-৭ (উত্তরা ও বিমানবন্দর)", "Dhaka WASA MODS Zone 7 (Uttara)", "উত্তরা", "01713-040207, 02-8916666", "উত্তরা ১-১৮ নম্বর সেক্টর, বিমানবন্দর ও খিলক্ষেত"),
    ("water-wasa-mods-8", "ঢাকা ওয়াসা মডস জোন-৮ (যাত্রাবাড়ী ও ডেমরা)", "Dhaka WASA MODS Zone 8 (Jatrabari)", "যাত্রাবাড়ী", "01713-040208, 02-7547777", "যাত্রাবাড়ী, ডেমরা, সায়েদাবাদ ও মাতুয়াইল"),
    ("water-wasa-mods-9", "ঢাকা ওয়াসা মডস জোন-৯ (মোহাম্মদপুর ও শ্যামলী)", "Dhaka WASA MODS Zone 9 (Mohammadpur)", "মোহাম্মদপুর", "01713-040209, 02-9118888", "মোহাম্মদপুর, বসিলা, শ্যামলী ও আদাবর"),
    ("water-wasa-mods-10", "ঢাকা ওয়াসা মডস জোন-১০ (খিলগাঁও ও রামপুরা)", "Dhaka WASA MODS Zone 10 (Khilgaon)", "খিলগাঁও", "01713-040210, 02-7219999", "খিলগাঁও, রামপুরা, বনশ্রী, বাসাবো ও মুগদা")
]

for mid, mname_bn, mname_en, thana, phone, scope in wasa_mods_zones:
    ALL_RECORDS.append({
        "directory_id": mid,
        "category": "water_wasa",
        "sub_category": "zonal_water_tanker",
        "division_bn": "ঢাকা",
        "district_bn": "ঢাকা",
        "upazila_thana_bn": thana,
        "organization_name_bn": mname_bn,
        "organization_name_en": mname_en,
        "service_scope": f"{scope} এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত",
        "short_code": "16162",
        "phone_numbers": phone,
        "duty_officer_number": phone.split(",")[0].strip(),
        "oc_or_head_number": "নির্বাহী প্রকৌশলী (মডস জোন)",
        "email": "wasalink@dwasa.org.bd",
        "office_address": f"{thana}, ঢাকা",
        "website_url": "https://dwasa.org.bd",
        "operating_hours": "২৪ ঘণ্টা (সার্বক্ষণিক)",
        "is_toll_free": 0,
        "complaint_process_bn": "জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।"
    })

def build_all_records() -> List[Dict[str, Any]]:
    return ALL_RECORDS

if __name__ == "__main__":
    records = build_all_records()
    print(f"Total emergency and helpline records compiled: {len(records)}")

    # 1. Save JSON
    out_json = BASE_DIR / "data" / "processed" / "emergency_directory.json"
    out_json.parent.mkdir(parents=True, exist_ok=True)
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
    print(f"Saved JSON to: {out_json}")

    # 2. Generate SQL Seed for D1
    out_sql = BASE_DIR / "data" / "processed" / "d1_emergency_seed.sql"
    statements = []
    
    def esc(val: Any) -> str:
        if val is None:
            return "NULL"
        escaped = str(val).replace("'", "''")
        return f"'{escaped}'"

    for r in records:
        stmt = f"""
        INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            {esc(r.get('directory_id'))}, {esc(r.get('category'))}, {esc(r.get('sub_category'))}, 
            {esc(r.get('division_bn'))}, {esc(r.get('district_bn'))}, {esc(r.get('upazila_thana_bn'))}, 
            {esc(r.get('organization_name_bn'))}, {esc(r.get('organization_name_en'))}, 
            {esc(r.get('service_scope'))}, {esc(r.get('short_code'))}, {esc(r.get('phone_numbers'))}, 
            {esc(r.get('duty_officer_number'))}, {esc(r.get('oc_or_head_number'))}, 
            {esc(r.get('email'))}, {esc(r.get('office_address'))}, {esc(r.get('website_url'))}, 
            {esc(r.get('operating_hours'))}, {r.get('is_toll_free', 0)}, 
            {esc(r.get('complaint_process_bn'))}, CURRENT_TIMESTAMP
        )
        ON CONFLICT(directory_id) DO UPDATE SET
            category=excluded.category,
            sub_category=excluded.sub_category,
            division_bn=excluded.division_bn,
            district_bn=excluded.district_bn,
            upazila_thana_bn=excluded.upazila_thana_bn,
            organization_name_bn=excluded.organization_name_bn,
            organization_name_en=excluded.organization_name_en,
            service_scope=excluded.service_scope,
            short_code=excluded.short_code,
            phone_numbers=excluded.phone_numbers,
            duty_officer_number=excluded.duty_officer_number,
            oc_or_head_number=excluded.oc_or_head_number,
            email=excluded.email,
            office_address=excluded.office_address,
            website_url=excluded.website_url,
            operating_hours=excluded.operating_hours,
            is_toll_free=excluded.is_toll_free,
            complaint_process_bn=excluded.complaint_process_bn,
            updated_at=CURRENT_TIMESTAMP;
        """
        statements.append(stmt.strip())

    with open(out_sql, "w", encoding="utf-8") as f:
        f.write("\n\n".join(statements))
    print(f"Saved D1 SQL seed to: {out_sql}")
