import { ServiceRecord } from '../../types/service';

export const passportPoliceSbVerificationGuideService: ServiceRecord = {
  id: 'bd-passport-police-sb-verification-guide',
  slug: 'bd-passport-police-sb-verification-guide',
  category_id: 'passport_immigration',
  name_bn: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা',
  name_en: 'Bangladesh e-Passport Special Branch (SB) Police Verification Tracking & Anti-Extortion Guide',
  responsible_ministry_bn: 'স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ',
  responsible_ministry_en: 'স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ',
  responsible_agency_bn: 'স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ',
  responsible_agency_en: 'স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://police.gov.bd',
  helpline_number: '999',
  grievance_channel: 'https://police.gov.bd',
  legal_basis: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh e-passport special branch (sb) police verification tracking & anti-extortion guide', language: 'en', weight: 1.0 },
    { alias: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ', language: 'bn', weight: 0.95 },
    { alias: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ ফি', language: 'bn', weight: 0.95 },
    { alias: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'passport police sb verification guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-passport-police-sb-verification-guide-standard',
      variant_name_bn: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh e-Passport Special Branch (SB) Police Verification Tracking & Anti-Extortion Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'পুলিশ ভেরিফিকেশন সরকারি ফি',
          fee_type_en: 'পুলিশ ভেরিফিকেশন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'পুলিশ ভেরিফিকেশনের জন্য কোনো প্রকার অর্থ নেওয়া আইনত দণ্ডনীয় ঘুষ।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর আসল জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম সনদ',
          document_name_en: 'আবেদনকারীর আসল জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম সনদ',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্থায়ী ঠিকানার প্রমাণপত্র (চেয়ারম্যান/কাউন্সিলর প্রত্যয়ন বা হোল্ডিং ট্যাক্স দাখিলা)',
          document_name_en: 'স্থায়ী ঠিকানার প্রমাণপত্র (চেয়ারম্যান/কাউন্সিলর প্রত্যয়ন বা হোল্ডিং ট্যাক্স দাখিলা)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্টের অনলাইন রেজিস্ট্রেশন সামারি শিট ও ডেলিভারি স্লিপ',
          document_name_en: 'পাসপোর্টের অনলাইন রেজিস্ট্রেশন সামারি শিট ও ডেলিভারি স্লিপ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'পাসপোর্ট স্ট্যাটাস ট্র্যাকিং',
          instruction_bn: 'https://www.epassport.gov.bd পোর্টালে অ্যাপ্লিকেশন আইডি ও জন্মতারিখ দিয়ে চেক করুন। স্ট্যাটাস যখন \'Police Verification\' দেখাবে, তখন ফাইলটি আপনার সংশ্লিষ্ট এলাকার এসবি বা ডিএসবি শাখায় থাকে।',
          warning_bn: 'নবায়নকৃত সাধারণ পাসপোর্টে কোনো পুলিশ ভেরিফিকেশন লাগে না, শুধুমাত্র নতুন পাসপোর্টে প্রযোজ্য।',
          action_url: 'https://www.epassport.gov.bd/landing'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'তদন্ত কর্মকর্তার সাথে যোগাযোগ ও আসল কাগজপত্র প্রদর্শন',
          instruction_bn: 'তদন্তকারী কর্মকর্তা ফোন দিলে তাকে আপনার স্থায়ী ঠিকানার ইউটিলিটি বিল, চেয়ারম্যান সার্টিফিকেট ও আসল এনআইডি দেখান।',
          warning_bn: 'কর্মকর্তা যদি বলেন \'অফিস খরচ লাগবে\', তাকে বিনয়ের সাথে বলুন যে সরকার নির্ধারিত পাসপোর্ট ফি চালানে জমা দেওয়া আছে, কোনো বাড়তি খরচ দেওয়ার সরকারি নিয়ম নেই।',
          action_url: 'https://police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন রিপোর্ট সাবমিশন ও ছাড়পত্র',
          instruction_bn: 'তদন্তকারী কর্মকর্তা তার মোবাইল অ্যাপ দিয়ে সরাসরি কেন্দ্রীয় এসবি সার্ভারে ডিজিটাল পজিটিভ রিপোর্ট আপলোড করবেন। আপনার পাসপোর্টের স্ট্যাটাস স্বয়ংক্রিয়ভাবে \'Pending for Approval\' হয়ে যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://police.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পুলিশ ভেরিফিকেশনের জন্য কাউকে কোনো নগদ টাকা দেবেন না। যদি কোনো কর্মকর্তা অনৈতিকভাবে টাকা দাবি করে বা টাকা না দিলে নেতিবাচক রিপোর্ট দেওয়ার হুমকি দেয়, তবে অবিলম্বে পুলিশ সদরদপ্তরের আইজিপি কমপ্লেইন সেল অথবা স্থানীয় পুলিশ সুপার (SP) বরাবর সরাসরি অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://police.gov.bd'
    }
  ]
};
