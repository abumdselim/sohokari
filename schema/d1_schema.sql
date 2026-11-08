-- =====================================================================
-- Cloudflare D1 Database Schema for Sohokari (সহকারী)
-- =====================================================================

-- 1. Main Citizen Services Table
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT UNIQUE NOT NULL,
    title_bn TEXT NOT NULL,
    title_en TEXT,
    category TEXT NOT NULL,
    sub_category TEXT,
    department_agency TEXT NOT NULL,
    summary TEXT NOT NULL,
    processing_time_sla TEXT NOT NULL,
    official_portal_url TEXT NOT NULL,
    application_url TEXT,
    citizen_charter_url TEXT,
    anti_broker_warning TEXT,
    grievance_remedy TEXT,
    source_platform TEXT DEFAULT 'services.portal.gov.bd',
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_service_id ON services(service_id);
CREATE INDEX IF NOT EXISTS idx_services_dept ON services(department_agency);

-- 2. Official Government Fees (To prevent overcharging/bribes)
CREATE TABLE IF NOT EXISTS service_fees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    category_name TEXT NOT NULL,
    amount_bdt REAL NOT NULL,
    vat_included INTEGER DEFAULT 1,
    payment_method TEXT,
    remarks TEXT,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_fees_service_id ON service_fees(service_id);

-- 3. Required Documents Checklist (To prevent harassment over missing paperwork)
CREATE TABLE IF NOT EXISTS service_documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    name TEXT NOT NULL,
    is_mandatory INTEGER DEFAULT 1,
    attestation_required INTEGER DEFAULT 0,
    format_type TEXT,
    how_to_obtain TEXT,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_docs_service_id ON service_documents(service_id);

-- 4. Step-by-Step Application Workflow
CREATE TABLE IF NOT EXISTS service_steps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    step_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    action_url TEXT,
    tips TEXT,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_steps_service_id ON service_steps(service_id);

-- 5. PDF Forms & Assets (Backed by Cloudflare R2)
CREATE TABLE IF NOT EXISTS service_forms (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    title TEXT NOT NULL,
    original_url TEXT NOT NULL,
    r2_key TEXT,
    r2_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_forms_service_id ON service_forms(service_id);

-- 6. Responsible Officials & Helpline
CREATE TABLE IF NOT EXISTS service_officers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    designation TEXT,
    department TEXT,
    office_address TEXT,
    helpline TEXT,
    email TEXT,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

-- 7. FAQs (Frequently Asked Questions)
CREATE TABLE IF NOT EXISTS service_faqs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

-- 8. Vector Embeddings Index Tracking (for Cloudflare Vectorize)
CREATE TABLE IF NOT EXISTS vector_chunks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    service_id TEXT NOT NULL,
    vector_id TEXT UNIQUE NOT NULL,
    chunk_type TEXT, -- 'general', 'fee_details', 'step_guide', 'required_docs'
    chunk_content TEXT NOT NULL,
    token_count INTEGER,
    is_synced INTEGER DEFAULT 0,
    synced_at DATETIME,
    FOREIGN KEY(service_id) REFERENCES services(service_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_vector_service_id ON vector_chunks(service_id);
CREATE INDEX IF NOT EXISTS idx_vector_synced ON vector_chunks(is_synced);

-- =====================================================================
-- 9. Comprehensive Emergency, Police Thana, Utility & Telecom Directory
-- =====================================================================
CREATE TABLE IF NOT EXISTS emergency_directories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    directory_id TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,                -- 'police_thana', 'fire_service', 'electricity', 'gas', 'water_wasa', 'telecom', 'national_emergency'
    sub_category TEXT,                     -- 'metropolitan', 'district', 'zonal_complaint', 'operator_care', 'leak_emergency'
    division_bn TEXT NOT NULL,             -- 'ঢাকা', 'চট্টগ্রাম', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'সিলেট', 'রংপুর', 'ময়মনসিংহ', 'সারাদেশ'
    district_bn TEXT NOT NULL,             -- 'ঢাকা', 'চট্টগ্রাম', 'গাজীপুর', ইত্যাদি
    upazila_thana_bn TEXT,                 -- 'গুলশান', 'ধানমন্ডি', 'কোতোয়ালি', ইত্যাদি
    organization_name_bn TEXT NOT NULL,    -- 'গুলশান থানা (ডিএমপি)', 'তিতাস গ্যাস (ঢাকা উত্তর জরুরি নিয়ন্ত্রণ কক্ষ)', 'ডিপিডিসি ধানমন্ডি জোনাল অফিস'
    organization_name_en TEXT,
    service_scope TEXT NOT NULL,           -- 'আইনশৃঙ্খলা ও জিডি', 'বিদ্যুৎ বিভ্রাট অভিযোগ', 'গ্যাস লিকেজ জরুরি কন্ট্রোল', 'কাস্টমার কেয়ার'
    short_code TEXT,                       -- '999', '16116', '16496', '121', '16162', '16163'
    phone_numbers TEXT NOT NULL,           -- '01713373167, 02-9883333'
    duty_officer_number TEXT,              -- Duty Officer / Desk phone
    oc_or_head_number TEXT,                -- OC / Station Officer / Zonal In-charge
    email TEXT,
    office_address TEXT,
    website_url TEXT,
    operating_hours TEXT DEFAULT '২৪ ঘণ্টা (সার্বক্ষণিক)',
    is_toll_free INTEGER DEFAULT 0,
    complaint_process_bn TEXT,             -- জরুরি অভিযোগ দায়েরের পদ্ধতি
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_emergency_category ON emergency_directories(category);
CREATE INDEX IF NOT EXISTS idx_emergency_district ON emergency_directories(district_bn);
CREATE INDEX IF NOT EXISTS idx_emergency_thana ON emergency_directories(upazila_thana_bn);
CREATE INDEX IF NOT EXISTS idx_emergency_short_code ON emergency_directories(short_code);
