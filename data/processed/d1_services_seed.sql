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
            

