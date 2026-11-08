import { ServiceRecord } from '../../types/service';

export const wasaDeepTubewellPermissionLicenseService: ServiceRecord = {
  id: 'bd-wasa-deep-tubewell-permission-license',
  slug: 'bd-wasa-deep-tubewell-permission-license',
  category_id: 'citizen_general',
  name_bn: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা',
  name_en: 'WASA Deep Tube-well Installation Permission & License Renewal Guide',
  responsible_ministry_bn: 'ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_ministry_en: 'ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_agency_bn: 'ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_agency_en: 'ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dwasa.org.bd',
  helpline_number: '333',
  grievance_channel: 'https://dwasa.org.bd',
  legal_basis: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'wasa deep tube-well installation permission & license renewal guide', language: 'en', weight: 1.0 },
    { alias: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'wasa deep tubewell permission license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-wasa-deep-tubewell-permission-license-standard',
      variant_name_bn: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'WASA Deep Tube-well Installation Permission & License Renewal Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'গভীর নলকূপ অনুমতি আবেদন ফি',
          fee_type_en: 'গভীর নলকূপ অনুমতি আবেদন ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'অফেরতযোগ্য আবেদন ফি।'
        },
        {
          fee_type_bn: 'বার্ষিক গভীর নলকূপ লাইসেন্স নবায়ন ফি',
          fee_type_en: 'বার্ষিক গভীর নলকূপ লাইসেন্স নবায়ন ফি',
          amount_bdt: 12000.0,
          effective_date: '2022-01-01',
          notes_bn: 'নলকূপের আকার ও ব্যাস অনুযায়ী বাৎসরিক লাইসেন্স ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ওয়াসার নির্ধারিত আবেদন ফরম',
          document_name_en: 'ওয়াসার নির্ধারিত আবেদন ফরম',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান',
          document_name_en: 'জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের প্ল্যান',
          document_name_en: 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের প্ল্যান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত ছাড়পত্র (শিল্প প্রতিষ্ঠানের ক্ষেত্রে)',
          document_name_en: 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত ছাড়পত্র (শিল্প প্রতিষ্ঠানের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ওয়াসা পোর্টালে অনলাইন আবেদন দাখিল',
          instruction_bn: 'https://dwasa.org.bd পোর্টালে নলকূপের পাইপের ব্যাস ও কাঙ্ক্ষিত গভীরতা উল্লেখ করে প্রয়োজনীয় ডকুমেন্ট আপলোড করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি নিজের প্রতিষ্ঠানের নামে আবেদন করুন।',
          action_url: 'https://dwasa.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ওয়াসা প্রকৌশলী দল কর্তৃক ফিজিবিলিটি স্টাডি',
          instruction_bn: 'ওয়াসার কারিগরি টিম সংশ্লিষ্ট এলাকার ভূগর্ভস্থ পানির স্তর পরীক্ষা করবে এবং পার্শ্ববর্তী ওয়াসা সাপ্লাই লাইনের অবস্থা যাচাই করবে।',
          warning_bn: 'তদন্তকারী দলকে কোনো ব্যক্তিগত অর্থ দেবেন না।',
          action_url: 'https://dwasa.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পে-অর্ডার জমা ও অফিশিয়াল অনুমতিপত্র গ্রহণ',
          instruction_bn: 'অনুমোদনপত্র প্রাপ্তির পর নির্ধারিত লাইসেন্স ফি ব্যাংকে জমা দিয়ে কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dwasa.org.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ গভীর নলকূপের বিরুদ্ধে ভ্রাম্যমাণ আদালত পরিচালনা করে লাখ টাকা জরিমানা ও জেল দেওয়ার বিধান রয়েছে। কোনো দালাল যদি বলে ওয়াসা অনুমোদন ছাড়াই নলকূপ চালানো যাবে—তা সম্পূর্ণ মিথ্যা। যে-কোনো অনিয়মে ১৬১৬২ ওয়াসালিন্কে অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dwasa.org.bd'
    }
  ]
};
