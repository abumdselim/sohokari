import { ServiceRecord } from '../../types/service';

export const dlsDairyPoultryFarmRegistrationService: ServiceRecord = {
  id: 'bd-dls-dairy-poultry-farm-registration',
  slug: 'bd-dls-dairy-poultry-farm-registration',
  category_id: 'citizen_general',
  name_bn: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা',
  name_en: 'Department of Livestock Services (DLS) Dairy & Poultry Farm Registration Guide',
  responsible_ministry_bn: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_ministry_en: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_bn: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_en: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dls.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dls.gov.bd',
  legal_basis: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'department of livestock services (dls) dairy & poultry farm registration guide', language: 'en', weight: 1.0 },
    { alias: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন', language: 'bn', weight: 0.95 },
    { alias: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন ফি', language: 'bn', weight: 0.95 },
    { alias: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dls dairy poultry farm registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dls-dairy-poultry-farm-registration-standard',
      variant_name_bn: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Department of Livestock Services (DLS) Dairy & Poultry Farm Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'খামার নিবন্ধন সরকারি ফি',
          fee_type_en: 'খামার নিবন্ধন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'খামার নিবন্ধনের কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'সরকারি ভ্যাকসিন (তড়কা, বাদলা, ক্ষুরারোগ, রানীক্ষেত)',
          fee_type_en: 'সরকারি ভ্যাকসিন (তড়কা, বাদলা, ক্ষুরারোগ, রানীক্ষেত)',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি প্রমিত মূল্য মাত্র ৫ থেকে ১০ টাকা মাত্র।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উদ্যোক্তার জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'উদ্যোক্তার জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'খামারের জমির মালিকানা বা ভাড়ার চুক্তিপত্র',
          document_name_en: 'খামারের জমির মালিকানা বা ভাড়ার চুক্তিপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউনিয়ন পরিষদ / পৌরসভার ট্রেড লাইসেন্স',
          document_name_en: 'ইউনিয়ন পরিষদ / পৌরসভার ট্রেড লাইসেন্স',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পশু বা পাখির সংখ্যা ও বিবরণ সম্বলিত তালিকা',
          document_name_en: 'পশু বা পাখির সংখ্যা ও বিবরণ সম্বলিত তালিকা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা প্রাণিসম্পদ অফিসে নির্ধারিত ফর্মে আবেদন',
          instruction_bn: 'উপজেলা প্রাণিসম্পদ কর্মকর্তার (ULO) কার্যালয়ে খামার নিবন্ধনের ফরম পূরণ করে জমা দিন।',
          warning_bn: 'খামারে বর্জ্য ব্যবস্থাপনা ও বায়োসিকিউরিটি নিশ্চিত রাখুন।',
          action_url: 'https://dls.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ভেটেরিনারি সার্জন কর্তৃক খামার পরিদর্শন',
          instruction_bn: 'সরকারি ডাক্তার খামার পরিদর্শন করে প্রাণিস্বাস্থ্য ও পরিবেশগত রিপোর্ট প্রদান করবেন।',
          warning_bn: 'পরিদর্শনের জন্য কোনো ফি দেওয়ার প্রয়োজন নেই।',
          action_url: 'https://dls.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'খামার রেজিস্ট্রেশন নম্বর ও প্রণোদনা গ্রহণ',
          instruction_bn: 'নিবন্ধন সনদ পেলে আপনি খামারি হিসেবে সরকারের যেকোনো জরুরি দুর্যোগকালীন নগদ সহায়তা ও ফ্রি ভ্যাকসিনেশনের অগ্রাধিকার পাবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dls.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: প্রাণিসম্পদ অধিদপ্তরের সেবা সম্পূর্ণ কৃষিবান্ধব। কোনো তৃতীয় পক্ষের মাধ্যমে টাকা লেনদেন করবেন না। সরাসরি উপজেলা প্রাণিসম্পদ হাসপাতালে যোগাযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ডেইরি ও পোল্ট্রি খামার নিবন্ধন এবং সরকারি অনুদান/ভ্যাকসিন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dls.gov.bd'
    }
  ]
};
