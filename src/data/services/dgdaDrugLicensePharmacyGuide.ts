import { ServiceRecord } from '../../types/service';

export const dgdaDrugLicensePharmacyGuideService: ServiceRecord = {
  id: 'bd-dgda-drug-license-pharmacy-guide',
  slug: 'bd-dgda-drug-license-pharmacy-guide',
  category_id: 'citizen_general',
  name_bn: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা',
  name_en: 'DGDA Retail Pharmacy Drug License Application, Renewal & Official Fee Guide',
  responsible_ministry_bn: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA), স্বাস্থ্য সেবা বিভাগ',
  responsible_ministry_en: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA), স্বাস্থ্য সেবা বিভাগ',
  responsible_agency_bn: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA), স্বাস্থ্য সেবা বিভাগ',
  responsible_agency_en: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA), স্বাস্থ্য সেবা বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dgda.gov.bd',
  helpline_number: '16263',
  grievance_channel: 'https://dgda.gov.bd',
  legal_basis: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'dgda retail pharmacy drug license application, renewal & official fee guide', language: 'en', weight: 1.0 },
    { alias: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dgda drug license pharmacy guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dgda-drug-license-pharmacy-guide-standard',
      variant_name_bn: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'DGDA Retail Pharmacy Drug License Application, Renewal & Official Fee Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'খুচরা ড্রাগ লাইসেন্স (সিটি কর্পোরেশন ও জেলা সদর এলাকা)',
          fee_type_en: 'খুচরা ড্রাগ লাইসেন্স (সিটি কর্পোরেশন ও জেলা সদর এলাকা)',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত প্রমিত ফি ৫,০০০ টাকা (+১৫% ভ্যাট ৭৫০ টাকা = মোট ৫,৭৫০ টাকা)।'
        },
        {
          fee_type_bn: 'খুচরা ড্রাগ লাইসেন্স (পৌরসভা এলাকা)',
          fee_type_en: 'খুচরা ড্রাগ লাইসেন্স (পৌরসভা এলাকা)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'পৌরসভা এলাকার জন্য ৩,০০০ টাকা (+১৫% ভ্যাট)।'
        },
        {
          fee_type_bn: 'খুচরা ড্রাগ লাইসেন্স (ইউনিয়ন পরিষদ ও অন্যান্য এলাকা)',
          fee_type_en: 'খুচরা ড্রাগ লাইসেন্স (ইউনিয়ন পরিষদ ও অন্যান্য এলাকা)',
          amount_bdt: 2500.0,
          effective_date: '2022-01-01',
          notes_bn: 'গ্রামাঞ্চলের জন্য মাত্র ২,৫০০ টাকা (+ভ্যাট)।'
        },
        {
          fee_type_bn: 'ড্রাগ লাইসেন্স নবায়ন ফি (প্রতি ২ বছর পর পর)',
          fee_type_en: 'ড্রাগ লাইসেন্স নবায়ন ফি (প্রতি ২ বছর পর পর)',
          amount_bdt: 2500.0,
          effective_date: '2022-01-01',
          notes_bn: 'মূল ফির ৫০% হারে পরিশোধযোগ্য।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বাংলাদেশ ফার্মেসী কাউন্সিল কর্তৃক প্রদত্ত ফার্মাসিস্ট রেজিস্ট্রেশন সনদ (গ্রেড-সি/বি/এ)',
          document_name_en: 'বাংলাদেশ ফার্মেসী কাউন্সিল কর্তৃক প্রদত্ত ফার্মাসিস্ট রেজিস্ট্রেশন সনদ (গ্রেড-সি/বি/এ)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ফার্মাসিস্টের অঙ্গীকারনামা (উক্ত ফার্মেসিতে দায়িত্ব পালনের সম্মতিপত্র)',
          document_name_en: 'ফার্মাসিস্টের অঙ্গীকারনামা (উক্ত ফার্মেসিতে দায়িত্ব পালনের সম্মতিপত্র)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স (ফার্মেসি বা ড্রাগ স্টোর উল্লেখসহ)',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স (ফার্মেসি বা ড্রাগ স্টোর উল্লেখসহ)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'দোকানের ভাড়ার চুক্তিপত্র অথবা নিজস্ব দোকান হলে দলিলের ফটোকপি',
          document_name_en: 'দোকানের ভাড়ার চুক্তিপত্র অথবা নিজস্ব দোকান হলে দলিলের ফটোকপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সরকারি ট্রেজারি চালানের মূল কপি',
          document_name_en: 'সরকারি ট্রেজারি চালানের মূল কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিজিডিএ অনলাইন পোর্টালে ফর্ম-৭ পূরণ',
          instruction_bn: 'https://dgda.gov.bd ওয়েবসাইটে যান। \'অনলাইন ড্রাগ লাইসেন্সিং সিস্টেম\' (ODLS)-এ গিয়ে আবেদনকারীর তথ্য ও দোকানের ঠিকানা দিন।',
          warning_bn: 'দোকানে কমপক্ষে ১২০ বর্গফুট পাকা ফ্লোর ও রেফ্রিজারেটরের ব্যবস্থা থাকতে হবে।',
          action_url: 'https://dgda.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ফার্মাসিস্ট সনদ ও চালানের কপি আপলোড',
          instruction_bn: 'ফার্মাসিস্ট রেজিস্ট্রেশন সার্টিফিকেট, ট্রেড লাইসেন্স এবং সোনালী ব্যাংকে জমা দেওয়া সরকারি চালানের কপি আপলোড করুন।',
          warning_bn: 'ভাড়া করা বা ভুয়া ফার্মাসিস্ট সার্টিফিকেট দিলে লাইসেন্স বাতিল ও মামলা হতে পারে।',
          action_url: 'https://dgda.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ড্রাগ সুপার কর্তৃক সরেজমিনে দোকান পরিদর্শন',
          instruction_bn: 'জেলা ঔষধ পরিদর্শক (Drug Superintendent) আপনার দোকান পরিদর্শন করে তাপমাত্রা নিয়ন্ত্রণ ব্যবস্থা ও ফ্রিজ যাচাই করবেন।',
          warning_bn: 'কোনো কর্মচারীকে ঘুষ দেবেন না। সরকারি চালানের রসিদ প্রদর্শন করুন।',
          action_url: 'https://dgda.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ডিজিটাল ড্রাগ লাইসেন্স (ফর্ম-৮) গ্রহণ',
          instruction_bn: 'আবেদন অনুমোদিত হলে কিউআর কোডযুক্ত আসল ডিজিটাল ড্রাগ লাইসেন্স সিস্টেমে চলে আসবে, যা ডাউনলোড করে দোকানে বাঁধাই করে ঝুলিয়ে রাখুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dgda.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ঔষধ প্রশাসনের দালালরা ৫০ হাজার থেকে লাখ টাকা না দিলে লাইসেন্স হবে না বলে ভীতি ছড়ায়। ODLS সম্পূর্ণ অনলাইন সিস্টেম। আপনার দোকানে ফার্মাসিস্ট ও প্রয়োজনীয় ড্রাগ স্টোরেজ থাকলে ড্রাগ সুপার লাইসেন্স দিতে বাধ্য। ঘুষ দাবি করলে সরাসরি ডিজি বরাবরে অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ফার্মেসির ড্রাগ লাইসেন্স (নতুন ও নবায়ন) আবেদন ও সরকারি ফি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dgda.gov.bd'
    }
  ]
};
