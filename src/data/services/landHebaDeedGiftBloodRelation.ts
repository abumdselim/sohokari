import { ServiceRecord } from '../../types/service';

export const landHebaDeedGiftBloodRelationService: ServiceRecord = {
  id: 'bd-land-heba-deed-gift-blood-relation',
  slug: 'bd-land-heba-deed-gift-blood-relation',
  category_id: 'land_property',
  name_bn: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা',
  name_en: 'Bangladesh Heba Deed (Gift Deed within Blood Relations) Official Registration Guide',
  responsible_ministry_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://www.dolil.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.dolil.gov.bd',
  legal_basis: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh heba deed (gift deed within blood relations) official registration guide', language: 'en', weight: 1.0 },
    { alias: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন', language: 'bn', weight: 0.95 },
    { alias: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন ফি', language: 'bn', weight: 0.95 },
    { alias: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land heba deed gift blood relation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-heba-deed-gift-blood-relation-standard',
      variant_name_bn: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Heba Deed (Gift Deed within Blood Relations) Official Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'হেবা রেজিস্ট্রেশন ফি (Registration Fee - নির্দিষ্ট)',
          fee_type_en: 'হেবা রেজিস্ট্রেশন ফি (Registration Fee - নির্দিষ্ট)',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'সম্পত্তির মূল্য যত কোটি টাকাই হোক না কেন, সরকারি রেজিস্ট্রেশন ফি মাত্র ১০০ টাকা।'
        },
        {
          fee_type_bn: 'হেবা স্ট্যাম্প শুল্ক (Stamp Duty)',
          fee_type_en: 'হেবা স্ট্যাম্প শুল্ক (Stamp Duty)',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'নির্দিষ্ট স্ট্যাম্প ফি মাত্র ২০০ টাকা।'
        },
        {
          fee_type_bn: 'হলফনামা স্ট্যাম্প ও এন-ফি',
          fee_type_en: 'হলফনামা স্ট্যাম্প ও এন-ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'হলফনামা ৩০০ টাকার স্ট্যাম্প + এন-ফি (প্রতি ৩০০ শব্দে ২৪ টাকা)।'
        }
      ],
      documents: [
        {
          document_name_bn: 'রক্তের সম্পর্কের বৈধ প্রমাণপত্র (জাতীয় পরিচয়পত্র ও ডিজিটাল জন্ম সনদ)',
          document_name_en: 'রক্তের সম্পর্কের বৈধ প্রমাণপত্র (জাতীয় পরিচয়পত্র ও ডিজিটাল জন্ম সনদ)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'চেয়ারম্যান / ওয়ার্ড কাউন্সিলর কর্তৃক রক্তের সম্পর্কের পারিবারিক প্রত্যয়নপত্র',
          document_name_en: 'চেয়ারম্যান / ওয়ার্ড কাউন্সিলর কর্তৃক রক্তের সম্পর্কের পারিবারিক প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'দাতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি',
          document_name_en: 'দাতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মূল দলিলের ফটোকপি বা বায়া দলিলের কপি',
          document_name_en: 'মূল দলিলের ফটোকপি বা বায়া দলিলের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'রক্তের সম্পর্কের যোগ্যতা যাচাই',
          instruction_bn: 'হেবা শুধুমাত্র স্বামী-স্ত্রী, পিতা-মাতা ও সন্তান, ভাই-বোন, দাদা-দাদী/নানা-নানী এবং নাতি-নাতনীর মধ্যে বৈধ। রক্তের সম্পর্কের প্রমাণপত্র প্রস্তুত করুন।',
          warning_bn: 'দূর সম্পর্কের আত্মীয় বা অনাত্মীয়দের ক্ষেত্রে সাধারণ হেবা প্রযোজ্য নয়, তখন দানপত্র (Gift) হবে।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'হেবা দলিল ড্রাফট তৈরি',
          instruction_bn: '২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হেবা দলিলের বিবরণ ও তফসিল লিখুন। ৩০০ টাকার স্ট্যাম্পে হলফনামা যুক্ত করুন।',
          warning_bn: 'কোনো শতাংশভিত্তিক স্থানীয় সরকার কর বা উৎস কর এখানে প্রযোজ্য নয়।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ট্রেজারি চালানে ১০০ টাকা সরকারি ফি জমা',
          instruction_bn: 'সোনালী ব্যাংকে রেজিস্ট্রেশন ফি বাবদ মাত্র ১০০ টাকা জমা দিন।',
          warning_bn: 'দালালরা সাধারণ দলিলের হিসাব দেখিয়ে ২০-৩০ হাজার টাকা দাবি করে, যা সম্পূর্ণ মিথ্যা।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'সাব-রেজিস্ট্রি অফিসে সম্পাদন ও ৫২ ধারার রসিদ গ্রহণ',
          instruction_bn: 'দাতা ও গ্রহীতা সাব-রেজিস্ট্রারের এজলাসে উপস্থিত হয়ে ফিঙ্গারপ্রিন্ট ও স্বাক্ষর দিন। দলিল সম্পন্ন হলে ৫২ ধারার মূল প্রাপ্তি রসিদ বুঝে নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.dolil.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দলিল লেখক বা নকলনবিশরা হেবা দলিলের জন্য সম্পত্তির মূল্যের শতাংশ হারে টাকা দাবি করলে তা রেজিস্ট্রেশন আইনের সুস্পষ্ট লঙ্ঘন। রক্তের সম্পর্কের হেবা দলিলের সরকারি ফি মাত্র ১০০ টাকা রেজিস্ট্রেশন ও ২০০ টাকা স্ট্যাম্প। অতিরিক্ত কোনো অর্থ দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'রক্তের সম্পর্কের আত্মীয়দের মধ্যে হেবা দলিল (দানপত্র) রেজিস্ট্রেশন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.dolil.gov.bd'
    }
  ]
};
