import json
import subprocess
import os

NEW_SERVICES = [
    {
        "service_id": "bd-death-registration-bdris-guide",
        "title_bn": "অনলাইন মৃত্যু নিবন্ধন ও মৃত্যু সনদ নির্দেশিকা",
        "title_en": "Online Death Registration & Digital Certificate Guide",
        "category": "নাগরিক সনদ ও নিবন্ধন",
        "sub_category": "মৃত্যু নিবন্ধন",
        "department_agency": "রেজিস্ট্রার জেনারেলের কার্যালয়, জন্ম ও মৃত্যু নিবন্ধন (BDRIS), স্থানীয় সরকার বিভাগ",
        "summary": "ব্যাংক অ্যাকাউন্ট নমিনি ক্লেইম, ওয়ারিশান সনদ, জমিজমা নামজারি খারিজ, পেনশন ও পারিবারিক বীমা দাবি নিষ্পত্তির জন্য ডিজিটাল মৃত্যু নিবন্ধন সনদ সংগ্রহ নির্দেশিকা।",
        "processing_time_sla": "আবেদন জমা দেওয়ার পর ৩-৭ কার্যদিবস",
        "official_portal_url": "https://bdris.gov.bd",
        "application_url": "https://bdris.gov.bd/dr/application",
        "citizen_charter_url": "https://bdris.gov.bd/citizen-charter",
        "anti_broker_warning": "মৃত্যু সনদের জন্য কোনো দালাল বা মধ্যস্বত্বভোগীকে ১ টাকাও বাড়তি দেবেন না। মৃত্যুর ৪৫ দিনের মধ্যে আবেদন সম্পূর্ণ বিনামূল্যে (০ টাকা) এবং পরবর্তীতে মাত্র ২৫ থেকে ৫০ টাকা। নিশ্চিত করুন সনদটি অফিসিয়াল কিউআর কোডযুক্ত।",
        "grievance_remedy": "সনদ দিতে অতিরিক্ত অর্থ দাবি করলে সংশ্লিষ্ট উপজেলা নির্বাহী অফিসার (ইউএনও) বা জেলা প্রশাসক বরাবর অভিযোগ দায়ের করুন।",
        "fees": [
            {"category_name": "মৃত্যুর ৪৫ দিনের মধ্যে আবেদন সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "সম্পূর্ণ বিনামূল্যে (০ টাকা)"},
            {"category_name": "মৃত্যুর ৪৬ দিন থেকে ৫ বছরের মধ্যে সরকারি ফি", "amount_bdt": 25, "vat_included": 1, "payment_method": "অনলাইন / রসিদ", "remarks": "সরকারি নির্ধারিত ফি ২৫ টাকা"},
            {"category_name": "মৃত্যুর ৫ বছর পর যেকোনো সময় সরকারি ফি", "amount_bdt": 50, "vat_included": 1, "payment_method": "অনলাইন / রসিদ", "remarks": "সরকারি নির্ধারিত ফি ৫০ টাকা"},
            {"category_name": "মৃত্যু সনদের ইংরেজি কপি ফি", "amount_bdt": 50, "vat_included": 1, "payment_method": "অনলাইন / রসিদ", "remarks": "ইংরেজি ভার্সন সনদ ফি ৫০ টাকা"}
        ],
        "documents": [
            {"name": "রেজিস্টার্ড চিকিৎসক/হাসপাতালের মৃত্যু সনদ বা কবরস্থান/শ্মশান রসিদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও স্ক্যান কপি", "how_to_obtain": "মৃত্যু হওয়া হাসপাতাল বা কবরস্থান পরিচালনা কমিটি"},
            {"name": "মৃত ব্যক্তির জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "স্ক্যান কপি", "how_to_obtain": "মৃত ব্যক্তির সংরক্ষিত নথিপত্র"},
            {"name": "আবেদনকারী ওয়ারিশের জাতীয় পরিচয়পত্র (NID)", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি ও স্ক্যান কপি", "how_to_obtain": "আবেদনকারীর নিজস্ব এনআইডি"}
        ],
        "steps": [
            {"step_number": 1, "title": "bdris.gov.bd পোর্টালে অনলাইন ফরম পূরণ", "description": "bdris.gov.bd ওয়েবসাইটে গিয়ে মৃত্যু নিবন্ধন আবেদন সিলেক্ট করে ইউনিয়ন পরিষদ বা পৌরসভা বেছে নিন।", "action_url": "https://bdris.gov.bd", "tips": "মৃত ব্যক্তির মৃত্যুর সঠিক তারিখ ও কারণ উল্লেখ করুন।"},
            {"step_number": 2, "title": "প্রমাণপত্র আপলোড ও সাবমিট", "description": "চিকিৎসকের প্রত্যয়ন ও এনআইডি কপি আপলোড করে আবেদন সাবমিট করুন এবং আবেদন ফর্মের প্রিন্ট কপি ডাউনলোড করুন।", "action_url": None, "tips": "অ্যাপ্লিকেশন আইডি সংরক্ষণ করুন।"},
            {"step_number": 3, "title": "কাগজপত্র জমা ও ডিজিটাল সনদ গ্রহণ", "description": "প্রিন্ট কপিসহ ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলর অফিসে গিয়ে রসিদ কেটে কিউআর কোডযুক্ত আসল ডিজিটাল সনদপত্র গ্রহণ করুন।", "action_url": None, "tips": "সনদের কিউআর কোড স্ক্যান করে অনলাইন ডাটাবেজে সঠিকতা যাচাই করে নিন।"}
        ]
    },
    {
        "service_id": "bd-qazi-marriage-registration-fee-scale",
        "title_bn": "মুসলিম বিবাহ নিবন্ধন ও নিকাহনামা সরকারি কাজি ফি স্কেল নির্দেশিকা",
        "title_en": "Muslim Marriage Registration & Official Statutory Kazi Fee Scale",
        "category": "আইন ও বিচারিক সেবা",
        "sub_category": "বিবাহ ও নিকাহ রেজিস্ট্রি",
        "department_agency": "নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ, আইন মন্ত্রণালয়",
        "summary": "মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা ২০০৯ (সংশোধিত ২০২২) অনুযায়ী দেনমোহরের পরিমাণ অনুপাতে সরকারি নির্ধারিত কাজি ফি হিসাব ও অতিরিক্ত অর্থ আদায় প্রতিরোধ গাইড।",
        "processing_time_sla": "বিবাহ অনুষ্ঠান সম্পন্ন হওয়ার সাথে সাথে তাৎক্ষণিক বালাম বইয়ে রেজিস্ট্রি",
        "official_portal_url": "https://lawjusticediv.gov.bd",
        "application_url": None,
        "citizen_charter_url": "https://lawjusticediv.gov.bd/site/page/citizen_charter",
        "anti_broker_warning": "কাজি অফিসে সাধারণ মানুষকে ভয়ভীতি দেখিয়ে দেনমোহরের ভুয়া শতাংশ দাবি করে ২০,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত হাতিয়ে নেয়। দেনমোহর ১০ লাখ টাকা হলেও মোট সরকারি ফি মাত্র ৫,৬০০ টাকা (৪ লাখে ৫,০০০ + বাকি ৬ লাখে ৬০০)। কাজি বাড়তি টাকা দাবি করলে রসিদ চান এবং জেলা রেজিস্ট্রার বরাবর লিখিত অভিযোগ দিন।",
        "grievance_remedy": "কাজি রসিদ ছাড়া অতিরিক্ত অর্থ দাবি করলে জেলা জজ আদালতের জেলা রেজিস্ট্রার (District Registrar) বা দুদক হটলাইন ১০৬-এ অভিযোগ জানান।",
        "fees": [
            {"category_name": "দেনমোহরের প্রতি ১,০০০ টাকায় কাজি ফি (৪ লাখ টাকা পর্যন্ত)", "amount_bdt": 12.5, "vat_included": 1, "payment_method": "কাজি অফিসে রসিদযুক্ত পেমেন্ট", "remarks": "১.২৫% হার। যেমন: ১ লাখ টাকায় ১,২৫০ টাকা, ৪ লাখ টাকায় ৫,০০০ টাকা।"},
            {"category_name": "৪ লাখের অতিরিক্ত দেনমোহরে প্রতি লাখে ফি", "amount_bdt": 100, "vat_included": 1, "payment_method": "কাজি অফিসে রসিদযুক্ত পেমেন্ট", "remarks": "৪ লাখ টাকার অধিক যেকোনো পরিমাণের জন্য প্রতি লাখে মাত্র ১০০ টাকা।"},
            {"category_name": "সর্বনিম্ন সরকারি বিবাহ নিবন্ধন ফি", "amount_bdt": 200, "vat_included": 1, "payment_method": "নগদ রসিদ", "remarks": "দেনমোহর যত কমই হোক সর্বনিম্ন ফি ২০০ টাকা।"},
            {"category_name": "কাজি বালাম বই তল্লাশি ফি (প্রতি বছর)", "amount_bdt": 50, "vat_included": 1, "payment_method": "নগদ রসিদ", "remarks": "পুরাতন বিয়ের রেকর্ড খোঁজার সরকারি তলবানা ফি মাত্র ৫০ টাকা।"}
        ],
        "documents": [
            {"name": "বর ও কনের জাতীয় পরিচয়পত্র (NID) বা অনলাইন ডিজিটাল জন্ম সনদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও ফটোকপি", "how_to_obtain": "কনে ন্যূনতম ১৮ বছর ও বর ন্যূনতম ২১ বছর বয়স প্রমাণে আবশ্যক"},
            {"name": "বর ও কনের পাসপোর্ট সাইজের স্পষ্ট ছবি (প্রত্যেকের ২ কপি)", "is_mandatory": 1, "attestation_required": 0, "format_type": "রঙিন ছবি", "how_to_obtain": "স্টুডিও ল্যাব প্রিন্ট"},
            {"name": "দুইজন প্রাপ্তবয়স্ক সুস্থমস্তিষ্ক পুরুষ সাক্ষী অথবা একজন পুরুষ ও দুইজন নারী সাক্ষীর এনআইডি", "is_mandatory": 1, "attestation_required": 0, "format_type": "এনআইডি ফটোকপি", "how_to_obtain": "সাক্ষীদের নিজস্ব জাতীয় পরিচয়পত্র"},
            {"name": "কনের অভিভাবক / উকিল বাবার জাতীয় পরিচয়পত্র", "is_mandatory": 1, "attestation_required": 0, "format_type": "এনআইডি ফটোকপি", "how_to_obtain": "কনের পিতা বা আইনগত অভিভাবক"}
        ],
        "steps": [
            {"step_number": 1, "title": "বর ও কনের বয়স ও পরিচয় যাচাই", "description": "কনের বয়স ন্যূনতম ১৮ এবং বরের বয়স ন্যূনতম ২১ বছর হতে হবে। কাজি সরকারি নিয়মে এনআইডি বা জন্ম সনদ অনলাইনে যাচাই করবেন।", "action_url": None, "tips": "বাল্যবিবাহ সম্পূর্ণ নিষিদ্ধ ও আইনত দণ্ডনীয় অপরাধ।"},
            {"step_number": 2, "title": "দেনমোহর নির্ধারণ ও সরকারি স্কেল অনুযায়ী ফি হিসাব", "description": "দেনমোহর অনুযায়ী সরকারি স্কেল মেনে ফি হিসাব করুন এবং অতিরিক্ত কোনো টাকা ছাড়া রসিদ সংগ্রহ করুন।", "action_url": None, "tips": "কাজি যদি রসিদ ছাড়া ১০-২০ হাজার টাকা চায় তবে তাকে সরকারি গেজেট দেখান।"},
            {"step_number": 3, "title": "বালাম বইয়ে স্বাক্ষর ও নিকাহনামা গ্রহণ", "description": "সরকারি বালাম বইয়ে বর, কনে, উকিল বাবা ও সাক্ষীদের স্বাক্ষর সম্পন্ন করে সার্টিফাইড নিকাহনামা সংগ্রহ করুন।", "action_url": None, "tips": "নিকাহনামার বালাম নম্বর, পৃষ্ঠা নম্বর ও ভলিউম নম্বর লিখে রাখুন।"}
        ]
    },
    {
        "service_id": "bd-ec-new-voter-registration-form-2",
        "title_bn": "নতুন ভোটার নিবন্ধন ও এনআইডি কার্ড আবেদন (ফরম-২)",
        "title_en": "New Voter Registration & First-Time NID Card Application (Form-2)",
        "category": "জাতীয় পরিচয়পত্র (NID)",
        "sub_category": "নতুন ভোটার",
        "department_agency": "জাতীয় পরিচয় নিবন্ধন অনুবিভাগ, বাংলাদেশ নির্বাচন কমিশন",
        "summary": "১৮ বছর পূর্ণ হওয়া বা পূর্বে ভোটার তালিকায় অন্তর্ভুক্ত না হওয়া নাগরিকদের জন্য সম্পূর্ণ বিনামূল্যে নতুন ভোটার হওয়া ও স্মার্ট এনআইডি কার্ড পাওয়ার সরকারি নির্দেশিকা।",
        "processing_time_sla": "আবেদন ও বায়োমেট্রিক দেওয়ার পর ১৫-৩০ কার্যদিবস",
        "official_portal_url": "https://services.nidw.gov.bd",
        "application_url": "https://services.nidw.gov.bd/nid-pub/register-account",
        "citizen_charter_url": "https://services.nidw.gov.bd",
        "anti_broker_warning": "নতুন ভোটার হতে কোনো টাকা লাগে না। এটি সম্পূর্ণ ফ্রি সরকারি সেবা। নির্বাচন অফিসের সামনে কোনো কম্পিউটার দোকান বা দালালকে ১ টাকাও দেবেন না। তারা কাজ দ্রুত করার মিথ্যা আশ্বাস দিয়ে ৩,০০০-৫,০০০ টাকা দাবি করে। ঘরে বসে নিজের ফোনেই ফরম পূরণ করা যায়।",
        "grievance_remedy": "উপজেলা নির্বাচন অফিসে কোনো কর্মচারী ঘুষ দাবি করলে নির্বাচন কমিশন সচিবালয় বা ১০৫ হেল্পলাইনে অভিযোগ জানান।",
        "fees": [
            {"category_name": "নতুন ভোটার ও প্রথমবার এনআইডি আবেদন ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "আইনত সম্পূর্ণ বিনামূল্যে (০ টাকা)"}
        ],
        "documents": [
            {"name": "১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (বাংলা ও ইংরেজি)", "is_mandatory": 1, "attestation_required": 0, "format_type": "অনলাইন স্ক্যান কপি", "how_to_obtain": "bdris.gov.bd পোর্টাল"},
            {"name": "পিতা ও মাতার জাতীয় পরিচয়পত্র (NID) কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "বাবা ও মায়ের এনআইডি"},
            {"name": "শিক্ষাগত যোগ্যতার সনদপত্র (এসএসসি/জেএসসি/৮ম শ্রেণি)", "is_mandatory": 0, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "শিক্ষাপ্রতিষ্ঠান সনদ"},
            {"name": "বর্তমান ঠিকানার বিদ্যুৎ/গ্যাস বিলের কপি বা হোল্ডিং ট্যাক্স রসিদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "বাসার ইউটিলিটি বিল"},
            {"name": "চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "স্থানীয় কাউন্সিলর বা ইউপি অফিস"}
        ],
        "steps": [
            {"step_number": 1, "title": "services.nidw.gov.bd পোর্টালে অনলাইন ফরম-২ পূরণ", "description": "নির্বাচন কমিশন পোর্টালে গিয়ে 'নতুন ভোটার আবেদন' সিলেক্ট করে ব্যক্তিগত তথ্য ও ঠিকানা পূরণ করে সাবমিট করুন।", "action_url": "https://services.nidw.gov.bd", "tips": "নামের বানান যেন জন্ম সনদের সাথে হুবহু এক থাকে।"},
            {"step_number": 2, "title": "উপজেলা নির্বাচন অফিসে বায়োমেট্রিক প্রদান", "description": "আবেদনের প্রিন্ট কপি নিয়ে উপজেলা নির্বাচন অফিসে গিয়ে ১০ আঙুলের ছাপ, আইরিশ ও ছবি দিন।", "action_url": None, "tips": "সাদা পোশাক পরিহার করে গাঢ় রঙের পোশাক পরে ছবি তুলতে যান।"},
            {"step_number": 3, "title": "ডিজিটাল এনআইডি অনলাইন ডাউনলোড", "description": "মোবাইলে এসএমএস আসলে পোর্টাল থেকে বিনামূল্যে ডিজিটাল অনলাইন স্মার্ট এনআইডি ডাউনলোড করে ল্যামিনেট করে ব্যবহার করুন।", "action_url": None, "tips": "অনলাইন কপিটি মূল কার্ড আসার পূর্ব পর্যন্ত সকল কাজে শতভাগ বৈধ।"}
        ]
    },
    {
        "service_id": "bd-national-savings-sanchayapatra-guide",
        "title_bn": "জাতীয় সঞ্চয়পত্র ক্রয়, মুনাফার হার ও কর কর্তন গাইড",
        "title_en": "National Savings Certificates (Sanchayapatra) Purchase & Tax Guide",
        "category": "অর্থ ও রাজস্ব সেবা",
        "sub_category": "সঞ্চয় স্কিম ও বিনিয়োগ",
        "department_agency": "জাতীয় সঞ্চয় অধিদপ্তর, অভ্যন্তরীণ সম্পদ বিভাগ, অর্থ মন্ত্রণালয়",
        "summary": "পরিবার সঞ্চয়পত্র, পেনশনার সঞ্চয়পত্র, ৩ মাস অন্তর মুনাফাভিত্তিক ও ৫ বছর মেয়াদি বাংলাদেশ সঞ্চয়পত্র ক্রয়, মুনাফার হার, উৎসে কর এবং স্বয়ংক্রিয় ব্যাংক ইএফটি নির্দেশিকা।",
        "processing_time_sla": "আবেদন ও চেক জমার পর ১ কার্যদিবস",
        "official_portal_url": "https://savings.gov.bd",
        "application_url": None,
        "citizen_charter_url": "https://savings.gov.bd/site/page/citizen_charter",
        "anti_broker_warning": "সঞ্চয়পত্র কেনার জন্য কোনো ব্যাংক কর্মচারী বা বহিরাগত দালালকে বাড়তি টাকা দেবেন না। যেকোনো অনুমোদিত তফসিলি ব্যাংক, বাংলাদেশ ব্যাংক বা ডাকঘর থেকে সরাসরি ক্রয় করা যায় এবং প্রতি মাসে স্বয়ংক্রিয়ভাবে মুনাফা আপনার ব্যাংক অ্যাকাউন্টে জমা হয়।",
        "grievance_remedy": "সঞ্চয়পত্র ক্রয়ে ব্যাংক অসহযোগিতা করলে বাংলাদেশ ব্যাংক হেল্পলাইন ১৬২৩৬ বা সঞ্চয় অধিদপ্তরে জানান।",
        "fees": [
            {"category_name": "সঞ্চয়পত্র ক্রয় ও আবেদন ফরম সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "সম্পূর্ণ বিনামূল্যে (০ টাকা)"},
            {"category_name": "মুনাফার ওপর উৎসে কর (টিআইএন ও রিটার্ন দাখিলের প্রমাণ থাকলে)", "amount_bdt": 0, "vat_included": 1, "payment_method": "স্বয়ংক্রিয় কর্তন", "remarks": "মুনাফার ওপর মাত্র ৫% উৎসে কর কাটা হয়।"},
            {"category_name": "মুনাফার ওপর উৎসে কর (রিটার্ন দাখিলের প্রমাণ না থাকলে)", "amount_bdt": 0, "vat_included": 1, "payment_method": "স্বয়ংক্রিয় কর্তন", "remarks": "মুনাফার ওপর ১০% উৎসে কর কাটা হয়।"}
        ],
        "documents": [
            {"name": "বিনিয়োগকারীর জাতীয় পরিচয়পত্র (NID) ও ২ কপি পাসপোর্ট ছবি", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও ফটোকপি", "how_to_obtain": "বিনিয়োগকারীর সংরক্ষিত কপি"},
            {"name": "নমিনির জাতীয় পরিচয়পত্র/জন্ম সনদ ও ১ কপি সত্যায়িত ছবি", "is_mandatory": 1, "attestation_required": 1, "format_type": "সত্যায়িত কপি", "how_to_obtain": "নমিনির এনআইডি"},
            {"name": "বিনিয়োগকারীর ই-টিআইএন ও রিটার্ন দাখিলের প্রমাণপত্র (PSR)", "is_mandatory": 1, "attestation_required": 0, "format_type": "অনলাইন একনলেজমেন্ট স্লিপ", "how_to_obtain": "এনবিআর ইনকাম ট্যাক্স পোর্টাল"},
            {"name": "বিনিয়োগকারীর নিজস্ব এমআইসিআর (MICR) ব্যাংক চেকের পাতা", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল চেক", "how_to_obtain": "বিনিয়োগকারীর ব্যাংক হিসাবের চেকবই"}
        ],
        "steps": [
            {"step_number": 1, "title": "ব্যাংক বা ডাকঘর থেকে ফরম সংগ্রহ ও পূরণ", "description": "সোনালী ব্যাংক, বাংলাদেশ ব্যাংক বা ডাকঘরের সঞ্চয়পত্র কাউন্টার থেকে ফরম পূরণ করুন।", "action_url": None, "tips": "পরিবার সঞ্চয়পত্র নারীদের জন্য এবং পেনশনার সঞ্চয়পত্র সরকারি/আধা-সরকারি অবসরপ্রাপ্তদের জন্য প্রযোজ্য।"},
            {"step_number": 2, "title": "চেক ও নথিপত্র জমাদান", "description": "এনআইডি, টিআইএন, রিটার্ন জমার কপি ও নিজের ব্যাংক অ্যাকাউন্টের চেক কাউন্টারে জমা দিন।", "action_url": None, "tips": "চেকটি 'Account Payee' হিসেবে ইস্যু করুন।"},
            {"step_number": 3, "title": "সঞ্চয়পত্র রসিদ ও ব্যাংকিং ইএফটি মুনাফা গ্রহণ", "description": "কাউন্টার থেকে সঞ্চয়পত্রের মূল রশিদ বুঝে নিন। নির্ধারিত প্রতি মাসে আপনার ব্যাংক অ্যাকাউন্টে মুনাফা জমা হবে।", "action_url": None, "tips": "মুনাফা তোলার জন্য ব্যাংকে যাওয়ার দরকার নেই, ডেবিট কার্ড দিয়ে যেকোনো এটিএম থেকে টাকা তোলা যায়।"}
        ]
    },
    {
        "service_id": "bd-suborno-nagorik-disability-smart-card",
        "title_bn": "সুবর্ণ নাগরিক কার্ড / ডিজিটাল প্রতিবন্ধী স্মার্ট পরিচয়পত্র",
        "title_en": "Suborno Nagorik Card (Digital Disability Smart Identity Card)",
        "category": "সামাজিক নিরাপত্তা ও কল্যাণ",
        "sub_category": "প্রতিবন্ধী সুরক্ষা",
        "department_agency": "সমাজসেবা অধিদপ্তর (DSS), সমাজকল্যাণ মন্ত্রণালয়",
        "summary": "প্রতিবন্ধী ব্যক্তিদের ভাতা, শিক্ষা উপবৃত্তি, বিনামূল্যে চিকিৎসা ও সরকারি চাকরির কোটা সুবিধা প্রাপ্তির লক্ষ্যে সুবর্ণ নাগরিক ডিজিটাল স্মার্ট কার্ড সংগ্রহ নির্দেশিকা।",
        "processing_time_sla": "মেডিকেল বোর্ড মূল্যায়নের পর ১৫ কার্যদিবস",
        "official_portal_url": "http://dis.gov.bd",
        "application_url": "http://dis.gov.bd",
        "citizen_charter_url": "http://dss.gov.bd",
        "anti_broker_warning": "সুবর্ণ নাগরিক কার্ড সম্পূর্ণ ফ্রি। সমাজসেবা অফিস বা হাসপাতালের কোনো দালালকে ১ টাকাও দেবেন না। এই কার্ড থাকলে মাসিক ৮৫০ টাকা সরকারি প্রতিবন্ধী ভাতা ও শিক্ষা উপবৃত্তি পাওয়া যায়।",
        "grievance_remedy": "উপজেলা সমাজসেবা কর্মকর্তা কোনো অসহযোগিতা করলে জেলা সমাজসেবা কার্যালয়ের উপ-পরিচালক বরাবর অভিযোগ জানান।",
        "fees": [
            {"category_name": "সুবর্ণ নাগরিক কার্ড সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "সম্পূর্ণ বিনামূল্যে (০ টাকা)"}
        ],
        "documents": [
            {"name": "আবেদনকারীর অনলাইন জন্ম সনদ বা জাতীয় পরিচয়পত্র (NID)", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও ফটোকপি", "how_to_obtain": "এনআইডি বা BDRIS পোর্টাল"},
            {"name": "উপজেলা স্বাস্থ্য কমপ্লেক্সের মেডিকেল অফিসারের প্রত্যয়নপত্র", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "উপজেলা স্বাস্থ্য কমপ্লেক্সের চিকিৎসক"},
            {"name": "আবেদনকারীর পাসপোর্ট সাইজের রঙিন ছবি (৩ কপি)", "is_mandatory": 1, "attestation_required": 0, "format_type": "ছবি", "how_to_obtain": "স্টুডিও ল্যাব প্রিন্ট"},
            {"name": "পিতা/মাতা বা অভিভাবকের জাতীয় পরিচয়পত্রের কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "অভিভাবকের এনআইডি"}
        ],
        "steps": [
            {"step_number": 1, "title": "dis.gov.bd পোর্টালে অনলাইন নিবন্ধন", "description": "প্রতিবন্ধিতা শনাক্তকরণ জরিপ পোর্টালে প্রবেশ করে ব্যক্তিগত তথ্য ও প্রতিবন্ধিতার ধরন নির্বাচন করে আবেদন করুন।", "action_url": "http://dis.gov.bd", "tips": "সচল মোবাইল নম্বর দিন।"},
            {"step_number": 2, "title": "উপজেলা সমাজসেবা মেডিকেল বোর্ডে মূল্যায়ন", "description": "উপজেলা সমাজসেবা অফিসে গিয়ে নির্ধারিত দিনে মেডিকেল অফিসারের সামনে উপস্থিত হয়ে প্রতিবন্ধিতার মাত্রা যাচাই সম্পন্ন করান।", "action_url": None, "tips": "পূর্বের কোনো চিকিৎসার প্রেসক্রিপশন বা রিপোর্ট থাকলে সাথে নিন।"},
            {"step_number": 3, "title": "ডিজিটাল সুবর্ণ নাগরিক স্মার্ট কার্ড গ্রহণ", "description": "অনুমোদন শেষে উপজেলা সমাজসেবা কার্যালয় থেকে কিউআর কোডযুক্ত ডিজিটাল স্মার্ট কার্ড সম্পূর্ণ বিনামূল্যে সংগ্রহ করুন।", "action_url": None, "tips": "কার্ড পাওয়ার পর সাথে সাথে ভাতার জন্য সমাজসেবা অফিসে আবেদন করুন।"}
        ]
    },
    {
        "service_id": "bd-automated-echallan-govt-fee-payment",
        "title_bn": "অটোমেটেড এ-চালান (A-Challan) সরকারি ট্রেজারি ফি পেমেন্ট গাইড",
        "title_en": "Automated Challan (A-Challan) Government Treasury Fee Payment Guide",
        "category": "অর্থ ও রাজস্ব সেবা",
        "sub_category": "সরকারি ট্রেজারি পেমেন্ট",
        "department_agency": "অর্থ বিভাগ, অর্থ মন্ত্রণালয় ও হিসাব মহানিয়ন্ত্রক (CGA)",
        "summary": "পাসপোর্ট, পুলিশ ক্লিয়ারেন্স, এনআইডি, কোর্ট ফি ও সরকারি নিয়োগ পরীক্ষার ট্রেজারি চালান ঘরে বসে বিকাশ, নগদ বা কার্ডের মাধ্যমে এ-চালানে পরিশোধের নির্দেশিকা।",
        "processing_time_sla": "তাৎক্ষণিক অনলাইন রসিদ জেনারেশন (১ মিনিট)",
        "official_portal_url": "https://echallan.gov.bd",
        "application_url": "https://echallan.gov.bd",
        "citizen_charter_url": "https://mof.gov.bd",
        "anti_broker_warning": "ট্রেজারি চালানের জন্য সোনালী ব্যাংকের লাইনে দাঁড়িয়ে সময় নষ্ট করবেন না বা দালালের হাতে কমিশন দেবেন না। ঘরে বসে স্মার্টফোনে echallan.gov.bd থেকে ১ মিনিটে আসল সরকারি বারকোডযুক্ত চালান পাওয়া যায়।",
        "grievance_remedy": "পেমেন্ট কেটে নিয়ে চালান না আসলে ১৬১২২ নম্বরে কল করে ট্রানজেকশন আইডি দিয়ে সহায়তা নিন।",
        "fees": [
            {"category_name": "এ-চালান সিস্টেম সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "পদ্ধতিগত চার্জ সম্পূর্ণ ফ্রি (০ টাকা)"}
        ],
        "documents": [
            {"name": "সেবা সংশ্লিষ্ট সরকারি নির্দিষ্ট ট্রেজারি কোড (যেমন: পুলিশ ক্লিয়ারেন্স ১-২২১১-০০০০-২০৪৩)", "is_mandatory": 1, "attestation_required": 0, "format_type": "চালান কোড", "how_to_obtain": "সংশ্লিষ্ট সরকারি নির্দেশিকা"},
            {"name": "জমা প্রদানকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও সচল মোবাইল", "is_mandatory": 1, "attestation_required": 0, "format_type": "নম্বর ইনপুট", "how_to_obtain": "নাগরিকের এনআইডি"},
            {"name": "বিকাশ, নগদ, রকেট, ব্যাংক কার্ড বা ইন্টারনেট ব্যাংকিং", "is_mandatory": 1, "attestation_required": 0, "format_type": "পেমেন্ট গেটওয়ে", "how_to_obtain": "অনলাইন অ্যাকাউন্ট"}
        ],
        "steps": [
            {"step_number": 1, "title": "echallan.gov.bd পোর্টালে কোড নির্বাচন", "description": "পোর্টালে গিয়ে সংশ্লিষ্ট মন্ত্রণালয় নির্বাচন করে সঠিক অর্থনৈতিক কোড ও জেলার নাম বেছে নিন।", "action_url": "https://echallan.gov.bd", "tips": "চালান কোড যেন কোনো অবস্থাতেই ভুল না হয়।"},
            {"step_number": 2, "title": "ব্যক্তিগত তথ্য ও ফি এর পরিমাণ প্রদান", "description": "জমা প্রদানকারীর নাম, এনআইডি ও টাকার পরিমাণ লিখে পেমেন্ট অপশন নির্বাচন করুন।", "action_url": None, "tips": "টাকার পরিমাণ সরকারি ফির সাথে হুবহু মিলাতে হবে।"},
            {"step_number": 3, "title": "অনলাইন পেমেন্ট ও এ-চালান পিডিএফ ডাউনলোড", "description": "বিকাশ/কার্ডে পেমেন্ট সফল হওয়ার সাথে সাথে সরকারি বারকোডযুক্ত চালান প্রিন্ট করে সংশ্লিষ্ট অফিসে জমা দিন।", "action_url": None, "tips": "চালান কপি মোবাইলে ও ড্রাইভে সেভ করে রাখুন।"}
        ]
    },
    {
        "service_id": "bd-citizenship-character-certificate-up-citycorp",
        "title_bn": "ইউনিয়ন পরিষদ ও ওয়ার্ড কাউন্সিলর নাগরিকত্ব ও চারিত্রিক সনদপত্র",
        "title_en": "Union Parishad & Ward Councillor Citizenship and Character Certificate",
        "category": "নাগরিক সনদ ও নিবন্ধন",
        "sub_category": "নাগরিক প্রত্যয়ন",
        "department_agency": "স্থানীয় সরকার বিভাগ, ইউনিয়ন পরিষদ / পৌরসভা / সিটি কর্পোরেশন কার্যালয়",
        "summary": "চাকরি, পুলিশ ভেরিফিকেশন, পাসপোর্ট আবেদন ও শিক্ষাপ্রতিষ্ঠানে ভর্তির জন্য স্থানীয় চেয়ারম্যান বা ওয়ার্ড কাউন্সিলর কর্তৃক নাগরিকত্ব ও চারিত্রিক সনদপত্র সংগ্রহের নিয়ম।",
        "processing_time_sla": "আবেদন জমা দেওয়ার ১ ঘণ্টার মধ্যে বা সর্বোচ্চ ১ কার্যদিবস",
        "official_portal_url": "https://lgd.gov.bd",
        "application_url": None,
        "citizen_charter_url": "https://lgd.gov.bd",
        "anti_broker_warning": "কাউন্সিলর বা চেয়ারম্যানের সনদের জন্য কোনো মধ্যস্বত্বভোগী বা দালালকে ২০০-৫০০ টাকা দেবেন না। অফিস কাউন্টারে সরকার নির্ধারিত রসিদ ফি (সর্বোচ্চ ২০-৫০ টাকা) দিয়ে সরাসরি সনদ নেওয়া যায়।",
        "grievance_remedy": "অতিরিক্ত অর্থ দাবি করলে উপজেলা নির্বাহী কর্মকর্তা (ইউএনও) বা সিটি কর্পোরেশনের আঞ্চলিক নির্বাহী কর্মকর্তা বরাবর অভিযোগ করুন।",
        "fees": [
            {"category_name": "নাগরিকত্ব ও চারিত্রিক সনদপত্র সরকারি রসিদ ফি", "amount_bdt": 30, "vat_included": 1, "payment_method": "কাউন্টার রসিদ", "remarks": "ইউনিয়ন পরিষদে ২০-৩০ টাকা, পৌরসভা বা সিটি কর্পোরেশনে সর্বোচ্চ ৫০ টাকা।"}
        ],
        "documents": [
            {"name": "আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও ফটোকপি", "how_to_obtain": "নাগরিকের পরিচয়পত্র"},
            {"name": "পিতা ও মাতার জাতীয় পরিচয়পত্রের কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "পিতা-মাতার এনআইডি"},
            {"name": "বর্তমান বাসস্থানের হোল্ডিং ট্যাক্স রসিদ বা বিদ্যুৎ বিল", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "বাসার বিদ্যুৎ বিল"},
            {"name": "পাসপোর্ট সাইজের স্পষ্ট রঙিন ছবি (১ কপি)", "is_mandatory": 1, "attestation_required": 0, "format_type": "ছবি", "how_to_obtain": "স্টুডিও ল্যাব প্রিন্ট"}
        ],
        "steps": [
            {"step_number": 1, "title": "কাউন্সিলর বা ইউপি কার্যালয়ে আবেদন", "description": "ওয়ার্ড কাউন্সিলর বা ইউনিয়ন পরিষদ কার্যালয়ে গিয়ে নির্ধারিত আবেদন ফর্মে তথ্য পূরণ করে নথিপত্র সংযুক্ত করুন।", "action_url": None, "tips": "পিতার নাম ও স্থায়ী ঠিকানা ভোটার কার্ডের সাথে মিলিয়ে লিখুন।"},
            {"step_number": 2, "title": "স্থানীয় সদস্য বা কাউন্সিলর কর্তৃক শনাক্তকরণ", "description": "সংশ্লিষ্ট ইউপি সদস্য বা ওয়ার্ড কাউন্সিলর আবেদনকারীকে ওই এলাকার স্থায়ী বাসিন্দা হিসেবে প্রত্যয়ন করবেন।", "action_url": None, "tips": "সরাসরি উপস্থিত হওয়া সর্বোত্তম।"},
            {"step_number": 3, "title": "অফিসিয়াল সিলমোহর ও সনদপত্র গ্রহণ", "description": "কাউন্সিলর বা চেয়ারম্যানের স্বাক্ষর ও গোল সিলমোহরযুক্ত নাগরিকত্ব ও চারিত্রিক সনদ রসিদসহ সংগ্রহ করুন।", "action_url": None, "tips": "সনদে স্মারক নম্বর ও তারিখ নিশ্চিত করুন।"}
        ]
    },
    {
        "service_id": "bd-brta-vehicle-fitness-certificate-renewal",
        "title_bn": "বিআরটিএ মোটরযান ফিটনেস সনদ নবায়ন ও ফি নির্দেশিকা",
        "title_en": "BRTA Motor Vehicle Fitness Certificate Renewal & Official Fees",
        "category": "যানবাহন ও লাইসেন্স",
        "sub_category": "মোটরযান ফিটনেস",
        "department_agency": "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ",
        "summary": "প্রাইভেট কার, মাইক্রোবাস, জিপ, বাস ও বাণিজ্যিক মোটরযানের বাৎসরিক ডিজিটাল ফিটনেস পরীক্ষা, ফি পেমেন্ট ও সনদ নবায়ন নির্দেশিকা।",
        "processing_time_sla": "পরিদর্শন সম্পন্নের সাথে সাথে তাৎক্ষণিক সনদ প্রদান (১ কার্যদিবস)",
        "official_portal_url": "https://bsp.brta.gov.bd",
        "application_url": "https://bsp.brta.gov.bd",
        "citizen_charter_url": "https://brta.gov.bd/site/view/citizen_charter",
        "anti_broker_warning": "বিআরটিএ অফিসের সামনে দালালরা ফিটনেস ফেল করানোর ভীতি দেখিয়ে ৫,০০০ থেকে ১০,০০০ টাকা দাবি করে। গাড়ির হেডলাইট, ব্রেক, হর্ন, লুকিং গ্লাস ও টায়ার ঠিক থাকলে কোনো সমস্যা ছাড়াই নির্ধারিত সরকারি ফি (মাত্র ১,১৭৯–১,৭২৫ টাকা) দিয়ে নিজেই আধা ঘণ্টায় কাজ শেষ করতে পারবেন। দালালদের সম্পূর্ণ এড়িয়ে চলুন।",
        "grievance_remedy": "কোনো কর্মকর্তা অনৈতিক সুবিধা দাবি করলে বিআরটিএ সার্কেল উপ-পরিচালক বা হেল্পলাইন ১৬১০৭-এ অভিযোগ জানান।",
        "fees": [
            {"category_name": "মোটরকার (১৫০০ সিসি পর্যন্ত) ফিটনেস ফি ও ১৫% ভ্যাট", "amount_bdt": 1179, "vat_included": 1, "payment_method": "অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক", "remarks": "মূল ফি ১,০২৫ টাকা + ১৫% ভ্যাট ১৫৪ টাকা = ১,১৭৯ টাকা।"},
            {"category_name": "মাইক্রোবাস ও জিপ ফিটনেস ফি ও ১৫% ভ্যাট", "amount_bdt": 1725, "vat_included": 1, "payment_method": "অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক", "remarks": "মূল ফি ১,৫০০ টাকা + ১৫% ভ্যাট ২২৫ টাকা = ১,৭২৫ টাকা।"},
            {"category_name": "বাস ও ভারী বাণিজ্যিক যান ফিটনেস ফি ও ভ্যাট", "amount_bdt": 2472, "vat_included": 1, "payment_method": "অনলাইন গেটওয়ে বা ব্যাংক", "remarks": "মূল ফি ২,১৫০ টাকা + ১৫% ভ্যাট অন্তর্ভুক্ত।"}
        ],
        "documents": [
            {"name": "পূর্ববর্তী মূল ফিটনেস সনদের কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "গাড়ির পূর্বের ফিটনেস পেপার"},
            {"name": "হালনাগাদ ট্যাক্স টোকেনের মূল কপি ও ফটোকপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও ফটোকপি", "how_to_obtain": "ব্যাংক থেকে নবায়িত ট্যাক্স টোকেন"},
            {"name": "মোটরযানের ডিজিটাল রেজিস্ট্রেশন স্মার্ট কার্ড / ব্লু-বুক", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "বিআরটিএ মূল কার্ড"},
            {"name": "ফিটনেস ফি পরিশোধের অনলাইন ব্যাংক রসিদ বা এ-চালান", "is_mandatory": 1, "attestation_required": 0, "format_type": "প্রিন্ট কপি", "how_to_obtain": "BSP অনলাইন গেটওয়ে বা ব্যাংক"}
        ],
        "steps": [
            {"step_number": 1, "title": "bsp.brta.gov.bd পোর্টালে ফি পরিশোধ ও সময় বুকিং", "description": "বিআরটিএ সার্ভিস পোর্টালে গাড়ি রেজিস্ট্রেশন নম্বর দিন। নির্ধারিত ফি অনলাইনে পরিশোধ করে গাড়ি পরিদর্শনের (VIC) তারিখ নির্বাচন করুন।", "action_url": "https://bsp.brta.gov.bd", "tips": "মিরপুর বা ইকুরিয়া ভিআইসি সেন্টার বেছে নিন।"},
            {"step_number": 2, "title": "বিআরটিএ সার্কেলে গাড়ি নিয়ে পরিদর্শন সম্পন্ন করা", "description": "নির্ধারিত দিনে গাড়ি নিয়ে বিআরটিএ টেস্টিং গ্রাউন্ডে যান। মোটরযান পরিদর্শক ব্রেক, লাইট, টায়ার, এমিশন ও ইঞ্জিন চেসিস নম্বর যাচাই করবেন।", "action_url": None, "tips": "গাড়ির সব লাইট ও ইন্ডিকেটর সচল থাকা নিশ্চিত করুন।"},
            {"step_number": 3, "title": "ডিজিটাল ফিটনেস সনদপত্র গ্রহণ", "description": "টেস্টে পাস করার সাথে সাথে পরিদর্শক সিস্টেমের মাধ্যমে অনুমোদন দেবেন এবং নতুন ১ বছর মেয়াদি ডিজিটাল ফিটনেস সার্টিফিকেট সাথে সাথে প্রদান করা হবে।", "action_url": None, "tips": "নতুন কিউআর কোডযুক্ত সার্টিফিকেট সাথে সাথে গাড়িতে সংরক্ষণ করুন।"}
        ]
    }
]

# 1. Update citizen_services.json
json_path = 'data/processed/citizen_services.json'
with open(json_path, 'r', encoding='utf-8') as f:
    existing = json.load(f)

existing_ids = {s['service_id'] for s in existing}
added_count = 0
for ns in NEW_SERVICES:
    if ns['service_id'] not in existing_ids:
        existing.append(ns)
        added_count += 1

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)

print(f"Updated citizen_services.json: total {len(existing)} services (added {added_count}).")

# 2. Generate SQL statements
sql_statements = []
for ns in NEW_SERVICES:
    sid = ns['service_id']
    t_bn = ns['title_bn'].replace("'", "''")
    t_en = (ns['title_en'] or '').replace("'", "''")
    cat = ns['category'].replace("'", "''")
    subcat = (ns.get('sub_category') or '').replace("'", "''")
    dept = ns['department_agency'].replace("'", "''")
    summary = ns['summary'].replace("'", "''")
    sla = ns['processing_time_sla'].replace("'", "''")
    portal = ns['official_portal_url'].replace("'", "''")
    app_val = ns.get('application_url')
    app_url = f"'{app_val.replace("'", "''")}'" if app_val else "NULL"
    charter_val = ns.get('citizen_charter_url')
    charter = f"'{charter_val.replace("'", "''")}'" if charter_val else "NULL"
    warn = ns['anti_broker_warning'].replace("'", "''")
    remedy = ns['grievance_remedy'].replace("'", "''")

    sql_statements.append(f"""
INSERT INTO services (service_id, title_bn, title_en, category, sub_category, department_agency, summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url, anti_broker_warning, grievance_remedy)
VALUES ('{sid}', '{t_bn}', '{t_en}', '{cat}', '{subcat}', '{dept}', '{summary}', '{sla}', '{portal}', {app_url}, {charter}, '{warn}', '{remedy}')
ON CONFLICT(service_id) DO UPDATE SET title_bn=excluded.title_bn, summary=excluded.summary, anti_broker_warning=excluded.anti_broker_warning;
DELETE FROM service_fees WHERE service_id = '{sid}';
DELETE FROM service_documents WHERE service_id = '{sid}';
DELETE FROM service_steps WHERE service_id = '{sid}';
""")

    for fee in ns.get('fees', []):
        cname = fee['category_name'].replace("'", "''")
        amt = fee['amount_bdt']
        vat = fee.get('vat_included', 1)
        pm_val = fee.get('payment_method')
        pm = f"'{pm_val.replace("'", "''")}'" if pm_val else "NULL"
        rem_val = fee.get('remarks')
        rem = f"'{rem_val.replace("'", "''")}'" if rem_val else "NULL"
        sql_statements.append(f"INSERT INTO service_fees (service_id, category_name, amount_bdt, vat_included, payment_method, remarks) VALUES ('{sid}', '{cname}', {amt}, {vat}, {pm}, {rem});")

    for doc in ns.get('documents', []):
        dname = doc['name'].replace("'", "''")
        mand = doc.get('is_mandatory', 1)
        att = doc.get('attestation_required', 0)
        fmt_val = doc.get('format_type')
        fmt = f"'{fmt_val.replace("'", "''")}'" if fmt_val else "NULL"
        obtain_val = doc.get('how_to_obtain')
        obtain = f"'{obtain_val.replace("'", "''")}'" if obtain_val else "NULL"
        sql_statements.append(f"INSERT INTO service_documents (service_id, name, is_mandatory, attestation_required, format_type, how_to_obtain) VALUES ('{sid}', '{dname}', {mand}, {att}, {fmt}, {obtain});")

    for step in ns.get('steps', []):
        snum = step['step_number']
        stitle = step['title'].replace("'", "''")
        sdesc = step['description'].replace("'", "''")
        aurl_val = step.get('action_url')
        aurl = f"'{aurl_val.replace("'", "''")}'" if aurl_val else "NULL"
        tips_val = step.get('tips')
        tips = f"'{tips_val.replace("'", "''")}'" if tips_val else "NULL"
        sql_statements.append(f"INSERT INTO service_steps (service_id, step_number, title, description, action_url, tips) VALUES ('{sid}', {snum}, '{stitle}', '{sdesc}', {aurl}, {tips});")

sql_file = 'scripts/seed_new_8_services.sql'
with open(sql_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql_statements))

print(f"Generated SQL in {sql_file} ({len(sql_statements)} statements).")
