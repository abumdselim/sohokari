-- =========================================================
-- SOHOKARI (সহকারী) - CLOUDFLARE D1 FULL DATABASE SEED
-- =========================================================

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


-- SERVICES DATA INSERTIONS --

-- Service: ই-পাসপোর্ট নতুন আবেদন ও নবায়ন নির্দেশিকা (bd-epassport-application-fee-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-epassport-application-fee-guide', 'ই-পাসপোর্ট নতুন আবেদন ও নবায়ন নির্দেশিকা', 'Bangladesh e-Passport Application, Renewal & Official Fee Guide', 
            'পাসপোর্ট ও ইমিগ্রেশন', NULL, 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়', 
            'ই-পাসপোর্ট আবেদনের জন্য কোনো দালাল বা মধ্যস্থতাকারীর প্রয়োজন নেই। অনলাইন আবেদনের পর নির্দিষ্ট সরকারি ফি সরাসরি ব্যাংকে বা অনলাইনে পরিশোধ করে নির্দিষ্ট দিনে বায়োমেট্রিক দিয়ে পাসপোর্ট সংগ্রহ করা যায়। কোনো ছবি বা ফর্ম সত্যায়নের প্রয়োজন হয় না।', 'সাধারণ: ২১ কার্যদিবস | জরুরি: ৭ কার্যদিবস | অতি জরুরি: ২ কার্যদিবস', 
            'https://www.epassport.gov.bd', 'https://www.epassport.gov.bd/onboarding', 
            'https://dip.gov.bd/site/view/citizen_charter', 'সতর্কতা: পাসপোর্ট অফিসে কোনো দালাল বা মধ্যস্বত্বভোগীর সাথে কোনো লেনদেন করবেন না। তারা ভুয়া তথ্য দিয়ে আবেদন করলে আপনার পাসপোর্ট আবেদন আটকে যাবে। অনলাইনে ফরম পূরণ সম্পূর্ণ বিনামূল্যে নিজে করা যায় এবং সরকারি ফি সরাসরি ব্যাংক বা সরকারি পেমেন্ট গেটওয়েতে জমা হয়।', 
            'পাসপোর্ট পেতে অযথা বিলম্ব হলে বা কোনো কর্মকর্তা ঘুষ দাবি করলে পাসপোর্ট অফিসের উপ-পরিচালক (Deputy Director) বরাবর লিখিত অভিযোগ করুন অথবা মন্ত্রিপরিষদ বিভাগের অভিযোগ প্রতিকার ব্যবস্থাপনা (GRS: grs.gov.bd) পোর্টালে সরাসরি অভিযোগ দাখিল করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-epassport-application-fee-guide';
DELETE FROM service_documents WHERE service_id = 'bd-epassport-application-fee-guide';
DELETE FROM service_steps WHERE service_id = 'bd-epassport-application-fee-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (সাধারণ - ২১ কার্যদিবস)', 4025.0, 1, 'অনলাইন পেমেন্ট (একপে, বিকাশ ইত্যাদি) অথবা নির্দিষ্ট ব্যাংক (সোনালী, ওয়ান, প্রিমিয়ার ইত্যাদি)', 'মূল ফি ৩,৫০০ টাকা + ১৫% ভ্যাট ৫২৫ টাকা = ৪,০২৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (জরুরি - ৭ কার্যদিবস)', 6325.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মূল ফি ৫,৫০০ টাকা + ১৫% ভ্যাট ৮২৫ টাকা = ৬,৩২৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (অতি জরুরি - ২ কার্যদিবস)', 8625.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মূল ফি ৭,৫০০ টাকা + ১৫% ভ্যাট ১,১২৫ টাকা = ৮,৬২৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (সাধারণ - ২১ কার্যদিবস)', 5750.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মূল ফি ৫,০০০ টাকা + ১৫% ভ্যাট ৭৫০ টাকা = ৫,৭৫০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (জরুরি - ৭ কার্যদিবস)', 8050.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মূল ফি ৭,০০০ টাকা + ১৫% ভ্যাট ১,০৫০ টাকা = ৮,০৫০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (অতি জরুরি - ২ কার্যদিবস)', 10350.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মূল ফি ৯,০০০ টাকা + ১৫% ভ্যাট ১,৩৫০ টাকা = ১০,৩৫০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৬৪ পৃষ্ঠা, ৫ বছর মেয়াদি (সাধারণ)', 6325.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', NULL);
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-epassport-application-fee-guide', '৬৪ পৃষ্ঠা, ১০ বছর মেয়াদি (সাধারণ)', 8050.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-epassport-application-fee-guide', 'জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ (১৮ বছরের নিচে হলে BRC)', 1, 0, 'মূল কপি ও ১ সেট পরিষ্কার ফটোকপি', 'নির্বাচন কমিশন NID অথবা BDRIS অনলাইন পোর্টাল');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-epassport-application-fee-guide', 'ই-পাসপোর্ট অনলাইন আবেদন সামারি (Application Summary Printout)', 1, 0, '১ কপি A4 সাইজ প্রিন্ট', 'epassport.gov.bd ওয়েবসাইটে ফর্ম সাবমিট করার পর স্বয়ংক্রিয়ভাবে ডাউনলোড হয়');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-epassport-application-fee-guide', 'সরকারি ব্যাংক ফি জমার আসল রসিদ / চালান কপি', 1, 0, 'আসল প্রিন্ট কপি', 'ব্যাংক কাউন্টার থেকে অথবা একপে অনলাইন পেমেন্ট স্লিপ');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-epassport-application-fee-guide', 'পুরাতন মূল পাসপোর্ট (যদি আগে পাসপোর্ট করা থাকে / নবায়নের ক্ষেত্রে)', 0, 0, 'আসল মূল পাসপোর্ট এবং ডাটা পেজের ১ কপি ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-epassport-application-fee-guide', 'পেশাগত সনদের কপি (সরকারি চাকরিজীবী হলে GO/NOC, ছাত্র হলে আইডি কার্ড)', 0, 0, 'ফটোকপি ও মূল কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-epassport-application-fee-guide', 1, 'অফিশিয়াল পোর্টালে একাউন্ট তৈরি ও ফর্ম পূরণ', 'https://www.epassport.gov.bd পোর্টালে যান। আপনার জেলা ও বর্তমান ঠিকানা অনুযায়ী পাসপোর্ট অফিস সিলেক্ট করুন। ব্যক্তিগত তথ্য NID কার্ডের হুবহু অনুযায়ী ইংরেজি ও বাংলায় নির্ভুলভাবে পূরণ করুন।', 'https://www.epassport.gov.bd/landing', 'নাম, পিতা-মাতার নাম ও জন্মতারিখ যেন এনআইডি-র সাথে শতভাগ মিলে যায়। কোনো ভুল থাকলে আগেই এনআইডি সংশোধন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-epassport-application-fee-guide', 2, 'আবেদন সাবমিট ও অ্যাপয়েন্টমেন্ট তারিখ নির্বাচন', 'ফর্মের সকল তথ্য রিভিও করে ফাইনাল সাবমিট করুন। আপনার সুবিধাজনক তারিখে বায়োমেট্রিক দেওয়ার জন্য অ্যাপয়েন্টমেন্ট শিডিউল বেছে নিন। Application Summary এবং Registration Form ডাউনলোড করে প্রিন্ট করুন।', NULL, 'অ্যাপয়েন্টমেন্ট বাধ্যতামূলক না হলেও আগে শিডিউল নিলে পাসপোর্ট অফিসে দীর্ঘ লাইনে দাঁড়াতে হয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-epassport-application-fee-guide', 3, 'সরকারি ফি পরিশোধ', 'অনলাইনে একপে-র মাধ্যমে বিকাশ/রকেট/কার্ড দিয়ে অথবা সরকার নির্ধারিত ব্যাংকগুলোতে (সোনালী, ওয়ান, প্রিমিয়ার, ট্রাস্ট, ঢাকা ব্যাংক) স্বশরীরে ফি জমা দিন এবং রসিদ সংগ্রহ করুন।', NULL, 'অনলাইনে পেমেন্ট করলে রসিদ তৎক্ষণাৎ প্রিন্ট করে নিন। ব্যাংক বুথে বাড়তি ফি দেওয়ার প্রয়োজন নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-epassport-application-fee-guide', 4, 'পাসপোর্ট অফিসে বায়োমেট্রিক প্রদান ও ছবি তোলা', 'অ্যাপয়েন্টমেন্টের দিনে সকালবেলা মূল NID, সামারি শিট এবং ফি জমার রসিদসহ পাসপোর্ট অফিসে যান। কোনো ফটোকপি সত্যায়নের দরকার নেই। ফিঙ্গারপ্রিন্ট, আইরিশ স্ক্যান ও ছবি তোলার পর আপনাকে একটি ডেলিভারি স্লিপ দেওয়া হবে।', NULL, 'সাদা বা হালকা রঙের পোশাক না পরে গাঢ় রঙের পোশাক পরে গেলে ছবি স্পষ্ট আসে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-epassport-application-fee-guide', 5, 'পাসপোর্ট স্ট্যাটাস চেক ও ডেলিভারি গ্রহণ', 'পাসপোর্ট প্রিন্ট সম্পন্ন হলে আপনার ফোনে SMS আসবে। এছাড়াও epassport.gov.bd সাইটে অ্যাপ্লিকেশন আইডি দিয়ে অনলাইনে স্ট্যাটাস ট্র্যাক করতে পারেন। পাসপোর্ট রেডি হলে ডেলিভারি স্লিপ নিয়ে নিজে উপস্থিত হয়ে পাসপোর্ট গ্রহণ করুন।', NULL, NULL);
            

-- Service: জমির ই-নামজারি (মিউটেশন) আবেদন ও সরকারি ফি নির্দেশিকা (bd-land-e-mutation-namjari-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-e-mutation-namjari-guide', 'জমির ই-নামজারি (মিউটেশন) আবেদন ও সরকারি ফি নির্দেশিকা', 'Bangladesh Land e-Mutation (Namjari) Official Process & Exact Fee Breakdown', 
            'ভূমি ও জমিজমা সেবা', NULL, 'ভূমি মন্ত্রণালয় ও ভূমি সংস্কার বোর্ড', 
            'জমির নামজারির ক্ষেত্রে সরকারি নির্ধারিত ফি মাত্র ১,১৭০ টাকা। এর বেশি এক টাকাও কাউকে দেওয়ার বিধান নেই। দালাল ছাড়াই ঘরে বসে অনলাইনে mutation.land.gov.bd থেকে আবেদন করে নির্দিষ্ট সময়সীমার মধ্যে নামজারি সম্পন্ন করা যায়।', 'সর্বোচ্চ ২৮ কার্যদিবস (বিনা বিরোধে নামজারি)', 
            'https://land.gov.bd', 'https://mutation.land.gov.bd', 
            'https://minland.gov.bd/site/view/citizen_charter', 'সতর্কতা: নামজারির মোট সরকারি ফি সর্বসাকুল্যে মাত্র ১,১৭০ টাকা (শুরুতে ৭০ টাকা এবং অনুমোদনের পর ১,১০০ টাকা)। ইউনিয়ন ভূমি সহকারী কর্মকর্তা, সার্ভেয়ার বা এসিল্যান্ড অফিসের কোনো দালালের মাধ্যমে কাজ করানোর কোনো নিয়ম নেই। দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে নাগরিকদের প্রতারিত করে। পুরো প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং এসএমএস ট্র্যাকিং ভিত্তিক।', 
            'যদি নির্ধারিত ২৮ কার্যদিবসের মধ্যে নামজারি নিষ্পত্তি না হয় বা কেউ ঘুষ দাবি করে, তবে হটলাইন ১৬১২২-তে কল করে সরাসরি অভিযোগ জানান অথবা জেলা প্রশাসক (DC) বা বিভাগীয় কমিশনার বরাবর আপিল করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-e-mutation-namjari-guide';
DELETE FROM service_documents WHERE service_id = 'bd-land-e-mutation-namjari-guide';
DELETE FROM service_steps WHERE service_id = 'bd-land-e-mutation-namjari-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-e-mutation-namjari-guide', 'আবেদন কোর্ট ফি (Court Fee)', 20.0, 1, 'অনলাইন মোবাইল ওয়ালেট (বিকাশ, নগদ, রকেট, উপায়) বা কার্ড', 'আবেদন সাবমিট করার সময় পরিশোধযোগ্য');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-e-mutation-namjari-guide', 'নোটিশ জারি ফি (Notice Fee)', 50.0, 1, 'অনলাইন', 'আবেদন সাবমিট করার সময় পরিশোধযোগ্য (মোট ২০+৫০ = ৭০ টাকা শুরুতে)');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-e-mutation-namjari-guide', 'রেকর্ড সংশোধন ফি (Record Correction Fee)', 1000.0, 1, 'অনলাইন', 'খতিয়ান অনুমোদনের পর পরিশোধযোগ্য');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-e-mutation-namjari-guide', 'খতিয়ান সরবরাহ ও ডিসিআর ফি (DCR Fee)', 100.0, 1, 'অনলাইন', 'অনুমোদনের পর পরিশোধযোগ্য (১,০০০+১০০ = ১,১০০ টাকা শেষে)');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'স্ক্যান কপি / ছবি', 'NID কার্ড');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'মূল দলিলের স্ক্যান কপি (ক্রয়সূত্রে হলে রেজিস্ট্রিকৃত সাফ-কবলা দলিল)', 1, 0, 'পিডিএফ ফাইল (সর্বোচ্চ ২৫ মেগাবাইট)', 'সাব-রেজিস্ট্রি অফিস থেকে প্রাপ্ত মূল দলিল');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'পিঠ দলিল / বায়া দলিলের কপি (প্রযোজ্য ক্ষেত্রে)', 0, 0, 'পিডিএফ ফাইল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা', 1, 0, 'স্ক্যান কপি', 'ldtax.gov.bd থেকে অনলাইনে খাজনা পরিশোধের রশিদ');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'ওয়ারিশান সনদপত্র (উত্তরাধিকার সূত্রে প্রাপ্ত জমির ক্ষেত্রে)', 0, 0, 'স্ক্যান কপি', 'ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলর অফিস');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-e-mutation-namjari-guide', 'সর্বশেষ সিএস/এসএ/আরএস/বিএস খতিয়ানের কপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-e-mutation-namjari-guide', 1, 'অনলাইন পোর্টালে প্রবেশ ও তথ্য পূরণ', 'mutation.land.gov.bd ওয়েবসাইটে যান। ''নামজারি আবেদন'' বাটনে ক্লিক করুন। আপনার মোবাইল নম্বর ও এনআইডি নম্বর দিয়ে ওটিপি ভেরিফিকেশন সম্পন্ন করুন। এরপর বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা সিলেক্ট করুন।', 'https://mutation.land.gov.bd', 'আবেদনকারীর এনআইডি তথ্য সঠিক হতে হবে। একাউন্টে দেওয়া মোবাইল নম্বরেই শুনানির এসএমএস আসবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-e-mutation-namjari-guide', 2, 'জমির বিবরণ ও কাগজপত্র আপলোড', 'খতিয়ান নম্বর, দাগ নম্বর এবং হস্তান্তরিত জমির পরিমাণ এককে লিখুন। এরপর সাফ-কবলা দলিল, বায়া দলিল, পূর্বের খতিয়ান ও খাজনার দাখিলার স্ক্যান কপি আপলোড করুন।', NULL, 'সকল ফাইল পরিষ্কার স্ক্যান করে পিডিএফ আকারে আপলোড করবেন যাতে সহকারী কমিশনার (ভূমি) বা কানুনগো সহজেই পড়তে পারেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-e-mutation-namjari-guide', 3, 'প্রাথমিক ৭০ টাকা ফি পরিশোধ', 'কোর্ট ফি (২০ টাকা) ও নোটিশ জারি ফি (৫০ টাকা) মোট ৭০ টাকা সরাসরি বিকাশ বা অন্যান্য অনলাইন পেমেন্ট সিস্টেমে পরিশোধ করুন। আবেদন সম্পন্ন হলে ট্র্যাকিং নম্বরসহ আবেদন ফরম প্রিন্ট করে রাখুন।', NULL, 'কোনো অবস্থাতেই ইউনিয়ন ভূমি অফিসের কাউকে বাড়তি টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-e-mutation-namjari-guide', 4, 'তদন্ত ও শুনানি (Hearing)', 'ইউনিয়ন ভূমি সহকারী কর্মকর্তা প্রস্তাব পাঠাবেন এবং এসিল্যান্ড শুনানির দিন নির্ধারণ করবেন। শুনানির তারিখ মোবাইলে SMS-এর মাধ্যমে জানিয়ে দেওয়া হবে। শুনানির দিনে মূল দলিলপত্র নিয়ে এসিল্যান্ড অফিসে হাজির হন।', NULL, 'কোনো কাগজপত্রের ঘাটতি না থাকলে শুনানি সফলভাবে সম্পন্ন হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-e-mutation-namjari-guide', 5, 'অনুমোদন ও চূড়ান্ত ১,১০০ টাকা ডিসিআর ফি প্রদান', 'এসিল্যান্ড নামজারি অনুমোদন করলে মোবাইলে মেসেজ আসবে। এরপর mutation.land.gov.bd-এ গিয়ে ডিসিআর ফি ১,১০০ টাকা অনলাইনে পরিশোধ করুন। সাথে সাথে আপনার কিউআর কোডযুক্ত অনলাইন খতিয়ান এবং ডিসিআর তৈরি হয়ে যাবে, যা আপনি নিজেই ডাউনলোড ও প্রিন্ট করতে পারবেন।', NULL, NULL);
            

-- Service: জাতীয় পরিচয়পত্র (NID) সংশোধন ও হারানো কার্ড রি-ইস্যু নির্দেশিকা (bd-nid-correction-reissue-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nid-correction-reissue-guide', 'জাতীয় পরিচয়পত্র (NID) সংশোধন ও হারানো কার্ড রি-ইস্যু নির্দেশিকা', 'Bangladesh NID Correction, Reissue & Official Fee Guide', 
            'জাতীয় পরিচয়পত্র (NID)', NULL, 'নির্বাচন কমিশন সচিবালয়, জাতীয় পরিচয় নিবন্ধন অনুবিভাগ', 
            'জাতীয় পরিচয়পত্রের তথ্য সংশোধন বা হারানো কার্ড পুনরায় পেতে কোনো দালালের কাছে যাওয়ার প্রয়োজন নেই। services.nidw.gov.bd পোর্টাল থেকে খুব সহজে নির্ধারিত সরকারি ফি জমা দিয়ে উপযুক্ত প্রমাণপত্র আপলোড করে সংশোধন করা যায়।', 'সাধারণ তথ্য সংশোধন: ৭-১৫ কার্যদিবস | গুরুতর তথ্য সংশোধন: ৩০-৪৫ কার্যদিবস', 
            'https://services.nidw.gov.bd', 'https://services.nidw.gov.bd/nid-pub', 
            'https://nidw.gov.bd/site/view/citizen_charter', 'সতর্কতা: নির্বাচন কমিশন অফিসের সামনে কোনো ফটোকপির দোকানদার বা দালালের খপ্পরে পড়বেন না। তারা ২৩০ টাকার কাজের জন্য ৩,০০০ থেকে ১০,০০০ টাকা দাবি করে। ঘরে বসে নিজের ফোনেই এনআইডি সংশোধন করা যায়।', 
            'আবেদন বিনা কারণে দীর্ঘদিন ঝুলে থাকলে নির্বাচন কমিশনের হেল্পলাইন ১০৫-এ কল করে অভিযোগ জানান অথবা উপজেলা নির্বাচন কর্মকর্তা বরাবরে যোগাযোগ করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nid-correction-reissue-guide';
DELETE FROM service_documents WHERE service_id = 'bd-nid-correction-reissue-guide';
DELETE FROM service_steps WHERE service_id = 'bd-nid-correction-reissue-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-correction-reissue-guide', 'হারানো NID রি-ইস্যু (সাধারণ)', 230.0, 1, 'বিকাশ, রকেট, নেক্সাস পে অথবা ব্যাংক চালান', 'মূল ফি ২০০ টাকা + ১৫% ভ্যাট ৩০ টাকা = ২৩০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-correction-reissue-guide', 'হারানো NID রি-ইস্যু (জরুরি)', 345.0, 1, 'অনলাইন পেমেন্ট গেটওয়ে', 'মূল ফি ৩০০ টাকা + ১৫% ভ্যাট ৪৫ টাকা = ৩৪৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-correction-reissue-guide', 'তথ্য সংশোধন - ১ম বার (ক্যাটাগরি ক - সাধারণ তথ্য)', 230.0, 1, 'বিকাশ / রকেট / ব্যাংক', '২০০ টাকা + ভ্যাট = ২৩০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-correction-reissue-guide', 'তথ্য সংশোধন - ২য় বার', 345.0, 1, 'অনলাইন পেমেন্ট', '৩০০ টাকা + ভ্যাট = ৩৪৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-correction-reissue-guide', 'তথ্য সংশোধন - ৩য় বার বা তদুর্ধ্ব', 575.0, 1, 'অনলাইন পেমেন্ট', '৫০০ টাকা + ভ্যাট = ৫৭৫ টাকা');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-correction-reissue-guide', 'এসএসসি / সমমানের শিক্ষাগত সনদের মূল কপি স্ক্যান (যদি থাকে)', 0, 0, 'স্ক্যান কপি (জেপিজি বা পিডিএফ)', 'শিক্ষাবোর্ড কর্তৃক প্রদত্ত সার্টিফিকেট');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-correction-reissue-guide', 'অনলাইন জন্ম নিবন্ধন সনদ (English & Bengali)', 1, 0, 'ডিজিটাল জন্ম সনদের স্ক্যান কপি', 'bdris.gov.bd পোর্টাল');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-correction-reissue-guide', 'পিতা-মাতার জাতীয় পরিচয়পত্রের কপি (পিতা/মাতার নাম সংশোধনের জন্য)', 0, 0, 'ফটোকপি ও স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-correction-reissue-guide', 'পাসপোর্ট / ড্রাইভিং লাইসেন্স (যদি থাকে)', 0, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-correction-reissue-guide', 'থানার জিডি (GD) কপি (শুধুমাত্র কার্ড হারিয়ে যাওয়ার ক্ষেত্রে)', 0, 0, 'অনলাইন জিডি কপি', 'onlinegd.police.gov.bd');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-correction-reissue-guide', 1, 'NID পোর্টালে রেজিস্ট্রেশন বা লগইন', 'https://services.nidw.gov.bd পোর্টালে গিয়ে ''রেজিস্ট্রেশন'' অপশনে ক্লিক করুন। আপনার এনআইডি বা ফর্ম নম্বর এবং জন্মতারিখ দিন। বর্তমান ও স্থায়ী ঠিকানা নির্বাচন করুন।', 'https://services.nidw.gov.bd/nid-pub', 'মোবাইলে ''NID Wallet'' অ্যাপ ইনস্টল করে ফেস ভেরিফিকেশন সম্পন্ন করতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-correction-reissue-guide', 2, 'সংশোধন বা রি-ইস্যু অপশন নির্বাচন', 'লগইন করার পর প্রোফাইলে গিয়ে ''এডিট'' বাটনে ক্লিক করুন। যে যে তথ্য পরিবর্তন করতে চান (যেমন নিজের নাম, জন্মতারিখ, পিতা-মাতার নাম বা ঠিকানা) তা সঠিকভাবে লিখুন।', NULL, 'সংশোধনের ক্ষেত্রে প্রমাণপত্র ছাড়া তথ্য পরিবর্তন গ্রহণ করা হয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-correction-reissue-guide', 3, 'সরকারি ফি পেমেন্ট', 'বিকাশ বা রকেট অ্যাপের ''পে বিল'' অপশন থেকে ''NID Service'' নির্বাচন করে আবেদন ফি পরিশোধ করুন। ফি পরিশোধ করার কয়েক মিনিটের মধ্যে এনআইডি পোর্টালে পেমেন্ট স্ট্যাটাস আপডেট হবে।', NULL, 'সঠিক ট্রানজেকশন ফি সিলেক্ট করুন (যেমন সংশোধন হলে ২৩০ টাকা)।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-correction-reissue-guide', 4, 'প্রয়োজনীয় প্রমাণপত্র আপলোড ও সাবমিট', 'আপনার দাবির সপক্ষে এসএসসি সনদ, জন্ম সনদ, পাসপোর্ট ইত্যাদি ফাইল আপলোড করুন। এরপর প্রিভিউ দেখে চূড়ান্ত সাবমিট করুন এবং আবেদন ফর্মটি ডাউনলোড করে প্রিন্ট কপি সংরক্ষণ করুন।', NULL, 'কোনো দালালের মাধ্যমে ভুয়া এফিডেভিট আপলোড করবেন না, এতে আবেদন বাতিল হতে পারে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-correction-reissue-guide', 5, 'অনুমোদন ও নতুন এনআইডি ডাউনলোড', 'নির্বাচন কর্মকর্তা কর্তৃক আবেদন অনুমোদিত হলে মোবাইলে এসএমএস আসবে। এরপর services.nidw.gov.bd থেকে রঙিন ডিজিটাল স্মার্ট এনআইডির অনলাইন কপি সাথে সাথে ডাউনলোড করে ল্যামিনেট করে ব্যবহার করতে পারবেন।', NULL, NULL);
            

-- Service: বিআরটিএ ড্রাইভিং লাইসেন্স আবেদন ও সরকারি ফি নির্দেশিকা (bd-brta-driving-license-smartcard-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-driving-license-smartcard-guide', 'বিআরটিএ ড্রাইভিং লাইসেন্স আবেদন ও সরকারি ফি নির্দেশিকা', 'BRTA Driving License Smartcard Application, Test & Official Fee Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ', 
            'বিআরটিএ সেবা বাতায়ন (BSP) পোর্টালে ঘরে বসেই লার্নার ড্রাইভিং লাইসেন্স এবং পরবর্তীতে পরীক্ষা দিয়ে স্মার্ট কার্ড ড্রাইভিং লাইসেন্স গ্রহণ করা যায়। দালালদের খপ্পরে না পড়ে বিএসপি সিস্টেমে নির্ধারিত ফি দিয়ে সহজে লাইসেন্স পাওয়া সম্ভব।', 'লার্নার লাইসেন্স: তাৎক্ষণিক অনলাইন প্রিন্ট | স্মার্ট কার্ড ডেলিভারি: পরীক্ষার পর ৩০-৬০ দিন (ডাকযোগে ঘরে পৌঁছায়)', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.gov.bd/site/view/citizen_charter', 'সতর্কতা: বিআরটিএ প্রাঙ্গণে কোনো দালালের মাধ্যমে পরীক্ষা ছাড়া লাইসেন্স পাওয়ার চেষ্টা করবেন না। এসব জাল লাইসেন্স ট্রাফিক পুলিশের পয়েন্ট চেকিংয়ে ধরা পড়লে ফৌজদারি আইনে মামলা হবে। সমস্ত পরীক্ষা ও আবেদন এখন সরাসরি ডিজিটাল সিস্টেমে পরিচালিত হয়।', 
            'কোনো বিআরটিএ কর্মকর্তা বা পরিদর্শক অনৈতিক সুবিধা চাইলে বিআরটিএ হেল্পলাইন ১৬১০৭-এ জানান অথবা নির্বাহী ম্যাজিস্ট্রেট বা পরিচালক (ইঞ্জিনিয়ারিং) বরাবরে অভিযোগ করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-driving-license-smartcard-guide';
DELETE FROM service_documents WHERE service_id = 'bd-brta-driving-license-smartcard-guide';
DELETE FROM service_steps WHERE service_id = 'bd-brta-driving-license-smartcard-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'লার্নার ড্রাইভিং লাইসেন্স ফি (এক ক্যাটাগরি - যেমন মোটরসাইকেল বা হালকা মোটরযান)', 518.0, 1, 'BSP অনলাইন পেমেন্ট (বিকাশ, নগদ, কার্ড)', NULL);
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'লার্নার ড্রাইভিং লাইসেন্স ফি (দুই ক্যাটাগরি - যেমন মোটরসাইকেল + হালকা মোটরযান)', 748.0, 1, 'BSP অনলাইন পেমেন্ট', NULL);
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'অপেশাদার স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (১০ বছর মেয়াদি)', 5077.0, 1, 'অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক', 'মূল লাইসেন্স ফি + ডিকে কন্ট্রিবিউশন + ১৫% ভ্যাট অন্তর্ভুক্ত');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'পেশাদার স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (৫ বছর মেয়াদি)', 3453.0, 1, 'অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক', 'মূল ফি + ডোপ টেস্ট ফি আলাদাভাবে পরিশোধযোগ্য');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'জাতীয় পরিচয়পত্র (NID) এর স্পষ্ট কপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'রেজিস্টার্ড এমবিবিএস ডাক্তারের প্রদত্ত মেডিকেল সার্টিফিকেট (Medical Certificate Form)', 1, 0, 'স্ক্যান কপি', 'বিআরটিএ নির্ধারিত মেডিকেল ফর্ম প্রিন্ট করে কোনো সরকারি/রেজিস্টার্ড ডাক্তার থেকে সাইন ও সিল নেওয়া');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'শিক্ষাগত যোগ্যতার সনদ (নূন্যতম অষ্টম শ্রেণি বা জেএসসি পাস)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'বর্তমান ঠিকানার ইউটিলিটি বিলের কপি (গ্যাস/বিদ্যুৎ বিল)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-smartcard-guide', 'সরকারি হাসপাতাল কর্তৃক ডোপ টেস্ট রিপোর্ট (পেশাদার লাইসেন্সের ক্ষেত্রে)', 0, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-smartcard-guide', 1, 'বিআরটিএ সার্ভিস পোর্টাল (BSP)-এ অ্যাকাউন্ট খোলা', 'https://bsp.brta.gov.bd পোর্টালে যান। আপনার মোবাইল নম্বর ও জন্মতারিখ দিয়ে অ্যাকাউন্ট রেজিস্টার করুন।', 'https://bsp.brta.gov.bd', 'মোবাইল নম্বরটি ব্যক্তিগত হওয়া আবশ্যক কারণ ওটিপি ও টেস্টের তারিখ সেখানে আসবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-smartcard-guide', 2, 'অনলাইন লার্নার লাইসেন্স আবেদন ও ফি পেমেন্ট', 'ড্যাশবোর্ড থেকে ''ড্রাইভিং লাইসেন্স'' মেনুতে ক্লিক করে ''লার্নার আবেদন'' সিলেক্ট করুন। ক্যাটাগরি (মোটরসাইকেল/গাড়ি) বেছে নিন। ডাক্তার স্বাক্ষরিত মেডিকেল সার্টিফিকেট ও ছবি আপলোড করে ফি পরিশোধ করুন।', NULL, 'পেমেন্ট সফল হওয়ার সাথে সাথে কিউআর কোডযুক্ত লার্নার কার্ড অনলাইনে চলে আসবে, যা প্রিন্ট করে রাস্তায় গাড়ি চালানো শেখা যাবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-smartcard-guide', 3, 'লিখিত, মৌখিক ও প্র্যাকটিক্যাল পরীক্ষা গ্রহণ', 'লার্নার কার্ডে উল্লেখিত তারিখে বিআরটিএ সার্কেল অফিসে উপস্থিত হয়ে লিখিত, মৌখিক এবং ফিল্ডে প্র্যাকটিক্যাল ড্রাইভ পরীক্ষায় অংশ নিন।', NULL, 'ট্রাফিক সাইন ও সড়ক নিরাপত্তা বিষয়ক প্রশ্ন ভালোভাবে পড়ে গেলে পরীক্ষা খুব সহজ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-smartcard-guide', 4, 'স্মার্ট কার্ড ফি পরিশোধ ও বায়োমেট্রিক প্রদান', 'পরীক্ষায় পাস করার পর বিএসপি পোর্টালে স্মার্ট কার্ড ফি (অপেশাদার ৫,০৭৭ টাকা) জমা দিন এবং নির্দিষ্ট দিনে বিআরটিএ অফিসে গিয়ে আঙ্গুলের ছাপ ও ডিজিটাল ছবি দিন।', NULL, 'এখন ডিজিটাল ই-ড্রাইভিং লাইসেন্স তাৎক্ষণিক ডাউনলোড করা যায় এবং স্মার্ট কার্ড পোস্ট অফিসের মাধ্যমে আপনার ঠিকানায় পৌঁছে যায়।');
            

-- Service: অনলাইন পুলিশ ক্লিয়ারেন্স সনদ আবেদন ও ফি নির্দেশিকা (bd-police-clearance-online-application-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-police-clearance-online-application-guide', 'অনলাইন পুলিশ ক্লিয়ারেন্স সনদ আবেদন ও ফি নির্দেশিকা', 'Bangladesh Online Police Clearance Certificate Application & Exact Fee Guide', 
            'আইন ও পুলিশ সেবা', NULL, 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়', 
            'বিদেশে গমন বা চাকরির জন্য পুলিশ ক্লিয়ারেন্স পেতে কাউকে কোনো ঘুষ বা বাড়তি টাকা দিতে হয় না। সরকারি চালান ফি মাত্র ৫০০ টাকা। pcc.police.gov.bd থেকে সম্পূর্ণ অনলাইনে আবেদন ও ট্র্যাক করা যায়।', '৭ থেকে ১০ কার্যদিবস', 
            'https://police.gov.bd', 'https://pcc.police.gov.bd', 
            'https://police.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: পুলিশ ক্লিয়ারেন্সের জন্য সরকারি ফি মাত্র ৫০০ টাকা। কোনো দালাল বা মধ্যস্থতাকারীকে ১ টাকাও বাড়তি দেবেন না। পুরো কার্যক্রমটি পুলিশ সদরদপ্তর থেকে কেন্দ্রীয়ভাবে মনিটর করা হয়।', 
            'কোনো থানা কর্মকর্তা ঘুষ দাবি করলে বা কারণ ছাড়া ফাইল আটকে রাখলে জেলা পুলিশ সুপার (SP) অথবা ডিএমপি কমিশনার কার্যালয়ে যোগাযোগ করুন অথবা পুলিশ কন্ট্রোল রুম ৯৯৯-এ সহায়তা চান।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-police-clearance-online-application-guide';
DELETE FROM service_documents WHERE service_id = 'bd-police-clearance-online-application-guide';
DELETE FROM service_steps WHERE service_id = 'bd-police-clearance-online-application-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-police-clearance-online-application-guide', 'পুলিশ ক্লিয়ারেন্স সরকারি চালান ফি', 500.0, 1, 'বাংলাদেশ ব্যাংক / সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২২১১-০০০১-২০১১) অথবা একপে অনলাইন পেমেন্ট', 'সরকারি নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-clearance-online-application-guide', 'মূল পাসপোর্টের স্ক্যান কপি (১ম শ্রেণির গেজেটেড কর্মকর্তা দ্বারা সত্যায়িত)', 1, 0, 'স্ক্যান কপি (পিডিএফ / ছবি)', 'বর্তমান ভ্যালিড পাসপোর্ট');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-clearance-online-application-guide', 'জাতীয় পরিচয়পত্র (NID) অথবা জন্ম সনদের ফটোকপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-clearance-online-application-guide', '৫০০ টাকার সরকারি ট্রেজারি চালান কপি বা অনলাইন পেমেন্ট স্লিপ', 1, 0, 'চালান ফর্ম বা অনলাইন রশিদ', 'সোনালী ব্যাংক বা pcc পোর্টালে অনলাইন পেমেন্ট');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-clearance-online-application-guide', 'চেয়ারম্যান / ওয়ার্ড কাউন্সিলর প্রদত্ত নাগরিকত্ব ও চারিত্রিক সনদপত্র', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-clearance-online-application-guide', 1, 'পুলিশ ক্লিয়ারেন্স পোর্টালে অ্যাকাউন্ট খোলা', 'https://pcc.police.gov.bd ওয়েবসাইটে যান। মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।', 'https://pcc.police.gov.bd', 'আপনার পাসপোর্টে উল্লেখিত বর্তমান বা স্থায়ী ঠিকানার সংশ্লিষ্ট থানা সিলেক্ট করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-clearance-online-application-guide', 2, 'আবেদন ফর্ম পূরণ ও চালান নম্বর এন্ট্রি', 'পাসপোর্ট অনুযায়ী ব্যক্তিগত তথ্য পূরণ করুন। সোনালী ব্যাংকে চালানের মাধ্যমে জমা দেওয়া ৫০০ টাকার চালান নম্বর ও তারিখ লিখুন অথবা একপে দিয়ে সরাসরি ডেবিট/ক্রেডিট/বিকাশ দিয়ে ফি পরিশোধ করুন।', NULL, 'চালান কোডটি সতর্কতার সাথে মেলাবেন: ১-২২১১-০০০১-২০১১।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-clearance-online-application-guide', 3, 'কাগজপত্র আপলোড ও সাবমিট', 'সত্যায়িত পাসপোর্টের তথ্যপাতা, চালানের কপি এবং কাউন্সিলর সনদপত্র আপলোড করে আবেদন সাবমিট করুন। একটি রেফারেন্স নম্বর পাবেন।', NULL, 'ফাইলের সাইজ যেন নির্দিষ্ট সীমার মধ্যে থাকে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-clearance-online-application-guide', 4, 'পুলিশ তদন্ত ও ভেরিফিকেশন', 'আপনার স্থানীয় থানার ডিএসবি বা এসবি কর্মকর্তা আপনার তথ্য যাচাই করবেন। তদন্তকারী কর্মকর্তা যোগাযোগ করলে তাকে প্রয়োজনীয় আসল কাগজপত্র দেখান।', NULL, 'তদন্তের জন্য কোনো পুলিশ কর্মকর্তাকে কোনো নগদ টাকা দেওয়ার সরকারি কোনো নিয়ম নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-clearance-online-application-guide', 5, 'সনদ গ্রহণ ও পররাষ্ট্র মন্ত্রণালয়ের সত্যায়ন', 'তদন্ত শেষে সনদ প্রস্তুত হলে এসএমএস পাবেন। আপনি সংশ্লিষ্ট এসপি অফিস বা ডিএমপি ওয়ান স্টপ সার্ভিস কাউন্টার থেকে সনদটি সংগ্রহ করতে পারবেন। সনদে পররাষ্ট্র মন্ত্রণালয়ের কিউআর কোডযুক্ত সত্যায়ন স্বয়ংক্রিয়ভাবে থাকে।', NULL, NULL);
            

-- Service: অনলাইন জন্ম নিবন্ধন আবেদন, সংশোধন ও সরকারি ফি নির্দেশিকা (bd-birth-registration-bdris-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-birth-registration-bdris-guide', 'অনলাইন জন্ম নিবন্ধন আবেদন, সংশোধন ও সরকারি ফি নির্দেশিকা', 'Bangladesh Online Birth Registration (BDRIS) Official Fee & Guidelines', 
            'নাগরিক সনদ ও নিবন্ধন', NULL, 'রেজিস্ট্রার জেনারেলের কার্যালয়, জন্ম ও মৃত্যু নিবন্ধন, স্থানীয় সরকার বিভাগ', 
            'জন্ম ও মৃত্যু নিবন্ধনের জন্য দালালদের অতিরিক্ত টাকা দেওয়া বন্ধ করতে সরকার ডিজিটাল BDRIS ব্যবস্থা চালু করেছে। ৪৫ দিন বয়সের মধ্যে শিশুর জন্ম নিবন্ধন সম্পূর্ণ বিনামূল্যে করা যায়।', 'আবেদন জমা দেওয়ার পর ৭ কার্যদিবসের মধ্যে', 
            'https://bdris.gov.bd', 'https://bdris.gov.bd/br/application', 
            'https://lgd.gov.bd/site/view/citizen_charter', 'সতর্কতা: জন্ম নিবন্ধন করতে কোনো দালালের শরণাপন্ন হবেন না। অনেকে ভুয়া ওয়েবসাইট বানিয়ে ভুয়া কিউআর কোডযুক্ত জাল জন্ম সনদ তৈরি করে দেয় যা পরবর্তীতে পাসপোর্ট বা স্কুলে ভর্তির সময় বাতিল হয়ে যায়। নিশ্চিত হয়ে নিন সনদটি অফিশিয়াল bdris.gov.bd ডেটাবেজে সংরক্ষিত হয়েছে কিনা।', 
            'কোনো সচিব বা উদ্যোক্তা অতিরিক্ত টাকা দাবি করলে উপজেলা নির্বাহী কর্মকর্তা (UNO) অথবা জেলা প্রশাসক বরাবরে লিখিত অভিযোগ দিন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-birth-registration-bdris-guide';
DELETE FROM service_documents WHERE service_id = 'bd-birth-registration-bdris-guide';
DELETE FROM service_steps WHERE service_id = 'bd-birth-registration-bdris-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-birth-registration-bdris-guide', 'জন্মের ৪৫ দিন পর্যন্ত শিশু নিবন্ধন', 0.0, 1, 'বিনামূল্যে', 'সরকারিভাবে সম্পূর্ণ ফ্রি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-birth-registration-bdris-guide', 'জন্মের ৪৬ দিন হতে ৫ বছর বয়স পর্যন্ত', 25.0, 1, 'ইউনিয়ন পরিষদ / পৌরসভা / কাউন্সিলর অফিসে বা অনলাইন', 'সরকারি ফি মাত্র ২৫ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-birth-registration-bdris-guide', 'জন্মের ৫ বছর পর যেকোনো বয়সে', 50.0, 1, 'সরকারি ট্রেজারি বা অফিস কাউন্টার', 'সরকারি ফি মাত্র ৫০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-birth-registration-bdris-guide', 'জন্ম সনদ তথ্য সংশোধন ফি', 100.0, 1, 'অনলাইন / অফিস কাউন্টার', 'বাংলা ও ইংরেজি উভয় ভাষায় সংশোধনের ক্ষেত্রে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-birth-registration-bdris-guide', 'হাসপাতাল বা ক্লিনিক কর্তৃক প্রদত্ত ইপিআই (টিকা) কার্ড বা জন্ম প্রত্যয়নপত্র', 1, 0, 'স্ক্যান কপি', 'যে হাসপাতাল বা ক্লিনিকে শিশুর জন্ম হয়েছে');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-birth-registration-bdris-guide', 'পিতা ও মাতার ডিজিটাল ১৬/১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-birth-registration-bdris-guide', 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি ও স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-birth-registration-bdris-guide', 'বাসার ট্যাক্স পরিশোধের রশিদ বা ইউটিলিটি বিলের কপি', 1, 0, 'স্ক্যান কপি', 'ইউনিয়ন পরিষদ / পৌরসভা / সিটি কর্পোরেশন');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-birth-registration-bdris-guide', 1, 'BDRIS অনলাইন পোর্টালে ফর্ম পূরণ', 'https://bdris.gov.bd ওয়েবসাইটে যান। ''জন্ম নিবন্ধন আবেদন'' লিঙ্কে ক্লিক করুন। নিবন্ধনাধীন ব্যক্তির স্থায়ী ঠিকানা অনুযায়ী সংশ্লিষ্ট ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন জোন সিলেক্ট করুন।', 'https://bdris.gov.bd/br/application', 'নামের বানান বাংলা এবং ইংরেজি বড় হাতের অক্ষরে (Capital Letters) সার্টিফিকেটের সাথে মিলিয়ে লিখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-birth-registration-bdris-guide', 2, 'কাগজপত্র সংযুক্তি ও আবেদন সাবমিট', 'টিকা কার্ড, পিতা-মাতার জন্ম সনদ ও বাসার হোল্ডিং ট্যাক্স রশিদের ছবি আপলোড করুন। আপনার মোবাইল নম্বর দিন এবং সাবমিট বাটনে ক্লিক করুন।', NULL, 'আবেদন সাবমিট হলে একটি অ্যাপ্লিকেশন আইডি নম্বর পাবেন। আবেদনপত্রটি প্রিন্ট করে নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-birth-registration-bdris-guide', 3, 'ইউনিয়ন পরিষদ বা ওয়ার্ড কার্যালয়ে আবেদন জমা ও ফি প্রদান', 'প্রিন্ট করা আবেদন ফরম ও সংযুক্তিগুলোর ১ সেট ফটোকপি নিয়ে ১৫ দিনের মধ্যে সংশ্লিষ্ট ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলর অফিসে যান এবং সরকারি নির্ধারিত ফি (সর্বোচ্চ ৫০ টাকা) জমা দিন।', NULL, 'দালালরা জন্ম সনদের জন্য ৫০০ থেকে ২,০০০ টাকা দাবি করে, যা সম্পূর্ণ অবৈধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-birth-registration-bdris-guide', 4, 'ডিজিটাল জন্ম সনদ সংগ্রহ', 'নিবন্ধক কর্মকর্তা তথ্য যাচাই করে অনুমোদন দিলে আপনার ফোনে মেসেজ আসবে। এরপর কার্যালয় থেকে কিউআর কোডযুক্ত ডিজিটাল জন্ম নিবন্ধন সনদ সংগ্রহ করুন।', NULL, NULL);
            

-- Service: অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা (bd-land-eporcha-certified-copy-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-eporcha-certified-copy-guide', 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা', 'Bangladesh e-Porcha Certified Copy & Mouza Map Official Online Delivery Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়', 
            'জমির সিএস, এসএ, আরএস বা বিএস পরচা (খতিয়ান) তোলার জন্য রেকর্ড রুমে গিয়ে দালালের শরণাপন্ন হওয়ার প্রয়োজন নেই। eporcha.gov.bd পোর্টাল থেকে মাত্র ১০০ টাকায় সার্টিফাইড কপি আবেদন করে সরাসরি ডাকযোগে বা ডিসি অফিস থেকে নেওয়া যায়।', 'সাধারণ কপি: ৭ কার্যদিবস | জরুরি কপি: ৩ কার্যদিবস', 
            'https://eporcha.gov.bd', 'https://eporcha.gov.bd', 
            'https://dlrs.gov.bd/site/view/citizen_charter', 'সতর্কতা: রেকর্ড রুম বা ডিসি অফিসের চত্বরে কোনো মুহুরির কাছে যাবেন না। তারা ১০০ টাকার খতিয়ানের জন্য ১,৫০০ থেকে ৩,০০০ টাকা পর্যন্ত দাবি করে। ঘরে বসে স্মার্টফোনে eporcha.gov.bd থেকেই আসল সার্টিফাইড কপি পাওয়া যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-eporcha-certified-copy-guide';
DELETE FROM service_documents WHERE service_id = 'bd-land-eporcha-certified-copy-guide';
DELETE FROM service_steps WHERE service_id = 'bd-land-eporcha-certified-copy-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-eporcha-certified-copy-guide', 'অনলাইন খতিয়ান সার্টিফাইড কপি (অফিস কাউন্টার থেকে গ্রহণ)', 100.0, 1, 'অনলাইন পেমেন্ট (বিকাশ, নগদ, রকেট, কার্ড)', 'কোর্ট ফি ও প্রসেসিং ফি বাবদ ১০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-eporcha-certified-copy-guide', 'অনলাইন খতিয়ান সার্টিফাইড কপি (ডাকযোগে বাড়িতে হোম ডেলিভারি)', 140.0, 1, 'অনলাইন পেমেন্ট', 'ফি ১০০ টাকা + ডাকমাশুল ৪০ টাকা = মোট ১৪০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-eporcha-certified-copy-guide', 'মৌজা ম্যাপ (নকশা) সার্টিফাইড কপি', 520.0, 1, 'অনলাইন পেমেন্ট', 'ম্যাপ ফি ৫০০ টাকা + ডাক ফি ২০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-eporcha-certified-copy-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ', 1, 0, 'অনলাইন ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-eporcha-certified-copy-guide', 'সংশ্লিষ্ট খতিয়ান নম্বর, দাগ নম্বর অথবা মালিকের নাম', 1, 0, 'তথ্য', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-eporcha-certified-copy-guide', 1, 'ই-পরচা পোর্টালে অনুসন্ধান', 'https://eporcha.gov.bd ওয়েবসাইটে যান। আপনার বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা সিলেক্ট করুন। এরপর জরিপের ধরন (যেমন: আরএস, বিএস, সিএস) বাছাই করে খতিয়ান নম্বর দিয়ে খুঁজুন।', 'https://eporcha.gov.bd', 'আপনি সম্পূর্ণ বিনামূল্যে অনলাইনে পরচার অনলাইন ড্রাফট দেখতে পারবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-eporcha-certified-copy-guide', 2, 'সার্টিফাইড কপির আবেদন ও ডেলিভারি মোড নির্বাচন', '''আবেদন করুন'' বাটনে ক্লিক করে ডেলিভারির মাধ্যম হিসেবে ''ডাকযোগে'' অথবা ''সরাসরি ডিসি অফিস'' বেছে নিন। ডাকযোগে নিলে আপনার পূর্ণ ডাক যোগাযোগের ঠিকানা দিন।', NULL, 'ডাকযোগে নিলে ডিসি অফিসের রেকর্ড রুমে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-eporcha-certified-copy-guide', 3, 'অনলাইনে ১০০ বা ১৪০ টাকা ফি পরিশোধ', 'বিকাশ, নগদ বা ব্যাংক কার্ডের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। আবেদনের ট্র্যাকিং স্লিপ প্রিন্ট বা সেভ করুন।', NULL, 'কোনো মুহুরি বা দালালের মাধ্যমে ৫০০০ টাকা ফি দেওয়ার কোনো সুযোগ নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-eporcha-certified-copy-guide', 4, 'খতিয়ান গ্রহণ', 'ডিসি অফিসের রেকর্ড রুম থেকে সিল ও সাক্ষরযুক্ত আসল সার্টিফাইড খতিয়ান ডাক পিয়ন আপনার বাড়িতে পৌঁছে দেবে।', NULL, NULL);
            

-- Service: অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা (bd-police-online-gd-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-police-online-gd-guide', 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা', 'Bangladesh Police Online General Diary (GD) Complete Guide', 
            'আইন ও পুলিশ সেবা', NULL, 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়', 
            'জাতীয় পরিচয়পত্র, পাসপোর্ট, সার্টিফিকেট, গুরুত্বপূর্ণ দলিল বা মালামাল হারিয়ে গেলে থানায় গিয়ে দালালের মাধ্যমে জিডি করার প্রয়োজন নেই। অনলাইন জিডি অ্যাপ বা পোর্টাল থেকে বিনামূল্যে ঘরে বসেই যেকোনো থানার জিডি করা যায়।', 'তাৎক্ষণিক অনলাইনে ডিজিটাল জিডি কপি প্রস্তুত হয়', 
            'https://police.gov.bd', 'https://gd.police.gov.bd', 
            'https://police.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: জিডি করতে থানায় কাউকে ১ টাকাও দেওয়ার নিয়ম নেই। অনলাইনে করা কিউআর কোডযুক্ত জিডি কপি দেশের সকল সরকারি ও বেসরকারি প্রতিষ্ঠানে সরাসরি গ্রহণযোগ্য।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-police-online-gd-guide';
DELETE FROM service_documents WHERE service_id = 'bd-police-online-gd-guide';
DELETE FROM service_steps WHERE service_id = 'bd-police-online-gd-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-police-online-gd-guide', 'অনলাইন জিডি সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'জিডি করার জন্য সরকারি কোনো ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-online-gd-guide', 'জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ', 1, 0, 'অনলাইন ভেরিফিকেশন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-police-online-gd-guide', 'হারিয়ে যাওয়া বা প্রাপ্ত জিনিসের বিস্তারিত বিবরণ (যেমন: ডকুমেন্টের নম্বর)', 1, 0, 'অনলাইন টেক্সট ইনপুট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-online-gd-guide', 1, 'অনলাইন জিডি অ্যাপ বা পোর্টালে প্রবেশ', 'https://gd.police.gov.bd ওয়েবসাইটে যান অথবা ''Online GD'' মোবাইল অ্যাপ ডাউনলোড করুন। আপনার এনআইডি এবং জন্মতারিখ দিয়ে অ্যাকাউন্ট খুলুন।', 'https://gd.police.gov.bd', 'মোবাইলের সামনের ক্যামেরা দিয়ে লাইভ ফেস ভেরিফিকেশন সম্পন্ন হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-online-gd-guide', 2, 'হারানো বা প্রাপ্তির তথ্য নির্বাচন', '''হারানো'' অপশন সিলেক্ট করুন। কি হারিয়েছে তা বেছে নিন (ডকুমেন্ট, যানবাহন, মানুষ বা মালামাল)।', NULL, 'ঘটনার সময় ও স্থান সঠিকভাবে লিখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-police-online-gd-guide', 3, 'থানা নির্বাচন ও সাবমিট', 'যে এলাকার মধ্যে জিনিসটি হারিয়েছে সেই থানা সিলেক্ট করে সাবমিট করুন। সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত ডিজিটাল জিডি সার্টিফিকেট তৈরি হবে।', NULL, 'সার্টিফিকেটটি ডাউনলোড ও প্রিন্ট করে নতুন এনআইডি, পাসপোর্ট বা সিম রিপ্লেসমেন্টে ব্যবহার করা যায়।');
            

-- Service: ই-টিআইএন (e-TIN) গ্রহণ ও অনলাইন আয়কর রিটার্ন দাখিল (bd-nbr-etin-tax-return-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nbr-etin-tax-return-guide', 'ই-টিআইএন (e-TIN) গ্রহণ ও অনলাইন আয়কর রিটার্ন দাখিল', 'Bangladesh NBR e-TIN Registration & Online Tax Return Submission Guide', 
            'অর্থ ও রাজস্ব সেবা', NULL, 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়', 
            'ই-টিআইএন খোলা এবং বার্ষিক শূন্য বা করযোগ্য আয়কর রিটার্ন দাখিল করার জন্য ট্যাক্স ল ইয়ার বা দালালের পেছনে হাজার হাজার টাকা খরচ করার প্রয়োজন নেই। etaxnbr.gov.bd থেকে কয়েক মিনিটে বিনামূল্যে রিটার্ন জমা দিয়ে সাথে সাথে প্রাপ্তি স্বীকারপত্র (Acknowledgment Slip) পাওয়া যায়।', 'তাৎক্ষণিক ডিজিটাল একনলেজমেন্ট স্লিপ ও সার্টিফিকেট ডাউনলোড', 
            'https://nbr.gov.bd', 'https://etaxnbr.gov.bd', 
            'https://nbr.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালরা সাধারণ নাগরিকদের ভীতি প্রদর্শন করে টিআইএন ও শূন্য রিটার্নের জন্য ৩,০০০ থেকে ১০,০০০ টাকা পর্যন্ত দাবি করে। ঘরে বসে স্মার্টফোনে ১০ মিনিটে নিজে নিজেই সম্পূর্ণ বিনামূল্যে এই কাজ করা যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nbr-etin-tax-return-guide';
DELETE FROM service_documents WHERE service_id = 'bd-nbr-etin-tax-return-guide';
DELETE FROM service_steps WHERE service_id = 'bd-nbr-etin-tax-return-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nbr-etin-tax-return-guide', 'ই-টিআইএন রেজিস্ট্রেশন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'টিআইএন সার্টিফিকেট তৈরির কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nbr-etin-tax-return-guide', 'অনলাইন রিটার্ন সাবমিশন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'অনলাইনে সিস্টেম ব্যবহারের কোনো চার্জ নেই। করযোগ্য আয় থাকলে প্রযোজ্য কর সোনালী ব্যাংক/কার্ড/বিকাশে জমা দেওয়া যায়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-etin-tax-return-guide', 'জাতীয় পরিচয়পত্র (NID) নম্বর', 1, 0, 'অনলাইন ভেরিফিকেশন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-etin-tax-return-guide', 'আবেদনকারীর নিজস্ব বায়োমেট্রিক সিম নম্বর', 1, 0, 'ওটিপি ভেরিফিকেশন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-etin-tax-return-guide', 'ব্যাংক স্টেটমেন্ট ও বেতন বিবরণী (চাকরিজীবীদের ক্ষেত্রে)', 0, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-etin-tax-return-guide', 1, 'ই-ট্যাক্স পোর্টালে রেজিস্ট্রেশন', 'https://etaxnbr.gov.bd পোর্টালে যান। আপনার টিআইএন এবং বায়োমেট্রিক সিম নম্বর দিয়ে ওটিপি ভেরিফাই করে পাসওয়ার্ড সেট করুন।', 'https://etaxnbr.gov.bd', 'সিম কার্ডটি আবেদনকারীর নিজের এনআইডি দিয়ে নিবন্ধিত হতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-etin-tax-return-guide', 2, 'সহজ এক পাতার রিটার্ন ফর্ম পূরণ', 'আয়ের উৎস (চাকরি, ব্যবসা, গৃহসম্পত্তি) এবং মোট আয় লিখুন। বার্ষিক আয় করসীমার নিচে হলে স্বয়ংক্রিয়ভাবে ''জিরো ট্যাক্স'' ক্যালকুলেট হবে।', NULL, 'সিস্টেম নিজে নিজেই ট্যাক্স হিসাব করে দেয়, জটিল ফর্মুলা মুখস্থ করার দরকার নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-etin-tax-return-guide', 3, 'সাবমিট ও একনলেজমেন্ট স্লিপ ডাউনলোড', 'প্রিভিউ দেখে সাবমিট বাটনে ক্লিক করুন। সাথে সাথে কিউআর কোডযুক্ত অফিশিয়াল ট্যাক্স সার্টিফিকেট ও একনলেজমেন্ট স্লিপ ডাউনলোড করুন।', NULL, 'এটি ব্যাংক লোন, পাসপোর্ট নবায়ন, ট্রেড লাইসেন্স ইত্যাদি সব কাজে ব্যবহারের জন্য সরকারিভাবে অনুমোদিত।');
            

-- Service: অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ (bd-land-tax-ldtax-online-dakhila)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-tax-ldtax-online-dakhila', 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ', 'Bangladesh Online Land Development Tax (LD Tax) Payment & Dakhila Download', 
            'ভূমি ও জমিজমা সেবা', NULL, 'ভূমি মন্ত্রণালয়', 
            'ইউনিয়ন ভূমি অফিসে গিয়ে খাজনা দেওয়ার নামে হয়রানি ও বাড়তি ঘুষ নেওয়ার দিন শেষ। ldtax.gov.bd পোর্টালে জমির খতিয়ান যুক্ত করে ঘরে বসেই অনলাইন পেমেন্টে বার্ষিক খাজনা দিয়ে কিউআর কোডযুক্ত ডিজিটাল দাখিলা (রশিদ) পাওয়া যায়।', 'তাৎক্ষণিক কিউআর কোডযুক্ত দাখিলা তৈরি', 
            'https://land.gov.bd', 'https://ldtax.gov.bd', 
            'https://minland.gov.bd/site/view/citizen_charter', 'সতর্কতা: তহশিলদার বা ইউনিয়ন ভূমি অফিসের কোনো ব্যক্তিকে বাড়তি নগদ টাকা দেওয়ার প্রয়োজন নেই। সরকারি সিস্টেমে যে পরিমাণ টাকা আসবে, তার বাইরে অতিরিক্ত টাকা দাবি করা দণ্ডনীয় অপরাধ।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-tax-ldtax-online-dakhila';
DELETE FROM service_documents WHERE service_id = 'bd-land-tax-ldtax-online-dakhila';
DELETE FROM service_steps WHERE service_id = 'bd-land-tax-ldtax-online-dakhila';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 'কৃষি জমি (২৫ বিঘা বা ৮.২৫ একর পর্যন্ত)', 0.0, 1, 'সম্পূর্ণ মওকুফ (০ টাকা)', 'শুধুমাত্র দাখিলা ফি বাবদ নূন্যতম সরকারি চার্জ প্রযোজ্য হতে পারে।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 'আবাসিক বা বাণিজ্যিক জমি', 100.0, 1, 'অনলাইন বিকাশ, নগদ, রকেট, কার্ড', 'জমির অবস্থান (গ্রাম, পৌরসভা, সিটি কর্পোরেশন) এবং শতকের পরিমাণ অনুযায়ী স্বয়ংক্রিয়ভাবে সিস্টেম হিসাব করে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 'জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর', 1, 0, 'অনলাইন ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 'জমির হালনাগাদ খতিয়ান ও দাগ নম্বর', 1, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 'পূর্ববর্তী খাজনার দাখিলার কপি (যদি থাকে)', 0, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 1, 'এলডি ট্যাক্স পোর্টালে নাগরিক নিবন্ধন', 'https://ldtax.gov.bd পোর্টালে যান। ''নাগরিক কর্নার''-এ গিয়ে মোবাইল নম্বর ও এনআইডি দিয়ে নিবন্ধন করুন।', 'https://ldtax.gov.bd', 'একবার নিবন্ধন করলে আপনার সব জমির খাজনা এক প্রোফাইল থেকেই দেওয়া যাবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 2, 'খতিয়ান এন্ট্রি ও হোল্ডিং সংযোজন', 'জেলা, উপজেলা, মৌজা এবং আপনার খতিয়ান নম্বর দিয়ে হোল্ডিং খুঁজুন এবং যুক্ত করুন। ভূমি সহকারী কর্মকর্তা হোল্ডিং অনুমোদন দিলে বকেয়া ও বর্তমান খাজনার দাবি সিস্টেমে দেখা যাবে।', NULL, 'অনুমোদন হতে দেরি হলে ১৬১২২ নম্বরে কল করে জানান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-tax-ldtax-online-dakhila', 3, 'অনলাইন পেমেন্ট ও দাখিলা প্রিন্ট', '''ই-পেমেন্ট'' বাটনে ক্লিক করে মোবাইল ব্যাংকিং দিয়ে কর পরিশোধ করুন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই কিউআর কোডযুক্ত অনলাইন দাখিলা ডাউনলোড ও প্রিন্ট করে নিন।', NULL, 'এই ডিজিটাল দাখিলা যে কোনো জমি রেজিস্ট্রি বা নামজারির কাজে শতভাগ বৈধ।');
            

-- Service: বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা (bd-bmet-smart-card-emigration-clearance)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-bmet-smart-card-emigration-clearance', 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা', 'Bangladesh BMET Smart Card & Emigration Clearance Official Fee Guide (Ami Probashi)', 
            'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান', NULL, 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়', 
            'বিদেশে চাকরির উদ্দেশ্যে যাওয়ার জন্য বিএমইটি স্মার্ট কার্ড আবশ্যক। দালাল বা রিক্রুটিং এজেন্টরা এর জন্য ২০,০০০ থেকে ৫০,০০০ টাকা দাবি করে, অথচ সরকারি নির্ধারিত সর্বমোট ফি মাত্র ৪,০০০-৫,০০০ টাকার মতো। ''আমি প্রবাসী'' (Ami Probashi) অ্যাপ বা পোর্টালে নিজেই সরাসরি ফি দিয়ে কার্ড নেওয়া যায়।', 'আবেদন ও ফি জমার পর ৩ থেকে ৫ কার্যদিবসের মধ্যে', 
            'https://bmet.gov.bd', 'https://amiprobashi.com', 
            'https://bmet.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: রিক্রুটিং এজেন্সি বা কোনো দালাল স্মার্ট কার্ডের নামে ২০ থেকে ৫০ হাজার টাকা দাবি করলে তা সম্পূর্ণ চাঁদাবাজি। সরকারি ফি মাত্র ৪,৭৫০ টাকা। সরাসরি ''আমি প্রবাসী'' অ্যাপ থেকে নিজে নিজেই আবেদন করে কিউআর কার্ড ডাউনলোড করা যায়।', 
            'কোনো রিক্রুটিং এজেন্ট পাসপোর্ট আটকে রাখলে বা চাঁদাবাজি করলে প্রবাসী কল্যাণ মন্ত্রণালয়ের হেল্পলাইন ১৬১৩৫ অথবা বৈরাশিক অভিযোগ সেলে অভিযোগ দায়ের করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-bmet-smart-card-emigration-clearance';
DELETE FROM service_documents WHERE service_id = 'bd-bmet-smart-card-emigration-clearance';
DELETE FROM service_steps WHERE service_id = 'bd-bmet-smart-card-emigration-clearance';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'প্রবাসী কল্যাণ তহবিল ও সদস্যপদ ফি', 3500.0, 1, 'আমি প্রবাসী অ্যাপ / সোনালী ব্যাংক একপে', 'সরকারি নির্ধারিত কল্যাণ ফি ৩৫০০ টাকা (প্রবাসী কর্মী ও তার পরিবারের কল্যাণে ব্যবহৃত হয়)');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'প্রবাসী জীবন বীমা প্রিমিয়াম (বাধ্যতামূলক)', 1000.0, 1, 'অনলাইন পেমেন্ট গেটওয়ে', 'প্রবাসী কর্মীর জন্য জীবন বীমা পলিসি বাবদ ১০০০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'বিএমইটি স্মার্ট কার্ড ও সার্ভিস চার্জ', 250.0, 1, 'অনলাইন', 'স্মার্ট কার্ড প্রিন্ট ও সার্ভিস ফি ২৫০ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'বিএমইটি ডাটাবেজ রেজিস্ট্রেশন ফি', 300.0, 1, 'আমি প্রবাসী মোবাইল ওয়ালেট', 'শুরুতে ডাটাবেজে নাম অন্তর্ভুক্তির জন্য ৩০০ টাকা (ডিমো অফিসে গেলে মাত্র ২০০ টাকা)');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'আবেদনকারীর আসল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)', 1, 0, 'স্ক্যান কপি ও মূল পাসপোর্ট', 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'বৈধ কাজের ভিসা (Work Visa / Employment Visa)', 1, 0, 'অনলাইন ভিসা কপি বা পাসপোর্টে স্ট্যাম্পিং কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'নিয়োগকর্তার কর্মচুক্তিপত্র (Job Contract / Employment Agreement)', 1, 0, 'পিডিএফ ফাইল / স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'মেডিকেল ফিটনেস সনদ (GAMCA / সরকার অনুমোদিত মেডিকেল সেন্টার)', 1, 0, 'অনলাইন মেডিকেল আনফিট/ফিট রিপোর্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 'প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) সনদ', 1, 0, 'টিটিসি (TTC) প্রদত্ত ওরিয়েন্টেশন সার্টিফিকেট', 'সরকারি টেকনিক্যাল ট্রেনিং সেন্টার (TTC) থেকে ৩ দিনের ট্রেনিং');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 1, 'আমি প্রবাসী অ্যাপে রেজিস্ট্রেশন ও বিএমইটি নম্বর গ্রহণ', '''Ami Probashi'' অ্যাপ ডাউনলোড করুন অথবা amiprobashi.com পোর্টালে যান। আপনার পাসপোর্ট নম্বর দিয়ে স্ক্যান করে ডাটাবেজ রেজিস্ট্রেশন সম্পন্ন করুন এবং ৩০০ টাকা ফি দিন।', 'https://amiprobashi.com', 'নাম ও পাসপোর্ট তথ্য শতভাগ পাসপোর্টের সাথে মিল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 2, 'PDO ট্রেনিং সম্পন্ন করা', 'নিকটস্থ সরকারি টিটিসি (Technical Training Center)-তে ৩ দিনের প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) ট্রেনিংয়ে অংশ নিন এবং অনলাইন সনদ ডাউনলোড করুন।', NULL, 'PDO সার্টিফিকেট ছাড়া বহির্গমন ছাড়পত্রের আবেদন গ্রহণ করা হয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 3, 'ভিসা ও চুক্তিপত্র যাচাই এবং ফি প্রদান', 'ভিসা কপি, মেডিকেল সনদ ও জব কন্ট্রাক্ট আপলোড করে ক্লিয়ারেন্সের জন্য আবেদন করুন। মোট সরকারি ফি (কল্যাণ ফি ৩৫০০ + বীমা ১০০০ + কার্ড ২৫০ = মোট ৪,৭৫০ টাকা) অনলাইনে বিকাশ বা ব্যাংকে পরিশোধ করুন।', NULL, 'দালাল বা এজেন্সিকে অতিরিক্ত কোনো টাকা দেওয়ার প্রয়োজন নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bmet-smart-card-emigration-clearance', 4, 'ডিজিটাল স্মার্ট কার্ড ও কিউআর ক্লিয়ারেন্স ডাউনলোড', 'বিএমইটি কর্মকর্তা কর্তৃক আবেদন অনুমোদিত হলে মোবাইলে কিউআর কোডযুক্ত ডিজিটাল ই-ক্লিয়ারেন্স কার্ড পাওয়া যায়। এটি প্রিন্ট করে বিমানবন্দরে ইমিগ্রেশনে দেখালেই বিদেশ যাওয়া যায়।', NULL, NULL);
            

-- Service: জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা (bd-land-deed-registration-fees-breakdown)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-deed-registration-fees-breakdown', 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা', 'Bangladesh Sub-Registry Land Deed Registration Official Fees Breakdown', 
            'ভূমি ও জমিজমা সেবা', NULL, 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ', 
            'জমি বা ফ্ল্যাট ক্রয়ের পর সাব-রেজিস্ট্রি অফিসে জমি রেজিস্ট্রি করতে গেলে দলিল লেখক ও দালালরা অজ্ঞতার সুযোগ নিয়ে ১৫-২০% টাকা হাতিয়ে নেয়। সরকারি গ্যাজেট অনুযায়ী মোট রেজিস্ট্রেশন খরচ দলিলের সরকারি বাজারমূল্যের মাত্র ৮% থেকে ৯.৫% (এলাকাভেদে)।', 'দলিল উপস্থাপনের দিনই সম্পাদন ও মূল রসিদ (৫২ ধারা) প্রদান', 
            'http://www.dolil.gov.bd', 'http://www.dolil.gov.bd', 
            'https://mor.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দলিল লেখক বা নকলনবিশরা সাব-রেজিস্ট্রারের নামে ''অফিস খরচ'' বা ''টেবিল কালেকশন'' হিসেবে ৫০ হাজার থেকে লাখ টাকা পর্যন্ত দাবি করে, যা সম্পূর্ণ অবৈধ ও ঘুষ। সরকারি চালানের রসিদের বাইরে কোনো ব্যক্তিকে নগদ টাকা দেবেন না।', 
            'রেজিস্ট্রি অফিসে ঘুষ দাবি করলে দুর্নীতি দমন কমিশন (দুদক) হটলাইন ১০৬-এ ফোন করে সরাসরি ট্র্যাপ অভিযানে সহায়তা নিন অথবা জেলা রেজিস্ট্রার বরাবরে অভিযোগ দিন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-deed-registration-fees-breakdown';
DELETE FROM service_documents WHERE service_id = 'bd-land-deed-registration-fees-breakdown';
DELETE FROM service_steps WHERE service_id = 'bd-land-deed-registration-fees-breakdown';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'রেজিস্ট্রেশন ফি (Registration Fee)', 1.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২১২২-০০০১-১৮১৬)', 'দলিলের মোট মূল্যের ১% (নূন্যতম ১০০ টাকা)');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'স্ট্যাম্প শুল্ক (Stamp Duty)', 1.5, 1, 'জুডিশিয়াল স্ট্যাম্প বা ই-চালান', 'দলিলের মোট মূল্যের ১.৫%');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'স্থানীয় সরকার কর (Local Govt Tax)', 3.0, 1, 'ব্যাংক পে-অর্ডার / চালান', 'সিটি কর্পোরেশন/পৌরসভায় ৩%, ইউনিয়ন পরিষদে ২%');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'উৎস কর / এআইটি (AIT - আয়কর কর্ড)', 3.0, 1, 'ট্রেজারি চালান', 'জমির এলাকাভিত্তিক ১% থেকে সর্বোচ্চ ৫% পর্যন্ত (গ্রামাঞ্চলে সাধারণত ১-২%)');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'হলফনামা স্ট্যাম্প ও এন-ফি', 300.0, 1, 'নন-জুডিশিয়াল স্ট্যাম্প', 'হলফনামা ৩০০ টাকার স্ট্যাম্প + এন ফি প্রতি ৩০০ শব্দে ২৪ টাকা');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'প্রস্তুতকৃত সাফ-কবলা দলিল ও হলফনামা', 1, 0, 'জুডিশিয়াল স্ট্যাম্পে প্রিন্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'বিক্রেতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি', 1, 0, 'অনলাইন কিউআর কোড কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) দাখিলা', 1, 0, 'ডিজিটাল রশিদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ রঙিন ছবি', 1, 0, 'ফটোকপি ও সত্যায়িত ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-deed-registration-fees-breakdown', 'ট্রেজারি চালান ও স্থানীয় সরকার পে-অর্ডারের মূল কপি', 1, 0, 'ব্যাংক রসিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-deed-registration-fees-breakdown', 1, 'জমির সরকারি মৌজা রেট যাচাই', 'dolil.gov.bd বা সাব-রেজিস্ট্রি অফিসে গিয়ে সংশ্লিষ্ট মৌজার সরকার নির্ধারিত সর্বনিম্ন বাজারমূল্য (মৌজা রেট) জানুন। দলিলের মূল্য এর কম হতে পারবে না।', 'http://www.dolil.gov.bd', 'দালালরা মৌজা রেটের হিসাব লুকিয়ে বাড়তি টাকা দাবি করে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-deed-registration-fees-breakdown', 2, 'ব্যাংক চালান ও পে-অর্ডার তৈরি', 'মৌজা মূল্যের উপর ১% রেজিস্ট্রেশন ফি, ১.৫% স্ট্যাম্প শুল্ক, স্থানীয় সরকার কর (২-৩%) সোনালী ব্যাংকে চালানের মাধ্যমে জমা দিয়ে মূল রসিদ নিন।', NULL, 'সকল ফি সরকারি চালানে সরাসরি সোনালী ব্যাংক বা বাংলাদেশ ব্যাংকে জমা হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-deed-registration-fees-breakdown', 3, 'সাব-রেজিস্ট্রারের এজলাসে দলিল উপস্থাপন ও বায়োমেট্রিক', 'ক্রেতা, বিক্রেতা ও সাক্ষীরা সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে ফিঙ্গারপ্রিন্ট ও স্বাক্ষর প্রদান করুন। কোনো কর্মকর্তা বা কর্মচারীকে বাড়তি ঘুষ দেবেন না।', NULL, 'সাব-রেজিস্ট্রার দলিল যাচাই করে স্বাক্ষর করবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-deed-registration-fees-breakdown', 4, '৫২ ধারার রসিদ গ্রহণ ও মূল দলিল উত্তোলন', 'রেজিস্ট্রি সম্পন্ন হলে সাব-রেজিস্ট্রি অফিস থেকে ৫২ ধারার মূল প্রাপ্তি রসিদ বুঝে নিন। পরবর্তীতে এই রসিদ জমা দিয়ে মূল রেজিস্ট্রিকৃত দলিল তুলতে পারবেন।', NULL, NULL);
            

-- Service: দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা (bd-land-certified-copy-deed-nakal)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-certified-copy-deed-nakal', 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা', 'Bangladesh Sub-Registry Certified Copy of Registered Deed (Nakal Guide)', 
            'ভূমি ও জমিজমা সেবা', NULL, 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ', 
            'পুরোনো রেজিস্ট্রিকৃত দলিলের নকল (সার্টিফাইড কপি) তোলার জন্য সাব-রেজিস্ট্রি অফিসে নকলনবিশ ও দালাল চক্র সাধারণ মানুষকে জিম্মি করে ৩,০০০ থেকে ১০,০০০ টাকা আদায় করে। অথচ সরকারি নির্ধারিত নকল ফি মাত্র ২০০ থেকে ৫০০ টাকা।', 'সাধারণ নকল: ৭ কার্যদিবস | জরুরি নকল: ৩ কার্যদিবস', 
            'http://www.dolil.gov.bd', 'http://www.dolil.gov.bd', 
            'https://mor.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: সাব-রেজিস্ট্রি অফিসের বাইরে ঘোরাঘুরি করা দালালরা নকল তুলে দেওয়ার নামে বিশাল অঙ্ক দাবি করে। আপনি নিজে সাব-রেজিস্ট্রি অফিসে ঢুকে সরাসরি রেকর্ড শাখায় ২০ টাকার কোর্ট ফি দিয়ে আবেদন করতে পারেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-certified-copy-deed-nakal';
DELETE FROM service_documents WHERE service_id = 'bd-land-certified-copy-deed-nakal';
DELETE FROM service_steps WHERE service_id = 'bd-land-certified-copy-deed-nakal';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-certified-copy-deed-nakal', 'দলিল তল্লাশি ফি (Search Fee - ১ বছরের জন্য)', 20.0, 1, 'কোর্ট ফি স্ট্যাম্প', '১ বছরের বেশি তল্লাশির ক্ষেত্রে প্রতি বছরের জন্য অতিরিক্ত ১৫ টাকা');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-certified-copy-deed-nakal', 'নকল ফি (Copy Fee - প্রতি ৩০০ শব্দে)', 24.0, 1, 'কোর্ট ফি / সরকারি স্ট্যাম্প', 'সরকারি নির্ধারিত শব্দভিত্তিক ফি');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-certified-copy-deed-nakal', 'জরুরি নকল ফি (Urgent Fee)', 50.0, 1, 'স্ট্যাম্প', 'জরুরি ভিত্তিতে নকল চাইলে অতিরিক্ত ফি');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-certified-copy-deed-nakal', 'সার্টিফাইড স্ট্যাম্প ফি', 50.0, 1, 'স্ট্যাম্প', 'দলিল প্রমাণের আসল সিলমোহর ফি');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-certified-copy-deed-nakal', 'আবেদনকারীর এনআইডি (NID) নম্বর ও মোবাইল নম্বর', 1, 0, 'আবেদনে উল্লেখ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-certified-copy-deed-nakal', 'দলিল নম্বর, রেজিস্ট্রির সাল ও সাব-রেজিস্ট্রি অফিসের নাম', 1, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-certified-copy-deed-nakal', 'দলিল নম্বর জানা না থাকলে দাতা ও গ্রহীতার নাম এবং মৌজার বিবরণ', 0, 0, 'তল্লাশির জন্য তথ্য', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-certified-copy-deed-nakal', 1, 'নির্ধারিত ফরমে আবেদন ও কোর্ট ফি সংযোজন', 'সাব-রেজিস্ট্রি অফিসের নকল শাখায় নির্ধারিত আবেদন ফরমে দলিলের নম্বর, সাল ও জমির বিবরণ লিখুন। আবেদনের উপরে ২০ টাকার কোর্ট ফি লাগান।', 'http://www.dolil.gov.bd', 'দলিল নম্বর জানা থাকলে কোনো তল্লাশি ফি ছাড়া সরাসরি নকলের আবেদন করা যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-certified-copy-deed-nakal', 2, 'নকল শাখায় জমা ও রসিদ গ্রহণ', 'আবেদনপত্রটি সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিসের রেকর্ড কিপারের কাছে জমা দিন এবং একটি গ্রহণ রসিদ (টোকেন) নিন যাতে সম্ভাব্য ডেলিভারির তারিখ লেখা থাকবে।', NULL, 'কোনো মুহুরি বা নকলনবিশকে ব্যক্তিগতভাবে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-certified-copy-deed-nakal', 3, 'নকলের মূল পাতার স্ট্যাম্প প্রদান ও নকল গ্রহণ', 'দলিল যত পাতার হবে সেই অনুযায়ী সরকারি মূল্যের স্ট্যাম্প জমা দিয়ে সাব-রেজিস্ট্রারের স্বাক্ষর ও সিলযুক্ত আসল সার্টিফাইড নকল বুঝে নিন।', NULL, 'এই নকল কপি আদালত ও ব্যাংকে মূল দলিলের সমতুল্য হিসেবে গ্রহণযোগ্য।');
            

-- Service: ই-ট্রেড লাইসেন্স নতুন আবেদন ও নবায়ন নির্দেশিকা (bd-etrade-license-citycorp-union-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-etrade-license-citycorp-union-guide', 'ই-ট্রেড লাইসেন্স নতুন আবেদন ও নবায়ন নির্দেশিকা', 'Bangladesh e-Trade License (City Corp, Pourashava, Union Parishad) Official Fee Guide', 
            'ব্যবসা ও বাণিজ্য সেবা', NULL, 'স্থানীয় সরকার বিভাগ, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়', 
            'যেকোনো বৈধ ব্যবসা শুরু করতে ট্রেড লাইসেন্স বাধ্যতামূলক। ইউনিয়ন পরিষদ বা সিটি কর্পোরেশনের সামনে দালালরা ট্রেড লাইসেন্সের জন্য ১০,০০০ থেকে ২৫,০০০ টাকা নেয়। অনলাইনে etradelicense.gov.bd বা সংশ্লিষ্ট সিটি কর্পোরেশন পোর্টালে সরকার নির্ধারিত ন্যূনতম ফি দিয়ে নিজে নিজেই লাইসেন্স পাওয়া যায়।', 'অনলাইন আবেদন ও ফি জমার পর সর্বোচ্চ ৩ কার্যদিবসের মধ্যে ডিজিটাল লাইসেন্স প্রস্তুত', 
            'https://etradelicense.gov.bd', 'https://etradelicense.gov.bd', 
            'https://lgd.gov.bd/site/view/citizen_charter', 'সতর্কতা: সিটি কর্পোরেশন ও ইউনিয়ন পরিষদের দালালের মাধ্যমে অফলাইন ট্রেড লাইসেন্স নেবেন না। অনেক সময় তারা জাল বা ভূয়া সিল দেওয়া লাইসেন্স ধরিয়ে দেয় যা দিয়ে পরবর্তীতে ব্যাংক একাউন্ট খোলা বা ট্যাক্স ফাইল করা যায় না। সম্পূর্ণ অনলাইন সিস্টেম ব্যবহার করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-etrade-license-citycorp-union-guide';
DELETE FROM service_documents WHERE service_id = 'bd-etrade-license-citycorp-union-guide';
DELETE FROM service_steps WHERE service_id = 'bd-etrade-license-citycorp-union-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'ইউনিয়ন পরিষদ ট্রেড লাইসেন্স (সাধারণ ক্ষুদ্র ব্যবসা)', 500.0, 1, 'অনলাইন / ইউনিয়ন পরিষদ ক্যাশ রসিদ', 'বার্ষিক সরকারি ফি ৫০০ থেকে ১,০০০ টাকা মাত্র।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'পৌরসভা ট্রেড লাইসেন্স (মাঝারি ব্যবসা)', 1500.0, 1, 'অনলাইন পেমেন্ট গেটওয়ে', 'ব্যবসার ধরন অনুযায়ী ১,৫০০ থেকে ৩,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'সিটি কর্পোরেশন ট্রেড লাইসেন্স (আইটি / জেনারেল ট্রেডিং)', 3500.0, 1, 'অনলাইন পেমেন্ট (বিকাশ, রকেট, কার্ড)', 'লাইসেন্স ফি ২০০০ + সাইনবোর্ড কর + ১৫% ভ্যাট অন্তর্ভুক্ত।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'ব্যবসায়ীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'ব্যবসা প্রতিষ্ঠানের ভাড়ার চুক্তিপত্র অথবা নিজস্ব দোকান হলে হোল্ডিং ট্যাক্স দাখিলা', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'আবেদনকারীর পাসপোর্ট সাইজ রঙিন ছবি', 1, 0, 'ডিজিটাল ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-etrade-license-citycorp-union-guide', 'ই-টিআইএন (e-TIN) সার্টিফিকেট', 0, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-etrade-license-citycorp-union-guide', 1, 'ই-ট্রেড লাইসেন্স পোর্টালে প্রবেশ', 'https://etradelicense.gov.bd (অথবা ঢাকা উত্তর/দক্ষিণ হলে নিজ নিজ সিটি কর্পোরেশনের ট্রেড লাইসেন্স পোর্টাল)-এ যান। মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।', 'https://etradelicense.gov.bd', 'আপনার ব্যবসার সঠিক ক্যাটাগরি (খুচরা, পাইকারি, আইটি, কনসালটেন্সি) নির্বাচন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-etrade-license-citycorp-union-guide', 2, 'ব্যবসার ঠিকানা ও ভাড়া চুক্তি আপলোড', 'ব্যবসা প্রতিষ্ঠানের সাইনবোর্ড নাম, ঠিকানা এবং ভাড়ার চুক্তিপত্রের স্ক্যান কপি আপলোড করুন।', NULL, 'কোনো ভুয়া দলিল আপলোড করবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-etrade-license-citycorp-union-guide', 3, 'অনলাইনে সরকারি ফি পরিশোধ', 'বিকাশ, রকেট বা ব্যাংক কার্ড দিয়ে নির্ধারিত ফি প্রদান করুন। ফি জমা হওয়ার সাথে সাথেই একটি ডিজিটাল প্রাপ্তি ট্র্যাকিং স্লিপ পাবেন।', NULL, 'কোনো রাজস্ব পরিদর্শক বা দালালকে ক্যাশ টাকা দেওয়ার প্রয়োজন নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-etrade-license-citycorp-union-guide', 4, 'কিউআর কোডযুক্ত ডিজিটাল লাইসেন্স ডাউনলোড', 'লাইসেন্স অফিসার অনুমোদন দিলে তৎক্ষণাৎ কিউআর কোডযুক্ত রঙিন ই-ট্রেড লাইসেন্স ডাউনলোড ও কালার প্রিন্ট করে দোকানে ঝুলিয়ে রাখুন। এটি দিয়ে যে কোনো ব্যাংকে কারেন্ট একাউন্ট খোলা যায়।', NULL, NULL);
            

-- Service: বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা (bd-brta-vehicle-registration-numberplate)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-vehicle-registration-numberplate', 'বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা', 'Bangladesh BRTA Motor Vehicle Registration, Digital Number Plate & RFID Tag Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ', 
            'মোটরসাইকেল বা গাড়ি কেনার পর রেজিস্ট্রেশনের জন্য শোরুমের দালালরা ২৫,০০০ থেকে ৫০,০০০ টাকা দাবি করে। বিআরটিএ সেবা বাতায়ন (BSP) পোর্টালে সরাসরি সরকার নির্ধারিত ফি জমা দিয়ে নিজে নিজেই রেজিস্ট্রেশন ও বায়োমেট্রিক দিয়ে স্মার্ট কার্ড এবং ডিজিটাল নম্বর প্লেট গ্রহণ করা যায়।', 'রেজিস্ট্রেশন নম্বর বরাদ্দ: ফি জমার পর ২-৩ দিন | স্মার্ট কার্ড ও প্লেট সংযোজন: ১৫-৩০ কার্যদিবস', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.gov.bd/site/view/citizen_charter', 'সতর্কতা: বিআরটিএ চত্বরে দালালদের ফাঁদে পড়বেন না। শোরুমের বিক্রেতারা প্রায়ই রেজিস্ট্রেশন ফির নামে ৮,০০০ থেকে ১৫,০০০ টাকা অতিরিক্ত আত্মসাৎ করে। আপনি নিজে বিএসপি পোর্টালে ফি দিয়ে সরাসরি রেজিস্ট্রেশন করতে পারেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-vehicle-registration-numberplate';
DELETE FROM service_documents WHERE service_id = 'bd-brta-vehicle-registration-numberplate';
DELETE FROM service_steps WHERE service_id = 'bd-brta-vehicle-registration-numberplate';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসি পর্যন্ত)', 13913.0, 1, 'BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক', 'রেজিস্ট্রেশন ফি + রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট + আরএফআইডি ট্যাগ + ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট ও ট্যাক্স টোকেন (২ বছর) অন্তর্ভুক্ত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসির ঊর্ধ্বে)', 21232.0, 1, 'BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক', 'রেজিস্ট্রেশন ফি + নম্বর প্লেট + আরএফআইডি + ১০ বছরের ট্যাক্স টোকেন অন্তর্ভুক্ত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'ডিজিটাল নম্বর প্লেট ও আরএফআইডি ফি (আলাদা প্রতিস্থাপন)', 2260.0, 1, 'অনলাইন পেমেন্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'যানবাহন বিক্রয়কারী প্রতিষ্ঠানের বিক্রয় চালান (Sales Invoice / Gate Pass)', 1, 0, 'মূল কপি ও স্ক্যান', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'ক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'ই-টিআইএন (e-TIN) সার্টিফিকেট ও রিটার্ন জমার রশিদ', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-registration-numberplate', 'আমদানি সংক্রান্ত বিল অব এন্ট্রি ও কাস্টমস ডিউটি সনদ (আমদানিকৃত গাড়ির ক্ষেত্রে)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-registration-numberplate', 1, 'বিআরটিএ সার্ভিস পোর্টালে রেজিস্ট্রেশন আবেদন', 'https://bsp.brta.gov.bd পোর্টালে লগইন করে ''মোটরযান রেজিস্ট্রেশন'' মেনুতে যান। চেসিস নম্বর ও ইঞ্জিন নম্বর দিন।', 'https://bsp.brta.gov.bd', 'শোরুমের সেলস ইনভয়েসের চেসিস নম্বরের সাথে সতর্কভাবে মিলিয়ে নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-registration-numberplate', 2, 'অনলাইনে নির্ধারিত সরকারি ফি পরিশোধ', 'সিস্টেমে প্রদর্শিত সরকারি ফি বিকাশ বা ব্যাংকের মাধ্যমে সরাসরি জমা দিন। কোনো দালাল বা শোরুমের কর্মচারীকে অতিরিক্ত টাকা দেওয়ার প্রয়োজন নেই।', NULL, 'পেমেন্ট সফল হলে স্বয়ংক্রিয়ভাবে মানি রসিদ ও রেজিস্ট্রেশন ট্র্যাকিং কোড তৈরি হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-registration-numberplate', 3, 'যানবাহন পরিদর্শন ও বায়োমেট্রিক প্রদান', 'নির্দিষ্ট দিনে গাড়ি/বাইক নিয়ে বিআরটিএ সার্কেল অফিসে যান। মোটরযান পরিদর্শক ফিজিক্যাল চেসিস ও ইঞ্জিন মিলিয়ে রিপোর্ট দেবেন। এরপর বায়োমেট্রিক ছবি ও আঙুলের ছাপ দিন।', NULL, 'পরিদর্শনের জন্য কোনো ফি নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-registration-numberplate', 4, 'ডিজিটাল নম্বর প্লেট ও আরএফআইডি ট্যাগ সংযোজন', 'এসএমএস পাওয়ার পর বিআরটিএ বুথ থেকে আপনার গাড়িতে সরকারি সিলসহ রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট এবং উইন্ডশিল্ডে আরএফআইডি ট্যাগ লাগিয়ে নিন।', NULL, NULL);
            

-- Service: সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন (bd-social-safety-allowances-dss)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-social-safety-allowances-dss', 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন', 'Bangladesh Social Safety Net Allowances (Old Age, Widow, Disability Allowance) Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়', 
            'হতদরিদ্র, বয়োবৃদ্ধ, বিধবা এবং প্রতিবন্ধী ব্যক্তিদের সহায়তার জন্য সরকার সরাসরি মোবাইল ব্যাংকিংয়ের (বিকাশ/নগদ) মাধ্যমে প্রতি মাসে ভাতা প্রদান করে। এই ভাতা পেতে স্থানীয় মেম্বার, চেয়ারম্যান বা দালালকে কোনো টাকা দিতে হয় না। আবেদন সম্পূর্ণ বিনামূল্যে করা যায়।', 'ইউনিয়ন/উপজেলা কমিটি কর্তৃক চূড়ান্ত যাচাই সাপেক্ষে নিয়মিত বরাদ্দ', 
            'https://dss.gov.bd', 'https://mis.bhata.gov.bd', 
            'https://dss.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: বয়স্ক ভাতা বা বিধবা ভাতার কার্ড করে দেওয়ার নামে গ্রামের মেম্বার বা দালালরা ৩,০০০ থেকে ১০,০০০ টাকা ঘুষ দাবি করে। এটি একটি শাস্তিযোগ্য অপরাধ। ভাতা সম্পূর্ণ ডিজিটাল পদ্ধতিতে কোনো কার্ড বা বই ছাড়াই সরাসরি মোবাইলে চলে যায়। কাউকে কোনো টাকা দেবেন না।', 
            'ভাতা প্রদানে ঘুষ দাবি করা হলে উপজেলা নির্বাহী কর্মকর্তা (UNO) অথবা সমাজসেবা অধিদপ্তরের হটলাইন ১০৯৮-এ অভিযোগ করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-social-safety-allowances-dss';
DELETE FROM service_documents WHERE service_id = 'bd-social-safety-allowances-dss';
DELETE FROM service_steps WHERE service_id = 'bd-social-safety-allowances-dss';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-social-safety-allowances-dss', 'ভাতা আবেদন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আবেদন করার জন্য কোনো ফি বা ঘুষ দেওয়ার কোনো বিধান নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-social-safety-allowances-dss', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি / অনলাইন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-social-safety-allowances-dss', 'সুবিধাভোগীর নামে নিবন্ধিত সচল নগদ/বিকাশ একাউন্টের সিম', 1, 0, 'মোবাইল নম্বর', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-social-safety-allowances-dss', 'সুবর্ণ নাগরিক প্রতিবন্ধী পরিচয়পত্র (শুধুমাত্র প্রতিবন্ধী ভাতার ক্ষেত্রে)', 0, 0, 'সমাজসেবা অধিদপ্তর কর্তৃক প্রদত্ত আইডি', 'উপজেলা সমাজসেবা অফিস থেকে বিনামূল্যে সংগ্রহ করা যায়');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-social-safety-allowances-dss', 'স্বামীর মৃত্যু সনদ (বিধবা ভাতার ক্ষেত্রে)', 0, 0, 'ডিজিটাল মৃত্যু সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-social-safety-allowances-dss', 1, 'সমাজসেবা পোর্টালে অনলাইন আবেদন', 'https://mis.bhata.gov.bd পোর্টালে যান অথবা ইউনিয়ন ডিজিটাল সেন্টারের (UDC) সহায়তায় বিনামূল্যে আবেদন করুন।', 'https://mis.bhata.gov.bd', 'মোবাইল নম্বরটি অবশ্যই আবেদনকারীর নিজের নামে বায়োমেট্রিক সিম হতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-social-safety-allowances-dss', 2, 'কমিটি কর্তৃক যাচাই ও তালিকাভুক্তকরণ', 'ইউনিয়ন বা ওয়ার্ড কমিটি আপনার দারিদ্র্যসীমা ও বয়স যাচাই করবে (পুরুষের ক্ষেত্রে সর্বনিম্ন ৬৫ বছর এবং মহিলার ক্ষেত্রে সর্বনিম্ন ৬২ বছর)।', NULL, 'কোনো জনপ্রতিনিধি ভাতা তালিকায় নাম দেওয়ার জন্য টাকা চাইলে সরাসরি ইউএসও বা ডিসিকে জানান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-social-safety-allowances-dss', 3, 'সরাসরি মোবাইলে টাকা গ্রহণ', 'তালিকাভুক্ত হলে সরকারি ফান্ড থেকে সরাসরি আপনার নগদ বা বিকাশ অ্যাকাউন্টে কোনো মধ্যস্বত্বভোগী ছাড়া মাসিক ভাতার টাকা চলে আসবে। কোনো ক্যাশ ডেলিভারি বা হাতবদলের সুযোগ নেই।', NULL, NULL);
            

-- Service: সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা (bd-universal-pension-upension-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-universal-pension-upension-guide', 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা', 'Bangladesh Universal Pension Scheme (UPension) Registration & Installment Guide', 
            'অর্থ ও পেনশন সেবা', NULL, 'জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়', 
            '১৮ থেকে ৫০ বছর বয়সী সকল বাংলাদেশি নাগরিক এবং প্রবাসীদের জন্য সরকার সর্বজনীন পেনশন স্কিম চালু করেছে। কোনো ব্যাংক বা দালালের কাছে না গিয়ে upension.gov.bd পোর্টাল থেকে সরাসরি রেজিস্ট্রেশন ও মোবাইল ব্যাংকিং দিয়ে মাসিক চাঁদা পরিশোধ করা যায়।', 'তাৎক্ষণিক অনলাইনে পেনশন আইডি ও কিউআর সনদ প্রদান', 
            'https://upension.gov.bd', 'https://upension.gov.bd', 
            'https://mof.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: সর্বজনীন পেনশনে অন্তর্ভুক্ত হতে কোনো দালাল বা এজেন্টের শরণাপন্ন হবেন না। আপনার চাঁদা সরাসরি বাংলাদেশ ব্যাংকের ট্রেজারি অ্যাকাউন্টে সুরক্ষিত থাকে। সোনালী ব্যাংক বা যেকোনো স্মার্টফোন থেকে নিজেই এটি পরিচালনা করতে পারেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-universal-pension-upension-guide';
DELETE FROM service_documents WHERE service_id = 'bd-universal-pension-upension-guide';
DELETE FROM service_steps WHERE service_id = 'bd-universal-pension-upension-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-universal-pension-upension-guide', 'নিবন্ধন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'রেজিস্ট্রেশনের কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-universal-pension-upension-guide', 'প্রবাস স্কিম মাসিক চাঁদা (প্রবাসী বাংলাদেশিদের জন্য)', 2000.0, 1, 'বৈদেশিক ক্রেডিট কার্ড / অনলাইন গেটওয়ে', 'মাসিক ২০০০, ৫০০০, ৭৫০০ বা ১০,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-universal-pension-upension-guide', 'প্রগতি স্কিম (বেসরকারি চাকরিজীবী)', 2000.0, 1, 'বিকাশ, নগদ, কার্ড', 'মাসিক ২০০০, ৩০০০, ৫০০০ বা ১০,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-universal-pension-upension-guide', 'সুরক্ষা স্কিম (অনানুষ্ঠানিক খাতের কর্মী/কৃষক/চালক)', 1000.0, 1, 'মোবাইল ব্যাংকিং', 'মাসিক ১০০০, ২০০০, ৩০০০ বা ৫০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-universal-pension-upension-guide', 'সমতা স্কিম (স্বল্প আয়ের মানুষ - ৫০% সরকার প্রদান করে)', 500.0, 1, 'অনলাইন', 'নাগরিক ৫০০ টাকা দিলে সরকার বাকি ৫০০ টাকা জমা দেয়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-universal-pension-upension-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর', 1, 0, 'অনলাইন ভেরিফিকেশন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-universal-pension-upension-guide', 'নমিনীর জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-universal-pension-upension-guide', 'আবেদনকারীর নিজস্ব ব্যাংক একাউন্ট নম্বর ও রাউটিং কোড', 1, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-universal-pension-upension-guide', 1, 'পেনশন পোর্টালে স্কিম নির্বাচন', 'https://upension.gov.bd ওয়েবসাইটে যান। ''পেনশন আবেদন'' বাটনে ক্লিক করুন। আপনার পেশা অনুযায়ী উপযুক্ত স্কিম (প্রবাস, প্রগতি, সুরক্ষা বা সমতা) নির্বাচন করুন।', 'https://upension.gov.bd', 'স্বল্প আয়ের পরিবার হলে সমতা স্কিম নির্বাচন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-universal-pension-upension-guide', 2, 'এনআইডি ও ব্যাংক তথ্য পূরণ', 'এনআইডি এবং জন্মতারিখ দিন। নির্বাচন কমিশনের ডাটাবেজ থেকে স্বয়ংক্রিয়ভাবে ছবি ও তথ্য চলে আসবে। এরপর আপনার ব্যাংক একাউন্টের তথ্য এবং নমিনীর তথ্য পূরণ করুন।', NULL, 'নমিনীর তথ্য নির্ভুলভাবে দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-universal-pension-upension-guide', 3, 'প্রথম কিস্তির চাঁদা পেমেন্ট ও ইউনিক আইডি লাভ', 'বিকাশ, নগদ বা ব্যাংক কার্ড দিয়ে প্রথম কিস্তির চাঁদা দিন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই আপনাকে একটি ইউনিক পেনশন আইডি (UID) দেওয়া হবে।', NULL, 'প্রতি মাসে মোবাইল থেকে নিয়মিত ঘরে বসেই চাঁদা জমা দিতে পারবেন।');
            

-- Service: শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা (bd-education-board-certificate-correction)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-education-board-certificate-correction', 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা', 'Bangladesh Education Board SSC/HSC Certificate & Marksheet Correction Official Fee Guide', 
            'শিক্ষা ও শিক্ষাবোর্ড সেবা', NULL, 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)', 
            'এসএসসি বা এইচএসসি সার্টিফিকেটে নিজের নাম, পিতার নাম, মাতার নাম বা জন্মতারিখ ভুল থাকলে বোর্ড অফিসের চত্বরে দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে। অথচ শিক্ষাবোর্ডের অনলাইন পোর্টালে সরাসরি সরকার নির্ধারিত ফি দিয়ে নামজারি কমিটির সভায় নির্ভুলভাবে সংশোধন করা যায়।', 'নাম ও বয়স সংশোধন কমিটির সভা অনুযায়ী ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://dhakaeducationboard.gov.bd', 'https://dhakaeducationboard.gov.bd', 
            'https://dhakaeducationboard.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: বোর্ড প্রাঙ্গণে কোনো বহিরাগত ব্যক্তির সাথে সনদের নাম সংশোধনের জন্য চুক্তি করবেন না। তাদের দেওয়া ভূয়া সিল বা জাল সার্টিফিকেট দিয়ে পাসপোর্টে জালিয়াতি ধরা পড়লে ফৌজদারি আইনে জেল হতে পারে। বোর্ডের পুরো পদ্ধতিটি এখন অনলাইন ট্র্যাকিংযুক্ত।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-education-board-certificate-correction';
DELETE FROM service_documents WHERE service_id = 'bd-education-board-certificate-correction';
DELETE FROM service_steps WHERE service_id = 'bd-education-board-certificate-correction';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-education-board-certificate-correction', 'প্রতি সার্টিফিকেটে নাম ও তথ্য সংশোধন ফি', 500.0, 1, 'সোনালী সেবা / বিকাশ', 'বোর্ড নির্ধারিত ফি প্রতি সনদে ৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-education-board-certificate-correction', 'প্রতি সনদের নতুন মূল কপি উত্তোলন ফি (সংশোধনের পর)', 558.0, 1, 'সোনালী ব্যাংক ই-সেবা', 'সংশোধিত মূল সনদ প্রিন্ট ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-education-board-certificate-correction', 'মার্কশিট / একাডেমিক ট্রান্সক্রিপ্ট সংশোধন ফি', 500.0, 1, 'অনলাইন', 'প্রতি মার্কশিট ফি ৫০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-education-board-certificate-correction', 'আবেদনকারীর অনলাইন জন্ম নিবন্ধন সনদ ও জাতীয় পরিচয়পত্র', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-education-board-certificate-correction', 'পিতা ও মাতার জাতীয় পরিচয়পত্র (পিতা-মাতার নাম সংশোধনের ক্ষেত্রে)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-education-board-certificate-correction', 'অধ্যক্ষ / প্রধান শিক্ষক কর্তৃক ফরওয়ার্ডিং প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত স্ক্যান কপি', 'যে স্কুল/কলেজ থেকে পরীক্ষা পাস করেছেন');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-education-board-certificate-correction', 'জাতীয় দৈনিকে বিজ্ঞপ্তি (বিজ্ঞপ্তির মূল কাটিং)', 1, 0, 'পত্রিকার মূল কপি স্ক্যান', 'যেকোনো বহুল প্রচারিত পত্রিকায় নাম সংশোধনের হারানো/ভুল বিজ্ঞপ্তি');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-education-board-certificate-correction', 1, 'সংশ্লিষ্ট শিক্ষাবোর্ডের ই-সেবা পোর্টালে আবেদন', 'নিজ শিক্ষাবোর্ডের পোর্টালে (যেমন ঢাকা বোর্ড: dhakaeducationboard.gov.bd) যান। ''নাম ও বয়স সংশোধন'' মেনুতে রোল নম্বর, রেজিস্ট্রেশন নম্বর ও পাসের সন দিয়ে ফর্ম পূরণ করুন।', 'https://dhakaeducationboard.gov.bd', 'জেএসসি, এসএসসি এবং এইচএসসি ধারাবাহিকভাবে সংশোধন করতে হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-education-board-certificate-correction', 2, 'প্রমাণপত্র আপলোড ও ফি পরিশোধ', 'পত্রিকার বিজ্ঞপ্তির কাটিং, প্রধান শিক্ষকের প্রত্যয়ন এবং জন্ম সনদ আপলোড করে ''সোনালী সেবা'' বা অনলাইন গেটওয়েতে ফি দিন।', NULL, 'বোর্ড কাউন্টারে কাউকে বাড়তি টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-education-board-certificate-correction', 3, 'নাম সংশোধন কমিটির ভার্চুয়াল বা সরাসরি মিটিং', 'বোর্ড কর্তৃক নির্ধারিত তারিখে অভিভাবক বা মূল কাগজপত্রসহ উপস্থিত হন। তথ্য সঠিক থাকলে কমিটি অনুমোদন দেবে।', NULL, 'অনুমোদনের পর পুরোনো মূল সনদ বোর্ডে জমা দিয়ে নতুন নির্ভুল সনদ সংগ্রহ করতে পারবেন।');
            

-- Service: জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি (bd-national-legal-aid-services)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-national-legal-aid-services', 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি', 'Bangladesh National Legal Aid Services (Free Legal Advice & Government Lawyer)', 
            'আইন ও বিচারিক সেবা', NULL, 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ', 
            'আদালতে মামলা লড়তে গিয়ে আইনজীবী ও আদালতের খরচে সর্বস্বান্ত হওয়া সাধারণ দরিদ্র মানুষের জন্য সরকার সম্পূর্ণ বিনামূল্যে সরকারি খরচে বিজ্ঞ আইনজীবী নিয়োগ ও মামলা পরিচালনার সুবিধা দেয়। জাতীয় টোল-ফ্রি হেল্পলাইন ১৬৪৩০-এ ফোন করে যে কেউ এই সুবিধা পেতে পারেন।', 'আবেদনের পর তাৎক্ষণিক আইনি পরামর্শ এবং ৩-৭ দিনের মধ্যে আইনজীবী নিয়োগ', 
            'http://www.nlaso.gov.bd', 'http://www.nlaso.gov.bd', 
            'http://nlaso.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: কোর্ট চত্বরে কোনো দালালের খপ্পরে পড়ে সর্বস্ব হারাবেন না। আপনি অসচ্ছল, প্রতিবন্ধী, দরিদ্র বা নির্যাতিত নারী হলে সরকার আপনার মামলার সমস্ত ব্যয়ভার বহন করবে।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-national-legal-aid-services';
DELETE FROM service_documents WHERE service_id = 'bd-national-legal-aid-services';
DELETE FROM service_steps WHERE service_id = 'bd-national-legal-aid-services';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-national-legal-aid-services', 'আইনগত সহায়তা ও আইনজীবী ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আইনজীবীর ফি, কোর্ট ফি ও মামলার সমস্ত খরচ সরকার বহন করে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-national-legal-aid-services', 'আবেদনকারীর জাতীয় পরিচয়পত্র বা জন্ম সনদ কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-national-legal-aid-services', 'মামলা বা বিরোধ সংক্রান্ত কাগজপত্রের ফটোকপি (যদি থাকে)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-national-legal-aid-services', 'দরিদ্রতার প্রমাণপত্র / বার্ষিক আয় বিবরণী (সাধারণত বাৎসরিক আয় অনূর্ধ্ব দেড় লাখ টাকা)', 0, 0, 'কাউন্সিলর / চেয়ারম্যান সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-national-legal-aid-services', 1, 'টোল-ফ্রি হেল্পলাইন ১৬৪৩০ নম্বরে কল বা অফিসে যোগাযোগ', 'যেকোনো মোবাইল বা ল্যান্ডফোন থেকে বিনা খরচে ১৬৪৩০ নম্বরে কল করুন অথবা আপনার জেলা জজ আদালত ভবনে অবস্থিত ''জেলা লিগ্যাল এইড অফিসে'' সরাসরি যান।', 'http://www.nlaso.gov.bd', '১৬৪৩০ নম্বরটি দিন-রাত ২৪ ঘণ্টা সরকারিভাবে ফ্রি।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-national-legal-aid-services', 2, 'বিনা খরচে আইনি পরামর্শ ও দরখাস্ত প্রদান', 'লিগ্যাল এইড অফিসার আপনার অভিযোগ শুনে বিনামূল্যে আইনি পরামর্শ দেবেন এবং দরখাস্ত গ্রহণ করবেন।', NULL, 'পারিবারিক বা জমিজমা সংক্রান্ত বিরোধ হলে প্রথমে বিনা কোর্ট ফিতে আপস-মীমাংসা (ADR) করা হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-national-legal-aid-services', 3, 'সরকারি আইনজীবী নিয়োগ ও মামলা পরিচালনা', 'আপসে না মিললে সরকার আপনার পক্ষে লড়ার জন্য প্যানেল আইনজীবী নিযুক্ত করবে। আপনাকে উকিলের কোনো ফি বা কোর্ট ফি দিতে হবে না।', NULL, NULL);
            

-- Service: আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা (bd-rjsc-company-registration-name-clearance)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-rjsc-company-registration-name-clearance', 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা', 'Bangladesh RJSC Private Limited Company Registration & Name Clearance Guide', 
            'ব্যবসা ও বাণিজ্য সেবা', NULL, 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়', 
            'প্রাইভেট লিমিটেড বা ওয়ান পারসন কোম্পানি (OPC) খোলার জন্য কোনো অসাধু সিএ ফার্ম বা দালালকে ৫০,০০০ থেকে ১ লাখ টাকা দেওয়ার প্রয়োজন নেই। roc.gov.bd পোর্টালে সরাসরি নাম ছাড়পত্র নিয়ে নির্ধারিত সরকারি ফি ব্যাংকে দিয়ে সম্পূর্ণ অনলাইনে কোম্পানি ইনকর্পোরেশন সার্টিফিকেট পাওয়া যায়।', 'নাম ছাড়পত্র: ১ কার্যদিবস | কোম্পানি রেজিস্ট্রেশন: ৩ থেকে ৫ কার্যদিবস', 
            'https://roc.gov.bd', 'https://roc.gov.bd', 
            'https://roc.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: আরজেএসসি ভবনে ঘুরঘুর করা মধ্যস্থতাকারীরা কোম্পানি রেজিস্ট্রেশনের জন্য বিপুল অঙ্কের চাঁদা দাবি করে। পুরো প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং ডিজিটালি পরিচালিত হয়। ঘরে বসেই এটি সম্পন্ন করা যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-rjsc-company-registration-name-clearance';
DELETE FROM service_documents WHERE service_id = 'bd-rjsc-company-registration-name-clearance';
DELETE FROM service_steps WHERE service_id = 'bd-rjsc-company-registration-name-clearance';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'নাম ছাড়পত্র ফি (Name Clearance Fee)', 230.0, 1, 'অনলাইন বিকাশ / সোনালী ব্যাংক একপে', 'মূল ফি ২০০ টাকা + ১৫% ভ্যাট ৩০ টাকা = ২৩০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'কোম্পানি রেজিস্ট্রেশন ফি (অনূর্ধ্ব ২০ লাখ টাকা মূলধন)', 4370.0, 1, 'অনলাইন পেমেন্ট / ব্যাংক চালান', 'অনুমোদিত মূলধনের ভিত্তিতে সরকারি স্লাব অনুযায়ী নির্ধারিত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'ডিজিটাল স্ট্যাম্প শুল্ক (MoA & AoA)', 3000.0, 1, 'ই-চালান / স্ট্যাম্প', 'মেমোরেন্ডাম ও আর্টিকেলের সরকারি স্ট্যাম্প।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'সকল শেয়ারহোল্ডার ও পরিচালকদের এনআইডি ও টিআইএন সার্টিফিকেট', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'কোম্পানির সংঘস্মারক (MoA) ও সংঘবিধি (AoA)', 1, 0, 'পিডিএফ ফাইল', 'স্ট্যান্ডার্ড ড্রাফট RJSC সাইটে বিনামূল্যে পাওয়া যায়');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rjsc-company-registration-name-clearance', 'কোম্পানির নিবন্ধিত কার্যালয়ের ঠিকানার প্রমাণপত্র', 1, 0, 'ভাড়া চুক্তি / ইউটিলিটি বিল', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rjsc-company-registration-name-clearance', 1, 'আরজেএসসি পোর্টালে নাম ছাড়পত্র (Name Clearance) আবেদন', 'https://roc.gov.bd ওয়েবসাইটে গিয়ে ইউজারের একাউন্ট খুলুন। আপনার প্রস্তাবিত কোম্পানির নাম দিয়ে সার্চ করে ২৩০ টাকা ফি পরিশোধ করুন। ২৪ ঘণ্টার মধ্যে ডিজিটাল নাম ছাড়পত্র চলে আসবে।', 'https://roc.gov.bd', 'নামটি যেন বিদ্যমান কোনো কোম্পানির সাথে মিলে না যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rjsc-company-registration-name-clearance', 2, 'MoA ও AoA তৈরি ও ফরম পূরণ', 'অনলাইনে ফর্ম-১, ফর্ম-৬, ফর্ম-৯, ফর্ম-১০ এবং ফর্ম-১২ পূরণ করুন। মেমোরেন্ডাম ও আর্টিকেল আপলোড করুন।', NULL, 'RJSC-র স্ট্যান্ডার্ড টেমপ্লেট ব্যবহার করলে অতিরিক্ত আইনজীবী ফি লাগে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rjsc-company-registration-name-clearance', 3, 'সরকারি ফি পেমেন্ট ও সার্টিফিকেট লাভ', 'মূলধনের উপর সরকারি ফি সোনালী ব্যাংক বা অনলাইনে জমা দিন। আরজেএসসি কর্মকর্তা তথ্য যাচাই করে ডিজিটাল স্বাক্ষরিত কোম্পানি নিগমবদ্ধকরণ সনদ (Certificate of Incorporation) সিস্টেমে জারি করবেন, যা সাথে সাথে ডাউনলোড করা যায়।', NULL, NULL);
            

-- Service: অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা (bd-nbr-vat-online-bin-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nbr-vat-online-bin-registration', 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা', 'Bangladesh NBR Online VAT (BIN) Registration & Filing Free Guide', 
            'অর্থ ও রাজস্ব সেবা', NULL, 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়', 
            'ব্যবসায়িক লেনদেন ও ব্যাংক একাউন্ট পরিচালনার জন্য ১৩ ডিজিটের বিজনেস আইডেন্টিফিকেশন নম্বর (BIN) বা ভ্যাট রেজিস্ট্রেশন প্রয়োজন। vat.gov.bd পোর্টালে সম্পূর্ণ বিনামূল্যে (০ টাকা) ঘরে বসে আবেদনের কয়েক ঘণ্টার মধ্যে ডিজিটাল ভ্যাট সার্টিফিকেট পাওয়া যায়।', 'অনলাইন আবেদন সাবমিটের পর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডিজিটাল বিন জারি', 
            'https://vat.gov.bd', 'https://vat.gov.bd', 
            'https://nbr.gov.bd/site/view/citizen_charter', 'সতর্কতা: ভ্যাট অফিসে না গিয়েই ঘরে বসে সম্পূর্ণ বিনামূল্যে ভ্যাট সার্টিফিকেট পাওয়া যায়। কোনো ভ্যাট কর্মকর্তা বা দালালকে ১ টাকাও দেওয়া আইনত দণ্ডনীয় অপরাধ।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nbr-vat-online-bin-registration';
DELETE FROM service_documents WHERE service_id = 'bd-nbr-vat-online-bin-registration';
DELETE FROM service_steps WHERE service_id = 'bd-nbr-vat-online-bin-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nbr-vat-online-bin-registration', 'ভ্যাট (BIN) নিবন্ধন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'ভ্যাট নিবন্ধনের কোনো ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-vat-online-bin-registration', 'মালিক বা ব্যবস্থাপনা পরিচালকের এনআইডি ও ছবি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-vat-online-bin-registration', 'মালিকের ই-টিআইএন (e-TIN) সনদ', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-vat-online-bin-registration', 'হালনাগাদ ট্রেড লাইসেন্স', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-vat-online-bin-registration', 'ব্যবসা প্রতিষ্ঠানের ব্যাংক স্টেটমেন্ট বা সার্টিফিকেট', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-vat-online-bin-registration', 1, 'আইভাস পোর্টালে রেজিস্ট্রেশন', 'https://vat.gov.bd পোর্টালে গিয়ে ''Sign Up'' বাটনে ক্লিক করে মোবাইল ও ইমেইল ওটিপি দিয়ে একাউন্ট তৈরি করুন।', 'https://vat.gov.bd', 'মোবাইল নম্বরটি সবসময় সচল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-vat-online-bin-registration', 2, 'ভ্যাট ফর্ম পূরণ ও ডকুমেন্টস আপলোড', 'ব্যবসায়ের নাম, ক্যাটাগরি, বার্ষিক সম্ভাব্য টার্নওভার, ট্রেড লাইসেন্স নম্বর ও ব্যাংক একাউন্টের তথ্য দিন।', NULL, 'টার্নওভার ৫০ লাখ টাকার নিচে হলে ভ্যাট অব্যাহতি পাওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-vat-online-bin-registration', 3, 'ডিজিটাল ভ্যাট সার্টিফিকেট (মুসক-২.৩) ডাউনলোড', 'তথ্য সঠিক থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে ১৩ ডিজিটের কিউআর কোডযুক্ত ডিজিটাল ভ্যাট সার্টিফিকেট জারি করবে যা সরাসরি ডাউনলোড করে প্রিন্ট করা যায়।', NULL, NULL);
            

-- Service: বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা (bd-brta-vehicle-ownership-transfer)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-vehicle-ownership-transfer', 'বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা', 'Bangladesh BRTA Vehicle Ownership Transfer Official Procedure & Fee Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ', 
            'পুরাতন গাড়ি বা বাইক ক্রয়-বিক্রয়ের পর মালিকানা পরিবর্তন না করলে আইনি ঝামেলা তৈরি হয়। সাব-রেজিস্ট্রার অফিসের হলফনামা ও বিআরটিএ-তে দালালরা এর জন্য ১০,০০০ থেকে ২৫,০০০ টাকা হাতিয়ে নেয়। বিএসপি সিস্টেমে ক্রেতা-বিক্রেতা উভয়ের উপস্থিতিতে নির্ধারিত ফি দিয়ে স্বচ্ছভাবে মালিকানা বদল করা যায়।', 'বায়োমেট্রিক ও গাড়ি পরিদর্শনের পর ১৫ থেকে ৩০ কার্যদিবস', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালদের মাধ্যমে মালিকানা পরিবর্তন করলে বিক্রেতার ভূয়া সই দিয়ে জালিয়াতি করার ঝুঁকি থাকে যা পরবর্তীতে দুর্ঘটনা বা ফৌজদারি অপরাধে মারাত্মক আইনি বিপদ ডেকে আনে। নিজে উপস্থিত হয়ে আসল মালিকের সামনে সরাসরি মালিকানা পরিবর্তন সম্পন্ন করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-vehicle-ownership-transfer';
DELETE FROM service_documents WHERE service_id = 'bd-brta-vehicle-ownership-transfer';
DELETE FROM service_steps WHERE service_id = 'bd-brta-vehicle-ownership-transfer';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'মোটরসাইকেল মালিকানা পরিবর্তন সরকারি ফি', 2473.0, 1, 'BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক', 'মালিকানা পরিবর্তন ফি + নতুন ডিজিটাল স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট ফি অন্তর্ভুক্ত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'হালকা মোটরযান (প্রাইভেট কার/মাইক্রোবাস) মালিকানা পরিবর্তন ফি', 7648.0, 1, 'অনলাইন বা অনুমোদিত ব্যাংক', 'মালিকানা বদল ও স্মার্ট কার্ড প্রসেসিং ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-vehicle-ownership-transfer', '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা', 200.0, 1, 'স্ট্যাম্প', 'বিক্রেতার নোটারি পাবলিক কর্তৃক প্রত্যায়িত হলফনামা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'মূল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) বা মূল ব্লু-বুক', 1, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'হালনাগাদ ট্যাক্স টোকেন ও ফিটনেস সনদের মূল কপি', 1, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি', 1, 0, 'ফটোকপি ও আসল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-ownership-transfer', 'ফর্ম ‘টি.ও’ (Transfer of Ownership) ও ফর্ম ‘টি.আর.ও’ (বিক্রেতার রসিদ)', 1, 0, 'স্বাক্ষরিত মূল ফর্ম', 'বিআরটিএ সাইট থেকে ডাউনলোড');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-vehicle-ownership-transfer', '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে বিক্রেতার বিক্রয় হলফনামা (নোটারি সত্যায়িত)', 1, 0, 'মূল হলফনামা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-ownership-transfer', 1, 'বিএসপি পোর্টালে মালিকানা পরিবর্তনের আবেদন ও ফি পেমেন্ট', 'https://bsp.brta.gov.bd পোর্টালে যান। ''মালিকানা বদল'' অপশনে চেসিস ও রেজিস্ট্রেশন নম্বর দিয়ে অনলাইনে নির্দিষ্ট ফি জমা দিন।', 'https://bsp.brta.gov.bd', 'ট্যাক্স টোকেন যেন বকেয়া না থাকে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-ownership-transfer', 2, 'ফর্ম টিও এবং টিআরও স্বাক্ষর ও হলফনামা', 'টি.ও (Transfer Order) ফর্মে ক্রেতার স্বাক্ষর এবং টি.আর.ও (Transfer Receipt Order) ফর্মে বিক্রেতার স্বাক্ষর দিন। নোটারি পাবলিকের মাধ্যমে বিক্রেতার হলফনামা সম্পন্ন করুন।', NULL, 'ক্রেতা ও বিক্রেতার স্বাক্ষর রেজিস্ট্রেশন রেকর্ডের সাথে মিলতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-ownership-transfer', 3, 'বিআরটিএ অফিসে ক্রেতা ও বিক্রেতার সরাসরি উপস্থিতি', 'ক্রেতা ও বিক্রেতা মূল গাড়ি ও কাগজপত্রসহ বিআরটিএ মোটরযান পরিদর্শকের সামনে উপস্থিত হন। পরিদর্শক গাড়ির চেসিস যাচাই করবেন এবং ক্রেতার বায়োমেট্রিক গ্রহণ করবেন।', NULL, 'উপস্থিতি বাধ্যতামূলক হওয়ায় দালালকে কোনো টাকা দিয়ে কাজ হবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-vehicle-ownership-transfer', 4, 'নতুন মালিকের নামে স্মার্ট কার্ড গ্রহণ', 'স্মার্ট কার্ড প্রস্তুত হলে এসএমএস আসবে। এরপর বিআরটিএ অফিস থেকে অথবা ডাকযোগে নতুন মালিকের নামে মুদ্রিত স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট গ্রহণ করুন।', NULL, NULL);
            

-- Service: বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি (bd-gamca-wafid-medical-appointment-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-gamca-wafid-medical-appointment-guide', 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি', 'GAMCA / Wafid Medical Examination Online Appointment & Official Fee Guide (GCC Countries)', 
            'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান', NULL, 'উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়', 
            'সৌদি আরব, ওমান, কাতার, কুয়েত, বাহরাইন ও সংযুক্ত আরব আমিরাত গমনে গামকা অনুমোদিত সেন্টারে মেডিকেল টেস্ট বাধ্যতামূলক। ট্রাভেল এজেন্সি ও দালালরা একটি মেডিকেল স্লিপের জন্য ৩,০০০ থেকে ৮,০০০ টাকা হাতিয়ে নেয়। অথচ অফিসিয়াল wafid.com পোর্টালে সরাসরি ১০ মার্কিন ডলার (প্রায় ১,২০০ টাকা) কার্ডে পরিশোধ করে তাৎক্ষণিক অ্যাপয়েন্টমেন্ট স্লিপ পাওয়া যায়।', 'অনলাইন স্লিপ: তাৎক্ষণিক | মেডিকেল রিপোর্ট: টেস্টের পর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে অনলাইন রেজাল্ট', 
            'https://wafid.com', 'https://wafid.com/book-appointment', 
            'https://bmet.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: কোনো দালাল ''মেডিকেল সেন্টারের নাম বদলে দেব'' বা ''আনফিট হলে ফিট করে দেব'' বলে লাখ টাকা দাবি করলে সরাসরি প্রতারণার শিকার হবেন। গামকা সেন্টারের কোনো রেজাল্ট ম্যানুয়ালি পরিবর্তন করা অসম্ভব, এটি সরাসরি বারকোড স্ক্যানের মাধ্যমে সেন্ট্রাল সার্ভারে সংরক্ষিত হয়।', 
            'কোনো মেডিকেল সেন্টার নির্ধারিত ফির চেয়ে বেশি অর্থ দাবি করলে প্রবাসী কল্যাণ মন্ত্রণালয়ের কন্ট্রোল রুম ১৬১৩৫ অথবা গামকা বাংলাদেশ অফিসে লিখিত অভিযোগ জানান।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-gamca-wafid-medical-appointment-guide';
DELETE FROM service_documents WHERE service_id = 'bd-gamca-wafid-medical-appointment-guide';
DELETE FROM service_steps WHERE service_id = 'bd-gamca-wafid-medical-appointment-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'Wafid আন্তর্জাতিক অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ ফি', 1250.0, 1, 'আন্তর্জাতিক ক্রেডিট / ডেবিট কার্ড (Visa, Mastercard)', '১০ মার্কিন ডলার ($10 USD) সমমূল্যের টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'মেডিকেল সেন্টার ফি (পুরুষ কর্মী - সম্পূর্ণ শারীরিক ও ল্যাব টেস্ট)', 8500.0, 1, 'মেডিকেল সেন্টার কাউন্টারে সরাসরি নগদ / কার্ড', 'GAMCA নির্ধারিত প্রমিত মেডিকেল ফি (ব্লাড টেস্ট, এক্স-রে, এইচআইভি, হেপাটাইটিস ইত্যাদি)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'মেডিকেল সেন্টার ফি (নারী কর্মী)', 8500.0, 1, 'সরাসরি মেডিকেল সেন্টার', 'গর্ভধারণ ও অন্যান্য অতিরিক্ত টেস্ট অন্তর্ভুক্ত।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'আবেদনকারীর মূল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)', 1, 0, 'মূল কপি ও ২ সেট ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'Wafid অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ প্রিন্ট কপি', 1, 0, 'রঙিন প্রিন্ট কপি', 'wafid.com থেকে ডাউনলোড');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'পাসপোর্ট সাইজ সাদা ব্যাকগ্রাউন্ডের ল্যাব ছবি (৪ কপি)', 1, 0, 'ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 'জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 1, 'Wafid অফিশিয়াল পোর্টালে বুকিং শুরু', 'https://wafid.com ওয়েবসাইটে যান। ''Book an Appointment'' বাটনে ক্লিক করুন। আপনার দেশ (Bangladesh), শহর (Dhaka/Chittagong/Sylhet) এবং গন্তব্য দেশ (যেমন: Saudi Arabia) নির্বাচন করুন।', 'https://wafid.com/book-appointment', 'সিস্টেম স্বয়ংক্রিয়ভাবে এলোমেলোভাবে (Randomly) একটি অনুমোদিত মেডিকেল সেন্টার বরাদ্দ করে। কোনো নির্দিষ্ট সেন্টার পছন্দ করার সরকারি সুযোগ নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 2, 'পাসপোর্ট তথ্য পূরণ ও ১০ ডলার ফি পরিশোধ', 'পাসপোর্ট নম্বর, জাতীয়তা, ভিসা ক্যাটাগরি (Work Visa) নির্ভুলভাবে লিখুন। এরপর ডুয়েল কারেন্সি ডেবিট/ক্রেডিট কার্ড দিয়ে ১০ ডলার পরিশোধ করুন।', NULL, 'দালালকে ৩,০০০-৫,০০০ টাকা না দিয়ে ব্যাংকের ডুয়েল কারেন্সি কার্ড দিয়ে ১,২৫০ টাকায় নিজেই স্লিপ কাটুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 3, 'মেডিকেল সেন্টারে টেস্ট প্রদান', 'স্লিপে উল্লেখিত নির্দিষ্ট মেডিকেল সেন্টারে সকাল ৮টা থেকে ১০টার মধ্যে খালি পেটে উপস্থিত হন। নির্ধারিত ৮,৫০০ টাকা ফি জমা দিয়ে রক্ত পরীক্ষা ও বুকের এক্স-রে সম্পন্ন করুন।', NULL, 'টেস্টের আগে কোনো অ্যান্টিবায়োটিক বা ভারী ওষুধ সেবন করবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-gamca-wafid-medical-appointment-guide', 4, 'অনলাইনে মেডিকেল রিপোর্ট ''FIT'' স্ট্যাটাস চেক', 'wafid.com-এর ''View Medical Status'' অপশনে পাসপোর্ট নম্বর দিয়ে রিপোর্ট চেক করুন। ফিট রিপোর্টটি সরাসরি বিএমইটি ও সৌদি/উপসাগরীয় দূতাবাস সিস্টেমে সিঙ্ক হয়ে যায়।', NULL, NULL);
            

-- Service: পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা (bd-land-family-partition-deed-bonton)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-family-partition-deed-bonton', 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা', 'Bangladesh Family Property Amicable Partition Deed (Bontonnamah) Registration Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ', 
            'পিতা-মাতার মৃত্যুর পর ভাই-বোন ও ওয়ারিশদের মধ্যে জমি বা ফ্ল্যাট আপসে ভাগাভাগি করার জন্য বণ্টননামা দলিল আবশ্যক। অজ্ঞতার কারণে দলিল লেখকরা জমির মূল্যের ওপর লাখ লাখ টাকা চায়। অথচ রেজিস্ট্রেশন আইন অনুযায়ী আপস বণ্টননামা দলিলের স্ট্যাম্প শুল্ক ও রেজিস্ট্রেশন ফি নির্দিষ্ট (Fixed)—সম্পত্তির মূল্য যত কোটি টাকাই হোক না কেন, মোট সরকারি ফি মাত্র ৫০০ থেকে ১,০০০ টাকা!', 'দলিল উপস্থাপনের দিনই সম্পাদন ও রসিদ প্রদান', 
            'http://www.dolil.gov.bd', 'http://www.dolil.gov.bd', 
            'https://mor.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দলিল লেখক সমিতি বা দালালরা বলে ''সম্পত্তির মূল্যের শতকরা ২% বা ৫% দিতে হবে''—এটি ডাহা মিথ্যা ও প্রতারণা। স্ট্যাম্প আইন এবং রেজিস্ট্রেশন অ্যাক্ট অনুযায়ী পারিবারিক বণ্টননামা দলিলের সরকারি খরচ মাত্র ৫০০ টাকা রেজিস্ট্রেশন ফি + ৫০ টাকা স্ট্যাম্প শুল্ক। কোনো অতিরিক্ত অর্থ দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-family-partition-deed-bonton';
DELETE FROM service_documents WHERE service_id = 'bd-land-family-partition-deed-bonton';
DELETE FROM service_steps WHERE service_id = 'bd-land-family-partition-deed-bonton';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-family-partition-deed-bonton', 'আপস বণ্টননামা রেজিস্ট্রেশন ফি (সম্পত্তির মূল্য ৩ লাখের বেশি হলে)', 500.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান', 'সম্পত্তির মূল্য ৩ লাখ টাকার ঊর্ধ্বে হলে নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-family-partition-deed-bonton', 'আপস বণ্টননামা স্ট্যাম্প শুল্ক (Stamp Duty)', 50.0, 1, 'নন-জুডিশিয়াল স্ট্যাম্প', 'নির্দিষ্ট স্ট্যাম্প ফি মাত্র ৫০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-family-partition-deed-bonton', 'হলফনামা স্ট্যাম্প ফি', 300.0, 1, 'স্ট্যাম্প', 'ওয়ারিশদের হলফনামা ৩০০ টাকার স্ট্যাম্পে সম্পাদন।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'মূল মালিকের মৃত্যু সনদ (ডিজিটাল ডেথ সার্টিফিকেট)', 1, 0, 'অনলাইন কপি', 'bdris.gov.bd পোর্টাল');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'অনলাইন ওয়ারিশান সনদপত্র (Family Inheritance Certificate)', 1, 0, 'ইউপি চেয়ারম্যান / পৌর মেয়র / কাউন্সিলর স্বাক্ষরিত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'বণ্টনযোগ্য সকল জমির মূল দলিল, পূর্ববর্তী বায়া দলিল ও আরএস/বিএস খতিয়ান', 1, 0, 'স্ক্যান ও মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা', 1, 0, 'অনলাইন দাখিলা রশিদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'বণ্টনের নকশা / ট্রেস ম্যাপ (কোন ওয়ারিশ কোন অংশে থাকবেন তার স্পষ্ট সীমানা)', 1, 0, 'সার্ভেয়ার স্বাক্ষরিত নকশা', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-family-partition-deed-bonton', 'সকল জীবিত ওয়ারিশের এনআইডি ও পাসপোর্ট সাইজ ছবি', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-family-partition-deed-bonton', 1, 'ওয়ারিশান সনদ সংগ্রহ ও সীমানা চিহ্নিতকরণ', 'স্থানীয় ইউনিয়ন পরিষদ বা সিটি কর্পোরেশন থেকে অনলাইন কিউআর কোডযুক্ত ওয়ারিশান সনদ নিন। অনুমোদিত আমিন/সার্ভেয়ার দিয়ে জমি মেপে কে কোন অংশ পাবেন তা সহ বণ্টন নকশা চূড়ান্ত করুন।', 'http://www.dolil.gov.bd', 'সকল ওয়ারিশের সর্বসম্মত সম্মতি থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-family-partition-deed-bonton', 2, 'আপস বণ্টননামা দলিল খসড়া তৈরি', 'দলিল ফর্মে কার অংশে কত শতক জমি পড়েছে এবং তফসিল স্পষ্টভাবে লিখুন। দলিলের উপরে ৫০ টাকার নন-জুডিশিয়াল স্ট্যাম্প ও হলফনামা যুক্ত করুন।', NULL, 'সাধারণ সাফ-কবলা দলিলের মতো এখানে কোনো শতাংশভিত্তিক ফি নেই, এটি নির্দিষ্ট ফি।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-family-partition-deed-bonton', 3, 'ট্রেজারি চালানে সরকারি ৫০০ টাকা জমা', 'সোনালী ব্যাংকে রেজিস্ট্রেশন ফি বাবদ ৫০০ টাকা সরকারি কোডে জমা দিয়ে রসিদ নিন।', NULL, 'কোনো দালাল লাখ টাকা দাবি করলে আইন দেখান—বণ্টননামায় শতাংশ হারে ফি আইনত অবৈধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-family-partition-deed-bonton', 4, 'সাব-রেজিস্ট্রি অফিসে সম্পাদন', 'সকল ওয়ারিশ একত্রে সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে স্বাক্ষর ও আঙুলের ছাপ দিন। দলিল রেজিস্ট্রি শেষে প্রত্যেকে যার যার অংশে আলাদাভাবে নামজারি (মিউটেশন) করতে পারবেন।', NULL, NULL);
            

-- Service: সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা (bd-govt-pension-ibas-eft-processing)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-govt-pension-ibas-eft-processing', 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা', 'Bangladesh Government Employees & Primary Teachers Pension & Monthly EFT Disbursement Guide', 
            'অর্থ ও পেনশন সেবা', NULL, 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়', 
            'অবসরপ্রাপ্ত সরকারি কর্মচারী ও প্রাথমিক বিদ্যালয়ের শিক্ষকদের পেনশন চালু করতে থানা বা জেলা হিসাবরক্ষণ অফিসে (DAO/CAO) বছরের পর বছর ফাইল আটকে ঘুষ নেওয়া হতো। সরকার এখন সম্পূর্ণ ই-পেনশন ও iBAS++ সিস্টেম বাধ্যতামূলক করেছে, যার মাধ্যমে কোনো মধ্যস্বত্বভোগী ছাড়া পেনশনের লাম্পগ্রান্ট এবং মাসিক পেনশন সরাসরি ব্যাংকে EFT এর মাধ্যমে চলে আসে।', 'পিআরএল শেষ হওয়ার পূর্বে সর্বোচ্চ ৩০ কার্যদিবসের মধ্যে চূড়ান্ত পেনশন অনুমোদন', 
            'https://cga.gov.bd', 'https://ibas.finance.gov.bd', 
            'https://cga.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: হিসাবরক্ষণ অফিসের কোনো কর্মকর্তা বা কর্মচারী পেনশনের চেক ছাড়ানোর জন্য পারসেন্টেজ বা ঘুষ দাবি করলে তা সম্পূর্ণ ফৌজদারি অপরাধ। iBAS++ সিস্টেমে পেনশনের পুরো প্রক্রিয়াটি ডিজিটালাইজড এবং সেন্ট্রালি ট্র্যাক করা হয়। কাউকে ১ টাকাও দেবেন না।', 
            'পেনশন মঞ্জুরিতে ঘুষ বা হয়রানির শিকার হলে সিজিএ (Controller General of Accounts) অভিযোগ সেল ০২-৯৩৩০৩১২ অথবা অর্থ বিভাগের ই-মেইল অভিযোগ কেন্দ্রে অভিযোগ জানান।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-govt-pension-ibas-eft-processing';
DELETE FROM service_documents WHERE service_id = 'bd-govt-pension-ibas-eft-processing';
DELETE FROM service_steps WHERE service_id = 'bd-govt-pension-ibas-eft-processing';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'পেনশন প্রসেসিং সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'পেনশন প্রক্রিয়াকরণে কোনো সরকারি ফি বা চার্জ নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'পেনশন আবেদন ফরম (ই-পেনশন ফরম ২.১)', 1, 0, 'পূরণকৃত ও স্বাক্ষরিত মূল ফর্ম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'হালনাগাদ সার্ভিস বুক (Service Book) মূল কপি', 1, 0, 'অফিস প্রধান কর্তৃক প্রতিস্বাক্ষরিত মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'পিআরএল (PRL) মঞ্জুরির সরকারি আদেশ (GO)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'পেনশনারের জাতীয় পরিচয়পত্র ও ৩ কপি সত্যায়িত ছবি', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'নমিনীর ছবি, এনআইডি এবং উত্তরাধিকার সনদ', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'পেনশনারের ব্যাংক একাউন্ট সংক্রান্ত প্রত্যয়নপত্র (MICS চেক পাতা স্ক্যান)', 1, 0, 'ব্যাংক ম্যানেজারের সিলযুক্ত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-pension-ibas-eft-processing', 'বেসরকারি অনাপত্তিপত্র (NDC - No Demand Certificate)', 1, 0, 'দপ্তর প্রধান কর্তৃক প্রদত্ত সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-pension-ibas-eft-processing', 1, 'পিআরএল শুরুর ৬ মাস আগে সার্ভিস বুক হালনাগাদ', 'অবসরে যাওয়ার ৬ মাস পূর্বে নিজ অফিস থেকে সার্ভিস বুক ও সার্ভিস ভেরিফিকেশন রোল সিজিএ বা হিসাবরক্ষণ অফিস থেকে যাচাই (Pay Fixation Verification) করিয়ে নিন।', 'https://ibas.finance.gov.bd', 'অনলাইন পে-ফিক্সেশন এনআইডির সাথে হুবহু মিল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-pension-ibas-eft-processing', 2, 'ই-পেনশন আবেদন ও ডকুমেন্টস সাবমিশন', 'অফিস প্রধান বরাবর পেনশন আবেদন ফরম ও এনডিসি জমা দিন। অফিস প্রধান পেনশন মঞ্জুরি আদেশ (PPO) তৈরি করে অনলাইনে হিসাবরক্ষণ অফিসে (iBAS++ পোর্টালে) ফরোয়ার্ড করবেন।', NULL, 'এখন আর ম্যানুয়াল ফাইল নিয়ে হিসাবরক্ষণ অফিসে দৌড়াদৌড়ি করতে হয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-pension-ibas-eft-processing', 3, 'হিসাবরক্ষণ কর্মকর্তা কর্তৃক অডিট ও অনুমোদন', 'হিসাবরক্ষণ কর্মকর্তা অনলাইনে পিটিও (Pension Payment Order) পাস করবেন এবং এককালীন গ্র্যাচুইটি ও লাম্পগ্রান্ট অনুমোদনের বিল ইস্যু করবেন।', NULL, 'কোনো অডিটর ফাইল আটকে ঘুষ দাবি করলে সরাসরি সিজিএ-র হেল্পলাইনে জানান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-pension-ibas-eft-processing', 4, 'সরাসরি ব্যাংক অ্যাকাউন্টে ইএফটি (EFT) পেমেন্ট লাভ', 'টাকা স্বয়ংক্রিয়ভাবে বাংলাদেশ ব্যাংকের BEFTN নেটওয়ার্ক দিয়ে সরাসরি আপনার ব্যাংকে জমা হবে। মোবাইলে ক্রেডিট মেসেজ আসবে। প্রতি মাসের ১ তারিখে পেনশন সরাসরি ব্যাংকে চলে আসবে, ব্যাংকে গিয়ে লাইনে দাঁড়ানোর প্রয়োজন নেই।', NULL, NULL);
            

-- Service: পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা (bd-doe-environmental-clearance-certificate-ecc)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-doe-environmental-clearance-certificate-ecc', 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা', 'Bangladesh Department of Environment Clearance Certificate (ECC) Online Guide', 
            'শিল্প ও পরিবেশ সেবা', NULL, 'পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়', 
            'যেকোনো শিল্প-কারখানা, রাইস মিল, ওয়ার্কশপ, পোল্ট্রি ফার্ম, ক্লিনিক বা আবাসন প্রকল্পের জন্য পরিবেশগত ছাড়পত্র (ECC) বাধ্যতামূলক। পরিবেশ অফিসের নামে দালালরা ১ থেকে ৫ লাখ টাকা ঘুষ দাবি করে। e-ecc.doe.gov.bd পোর্টালে সবুজ, হলুদ, কমলা ও লাল ক্যাটাগরি অনুযায়ী সরকার নির্ধারিত ফি দিয়ে সরাসরি অনলাইনে ছাড়পত্র পাওয়া যায়।', 'সবুজ শ্রেণি: ৭ কার্যদিবস | কমলা শ্রেণি: ৩০ কার্যদিবস | লাল শ্রেণি: ৬০ কার্যদিবস', 
            'https://doe.gov.bd', 'https://e-ecc.doe.gov.bd', 
            'https://doe.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালরা ছাড়পত্র পাইয়ে দেওয়ার নামে পরিবেশ অধিদপ্তরের কর্মকর্তাদের নাম ভাঙিয়ে লাখ লাখ টাকা হাতিয়ে নেয়। অনলাইনে আবেদন করলে প্রতিটি ফাইলের অগ্রগতি ঢাকা হেডকোয়ার্টার্স থেকে সরাসরি ট্র্যাক করা হয়। ঘুষ দেওয়া এবং নেওয়া উভয়ই আইনত দণ্ডনীয় অপরাধ।', 
            'অনলাইনে কোনো আবেদন অনাকাঙ্ক্ষিতভাবে ঝুলিয়ে রাখলে পরিবেশ অধিদপ্তরের মহাপরিচালক (DG) বা দুদক হটলাইন ১০৬-এ অভিযোগ জানান।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-doe-environmental-clearance-certificate-ecc';
DELETE FROM service_documents WHERE service_id = 'bd-doe-environmental-clearance-certificate-ecc';
DELETE FROM service_steps WHERE service_id = 'bd-doe-environmental-clearance-certificate-ecc';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'সবুজ শ্রেণি (Green Category - ক্ষুদ্র কুটির শিল্প/দোকান)', 1500.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-৪৫৩১-০০০১-২৬৮১)', 'বিনিয়োগ সীমা ৫০ লাখ পর্যন্ত হলে ফি মাত্র ১৫০০ টাকা (+১৫% ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'কমলা শ্রেণি (Orange Category - মাঝারি কারখানা/রাইস মিল)', 5000.0, 1, 'ট্রেজারি চালান', 'বিনিয়োগ অনুপাত অনুযায়ী ৫,০০০ থেকে ১৫,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'লাল শ্রেণি (Red Category - বড় রাসায়নিক/টেক্সটাইল শিল্প)', 25000.0, 1, 'ট্রেজারি চালান', 'ইআইএ (EIA) ও ইটিপি (ETP) প্ল্যান সাপেক্ষে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'প্রকল্পের বিস্তারিত বিবরণ ও বিনিয়োগের পরিমাণ সম্বলিত প্রোজেক্ট প্রোফাইল', 1, 0, 'পিডিএফ ফাইল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'কারখানা বা প্রকল্পের জমির মালিকানা দলিল / ভাড়ার চুক্তিপত্র ও খতিয়ান', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'হালনাগাদ ট্রেড লাইসেন্স ও টিআইএন সার্টিফিকেট', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'স্থানীয় কর্তৃপক্ষের অনাপত্তিপত্র (ইউপি চেয়ারম্যান বা পৌর মেয়রের প্রত্যয়নপত্র)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 'কারখানার লে-আউট প্ল্যান ও বর্জ্য ব্যবস্থাপনা পরিকল্পনা (EMP / ETP)', 1, 0, 'প্রকৌশলী নকশা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 1, 'পরিবেশ অধিদপ্তরের পোর্টালে নিবন্ধন', 'https://e-ecc.doe.gov.bd পোর্টালে প্রবেশ করে উদ্যোক্তা একাউন্ট তৈরি করুন। আপনার প্রকল্পের সঠিক ক্যাটাগরি (সবুজ/কমলা/লাল) নির্বাচন করুন।', 'https://e-ecc.doe.gov.bd', 'সবুজ ক্যাটাগরির প্রকল্প হলে কোনো দীর্ঘ তদন্ত ছাড়াই তাৎক্ষণিক ছাড়পত্র পাওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 2, 'তথ্য পূরণ ও প্রয়োজনীয় ডকুমেন্টস আপলোড', 'লে-আউট প্ল্যান, জমির দলিল, বিনিয়োগের পরিমাণ ও ট্রেড লাইসেন্স আপলোড করুন।', NULL, 'বর্জ্য নিষ্কাশনের সঠিক ব্যবস্থা প্রদর্শন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 3, 'সরকারি ট্রেজারি চালান প্রদান', 'সোনালী ব্যাংকে নির্দিষ্ট কোডে সরকারি ফি জমা দিয়ে চালানের নম্বর ও স্ক্যান কপি সিস্টেমে এন্ট্রি করুন।', NULL, 'পরিবেশ পরিদর্শককে ব্যক্তিগতভাবে কোনো টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doe-environmental-clearance-certificate-ecc', 4, 'পরিদর্শন ও কিউআর কোডযুক্ত ডিজিটাল সনদ প্রাপ্তি', 'পরিবেশ পরিদর্শক সরেজমিনে স্থান পরিদর্শন করবেন। আবেদন অনুমোদিত হলে সিস্টেম থেকে কিউআর কোডযুক্ত ডিজিটাল পরিবেশগত ছাড়পত্র ডাউনলোড করে প্রিন্ট করুন।', NULL, NULL);
            

-- Service: ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা (bd-fire-service-safety-license-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-fire-service-safety-license-guide', 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা', 'Bangladesh Fire Service & Civil Defence Fire Safety Clearance & License Guide', 
            'শিল্প ও নাগরিক নিরাপত্তা', NULL, 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়', 
            'বাণিজ্যিক ভবন, গুদাম, মার্কেট, রেস্তোরাঁ, এলপিজি গ্যাস সিলিন্ডার বিক্রয় কেন্দ্র ও কারখানার জন্য ফায়ার লাইসেন্স থাকা বাধ্যতামূলক। ফায়ার স্টেশনের আশেপাশে দালাল চক্র ফায়ার লাইসেন্সের জন্য ২০,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত দাবি করে। অথচ ভবনের আয়তন অনুযায়ী সরকারি ট্রেজারি ফি মাত্র ১,৫০০ থেকে ৫,০০০ টাকার মধ্যে।', 'পরিদর্শন সাপেক্ষে সর্বোচ্চ ১৫ কার্যদিবস', 
            'https://fireservice.gov.bd', 'https://efirelicense.gov.bd', 
            'https://fireservice.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: ফায়ার স্টেশনের দালালরা সনদ পাইয়ে দেওয়ার নামে বিপুল অর্থ দাবি করে এবং অনেক ক্ষেত্রে নকল জাল সার্টিফিকেট ধরিয়ে দেয়। কোনো দুর্ঘটনায় নকল লাইসেন্স ধরা পড়লে ভবন মালিকের বিরুদ্ধে জামিন-অযোগ্য ফৌজদারি মামলা হবে। শুধুমাত্র ই-ফায়ার লাইসেন্স পোর্টালের ডিজিটাল সনদ গ্রহণ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-fire-service-safety-license-guide';
DELETE FROM service_documents WHERE service_id = 'bd-fire-service-safety-license-guide';
DELETE FROM service_steps WHERE service_id = 'bd-fire-service-safety-license-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-fire-service-safety-license-guide', 'ফায়ার লাইসেন্স সরকারি ফি (১,০০০ বর্গফুট পর্যন্ত বাণিজ্যিক প্রতিষ্ঠান)', 1500.0, 1, 'বাংলাদেশ ব্যাংক / সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২২৬১-০০০১-২৬৮১)', 'সরকারি নির্ধারিত প্রমিত ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-fire-service-safety-license-guide', 'ফায়ার লাইসেন্স সরকারি ফি (১,০০১ থেকে ৫,০০০ বর্গফুট)', 3000.0, 1, 'ট্রেজারি চালান', 'ভবনের আয়তন অনুযায়ী নির্দিষ্ট সরকারি ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-fire-service-safety-license-guide', 'গ্যাস সিলিন্ডার ও বিপজ্জনক দ্রব্য সংরক্ষণাগার ফি', 5000.0, 1, 'ট্রেজারি চালান', 'বিশেষ ঝুঁকি পরিদর্শন অন্তর্ভুক্ত।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fire-service-safety-license-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fire-service-safety-license-guide', 'হালনাগাদ ট্রেড লাইসেন্স', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fire-service-safety-license-guide', 'ভবন বা প্রতিষ্ঠানের অনুমোদিত আর্কিটেকচারাল লে-আউট নকশা', 1, 0, 'ব্লু-প্রিন্ট / নকশা', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fire-service-safety-license-guide', 'ভবন নির্মাণের অনুমোদনপত্র (রাজউক / সিডিএ / কেডিএ / পৌরসভা)', 1, 0, 'অনুমোদনপত্র কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fire-service-safety-license-guide', 'অগ্নিনির্বাপক সিলিন্ডার (ABC/CO2 Dry Chemical Powder) ক্রয়ের ভাউচার', 1, 0, 'রশিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fire-service-safety-license-guide', 1, 'ফায়ার সার্ভিসের পোর্টালে ই-লাইসেন্স আবেদন', 'https://efirelicense.gov.bd ওয়েবসাইটে যান। প্রতিষ্ঠান ও ভবনের বিস্তারিত তথ্য পূরণ করে আবেদন সাবমিট করুন।', 'https://efirelicense.gov.bd', 'প্রতিষ্ঠানে জরুরি নির্গমন সিঁড়ি (Fire Exit) ও সিলিন্ডারের অবস্থান স্পষ্ট উল্লেখ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fire-service-safety-license-guide', 2, 'চালানে সরকারি ফি পরিশোধ', 'নির্দিষ্ট কোডে সোনালী ব্যাংকে চালানের মাধ্যমে সরকারি ফি জমা দিন। চালানের কপি সিস্টেমে আপলোড করুন।', NULL, 'কোনো কর্মচারীকে নগদ টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fire-service-safety-license-guide', 3, 'ফায়ার পরিদর্শক কর্তৃক সরেজমিনে পরিদর্শন', 'নিকটস্থ ফায়ার স্টেশনের পরিদর্শক আপনার ভবন পরিদর্শন করবেন এবং মহড়ার ব্যবস্থা ও অগ্নিনির্বাপক ব্যবস্থা দেখবেন। সন্তোষজনক হলে তিনি ইতিবাচক প্রতিবেদন দাখিল করবেন।', NULL, 'পর্যাপ্ত ফায়ার এক্সটিংগুইশার ও স্মোক ডিটেক্টর প্রস্তুত রাখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fire-service-safety-license-guide', 4, 'ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড', 'উপ-পরিচালক বা সহকারী পরিচালক অনুমোদন দিলে সিস্টেম থেকে কিউআর কোডযুক্ত আসল ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড করে প্রিন্ট করুন।', NULL, NULL);
            

-- Service: আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি (bd-ccie-irc-erc-import-export-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-ccie-irc-erc-import-export-registration', 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি', 'Bangladesh Import & Export Registration Certificate (IRC & ERC) Official Online Guide', 
            'ব্যবসা ও আন্তর্জাতিক বাণিজ্য', NULL, 'প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়', 
            'আন্তর্জাতিক বাণিজ্য ও পণ্য আমদানি-রপ্তানি করার জন্য আইআরসি (IRC) ও ইআরসি (ERC) সনদ বাধ্যতামূলক। সিঅ্যান্ডএফ দালালরা এর জন্য ৫০,০০০ থেকে ১ লাখ টাকা পর্যন্ত ফি নেয়। olrs.ccie.gov.bd পোর্টালে সরাসরি অনলাইনে আবেদন করে নির্ধারিত সরকারি ফি দিয়ে ঘরে বসেই সনদ পাওয়া যায়।', 'অনলাইন আবেদন ও ফি জমার পর সর্বোচ্চ ৩ কার্যদিবসের মধ্যে ডিজিটাল সনদ প্রস্তুত', 
            'https://ccie.gov.bd', 'https://olrs.ccie.gov.bd', 
            'https://ccie.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: মতিঝিল বা চট্টগ্রামের দালালরা আইআরসি পাইয়ে দেওয়ার নামে লাখ টাকা হাতিয়ে নেয়। এখন সম্পূর্ণ সেবাটি শতভাগ পেপারলেস এবং অনলাইনভিত্তিক। ঘরে বসেই এটি সংগ্রহ করা সম্ভব।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-ccie-irc-erc-import-export-registration';
DELETE FROM service_documents WHERE service_id = 'bd-ccie-irc-erc-import-export-registration';
DELETE FROM service_steps WHERE service_id = 'bd-ccie-irc-erc-import-export-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'রপ্তানি নিবন্ধন সনদ (ERC - বাৎসরিক যেকোনো পরিমাণ রপ্তানির জন্য)', 7000.0, 1, 'অনলাইন ই-পেমেন্ট বা সোনালী ব্যাংক চালান', 'সরকারি ফি ৭,০০০ টাকা (+১৫% ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫০ লাখ টাকা পর্যন্ত)', 18000.0, 1, 'অনলাইন চালান', 'আমদানি সীমার উপর ভিত্তি করে সরকারি স্লাব নির্ধারিত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫ লাখ টাকা পর্যন্ত ক্ষুদ্র আমদানিকারক)', 5000.0, 1, 'অনলাইন চালান', 'ক্ষুদ্র উদ্যোক্তাদের জন্য বিশেষ ছাড়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'হালনাগাদ বাণিজ্যিক ট্রেড লাইসেন্স', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'ই-টিআইএন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন দাখিলের প্রাপ্তিস্বীকার', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'ভ্যাট (BIN) রেজিস্ট্রেশন সনদপত্র', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'তফসিলি ব্যাংকের সলভেন্সি সার্টিফিকেট (Bank Solvency Certificate)', 1, 0, 'ব্যাংক ম্যানেজারের সিলযুক্ত মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 'স্বীকৃত চেম্বার অব কমার্স বা ট্রেড অ্যাসোসিয়েশনের মেম্বারশিপ সার্টিফিকেট', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 1, 'OLRS পোর্টালে অনলাইন রেজিস্ট্রেশন', 'https://olrs.ccie.gov.bd ওয়েবসাইটে যান। আপনার প্রতিষ্ঠানের নাম ও ইমেইল দিয়ে রেজিস্ট্রেশন করুন।', 'https://olrs.ccie.gov.bd', 'আপনার ট্রেড লাইসেন্স ও ব্যাংক একাউন্টের নাম হুবহু এক হতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 2, 'আবেদন ফরম পূরণ ও ডকুমেন্টস আপলোড', 'আমদানি বা রপ্তানি সনদ বাছাই করুন। ব্যাংক সলভেন্সি ও চেম্বার সার্টিফিকেট আপলোড করুন।', NULL, 'কাগজপত্র পরিষ্কারভাবে স্ক্যান করে দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 3, 'অনলাইন পেমেন্ট গেটওয়েতে ফি পরিশোধ', 'সিস্টেমের একপে বা সোনালী পেমেন্ট গেটওয়ের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। তাৎক্ষণিক ডিজিটাল চালান স্লিপ তৈরি হবে।', NULL, 'কোনো মধ্যস্থতাকারীকে অতিরিক্ত টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ccie-irc-erc-import-export-registration', 4, 'ডিজিটাল আইআরসি/ইআরসি সনদ ডাউনলোড', 'CCI&E কর্মকর্তা অনুমোদন দিলে কিউআর কোডযুক্ত আসল ডিজিটাল সনদ অনলাইনে প্রস্তুত হবে, যা দিয়ে বাংলাদেশ কাস্টমস ও ব্যাংকে এলসি (Letter of Credit) খোলা যাবে।', NULL, NULL);
            

-- Service: সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা (bd-public-hospital-ticket-admission-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-public-hospital-ticket-admission-guide', 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা', 'Bangladesh Public Hospital Outdoor Ticket, Evening Specialist Service & Admission Guide', 
            'স্বাস্থ্য ও পরিবার কল্যাণ', NULL, 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়', 
            'ঢাকা মেডিকেল, সোহরাওয়ার্দী, বিএসএমএমইউ (পিজি) কিংবা জেলা সদর হাসপাতালে রোগী নিয়ে গেলে দালাল চক্র টিকিট কাটা, ট্রলি নেওয়া, টেস্ট করানো এবং বেড দেওয়ার নামে অসহায় রোগীদের সর্বস্বান্ত করে। সরকারি হাসপাতালে বহির্বিভাগ টিকিট মাত্র ১০ টাকা এবং বৈকালিক বিশেষজ্ঞ ডাক্তার কনসালটেন্সি ফি মাত্র ২০০-৩০০ টাকা। স্বাস্থ্য বাতায়ন হেল্পলাইন ১৬২৬৩-তে ফোন করে যেকোনো সময় বিনামূল্যে সরকারি ডাক্তারের পরামর্শ নেওয়া যায়।', 'তাৎক্ষণিক বহির্বিভাগ টিকিট ও সেবা | জরুরি বিভাগ ২৪ ঘণ্টা খোলা', 
            'https://dghs.gov.bd', 'https://dghs.gov.bd', 
            'https://hsd.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: হাসপাতাল চত্বরে সক্রিয় দালালরা রোগী ভাগিয়ে প্রাইভেট হাসপাতালে নিয়ে যায় এবং আইসিইউ বা টেস্টের নামে প্রতারণা করে। রোগী বা স্বজনরা যেকোনো বিপদে আনসার সদস্য বা হাসপাতাল পুলিশ ক্যাম্পে যোগাযোগ করুন। বিনামূল্যে স্বাস্থ্য পরামর্শের জন্য স্বাস্থ্য বাতায়ন ১৬২৬৩-তে কল করুন।', 
            'হাসপাতালে ডাক্তার অনুপস্থিত থাকলে বা চিকিৎসা অবহেলা হলে হাসপাতাল পরিচালক / সিভিল সার্জন বরাবরে অভিযোগ করুন অথবা জাতীয় জরুরি সেবা ৯৯৯ বা ১৬২৬৩-এ রিপোর্ট করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-public-hospital-ticket-admission-guide';
DELETE FROM service_documents WHERE service_id = 'bd-public-hospital-ticket-admission-guide';
DELETE FROM service_steps WHERE service_id = 'bd-public-hospital-ticket-admission-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'উপজেলা স্বাস্থ্য কমপ্লেক্স ও জেলা সদর হাসপাতাল বহির্বিভাগ টিকিট', 10.0, 1, 'হাসপাতাল টিকিট কাউন্টার', 'সরকারি নির্ধারিত প্রমিত টিকিট ফি মাত্র ১০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'মেডিকেল কলেজ ও বিশেষায়িত টারশিয়ারি হাসপাতাল বহির্বিভাগ টিকিট', 20.0, 1, 'হাসপাতাল কাউন্টার', 'টিকিট ফি মাত্র ২০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'সরকারি বৈকালিক প্রাতিষ্ঠানিক প্র্যাকটিস (অধ্যাপক / বিশেষজ্ঞ ডাক্তার)', 300.0, 1, 'হাসপাতাল বৈকালিক কাউন্টার', 'বিকালে সরকারি হাসপাতালেই প্রাইভেট চেম্বারের মতো বিশেষজ্ঞ ডাক্তার দেখানো যায়।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'সাধারণ বেড ও ভর্তি ফি', 15.0, 1, 'কাউন্টার', 'ভর্তি ফি মাত্র ১৫ টাকা। সাধারণ ওয়ার্ডের কোনো দৈনিক বেড চার্জ নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'রোগীর জাতীয় পরিচয়পত্র (NID) অথবা জন্ম নিবন্ধন নম্বর', 1, 0, 'টিকিট কাউন্টারে মৌখিক বা কার্ড প্রদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-public-hospital-ticket-admission-guide', 'পূর্ববর্তী প্রেসক্রিপশন ও টেস্টের রিপোর্ট (যদি থাকে)', 0, 0, 'মূল ফাইল', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-public-hospital-ticket-admission-guide', 1, 'হাসপাতাল কাউন্টারে ১০/২০ টাকার সরকারি টিকিট কাটা', 'সরাসরি টিকিট কাউন্টারে গিয়ে রোগীর নাম, বয়স ও সমস্যা বলুন। ১০ টাকার টিকিট কেটে নির্দিষ্ট রুম নম্বরে ডাক্তারের জন্য অপেক্ষা করুন।', 'https://dghs.gov.bd', 'কাউন্টারের সামনে দালালরা এসে বলবে ''তাড়াতাড়ি ডাক্তার দেখায় দিচ্ছি, ১০০ টাকা দেন''—কখনোই তাদের সাথে যাবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-public-hospital-ticket-admission-guide', 2, 'ডাক্তার দেখানো ও বিনামূল্যে ওষুধ সংগ্রহ', 'ডাক্তার ব্যবস্থাপত্র লিখলে হাসপাতালের নিজস্ব ডিসপেনসারি কাউন্টারে যান। সরকারি তালিকায় থাকা ওষুধগুলো সম্পূর্ণ বিনামূল্যে দেওয়া হয়।', NULL, 'ওষুধের জন্য কাউকে টাকা দিতে হয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-public-hospital-ticket-admission-guide', 3, 'হাসপাতাল ল্যাবে সরকার নির্ধারিত নামমাত্র মূল্যে টেস্ট', 'বাইরের প্রাইভেট ক্লিনিকে না গিয়ে হাসপাতালের নিজস্ব প্যাথলজিতে সরকারি নামমাত্র মূল্যে (রক্ত পরীক্ষা ৫০-১০০ টাকা, এক্স-রে ১০০-২০০ টাকা) টেস্ট করান।', NULL, 'দালালরা প্রাইভেট ক্লিনিকে নিয়ে বেশি টাকা কমিশনের ধান্দা করে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-public-hospital-ticket-admission-guide', 4, 'ভর্তি ও জরুরি সেবা', 'ভর্তির প্রয়োজন হলে জরুরি বিভাগ বা বহির্বিভাগের চিকিৎসকের সিলযুক্ত স্লিপ নিয়ে ভর্তি কাউন্টারে ১৫ টাকা জমা দিয়ে বেডে যান। কোনো ট্রলিম্যান বা আয়াকে বকশিশ দেওয়ার কোনো বাধ্যবাধকতা নেই।', NULL, NULL);
            

-- Service: নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি) (bd-electricity-new-connection-meter-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-electricity-new-connection-meter-guide', 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি)', 'Bangladesh New Electricity Connection & Digital Smart Meter Application Guide', 
            'বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ', NULL, 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি', 
            'নতুন বাড়ি বা ব্যবসা প্রতিষ্ঠানে পল্লী বিদ্যুৎ বা ডেসকো/ডিপিডিসি থেকে মিটার নিতে স্থানীয় দালাল বা কথিত ইলেকট্রিশিয়ানরা ১৫,০০০ থেকে ৩০,০০০ টাকা দাবি করে। অনলাইনে ঘরে বসেই মাত্র কয়েকশ থেকে কয়েক হাজার টাকায় সরকারি নিয়মে সংযোগ পাওয়া যায়।', 'আবেদন ও ওয়্যারিং পরিদর্শনের পর সর্বোচ্চ ৭ থেকে ১৫ কার্যদিবস', 
            'https://reb.gov.bd', 'https://rebpbs.org', 
            'https://mpemr.gov.bd/site/view/citizen_charter', 'সতর্কতা: কোনো দালাল বা অসাধু ইলেকট্রিশিয়ানকে মিটার আনার জন্য চুক্তি করে টাকা দেবেন না। তারা অবৈধ হুক লাইন বা চোরাই মিটার লাগিয়ে দিলে বিদ্যুৎ আদালতের অভিযানে জেল ও লাখ টাকা জরিমানা হতে পারে। সম্পূর্ণ বৈধ অনলাইন আবেদন করুন।', 
            'বিদ্যুৎ সংযোগে কালক্ষেপণ বা ঘুষ দাবি করলে পল্লী বিদ্যুতের জিএম (General Manager) অথবা মন্ত্রণালয় হটলাইন ১৬৯৯৯-এ অভিযোগ দায়ের করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-electricity-new-connection-meter-guide';
DELETE FROM service_documents WHERE service_id = 'bd-electricity-new-connection-meter-guide';
DELETE FROM service_steps WHERE service_id = 'bd-electricity-new-connection-meter-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-new-connection-meter-guide', 'আবেদন ফি (এক ফেজ আবাসিক সংযোগ)', 115.0, 1, 'বিকাশ, রকেট, নগদ বা অনলাইন', 'আবেদন ফি ১০০ টাকা + ১৫% ভ্যাট = ১১৫ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-new-connection-meter-guide', 'নিরাপত্তা জামানত (Security Deposit - প্রতি কিলোওয়াট)', 600.0, 1, 'অনলাইন পেমেন্ট', 'ফেরতযোগ্য সরকারি জামানত।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-new-connection-meter-guide', 'মিটার টেস্ট ও সার্ভিস সংযোগ ফি', 800.0, 1, 'অনলাইন', 'মিটার সরবরাহ ও তার টানার সরকারি চার্জ।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-new-connection-meter-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-new-connection-meter-guide', 'যে জমিতে সংযোগ হবে তার খারিজ খতিয়ান বা দলিলের কপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-new-connection-meter-guide', 'লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান কর্তৃক বাড়ি ওয়্যারিং প্রত্যয়নপত্র', 1, 0, 'প্রত্যয়ন ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-new-connection-meter-guide', 'নিকটবর্তী প্রতিবেশীর বিদ্যুৎ বিলের কপি (হিসাব নম্বর উল্লেখের জন্য)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-new-connection-meter-guide', 1, 'বিদ্যুৎ বিতরণ সংস্থার পোর্টালে অনলাইন আবেদন', 'পল্লী বিদ্যুৎ হলে https://rebpbs.org এবং ঢাকা হলে desco.org.bd বা dpdc.org.bd-এ যান। ''নতুন সংযোগ আবেদন'' অপশনে ক্লিক করে ১১৫ টাকা আবেদন ফি বিকাশ দিয়ে সাবমিট করুন।', 'https://rebpbs.org', 'আপনার নিকটবর্তী ট্রান্সফরমার ও পোলের নম্বর সঠিকভাবে দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-new-connection-meter-guide', 2, 'লাইনম্যান কর্তৃক কারিগরি পরিদর্শন', 'বিদ্যুৎ অফিসের ওয়্যারিং পরিদর্শক সরেজমিনে এসে বাড়ির ওয়্যারিং ও আর্থিং রড পরীক্ষা করবেন।', NULL, 'ওয়্যারিং টেস্টের জন্য কোনো পরিদর্শককে ব্যক্তিগত টাকা দেওয়া নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-new-connection-meter-guide', 3, 'ডিমান্ড নোটের ফি অনলাইনে জমা', 'সিস্টেমে ডিমান্ড নোট ইস্যু হবে। জামানত ও মিটার চার্জের টাকা সরাসরি রকেট/বিকাশ বা ব্যাংকে জমা দিন।', NULL, 'দালালরা বলে ''অফিস খরচ লাগবে''—ডিমান্ড নোটের বাইরে কোনো টাকা নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-new-connection-meter-guide', 4, 'মিটার স্থাপন ও বিদ্যুৎ চালু', 'ফি জমার ৩-৫ দিনের মধ্যে লাইনম্যান এসে সরকারি সিলযুক্ত ডিজিটাল মিটার স্থাপন করে বিদ্যুৎ চালু করে দেবে।', NULL, NULL);
            

-- Service: বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা (bd-brta-tax-token-route-permit-renewal)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-tax-token-route-permit-renewal', 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা', 'Bangladesh BRTA Motor Vehicle Tax Token & Route Permit Online Renewal Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ', 
            'প্রতি বছর মোটরসাইকেল, প্রাইভেট কার, বাস বা ট্রাকের ট্যাক্স টোকেন নবায়ন করতে ব্যাংকে গিয়ে লম্বা লাইনে দাঁড়াতে হয় অথবা দালাল ধরে বাড়তি টাকা দিতে হয়। বিএসপি (BSP) সিস্টেমে ঘরে বসেই মোবাইল ব্যাংকিংয়ে এক সেকেন্ডে ট্যাক্স পরিশোধ করে ডিজিটাল কিউআর কোডযুক্ত ট্যাক্স টোকেন ডাউনলোড করা যায়।', 'অনলাইনে ফি জমার সাথে সাথে তাৎক্ষণিক ডিজিটাল ট্যাক্স টোকেন প্রস্তুত', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালদের মাধ্যমে ভুয়া ম্যানুয়াল সিল দেওয়া ট্যাক্স টোকেন কাটাবেন না। পুলিশি তল্লাশিতে বারকোড বা কিউআর কোড ম্যাচ না করলে গাড়ি ডাম্পিংয়ে পাঠানো হবে এবং জাল দলিলের মামলা হবে। সম্পূর্ণ অফিশিয়াল বিএসপি সিস্টেম থেকে ই-ট্যাক্স টোকেন নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-tax-token-route-permit-renewal';
DELETE FROM service_documents WHERE service_id = 'bd-brta-tax-token-route-permit-renewal';
DELETE FROM service_steps WHERE service_id = 'bd-brta-tax-token-route-permit-renewal';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'মোটরসাইকেল বার্ষিক ট্যাক্স টোকেন ফি', 1150.0, 1, 'বিকাশ, রকেট, নগদ, উপায়, কার্ড বা যেকোনো ব্যাংক', '১০ বছরের এককালীন ট্যাক্স না থাকলে বার্ষিক নবায়ন ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'প্রাইভেট কার বার্ষিক রোড ট্যাক্স ও টোকেন (১৫০০ সিসি পর্যন্ত)', 15000.0, 1, 'অনলাইন পেমেন্ট গেটওয়ে', 'সরকারি নির্ধারিত প্রমিত ফি + এআইটি প্রযোজ্য।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'লেট ফি / জরিমানা (মেয়াদোত্তীর্ণ হলে)', 200.0, 1, 'অনলাইন', 'বিলম্বে পরিশোধের সরকারি রুলস অনুযায়ী হিসাব।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'গাড়ির পূর্ববর্তী ট্যাক্স টোকেনের তথ্য বা ছবি', 1, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'গাড়ির চেসিস নম্বর ও রেজিস্ট্রেশন নম্বর', 1, 0, 'তথ্য ইনপুট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 'আয়কর রিটার্ন দাখিলের প্রমাণপত্র (গাড়ির ক্ষেত্রে বাধ্যতামূলক)', 1, 0, 'অনলাইন টিআইএন ও রিটার্ন রসিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 1, 'বিএসপি পোর্টালে লগইন', 'https://bsp.brta.gov.bd সাইটে লগইন করে আপনার মোটরযান প্রোফাইলে যান। ''ট্যাক্স টোকেন নবায়ন'' বাটনে ক্লিক করুন।', 'https://bsp.brta.gov.bd', 'আপনার গাড়ি আগেই বিএসপি প্রোফাইলে যুক্ত না থাকলে চেসিস নম্বর দিয়ে যুক্ত করে নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 2, 'বকেয়া ট্যাক্স হিসাব ও অনলাইন পেমেন্ট', 'সিস্টেম স্বয়ংক্রিয়ভাবে সরকারি ট্যাক্স ও ভ্যাট হিসাব করে দেবে। বিকাশ বা কার্ড দিয়ে ফি পরিশোধ করুন।', NULL, 'কোনো ব্যাংকে গিয়ে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-tax-token-route-permit-renewal', 3, 'কিউআর কোডযুক্ত ডিজিটাল ট্যাক্স টোকেন ডাউনলোড ও প্রিন্ট', 'পেমেন্ট সফল হওয়ার সাথে সাথে কিউআর কোডযুক্ত রঙিন ডিজিটাল ট্যাক্স টোকেন স্ক্রিনে চলে আসবে। এটি ডাউনলোড করে প্রিন্ট করে গাড়িতে রাখুন। ট্রাফিক পুলিশ কিউআর কোড স্ক্যান করে তাৎক্ষণিক বৈধতা যাচাই করতে পারবে।', NULL, NULL);
            

-- Service: পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা (bd-passport-police-sb-verification-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-passport-police-sb-verification-guide', 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা', 'Bangladesh e-Passport Special Branch (SB) Police Verification Tracking & Anti-Extortion Guide', 
            'পাসপোর্ট ও ইমিগ্রেশন', NULL, 'স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ', 
            'নতুন পাসপোর্টের ক্ষেত্রে পুলিশ ভেরিফিকেশনের নামে তদন্তকারী কর্মকর্তারা প্রায়ই বাড়ি এসে বা থানায় ডেকে ১,০০০ থেকে ৫,০০০ টাকা ''চা-মিষ্টির খরচ'' বা ঘুষ দাবি করে। স্বরাষ্ট্র মন্ত্রণালয় ও পুলিশ সদরদপ্তরের সুস্পষ্ট নির্দেশ অনুযায়ী—পাসপোর্ট ভেরিফিকেশনে নাগরিকদের কোনো ফি বা অর্থ দেওয়ার কোনো সরকারি নিয়ম নেই (ফি সম্পূর্ণ ০ টাকা)। নাগরিকের তথ্য সঠিক থাকলে কোনো অর্থ ছাড়াই রিপোর্ট পজিটিভ দিতে পুলিশ বাধ্য।', 'এসবি অফিসে ফাইল প্রেরণের পর সর্বোচ্চ ৩ থেকে ৭ কার্যদিবসের মধ্যে রিপোর্ট নিষ্পত্তি', 
            'https://police.gov.bd', 'https://www.epassport.gov.bd', 
            'https://police.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: পুলিশ ভেরিফিকেশনের জন্য কাউকে কোনো নগদ টাকা দেবেন না। যদি কোনো কর্মকর্তা অনৈতিকভাবে টাকা দাবি করে বা টাকা না দিলে নেতিবাচক রিপোর্ট দেওয়ার হুমকি দেয়, তবে অবিলম্বে পুলিশ সদরদপ্তরের আইজিপি কমপ্লেইন সেল অথবা স্থানীয় পুলিশ সুপার (SP) বরাবর সরাসরি অভিযোগ করুন।', 
            'পুলিশের অনৈতিক সুবিধা দাবির বিরুদ্ধে আইজিপি কমপ্লেইন সেল মোবাইল: ০১৭৬৯৬৯৩৫৩৫, ০১৭৬৯৬৯৩৫৩৬ অথবা জাতীয় জরুরি সেবা ৯৯৯ বা grs.gov.bd-এ সরাসরি নাম প্রকাশ না করে অভিযোগ দাখিল করুন।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-passport-police-sb-verification-guide';
DELETE FROM service_documents WHERE service_id = 'bd-passport-police-sb-verification-guide';
DELETE FROM service_steps WHERE service_id = 'bd-passport-police-sb-verification-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-passport-police-sb-verification-guide', 'পুলিশ ভেরিফিকেশন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'পুলিশ ভেরিফিকেশনের জন্য কোনো প্রকার অর্থ নেওয়া আইনত দণ্ডনীয় ঘুষ।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-passport-police-sb-verification-guide', 'আবেদনকারীর আসল জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম সনদ', 1, 0, 'মূল কপি পরিদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-passport-police-sb-verification-guide', 'স্থায়ী ঠিকানার প্রমাণপত্র (চেয়ারম্যান/কাউন্সিলর প্রত্যয়ন বা হোল্ডিং ট্যাক্স দাখিলা)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-passport-police-sb-verification-guide', 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-passport-police-sb-verification-guide', 'পাসপোর্টের অনলাইন রেজিস্ট্রেশন সামারি শিট ও ডেলিভারি স্লিপ', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-passport-police-sb-verification-guide', 1, 'পাসপোর্ট স্ট্যাটাস ট্র্যাকিং', 'https://www.epassport.gov.bd পোর্টালে অ্যাপ্লিকেশন আইডি ও জন্মতারিখ দিয়ে চেক করুন। স্ট্যাটাস যখন ''Police Verification'' দেখাবে, তখন ফাইলটি আপনার সংশ্লিষ্ট এলাকার এসবি বা ডিএসবি শাখায় থাকে।', 'https://www.epassport.gov.bd/landing', 'নবায়নকৃত সাধারণ পাসপোর্টে কোনো পুলিশ ভেরিফিকেশন লাগে না, শুধুমাত্র নতুন পাসপোর্টে প্রযোজ্য।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-passport-police-sb-verification-guide', 2, 'তদন্ত কর্মকর্তার সাথে যোগাযোগ ও আসল কাগজপত্র প্রদর্শন', 'তদন্তকারী কর্মকর্তা ফোন দিলে তাকে আপনার স্থায়ী ঠিকানার ইউটিলিটি বিল, চেয়ারম্যান সার্টিফিকেট ও আসল এনআইডি দেখান।', NULL, 'কর্মকর্তা যদি বলেন ''অফিস খরচ লাগবে'', তাকে বিনয়ের সাথে বলুন যে সরকার নির্ধারিত পাসপোর্ট ফি চালানে জমা দেওয়া আছে, কোনো বাড়তি খরচ দেওয়ার সরকারি নিয়ম নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-passport-police-sb-verification-guide', 3, 'অনলাইন রিপোর্ট সাবমিশন ও ছাড়পত্র', 'তদন্তকারী কর্মকর্তা তার মোবাইল অ্যাপ দিয়ে সরাসরি কেন্দ্রীয় এসবি সার্ভারে ডিজিটাল পজিটিভ রিপোর্ট আপলোড করবেন। আপনার পাসপোর্টের স্ট্যাটাস স্বয়ংক্রিয়ভাবে ''Pending for Approval'' হয়ে যাবে।', NULL, NULL);
            

-- Service: রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা (bd-land-heba-deed-gift-blood-relation)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-heba-deed-gift-blood-relation', 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা', 'Bangladesh Heba Deed (Gift Deed within Blood Relations) Official Registration Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ', 
            'পিতা-মাতা, সন্তান, ভাই-বোন, স্বামী-স্ত্রী এবং নানা-নানী/দাদা-দাদী থেকে নাতি-নাতনীর মধ্যে স্থাবর সম্পত্তি হস্তান্তরের জন্য হেবা দলিল করা যায়। সাধারণ সাফ-কবলা দলিলের মতো এখানে কোনো শতাংশভিত্তিক উচ্চ কর নেই। অজ্ঞতার কারণে দলিল লেখক ও দালালরা লাখ লাখ টাকা চায়, অথচ মুসলিম আইনে রক্তের সম্পর্কের হেবা দলিলের সরকারি রেজিস্ট্রেশন ফি মাত্র ১০০ টাকা ও স্ট্যাম্প ২০০ টাকা!', 'দলিল উপস্থাপনের দিনই সম্পাদন ও রসিদ প্রদান', 
            'http://www.dolil.gov.bd', 'http://www.dolil.gov.bd', 
            'https://mor.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দলিল লেখক বা নকলনবিশরা হেবা দলিলের জন্য সম্পত্তির মূল্যের শতাংশ হারে টাকা দাবি করলে তা রেজিস্ট্রেশন আইনের সুস্পষ্ট লঙ্ঘন। রক্তের সম্পর্কের হেবা দলিলের সরকারি ফি মাত্র ১০০ টাকা রেজিস্ট্রেশন ও ২০০ টাকা স্ট্যাম্প। অতিরিক্ত কোনো অর্থ দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-heba-deed-gift-blood-relation';
DELETE FROM service_documents WHERE service_id = 'bd-land-heba-deed-gift-blood-relation';
DELETE FROM service_steps WHERE service_id = 'bd-land-heba-deed-gift-blood-relation';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'হেবা রেজিস্ট্রেশন ফি (Registration Fee - নির্দিষ্ট)', 100.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান', 'সম্পত্তির মূল্য যত কোটি টাকাই হোক না কেন, সরকারি রেজিস্ট্রেশন ফি মাত্র ১০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'হেবা স্ট্যাম্প শুল্ক (Stamp Duty)', 200.0, 1, 'নন-জুডিশিয়াল স্ট্যাম্প', 'নির্দিষ্ট স্ট্যাম্প ফি মাত্র ২০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'হলফনামা স্ট্যাম্প ও এন-ফি', 300.0, 1, 'স্ট্যাম্প', 'হলফনামা ৩০০ টাকার স্ট্যাম্প + এন-ফি (প্রতি ৩০০ শব্দে ২৪ টাকা)।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'রক্তের সম্পর্কের বৈধ প্রমাণপত্র (জাতীয় পরিচয়পত্র ও ডিজিটাল জন্ম সনদ)', 1, 0, 'স্ক্যান কপি ও মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'চেয়ারম্যান / ওয়ার্ড কাউন্সিলর কর্তৃক রক্তের সম্পর্কের পারিবারিক প্রত্যয়নপত্র', 1, 0, 'মূল প্রত্যয়ন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'দাতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা', 1, 0, 'অনলাইন দাখিলা রশিদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 'মূল দলিলের ফটোকপি বা বায়া দলিলের কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 1, 'রক্তের সম্পর্কের যোগ্যতা যাচাই', 'হেবা শুধুমাত্র স্বামী-স্ত্রী, পিতা-মাতা ও সন্তান, ভাই-বোন, দাদা-দাদী/নানা-নানী এবং নাতি-নাতনীর মধ্যে বৈধ। রক্তের সম্পর্কের প্রমাণপত্র প্রস্তুত করুন।', 'http://www.dolil.gov.bd', 'দূর সম্পর্কের আত্মীয় বা অনাত্মীয়দের ক্ষেত্রে সাধারণ হেবা প্রযোজ্য নয়, তখন দানপত্র (Gift) হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 2, 'হেবা দলিল ড্রাফট তৈরি', '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হেবা দলিলের বিবরণ ও তফসিল লিখুন। ৩০০ টাকার স্ট্যাম্পে হলফনামা যুক্ত করুন।', NULL, 'কোনো শতাংশভিত্তিক স্থানীয় সরকার কর বা উৎস কর এখানে প্রযোজ্য নয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 3, 'ট্রেজারি চালানে ১০০ টাকা সরকারি ফি জমা', 'সোনালী ব্যাংকে রেজিস্ট্রেশন ফি বাবদ মাত্র ১০০ টাকা জমা দিন।', NULL, 'দালালরা সাধারণ দলিলের হিসাব দেখিয়ে ২০-৩০ হাজার টাকা দাবি করে, যা সম্পূর্ণ মিথ্যা।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-heba-deed-gift-blood-relation', 4, 'সাব-রেজিস্ট্রি অফিসে সম্পাদন ও ৫২ ধারার রসিদ গ্রহণ', 'দাতা ও গ্রহীতা সাব-রেজিস্ট্রারের এজলাসে উপস্থিত হয়ে ফিঙ্গারপ্রিন্ট ও স্বাক্ষর দিন। দলিল সম্পন্ন হলে ৫২ ধারার মূল প্রাপ্তি রসিদ বুঝে নিন।', NULL, NULL);
            

-- Service: আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা (bd-land-power-of-attorney-poa-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-power-of-attorney-poa-registration', 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা', 'Bangladesh Power of Attorney (PoA) Official Deed Registration Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ', 
            'জমিজমা দেখাশোনা, মামলা পরিচালনা বা রেজিস্ট্রির ক্ষমতা অন্য কাউকে অর্পণ করতে আমমোক্তারনামা (পাওয়ার অব অ্যাটর্নি) দলিল করা হয়। সাধারণ আমমোক্তারনামার সরকারি স্ট্যাম্প ফি মাত্র ১,৫০০ টাকা। সাব-রেজিস্ট্রি অফিসের দালালরা মানুষের অজ্ঞতার সুযোগ নিয়ে ৫০,০০০ টাকা পর্যন্ত দাবি করে।', 'দলিল উপস্থাপনের দিনই সম্পাদন ও রসিদ প্রদান', 
            'http://www.dolil.gov.bd', 'http://www.dolil.gov.bd', 
            'https://mor.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালদের মাধ্যমে কোনো ব্ল্যাঙ্ক স্ট্যাম্পে সই করবেন না। পাওয়ার অব অ্যাটর্নি অপব্যবহার করে জমি আত্মসাতের ঘটনা ঘটে। সরকারি নিয়ম মেনে সুনির্দিষ্ট দায়িত্বের জন্য সীমিত ক্ষমতার আমমোক্তারনামা সম্পাদন করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-power-of-attorney-poa-registration';
DELETE FROM service_documents WHERE service_id = 'bd-land-power-of-attorney-poa-registration';
DELETE FROM service_steps WHERE service_id = 'bd-land-power-of-attorney-poa-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'সাধারণ আমমোক্তারনামা স্ট্যাম্প শুল্ক (General PoA)', 1500.0, 1, 'নন-জুডিশিয়াল স্ট্যাম্প', 'মামলা পরিচালনা ও সম্পত্তি তদারকির জন্য নির্দিষ্ট সরকারি ফি ১৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'রেজিস্ট্রেশন ফি', 1000.0, 1, 'ট্রেজারি চালান', 'সরকারি ট্রেজারি চালান ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'হলফনামা স্ট্যাম্প ফি', 300.0, 1, 'স্ট্যাম্প', 'আমমোক্তারদাতার হলফনামা ৩০০ টাকার স্ট্যাম্প।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'আমমোক্তারদাতা ও আমমোক্তারগ্রহীতার জাতীয় পরিচয়পত্র (NID)', 1, 0, 'স্ক্যান কপি ও আসল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'উভয় পক্ষের পাসপোর্ট সাইজ ল্যাব প্রিন্ট রঙিন ছবি', 1, 0, 'ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'তফসিলভুক্ত সম্পত্তির হালনাগাদ খতিয়ান, ডিসিআর ও খাজনার দাখিলা', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-power-of-attorney-poa-registration', 'মূল দলিলের কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-power-of-attorney-poa-registration', 1, 'আমমোক্তারনামার ধরন নির্বাচন', 'সাধারণ আমমোক্তারনামা (General PoA) নাকি বিক্রির ক্ষমতাসহ অপ্রত্যাহারযোগ্য (Irrevocable PoA) তা নির্ধারণ করুন। সাধারণ তদারকি ও মামলা লড়তে সাধারণ আমমোক্তারনামা যথেষ্ট।', 'http://www.dolil.gov.bd', 'অপ্রয়োজনে বিক্রির ক্ষমতাসম্পন্ন আমমোক্তারনামা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-power-of-attorney-poa-registration', 2, '১,৫০০ টাকার স্ট্যাম্পে দলিল প্রস্তুত', 'নির্ধারিত স্ট্যাম্পে দলিলের শর্তাবলি লিখুন। ক্ষমতার পরিধি ও মেয়াদ স্পষ্টভাবে উল্লেখ করুন।', NULL, 'কোনো অনির্দিষ্ট বা অস্পষ্ট শর্ত রাখবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-power-of-attorney-poa-registration', 3, 'সাব-রেজিস্ট্রারের এজলাসে উভয়ের উপস্থিতি', 'দাতা ও গ্রহীতা নিজে উপস্থিত হয়ে সাব-রেজিস্ট্রারের সামনে স্বাক্ষর ও বায়োমেট্রিক প্রদান করুন।', NULL, 'উপস্থিতি ছাড়া কোনো ভুয়া আমমোক্তারনামা আইনত কার্যকর হয় না।');
            

-- Service: রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা (bd-rajuk-building-plan-ecps-approval)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-rajuk-building-plan-ecps-approval', 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা', 'RAJUK / Development Authority Building Construction Permit (e-CPS) Guide', 
            'আবাসন ও নগর উন্নয়ন', NULL, 'রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক) / সিডিএ / কেডিএ, গৃহায়ন ও গণপূর্ত মন্ত্রণালয়', 
            'বাড়ি বা বাণিজ্যিক ভবন নির্মাণ করতে রাজউক বা স্থানীয় উন্নয়ন কর্তৃপক্ষের অনুমোদন আবশ্যক। রাজউক চত্বরে দালাল ও কর্মচারীরা প্ল্যান পাসের নামে ফ্ল্যাটপ্রতি বা তলাপ্রতি লাখ লাখ টাকা ঘুষ দাবি করে। বর্তমানে e-CPS (ইলেকট্রনিক কনস্ট্রাকশন পারমিটিং সিস্টেম) পোর্টালে সম্পূর্ণ অনলাইনে নকশা সাবমিট করে নির্ধারিত সরকারি স্কয়ারমিটার ফি দিয়ে ছাড়পত্র পাওয়া যায়।', 'ভূমি ছাড়পত্র: ১৫ কার্যদিবস | চূড়ান্ত নির্মাণ পারমিট: ৩০ থেকে ৪৫ কার্যদিবস', 
            'http://www.rajuk.gov.bd', 'http://ecps.rajuk.gov.bd', 
            'https://rajuk.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: রাজউক ভবনে ঘুরঘুর করা দালাল বা অসাধু কর্মচারীরা প্ল্যান পাস করিয়ে দেওয়ার নামে লাখ লাখ টাকা ঘুষ দাবি করে। e-CPS সিস্টেম সম্পূর্ণ ডিজিটাল, যেখানে ফাইলের প্রতি মুহূর্তের স্ট্যাটাস ট্র্যাকিং থাকে। ফাইল আটকে রাখলে সরাসরি রাজউক চেয়ারম্যান বা দুদকের হটলাইন ১০৬-এ অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-rajuk-building-plan-ecps-approval';
DELETE FROM service_documents WHERE service_id = 'bd-rajuk-building-plan-ecps-approval';
DELETE FROM service_steps WHERE service_id = 'bd-rajuk-building-plan-ecps-approval';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'ভূমি ব্যবহার ছাড়পত্র ফি (Land Use Clearance - LUT)', 1500.0, 1, 'অনলাইন ব্যাংক গেটওয়ে', 'আবাসিক প্লটের ছাড়পত্র ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'ভবন নির্মাণ অনুমোদন ফি (Building Permit Fee - প্রতি বর্গমিটার)', 50.0, 1, 'ব্যাংক চালান / পে-অর্ডার', 'বিল্ট-আপ এরিয়া অনুযায়ী প্রতি বর্গমিটারে সরকার নির্ধারিত প্রমিত রেট।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'বিশেষ প্রকল্প ও বাণিজ্যিক নকশা পরীক্ষণ ফি', 5000.0, 1, 'অনলাইন', 'বাণিজ্যিক ও বহুতল ভবনের ক্ষেত্রে প্রযোজ্য।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'অনুমোদিত স্থপতি ও প্রকৌশলী (IEB/IAB সদস্য) কর্তৃক প্রস্তুতকৃত অটোক্যাড ও পিডিএফ নকশা', 1, 0, 'ডিজিটাল সিএডি ও ড্রয়িং ফাইল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'জমির মালিকানা দলিল, হালনাগাদ নামজারি খতিয়ান ও খাজনার দাখিলা', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'মৃত্তিকা পরীক্ষা প্রতিবেদন (Soil Test Report) ও স্ট্রাকচারাল ডিজাইন', 1, 0, 'পিডিএফ ফাইল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 1, 'ই-সিপিএস পোর্টালে আবেদন শুরু', 'http://ecps.rajuk.gov.bd ওয়েবসাইটে গিয়ে একাউন্ট খুলুন। আপনার অনুমোদিত স্থপতিকে ডিজাইনার হিসেবে অ্যাসাইন করুন।', 'http://ecps.rajuk.gov.bd', 'রাজউকের তালিকাভুক্ত স্থপতি (IAB রেজিস্টার্ড) ছাড়া নকশা সিস্টেমে আপলোড করা যায় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 2, 'ভূমি ব্যবহার ছাড়পত্র ও নকশা আপলোড', 'মাস্টার প্ল্যান অনুযায়ী জমির ছাড়পত্র নিন। এরপর স্ট্রাকচারাল, আর্কিটেকচারাল এবং প্লাম্বিং নকশা আপলোড করুন।', NULL, 'সেটব্যাক রুলস (রাস্তা ও চারপাশের ফাঁকা জায়গা) শতভাগ মেনে ড্রয়িং করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-rajuk-building-plan-ecps-approval', 3, 'অনলাইনে সরকারি ফি পরিশোধ ও অনুমোদন', 'সিস্টেমে প্রদর্শিত সরকারি স্কয়ারমিটার ফি ব্যাংকে জমা দিন। রাজউক অথরাইজড অফিসার ও বিসি কমিটি অনলাইনে রিভিউ করে ডিজিটাল কিউআর কোডযুক্ত প্ল্যান অনুমোদন করবেন।', NULL, NULL);
            

-- Service: সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা (bd-citycorp-holding-tax-assessment-mutation)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-citycorp-holding-tax-assessment-mutation', 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা', 'City Corporation & Pourashava Holding Tax Assessment & Ownership Transfer Guide', 
            'স্থানীয় সরকার ও আবাসন', NULL, 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও পৌরসভাসমূহ', 
            'নতুন বাড়ি বা ফ্ল্যাট ক্রয়ের পর পৌরসভা বা সিটি কর্পোরেশনে হোল্ডিং নম্বর নিতে ও ট্যাক্স নির্ধারণ করতে গেলে রাজস্ব পরিদর্শকরা ইচ্ছাকৃতভাবে ট্যাক্স বাড়িয়ে দিয়ে পরে কমানোর নামে মোটা অঙ্কের ঘুষ দাবি করে। অনলাইনে সরকারি ফর্মে আবেদন করে সরকার নির্ধারিত ভাড়ার শতাংশ হারে স্বচ্ছভাবে হোল্ডিং নির্ধারণ করা যায়।', 'সরেজমিনে পরিদর্শনের পর সর্বোচ্চ ১৫ কার্যদিবসের মধ্যে চূড়ান্ত হোল্ডিং নম্বর বরাদ্দ', 
            'https://lgd.gov.bd', 'https://lgd.gov.bd', 
            'https://lgd.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: রাজস্ব পরিদর্শক বা দালালদের ট্যাক্স কমিয়ে দেওয়ার আশ্বাসে কোনো নগদ টাকা দেবেন না। ট্যাক্স অ্যাসেসমেন্টে অনিয়ম হলে সিটি কর্পোরেশনের রিভিউ বোর্ডে (Review Board) আবেদন করে আইনানুযায়ী কর পুনর্নির্ধারণ করা যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-citycorp-holding-tax-assessment-mutation';
DELETE FROM service_documents WHERE service_id = 'bd-citycorp-holding-tax-assessment-mutation';
DELETE FROM service_steps WHERE service_id = 'bd-citycorp-holding-tax-assessment-mutation';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'হোল্ডিং নির্ধারণ আবেদন ফি', 200.0, 1, 'পৌরসভা / সিটি কর্পোরেশন ক্যাশ কাউন্টার বা অনলাইন', 'সরকারি আবেদন ফরম ফি মাত্র ২০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'হোল্ডিং নাম পরিবর্তন / নামজারি ফি (ফ্ল্যাট/বাড়ি)', 500.0, 1, 'অনলাইন পেমেন্ট', 'মালিকানা পরিবর্তনের সরকারি নির্দিষ্ট ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'বাৎসরিক পৌর কর (Property Tax Rate)', 7.0, 1, 'অনলাইন বিকাশ / ব্যাংক', 'ভবনের বাৎসরিক মূল্যায়নকৃত ভাড়ার ৭% থেকে ১২% (বাণিজ্যিক হলে প্রযোজ্য রেট)।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'জমির মূল রেজিস্ট্রিকৃত দলিল ও হালনাগাদ নামজারি খতিয়ান', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'অনুমোদিত ভবনের নকশা (রাজউক বা পৌরসভা কর্তৃক অনুমোদিত প্ল্যান)', 1, 0, 'নকশার কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 'বিদ্যুৎ বিল বা গ্যাস বিলের কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 1, 'আবেদন ফরম পূরণ ও জমা', 'সংশ্লিষ্ট জোনাল অফিসে রাজস্ব বিভাগে ''হোল্ডিং নির্ধারণ'' বা ''নাম পরিবর্তনের'' ফরম পূরণ করুন। দলিলের কপি ও এনআইডি সংযুক্ত করুন।', 'https://lgd.gov.bd', 'বাড়ির মোট আয়তন ও তলার সংখ্যা সঠিকভাবে লিখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 2, 'রাজস্ব পরিদর্শক কর্তৃক সরেজমিনে পরিদর্শন', 'অ্যাসেসর বা পরিদর্শক বাড়ি পরিদর্শন করে বাৎসরিক আনুমানিক ভাড়া হিসাব করবেন।', NULL, 'অযৌক্তিক উচ্চ ভাড়া ধার্য করলে রাজস্ব কর্মকর্তা বরাবরে আপত্তি দাখিল করা যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-citycorp-holding-tax-assessment-mutation', 3, 'হোল্ডিং প্লেট ও বার্ষিক কর পরিশোধ', 'নির্ধারিত হোল্ডিং ট্যাক্স ব্যাংকে বা অনলাইনে জমা দিয়ে ডিজিটাল ট্যাক্স রসিদ সংগ্রহ করুন।', NULL, NULL);
            

-- Service: ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা (bd-dgda-drug-license-pharmacy-guide)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dgda-drug-license-pharmacy-guide', 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা', 'DGDA Retail Pharmacy Drug License Application, Renewal & Official Fee Guide', 
            'স্বাস্থ্য ও বাণিজ্য লাইসেন্স', NULL, 'ঔষধ প্রশাসন অধিদপ্তর (DGDA), স্বাস্থ্য সেবা বিভাগ', 
            'ফার্মেসি বা ঔষধের দোকান পরিচালনা করতে ঔষধ প্রশাসন অধিদপ্তর থেকে ড্রাগ লাইসেন্স নেওয়া আইনত বাধ্যতামূলক। ড্রাগ সুপারের নামে দালাল চক্র ফার্মেসি মালিকদের কাছ থেকে ৫০,০০০ থেকে ১ লাখ টাকা পর্যন্ত ঘুষ দাবি করে। অথচ সরকারি ট্রেজারি চালান ফি সিটি কর্পোরেশনে মাত্র ৫,০০০ টাকা এবং ইউনিয়ন পরিষদে মাত্র ২,৫০০ টাকা! dgda.gov.bd পোর্টালে সরাসরি ফি দিয়ে অনলাইনে আবেদন করা যায়।', 'দোকান পরিদর্শন ও ড্রাগ সুপারের তদন্ত সাপেক্ষে সর্বোচ্চ ৩০ কার্যদিবস', 
            'https://dgda.gov.bd', 'https://dgda.gov.bd', 
            'https://dgda.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: ঔষধ প্রশাসনের দালালরা ৫০ হাজার থেকে লাখ টাকা না দিলে লাইসেন্স হবে না বলে ভীতি ছড়ায়। ODLS সম্পূর্ণ অনলাইন সিস্টেম। আপনার দোকানে ফার্মাসিস্ট ও প্রয়োজনীয় ড্রাগ স্টোরেজ থাকলে ড্রাগ সুপার লাইসেন্স দিতে বাধ্য। ঘুষ দাবি করলে সরাসরি ডিজি বরাবরে অভিযোগ করুন।', 
            'ড্রাগ লাইসেন্সে ঘুষ দাবি করলে ঔষধ প্রশাসন অধিদপ্তরের হটলাইন ০২-২২২২৮০৯৮০ অথবা দুদক হটলাইন ১০৬-এ সরাসরি অভিযোগ জানান।', 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dgda-drug-license-pharmacy-guide';
DELETE FROM service_documents WHERE service_id = 'bd-dgda-drug-license-pharmacy-guide';
DELETE FROM service_steps WHERE service_id = 'bd-dgda-drug-license-pharmacy-guide';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'খুচরা ড্রাগ লাইসেন্স (সিটি কর্পোরেশন ও জেলা সদর এলাকা)', 5000.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২৭০১-০০০১-১৮১৬)', 'সরকারি নির্ধারিত প্রমিত ফি ৫,০০০ টাকা (+১৫% ভ্যাট ৭৫০ টাকা = মোট ৫,৭৫০ টাকা)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'খুচরা ড্রাগ লাইসেন্স (পৌরসভা এলাকা)', 3000.0, 1, 'ট্রেজারি চালান', 'পৌরসভা এলাকার জন্য ৩,০০০ টাকা (+১৫% ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'খুচরা ড্রাগ লাইসেন্স (ইউনিয়ন পরিষদ ও অন্যান্য এলাকা)', 2500.0, 1, 'ট্রেজারি চালান', 'গ্রামাঞ্চলের জন্য মাত্র ২,৫০০ টাকা (+ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'ড্রাগ লাইসেন্স নবায়ন ফি (প্রতি ২ বছর পর পর)', 2500.0, 1, 'ট্রেজারি চালান', 'মূল ফির ৫০% হারে পরিশোধযোগ্য।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'বাংলাদেশ ফার্মেসী কাউন্সিল কর্তৃক প্রদত্ত ফার্মাসিস্ট রেজিস্ট্রেশন সনদ (গ্রেড-সি/বি/এ)', 1, 0, 'ফার্মাসিস্ট সার্টিফিকেট ও রেজিস্ট্রেশন কার্ড', 'ফার্মেসী কাউন্সিল থেকে কোর্স সম্পন্ন করে প্রাপ্ত সনদ');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'ফার্মাসিস্টের অঙ্গীকারনামা (উক্ত ফার্মেসিতে দায়িত্ব পালনের সম্মতিপত্র)', 1, 0, 'স্বাক্ষরিত ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'হালনাগাদ ট্রেড লাইসেন্স (ফার্মেসি বা ড্রাগ স্টোর উল্লেখসহ)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'দোকানের ভাড়ার চুক্তিপত্র অথবা নিজস্ব দোকান হলে দলিলের ফটোকপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি', 1, 0, 'ফটোকপি ও ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 'সরকারি ট্রেজারি চালানের মূল কপি', 1, 0, 'ব্যাংক রসিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 1, 'ডিজিডিএ অনলাইন পোর্টালে ফর্ম-৭ পূরণ', 'https://dgda.gov.bd ওয়েবসাইটে যান। ''অনলাইন ড্রাগ লাইসেন্সিং সিস্টেম'' (ODLS)-এ গিয়ে আবেদনকারীর তথ্য ও দোকানের ঠিকানা দিন।', 'https://dgda.gov.bd', 'দোকানে কমপক্ষে ১২০ বর্গফুট পাকা ফ্লোর ও রেফ্রিজারেটরের ব্যবস্থা থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 2, 'ফার্মাসিস্ট সনদ ও চালানের কপি আপলোড', 'ফার্মাসিস্ট রেজিস্ট্রেশন সার্টিফিকেট, ট্রেড লাইসেন্স এবং সোনালী ব্যাংকে জমা দেওয়া সরকারি চালানের কপি আপলোড করুন।', NULL, 'ভাড়া করা বা ভুয়া ফার্মাসিস্ট সার্টিফিকেট দিলে লাইসেন্স বাতিল ও মামলা হতে পারে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 3, 'ড্রাগ সুপার কর্তৃক সরেজমিনে দোকান পরিদর্শন', 'জেলা ঔষধ পরিদর্শক (Drug Superintendent) আপনার দোকান পরিদর্শন করে তাপমাত্রা নিয়ন্ত্রণ ব্যবস্থা ও ফ্রিজ যাচাই করবেন।', NULL, 'কোনো কর্মচারীকে ঘুষ দেবেন না। সরকারি চালানের রসিদ প্রদর্শন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgda-drug-license-pharmacy-guide', 4, 'ডিজিটাল ড্রাগ লাইসেন্স (ফর্ম-৮) গ্রহণ', 'আবেদন অনুমোদিত হলে কিউআর কোডযুক্ত আসল ডিজিটাল ড্রাগ লাইসেন্স সিস্টেমে চলে আসবে, যা ডাউনলোড করে দোকানে বাঁধাই করে ঝুলিয়ে রাখুন।', NULL, NULL);
            

-- Service: বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা (bd-bsti-cm-license-product-standard)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-bsti-cm-license-product-standard', 'বিএসটিআই (BSTI) পণ্যের গুণগত মান সনদ ও সিএম লাইসেন্স নির্দেশিকা', 'BSTI Product Quality Certification Marks (CM License) Official Guide', 
            'শিল্প ও মান নিয়ন্ত্রণ', NULL, 'বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI), শিল্প মন্ত্রণালয়', 
            'খাদ্য, পানীয়, কসমেটিকস, ব্যাটারি, সিমেন্ট বা প্যাকেজজাত পণ্য বাজারজাত করতে বিএসটিআই মানচিহ্ন (CM License) বাধ্যতামূলক। বিএসটিআই ভবনের আশেপাশে দালালরা লাখ লাখ টাকা ঘুষ দাবি করে। bsti.gov.bd পোর্টালে সরাসরি আবেদন করে সরকার নির্ধারিত ল্যাব টেস্ট ফি ও লাইসেন্স ফি দিয়ে প্রমিত মান নিশ্চিত করে লাইসেন্স পাওয়া যায়।', 'কারখানা পরিদর্শন ও ল্যাব টেস্টের পর সর্বোচ্চ ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://bsti.gov.bd', 'https://bsti.gov.bd', 
            'https://bsti.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: বিএসটিআই লাইসেন্স করে দেওয়ার নামে মধ্যস্থতাকারীরা নকল সনদপত্র বানিয়ে দেয়। বাজারে ভ্রাম্যমাণ আদালত বিএসটিআই লাইসেন্স বারকোড স্ক্যান করে ভুয়া প্রমাণ পেলে প্রতিষ্ঠান সিলগালা ও জেল জরিমানা করে। শুধুমাত্র অফিশিয়াল পোর্টালে সরাসরি আবেদন করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-bsti-cm-license-product-standard';
DELETE FROM service_documents WHERE service_id = 'bd-bsti-cm-license-product-standard';
DELETE FROM service_steps WHERE service_id = 'bd-bsti-cm-license-product-standard';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bsti-cm-license-product-standard', 'সিএম লাইসেন্স প্রাথমিক আবেদন ফি', 1000.0, 1, 'সোনালী ব্যাংক চালান বা অনলাইন পেমেন্ট', 'প্রতি আবেদনের সরকারি ফি ১,০০০ টাকা (+১৫% ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bsti-cm-license-product-standard', 'ল্যাবরেটরি পরীক্ষণ ফি (পণ্যভেদে নির্ধারিত)', 3000.0, 1, 'ব্যাংক পে-অর্ডার / চালান', 'খাদ্য ও কেমিক্যালের রাসায়নিক টেস্ট ফি ৩,০০০ থেকে ১০,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bsti-cm-license-product-standard', 'বার্ষিক মার্কিং ফি (Marking Fee)', 0.1, 1, 'অনলাইন', 'মোট বিক্রয় মূল্যের ০.০৭% থেকে ০.১০% অথবা পণ্যের বাৎসরিক সর্বনিম্ন ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bsti-cm-license-product-standard', 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিআইএন সার্টিফিকেট', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bsti-cm-license-product-standard', 'ট্রেডমার্ক রেজিস্ট্রেশন বা ট্রেডমার্ক প্রাপ্তির আবেদনপত্রের কপি', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bsti-cm-license-product-standard', 'কারখানার লে-আউট প্ল্যান ও প্রস্তুত প্রক্রিয়ার প্রবাহচিত্র (Flow Chart)', 1, 0, 'পিডিএফ ফাইল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bsti-cm-license-product-standard', 'কোয়ালিটি কন্ট্রোল যন্ত্রপাতি ও ল্যাব টেকনিশিয়ানের বিবরণ', 1, 0, 'নথিপত্র', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bsti-cm-license-product-standard', 1, 'বিএসটিআই অনলাইন পোর্টালে ই-সিএম আবেদন', 'https://bsti.gov.bd পোর্টালে গিয়ে ''e-CM System''-এ উদ্যোক্তা প্রোফাইল খুলুন। পণ্যের বিডিএস (BDS) স্ট্যান্ডার্ড অনুযায়ী আবেদন ফরম পূরণ করুন।', 'https://bsti.gov.bd', 'পণ্যের মোড়কে প্রয়োজনীয় লেবেলিং নীতিমালা মেনে চলুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bsti-cm-license-product-standard', 2, 'কারখানা পরিদর্শন ও পণ্যের নমুনা সংগ্রহ', 'বিএসটিআই কর্মকর্তা কারখানা পরিদর্শন করে উৎপাদন প্রক্রিয়া দেখবেন এবং তিনটি সিলযুক্ত নমুনা ল্যাবে পরীক্ষার জন্য সংগ্রহ করবেন।', NULL, 'পরীক্ষক কর্মকর্তাকে কোনো নগদ অর্থ দেওয়া আইনত নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bsti-cm-license-product-standard', 3, 'ল্যাব রিপোর্ট ও সিএম লাইসেন্স প্রদান', 'বিএসটিআই ন্যাশনাল ল্যাবে নমুনা পাস হলে আপনাকে কিউআর কোডযুক্ত আসল সিএম লাইসেন্স দেওয়া হবে যা ৩ বছর মেয়াদে বৈধ থাকে।', NULL, NULL);
            

-- Service: ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি) (bd-dpdt-trademark-brand-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dpdt-trademark-brand-registration', 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি)', 'Bangladesh DPDT Trademark & Brand Name Official Registration Guide', 
            'মেধাসম্পদ ও ব্যবসা', NULL, 'পেটেন্ট, শিল্প-নকশা ও ট্রেডমার্ক অধিদপ্তর (ডিপিডিটি), শিল্প মন্ত্রণালয়', 
            'নিজের ব্যবসা, পণ্যের ব্র্যান্ড নাম, স্লোগান বা লোগোর আইনি মালিকানা সুরক্ষিত রাখতে ট্রেডমার্ক নিবন্ধন করতে হয়। আইনি দালালরা একটি ট্রেডমার্কের জন্য ৫০,০০০ থেকে ১ লাখ টাকা পর্যন্ত ফি আদায় করে। অথচ শিল্প মন্ত্রণালয়ের ডিপিডিটি পোর্টালে ট্রেডমার্ক আবেদনের সরকারি ট্রেজারি চালান ফি মাত্র ৩,৫০০ টাকা (+১৫% ভ্যাট)। ঘরে বসেই অনলাইনে নিজের ব্র্যান্ড নাম সুরক্ষিত রাখা সম্ভব।', 'প্রাথমিক পরীক্ষা ও স্বীকৃতি: ১-২ মাস | জার্নাল ও চূড়ান্ত সনদ: ৯ থেকে ১২ মাস', 
            'https://dpdt.gov.bd', 'https://dpdt.gov.bd', 
            'https://dpdt.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: দালালরা একটি ট্রেডমার্কের জন্য লাখ টাকা হাতিয়ে নেয়। আপনি নিজে সরাসরি ডিপিডিটির ওয়েবসাইটে ফর্ম পূরণ করে সরকারি চালানে ৩,৫০০ টাকা জমা দিয়ে আবেদন সম্পন্ন করতে পারেন। কোনো তৃতীয় পক্ষের কোনো প্রভাব খাটানোর নিয়ম নেই।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dpdt-trademark-brand-registration';
DELETE FROM service_documents WHERE service_id = 'bd-dpdt-trademark-brand-registration';
DELETE FROM service_steps WHERE service_id = 'bd-dpdt-trademark-brand-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dpdt-trademark-brand-registration', 'ট্রেডমার্ক প্রাথমিক আবেদন সরকারি ফি (Form TM-1)', 4025.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-৩৬৩১-০০০১-২৬৮১) বা অনলাইন', 'মূল আবেদন ফি ৩,৫০০ টাকা + ১৫% ভ্যাট ৫২৫ টাকা = ৪,০২৫ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dpdt-trademark-brand-registration', 'ট্রেডমার্ক জার্নাল প্রকাশনা ফি', 1725.0, 1, 'ট্রেজারি চালান', 'পরীক্ষায় পাস করার পর সরকারি গেজেট জার্নালে প্রকাশের ফি (১৫০০ + ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dpdt-trademark-brand-registration', 'চূড়ান্ত ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট ফি (১০ বছর মেয়াদি)', 17250.0, 1, 'ট্রেজারি চালান', 'গেজেটে কোনো আপত্তি না এলে ১০ বছরের সুরক্ষার জন্য ১৫,০০০ টাকা (+ভ্যাট)।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dpdt-trademark-brand-registration', 'ব্র্যান্ডের নাম ও লোগোর পরিষ্কার জেপিজি/পিডিএফ কপি (লোগো স্পেসিফিকেশন)', 1, 0, 'ডিজিটাল গ্রাফিক্স কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dpdt-trademark-brand-registration', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি বা কোম্পানির ট্রেড লাইসেন্স', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dpdt-trademark-brand-registration', 'পণ্য বা সেবার আন্তর্জাতিক নাইস শ্রেণিবিন্যাস (Nice Classification - Class 1 to 45)', 1, 0, 'শ্রেণি উল্লেখ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dpdt-trademark-brand-registration', 'সোনালী ব্যাংকে সরকারি ট্রেজারি চালানের মূল কপি', 1, 0, 'ব্যাংক রসিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dpdt-trademark-brand-registration', 1, 'ডিপিডিটি পোর্টালে ট্রেডমার্ক অনুসন্ধান (Search)', 'https://dpdt.gov.bd ওয়েবসাইটে গিয়ে ''Public Search''-এ আপনার ব্র্যান্ড নামটি অন্য কারও নামে ইতোমধ্যে আছে কিনা তা বিনামূল্যে চেক করুন।', 'https://dpdt.gov.bd', 'নামটি বিদ্যমান কোনো জনপ্রিয় ব্র্যান্ডের কাছাকাছি বা বিভ্রান্তিকর হতে পারবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dpdt-trademark-brand-registration', 2, 'টিএম-১ (TM-1) ফর্ম পূরণ ও চালান জমা', 'সোনালী ব্যাংকে ৪,০২৫ টাকার চালান জমা দিয়ে টিএম-১ ফর্ম পূরণ করে অনলাইনে আবেদন সাবমিট করুন। তাৎক্ষণিক একটি অ্যাপ্লিকেশন নম্বর পাবেন।', NULL, 'অ্যাপ্লিকেশন নম্বর পাওয়ার দিন থেকেই আপনি আপনার নামের সাথে ''TM'' চিহ্ন ব্যবহার করতে পারবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dpdt-trademark-brand-registration', 3, 'ট্রেডমার্ক এক্সামিনার কর্তৃক পরীক্ষা ও জার্নাল প্রকাশ', 'রেজিস্ট্রার নাম পরীক্ষা করে অনুমতি দিলে সরকারি ট্রেডমার্ক জার্নালে দুই মাসের জন্য প্রকাশ করা হবে যাতে কারো কোনো আপত্তি থাকলে জানাতে পারে।', NULL, 'আপত্তি না এলে চূড়ান্ত সার্টিফিকেট প্রস্তুত হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dpdt-trademark-brand-registration', 4, '১০ বছর মেয়াদি ট্রেডমার্ক সার্টিফিকেট ও ® সিম্বল লাভ', 'চূড়ান্ত ফি জমা দিয়ে সিলমোহরযুক্ত ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট নিন। এরপর থেকে আপনার ব্র্যান্ড নামের পাশে ''®'' (Registered) চিহ্ন ব্যবহার করতে পারবেন এবং কেউ কপি করলে কপিরাইট ও ট্রেডমার্ক আইনে ক্ষতিপূরণ দাবি করতে পারবেন।', NULL, NULL);
            

-- Service: কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা (bd-copyright-registration-software-creative)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-copyright-registration-software-creative', 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা', 'Bangladesh Copyright Office Software, Book & Creative Work Registration Guide', 
            'মেধাসম্পদ ও আইটি', NULL, 'বাংলাদেশ কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়', 
            'নিজের লেখা বই, মৌলিক গান, চলচ্চিত্র, ফটোগ্রাফি অথবা তৈরি করা সফটওয়্যার ও মোবাইল অ্যাপের কোড যাতে কেউ চুরি বা পাইরেসি করতে না পারে, সেজন্য কপিরাইট নিবন্ধন করা আবশ্যক। কপিরাইট অফিসের দালালরা ২০,০০০-৩০,০০০ টাকা দাবি করে, অথচ সফটওয়্যারের সরকারি ফি মাত্র ২,০০০ টাকা এবং বই বা সাহিত্যকর্মের ফি মাত্র ১,০০০ টাকা!', 'আবেদন ও গেজেট নোটিশের পর সর্বোচ্চ ৩০ কার্যদিবসের মধ্যে চূড়ান্ত কপিরাইট সনদ', 
            'http://www.copyrightoffice.gov.bd', 'http://www.copyrightoffice.gov.bd', 
            'https://copyrightoffice.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: কপিরাইট সনদ সম্পূর্ণ আইনগত বিষয়। দালাল ছাড়াই যেকোনো প্রোগ্রামার বা লেখক ঘরে বসে অনলাইনে সরাসরি সরকারের কপিরাইট রেজিস্ট্রি থেকে নিজের সৃষ্টি নিরাপদ রাখতে পারেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-copyright-registration-software-creative';
DELETE FROM service_documents WHERE service_id = 'bd-copyright-registration-software-creative';
DELETE FROM service_steps WHERE service_id = 'bd-copyright-registration-software-creative';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-copyright-registration-software-creative', 'সফটওয়্যার / কম্পিউটার প্রোগ্রাম / মোবাইল অ্যাপ কপিরাইট ফি', 2000.0, 1, 'সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-৩৪৩১-০০০১-১৮১৬)', 'আইটি সফটওয়্যারের সরকারি রেজিস্ট্রেশন ফি মাত্র ২,০০০ টাকা (+১৫% ভ্যাট)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-copyright-registration-software-creative', 'সাহিত্যকর্ম / বই / পাণ্ডুলিপি কপিরাইট ফি', 1000.0, 1, 'ট্রেজারি চালান', 'বই ও নাটকের সরকারি নির্দিষ্ট ফি ১,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-copyright-registration-software-creative', 'সঙ্গীতকর্ম ও অডিও-ভিডিও অ্যালবাম ফি', 1500.0, 1, 'ট্রেজারি চালান', 'গান ও ভিডিও অ্যালবামের সরকারি ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-copyright-registration-software-creative', 'সফটওয়্যারের সোর্স কোড ও ইউজার ম্যানুয়াল (অথবা বই/গানের মূল কপি - ২ সেট)', 1, 0, 'সিডি/ডিভিডি অথবা প্রিন্ট কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-copyright-registration-software-creative', 'আবেদনকারী/রচয়িতার জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-copyright-registration-software-creative', 'স্বত্বাধিকারীর অঙ্গীকারনামা (মৌলিক সৃষ্টির ঘোষণাপত্র)', 1, 0, 'স্বাক্ষরিত মূল ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-copyright-registration-software-creative', 'সরকারি ট্রেজারি চালানের মূল কপি', 1, 0, 'ব্যাংক রসিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-copyright-registration-software-creative', 1, 'ই-কপিরাইট পোর্টালে অনলাইন আবেদন', 'http://www.copyrightoffice.gov.bd ওয়েবসাইটে যান। ''অনলাইন কপিরাইট আবেদন'' সিস্টেমে গিয়ে ফর্ম-২ পূরণ করুন।', 'http://www.copyrightoffice.gov.bd', 'কাজটি সম্পূর্ণ নিজের মৌলিক সৃষ্টি হতে হবে, অন্য কারো কাজ থেকে কপি করা যাবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-copyright-registration-software-creative', 2, 'সোনালী ব্যাংকে সরকারি চালান ফি জমা', 'সফটওয়্যারের জন্য ২,০০০ টাকা বা বইয়ের জন্য ১,০০০ টাকা চালানে জমা দিয়ে রসিদ সিস্টেমে আপলোড করুন।', NULL, 'কোনো মধ্যস্থতাকারীকে অতিরিক্ত টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-copyright-registration-software-creative', 3, 'কপিরাইট রেজিস্ট্রারের চূড়ান্ত সনদ লাভ', 'কপিরাইট পরীক্ষক যাচাই শেষে আপনাকে সরকারি সিলমোহরযুক্ত কপিরাইট রেজিস্ট্রেশন সার্টিফিকেট প্রদান করবেন যা রচয়িতার আজীবন এবং মৃত্যুর পর আরও ৬০ বছর পর্যন্ত কার্যকর থাকে।', NULL, NULL);
            

-- Service: ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা (bd-wasa-new-water-sewerage-connection)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-wasa-new-water-sewerage-connection', 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা', 'WASA New Water & Sewerage Connection Official Procedure & Fee Guide', 
            'নাগরিক ইউটিলিটি ও পানি', NULL, 'ঢাকা / চট্টগ্রাম / রাজশাহী / খুলনা ওয়াসা, স্থানীয় সরকার বিভাগ', 
            'নতুন বাড়ি বা ভবনে ওয়াসার পানির লাইন ও স্যুয়ারেজ সংযোগ নিতে স্থানীয় দালালরা ৫০,০০০ থেকে ১ লাখ টাকা পর্যন্ত ঘুষ দাবি করে। ওয়াসা এখন ই-ওয়াসা (e-WASA) অনলাইন পোর্টালে ডিজিটাল আবেদন চালু করেছে, যেখানে নির্ধারিত সংযোগ চার্জ ও মিটারের ডিমান্ড নোট দিয়ে সরাসরি বৈধ পানির সংযোগ পাওয়া যায়।', 'কারিগরি পরিদর্শন ও ডিমান্ড নোটের পর সর্বোচ্চ ১৫ কার্যদিবস', 
            'https://dwasa.org.bd', 'https://dwasa.org.bd', 
            'https://dwasa.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: অবৈধ পানির লাইন বা চোরাই মিটার নিলে ওয়াসার ভ্রাম্যমাণ আদালত লাখ টাকা জরিমানা ও পানির লাইন চিরতরে বিচ্ছিন্ন করে দেয়। শুধুমাত্র বৈধ ই-ওয়াসা সিস্টেমের মাধ্যমে ডিমান্ড নোট দিয়ে সংযোগ নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-wasa-new-water-sewerage-connection';
DELETE FROM service_documents WHERE service_id = 'bd-wasa-new-water-sewerage-connection';
DELETE FROM service_steps WHERE service_id = 'bd-wasa-new-water-sewerage-connection';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'আবেদন ফরম ফি (আবাসিক)', 300.0, 1, 'অনলাইন পেমেন্ট গেটওয়ে / ব্যাংক', 'সরকারি আবেদন ফি মাত্র ৩০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'পানি ও স্যুয়ারেজ সংযোগ জামানত ও প্রসেসিং ফি (ডিমান্ড নোট)', 5000.0, 1, 'ব্যাংক পে-অর্ডার / চালান', 'পাইপের ব্যাস (ডায়ামিটার যেমন: ৩/৪ ইঞ্চি বা ১ ইঞ্চি) অনুযায়ী ওয়াসা নির্ধারিত সরকারি ডিমান্ড নোট।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'রাস্তা খনন ক্ষতিপূরণ ফি (সিটি কর্পোরেশন রোড কাটিং চার্জ)', 3000.0, 1, 'চালান', 'রাস্তা কাটার প্রয়োজন হলে প্রযোজ্য সরকারি ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'জমির মালিকানা দলিল ও হালনাগাদ নামজারি খতিয়ান', 1, 0, 'স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'সিটি কর্পোরেশন / পৌরসভার অনুমোদিত হোল্ডিং ট্যাক্স দাখিলা', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-new-water-sewerage-connection', 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের নকশা (প্ল্যান)', 1, 0, 'নকশার কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-new-water-sewerage-connection', 1, 'ই-ওয়াসা পোর্টালে অনলাইন আবেদন', 'https://dwasa.org.bd (বা নিজ ওয়াসার পোর্টালে) যান। ''New Connection'' অপশনে ক্লিক করে ৩০০ টাকা ফি দিয়ে আবেদন করুন।', 'https://dwasa.org.bd', 'আপনার নিকটবর্তী মূল পানির পাইপলাইনের অবস্থান ও দূরত্ব উল্লেখ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-new-water-sewerage-connection', 2, 'ওয়াসা প্রকৌশলী কর্তৃক প্রাক্কলন ও ডিমান্ড নোট জারি', 'ওয়াসা জোনাল প্রকৌশলী এসে পাইপের সাইজ পরীক্ষা করবেন এবং সরকারি ডিমান্ড নোট ইস্যু করবেন।', NULL, 'প্রকৌশলী বা পরিদর্শককে কোনো অবৈধ টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-new-water-sewerage-connection', 3, 'ডিমান্ড নোট পরিশোধ ও মিটার সংযোগ', 'অনুমোদিত ব্যাংকে ডিমান্ড নোটের টাকা জমা দিলে ওয়াসা অনুমোদিত প্লাম্বার এসে পাইপ সংযোগ করে ডিজিটাল ওয়াটার মিটার স্থাপন করবে।', NULL, NULL);
            

-- Service: আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ) (bd-titas-gas-bill-correction-name-change)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-titas-gas-bill-correction-name-change', 'আবাসিক গ্যাস সংযোগের নাম পরিবর্তন ও বিল সংশোধন নির্দেশিকা (তিতাস/বাখরাবাদ)', 'Residential Gas Connection Ownership Transfer & Bill Correction Guide (Titas/Bakhrabad)', 
            'বিদ্যুৎ ও জ্বালানি', NULL, 'তিতাস গ্যাস টিঅ্যান্ডডি কোং লি. / বাখরাবাদ গ্যাস, পেট্রোবাংলা', 
            'ফ্ল্যাট বা বাড়ি কেনার পর তিতাস গ্যাস বিলের কাগজপত্রে পূর্ববর্তী মালিকের নাম পরিবর্তন করা এবং বকেয়া বা অতিরিক্ত বিল সংশোধন করতে গ্যাস অফিসের দালালরা ২০,০০০-৩০,০০০ টাকা হাতিয়ে নেয়। গ্যাস অফিসে নির্ধারিত ফরমে আবেদন করে নামমাত্র সরকারি ফি দিয়ে সরাসরি নিজের নামে গ্যাস সংযোগ স্থানান্তর করা যায়।', 'আবেদন ও মূল দলিল যাচাইয়ের পর সর্বোচ্চ ১০ থেকে ১৫ কার্যদিবস', 
            'https://titasgas.org.bd', 'https://titasgas.org.bd', 
            'https://titasgas.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: তিতাস গ্যাস চত্বরে দালালদের ফাঁদে পড়বেন না। নিজের দলিলের কপি ও পরিশোধিত বিল জমা দিলে সরকারিভাবে মাত্র ৫০০ টাকায় নাম পরিবর্তন হয়ে যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-titas-gas-bill-correction-name-change';
DELETE FROM service_documents WHERE service_id = 'bd-titas-gas-bill-correction-name-change';
DELETE FROM service_steps WHERE service_id = 'bd-titas-gas-bill-correction-name-change';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-titas-gas-bill-correction-name-change', 'গ্রাহক নাম পরিবর্তন ফি (আবাসিক)', 500.0, 1, 'তিতাস ব্যাংকিং বুথ / অনলাইন', 'সরকারি নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-titas-gas-bill-correction-name-change', 'বকেয়া বিল ও ডাটা এন্ট্রি ভুল সংশোধন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'বিলিং ভুলের জন্য কোনো ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-titas-gas-bill-correction-name-change', 'নতুন মালিকের জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-titas-gas-bill-correction-name-change', 'ফ্ল্যাট বা বাড়ির রেজিস্ট্রিকৃত সাফ-কবলা দলিল ও নামজারি খতিয়ান', 1, 0, 'ফটোকপি ও আসল কপি প্রদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-titas-gas-bill-correction-name-change', 'সর্বশেষ পরিশোধিত গ্যাস বিলের মূল কপি (কোনো বকেয়া থাকা যাবে না)', 1, 0, 'ব্যাংক সিলযুক্ত রসিদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-titas-gas-bill-correction-name-change', '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে অঙ্গীকারনামা', 1, 0, 'হলফনামা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-titas-gas-bill-correction-name-change', 1, 'তিতাস জোনাল অফিসে নির্ধারিত ফর্মে আবেদন', 'সংশ্লিষ্ট তিতাস রাজস্ব শাখায় গিয়ে ''নাম পরিবর্তন ফরম'' সংগ্রহ করুন। দলিলের ফটোকপি ও বকেয়াহীন বিলের কপি সংযুক্ত করুন।', 'https://titasgas.org.bd', 'আগের মালিকের কোনো বকেয়া বিল থাকলে তা আগেই ক্লিয়ার করতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-titas-gas-bill-correction-name-change', 2, '৫০০ টাকা সরকারি ফি জমা ও শুনানি', 'ব্যাংক বুথে ৫০০ টাকার রসিদ জমা দিন। রাজস্ব কর্মকর্তা দলিল যাচাই করে মূল নথিতে নতুন মালিকের নাম আপডেট করবেন।', NULL, 'পরবর্তী মাস থেকেই নতুন মালিকের নামে গ্যাস বিল আসবে।');
            

-- Service: ৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা (bd-dae-agricultural-loan-subsidy-seed)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dae-agricultural-loan-subsidy-seed', '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা', 'Bangladesh 4% Concessionary Agricultural Loan & Free Seed/Fertilizer Subsidy Guide', 
            'কৃষি ও খাদ্য নিরাপত্তা', NULL, 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বাংলাদেশ ব্যাংক', 
            'প্রকৃত কৃষকদের ফসল উৎপাদন, ডাল, তৈলবীজ, ভুট্টা ও মশলা চাষে সরকার মাত্র ৪% রেয়াতি সুদে ব্যাংক ঋণ এবং বিনামূল্যে সার-বীজ প্রণোদনা দেয়। গ্রামের দালাল ও টাউটরা ঋণ তুলে দেওয়ার নামে কৃষকদের কাছ থেকে ১০-২০% কমিশন কেটে নেয়। অথচ কৃষক কৃষি কার্ড ও ১০ টাকার ব্যাংক হিসাব দিয়ে সরাসরি ব্যাংকে গিয়ে কোনো ঘুষ বা কমিশন ছাড়াই সরকারি ঋণ পাওয়ার অধিকার রাখেন।', 'ইউনিয়ন কৃষি কমিটি ও ব্যাংক ফিল্ড যাচাইয়ের পর সর্বোচ্চ ১০ কার্যদিবসের মধ্যে ঋণ বিতরণ', 
            'https://dae.gov.bd', 'https://dae.gov.bd', 
            'https://dae.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: কোনো মেম্বার বা টাউটকে ঋণের টাকার ভাগ দেবেন না। সরকার কৃষকদের সর্বোচ্চ অগ্রাধিকার দিয়েছে। কোনো ব্যাংক ম্যানেজার কৃষি ঋণ দিতে গড়িমসি বা ঘুষ চাইলে বাংলাদেশ ব্যাংকের আর্থিক অন্তর্ভুক্তি বিভাগ বা হটলাইন ১৬২৩৬-এ সরাসরি জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dae-agricultural-loan-subsidy-seed';
DELETE FROM service_documents WHERE service_id = 'bd-dae-agricultural-loan-subsidy-seed';
DELETE FROM service_steps WHERE service_id = 'bd-dae-agricultural-loan-subsidy-seed';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 'কৃষি ঋণ আবেদন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'ঋণ আবেদনের কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 'কৃষকের ১০ টাকার ব্যাংক অ্যাকাউন্ট খোলার ফি', 10.0, 1, 'সোনালী / অগ্রণী / জনতা / বাংলাদেশ কৃষি ব্যাংক', 'মাত্র ১০ টাকা প্রাথমিক জমা দিয়ে সরকারি একাউন্ট খোলা যায়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 'উপসহকারী কৃষি কর্মকর্তা (BS) কর্তৃক প্রদত্ত কৃষক কার্ড / কৃষি উপকরণ সহায়তা কার্ড', 1, 0, 'মূল কার্ড', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 'কৃষকের জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', '১০ টাকার সরকারি ব্যাংক অ্যাকাউন্টের চেক বই বা পাস বইয়ের কপি', 1, 0, 'কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 'জমির খতিয়ান বা বর্গাচাষী হলে জমির মালিকের প্রত্যয়নপত্র', 1, 0, 'কাউন্সিলর/মেম্বার সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 1, 'কৃষক কার্ড প্রস্তুত ও ১০ টাকার ব্যাংক একাউন্ট খোলা', 'ইউনিয়ন উপসহকারী কৃষি কর্মকর্তার কাছে গিয়ে কৃষক কার্ড সংগ্রহ করুন এবং বাংলাদেশ কৃষি ব্যাংক বা সোনালী ব্যাংকে মাত্র ১০ টাকায় হিসাব খুলুন।', 'https://dae.gov.bd', 'বর্গাচাষীদের জন্যও বিশেষ সরকারি ঋণের বিধান রয়েছে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 2, 'ব্যাংক শাখায় সরাসরি কৃষি ঋণ আবেদন', 'কোনো দালালের মাধ্যমে না গিয়ে সরাসরি ব্যাংক ম্যানেজারের সাথে দেখা করে কৃষি ঋণের ফর্ম পূরণ করুন।', NULL, 'বাংলাদেশ ব্যাংকের নিয়ম অনুযায়ী কৃষি ঋণে কোনো গোপন চার্জ বা বাড়তি কমিশন নেওয়া সম্পূর্ণ নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-agricultural-loan-subsidy-seed', 3, 'সরাসরি অ্যাকাউন্টে ঋণ বিতরণ ও ফসল কর্তন শেষে পরিশোধ', 'ব্যাংক আপনার জমিন পরিদর্শন করে সরাসরি আপনার একাউন্টে ৪% সুদে ঋণের টাকা পাঠিয়ে দেবে। ফসল উঠলে কিস্তিতে ঋণ পরিশোধ করুন।', NULL, NULL);
            

-- Service: ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা (bd-dls-dairy-poultry-farm-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dls-dairy-poultry-farm-registration', 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা', 'Department of Livestock Services (DLS) Dairy & Poultry Farm Registration Guide', 
            'প্রাণিসম্পদ ও কৃষি', NULL, 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়', 
            'গরু, ছাগল ও মুরগির খামার করে তরুণ উদ্যোক্তারা সরকারি আর্থিক প্রণোদনা, স্বল্প সুদে ঋণ এবং বিনামূল্যে ভ্যাকসিন পেতে পারেন। প্রাণিসম্পদ অফিসের দালালরা খামার নিবন্ধনের নামে হাজার হাজার টাকা নেয়, অথচ প্রাণিসম্পদ অধিদপ্তরে খামার নিবন্ধন সম্পূর্ণ বিনামূল্যে করা যায়।', 'আবেদন ও পরিদর্শনের পর সর্বোচ্চ ৭ কার্যদিবসের মধ্যে নিবন্ধন সনদ প্রদান', 
            'https://dls.gov.bd', 'https://dls.gov.bd', 
            'https://dls.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: প্রাণিসম্পদ অধিদপ্তরের সেবা সম্পূর্ণ কৃষিবান্ধব। কোনো তৃতীয় পক্ষের মাধ্যমে টাকা লেনদেন করবেন না। সরাসরি উপজেলা প্রাণিসম্পদ হাসপাতালে যোগাযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dls-dairy-poultry-farm-registration';
DELETE FROM service_documents WHERE service_id = 'bd-dls-dairy-poultry-farm-registration';
DELETE FROM service_steps WHERE service_id = 'bd-dls-dairy-poultry-farm-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'খামার নিবন্ধন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'খামার নিবন্ধনের কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'সরকারি ভ্যাকসিন (তড়কা, বাদলা, ক্ষুরারোগ, রানীক্ষেত)', 10.0, 1, 'উপজেলা প্রাণিসম্পদ হাসপাতাল কাউন্টার', 'সরকারি প্রমিত মূল্য মাত্র ৫ থেকে ১০ টাকা মাত্র।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'উদ্যোক্তার জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'খামারের জমির মালিকানা বা ভাড়ার চুক্তিপত্র', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'ইউনিয়ন পরিষদ / পৌরসভার ট্রেড লাইসেন্স', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 'পশু বা পাখির সংখ্যা ও বিবরণ সম্বলিত তালিকা', 1, 0, 'তালিকা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 1, 'উপজেলা প্রাণিসম্পদ অফিসে নির্ধারিত ফর্মে আবেদন', 'উপজেলা প্রাণিসম্পদ কর্মকর্তার (ULO) কার্যালয়ে খামার নিবন্ধনের ফরম পূরণ করে জমা দিন।', 'https://dls.gov.bd', 'খামারে বর্জ্য ব্যবস্থাপনা ও বায়োসিকিউরিটি নিশ্চিত রাখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 2, 'ভেটেরিনারি সার্জন কর্তৃক খামার পরিদর্শন', 'সরকারি ডাক্তার খামার পরিদর্শন করে প্রাণিস্বাস্থ্য ও পরিবেশগত রিপোর্ট প্রদান করবেন।', NULL, 'পরিদর্শনের জন্য কোনো ফি দেওয়ার প্রয়োজন নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-dairy-poultry-farm-registration', 3, 'খামার রেজিস্ট্রেশন নম্বর ও প্রণোদনা গ্রহণ', 'নিবন্ধন সনদ পেলে আপনি খামারি হিসেবে সরকারের যেকোনো জরুরি দুর্যোগকালীন নগদ সহায়তা ও ফ্রি ভ্যাকসিনেশনের অগ্রাধিকার পাবেন।', NULL, NULL);
            

-- Service: পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা (bd-mofa-certificate-attestation-apostille)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-mofa-certificate-attestation-apostille', 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা', 'Ministry of Foreign Affairs (MOFA) & MOE Certificate Attestation Free Guide', 
            'শিক্ষা ও বৈদেশিক সনদ', NULL, 'কনস্যুলার ও কল্যাণ অনুবিভাগ, পররাষ্ট্র মন্ত্রণালয় / শিক্ষা মন্ত্রণালয়', 
            'উচ্চশিক্ষা, চাকরি বা পারিবারিক ভিসায় বিদেশে যাওয়ার জন্য এসএসসি, এইচএসসি, ডিগ্রি সার্টিফিকেট, বিবাহ সনদ (নিকাহনামা) এবং জন্ম নিবন্ধন পররাষ্ট্র ও শিক্ষা মন্ত্রণালয় থেকে সত্যায়ন (Attestation) করা আবশ্যক। পররাষ্ট্র মন্ত্রণালয়ের গেটে দালাল চক্র প্রতি সনদের জন্য ১,০০০ থেকে ৫,০০০ টাকা হাতিয়ে নেয়। অথচ স্বয়ং পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ের কাউন্টারে যেকোনো নাগরিকের সার্টিফিকেট সত্যায়ন সম্পূর্ণ বিনামূল্যে (ফি ০ টাকা) করা হয়!', 'সকালে জমা দিলে দুপুর ২টার মধ্যে একই দিনে ডিজিটাল কিউআর সত্যায়ন সম্পন্ন', 
            'https://mofa.gov.bd', 'https://attest.mofa.gov.bd', 
            'https://mofa.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: পররাষ্ট্র মন্ত্রণালয়ের গেটের বাইরে দাঁড়িয়ে থাকা কোনো দালালকে নিজের মূল্যবান আসল সনদপত্র দেবেন না। তারা অনেক সময় ভুয়া বা জাল স্টিকার লাগিয়ে দেয় যা এম্বাসিতে ধরা পড়লে ভিসা বাতিল ও আজীবন ব্ল্যাকলিস্ট হতে পারেন। মন্ত্রণালয় নিজেই সম্পূর্ণ বিনামূল্যে দ্রুততম সময়ে আসল সিল দিয়ে থাকে।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-mofa-certificate-attestation-apostille';
DELETE FROM service_documents WHERE service_id = 'bd-mofa-certificate-attestation-apostille';
DELETE FROM service_steps WHERE service_id = 'bd-mofa-certificate-attestation-apostille';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-mofa-certificate-attestation-apostille', 'পররাষ্ট্র মন্ত্রণালয় কনস্যুলার সত্যায়ন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'মন্ত্রণালয়ের কাউন্টারে কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-mofa-certificate-attestation-apostille', 'শিক্ষা মন্ত্রণালয় সত্যায়ন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকারি ফি ০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-mofa-certificate-attestation-apostille', 'সংশ্লিষ্ট শিক্ষাবোর্ড / বিশ্ববিদ্যালয় কর্তৃক মূল সনদের পেছনের পাতায় সত্যায়ন সিল', 1, 0, 'মূল সনদ ও ১ সেট পরিষ্কার ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-mofa-certificate-attestation-apostille', 'আবেদনকারীর আসল পাসপোর্ট বা জাতীয় পরিচয়পত্র (NID)', 1, 0, 'মূল কপি প্রদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-mofa-certificate-attestation-apostille', 'বিবাহ সনদ বা জন্ম নিবন্ধন হলে আইন মন্ত্রণালয়ের সত্যায়ন সিল', 0, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-mofa-certificate-attestation-apostille', 1, 'বোর্ড বা বিশ্ববিদ্যালয় থেকে প্রাথমিক সত্যায়ন', 'যে শিক্ষাবোর্ড বা ভার্সিটি থেকে পাস করেছেন, তাদের পরীক্ষা নিয়ন্ত্রক শাখা থেকে সনদের পেছনে ভেরিফিকেশন সিল করিয়ে নিন।', 'https://mofa.gov.bd', 'বোর্ড সিল ছাড়া মন্ত্রণালয় সরাসরি সত্যায়ন করে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-mofa-certificate-attestation-apostille', 2, 'শিক্ষা মন্ত্রণালয়ে সত্যায়ন (সেগুনবাগিচা কাউন্টার)', 'শিক্ষা মন্ত্রণালয়ের সত্যায়ন কাউন্টারে মূল সনদ দেখান। কোনো ফি ছাড়াই তাৎক্ষণিক সিল ও সাক্ষর করে দেওয়া হবে।', NULL, 'দালালরা বলে ভেতরে ঢোকা যায় না—সাধারণ নাগরিকরা সরাসরি কাউন্টারে যেতে পারেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-mofa-certificate-attestation-apostille', 3, 'পররাষ্ট্র মন্ত্রণালয়ের কনস্যুলার উইংয়ে জমা', 'সেগুনবাগিচায় পররাষ্ট্র মন্ত্রণালয়ের কনস্যুলার কাউন্টারে সকাল ৯টা থেকে বেলা ১২টার মধ্যে জমা দিন। কোনো ফরমের দরকার নেই। কাউন্টার থেকে টোকেন নিন।', NULL, 'দুপুর ১টা থেকে ৩টার মধ্যে টোকেন দেখালেই কিউআর কোডযুক্ত ডিজিটাল পররাষ্ট্র সত্যায়ন স্টিকার লাগানো মূল সনদ আপনার হাতে তুলে দেওয়া হবে।');
            

-- Service: এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন (bd-ntrca-teacher-registration-certificate-correction)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-ntrca-teacher-registration-certificate-correction', 'এনটিআরসিএ (NTRCA) শিক্ষক নিবন্ধন সনদ সংশোধন ও ডুপ্লিকেট কপি উত্তোলন', 'NTRCA Teacher Registration Certificate Correction & Duplicate Copy Guide', 
            'শিক্ষা ও শিক্ষক নিয়োগ', NULL, 'বেসরকারি শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA), শিক্ষা মন্ত্রণালয়', 
            'এমপিওভুক্ত স্কুল, কলেজ ও মাদ্রাসায় শিক্ষকতার জন্য এনটিআরসিএ নিবন্ধন সনদ অপরিহার্য। সনদে নাম ভুল বা সনদ হারিয়ে গেলে দালাল চক্র শিক্ষকদের কাছ থেকে ২০,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত দাবি করে। এনটিআরসিএ পোর্টালে সরাসরি সরকার নির্ধারিত ফি সোনালী ব্যাংকে জমা দিয়ে নির্ভুলভাবে সনদ সংশোধন ও উত্তোলন করা যায়।', 'আবেদন ও কাগজপত্র যাচাইয়ের পর সর্বোচ্চ ১৫ থেকে ২০ কার্যদিবস', 
            'http://www.ntrca.gov.bd', 'http://www.ntrca.gov.bd', 
            'https://ntrca.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: শিক্ষক নিবন্ধন নিয়ে কোনো অসাধু চক্রের কথায় প্রলুব্ধ হবেন না। এনটিআরসিএ সনদ সম্পূর্ণ মেধা ও সরকারি প্রক্রিয়ায় নিয়ন্ত্রিত হয়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-ntrca-teacher-registration-certificate-correction';
DELETE FROM service_documents WHERE service_id = 'bd-ntrca-teacher-registration-certificate-correction';
DELETE FROM service_steps WHERE service_id = 'bd-ntrca-teacher-registration-certificate-correction';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'সনদ তথ্য সংশোধন ফি', 500.0, 1, 'সোনালী ব্যাংক ট্রেজারি পে-অর্ডার / চালান', 'সরকারি প্রমিত ফি ৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'হারানো সনদের ডুপ্লিকেট (দ্বিতীয় কপি) ফি', 1000.0, 1, 'সোনালী ব্যাংক', 'ডুপ্লিকেট কপি ফি ১,০০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও এসএসসি সার্টিফিকেটের সত্যায়িত কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'এনটিআরসিএ মূল সনদপত্র (সংশোধনের ক্ষেত্রে) অথবা জিডি কপি (হারিয়ে গেলে)', 1, 0, 'মূল কপি / জিডি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'পত্রিকায় প্রকাশিত হারানো বিজ্ঞপ্তি বা নাম ভুলের বিজ্ঞপ্তির মূল কাটিং', 1, 0, 'পত্রিকার কাটিং', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 'সোনালী ব্যাংকের পে-অর্ডারের মূল কপি', 1, 0, 'ব্যাংক ড্রাফট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 1, 'এনটিআরসিএ সচিব বরাবর আবেদন', 'http://www.ntrca.gov.bd সাইট থেকে নির্ধারিত আবেদন ফরম ডাউনলোড করে নির্ভুলভাবে পূরণ করুন। পে-অর্ডার ও প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন।', 'http://www.ntrca.gov.bd', 'আপনার রোল নম্বর, ব্যাচ ও রেজিস্ট্রেশন নম্বর সতর্কভাবে লিখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 2, 'সরাসরি এনটিআরসিএ কার্যালয়ে জমা বা রেজিস্ট্রি ডাকযোগে প্রেরণ', 'রেড ক্রিসেন্ট বোরাক টাওয়ার, ইস্কাটন গার্ডেন রোড, ঢাকায় এনআইটিআরসিএ কাউন্টারে জমা দিন অথবা ডাকযোগে পাঠান।', NULL, 'কোনো বহিরাগত দালালের সাথে আর্থিক লেনদেন করবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ntrca-teacher-registration-certificate-correction', 3, 'সংশোধিত নতুন সনদ গ্রহণ', 'যাচাই কমিটি অনুমোদন দিলে আপনাকে নতুন মুদ্রিত আসল সনদ প্রদান করা হবে।', NULL, NULL);
            

-- Service: বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি) (bd-freedom-fighter-honorarium-allowance-g2p)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-freedom-fighter-honorarium-allowance-g2p', 'বীর মুক্তিযোদ্ধা সম্মানী ভাতা ও চিকিৎসা সহায়তা নির্দেশিকা (G2P পদ্ধতি)', 'Freedom Fighters Monthly Honorarium Allowance & Medical Aid Official Guide', 
            'মুক্তিযুদ্ধ ও সামাজিক নিরাপত্তা', NULL, 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়', 
            'জাতির শ্রেষ্ঠ সন্তান বীর মুক্তিযোদ্ধা ও তাদের শহীদ/ওয়ারিশ পরিবারকে সরকার প্রতি মাসে ২০,০০০ টাকা সম্মানী ভাতা এবং বিশেষ চিকিৎসা অনুদান প্রদান করে। ভাতা প্রাপ্তিতে যেন কোনো ঘুষ বা হয়রানি না হয়, সেজন্য জিটুপি (Government to Person - G2P) পদ্ধতিতে সরাসরি মুক্তিযোদ্ধার ব্যাংক একাউন্টে প্রতি মাসের শুরুতে টাকা পাঠিয়ে দেওয়া হয়।', 'এমআইএস (MIS) ভেরিফিকেশনের পর সরাসরি নিয়মিত মাসিক বিতরণ', 
            'https://molwa.gov.bd', 'https://mis.molwa.gov.bd', 
            'https://molwa.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: মুক্তিযোদ্ধা ভাতা তালিকায় নাম তোলার জন্য কোনো দালালকে টাকা দেবেন না। জাল মুক্তিযোদ্ধা সনদ শাস্তিযোগ্য অপরাধ। প্রকৃত বীর মুক্তিযোদ্ধারা কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি সরকারের এই রাষ্ট্রীয় সম্মাননা লাভ করেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-freedom-fighter-honorarium-allowance-g2p';
DELETE FROM service_documents WHERE service_id = 'bd-freedom-fighter-honorarium-allowance-g2p';
DELETE FROM service_steps WHERE service_id = 'bd-freedom-fighter-honorarium-allowance-g2p';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 'ভাতা ও চিকিৎসা সহায়তা আবেদন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'মুক্তিযোদ্ধাদের সেবায় কোনো ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 'মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়ের সমন্বিত তালিকা ও ডিজিটাল সনদ / লাল মুক্তিবার্তা নম্বর', 1, 0, 'প্রমাণপত্র কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 'বীর মুক্তিযোদ্ধা / ওয়ারিশ সুবিধাভোগীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 'সুবিধাভোগীর নিজস্ব ব্যাংক অ্যাকাউন্টের চেক পাতার কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 'ওয়ারিশান সনদ (বীর মুক্তিযোদ্ধার মৃত্যুর ক্ষেত্রে)', 0, 0, 'ইউপি/সিটি কর্পোরেশন সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 1, 'মন্ত্রণালয়ের এমআইএস (MIS) পোর্টালে ডাটা যাচাই', 'https://mis.molwa.gov.bd পোর্টালে আপনার মুক্তিযোদ্ধা সনদ ও গেজেট নম্বর যাচাই করুন।', 'https://mis.molwa.gov.bd', 'নাম ও জন্মতারিখ এনআইডির সাথে হুবহু মিল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 2, 'উপজেলা নির্বাহী কর্মকর্তা (UNO) কার্যালয়ে ব্যাংক হিসাব সংযোজন', 'সংশ্লিষ্ট উপজেলা নির্বাহী কর্মকর্তার কাছে এনআইডি ও ব্যাংকের চেকের কপি জমা দিন। এটি কেন্দ্রীয় G2P সিস্টেমে লিঙ্ক করা হবে।', NULL, 'কোনো ব্যক্তির কাছে টাকা বা চাঁদা দেওয়া সম্পূর্ণ নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-freedom-fighter-honorarium-allowance-g2p', 3, 'সরাসরি অ্যাকাউন্টে মাসিক ২০,০০০ টাকা জমা', 'প্রতি মাসের শুরুতে বাংলাদেশ ব্যাংক থেকে সরাসরি আপনার ব্যাংক একাউন্টে সম্মানী ভাতার টাকা জমা হবে এবং মোবাইলে এসএমএস পাবেন।', NULL, NULL);
            

-- Service: প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা (bd-disability-student-education-stipend)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-disability-student-education-stipend', 'প্রতিবন্ধী শিক্ষার্থীদের সরকারি শিক্ষা উপবৃত্তি আবেদন নির্দেশিকা', 'Government Education Stipend for Students with Disabilities Application Guide', 
            'শিক্ষা ও সমাজকল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়', 
            'বিশেষ চাহিদা সম্পন্ন ও প্রতিবন্ধী শিক্ষার্থীদের পড়াশোনা চালিয়ে নেওয়ার জন্য সরকার প্রাথমিক থেকে বিশ্ববিদ্যালয় পর্যন্ত প্রতি মাসে মাসিক উপবৃত্তি প্রদান করে। বিদ্যালয় ও সমাজসেবা অফিসের কর্মচারীদের উৎকোচ দেওয়ার সংস্কৃতি বন্ধ করতে এই উপবৃত্তি এখন সরাসরি মোবাইল ওয়ালেটে পৌঁছে দেওয়া হয়।', 'শিক্ষাবর্ষের শুরুতে আবেদন সাপেক্ষে সরাসরি ত্রৈমাসিক বিতরণ', 
            'https://dss.gov.bd', 'https://dss.gov.bd', 
            'https://dss.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: বিশেষ শিশুদের উপবৃত্তি পাওয়া তাদের নাগরিক অধিকার। কোনো শিক্ষক বা অফিস সহকারী উপবৃত্তি মঞ্জুরের জন্য টাকা দাবি করলে অবিলম্বে উপজেলা নির্বাহী কর্মকর্তা বা জাতীয় হেল্পলাইন ১০৯৮-এ অভিযোগ দায়ের করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-disability-student-education-stipend';
DELETE FROM service_documents WHERE service_id = 'bd-disability-student-education-stipend';
DELETE FROM service_steps WHERE service_id = 'bd-disability-student-education-stipend';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-disability-student-education-stipend', 'উপবৃত্তি আবেদন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আবেদনের জন্য কোনো ফি বা টাকা দিতে হয় না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-disability-student-education-stipend', 'সমাজসেবা অধিদপ্তর কর্তৃক প্রদত্ত ''সুবর্ণ নাগরিক'' প্রতিবন্ধী পরিচয়পত্র (DIS কার্ড)', 1, 0, 'ডিজিটাল কার্ডের কপি', 'উপজেলা সমাজসেবা কার্যালয় থেকে বিনামূল্যে সংগ্রহ');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-disability-student-education-stipend', 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক অধ্যয়নরত থাকার প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-disability-student-education-stipend', 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল একাউন্ট', 1, 0, 'মোবাইল নম্বর', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-disability-student-education-stipend', 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-disability-student-education-stipend', 1, 'সুবর্ণ নাগরিক আইডি সংগ্রহ', 'নিকটস্থ উপজেলা সমাজসেবা কার্যালয়ে গিয়ে বিনামূল্যে প্রতিবন্ধী কার্ড (সুবর্ণ নাগরিক) গ্রহণ করুন।', 'https://dss.gov.bd', 'কার্ড তৈরিতে কোনো ফি লাগে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-disability-student-education-stipend', 2, 'শিক্ষা প্রতিষ্ঠান বা সমাজসেবা অফিসে আবেদন', 'বিদ্যালয়ের প্রধান শিক্ষকের প্রত্যয়নসহ সমাজসেবা পোর্টালে উপবৃত্তির জন্য আবেদন করুন।', NULL, 'মোবাইল ওয়ালেট নম্বরটি অভিভাবকের নিজের এনআইডি দিয়ে নিবন্ধিত হতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-disability-student-education-stipend', 3, 'মোবাইল ওয়ালেটে নিয়মিত উপবৃত্তি লাভ', 'প্রাথমিকে মাসিক ৭৫০ টাকা, মাধ্যমিকে ৮০০ টাকা, উচ্চমাধ্যমিকে ৯০০ টাকা এবং স্নাতক/স্নাতকোত্তর স্তরে মাসিক ১,৩০০ টাকা হারে প্রতি ৩ মাস পর পর সরাসরি মোবাইলে টাকা চলে আসবে।', NULL, NULL);
            

-- Service: ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা (bd-land-survey-objection-appeal-30-31)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-land-survey-objection-appeal-30-31', 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা', 'Land Survey Record Objection (Section 30) & Appeal (Section 31) Official Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়', 
            'চলমান ক্যাডাস্ট্রাল বা ডিজিটাল ভূমি জরিপে খসড়া ডিপি (DP) খতিয়ান বা নকশায় ভুল হলে কিংবা অন্যের নামে জমি রেকর্ড হয়ে গেলে ৩০ ধারায় আপত্তি এবং আপত্তির রায়ের বিরুদ্ধে ৩১ ধারায় আপিল দায়ের করা যায়। সেটেলমেন্ট অফিসে দালালরা লক্ষ টাকা পর্যন্ত দাবি করে, অথচ সরকারি নির্ধারিত কোর্ট ফি মাত্র নামমাত্র ২০ টাকা থেকে ৫০ টাকা।', '৩০ ধারা শুনানি: ৩০-৬০ কার্যদিবস | ৩১ ধারা আপিল: ৬০-৯০ কার্যদিবস', 
            'https://dlrs.gov.bd', 'https://eporcha.gov.bd', 
            'https://dlrs.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: জরিপ ক্যাম্পে দালাল চক্র মানুষকে মিথ্যা ভয় দেখায় যে টাকা না দিলে জমি অন্যের নামে রেকর্ড হয়ে যাবে। জমি রেকর্ডের মূল ভিত্তি আইনসম্মত দলিল ও নিরবচ্ছিন্ন দখল। কোনো সেটেলমেন্ট কর্মকর্তা বা দালাল উৎকোচ দাবি করলে সঙ্গে সঙ্গে ১৬১২২ অথবা দুর্নীতি দমন কমিশন (১০৬) এ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-land-survey-objection-appeal-30-31';
DELETE FROM service_documents WHERE service_id = 'bd-land-survey-objection-appeal-30-31';
DELETE FROM service_steps WHERE service_id = 'bd-land-survey-objection-appeal-30-31';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-survey-objection-appeal-30-31', '৩০ ধারা আপত্তি কোর্ট ফি', 20.0, 1, 'কোর্ট ফি স্ট্যাম্প (আবেদন ফরমে সংযুক্ত)', 'তহশিলদার বা জরিপ ক্যাম্পের নোটিশ বোর্ডে নির্ধারিত কোর্ট ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-land-survey-objection-appeal-30-31', '৩১ ধারা আপিল কোর্ট ফি', 50.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'সহকারী সেটেলমেন্ট অফিসার বা জোনাল সেটেলমেন্ট অফিসারের নিকট আপিলে প্রযোজ্য।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-survey-objection-appeal-30-31', 'আপত্তি বা আপিল আবেদন ফরম (নির্ধারিত ফরম নং বা সাদা কাগজে বিবরণ)', 1, 0, 'কোর্ট ফি যুক্ত মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-survey-objection-appeal-30-31', 'পূর্ববর্তী চূড়ান্ত খতিয়ান (সিএস/এসএ/আরএস/সিটি জরিপ পর্চা)', 1, 0, 'সত্যায়িত অনুলিপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-survey-objection-appeal-30-31', 'মালিকানার মূল দলিল, বায়া দলিল অথবা উত্তরাধিকার সনদ (ওয়ারিশান)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-land-survey-objection-appeal-30-31', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-survey-objection-appeal-30-31', 1, 'ডিপি খতিয়ানের খসড়া প্রদর্শন ও ভুল চিহ্নিতকরণ', 'খানাপুরী-তসদিক শেষে ক্যাম্প অফিস যখন খসড়া খতিয়ান জনগণের জন্য উন্মুক্ত করে, তখন নিজের দাগ নম্বর ও রেকর্ড মিলিয়ে নিন।', NULL, 'খসড়া প্রদর্শনের ৩০ দিনের মধ্যে আপত্তি দাখিল করতে হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-survey-objection-appeal-30-31', 2, 'ক্যাম্প বা সেটেলমেন্ট অফিসে ৩০ ধারায় আপত্তি দাখিল', '২০ টাকার কোর্ট ফি লাগিয়ে সহকারী সেটেলমেন্ট অফিসার (ASO) বরাবর আবেদন জমা দিয়ে রিসিভিং স্লিপ নিন।', NULL, 'দালালকে কোনো টাকা দেবেন না, সরাসরি দায়িত্বপ্রাপ্ত পেশকারের কাছ থেকে তারিখ ও স্লিপ গ্রহণ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-land-survey-objection-appeal-30-31', 3, 'শুনানিতে পক্ষদ্বয়ের নথিপত্র উপস্থাপন', 'উভয় পক্ষকে নোটিশ করা হবে। শুনানির দিন মূল দলিল ও পর্চা প্রদর্শন করুন। এএসও موقع তদন্ত বা সাক্ষ্য নিয়ে রায় প্রদান করবেন।', NULL, 'রায় বিপক্ষে গেলে ৩০ কার্যদিবসের মধ্যে ৩১ ধারায় জোনাল সেটেলমেন্ট অফিসারের কাছে ৫০ টাকার কোর্ট ফি দিয়ে আপিল করুন।');
            

-- Service: ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা (bd-khas-land-settlement-landless)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-khas-land-settlement-landless', 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা', 'Permanent Agricultural Khas Land Settlement for Landless Families Official Guide', 
            'ভূমি ও জমিজমা সেবা', NULL, 'ভূমি মন্ত্রণালয় ও জেলা প্রশাসন', 
            'নদীভাঙা, অসচ্ছল ও সম্পূর্ণ ভূমিহীন কৃষক পরিবারকে সরকার কৃষি কাজের জন্য সর্বোচ্চ ১.৫ একর পর্যন্ত সরকারি খাস জমি স্থায়ী বন্দোবস্ত প্রদান করে। এই বন্দোবস্তের আবেদন সম্পূর্ণ বিনামূল্যে এবং কোনো সেলামি ছাড়াই (প্রতীকী ১ টাকা সেলামিতে) বন্দোবস্ত কবুলিয়ত রেজিস্ট্রি করে দেওয়া হয়।', 'উপজেলা ও জেলা কমিটির যাচাই সাপেক্ষে ৯০-১৮০ কার্যদিবস', 
            'https://minland.gov.bd', 'https://land.gov.bd', 
            'https://minland.portal.gov.bd', 'সতর্কতা: খাস জমি বন্দোবস্ত পাইয়ে দেওয়ার নামে কোনো সংঘবদ্ধ দালাল চক্র টাকা দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) বা ডিসি অফিসে অবহিত করুন। খাস জমি বিক্রয়যোগ্য নয় এবং এটি শুধুমাত্র প্রকৃত ভূমিহীন পরিবারকে প্রতীকী ১ টাকায় দেওয়া হয়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-khas-land-settlement-landless';
DELETE FROM service_documents WHERE service_id = 'bd-khas-land-settlement-landless';
DELETE FROM service_steps WHERE service_id = 'bd-khas-land-settlement-landless';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-khas-land-settlement-landless', 'খাস জমি বন্দোবস্ত আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আবেদন বা ফরমের জন্য কোনো ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-khas-land-settlement-landless', 'প্রতীকী সেলামি (সরকার নির্ধারিত)', 1.0, 1, 'ট্রেজারি চালান', 'চূড়ান্ত বরাদ্দের সময় সরকার মাত্র ১ টাকা প্রতীকী সেলামি ধার্য করে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-khas-land-settlement-landless', 'উপজেলা কৃষি খাস জমি ব্যবস্থাপনা কমিটির নির্ধারিত আবেদন ফরম', 1, 0, 'ইউএনও বা এসিল্যান্ড অফিস থেকে বিনামূল্যে সংগৃহীত', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-khas-land-settlement-landless', 'আবেদনকারী স্বামী ও স্ত্রীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-khas-land-settlement-landless', 'ইউনিয়ন পরিষদ চেয়ারম্যান কর্তৃক প্রদত্ত ভূমিহীন ও নদীভাঙা প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল প্রত্যয়ন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-khas-land-settlement-landless', 'পাসপোর্ট সাইজ ছবি (স্বামী ও স্ত্রীর যৌথ ছবি)', 1, 0, '৩ কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-khas-land-settlement-landless', 1, 'সহকারী কমিশনার (ভূমি) কার্যালয়ে আবেদন দাখিল', 'নির্ধারিত ফরমে পরিবারপ্রধানের বিবরণ, নদীভাঙা সনদ ও এনআইডি সহ এসিল্যান্ড বরাবর আবেদন জমা দিন।', NULL, 'আবেদনের জন্য কোনো দালালকে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-khas-land-settlement-landless', 2, 'ইউনিয়ন ভূমি সহকারী কর্মকর্তা ও উপজেলা কমিটির তদন্ত', 'তহশিলদার ও উপজেলা কৃষি খাস জমি কমিটি সরেজমিনে যাচাই করে দেখবে পরিবারটি আসলেই ভূমিহীন কি না।', NULL, 'তদন্তে অসদুপায় অবলম্বনের চেষ্টা করা শাস্তিযোগ্য অপরাধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-khas-land-settlement-landless', 3, 'জেলা কমিটির অনুমোদন ও যৌথ কবুলিয়ত দলিল সম্পাদন', 'জেলা প্রশাসক (DC)-এর সভাপতিত্বে জেলা কমিটি অনুমোদন দিলে স্বামী ও স্ত্রী উভয়ের নামে যৌথভাবে কবুলিয়ত ও দলিল সম্পাদন করে জমি বুঝিয়ে দেওয়া হয়।', NULL, NULL);
            

-- Service: ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা (bd-warishan-succession-certificate-union-citycorp)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-warishan-succession-certificate-union-citycorp', 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা', 'Warishan Succession Certificate Union Parishad & City Corporation Official Guide', 
            'নাগরিক সনদ ও নিবন্ধন', NULL, 'স্থানীয় সরকার বিভাগ, এলজিইডি', 
            'পারিবারিক জমিজমা বণ্টন, নামজারি, ব্যাংকের টাকা উত্তোলন কিংবা সম্পত্তি বিক্রির জন্য মৃত ব্যক্তির সকল বৈধ ওয়ারিশের তালিকা সম্বলিত ওয়ারিশান সনদ অত্যাবশ্যক। ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন ওয়ার্ড কাউন্সিলর কার্যালয় থেকে এই সনদ সংগ্রহ করতে হয়।', 'তদন্ত সাপেক্ষে ৩ থেকে ৭ কার্যদিবস', 
            'https://lgd.gov.bd', 'https://seba.gov.bd', 
            'https://lgd.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: ওয়ারিশান সনদে ইচ্ছাকৃতভাবে কোনো কন্যা বা দুর্বল ওয়ারিশের নাম বাদ দিলে পরবর্তীতে পুরো সম্পত্তি হস্তান্তর বাতিল হয়ে যাবে। সচিব বা উদ্যোক্তার নামে কোনো মধ্যস্বত্বভোগী ১,০০০ থেকে ৫,০০০ টাকা দাবি করলে স্থানীয় ইউএনও কার্যালয়ে অভিযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-warishan-succession-certificate-union-citycorp';
DELETE FROM service_documents WHERE service_id = 'bd-warishan-succession-certificate-union-citycorp';
DELETE FROM service_steps WHERE service_id = 'bd-warishan-succession-certificate-union-citycorp';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'ইউনিয়ন পরিষদ ওয়ারিশান সনদ ফি', 100.0, 1, 'ইউপি রশিদ', 'ইউনিয়ন পরিষদ আদর্শ কর তফসিল অনুযায়ী সর্বোচ্চ ১০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'পৌরসভা / সিটি কর্পোরেশন ওয়ারিশান সনদ ফি', 200.0, 1, 'অনলাইন বা ব্যাংক রশিদ', 'সিটি কর্পোরেশন বা পৌরসভা ভেদে ১০০ থেকে ৩০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'মৃত ব্যক্তির মূল মৃত্যু নিবন্ধন সনদ (Death Certificate)', 1, 0, 'অনলাইন ডিজিটাল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'সকল জীবিত ওয়ারিশের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'সকল ওয়ারিশের পাসপোর্ট সাইজ ছবি', 1, 0, 'সত্যায়িত ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 'স্থানীয় গণ্যমান্য ৩ জন প্রতিবেশী বা সদস্যের সুপারিশ/সাক্ষ্য', 1, 0, 'স্বাক্ষরিত ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 1, 'অনলাইনে বা নির্ধারিত ফরমে আবেদন', 'সংশ্লিষ্ট ইউপি সেবা পোর্টাল অথবা কাউন্সিলর অফিসে ওয়ারিশবৃন্দের নাম, সম্পর্ক ও বয়স উল্লেখ করে আবেদন করুন।', NULL, 'কোনো জীবিত ওয়ারিশের নাম গোপন করা দণ্ডবিধি অনুযায়ী জালিয়াতির অপরাধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 2, 'গ্রাম পুলিশ বা ওয়ার্ড সচিব কর্তৃক সরেজমিন তদন্ত', 'সচিব বা সংশ্লিষ্ট মেম্বার/কাউন্সিলর পারিবারিক ওয়ারিশের তালিকা সরেজমিনে যাচাই করবেন।', NULL, 'তদন্তের নামে কেউ অতিরিক্ত টাকা চাইলে সরাসরি চেয়ারম্যান বা মেয়রের সাথে কথা বলুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-warishan-succession-certificate-union-citycorp', 3, 'অনলাইন বা কিউআর কোডযুক্ত ওয়ারিশান সনদ গ্রহণ', 'ইউপি/সিটি কর্পোরেশনের নির্ধারিত সরকারি ফি রশিদ গ্রহণ করে ডিজিটাল সিলমোহরযুক্ত ওয়ারিশান সনদপত্র সংগ্রহ করুন।', NULL, NULL);
            

-- Service: ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা (bd-voter-area-transfer-form-13)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-voter-area-transfer-form-13', 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা', 'Voter Area Migration and Address Relocation Form-13 Official Guide', 
            'জাতীয় পরিচয়পত্র (NID)', NULL, 'নির্বাচন কমিশন সচিবালয় (ইসি)', 
            'চাকরি, বিবাহ বা বাসস্থান পরিবর্তনের কারণে নিজের পূর্বের ভোটার এলাকা থেকে নতুন ঠিকানায় ভোটার তালিকাভুক্ত হওয়ার নিয়ম। নির্বাচন কমিশনের বিধান অনুযায়ী ভোটার এলাকা পরিবর্তনের জন্য কোনো সরকারি ফি লাগে না (সম্পূর্ণ বিনামূল্যে)।', 'তদন্ত ও উপজেলা নির্বাচন কর্মকর্তার অনুমোদন সাপেক্ষে ১৫-৩০ কার্যদিবস', 
            'https://nidw.gov.bd', 'https://services.nidw.gov.bd', 
            'https://ecs.portal.gov.bd', 'সতর্কতা: ভোটার এলাকা স্থানান্তরে নির্বাচন কমিশন কোনো ফি নেয় না। কোনো ব্যক্তি বা দালাল ভোটার এলাকা বদলিয়ে দেওয়ার প্রলোভন দেখিয়ে টাকা চাইলে নির্বাচন কমিশন হেল্পলাইন ১০৫ এ কল দিয়ে তাৎক্ষণিক অভিযোগ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-voter-area-transfer-form-13';
DELETE FROM service_documents WHERE service_id = 'bd-voter-area-transfer-form-13';
DELETE FROM service_steps WHERE service_id = 'bd-voter-area-transfer-form-13';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-voter-area-transfer-form-13', 'ভোটার এলাকা স্থানান্তর ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'নির্বাচন কমিশনের নিয়ম অনুযায়ী স্থানান্তর সেবায় কোনো সরকারি ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-voter-area-transfer-form-13', 'ভোটার এলাকা স্থানান্তরের পূরণকৃত ফরম-১৩ (Form-13)', 1, 0, 'স্বাক্ষরিত মূল ফরম', 'নির্বাচন কমিশনের পোর্টাল (services.nidw.gov.bd) থেকে বিনামূল্যে ডাউনলোড');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-voter-area-transfer-form-13', 'আবেদনকারীর বর্তমান মূল জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-voter-area-transfer-form-13', 'নতুন ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল/গ্যাস বিল/ভাড়া চুক্তিপত্র/বাড়ি ভাড়ার রশিদ/হোল্ডিং ট্যাক্স)', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-voter-area-transfer-form-13', 'নতুন ঠিকানার পৌর মেয়র / ইউপি চেয়ারম্যান / ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-voter-area-transfer-form-13', 1, 'ফরম-১৩ পূরণ ও প্রত্যয়ন সংগ্রহ', 'এনআইডি ওয়েবসাইট থেকে ফরম-১৩ ডাউনলোড করে আপনার বর্তমান ও কাঙ্ক্ষিত ঠিকানার বিবরণ দিন।', 'https://services.nidw.gov.bd', 'যে এলাকায় যেতে চান, সেই এলাকার নির্বাচন অফিসে আবেদন জমা দিতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-voter-area-transfer-form-13', 2, 'কাঙ্ক্ষিত উপজেলা/থানা নির্বাচন অফিসে আবেদন জমা', 'নতুন এলাকার থানা নির্বাচন কর্মকর্তার কার্যালয়ে ফরম-১৩ ও ঠিকানার নথিপত্র সশরীরে জমা দিয়ে প্রাপ্তি স্বীকারপত্র নিন।', NULL, 'কোনো কম্পিউটার দোকানদার বা দালালকে ১,০০০-২,০০০ টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-voter-area-transfer-form-13', 3, 'তদন্ত ও সিস্টেমে ভোটার এলাকা স্থানান্তর সম্পন্ন', 'নির্বাচন কর্মকর্তা নথিপত্র ও ইউপি প্রত্যয়ন যাচাই করে সিস্টেমে আপনার ভোটার এলাকা আপডেট করে দেবেন। এরপর অনলাইন থেকে নতুন এনআইডি স্লিপ ডাউনলোড করা যাবে।', NULL, NULL);
            

-- Service: হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা (bd-lost-passport-reissue-gd-process)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-lost-passport-reissue-gd-process', 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা', 'Lost Passport Re-issue & Police GD Official Procedure Guide', 
            'পাসপোর্ট ও ইমিগ্রেশন', NULL, 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)', 
            'পাসপোর্ট হারিয়ে গেলে সাধারণ মানুষ চরম উদ্বেগে পড়েন এবং দালালদের খপ্পরে পড়ে অতিরিক্ত হাজার হাজার টাকা গচ্চা দেন। সঠিক নিয়ম হলো নিকটস্থ থানায় অনলাইন বা সাধারণ জিডি (GD) করে সরাসরি ই-পাসপোর্ট পোর্টালে ''Lost Passport'' ক্যাটাগরিতে আবেদন করা। সরকারি ফি সাধারণ নতুন পাসপোর্টের সমানই।', 'নিয়মিত: ১৫ কার্যদিবস | জরুরি: ৭ কার্যদিবস | অতি জরুরি: ২ কার্যদিবস', 
            'https://epassport.gov.bd', 'https://epassport.gov.bd', 
            'https://dip.gov.bd', 'সতর্কতা: হারানো পাসপোর্টের ক্ষেত্রে দালালরা বলে বিশেষ ছাড়পত্র লাগবে বলে ১০,০০০-১৫,০০০ টাকা হাতিয়ে নেয়। প্রকৃত সত্য হলো থানায় জিডি কপি থাকলে আপনি নিজেই যেকোনো সাধারণ পাসপোর্টের মতো সরকারি ফি দিয়ে পাসপোর্ট তুলতে পারবেন। কাউকে কোনো অতিরিক্ত টাকা দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-lost-passport-reissue-gd-process';
DELETE FROM service_documents WHERE service_id = 'bd-lost-passport-reissue-gd-process';
DELETE FROM service_steps WHERE service_id = 'bd-lost-passport-reissue-gd-process';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-lost-passport-reissue-gd-process', 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - নিয়মিত)', 4025.0, 1, 'এ-চালান / অনলাইন কার্ড / এমএফএস', 'ট্রেজারি চালানে ভ্যাটসহ ৪,০২৫ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-lost-passport-reissue-gd-process', 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - জরুরি)', 6325.0, 1, 'এ-চালান / অনলাইন কার্ড / এমএফএস', 'জরুরি ডেলিভারিতে ভ্যাটসহ ৬,৩২৫ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-lost-passport-reissue-gd-process', 'পুলিশ জিডি সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'থানায় সাধারণ ডায়েরি বা অনলাইনে জিডি করতে কোনো ফি লাগে না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-lost-passport-reissue-gd-process', 'থানার সাধারণ ডায়েরি (GD) এর মূল কপি (যাতে পূর্বের পাসপোর্ট নম্বর ও হারানোর বিবরণ উল্লেখ থাকে)', 1, 0, 'সিলযুক্ত মূল জিডি কপি বা অনলাইন জিডি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-lost-passport-reissue-gd-process', 'হারানো পাসপোর্টের স্পষ্ট ফটোকপি (যদি থাকে)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-lost-passport-reissue-gd-process', 'জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ', 1, 0, 'মূল কপি ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-lost-passport-reissue-gd-process', 'ই-পাসপোর্ট অনলাইন সামারি ফরম ও পেমেন্ট চালান স্লিপ', 1, 0, 'প্রিন্ট কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-lost-passport-reissue-gd-process', 1, 'থানায় জিডি বা অনলাইন জিডি দায়ের', 'পাসপোর্ট যে এলাকায় হারিয়েছে সেই থানায় জিডি করুন অথবা ''Online GD'' অ্যাপের মাধ্যমে বিনামূল্যে পাসপোর্ট হারানোর জিডি দায়ের করে জিডি কপি প্রিন্ট নিন।', NULL, 'জিডিতে অবশ্যই পুরাতন পাসপোর্ট নম্বর উল্লেখ থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-lost-passport-reissue-gd-process', 2, 'ই-পাসপোর্ট পোর্টালে ''Re-issue / Lost'' সিলেক্ট করে আবেদন', 'https://epassport.gov.bd ওয়েবসাইটে ঢুকে Re-issue অপশন নির্বাচন করে জিডি নম্বর ও তারিখ প্রদান করুন।', 'https://epassport.gov.bd', 'ভুল তথ্য দেবেন না, সিস্টেমে পূর্বের রেকর্ড ম্যাচ করবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-lost-passport-reissue-gd-process', 3, 'পাসপোর্ট অফিসে বায়োমেট্রিক ও মূল জিডি দাখিল', 'অ্যাপয়েন্টমেন্টের দিনে পাসপোর্ট অফিসে গিয়ে মূল জিডি কপি, এনআইডি ও চালান স্লিপ জমা দিয়ে ছবি ও আঙুলের ছাপ দিন। নির্দিষ্ট দিনে নতুন পাসপোর্ট ডেলিভারি নিন।', NULL, NULL);
            

-- Service: দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা (bd-dual-citizenship-certificate-mha)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dual-citizenship-certificate-mha', 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা', 'Dual Citizenship Certificate Ministry of Home Affairs Official Guide', 
            'পাসপোর্ট ও ইমিগ্রেশন', NULL, 'সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়', 
            'যেসব বাংলাদেশি নাগরিক যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া বা ইউরোপের বিভিন্ন দেশের নাগরিকত্ব গ্রহণ করেছেন, তারা বৈধভাবে বাংলাদেশের নাগরিকত্ব বহাল রাখতে দ্বৈত নাগরিকত্ব সনদ গ্রহণ করতে পারেন। এতে দেশে জমি কেনাবেচা, উত্তরাধিকার সম্পত্তি সংরক্ষণ ও ভোটাধিকার সুরক্ষিত থাকে।', 'স্বরাষ্ট্র মন্ত্রণালয় ও এসবি যাচাই সাপেক্ষে ৬০-৯০ কার্যদিবস', 
            'https://ssd.gov.bd', 'https://ssd.gov.bd', 
            'https://ssd.portal.gov.bd', 'সতর্কতা: বিদেশে বা দেশে কোনো এজেন্সি যদি বলে লাখ টাকার বিনিময়ে দ্বৈত নাগরিকত্ব সনদ দ্রুত করিয়ে দেবে—তাদের বিশ্বাস করবেন না। সরকার নির্ধারিত ৭,০০০ টাকার চালানের বাইরে কাউকে কোনো টাকা দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dual-citizenship-certificate-mha';
DELETE FROM service_documents WHERE service_id = 'bd-dual-citizenship-certificate-mha';
DELETE FROM service_steps WHERE service_id = 'bd-dual-citizenship-certificate-mha';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dual-citizenship-certificate-mha', 'দ্বৈত নাগরিকত্ব সনদ সরকারি ফি', 7000.0, 1, 'ট্রেজারি চালান (কোড: ১-২২০১-০০০১-২৬৮১)', 'অথবা বিদেশে বাংলাদেশি মিশন/দূতাবাসে সমপরিমাণ বৈদেশিক মুদ্রা (সাধারণত $৭৭-$১০০)।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dual-citizenship-certificate-mha', 'স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত দ্বৈত নাগরিকত্ব ফরম (ফরম-সি)', 1, 0, 'পূরণকৃত ও নোটারাইজড মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dual-citizenship-certificate-mha', 'বিদেশি পাসপোর্ট ও বিদেশি নাগরিকত্ব সনদ (Naturalization Certificate)', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dual-citizenship-certificate-mha', 'পূর্বের বাংলাদেশি পাসপোর্ট বা এনআইডি বা জন্ম নিবন্ধন সনদ', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dual-citizenship-certificate-mha', 'বাংলাদেশে পিতা-মাতার বা নিজের স্থাবর সম্পত্তির বিবরণ ও ওয়ারিশান সনদ', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dual-citizenship-certificate-mha', 'সরকারি ট্রেজারি চালানের মূল কপি', 1, 0, 'ব্যাংক সিলযুক্ত মূল চালান', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dual-citizenship-certificate-mha', 1, 'স্বরাষ্ট্র মন্ত্রণালয়ের পোর্টালে বা দূতাবাসে আবেদন', 'দেশে থাকলে সুরক্ষা সেবা বিভাগ (https://ssd.gov.bd) অথবা বিদেশে থাকলে নিকটস্থ বাংলাদেশ দূতাবাসে প্রয়োজনীয় কাগজপত্রসহ আবেদন জমা দিন।', 'https://ssd.gov.bd', 'ফরম নোটারি পাবলিক দ্বারা সত্যায়িত হতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dual-citizenship-certificate-mha', 2, 'স্পেশাল ব্রাঞ্চ (SB) পুলিশ ও নিরাপত্তা যাচাই', 'স্বরাষ্ট্র মন্ত্রণালয় আবেদনটি সংশ্লিষ্ট এসবি ও জেলা প্রশাসকের কাছে নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।', NULL, 'ভেরিফিকেশনে কোনো ঘুষ লেনদেন নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dual-citizenship-certificate-mha', 3, 'দ্বৈত নাগরিকত্ব সনদপত্র সংগ্রহ', 'অনুমোদন সম্পন্ন হলে সুরক্ষা সেবা বিভাগ থেকে মহামান্য রাষ্ট্রপতির পক্ষে স্বাক্ষরিত দ্বৈত নাগরিকত্ব সনদ প্রদান করা হয়।', NULL, NULL);
            

-- Service: জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা (bd-emergency-passport-express-delivery)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-emergency-passport-express-delivery', 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা', 'Emergency Medical & Study Passport Express Delivery Official Guide', 
            'পাসপোর্ট ও ইমিগ্রেশন', NULL, 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)', 
            'গুরুতর অসুস্থ রোগীর বিদেশে জরুরি চিকিৎসা, বিদেশি বিশ্ববিদ্যালয়ের স্কলারশিপ ডেডলাইন কিংবা জরুরি চাকরির ফ্লাইটের ক্ষেত্রে সরকারিভাবে ''সুপার এক্সপ্রেস'' বা দ্রুত পাসপোর্ট ডেলিভারির আইনি ব্যবস্থা রয়েছে। দালালরা রোগী ও অভিভাবকদের চরম অসহায়ত্বের সুযোগ নিয়ে ২০,০০০-৩০,০০০ টাকা দাবি করে, অথচ সরকারি সুপার এক্সপ্রেস ফি মাত্র ৮,০৫০ টাকা।', 'সুপার এক্সপ্রেস: ২ কার্যদিবস (৪৮ ঘণ্টা)', 
            'https://epassport.gov.bd', 'https://epassport.gov.bd', 
            'https://dip.gov.bd', 'সতর্কতা: পাসপোর্ট অফিসের সীমানায় দালালরা জরুরি রোগীদের ঘিরে ধরে বলে ''আমাদের না দিলে ১০ দিনেও পাসপোর্ট পাবেন না''। এটি সম্পূর্ণ মিথ্যাচার। সরকারি সুপার এক্সপ্রেস সিস্টেমে ৪৮ ঘণ্টাতেই পাসপোর্ট পাওয়া যায়। দালালদের বিরুদ্ধে অভিযোগ জানাতে পাসপোর্ট অফিস পরিচালকের রুমে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-emergency-passport-express-delivery';
DELETE FROM service_documents WHERE service_id = 'bd-emergency-passport-express-delivery';
DELETE FROM service_steps WHERE service_id = 'bd-emergency-passport-express-delivery';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-emergency-passport-express-delivery', 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ৫ বছর)', 8050.0, 1, 'এ-চালান / কার্ড / এমএফএস', 'ভ্যাটসহ মোট সরকারি ফি ৮,০৫০ টাকা (২ কর্মদিবসে ডেলিভারি)।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-emergency-passport-express-delivery', 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ১০ বছর)', 10350.0, 1, 'এ-চালান / কার্ড / এমএফএস', 'ভ্যাটসহ মোট সরকারি ফি ১০,৩৫০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-emergency-passport-express-delivery', 'হাসপাতালের চিকিৎসকের রেফারেল ও এয়ার অ্যাম্বুলেন্স/ভিসা ইনভাইটেশন লেটার', 1, 0, 'সিলযুক্ত মূল মেডিকেল রেকর্ড', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-emergency-passport-express-delivery', 'বিদেশি বিশ্ববিদ্যালয়ের অফার লেটার / ডেডলাইন নোটিশ (শিক্ষার্থীদের ক্ষেত্রে)', 0, 0, 'প্রিন্ট কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-emergency-passport-express-delivery', 'মহাপরিচালক (DG) বা উপ-পরিচালক (পাসপোর্ট) বরাবর লিখিত জরুরি আবেদনপত্র', 1, 0, 'স্বাক্ষরিত সাদা কাগজের আবেদন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-emergency-passport-express-delivery', 'ই-পাসপোর্ট অনলাইন আবেদন ফরম ও সুপার এক্সপ্রেস চালানের কপি', 1, 0, 'প্রিন্ট কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-emergency-passport-express-delivery', 1, 'সুপার এক্সপ্রেস ক্যাটাগরিতে সরকারি চালান জমা', 'পাসপোর্ট আবেদন করার সময় ''Super Express'' ডেলিভারি অপশন নির্বাচন করে নির্ধারিত সরকারি ফি অনলাইনে পরিশোধ করুন।', 'https://epassport.gov.bd', 'অতিরিক্ত এক টাকাও কোনো দালালকে দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-emergency-passport-express-delivery', 2, 'পাসপোর্ট অফিসের উপ-পরিচালক/সহকারী পরিচালকের অনুমোদন', 'মেডিকেল নথিপত্রসহ আঞ্চলিক পাসপোর্ট অফিসের প্রধান কর্মকর্তার সাথে সরাসরি দেখা করুন। জরুরি মানবিক বিবেচনায় তিনি তাৎক্ষণিক আবেদন অগ্রায়ন করবেন।', NULL, 'দালালের মাধ্যমে নয়, সরাসরি অফিস প্রধানের রুমে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-emergency-passport-express-delivery', 3, 'আগারগাঁও কেন্দ্রীয় প্রিন্টিং থেকে ২ দিনে ডেলিভারি', 'বায়োমেট্রিক নেওয়ার পর আবেদনটি সরাসরি এক্সপ্রেস কিউতে প্রিন্ট হয়ে ৪৮ ঘণ্টার মধ্যে প্রস্তুত হয়ে যায় এবং এসএমএস পাওয়া যায়।', NULL, NULL);
            

-- Service: বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা (bd-brta-lost-smartcard-replacement)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-lost-smartcard-replacement', 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা', 'BRTA Lost Digital Registration Certificate Smart Card Duplicate Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)', 
            'মোটরসাইকেল বা গাড়ির ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (ডিআরসি বা স্মার্ট কার্ড) হারিয়ে গেলে বা নষ্ট হয়ে গেলে বিআরটিএ সার্কেল অফিস থেকে প্রতিলিপি সংগ্রহ করা যায়। দালালরা সাধারণ মালিকদের কাছ থেকে ২,০০০-৩,০০০ টাকা দাবি করে, অথচ সরকারি ফি মাত্র ৬৩৩ টাকা।', 'আবেদন ও বায়োমেট্রিক গ্রহণের পর ১৫-৩০ কার্যদিবস', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.portal.gov.bd', 'সতর্কতা: বিআরটিএ প্রাঙ্গণে দালালদের কোনো কাজ নেই। ব্যাংকে ৬৩৩ টাকার চালান জমা দিয়ে নিজেই আবেদন জমা দিন। কোনো কর্মকর্তা ঘুষ দাবি করলে বিআরটিএ হেল্পলাইন ১৬৪৩১ এ কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-lost-smartcard-replacement';
DELETE FROM service_documents WHERE service_id = 'bd-brta-lost-smartcard-replacement';
DELETE FROM service_steps WHERE service_id = 'bd-brta-lost-smartcard-replacement';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-lost-smartcard-replacement', 'স্মার্ট কার্ড প্রতিলিপি ফি', 550.0, 0, 'বিআরটিএ অনুমোদিত ব্যাংক / অনলাইন পেমেন্ট গেটওয়ে', 'ফি ৫৫০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-lost-smartcard-replacement', '১৫% সরকারি ভ্যাট', 83.0, 1, 'ব্যাংক চালান', 'মোট প্রদেয় সরকারি ফি ৬৩৩ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-lost-smartcard-replacement', 'থানার মূল সাধারণ ডায়েরি (জিডি) কপি ও ট্রাফিক ক্লিয়ারেন্স সনদ', 1, 0, 'সিলযুক্ত মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-lost-smartcard-replacement', 'গাড়ির মূল ট্যাক্স টোকেন ও ফিটনেস সনদের কপি', 1, 0, 'ফটোকপি ও প্রদর্শনযোগ্য মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-lost-smartcard-replacement', 'মালিকের জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-lost-smartcard-replacement', 'বিআরটিএ নির্ধারিত আবেদন ফরম (স্মার্ট কার্ড প্রতিলিপি ফরম)', 1, 0, 'পূরণকৃত ও স্বাক্ষরিত ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-lost-smartcard-replacement', 1, 'থানায় জিডি ও ট্রাফিক ক্লিয়ারেন্স সংগ্রহ', 'গাড়ির স্মার্ট কার্ড হারানোর জিডি করে সংশ্লিষ্ট ট্রাফিক পুলিশ অফিস থেকে ক্লিয়ারেন্স নিন যে গাড়িটির কোনো মামলা বা জরিমানা বকেয়া নেই।', NULL, 'জিডিতে চেসিস ও ইঞ্জিন নম্বর নির্ভুল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-lost-smartcard-replacement', 2, 'বিএসপি (BSP) পোর্টালে বা ব্যাংকে ৬৩৩ টাকা সরকারি ফি প্রদান', 'https://bsp.brta.gov.bd পোর্টাল বা নির্ধারিত ব্যাংকে ৬৩৩ টাকা জমা দিয়ে জমার রশিদ সংগ্রহ করুন।', 'https://bsp.brta.gov.bd', 'কোনো দালালকে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-lost-smartcard-replacement', 3, 'সার্কেল অফিসে নথিপত্র জমা ও বায়োমেট্রিক প্রদান', 'মূল নথিপত্র সার্কেল অফিসে জমা দিয়ে বায়োমেট্রিক স্লিপ নিন। স্মার্ট কার্ড প্রস্তুত হলে ফোনে এসএমএস আসবে এবং অফিস থেকে সংগ্রহ করতে পারবেন।', NULL, NULL);
            

-- Service: ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা (bd-traffic-prosecution-fine-online-payment)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-traffic-prosecution-fine-online-payment', 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা', 'Traffic Police Prosecution Fine & Wrecker Bill Online Settlement Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)', 
            'রাস্তায় উল্টোপথে চলা, হেলমেট না থাকা, ফিটনেস মেয়াদোত্তীর্ণ বা অবৈধ পার্কিংয়ের জন্য ট্রাফিক পুলিশ পিওএস মেশিনে ই-প্রসিকিউশন বা রেকার বিল করলে তা সরাসরি অনলাইন ব্যাংকিং ও এমএফএস (বিকাশ, রকেট, নগদ)-এর মাধ্যমে তাৎক্ষণিক পরিশোধ করে মামলা নিষ্পত্তি করা যায়। কোনো ট্রাফিক পুলিশ বা দালালকে নগদে ঘুষ দেওয়ার প্রয়োজন নেই।', 'অনলাইনে ফি জমার সাথে সাথে তাৎক্ষণিক মামলা নিষ্পত্তি', 
            'https://police.gov.bd', 'https://dmp.gov.bd', 
            'https://dmp.gov.bd', 'সতর্কতা: ট্রাফিক মামলা দ্রুত ছাড়িয়ে দেওয়ার কথা বলে কোনো তৃতীয় পক্ষকে টাকা দেবেন না। সম্পূর্ণ প্রক্রিয়া ডিজিটাল ও স্বচ্ছ। অনলাইনে নির্ধারিত সরকারি ফাইন দেওয়ার সাথে সাথে সার্ভারে মামলা স্বয়ংক্রিয়ভাবে ডিসপোজড হয়ে যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-traffic-prosecution-fine-online-payment';
DELETE FROM service_documents WHERE service_id = 'bd-traffic-prosecution-fine-online-payment';
DELETE FROM service_steps WHERE service_id = 'bd-traffic-prosecution-fine-online-payment';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 'আইন অনুযায়ী ধার্যকৃত জরিমানা (ই-প্রসিকিউশন স্লিপ অনুযায়ী)', 500.0, 1, 'বিকাশ / নগদ / রকেট / ভিসা / মাস্টারকার্ড', 'স্লিপে উল্লিখিত ধারা অনুযায়ী ৫০০ টাকা থেকে ৫,০০০ টাকা জরিমানা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 'এমএফএস গেটওয়ে সার্ভিস চার্জ', 10.0, 1, 'অনলাইন চার্জ', '১% বা সর্বোচ্চ ১০-১৫ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 'ট্রাফিক পুলিশের পিওএস মেশিন থেকে প্রদত্ত ই-প্রসিকিউশন স্লিপ (মামলা স্লিপ)', 1, 0, 'প্রিন্ট স্লিপ', 'ট্রাফিক পুলিশ কর্মকর্তা তাৎক্ষণিক প্রদান করবেন');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 'আটককৃত ডকুমেন্টস (যদি ড্রাইভিং লাইসেন্স বা গাড়ির কাগজ জব্দ থাকে)', 0, 0, 'জব্দ রশিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 1, 'মামলা স্লিপের কিউআর কোড বা রেফারেন্স নম্বর দেখা', 'ট্রাফিক পুলিশ যে স্লিপ দিয়েছে তাতে প্রসিকিউশন নম্বর ও জরিমানার পরিমাণ লেখা থাকবে।', NULL, 'সড়কে কোনো পুলিশকে নগদে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 2, 'বিকাশ/ইউক্যাশ/ইউপে ট্রাফিক ফাইন অপশনে পেমেন্ট', 'বিকাশ বা ইউপে অ্যাপে ''Traffic Fine'' অপশনে গিয়ে মামলা নম্বরটি লিখুন। নাম ও জরিমানার অংক যাচাই করে পিন দিয়ে পরিশোধ করুন।', NULL, 'পেমেন্ট সফল হলে ট্রানজেকশন আইডি সম্বলিত এসএমএস আসবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-traffic-prosecution-fine-online-payment', 3, 'কাগজপত্র ফেরত গ্রহণ', 'পেমেন্ট কনফার্মেশন মেসেজটি সংশ্লিষ্ট ট্রাফিক সার্জেন্ট বা ট্রাফিক জোনের এডিসি/এসি অফিসে দেখালে সাথে সাথে জব্দকৃত ড্রাইভিং লাইসেন্স বা কাগজ বুঝিয়ে দেওয়া হবে।', NULL, NULL);
            

-- Service: ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা (bd-brta-driving-license-transfer-inter-district)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brta-driving-license-transfer-inter-district', 'ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা', 'BRTA Driving License Inter-District Circle Transfer Official Guide', 
            'যানবাহন ও লাইসেন্স', NULL, 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)', 
            'স্থায়ী ঠিকানা বা কর্মস্থল পরিবর্তনের কারণে নিজের ড্রাইভিং লাইসেন্স পূর্বের বিআরটিএ সার্কেল অফিস থেকে নতুন সার্কেল অফিসে স্থানান্তর করার নিয়ম। দালালরা ৩,০০০-৫,০০০ টাকা দাবি করে, অথচ সরকারি অনাপত্তি সনদ (NOC) নেওয়া সম্পূর্ণ সাধারণ প্রশাসনিক প্রক্রিয়া।', 'সার্কেল ছাড়পত্র সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস', 
            'https://brta.gov.bd', 'https://bsp.brta.gov.bd', 
            'https://brta.portal.gov.bd', 'সতর্কতা: লাইসেন্স ট্রান্সফারের নামে কোনো দালালকে টাকা দেবেন না। কোনো অফিসার আপত্তি জানালে সরাসরি বিআরটিএ প্রধান কার্যালয় বা অভিযোগ সেল ১৬৪৩১ এ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brta-driving-license-transfer-inter-district';
DELETE FROM service_documents WHERE service_id = 'bd-brta-driving-license-transfer-inter-district';
DELETE FROM service_steps WHERE service_id = 'bd-brta-driving-license-transfer-inter-district';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'সার্কেল স্থানান্তর আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'স্থানান্তর আবেদন ও এনওসির জন্য কোনো অতিরিক্ত সরকারি ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'নতুন স্মার্ট কার্ড রি-ইস্যু ফি (যদি ঠিকানা সম্বলিত নতুন কার্ড নিতে চান)', 875.0, 1, 'ব্যাংক চালান', 'ঐচ্ছিক, পুরোনো স্মার্ট কার্ড বহাল রাখলে এই ফি লাগে না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'বর্তমান মূল ড্রাইভিং লাইসেন্স (স্মার্ট কার্ড)', 1, 0, 'মূল কপি ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'জাতীয় পরিচয়পত্র (NID) যাতে নতুন সার্কেল এলাকার বর্তমান/স্থায়ী ঠিকানা রয়েছে', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'নতুন এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 'সহকারী পরিচালক (ইঞ্জিঃ) বরাবর স্থানান্তর আবেদনপত্র', 1, 0, 'স্বাক্ষরিত সাদা কাগজের আবেদন', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 1, 'বর্তমান ইস্যুকারী সার্কেল অফিসে এনওসি (NOC) আবেদন', 'যে সার্কেল থেকে লাইসেন্স ইস্যু হয়েছিল সেখানে আবেদন দিয়ে ছাড়পত্র (NOC) গ্রহণ করুন।', NULL, 'দালাল ছাড়াই সরাসরি বিআরটিএ সহকারী পরিচালকের রুমে আবেদন জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 2, 'নতুন সার্কেল অফিসে ফাইল এন্ট্রি', 'এনওসি কপি ও এনআইডিসহ নতুন সার্কেল অফিসে ফাইল এন্ট্রি করান। ডাটাবেজে আপনার সার্কেল মাইগ্রেশন সম্পন্ন হবে।', 'https://bsp.brta.gov.bd', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brta-driving-license-transfer-inter-district', 3, 'নতুন সার্কেল থেকে সেবা গ্রহণ', 'সার্কেল ট্রান্সফার সম্পন্ন হলে পরবর্তীতে নবায়ন বা ডুপ্লিকেট সংক্রান্ত সব সেবা নতুন সার্কেল থেকেই পাওয়া যাবে।', NULL, NULL);
            

-- Service: শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা (bd-nbr-zero-tax-return-marginal-income)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nbr-zero-tax-return-marginal-income', 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা', 'NBR Zero Tax Return Online Submission & Tax Certificate Official Guide', 
            'অর্থ ও রাজস্ব সেবা', NULL, 'জাতীয় রাজস্ব বোর্ড (NBR)', 
            'যাদের বার্ষিক আয় করমুক্ত সীমার নিচে (পুরুষ ৩,৫০,০০০ টাকা, নারী ও প্রবীণ ৪,০০,০০০ টাকা) কিন্তু ট্রেড লাইসেন্স নবায়ন, ব্যাংক লোন বা ক্রেডিট কার্ডের জন্য রিটার্ন দাখিলের প্রমাণ (PSR) দরকার—তারা ঘরে বসেই এনবিআরের e-Return পোর্টালে সম্পূর্ণ বিনামূল্যে ১৫ মিনিটে জিরো রিটার্ন দাখিল করে ইনস্ট্যান্ট প্রাপ্তি স্বীকারপত্র ডাউনলোড করতে পারেন। উকিল বা দালালরা ২,০০০-৩,০০০ টাকা নেয়।', 'অনলাইনে দাখিলের সাথে সাথে তাৎক্ষণিক প্রাপ্তি স্বীকারপত্র ডাউনলোড', 
            'https://nbr.gov.bd', 'https://etaxnbr.gov.bd', 
            'https://nbr.portal.gov.bd', 'সতর্কতা: ইনকাম ট্যাক্স ফাইল করার নামে দালালরা ভুয়া অডিট বা জরিমানার ভয় দেখিয়ে মানুষের কাছ থেকে টাকা হাতিয়ে নেয়। এনবিআরের অনলাইন সিস্টেম শতভাগ স্বচ্ছ ও স্বয়ংক্রিয়। কোনো দালালের সাহায্য ছাড়াই নিজের ফোন বা কম্পিউটার থেকে নিজে রিটার্ন জমা দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nbr-zero-tax-return-marginal-income';
DELETE FROM service_documents WHERE service_id = 'bd-nbr-zero-tax-return-marginal-income';
DELETE FROM service_steps WHERE service_id = 'bd-nbr-zero-tax-return-marginal-income';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 'অনলাইন রিটার্ন দাখিল ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'জাতীয় রাজস্ব বোর্ডের অনলাইন রিটার্ন পোর্টালে কোনো ফি লাগে না।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 'জিরো রিটার্ন কর প্রদেয়', 0.0, 1, 'প্রদেয় কর শূন্য (০ টাকা)', 'করযোগ্য আয় না থাকলে প্রদেয় কর ০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', '১২ ডিজিটের ই-টিন (e-TIN) নম্বর ও টিন সার্টিফিকেট', 1, 0, 'ডিজিটাল নম্বর', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 'নিজের জাতীয় পরিচয়পত্র দিয়ে নিবন্ধিত বায়োমেট্রিক সিম নম্বর (OTP ভেরিফিকেশনের জন্য)', 1, 0, 'সচল মোবাইল নম্বর', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 'বাৎসরিক ব্যাংক স্টেটমেন্ট (যদি ব্যাংক হিসাব থাকে)', 0, 0, 'পিডিএফ বা স্টেটমেন্ট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 1, 'ই-রিটার্ন পোর্টালে রেজিস্ট্রেশন', 'https://etaxnbr.gov.bd ওয়েবসাইটে গিয়ে নিজের টিন নম্বর ও এনআইডি দিয়ে নিবন্ধিত মোবাইল নম্বর দিয়ে ওটিপি ভেরিফাই করে পাসওয়ার্ড সেট করুন।', 'https://etaxnbr.gov.bd', 'অন্য কারো মোবাইল নম্বর ব্যবহার করবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 2, 'এক পাতার সহজ জিরো রিটার্ন ফর্ম পূরণ', 'আয়ের উৎস ''Non-taxable'' বা করমুক্ত সীমার নিচে থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে প্রদেয় কর ০ টাকা দেখাবে। ব্যাংক ব্যালেন্স ও সম্পদের হিসাব দিয়ে সাবমিট করুন।', NULL, 'কোনো ট্যাক্স কনসালট্যান্ট বা দালাল ছাড়াই নিজে করা যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nbr-zero-tax-return-marginal-income', 3, 'তাত্ক্ষণিক প্রাপ্তি স্বীকারপত্র ও ট্যাক্স সার্টিফিকেট প্রিন্ট', 'সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত সরকারি ''Acknowledgment Receipt'' এবং ''Tax Certificate'' ডাউনলোড করে প্রিন্ট করুন। এটি সব জায়গায় গ্রাহ্য।', NULL, NULL);
            

-- Service: ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা (bd-dncrp-consumer-rights-complaint-reward)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dncrp-consumer-rights-complaint-reward', 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা', 'Consumer Rights Protection Directorate DNCRP Complaint & 25% Reward Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়', 
            'দোকান বা ব্যবসা প্রতিষ্ঠান পণ্যের গায়ের দামের বেশি নিলে, ওজনে কম দিলে, মেয়াদোত্তীর্ণ পণ্য বিক্রি করলে বা প্রতিশ্রুতি অনুযায়ী সেবা না দিলে নাগরিকরা বিনামূল্যে অনলাইনে বা ইমেইলে অভিযোগ করতে পারেন। অভিযোগ প্রমাণিত হলে দোষী ব্যবসায়ীকে জরিমানা করা হয় এবং আদায়কৃত জরিমানার ২৫% অর্থ তাৎক্ষণিক নগদ ক্যাশ পুরস্কার হিসেবে অভিযোগকারী নাগরিককে দেওয়া হয়।', 'শুনানি ও তদন্ত সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস', 
            'https://dncrp.gov.bd', 'https://dncrp.portal.gov.bd', 
            'https://dncrp.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: ভোক্তা অধিকার আইন সাধারণ নাগরিকের সুরক্ষার ঢাল। অভিযোগ করতে কোনো উকিল বা মধ্যস্বত্বভোগী লাগে না। কোনো সমস্যা হলে সরাসরি ভোক্তা বাতায়ন ১৬১২১ এ ফোন করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dncrp-consumer-rights-complaint-reward';
DELETE FROM service_documents WHERE service_id = 'bd-dncrp-consumer-rights-complaint-reward';
DELETE FROM service_steps WHERE service_id = 'bd-dncrp-consumer-rights-complaint-reward';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 'ভোক্তা অধিকার অভিযোগ ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'অভিযোগের জন্য কোনো ফি বা স্ট্যাম্প লাগে না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 'পণ্য ক্রয়ের ক্যাশ মেমো / মানি রিসিট / অনলাইন চালানের ছবি', 1, 0, 'ফটোকপি বা স্ক্যান কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 'পণ্যের গায়ে মুদ্রিত এমআরপি (MRP) বা মেয়াদোত্তীর্ণ তারিখের স্পষ্ট ছবি', 1, 0, 'ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 'অভিযোগকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 'অভিযোগের বিবরণ (দোকানের নাম, ঠিকানা, অপরাধের ধরন)', 1, 0, 'লিখিত বা ইমেইল বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 1, 'ক্রয় রসিদ ও প্রমাণ সংগ্রহ', 'পণ্য ক্রয়ের তারিখ থেকে ৩০ দিনের মধ্যে অভিযোগ করতে হবে। পণ্যের রসিদ ও মোড়কের ছবি তুলুন।', NULL, 'রসিদ না দিলে সেটির জন্যও আলাদা অভিযোগ করা যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 2, 'ইমেইল বা ভোক্তা অধিকার পোর্টালে অভিযোগ দাখিল', 'মহাপরিচালক বরাবর অভিযোগ লিখে ncrp@dncrp.gov.bd অথবা সংশ্লিষ্ট জেলা কার্যালয়ের ইমেইলে পাঠিয়ে দিন।', 'https://dncrp.portal.gov.bd', 'হটলাইন ১৬১২১ এ ফোন দিয়েও নির্দেশনা নেওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dncrp-consumer-rights-complaint-reward', 3, 'উভয় পক্ষের শুনানি ও ২৫% নগদ অর্থ পুরস্কার লাভ', 'নির্বাহী ম্যাজিস্ট্রেট বা সহকারী পরিচালক উভয় পক্ষকে শুনানিতে ডাকবেন। অভিযোগ প্রমাণিত হলে জরিমানার ২৫% টাকা নগদে অভিযোগকারীকে বুঝিয়ে দেওয়া হয়।', NULL, NULL);
            

-- Service: ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা (bd-dss-cancer-kidney-special-grant-50k)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dss-cancer-kidney-special-grant-50k', 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা', 'Government One-time 50000 Taka Grant for Cancer & Kidney Patients Official Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়', 
            'ক্যানসার, কিডনি রোগ, লিভার সিরোসিস, স্ট্রোকে অবশ, জন্মগত হৃদরোগ ও থ্যালাসেমিয়া আক্রান্ত অসচ্ছল রোগীদের চিকিৎসার জন্য সমাজকল্যাণ মন্ত্রণালয় প্রতি বছর এককালীন ৫০,০০০ টাকা করে আর্থিক সহায়তা প্রদান করে। সরকারি হাসপাতালের আশপাশে দালালরা রোগীদের বিভ্রান্ত করে টাকা কাটার চেষ্টা করে, অথচ আবেদন সম্পূর্ণ বিনামূল্যে এবং টাকা সরাসরি রোগীর ব্যাংক অ্যাকাউন্টে চলে আসে।', 'কমিটির অনুমোদন সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস', 
            'https://dss.gov.bd', 'https://dss.gov.bd', 
            'https://dss.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: রোগাক্রান্ত অসহায় মানুষের টাকা মেরে খাওয়া মহাপাপ। কোনো হাসপাতালের কর্মচারী বা সমাজসেবা অফিসের কোনো দালাল অনুদান পাইয়ে দেওয়ার বিনিময়ে ৫,০০০-১০,০০০ টাকা কাটতে চাইলে সাথে সাথে জেলা প্রশাসক বা দুদক হেল্পলাইন ১০৬ এ অভিযোগ দায়ের করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dss-cancer-kidney-special-grant-50k';
DELETE FROM service_documents WHERE service_id = 'bd-dss-cancer-kidney-special-grant-50k';
DELETE FROM service_steps WHERE service_id = 'bd-dss-cancer-kidney-special-grant-50k';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'চিকিৎসা অনুদান আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আবেদনের জন্য কোনো সরকারি ফি বা খরচ নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'উপজেলা সমাজসেবা কার্যালয়ের নির্ধারিত আবেদন ফরম', 1, 0, 'বিনামূল্যে সংগৃহীত মূল ফরম', 'উপজেলা সমাজসেবা কার্যালয় বা dss.gov.bd থেকে ডাউনলোড');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'রেজিস্টার্ড সরকারি বিশেষজ্ঞ চিকিৎসক বা বিভাগীয় প্রধানের প্রত্যায়িত মেডিকেল রিপোর্ট', 1, 0, 'সিলযুক্ত মূল ব্যবস্থাপত্র ও ডায়াগনস্টিক রিপোর্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'সিভিল সার্জন বা সরকারি হাসপাতালের পরিচালকের সুপারিশপত্র', 1, 0, 'সিলযুক্ত সুপারিশ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'রোগীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 'রোগীর নিজের নামে তফসিলি ব্যাংকের একাউন্টের চেকের পাতার ফটোকপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 1, 'চিকিৎসক ও সিভিল সার্জনের প্রত্যয়ন সংগ্রহ', 'সরকারি মেডিকেল কলেজ বা হাসপাতালের বিশেষজ্ঞ ডাক্তারের প্রেসক্রিপশন নিয়ে জেলার সিভিল সার্জন থেকে সিল ও প্রত্যয়ন নিন।', NULL, 'দালাল ছাড়াই সরাসরি সিভিল সার্জন অফিসে ফাইল জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 2, 'উপজেলা বা জেলা সমাজসেবা কার্যালয়ে আবেদন জমা', 'রোগীর স্থায়ী ঠিকানার উপজেলা সমাজসেবা অফিসারের নিকট আবেদন ফরম ও চেকের পাতার কপিসহ জমা দিন।', 'https://dss.gov.bd', 'দালালের কোনো ভূমিকা নেই, কমিটি প্রতি মাসে আবেদন যাচাই করে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-cancer-kidney-special-grant-50k', 3, 'সরাসরি রোগীর ব্যাংক হিসাবে ৫০,০০০ টাকার চেক বা ইএফটি', 'মঞ্জুরিকৃত অনুদানের ৫০,০০০ টাকা সরাসরি বাংলাদেশ ব্যাংকের মাধ্যমে রোগীর ব্যাংক অ্যাকাউন্টে ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT) হয়ে জমা হবে।', NULL, NULL);
            

-- Service: প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা (bd-wewb-deceased-migrant-worker-compensation)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-wewb-deceased-migrant-worker-compensation', 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা', 'Deceased Migrant Worker Body Repatriation 35k Burial Grant & 3 Lakh Financial Aid Guide', 
            'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান', NULL, 'ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়', 
            'বিদেশে কর্মরত অবস্থায় কোনো রেমিট্যান্স যোদ্ধা মৃত্যুবরণ করলে সরকার সরকারি খরচে বিমানযোগে মরদেহ দেশে ফিরিয়ে আনে। বিমানবন্দরে অবতরণের সাথে সাথে দাফন-কাফনের জন্য পরিবারকে তাৎক্ষণিক নগদ ৩৫,০০০ টাকা এবং পরবর্তীতে মৃতের পরিবারকে এককালীন ৩,০০,০০০ (তিন লাখ) টাকা আর্থিক অনুদান প্রদান করা হয়।', 'বিমানবন্দরে নগদ ৩৫,০০০ টাকা তাৎক্ষণিক | ৩ লাখ টাকার অনুদান: ৩০-৪৫ কার্যদিবস', 
            'https://wewb.gov.bd', 'https://wewb.gov.bd', 
            'https://wewb.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: রেমিট্যান্স যোদ্ধার রক্তে ভেজা টাকার উপর কোনো দালালের হক নেই। বিমানবন্দর বা জেলায় কোনো মধ্যস্বত্বভোগী চেক ছাড়িয়ে দেওয়ার নাম করে পারসেন্টেজ চাইলে সোজা প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ অথবা দুদক ১০৬ এ কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-wewb-deceased-migrant-worker-compensation';
DELETE FROM service_documents WHERE service_id = 'bd-wewb-deceased-migrant-worker-compensation';
DELETE FROM service_steps WHERE service_id = 'bd-wewb-deceased-migrant-worker-compensation';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'দাফন অনুদান ও আর্থিক সহায়তা আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকার ও ওয়েজ আর্নার্স কল্যাণ বোর্ডের সম্পূর্ণ ফ্রি মানবিক সেবা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'প্রবাসী কর্মীর পাসপোর্ট কপি ও ভিসা/আকামা কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'বাংলাদেশ দূতাবাস বা সংশ্লিষ্ট দেশের মৃত্যু সনদ (Death Certificate)', 1, 0, 'দূতাবাস সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'বিএমইটি স্মার্ট কার্ড বা ডাটাবেজ রেজিস্ট্রেশন কপি', 0, 0, 'প্রিন্ট কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'মৃত কর্মীর বৈধ ওয়ারিশান সনদপত্র (ইউপি চেয়ারম্যান বা মেয়র কর্তৃক প্রদত্ত)', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 'ওয়ারিশগণের ব্যাংক হিসাবের চেকের পাতার কপি ও এনআইডি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 1, 'বিমানবন্দর প্রবাসী কল্যাণ ডেস্ক থেকে ৩৫,০০০ টাকা নগদ গ্রহণ', 'মরদেহ হযরত শাহজালাল বা অন্য আন্তর্জাতিক বিমানবন্দরে পৌঁছামাত্র প্রবাসী কল্যাণ ডেস্ক থেকে ওয়ারিশের হাতে নগদ ৩৫,০০০ টাকা প্রদান করা হয়।', NULL, 'কোনো ঘুষ বা ফি নেই, তাৎক্ষণিক রশিদ নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 2, 'ওয়েজ আর্নার্স কল্যাণ বোর্ড বরাবর ৩ লাখ টাকা আর্থিক অনুদানের আবেদন', 'জেলা কর্মসংস্থান ও জনশক্তি অফিস (DEMO) অথবা সরাসরি বোর্ডের ওয়েবসাইটে ওয়ারিশান সনদসহ আবেদন জমা দিন।', 'https://wewb.gov.bd', 'দালাল এড়িয়ে সরাসরি ডেমো অফিসে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wewb-deceased-migrant-worker-compensation', 3, '৩,০০,০০০ টাকার সরকারি চেক হস্তান্তর', 'যাচাই-বাছাই শেষে জেলা প্রশাসক বা জনশক্তি অফিসের মাধ্যমে সকল ওয়ারিশের নামে পৃথক অনুপাতে মোট ৩ লাখ টাকার সরকারি চেক প্রদান করা হয়।', NULL, NULL);
            

-- Service: ১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা (bd-nid-under-18-minor-smartcard)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nid-under-18-minor-smartcard', '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা', 'Under-18 Minor Citizen Smart National ID Card Application Official Guide', 
            'জাতীয় পরিচয়পত্র (NID)', NULL, 'নির্বাচন কমিশন সচিবালয় (ইসি)', 
            '১৬ ও ১৭ বছর বয়সী তরুণ-তরুণীদের ব্যাংক হিসাব খোলা, বিদেশে পড়াশোনা, পাসপোর্ট ও ড্রাইভিং লাইসেন্স পাওয়ার সুবিধার্থে নির্বাচন কমিশন ১৮ বছরের আগেই এনআইডি রেজিস্ট্রেশন ও স্মার্ট কার্ড প্রদান করে (তারা ১৮ বছর পূর্ণ হলে স্বয়ংক্রিয়ভাবে ভোটার তালিকায় অন্তর্ভুক্ত হন)। আবেদন সম্পূর্ণ বিনামূল্যে।', 'বায়োমেট্রিক গ্রহণের পর ১৫ থেকে ৩০ কার্যদিবস', 
            'https://nidw.gov.bd', 'https://services.nidw.gov.bd', 
            'https://ecs.portal.gov.bd', 'সতর্কতা: অপ্রাপ্তবয়স্কদের এনআইডি সম্পূর্ণ বিনামূল্যে দেওয়া হয়। দালালরা তারিখ আগিয়ে দেওয়ার কথা বলে টাকা চাইলে নির্বাচন কমিশনের হটলাইন ১০৫ এ অভিযোগ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nid-under-18-minor-smartcard';
DELETE FROM service_documents WHERE service_id = 'bd-nid-under-18-minor-smartcard';
DELETE FROM service_steps WHERE service_id = 'bd-nid-under-18-minor-smartcard';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nid-under-18-minor-smartcard', 'নতুন অপ্রাপ্তবয়স্ক এনআইডি নিবন্ধন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো সরকারি ফি নেই।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-under-18-minor-smartcard', 'আবেদনকারীর ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (BDRIS ভেরিফাইড)', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-under-18-minor-smartcard', 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-under-18-minor-smartcard', 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রত্যয়নপত্র বা জেএসসি/এসএসসি রেজিস্ট্রেশন কার্ড', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nid-under-18-minor-smartcard', 'বিদ্যুৎ বিলের কপি বা হোল্ডিং ট্যাক্স রশিদ (ঠিকানা প্রমাণের জন্য)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-under-18-minor-smartcard', 1, 'অনলাইনে নতুন ভোটার হিসেবে তথ্য এন্ট্রি', 'https://services.nidw.gov.bd পোর্টালে ঢুকে নিজের নাম, পিতামাতার নাম, রক্তের গ্রুপ ও ঠিকানা পূরণ করে ফরম প্রিন্ট করুন।', 'https://services.nidw.gov.bd', 'অনলাইন জন্ম নিবন্ধনের সাথে নামের বানান হুবহু মিল রাখুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-under-18-minor-smartcard', 2, 'উপজেলা/থানা নির্বাচন অফিসে বায়োমেট্রিক প্রদান', 'প্রিন্টকৃত ফরম ও প্রয়োজনীয় নথিপত্রসহ নির্বাচন অফিসে গিয়ে ১০ আঙুলের ছাপ, চোখের আইরিশ স্ক্যান ও ছবি দিন।', NULL, 'কোনো কম্পিউটার দোকানদারকে ফরম জমার জন্য টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nid-under-18-minor-smartcard', 3, 'অনলাইন এনআইডি স্লিপ ও স্মার্ট কার্ড গ্রহণ', 'বায়োমেট্রিক গ্রহণের পর প্রদত্ত স্লিপ নম্বর দিয়ে অনলাইন পোর্টাল থেকে এনআইডির সফট কপি ডাউনলোড করে সঙ্গে সঙ্গেই পাসপোর্ট বা ব্যাংকে ব্যবহার করা যাবে।', NULL, NULL);
            

-- Service: প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা (bd-expatriate-embassy-nid-smartcard)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-expatriate-embassy-nid-smartcard', 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা', 'Expatriate Bangladeshi Embassy NID Smart Card Registration & Renewal Guide', 
            'জাতীয় পরিচয়পত্র (NID)', NULL, 'নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়', 
            'সংযুক্ত আরব আমিরাত, সৌদি আরব, কুয়েত, কাতার, মালয়েশিয়া, ইতালি ও যুক্তরাজ্যে বসবাসরত প্রবাসী বাংলাদেশিরা এখন নিজ নিজ দেশের বাংলাদেশ দূতাবাসে গিয়ে সরাসরি বায়োমেট্রিক দিয়ে স্মার্ট জাতীয় পরিচয়পত্র গ্রহণ করতে পারেন। দেশে না এসেই এনআইডি সম্পন্ন করা সম্ভব।', 'নির্বাচন কমিশনের কেন্দ্রীয় ভেরিফিকেশন সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://nidw.gov.bd', 'https://services.nidw.gov.bd', 
            'https://ecs.portal.gov.bd', 'সতর্কতা: বিদেশের কোনো এজেন্সি বা ট্রাভেল এজেন্টের কাছে পাসপোর্ট বা এনআইডি বানানোর চুক্তি করবেন না। দূতাবাস ছাড়া অন্য কোথাও এনআইডি কার্যক্রম সম্পূর্ণ অবৈধ।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-expatriate-embassy-nid-smartcard';
DELETE FROM service_documents WHERE service_id = 'bd-expatriate-embassy-nid-smartcard';
DELETE FROM service_steps WHERE service_id = 'bd-expatriate-embassy-nid-smartcard';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 'দূতাবাসে নতুন এনআইডি আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো ফি নেওয়া হয় না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 'বৈধ বা মেয়াদোত্তীর্ণ বাংলাদেশি পাসপোর্ট কপি', 1, 0, 'ফটোকপি ও মূল পাসপোর্ট প্রদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 'অনলাইন ১৭ ডিজিটের জন্ম নিবন্ধন সনদ', 1, 0, 'অনলাইন ভেরিফাইড কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 'বিদেশের বৈধ আবাসিক ভিসা / রেসিডেন্স পারমিট / ইকামা / সিভিল আইডি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 'পিতা বা মাতার এনআইডি বা আত্মীয়ের ওয়ারিশান সনদ', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 1, 'প্রবাসী পোর্টালে অনলাইন আবেদন', 'https://services.nidw.gov.bd পোর্টালে গিয়ে ''প্রবাসী আবেদন'' অপশনে ক্লিক করে দেশের ঠিকানা ও পাসপোর্টের তথ্য পূরণ করুন।', 'https://services.nidw.gov.bd', 'বিদেশে যে মিশনে বায়োমেট্রিক দিতে চান সেটি সিলেক্ট করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 2, 'বাংলাদেশ দূতাবাসে অ্যাপয়েন্টমেন্ট ও বায়োমেট্রিক', 'নির্ধারিত দিনে দূতাবাসে উপস্থিত হয়ে আঙুলের ছাপ, আইরিশ ও ছবি দিন। দূতাবাস টিম ডাটা নির্বাচন কমিশনে পাঠাবে।', NULL, 'দালাল মুক্তভাবে সরাসরি দূতাবাসে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-expatriate-embassy-nid-smartcard', 3, 'স্মার্ট কার্ড ডেলিভারি ও অনলাইন এনআইডি ডাউনলোড', 'অনুমোদিত হলে অনলাইন থেকে রঙিন এনআইডি ডাউনলোড করা যাবে এবং নির্দিষ্ট সময়ে দূতাবাস থেকে স্মার্ট কার্ড সংগ্রহ করতে পারবেন।', NULL, NULL);
            

-- Service: জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা (bd-nlasko-free-legal-aid-govt-lawyer)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nlasko-free-legal-aid-govt-lawyer', 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা', 'National Legal Aid Services Organization (16430) Free Govt Lawyer Official Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়', 
            'অর্থের অভাবে কোনো নাগরিক যেন ন্যায়বিচার থেকে বঞ্চিত না হন, সেজন্য সরকার প্রত্যেক জেলা জজ আদালতে সরকারি খরচে আইনজীবী নিয়োগ, কোর্ট ফি প্রদান এবং মামলা পরিচালনার সম্পূর্ণ ব্যয় বহন করে। গরিব কৃষক, দিনমজুর, নির্যাতিত নারী ও অসচ্ছল যে-কেউ টোল-ফ্রি হটলাইন ১৬৪৩০ এ কল করে এই সেবা পেতে পারেন।', 'আবেদন পাওয়ার পর ৩ থেকে ৭ কার্যদিবসের মধ্যে আইনজীবী বরাদ্দ', 
            'https://nlaso.gov.bd', 'https://nlaso.gov.bd', 
            'https://nlaso.portal.gov.bd/site/view/citizen_charter', 'সতর্কতা: আদালতের বারান্দায় দালালরা মানুষকে মিথ্যা আশ্বাস দিয়ে সর্বস্বান্ত করে। আপনার অর্থ না থাকলে সোজা জেলা জজ আদালতের লিগ্যাল এইড অফিসে যান। সরকারি আইনজীবী আপনার জন্য বিনে পয়সায় লড়াই করবেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nlasko-free-legal-aid-govt-lawyer';
DELETE FROM service_documents WHERE service_id = 'bd-nlasko-free-legal-aid-govt-lawyer';
DELETE FROM service_steps WHERE service_id = 'bd-nlasko-free-legal-aid-govt-lawyer';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 'আইনজীবী নিয়োগ ও মামলা পরিচালনা খরচ', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকার নিজ তহবিল থেকে আইনজীবীর ফি ও কোর্ট ফি পরিশোধ করে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 'জেলা লিগ্যাল এইড অফিসের নির্ধারিত আবেদন ফরম', 1, 0, 'বিনামূল্যে সরবরাহকৃত ফরম', 'জেলা জজ আদালত প্রাঙ্গণে লিগ্যাল এইড অফিস থেকে সংগৃহীত');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 'মামলার নথিপত্র (যদি ইতোমধ্যে মামলা হয়ে থাকে যেমন আরজি/অভিযোগপত্র/চার্জশিটের কপি)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 'আবেদনকারীর অসচ্ছলতা প্রত্যয়নপত্র (ইউপি চেয়ারম্যান বা কাউন্সিলর প্রদত্ত)', 0, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 1, 'টোল-ফ্রি হটলাইন ১৬৪৩০ এ কল বা জেলা অফিসে যোগাযোগ', 'যেকোনো মোবাইল থেকে ১৬৪৩০ নম্বরে বিনামূল্যে কল করে আইনি পরামর্শ নিন অথবা সরাসরি জেলা জজ আদালতের লিগ্যাল এইড অফিসারের কাছে যান।', 'https://nlaso.gov.bd', '১৬৪৩০ কল করতে কোনো ব্যালেন্স কাটে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 2, 'আবেদন দাখিল ও বিকল্প বিরোধ নিষ্পত্তি (ADR)', 'লিগ্যাল এইড কর্মকর্তা উভয় পক্ষকে ডেকে সমঝোতা (ADR) করার চেষ্টা করবেন যাতে মামলা ছাড়াই বিরোধ মিটে যায়।', NULL, 'সমঝোতা না হলে জেলা কমিটি সরকারি আইনজীবী নিয়োগ দেবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nlasko-free-legal-aid-govt-lawyer', 3, 'সরকারি খরচে মামলা পরিচালনা', 'নিযুক্ত আইনজীবী আপনার পক্ষে আদালতে মামলা লড়বেন। আপনাকে বা আপনার পরিবারকে উকালতনামা বা কোর্ট ফির জন্য কোনো টাকা দিতে হবে না।', NULL, NULL);
            

-- Service: পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা (bd-family-court-denmohor-child-support)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-family-court-denmohor-child-support', 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা', 'Family Court & Arbitration Council Denmohor & Child Maintenance Official Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'আইন ও বিচার বিভাগ ও স্থানীয় সরকার', 
            'বিবাহ বিচ্ছেদ বা দাম্পত্য কলহের ক্ষেত্রে স্বামীর নিকট থেকে বকেয়া দেনমোহর এবং সন্তানের মাসিক ভরণপোষণ আইনগতভাবে আদায়ের প্রক্রিয়া। পারিবারিক আদালত অধ্যাদেশ ২০২৩ অনুযায়ী নামমাত্র মাত্র ৫০ টাকার কোর্ট ফি দিয়ে সিনিয়র সহকারী জজ (পারিবারিক আদালত)-এ মামলা করা যায়।', 'আইন অনুযায়ী সমন জারির পর ৯০ থেকে ১৮০ কার্যদিবসের মধ্যে নিষ্পত্তি', 
            'https://lawjusticediv.gov.bd', 'https://nlaso.gov.bd', 
            'https://lawjusticediv.portal.gov.bd', 'সতর্কতা: দেনমোহর নারীর ধর্মীয় ও আইনি মৌলিক অধিকার। কোনো দালাল বা মধ্যস্থতাকারী দেনমোহর মাফ করিয়ে দেওয়ার মিথ্যা চাপ প্রয়োগ করতে পারে না। প্রয়োজনে জাতীয় হেল্পলাইন ১০৯ অথবা লিগ্যাল এইড ১৬৪৩০ এ সহায়তা নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-family-court-denmohor-child-support';
DELETE FROM service_documents WHERE service_id = 'bd-family-court-denmohor-child-support';
DELETE FROM service_steps WHERE service_id = 'bd-family-court-denmohor-child-support';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-family-court-denmohor-child-support', 'পারিবারিক আদালত আরজি কোর্ট ফি', 50.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'পারিবারিক আদালতে দেনমোহর বা ভরণপোষণ মামলার কোর্ট ফি ফিক্সড মাত্র ৫০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-family-court-denmohor-child-support', 'মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড নকল', 1, 0, 'কাজি অফিস থেকে সংগৃহীত মূল নকল', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-family-court-denmohor-child-support', 'সন্তানের জন্ম নিবন্ধন সনদ (ভরণপোষণের দাবির ক্ষেত্রে)', 0, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-family-court-denmohor-child-support', 'তালাকের নোটিশ বা বিচ্ছেদের প্রমাণপত্র (যদি বিচ্ছেদ হয়ে থাকে)', 0, 0, 'কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-family-court-denmohor-child-support', 'স্বামীর আর্থিক সামর্থ্য ও কর্মস্থলের বিবরণ', 0, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-family-court-denmohor-child-support', 1, 'ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলরে শালিসির আবেদন', 'প্রথমে সংশ্লিষ্ট ইউপি চেয়ারম্যান বা মেয়রের শালিসি কাউন্সিলে ভরণপোষণ ও দেনমোহর মেটানোর জন্য আবেদন করতে পারেন।', NULL, 'শালিসে না মানলে পারিবারিক আদালতে সরাসরি যাওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-family-court-denmohor-child-support', 2, 'পারিবারিক আদালতে ৫০ টাকার কোর্ট ফি দিয়ে মামলা দায়ের', 'স্ত্রী যে এলাকায় বসবাস করেন সেই এলাকার পারিবারিক আদালতে আরজি দাখিল করুন (লিগ্যাল এইডের ফ্রি আইনজীবী নেওয়া যায়)।', NULL, '৫০ টাকার বেশি কোর্ট ফি লাগে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-family-court-denmohor-child-support', 3, 'আদালতের রায় ও ডিক্রি জারি', 'আদালত দেনমোহর ও সন্তানের মাসিক খরচ নির্ধারণ করে রায় দেবেন। স্বামী টাকা না দিলে দেওয়ানি জেলে প্রেরণ বা সম্পত্তি ক্রোকের আদেশ জারি হবে।', NULL, NULL);
            

-- Service: বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা (bd-electricity-meter-load-extension-relocation)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-electricity-meter-load-extension-relocation', 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা', 'Electricity Meter Load Extension Relocation & Bill Correction Guide', 
            'বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ', NULL, 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি', 
            'বাসাবাড়িতে এসি বা ভারী যন্ত্রপাতি ব্যবহারের জন্য মিটারের অনুমোদিত লোড বৃদ্ধি করা, বাড়ি পুনর্নির্মাণের জন্য মিটার স্থানান্তর এবং অতিরিক্ত ভূতুড়ে বিদ্যুৎ বিল সংশোধনের অফিশিয়াল নিয়মাবলী। গ্রাহকরা সরাসরি অনলাইনে বা অভিযোগ কেন্দ্রে গিয়ে অতিরিক্ত দালাল ফি ছাড়াই সেবা নিতে পারেন।', 'বিল সংশোধন: তাৎক্ষণিক (২৪ ঘণ্টা) | লোড বৃদ্ধি ও স্থানান্তর: ৩ থেকে ৭ কার্যদিবস', 
            'https://powerdivision.gov.bd', 'https://desco.org.bd', 
            'https://reb.gov.bd', 'সতর্কতা: পল্লী বিদ্যুৎ ও বিদ্যুৎ অফিসে দালাল চক্র লোড বাড়িয়ে দেওয়া বা বিল কমিয়ে দেওয়ার নাম করে মোটা টাকা হাতিয়ে নেয়। বিল সংশোধন একটি সম্পূর্ণ ফ্রি সেবা। অতিরিক্ত টাকা চাইলে বিদ্যুৎ মন্ত্রণালয়ের কেন্দ্রীয় কল সেন্টার ১৬৯৯৯ এ তাৎক্ষণিক কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-electricity-meter-load-extension-relocation';
DELETE FROM service_documents WHERE service_id = 'bd-electricity-meter-load-extension-relocation';
DELETE FROM service_steps WHERE service_id = 'bd-electricity-meter-load-extension-relocation';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'বিল সংশোধন আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'ভুল বিল বা অতিরিক্ত বিল সংশোধনের জন্য কোনো ফি লাগে না।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'মিটার লোড বৃদ্ধি জামানত (কিলোওয়াট প্রতি বৃদ্ধি)', 600.0, 1, 'বিদ্যুৎ বিলের সাথে বা ব্যাংকে', 'ব্রেব/ডেসকো নিয়ম অনুযায়ী কিলোওয়াট প্রতি সরকারি নির্ধারিত সিকিউরিটি ডিপোজিট।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'মিটার স্থানান্তর চার্জ', 200.0, 1, 'অফিশিয়াল ব্যাংক চালান', 'একই চত্বরে বা নিকটবর্তী স্থানে মিটার স্থানান্তর।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'সর্বশেষ পরিশোধিত বিদ্যুৎ বিলের কপি', 1, 0, 'রশিদ কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'মিটারের বর্তমান রিডিং এর স্পষ্ট ছবি (বিল সংশোধনের ক্ষেত্রে)', 1, 0, 'মোবাইল ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'মিটার গ্রাহকের জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-electricity-meter-load-extension-relocation', 'বাড়ির মালিকানার প্রমাণ বা হোল্ডিং ট্যাক্স রশিদ (স্থানান্তরের ক্ষেত্রে)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-meter-load-extension-relocation', 1, 'মিটারের ডিসপ্লে রিডিং এর ছবি তোলা', 'কাগজের বিলের সাথে মিটারের ডিসপ্লেতে প্রদর্শিত বর্তমান ইউনিট রিডিং এর ছবি তুলুন। রিডিং বেশি দেখানো থাকলে তাৎক্ষণিক অসঙ্গতি প্রমাণ হবে।', NULL, 'বিল পরিশোধের ডেট পার হওয়ার আগেই অভিযোগ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-meter-load-extension-relocation', 2, 'অভিযোগ কেন্দ্র (Complain Center) বা পোর্টালে আবেদন', 'সংশ্লিষ্ট পল্লী বিদ্যুৎ জোনাল অফিস বা ডেসকো/ডিপিডিসি গ্রাহক সেবা কেন্দ্রে লিখিত দিন অথবা পোর্টালে লোড বৃদ্ধির আবেদন সাবমিট করুন।', NULL, 'লাইনম্যান বা কোনো দালালের সাথে আর্থিক লেনদেন করবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-electricity-meter-load-extension-relocation', 3, 'সংশোধিত বিল ও লোড সমন্বয় অনুমোদন', 'কর্মকর্তারা তাৎক্ষণিক বিল সংশোধন করে কিউআর কোডযুক্ত নতুন বিল ইস্যু করবেন যা ব্যাংকে বা বিকাশে জমা দেওয়া যাবে।', NULL, NULL);
            

-- Service: ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা (bd-wasa-deep-tubewell-permission-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-wasa-deep-tubewell-permission-license', 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা', 'WASA Deep Tube-well Installation Permission & License Renewal Guide', 
            'নাগরিক ইউটিলিটি ও পানি', NULL, 'ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ', 
            'বহুতল ভবন, শিল্প কারখানা বা বাণিজ্যিক প্রতিষ্ঠানে ভূগর্ভস্থ পানি উত্তোলনের জন্য গভীর নলকূপ স্থাপনের পূর্বে ওয়াসার বাধ্যতামূলক এনওসি ও লাইসেন্স গ্রহণ করতে হয়। অবৈধ নলকূপ স্থাপন আইনত দণ্ডনীয় অপরাধ। দালালদের খপ্পরে না পড়ে সরাসরি ঢাকা ওয়াসা ও চট্টগ্রাম ওয়াসার পোর্টালে আবেদন করা যায়।', 'হাইড্রোলজিক্যাল ও ফিজিবিলিটি জরিপ সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://dwasa.org.bd', 'https://dwasa.org.bd', 
            'https://dwasa.portal.gov.bd', 'সতর্কতা: অবৈধ গভীর নলকূপের বিরুদ্ধে ভ্রাম্যমাণ আদালত পরিচালনা করে লাখ টাকা জরিমানা ও জেল দেওয়ার বিধান রয়েছে। কোনো দালাল যদি বলে ওয়াসা অনুমোদন ছাড়াই নলকূপ চালানো যাবে—তা সম্পূর্ণ মিথ্যা। যে-কোনো অনিয়মে ১৬১৬২ ওয়াসালিন্কে অভিযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-wasa-deep-tubewell-permission-license';
DELETE FROM service_documents WHERE service_id = 'bd-wasa-deep-tubewell-permission-license';
DELETE FROM service_steps WHERE service_id = 'bd-wasa-deep-tubewell-permission-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'গভীর নলকূপ অনুমতি আবেদন ফি', 5000.0, 0, 'ওয়াসা অনুমোদিত ব্যাংক পে-অর্ডার / চালান', 'অফেরতযোগ্য আবেদন ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'বার্ষিক গভীর নলকূপ লাইসেন্স নবায়ন ফি', 12000.0, 1, 'ট্রেজারি চালান', 'নলকূপের আকার ও ব্যাস অনুযায়ী বাৎসরিক লাইসেন্স ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'ওয়াসার নির্ধারিত আবেদন ফরম', 1, 0, 'অনলাইন আবেদন প্রিন্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের প্ল্যান', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত ছাড়পত্র (শিল্প প্রতিষ্ঠানের ক্ষেত্রে)', 0, 0, 'কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 1, 'ওয়াসা পোর্টালে অনলাইন আবেদন দাখিল', 'https://dwasa.org.bd পোর্টালে নলকূপের পাইপের ব্যাস ও কাঙ্ক্ষিত গভীরতা উল্লেখ করে প্রয়োজনীয় ডকুমেন্ট আপলোড করুন।', 'https://dwasa.org.bd', 'দালাল ছাড়াই সরাসরি নিজের প্রতিষ্ঠানের নামে আবেদন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 2, 'ওয়াসা প্রকৌশলী দল কর্তৃক ফিজিবিলিটি স্টাডি', 'ওয়াসার কারিগরি টিম সংশ্লিষ্ট এলাকার ভূগর্ভস্থ পানির স্তর পরীক্ষা করবে এবং পার্শ্ববর্তী ওয়াসা সাপ্লাই লাইনের অবস্থা যাচাই করবে।', NULL, 'তদন্তকারী দলকে কোনো ব্যক্তিগত অর্থ দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-wasa-deep-tubewell-permission-license', 3, 'পে-অর্ডার জমা ও অফিশিয়াল অনুমতিপত্র গ্রহণ', 'অনুমোদনপত্র প্রাপ্তির পর নির্ধারিত লাইসেন্স ফি ব্যাংকে জমা দিয়ে কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।', NULL, NULL);
            

-- Service: কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা (bd-dife-factory-license-safety-clearance)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dife-factory-license-safety-clearance', 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা', 'DIFE Factory License & Occupational Safety Clearance Official Guide', 
            'শিল্প ও পরিবেশ সেবা', NULL, 'কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়', 
            'যেকোনো শিল্প কারখানা, গার্মেন্টস, ওয়ার্কশপ বা ম্যানুফ্যাকচারিং প্ল্যান্ট স্থাপনের জন্য বাংলাদেশ শ্রম আইন ২০০৬ অনুযায়ী ডিআইএফই (DIFE) থেকে লে-আউট প্ল্যান অনুমোদন ও ফ্যাক্টরি লাইসেন্স গ্রহণ বাধ্যতামূলক। শ্রমিকের সংখ্যা ও ব্যবহৃত মোটর হর্সপাওয়ারের ভিত্তিতে সরকারি ফি নির্ধারিত হয়।', 'অনলাইন আবেদন ও পরিদর্শনের পর ১৫ থেকে ২১ কার্যদিবস', 
            'https://dife.gov.bd', 'https://lima.dife.gov.bd', 
            'https://dife.portal.gov.bd', 'সতর্কতা: ডিআইএফই লাইসেন্স এখন শতভাগ ডিজিটাল ও স্বচ্ছ। দালালদের খপ্পরে পড়লে অতিরিক্ত টাকা খোয়াবেন। কোনো পরিদর্শক অনৈতিক সুবিধা চাইলে শ্রম মন্ত্রণালয়ের অভিযোগ কেন্দ্র ১৬১৩৪ এ অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dife-factory-license-safety-clearance';
DELETE FROM service_documents WHERE service_id = 'bd-dife-factory-license-safety-clearance';
DELETE FROM service_steps WHERE service_id = 'bd-dife-factory-license-safety-clearance';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dife-factory-license-safety-clearance', 'লে-আউট প্ল্যান অনুমোদন ফি (শ্রমিক সংখ্যা অনুযায়ী)', 1500.0, 1, 'এ-চালান (A-Challan)', 'শ্রমিক সংখ্যা ১০-৫০ জনের জন্য ১,৫০০ টাকা; ৫০ জনের বেশি হলে আনুপাতিক হারে বৃদ্ধি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dife-factory-license-safety-clearance', 'বার্ষিক কারখানা লাইসেন্স ফি', 3000.0, 1, 'এ-চালান', 'কারখানার মোট অশ্বশক্তি ও শ্রমিক অনুযায়ী ৩,০০০ থেকে সর্বোচ্চ ৩০,০০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dife-factory-license-safety-clearance', 'কারখানার লে-আউট প্ল্যান ও মেশিনারিজের অবস্থান নকশা', 1, 0, 'সিভিল ইঞ্জিনিয়ারের ব্লু-প্রিন্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dife-factory-license-safety-clearance', 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dife-factory-license-safety-clearance', 'ফায়ার সার্ভিসের ফায়ার লাইসেন্স সনদ', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dife-factory-license-safety-clearance', 'ভাড়া চুক্তিপত্র অথবা কারখানার নিজস্ব জায়গার দলিল', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dife-factory-license-safety-clearance', 1, 'ডিআইএফই পোর্টালে অনলাইন লাইসেন্স আবেদন', 'https://lima.dife.gov.bd (লিমস সিস্টেম)-এ ঢুকে প্রতিষ্ঠানের তথ্য, শ্রমিকের সংখ্যা ও যন্ত্রপাতি বিবরণ দিন।', 'https://lima.dife.gov.bd', 'সব সরকারি ফি সরাসরি এ-চালানের মাধ্যমে জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dife-factory-license-safety-clearance', 2, 'ডিআইএফই শ্রম পরিদর্শক দল কর্তৃক কারখানার কর্মপরিবেশ পরিদর্শন', 'ইন্সপেক্টর দল অগ্নিনির্বাপণ ব্যবস্থা, প্রাথমিক চিকিৎসা বক্স, বায়ু চলাচল ও জরুরি নির্গমন পথ পরীক্ষা করবেন।', NULL, 'দালালের কোনো জায়গা নেই, কোনো ত্রুটি থাকলে সরাসরি অফিস প্রধানকে জানান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dife-factory-license-safety-clearance', 3, 'ডিজিটাল ফ্যাক্টরি লাইসেন্স ডাউনলোড', 'অনুমোদিত হলে লিমস পোর্টাল থেকে কিউআর কোড সম্বলিত ফ্যাক্টরি লাইসেন্স ডাউনলোড করা যায়।', NULL, NULL);
            

-- Service: সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা (bd-doc-cooperative-society-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-doc-cooperative-society-registration', 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা', 'Department of Cooperatives Society Registration Audit & Bylaws Approval Guide', 
            'ব্যবসা ও বাণিজ্য সেবা', NULL, 'সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়', 
            'কৃষক, সঞ্চয় ও ঋণদানকারী, যুব ও গৃহায়ন সমবায় সমিতি গঠনের জন্য সমবায় অধিদপ্তর থেকে প্রাতিষ্ঠানিক নিবন্ধন গ্রহণ করতে হয়। অনেকে ভুয়া সমবায় বানিয়ে সাধারণ মানুষের সঞ্চয় আত্মসাৎ করে। সঠিক নিয়মে ন্যূনতম ২০ জন সদস্য নিয়ে অনুমোদিত সরকারি বাই-ল দিয়ে জেলা বা উপজেলা সমবায় কর্মকর্তার কার্যালয়ে নামমাত্র সরকারি ফি দিয়ে নিবন্ধন নেওয়া যায়।', 'তদন্ত ও নথি যাচাই সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস', 
            'https://coop.gov.bd', 'https://coop.gov.bd', 
            'https://coop.portal.gov.bd', 'সতর্কতা: সমবায় সমিতির নামে ব্যাংকিং বা উচ্চ সুদের ফাঁদ পাতা আইনত নিষিদ্ধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার নামে লাখ টাকা চাইলে সরাসরি জেলা সমবায় কর্মকর্তা বা দুর্নীতি দমন কমিশনে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-doc-cooperative-society-registration';
DELETE FROM service_documents WHERE service_id = 'bd-doc-cooperative-society-registration';
DELETE FROM service_steps WHERE service_id = 'bd-doc-cooperative-society-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-doc-cooperative-society-registration', 'প্রাথমিক সমবায় সমিতি নিবন্ধন ফি', 300.0, 1, 'ট্রেজারি চালান (কোড: ১-৪৭৩১-০০০০-১৮০১)', 'কৃষি ও সাধারণ সমবায় সমিতির সরকারি ফি মাত্র ৩০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-doc-cooperative-society-registration', 'সঞ্চয় ও ঋণদান সমবায় সমিতি নিবন্ধন ফি', 5000.0, 1, 'ট্রেজারি চালান', 'সঞ্চয় ও ক্ষুদ্রঋণ কার্যক্রম পরিচালনাকারী সমবায়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doc-cooperative-society-registration', 'সমবায় অধিদপ্তরের নির্ধারিত আবেদন ফরম ও চার কপি উপ-আইন (Bylaws)', 1, 0, 'সদস্যদের মূল স্বাক্ষরযুক্ত', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doc-cooperative-society-registration', 'প্রাথমিক সাধারণ সভার কার্যবিবরণী ও প্রস্তাব', 1, 0, 'স্বাক্ষরিত মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doc-cooperative-society-registration', 'সকল সদস্যের জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-doc-cooperative-society-registration', 'সমিতির প্রাথমিক শেয়ার ও সঞ্চয় আমানতের ব্যাংক জমার বিবরণী', 1, 0, 'ব্যাংক স্টেটমেন্ট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doc-cooperative-society-registration', 1, 'উপজেলা সমবায় কর্মকর্তা বরাবর আবেদন', 'উপজেলা বা থানা সমবায় কর্মকর্তার নিকট চার কপি উপ-আইন ও চালানের কপিসহ আবেদন জমা দিন।', 'https://coop.gov.bd', 'দালাল ছাড়া সরাসরি উপজেলা সমবায় অফিসে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doc-cooperative-society-registration', 2, 'সমবায় ইন্সপেক্টর কর্তৃক প্রাথমিক তদন্ত', 'ইন্সপেক্টর সদস্যদের সাথে সরাসরি সাক্ষাৎ করবেন এবং সমিতির উদ্দেশ্য ও প্রাথমিক শেয়ার যাচাই করবেন।', NULL, 'কোনো অনিয়ম বা উৎকোচ লেনদেন আইনত অপরাধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-doc-cooperative-society-registration', 3, 'নিবন্ধন সনদ ও সিলমোহরকৃত উপ-আইন গ্রহণ', 'উপজেলা বা জেলা সমবায় কর্মকর্তা নিবন্ধন সনদ ইস্যু করবেন এবং সমিতির নামে সরকারি অডিট নম্বর বরাদ্দ হবে।', NULL, NULL);
            

-- Service: বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা (bd-sca-seed-fertilizer-dealership-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-sca-seed-fertilizer-dealership-license', 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা', 'Seed Certification Agency & DAE Seed and Fertilizer Dealership License Guide', 
            'কৃষি ও খাদ্য নিরাপত্তা', NULL, 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়', 
            'কৃষি বীজ ও সরকারি ভর্তুকিমূল্যের সার বিক্রয়ের জন্য খুচরা ও পাইকারি সার-বীজ ডিলারশিপ লাইসেন্স গ্রহণ আবশ্যক। দালালরা কৃষকদের বিভ্রান্ত করে লাইসেন্স পাইয়ে দেওয়ার নামে লক্ষ টাকা নেয়, অথচ উপজেলা কৃষি অফিসে নির্ধারিত সরকারি ফি দিয়ে সহজেই প্রকৃত ব্যবসায়ীরা আবেদন করতে পারেন।', 'গুদাম পরিদর্শন ও সার ও বীজ কমিটির সুপারিশ সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস', 
            'https://dae.gov.bd', 'https://dae.gov.bd', 
            'https://dae.portal.gov.bd', 'সতর্কতা: সার ও বীজের কৃত্রিম সংকট সৃষ্টি করা বা বেশি দামে বিক্রি করা বিশেষ ক্ষমতা আইনে দণ্ডনীয় অপরাধ। ডিলারশিপ পেতে কোনো রাজনৈতিক মধ্যস্বত্বভোগী বা দালালকে টাকা দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-sca-seed-fertilizer-dealership-license';
DELETE FROM service_documents WHERE service_id = 'bd-sca-seed-fertilizer-dealership-license';
DELETE FROM service_steps WHERE service_id = 'bd-sca-seed-fertilizer-dealership-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'খুচরা সার ডিলারশিপ লাইসেন্স ফি', 1000.0, 1, 'ট্রেজারি চালান', 'উপজেলা কমিটির অনুমোদন সাপেক্ষে ১,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'বীজ ডিলারশিপ লাইসেন্স ফি (বীজ প্রত্যয়ন এজেন্সি)', 500.0, 1, 'ট্রেজারি চালান (কোড: ১-৪৩৪১-০০০০-১৮০১)', 'বাৎসরিক লাইসেন্স ফি ৫০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'উপজেলা কৃষি অফিস কর্তৃক সরবরাহকৃত নির্ধারিত আবেদন ফরম', 1, 0, 'মূল ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'বীজ ও সার সংরক্ষণের জন্য উপযুক্ত গুদামের ভাড়া চুক্তিপত্র বা মালিকানার প্রমাণ', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 1, 'উপজেলা কৃষি কর্মকর্তা (UAO) বরাবর আবেদন দাখিল', 'দোকান ও গুদামের বিবরণ এবং ট্রেড লাইসেন্সসহ উপজেলা কৃষি কর্মকর্তার নিকট আবেদন জমা দিন।', 'https://dae.gov.bd', 'দালাল ছাড়াই সরাসরি উপজেলা কৃষি অফিসে যোগাযোগ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 2, 'উপজেলা সার ও বীজ মনিটরিং কমিটি কর্তৃক গুদাম পরিদর্শন', 'কৃষি কর্মকর্তা সরেজমিনে গুদামের ধারণক্ষমতা, আর্দ্রতা সুরক্ষা ও পরিমাপক স্কেল পরীক্ষা করবেন।', NULL, 'তদন্তে অবৈধ সুবিধা দেওয়া নিষেধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-sca-seed-fertilizer-dealership-license', 3, 'চালান জমা ও ডিলারশিপ লাইসেন্স গ্রহণ', 'কমিটির সুপারিশের পর ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি ডিলারশিপ লাইসেন্স ও কোড গ্রহণ করুন।', NULL, NULL);
            

-- Service: মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা (bd-iau-madrasha-fazil-kamil-certificate-equivalence)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা', 'Madrasha Fazil Kamil & Qawmi Degree Equivalence Certificate Official Guide', 
            'শিক্ষা ও শিক্ষাবোর্ড সেবা', NULL, 'ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি''আতিল কওমিয়া', 
            'মাদ্রাসার ফাজিল ও কামিল সনদ সাধারণ বিশ্ববিদ্যালয় ডিগ্রির সমমান (স্নাতক পাস ও স্নাতকোত্তর) স্বীকৃতি প্রাপ্ত। কওমি মাদ্রাসার দাওরায়ে হাদিস মাস্টার্স সমমান সরকারিভাবে প্রত্যয়নের অফিশিয়াল নিয়ম। সরকারি চাকরি, বিসিএস বা বিদেশে উচ্চশিক্ষার জন্য সমমান সনদ উত্তোলন করতে হয়।', 'সাধারণ: ৭ কার্যদিবস | জরুরি: ২ কার্যদিবস', 
            'https://iau.edu.bd', 'https://iau.edu.bd', 
            'https://iau.portal.gov.bd', 'সতর্কতা: সনদ সমমানের জন্য বিশ্ববিদ্যালয়ের গেটে দালালদের টাকা দেবেন না। বিশ্ববিদ্যালয়ের ওয়ান স্টপ সার্ভিস থেকে নির্ধারিত সরকারি ফি দিয়ে নিজ হাতে প্রত্যয়নপত্র সংগ্রহ করা যায়।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-iau-madrasha-fazil-kamil-certificate-equivalence';
DELETE FROM service_documents WHERE service_id = 'bd-iau-madrasha-fazil-kamil-certificate-equivalence';
DELETE FROM service_steps WHERE service_id = 'bd-iau-madrasha-fazil-kamil-certificate-equivalence';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'ফাজিল / কামিল সমমান প্রত্যয়ন ফি', 500.0, 1, 'ইসলামী আরবী বিশ্ববিদ্যালয় একাউন্ট পে স্লিপ', 'বিশ্ববিদ্যালয়ের নির্ধারিত ব্যাংক শাখায় ৫00 টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'জরুরি সমমান সনদ ফি', 1000.0, 1, 'ব্যাংক পে স্লিপ', 'জরুরি ভিত্তিতে ২ কার্যদিবসে প্রদানের জন্য ১,০০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'মূল ফাজিল / কামিল / দাওরায়ে হাদিস পরীক্ষার নম্বরপত্র ও সনদপত্র', 1, 0, 'মূল কপি ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'মাদ্রাসা প্রধানের প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 'ব্যাংক পে-অর্ডার বা জমার রশিদ', 1, 0, 'মূল রশিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 1, 'ইসলামী আরবী বিশ্ববিদ্যালয় বা হাইয়াতুল উলয়া পোর্টালে আবেদন', 'পোর্টালে রেজিস্ট্রেশন নম্বর ও পাসের সাল দিয়ে নির্ধারিত ব্যাংক শাখায় ফি জমা দিন।', 'https://iau.edu.bd', 'দালাল ছাড়াই বিশ্ববিদ্যালয়ের ওয়ান-স্টপ কাউন্টারে ফাইল জমা দেওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 2, 'মূল সনদ ও টেবুলেশন শিট যাচাই', 'বিশ্ববিদ্যালয় পরীক্ষা নিয়ন্ত্রক শাখা থেকে রেকর্ড যাচাই সম্পন্ন করবে।', NULL, 'কোনো জাল সনদ জমা দিলে আইনগত ব্যবস্থা নেওয়া হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-iau-madrasha-fazil-kamil-certificate-equivalence', 3, 'সরকারি সমমান প্রত্যয়নপত্র সংগ্রহ', 'নির্ধারিত দিনে ওয়ান-স্টপ সার্ভিস থেকে কিউআর কোড সম্বলিত সমমান প্রত্যয়নপত্র সংগ্রহ করুন।', NULL, NULL);
            

-- Service: সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা (bd-pbi-cid-cyber-crime-facebook-harassment-report)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-pbi-cid-cyber-crime-facebook-harassment-report', 'সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা', 'Cyber Crime Social Media Hacking & Blackmailing Report (CID/Cyber Police) Guide', 
            'আইন ও পুলিশ সেবা', NULL, 'পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই', 
            'ফেসবুক/হোয়াটসঅ্যাপ অ্যাকাউন্ট হ্যাক, ব্যক্তিগত ছবি এডিট করে ব্ল্যাকমেইল, অনলাইন প্রতারণা বা সাইবার বুলিংয়ের শিকার হলে কীভাবে পুলিশের বিশেষায়িত সাইবার ক্রাইম ইউনিটে বিনামূল্যে অভিযোগ করবেন। সাইবার সাপোর্ট ফর উইমেন (Cyber Support for Women) এবং সিআইডি সাইবার পুলিশ সেন্টার ২৪ ঘণ্টা বিনামূল্যে অভিযোগ গ্রহণ করে ও আইনি সুরক্ষা দেয়।', 'জরুরি সাইবার আক্রমণ: তাৎক্ষণিক ট্রেসিং ও ব্লক | তদন্ত: ৭-১৫ কার্যদিবস', 
            'https://police.gov.bd', 'https://cid.police.gov.bd', 
            'https://police.gov.bd', 'সতর্কতা: ফেসবুক বা সোশ্যাল মিডিয়া অ্যাকাউন্ট ফেরত দেওয়ার নামে ফেসবুকে ছড়িয়ে থাকা ভুয়া হ্যাকারদের বিকাশ বা নগদে টাকা দেবেন না। এরা নিজেরাই প্রতারক। সরাসরি বাংলাদেশ পুলিশের সাইবার সেন্টারে ফ্রি আইনি সহায়তা নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-pbi-cid-cyber-crime-facebook-harassment-report';
DELETE FROM service_documents WHERE service_id = 'bd-pbi-cid-cyber-crime-facebook-harassment-report';
DELETE FROM service_steps WHERE service_id = 'bd-pbi-cid-cyber-crime-facebook-harassment-report';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 'সাইবার অপরাধ অভিযোগ ও তদন্ত ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'বাংলাদেশ পুলিশের সম্পূর্ণ ফ্রি আইনি ও তদন্ত সেবা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 'সাইবার অপরাধ সংক্রান্ত স্ক্রিনশট, প্রোফাইল লিংক (URL) ও মেসেজ হিস্ট্রি', 1, 0, 'প্রিন্ট ও ডিজিটাল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 'নিকটস্থ থানায় দায়েরকৃত জিডি বা মামলার অনুলিপি', 0, 0, 'জিডি নম্বর ও কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 'ভুক্তভোগীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 'হ্যাকড হওয়া অ্যাকাউন্টের পূর্ববর্তী তথ্য (ইমেইল/ফোন নম্বর)', 0, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 1, 'ডিজিটাল আলামত সংরক্ষণ ও স্ক্রিনশট রাখা', 'ব্ল্যাকমেইলারের প্রোফাইলের সম্পূর্ণ লিঙ্ক (URL), চ্যাট হিস্ট্রি এবং অডিও/ভিডিওর ব্যাকআপ রাখুন। কোনো আলামত ডিলিট করবেন না।', NULL, 'ব্ল্যাকমেইলারকে টাকা পাঠাবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 2, 'সিআইডি সাইবার বা পুলিশ সাইবার সেন্টারে সরাসরি যোগাযোগ', 'সিআইডি সাইবার পুলিশ হেল্পলাইন 01320010148 অথবা সাইবার সাপোর্ট ফর উইমেন হেল্পলাইন 01320000888 এ ফোন বা ইমেইল (smspc-cid@police.gov.bd) করুন।', 'https://cid.police.gov.bd', 'নারীদের ক্ষেত্রে পরিচয় গোপন রেখে নারী পুলিশ সদস্য দিয়ে তদন্ত করা হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pbi-cid-cyber-crime-facebook-harassment-report', 3, 'অ্যাকাউন্ট রিকভারি ও অপরাধী গ্রেফতার', 'পুলিশ আইপি ও ডিভাইস ট্র্যাক করে কন্টেন্ট রিমুভ ও অপরাধীকে শনাক্ত করে ডিজিটাল নিরাপত্তা/সাইবার সুরক্ষা আইনে ব্যবস্থা গ্রহণ করবে।', NULL, NULL);
            

-- Service: কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা (bd-qazi-nikah-deed-search-nakal-certified-copy)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-qazi-nikah-deed-search-nakal-certified-copy', 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা', 'Qazi Office Marriage & Divorce Register Search and Nikahnama Certified Copy Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়', 
            'বিবাহ বা তালাকের কাবিননামার মূল কপি হারিয়ে গেলে বা আইনি মামলার প্রয়োজনে কাজি অফিস (নিকাহ রেজিস্ট্রি অফিস) থেকে সার্টিফাইড নকল কপি উত্তোলনের নিয়মাবলী। কাজিরা প্রায়ই অসহায় নারীদের কাছে ৫,০০০-১০,০০০ টাকা দাবি করে, অথচ সরকারি নির্ধারিত নকল ফি ও তলবানা ফি মাত্র ২০০ থেকে ৫০০ টাকা।', 'রেজিস্ট্রি বই তল্লাশি সাপেক্ষে ১ থেকে ৩ কার্যদিবস', 
            'https://lawjusticediv.gov.bd', 'https://lawjusticediv.gov.bd', 
            'https://lawjusticediv.portal.gov.bd', 'সতর্কতা: কাজি যদি নকল কপি দিতে অস্বীকার করে বা ৫,০০০-১০,০০০ টাকা দাবি করে, তবে সরাসরি জেলা জজ আদালতের জেলা রেজিস্ট্রার (District Registrar) বরাবর লিখিত অভিযোগ দায়ের করুন। জেলা রেজিস্ট্রার কাজির লাইসেন্স বাতিলের ক্ষমতা রাখেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-qazi-nikah-deed-search-nakal-certified-copy';
DELETE FROM service_documents WHERE service_id = 'bd-qazi-nikah-deed-search-nakal-certified-copy';
DELETE FROM service_steps WHERE service_id = 'bd-qazi-nikah-deed-search-nakal-certified-copy';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'নিকাহ রেজিস্ট্রি বালাম বহি তল্লাশি ফি (প্রতি বছর)', 50.0, 1, 'কাজি অফিস সরকারি রশিদ', 'বিবাহের বছর জানা থাকলে ৫০ টাকা; অজানা থাকলে প্রতি বছরের জন্য ৫০ টাকা তলবানা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'কাবিননামা সার্টিফাইড নকল ফি (প্রতি পৃষ্ঠার হিসাব)', 100.0, 1, 'কাজি অফিস সরকারি রশিদ', 'সরকারি নির্ধারিত সরকারি রশিদে সর্বোচ্চ ১০০-২০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'বর ও কনের পূর্ণ নাম ও পিতা-মাতার নাম', 1, 0, 'লিখিত বিবরণ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'বিবাহ বা তালাকের সম্ভাব্য তারিখ ও সন', 1, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 'যে এলাকায় বিবাহ হয়েছিল সেই কাজী অফিসের অবস্থান', 1, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 1, 'সংশ্লিষ্ট নিকাহ রেজিস্ট্রি (কাজি) অফিসে আবেদন', 'বিবাহ যে এলাকায় হয়েছিল সেই এলাকার কাজি বরাবর আবেদন দিয়ে বালাম বহি তল্লাশির জন্য নির্ধারিত ৫০ টাকা ফি দিন।', NULL, 'অবশ্যই কাজির সরকারি ক্যাশ মেমো বা রশিদ গ্রহণ করবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 2, 'বালাম বহি থেকে মূল রেজিস্ট্রির নকল প্রস্তুত', 'কাজি মূল বিবাহ রেজিস্ট্রি ভলিউম থেকে সরকারি ফরমে হুবহু বিবরণ লিখে স্বাক্ষর ও সিলমোহরযুক্ত করবেন।', NULL, 'কোনো দালাল বা মোহরারকে বাড়তি টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-qazi-nikah-deed-search-nakal-certified-copy', 3, 'সিলমোহরযুক্ত কাবিননামার নকল গ্রহণ', 'কাজি কর্তৃক প্রত্যায়িত মূল সার্টিফাইড কপি বুঝে নিন। এটি আদালতে ও পাসপোর্টে শতভাগ বৈধ হিসেবে গণ্য হবে।', NULL, NULL);
            

-- Service: প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা (bd-pkb-expatriate-rehabilitation-loan)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-pkb-expatriate-rehabilitation-loan', 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা', 'Probashi Kallyan Bank Expatriate Migration & Rehabilitation Loan Guide', 
            'প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান', NULL, 'প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়', 
            'জমি বা ভিটামাটি বিক্রি না করে বিদেশে বৈধ কর্মসংস্থানের জন্য সরকার স্বল্প সুদে (৪% থেকে ৯%) অভিবাসন ঋণ প্রদান করে। এছাড়া বিদেশ থেকে ফিরে আসা প্রবাসীদের দেশে স্বাবলম্বী ব্যবসা করার জন্য সর্বোচ্চ ৫০ লাখ টাকা পর্যন্ত জামানতবিহীন/স্বল্প জামানতে পুনর্বাসন ঋণ দেওয়া হয়। দালালদের মিষ্টি কথায় ফাঁদে না পড়ে সরাসরি ব্যাংকের শাখায় যোগাযোগ করতে হয়।', 'নথিপত্র যাচাই ও মঞ্জুরি সাপেক্ষে ৭ থেকে ১৫ কার্যদিবস', 
            'https://pkb.gov.bd', 'https://pkb.gov.bd', 
            'https://pkb.portal.gov.bd', 'সতর্কতা: কোনো ব্যাংক কর্মকর্তা বা বহিরাগত ব্যক্তি ঋণ মঞ্জুর করিয়ে দেওয়ার নাম করে পারসেন্টেজ বা কাটমানি চাইলে সাথে সাথে শাখা ব্যবস্থাপক অথবা মন্ত্রণালয় হেল্পলাইন ১৬১৩৫ এ অভিযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-pkb-expatriate-rehabilitation-loan';
DELETE FROM service_documents WHERE service_id = 'bd-pkb-expatriate-rehabilitation-loan';
DELETE FROM service_steps WHERE service_id = 'bd-pkb-expatriate-rehabilitation-loan';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'ঋণ আবেদন ফরম ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'প্রবাসী কল্যাণ ব্যাংকের কোনো আবেদন ফি বা ঘুষ নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'সিআইবি (CIB) চার্জ ও প্রসেসিং ফি (সরকার নির্ধারিত)', 300.0, 1, 'ব্যাংক রসিদ', 'বাংলাদেশ ব্যাংকের সিআইবি চার্জ বাবদ মাত্র ৩০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'বৈধ কাজের ভিসা, কর্মসংস্থান চুক্তিপত্র ও বিএমইটি ইমিগ্রেশন ক্লিয়ারেন্স', 1, 0, 'সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'আবেদনকারী ও জামিনদারের জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'ব্যবসায়িক প্রজেক্ট প্রোফাইল (পুনর্বাসন ঋণের ক্ষেত্রে)', 0, 0, 'প্রজেক্ট প্ল্যান', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 'চেয়ারম্যান বা মেয়র কর্তৃক নাগরিকত্ব ও চারিত্রিক সনদপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 1, 'প্রবাসী কল্যাণ ব্যাংকের নিকটস্থ শাখায় সরাসরি যোগাযোগ', 'ভিসা ও পাসপোর্ট নিয়ে সরাসরি ব্যাংকের ক্রেডিট ম্যানেজারের সাথে দেখা করুন এবং আবেদন ফরম পূরণ করুন।', 'https://pkb.gov.bd', 'ব্যাংকের বাইরে থাকা কোনো দালালের সাথে কথা বলবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 2, 'ভিসা ও নথিপত্র ব্যাংক কর্তৃক যাচাই', 'ব্যাংক ভিসা ও নিয়োগকর্তার তথ্য বিএমইটি ডাটাবেজ থেকে অনলাইনে যাচাই করবে।', NULL, 'জাল বা ভুয়া ভিসা দিলে ঋণ মঞ্জুর হবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pkb-expatriate-rehabilitation-loan', 3, 'চেকের মাধ্যমে সরাসরি ঋণ বিতরণ', 'ঋণ অনুমোদিত হলে ৩ লাখ টাকা পর্যন্ত বিনা জামানতে সরাসরি আবেদনকারীর ব্যাংক হিসাবে ঋণ ছাড় করা হয় এবং কিস্তির শিডিউল বুঝিয়ে দেওয়া হয়।', NULL, NULL);
            

-- Service: সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা (bd-bpeb-employee-welfare-grant-group-insurance)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-bpeb-employee-welfare-grant-group-insurance', 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা', 'Govt Employee Welfare Board Group Insurance Medical Grant & Burial Aid Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়', 
            'সরকারি কর্মকর্তা-কর্মচারীদের চাকরি চলাকালীন মৃত্যুতে যৌথবীমার এককালীন অনুদান, অক্ষমতার আর্থিক সহায়তা এবং কর্মকর্তা বা পরিবারের সদস্যদের দুরারোগ্য ব্যাধির চিকিৎসার জন্য প্রতি বছর সর্বোচ্চ ২,০০,০০০ টাকা পর্যন্ত সরকারি অনুদান দেওয়া হয়। সম্পূর্ণ অনলাইন পোর্টালে দালালমুক্তভাবে এই সেবা পাওয়া যায়।', 'অনলাইন আবেদন ও ডিডিও অগ্রায়নের পর ১৫ থেকে ৩০ কার্যদিবস', 
            'https://bkkb.gov.bd', 'https://bkkb.gov.bd', 
            'https://bkkb.portal.gov.bd', 'সতর্কতা: কর্মচারী কল্যাণ বোর্ডের অর্থ আপনার চাকরি জীবনের অর্জিত অধিকার। বোর্ডের কোনো কর্মচারী বা দালাল অনুদান দ্রুত ছাড়ের নামে টাকা দাবি করলে সরাসরি জনপ্রশাসন মন্ত্রণালয়ের হটলাইন ১০৬ এ অভিযোগ দায়ের করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-bpeb-employee-welfare-grant-group-insurance';
DELETE FROM service_documents WHERE service_id = 'bd-bpeb-employee-welfare-grant-group-insurance';
DELETE FROM service_steps WHERE service_id = 'bd-bpeb-employee-welfare-grant-group-insurance';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 'যৌথবীমা ও চিকিৎসা অনুদান আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'কর্মচারী কল্যাণ বোর্ডের সকল সেবা সম্পূর্ণ বিনামূল্যে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 'আবেদনকারীর সার্ভিস বুক ও শেষ বেতন প্রত্যয়নপত্র (LPC)', 1, 0, 'ডিডিও সত্যায়িত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 'রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসা অনুদানের ক্ষেত্রে)', 1, 0, 'মূল ভাউচার ও রিপোর্ট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 'মৃত্যু সনদ ও ওয়ারিশান সনদ (যৌথবীমা দাবির ক্ষেত্রে)', 0, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংকের চেকের পাতা', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 1, 'কল্যাণ বোর্ডের ই-সেবা পোর্টালে অনলাইন আবেদন', 'https://bkkb.gov.bd পোর্টালে জাতীয় পরিচয়পত্র ও পিআইডি (PID) দিয়ে লগইন করে আবেদন ফরম পূরণ করুন।', 'https://bkkb.gov.bd', 'কোনো মধ্যস্বত্বভোগী ছাড়াই নিজে নিজে অনলাইনে আবেদন করা যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 2, 'সংশ্লিষ্ট অফিস প্রধান (DDO) কর্তৃক অনলাইনে অনুমোদন', 'আপনার নিয়ন্ত্রণকারী কর্তৃপক্ষ অনলাইনে আবেদনটি যাচাই করে কর্মচারী কল্যাণ বোর্ডে ফরোয়ার্ড করবেন।', NULL, 'ম্যানুয়াল কোনো কাগজের ফাইল ঘোরানোর প্রয়োজন নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bpeb-employee-welfare-grant-group-insurance', 3, 'সরাসরি ব্যাংক হিসাবে ইএফটি (EFT) মাধ্যমে টাকা জমা', 'বোর্ড কর্তৃক মঞ্জুরিকৃত অনুদান সরাসরি আবেদনকারীর ব্যাংক অ্যাকাউন্টে জমা হবে এবং মোবাইলে এসএমএস পাবেন।', NULL, NULL);
            

-- Service: আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা (bd-court-bail-petition-bond-submission)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-court-bail-petition-bond-submission', 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা', 'Court Bail Petition & Bail Bond Submission Official Procedure Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত', 
            'পুলিশ কাউকে গ্রেপ্তার করলে কিংবা আদালতে আত্মসমর্পণ করার পর জামিন লাভ করা নাগরিকের মৌলিক আইনি অধিকার। আদালতের বারান্দায় দালাল চক্র সাধারণ মানুষকে বলে ''৫০,০০০ বা ১ লাখ টাকা না দিলে জামিন হবে না''। অথচ প্রকৃত সত্য হলো জামিনের জন্য সরকারি জামিন বন্ডের স্ট্যাম্প ফি মাত্র ৫০ থেকে ১০০ টাকা এবং জামিন মঞ্জুর হওয়ার পর আদালতের কোনো কর্মচারীকে এক টাকাও দিতে হয় না।', 'জামিন শুনানি সাপেক্ষে তাৎক্ষণিক (একই কার্যদিবসে আদেশ)', 
            'https://supremecourt.gov.bd', 'https://supremecourt.gov.bd', 
            'https://lawjusticediv.gov.bd', 'সতর্কতা: কোর্ট প্রাঙ্গণে তথাকথিত মুহুরী বা দালালরা বিচারক ও পুলিশের নামে লাখ লাখ টাকা হাতিয়ে নেয়। জামিন কোনো কেনাবেচার জিনিস নয়; এটি আইনের ভিত্তিতে বিচারকের নিজস্ব এখতিয়ার। সরকারি লিগ্যাল এইড হটলাইন ১৬৪৩০ নম্বরে কল করে বিনা পয়সায় আইনি সুরক্ষা নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-court-bail-petition-bond-submission';
DELETE FROM service_documents WHERE service_id = 'bd-court-bail-petition-bond-submission';
DELETE FROM service_steps WHERE service_id = 'bd-court-bail-petition-bond-submission';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-bail-petition-bond-submission', 'জামিন আবেদন কোর্ট ফি স্ট্যাম্প', 20.0, 1, 'কোর্ট ফি স্ট্যাম্প (আবেদন ফরমে সংযুক্ত)', 'ম্যাজিস্ট্রেট বা জজ কোর্টে জামিন আবেদনের কোর্ট ফি মাত্র ২০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-bail-petition-bond-submission', 'জামিন বন্ড স্ট্যাম্প ফি (Bail Bond Stamp)', 50.0, 1, 'নন-জুডিশিয়াল স্ট্যাম্প / কোর্ট স্ট্যাম্প', 'আদালতের আদেশ অনুযায়ী ৫০ থেকে ১০০ টাকার বন্ড স্ট্যাম্প।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-bail-petition-bond-submission', 'উকালতনামা কোর্ট ফি', 30.0, 1, 'উকালতনামা স্ট্যাম্প ও আইনজীবী সমিতি স্ট্যাম্প', 'আইনজীবী নিয়োগের মূল উকালতনামা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-bail-petition-bond-submission', 'থানার এফআইআর (FIR) / এজাহার বা সিআর নালিশি মামলার অনুলিপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-bail-petition-bond-submission', 'আসামির জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-bail-petition-bond-submission', 'জামিনদারদের (Surety) জাতীয় পরিচয়পত্র ও স্থায়ী ঠিকানার প্রত্যয়ন', 1, 0, 'সিলযুক্ত কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-bail-petition-bond-submission', 'আইনজীবী কর্তৃক স্বাক্ষরিত জামিন পিটিশন ও উকালতনামা', 1, 0, 'মূল আবেদন', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-bail-petition-bond-submission', 1, 'এজাহার ও ওকালতনামাসহ জামিন আবেদন প্রস্তুত', 'মামলার ধারা উল্লেখ করে বিজ্ঞ আইনজীবীর মাধ্যমে জামিন আবেদন প্রস্তুত করুন। অসচ্ছল হলে সরকারি লিগ্যাল এইড (১৬৪৩০) থেকে ফ্রি উকিল নিন।', NULL, 'দালাল নয়, সরাসরি বারের সনদপ্রাপ্ত আইনজীবীর সাথে কথা বলুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-bail-petition-bond-submission', 2, 'আদালতে জামিন শুনানি', 'বিজ্ঞ বিচারক মামলার নথি, ধারার গুরুত্ব ও জামিনের যুক্তি পর্যালোচনা করে জামিন মঞ্জুর বা নামঞ্জুর করবেন।', NULL, 'কোনো পেশকার বা কর্মচারীকে টাকা দেওয়ার সুযোগ নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-bail-petition-bond-submission', 3, 'জামিন বন্ড দাখিল ও রিলিজ অর্ডার (Release Order) প্রেরণ', 'জামিন মঞ্জুর হলে নির্ধারিত টাকার বন্ড স্ট্যাম্প ও স্থানীয় জামিনদারের এনআইডিসহ বন্ড জমা দিন। আদালত থেকে সরাসরি কারাগারে রিলিজ আদেশ পাঠানো হবে এবং আসামি মুক্ত হবেন।', NULL, NULL);
            

-- Service: আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা (bd-court-judgment-decree-certified-copy)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-court-judgment-decree-certified-copy', 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা', 'Court Judgment Order & Decree Certified Copy Extraction Official Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা', 
            'দেওয়ানি বা ফৌজদারি মামলার রায়, অন্তর্বর্তী আদেশ, চার্জশিট বা ডিক্রির সার্টিফাইড নকল উচ্চ আদালতে আপিল বা জমি খারিজের জন্য অপরিহার্য। নকলখানার দালালরা দ্রুত দেওয়ার নাম করে সাধারণ মানুষের কাছ থেকে ৫,০০০-১০,০০০ টাকা দাবি করে, অথচ ফোলিও অনুযায়ী সরকারি খরচ মাত্র কয়েকশত টাকা।', 'জরুরি নকল: ৩ থেকে ৫ কার্যদিবস | সাধারণ নকল: ৭ থেকে ১৫ কার্যদিবস', 
            'https://lawjusticediv.gov.bd', 'https://supremecourt.gov.bd', 
            'https://lawjusticediv.portal.gov.bd', 'সতর্কতা: নকলখানা থেকে নকল নিতে কোনো কর্মচারীকে বাড়তি বকশিশ বা দালাল ধরা সম্পূর্ণ বেআইনি। কোনো কর্মকর্তা নকল আটকে রাখলে সরাসরি জেলা জজ আদালতের নাজির বা প্রশাসনিক কর্মকর্তার নিকট লিখিত অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-court-judgment-decree-certified-copy';
DELETE FROM service_documents WHERE service_id = 'bd-court-judgment-decree-certified-copy';
DELETE FROM service_steps WHERE service_id = 'bd-court-judgment-decree-certified-copy';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-judgment-decree-certified-copy', 'নকলখানা তল্লাশি ফি (প্রতি মোকদ্দমা)', 10.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'মামলার রেকর্ড খোঁজার সরকারি ফি ১০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-judgment-decree-certified-copy', 'প্রতি ফোলিও সরকারি কোর্ট ফি', 5.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'প্রতি পৃষ্ঠার অনুলিপিতে সরকার নির্ধারিত ফোলিও ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-court-judgment-decree-certified-copy', 'জরুরি নকল ফি', 20.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'জরুরি ভিত্তিতে নকল উত্তোলনে প্রযোজ্য।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-judgment-decree-certified-copy', 'আদালতের নির্ধারিত নকলের আবেদন ফরম (ফরম নং-সি)', 1, 0, 'কোর্ট ফি স্ট্যাম্পযুক্ত মূল ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-judgment-decree-certified-copy', 'মামলা নম্বর, পক্ষগণের নাম ও আদেশের তারিখ', 1, 0, 'লিখিত বিবরণ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-court-judgment-decree-certified-copy', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-judgment-decree-certified-copy', 1, 'নকলখানা কাউন্টারে আবেদন দাখিল', 'জেলা জজ কোর্টের নকলখানায় গিয়ে নির্ধারিত ফরমে মামলা নম্বর ও আদেশের তারিখ লিখে কোর্ট ফি লাগিয়ে জমা দিন।', NULL, 'দালাল এড়িয়ে সরাসরি নকলখানা রিসিভিং কাউন্টারে স্লিপ জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-judgment-decree-certified-copy', 2, 'ফোলিও হিসাব ও স্ট্যাম্প সংযোজন', 'নকলখানা নোটিশ বোর্ডে কত ফোলিও স্ট্যাম্প লাগবে তার তালিকা টানিয়ে দেবে। হিসাব অনুযায়ী ফোলিও জমা দিয়ে রসিদ নিন।', NULL, 'রসিদে উল্লিখিত তারিখেই নকল পাওয়ার কথা।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-court-judgment-decree-certified-copy', 3, 'সিলমোহরকৃত সার্টিফাইড নকল গ্রহণ', 'তুলনাকারী ও প্রধান নকলনবীশের সিলমোহর এবং স্বাক্ষরযুক্ত আসল সার্টিফাইড কপি বুঝে নিন।', NULL, NULL);
            

-- Service: থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা (bd-cr-case-magistrate-court-filing)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-cr-case-magistrate-court-filing', 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা', 'Magistrate Court Direct CR Complaint Case Filing Official Guide', 
            'আইন ও পুলিশ সেবা', NULL, 'চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত', 
            'কোনো অপরাধ সংঘটিত হওয়ার পর থানা যদি প্রভাবশালীদের চাপে মামলা (FIR) নিতে অস্বীকার করে, তবে যে-কোনো নাগরিক সরাসরি জুডিশিয়াল বা মেট্রোপলিটন ম্যাজিস্ট্রেট আদালতে নালিশি মামলা (Complaint Register - CR Case) দায়ের করতে পারেন। ম্যাজিস্ট্রেট নিজে জবানবন্দি গ্রহণ করে থানাকে মামলা রেকর্ডের নির্দেশ দেন বা পিবিআই/সিআইডিকে তদন্তের নির্দেশ দেন।', 'আবেদন করার একই দিনে ম্যাজিস্ট্রেটের নিকট জবানবন্দি গ্রহণ', 
            'https://lawjusticediv.gov.bd', 'https://nlaso.gov.bd', 
            'https://lawjusticediv.portal.gov.bd', 'সতর্কতা: থানা মামলা না নিলেও আপনার ন্যায়বিচার পাওয়ার পথ বন্ধ হয় না। কোনো মধ্যস্থতাকারীকে টাকা না দিয়ে সোজা আদালতে গিয়ে ২০০ টাকার কোর্ট ফি দিয়ে সিআর মামলা দায়ের করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-cr-case-magistrate-court-filing';
DELETE FROM service_documents WHERE service_id = 'bd-cr-case-magistrate-court-filing';
DELETE FROM service_steps WHERE service_id = 'bd-cr-case-magistrate-court-filing';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-cr-case-magistrate-court-filing', 'সিআর মামলা নালিশি আরজি কোর্ট ফি', 200.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'ম্যাজিস্ট্রেট আদালতে নালিশি মামলার নির্ধারিত কোর্ট ফি মাত্র ২০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-cr-case-magistrate-court-filing', 'লিখিত নালিশি দরখাস্ত (আরজি) - যাতে ঘটনার তারিখ, সময় ও সাক্ষীদের তালিকা থাকবে', 1, 0, 'কোর্ট ফি যুক্ত মূল আরজি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-cr-case-magistrate-court-filing', 'বাদী ও সাক্ষীদের জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-cr-case-magistrate-court-filing', 'অপরাধের প্রমাণপত্র (মেডিকেল সার্টিফিকেট, অডিও, ভিডিও, ছবি, দলিলের কপি ইত্যাদি)', 0, 0, 'সংযুক্ত প্রমাণ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-cr-case-magistrate-court-filing', 'থানায় মামলা করতে যাওয়ার বিবরণ বা থানায় সাধারণ ডায়েরির (GD) অনুলিপি', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-cr-case-magistrate-court-filing', 1, 'বিজ্ঞ আইনজীবীর মাধ্যমে বা লিগ্যাল এইড দিয়ে আরজি প্রস্তুত', 'অভিযোগের বিস্তারিত উল্লেখ করে জুডিশিয়াল ম্যাজিস্ট্রেট আদালত বরাবর আরজি ড্রাফট করুন (অসচ্ছল হলে লিগ্যাল এইড ১৬৪৩০ থেকে ফ্রি আইনজীবী নিন)।', NULL, 'ঘটনার তারিখ ও অপরাধের স্থান নির্ভুল থাকতে হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-cr-case-magistrate-court-filing', 2, 'ম্যাজিস্ট্রেটের খাস কামরা বা এজলাসে জবানবন্দি প্রদান (২০০ ধারা)', 'ম্যাজিস্ট্রেট বাদীর জবানবন্দি নিজে লিখে নেবেন এবং বাদীর স্বাক্ষর গ্রহণ করবেন।', NULL, 'সত্য ঘটনা নির্ভয়ে বিচারকের সামনে বলুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-cr-case-magistrate-court-filing', 3, 'আদালতের আদেশ (তদন্ত বা সমন জারি)', 'ম্যাজিস্ট্রেট সন্তুষ্ট হলে আসামির বিরুদ্ধে সমন/গ্রেপ্তারি পরোয়ানা জারি করবেন কিংবা থানাকে এজাহার হিসেবে গণ্য করতে বা পিবিআইকে তদন্তের নির্দেশ দেবেন।', NULL, NULL);
            

-- Service: জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা (bd-section-144-145-land-dispute-prevention)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-section-144-145-land-dispute-prevention', 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা', 'Prevention of Land Dispossession Section 144 & 145 CrPC Official Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন', 
            'নিজের বৈধ জমিতে কেউ অবৈধভাবে জোরপূর্বক দখল নেওয়ার চেষ্টা করলে কিংবা শান্তিভঙ্গ ও রক্তপাতের আশঙ্কা দেখা দিলে অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালতে ফৌজদারি কার্যবিধির ১৪৪ ও ১৪৫ ধারায় আবেদন করা যায়। আদালত তাৎক্ষণিক পুলিশকে শান্তি শৃঙ্খলা বজায় রাখার এবং জমিতে উভয় পক্ষের স্থিতাবস্থা (Status Quo) বজায় রাখার আদেশ দেন।', 'জরুরি অন্তর্বর্তী আদেশ: তাৎক্ষণিক (২৪ থেকে ৪৮ ঘণ্টা) | চূড়ান্ত নিষ্পত্তি: ৬০ কার্যদিবস', 
            'https://minland.gov.bd', 'https://land.gov.bd', 
            'https://mopa.gov.bd', 'সতর্কতা: জমিতে দালাল বা ভূমিদস্যুরা পেশিশক্তি দেখালে আইন নিজের হাতে তুলে নেবেন না। ১৪৪/১৪৫ ধারার আইনি আবেদন করে পুলিশি প্রোটেকশন নিন। জরুরি বিপদে পুলিশ কন্ট্রোল রুম ৯৯৯-এ তাৎক্ষণিক কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-section-144-145-land-dispute-prevention';
DELETE FROM service_documents WHERE service_id = 'bd-section-144-145-land-dispute-prevention';
DELETE FROM service_steps WHERE service_id = 'bd-section-144-145-land-dispute-prevention';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-section-144-145-land-dispute-prevention', '১৪৪/১৪৫ ধারা আবেদন কোর্ট ফি', 50.0, 1, 'কোর্ট ফি স্ট্যাম্প', 'এডিসি/এডিএম আদালতে আবেদনের কোর্ট ফি মাত্র ৫০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-section-144-145-land-dispute-prevention', 'আবেদনকারীর স্বত্ব ও দখলের প্রমাণপত্র (মূল দলিল ও নামজারি খতিয়ান)', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-section-144-145-land-dispute-prevention', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের রশিদ', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-section-144-145-land-dispute-prevention', 'বিপক্ষ কর্তৃক জমি দখলের হুমকি সংক্রান্ত জিডি (GD) কপি (যদি থাকে)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-section-144-145-land-dispute-prevention', 'বিরোধীয় জমির তফসিল ও চৌহদ্দি সম্বলিত আবেদনপত্র', 1, 0, 'কোর্ট ফি যুক্ত আবেদন', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-section-144-145-land-dispute-prevention', 1, 'এডিএম আদালতে ৫০ টাকার কোর্ট ফি দিয়ে আবেদন দাখিল', 'জেলা প্রশাসকের কার্যালয়ে অতিরিক্ত জেলা ম্যাজিস্ট্রেট কোর্টে বিরোধীয় জমির বিবরণ দিয়ে পিটিশন দাখিল করুন।', NULL, 'দালাল ছাড়াই সরাসরি ডিসি অফিসের এডিএম কোর্ট কাউন্টারে জমা দেওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-section-144-145-land-dispute-prevention', 2, 'থানা পুলিশ ও এসিল্যান্ডের নিকট প্রতিবেদন তলব', 'আদালত সংশ্লিষ্ট থানার ওসিকে শান্তি বজায় রাখতে নোটিশ জারি করার নির্দেশ দেবেন এবং এসিল্যান্ডকে জমির বাস্তব দখল যাচাইয়ের আদেশ দেবেন।', NULL, 'পুলিশ কোনো পক্ষকে জমিতে জোর করে তুলতে পারবে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-section-144-145-land-dispute-prevention', 3, 'উভয় পক্ষের শুনানির পর চূড়ান্ত আদেশ', 'পুলিশ ও এসিল্যান্ডের রিপোর্টের ভিত্তিতে আদালত রায় দেবেন এবং প্রকৃত দখলকারীকে দেওয়ানি আদালতের চূড়ান্ত রায় না হওয়া পর্যন্ত জমিতে শান্তিতে থাকার সুরক্ষা দেবেন।', NULL, NULL);
            

-- Service: কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা (bd-prison-visit-prisoner-vakalatnama)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-prison-visit-prisoner-vakalatnama', 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা', 'Prisoner Visitation & Vakalatnama Signing Official Procedure Guide', 
            'আইন ও বিচারিক সেবা', NULL, 'কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়', 
            'কারাগারে আটক কোনো হাজতি বা কয়েদি আত্মীয়ের সাথে প্রতি ১৫ দিনে একবার স্বজনদের সাক্ষাৎ করা এবং আইনজীবী নিয়োগের জন্য ওকালতনামা স্বাক্ষর করানো বন্দীর আইনগত অধিকার। জেল গেটের সামনে সংঘবদ্ধ দালালরা ১,০০০ থেকে ৫,০০০ টাকা দাবি করে, অথচ সরকারি নিয়মে সাক্ষাৎ এবং ওকালতনামায় টিপসই নেওয়ার জন্য কোনো ফি দিতে হয় না (সম্পূর্ণ বিনামূল্যে)।', 'আবেদন জমা দেওয়ার দিনেই সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সম্পন্ন', 
            'https://prison.gov.bd', 'https://prison.gov.bd', 
            'https://prison.portal.gov.bd', 'সতর্কতা: জেল গেটে কোনো কারারক্ষী বা দালাল দেখা করানোর নামে বকশিশ বা টাকা চাইলে সরাসরি জেল সুপার বা জেলার-এর অফিসে জানান কিংবা দুর্নীতি দমন কমিশন (১০৬) এ ফোন দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-prison-visit-prisoner-vakalatnama';
DELETE FROM service_documents WHERE service_id = 'bd-prison-visit-prisoner-vakalatnama';
DELETE FROM service_steps WHERE service_id = 'bd-prison-visit-prisoner-vakalatnama';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 'কারাগারে সাক্ষাৎ আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'কারাগারে বন্দীর সাথে সাক্ষাতের কোনো সরকারি ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 'ওকালতনামায় টিপসই বা স্বাক্ষর সত্যায়ন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'জেল সুপার বা জেলার কর্তৃক ওকালতনামা স্বাক্ষরে কোনো অর্থ নেওয়া সম্পূর্ণ অবৈধ।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 'সাক্ষাৎপ্রার্থী স্বজনের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন', 1, 0, 'মূল কপি ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 'বন্দীর নাম, পিতার নাম, মামলার নম্বর ও হাজতি/কয়েদি নম্বর', 1, 0, 'লিখিত তথ্য', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 'আইনজীবী সমিতি কর্তৃক সরবরাহকৃত খালি উকালতনামা (ওকালতনামার ক্ষেত্রে)', 0, 0, 'স্ট্যাম্পযুক্ত উকালতনামা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 1, 'জেল গেটের নির্ধারিত কাউন্টারে সাক্ষাতের আবেদন স্লিপ জমা', 'সকাল ৯টা থেকে দুপুর ২টার মধ্যে কারাগারের মূল কাউন্টারে গিয়ে বন্দীর নাম ও সম্পর্ক লিখে স্লিপ জমা দিয়ে টোকেন গ্রহণ করুন।', NULL, 'গেট প্রাঙ্গণে ঘুরে বেড়ানো কোনো দালাল বা চা দোকানিকে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 2, 'আইনজীবীর সহকারী বা স্বজন কর্তৃক ওকালতনামা জমা', 'ওকালতনামায় স্বাক্ষর করাতে চাইলে নির্ধারিত কাউন্টারে উকালতনামা জমা দিন। ডেপুটি জেলার ভেতরে গিয়ে বন্দীর স্বাক্ষর নিয়ে ফেরত দেবেন।', NULL, 'স্বাক্ষরের জন্য কাউকে নগদ টাকা দেওয়া জেল কোড অনুযায়ী শাস্তিযোগ্য অপরাধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-prison-visit-prisoner-vakalatnama', 3, 'ইন্টারকম বা সাক্ষাৎ কক্ষে কথা বলা', 'নিরাপত্তা তল্লাশি শেষে বন্দীর সাথে দেখা করুন। অনুমোদিত শুকনো খাবার ছাড়া কোনো নগদ টাকা, মোবাইল বা ইলেকট্রনিক্স ভেতরে নেওয়া সম্পূর্ণ নিষিদ্ধ।', NULL, NULL);
            

-- Service: গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা (bd-village-court-union-parishad-dispute)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-village-court-union-parishad-dispute', 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা', 'Village Court Union Parishad 10/20 Taka Justice Dispute Resolution Guide', 
            'স্থানীয় সরকার ও বিচারিক সেবা', NULL, 'স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ', 
            'আদালতে উকিলের পেছনে বছরের পর বছর লাখ লাখ টাকা খরচ না করে সাধারণ মানুষ তাদের বাড়ির কাছে ইউনিয়ন পরিষদে ''গ্রাম আদালত'' (Village Court)-এর মাধ্যমে মাত্র ১০ টাকা বা ২০ টাকা ফি দিয়ে পারিবারিক, জমিজমা ও ছোটখাটো ফৌজদারি বিরোধের সর্বোচ্চ ৭৫,০০০ থেকে ৩,০০,০০০ টাকা পর্যন্ত আইনি প্রতিকার পেতে পারেন। গ্রাম আদালতের রায় সরকারি ডিক্রির সমান কার্যকর।', 'আবেদন থেকে বিচার নিষ্পত্তি সর্বোচ্চ ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://lgd.gov.bd', 'https://villagecourts.gov.bd', 
            'https://lgd.portal.gov.bd', 'সতর্কতা: গ্রাম আদালত সাধারণ মানুষের কাছে বিচার পৌঁছে দেওয়ার জন্য সরকারের এক যুগান্তকারী ব্যবস্থা। ইউপি চেয়ারম্যান বা সচিব ২০ টাকার বেশি এক পয়সাও ফি দাবি করতে পারেন না। অতিরিক্ত ফি চাইলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) কার্যালয়ে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-village-court-union-parishad-dispute';
DELETE FROM service_documents WHERE service_id = 'bd-village-court-union-parishad-dispute';
DELETE FROM service_steps WHERE service_id = 'bd-village-court-union-parishad-dispute';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-village-court-union-parishad-dispute', 'গ্রাম আদালতে ফৌজদারি মামলা দায়ের ফি', 10.0, 1, 'ইউপি গ্রাম আদালত সরকারি রশিদ', 'মারামারি, গালিগালাজ বা সাধারণ আঘাতের অভিযোগের ফি মাত্র ১০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-village-court-union-parishad-dispute', 'গ্রাম আদালতে দেওয়ানি মামলা দায়ের ফি', 20.0, 1, 'ইউপি গ্রাম আদালত সরকারি রশিদ', 'জমিজমার সীমানা, বকেয়া পাওনা টাকা বা মালামাল উদ্ধারের ফি মাত্র ২০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-village-court-union-parishad-dispute', 'গ্রাম আদালতে ইউনিয়ন পরিষদ চেয়ারম্যান বরাবর লিখিত আবেদনপত্র', 1, 0, 'সাদা কাগজে লিখিত বা নির্ধারিত ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-village-court-union-parishad-dispute', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-village-court-union-parishad-dispute', 'বিরোধ সংক্রান্ত প্রমাণপত্র (জমির দলিল/রশিদ/চিকিৎসার প্রেসক্রিপশন)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-village-court-union-parishad-dispute', 1, '১০ বা ২০ টাকার ফি দিয়ে ইউপি সচিবের কাছে আবেদন জমা', 'ইউনিয়ন পরিষদে গিয়ে ১০ টাকা (ফৌজদারি) বা ২০ টাকা (দেওয়ানি) ফি দিয়ে মামলা দায়ের করে রসিদ নিন।', NULL, 'কোনো উকিল বা দালাল লাগে না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-village-court-union-parishad-dispute', 2, 'গ্রাম আদালত গঠন ও সদস্য মনোনয়ন', 'ইউপি চেয়ারম্যানের নেতৃত্বে উভয় পক্ষ থেকে ২ জন করে মোট ৪ জন সদস্য (একজন মেম্বার ও একজন গণ্যমান্য ব্যক্তি) নিয়ে ৫ সদস্যের গ্রাম আদালত গঠিত হবে।', NULL, 'উভয় পক্ষ নিজের পছন্দের প্রতিনিধি দিতে পারেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-village-court-union-parishad-dispute', 3, 'শুনানি ও আনুষ্ঠানিক রায় ঘোষণা', 'উন্মুক্ত আদালতে সাক্ষ্যগ্রহণ শেষে গ্রাম আদালত রায় দেবে এবং ক্ষতিপূরণের টাকা আদায় করে বাদীকে বুঝিয়ে দেওয়া হবে। না মানলে তা উচ্চ আদালতে ডিক্রি জারির সমান কার্যকর।', NULL, NULL);
            

-- Service: বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড (bd-customs-passenger-baggage-rules)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-customs-passenger-baggage-rules', 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড', 'Airport Baggage Rules Gold Mobile & Luggage Duty Free Allowance Guide', 
            'অর্থ ও শুল্ক সেবা', NULL, 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)', 
            'বিদেশ থেকে আগত প্রবাসী ও যাত্রীদের সাথে আনা স্বর্ণালংকার, মোবাইল ও ইলেকট্রনিক্স নিয়ে বিমানবন্দরে প্রায়ই কাস্টমস ও দালালের অযথা হয়রানির শিকার হতে হয়। ব্যাগেজ রুলস অনুযায়ী একজন যাত্রী ১১৭ গ্রাম (১০ ভরি) পর্যন্ত স্বর্ণালংকার সম্পূর্ণ শুল্কমুক্তভাবে আনতে পারেন এবং সর্বোচ্চ ২৩৪ গ্রাম (২০ ভরি) স্বর্ণবার সরকার নির্ধারিত শুল্ক দিয়ে বৈধভাবে আনতে পারেন। এছাড়া ২টি সচল মোবাইল শুল্কমুক্ত।', 'বিমানবন্দর কাস্টমস গ্রিন চ্যানেলে তাৎক্ষণিক ক্লিয়ারেন্স', 
            'https://nbr.gov.bd', 'https://customs.gov.bd', 
            'https://customs.gov.bd', 'সতর্কতা: বিমানবন্দরে কোনো ট্রলি বয়, দালাল বা অসাধু কর্মকর্তা লাগেজ আটকে দেওয়ার ভয় দেখিয়ে টাকা চাইলে সোজা এয়ারপোর্ট আর্মড পুলিশ ব্যাটালিয়ন (APBn) বা বিমানবন্দর ম্যাজিস্ট্রেট হেল্পডেস্কে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-customs-passenger-baggage-rules';
DELETE FROM service_documents WHERE service_id = 'bd-customs-passenger-baggage-rules';
DELETE FROM service_steps WHERE service_id = 'bd-customs-passenger-baggage-rules';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-customs-passenger-baggage-rules', 'স্বর্ণালংকার (সর্বোচ্চ ১১৭ গ্রাম বা ১০ ভরি পর্যন্ত)', 0.0, 1, 'সম্পূর্ণ শুল্কমুক্ত (০ টাকা)', 'ব্যক্তিগত ব্যবহারের স্বর্ণালংকারে কোনো ট্যাক্স নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-customs-passenger-baggage-rules', 'স্বর্ণের বার শুল্ক (প্রতি ১১.৬৬৪ গ্রাম বা ১ ভরি প্রতি)', 4000.0, 1, 'এয়ারপোর্ট কাস্টমস ক্যাশ কাউন্টার রশিদ', 'সর্বোচ্চ ২০ ভরি পর্যন্ত আনা যায়, প্রতি ভরিতে ৪,০০০ টাকা শুল্ক।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-customs-passenger-baggage-rules', 'শুল্কমুক্ত মোবাইল ফোন', 0.0, 1, 'সম্পূর্ণ শুল্কমুক্ত (০ টাকা)', 'ব্যক্তিগত ব্যবহারের সর্বোচ্চ ২টি মোবাইল সম্পূর্ণ শুল্কমুক্ত।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-customs-passenger-baggage-rules', 'যাত্রীর মূল পাসপোর্ট ও আগমনী বোর্ডিং পাস', 1, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-customs-passenger-baggage-rules', 'স্বর্ণ বার থাকলে কাস্টমস ডিক্লারেশন ফরম পূরণ', 0, 0, 'ফ্লাইটে বা এয়ারপোর্টে সরবরাহকৃত ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-customs-passenger-baggage-rules', 'বিদেশ থেকে পণ্য ক্রয়ের মানি রিসিট (যদি থাকে)', 0, 0, 'রশিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-customs-passenger-baggage-rules', 1, 'শুল্কমুক্ত সীমার মধ্যে থাকলে গ্রিন চ্যানেল (Green Channel) ব্যবহার', 'আপনার সাথে যদি শুল্কযোগ্য পণ্য না থাকে তবে কোনো কাস্টমস অফিসারকে টাকা না দিয়ে সরাসরি গ্রিন চ্যানেল দিয়ে বের হয়ে যান।', NULL, 'দালাল বা কোনো ব্যক্তির কথায় ভয় পাবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-customs-passenger-baggage-rules', 2, 'স্বর্ণ বার বা শুল্কযোগ্য পণ্য থাকলে রেড চ্যানেলে ডিক্লারেশন', 'স্বর্ণের বার থাকলে রেড চ্যানেলে গিয়ে কাস্টমস অফিসারের কাছে ডিক্লেয়ার করুন এবং সরকারি রসিদে প্রতি ভরিতে ৪,০০০ টাকা শুল্ক পরিশোধ করুন।', NULL, 'অবশ্যই কাস্টমসের সিলযুক্ত অফিশিয়াল ব্যাংক রসিদ নেবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-customs-passenger-baggage-rules', 3, 'কাস্টমস ক্লিয়ারেন্স ও লাগেজ বুঝে নেওয়া', 'রসিদ পাওয়ার পর আপনার ব্যাগেজ নিয়ে বিমানবন্দরে কোনো উৎকোচ ছাড়াই নিরাপদে বের হয়ে আসুন।', NULL, NULL);
            

-- Service: সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা (bd-ehajj-pilgrim-registration-fraud-prevention)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-ehajj-pilgrim-registration-fraud-prevention', 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা', 'Government & Private Hajj Pilgrim Registration & Fraud Prevention Guide', 
            'ধর্মীয় বিষয় ও হজ সেবা', NULL, 'ধর্ম বিষয়ক মন্ত্রণালয়', 
            'পবিত্র হজ পালনে ইচ্ছুক ধর্মপ্রাণ মুসলমানদের ভুয়া ট্রাভেল এজেন্সির প্রতারণা থেকে বাঁচাতে সরকার ''e-Hajj'' অনলাইন পোর্টাল চালু করেছে। সরকারি ও অনুমোদিত বেসরকারি উভয় প্যাকেজের প্রাক-নিবন্ধন ও চূড়ান্ত নিবন্ধন সরাসরি ব্যাংকের মাধ্যমে ধর্ম মন্ত্রণালয়ের কেন্দ্রীয় সার্ভারে জমা হয়। কোনো মধ্যস্বত্বভোগী বা এজেন্সিকে অতিরিক্ত অর্থ দেওয়া নিষেধ।', 'প্রাক-নিবন্ধন তাৎক্ষণিক | কোটা অনুযায়ী বছরভিত্তিক চূড়ান্ত অনুমোদন', 
            'https://mora.gov.bd', 'https://hajj.gov.bd', 
            'https://mora.portal.gov.bd', 'সতর্কতা: ভুয়া এজেন্সির প্রলোভনে পড়ে টিকিট না পাওয়া বা মক্কায় গিয়ে রাস্তায় রাত কাটানোর ঘটনা রোধে শুধুমাত্র সরকার অনুমোদিত লাইসেন্সধারী এজেন্সির সাথে চুক্তি করুন। কোনো প্রতারণা হলে হজ কল সেন্টার ১৬১৩৬ নম্বরে অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-ehajj-pilgrim-registration-fraud-prevention';
DELETE FROM service_documents WHERE service_id = 'bd-ehajj-pilgrim-registration-fraud-prevention';
DELETE FROM service_steps WHERE service_id = 'bd-ehajj-pilgrim-registration-fraud-prevention';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'হজ প্রাক-নিবন্ধন (Pre-registration) সরকারি ফি', 30725.0, 1, 'ব্যাংক চালান / পে-অর্ডার', 'প্রাক-নিবন্ধন ফি সরকার নির্ধারিত এবং ব্যাংকের মাধ্যমে জমা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'হজ প্যাকেজ চূড়ান্ত সরকারি ফি (বছর অনুযায়ী প্যাকেজ ঘোষিত)', 450000.0, 1, 'ব্যাংক ডিপোজিট', 'মন্ত্রণালয় ঘোষিত অফিশিয়াল প্যাকেজ রেট।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'আবেদনকারীর মেশিন রিডেবল পাসপোর্ট বা ই-পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদ থাকতে হবে)', 1, 0, 'মূল কপি ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'পাসপোর্ট সাইজ রঙিন ছবি (সাদা ব্যাকগ্রাউন্ড)', 1, 0, '৪ কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 'স্বাস্থ্য পরীক্ষার সনদ ও টিকাদান কার্ড (মেনিনজাইটিস ও ইনফ্লুয়েঞ্জা)', 1, 0, 'সরকারি মেডিকেল ক্যাম্পের মূল কার্ড', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 1, 'ই-হজ পোর্টালে বা অনুমোদিত ব্যাংকে প্রাক-নিবন্ধন', 'https://hajj.gov.bd পোর্টালে এনআইডি ও পাসপোর্ট দিয়ে প্রাক-নিবন্ধন সম্পন্ন করে ইউনিক সিরিয়াল নম্বর নিন।', 'https://hajj.gov.bd', 'অনুমোদিত হজ এজেন্সির তালিকা পোর্টালে দেখে নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 2, 'মন্ত্রণালয় কর্তৃক নির্ধারিত সময়সীমার মধ্যে প্যাকেজ নির্বাচন ও ফি পরিশোধ', 'হজের সিরিয়াল এলে সরকারি প্যাকেজ বা অনুমোদিত বেসরকারি এজেন্সির ব্যাংক একাউন্টে টাকা জমা দিন।', NULL, 'ব্যক্তিগত কোনো এজেন্টের হাতে নগদে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ehajj-pilgrim-registration-fraud-prevention', 3, 'পিলগ্রিম আইডি (PID) ও ভিসা গ্রহণ', 'টাকা জমা হলে ধর্ম মন্ত্রণালয় পিলগ্রিম আইডি ইস্যু করবে এবং সৌদি হজ ও ওমরাহ মন্ত্রণালয় থেকে ইলেকট্রনিক হজ ভিসা সম্পন্ন হবে।', NULL, NULL);
            

-- Service: ১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা (bd-agri-crop-loan-4-percent-concession)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-agri-crop-loan-4-percent-concession', '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা', '10 Taka Bank Account & 4% Concessional Interest Agri Crop Loan Guide', 
            'কৃষি ও খাদ্য নিরাপত্তা', NULL, 'বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ', 
            'কৃষকদের মহাজনী সুদের হাত থেকে বাঁচাতে সরকার মাত্র ১০ টাকায় ব্যাংক অ্যাকাউন্ট খোলার সুযোগ এবং ডাল, তেলবীজ, মসলা ও ভুট্টা চাষের জন্য মাত্র ৪% রেয়াতি সুদে বিশেষ কৃষি ঋণ প্রদান করে। ব্যাংক কর্মকর্তা বা স্থানীয় দালালরা ঋণ পাইয়ে দেওয়ার নামে পারসেন্টেজ বা ঘুষ চাইতে পারে না।', 'আবেদন ও সরেজমিন জমি যাচাইয়ের পর ৭ থেকে ১০ কার্যদিবস', 
            'https://bb.org.bd', 'https://krishi.gov.bd', 
            'https://moa.gov.bd', 'সতর্কতা: কৃষি ঋণ কৃষকের রাষ্ট্রীয় অধিকার। কোনো ব্যাংক ম্যানেজার বা ফিল্ড সুপারভাইজার ঋণের টাকা ছাড়ার বিনিময়ে ঘুষ চাইলে সরাসরি বাংলাদেশ ব্যাংকের ফাইনান্সিয়াল ইন্টিগ্রিটি হেল্পলাইন ১৬২৩৬ নম্বরে অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-agri-crop-loan-4-percent-concession';
DELETE FROM service_documents WHERE service_id = 'bd-agri-crop-loan-4-percent-concession';
DELETE FROM service_steps WHERE service_id = 'bd-agri-crop-loan-4-percent-concession';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'কৃষক ব্যাংক একাউন্ট খোলার প্রাথমিক জমা', 10.0, 1, 'নগদ ১০ টাকা', '১০ টাকার কৃষক একাউন্টে কোনো বাৎসরিক রক্ষণাবেক্ষণ চার্জ নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'ঋণ আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'কৃষি ঋণ আবেদনের জন্য কোনো ফি লাগে না।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'রেয়াতি সুদের হার (ডাল, তেলবীজ ও মসলা)', 0.0, 1, 'বার্ষিক মাত্র ৪% সরল সুদ', 'বাকি সুদ সরকার ভর্তুকি হিসেবে ব্যাংককে প্রদান করে।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'উপজেলা কৃষি সম্প্রসারণ অধিদপ্তর কর্তৃক প্রদত্ত কৃষি কার্ড (Krishi Card)', 1, 0, 'মূল কার্ড ও ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'জমির মালিকানার দলিল/পর্চা অথবা বর্গা চাষের ক্ষেত্রে জমির মালিকের সম্মতিপত্র', 1, 0, 'ফটোকপি বা বর্গা প্রত্যয়ন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 'ইউপি চেয়ারম্যান বা মেম্বারের প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 1, 'নিকটস্থ কৃষি ব্যাংক বা সোনালী/জনতা ব্যাংকের শাখায় আবেদন', 'কৃষি কার্ড ও এনআইডিসহ সরাসরি ব্যাংকের ফিল্ড অফিসার বা লোন ম্যানেজারের সাথে দেখা করুন।', NULL, 'ব্যাংকের বাইরে থাকা কোনো মধ্যস্বত্বভোগীর সাথে কথা বলবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 2, 'ফসলি জমি সরেজমিনে ফিল্ড অফিসার কর্তৃক পরিদর্শন', 'ব্যাংক কর্মকর্তা জমিতে গিয়ে আবাদযোগ্য ফসলের এলাকা দেখে ঋণের পরিমাণ অনুমোদন করবেন।', NULL, 'পরিদর্শনের নামে কোনো টাকা দেওয়া নিষেধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-agri-crop-loan-4-percent-concession', 3, 'সরাসরি ১০ টাকার একাউন্টে ঋণের অর্থ প্রদান', 'অনুমোদিত ঋণের অর্থ সরাসরি কৃষকের ব্যাংক হিসাবে জমা হবে এবং ফসল ওঠার পর মাত্র ৪% সুদে কিস্তি পরিশোধের সুযোগ মিলবে।', NULL, NULL);
            

-- Service: ৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা (bd-dae-subsidized-farm-machinery-grant)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dae-subsidized-farm-machinery-grant', '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা', '50% to 70% Subsidized Farm Machinery Combine Harvester Grant Guide', 
            'কৃষি ও খাদ্য নিরাপত্তা', NULL, 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়', 
            'কৃষিতে শ্রমিক সংকট দূর করতে সরকার কম্বাইন হারভেস্টার, রাইস ট্রান্সপ্লান্টার ও রিপার কেনার জন্য হাওর ও উপকূলীয় এলাকায় ৭০% এবং সমতল এলাকায় ৫০% পর্যন্ত সরাসরি নগদ ভর্তুকি প্রদান করে। ৩০ লাখ টাকার একটি হারভেস্টার মাত্র ৯ থেকে ১৫ লাখ টাকায় কেনা সম্ভব। দালাল চক্র কৃষকদের নাম দিয়ে যন্ত্রপাতি তুলে বেশি দামে বিক্রি করার অপচেষ্টা চালায়।', 'উপজেলা ও জেলা কৃষি কমিটির যাচাই সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস', 
            'https://dae.gov.bd', 'https://dae.gov.bd', 
            'https://moa.portal.gov.bd', 'সতর্কতা: কোনো অসাধু ব্যক্তি বা দালাল ভর্তুকির হারভেস্টার বিক্রি করে দেওয়া বা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে জেলা প্রশাসক বা কৃষি মন্ত্রণালয়ের নিয়ন্ত্রণ কক্ষে অবহিত করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dae-subsidized-farm-machinery-grant';
DELETE FROM service_documents WHERE service_id = 'bd-dae-subsidized-farm-machinery-grant';
DELETE FROM service_steps WHERE service_id = 'bd-dae-subsidized-farm-machinery-grant';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'ভর্তুকি আবেদন ফরম ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'উপজেলা কৃষি অফিসে আবেদন সম্পূর্ণ ফ্রি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'কৃষকের নিজস্ব প্রদেয় অংশ', 0.0, 1, 'অনুমোদিত ব্যাংকে পে-অর্ডার', 'যন্ত্রপাতির দামের সমতলে ৫০% এবং হাওরে ৩০% অংশ কৃষক পরিশোধ করবেন।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'উপজেলা কৃষি কার্যালয়ের নির্ধারিত আবেদন ফরম', 1, 0, 'মূল ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'আবেদনকারী কৃষক বা কৃষক দলের কৃষি কার্ড ও জাতীয় পরিচয়পত্র', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'ন্যূনতম আবাদযোগ্য জমির পরিমাণ বা কৃষক দলের চুক্তিনামা', 1, 0, 'প্রত্যয়ন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 'যন্ত্রপাতি রাখার উপযোগী গ্যারেজ বা জায়গার বিবরণ', 1, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 1, 'উপজেলা কৃষি অফিসার (UAO) বরাবর আবেদন', 'কৃষি সম্প্রসারণ অধিদপ্তরের সমন্বিত কৃষি যন্ত্রায়করণ প্রকল্পের আওতায় ফরমে আবেদন দাখিল করুন।', 'https://dae.gov.bd', 'কৃষক দল বা সমবায় হিসেবে আবেদন করলে অগ্রাধিকার পাওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 2, 'উপজেলা কৃষি পুনর্বাসন ও বাস্তবায়ন কমিটি কর্তৃক যাচাই', 'কমিটি আবেদনকারীর জমি ও দক্ষতা সরেজমিনে যাচাই করে চূড়ান্ত তালিকা জেলা কমিটিতে পাঠাবে।', NULL, 'তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dae-subsidized-farm-machinery-grant', 3, 'ভর্তুকির অর্থ সমন্বয় ও যন্ত্রপাতি হস্তান্তর', 'অনুমোদিত কোম্পানি থেকে যন্ত্রপাতির ৫০% কৃষক জমা দিলে বাকি ৫০% বা ৭০% অর্থ সরকার পরিশোধ করে এবং আনুষ্ঠানিকভাবে হারভেস্টার হস্তান্তর করা হয়।', NULL, NULL);
            

-- Service: উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা (bd-dls-free-cattle-vaccination-deworming)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dls-free-cattle-vaccination-deworming', 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা', 'Upazila Livestock Office Free Cattle Vaccination & Deworming Guide', 
            'প্রাণিসম্পদ ও কৃষি', NULL, 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়', 
            'গরুর ক্ষুরারোগ (FMD), তড়কা, বাদলা, বাদলা-গলাফুলা এবং হাঁস-মুরগির রানীক্ষেত ও ডাকপ্লেগ রোগ প্রতিরোধে সরকার উপজেলা প্রাণিসম্পদ হাসপাতালের মাধ্যমে নিয়মিত বিনামূল্যে সরকারি ভ্যাকসিন সরবরাহ করে। স্থানীয় পল্লী পশু চিকিৎসক বা দালালরা এই সরকারি ফ্রি ভ্যাকসিন বিক্রি করে টাকা হাতিয়ে নেয়।', 'তাৎক্ষণিক (হাসপাতালের ওয়ান-স্টপ কাউন্টার)', 
            'https://dls.gov.bd', 'https://dls.gov.bd', 
            'https://dls.portal.gov.bd', 'সতর্কতা: সরকারি ভ্যাকসিন কোনো ফার্মেসি বা ব্যক্তির কাছে বিক্রি করা আইনত নিষিদ্ধ। কোনো কর্মচারী সরকারি টিকা বাইরে বিক্রি করলে উপজেলা প্রাণিসম্পদ কর্মকর্তা বা দুদক ১০৬ এ অভিযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dls-free-cattle-vaccination-deworming';
DELETE FROM service_documents WHERE service_id = 'bd-dls-free-cattle-vaccination-deworming';
DELETE FROM service_steps WHERE service_id = 'bd-dls-free-cattle-vaccination-deworming';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 'সরকারি টিকা ও ভ্যাকসিনের মূল্য', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'বা অ্যাম্পুল প্রতি প্রতীকী ৫০ পয়সা থেকে ১ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 'ভেটেরিনারি ডাক্তারের চিকিৎসা পরামর্শ ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকারি পশু হাসপাতালে পরামর্শ সম্পূর্ণ ফ্রি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 'খামারি বা পশুপালকের জাতীয় পরিচয়পত্র (NID)', 0, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 'ভ্যাকসিন পরিবহনের জন্য উপযুক্ত ফ্লাস্ক বা আইস-বক্স (বরফসহ)', 1, 0, 'কোল্ড চেইন বক্স', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 1, 'বরফের ফ্লাস্ক নিয়ে উপজেলা প্রাণিসম্পদ দপ্তরে যাওয়া', 'টিকা যাতে নষ্ট না হয় সেজন্য বরফ ভর্তি ফ্লাস্ক নিয়ে সরাসরি সরকারি পশু হাসপাতালের টিকা কাউন্টারে যোগাযোগ করুন।', NULL, 'দালাল ছাড়াই সরাসরি সরকারি কর্মচারীর কাছ থেকে টিকা নিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 2, 'পশুর সংখ্যা উল্লেখ করে ভ্যাকসিন গ্রহণ', 'গরু, ছাগল বা হাঁস-মুরগির সংখ্যা লিখে সরকারি রেজিস্টারে এন্ট্রি করে প্রয়োজনীয় সংখ্যক ডোজ বুঝে নিন।', NULL, 'সরকারি ভ্যাকসিনের গায়ে ''বিক্রয়ের জন্য নহে'' সিল থাকবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dls-free-cattle-vaccination-deworming', 3, 'উপজেলা ভেটেরিনারি সার্জনের নির্দেশনা অনুযায়ী প্রয়োগ', 'নির্দিষ্ট তাপমাত্রায় রেখে নিয়মানুযায়ী গবাদিপশুকে টিকা পুশ করুন অথবা হাসপাতালের ফিল্ড সহকারীর সহায়তা নিন।', NULL, NULL);
            

-- Service: মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা (bd-fisheries-hatchery-farm-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-fisheries-hatchery-farm-license', 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা', 'Fisheries Farm & Hatchery Establishment License and Fry Transit Guide', 
            'মৎস্য ও প্রাণিসম্পদ', NULL, 'মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়', 
            'বাণিজ্যিক মৎস্য খামার, মাছের হ্যাচারি স্থাপন ও গুণগত মানসম্পন্ন রেণু-পোনা পরিবহণের জন্য মৎস্য হ্যাচারি আইন অনুযায়ী নিবন্ধন গ্রহণ আবশ্যক। দালালদের খপ্পর ছাড়া উপজেলা মৎস্য অফিসে ট্রেজারি চালানের মাধ্যমে নামমাত্র সরকারি ফি দিয়ে লাইসেন্স পাওয়া যায়।', 'হ্যাচারি পরিদর্শন ও পানির গুণমান পরীক্ষার পর ১৫ থেকে ৩০ কার্যদিবস', 
            'https://fisheries.gov.bd', 'https://fisheries.gov.bd', 
            'https://mofl.gov.bd', 'সতর্কতা: নিষিদ্ধ আফ্রিকান মাগুর বা পিরানহার হ্যাচারি করা শাস্তিযোগ্য অপরাধ। লাইসেন্স পাওয়ার জন্য কোনো মধ্যস্থতাকারীকে টাকা দেবেন না।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-fisheries-hatchery-farm-license';
DELETE FROM service_documents WHERE service_id = 'bd-fisheries-hatchery-farm-license';
DELETE FROM service_steps WHERE service_id = 'bd-fisheries-hatchery-farm-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-fisheries-hatchery-farm-license', 'মাছের হ্যাচারি স্থাপন লাইসেন্স ফি', 2000.0, 1, 'ট্রেজারি চালান', 'বাৎসরিক লাইসেন্স ফি ২,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-fisheries-hatchery-farm-license', 'মৎস্য খামার নিবন্ধন ফি', 500.0, 1, 'ট্রেজারি চালান', 'সাধারণ মৎস্য খামারের জন্য মাত্র ৫০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fisheries-hatchery-farm-license', 'নির্ধারিত আবেদন ফরম (উপজেলা মৎস্য অফিস থেকে সংগৃহীত)', 1, 0, 'মূল ফরম', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fisheries-hatchery-farm-license', 'পুকুর বা হ্যাচারির জমির মালিকানার দলিল ও নামজারি খতিয়ান', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fisheries-hatchery-farm-license', 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-fisheries-hatchery-farm-license', 'পানির উৎস ও পরিবেশ সুরক্ষা ব্যবস্থার বিবরণ', 1, 0, 'বিবরণ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fisheries-hatchery-farm-license', 1, 'উপজেলা জ্যেষ্ঠ মৎস্য কর্মকর্তা বরাবর আবেদন', 'জমির কাগজপত্র ও ট্রেড লাইসেন্সসহ উপজেলা মৎস্য কার্যালয়ে আবেদন জমা দিন।', 'https://fisheries.gov.bd', 'দালাল ছাড়াই সরাসরি অফিসে ফাইল জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fisheries-hatchery-farm-license', 2, 'মৎস্য কারিগরি দল কর্তৃক পরিদর্শন', 'মৎস্য কর্মকর্তা সরেজমিনে হ্যাচারির ব্রুড মাছের মান ও হ্যাচিং জার পরীক্ষা করবেন।', NULL, 'পরিদর্শনে কোনো অনৈতিক লেনদেন নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-fisheries-hatchery-farm-license', 3, 'চালান জমা ও হ্যাচারি লাইসেন্স গ্রহণ', 'ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি হ্যাচারি লাইসেন্স ও সনদপত্র সংগ্রহ করুন।', NULL, NULL);
            

-- Service: সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড (bd-govt-hospital-ambulance-service-rates)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-govt-hospital-ambulance-service-rates', 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড', 'Government Hospital Official Rate Card Ambulance Booking & Syndicate Prevention Guide', 
            'স্বাস্থ্য ও পরিবার কল্যাণ', NULL, 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়', 
            'সরকারি মেডিকেল কলেজ ও জেলা হাসপাতালে মুমূর্ষু রোগীদের জরুরি স্থানান্তরের জন্য সরকারি অ্যাম্বুলেন্স রয়েছে যার কিলোমিটার প্রতি রেট সরকার কর্তৃক নির্ধারিত (ঢাকা শহরে সাধারণত সর্বনিম্ন ৫০০-১০০০ টাকা বা প্রতি কিমি ১০-১৫ টাকা)। বেসরকারি অ্যাম্বুলেন্স সিন্ডিকেট সরকারি অ্যাম্বুলেন্সকে নষ্ট দেখিয়ে রোগীদের কাছ থেকে ১০,০০০-২০,০০০ টাকা হাতিয়ে নেয়।', 'জরুরি ভিত্তিতে তাৎক্ষণিক অ্যাম্বুলেন্স বরাদ্দ', 
            'https://dghs.gov.bd', 'https://dghs.gov.bd', 
            'https://hsd.gov.bd', 'সতর্কতা: হাসপাতালে অ্যাম্বুলেন্স সিন্ডিকেট রোগীর জীবন নিয়ে বাণিজ্য করে। কোনো চালক বেশি টাকা দাবি করলে বা সিন্ডিকেট বাধা দিলে সাথে সাথে হাসপাতাল পরিচালক বা জরুরি পুলিশ সেবা ৯৯৯ এ কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-govt-hospital-ambulance-service-rates';
DELETE FROM service_documents WHERE service_id = 'bd-govt-hospital-ambulance-service-rates';
DELETE FROM service_steps WHERE service_id = 'bd-govt-hospital-ambulance-service-rates';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 'সরকারি অ্যাম্বুলেন্স বেস ফেয়ার (মেট্রোপলিটন এলাকা)', 500.0, 1, 'হাসপাতাল ক্যাশ কাউন্টার সরকারি রশিদ', 'প্রথম ৫ কিলোমিটারের জন্য সরকারি নির্ধারিত বেস ফেয়ার।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 'প্রতি কিলোমিটার অতিরিক্ত ভাড়া (দূরপাল্লায়)', 15.0, 1, 'অফিশিয়াল রশিদ', 'প্রতি কিমি দূরত্ব অনুযায়ী নির্ধারিত সরকারি রেট।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 'কর্তব্যরত সরকারি চিকিৎসকের রেফারেল ও অ্যাম্বুলেন্স চাহিদাপত্র', 1, 0, 'সিলযুক্ত মূল স্লিপ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 'রোগীর ভর্তি টিকিট ও বেড নম্বর', 1, 0, 'টিকিট', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 'হাসপাতাল ক্যাশ কাউন্টারে ভাড়া পরিশোধের মানি রিসিট', 1, 0, 'সরকারি রশিদ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 1, 'ডাক্তারের রেফারেল নিয়ে সরাসরি হাসপাতালের কন্ট্রোল রুমে যাওয়া', 'প্রাইভেট অ্যাম্বুলেন্স ড্রাইভার বা দালালের সাথে কথা না বলে সরাসরি হাসপাতালের জরুরি বিভাগের ''অ্যাম্বুলেন্স নিয়ন্ত্রণ কক্ষে'' যান।', NULL, 'দালালরা বলবে সরকারি গাড়ি নষ্ট, তাদের কথায় কান দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 2, 'সরকারি কাউন্টারে রসিদ কেটে ভাড়া পরিশোধ', 'দূরত্ব অনুযায়ী সরকারি রেট কার্ড দেখে ক্যাশ কাউন্টারে টাকা জমা দিয়ে সিলমোহরযুক্ত রসিদ নিন।', NULL, 'চালককে সরাসরি অতিরিক্ত কোনো টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-govt-hospital-ambulance-service-rates', 3, 'সরকারি অ্যাম্বুলেন্সে নিরাপদ স্থানান্তর', 'সরকারি অ্যাম্বুলেন্স চালককে রসিদ দেখিয়ে রোগীকে নিরাপদে নির্ধারিত হাসপাতালে নিয়ে যান।', NULL, NULL);
            

-- Service: বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা (bd-dghs-private-clinic-diagnostic-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dghs-private-clinic-diagnostic-license', 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা', 'Private Clinic Hospital & Diagnostic Center Online License & Renewal Guide', 
            'স্বাস্থ্য ও বাণিজ্য লাইসেন্স', NULL, 'স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ', 
            'বেসরকারি হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টার পরিচালনার জন্য স্বাস্থ্য অধিদপ্তর থেকে অনলাইন লাইসেন্স গ্রহণ ও নবায়ন বাধ্যতামূলক। অবৈধ ক্লিনিক সিলগালা করা হচ্ছে। দালালদের মাধ্যমে না গিয়ে সরাসরি স্বাস্থ্য অধিদপ্তরের অনলাইন পোর্টালে সরকারি ফি দিয়ে স্বচ্ছভাবে লাইসেন্স নেওয়া যায়।', 'সিভিল সার্জন পরিদর্শন ও স্বাস্থ্য অধিদপ্তরের অনুমোদন সাপেক্ষে ৩০-৪৫ কার্যদিবস', 
            'https://dghs.gov.bd', 'https://dghs.gov.bd', 
            'https://dghs.portal.gov.bd', 'সতর্কতা: স্বাস্থ্য অধিদপ্তরে লাইসেন্স পাইয়ে দেওয়ার নামে কোনো অসাধু চক্র লাখ টাকা দাবি করলে সরাসরি স্বাস্থ্য অধিদপ্তরের ভিজিলেন্স সেল বা স্বাস্থ্য বাতায়ন ১৬২৬৩ নম্বরে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dghs-private-clinic-diagnostic-license';
DELETE FROM service_documents WHERE service_id = 'bd-dghs-private-clinic-diagnostic-license';
DELETE FROM service_steps WHERE service_id = 'bd-dghs-private-clinic-diagnostic-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 'ডায়াগনস্টিক সেন্টার লাইসেন্স ফি (ক্যাটাগরি-এ)', 50000.0, 1, 'এ-চালান (ট্রেজারি চালান)', 'মেট্রোপলিটন এলাকার জন্য ৫০,০০০ টাকা; জেলা-উপজেলায় আনুপাতিক কম।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', '১০-৫০ বেডের বেসরকারি হাসপাতাল লাইসেন্স ফি', 50000.0, 1, 'এ-চালান', '১০-৫০ শয্যার হাসপাতালের সরকারি ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 'অনাবাসিক বাণিজ্যিক ভবনের রাজউক/পৌরসভা অনুমোদিত প্ল্যান ও ট্রেড লাইসেন্স', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 'পূর্ণকালীন বিএমডিসি (BMDC) নিবন্ধিত চিকিৎসক ও ডিপ্লোমা নার্সদের তালিকা', 1, 0, 'সনদের ফটোকপিসহ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত পরিবেশ ছাড়পত্র (ECC)', 1, 0, 'কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 'পরমাণু শক্তি কমিশন কর্তৃক এক্স-রে ও রেডিয়েশন লাইসেন্স (ডায়াগনস্টিকের ক্ষেত্রে)', 0, 0, 'কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 1, 'স্বাস্থ্য অধিদপ্তরের পোর্টালে অনলাইন লাইসেন্স আবেদন', 'https://dghs.gov.bd পোর্টালে গিয়ে হাসপাতালের বিবরণ ও চিকিৎসকদের বিএমডিসি সনদ আপলোড করুন।', 'https://dghs.gov.bd', 'সব চালানের ফি সরাসরি অনলাইনে পরিশোধ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 2, 'সিভিল সার্জন কর্তৃক সরেজমিনে হাসপাতাল পরিদর্শন', 'জেলার সিভিল সার্জন ও পরিদর্শন দল অপারেশন থিয়েটার, আইসিইউ ও বর্জ্য ব্যবস্থাপনা পরীক্ষা করবেন।', NULL, 'পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dghs-private-clinic-diagnostic-license', 3, 'ডিজিটাল লাইসেন্স ডাউনলোড ও প্রদর্শন', 'অনুমোদিত হলে কিউআর কোড সম্বলিত সরকারি লাইসেন্স ডাউনলোড করে ক্লিনিকের ফ্রন্ট ডেস্কে প্রদর্শন করতে হবে।', NULL, NULL);
            

-- Service: সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা (bd-dgfp-family-planning-methods-incentives)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dgfp-family-planning-methods-incentives', 'সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা', 'Government Family Planning Methods Services & Financial Incentives Guide', 
            'স্বাস্থ্য ও পরিবার কল্যাণ', NULL, 'পরিবার পরিকল্পনা অধিদপ্তর (DGFP)', 
            'মাতৃ ও শিশু স্বাস্থ্য সুরক্ষায় সরকার ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্রের মাধ্যমে সম্পূর্ণ বিনামূল্যে পরিবার পরিকল্পনা সামগ্রী (পিল, কনডম), দীর্ঘমেয়াদি পদ্ধতি (আইইউডি, ইমপ্ল্যান্ট) এবং স্থায়ী পদ্ধতি (এনএসভি/লাইগেশন) প্রদান করে। স্থায়ী পদ্ধতির ক্ষেত্রে রোগীকে কোনো খরচ করতে হয় না, উল্টো সরকার নগদ ২,০০০ টাকা প্রণোদনা ও লুঙ্গি/শাড়ি প্রদান করে।', 'তাৎক্ষণিক সেবা', 
            'https://dgfp.gov.bd', 'https://dgfp.gov.bd', 
            'https://dgfp.portal.gov.bd', 'সতর্কতা: পরিবার পরিকল্পনা সেবায় কোনো টাকা নেওয়া অপরাধ। কোনো ডাক্তার বা নার্স ফি দাবি করলে সরাসরি উপজেলা পরিবার পরিকল্পনা কর্মকর্তা বা স্বাস্থ্য বাতায়ন ১৬২৬৩ এ কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dgfp-family-planning-methods-incentives';
DELETE FROM service_documents WHERE service_id = 'bd-dgfp-family-planning-methods-incentives';
DELETE FROM service_steps WHERE service_id = 'bd-dgfp-family-planning-methods-incentives';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 'সকল পরিবার পরিকল্পনা সামগ্রী ও চিকিৎসা', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকারের সম্পূর্ণ ফ্রি পরিবার পরিকল্পনা সেবা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 'স্থায়ী পদ্ধতি গ্রহীতাকে সরকারি প্রণোদনা প্রদান', 0.0, 1, 'সরকার রোগীকে উল্টো ২০০০ টাকা নগদ দেয়', 'মজুরি ক্ষতিপূরণ হিসেবে রোগীকে নগদ অর্থ ও বস্ত্র দেওয়া হয়।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 'স্বামী বা স্ত্রীর লিখিত সম্মতিপত্র (স্থায়ী পদ্ধতির ক্ষেত্রে)', 1, 0, 'স্বাক্ষরিত ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 1, 'ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্রে যোগাযোগ', 'পরিবার কল্যাণ পরিদর্শিকা (FWV) বা উপজেলা পরিবার পরিকল্পনা কর্মকর্তার সাথে দেখা করুন।', NULL, 'পরামর্শ সম্পূর্ণ ফ্রি ও গোপনীয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 2, 'স্বাস্থ্য পরীক্ষা ও উপযুক্ত পদ্ধতি নির্বাচন', 'ডাক্তার শারীরিক পরীক্ষা করে উপযুক্ত দীর্ঘমেয়াদি বা স্থায়ী পদ্ধতি সম্পন্ন করবেন।', NULL, 'কোনো দালালকে টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dgfp-family-planning-methods-incentives', 3, 'সরকারি প্রণোদনা ও ওষুধপত্র গ্রহণ', 'স্থায়ী পদ্ধতি শেষে সরকারি বরাদ্দ থেকে নগদ অর্থ, নতুন পোশাক ও অ্যান্টিবায়োটিক ওষুধপত্র বিনামূল্যে বুঝে নিন।', NULL, NULL);
            

-- Service: মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা (bd-dnc-drug-rehabilitation-treatment)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dnc-drug-rehabilitation-treatment', 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা', 'Drug Addiction Treatment Rehabilitation Center License & Govt Admission Guide', 
            'স্বাস্থ্য ও সমাজকল্যাণ', NULL, 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ', 
            'মাদকাসক্ত স্বজনদের চিকিৎসার নামে দেশে শত শত অবৈধ রিহ্যাব সেন্টার গড়ে উঠেছে যেখানে রোগীদের নির্যাতন ও লাখ লাখ টাকা হাতিয়ে নেওয়া হয়। সরকারিভাবে তেজগাঁও কেন্দ্রীয় মাদকাসক্তি নিরাময় হাসপাতাল ও বিভাগীয় নিরাময় কেন্দ্রে মাত্র ৫০ টাকায় টিকিট কেটে আন্তর্জাতিক মানের চিকিৎসায় রোগীদের সুস্থ করা হয়। এছাড়া বেসরকারি রিহ্যাব সেন্টারের সরকারি লাইসেন্স নেওয়া বাধ্যতামূলক।', 'জরুরি রোগী: তাৎক্ষণিক ভর্তি | সাধারণ ভর্তি: সিট খালি সাপেক্ষে ১-৩ দিন', 
            'https://dnc.gov.bd', 'https://dnc.gov.bd', 
            'https://dnc.portal.gov.bd', 'সতর্কতা: ভুয়া রিহ্যাব সেন্টারের টর্চার সেলে রোগী পাঠাবেন না। মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের অনুমোদন ছাড়া কোনো রিহ্যাব চালানো দণ্ডনীয় অপরাধ। অভিযোগ জানাতে ডিএনসি হটলাইন ০১৯৫৮৮৮৮৮৮৮ এ যোগাযোগ করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dnc-drug-rehabilitation-treatment';
DELETE FROM service_documents WHERE service_id = 'bd-dnc-drug-rehabilitation-treatment';
DELETE FROM service_steps WHERE service_id = 'bd-dnc-drug-rehabilitation-treatment';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'সরকারি মাদকাসক্তি নিরাময় হাসপাতালে ভর্তি টিকিট', 50.0, 1, 'হাসপাতাল কাউন্টার রশিদ', 'ভর্তি ফি মাত্র ৫০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'সরকারি হাসপাতালে দৈনিক বেড ও খাবার চার্জ (সাধারণ ওয়ার্ড)', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'ওষুধ ও খাবার সরকার সম্পূর্ণ বিনামূল্যে প্রদান করে।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'বেসরকারি নিরাময় কেন্দ্র লাইসেন্স ফি', 20000.0, 1, 'ট্রেজারি চালান', 'ডিএনসি নির্ধারিত লাইসেন্স ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'রোগী ও অভিভাবকের জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'রোগীর ডোপ টেস্ট (Dope Test) বা পূর্ববর্তী প্রেসক্রিপশন (যদি থাকে)', 0, 0, 'মেডিকেল রেকর্ড', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 'অভিভাবকের অঙ্গীকারনামা ফরম', 1, 0, 'স্বাক্ষরিত মূল ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 1, 'তেজগাঁও কেন্দ্রীয় নিরাময় হাসপাতাল বা বিভাগীয় হাসপাতালে উপস্থিত হওয়া', 'দালাল ছাড়া সরাসরি সরকারি মাদকাসক্তি নিরাময় হাসপাতালের জরুরি বহির্বিভাগে রোগীকে নিয়ে যান।', NULL, 'দালালরা প্রাইভেট রিহ্যাবে নেওয়ার প্রলোভন দেখাবে, যাবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 2, 'মনোরোগ বিশেষজ্ঞ ও চিকিৎসকের অ্যাসেসমেন্ট', 'চিকিৎসক শারীরিক ও মানসিক অবস্থা দেখে ডিটক্সিফিকেশন (Detoxification) ওয়ার্ডে ভর্তি করাবেন।', NULL, 'চিকিৎসা অত্যন্ত নিরাপদ ও মানবিক।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dnc-drug-rehabilitation-treatment', 3, 'সাইকোথেরাপি ও পুনর্বাসন শেষে সুস্থ প্রত্যাবর্তন', '১৪ থেকে ২৮ দিনের কোর্সে রোগীকে শারীরিক ও মানসিক কাউন্সেলিং করিয়ে সম্পূর্ণ সুস্থ করে বাড়ি পাঠানো হয়।', NULL, NULL);
            

-- Service: প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা (bd-pmeat-pm-education-trust-student-grant)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-pmeat-pm-education-trust-student-grant', 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা', 'PM Education Assistance Trust Financial Aid for Underprivileged Students Guide', 
            'শিক্ষা ও সমাজকল্যাণ', NULL, 'প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়', 
            'দরিদ্র, এতিম, প্রতিবন্ধী ও অসচ্ছল পরিবারের শিক্ষার্থীদের পড়াশোনা যাতে অর্থাভাবে বন্ধ না হয়ে যায়, সেজন্য সরকার এককালীন ৫,০০০ থেকে ১০,০০০ টাকা পর্যন্ত সরকারি শিক্ষা অনুদান প্রদান করে। সম্পূর্ণ অনলাইন পোর্টালে কোনো দালাল ছাড়া আবেদন করা যায় এবং অনুমোদিত অনুদান সরাসরি শিক্ষার্থীর মোবাইল ওয়ালেটে (নগদ/বিকাশ) চলে আসে।', 'প্রতি শিক্ষাবর্ষের সার্কুলার অনুযায়ী আবেদন সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস', 
            'https://pmeat.gov.bd', 'https://eservice.pmeat.gov.bd', 
            'https://pmeat.portal.gov.bd', 'সতর্কতা: প্রধানমন্ত্রীর শিক্ষা অনুদান শিক্ষার্থীদের নাগরিক অধিকার। কোনো কম্পিউটার দোকান বা শিক্ষক এই টাকা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা বা শিক্ষা মন্ত্রণালয়ে অভিযোগ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-pmeat-pm-education-trust-student-grant';
DELETE FROM service_documents WHERE service_id = 'bd-pmeat-pm-education-trust-student-grant';
DELETE FROM service_steps WHERE service_id = 'bd-pmeat-pm-education-trust-student-grant';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 'শিক্ষা অনুদান আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'আবেদনের জন্য কোনো ফি বা টাকা দিতে হয় না।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রদত্ত প্রত্যায়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 'শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 'পিতা/মাতা বা অভিভাবকের এনআইডি ও বাৎসরিক আয়ের প্রত্যয়নপত্র (ইউপি চেয়ারম্যান কর্তৃক)', 1, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 'শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল নম্বর', 1, 0, 'সচল নম্বর', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 1, 'শিক্ষা সহায়তা ট্রাস্টের পোর্টালে অনলাইন রেজিস্ট্রেশন', 'https://eservice.pmeat.gov.bd পোর্টালে ঢুকে নিজের নাম, শিক্ষা প্রতিষ্ঠান ও পিতা-মাতার আয়ের তথ্য দিয়ে ফরম পূরণ করুন।', 'https://eservice.pmeat.gov.bd', 'মোবাইল নম্বরটি অবশ্যই নিজের এনআইডি দিয়ে বায়োমেট্রিক হওয়া আবশ্যক।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 2, 'শিক্ষা প্রতিষ্ঠান প্রধান কর্তৃক অনলাইনে ভেরিফিকেশন', 'বিদ্যালয় বা কলেজের প্রধান শিক্ষক সিস্টেমে আপনার তথ্য ভেরিফাই করে ট্রাস্টে অগ্রায়ন করবেন।', NULL, 'স্কুলে কোনো অতিরিক্ত টাকা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-pmeat-pm-education-trust-student-grant', 3, 'সরাসরি মোবাইল ওয়ালেটে অনুদানের টাকা জমা', 'ট্রাস্ট কর্তৃক যাচাই শেষে বাংলাদেশ ব্যাংকের মাধ্যমে সরাসরি শিক্ষার্থীর নগদ বা বিকাশ হিসাবে ৫,০০০-১০,০০০ টাকা ক্রেডিট হবে।', NULL, NULL);
            

-- Service: ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা (bd-ugc-foreign-degree-equivalence-certificate)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-ugc-foreign-degree-equivalence-certificate', 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা', 'UGC Foreign University Degree Equivalence Certificate Official Guide', 
            'শিক্ষা ও উচ্চশিক্ষা', NULL, 'বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)', 
            'বিদেশি বিশ্ববিদ্যালয় বা আন্তর্জাতিক প্রতিষ্ঠান থেকে অর্জিত স্নাতক (Bachelor), স্নাতকোত্তর (Master''s) বা পিএইচডি ডিগ্রি দিয়ে বাংলাদেশে বিসিএস পরীক্ষা, সরকারি চাকরি বা শিক্ষকতায় আবেদনের জন্য ইউজিসি থেকে ডিগ্রি সমমান সনদ (Equivalence Certificate) গ্রহণ বাধ্যতামূলক। দালালরা লক্ষ টাকা চায়, অথচ ইউজিসিতে সরকার নির্ধারিত ব্যাংকিং ফি দিয়ে সরাসরি আবেদন করা যায়।', 'ইউজিসি সমমান কমিটির সভা সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস', 
            'https://ugc.gov.bd', 'https://ugc.gov.bd', 
            'https://ugc.portal.gov.bd', 'সতর্কতা: ভুয়া বিদেশি ডিগ্রির জন্য কোনো চক্রের ফাঁদে পা দেবেন না। ইউজিসি আন্তর্জাতিক ডাটাবেজ দিয়ে বিশ্ববিদ্যালয়ের অনুমোদন যাচাই করে। কোনো অসদুপায় শাস্তিযোগ্য ফৌজদারি অপরাধ।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-ugc-foreign-degree-equivalence-certificate';
DELETE FROM service_documents WHERE service_id = 'bd-ugc-foreign-degree-equivalence-certificate';
DELETE FROM service_steps WHERE service_id = 'bd-ugc-foreign-degree-equivalence-certificate';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'স্নাতক / স্নাতকোত্তর সমমান ফি (সাধারণ)', 3000.0, 1, 'ইউজিসি সচিব বরাবর ব্যাংক ড্রাফট / পে-অর্ডার', 'প্রতিটি ডিগ্রির জন্য ৩,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'পিএইচডি (PhD) ডিগ্রি সমমান ফি', 5000.0, 1, 'ব্যাংক পে-অর্ডার', 'ডক্টরেট ডিগ্রির সমমান ফি ৫,০০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'বিদেশি বিশ্ববিদ্যালয়ের মূল ডিগ্রি সনদ ও একাডেমিক ট্রান্সক্রিপ্ট', 1, 0, 'পররাষ্ট্র মন্ত্রণালয় ও সংশ্লিষ্ট দূতাবাস কর্তৃক সত্যায়িত', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'বিদেশে পড়াশোনাকালীন ব্যবহৃত মূল পাসপোর্টের ভিসার পাতার কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'পূর্ববর্তী এসএসসি ও এইচএসসি বা সমমান সনদের কপি', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 'ইউজিসি নির্ধারিত সমমান আবেদন ফরম ও পে-অর্ডারের মূল কপি', 1, 0, 'পূরণকৃত মূল ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 1, 'সনদপত্র দূতাবাস ও পররাষ্ট্র মন্ত্রণালয় থেকে সত্যায়ন', 'বিদেশি বিশ্ববিদ্যালয়ের মূল সার্টিফিকেট সংশ্লিষ্ট দেশের দূতাবাস এবং বাংলাদেশ পররাষ্ট্র মন্ত্রণালয় (MOFA) থেকে সত্যায়ন করান।', NULL, 'অনলাইন দূরশিক্ষণ (Distance Learning) ডিগ্রি সাধারণত সরকার সমমান দেয় না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 2, 'ইউজিসি ভবনে ওয়ান-স্টপ সার্ভিসে আবেদন দাখিল', 'আগারগাঁও ইউজিসি ভবনে নির্ধারিত পে-অর্ডারসহ সকল সত্যায়িত কাগজপত্র জমা দিয়ে রিসিভিং স্লিপ নিন।', 'https://ugc.gov.bd', 'দালাল ছাড়াই নিজে সশরীরে জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-ugc-foreign-degree-equivalence-certificate', 3, 'সমমান কমিটির অনুমোদন ও সনদপত্র সংগ্রহ', 'সমমান কমিটির অনুমোদনের পর সরকারি কিউআর কোডযুক্ত সমমান সনদপত্র সংগ্রহ করুন যা বিসিএস ও সরকারি চাকরিতে গ্রহণযোগ্য।', NULL, NULL);
            

-- Service: বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা (bd-bteb-diploma-certificate-verification)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-bteb-diploma-certificate-verification', 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা', 'Bangladesh Technical Education Board BTEB Diploma Certificate Verification Guide', 
            'শিক্ষা ও শিক্ষাবোর্ড সেবা', NULL, 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)', 
            'পলিটেকনিক ডিপ্লোমা ইন ইঞ্জিনিয়ারিং, ডিপ্লোমা ইন টেক্সটাইল, মেডিকেল টেকনোলজি ও এনটিভি কিউএফ সনদের মূল সার্টিফিকেট উত্তোলন, সংশোধন ও বিদেশে যাওয়ার জন্য বোর্ড ভেরিফিকেশনের নিয়ম। দালালরা শিক্ষার্থীদের কাছ থেকে অতিরিক্ত হাজার হাজার টাকা হাতিয়ে নেয়, অথচ বোর্ডের ওয়ান-স্টপ সেবায় স্বল্প ফিতেই সেবা মেলে।', 'সাধারণ: ৭ কার্যদিবস | জরুরি: ৩ কার্যদিবস', 
            'http://bteb.gov.bd', 'http://bteb.gov.bd', 
            'http://bteb.portal.gov.bd', 'সতর্কতা: ডিপ্লোমা সনদ উত্তোলনে কোনো বোর্ড কর্মকর্তাকে বাড়তি টাকা দেওয়ার প্রয়োজন নেই। বোর্ডের নিচতলার অভিযোগ বক্সে অথবা চেয়ারম্যানের দপ্তরে তাৎক্ষণিক অনিয়ম জানাতে পারেন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-bteb-diploma-certificate-verification';
DELETE FROM service_documents WHERE service_id = 'bd-bteb-diploma-certificate-verification';
DELETE FROM service_steps WHERE service_id = 'bd-bteb-diploma-certificate-verification';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bteb-diploma-certificate-verification', 'মূল ডিপ্লোমা সনদপত্র উত্তোলন ফি', 500.0, 1, 'সোনালী সেবা / অনলাইন ব্যাংক স্লিপ', 'বোর্ড নির্ধারিত সরকারি ফি ৫০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-bteb-diploma-certificate-verification', 'নম্বরপত্র / ট্রান্সক্রিপ্ট ফি', 300.0, 1, 'সোনালী সেবা', 'প্রতিটি একাডেমিক ট্রান্সক্রিপ্ট ৩০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bteb-diploma-certificate-verification', 'বিটিইবি রেজিস্ট্রেশন কার্ড ও প্রবেশপত্রের (Admit Card) কপি', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bteb-diploma-certificate-verification', 'ইনস্টিটিউটের অধ্যক্ষ কর্তৃক অগ্রায়নপত্র বা প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-bteb-diploma-certificate-verification', 'সোনালী সেবার পেমেন্ট স্লিপের কপি', 1, 0, 'মূল স্লিপ', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bteb-diploma-certificate-verification', 1, 'বিটিইবি পোর্টালে অনলাইন সেবা ফরম পূরণ', 'http://bteb.gov.bd পোর্টালে সোনালী সেবার মাধ্যমে চালানের ফি পরিশোধ করুন।', 'http://bteb.gov.bd', 'দালালকে টাকা না দিয়ে সোনালী ই-সেবায় সরাসরি ফি দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bteb-diploma-certificate-verification', 2, 'কারিগরি শিক্ষা বোর্ডের ওয়ান-স্টপ কাউন্টারে দাখিল', 'আগারগাঁও কারিগরি বোর্ডের নিচতলার ওয়ান-স্টপ কাউন্টারে ফাইল জমা দিয়ে টোকেন স্লিপ নিন।', NULL, 'বোর্ডের সীমানায় ঘোরাঘুরি করা দালালদের পাত্তা দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-bteb-diploma-certificate-verification', 3, 'নির্ধারিত দিনে মূল সনদপত্র সংগ্রহ', 'রসিদ দেখিয়ে কিউআর কোডযুক্ত মূল ডিপ্লোমা সার্টিফিকেট বা ভেরিফাইড ট্রান্সক্রিপ্ট গ্রহণ করুন।', NULL, NULL);
            

-- Service: ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা (bd-forest-tree-felling-transit-pass-tp)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-forest-tree-felling-transit-pass-tp', 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা', 'Privately Owned Tree Felling & Timber Transit Pass TP Official Guide', 
            'বন, পরিবেশ ও জলবায়ু পরিবর্তন', NULL, 'বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়', 
            'নিজের জমিতে লাগানো সেগুন, মেহগনি, রেইনট্রি বা অন্য কাঠ কেটে করাতকলে নেওয়া বা অন্য জেলায় পরিবহণের জন্য বন সংরক্ষণ আইন অনুযায়ী ''ট্রানজিট পাস'' (Transit Pass বা টিপি) নিতে হয়। পাস না থাকলে পুলিশ ও বন কর্মকর্তারা রাস্তায় কাঠ জব্দ করার ভয় দেখিয়ে হাজার হাজার টাকা ঘুষ দাবি করে। অথচ বন বিভাগ থেকে টিপি আবেদন সরকারিভাবে সম্পূর্ণ বিনামূল্যে বা নামমাত্র ফিতে দেওয়া হয়।', 'বন কর্মকর্তা কর্তৃক সরেজমিন যাচাইয়ের পর ৩ থেকে ৭ কার্যদিবস', 
            'https://bforest.gov.bd', 'https://bforest.gov.bd', 
            'https://moef.gov.bd', 'সতর্কতা: নিজের জমির বৈধ গাছ পরিবহনে কোনো পুলিশ বা বন কর্মচারী চাঁদা দাবি করলে ট্রানজিট পাস প্রদর্শন করুন এবং জরুরি পুলিশ হেল্পলাইন ৯৯৯ অথবা বন অধিদপ্তরের কন্ট্রোল রুমে অভিযোগ দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-forest-tree-felling-transit-pass-tp';
DELETE FROM service_documents WHERE service_id = 'bd-forest-tree-felling-transit-pass-tp';
DELETE FROM service_steps WHERE service_id = 'bd-forest-tree-felling-transit-pass-tp';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'ব্যক্তি মালিকানাধীন জমির গাছ কাটার ট্রানজিট পাস আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'ব্যক্তিগত জমির গাছের জন্য সরকারি কোনো পারমিট ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'কাঠের হাতুড়ি বা সিলমোহর ফি (হ্যামার ফি)', 50.0, 1, 'ট্রেজারি চালান', 'গাছের গুড়িতে অফিশিয়াল হ্যামার মারার নামমাত্র ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'গাছ থাকা জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা', 1, 0, 'অনলাইন কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলরের ''গাছের মালিকানা'' প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত মূল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 'কাটা গাছের প্রজাতি, সংখ্যা ও আনুমানিক পরিমাপের তালিকা', 1, 0, 'স্বাক্ষরিত তালিকা', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 1, 'নিকটস্থ বন রেঞ্জ বা বিট কর্মকর্তার নিকট আবেদন', 'জমির পর্চা ও ইউপি প্রত্যয়নসহ উপজেলা বন কর্মকর্তা বা রেঞ্জ কর্মকর্তার কাছে আবেদন জমা দিন।', NULL, 'দালাল ছাড়াই সরাসরি বন অফিসে যোগাযোগ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 2, 'বন কর্মকর্তা কর্তৃক সরেজমিন গাছ ও সীমানা পরিদর্শন', 'বিট কর্মকর্তা জমিতে গিয়ে নিশ্চিত হবেন গাছটি সরকারি বন বা খাস জমির নয় এবং নিজের ব্যক্তিগত জমির।', NULL, 'পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-forest-tree-felling-transit-pass-tp', 3, 'গুড়িতে হ্যামার সিল ও ট্রানজিট পাস (TP) গ্রহণ', 'গাছের গুড়িতে বন বিভাগের অফিসিয়াল হ্যামার সিল মেরে কিউআর কোড বা সিলযুক্ত ট্রানজিট পাস দেওয়া হবে। এই পাস দেখালে রাস্তায় কোনো পুলিশ গাড়ি আটকাতে পারবে না।', NULL, NULL);
            

-- Service: ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা (bd-brickfield-environmental-clearance-dc-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-brickfield-environmental-clearance-dc-license', 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা', 'Brickfield Environmental Clearance & Deputy Commissioner License Guide', 
            'শিল্প ও পরিবেশ সেবা', NULL, 'পরিবেশ অধিদপ্তর ও জেলা প্রশাসন', 
            'ইট প্রস্তুত ও ভাটা স্থাপন (নিয়ন্ত্রণ) আইন অনুযায়ী কৃষি জমি, বনভূমি বা শিক্ষাপ্রতিষ্ঠানের ১ কিলোমিটারের মধ্যে ড্রাম চিমনি বা সাধারণ ভাটা সম্পূর্ণ নিষিদ্ধ। পরিবেশবান্ধব জিগজ্যাগ বা হাইব্রিড হফম্যান ভাটার জন্য পরিবেশ অধিদপ্তর থেকে ছাড়পত্র এবং জেলা প্রশাসকের নিকট থেকে ইটভাটা লাইসেন্স নিতে হয়। দালাল চক্র রাজনৈতিক প্রভাবের নামে লাখ লাখ টাকা হাতিয়ে নেয়।', 'যৌথ তদন্ত ও পরিবেশ কমিটির যাচাই সাপেক্ষে ৪৫ থেকে ৬০ কার্যদিবস', 
            'https://doe.gov.bd', 'https://doe.gov.bd', 
            'https://moef.gov.bd', 'সতর্কতা: অবৈধ ইটভাটা স্থাপন পরিবেশ ও ফসলের মারাত্মক ক্ষতি করে। কোনো দালাল যদি বলে পরিবেশ ছাড়পত্র ছাড়াই ভাটা চালানো যাবে—তবে মনে রাখবেন যেকোনো দিন মোবাইল কোর্টে জরিমানা ও জেল হবে।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-brickfield-environmental-clearance-dc-license';
DELETE FROM service_documents WHERE service_id = 'bd-brickfield-environmental-clearance-dc-license';
DELETE FROM service_steps WHERE service_id = 'bd-brickfield-environmental-clearance-dc-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'ইটভাটা পরিবেশ ছাড়পত্র ফি (ক্যাটাগরি লাল)', 50000.0, 1, 'ট্রেজারি চালান', 'পরিবেশ অধিদপ্তর নির্ধারিত সরকারি ফি।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'জেলা প্রশাসন ইটভাটা লাইসেন্স ফি', 25000.0, 1, 'ট্রেজারি চালান', 'ডিসি অফিস ট্রেজারি চালান।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'ভাটার জমির মালিকানার দলিল, নামজারি পর্চা বা রেজিস্ট্রিকৃত লিজ ডিড', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'উপজেলা কৃষি কর্মকর্তা কর্তৃক ''অনাবাদি জমি'' মর্মে প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত প্রত্যয়ন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'ইউপি চেয়ারম্যান বা পৌর মেয়রের অনাপত্তি সনদ (NOC)', 1, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 'জিগজ্যাগ বা আধুনিক চিমনি ও নিঃসরণ নিয়ন্ত্রণ নকশা', 1, 0, 'ইঞ্জিনিয়ারিং ব্লু-প্রিন্ট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 1, 'পরিবেশ অধিদপ্তরের পোর্টালে অনলাইন ছাড়পত্র আবেদন', 'https://doe.gov.bd পোর্টালে নকশা ও কৃষি প্রত্যয়নসহ ছাড়পত্রের আবেদন সাবমিট করুন।', 'https://doe.gov.bd', 'সব চালান সরাসরি বাংলাদেশ ব্যাংকে জমা দিন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 2, 'জেলা ইটভাটা নিয়ন্ত্রণ কমিটি কর্তৃক সরেজমিন পরিদর্শন', 'এডিসি (জেনারেল) ও পরিবেশ কর্মকর্তাদের দল দূরত্ব ও আধুনিক প্রযুক্তির মান পরীক্ষা করবেন।', NULL, 'অবৈধ ভাটায় ভ্রাম্যমাণ আদালত ভেঙে দেবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-brickfield-environmental-clearance-dc-license', 3, 'জেলা প্রশাসক কর্তৃক চূড়ান্ত ইটভাটা লাইসেন্স ইস্যু', 'পরিবেশ ছাড়পত্র জমা দিয়ে জেলা প্রশাসকের কার্যালয় থেকে সরকারি কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।', NULL, NULL);
            

-- Service: ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা (bd-postal-life-insurance-pli-claim-loan)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-postal-life-insurance-pli-claim-loan', 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা', 'Postal Life Insurance PLI Policy Claim Settlement & Loan Official Guide', 
            'অর্থ ও পেনশন সেবা', NULL, 'বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ', 
            '১৮৮৪ সাল থেকে পরিচালিত সরকারের শতভাগ গ্যারান্টিযুক্ত ডাক জীবন বীমা (PLI) বাংলাদেশের সবচেয়ে নিরাপদ ও সর্বোচ্চ বোনাস প্রদানকারী জীবন বীমা। বেসরকারি বীমা কোম্পানিগুলো মেয়াদপূর্তিতে গ্রাহকদের টাকা নিয়ে টালবাহানা করলেও পিএলআই সরাসরি সরকারের ট্রেজারি দ্বারা সুরক্ষিত। এছাড়া পলিসির বিপরীতে অত্যন্ত স্বল্প সুদে লোন পাওয়া যায়।', 'পলিসি ইস্যু: ৩ কার্যদিবস | মেয়াদপূর্তিতে দাবি নিষ্পত্তি: ৭ থেকে ১৫ কার্যদিবস', 
            'https://bdpost.gov.bd', 'https://bdpost.gov.bd', 
            'https://ptd.gov.bd', 'সতর্কতা: ডাক জীবন বীমা শতভাগ সরকারি ও নিরাপদ। কোনো দালাল বা তৃতীয় পক্ষের হাতে প্রিমিয়ামের টাকা দেবেন না, সরাসরি ডাকঘর কাউন্টারে বা সরকারি ডিজিটাল মাধ্যমে জমা দিয়ে রসিদ নিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-postal-life-insurance-pli-claim-loan';
DELETE FROM service_documents WHERE service_id = 'bd-postal-life-insurance-pli-claim-loan';
DELETE FROM service_steps WHERE service_id = 'bd-postal-life-insurance-pli-claim-loan';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'পলিসি আবেদন ফরম ও প্রসেসিং ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'পিএলআই পলিসি খোলার কোনো আবেদন ফি নেই।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'সরকারি মেডিকেল পরীক্ষা ফি (যদি প্রযোজ্য হয়)', 50.0, 1, 'ডাকঘর কাউন্টার রশিদ', 'সরকারি চিকিৎসকের ফি মাত্র ৫০-১০০ টাকা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'আবেদনকারী ও নমিনির জাতীয় পরিচয়পত্র (NID)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'বয়সের প্রমাণপত্র (এসএসসি সনদ বা অনলাইন জন্ম নিবন্ধন)', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'পাসপোর্ট সাইজ রঙিন ছবি (বীমাগ্রহীতা ও নমিনি)', 1, 0, '৩ কপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 'ডাক জীবন বীমার নির্ধারিত পূরণকৃত প্রস্তাবপত্র', 1, 0, 'মূল ফরম', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 1, 'নিকটস্থ প্রধান ডাকঘর বা উপজেলা পোস্ট অফিসে যোগাযোগ', 'ডাক জীবন বীমার ফিল্ড অফিসার বা কাউন্টারে গিয়ে বয়স অনুযায়ী প্রিমিয়ামের চার্ট দেখে পলিসি নির্বাচন করুন।', 'https://bdpost.gov.bd', 'সরকারি কর্মচারী ও সাধারণ নাগরিক উভয়ই এই বীমা করতে পারেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 2, 'প্রথম প্রিমিয়াম জমা ও প্রিমিয়াম বুক গ্রহণ', 'পোস্ট অফিস কাউন্টারে সরাসরি টাকা জমা দিয়ে অফিশিয়াল প্রিমিয়াম পাসবই গ্রহণ করুন। নগদ বা মোবাইল ওয়ালেটেও জমা দেওয়া যায়।', NULL, 'সব সময় ডাকঘরের অফিশিয়াল রসিদ রাখবেন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-postal-life-insurance-pli-claim-loan', 3, 'মেয়াদপূর্তিতে মূল টাকা ও সর্বোচ্চ সরকারি বোনাস লাভ', 'মেয়াদপূর্তিতে পাসবই জমা দিলে সরকার নির্ধারিত দেশের সর্বোচ্চ বোনাসসহ সম্পূর্ণ টাকা চেকের মাধ্যমে সরাসরি প্রদান করা হয়।', NULL, NULL);
            

-- Service: বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা (bd-btrc-isp-internet-service-provider-license)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-btrc-isp-internet-service-provider-license', 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা', 'BTRC Internet Service Provider ISP License & Renewal Official Guide', 
            'টেলিযোগাযোগ ও আইসিটি', NULL, 'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)', 
            'উপজেলা, জেলা বা বিভাগীয় পর্যায়ে বৈধভাবে ব্রডব্যান্ড ইন্টারনেট ব্যবসা করার জন্য বিটিআরসি থেকে আইএসপি লাইসেন্স নেওয়া বাধ্যতামূলক। অবৈধভাবে সংযোগ দিলে লাখ টাকা জরিমানা ও সরঞ্জাম বাজেয়াপ্ত হয়। দালাল চক্র বিটিআরসি লাইসেন্স পাইয়ে দেওয়ার নামে লাখ টাকা হাতিয়ে নেয়, অথচ বিটিআরসির অনলাইন পোর্টালে সরাসরি স্বল্প ফিতে আবেদন করা যায়।', 'কমিশনের যাচাই ও নিরাপত্তা ছাড়পত্র সাপেক্ষে ৬০ থেকে ৯০ কার্যদিবস', 
            'https://btrc.gov.bd', 'https://btrc.gov.bd', 
            'https://ptd.portal.gov.bd', 'সতর্কতা: অবৈধ ব্রডব্যান্ড ব্যবসা ফৌজদারি অপরাধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার চুক্তি করতে চাইলে সরাসরি বিটিআরসি হেল্পলাইন ১০০ নম্বরে জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-btrc-isp-internet-service-provider-license';
DELETE FROM service_documents WHERE service_id = 'bd-btrc-isp-internet-service-provider-license';
DELETE FROM service_steps WHERE service_id = 'bd-btrc-isp-internet-service-provider-license';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'উপজেলা বা থানা ক্যাটাগরি আইএসপি লাইসেন্স ফি', 10000.0, 0, 'পে-অর্ডার (BTRC সচিব বরাবর)', 'উপজেলা পর্যায়ে লাইসেন্স ফি মাত্র ১০,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'জেলা ক্যাটাগরি আইএসপি লাইসেন্স ফি', 25000.0, 0, 'পে-অর্ডার', 'জেলা পর্যায়ে লাইসেন্স ফি ২৫,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-btrc-isp-internet-service-provider-license', '১৫% সরকারি ভ্যাট', 1500.0, 1, 'ট্রেজারি চালান', 'উপজেলা ফি-এর ওপর ১৫% সরকারি ভ্যাট।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'আবেদনকারী প্রতিষ্ঠানের ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'মালিক বা পরিচালকদের জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'নেটওয়ার্ক টপোলজি ডায়াগ্রাম ও ব্যবহৃত ব্যান্ডউইথ প্রোভাইডারের বিবরণ', 1, 0, 'কারিগরি নকশা', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 'ব্যাংক সলভেন্সি সার্টিফিকেট (ন্যূনতম আর্থিক সামর্থ্যের প্রমাণ)', 1, 0, 'মূল কপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 1, 'বিটিআরসি পোর্টালে অনলাইন লাইসেন্স আবেদন', 'https://btrc.gov.bd পোর্টালে গিয়ে নির্ধারিত পে-অর্ডার ও কারিগরি নথিসহ আবেদন সাবমিট করুন।', 'https://btrc.gov.bd', 'দালাল ছাড়াই সরাসরি নিজের কোম্পানির নামে আবেদন করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 2, 'গোয়েন্দা সংস্থা ও বিটিআরসি কারিগরি টিম কর্তৃক ভেরিফিকেশন', 'আবেদনকারীর বিরুদ্ধে কোনো সাইবার অপরাধ বা রাষ্ট্রবিরোধী রেকর্ড নেই তা যাচাই করা হবে।', NULL, 'তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-btrc-isp-internet-service-provider-license', 3, 'আইএসপি লাইসেন্স ইস্যু ও ব্যান্ডউইথ সংযোগ', 'অনুমোদিত হলে বিটিআরসি ৫ বছর মেয়াদি লাইসেন্স ইস্যু করবে যার ভিত্তিতে এনটিটিএন ও আইআইজি থেকে বৈধ ব্যান্ডউইথ টানা যাবে।', NULL, NULL);
            

-- Service: অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা (bd-online-news-portal-govt-registration)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-online-news-portal-govt-registration', 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা', 'Online News Portal & Newspaper Official Government Registration Guide', 
            'গণমাধ্যম ও তথ্যপ্রযুক্তি', NULL, 'তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়', 
            'অনলাইন সংবাদমাধ্যম ও আইপি টিভির অপসাংবাদিকতা রোধ ও প্রাতিষ্ঠানিক স্বীকৃতির জন্য তথ্য ও সম্প্রচার মন্ত্রণালয় থেকে সরকারি নিবন্ধন বাধ্যতামূলক। গোয়েন্দা সংস্থার ছাড়পত্র সাপেক্ষে প্রকৃত গণমাধ্যম প্রতিষ্ঠানগুলোকে নিবন্ধন প্রদান করা হয়। দালালের খপ্পরে না পড়ে তথ্য অধিদপ্তরের মাধ্যমে আবেদন করার সরকারি নিয়মাবলী।', 'নিরাপত্তা ছাড়পত্র ও মন্ত্রণালয়ের অনুমোদন সাপেক্ষে ৯০ থেকে ১৮০ কার্যদিবস', 
            'https://pressinform.gov.bd', 'https://moi.gov.bd', 
            'https://moi.portal.gov.bd', 'সতর্কতা: সাংবাদিকতার নামে কার্ড বিক্রি করা বা কোনো দালাল চক্রের মাধ্যমে পোর্টাল নিবন্ধন করানোর প্রতিশ্রুতি সম্পূর্ণ ভুয়া। সরাসরি তথ্য অধিদপ্তরের অফিসিয়াল প্রক্রিয়ার মাধ্যমে আবেদন করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-online-news-portal-govt-registration';
DELETE FROM service_documents WHERE service_id = 'bd-online-news-portal-govt-registration';
DELETE FROM service_steps WHERE service_id = 'bd-online-news-portal-govt-registration';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-online-news-portal-govt-registration', 'অনলাইন নিউজ পোর্টাল প্রাথমিক নিবন্ধন ফি', 10000.0, 1, 'ট্রেজারি চালান (কোড: ১-১৫৩৩-০০০০-২৬৮১)', 'নিবন্ধন অনুমোদনের পর চালানের মাধ্যমে জমা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-online-news-portal-govt-registration', 'বার্ষিক লাইসেন্স নবায়ন ফি', 5000.0, 1, 'ট্রেজারি চালান', 'প্রতি বছর ৫,০০০ টাকা নবায়ন ফি।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-online-news-portal-govt-registration', 'সম্পাদক ও প্রকাশকের জাতীয় পরিচয়পত্র (NID), ছবি ও শিক্ষাগত যোগ্যতার সনদ', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-online-news-portal-govt-registration', 'ডোমেইন রেজিস্ট্রেশন ও হোস্টিংয়ের বৈধ মালিকানার চুক্তিপত্র', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-online-news-portal-govt-registration', 'পত্রিকা বা পোর্টালের স্থায়ী অফিস ও সম্পাদকীয় সেটআপের প্রমাণপত্র', 1, 0, 'ভাড়া চুক্তিপত্র ও ছবি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-online-news-portal-govt-registration', 'ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-online-news-portal-govt-registration', 1, 'তথ্য অধিদপ্তরে নির্ধারিত ফরমে আবেদন দাখিল', 'তথ্য অধিদপ্তর (PID) বরাবর নির্ধারিত ফরমে পোর্টালের বিবরণ ও প্রকাশকের অঙ্গীকারনামাসহ আবেদন জমা দিন।', 'https://pressinform.gov.bd', 'দালাল ছাড়াই সরাসরি সচিবালয়ে পিআইডি কাউন্টারে জমা দেওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-online-news-portal-govt-registration', 2, 'স্বরাষ্ট্র মন্ত্রণালয় ও নিরাপত্তা গোয়েন্দা সংস্থার ছাড়পত্র', 'মন্ত্রণালয় আবেদনটি পুলিশের স্পেশাল ব্রাঞ্চ (SB) ও এনএসআই-এর নিকট নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।', NULL, 'কোনো অসত্য বা বিভ্রান্তিকর তথ্য দেবেন না।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-online-news-portal-govt-registration', 3, 'চালান জমা ও সরকারি গেজেটভুক্ত নিবন্ধন সনদ গ্রহণ', 'অনুমোদনপত্র প্রাপ্তির পর ১০,০০০ টাকার ট্রেজারি চালান জমা দিলে তথ্য ও সম্প্রচার মন্ত্রণালয় আনুষ্ঠানিক নিবন্ধন সনদ ইস্যু করবে।', NULL, NULL);
            

-- Service: বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা (bd-dss-orphan-capitation-grant-madrasha)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dss-orphan-capitation-grant-madrasha', 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা', 'Private Orphanage & Madrasha Capitation Grant Allowance Official Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়', 
            'বেসরকারিভাবে পরিচালিত অনুমোদিত এতিমখানা ও লিল্লাহ বোর্ডিংয়ে বসবাসরত পিতৃহীন বা মাতৃহীন শিশুদের ভরণপোষণ ও শিক্ষার জন্য সরকার প্রতি শিশুর জন্য প্রতি মাসে ২,০০০ টাকা হারে ক্যাপিটেশন গ্রান্ট প্রদান করে। এতিমদের টাকা নিয়ে দালাল ও ভুয়া পরিচালনা কমিটির দুর্নীতি রোধে সরকার সরাসরি জিটুপি (G2P) ব্যাংকিং চ্যানেলে অর্থ ছাড় করে।', 'জেলা কমিটি ও সমাজসেবা অধিদপ্তরের অনুমোদন সাপেক্ষে বাৎসরিক বরাদ্দ', 
            'https://dss.gov.bd', 'https://dss.gov.bd', 
            'https://dss.portal.gov.bd', 'সতর্কতা: এতিমের হক নষ্ট করা মহাপাপ। কোনো কর্মকর্তা বা দালাল অনুদানের চেক ছাড়ানোর নামে পারসেন্টেজ চাইলে সোজা জেলা প্রশাসক বা দুর্নীতি দমন কমিশন (১০৬) এ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dss-orphan-capitation-grant-madrasha';
DELETE FROM service_documents WHERE service_id = 'bd-dss-orphan-capitation-grant-madrasha';
DELETE FROM service_steps WHERE service_id = 'bd-dss-orphan-capitation-grant-madrasha';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 'ক্যাপিটেশন গ্রান্ট আবেদন সরকারি ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সমাজসেবা অধিদপ্তরের সম্পূর্ণ ফ্রি সহায়তা সেবা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 'এতিমখানাটি সমাজসেবা অধিদপ্তর কর্তৃক স্বেচ্ছাসেবী সমাজকল্যাণ সংস্থা হিসেবে নিবন্ধিত হওয়ার সনদ', 1, 0, 'সত্যায়িত ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 'প্রতিটি এতিম শিশুর মূল মৃত্যু সনদ (পিতার মৃত্যু) ও অনলাইন জন্ম নিবন্ধন', 1, 0, 'ভেরিফাইড ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 'শিশুদের ছবিসহ পূর্ণাঙ্গ বালাম বই ও উপস্থিতি খাতা', 1, 0, 'মূল খাতা প্রদর্শন', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 'এতিমখানার নিজস্ব নামে পরিচালিত ব্যাংক হিসাবের স্টেটমেন্ট', 1, 0, 'ব্যাংক স্টেটমেন্ট', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 1, 'উপজেলা সমাজসেবা কর্মকর্তা বরাবর আবেদন দাখিল', 'এতিম শিশুদের প্রকৃত সংখ্যা ও পিতার মৃত্যু সনদসহ উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।', 'https://dss.gov.bd', 'দালাল ছাড়াই সরাসরি উপজেলা সমাজসেবা অফিসে যোগাযোগ করুন।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 2, 'উপজেলা যাচাই কমিটি কর্তৃক এতিমখানায় সরেজমিন গণনা', 'উপজেলা নির্বাহী কর্মকর্তা (UNO) ও সমাজসেবা কর্মকর্তা এতিমখানায় গিয়ে শিশুদের মুখে মুখে সাক্ষাতকার নিয়ে প্রকৃত এতিমদের মাথা গণনা করবেন।', NULL, 'কোনো ভুয়া এতিম শিশু দেখালে প্রতিষ্ঠান বাতিল হবে।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-orphan-capitation-grant-madrasha', 3, 'অনুমোদিত শিশুর অনুপাতে সরাসরি ব্যাংকে টাকা ছাড়', 'অনুমোদন পেলে প্রতি শিশুর জন্য মাসিক ২,০০০ টাকা হারে প্রতি ত্রৈমাসিকে সরাসরি এতিমখানার ব্যাংক হিসাবে টাকা জমা হবে।', NULL, NULL);
            

-- Service: হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা (bd-dss-transgender-hijra-stipend-allowance)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dss-transgender-hijra-stipend-allowance', 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা', 'Transgender (Hijra) & Marginalized Community Welfare Allowance & Training Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়', 
            'হিজড়া, দলিত, হরিজন, বেদে ও চা-শ্রমিক জনগোষ্ঠীর সামাজিক মর্যাদা প্রতিষ্ঠা ও পুনর্বাসনের জন্য সরকার প্রতি মাসে নিয়মিত মাসিক ভাতা (৮০০ টাকা) এবং বিশেষ কারিগরি প্রশিক্ষণ ও এককালীন ১০,০০০ টাকা পুনর্বাসন অনুদান প্রদান করে। কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি মোবাইলে (G2P) টাকা পাওয়া যায়।', 'উপজেলা কমিটির তালিকাভুক্তির পর নিয়মিত মাসিক বিতরণ', 
            'https://dss.gov.bd', 'https://dss.gov.bd', 
            'https://dss.portal.gov.bd', 'সতর্কতা: পিছিয়ে পড়া জনগোষ্ঠীর ভাতা তাদের মৌলিক অধিকার। কোনো দালাল কার্ড করিয়ে দেওয়ার নামে টাকা দাবি করলে উপজেলা নির্বাহী কর্মকর্তা বা ১০৬ এ জানান।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dss-transgender-hijra-stipend-allowance';
DELETE FROM service_documents WHERE service_id = 'bd-dss-transgender-hijra-stipend-allowance';
DELETE FROM service_steps WHERE service_id = 'bd-dss-transgender-hijra-stipend-allowance';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 'ভাতা ও প্রশিক্ষণ আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সরকারের সম্পূর্ণ ফ্রি কল্যাণমূলক সেবা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 'সিভিল সার্জন কর্তৃক হিজড়া জনগোষ্ঠীর প্রত্যয়নপত্র (হিজড়া ভাতার ক্ষেত্রে)', 1, 0, 'মেডিকেল সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 'ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক অনগ্রসর সম্প্রদায় প্রত্যয়ন', 1, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 'আবেদনকারীর সচল নগদ বা বিকাশ মোবাইল একাউন্ট', 1, 0, 'সচল নম্বর', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 1, 'উপজেলা সমাজসেবা কার্যালয়ে যোগাযোগ ও নাম অন্তর্ভুক্তি', 'এনআইডি ও সিভিল সার্জনের প্রত্যয়নপত্র নিয়ে উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।', 'https://dss.gov.bd', 'দালাল ছাড়াই সরাসরি সমাজসেবা অফিসে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 2, '৫০ দিনের সরকারি ড্রাইভিং বা সেলাই প্রশিক্ষণ গ্রহণ', 'সমাজসেবা অধিদপ্তর পরিচালিত আয়বর্ধক ভোকেশনাল প্রশিক্ষণে অংশ নিলে দৈনিক ভাতা ও প্রশিক্ষণ শেষে টুলস দেওয়া হয়।', NULL, 'প্রশিক্ষণ সম্পূর্ণ ফ্রি।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-transgender-hijra-stipend-allowance', 3, 'সরাসরি মোবাইলে মাসিক ভাতা ও অনুদান লাভ', 'জিটুপি সিস্টেমে প্রতি মাসের শুরুতে সরাসরি নিজের নগদ বা বিকাশ একাউন্টে সরকারি ভাতার টাকা চলে আসবে।', NULL, NULL);
            

-- Service: ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা (bd-dss-beggar-rehabilitation-grant)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-dss-beggar-rehabilitation-grant', 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা', 'Beggar Rehabilitation & Alternative Employment Government Grant Guide', 
            'সামাজিক নিরাপত্তা ও কল্যাণ', NULL, 'সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন', 
            'ভিক্ষাবৃত্তিমুক্ত সমাজ গঠনে সরকার প্রকৃত ভিক্ষুকদের ভিক্ষা ছেড়ে সম্মানজনক জীবিকা নির্বাহের জন্য এককালীন ২৫,০০০ থেকে ৫০,০০০ টাকা সমমূল্যের সম্পদ (যেমন: মুদি দোকানের মালামাল, গাভী, রিকশা বা ভ্যান) সম্পূর্ণ বিনামূল্যে অনুদান হিসেবে প্রদান করে। দালালদের খপ্পর ছাড়া উপজেলা প্রশাসনের মাধ্যমে এই সহায়তা মেলে।', 'যাচাই ও মালামাল ক্রয়ের পর ১৫ থেকে ৩০ কার্যদিবস', 
            'https://dss.gov.bd', 'https://dss.gov.bd', 
            'https://mopa.gov.bd', 'সতর্কতা: ভিক্ষুকদের পুনর্বাসন তহবিলের এক পয়সাও আত্মসাৎ করা মারাত্মক অপরাধ। কোনো মধ্যস্বত্বভোগী অনুদানের সম্পদ দেওয়ার নামে অর্থ দাবি করলে সাথে সাথে ইউএনও বা ৯৯৯ এ কল দিন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-dss-beggar-rehabilitation-grant';
DELETE FROM service_documents WHERE service_id = 'bd-dss-beggar-rehabilitation-grant';
DELETE FROM service_steps WHERE service_id = 'bd-dss-beggar-rehabilitation-grant';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 'পুনর্বাসন অনুদান আবেদন ফি', 0.0, 1, 'সম্পূর্ণ বিনামূল্যে (০ টাকা)', 'সম্পূর্ণ ফ্রি সরকারি সহায়তা।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 'ইউনিয়ন পরিষদ চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের প্রত্যয়নপত্র', 1, 0, 'সিলযুক্ত সনদ', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 'ভিক্ষাবৃত্তি ছেড়ে বিকল্প কাজ করার লিখিত অঙ্গীকারনামা', 1, 0, 'টিপসই/স্বাক্ষরিত অঙ্গীকার', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 1, 'ইউএনও বা উপজেলা সমাজসেবা অফিসারের কাছে আবেদন', 'উপজেলা ভিক্ষুক পুনর্বাসন কমিটির সভাপতি (ইউএনও) বরাবর কী ধরণের বিকল্প কাজ করতে চান তা উল্লেখ করে আবেদন করুন।', NULL, 'দালাল ছাড়াই সরাসরি ইউএনও অফিসে যান।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 2, 'কমিটি কর্তৃক সরেজমিন যাচাই ও প্যাকেজ অনুমোদন', 'কমিটি যাচাই করে আবেদনকারীকে গরু, ভ্যানগাড়ি বা মুদি দোকানের সামগ্রী ক্রয়ের অনুমোদন দেবে।', NULL, 'নগদ টাকার বদলে সরাসরি মালামাল কিনে দেওয়া হয় যাতে অপব্যবহার না হয়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-dss-beggar-rehabilitation-grant', 3, 'আনুষ্ঠানিকভাবে মালামাল ও সনদপত্র হস্তান্তর', 'জেলা প্রশাসক বা ইউএনও আনুষ্ঠানিকভাবে কৃষিজীবী বা ব্যবসায়িক সামগ্রী তুলে দেবেন যাতে পরিবারটি স্বাবলম্বী হতে পারে।', NULL, NULL);
            

-- Service: জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা (bd-nha-govt-flat-plot-allotment)

        INSERT INTO services (
            service_id, title_bn, title_en, category, sub_category, 
            department_agency, summary, processing_time_sla, 
            official_portal_url, application_url, citizen_charter_url, 
            anti_broker_warning, grievance_remedy, source_platform, updated_at
        ) VALUES (
            'bd-nha-govt-flat-plot-allotment', 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা', 'National Housing Authority NHA Govt Flat & Plot Allotment Official Guide', 
            'আবাসন ও নগর উন্নয়ন', NULL, 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়', 
            'মধ্যবিত্ত, নিম্নবিত্ত ও সরকারি কর্মচারীদের জন্য সরকার জাতীয় গৃহায়ন কর্তৃপক্ষের মাধ্যমে সাশ্রয়ী মূল্যে প্লট ও ফ্ল্যাট বরাদ্দ দেয়। গৃহায়নের লটারি ও বরাদ্দের নামে বাইরে সংঘবদ্ধ দালাল চক্র কোটি কোটি টাকা প্রতারণা করে। প্রকৃতপক্ষে সমস্ত বরাদ্দ অফিশিয়াল বিজ্ঞপ্তির মাধ্যমে সোনালী ব্যাংকে চালানের ফি জমা দিয়ে ডিজিটাল লটারিতে সম্পূর্ণ স্বচ্ছভাবে সম্পন্ন হয়।', 'বিজ্ঞপ্তি সাপেক্ষে ডিজিটাল লটারি ও কিস্তিভিত্তিক হস্তান্তর', 
            'https://nha.gov.bd', 'https://nha.gov.bd', 
            'https://mohpw.gov.bd', 'সতর্কতা: গৃহায়ন কর্তৃপক্ষ বা রাজউকের কোনো কর্মচারী বা দালাল যদি বলে লটারি ছাড়াই গোপনে প্লট পাইয়ে দেবে—সেটি সম্পূর্ণ জালিয়াতি। কোনো প্রতারককে টাকা দেবেন না, সরাসরি চেয়ারম্যান এনএইচএ-র সাথে দেখা করুন।', 
            NULL, 'services.portal.gov.bd', CURRENT_TIMESTAMP
        )
        ON CONFLICT(service_id) DO UPDATE SET
            title_bn=excluded.title_bn,
            title_en=excluded.title_en,
            category=excluded.category,
            department_agency=excluded.department_agency,
            summary=excluded.summary,
            processing_time_sla=excluded.processing_time_sla,
            official_portal_url=excluded.official_portal_url,
            application_url=excluded.application_url,
            citizen_charter_url=excluded.citizen_charter_url,
            anti_broker_warning=excluded.anti_broker_warning,
            grievance_remedy=excluded.grievance_remedy,
            updated_at=CURRENT_TIMESTAMP;
        
DELETE FROM service_fees WHERE service_id = 'bd-nha-govt-flat-plot-allotment';
DELETE FROM service_documents WHERE service_id = 'bd-nha-govt-flat-plot-allotment';
DELETE FROM service_steps WHERE service_id = 'bd-nha-govt-flat-plot-allotment';

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'প্লট / ফ্ল্যাট আবেদন ফরম ও প্রসপেক্টাস ফি', 1000.0, 1, 'অনুমোদিত ব্যাংকে পে-অর্ডার / চালান', 'প্রকল্প অনুযায়ী ১,০০০ থেকে ২,০০০ টাকা।');
            

            INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'প্রাথমিক জামানত (Earnest Money Deposit)', 50000.0, 1, 'ব্যাংক পে-অর্ডার (অফেরতযোগ্য নয়, লটারিতে না পেলে ফেরতযোগ্য)', 'ফ্ল্যাট অনুযায়ী ৫০,০০০ থেকে ২,০০,০০০ টাকা জামানত।');
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'আবেদনকারী ও স্বামীর/স্ত্রীর জাতীয় পরিচয়পত্র (NID) ও ছবি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'আবেদনকারী বা পরিবারের ঢাকায় অন্য কোনো সরকারি প্লট নেই মর্মে নোটারি এফিডেভিট', 1, 0, '৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্প', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'ই-টিন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন জমার কপি', 1, 0, 'ফটোকপি', NULL);
            

            INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain)
            VALUES ('bd-nha-govt-flat-plot-allotment', 'ব্যাংক ড্রাফট বা পে-অর্ডারের মূল কপি', 1, 0, 'মূল পে-অর্ডার', NULL);
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nha-govt-flat-plot-allotment', 1, 'গৃহায়ন কর্তৃপক্ষের বিজ্ঞপ্তি দেখে ব্যাংকে আবেদন দাখিল', 'গৃহায়নের ওয়েবসাইটে (https://nha.gov.bd) প্রকাশিত বিজ্ঞপ্তি অনুযায়ী সোনালী ব্যাংকে জামানতের পে-অর্ডারসহ আবেদন জমা দিন।', 'https://nha.gov.bd', 'কোনো দালালকে টাকা দিয়ে প্লট পাওয়ার কোনো সুযোগ নেই।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nha-govt-flat-plot-allotment', 2, 'উন্মুক্ত ডিজিটাল লটারির মাধ্যমে বরাদ্দ', 'আবেদনকারীদের উপস্থিতিতে ও সিসিটিভি ক্যামেরার সামনে সফটওয়্যারের মাধ্যমে ডিজিটাল লটারি অনুষ্ঠিত হয়।', NULL, 'লটারিতে নাম না এলে ব্যাংকের পে-অর্ডার সম্পূর্ণ ফেরত পাওয়া যায়।');
            

            INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips)
            VALUES ('bd-nha-govt-flat-plot-allotment', 3, 'বরাদ্দপত্র ও কিস্তিতে মূল্য পরিশোধ', 'লটারিতে নির্বাচিত হলে আনুষ্ঠানিক বরাদ্দপত্র ইস্যু করা হবে এবং সহজ কিস্তিতে টাকা দিয়ে ফ্ল্যাটের চাবি বুঝে নেওয়া যাবে।', NULL, NULL);
            

