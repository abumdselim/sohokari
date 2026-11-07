# Sheyal (শেয়াল) - Bangladesh Citizen Services AI Guide

> **Domain:** `sheyal.com`  
> **Architecture:** Cloudflare Workers (Edge Engine + Static PWA) + D1 SQLite  
> **Engine:** 100% In-House Deterministic Decision Engine (Zero External AI / LLM)

---

## 🦊 Overview
**Sheyal** is a Bangla-first, high-precision citizen services assistant for Bangladesh. It eliminates reliance on corrupt brokers (*dalals*) by providing direct, receipt-backed official government fees, exact document checklists, and step-by-step procedures for all citizen services.

### Pilot Services (Proof of Concept)
1. **National ID Information Correction (`nid-correction`):** 1st time 230 BDT, 2nd time 345 BDT; NID Wing portal & Upazila hearing.
2. **e-Passport Renewal (`passport-renewal`):** Multi-tier pricing (48p vs 64p, 5y vs 10y, Regular vs Express); zero police verification for standard renewals.
3. **Land e-Mutation / নামজারি (`land-mutation`):** Fixed official fee of 1,170 BDT (70 BDT upon application + 1,100 BDT upon approval). Anti-extortion guidance with hotline `16122`.

---

## 🚀 Benchmark Evaluation (50 Golden Queries)
Evaluated against 50 realistic queries across **Bangla**, **English**, and **Banglish**:
* **Service Classification Accuracy:** `100.0%` (Target: $\ge 95\%$)
* **Out-of-Scope Safe Refusal Accuracy:** `100.0%` (Target: $100\%$)
* **Fee Retrieval Exactness:** `100.0%` (Target: $100\%$)
* **Hallucination Rate:** `0.0%`
* **Worker Execution CPU Time:** `2.15ms` (Cloudflare limit: 10ms)

---

## 🛠️ Development & Deployment

### Run Locally
```bash
# Install dependencies
npm install

# Run 50-question golden test suite
npm test

# Run TypeScript typecheck
npm run typecheck

# Start local Cloudflare Workers development server
npm run dev
```

### Deploy to Cloudflare
```bash
# Verify dry-run build
npx wrangler deploy --dry-run

# Deploy live to Cloudflare Workers
npx wrangler deploy
```
