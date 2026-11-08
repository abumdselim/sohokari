# সহকারী (Sohokari) - নাগরিক সেবা তথ্য ইঞ্জিন ও ডেটা পাইপলাইন

> **"সঠিক তথ্য জানুন, দালাল ও ভোগান্তি এড়িয়ে সরকারি সেবা গ্রহণ করুন।"**

**সহকারী (Sohokari)** হলো বাংলাদেশের নাগরিকদের জন্য একটি বিশেষায়িত ডিজিটাল তথ্য হাব। এর মূল লক্ষ্য হলো বিভিন্ন সরকারি সেবা গ্রহণে মধ্যস্বত্বভোগী (দালাল), ঘুষ ও হয়রানি বন্ধ করা—সঠিক সরকারি ফি, ধাপে ধাপে আবেদনের নিয়ম, প্রয়োজনীয় কাগজপত্র এবং অফিশিয়াল ওয়েবসাইটের তথ্য সরাসরি নাগরিকদের হাতের মুঠোয় পৌঁছে দেওয়া।

---

## 🏗️ সিস্টেম আর্কিটেকচার (System Architecture)

```
[বাংলাদেশ সরকারি পোর্টালসমূহ] (সেবাকুঞ্জ, মাইগভ, পাসপোর্ট, এনআইডি, বিআরটিএ, ভূমি)
                 │
                 ▼
[Zyte API / Anti-Bot Scraper Engine] (IP Ban Prevention & JS Rendering)
                 │
                 ▼
[Data Cleaning & Pydantic Validation] (schema/models.py)
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
[Cloudflare D1 (SQL)]   [Cloudflare Vectorize (AI Embeddings)]
- রিলেশনাল কুয়েরি       - বাংলা সিম্যান্টিক সার্চ (RAG)
- নির্দিষ্ট ফি ও ডকুমেন্টস   - প্রাকৃতিক ভাষার প্রশ্নোত্তর
       │                   │
       └─────────┬─────────┘
                 ▼
     [Cloudflare R2 Storage]
   (অফিশিয়াল আবেদন ফরম ও পিডিএফ)
```

---

## 📁 প্রজেক্ট ডিরেক্টরি পরিচিতি

```
d:\Sheyal\
├── .env                       # আপনার গোপন API কি ও কনফিগারেশন (Git-এ আপলোড হবে না)
├── .env.example               # টিম বা রিপোজিটরির জন্য নিরাপদ কনফিগারেশন টেমপ্লেট
├── .gitignore                 # .env, ক্যাশ এবং ডেটা ফাইল সুরক্ষিত রাখার রুলস
├── requirements.txt           # পাইথন লাইব্রেরি ও ডিপেনডেন্সি
├── main.py                    # প্রধান রানার স্ক্রিপ্ট
│
├── config/
│   └── settings.py            # Pydantic ভিত্তিক পরিবেশ ও সেটিংস লোডার
│
├── schema/
│   ├── models.py              # নাগরিক সেবা, ফি, ডকুমেন্টস ও স্টেপসের Pydantic মডেল
│   └── d1_schema.sql          # Cloudflare D1 (SQLite) ডাটাবেজ স্কিমা
│
├── scrapers/
│   ├── zyte_client.py         # Zyte API ইন্টিগ্রেশন (প্রক্সি, আনব্লকার ও ফলব্যাক)
│   ├── core_services.py       # শীর্ষ ১০টি উচ্চ-ঝুঁকিপূর্ণ নাগরিক সেবার অথেনটিক ডেটাসেট
│   └── sebakunjo_scraper.py   # সেবাকুঞ্জ (Citizen Charter) টেবিল পার্সার
│
├── storage/
│   ├── d1_manager.py          # Cloudflare D1 SQL জেনারেটর ও এক্সিকিউটার
│   └── r2_manager.py          # Cloudflare R2 ফর্ম ও অ্যাসেট আপলোডার
│
├── vectorize/
│   └── preparer.py            # Cloudflare Vectorize এর জন্য বাংলা সিম্যান্টিক চাঙ্ক প্রিপারার
│
└── runners/
    ├── orchestrator.py        # মূল পাইপলাইন কোঅর্ডিনেটর
    └── cloud_runner.py        # Deepnote / Camber Cloud এর জন্য শিডিউলড এক্সিকিউটর
```

---

## 🚀 কীভাবে চালাবেন (How to Run)

### ১. লোকাল এক্সিকিউশন
পাইপলাইনটি চালিয়ে D1 SQL এবং Vectorize চাঙ্ক তৈরি করতে:
```powershell
python main.py
```

### ২. ক্লাউড রানার (Deepnote / Camber / কন্টিনিউয়াস মোড)
নির্দিষ্ট সময় পরপর স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ডে চালাতে:
```powershell
python runners/cloud_runner.py
```

---

## ☁️ ক্লাউডফ্লেয়ারে ডেটা ডিপ্লয়মেন্ট (Cloudflare D1 & Vectorize)

### ১. Cloudflare D1 ডেটাবেজে স্কিমা ও ডেটা লোড করা
Wrangler CLI ব্যবহার করে আপনার D1 ডাটাবেজে এক ক্লিকেই সম্পূর্ণ ডেটা ইমপোর্ট করতে পারেন:
```bash
npx wrangler d1 execute <YOUR_D1_DATABASE_NAME> --file=data/processed/d1_services_seed.sql
```

### ২. Cloudflare Vectorize-এ এমবেডিং ইনডেক্স করা
`data/vectors/cloudflare_vectorize_chunks.json` ফাইলে তৈরি হওয়া চাঙ্কগুলো Cloudflare Workers AI (যেমন: `@cf/baai/bge-m3`) মডেলের মাধ্যমে এমবেড করে সরাসরি আপনার `sohokari-citizen-services` ভেক্টর ইনডেক্সে পুশ করতে পারবেন।

---

## 🛡️ ডেটা সুরক্ষার নিয়মাবলী
1. কখনোই `.env` ফাইল গিটহাব বা পাবলিক জায়গায় পুশ করবেন না।
2. `.gitignore` স্বয়ংক্রিয়ভাবে কনফিগার করা আছে যাতে আপনার Zyte, Deepnote, GitHub PAT সুরক্ষিত থাকে।
