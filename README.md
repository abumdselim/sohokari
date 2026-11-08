# Kaaz AI (কাজ এআই) - Bangladesh Citizen Services AI Guide & Data Pipeline

> **Brand:** `Kaaz AI (কাজ এআই)` [formerly Sohokari]  
> **Mission:** "সঠিক তথ্য জানুন, দালাল ও ভোগান্তি এড়িয়ে সরকারি সেবা গ্রহণ করুন।"  
> **Architecture:** Cloudflare Workers (Edge Engine + Static PWA) + D1 Database + Vectorize (Semantic Search) + R2 Storage  
> **Pipeline:** Python Data Scraping Engine (Zyte API + Anti-Bot Bypassing) + Cloud Runners (Deepnote / Camber Cloud)

---

## 🤝 Overview
**Kaaz AI (কাজ এআই)** is a Bangla-first, high-precision citizen services assistant for Bangladesh. It eliminates reliance on corrupt brokers (*dalals*) by providing direct, receipt-backed official government fees, exact document checklists, and step-by-step procedures for all citizen services.

### Core Pillars
1. **Verified Government Services Database:** Complete coverage of high-impact, broker-prone citizen services (Land, Passport, NID, BRTA, Birth/Death Registration, Police Clearance, Social Safety Net, Pension, Taxes).
2. **Deterministic & Semantic AI Retrieval:** Blazing fast deterministic edge matching + Cloudflare Vectorize RAG for answering open-ended citizen queries.
3. **Receipt-backed Fee Schedules:** Exact official fee breakdown down to the taka, exposing broker markups and bribery demands.
4. **Official Links & Form Downloads:** Direct application links and Cloudflare R2-hosted application forms so citizens never end up on fake phishing sites.

---

## 🏗️ System Architecture

```
[Bangladesh Citizen Portals] (MyGov, Sebakunjo, Land, Passport, BRTA, NID, BDRIS, Police)
                                 │
                                 ▼
              [Zyte API / Anti-Bot Scraper Engine]
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       [Data Cleaning & Models]         [Cloud Runners]
          (schema/models.py)          (Deepnote / Camber)
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
[Cloudflare D1 (SQL)]   [Cloudflare Vectorize]   ──► [Cloudflare Workers Web App]
(Structured Data & Fees) (Semantic Embeddings)       (Edge Search & Citizen PWA)
       │
       ▼
[Cloudflare R2 Storage]
(PDF Forms & Circulars)
```

---

## 🛠️ Development & Deployment

### 1. Data Engine & Scraping Pipeline (Python)
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run the scraping & data pipeline (generates D1 SQL and Vectorize payloads)
python main.py

# Run continuous background updates
python runners/cloud_runner.py
```

### 2. Cloudflare D1 & Vectorize Sync
```bash
# Execute D1 database migration & seed
npx wrangler d1 execute sohokari-db --remote --file=data/processed/d1_services_seed.sql
```

### 3. Edge Worker & Frontend (TypeScript)
```bash
# Install dependencies
npm install

# Run 50-question golden test suite
npm test

# Run TypeScript typecheck
npm run typecheck

# Start local Cloudflare Workers development server
npm run dev

# Deploy live to Cloudflare Workers
npx wrangler deploy
```

---

## 🛡️ License & Ethics
This platform strictly indexes publicly available citizen charters, government gazettes, and official procedural documentation to empower citizens with transparency.
