import json
import os
import subprocess

NEW_10_SERVICES = [
    {
        "service_id": "bd-it-freelancer-id-card-cash-incentive",
        "title_bn": "আইটি ফ্রিল্যান্সার আইডি কার্ড ও ৪% সরকারি নগদ প্রণোদনা",
        "title_en": "IT Freelancer ID Card & 4% Cash Incentive Verification",
        "category": "উদ্যোক্তা ও বাণিজ্য",
        "sub_category": "আইটি ও ফ্রিল্যান্সিং",
        "department_agency": "বাংলাদেশ কম্পিউটার কাউন্সিল (BCC), তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ",
        "summary": "আইটি ও ফ্রিল্যান্সারদের প্রাতিষ্ঠানিক স্বীকৃতি, ব্যাংক ঋণ সুবিধা, ক্রেডিট কার্ড ইস্যু এবং বৈধ ব্যাংকিং চ্যানেলে রেমিট্যান্স আনলে ৪% সরকারি নগদ সহায়তা প্রাপ্তির অফিসিয়াল পরিচয়পত্র।",
        "processing_time_sla": "অনলাইন আবেদন ও স্ক্রুটিনির পর ১৫ কার্যদিবস",
        "official_portal_url": "https://freelancers.gov.bd",
        "application_url": "https://freelancers.gov.bd/registration",
        "citizen_charter_url": "https://ictd.gov.bd",
        "anti_broker_warning": "ফ্রিল্যান্সার আইডি কার্ডের সরকারি আবেদন ফি মাত্র ১৫০০ টাকা (ভ্যাটসহ ১৭২৫ টাকা)। কোনো দালাল বা তৃতীয় পক্ষকে আইডি কার্ড বানিয়ে দেওয়া বা নগদ প্রণোদনা পাইয়ে দেওয়ার নামে এক টাকাও ঘুষ দেবেন না। ফ্রিল্যান্সার প্ল্যাটফর্মের আয়ের প্রমাণ থাকলেই আবেদন অনুমোদনযোগ্য।",
        "grievance_remedy": "আবেদন সংক্রান্ত জটিলতা বা অনুমোদনে অহেতুক দেরির ক্ষেত্রে বিসিসি হেল্পডেস্ক বা ictd@ictd.gov.bd এ যোগাযোগ করুন।",
        "fees": [
            {"category_name": "আইডি কার্ড আবেদন ও যাচাই ফি", "amount_bdt": 1500, "vat_included": 0, "payment_method": "অনলাইন (কার্ড/মোবাইল ব্যাংকিং)", "remarks": "১৫% ভ্যাটসহ মোট ১৭২৫ টাকা (১২ মাস মেয়াদ)"},
            {"category_name": "আইডি কার্ড নবায়ন ফি (বার্ষিক)", "amount_bdt": 1500, "vat_included": 0, "payment_method": "অনলাইন", "remarks": "১৫% ভ্যাট প্রযোজ্য"}
        ],
        "documents": [
            {"name": "জাতীয় পরিচয়পত্র (NID) কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "স্ক্যান কপি", "how_to_obtain": "আবেদনকারীর নিজস্ব এনআইডি"},
            {"name": "ট্যাক্স আইডেন্টিফিকেশন নম্বর (e-TIN) সার্টিফিকেট", "is_mandatory": 1, "attestation_required": 0, "format_type": "পিডিএফ কপি", "how_to_obtain": "incometax.gov.bd"},
            {"name": "বিগত ১২ মাসের মার্কেটপ্লেস বা সরাসরি বিদেশি বায়ার ইনভয়েস আয়ের প্রমাণপত্র (ন্যূনতম ১,০০০ ডলার)", "is_mandatory": 1, "attestation_required": 0, "format_type": "ব্যাংক স্টেটমেন্ট ও আর্নিং স্ক্রিনশট", "how_to_obtain": "Upwork/Fiverr/Bank PRCs"},
            {"name": "পাসপোর্ট সাইজ ছবি ও স্বাক্ষর স্ক্যান", "is_mandatory": 1, "attestation_required": 0, "format_type": "ছবি/পিএনজি", "how_to_obtain": "স্টুডিও ল্যাব কপি"}
        ],
        "steps": [
            {"step_number": 1, "title": "freelancers.gov.bd পোর্টালে একাউন্ট তৈরি", "description": "এনআইডি ও মোবাইল নম্বর দিয়ে ফ্রিল্যান্সার পোর্টালে রেজিস্ট্রেশন করুন।", "action_url": "https://freelancers.gov.bd", "tips": "এনআইডির তথ্য হুবহু প্রদান করুন।"},
            {"step_number": 2, "title": "আয়ের প্রমাণপত্র ও প্রোফাইল লিংক আপলোড", "description": "মার্কেটপ্লেস প্রোফাইল (Upwork, Fiverr ইত্যাদি) অথবা বিদেশি ক্লায়েন্টের চুক্তিপত্র ও বিগত ১২ মাসের ব্যাংক স্টেটমেন্ট আপলোড করুন।", "action_url": None, "tips": "বিগত ১২ মাসে ন্যূনতম ১০০০ ইউএস ডলার অর্জিত হতে হবে।"},
            {"step_number": 3, "title": "সরকারি ফি পরিশোধ ও ভার্চুয়াল স্ক্রুটিনি", "description": "অনলাইনে কার্ড বা মোবাইল ওয়ালেটে ১৭২৫ টাকা পরিশোধ করুন। বিসিসির ভার্চুয়াল ইন্টারভিউ বা ডাটা যাচাই সম্পন্ন হবে।", "action_url": None, "tips": "অনুমোদিত হলে ডিজিটাল কার্ড ডাউনলোড ও ফিজিক্যাল স্মার্ট কার্ড সংগ্রহ করা যাবে।"}
        ]
    },
    {
        "service_id": "bd-dip-no-visa-required-nvr-seal",
        "title_bn": "বিদেশি পাসপোর্টে 'নো ভিসা রিকোয়ার্ড' (NVR) সিল সংগ্রহ",
        "title_en": "No Visa Required (NVR) Endorsement on Foreign Passport",
        "category": "পাসপোর্ট ও ইমিগ্রেশন",
        "sub_category": "ভিসা ও এনভিআর",
        "department_agency": "ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP) ও বিদেশে বাংলাদেশ মিশন",
        "summary": "প্রবাসী বাংলাদেশি বংশোদ্ভূত বিদেশি নাগরিক এবং তাদের স্বামী/স্ত্রী ও সন্তানদের বাংলাদেশের পাসপোর্টে স্থায়ীভাবে বিনা ভিসায় বাংলাদেশ ভ্রমণের NVR সিল প্রদান।",
        "processing_time_sla": "আবেদন ও পাসপোর্ট জমার পর ৭-১৫ কার্যদিবস",
        "official_portal_url": "https://visa.gov.bd",
        "application_url": "https://visa.gov.bd",
        "citizen_charter_url": "https://dip.gov.bd",
        "anti_broker_warning": "NVR এর সরকারি ফি নির্ধারিত। বিদেশে মিশনভেদে সাধারণত ৫০-১০০ ডলার বা সমপরিমাণ স্থানীয় মুদ্রা এবং বাংলাদেশে পাসপোর্ট অধিদপ্তরে ৫০ ডলার সমমূল্যের সরকারি ট্রেজারি চালান। ভিসা অফিসের বাইরের কোনো দালালের মাধ্যমে পাসপোর্ট জমা দেবেন না।",
        "grievance_remedy": "পাসপোর্ট অধিদপ্তরের পরিচালক (ভিসা) বা বিদেশে নিযুক্ত বাংলাদেশ দূতাবাসের কাউন্সিলর (কনস্যুলার) বরাবর লিখিত অভিযোগ দিন।",
        "fees": [
            {"category_name": "বাংলাদেশে পাসপোর্ট অধিদপ্তরে NVR সরকারি ফি", "amount_bdt": 5500, "vat_included": 1, "payment_method": "এ-চালান / ব্যাংক ড্রাফট", "remarks": "৫০ মার্কিন ডলার সমপরিমাণ সরকারি ট্রেজারি চালান (কোড ১-০৬০১-০০০১-১৮১৭)"},
            {"category_name": "বিদেশে বাংলাদেশ মিশনে NVR ফি (যুক্তরাষ্ট্র)", "amount_bdt": 6000, "vat_included": 1, "payment_method": "মানি অর্ডার / সার্টিফাইড চেক", "remarks": "৫০ মার্কিন ডলার"}
        ],
        "documents": [
            {"name": "বর্তমান বিদেশি পাসপোর্টের মূল কপি (ন্যূনতম ৬ মাস মেয়াদ)", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "সংশ্লিষ্ট দেশের পাসপোর্ট কর্তৃপক্ষ"},
            {"name": "আবেদনকারীর পূর্ববর্তী মূল বাংলাদেশি পাসপোর্ট বা জাতীয় পরিচয়পত্র", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল ও স্ক্যান কপি", "how_to_obtain": "বাংলাদেশি পাসপোর্ট বা এনআইডি"},
            {"name": "পিতামাতার মাধ্যমে আবেদনের ক্ষেত্রে পিতামাতার বাংলাদেশি পাসপোর্ট/এনআইডি ও জন্ম নিবন্ধন", "is_mandatory": 0, "attestation_required": 1, "format_type": "নোটারি ও সত্যায়িত কপি", "how_to_obtain": "পারিবারিক রেকর্ড"},
            {"name": "বিদেশি স্পাউজের ক্ষেত্রে বিবাহ সনদ (ম্যারিজ সার্টিফিকেট)", "is_mandatory": 0, "attestation_required": 1, "format_type": "নোটারি ও সত্যায়িত কপি", "how_to_obtain": "নিকাহনামা বা ম্যারিজ সার্টিফিকেট"}
        ],
        "steps": [
            {"step_number": 1, "title": "visa.gov.bd পোর্টালে অনলাইন ফরম পূরণ", "description": "অনলাইন ভিসা পোর্টালে প্রবেশ করে ভিসা ক্যাটাগরিতে 'No Visa Required (NVR)' নির্বাচন করে ফরম পূরণ করুন।", "action_url": "https://visa.gov.bd", "tips": "পাসপোর্ট নম্বর ও ব্যক্তিগত তথ্য বিদেশি পাসপোর্ট অনুযায়ী দিন।"},
            {"step_number": 2, "title": "সরকারি এ-চালান ফি পরিশোধ ও প্রিন্ট গ্রহণ", "description": "৫০ ডলার সমপরিমাণ ট্রেজারি চালান সোনালী ব্যাংক বা এ-চালানে জমা দিয়ে আবেদন প্রিন্ট করুন।", "action_url": None, "tips": "চালানের মূল কপি আবেদনের সাথে সংযুক্ত করতে হবে।"},
            {"step_number": 3, "title": "আগারগাঁও পাসপোর্ট অফিস বা বাংলাদেশ দূতাবাসে জমা", "description": "মূল বিদেশি পাসপোর্ট ও প্রমাণপত্রসহ কাউন্টারে জমা দিন। নির্ধারিত দিনে NVR স্টিকার সম্বলিত পাসপোর্ট সংগ্রহ করুন।", "action_url": None, "tips": "NVR সিল থাকলে মেয়াদ থাকা সাপেক্ষে আজীবন ভিসা ছাড়াই বাংলাদেশে যতবার ইচ্ছা প্রবেশ ও থাকা যায়।"}
        ]
    },
    {
        "service_id": "bd-bise-duplicate-academic-certificate-marksheet",
        "title_bn": "হারানো এসএসসি/এইচএসসি মূল সার্টিফিকেট ও মার্কশিট ডুপ্লিকেট উত্তোলন",
        "title_en": "Duplicate Academic Certificate & Marksheet Issuance (SSC / HSC)",
        "category": "শিক্ষা ও ভর্তি",
        "sub_category": "শিক্ষা বোর্ড সেবা",
        "department_agency": "সকল মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা, চট্টগ্রাম, রাজশাহী ইত্যাদি)",
        "summary": "হারিয়ে যাওয়া, নষ্ট হওয়া বা আগুনে পুড়ে যাওয়া এসএসসি ও এইচএসসি পরীক্ষার মূল সনদ ও একাডেমিক ট্রান্সক্রিপ্ট ডুপ্লিকেট কপি বোর্ড থেকে উত্তোলন নির্দেশিকা।",
        "processing_time_sla": "কাগজপত্র যাচাই ও আবেদন অনুমোদনের পর ১০-১৫ কার্যদিবস",
        "official_portal_url": "https://dhakaeducationboard.gov.bd",
        "application_url": "https://dhakaeducationboard.gov.bd",
        "citizen_charter_url": "https://moedu.gov.bd",
        "anti_broker_warning": "শিক্ষা বোর্ডের সামনে কোনো দালালকে ডুপ্লিকেট সার্টিফিকেটের জন্য টাকা দেবেন না। মূল সার্টিফিকেট উত্তোলনে সরকারি ফি ৫০০ থেকে ৮০০ টাকা এবং নম্বরপত্র ৪০০ টাকা। নির্ধারিত সোনালী সেবার ফি ছাড়া আর কোনো ফি নেই। থানায় জিডি ও পত্রিকায় বিজ্ঞপ্তি দিয়ে নিজেই আবেদন করুন।",
        "grievance_remedy": "বোর্ডের সচিব বা পরীক্ষা নিয়ন্ত্রক বরাবর লিখিত আবেদন করুন অথবা শিক্ষা মন্ত্রণালয়ের অভিযোগ সেলে জানান।",
        "fees": [
            {"category_name": "মূল সার্টিফিকেট ডুপ্লিকেট সরকারি ফি", "amount_bdt": 600, "vat_included": 1, "payment_method": "সোনালী সেবা / অনলাইন পেমেন্ট", "remarks": "বোর্ড ভেদে ৫০০ থেকে ৮০০ টাকা (সাধারণ সার্ভিস)"},
            {"category_name": "নম্বরপত্র / একাডেমিক ট্রান্সক্রিপ্ট ডুপ্লিকেট ফি", "amount_bdt": 400, "vat_included": 1, "payment_method": "সোনালী সেবা", "remarks": "বোর্ড ভেদে ৩০০ থেকে ৫০০ টাকা"},
            {"category_name": "জরুরি ডেলিভারি ফি (বোর্ড অনুমোদিত হলে)", "amount_bdt": 500, "vat_included": 1, "payment_method": "সোনালী সেবা", "remarks": "৩-৫ দিনের মধ্যে সংগ্রহের জরুরি সার্ভিস"}
        ],
        "documents": [
            {"name": "নিকটস্থ থানায় করা সাধারণ ডায়েরি (GD) এর মূল কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "থানার সিলযুক্ত মূল কপি", "how_to_obtain": "হারানোর এলাকার সংশ্লিষ্ট থানা"},
            {"name": "দৈনিক সংবাদপত্রে প্রকাশিত হারানো বিজ্ঞপ্তি কাটিং", "is_mandatory": 1, "attestation_required": 0, "format_type": "সংবাদপত্রের মূল অংশ", "how_to_obtain": "জাতীয় বা স্থানীয় দৈনিক সংবাদপত্র"},
            {"name": "শিক্ষাপ্রতিষ্ঠান প্রধানের সুপারিশ ও প্রত্যয়নপত্র", "is_mandatory": 1, "attestation_required": 1, "format_type": "সিল ও স্বাক্ষরযুক্ত মূল কপি", "how_to_obtain": "যে স্কুল/কলেজ থেকে পরীক্ষা দেওয়া হয়েছিল"},
            {"name": "প্রবেশপত্র (Admit Card) বা রেজিস্ট্রেশন কার্ডের ফটোকপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "সংরক্ষিত নথিপত্র"}
        ],
        "steps": [
            {"step_number": 1, "title": "থানায় জিডি এবং দৈনিক পত্রিকায় হারানো বিজ্ঞপ্তি প্রকাশ", "description": "রোল, রেজিস্ট্রেশন ও শিক্ষাবর্ষ উল্লেখ করে থানায় জিডি করুন এবং জাতীয় পত্রিকায় বিজ্ঞপ্তি প্রকাশ করুন।", "action_url": None, "tips": "পত্রিকায় রোল ও পাশের সন নির্ভুলভাবে দিন।"},
            {"step_number": 2, "title": "শিক্ষা বোর্ডের অনলাইন পোর্টালে আবেদন ও সোনালী সেবা চালান প্রদান", "description": "সংশ্লিষ্ট শিক্ষা বোর্ডের ই-সেবা পোর্টালে ঢুকে তথ্য দিয়ে ফরম পূরণ ও সোনালী সেবার ফি পরিশোধ করুন।", "action_url": "https://dhakaeducationboard.gov.bd", "tips": "ব্যাংক ট্রানজেকশন স্লিপ যত্ন করে রাখুন।"},
            {"step_number": 3, "title": "বোর্ড শাখায় আবেদন জমা ও মূল ডুপ্লিকেট সনদ সংগ্রহ", "description": "প্রিন্ট কপি, জিডি ও পেপারের মূল কাটিংসহ বোর্ডের সনদ শাখায় জমা দিন। নির্দিষ্ট দিনে সনদ ও নম্বরপত্র সংগ্রহ করুন।", "action_url": None, "tips": "সনদ গ্রহণের সময় প্রবেশপত্র বা মূল রেজিস্ট্রেশন কার্ড দেখাতে হবে।"}
        ]
    },
    {
        "service_id": "bd-nu-degree-masters-certificate-transcript",
        "title_bn": "জাতীয় বিশ্ববিদ্যালয় মূল সনদ, সাময়িক সনদ ও ট্রান্সক্রিপ্ট উত্তোলন",
        "title_en": "National University Original Certificate, Provisional Certificate & Transcript",
        "category": "শিক্ষা ও ভর্তি",
        "sub_category": "বিশ্ববিদ্যালয় সনদ",
        "department_agency": "পরীক্ষা নিয়ন্ত্রকের দপ্তর, জাতীয় বিশ্ববিদ্যালয় (গাজীপুর)",
        "summary": "জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি পাস, অনার্স, মাস্টার্স ও প্রফেশনাল কোর্সের মূল সনদ, সাময়িক সনদপত্র এবং একাডেমিক ট্রান্সক্রিপ্ট উত্তোলন পদ্ধতি ও সোনালী সেবা ফি নির্দেশিকা।",
        "processing_time_sla": "অনলাইন আবেদন ও সোনালী সেবায় টাকা জমার পর ১৫-২৫ কার্যদিবস",
        "official_portal_url": "https://services.nu.ac.bd",
        "application_url": "https://services.nu.ac.bd",
        "citizen_charter_url": "https://nu.ac.bd",
        "anti_broker_warning": "জাতীয় বিশ্ববিদ্যালয়ের ক্যাম্পাসে কোনো দালালের মাধ্যমে টাকা দেবেন না। সকল প্রকার সনদ উত্তোলনের আবেদন অনলাইনে services.nu.ac.bd এর মাধ্যমে হয় এবং ফি সরাসরি সোনালী ব্যাংকের পে-স্লিপ বা সোনালী পেমেন্ট গেটওয়েতে জমা হয়। মূল সনদ ফি ৫০০ টাকা, সাময়িক সনদ ৩০০ টাকা ও ট্রান্সক্রিপ্ট ৭০০ টাকা।",
        "grievance_remedy": "জাতীয় বিশ্ববিদ্যালয় হেল্পলাইন ০৯৬১৪০১৬০১৬ বা পরীক্ষা নিয়ন্ত্রক বরাবর সরাসরি grievance জানান।",
        "fees": [
            {"category_name": "মূল সনদপত্র (Original Certificate) সরকারি ফি", "amount_bdt": 500, "vat_included": 1, "payment_method": "সোনালী সেবা (অনলাইন/ব্যাংক)", "remarks": "সাধারণ ফি ৫০০ টাকা"},
            {"category_name": "সাময়িক সনদপত্র (Provisional Certificate) ফি", "amount_bdt": 300, "vat_included": 1, "payment_method": "সোনালী সেবা", "remarks": "সাধারণ ফি ৩০০ টাকা"},
            {"category_name": "অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট ফি", "amount_bdt": 700, "vat_included": 1, "payment_method": "সোনালী সেবা", "remarks": "প্রতি কপির সরকারি ফি ৭০০ টাকা"},
            {"category_name": "জরুরি সার্ভিস অতিরিক্ত ফি", "amount_bdt": 500, "vat_included": 1, "payment_method": "সোনালী সেবা", "remarks": "৭ কার্যদিবসে ডেলিভারির জন্য জরুরি ফি"}
        ],
        "documents": [
            {"name": "মূল রেজিস্ট্রেশন কার্ডের ফটোকপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "স্পষ্ট স্ক্যান কপি", "how_to_obtain": "নিজস্ব সংরক্ষিত কপি"},
            {"name": "সকল বর্ষের মূল প্রবেশপত্রের (Admit Card) ফটোকপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "স্ক্যান কপি", "how_to_obtain": "পরীক্ষার প্রবেশপত্র"},
            {"name": "সকল বর্ষের পরীক্ষার ফলাফল / অনলাইন মার্কশিট প্রিন্ট কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "প্রিন্ট কপি", "how_to_obtain": "nu.ac.bd/results"},
            {"name": "জাতীয় পরিচয়পত্র (NID) কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "স্ক্যান কপি", "how_to_obtain": "নিজস্ব এনআইডি"}
        ],
        "steps": [
            {"step_number": 1, "title": "services.nu.ac.bd পোর্টালে অনলাইন ফরম পূরণ", "description": "জাতীয় বিশ্ববিদ্যালয়ের সার্ভিসেস পোর্টালে গিয়ে স্টুডেন্ট রেজিস্ট্রেশন নম্বর দিয়ে নির্দিষ্ট সনদের জন্য আবেদন করুন।", "action_url": "https://services.nu.ac.bd", "tips": "রেজিস্ট্রেশন নম্বর ও সেশন সতর্কতার সাথে চেক করুন।"},
            {"step_number": 2, "title": "সোনালী সেবা পে-স্লিপ ডাউনলোড ও ফি প্রদান", "description": "সিস্টেম জেনারেটেড পে-স্লিপ প্রিন্ট করে সোনালী ব্যাংকের যেকোনো শাখায় অথবা অনলাইনে সোনালী ই-সেবায় ফি জমা দিন।", "action_url": None, "tips": "ফি পরিশোধের পর স্ট্যাটাস 'Paid' হয়েছে কিনা প্রোফাইলে চেক করুন।"},
            {"step_number": 3, "title": "গাজীপুর মূল ক্যাম্পাস বা ডাকযোগে সনদ সংগ্রহ", "description": "সনদ প্রস্তুত হলে এসএমএস আসবে। গাজীপুর ওয়ান-স্টপ সার্ভিস থেকে অথবা ডাকযোগে মূল সনদপত্র গ্রহণ করুন।", "action_url": None, "tips": "ক্যাম্পাস থেকে উত্তোলনের সময় মূল রেজিস্ট্রেশন কার্ড প্রদর্শন আবশ্যক।"}
        ]
    },
    {
        "service_id": "bd-land-mutation-appeal-miss-case-adc",
        "title_bn": "ভুয়া নামজারি বাতিল ও মিস কেস / এডিসি রেভিনিউ আদালতে আপিল",
        "title_en": "Land Mutation Cancellation & Miss Case Appeal (ADC Revenue / Revision)",
        "category": "ভূমি ও সম্পত্তি",
        "sub_category": "নামজারি আপিল ও মিস কেস",
        "department_agency": "অতিরিক্ত জেলা প্রশাসক (রাজস্ব) এর আদালত / সহকারী কমিশনার (ভূমি) অফিস",
        "summary": "অবৈধ, জাল দলিল বা ওয়ারিশ গোপন করে প্রতারণামূলক নামজারি খতিয়ান বাতিলকরণ এবং ৩০ দিনের মধ্যে এডিসি (রাজস্ব) আদালতে মিস কেস ও আপিল দায়ের নির্দেশিকা।",
        "processing_time_sla": "নোটিশ, শুনানি ও আর্গুমেন্ট শেষে ৬০-৯০ কার্যদিবস",
        "official_portal_url": "https://mutation.land.gov.bd",
        "application_url": "https://mutation.land.gov.bd",
        "citizen_charter_url": "https://minland.gov.bd",
        "anti_broker_warning": "ভুয়া নামজারি বাতিলের জন্য কোনো ভুয়া মুহুরি বা দালালকে লাখ লাখ টাকা দেবেন না। সহকারী কমিশনার (ভূমি) এর আদেশের বিরুদ্ধে ৩০ কার্যদিবসের মধ্যে এডিসি রেভিনিউ আদালতে আপিল করতে মাত্র ২০ টাকার কোর্ট ফি লাগে। আইনসম্মত নথিপত্র থাকলে সরাসরি আইনজীবীর মাধ্যমে মিস কেস ফাইল করুন।",
        "grievance_remedy": "আদালত অবমাননা বা দুর্নীতি হলে বিভাগীয় কমিশনার বা ভূমি আপিল বোর্ড (ভূমি মন্ত্রণালয়) এ রিভিশন দায়ের করুন।",
        "fees": [
            {"category_name": "মিস কেস / আপিল পিটিশন কোর্ট ফি", "amount_bdt": 20, "vat_included": 1, "payment_method": "কোর্ট ফি স্ট্যাম্প", "remarks": "আইনত নির্ধারিত সরকারি কোর্ট ফি মাত্র ২০ টাকা"},
            {"category_name": "নকল / সার্টিফাইড পর্চা উত্তোলন ফি", "amount_bdt": 100, "vat_included": 1, "payment_method": "কোর্ট চালান", "remarks": "বাতিলযোগ্য নামজারি আদেশের অবিকল নকল ফি ১০০-১৫০ টাকা"},
            {"category_name": "নোটিশ জারি ও প্রসেস ফি (তলবানা)", "amount_bdt": 50, "vat_included": 1, "payment_method": "কোর্ট চালান / নগদ", "remarks": "প্রতিপক্ষকে নোটিশ প্রেরণের সরকারি প্রসেস ফি ৫০-১০০ টাকা"}
        ],
        "documents": [
            {"name": "বাতিলযোগ্য বিতর্কিত নামজারি খতিয়ান ও এসিল্যান্ডের আদেশের সার্টিফাইড কপি", "is_mandatory": 1, "attestation_required": 1, "format_type": "সার্টিফাইড কোর্ট কপি", "how_to_obtain": "এসিল্যান্ড অফিসের রেকর্ডরুম"},
            {"name": "আবেদনকারীর মূল মালিকানার দলিল ও বায়া দলিলসমূহ", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি ও মূল দলিল প্রদর্শন", "how_to_obtain": "সাব-রেজিস্ট্রি অফিস বা ব্যক্তিগত নথি"},
            {"name": "সিএস, এসএ, আরএস ও বিএস খতিয়ানের জাবেদা নকল (পর্চা)", "is_mandatory": 1, "attestation_required": 1, "format_type": "সার্টিফাইড কপি", "how_to_obtain": "জেলা প্রশাসকের রেকর্ডরুম (eporcha.gov.bd)"},
            {"name": "হালনাগাদ ভূমি উন্নয়ন কর (দাখিলা) রসিদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "অনলাইন দাখিলা কপি", "how_to_obtain": "ldtax.gov.bd"}
        ],
        "steps": [
            {"step_number": 1, "title": "বিতর্কিত নামজারির সার্টিফাইড নকল সংগ্রহ", "description": "এসিল্যান্ডের নামজারি আদেশের অনুলিপি ও নামজারি খতিয়ানের সার্টিফাইড কপি রেকর্ডরুম থেকে উত্তোলন করুন।", "action_url": None, "tips": "আদেশ পাওয়ার ৩০ দিনের মধ্যে আপিল দায়ের করা আবশ্যক।"},
            {"step_number": 2, "title": "এডিসি (রাজস্ব) আদালতে মিস কেস / আপিল পিটিশন দাখিল", "description": "প্রতারণা ও সঠিক মালিকানার স্বপক্ষে দলিলপত্র সংযুক্ত করে অতিরিক্ত জেলা প্রশাসক (রাজস্ব) এর আদালতে পিটিশন জমা দিন।", "action_url": None, "tips": "কোর্ট ফি স্ট্যাম্প সঠিকভাবে পিটিশনে লাগাতে হবে।"},
            {"step_number": 3, "title": "উভয় পক্ষের শুনানি ও রায় প্রদান", "description": "আদালত প্রতিপক্ষকে নোটিশ প্রদান করবেন এবং উভয় পক্ষের সাক্ষ্য-প্রমাণ ও শুনানি শেষে ভুয়া নামজারি বাতিলের রায় প্রদান করবেন।", "action_url": None, "tips": "রায় হলে এসিল্যান্ড অফিস স্বয়ংক্রিয়ভাবে বালাম সংশোধন করে পূর্বের বৈধ রেকর্ড বহাল করবে।"}
        ]
    },
    {
        "service_id": "bd-dc-land-acquisition-la-case-compensation",
        "title_bn": "ভূমি অধিগ্রহণ LA Case ক্ষতিপূরণের ৩ গুণ টাকা ডিসি অফিস থেকে উত্তোলন",
        "title_en": "Land Acquisition (LA Case) 300% Compensation Claim from DC Office",
        "category": "ভূমি ও সম্পত্তি",
        "sub_category": "ভূমি অধিগ্রহণ ও ক্ষতিপূরণ",
        "department_agency": "ভূমি অধিগ্রহণ শাখা, জেলা প্রশাসকের কার্যালয় (LA Section, DC Office)",
        "summary": "স্থাবর সম্পত্তি অধিগ্রহণ ও হুকুমদখল আইন ২০১৭ অনুযায়ী সরকারি প্রকল্পের জন্য ভূমি অধিগ্রহণে জমি, স্থাপনা ও ফসলের ওপর সরকারি নির্ধারিত বাজারদরের ২০০% অতিরিক্ত সহ মোট ৩০০% (৩ গুণ) ক্ষতিপূরণ চেক উত্তোলনের সঠিক নিয়ম।",
        "processing_time_sla": "৭ ও ৮ ধারার নোটিশ ও শুনানির পর ৬০-১২০ কার্যদিবস",
        "official_portal_url": "https://lams.minland.gov.bd",
        "application_url": "https://lams.minland.gov.bd",
        "citizen_charter_url": "https://minland.gov.bd",
        "anti_broker_warning": "ডিসি অফিসের এলএ শাখায় কোনো দালাল বা মধ্যস্বত্বভোগীকে ১ টাকাও ঘুষ বা পারসেন্টেজ দেবেন না। ক্ষতিপূরণের টাকা সরাসরি জমির প্রকৃত মালিকের নিজস্ব ব্যাংক একাউন্টে একাউন্ট পেয়ি চেকের মাধ্যমে ডিসি অফিস থেকে দেওয়া হয়। দালালরা ১০% থেকে ২০% কমিশন কাটার মিথ্যা লোভ দেখায়।",
        "grievance_remedy": "ক্ষতিপূরণের অ্যাওয়ার্ডের বিরুদ্ধে আপত্তি থাকলে যুগ্ম জেলা জজ আদালতে 'আরবিট্রেশন আদালতে' আবেদন দায়ের করুন।",
        "fees": [
            {"category_name": "ক্ষতিপূরণ দাবি আবেদন সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "আইনত কোনো ফি নেই (সম্পূর্ণ ফ্রি)"},
            {"category_name": "দাবি পিটিশন কোর্ট ফি স্ট্যাম্প", "amount_bdt": 20, "vat_included": 1, "payment_method": "কোর্ট ফি স্ট্যাম্প", "remarks": "আবেদনে ২০ টাকার কোর্ট ফি স্ট্যাম্প আবশ্যক"}
        ],
        "documents": [
            {"name": "ভূমি অধিগ্রহণের ৭ ও ৮ ধারার নোটিশের মূল কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ডিসি অফিসের নোটিশ", "how_to_obtain": "ডিসি অফিসের এলএ শাখা থেকে প্রেরিত"},
            {"name": "জমির মূল ক্রয় দলিল, বায়া দলিল ও বণ্টননামা দলিল", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি ও সত্যায়িত ফটোকপি", "how_to_obtain": "ব্যক্তিগত মালিকানা রেকর্ড"},
            {"name": "সিএস, এসএ, আরএস ও বিএস নামজারি খতিয়ানের মূল পর্চা", "is_mandatory": 1, "attestation_required": 1, "format_type": "সার্টিফাইড কপি", "how_to_obtain": "জেলা প্রশাসকের রেকর্ডরুম"},
            {"name": "হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের অনলাইন দাখিলা", "is_mandatory": 1, "attestation_required": 0, "format_type": "অনলাইন প্রিন্ট", "how_to_obtain": "ldtax.gov.bd"},
            {"name": "আবেদনকারীর এনআইডি, ছবি এবং ব্যাংক একাউন্টের MICR চেক কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল ও স্ক্যান কপি", "how_to_obtain": "নিজস্ব ব্যাংক শাখা"}
        ],
        "steps": [
            {"step_number": 1, "title": "৪ ও ৭ ধারার নোটিশ যাচাই ও আপত্তি দাখিল", "description": "অধিগ্রহণের প্রাথমিক নোটিশ পাওয়ার পর কোনো আপত্তি থাকলে নির্ধারিত ১৫ দিনের মধ্যে ডিসি অফিসে আপত্তি জানান।", "action_url": None, "tips": "স্থাপনা বা গাছপালার যৌথ তদন্তের সময় সশরীরে উপস্থিত থাকুন।"},
            {"step_number": 2, "title": "৮ ধারার নোটিশ প্রাপ্তি ও ক্ষতিপূরণ দাবির নথিপত্র জমা", "description": "চূড়ান্ত অ্যাওয়ার্ডের নোটিশ পেলে জমির নিরবচ্ছিন্ন মালিকানার সকল প্রমাণপত্রসহ এলএ শাখায় আবেদন ফরম জমা দিন।", "action_url": "https://lams.minland.gov.bd", "tips": "সকল দলিলের বায়া চেইন নিখুঁতভাবে সাজান।"},
            {"step_number": 3, "title": "শুনানি নিষ্পত্তি ও একাউন্ট পেয়ি চেক গ্রহণ", "description": "ভূমি অধিগ্রহণ কর্মকর্তার উপস্থিতিতে শুনানি শেষ হলে সরকারি নির্ধারিত ক্ষতিপূরণের চেক গ্রহণ করুন।", "action_url": None, "tips": "চেকটি সরাসরি আপনার ব্যাংক একাউন্টে জমা দিয়ে টাকা তুলতে পারবেন।"}
        ]
    },
    {
        "service_id": "bd-magistrate-court-affidavit-notary-public",
        "title_bn": "ম্যাজিস্ট্রেট কোর্ট হলফনামা ও নোটারি পাবলিক এফিডেভিট",
        "title_en": "First Class Magistrate Court Affidavit & Notary Public Attestation",
        "category": "আইন ও বিচারিক সেবা",
        "sub_category": "হলফনামা ও নোটারি",
        "department_agency": "চিফ জুডিসিয়াল/মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত ও আইন মন্ত্রণালয় অনুমোদিত নোটারি পাবলিক",
        "summary": "নাম সংশোধন, পারিবারিক আপস, উত্তরাধিকারী ঘোষণা, আর্থিক অঙ্গীকার ও বিদেশ গমনের জন্য প্রথম শ্রেণির ম্যাজিস্ট্রেট কোর্ট হলফনামা ও নোটারি পাবলিক সম্পাদনের অফিশিয়াল নিয়ম।",
        "processing_time_sla": "একই দিনে তাৎক্ষণিক সম্পন্ন (১-৩ ঘণ্টা)",
        "official_portal_url": "https://lawjusticediv.gov.bd",
        "application_url": None,
        "citizen_charter_url": "https://lawjusticediv.gov.bd",
        "anti_broker_warning": "কোর্ট প্রাঙ্গণে কোনো অনিবন্ধিত দালালের কাছে যাবেন না। সরকারি নন-জুডিশিয়াল স্ট্যাম্পে নোটারি ফি ৫০ থেকে ২০০ টাকা এবং ম্যাজিস্ট্রেট কোর্ট হলফনামা সরকারি কোর্ট ফি সাধারণত ২০০ থেকে ৩০০ টাকার স্ট্যাম্পে হয়। সরকার অনুমোদিত আইনজীবী বা নোটারি পাবলিকের সই ও সরকারি রেজিস্ট্রেশন সিল যাচাই করুন।",
        "grievance_remedy": "জাল স্ট্যাম্প বা প্রতারণার ক্ষেত্রে জেলা আইনজীবী সমিতি (Bar Association) বা আইন মন্ত্রণালয়ের সলিসিটর অনুবিভাগে অভিযোগ করুন।",
        "fees": [
            {"category_name": "নোটারি পাবলিক সত্যায়ন সরকারি ফি", "amount_bdt": 100, "vat_included": 1, "payment_method": "নগদ রসিদ", "remarks": "ডকুমেন্ট ও স্ট্যাম্পভেদে সরকারি ফি ৫০-২০০ টাকা"},
            {"category_name": "নন-জুডিশিয়াল স্ট্যাম্প খরচ (হলফনামা)", "amount_bdt": 300, "vat_included": 1, "payment_method": "ট্রেজারি চালানে কেনা স্ট্যাম্প", "remarks": "আইন অনুযায়ী ৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে টাইপ আবশ্যক"},
            {"category_name": "প্রথম শ্রেণির ম্যাজিস্ট্রেট কোর্ট হলফনামা ফি", "amount_bdt": 200, "vat_included": 1, "payment_method": "কোর্ট ফি স্ট্যাম্প", "remarks": "ম্যাজিস্ট্রেট কোর্টের হলফনামা ফি"}
        ],
        "documents": [
            {"name": "হলফকারীর মূল জাতীয় পরিচয়পত্র (NID) বা পাসপোর্ট", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল কপি", "how_to_obtain": "আবেদনকারীর নিজস্ব এনআইডি"},
            {"name": "৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে টাইপকৃত হলফনামা মুসাবিদা", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল স্ট্যাম্প প্রিন্ট", "how_to_obtain": "অনুমোদিত ভেন্ডার বা আইনজীবী"},
            {"name": "নাম বা তথ্য সংশোধনের স্বপক্ষে মূল প্রমাণাদি (সার্টিফিকেট/জন্ম সনদ)", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি ও মূল কপি", "how_to_obtain": "প্রাসঙ্গিক প্রতিষ্ঠান"},
            {"name": "হলফকারীর সদ্য তোলা ২ কপি পাসপোর্ট সাইজ ছবি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ছবি", "how_to_obtain": "স্টুডিও ল্যাব"}
        ],
        "steps": [
            {"step_number": 1, "title": "৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা টাইপ", "description": "একজন বিজ্ঞ আইনজীবীর মাধ্যমে সঠিক আইনি ধারায় হলফনামার বক্তব্য ৩০০ টাকার স্ট্যাম্পে টাইপ করুন।", "action_url": None, "tips": "স্ট্যাম্পটি লাইসেন্সধারী ভেন্ডারের কাছ থেকে কেনা নিশ্চিত করুন।"},
            {"step_number": 2, "title": "হলফকারীর সশরীরে আদালতে বা নোটারির সামনে উপস্থিতি", "description": "হলফকারীকে সশরীরে প্রথম শ্রেণির ম্যাজিস্ট্রেট বা নোটারি পাবলিকের সামনে দাঁড়িয়ে সত্যপাঠ শপথ নিতে হবে।", "action_url": None, "tips": "প্রক্সি বা অন্য কারও দ্বারা হলফনামা করানো আইনত দণ্ডনীয় ফৌজদারি অপরাধ।"},
            {"step_number": 3, "title": "স্বাক্ষর, সিল ও বালাম বইয়ে এন্ট্রি গ্রহণ", "description": "ম্যাজিস্ট্রেট বা নোটারি পাবলিকের স্বাক্ষর, তারিখ ও রেজিস্টার নম্বরসহ স্টিকার সম্বলিত মূল হলফনামা সংগ্রহ করুন।", "action_url": None, "tips": "নোটারি রেজিস্টার বইয়ে ক্রমিক নম্বর ও স্বাক্ষর অবশ্যই দিতে হবে।"}
        ]
    },
    {
        "service_id": "bd-nbr-etin-cancellation-deregistration",
        "title_bn": "অপ্রয়োজনীয় বা অব্যবহৃত ই-টিআইএন (e-TIN) বাতিল ও নিষ্ক্রিয়করণ",
        "title_en": "e-TIN Cancellation & De-registration Procedure (NBR)",
        "category": "কর ও রাজস্ব",
        "sub_category": "আয়কর ও টিআইএন",
        "department_agency": "জাতীয় রাজস্ব বোর্ড (NBR), কর অঞ্চল ও কর সার্কেল অফিস",
        "summary": "কোনো করযোগ্য আয় না থাকা, ভুলবশত টিআইএন খোলা বা ক্রেডিট কার্ড/ট্রেড লাইসেন্স বন্ধ হয়ে যাওয়ার কারণে প্রতি বছর শূন্য রিটার্ন জমার ঝামেলা থেকে বাঁচতে টিআইএন বাতিলের অফিশিয়াল নিয়ম।",
        "processing_time_sla": "উপ-কর কমিশনারের অডিট ও শুনানি শেষে ৩০-৪৫ কার্যদিবস",
        "official_portal_url": "https://incometax.gov.bd",
        "application_url": "https://incometax.gov.bd",
        "citizen_charter_url": "https://nbr.gov.bd",
        "anti_broker_warning": "টিআইএন বাতিলের নামে ইনকাম ট্যাক্স অফিসের দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে। টিআইএন বাতিলের কোনো সরকারি ফি নেই (সম্পূর্ণ ফ্রি)। আয়কর আইন ২০২৩ অনুযায়ী করযোগ্য আয় না থাকার স্বপক্ষে সরাসরি আপনার কর সার্কেলের উপ-কর কমিশনার (DCT) বরাবর দরখাস্ত দিন।",
        "grievance_remedy": "সার্কেল কর কর্মকর্তা অহেতুক ফাইল আটকে রাখলে সংশ্লিষ্ট রেঞ্জ কর পরিদর্শক বা কর কমিশনার বরাবর অভিযোগ করুন।",
        "fees": [
            {"category_name": "টিআইএন বাতিল ও নিষ্ক্রিয়করণ সরকারি ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "আইনত সম্পূর্ণ বিনামূল্যে (০ টাকা)"}
        ],
        "documents": [
            {"name": "উপ-কর কমিশনার (DCT) বরাবর টিআইএন বাতিলের কারণ সম্বলিত লিখিত আবেদন", "is_mandatory": 1, "attestation_required": 0, "format_type": "লিখিত দরখাস্ত", "how_to_obtain": "আবেদনকারীর নিজস্ব দরখাস্ত"},
            {"name": "বিদ্যমান e-TIN সনদের ফটোকপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "সনদ ফটোকপি", "how_to_obtain": "incometax.gov.bd"},
            {"name": "বিগত ৩ বছরের শূন্য বা দাখিলকৃত আয়কর রিটার্নের রসিদ", "is_mandatory": 1, "attestation_required": 0, "format_type": "প্রাপ্তি স্বীকারপত্র", "how_to_obtain": "কর সার্কেল রেকর্ড"},
            {"name": "কোনো করযোগ্য আয় না থাকার হলফনামা বা ব্যাংক স্টেটমেন্ট", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল ব্যাংক স্টেটমেন্ট", "how_to_obtain": "ব্যাংক শাখা"},
            {"name": "যে কারণে টিআইএন খোলা হয়েছিল তা বন্ধের প্রমাণ (যেমন: ট্রেড লাইসেন্স বা ক্রেডিট কার্ড সমর্পণ পত্র)", "is_mandatory": 0, "attestation_required": 0, "format_type": "প্রত্যয়নপত্র", "how_to_obtain": "সংশ্লিষ্ট ব্যাংক বা প্রতিষ্ঠান"}
        ],
        "steps": [
            {"step_number": 1, "title": "নিজস্ব কর সার্কেল নির্ধারণ ও লিখিত দরখাস্ত প্রস্তুত", "description": "আপনার টিআইএন সার্টিফিকেটে উল্লেখিত নির্দিষ্ট কর অঞ্চল ও কর সার্কেল চিহ্নিত করে ডিসিটি বরাবর আবেদন তৈরি করুন।", "action_url": None, "tips": "টিআইএন সার্টিফিকেটেই আপনার সার্কেল নম্বর লেখা থাকে।"},
            {"step_number": 2, "title": "কর সার্কেল অফিসে আবেদন ও নথিপত্র জমা", "description": "লিখিত দরখাস্ত ও স্বপক্ষের সকল প্রমাণপত্র কর সার্কেল অফিসে জমা দিয়ে রিসিভড কপি সংগ্রহ করুন।", "action_url": None, "tips": "রিসিভড কপির সিল ও তারিখ যত্ন করে ফাইল করে রাখুন।"},
            {"step_number": 3, "title": "উপ-কর কমিশনারের সন্তুষ্টি ও এনবিআর সিস্টেমে নিষ্ক্রিয়করণ", "description": "উপ-কর কমিশনার করযোগ্য আয় না থাকার বিষয়ে নিশ্চিত হয়ে কর কমিশনারের অনুমোদনে টিআইএন স্থায়ীভাবে নিষ্ক্রিয় করবেন।", "action_url": "https://incometax.gov.bd", "tips": "নিষ্ক্রিয় হওয়ার পর ভবিষ্যতে আর কোনো রিটার্ন দাখিল করতে হবে না।"}
        ]
    },
    {
        "service_id": "bd-pm-relief-fund-medical-financial-grant",
        "title_bn": "প্রধানমন্ত্রীর ত্রাণ ও কল্যাণ তহবিল থেকে চিকিৎসার এককালীন অনুদান",
        "title_en": "PM Relief & Welfare Fund Financial & Medical Assistance Grant",
        "category": "স্বাস্থ্য ও চিকিৎসা",
        "sub_category": "চিকিৎসা অনুদান ও কল্যাণ",
        "department_agency": "প্রধানমন্ত্রীর কার্যালয় (ত্রাণ ও কল্যাণ তহবিল অনুবিভাগ)",
        "summary": "ক্যান্সার, কিডনি, হার্ট, পক্ষাঘাত ও অন্যান্য জটিল রোগে আক্রান্ত দরিদ্র ও অসচ্ছল নাগরিকদের চিকিৎসার জন্য ৫০,০০০ থেকে ২,০০,০০০ টাকা পর্যন্ত সরকারি এককালীন আর্থিক সহায়তা অনুদান।",
        "processing_time_sla": "আবেদন যাচাই ও বরাদ্দ অনুমোদন সাপেক্ষে ৩০-৬০ কার্যদিবস",
        "official_portal_url": "https://pmo.gov.bd",
        "application_url": "https://pmo.gov.bd",
        "citizen_charter_url": "https://pmo.gov.bd",
        "anti_broker_warning": "ত্রাণ তহবিলের অনুদান পেতে কোনো মধ্যস্বত্বভোগী বা দালালকে ১ টাকাও দেবেন না। আবেদন সম্পূর্ণ বিনামূল্যে। সংসদ সদস্যের সুপারিশ বা ডিসি অফিসের মাধ্যমে সরাসরি প্রধানমন্ত্রীর কার্যালয়ে আবেদন পৌঁছানো যায়। অনুদানের টাকা সরাসরি আবেদনকারীর ব্যাংক একাউন্টে একাউন্ট পেয়ি চেকের মাধ্যমে পাঠানো হয়।",
        "grievance_remedy": "কোনো অসদুপায় বা ঘুষ দাবির শিকার হলে সরাসরি পিএমও ডিরেক্টর (ত্রাণ) বা হটলাইনে যোগাযোগ করুন।",
        "fees": [
            {"category_name": "চিকিৎসা সহায়তা অনুদান আবেদন ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "সম্পূর্ণ বিনামূল্যে সরকারি মানবকল্যাণমূলক সেবা (০ টাকা)"}
        ],
        "documents": [
            {"name": "প্রধানমন্ত্রীর ত্রাণ ও কল্যাণ তহবিল নির্ধারিত আবেদন ফরম", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল ফরম", "how_to_obtain": "পিএমও ওয়েবসাইট বা ডিসি অফিস"},
            {"name": "স্থানীয় সংসদ সদস্যের (MP) লিখিত প্রত্যয়ন ও জোরালো সুপারিশপত্র", "is_mandatory": 1, "attestation_required": 0, "format_type": "মূল প্যাড ও স্বাক্ষর", "how_to_obtain": "সংশ্লিষ্ট এলাকার সংসদ সদস্য"},
            {"name": "সরকারি হাসপাতালের বিশেষজ্ঞ চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের আনুমানিক প্রাক্কলন", "is_mandatory": 1, "attestation_required": 1, "format_type": "চিকিৎসক সিলযুক্ত মূল কপি", "how_to_obtain": "সরকারি মেডিকেল কলেজ বা বিশেষায়িত হাসপাতাল"},
            {"name": "রোগী ও আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি", "is_mandatory": 1, "attestation_required": 0, "format_type": "ফটোকপি", "how_to_obtain": "নিজস্ব এনআইডি"},
            {"name": "আবেদনকারীর নিজস্ব সক্রিয় ব্যাংক একাউন্টের তথ্য ও চেক বইয়ের পাতা", "is_mandatory": 1, "attestation_required": 0, "format_type": "চেকের পাতা", "how_to_obtain": "ব্যাংক শাখা"}
        ],
        "steps": [
            {"step_number": 1, "title": "আবেদন ফরম সংগ্রহ ও চিকিৎসকের প্রেসক্রিপশন সংযোজন", "description": "প্রধানমন্ত্রীর কার্যালয়ের নির্ধারিত আবেদন ফরম পূরণ করে সরকারি হাসপাতালের চিকিৎসকের সনদ ও খরচের এস্টিমেট যুক্ত করুন।", "action_url": None, "tips": "চিকিৎসকের বিএমডিসি রেজিস্ট্রেশন নম্বর ও সিল স্পষ্ট থাকতে হবে।"},
            {"step_number": 2, "title": "সংসদ সদস্যের সুপারিশ গ্রহণ ও ডিসি অফিসে জমা", "description": "ফরমটিতে স্থানীয় সংসদ সদস্যের সুপারিশ ও প্রত্যয়ন নিয়ে সরাসরি প্রধানমন্ত্রীর কার্যালয়ের ত্রাণ শাখায় বা জেলা প্রশাসকের মাধ্যমে পাঠান।", "action_url": None, "tips": "আবেদনের একটি ডুপ্লিকেট ফটোকপি নিজের কাছে রাখুন।"},
            {"step_number": 3, "title": "তহবিল বরাদ্দ অনুমোদন ও অনুদানের চেক গ্রহণ", "description": "প্রধানমন্ত্রীর কার্যালয়ের যাচাই শেষে বরাদ্দ অনুমোদিত হলে আবেদনকারীর নামে পাঠানো অনুদানের চেক সংগ্রহ করুন।", "action_url": None, "tips": "চেকটি ব্যাংক একাউন্টে জমা দিয়ে চিকিৎসার অর্থ উত্তোলন করুন।"}
        ]
    },
    {
        "service_id": "bd-mowca-one-stop-crisis-center-occ",
        "title_bn": "ওয়ান-স্টপ ক্রাইসিস সেন্টার (OCC) ও নারী ও শিশু নির্যাতন প্রতিরোধ সেবা",
        "title_en": "One-Stop Crisis Center (OCC) & 109 National Violence Prevention Helpline",
        "category": "জরুরি ও সহায়তা",
        "sub_category": "জরুরি আইনি ও চিকিৎসা সহায়তা",
        "department_agency": "নারী ও শিশু বিষয়ক মন্ত্রণালয়, স্বাস্থ্য সেবা বিভাগ ও বাংলাদেশ পুলিশ",
        "summary": "শারীরিক, মানসিক বা পারিবারিক নির্যাতনের শিকার নারী ও শিশুদের দেশের ১৪টি সরকারি মেডিকেল কলেজ হাসপাতালে বিনামূল্যে জরুরি চিকিৎসা, আইনি পরামর্শ, ডিএনএ পরীক্ষা, আশ্রয় ও পুলিশি সুরক্ষা সেবা।",
        "processing_time_sla": "তাৎক্ষণিক জরুরি সেবা (২৪ ঘণ্টা চালু)",
        "official_portal_url": "https://mowca.gov.bd",
        "application_url": None,
        "citizen_charter_url": "https://mowca.gov.bd",
        "anti_broker_warning": "ওসিসি (OCC) এর সকল চিকিৎসা, ওষুধ, আইনি সহায়তা, ডিএনএ টেস্ট ও খাবার সরকার থেকে সম্পূর্ণ বিনামূল্যে দেওয়া হয়। হাসপাতালের কোনো অসাধু কর্মচারী বা দালালকে ১ টাকাও দেবেন না। যে কোনো নির্যাতন বা বাল্যবিয়ে রোধে জাতীয় হেল্পলাইন ১০৯ নম্বরে টোল-ফ্রি ২৪ ঘণ্টা কল করা যায়।",
        "grievance_remedy": "সেবায় অবহেলা হলে জাতীয় জরুরি সেবা ৯৯৯, নারী নির্যাতন হেল্পলাইন ১০৯ অথবা হাসপাতাল পরিচালক বরাবর সরাসরি জানান।",
        "fees": [
            {"category_name": "ওসিসি জরুরি চিকিৎসা, ওষুধ ও আইনি সেবা ফি", "amount_bdt": 0, "vat_included": 1, "payment_method": "বিনামূল্যে", "remarks": "সরকার কর্তৃক সম্পূর্ণ বিনামূল্যে প্রদত্ত জরুরি নাগরিক অধিকার সেবা (০ টাকা)"}
        ],
        "documents": [
            {"name": "ভিকটিম বা অভিভাবকের এনআইডি / জন্ম নিবন্ধন (যদি থাকে, না থাকলেও সেবা দেওয়া হয়)", "is_mandatory": 0, "attestation_required": 0, "format_type": "যে কোনো পরিচয়পত্র", "how_to_obtain": "সংরক্ষিত কপি"},
            {"name": "পূর্ববর্তী কোনো চিকিৎসা বা পুলিশ রিপোর্ট (যদি থাকে)", "is_mandatory": 0, "attestation_required": 0, "format_type": "প্রেসক্রিপশন/রিপোর্ট", "how_to_obtain": "হাসপাতাল বা থানা"}
        ],
        "steps": [
            {"step_number": 1, "title": "১০৯ হেল্পলাইনে কল বা সরাসরি সরকারি মেডিকেল ওসিসিতে গমন", "description": "টোল-ফ্রি ১০৯ নম্বরে ফোন দিন অথবা নিকটস্থ সরকারি মেডিকেল কলেজ হাসপাতালের ওসিসি ইউনিটে সরাসরি উপস্থিত হন।", "action_url": "tel:109", "tips": "১০৯ নম্বরে ফোন করতে কোনো ব্যালেন্স কাটে না, এটি সম্পূর্ণ ফ্রি।"},
            {"step_number": 2, "title": "তাৎক্ষণিক জরুরি চিকিৎসা ও ডাক্তারি পরীক্ষা (মেডিকেল ও ডিএনএ)", "description": "বিশেষজ্ঞ চিকিৎসক দল কোনো খরচ ছাড়াই ভিকটিমকে জরুরি চিকিৎসা, ওষুধ এবং ফরেনসিক পরীক্ষা প্রদান করবেন।", "action_url": None, "tips": "ঘটনার পর দ্রুত হাসপাতালে আসলে আলামত ও প্রমাণ নষ্ট হয় না।"},
            {"step_number": 3, "title": "পুলিশি জিডি/মামলা এবং সরকারি আইনজীবী দ্বারা বিনামূল্যে আইনি লড়াই", "description": "ওসিসিতে নিয়োজিত পুলিশ কর্মকর্তা সরাসরি জবানবন্দি গ্রহণ করে মামলা দায়ের করেন এবং সরকারি খরচে আইনজীবী নিযুক্ত করা হয়।", "action_url": None, "tips": "ভিকটিমের মানসিক পুনর্বাসন ও নিরাপদ আশ্রয়ের সার্বিক ব্যবস্থাও ওসিসি করে থাকে।"}
        ]
    }
]

# 1. Update data/processed/citizen_services.json
json_path = 'data/processed/citizen_services.json'
with open(json_path, 'r', encoding='utf-8') as f:
    existing_services = json.load(f)

existing_ids = {s['service_id'] for s in existing_services}
added_count = 0
for ns in NEW_10_SERVICES:
    if ns['service_id'] not in existing_ids:
        existing_services.append(ns)
        existing_ids.add(ns['service_id'])
        added_count += 1

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(existing_services, f, ensure_ascii=False, indent=2)

print(f"Updated {json_path}: Total services is now {len(existing_services)} (Added {added_count} new services).")

# 2. Generate SQL migration script
sql_statements = []

for ns in NEW_10_SERVICES:
    sid = ns['service_id']
    t_bn = ns['title_bn'].replace("'", "''")
    t_en = ns.get('title_en', '').replace("'", "''")
    cat = ns['category'].replace("'", "''")
    sub_cat = ns.get('sub_category', '').replace("'", "''")
    dept = ns['department_agency'].replace("'", "''")
    summary = ns['summary'].replace("'", "''")
    sla = ns['processing_time_sla'].replace("'", "''")
    portal = ns.get('official_portal_url', '').replace("'", "''")
    app_url_val = ns.get('application_url')
    app_url = f"'{app_url_val.replace("'", "''")}'" if app_url_val else "NULL"
    charter_val = ns.get('citizen_charter_url')
    charter = f"'{charter_val.replace("'", "''")}'" if charter_val else "NULL"
    warn = ns.get('anti_broker_warning', '').replace("'", "''")
    remedy = ns.get('grievance_remedy', '').replace("'", "''")

    sql_statements.append(f"""
INSERT OR REPLACE INTO services (
    service_id, title_bn, title_en, category, sub_category, department_agency,
    summary, processing_time_sla, official_portal_url, application_url, citizen_charter_url,
    anti_broker_warning, grievance_remedy
) VALUES (
    '{sid}', '{t_bn}', '{t_en}', '{cat}', '{sub_cat}', '{dept}',
    '{summary}', '{sla}', '{portal}', {app_url}, {charter},
    '{warn}', '{remedy}'
);

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

sql_file = 'scripts/seed_new_10_services.sql'
with open(sql_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql_statements))

print(f"Generated SQL in {sql_file} ({len(sql_statements)} statements).")
