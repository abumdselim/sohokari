import { ServiceRecord } from '../../types/service';

export const doeEnvironmentalClearanceCertificateEccService: ServiceRecord = {
  id: 'bd-doe-environmental-clearance-certificate-ecc',
  slug: 'bd-doe-environmental-clearance-certificate-ecc',
  category_id: 'citizen_general',
  name_bn: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা',
  name_en: 'Bangladesh Department of Environment Clearance Certificate (ECC) Online Guide',
  responsible_ministry_bn: 'পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_ministry_en: 'পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_agency_bn: 'পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_agency_en: 'পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://doe.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://doe.gov.bd',
  legal_basis: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh department of environment clearance certificate (ecc) online guide', language: 'en', weight: 1.0 },
    { alias: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি', language: 'bn', weight: 0.95 },
    { alias: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি ফি', language: 'bn', weight: 0.95 },
    { alias: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'doe environmental clearance certificate ecc', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-doe-environmental-clearance-certificate-ecc-standard',
      variant_name_bn: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Department of Environment Clearance Certificate (ECC) Online Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'সবুজ শ্রেণি (Green Category - ক্ষুদ্র কুটির শিল্প/দোকান)',
          fee_type_en: 'সবুজ শ্রেণি (Green Category - ক্ষুদ্র কুটির শিল্প/দোকান)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিনিয়োগ সীমা ৫০ লাখ পর্যন্ত হলে ফি মাত্র ১৫০০ টাকা (+১৫% ভ্যাট)।'
        },
        {
          fee_type_bn: 'কমলা শ্রেণি (Orange Category - মাঝারি কারখানা/রাইস মিল)',
          fee_type_en: 'কমলা শ্রেণি (Orange Category - মাঝারি কারখানা/রাইস মিল)',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিনিয়োগ অনুপাত অনুযায়ী ৫,০০০ থেকে ১৫,০০০ টাকা।'
        },
        {
          fee_type_bn: 'লাল শ্রেণি (Red Category - বড় রাসায়নিক/টেক্সটাইল শিল্প)',
          fee_type_en: 'লাল শ্রেণি (Red Category - বড় রাসায়নিক/টেক্সটাইল শিল্প)',
          amount_bdt: 25000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ইআইএ (EIA) ও ইটিপি (ETP) প্ল্যান সাপেক্ষে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রকল্পের বিস্তারিত বিবরণ ও বিনিয়োগের পরিমাণ সম্বলিত প্রোজেক্ট প্রোফাইল',
          document_name_en: 'প্রকল্পের বিস্তারিত বিবরণ ও বিনিয়োগের পরিমাণ সম্বলিত প্রোজেক্ট প্রোফাইল',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'কারখানা বা প্রকল্পের জমির মালিকানা দলিল / ভাড়ার চুক্তিপত্র ও খতিয়ান',
          document_name_en: 'কারখানা বা প্রকল্পের জমির মালিকানা দলিল / ভাড়ার চুক্তিপত্র ও খতিয়ান',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স ও টিআইএন সার্টিফিকেট',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স ও টিআইএন সার্টিফিকেট',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্থানীয় কর্তৃপক্ষের অনাপত্তিপত্র (ইউপি চেয়ারম্যান বা পৌর মেয়রের প্রত্যয়নপত্র)',
          document_name_en: 'স্থানীয় কর্তৃপক্ষের অনাপত্তিপত্র (ইউপি চেয়ারম্যান বা পৌর মেয়রের প্রত্যয়নপত্র)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'কারখানার লে-আউট প্ল্যান ও বর্জ্য ব্যবস্থাপনা পরিকল্পনা (EMP / ETP)',
          document_name_en: 'কারখানার লে-আউট প্ল্যান ও বর্জ্য ব্যবস্থাপনা পরিকল্পনা (EMP / ETP)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'পরিবেশ অধিদপ্তরের পোর্টালে নিবন্ধন',
          instruction_bn: 'https://e-ecc.doe.gov.bd পোর্টালে প্রবেশ করে উদ্যোক্তা একাউন্ট তৈরি করুন। আপনার প্রকল্পের সঠিক ক্যাটাগরি (সবুজ/কমলা/লাল) নির্বাচন করুন।',
          warning_bn: 'সবুজ ক্যাটাগরির প্রকল্প হলে কোনো দীর্ঘ তদন্ত ছাড়াই তাৎক্ষণিক ছাড়পত্র পাওয়া যায়।',
          action_url: 'https://e-ecc.doe.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'তথ্য পূরণ ও প্রয়োজনীয় ডকুমেন্টস আপলোড',
          instruction_bn: 'লে-আউট প্ল্যান, জমির দলিল, বিনিয়োগের পরিমাণ ও ট্রেড লাইসেন্স আপলোড করুন।',
          warning_bn: 'বর্জ্য নিষ্কাশনের সঠিক ব্যবস্থা প্রদর্শন করুন।',
          action_url: 'https://doe.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি ট্রেজারি চালান প্রদান',
          instruction_bn: 'সোনালী ব্যাংকে নির্দিষ্ট কোডে সরকারি ফি জমা দিয়ে চালানের নম্বর ও স্ক্যান কপি সিস্টেমে এন্ট্রি করুন।',
          warning_bn: 'পরিবেশ পরিদর্শককে ব্যক্তিগতভাবে কোনো টাকা দেবেন না।',
          action_url: 'https://doe.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'পরিদর্শন ও কিউআর কোডযুক্ত ডিজিটাল সনদ প্রাপ্তি',
          instruction_bn: 'পরিবেশ পরিদর্শক সরেজমিনে স্থান পরিদর্শন করবেন। আবেদন অনুমোদিত হলে সিস্টেম থেকে কিউআর কোডযুক্ত ডিজিটাল পরিবেশগত ছাড়পত্র ডাউনলোড করে প্রিন্ট করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://doe.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দালালরা ছাড়পত্র পাইয়ে দেওয়ার নামে পরিবেশ অধিদপ্তরের কর্মকর্তাদের নাম ভাঙিয়ে লাখ লাখ টাকা হাতিয়ে নেয়। অনলাইনে আবেদন করলে প্রতিটি ফাইলের অগ্রগতি ঢাকা হেডকোয়ার্টার্স থেকে সরাসরি ট্র্যাক করা হয়। ঘুষ দেওয়া এবং নেওয়া উভয়ই আইনত দণ্ডনীয় অপরাধ।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://doe.gov.bd'
    }
  ]
};
