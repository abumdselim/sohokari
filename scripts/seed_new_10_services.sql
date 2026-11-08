
INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-it-freelancer-id-card-cash-incentive', 'আইটি ফ্রিল্যান্সার আইডি কার্ড ও ৪% সরকারি নগদ প্রণোদনা', 'IT Freelancer ID Card & 4% Cash Incentive Verification', 'উদ্যোক্তা ও বাণিজ্য', 'আইটি ও ফ্রিল্যান্সিং', 'বাংলাদেশ কম্পিউটার কাউন্সিল (BCC), তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ',
    'আইটি ও ফ্রিল্যান্সারদের প্রাতিষ্ঠানিক স্বীকৃতি, ব্যাংক ঋণ সুবিধা, ক্রেডিট কার্ড ইস্যু এবং বৈধ ব্যাংকিং চ্যানেলে রেমিট্যান্স আনলে ৪% সরকারি নগদ সহায়তা প্রাপ্তির অফিসিয়াল পরিচয়পত্র।', 'অনলাইন আবেদন ও স্ক্রুটিনির পর ১৫ কার্যদিবস', 'https://freelancers.gov.bd', 'https://freelancers.gov.bd/registration', 'https://ictd.gov.bd',
    'ফ্রিল্যান্সার আইডি কার্ডের সরকারি আবেদন ফি মাত্র ১৫০০ টাকা (ভ্যাটসহ ১৭২৫ টাকা)। কোনো দালাল বা তৃতীয় পক্ষকে আইডি কার্ড বানিয়ে দেওয়া বা নগদ প্রণোদনা পাইয়ে দেওয়ার নামে এক টাকাও ঘুষ দেবেন না। ফ্রিল্যান্সার প্ল্যাটফর্মের আয়ের প্রমাণ থাকলেই আবেদন অনুমোদনযোগ্য।', 'আবেদন সংক্রান্ত জটিলতা বা অনুমোদনে অহেতুক দেরির ক্ষেত্রে বিসিসি হেল্পডেস্ক বা ictd@ictd.gov.bd এ যোগাযোগ করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-it-freelancer-id-card-cash-incentive';
DELETE FROM service_documents WHERE service_id = 'bd-it-freelancer-id-card-cash-incentive';
DELETE FROM service_steps WHERE service_id = 'bd-it-freelancer-id-card-cash-incentive';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'আইডি কার্ড আবেদন ও যাচাই ফি', 1500, 0, 'অনলাইন (কার্ড/মোবাইল ব্যাংকিং)', '১৫% ভ্যাটসহ মোট ১৭২৫ টাকা (১২ মাস মেয়াদ)');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'আইডি কার্ড নবায়ন ফি (বার্ষিক)', 1500, 0, 'অনলাইন', '১৫% ভ্যাট প্রযোজ্য');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'স্ক্যান কপি', 'আবেদনকারীর নিজস্ব এনআইডি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'ট্যাক্স আইডেন্টিফিকেশন নম্বর (e-TIN) সার্টিফিকেট', 1, 0, 'পিডিএফ কপি', 'incometax.gov.bd');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'বিগত ১২ মাসের মার্কেটপ্লেস বা সরাসরি বিদেশি বায়ার ইনভয়েস আয়ের প্রমাণপত্র (ন্যূনতম ১,০০০ ডলার)', 1, 0, 'ব্যাংক স্টেটমেন্ট ও আর্নিং স্ক্রিনশট', 'Upwork/Fiverr/Bank PRCs');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-it-freelancer-id-card-cash-incentive', 'পাসপোর্ট সাইজ ছবি ও স্বাক্ষর স্ক্যান', 1, 0, 'ছবি/পিএনজি', 'স্টুডিও ল্যাব কপি');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-it-freelancer-id-card-cash-incentive', 1, 'freelancers.gov.bd পোর্টালে একাউন্ট তৈরি', 'এনআইডি ও মোবাইল নম্বর দিয়ে ফ্রিল্যান্সার পোর্টালে রেজিস্ট্রেশন করুন।', 'https://freelancers.gov.bd', 'এনআইডির তথ্য হুবহু প্রদান করুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-it-freelancer-id-card-cash-incentive', 2, 'আয়ের প্রমাণপত্র ও প্রোফাইল লিংক আপলোড', 'মার্কেটপ্লেস প্রোফাইল (Upwork, Fiverr ইত্যাদি) অথবা বিদেশি ক্লায়েন্টের চুক্তিপত্র ও বিগত ১২ মাসের ব্যাংক স্টেটমেন্ট আপলোড করুন।', NULL, 'বিগত ১২ মাসে ন্যূনতম ১০০০ ইউএস ডলার অর্জিত হতে হবে।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-it-freelancer-id-card-cash-incentive', 3, 'সরকারি ফি পরিশোধ ও ভার্চুয়াল স্ক্রুটিনি', 'অনলাইনে কার্ড বা মোবাইল ওয়ালেটে ১৭২৫ টাকা পরিশোধ করুন। বিসিসির ভার্চুয়াল ইন্টারভিউ বা ডাটা যাচাই সম্পন্ন হবে।', NULL, 'অনুমোদিত হলে ডিজিটাল কার্ড ডাউনলোড ও ফিজিক্যাল স্মার্ট কার্ড সংগ্রহ করা যাবে।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-dip-no-visa-required-nvr-seal', 'বিদেশি পাসপোর্টে ''নো ভিসা রিকোয়ার্ড'' (NVR) সিল সংগ্রহ', 'No Visa Required (NVR) Endorsement on Foreign Passport', 'পাসপোর্ট ও ইমিগ্রেশন', 'ভিসা ও এনভিআর', 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP) ও বিদেশে বাংলাদেশ মিশন',
    'প্রবাসী বাংলাদেশি বংশোদ্ভূত বিদেশি নাগরিক এবং তাদের স্বামী/স্ত্রী ও সন্তানদের বাংলাদেশের পাসপোর্টে স্থায়ীভাবে বিনা ভিসায় বাংলাদেশ ভ্রমণের NVR সিল প্রদান।', 'আবেদন ও পাসপোর্ট জমার পর ৭-১৫ কার্যদিবস', 'https://visa.gov.bd', 'https://visa.gov.bd', 'https://dip.gov.bd',
    'NVR এর সরকারি ফি নির্ধারিত। বিদেশে মিশনভেদে সাধারণত ৫০-১০০ ডলার বা সমপরিমাণ স্থানীয় মুদ্রা এবং বাংলাদেশে পাসপোর্ট অধিদপ্তরে ৫০ ডলার সমমূল্যের সরকারি ট্রেজারি চালান। ভিসা অফিসের বাইরের কোনো দালালের মাধ্যমে পাসপোর্ট জমা দেবেন না।', 'পাসপোর্ট অধিদপ্তরের পরিচালক (ভিসা) বা বিদেশে নিযুক্ত বাংলাদেশ দূতাবাসের কাউন্সিলর (কনস্যুলার) বরাবর লিখিত অভিযোগ দিন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-dip-no-visa-required-nvr-seal';
DELETE FROM service_documents WHERE service_id = 'bd-dip-no-visa-required-nvr-seal';
DELETE FROM service_steps WHERE service_id = 'bd-dip-no-visa-required-nvr-seal';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-dip-no-visa-required-nvr-seal', 'বাংলাদেশে পাসপোর্ট অধিদপ্তরে NVR সরকারি ফি', 5500, 1, 'এ-চালান / ব্যাংক ড্রাফট', '৫০ মার্কিন ডলার সমপরিমাণ সরকারি ট্রেজারি চালান (কোড ১-০৬০১-০০০১-১৮১৭)');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-dip-no-visa-required-nvr-seal', 'বিদেশে বাংলাদেশ মিশনে NVR ফি (যুক্তরাষ্ট্র)', 6000, 1, 'মানি অর্ডার / সার্টিফাইড চেক', '৫০ মার্কিন ডলার');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dip-no-visa-required-nvr-seal', 'বর্তমান বিদেশি পাসপোর্টের মূল কপি (ন্যূনতম ৬ মাস মেয়াদ)', 1, 0, 'মূল কপি', 'সংশ্লিষ্ট দেশের পাসপোর্ট কর্তৃপক্ষ');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dip-no-visa-required-nvr-seal', 'আবেদনকারীর পূর্ববর্তী মূল বাংলাদেশি পাসপোর্ট বা জাতীয় পরিচয়পত্র', 1, 0, 'মূল ও স্ক্যান কপি', 'বাংলাদেশি পাসপোর্ট বা এনআইডি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dip-no-visa-required-nvr-seal', 'পিতামাতার মাধ্যমে আবেদনের ক্ষেত্রে পিতামাতার বাংলাদেশি পাসপোর্ট/এনআইডি ও জন্ম নিবন্ধন', 0, 1, 'নোটারি ও সত্যায়িত কপি', 'পারিবারিক রেকর্ড');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dip-no-visa-required-nvr-seal', 'বিদেশি স্পাউজের ক্ষেত্রে বিবাহ সনদ (ম্যারিজ সার্টিফিকেট)', 0, 1, 'নোটারি ও সত্যায়িত কপি', 'নিকাহনামা বা ম্যারিজ সার্টিফিকেট');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dip-no-visa-required-nvr-seal', 1, 'visa.gov.bd পোর্টালে অনলাইন ফরম পূরণ', 'অনলাইন ভিসা পোর্টালে প্রবেশ করে ভিসা ক্যাটাগরিতে ''No Visa Required (NVR)'' নির্বাচন করে ফরম পূরণ করুন।', 'https://visa.gov.bd', 'পাসপোর্ট নম্বর ও ব্যক্তিগত তথ্য বিদেশি পাসপোর্ট অনুযায়ী দিন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dip-no-visa-required-nvr-seal', 2, 'সরকারি এ-চালান ফি পরিশোধ ও প্রিন্ট গ্রহণ', '৫০ ডলার সমপরিমাণ ট্রেজারি চালান সোনালী ব্যাংক বা এ-চালানে জমা দিয়ে আবেদন প্রিন্ট করুন।', NULL, 'চালানের মূল কপি আবেদনের সাথে সংযুক্ত করতে হবে।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dip-no-visa-required-nvr-seal', 3, 'আগারগাঁও পাসপোর্ট অফিস বা বাংলাদেশ দূতাবাসে জমা', 'মূল বিদেশি পাসপোর্ট ও প্রমাণপত্রসহ কাউন্টারে জমা দিন। নির্ধারিত দিনে NVR স্টিকার সম্বলিত পাসপোর্ট সংগ্রহ করুন।', NULL, 'NVR সিল থাকলে মেয়াদ থাকা সাপেক্ষে আজীবন ভিসা ছাড়াই বাংলাদেশে যতবার ইচ্ছা প্রবেশ ও থাকা যায়।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-bise-duplicate-academic-certificate-marksheet', 'হারানো এসএসসি/এইচএসসি মূল সার্টিফিকেট ও মার্কশিট ডুপ্লিকেট উত্তোলন', 'Duplicate Academic Certificate & Marksheet Issuance (SSC / HSC)', 'শিক্ষা ও ভর্তি', 'শিক্ষা বোর্ড সেবা', 'সকল মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা, চট্টগ্রাম, রাজশাহী ইত্যাদি)',
    'হারিয়ে যাওয়া, নষ্ট হওয়া বা আগুনে পুড়ে যাওয়া এসএসসি ও এইচএসসি পরীক্ষার মূল সনদ ও একাডেমিক ট্রান্সক্রিপ্ট ডুপ্লিকেট কপি বোর্ড থেকে উত্তোলন নির্দেশিকা।', 'কাগজপত্র যাচাই ও আবেদন অনুমোদনের পর ১০-১৫ কার্যদিবস', 'https://dhakaeducationboard.gov.bd', 'https://dhakaeducationboard.gov.bd', 'https://moedu.gov.bd',
    'শিক্ষা বোর্ডের সামনে কোনো দালালকে ডুপ্লিকেট সার্টিফিকেটের জন্য টাকা দেবেন না। মূল সার্টিফিকেট উত্তোলনে সরকারি ফি ৫০০ থেকে ৮০০ টাকা এবং নম্বরপত্র ৪০০ টাকা। নির্ধারিত সোনালী সেবার ফি ছাড়া আর কোনো ফি নেই। থানায় জিডি ও পত্রিকায় বিজ্ঞপ্তি দিয়ে নিজেই আবেদন করুন।', 'বোর্ডের সচিব বা পরীক্ষা নিয়ন্ত্রক বরাবর লিখিত আবেদন করুন অথবা শিক্ষা মন্ত্রণালয়ের অভিযোগ সেলে জানান।'
);

DELETE FROM service_fees WHERE service_id = 'bd-bise-duplicate-academic-certificate-marksheet';
DELETE FROM service_documents WHERE service_id = 'bd-bise-duplicate-academic-certificate-marksheet';
DELETE FROM service_steps WHERE service_id = 'bd-bise-duplicate-academic-certificate-marksheet';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'মূল সার্টিফিকেট ডুপ্লিকেট সরকারি ফি', 600, 1, 'সোনালী সেবা / অনলাইন পেমেন্ট', 'বোর্ড ভেদে ৫০০ থেকে ৮০০ টাকা (সাধারণ সার্ভিস)');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'নম্বরপত্র / একাডেমিক ট্রান্সক্রিপ্ট ডুপ্লিকেট ফি', 400, 1, 'সোনালী সেবা', 'বোর্ড ভেদে ৩০০ থেকে ৫০০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'জরুরি ডেলিভারি ফি (বোর্ড অনুমোদিত হলে)', 500, 1, 'সোনালী সেবা', '৩-৫ দিনের মধ্যে সংগ্রহের জরুরি সার্ভিস');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'নিকটস্থ থানায় করা সাধারণ ডায়েরি (GD) এর মূল কপি', 1, 0, 'থানার সিলযুক্ত মূল কপি', 'হারানোর এলাকার সংশ্লিষ্ট থানা');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'দৈনিক সংবাদপত্রে প্রকাশিত হারানো বিজ্ঞপ্তি কাটিং', 1, 0, 'সংবাদপত্রের মূল অংশ', 'জাতীয় বা স্থানীয় দৈনিক সংবাদপত্র');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'শিক্ষাপ্রতিষ্ঠান প্রধানের সুপারিশ ও প্রত্যয়নপত্র', 1, 1, 'সিল ও স্বাক্ষরযুক্ত মূল কপি', 'যে স্কুল/কলেজ থেকে পরীক্ষা দেওয়া হয়েছিল');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 'প্রবেশপত্র (Admit Card) বা রেজিস্ট্রেশন কার্ডের ফটোকপি', 1, 0, 'ফটোকপি', 'সংরক্ষিত নথিপত্র');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 1, 'থানায় জিডি এবং দৈনিক পত্রিকায় হারানো বিজ্ঞপ্তি প্রকাশ', 'রোল, রেজিস্ট্রেশন ও শিক্ষাবর্ষ উল্লেখ করে থানায় জিডি করুন এবং জাতীয় পত্রিকায় বিজ্ঞপ্তি প্রকাশ করুন।', NULL, 'পত্রিকায় রোল ও পাশের সন নির্ভুলভাবে দিন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 2, 'শিক্ষা বোর্ডের অনলাইন পোর্টালে আবেদন ও সোনালী সেবা চালান প্রদান', 'সংশ্লিষ্ট শিক্ষা বোর্ডের ই-সেবা পোর্টালে ঢুকে তথ্য দিয়ে ফরম পূরণ ও সোনালী সেবার ফি পরিশোধ করুন।', 'https://dhakaeducationboard.gov.bd', 'ব্যাংক ট্রানজেকশন স্লিপ যত্ন করে রাখুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-bise-duplicate-academic-certificate-marksheet', 3, 'বোর্ড শাখায় আবেদন জমা ও মূল ডুপ্লিকেট সনদ সংগ্রহ', 'প্রিন্ট কপি, জিডি ও পেপারের মূল কাটিংসহ বোর্ডের সনদ শাখায় জমা দিন। নির্দিষ্ট দিনে সনদ ও নম্বরপত্র সংগ্রহ করুন।', NULL, 'সনদ গ্রহণের সময় প্রবেশপত্র বা মূল রেজিস্ট্রেশন কার্ড দেখাতে হবে।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-nu-degree-masters-certificate-transcript', 'জাতীয় বিশ্ববিদ্যালয় মূল সনদ, সাময়িক সনদ ও ট্রান্সক্রিপ্ট উত্তোলন', 'National University Original Certificate, Provisional Certificate & Transcript', 'শিক্ষা ও ভর্তি', 'বিশ্ববিদ্যালয় সনদ', 'পরীক্ষা নিয়ন্ত্রকের দপ্তর, জাতীয় বিশ্ববিদ্যালয় (গাজীপুর)',
    'জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি পাস, অনার্স, মাস্টার্স ও প্রফেশনাল কোর্সের মূল সনদ, সাময়িক সনদপত্র এবং একাডেমিক ট্রান্সক্রিপ্ট উত্তোলন পদ্ধতি ও সোনালী সেবা ফি নির্দেশিকা।', 'অনলাইন আবেদন ও সোনালী সেবায় টাকা জমার পর ১৫-২৫ কার্যদিবস', 'https://services.nu.ac.bd', 'https://services.nu.ac.bd', 'https://nu.ac.bd',
    'জাতীয় বিশ্ববিদ্যালয়ের ক্যাম্পাসে কোনো দালালের মাধ্যমে টাকা দেবেন না। সকল প্রকার সনদ উত্তোলনের আবেদন অনলাইনে services.nu.ac.bd এর মাধ্যমে হয় এবং ফি সরাসরি সোনালী ব্যাংকের পে-স্লিপ বা সোনালী পেমেন্ট গেটওয়েতে জমা হয়। মূল সনদ ফি ৫০০ টাকা, সাময়িক সনদ ৩০০ টাকা ও ট্রান্সক্রিপ্ট ৭০০ টাকা।', 'জাতীয় বিশ্ববিদ্যালয় হেল্পলাইন ০৯৬১৪০১৬০১৬ বা পরীক্ষা নিয়ন্ত্রক বরাবর সরাসরি grievance জানান।'
);

DELETE FROM service_fees WHERE service_id = 'bd-nu-degree-masters-certificate-transcript';
DELETE FROM service_documents WHERE service_id = 'bd-nu-degree-masters-certificate-transcript';
DELETE FROM service_steps WHERE service_id = 'bd-nu-degree-masters-certificate-transcript';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-nu-degree-masters-certificate-transcript', 'মূল সনদপত্র (Original Certificate) সরকারি ফি', 500, 1, 'সোনালী সেবা (অনলাইন/ব্যাংক)', 'সাধারণ ফি ৫০০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-nu-degree-masters-certificate-transcript', 'সাময়িক সনদপত্র (Provisional Certificate) ফি', 300, 1, 'সোনালী সেবা', 'সাধারণ ফি ৩০০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-nu-degree-masters-certificate-transcript', 'অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট ফি', 700, 1, 'সোনালী সেবা', 'প্রতি কপির সরকারি ফি ৭০০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-nu-degree-masters-certificate-transcript', 'জরুরি সার্ভিস অতিরিক্ত ফি', 500, 1, 'সোনালী সেবা', '৭ কার্যদিবসে ডেলিভারির জন্য জরুরি ফি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nu-degree-masters-certificate-transcript', 'মূল রেজিস্ট্রেশন কার্ডের ফটোকপি', 1, 0, 'স্পষ্ট স্ক্যান কপি', 'নিজস্ব সংরক্ষিত কপি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nu-degree-masters-certificate-transcript', 'সকল বর্ষের মূল প্রবেশপত্রের (Admit Card) ফটোকপি', 1, 0, 'স্ক্যান কপি', 'পরীক্ষার প্রবেশপত্র');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nu-degree-masters-certificate-transcript', 'সকল বর্ষের পরীক্ষার ফলাফল / অনলাইন মার্কশিট প্রিন্ট কপি', 1, 0, 'প্রিন্ট কপি', 'nu.ac.bd/results');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nu-degree-masters-certificate-transcript', 'জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'স্ক্যান কপি', 'নিজস্ব এনআইডি');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nu-degree-masters-certificate-transcript', 1, 'services.nu.ac.bd পোর্টালে অনলাইন ফরম পূরণ', 'জাতীয় বিশ্ববিদ্যালয়ের সার্ভিসেস পোর্টালে গিয়ে স্টুডেন্ট রেজিস্ট্রেশন নম্বর দিয়ে নির্দিষ্ট সনদের জন্য আবেদন করুন।', 'https://services.nu.ac.bd', 'রেজিস্ট্রেশন নম্বর ও সেশন সতর্কতার সাথে চেক করুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nu-degree-masters-certificate-transcript', 2, 'সোনালী সেবা পে-স্লিপ ডাউনলোড ও ফি প্রদান', 'সিস্টেম জেনারেটেড পে-স্লিপ প্রিন্ট করে সোনালী ব্যাংকের যেকোনো শাখায় অথবা অনলাইনে সোনালী ই-সেবায় ফি জমা দিন।', NULL, 'ফি পরিশোধের পর স্ট্যাটাস ''Paid'' হয়েছে কিনা প্রোফাইলে চেক করুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nu-degree-masters-certificate-transcript', 3, 'গাজীপুর মূল ক্যাম্পাস বা ডাকযোগে সনদ সংগ্রহ', 'সনদ প্রস্তুত হলে এসএমএস আসবে। গাজীপুর ওয়ান-স্টপ সার্ভিস থেকে অথবা ডাকযোগে মূল সনদপত্র গ্রহণ করুন।', NULL, 'ক্যাম্পাস থেকে উত্তোলনের সময় মূল রেজিস্ট্রেশন কার্ড প্রদর্শন আবশ্যক।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-land-mutation-appeal-miss-case-adc', 'ভুয়া নামজারি বাতিল ও মিস কেস / এডিসি রেভিনিউ আদালতে আপিল', 'Land Mutation Cancellation & Miss Case Appeal (ADC Revenue / Revision)', 'ভূমি ও সম্পত্তি', 'নামজারি আপিল ও মিস কেস', 'অতিরিক্ত জেলা প্রশাসক (রাজস্ব) এর আদালত / সহকারী কমিশনার (ভূমি) অফিস',
    'অবৈধ, জাল দলিল বা ওয়ারিশ গোপন করে প্রতারণামূলক নামজারি খতিয়ান বাতিলকরণ এবং ৩০ দিনের মধ্যে এডিসি (রাজস্ব) আদালতে মিস কেস ও আপিল দায়ের নির্দেশিকা।', 'নোটিশ, শুনানি ও আর্গুমেন্ট শেষে ৬০-৯০ কার্যদিবস', 'https://mutation.land.gov.bd', 'https://mutation.land.gov.bd', 'https://minland.gov.bd',
    'ভুয়া নামজারি বাতিলের জন্য কোনো ভুয়া মুহুরি বা দালালকে লাখ লাখ টাকা দেবেন না। সহকারী কমিশনার (ভূমি) এর আদেশের বিরুদ্ধে ৩০ কার্যদিবসের মধ্যে এডিসি রেভিনিউ আদালতে আপিল করতে মাত্র ২০ টাকার কোর্ট ফি লাগে। আইনসম্মত নথিপত্র থাকলে সরাসরি আইনজীবীর মাধ্যমে মিস কেস ফাইল করুন।', 'আদালত অবমাননা বা দুর্নীতি হলে বিভাগীয় কমিশনার বা ভূমি আপিল বোর্ড (ভূমি মন্ত্রণালয়) এ রিভিশন দায়ের করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-land-mutation-appeal-miss-case-adc';
DELETE FROM service_documents WHERE service_id = 'bd-land-mutation-appeal-miss-case-adc';
DELETE FROM service_steps WHERE service_id = 'bd-land-mutation-appeal-miss-case-adc';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'মিস কেস / আপিল পিটিশন কোর্ট ফি', 20, 1, 'কোর্ট ফি স্ট্যাম্প', 'আইনত নির্ধারিত সরকারি কোর্ট ফি মাত্র ২০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'নকল / সার্টিফাইড পর্চা উত্তোলন ফি', 100, 1, 'কোর্ট চালান', 'বাতিলযোগ্য নামজারি আদেশের অবিকল নকল ফি ১০০-১৫০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'নোটিশ জারি ও প্রসেস ফি (তলবানা)', 50, 1, 'কোর্ট চালান / নগদ', 'প্রতিপক্ষকে নোটিশ প্রেরণের সরকারি প্রসেস ফি ৫০-১০০ টাকা');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'বাতিলযোগ্য বিতর্কিত নামজারি খতিয়ান ও এসিল্যান্ডের আদেশের সার্টিফাইড কপি', 1, 1, 'সার্টিফাইড কোর্ট কপি', 'এসিল্যান্ড অফিসের রেকর্ডরুম');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'আবেদনকারীর মূল মালিকানার দলিল ও বায়া দলিলসমূহ', 1, 0, 'ফটোকপি ও মূল দলিল প্রদর্শন', 'সাব-রেজিস্ট্রি অফিস বা ব্যক্তিগত নথি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'সিএস, এসএ, আরএস ও বিএস খতিয়ানের জাবেদা নকল (পর্চা)', 1, 1, 'সার্টিফাইড কপি', 'জেলা প্রশাসকের রেকর্ডরুম (eporcha.gov.bd)');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-land-mutation-appeal-miss-case-adc', 'হালনাগাদ ভূমি উন্নয়ন কর (দাখিলা) রসিদ', 1, 0, 'অনলাইন দাখিলা কপি', 'ldtax.gov.bd');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-land-mutation-appeal-miss-case-adc', 1, 'বিতর্কিত নামজারির সার্টিফাইড নকল সংগ্রহ', 'এসিল্যান্ডের নামজারি আদেশের অনুলিপি ও নামজারি খতিয়ানের সার্টিফাইড কপি রেকর্ডরুম থেকে উত্তোলন করুন।', NULL, 'আদেশ পাওয়ার ৩০ দিনের মধ্যে আপিল দায়ের করা আবশ্যক।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-land-mutation-appeal-miss-case-adc', 2, 'এডিসি (রাজস্ব) আদালতে মিস কেস / আপিল পিটিশন দাখিল', 'প্রতারণা ও সঠিক মালিকানার স্বপক্ষে দলিলপত্র সংযুক্ত করে অতিরিক্ত জেলা প্রশাসক (রাজস্ব) এর আদালতে পিটিশন জমা দিন।', NULL, 'কোর্ট ফি স্ট্যাম্প সঠিকভাবে পিটিশনে লাগাতে হবে।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-land-mutation-appeal-miss-case-adc', 3, 'উভয় পক্ষের শুনানি ও রায় প্রদান', 'আদালত প্রতিপক্ষকে নোটিশ প্রদান করবেন এবং উভয় পক্ষের সাক্ষ্য-প্রমাণ ও শুনানি শেষে ভুয়া নামজারি বাতিলের রায় প্রদান করবেন।', NULL, 'রায় হলে এসিল্যান্ড অফিস স্বয়ংক্রিয়ভাবে বালাম সংশোধন করে পূর্বের বৈধ রেকর্ড বহাল করবে।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-dc-land-acquisition-la-case-compensation', 'ভূমি অধিগ্রহণ LA Case ক্ষতিপূরণের ৩ গুণ টাকা ডিসি অফিস থেকে উত্তোলন', 'Land Acquisition (LA Case) 300% Compensation Claim from DC Office', 'ভূমি ও সম্পত্তি', 'ভূমি অধিগ্রহণ ও ক্ষতিপূরণ', 'ভূমি অধিগ্রহণ শাখা, জেলা প্রশাসকের কার্যালয় (LA Section, DC Office)',
    'স্থাবর সম্পত্তি অধিগ্রহণ ও হুকুমদখল আইন ২০১৭ অনুযায়ী সরকারি প্রকল্পের জন্য ভূমি অধিগ্রহণে জমি, স্থাপনা ও ফসলের ওপর সরকারি নির্ধারিত বাজারদরের ২০০% অতিরিক্ত সহ মোট ৩০০% (৩ গুণ) ক্ষতিপূরণ চেক উত্তোলনের সঠিক নিয়ম।', '৭ ও ৮ ধারার নোটিশ ও শুনানির পর ৬০-১২০ কার্যদিবস', 'https://lams.minland.gov.bd', 'https://lams.minland.gov.bd', 'https://minland.gov.bd',
    'ডিসি অফিসের এলএ শাখায় কোনো দালাল বা মধ্যস্বত্বভোগীকে ১ টাকাও ঘুষ বা পারসেন্টেজ দেবেন না। ক্ষতিপূরণের টাকা সরাসরি জমির প্রকৃত মালিকের নিজস্ব ব্যাংক একাউন্টে একাউন্ট পেয়ি চেকের মাধ্যমে ডিসি অফিস থেকে দেওয়া হয়। দালালরা ১০% থেকে ২০% কমিশন কাটার মিথ্যা লোভ দেখায়।', 'ক্ষতিপূরণের অ্যাওয়ার্ডের বিরুদ্ধে আপত্তি থাকলে যুগ্ম জেলা জজ আদালতে ''আরবিট্রেশন আদালতে'' আবেদন দায়ের করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-dc-land-acquisition-la-case-compensation';
DELETE FROM service_documents WHERE service_id = 'bd-dc-land-acquisition-la-case-compensation';
DELETE FROM service_steps WHERE service_id = 'bd-dc-land-acquisition-la-case-compensation';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'ক্ষতিপূরণ দাবি আবেদন সরকারি ফি', 0, 1, 'বিনামূল্যে', 'আইনত কোনো ফি নেই (সম্পূর্ণ ফ্রি)');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'দাবি পিটিশন কোর্ট ফি স্ট্যাম্প', 20, 1, 'কোর্ট ফি স্ট্যাম্প', 'আবেদনে ২০ টাকার কোর্ট ফি স্ট্যাম্প আবশ্যক');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'ভূমি অধিগ্রহণের ৭ ও ৮ ধারার নোটিশের মূল কপি', 1, 0, 'ডিসি অফিসের নোটিশ', 'ডিসি অফিসের এলএ শাখা থেকে প্রেরিত');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'জমির মূল ক্রয় দলিল, বায়া দলিল ও বণ্টননামা দলিল', 1, 0, 'মূল কপি ও সত্যায়িত ফটোকপি', 'ব্যক্তিগত মালিকানা রেকর্ড');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'সিএস, এসএ, আরএস ও বিএস নামজারি খতিয়ানের মূল পর্চা', 1, 1, 'সার্টিফাইড কপি', 'জেলা প্রশাসকের রেকর্ডরুম');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের অনলাইন দাখিলা', 1, 0, 'অনলাইন প্রিন্ট', 'ldtax.gov.bd');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-dc-land-acquisition-la-case-compensation', 'আবেদনকারীর এনআইডি, ছবি এবং ব্যাংক একাউন্টের MICR চেক কপি', 1, 0, 'মূল ও স্ক্যান কপি', 'নিজস্ব ব্যাংক শাখা');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dc-land-acquisition-la-case-compensation', 1, '৪ ও ৭ ধারার নোটিশ যাচাই ও আপত্তি দাখিল', 'অধিগ্রহণের প্রাথমিক নোটিশ পাওয়ার পর কোনো আপত্তি থাকলে নির্ধারিত ১৫ দিনের মধ্যে ডিসি অফিসে আপত্তি জানান।', NULL, 'স্থাপনা বা গাছপালার যৌথ তদন্তের সময় সশরীরে উপস্থিত থাকুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dc-land-acquisition-la-case-compensation', 2, '৮ ধারার নোটিশ প্রাপ্তি ও ক্ষতিপূরণ দাবির নথিপত্র জমা', 'চূড়ান্ত অ্যাওয়ার্ডের নোটিশ পেলে জমির নিরবচ্ছিন্ন মালিকানার সকল প্রমাণপত্রসহ এলএ শাখায় আবেদন ফরম জমা দিন।', 'https://lams.minland.gov.bd', 'সকল দলিলের বায়া চেইন নিখুঁতভাবে সাজান।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-dc-land-acquisition-la-case-compensation', 3, 'শুনানি নিষ্পত্তি ও একাউন্ট পেয়ি চেক গ্রহণ', 'ভূমি অধিগ্রহণ কর্মকর্তার উপস্থিতিতে শুনানি শেষ হলে সরকারি নির্ধারিত ক্ষতিপূরণের চেক গ্রহণ করুন।', NULL, 'চেকটি সরাসরি আপনার ব্যাংক একাউন্টে জমা দিয়ে টাকা তুলতে পারবেন।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-magistrate-court-affidavit-notary-public', 'ম্যাজিস্ট্রেট কোর্ট হলফনামা ও নোটারি পাবলিক এফিডেভিট', 'First Class Magistrate Court Affidavit & Notary Public Attestation', 'আইন ও বিচারিক সেবা', 'হলফনামা ও নোটারি', 'চিফ জুডিসিয়াল/মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত ও আইন মন্ত্রণালয় অনুমোদিত নোটারি পাবলিক',
    'নাম সংশোধন, পারিবারিক আপস, উত্তরাধিকারী ঘোষণা, আর্থিক অঙ্গীকার ও বিদেশ গমনের জন্য প্রথম শ্রেণির ম্যাজিস্ট্রেট কোর্ট হলফনামা ও নোটারি পাবলিক সম্পাদনের অফিশিয়াল নিয়ম।', 'একই দিনে তাৎক্ষণিক সম্পন্ন (১-৩ ঘণ্টা)', 'https://lawjusticediv.gov.bd', NULL, 'https://lawjusticediv.gov.bd',
    'কোর্ট প্রাঙ্গণে কোনো অনিবন্ধিত দালালের কাছে যাবেন না। সরকারি নন-জুডিশিয়াল স্ট্যাম্পে নোটারি ফি ৫০ থেকে ২০০ টাকা এবং ম্যাজিস্ট্রেট কোর্ট হলফনামা সরকারি কোর্ট ফি সাধারণত ২০০ থেকে ৩০০ টাকার স্ট্যাম্পে হয়। সরকার অনুমোদিত আইনজীবী বা নোটারি পাবলিকের সই ও সরকারি রেজিস্ট্রেশন সিল যাচাই করুন।', 'জাল স্ট্যাম্প বা প্রতারণার ক্ষেত্রে জেলা আইনজীবী সমিতি (Bar Association) বা আইন মন্ত্রণালয়ের সলিসিটর অনুবিভাগে অভিযোগ করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-magistrate-court-affidavit-notary-public';
DELETE FROM service_documents WHERE service_id = 'bd-magistrate-court-affidavit-notary-public';
DELETE FROM service_steps WHERE service_id = 'bd-magistrate-court-affidavit-notary-public';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-magistrate-court-affidavit-notary-public', 'নোটারি পাবলিক সত্যায়ন সরকারি ফি', 100, 1, 'নগদ রসিদ', 'ডকুমেন্ট ও স্ট্যাম্পভেদে সরকারি ফি ৫০-২০০ টাকা');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-magistrate-court-affidavit-notary-public', 'নন-জুডিশিয়াল স্ট্যাম্প খরচ (হলফনামা)', 300, 1, 'ট্রেজারি চালানে কেনা স্ট্যাম্প', 'আইন অনুযায়ী ৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে টাইপ আবশ্যক');
INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-magistrate-court-affidavit-notary-public', 'প্রথম শ্রেণির ম্যাজিস্ট্রেট কোর্ট হলফনামা ফি', 200, 1, 'কোর্ট ফি স্ট্যাম্প', 'ম্যাজিস্ট্রেট কোর্টের হলফনামা ফি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-magistrate-court-affidavit-notary-public', 'হলফকারীর মূল জাতীয় পরিচয়পত্র (NID) বা পাসপোর্ট', 1, 0, 'মূল কপি', 'আবেদনকারীর নিজস্ব এনআইডি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-magistrate-court-affidavit-notary-public', '৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে টাইপকৃত হলফনামা মুসাবিদা', 1, 0, 'মূল স্ট্যাম্প প্রিন্ট', 'অনুমোদিত ভেন্ডার বা আইনজীবী');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-magistrate-court-affidavit-notary-public', 'নাম বা তথ্য সংশোধনের স্বপক্ষে মূল প্রমাণাদি (সার্টিফিকেট/জন্ম সনদ)', 1, 0, 'ফটোকপি ও মূল কপি', 'প্রাসঙ্গিক প্রতিষ্ঠান');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-magistrate-court-affidavit-notary-public', 'হলফকারীর সদ্য তোলা ২ কপি পাসপোর্ট সাইজ ছবি', 1, 0, 'ছবি', 'স্টুডিও ল্যাব');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-magistrate-court-affidavit-notary-public', 1, '৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা টাইপ', 'একজন বিজ্ঞ আইনজীবীর মাধ্যমে সঠিক আইনি ধারায় হলফনামার বক্তব্য ৩০০ টাকার স্ট্যাম্পে টাইপ করুন।', NULL, 'স্ট্যাম্পটি লাইসেন্সধারী ভেন্ডারের কাছ থেকে কেনা নিশ্চিত করুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-magistrate-court-affidavit-notary-public', 2, 'হলফকারীর সশরীরে আদালতে বা নোটারির সামনে উপস্থিতি', 'হলফকারীকে সশরীরে প্রথম শ্রেণির ম্যাজিস্ট্রেট বা নোটারি পাবলিকের সামনে দাঁড়িয়ে সত্যপাঠ শপথ নিতে হবে।', NULL, 'প্রক্সি বা অন্য কারও দ্বারা হলফনামা করানো আইনত দণ্ডনীয় ফৌজদারি অপরাধ।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-magistrate-court-affidavit-notary-public', 3, 'স্বাক্ষর, সিল ও বালাম বইয়ে এন্ট্রি গ্রহণ', 'ম্যাজিস্ট্রেট বা নোটারি পাবলিকের স্বাক্ষর, তারিখ ও রেজিস্টার নম্বরসহ স্টিকার সম্বলিত মূল হলফনামা সংগ্রহ করুন।', NULL, 'নোটারি রেজিস্টার বইয়ে ক্রমিক নম্বর ও স্বাক্ষর অবশ্যই দিতে হবে।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-nbr-etin-cancellation-deregistration', 'অপ্রয়োজনীয় বা অব্যবহৃত ই-টিআইএন (e-TIN) বাতিল ও নিষ্ক্রিয়করণ', 'e-TIN Cancellation & De-registration Procedure (NBR)', 'কর ও রাজস্ব', 'আয়কর ও টিআইএন', 'জাতীয় রাজস্ব বোর্ড (NBR), কর অঞ্চল ও কর সার্কেল অফিস',
    'কোনো করযোগ্য আয় না থাকা, ভুলবশত টিআইএন খোলা বা ক্রেডিট কার্ড/ট্রেড লাইসেন্স বন্ধ হয়ে যাওয়ার কারণে প্রতি বছর শূন্য রিটার্ন জমার ঝামেলা থেকে বাঁচতে টিআইএন বাতিলের অফিশিয়াল নিয়ম।', 'উপ-কর কমিশনারের অডিট ও শুনানি শেষে ৩০-৪৫ কার্যদিবস', 'https://incometax.gov.bd', 'https://incometax.gov.bd', 'https://nbr.gov.bd',
    'টিআইএন বাতিলের নামে ইনকাম ট্যাক্স অফিসের দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে। টিআইএন বাতিলের কোনো সরকারি ফি নেই (সম্পূর্ণ ফ্রি)। আয়কর আইন ২০২৩ অনুযায়ী করযোগ্য আয় না থাকার স্বপক্ষে সরাসরি আপনার কর সার্কেলের উপ-কর কমিশনার (DCT) বরাবর দরখাস্ত দিন।', 'সার্কেল কর কর্মকর্তা অহেতুক ফাইল আটকে রাখলে সংশ্লিষ্ট রেঞ্জ কর পরিদর্শক বা কর কমিশনার বরাবর অভিযোগ করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-nbr-etin-cancellation-deregistration';
DELETE FROM service_documents WHERE service_id = 'bd-nbr-etin-cancellation-deregistration';
DELETE FROM service_steps WHERE service_id = 'bd-nbr-etin-cancellation-deregistration';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-nbr-etin-cancellation-deregistration', 'টিআইএন বাতিল ও নিষ্ক্রিয়করণ সরকারি ফি', 0, 1, 'বিনামূল্যে', 'আইনত সম্পূর্ণ বিনামূল্যে (০ টাকা)');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nbr-etin-cancellation-deregistration', 'উপ-কর কমিশনার (DCT) বরাবর টিআইএন বাতিলের কারণ সম্বলিত লিখিত আবেদন', 1, 0, 'লিখিত দরখাস্ত', 'আবেদনকারীর নিজস্ব দরখাস্ত');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nbr-etin-cancellation-deregistration', 'বিদ্যমান e-TIN সনদের ফটোকপি', 1, 0, 'সনদ ফটোকপি', 'incometax.gov.bd');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nbr-etin-cancellation-deregistration', 'বিগত ৩ বছরের শূন্য বা দাখিলকৃত আয়কর রিটার্নের রসিদ', 1, 0, 'প্রাপ্তি স্বীকারপত্র', 'কর সার্কেল রেকর্ড');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nbr-etin-cancellation-deregistration', 'কোনো করযোগ্য আয় না থাকার হলফনামা বা ব্যাংক স্টেটমেন্ট', 1, 0, 'মূল ব্যাংক স্টেটমেন্ট', 'ব্যাংক শাখা');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-nbr-etin-cancellation-deregistration', 'যে কারণে টিআইএন খোলা হয়েছিল তা বন্ধের প্রমাণ (যেমন: ট্রেড লাইসেন্স বা ক্রেডিট কার্ড সমর্পণ পত্র)', 0, 0, 'প্রত্যয়নপত্র', 'সংশ্লিষ্ট ব্যাংক বা প্রতিষ্ঠান');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nbr-etin-cancellation-deregistration', 1, 'নিজস্ব কর সার্কেল নির্ধারণ ও লিখিত দরখাস্ত প্রস্তুত', 'আপনার টিআইএন সার্টিফিকেটে উল্লেখিত নির্দিষ্ট কর অঞ্চল ও কর সার্কেল চিহ্নিত করে ডিসিটি বরাবর আবেদন তৈরি করুন।', NULL, 'টিআইএন সার্টিফিকেটেই আপনার সার্কেল নম্বর লেখা থাকে।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nbr-etin-cancellation-deregistration', 2, 'কর সার্কেল অফিসে আবেদন ও নথিপত্র জমা', 'লিখিত দরখাস্ত ও স্বপক্ষের সকল প্রমাণপত্র কর সার্কেল অফিসে জমা দিয়ে রিসিভড কপি সংগ্রহ করুন।', NULL, 'রিসিভড কপির সিল ও তারিখ যত্ন করে ফাইল করে রাখুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-nbr-etin-cancellation-deregistration', 3, 'উপ-কর কমিশনারের সন্তুষ্টি ও এনবিআর সিস্টেমে নিষ্ক্রিয়করণ', 'উপ-কর কমিশনার করযোগ্য আয় না থাকার বিষয়ে নিশ্চিত হয়ে কর কমিশনারের অনুমোদনে টিআইএন স্থায়ীভাবে নিষ্ক্রিয় করবেন।', 'https://incometax.gov.bd', 'নিষ্ক্রিয় হওয়ার পর ভবিষ্যতে আর কোনো রিটার্ন দাখিল করতে হবে না।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-pm-relief-fund-medical-financial-grant', 'প্রধানমন্ত্রীর ত্রাণ ও কল্যাণ তহবিল থেকে চিকিৎসার এককালীন অনুদান', 'PM Relief & Welfare Fund Financial & Medical Assistance Grant', 'স্বাস্থ্য ও চিকিৎসা', 'চিকিৎসা অনুদান ও কল্যাণ', 'প্রধানমন্ত্রীর কার্যালয় (ত্রাণ ও কল্যাণ তহবিল অনুবিভাগ)',
    'ক্যান্সার, কিডনি, হার্ট, পক্ষাঘাত ও অন্যান্য জটিল রোগে আক্রান্ত দরিদ্র ও অসচ্ছল নাগরিকদের চিকিৎসার জন্য ৫০,০০০ থেকে ২,০০,০০০ টাকা পর্যন্ত সরকারি এককালীন আর্থিক সহায়তা অনুদান।', 'আবেদন যাচাই ও বরাদ্দ অনুমোদন সাপেক্ষে ৩০-৬০ কার্যদিবস', 'https://pmo.gov.bd', 'https://pmo.gov.bd', 'https://pmo.gov.bd',
    'ত্রাণ তহবিলের অনুদান পেতে কোনো মধ্যস্বত্বভোগী বা দালালকে ১ টাকাও দেবেন না। আবেদন সম্পূর্ণ বিনামূল্যে। সংসদ সদস্যের সুপারিশ বা ডিসি অফিসের মাধ্যমে সরাসরি প্রধানমন্ত্রীর কার্যালয়ে আবেদন পৌঁছানো যায়। অনুদানের টাকা সরাসরি আবেদনকারীর ব্যাংক একাউন্টে একাউন্ট পেয়ি চেকের মাধ্যমে পাঠানো হয়।', 'কোনো অসদুপায় বা ঘুষ দাবির শিকার হলে সরাসরি পিএমও ডিরেক্টর (ত্রাণ) বা হটলাইনে যোগাযোগ করুন।'
);

DELETE FROM service_fees WHERE service_id = 'bd-pm-relief-fund-medical-financial-grant';
DELETE FROM service_documents WHERE service_id = 'bd-pm-relief-fund-medical-financial-grant';
DELETE FROM service_steps WHERE service_id = 'bd-pm-relief-fund-medical-financial-grant';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'চিকিৎসা সহায়তা অনুদান আবেদন ফি', 0, 1, 'বিনামূল্যে', 'সম্পূর্ণ বিনামূল্যে সরকারি মানবকল্যাণমূলক সেবা (০ টাকা)');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'প্রধানমন্ত্রীর ত্রাণ ও কল্যাণ তহবিল নির্ধারিত আবেদন ফরম', 1, 0, 'মূল ফরম', 'পিএমও ওয়েবসাইট বা ডিসি অফিস');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'স্থানীয় সংসদ সদস্যের (MP) লিখিত প্রত্যয়ন ও জোরালো সুপারিশপত্র', 1, 0, 'মূল প্যাড ও স্বাক্ষর', 'সংশ্লিষ্ট এলাকার সংসদ সদস্য');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'সরকারি হাসপাতালের বিশেষজ্ঞ চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের আনুমানিক প্রাক্কলন', 1, 1, 'চিকিৎসক সিলযুক্ত মূল কপি', 'সরকারি মেডিকেল কলেজ বা বিশেষায়িত হাসপাতাল');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'রোগী ও আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি', 1, 0, 'ফটোকপি', 'নিজস্ব এনআইডি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-pm-relief-fund-medical-financial-grant', 'আবেদনকারীর নিজস্ব সক্রিয় ব্যাংক একাউন্টের তথ্য ও চেক বইয়ের পাতা', 1, 0, 'চেকের পাতা', 'ব্যাংক শাখা');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-pm-relief-fund-medical-financial-grant', 1, 'আবেদন ফরম সংগ্রহ ও চিকিৎসকের প্রেসক্রিপশন সংযোজন', 'প্রধানমন্ত্রীর কার্যালয়ের নির্ধারিত আবেদন ফরম পূরণ করে সরকারি হাসপাতালের চিকিৎসকের সনদ ও খরচের এস্টিমেট যুক্ত করুন।', NULL, 'চিকিৎসকের বিএমডিসি রেজিস্ট্রেশন নম্বর ও সিল স্পষ্ট থাকতে হবে।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-pm-relief-fund-medical-financial-grant', 2, 'সংসদ সদস্যের সুপারিশ গ্রহণ ও ডিসি অফিসে জমা', 'ফরমটিতে স্থানীয় সংসদ সদস্যের সুপারিশ ও প্রত্যয়ন নিয়ে সরাসরি প্রধানমন্ত্রীর কার্যালয়ের ত্রাণ শাখায় বা জেলা প্রশাসকের মাধ্যমে পাঠান।', NULL, 'আবেদনের একটি ডুপ্লিকেট ফটোকপি নিজের কাছে রাখুন।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-pm-relief-fund-medical-financial-grant', 3, 'তহবিল বরাদ্দ অনুমোদন ও অনুদানের চেক গ্রহণ', 'প্রধানমন্ত্রীর কার্যালয়ের যাচাই শেষে বরাদ্দ অনুমোদিত হলে আবেদনকারীর নামে পাঠানো অনুদানের চেক সংগ্রহ করুন।', NULL, 'চেকটি ব্যাংক একাউন্টে জমা দিয়ে চিকিৎসার অর্থ উত্তোলন করুন।');

INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    'bd-mowca-one-stop-crisis-center-occ', 'ওয়ান-স্টপ ক্রাইসিস সেন্টার (OCC) ও নারী ও শিশু নির্যাতন প্রতিরোধ সেবা', 'One-Stop Crisis Center (OCC) & 109 National Violence Prevention Helpline', 'জরুরি ও সহায়তা', 'জরুরি আইনি ও চিকিৎসা সহায়তা', 'নারী ও শিশু বিষয়ক মন্ত্রণালয়, স্বাস্থ্য সেবা বিভাগ ও বাংলাদেশ পুলিশ',
    'শারীরিক, মানসিক বা পারিবারিক নির্যাতনের শিকার নারী ও শিশুদের দেশের ১৪টি সরকারি মেডিকেল কলেজ হাসপাতালে বিনামূল্যে জরুরি চিকিৎসা, আইনি পরামর্শ, ডিএনএ পরীক্ষা, আশ্রয় ও পুলিশি সুরক্ষা সেবা।', 'তাৎক্ষণিক জরুরি সেবা (২৪ ঘণ্টা চালু)', 'https://mowca.gov.bd', NULL, 'https://mowca.gov.bd',
    'ওসিসি (OCC) এর সকল চিকিৎসা, ওষুধ, আইনি সহায়তা, ডিএনএ টেস্ট ও খাবার সরকার থেকে সম্পূর্ণ বিনামূল্যে দেওয়া হয়। হাসপাতালের কোনো অসাধু কর্মচারী বা দালালকে ১ টাকাও দেবেন না। যে কোনো নির্যাতন বা বাল্যবিয়ে রোধে জাতীয় হেল্পলাইন ১০৯ নম্বরে টোল-ফ্রি ২৪ ঘণ্টা কল করা যায়।', 'সেবায় অবহেলা হলে জাতীয় জরুরি সেবা ৯৯৯, নারী নির্যাতন হেল্পলাইন ১০৯ অথবা হাসপাতাল পরিচালক বরাবর সরাসরি জানান।'
);

DELETE FROM service_fees WHERE service_id = 'bd-mowca-one-stop-crisis-center-occ';
DELETE FROM service_documents WHERE service_id = 'bd-mowca-one-stop-crisis-center-occ';
DELETE FROM service_steps WHERE service_id = 'bd-mowca-one-stop-crisis-center-occ';

INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('bd-mowca-one-stop-crisis-center-occ', 'ওসিসি জরুরি চিকিৎসা, ওষুধ ও আইনি সেবা ফি', 0, 1, 'বিনামূল্যে', 'সরকার কর্তৃক সম্পূর্ণ বিনামূল্যে প্রদত্ত জরুরি নাগরিক অধিকার সেবা (০ টাকা)');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-mowca-one-stop-crisis-center-occ', 'ভিকটিম বা অভিভাবকের এনআইডি / জন্ম নিবন্ধন (যদি থাকে, না থাকলেও সেবা দেওয়া হয়)', 0, 0, 'যে কোনো পরিচয়পত্র', 'সংরক্ষিত কপি');
INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('bd-mowca-one-stop-crisis-center-occ', 'পূর্ববর্তী কোনো চিকিৎসা বা পুলিশ রিপোর্ট (যদি থাকে)', 0, 0, 'প্রেসক্রিপশন/রিপোর্ট', 'হাসপাতাল বা থানা');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-mowca-one-stop-crisis-center-occ', 1, '১০৯ হেল্পলাইনে কল বা সরাসরি সরকারি মেডিকেল ওসিসিতে গমন', 'টোল-ফ্রি ১০৯ নম্বরে ফোন দিন অথবা নিকটস্থ সরকারি মেডিকেল কলেজ হাসপাতালের ওসিসি ইউনিটে সরাসরি উপস্থিত হন।', 'tel:109', '১০৯ নম্বরে ফোন করতে কোনো ব্যালেন্স কাটে না, এটি সম্পূর্ণ ফ্রি।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-mowca-one-stop-crisis-center-occ', 2, 'তাৎক্ষণিক জরুরি চিকিৎসা ও ডাক্তারি পরীক্ষা (মেডিকেল ও ডিএনএ)', 'বিশেষজ্ঞ চিকিৎসক দল কোনো খরচ ছাড়াই ভিকটিমকে জরুরি চিকিৎসা, ওষুধ এবং ফরেনসিক পরীক্ষা প্রদান করবেন।', NULL, 'ঘটনার পর দ্রুত হাসপাতালে আসলে আলামত ও প্রমাণ নষ্ট হয় না।');
INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('bd-mowca-one-stop-crisis-center-occ', 3, 'পুলিশি জিডি/মামলা এবং সরকারি আইনজীবী দ্বারা বিনামূল্যে আইনি লড়াই', 'ওসিসিতে নিয়োজিত পুলিশ কর্মকর্তা সরাসরি জবানবন্দি গ্রহণ করে মামলা দায়ের করেন এবং সরকারি খরচে আইনজীবী নিযুক্ত করা হয়।', NULL, 'ভিকটিমের মানসিক পুনর্বাসন ও নিরাপদ আশ্রয়ের সার্বিক ব্যবস্থাও ওসিসি করে থাকে।');