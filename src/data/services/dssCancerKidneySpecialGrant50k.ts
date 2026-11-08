import { ServiceRecord } from '../../types/service';

export const dssCancerKidneySpecialGrant50kService: ServiceRecord = {
  id: 'bd-dss-cancer-kidney-special-grant-50k',
  slug: 'bd-dss-cancer-kidney-special-grant-50k',
  category_id: 'social_welfare',
  name_bn: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা',
  name_en: 'Government One-time 50000 Taka Grant for Cancer & Kidney Patients Official Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'government one-time 50000 taka grant for cancer & kidney patients official guide', language: 'en', weight: 1.0 },
    { alias: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dss cancer kidney special grant 50k', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dss-cancer-kidney-special-grant-50k-standard',
      variant_name_bn: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Government One-time 50000 Taka Grant for Cancer & Kidney Patients Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'চিকিৎসা অনুদান আবেদন ফি',
          fee_type_en: 'চিকিৎসা অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদনের জন্য কোনো সরকারি ফি বা খরচ নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা সমাজসেবা কার্যালয়ের নির্ধারিত আবেদন ফরম',
          document_name_en: 'উপজেলা সমাজসেবা কার্যালয়ের নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'রেজিস্টার্ড সরকারি বিশেষজ্ঞ চিকিৎসক বা বিভাগীয় প্রধানের প্রত্যায়িত মেডিকেল রিপোর্ট',
          document_name_en: 'রেজিস্টার্ড সরকারি বিশেষজ্ঞ চিকিৎসক বা বিভাগীয় প্রধানের প্রত্যায়িত মেডিকেল রিপোর্ট',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সিভিল সার্জন বা সরকারি হাসপাতালের পরিচালকের সুপারিশপত্র',
          document_name_en: 'সিভিল সার্জন বা সরকারি হাসপাতালের পরিচালকের সুপারিশপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ',
          document_name_en: 'রোগীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগীর নিজের নামে তফসিলি ব্যাংকের একাউন্টের চেকের পাতার ফটোকপি',
          document_name_en: 'রোগীর নিজের নামে তফসিলি ব্যাংকের একাউন্টের চেকের পাতার ফটোকপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'চিকিৎসক ও সিভিল সার্জনের প্রত্যয়ন সংগ্রহ',
          instruction_bn: 'সরকারি মেডিকেল কলেজ বা হাসপাতালের বিশেষজ্ঞ ডাক্তারের প্রেসক্রিপশন নিয়ে জেলার সিভিল সার্জন থেকে সিল ও প্রত্যয়ন নিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সিভিল সার্জন অফিসে ফাইল জমা দিন।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা বা জেলা সমাজসেবা কার্যালয়ে আবেদন জমা',
          instruction_bn: 'রোগীর স্থায়ী ঠিকানার উপজেলা সমাজসেবা অফিসারের নিকট আবেদন ফরম ও চেকের পাতার কপিসহ জমা দিন।',
          warning_bn: 'দালালের কোনো ভূমিকা নেই, কমিটি প্রতি মাসে আবেদন যাচাই করে।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি রোগীর ব্যাংক হিসাবে ৫০,০০০ টাকার চেক বা ইএফটি',
          instruction_bn: 'মঞ্জুরিকৃত অনুদানের ৫০,০০০ টাকা সরাসরি বাংলাদেশ ব্যাংকের মাধ্যমে রোগীর ব্যাংক অ্যাকাউন্টে ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT) হয়ে জমা হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রোগাক্রান্ত অসহায় মানুষের টাকা মেরে খাওয়া মহাপাপ। কোনো হাসপাতালের কর্মচারী বা সমাজসেবা অফিসের কোনো দালাল অনুদান পাইয়ে দেওয়ার বিনিময়ে ৫,০০০-১০,০০০ টাকা কাটতে চাইলে সাথে সাথে জেলা প্রশাসক বা দুদক হেল্পলাইন ১০৬ এ অভিযোগ দায়ের করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};
