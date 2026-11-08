INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-national-999', 'national_emergency', 'police_fire_ambulance', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'জাতীয় জরুরি সেবা ৯৯৯ (National Emergency Service)', 'National Emergency Service 999', 
            'পুলিশি সহায়তা, ফায়ার সার্ভিস ও অ্যাম্বুলেন্স জরুরি কল', '999', '999', 
            '999', '০১৭৬৯-৬৯০০০০ (ডিজিটাল রেসপন্স সেল)', 
            'help@999.gov.bd', 'পুলিশ হেডকোয়ার্টার্স ও আইসিটি সেল, আব্দুল গণি রোড, ঢাকা', 'https://999.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 1, 
            'যেকোনো মোবাইল বা ল্যান্ডফোন থেকে সম্পূর্ণ ফ্রিতে ৯৯৯ ডায়াল করে আপনার অবস্থান, ঘটনার ধরন (মারামারি, চুরি, আগুন, সড়ক দুর্ঘটনা বা রোগী পরিবহন) স্পষ্টভাবে বলুন। তাৎক্ষণিক নিকটস্থ থানা বা ফায়ার স্টেশনে কল ফরোয়ার্ড করা হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-national-333', 'national_emergency', 'citizen_services', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'জাতীয় তথ্য ও সেবা বাতায়ন ৩৩৩ (National Citizen Helpline)', 'National Citizen Service 333', 
            'সরকারি সেবার তথ্য, কর্মকর্তা তথ্য, ভেজাল বিরোধী অভিযোগ ও ত্রাণ সহায়তা', '333', '333', 
            '333', 'এটুআই (a2i) পলিসি ইনোভেশন ল্যাব', 
            'info@333.gov.bd', 'আইসিটি টাওয়ার, আগারগাঁও, ঢাকা', 'https://bangladesh.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            '৩৩৩ ডায়াল করে সরকারি কর্মকর্তা, ই-নামজারি, জন্মনিবন্ধন, পাসপোর্টসহ যে কোনো নাগরিক সেবার তথ্য এবং বাল্যবিয়ে বা খাদ্যে ভেজালের বিরুদ্ধে সরাসরি অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-acc-106', 'national_emergency', 'anti_corruption', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'দুর্নীতি দমন কমিশন (দুদক) হটলাইন ১০৬', 'Anti-Corruption Commission (ACC) Hotline 106', 
            'সরকারি অফিসে ঘুষ দাবি, অর্থ আত্মসাৎ ও দুর্নীতির তাৎক্ষণিক অভিযোগ', '106', '106', 
            '106', '০২-২২২২৬১২০১ (দুদক প্রধান কার্যালয়)', 
            'info@acc.org.bd', 'দুদক ভবন, ১ সেগুনবাগিচা, ঢাকা-১০০০', 'https://acc.org.bd', 
            'সকাল ৯:০০ থেকে বিকাল ৫:০০ (সরকারি কার্যদিবস)', 1, 
            'সরকারি কোনো কর্মকর্তা বা কর্মচারী সরাসরি বা মধ্যস্বত্বভোগীর মাধ্যমে ঘুষ দাবি করলে বা দুর্নীতি করলে সম্পূর্ণ টোল-ফ্রি ১০৬ নম্বরে কল করে বিবরণ দিন। তথ্য প্রদানকারীর পরিচয় কঠোরভাবে গোপন রাখা হয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-women-children-109', 'national_emergency', 'protection', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন ১০৯', 'National Helpline Centre for Violence Against Women and Children 109', 
            'পারিবারিক সহিংসতা, ইভটিজিং, ধর্ষণ ও বাল্যবিয়ে প্রতিরোধে তাৎক্ষণিক উদ্ধার', '109', '109', 
            '109', 'মহিলা ও শিশু বিষয়ক মন্ত্রণালয় সেল', 
            'helpdesk@nhc.gov.bd', 'মহিলা বিষয়ক অধিদপ্তর ভবন, ইস্কাটন গার্ডেন রোড, ঢাকা', 'https://nhc.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 1, 
            '১০৯ সম্পূর্ণ টোল-ফ্রি নম্বর। নারী বা শিশু যে কোনো নির্যাতনের শিকার হলে বা বাল্যবিয়ের খবর পেলে কল করুন। স্থানীয় প্রশাসন ও পুলিশ তাৎক্ষণিক ঘটনাস্থলে উপস্থিত হয়ে ভুক্তভোগীকে সুরক্ষা দেয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-child-1098', 'national_emergency', 'child_protection', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'চাইল্ড হেল্পলাইন ১০৯৮ (Child Helpline 1098)', 'National Child Helpline 1098', 
            'ঝুঁকিপূর্ণ শিশু, পথশিশু উদ্ধার, শিশুশ্রম ও শিশু নির্যাতন প্রতিকার', '1098', '1098', 
            '1098', 'সমাজসেবা অধিদপ্তর ও ইউনিসেফ সেল', 
            'info@childhelpline1098.gov.bd', 'সমাজসেবা ভবন, আগারগাঁও, ঢাকা', 'https://dss.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 1, 
            'কোনো শিশু ঝুঁকিতে থাকলে বা নিখোঁজ হলে ১০৯৮ নম্বরে বিনা পয়সায় ফোন করুন। সমাজকর্মী ও চাইল্ড প্রোটেকশন অফিসাররা দ্রুত ব্যবস্থা নেবেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-land-16122', 'national_emergency', 'land_services', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'ভূমি সেবা কাস্টমার কেয়ার ও কমপ্লেইন ১৬১২২', 'Land Ministry Citizen Helpline 16122', 
            'ই-নামজারি, খাজনা, খতিয়ান ও এসি ল্যান্ড অফিসের ঘুষ-হয়রানি প্রতিকার', '16122', '16122, 09612316122', 
            '16122', 'ভূমি সংস্কার বোর্ড কল সেন্টার', 
            'info@land.gov.bd', 'ভূমি ভবন, ৭/এ তেজগাঁও শিল্প এলাকা, ঢাকা', 'https://land.gov.bd', 
            'সকাল ৭:০০ থেকে রাত ১০:০০ (প্রতিদিন)', 0, 
            'ভূমি অফিসে বা ভূমি সহকারী কর্মকর্তার বিরুদ্ধে অতিরিক্ত টাকা দাবি বা আবেদন আটকে রাখার অভিযোগ ১৬১২২ নম্বরে সরাসরি রেকর্ড করান। অভিযোগ নম্বর সহ ঊর্ধ্বতন কর্তৃপক্ষ বরাবর তদন্ত পাঠানো হয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-legal-aid-16430', 'national_emergency', 'free_legal_aid', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) হেল্পলাইন ১৬৪৩০', 'National Legal Aid Services Helpline 16430', 
            'অসচ্ছল নাগরিকদের সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও মামলা পরিচালনা', '16430', '16430', 
            '16430', 'আইন ও বিচার বিভাগ লিগ্যাল এইড অফিসার', 
            'legalaid@nlaso.gov.bd', '১৪৫ বেইলি রোড, অফিসার্স ক্লাবের পাশে, ঢাকা', 'https://nlaso.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 1, 
            'টোল-ফ্রি ১৬৪৩০ নম্বরে কল করে আইনি পরামর্শ নিন। জেলা জজ আদালতে বিনা খরচে আইনজীবী নিয়োগ ও মামলা লড়ার ফর্ম ও নির্দেশনা পাবেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-health-shastho-batayon-16121', 'national_emergency', 'telemedicine', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'স্বাস্থ্য বাতায়ন ১৬১২১ (Shastho Batayon 24/7 Doctor)', 'National Health Call Center 16121', 
            '২৪ ঘণ্টা রেজিস্টার্ড এমবিবিএস ডাক্তারের বিনামূল্যে জরুরি চিকিৎসা পরামর্শ', '16121', '16121', 
            '16121', 'স্বাস্থ্য অধিদপ্তর (MIS-DGHS)', 
            'info@dghs.gov.bd', 'স্বাস্থ্য ভবন, মহাখালী, ঢাকা', 'https://16121.dghs.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি কোনো শারীরিক সমস্যা বা প্রেসক্রিপশনের তথ্যের জন্য ১৬১২১ কল করলে মুহূর্তের মধ্যে কল ডাক্তারের কাছে স্থানান্তরিত হয় এবং এসএমএস-এ চিকিৎসকের পরামর্শ পৌঁছে যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-probashi-kallyan-16135', 'national_emergency', 'expatriate_welfare', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'প্রবাসী কল্যাণ ওয়েজ আর্নার্স বোর্ড ১৬১৩৫', 'Probashi Kallyan Expatriate Helpline 16135', 
            'বিদেশে আটকে পড়া প্রবাসী উদ্ধার, মৃতদেহ পরিবহন ও ক্ষতিপূরণ সহায়তা', '16135', '16135, 09612316135', 
            '16135', 'ওয়েজ আর্নার্স কল্যাণ বোর্ড মহাপরিচালক শাখা', 
            'welfare@wewb.gov.bd', 'প্রবাসী কল্যাণ ভবন, ইস্কাটন গার্ডেন রোড, ঢাকা', 'https://wewb.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বিদেশে কর্মী নির্যাতনের শিকার হলে বা বেতন না পেলে অথবা প্রবাসীর মরদেহ দেশে আনতে ১৬১৩৫ নম্বরে বা বিদেশ থেকে +৮৮০৯৬১২৩১৬১৩৫ নম্বরে কল করে অভিযোগ রেকর্ড করান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'helpline-consumer-rights-16121-dncrp', 'national_emergency', 'consumer_rights', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর ১৬১২১', 'Directorate of National Consumer Rights Protection (DNCRP)', 
            'দোকানে অতিরিক্ত দাম নেওয়া, মেয়াদোত্তীর্ণ পণ্য বিক্রি ও ওজনে কম দেওয়া', '16121', '16121, 01777-753668', 
            '০২-৪১০৩০০২৭', 'মহাপরিচালক সেল (ডিএনসিআরপি)', 
            'dncrp.helpdesk@gmail.com', '১ কারওয়ান বাজার, টিসিবি ভবন (৮ম তলা), ঢাকা', 'https://dncrp.portal.gov.bd', 
            'সকাল ৯:০০ থেকে বিকাল ৫:০০', 0, 
            'প্রতারিত ক্রেতা ক্রয়ের ৩০ দিনের মধ্যে রসিদের ছবিসহ অভিযোগ করলে এবং অভিযোগ প্রমাণিত হলে অভিযুক্ত ব্যবসায়ীর জরিমানার ২৫% অর্থ অভিযোগকারী সরাসরি নগদ পুরস্কার পান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-control-hq-dhaka', 'fire_service', 'headquarters_control', 
            'ঢাকা', 'ঢাকা', 'বংশাল / ফুলবাড়িয়া', 
            'ফায়ার সার্ভিস ও সিভিল ডিফেন্স কেন্দ্রীয় নিয়ন্ত্রণ কক্ষ (হেডকোয়ার্টার্স)', 'Fire Service and Civil Defence HQ Central Control Room', 
            'সারাদেশের অগ্নিকাণ্ড, উদ্ধার অভিযান ও ডুবুরি দলের কেন্দ্রীয় সমন্বয়', '16163', '16163, 02-223355555, 01730-336699, 01905-555555', 
            '০১৭৩০-৩৩৬৬৯৯', '০২-২২৩৩৮৫৯২৩ (পরিচালক অপারেশন)', 
            'controlroom@fireservice.gov.bd', 'কাজী আলাউদ্দিন রোড, ফুলবাড়িয়া, বংশাল, ঢাকা-১০০০', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আগুনের ঘটনা ঘটার সাথে সাথে ১৬১৬৩ বা ০১৭৩০৩৩৬৬৯৯ নম্বরে ফোন করে সঠিক ঠিকানা, আগুনের মাত্রা এবং আটকে পড়া মানুষের অবস্থান জানান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-dhaka-tejgaon', 'fire_service', 'divisional_station', 
            'ঢাকা', 'ঢাকা', 'তেজগাঁও', 
            'তেজগাঁও ফায়ার স্টেশন (ঢাকা উত্তর বিভাগীয় সদর)', 'Tejgaon Fire Station Dhaka', 
            'শিল্পাঞ্চল, গুলশান, বনানী, মহাখালী ও কারওয়ান বাজার এলাকার অগ্নি নির্বাপণ', '16163', '02-8870111, 01730-002223', 
            '০১৭৩০-০০২২২৩', 'স্টেশন অফিসার তেজগাঁও', 
            'tejgaon.fire@fireservice.gov.bd', 'তেজগাঁও শিল্প এলাকা, লিঙ্ক রোড, ঢাকা', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি অগ্নিনির্বাপণ ও উদ্ধার কাজের জন্য সরাসরি তেজগাঁও কন্ট্রোল নম্বরে কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-dhaka-mirpur', 'fire_service', 'regional_station', 
            'ঢাকা', 'ঢাকা', 'মিরপুর', 
            'মিরপুর ফায়ার স্টেশন ও ট্রেনিং কমপ্লেক্স', 'Mirpur Fire Station Dhaka', 
            'মিরপুর, পল্লবী, রূপনগর, কাফরুল ও কল্যাণপুর এলাকার জরুরি উদ্ধার ও ফায়ার সার্ভিস', '16163', '02-9001055, 01730-002226', 
            '০১৭৩০-০০২২২৬', 'সিনিয়র স্টেশন অফিসার মিরপুর', 
            'mirpur.fire@fireservice.gov.bd', 'মিরপুর সেকশন-১০, গোলচত্বর সংলগ্ন, ঢাকা', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'মিরপুর অঞ্চলের অগ্নিকাণ্ড ও ভবন ধসের জরুরি উদ্ধারে তাৎক্ষণিক যোগাযোগ করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-dhaka-baridhara', 'fire_service', 'regional_station', 
            'ঢাকা', 'ঢাকা', 'গুলশান / বারিধারা', 
            'বারিধারা ফায়ার স্টেশন', 'Baridhara Fire Station', 
            'বারিধারা, গুলশান, বাড্ডা, বসুন্ধরা ও ভাটারা এলাকার জরুরি রেসকিউ', '16163', '02-9882233, 01730-002231', 
            '০১৭৩০-০০২২৩১', 'স্টেশন অফিসার বারিধারা', 
            'baridhara.fire@fireservice.gov.bd', 'প্রগতি সরণি, বারিধারা ব্লক-জে, ঢাকা', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কূটনৈতিক এলাকা ও বসুন্ধরা সংলগ্ন অঞ্চলের জরুরি ফায়ার সার্ভিস কল।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-chittagong-agrabad-divisional', 'fire_service', 'divisional_station', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'ডবলমুরিং / আগ্রাবাদ', 
            'আগ্রাবাদ ফায়ার স্টেশন (চট্টগ্রাম বিভাগীয় নিয়ন্ত্রণ কক্ষ)', 'Agrabad Fire Station Chittagong Divisional Control Room', 
            'চট্টগ্রাম বন্দর, ইপিজেড ও বৃহত্তর চট্টগ্রাম অঞ্চলের জরুরি অগ্নিনির্বাপণ', '16163', '031-716326, 031-716327, 01730-336666', 
            '০১৭৩০-৩৩৬৬৬৬', '০৩১-২৫১৪৪৩১ (উপ-পরিচালক চট্টগ্রাম)', 
            'ctgcontrol@fireservice.gov.bd', 'আগ্রাবাদ বাণিজ্যিক এলাকা, ডবলমুরিং, চট্টগ্রাম', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চট্টগ্রাম মহানগর ও শিল্পাঞ্চলের যে কোনো অগ্নিকাণ্ডে আগ্রাবাদ কন্ট্রোল রুমে ডায়াল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-rajshahi-divisional', 'fire_service', 'divisional_station', 
            'রাজশাহী', 'রাজশাহী', 'বোয়ালিয়া সদর', 
            'রাজশাহী সদর ফায়ার স্টেশন (বিভাগীয় নিয়ন্ত্রণ কক্ষ)', 'Rajshahi Sadar Fire Station Divisional Control Room', 
            'রাজশাহী মহানগর ও পদ্মা নদী অববাহিকার উদ্ধার কার্যক্রম ও ফায়ার সার্ভিস', '16163', '0721-774444, 01730-336677', 
            '০১৭৩০-৩৩৬৬৭৭', 'উপ-পরিচালক রাজশাহী বিভাগ', 
            'rajshahicontrol@fireservice.gov.bd', 'কাদিরগঞ্জ, বোয়ালিয়া, রাজশাহী', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রাজশাহী বিভাগের জরুরি অগ্নিনির্বাপণ ও নদী উদ্ধার দলের জন্য যোগাযোগ করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-khulna-divisional', 'fire_service', 'divisional_station', 
            'খুলনা', 'খুলনা', 'খালিশপুর / বয়রা', 
            'বয়রা ফায়ার স্টেশন (খুলনা বিভাগীয় নিয়ন্ত্রণ কক্ষ)', 'Boyra Fire Station Khulna Divisional Control', 
            'খুলনা মহানগর, মোংলা বন্দর ও রূপসা শিল্পাঞ্চল রেসকিউ অপারেশন', '16163', '041-760333, 01730-336688', 
            '০১৭৩০-৩৩৬৬৮৮', 'উপ-পরিচালক খুলনা', 
            'khulnacontrol@fireservice.gov.bd', 'বয়রা প্রধান সড়ক, সোনাডাঙ্গা, খুলনা', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'খুলনা অঞ্চলের শিল্পাঞ্চল ও আবাসিক অগ্নিকাণ্ডে কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'fire-sylhet-divisional', 'fire_service', 'divisional_station', 
            'সিলেট', 'সিলেট', 'কোতোয়ালি / তালতলা', 
            'সিলেট সদর ফায়ার স্টেশন (তালতলা বিভাগীয় কন্ট্রোল রুম)', 'Sylhet Sadar Taltola Fire Station Divisional Control', 
            'সিলেট মহানগর ও পাহাড়ি নদী ঢল উদ্ধার কার্যক্রম', '16163', '0821-714999, 01730-336655', 
            '০১৭৩০-৩৩৬৬৫৫', 'উপ-পরিচালক সিলেট', 
            'sylhetcontrol@fireservice.gov.bd', 'তালতলা, কোতোয়ালি, সিলেট-৩১০০', 'https://fireservice.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'সিলেট মহানগরীর জরুরি অগ্নিকাণ্ড ও বন্যায় আটকে পড়া উদ্ধারে কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-gulshan', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'গুলশান', 
            'গুলশান থানা (ডিএমপি)', 'Gulshan Police Station (DMP)', 
            'গুলশান ১ ও ২, কূটনৈতিক জোন ও সংলগ্ন এলাকার আইনশৃঙ্খলা ও জিডি', '999', '01713-373167, 02-9883333, 02-9882222', 
            '০১৭১৩-৩৭৩১৭৩', '০১৭১৩-৩৭৩১৬৭ (ওসি গুলশান)', 
            'ocgulshan@dmp.gov.bd', 'প্লট-১, রোড-৭৯, গুলশান-২, ঢাকা-১২১২', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি কোনো ঘটনায় ডিউটি অফিসারকে (০১৭১৩-৩৭৩১৭৩) অবিলম্বে কল করুন। জিডি বা মামলা দায়েরে কোনো পুলিশ সদস্য টাকা দাবি করলে ডিসি গুলশান কার্যালয়ে (০১৭১৩-৩৭৩১৫৫) জানান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-banani', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'বনানী', 
            'বনানী থানা (ডিএমপি)', 'Banani Police Station (DMP)', 
            'বনানী ও চেয়ারম্যানবাড়ি এলাকার আইনশৃঙ্খলা, জিডি ও মামলা', '999', '01713-373168, 02-9833555', 
            '০১৭১৩-৩৭৩১৭৪', '০১৭১৩-৩৭৩১৬৮ (ওসি বনানী)', 
            'ocbanani@dmp.gov.bd', 'রোড-২৭, ব্লক-কে, বনানী, ঢাকা-১২১৩', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বনানী থানা এলাকার যে কোনো জরুরি আইনি সুরক্ষায় ডিউটি অফিসারের নম্বরে যোগাযোগ করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-dhanmondi', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ধানমন্ডি', 
            'ধানমন্ডি থানা (ডিএমপি)', 'Dhanmondi Police Station (DMP)', 
            'ধানমন্ডি লেক, আবাসিক এলাকা ও শিক্ষা প্রতিষ্ঠানের আইনশৃঙ্খলা রক্ষা', '999', '01713-373126, 02-9667777', 
            '০১৭১৩-৩৭৩১৩১', '০১৭১৩-৩৭৩১২৬ (ওসি ধানমন্ডি)', 
            'ocdhanmondi@dmp.gov.bd', 'রোড-৬, ধানমন্ডি আবাসিক এলাকা, ঢাকা-১২০৫', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ধানমন্ডি থানায় জিডি করতে কোনো ফি লাগে না। প্রয়োজনে ডিউটি অফিসারকে (০১৭১৩-৩৭৩১৩১) কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-uttara-west', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'উত্তরা', 
            'উত্তরা পশ্চিম থানা (ডিএমপি)', 'Uttara West Police Station (DMP)', 
            'উত্তরা ৩, ৫, ৭, ৯, ১১, ১৩, ১৪ নম্বর সেক্টরের আইনশৃঙ্খলা ও জিডি', '999', '01713-373157, 02-8957777', 
            '০১৭১৩-৩৭৩১৭০', '০১৭১৩-৩৭৩১৫৭ (ওসি উত্তরা পশ্চিম)', 
            'ocuttarawest@dmp.gov.bd', 'সেক্টর-৩, রবীন্দ্র সরণি, উত্তরা, ঢাকা-১২৩০', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'উত্তরা পশ্চিম সেক্টরসমূহের বাসিন্দা ডিউটি অফিসার নম্বরে সার্বক্ষণিক সহায়তা পাবেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-uttara-east', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'উত্তরা', 
            'উত্তরা পূর্ব থানা (ডিএমপি)', 'Uttara East Police Station (DMP)', 
            'উত্তরা ১, ৪, ৬, ৮ নম্বর সেক্টর, আজমপুর ও জসিমউদ্দীন এলাকা', '999', '01713-373156, 02-8913333', 
            '০১৭১৩-৩৭৩১৬৯', '০১৭১৩-৩৭৩১৫৬ (ওসি উত্তরা পূর্ব)', 
            'ocuttaraeast@dmp.gov.bd', 'সেক্টর-৪, রোড-৩, উত্তরা, ঢাকা-১২৩০', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'উত্তরা পূর্ব থানার ডিউটি অফিসার সার্বক্ষণিক ২৪ ঘণ্টা প্রস্তুত থাকেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-mirpur-model', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'মিরপুর', 
            'মিরপুর মডেল থানা (ডিএমপি)', 'Mirpur Model Police Station (DMP)', 
            'মিরপুর ১, ২, ১০ গোলচত্বর ও স্টেডিয়াম সংলগ্ন এলাকার আইনশৃঙ্খলা', '999', '01713-373147, 02-9002222', 
            '০১৭১৩-৩৭৩১৫১', '০১৭১৩-৩৭৩১৪৭ (ওসি মিরপুর মডেল)', 
            'ocmirpur@dmp.gov.bd', 'মিরপুর সেকশন-২, রোড-১, মিরপুর, ঢাকা-১২১৬', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'মিরপুর মডেল এলাকার যে কোনো জরুরি অপরাধ নিয়ন্ত্রণে ডিউটি অফিসারকে (০১৭১৩-৩৭৩১৫১) জানান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-shahbag', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'শাহবাগ', 
            'শাহবাগ থানা (ডিএমপি)', 'Shahbagh Police Station (DMP)', 
            'ঢাকা বিশ্ববিদ্যালয়, বিএসএমএমইউ (পিজি), বারডেম, কেন্দ্রীয় শহীদ মিনার ও প্রেসক্লাব এলাকা', '999', '01713-373127, 02-9671111', 
            '০১৭১৩-৩৭৩১৩২', '০১৭১৩-৩৭৩১২৭ (ওসি শাহবাগ)', 
            'ocshahbagh@dmp.gov.bd', 'শাহবাগ গোলচত্বর সংলগ্ন (বিএসএমএমইউ এর বিপরীতে), ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'মেডিকেল ও বিশ্ববিদ্যালয় এলাকার যে কোনো সংকট বা জরুরি আইনগত সহায়তায় যোগাযোগ করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-motijheel', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'মতিঝিল', 
            'মতিঝিল থানা (ডিএমপি)', 'Motijheel Police Station (DMP)', 
            'মতিঝিল বাণিজ্যিক এলাকা, শাপলা চত্বর, দিলকুশা ও বাংলাদেশ ব্যাংক অঞ্চল', '999', '01713-373136, 02-9556666', 
            '০১৭১৩-৩৭৩১৪১', '০১৭১৩-৩৭৩১৩৬ (ওসি মতিঝিল)', 
            'ocmotijheel@dmp.gov.bd', 'মতিঝিল সি/এ, ঢাকা-১০০০', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ব্যাংক পাড়া ও মতিঝিল এলাকার আর্থিক জালিয়াতি বা ছিনতাই প্রতিরোধে সার্বক্ষণিক সাহায্য পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-mohammadpur', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'মোহাম্মদপুর', 
            'মোহাম্মদপুর থানা (ডিএমপি)', 'Mohammadpur Police Station (DMP)', 
            'মোহাম্মদপুর, বসিলা, টাউনহল, রিং রোড ও তাজমহল রোড এলাকা', '999', '01713-373182, 02-9119999', 
            '০১৭১৩-৩৭৩১৮৬', '০১৭১৩-৩৭৩১৮২ (ওসি মোহাম্মদপুর)', 
            'ocmohammadpur@dmp.gov.bd', 'আসাদ এভিনিউ, মোহাম্মদপুর, ঢাকা-১২০৭', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'মোহাম্মদপুর ও বসিলা সংলগ্ন যে কোনো ছিনতাই ও কিশোর গ্যাং প্রতিরোধে ডিউটি অফিসারে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-kotwali-ctg', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'কোতোয়ালি', 
            'কোতোয়ালি থানা (সিএমপি চট্টগ্রাম)', 'Kotwali Police Station (CMP)', 
            'চট্টগ্রাম নিউমার্কেট, আন্দরকিল্লা, লালদিঘি ও স্টেশন রোডের আইনশৃঙ্খলা', '999', '01713-373256, 031-619922', 
            '০১৭৬৯-৬৯০০৫১', '০১৭১৩-৩৭৩২৫৬ (ওসি কোতোয়ালি চট্টগ্রাম)', 
            'ockotwali@cmp.gov.bd', 'লালদিঘির পাড়, কোতোয়ালি, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চট্টগ্রাম মহানগরীর প্রধান বাণিজ্যিক এলাকার সার্বক্ষণিক পুলিশি সহায়তা।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-central', 'electricity', 'distribution_complaint', 
            'ঢাকা', 'ঢাকা ও নারায়ণগঞ্জ', 'ঢাকা দক্ষিণ ও নারায়ণগঞ্জ', 
            'ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি লিমিটেড (ডিপিডিসি)', 'Dhaka Power Distribution Company Limited (DPDC)', 
            'ঢাকা দক্ষিণ (মতিঝিল, ধানমন্ডি, লালবাগ, আজিমপুর) ও নারায়ণগঞ্জে বিদ্যুৎ বিভ্রাট অভিযোগ', '16116', '16116, 01730-320202, 02-9563523', 
            '০১৭৩০-৩২০২০২', 'ব্যবস্থাপনা পরিচালক সেল (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'বিদ্যুৎ ভবন, ১ আব্দুল গণি রোড, ঢাকা-১০০০', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডিপিডিসি এলাকায় বিদ্যুৎ চলে গেলে বা ট্রান্সফরমার নষ্ট হলে কল সেন্টারে ১৬১১৬ নম্বরে ডায়াল করুন এবং আপনার গ্রাহক নম্বর (Customer No) বলুন। তাৎক্ষণিক কমপ্লেইন টিকিট ও টেকনিশিয়ান টিম পাঠানো হয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-desco-central', 'electricity', 'distribution_complaint', 
            'ঢাকা', 'ঢাকা ও গাজীপুর', 'ঢাকা উত্তর ও টঙ্গী', 
            'ঢাকা ইলেকট্রিক সাপ্লাই কোম্পানি লিমিটেড (ডেসকো)', 'Dhaka Electric Supply Company Limited (DESCO)', 
            'ঢাকা উত্তর (মিরপুর, গুলশান, বনানী, উত্তরা, বারিধারা, বাড্ডা) ও টঙ্গী অঞ্চলের বিদ্যুৎ সরবরাহ', '16120', '16120, 01713-010000, 02-8900110', 
            '০১৭১৩-০১০০০০', 'ব্যবস্থাপনা পরিচালক সেল (ডেসকো)', 
            'info@desco.org.bd', '২২/বি কবি ফারুক সরণি, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা-১২২৯', 'https://desco.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেসকো এলাকায় লোডশেডিং, ফেজ মিসিং বা তার ছিঁড়ে গেলে ১৬১২০ নম্বরে ফোন দিয়ে অভিযোগ জানান। কল সেন্টার থেকে তাৎক্ষণিক ফিল্ড টিমকে অবগত করা হয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-breb-palli-bidyut', 'electricity', 'rural_electrification', 
            'সারাদেশ', 'সকল জেলা (৮০টি পল্লী বিদ্যুৎ সমিতি)', 'সকল গ্রামীণ উপজেলা', 
            'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (বিআরইবি / পল্লী বিদ্যুৎ সমিতি)', 'Bangladesh Rural Electrification Board (BREB)', 
            'দেশের সকল উপজেলা ও গ্রামে বিদ্যুৎ সরবরাহ, নতুন সংযোগ ও অভিযোগ নিষ্পত্তি', '16200', '16200, 02-8900331', 
            '16200', 'চেয়ারম্যান বিআরইবি', 
            'rebcomplaint@yahoo.com', 'বিআরইবি সদর দপ্তর, নিকুঞ্জ-২, খিলক্ষেত, ঢাকা', 'https://reb.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পল্লী বিদ্যুতের খুঁটি ভেঙে গেলে, অতিরিক্ত বিল আসলে বা বিদ্যুৎ বিভ্রাটে ১৬২০০ ডায়াল করুন অথবা সংশ্লিষ্ট জোনাল অফিসের (DGM Complaint) নাম্বারে অভিযোগ দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-wzpdcl-khulna-barishal', 'electricity', 'distribution_complaint', 
            'খুলনা ও বরিশাল', 'খুলনা, বরিশাল, যশোর, কুষ্টিয়া, ফরিদপুর', 'খুলনা ও বরিশাল শহর অঞ্চল', 
            'ওয়েস্ট জোন পাওয়ার ডিস্ট্রিবিউশন কোম্পানি লিমিটেড (ওজোপাডিকো / WZPDCL)', 'West Zone Power Distribution Company Limited (WZPDCL)', 
            'খুলনা ও বরিশাল বিভাগের ২১টি জেলার শহর এলাকার বিদ্যুৎ বিতরণ ও কমপ্লেইন', '16117', '16117, 041-730484', 
            '16117', 'ব্যবস্থাপনা পরিচালক ওজোপাডিকো', 
            'complaint@wzpdcl.org.bd', 'বিদ্যুৎ ভবন, বয়রা প্রধান সড়ক, খুলনা-৯০০০', 'https://wzpdcl.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'খুলনা ও বরিশাল নগরীর বিদ্যুৎ সমস্যায় ১৬১১৭ নম্বরে গ্রাহক অ্যাকাউন্ট নম্বর সহ অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-nesco-rajshahi-rangpur', 'electricity', 'distribution_complaint', 
            'রাজশাহী ও রংপুর', 'রাজশাহী, রংপুর, বগুড়া, দিনাজপুর, পাবনা', 'রাজশাহী ও রংপুর নগর অঞ্চল', 
            'নর্দার্ন ইলেকট্রিসিটি সাপ্লাই কোম্পানি লিমিটেড (নেসকো / NESCO)', 'Northern Electricity Supply Company Limited (NESCO)', 
            'উত্তরবঙ্গের ১৬টি জেলার সকল শহর এলাকায় বিদ্যুৎ বিতরণ ও অভিযোগ গ্রহণ', '16603', '16603, 0721-772183', 
            '16603', 'ব্যবস্থাপনা পরিচালক নেসকো', 
            'complaint@nesco.gov.bd', 'বিদ্যুৎ ভবন, হেতেম খাঁ, রাজশাহী-৬০০০', 'https://nesco.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রাজশাহী ও রংপুর বিভাগের বিদ্যুৎ বিভ্রাট সংক্রান্ত যেকোনো সমস্যার তাত্ক্ষণিক সমাধানের জন্য ১৬৬০৩ এ কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'gas-titas-emergency-dhaka', 'gas', 'leak_emergency_complaint', 
            'ঢাকা ও ময়মনসিংহ', 'ঢাকা, গাজীপুর, নারায়ণগঞ্জ, নরসিংদী, মানিকগঞ্জ, ময়মনসিংহ', 'তিতাস আওতাধীন সকল এলাকা', 
            'তিতাস গ্যাস ট্রান্সমিশন অ্যান্ড ডিস্ট্রিবিউশন কোম্পানি লিমিটেড (TGTDCL)', 'Titas Gas Transmission and Distribution Company Limited', 
            'গ্যাস লিকেজ, বিস্ফোরণ ঝুঁকি, পাইপলাইন ফেটে যাওয়া ও কম প্রেসার অভিযোগ', '16496', '16496, 02-223388888, 01787-687890, 01730-075300', 
            '০১৭৮৭-৬৮৭৮৯০ (জরুরি গ্যাস লিকেজ কন্ট্রোল)', '০২-২২৩৩৮৮৮৮৮ (সেন্ট্রাল কন্ট্রোল রুম)', 
            'md@titasgas.org.bd', '১০৫ কাজী নজরুল ইসলাম এভিনিউ, কারওয়ান বাজার, ঢাকা-১২১৫', 'https://titasgas.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রাস্তা বা বাসায় গ্যাসের তীব্র গন্ধ পেলে বা পাইপ ফেটে গেলে অবিলম্বে ১৬৪৯৬ অথবা জরুরি কন্ট্রোল রুম ০১৭৮৭৬৮৭৮৯০ / ০২২২৩৩৮৮৮৮৮ এ কল করুন। কোনো প্রকার ম্যাচ বা বৈদ্যুতিক সুইচ অন করবেন না।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'gas-bakhrabad-cumilla', 'gas', 'leak_emergency_complaint', 
            'চট্টগ্রাম', 'কুমিল্লা, নোয়াখালী, চাঁদপুর, ব্রাহ্মণবাড়িয়া, ফেনী, লক্ষ্মীপুর', 'বাখরাবাদ ফ্রাঞ্চাইজ এলাকা', 
            'বাখরাবাদ গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেড (BGDCL)', 'Bakhrabad Gas Distribution Company Limited', 
            'বৃহত্তর কুমিল্লা ও নোয়াখালী অঞ্চলের গ্যাস সরবরাহ ও জরুরি গ্যাস লিকেজ নিয়ন্ত্রণ', '16497', '16497, 081-68404, 01730-025400', 
            '০১৭৩০-০২৫৪০০', 'ব্যবস্থাপনা পরিচালক বাখরাবাদ', 
            'bgdcl@comsats.net.bd', 'চাপাপুর, কুমিল্লা-৩৫০০', 'https://bgdcl.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কুমিল্লা ও নোয়াখালী অঞ্চলে গ্যাস লিকেজের জন্য ১৬৪৯৭ এ সার্বক্ষণিক কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'gas-karnaphuli-chittagong', 'gas', 'leak_emergency_complaint', 
            'চট্টগ্রাম', 'চট্টগ্রাম ও কক্সবাজার', 'চট্টগ্রাম মহানগর ও জেলা', 
            'কর্ণফুলী গ্যাস ডিস্ট্রিবিউশন কোম্পানি লিমিটেড (KGDCL)', 'Karnaphuli Gas Distribution Company Limited', 
            'চট্টগ্রাম মহানগর, শিল্পাঞ্চল ও আবাসিক গ্যাস সরবরাহ ও লিকেজ নিয়ন্ত্রণ', '16499', '16499, 031-672303, 01730-038200', 
            '০১৭৩০-০৩৮২০০', 'মহাব্যবস্থাপক অপারেশন (কেজিডিসিএল)', 
            'info@kgdcl.gov.bd', '১৩৭/এ এম এম আলী রোড, দামপাড়া, চট্টগ্রাম', 'https://kgdcl.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চট্টগ্রাম এলাকায় গ্যাস লিকেজ হলে তাৎক্ষণিক ১৬৪৯৯ এ কল দিয়ে গ্যাসের মূল ভালভ বন্ধ রাখুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'gas-jalalabad-sylhet', 'gas', 'leak_emergency_complaint', 
            'সিলেট', 'সিলেট, মৌলভীবাজার, হবিগঞ্জ, সুনামগঞ্জ', 'সিলেট বিভাগ', 
            'জালালাবাদ গ্যাস ট্রান্সমিশন অ্যান্ড ডিস্ট্রিবিউশন সিস্টেম লিমিটেড (JGTDSL)', 'Jalalabad Gas Transmission and Distribution System Limited', 
            'সিলেট বিভাগের ৪টি জেলার আবাসিক ও সিএনজি গ্যাস লাইন জরুরি নিয়ন্ত্রণ', '16498', '16498, 0821-714023, 01730-043300', 
            '০১৭৩০-০৪৩৩০০', 'ব্যবস্থাপনা পরিচালক জালালাবাদ গ্যাস', 
            'jgtdsl@sylhet.net', 'গ্যাস ভবন, মেন্দিবাগ, সিলেট-৩১০০', 'https://jgtdsl.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'সিলেট অঞ্চলে গ্যাস পাইপলাইন ক্ষতিগ্রস্থ হলে ১৬৪৯৮ এ রিপোর্ট করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-dhaka-wasa-central', 'water_wasa', 'water_supply_leak', 
            'ঢাকা', 'ঢাকা ও নারায়ণগঞ্জ', 'ঢাকা ওয়াসা এমওডিএস জোন ১-১০', 
            'ঢাকা ওয়াসা (ওয়াসা লিংক ১৬১৬২ / Dhaka WASA)', 'Dhaka Water Supply and Sewerage Authority (Dhaka WASA)', 
            'ঢাকা মহানগরীতে পানির লাইন ফাটা, ময়লা পানি, পানির গাড়ি জরুরি সরবরাহ ও সুয়ারেজ জট', '16162', '16162, 09612-000162, 02-8189400', 
            '16162', 'ব্যবস্থাপনা পরিচালক সেল (ঢাকা ওয়াসা)', 
            'wasalink@dwasa.org.bd', 'ওয়াসা ভবন, ৯৮ কাজী নজরুল ইসলাম এভিনিউ, কারওয়ান বাজার, ঢাকা-১২১৫', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পানিতে দুর্গন্ধ আসলে বা পাইপলাইন ফেটে গেলে ১৬১৬২ ডায়াল করুন। জরুরি প্রয়োজনে ওয়াসার পানির গাড়ি (Water Tanker) রিকুইজিশন দিতেও এই নম্বরে যোগাযোগ করা যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-chittagong-wasa', 'water_wasa', 'water_supply_leak', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'চট্টগ্রাম মহানগর', 
            'চট্টগ্রাম ওয়াসা (সিওয়াসা / CWASA)', 'Chittagong Water Supply and Sewerage Authority (CWASA)', 
            'চট্টগ্রাম নগরীতে পানি সংকট, নোনা পানি ও সরবরাহ পাইপলাইন মেরামত', '16164', '16164, 031-632402, 01713-100200', 
            '16164', 'ব্যবস্থাপনা পরিচালক চট্টগ্রাম ওয়াসা', 
            'info@ctg-wasa.org.bd', 'ওয়াসা ভবন, দামপাড়া, চট্টগ্রাম-৪০০০', 'https://ctg-wasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চট্টগ্রাম শহরে পানির সংযোগ সমস্যা বা নতুন মিটারিংয়ের জন্য ১৬১৬৪ এ যোগাযোগ করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-rajshahi-wasa', 'water_wasa', 'water_supply_leak', 
            'রাজশাহী', 'রাজশাহী', 'রাজশাহী মহানগর', 
            'রাজশাহী ওয়াসা (RWASA)', 'Rajshahi Water Supply and Sewerage Authority', 
            'রাজশাহী শহরের গভীর নলকূপ ও পাইপলাইনে পরিশোধিত পানি সরবরাহ', '0721-772415', '0721-772415, 01711-889900', 
            '০৭২১-৭৭২৪১৫', 'ব্যবস্থাপনা পরিচালক রাজশাহী ওয়াসা', 
            'md@rajshahiwasa.gov.bd', 'উপশহর, সেক্টর-১, রাজশাহী-৬২০২', 'https://rajshahiwasa.gov.bd', 
            'সকাল ৮:০০ থেকে রাত ৮:০০', 0, 
            'পানি না উঠলে বা পাইপ লিক হলে ওয়াসার অভিযোগ কেন্দ্রে ফোন করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'telecom-btrc-hotline-100', 'telecom', 'telecom_regulator_complaint', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'বিটিআরসি কমপ্লেইন সেল ১০০ (BTRC Complaint Cell)', 'Bangladesh Telecommunication Regulatory Commission (BTRC)', 
            'সিম অপারেটরের প্রতারণা, অযাচিত ব্যালেন্স কাটা ও নেটওয়ার্ক সমস্যার সর্বোচ্চ বিচার', '100', '100', 
            '100', 'পরিচালক লিগ্যাল অ্যান্ড লাইসেন্সিং বিটিআরসি', 
            'complaint@btrc.gov.bd', 'আইইবি ভবন, রমনা, ঢাকা-১০০০', 'https://btrc.gov.bd', 
            'সকাল ৯:০০ থেকে বিকাল ৫:০০ (সরকারি দিন)', 1, 
            'সিম কোম্পানি আপনার সমস্যার সমাধান না করলে সম্পূর্ণ ফ্রি ১০০ নম্বরে কল করে বিটিআরসি বরাবর আনুষ্ঠানিক অভিযোগ দাখিল করুন। অপারেটরকে জবাবদিহি করতে বাধ্য করা হয়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'telecom-grameenphone-121', 'telecom', 'mobile_operator', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'গ্রামীণফোন কাস্টমার কেয়ার ১২১ (Grameenphone Helpline)', 'Grameenphone Customer Care 121', 
            'জিপি প্রিপেইড, পোস্টপেইড, স্কিটো, ইন্টারনেট ও হারানো সিম রিপ্লেসমেন্ট সহায়তা', '121', '121, 01700-100121, 01711-594588', 
            '121', '০১৭০০-১০০১২১ (অন্য অপারেটর বা ল্যান্ডলাইন থেকে)', 
            'info@grameenphone.com', 'জিপি হাউজ, বসুন্ধরা আবাসিক এলাকা, বারিধারা, ঢাকা-১২২৯', 'https://grameenphone.com', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জিপি নম্বর থেকে ১২১ ডায়াল করুন অথবা অন্য অপারেটর থেকে ০১৭০০-১০০১২১ এ কল করে এজেন্টের সাথে কথা বলে অভিযোগ নিবন্ধন করান।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'telecom-robi-airtel-121', 'telecom', 'mobile_operator', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'রবি ও এয়ারটেল কাস্টমার কেয়ার ১২১ (Robi Axiata Helpline)', 'Robi Axiata Customer Care 121', 
            'রবি ও এয়ারটেল সিম সেবা, ব্যালেন্স কাটার অভিযোগ ও রিচার্জ সহায়তা', '121', '121, 01819-400400, 01678-600786', 
            '121', '০১৮১৯-৪০০৪০০ (অন্য অপারেটর থেকে রবি), ৭৮৬ (এয়ারটেল)', 
            '121@robi.com.bd', 'রবি কর্পোরেট অফিস, ৫৩ গুলশান সাউথ এভিনিউ, ঢাকা-১২১২', 'https://robi.com.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রবি গ্রাহকগণ ১২১ নম্বরে এবং এয়ারটেল গ্রাহকগণ ৭৮৬ নম্বরে কল করে সরাসরি কাস্টমার রিলেশন অফিসারের সাথে কথা বলতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'telecom-banglalink-121', 'telecom', 'mobile_operator', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'বাংলালিংক কাস্টমার কেয়ার ১২১ (Banglalink Helpline)', 'Banglalink Customer Care 121', 
            'বাংলালিংক সিম, ৪জি ডাটা প্যাক, রোমিং ও গ্রাহক সেবা', '121', '121, 01911-304121', 
            '121', '০১৯১১-৩০৪১২১ (যেকোনো অপারেটর থেকে)', 
            'info@banglalink.net', 'টাইগার্স ডেন, হাউস-৪, রোড-১১৫, গুলশান-১, ঢাকা-১২১২', 'https://banglalink.net', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বাংলালিংক সিমের যে কোনো সমস্যা বা প্যাকেজ নিষ্ক্রিয় করতে ১২১ নম্বরে কল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'telecom-teletalk-gov-121', 'telecom', 'mobile_operator', 
            'সারাদেশ', 'সকল জেলা', 'সকল থানা', 
            'টেলিটক কাস্টমার কেয়ার ১২১ (রাষ্ট্রীয় মোবাইল অপারেটর Teletalk)', 'Teletalk Bangladesh Customer Care 121', 
            'সরকারি চাকরি আবেদন ফি, শিক্ষা বোর্ড ফলাফল, টেলিটক সিম ও ইন্টারনেট সেবা', '121', '121, 01500-121121, 01552-222155', 
            '121', '০১৫০০-১২১১২১ (যেকোনো নম্বর থেকে টেলিটক কাস্টমার কেয়ার)', 
            'info@teletalk.com.bd', 'রাজউক করপোরেট ভবন, গুলশান-১, ঢাকা-১২১২', 'https://teletalk.com.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'টেলিটক সিমের নেটওয়ার্ক সমস্যা, সরকারি চাকরির আবেদন এসএমএস না আসলে ১২১ বা ০১৫০০১২১১২১ এ কল করে সহায়তা নিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-ramna', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'রমনা', 
            'রমনা থানা (ডিএমপি)', 'Ramna Police Station (DMP)', 
            'কাকরাইল, শান্তিনগর ও রমনা পার্ক সংলগ্ন এলাকার আইনশৃঙ্খলা ও জিডি', '999', '01713-373125, 02-9357777', 
            '০১৭১৩-৩৭৩১২৯', '০১৭১৩-৩৭৩১২৫', 
            'ocramna@dmp.gov.bd', 'মৌলানা ভাসানী রোড, রমনা, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রমনা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১২৯) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-newmarket', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'নিউমার্কেট', 
            'নিউমার্কেট থানা (ডিএমপি)', 'New Market Police Station (DMP)', 
            'নিউমার্কেট, গাউছিয়া, চাঁদনী চক ও নীলক্ষেত এলাকার নিরাপত্তা ও কেনাকাটা সংক্রান্ত সহায়তা', '999', '01713-373128, 02-9669999', 
            '০১৭১৩-৩৭৩১৩৩', '০১৭১৩-৩৭৩১২৮', 
            'ocnewmarket@dmp.gov.bd', 'মিরপুর রোড, নিউমার্কেট, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'নিউমার্কেট থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৩৩) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-lalbagh', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'লালবাগ', 
            'লালবাগ থানা (ডিএমপি)', 'Lalbagh Police Station (DMP)', 
            'লালবাগ কেল্লা, আজিমপুর ও সংলগ্ন এলাকার পুলিশি সেবা', '999', '01713-373134, 02-9665555', 
            '০১৭১৩-৩৭৩১৩৮', '০১৭১৩-৩৭৩১৩৪', 
            'oclalbagh@dmp.gov.bd', 'কে বি রউফ রোড, লালবাগ, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'লালবাগ থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৩৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-chawkbazar', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'চকবাজার', 
            'চকবাজার থানা (ডিএমপি)', 'Chawkbazar Police Station (DMP)', 
            'চকবাজার পাইকারি মার্কেট ও পুরান ঢাকার জরুরি আইনশৃঙ্খলা', '999', '01713-373135, 02-7313333', 
            '০১৭১৩-৩৭৩১৩৯', '০১৭১৩-৩৭৩১৩৫', 
            'occhawkbazar@dmp.gov.bd', 'চক সার্কুলার রোড, চকবাজার, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চকবাজার থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৩৯) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-kotwali-dhaka', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'কোতোয়ালি', 
            'কোতোয়ালি থানা (ডিএমপি ঢাকা)', 'Kotwali Police Station (DMP Dhaka)', 
            'সদরঘাট লঞ্চ টার্মিনাল, ইসলামপুর ও বাবুবাজার এলাকার পুলিশি সহায়তা', '999', '01713-373137, 02-7117777', 
            '০১৭১৩-৩৭৩১৪২', '০১৭১৩-৩৭৩১৩৭', 
            'ockotwali-dhaka@dmp.gov.bd', 'সদরঘাট সংলগ্ন, কোতোয়ালি, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কোতোয়ালি থানা (ডিএমপি ঢাকা)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪২) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-bangshal', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'বংশাল', 
            'বংশাল থানা (ডিএমপি)', 'Bangshal Police Station (DMP)', 
            'নর্থ সাউথ রোড, সিদ্দিকবাজার ও বংশাল এলাকার নিরাপত্তা', '999', '01713-373138, 02-7175555', 
            '০১৭১৩-৩৭৩১৪৩', '০১৭১৩-৩৭৩১৩৮', 
            'ocbangshal@dmp.gov.bd', 'নর্থ সাউথ রোড, বংশাল, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বংশাল থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৩) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-kamrangirchar', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'কামরাঙ্গীরচর', 
            'কামরাঙ্গীরচর থানা (ডিএমপি)', 'Kamrangirchar Police Station (DMP)', 
            'কামরাঙ্গীরচর বুড়িগঙ্গা তীরবর্তী এলাকার আইনশৃঙ্খলা রক্ষা', '999', '01713-373144, 02-7320000', 
            '০১৭১৩-৩৭৩১৪৮', '০১৭১৩-৩৭৩১৪৪', 
            'ockamrangirchar@dmp.gov.bd', 'রনি মার্কেট সংলগ্ন, কামরাঙ্গীরচর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কামরাঙ্গীরচর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-paltan', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'পল্টন', 
            'পল্টন থানা (ডিএমপি)', 'Paltan Police Station (DMP)', 
            'পল্টন মোড়, বায়তুল মোকাররম ও ক্রীড়া কমপ্লেক্স এলাকা', '999', '01713-373139, 02-9558888', 
            '০১৭১৩-৩৭৩১৪৪', '০১৭১৩-৩৭৩১৩৯', 
            'ocpaltan@dmp.gov.bd', 'বঙ্গবন্ধু জাতীয় স্টেডিয়াম এলাকা, পল্টন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পল্টন থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৪) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-shahjahanpur', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'শাহজাহানপুর', 
            'শাহজাহানপুর থানা (ডিএমপি)', 'Shahjahanpur Police Station (DMP)', 
            'শাহজাহানপুর ও খিলগাঁও ফ্লাইওভার সংলগ্ন এলাকা', '999', '01713-373140, 02-9342222', 
            '০১৭১৩-৩৭৩১৪৫', '০১৭১৩-৩৭৩১৪০', 
            'ocshahjahanpur@dmp.gov.bd', 'রেলওয়ে কলোনি মোড়, শাহজাহানপুর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'শাহজাহানপুর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৫) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-sabujbagh', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'সবুজবাগ', 
            'সবুজবাগ থানা (ডিএমপি)', 'Sabujbagh Police Station (DMP)', 
            'বাসাবো, কদমতলা ও রাজারবাগ এলাকা', '999', '01713-373141, 02-7213333', 
            '০১৭১৩-৩৭৩১৪৬', '০১৭১৩-৩৭৩১৪১', 
            'ocsabujbagh@dmp.gov.bd', 'বাসাবো মেইন রোড, সবুজবাগ, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'সবুজবাগ থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৬) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-khilgaon', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'খিলগাঁও', 
            'খিলগাঁও থানা (ডিএমপি)', 'Khilgaon Police Station (DMP)', 
            'খিলগাঁও বাজার ও তিলপাপাড়া এলাকার সার্বক্ষণিক নিরাপত্তা', '999', '01713-373142, 02-7215555', 
            '০১৭১৩-৩৭৩১৪৭', '০১৭১৩-৩৭৩১৪২', 
            'ockhilgaon@dmp.gov.bd', 'খিলগাঁও সি ব্লক, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'খিলগাঁও থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৭) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-rampura', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'রামপুরা', 
            'রামপুরা থানা (ডিএমপি)', 'Rampura Police Station (DMP)', 
            'রামপুরা টিভি সেন্টার, বনশ্রী ও হাতিরঝিল পূর্বাংশ', '999', '01713-373143, 02-9343333', 
            '০১৭১৩-৩৭৩১৪৮', '০১৭১৩-৩৭৩১৪৩', 
            'ocrampura@dmp.gov.bd', 'ডিআইটি রোড, রামপুরা, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রামপুরা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-mugda', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'মুগদা', 
            'মুগদা থানা (ডিএমপি)', 'Mugda Police Station (DMP)', 
            'মুগদা জেনারেল হাসপাতাল ও মানিকনগর এলাকা', '999', '01713-373145, 02-7278888', 
            '০১৭১৩-৩৭৩১৪৯', '০১৭১৩-৩৭৩১৪৫', 
            'ocmugda@dmp.gov.bd', 'মুগদা মেডিকেল কলেজ সংলগ্ন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'মুগদা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৪৯) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-wari', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ওয়ারী', 
            'ওয়ারী থানা (ডিএমপি)', 'Wari Police Station (DMP)', 
            'ওয়ারী আবাসিক এলাকা ও বলধা গার্ডেন সংলগ্ন অঞ্চল', '999', '01713-373151, 02-7121111', 
            '০১৭১৩-৩৭৩১৫৫', '০১৭১৩-৩৭৩১৫১', 
            'ocwari@dmp.gov.bd', 'র‌্যাংকিন স্ট্রিট, ওয়ারী, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ওয়ারী থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৫) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-sutrapur', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'সূত্রাপুর', 
            'সূত্রাপুর থানা (ডিএমপি)', 'Sutrapur Police Station (DMP)', 
            'জগন্নাথ বিশ্ববিদ্যালয়, রায়সাহেব বাজার ও সূত্রাপুর এলাকা', '999', '01713-373152, 02-7118888', 
            '০১৭১৩-৩৭৩১৫৬', '০১৭১৩-৩৭৩১৫২', 
            'ocsutrapur@dmp.gov.bd', 'মালিতোলা লেন, সূত্রাপুর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'সূত্রাপুর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৬) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-demra', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ডেমরা', 
            'ডেমরা থানা (ডিএমপি)', 'Demra Police Station (DMP)', 
            'ডেমরা শিল্প এলাকা ও স্টাফ কোয়ার্টার সংলগ্ন অঞ্চল', '999', '01713-373153, 02-7541111', 
            '০১৭১৩-৩৭৩১৫৭', '০১৭১৩-৩৭৩১৫৩', 
            'ocdemra@dmp.gov.bd', 'সারুলিয়া, ডেমরা, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেমরা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৭) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-jatrabari', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'যাত্রাবাড়ী', 
            'যাত্রাবাড়ী থানা (ডিএমপি)', 'Jatrabari Police Station (DMP)', 
            'যাত্রাবাড়ী ফ্লাইওভার, ধলপুর ও সায়েদাবাদ বাস টার্মিনাল সংলগ্ন নিরাপত্তা', '999', '01713-373154, 02-7543333', 
            '০১৭১৩-৩৭৩১৫৮', '০১৭১৩-৩৭৩১৫৪', 
            'ocjatrabari@dmp.gov.bd', 'যাত্রাবাড়ী মোড় সংলগ্ন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'যাত্রাবাড়ী থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-kadamtali', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'কদমতলী', 
            'কদমতলী থানা (ডিএমপি)', 'Kadamtali Police Station (DMP)', 
            'দনিয়া, মাতুয়াইল ও কদমতলী শিল্প এলাকা', '999', '01713-373155, 02-7442222', 
            '০১৭১৩-৩৭৩১৫৯', '০১৭১৩-৩৭৩১৫৫', 
            'ockadamtali@dmp.gov.bd', 'দনিয়া, কদমতলী, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কদমতলী থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৯) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-gandaria', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'গেন্ডারিয়া', 
            'গেন্ডারিয়া থানা (ডিএমপি)', 'Gandaria Police Station (DMP)', 
            'গেন্ডারিয়া রেলওয়ে স্টেশন ও সংলগ্ন এলাকা', '999', '01713-373158, 02-7414444', 
            '০১৭১৩-৩৭৩১৬১', '০১৭১৩-৩৭৩১৫৮', 
            'ocgandaria@dmp.gov.bd', 'সতীশ সরকার রোড, গেন্ডারিয়া, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'গেন্ডারিয়া থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৬১) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-shyampur', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'শ্যামপুর', 
            'শ্যামপুর থানা (ডিএমপি)', 'Shyampur Police Station (DMP)', 
            'পোস্তগোলা ব্রিজ ও শ্যামপুর বিসিক শিল্পাঞ্চল', '999', '01713-373159, 02-7416666', 
            '০১৭১৩-৩৭৩১৬২', '০১৭১৩-৩৭৩১৫৯', 
            'ocshyampur@dmp.gov.bd', 'পোস্তগোলা, শ্যামপুর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'শ্যামপুর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৬২) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-tejgaon-shilpanchol', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'তেজগাঁও শিল্পাঞ্চল', 
            'তেজগাঁও শিল্পাঞ্চল থানা (ডিএমপি)', 'Tejgaon Industrial Area Police Station (DMP)', 
            'তেজগাঁও ভারী শিল্পাঞ্চল, চ্যানেল আই ও আশপাশের অফিস জোন', '999', '01713-373181, 02-8870000', 
            '০১৭১৩-৩৭৩১৮৫', '০১৭১৩-৩৭৩১৮১', 
            'octejgaon-shilpanchol@dmp.gov.bd', 'তেজগাঁও শিল্প এলাকা, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'তেজগাঁও শিল্পাঞ্চল থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮৫) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-hatirjheel', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'হাতিরঝিল', 
            'হাতিরঝিল থানা (ডিএমপি)', 'Hatirjheel Police Station (DMP)', 
            'হাতিরঝিল লেক, মধুবাগ, উলন ও পুলিশ প্লাজা সংলগ্ন অঞ্চল', '999', '01713-373189, 02-9331111', 
            '০১৭১৩-৩৭৩১৯৩', '০১৭১৩-৩৭৩১৮৯', 
            'ochatirjheel@dmp.gov.bd', 'মধুবাগ, হাতিরঝিল সংলগ্ন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'হাতিরঝিল থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৯৩) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-adabor', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'আদাবর', 
            'আদাবর থানা (ডিএমপি)', 'Adabor Police Station (DMP)', 
            'শ্যামলী হাউজিং, শেখেরটেক ও আদাবর এলাকা', '999', '01713-373183, 02-9134444', 
            '০১৭১৩-৩৭৩১৮৭', '০১৭১৩-৩৭৩১৮৩', 
            'ocadabor@dmp.gov.bd', 'বায়তুল আমান হাউজিং, আদাবর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আদাবর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮৭) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-sher-e-bangla-nagar', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'শেরেবাংলা নগর', 
            'শেরেবাংলা নগর থানা (ডিএমপি)', 'Sher-e-Bangla Nagar Police Station (DMP)', 
            'জাতীয় সংসদ, আগারগাঁও প্রশাসনিক জোন ও সোহরাওয়ার্দী হাসপাতাল এলাকা', '999', '01713-373184, 02-9122222', 
            '০১৭১৩-৩৭৩১৮৮', '০১৭১৩-৩৭৩১৮৪', 
            'ocsher-e-bangla-nagar@dmp.gov.bd', 'জাতীয় সংসদ ভবন সংলগ্ন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'শেরেবাংলা নগর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-pallabi', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'পল্লবী', 
            'পল্লবী থানা (ডিএমপি)', 'Pallabi Police Station (DMP)', 
            'মিরপুর সাড়ে এগারো, ১২ ও কালশী ফ্লাইওভার সংলগ্ন এলাকা', '999', '01713-373148, 02-9011111', 
            '০১৭১৩-৩৭৩১৫২', '০১৭১৩-৩৭৩১৪৮', 
            'ocpallabi@dmp.gov.bd', 'মিরপুর সেকশন-১২, ব্লক-ডি, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পল্লবী থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫২) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-rupnagar', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'রূপনগর', 
            'রূপনগর থানা (ডিএমপি)', 'Rupnagar Police Station (DMP)', 
            'রূপনগর আবাসিক এলাকা ও কমার্স কলেজ সংলগ্ন এলাকা', '999', '01713-373149, 02-9023333', 
            '০১৭১৩-৩৭৩১৫৩', '০১৭১৩-৩৭৩১৪৯', 
            'ocrupnagar@dmp.gov.bd', 'রূপনগর আবাসিক এলাকা, মিরপুর, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রূপনগর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৩) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-kafrul', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'কাফরুল', 
            'কাফরুল থানা (ডিএমপি)', 'Kafrul Police Station (DMP)', 
            'ইব্রাহিমপুর, সেনপাড়া পর্বতা ও মিরপুর-১৪ এলাকা', '999', '01713-373150, 02-9871111', 
            '০১৭১৩-৩৭৩১৫৪', '০১৭১৩-৩৭৩১৫০', 
            'ockafrul@dmp.gov.bd', 'ইব্রাহিমপুর, কাফরুল, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কাফরুল থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৫৪) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-darus-salam', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'দারুস সালাম', 
            'দারুস সালাম থানা (ডিএমপি)', 'Darus Salam Police Station (DMP)', 
            'গাবতলী আন্তঃজেলা বাস টার্মিনাল ও টেকনিক্যাল মোড়', '999', '01713-373160, 02-9032222', 
            '০১৭১৩-৩৭৩১৬৪', '০১৭১৩-৩৭৩১৬০', 
            'ocdarus-salam@dmp.gov.bd', 'গাবতলী বাস টার্মিনাল সংলগ্ন, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'দারুস সালাম থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৬৪) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-bhasantek', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ভাষানটেক', 
            'ভাষানটেক থানা (ডিএমপি)', 'Bhasantek Police Station (DMP)', 
            'ভাষানটেক বস্তি ও সংলগ্ন আবাসিক এলাকা', '999', '01713-373161, 02-9834444', 
            '০১৭১৩-৩৭৩১৬৫', '০১৭১৩-৩৭৩১৬১', 
            'ocbhasantek@dmp.gov.bd', 'ভাষানটেক বাজার, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ভাষানটেক থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৬৫) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-badda', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'বাড্ডা', 
            'বাড্ডা থানা (ডিএমপি)', 'Badda Police Station (DMP)', 
            'মধ্য বাড্ডা, উত্তর বাড্ডা ও আফতাবনগর এলাকা', '999', '01713-373169, 02-9884444', 
            '০১৭১৩-৩৭৩১৭৫', '০১৭১৩-৩৭৩১৬৯', 
            'ocbadda@dmp.gov.bd', 'উত্তর বাড্ডা, ঢাকা-১২১২', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বাড্ডা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৭৫) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-bhatara', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ভাটারা', 
            'ভাটারা থানা (ডিএমপি)', 'Bhatara Police Station (DMP)', 
            'বসুন্ধরা আবাসিক এলাকা, নতুন বাজার ও নদ্দা অঞ্চল', '999', '01713-373170, 02-8415555', 
            '০১৭১৩-৩৭৩১৭৬', '০১৭১৩-৩৭৩১৭০', 
            'ocbhatara@dmp.gov.bd', 'নতুন বাজার সংলগ্ন, ভাটারা, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ভাটারা থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৭৬) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-khilkhet', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'খিলক্ষেত', 
            'খিলক্ষেত থানা (ডিএমপি)', 'Khilkhet Police Station (DMP)', 
            'নিকুঞ্জ, খিলক্ষেত বাজার ও ডুমনি এলাকা', '999', '01713-373171, 02-8958888', 
            '০১৭১৩-৩৭৩১৭৭', '০১৭১৩-৩৭৩১৭১', 
            'ockhilkhet@dmp.gov.bd', 'নিকুঞ্জ-২, খিলক্ষেত, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'খিলক্ষেত থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৭৭) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-cantonment', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'ক্যান্টনমেন্ট', 
            'ক্যান্টনমেন্ট থানা (ডিএমপি)', 'Cantonment Police Station (DMP)', 
            'ক্যান্টনমেন্ট ও সংলগ্ন সিভিল জোন', '999', '01713-373172, 02-8713333', 
            '০১৭১৩-৩৭৩১৭৮', '০১৭১৩-৩৭৩১৭২', 
            'occantonment@dmp.gov.bd', 'ইসিবি চত্বর সংলগ্ন, ঢাকা ক্যান্টনমেন্ট', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ক্যান্টনমেন্ট থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৭৮) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-turag', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'তুরাগ', 
            'তুরাগ থানা (ডিএমপি)', 'Turag Police Station (DMP)', 
            'উত্তরা ১০-১৮ নম্বর সেক্টর ও কামারপাড়া এলাকা', '999', '01713-373175, 02-8981111', 
            '০১৭১৩-৩৭৩১৮০', '০১৭১৩-৩৭৩১৭৫', 
            'octurag@dmp.gov.bd', 'কামারপাড়া, তুরাগ, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'তুরাগ থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮০) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-airport', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'বিমানবন্দর', 
            'বিমানবন্দর থানা (ডিএমপি)', 'Airport Police Station (DMP)', 
            'বিমানবন্দর টার্মিনাল, হাজী ক্যাম্প ও আশকোনা এলাকা', '999', '01713-373176, 02-8901111', 
            '০১৭১৩-৩৭৩১৮১', '০১৭১৩-৩৭৩১৭৬', 
            'ocairport@dmp.gov.bd', 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর গোলচত্বর', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বিমানবন্দর থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮১) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-dakshinkhan', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'দক্ষিণখান', 
            'দক্ষিণখান থানা (ডিএমপি)', 'Dakshinkhan Police Station (DMP)', 
            'দক্ষিণখান, ফায়দাবাদ ও গাওয়াইর এলাকা', '999', '01713-373177, 02-8962222', 
            '০১৭১৩-৩৭৩১৮৩', '০১৭১৩-৩৭৩১৭৭', 
            'ocdakshinkhan@dmp.gov.bd', 'দক্ষিণখান বাজার, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'দক্ষিণখান থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮৩) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-dmp-uttarkhan', 'police_thana', 'metropolitan', 
            'ঢাকা', 'ঢাকা', 'উত্তরখান', 
            'উত্তরখান থানা (ডিএমপি)', 'Uttarkhan Police Station (DMP)', 
            'উত্তরখান, মাস্টারপাড়া ও চানপাড়া সংলগ্ন এলাকা', '999', '01713-373178, 02-8963333', 
            '০১৭১৩-৩৭৩১৮৪', '০১৭১৩-৩৭৩১৭৮', 
            'ocuttarkhan@dmp.gov.bd', 'উত্তরখান মাজার রোড, ঢাকা', 'https://dmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'উত্তরখান থানা (ডিএমপি)-র আওতাধীন এলাকায় জরুরি নিরাপত্তা, জিডি বা মামলা সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি ডিউটি অফিসার (০১৭১৩-৩৭৩১৮৪) বা ওসির নম্বরে সার্বক্ষণিক যোগাযোগ করতে পারেন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-panchlaish', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'পাঁচলাইশ', 
            'পাঁচলাইশ থানা (সিএমপি)', 'Panchlaish Police Station (CMP)', 
            'চট্টগ্রাম মেডিকেল কলেজ (চমেক), প্রবর্তক ও জিইসি মোড় এলাকা', '999', '01713-373257, 031-651111', 
            '০১৭৬৯-৬৯০০৫২', '০১৭১৩-৩৭৩২৫৭', 
            'ocpanchlaish@cmp.gov.bd', 'প্রবর্তক মোড়, পাঁচলাইশ, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পাঁচলাইশ থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫২) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-khulshi', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'খুলশী', 
            'খুলশী থানা (সিএমপি)', 'Khulshi Police Station (CMP)', 
            'খুলশী আবাসিক এলাকা, ফয়েজ লেক ও ওয়াসা মোড়', '999', '01713-373258, 031-657777', 
            '০১৭৬৯-৬৯০০৫৩', '০১৭১৩-৩৭৩২৫৮', 
            'ockhulshi@cmp.gov.bd', 'জাকির হোসেন রোড, খুলশী, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'খুলশী থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৩) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-chandgaon', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'চান্দগাঁও', 
            'চান্দগাঁও থানা (সিএমপি)', 'Chandgaon Police Station (CMP)', 
            'বহদ্দারহাট বাস টার্মিনাল, চান্দগাঁও আবাসিক ও কালুরঘাট এলাকা', '999', '01713-373259, 031-670000', 
            '০১৭৬৯-৬৯০০৫৪', '০১৭১৩-৩৭৩২৫৯', 
            'occhandgaon@cmp.gov.bd', 'বহদ্দারহাট, চান্দগাঁও, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'চান্দগাঁও থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৪) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-bakalia', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'বাকলিয়া', 
            'বাকলিয়া থানা (সিএমপি)', 'Bakalia Police Station (CMP)', 
            'নতুন ব্রিজ, বাকলিয়া ও চাক্তাই খাতুনগঞ্জ পাইকারি বাজার', '999', '01713-373260, 031-610111', 
            '০১৭৬৯-৬৯০০৫৫', '০১৭১৩-৩৭৩২৬০', 
            'ocbakalia@cmp.gov.bd', 'কর্ণফুলী শাহ আমানত সেতু সংলগ্ন, বাকলিয়া', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বাকলিয়া থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৫) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-halishahar', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'হালিশহর', 
            'হালিশহর থানা (সিএমপি)', 'Halishahar Police Station (CMP)', 
            'হালিশহর আবাসিক এলাকা ও পোর্ট কানেক্টিং রোড', '999', '01713-373261, 031-711222', 
            '০১৭৬৯-৬৯০০৫৬', '০১৭১৩-৩৭৩২৬১', 
            'ochalishahar@cmp.gov.bd', 'হালিশহর হাউজিং এস্টেট, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'হালিশহর থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৬) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-epz', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'ইপিজেড', 
            'ইপিজেড থানা (সিএমপি)', 'EPZ Police Station (CMP)', 
            'রপ্তানি প্রক্রিয়াকরণ অঞ্চল (সিইপিজেড) ও সংলগ্ন পোশাক শিল্প এলাকা', '999', '01713-373262, 031-741111', 
            '০১৭৬৯-৬৯০০৫৭', '০১৭১৩-৩৭৩২৬২', 
            'ocepz@cmp.gov.bd', 'চট্টগ্রাম ইপিজেড প্রধান গেট সংলগ্ন', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ইপিজেড থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৭) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-bandar', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'বন্দর', 
            'বন্দর থানা (সিএমপি চট্টগ্রাম)', 'Bandar Police Station (CMP)', 
            'চট্টগ্রাম সমুদ্র বন্দর, কাস্টমস হাউস ও জেটি এলাকা', '999', '01713-373263, 031-740000', 
            '০১৭৬৯-৬৯০০৫৮', '০১৭১৩-৩৭৩২৬৩', 
            'ocbandar@cmp.gov.bd', 'চট্টগ্রাম বন্দর কলোনি সংলগ্ন, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বন্দর থানা (সিএমপি চট্টগ্রাম)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৮) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-patenga', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'পতেঙ্গা', 
            'পতেঙ্গা থানা (সিএমপি)', 'Patenga Police Station (CMP)', 
            'পতেঙ্গা সমুদ্র সৈকত, বিমানবন্দর ও নেভাল একাডেমি এলাকা', '999', '01713-373264, 031-744444', 
            '০১৭৬৯-৬৯০০৫৯', '০১৭১৩-৩৭৩২৬৪', 
            'ocpatenga@cmp.gov.bd', 'শাহ আমানত আন্তর্জাতিক বিমানবন্দর রোড, পতেঙ্গা', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'পতেঙ্গা থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৫৯) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'thana-cmp-bayazid', 'police_thana', 'metropolitan', 
            'চট্টগ্রাম', 'চট্টগ্রাম', 'বায়েজিদ বোস্তামী', 
            'বায়েজিদ বোস্তামী থানা (সিএমপি)', 'Bayazid Bostami Police Station (CMP)', 
            'বায়েজিদ মাজার, অক্সিজেন মোড় ও বিসিক শিল্পাঞ্চল', '999', '01713-373265, 031-682222', 
            '০১৭৬৯-৬৯০০৬০', '০১৭১৩-৩৭৩২৬৫', 
            'ocbayazid@cmp.gov.bd', 'বায়েজিদ মাজার সংলগ্ন, চট্টগ্রাম', 'https://cmp.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বায়েজিদ বোস্তামী থানা (সিএমপি)-র ডিউটি অফিসার (০১৭৬৯-৬৯০০৬০) বা ওসির নম্বরে সার্বক্ষণিক পুলিশি সেবা পাওয়া যায়।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-narayanganj', 'police_thana', 'district_sp_control', 
            'ঢাকা', 'নারায়ণগঞ্জ', 'সদর', 
            'নারায়ণগঞ্জ জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Narayanganj District Police Control', 
            'নারায়ণগঞ্জ জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373350, 02-7648888', 
            '০১৭১৩-৩৭৩৩৫১', '01713-373350', 
            'spনারায়ণগঞ্জ@police.gov.bd', 'নারায়ণগঞ্জ জেলা পুলিশ লাইন', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'নারায়ণগঞ্জ জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-gazipur', 'police_thana', 'district_sp_control', 
            'ঢাকা', 'গাজীপুর', 'জয়দেবপুর', 
            'গাজীপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Gazipur District Police Control', 
            'গাজীপুর জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373360, 02-9261111', 
            '০১৭১৩-৩৭৩৩৬১', '01713-373360', 
            'spগাজীপুর@police.gov.bd', 'জয়দেবপুর, গাজীপুর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'গাজীপুর জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-cumilla', 'police_thana', 'district_sp_control', 
            'চট্টগ্রাম', 'কুমিল্লা', 'কোতোয়ালি', 
            'কুমিল্লা জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Cumilla District Police Control', 
            'কুমিল্লা জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373700, 081-65555', 
            '০১৭১৩-৩৭৩৭০১', '01713-373700', 
            'spকুমিল্লা@police.gov.bd', 'পুলিশ লাইন, কুমিল্লা', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কুমিল্লা জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-coxsbazar', 'police_thana', 'district_sp_control', 
            'চট্টগ্রাম', 'কক্সবাজার', 'সদর', 
            'কক্সবাজার জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Cox''s Bazar District Police Control', 
            'কক্সবাজার জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373720, 0341-63333', 
            '০১৭১৩-৩৭৩৭২১', '01713-373720', 
            'spকক্সবাজার@police.gov.bd', 'ঝাউতলা, কক্সবাজার', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'কক্সবাজার জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-bogura', 'police_thana', 'district_sp_control', 
            'রাজশাহী', 'বগুড়া', 'সদর', 
            'বগুড়া জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Bogura District Police Control', 
            'বগুড়া জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373800, 051-66666', 
            '০১৭১৩-৩৭৩৮০১', '01713-373800', 
            'spবগুড়া@police.gov.bd', 'বগুড়া পুলিশ লাইন, বগুড়া', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বগুড়া জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-mymensingh', 'police_thana', 'district_sp_control', 
            'ময়মনসিংহ', 'ময়মনসিংহ', 'কোতোয়ালি', 
            'ময়মনসিংহ জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Mymensingh District Police Control', 
            'ময়মনসিংহ জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374100, 091-65555', 
            '০১৭১৩-৩৭৪১০১', '01713-374100', 
            'spময়মনসিংহ@police.gov.bd', 'পুলিশ লাইন, ময়মনসিংহ', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ময়মনসিংহ জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-tangail', 'police_thana', 'district_sp_control', 
            'ঢাকা', 'টাঙ্গাইল', 'সদর', 
            'টাঙ্গাইল জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Tangail District Police Control', 
            'টাঙ্গাইল জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373400, 0921-63333', 
            '০১৭১৩-৩৭৩৪০১', '01713-373400', 
            'spটাঙ্গাইল@police.gov.bd', 'টাঙ্গাইল সদর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'টাঙ্গাইল জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-jashore', 'police_thana', 'district_sp_control', 
            'খুলনা', 'যশোর', 'কোতোয়ালি', 
            'যশোর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Jashore District Police Control', 
            'যশোর জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374200, 0421-65555', 
            '০১৭১৩-৩৭৪২০১', '01713-374200', 
            'spযশোর@police.gov.bd', 'পুলিশ লাইন, যশোর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'যশোর জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-barishal', 'police_thana', 'district_sp_control', 
            'বরিশাল', 'বরিশাল', 'কোতোয়ালি', 
            'বরিশাল জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Barishal District Police Control', 
            'বরিশাল জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374300, 0431-62222', 
            '০১৭১৩-৩৭৪৩০১', '01713-374300', 
            'spবরিশাল@police.gov.bd', 'পুলিশ লাইন, বরিশাল', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'বরিশাল জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-sylhet', 'police_thana', 'district_sp_control', 
            'সিলেট', 'সিলেট', 'কোতোয়ালি', 
            'সিলেট জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Sylhet District Police Control', 
            'সিলেট জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374400, 0821-713333', 
            '০১৭১৩-৩৭৪৪০১', '01713-374400', 
            'spসিলেট@police.gov.bd', 'পুলিশ সুপার কার্যালয়, সিলেট', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'সিলেট জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-rangpur', 'police_thana', 'district_sp_control', 
            'রংপুর', 'রংপুর', 'কোতোয়ালি', 
            'রংপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Rangpur District Police Control', 
            'রংপুর জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374500, 0521-62222', 
            '০১৭১৩-৩৭৪৫০১', '01713-374500', 
            'spরংপুর@police.gov.bd', 'পুলিশ লাইন, রংপুর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'রংপুর জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-dinajpur', 'police_thana', 'district_sp_control', 
            'রংপুর', 'দিনাজপুর', 'কোতোয়ালি', 
            'দিনাজপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Dinajpur District Police Control', 
            'দিনাজপুর জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-374550, 0531-63333', 
            '০১৭১৩-৩৭৪৫৫১', '01713-374550', 
            'spদিনাজপুর@police.gov.bd', 'পুলিশ সুপার কার্যালয়, দিনাজপুর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'দিনাজপুর জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'sp-faridpur', 'police_thana', 'district_sp_control', 
            'ঢাকা', 'ফরিদপুর', 'কোতোয়ালি', 
            'ফরিদপুর জেলা পুলিশ কন্ট্রোল রুম (এসপি অফিস)', 'Faridpur District Police Control', 
            'ফরিদপুর জেলার সার্বিক আইনশৃঙ্খলা পরিস্থিতি নিয়ন্ত্রণ ও উপজেলার যেকোনো থানার জরুরি সংযোগ', '999', '01713-373450, 0631-62222', 
            '০১৭১৩-৩৭৩৪৫১', '01713-373450', 
            'spফরিদপুর@police.gov.bd', 'পুলিশ সুপার কার্যালয়, ফরিদপুর', 'https://police.gov.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ফরিদপুর জেলার যে কোনো থানায় অভিযোগ গ্রহণ না করলে বা পুলিশের অসহযোগিতায় সরাসরি জেলা পুলিশ সুপার (SP) কন্ট্রোল রুমে কল দিন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-dhanmondi', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'ধানমন্ডি', 
            'ডিপিডিসি ধানমন্ডি জোনাল অভিযোগ কেন্দ্র', 'DPDC Dhanmondi Zonal Complaint Office', 
            'ধানমন্ডি লেক ও আবাসিক এলাকা-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320300, 02-9670000', 
            '01730-320300', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'ধানমন্ডি, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-lalbagh', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'লালবাগ', 
            'ডিপিডিসি লালবাগ জোনাল অভিযোগ কেন্দ্র', 'DPDC Lalbagh Zonal Complaint Office', 
            'লালবাগ ও পুরান ঢাকা অঞ্চল-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320310, 02-7310000', 
            '01730-320310', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'লালবাগ, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-azimpur', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'আজিমপুর / নিউমার্কেট', 
            'ডিপিডিসি আজিমপুর জোনাল অভিযোগ কেন্দ্র', 'DPDC Azimpur Zonal Complaint Office', 
            'আজিমপুর এস্টেট ও নিউমার্কেট অঞ্চল-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320315, 02-9660000', 
            '01730-320315', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'আজিমপুর / নিউমার্কেট, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-motijheel', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'মতিঝিল', 
            'ডিপিডিসি মতিঝিল জোনাল অভিযোগ কেন্দ্র', 'DPDC Motijheel Zonal Complaint Office', 
            'মতিঝিল ও দিলকুশা ব্যাংক অঞ্চল-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320320, 02-9550000', 
            '01730-320320', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'মতিঝিল, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-banasree', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'রামপুরা / বনশ্রী', 
            'ডিপিডিসি বনশ্রী জোনাল অভিযোগ কেন্দ্র', 'DPDC Banasree Zonal Complaint Office', 
            'বনশ্রী, খিলগাঁও ও রামপুরা এলাকা-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320330, 02-7280000', 
            '01730-320330', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'রামপুরা / বনশ্রী, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-dpdc-narayanganj', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'নারায়ণগঞ্জ সদর', 
            'ডিপিডিসি নারায়ণগঞ্জ জোনাল অভিযোগ কেন্দ্র', 'DPDC Narayanganj Zonal Complaint Office', 
            'নারায়ণগঞ্জ শহর ও বন্দর অঞ্চল-য় বিদ্যুৎ বিভ্রাট, ট্রান্সফরমার সমস্যা ও মিটার অভিযোগ', '16116', '01730-320350, 02-7630000', 
            '01730-320350', 'সাব-ডিভিশনাল ইঞ্জিনিয়ার (ডিপিডিসি)', 
            'complaint@dpdc.org.bd', 'নারায়ণগঞ্জ সদর, ঢাকা', 'https://dpdc.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'আপনার গ্রাহক নম্বর (Customer ID) উল্লেখ করে কল করুন। দ্রুত লাইনম্যান টিম পাঠানো হবে।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-desco-uttara', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'উত্তরা', 
            'ডেসকো উত্তরা জোনাল অভিযোগ কেন্দ্র', 'DESCO Uttara Zonal Complaint Office', 
            'উত্তরা ১-১৪ নম্বর সেক্টর-য় বিদ্যুৎ সরবরাহ বিচ্ছিন্নতা ও মিটার সমস্যা সমাধান', '16120', '01713-010010, 02-8910000', 
            '01713-010010', 'নির্বাহী প্রকৌশলী (ডেসকো)', 
            'info@desco.org.bd', 'উত্তরা, ঢাকা', 'https://desco.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেসকো জোনাল নম্বরে বা ১৬১২০ নম্বরে মিটার নম্বর দিয়ে অভিযোগ দায়ের করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-desco-gulshan', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'গুলশান', 
            'ডেসকো গুলশান জোনাল অভিযোগ কেন্দ্র', 'DESCO Gulshan Zonal Complaint Office', 
            'গুলশান ১ ও ২ এবং বারিধারা-য় বিদ্যুৎ সরবরাহ বিচ্ছিন্নতা ও মিটার সমস্যা সমাধান', '16120', '01713-010020, 02-9880000', 
            '01713-010020', 'নির্বাহী প্রকৌশলী (ডেসকো)', 
            'info@desco.org.bd', 'গুলশান, ঢাকা', 'https://desco.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেসকো জোনাল নম্বরে বা ১৬১২০ নম্বরে মিটার নম্বর দিয়ে অভিযোগ দায়ের করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-desco-mirpur', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'ঢাকা', 'মিরপুর', 
            'ডেসকো মিরপুর জোনাল অভিযোগ কেন্দ্র', 'DESCO Mirpur Zonal Complaint Office', 
            'মিরপুর ১, ২, ১০ ও পল্লবী অঞ্চল-য় বিদ্যুৎ সরবরাহ বিচ্ছিন্নতা ও মিটার সমস্যা সমাধান', '16120', '01713-010030, 02-9000000', 
            '01713-010030', 'নির্বাহী প্রকৌশলী (ডেসকো)', 
            'info@desco.org.bd', 'মিরপুর, ঢাকা', 'https://desco.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেসকো জোনাল নম্বরে বা ১৬১২০ নম্বরে মিটার নম্বর দিয়ে অভিযোগ দায়ের করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'power-desco-tongi', 'electricity', 'zonal_complaint', 
            'ঢাকা', 'গাজীপুর', 'টঙ্গী', 
            'ডেসকো টঙ্গী জোনাল অভিযোগ কেন্দ্র', 'DESCO Tongi Zonal Complaint Office', 
            'টঙ্গী শিল্পাঞ্চল ও আবাসিক অঞ্চল-য় বিদ্যুৎ সরবরাহ বিচ্ছিন্নতা ও মিটার সমস্যা সমাধান', '16120', '01713-010040, 02-9810000', 
            '01713-010040', 'নির্বাহী প্রকৌশলী (ডেসকো)', 
            'info@desco.org.bd', 'টঙ্গী, ঢাকা', 'https://desco.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'ডেসকো জোনাল নম্বরে বা ১৬১২০ নম্বরে মিটার নম্বর দিয়ে অভিযোগ দায়ের করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-1', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'লালবাগ', 
            'ঢাকা ওয়াসা মডস জোন-১ (লালবাগ ও পুরান ঢাকা)', 'Dhaka WASA MODS Zone 1 (Old Dhaka)', 
            'লালবাগ, কোতোয়ালি, বংশাল ও সদরঘাট এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040201, 02-7311111', 
            '01713-040201', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'লালবাগ, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-2', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'ধানমন্ডি', 
            'ঢাকা ওয়াসা মডস জোন-২ (ধানমন্ডি ও আজিমপুর)', 'Dhaka WASA MODS Zone 2 (Dhanmondi)', 
            'ধানমন্ডি, আজিমপুর, নিউমার্কেট ও কলাবাগান এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040202, 02-9661111', 
            '01713-040202', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'ধানমন্ডি, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-3', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'মিরপুর', 
            'ঢাকা ওয়াসা মডস জোন-৩ (মিরপুর ও পল্লবী)', 'Dhaka WASA MODS Zone 3 (Mirpur)', 
            'মিরপুর ১-১৪, পল্লবী ও রূপনগর এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040203, 02-9012222', 
            '01713-040203', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'মিরপুর, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-4', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'তেজগাঁও', 
            'ঢাকা ওয়াসা মডস জোন-৪ (তেজগাঁও ও কারওয়ান বাজার)', 'Dhaka WASA MODS Zone 4 (Tejgaon)', 
            'তেজগাঁও, কারওয়ান বাজার, মগবাজার ও ফার্মগেট এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040204, 02-8113333', 
            '01713-040204', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'তেজগাঁও, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-5', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'গুলশান', 
            'ঢাকা ওয়াসা মডস জোন-৫ (গুলশান, বনানী ও বাড্ডা)', 'Dhaka WASA MODS Zone 5 (Gulshan)', 
            'গুলশান, বনানী, বারিধারা, বাড্ডা ও বসুন্ধরা এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040205, 02-9894444', 
            '01713-040205', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'গুলশান, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-6', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'মতিঝিল', 
            'ঢাকা ওয়াসা মডস জোন-৬ (মতিঝিল ও পুরানা পল্টন)', 'Dhaka WASA MODS Zone 6 (Motijheel)', 
            'মতিঝিল, পল্টন, সেগুনবাগিচা ও দিলকুশা এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040206, 02-9555555', 
            '01713-040206', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'মতিঝিল, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-7', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'উত্তরা', 
            'ঢাকা ওয়াসা মডস জোন-৭ (উত্তরা ও বিমানবন্দর)', 'Dhaka WASA MODS Zone 7 (Uttara)', 
            'উত্তরা ১-১৮ নম্বর সেক্টর, বিমানবন্দর ও খিলক্ষেত এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040207, 02-8916666', 
            '01713-040207', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'উত্তরা, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-8', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'যাত্রাবাড়ী', 
            'ঢাকা ওয়াসা মডস জোন-৮ (যাত্রাবাড়ী ও ডেমরা)', 'Dhaka WASA MODS Zone 8 (Jatrabari)', 
            'যাত্রাবাড়ী, ডেমরা, সায়েদাবাদ ও মাতুয়াইল এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040208, 02-7547777', 
            '01713-040208', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'যাত্রাবাড়ী, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-9', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'মোহাম্মদপুর', 
            'ঢাকা ওয়াসা মডস জোন-৯ (মোহাম্মদপুর ও শ্যামলী)', 'Dhaka WASA MODS Zone 9 (Mohammadpur)', 
            'মোহাম্মদপুর, বসিলা, শ্যামলী ও আদাবর এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040209, 02-9118888', 
            '01713-040209', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'মোহাম্মদপুর, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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

INSERT INTO emergency_directories (
            directory_id, category, sub_category, division_bn, district_bn, 
            upazila_thana_bn, organization_name_bn, organization_name_en, 
            service_scope, short_code, phone_numbers, duty_officer_number, 
            oc_or_head_number, email, office_address, website_url, 
            operating_hours, is_toll_free, complaint_process_bn, updated_at
        ) VALUES (
            'water-wasa-mods-10', 'water_wasa', 'zonal_water_tanker', 
            'ঢাকা', 'ঢাকা', 'খিলগাঁও', 
            'ঢাকা ওয়াসা মডস জোন-১০ (খিলগাঁও ও রামপুরা)', 'Dhaka WASA MODS Zone 10 (Khilgaon)', 
            'খিলগাঁও, রামপুরা, বনশ্রী, বাসাবো ও মুগদা এলাকায় পানি না আসলে জরুরি পানির গাড়ি (Water Tanker) সরবরাহ ও গভীর নলকূপ মেরামত', '16162', '01713-040210, 02-7219999', 
            '01713-040210', 'নির্বাহী প্রকৌশলী (মডস জোন)', 
            'wasalink@dwasa.org.bd', 'খিলগাঁও, ঢাকা', 'https://dwasa.org.bd', 
            '২৪ ঘণ্টা (সার্বক্ষণিক)', 0, 
            'জরুরি পানির গাড়ি বা পাইপ লিকেজের জন্য সংশ্লিষ্ট মডস জোনের মোবাইল নম্বরে কল দিন অথবা ওয়াসা লিংক ১৬১৬২ নম্বরে অভিযোগ দাখিল করুন।', CURRENT_TIMESTAMP
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