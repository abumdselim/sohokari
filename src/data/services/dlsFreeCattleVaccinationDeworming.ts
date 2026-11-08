import { ServiceRecord } from '../../types/service';

export const dlsFreeCattleVaccinationDewormingService: ServiceRecord = {
  id: 'bd-dls-free-cattle-vaccination-deworming',
  slug: 'bd-dls-free-cattle-vaccination-deworming',
  category_id: 'citizen_general',
  name_bn: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা',
  name_en: 'Upazila Livestock Office Free Cattle Vaccination & Deworming Guide',
  responsible_ministry_bn: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_ministry_en: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_bn: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_en: 'প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dls.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dls.gov.bd',
  legal_basis: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'upazila livestock office free cattle vaccination & deworming guide', language: 'en', weight: 1.0 },
    { alias: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা', language: 'bn', weight: 0.95 },
    { alias: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা ফি', language: 'bn', weight: 0.95 },
    { alias: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dls free cattle vaccination deworming', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dls-free-cattle-vaccination-deworming-standard',
      variant_name_bn: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Upazila Livestock Office Free Cattle Vaccination & Deworming Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সরকারি টিকা ও ভ্যাকসিনের মূল্য',
          fee_type_en: 'সরকারি টিকা ও ভ্যাকসিনের মূল্য',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বা অ্যাম্পুল প্রতি প্রতীকী ৫০ পয়সা থেকে ১ টাকা।'
        },
        {
          fee_type_bn: 'ভেটেরিনারি ডাক্তারের চিকিৎসা পরামর্শ ফি',
          fee_type_en: 'ভেটেরিনারি ডাক্তারের চিকিৎসা পরামর্শ ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি পশু হাসপাতালে পরামর্শ সম্পূর্ণ ফ্রি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'খামারি বা পশুপালকের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'খামারি বা পশুপালকের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'ভ্যাকসিন পরিবহনের জন্য উপযুক্ত ফ্লাস্ক বা আইস-বক্স (বরফসহ)',
          document_name_en: 'ভ্যাকসিন পরিবহনের জন্য উপযুক্ত ফ্লাস্ক বা আইস-বক্স (বরফসহ)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বরফের ফ্লাস্ক নিয়ে উপজেলা প্রাণিসম্পদ দপ্তরে যাওয়া',
          instruction_bn: 'টিকা যাতে নষ্ট না হয় সেজন্য বরফ ভর্তি ফ্লাস্ক নিয়ে সরাসরি সরকারি পশু হাসপাতালের টিকা কাউন্টারে যোগাযোগ করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সরকারি কর্মচারীর কাছ থেকে টিকা নিন।',
          action_url: 'https://dls.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পশুর সংখ্যা উল্লেখ করে ভ্যাকসিন গ্রহণ',
          instruction_bn: 'গরু, ছাগল বা হাঁস-মুরগির সংখ্যা লিখে সরকারি রেজিস্টারে এন্ট্রি করে প্রয়োজনীয় সংখ্যক ডোজ বুঝে নিন।',
          warning_bn: 'সরকারি ভ্যাকসিনের গায়ে \'বিক্রয়ের জন্য নহে\' সিল থাকবে।',
          action_url: 'https://dls.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'উপজেলা ভেটেরিনারি সার্জনের নির্দেশনা অনুযায়ী প্রয়োগ',
          instruction_bn: 'নির্দিষ্ট তাপমাত্রায় রেখে নিয়মানুযায়ী গবাদিপশুকে টিকা পুশ করুন অথবা হাসপাতালের ফিল্ড সহকারীর সহায়তা নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dls.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সরকারি ভ্যাকসিন কোনো ফার্মেসি বা ব্যক্তির কাছে বিক্রি করা আইনত নিষিদ্ধ। কোনো কর্মচারী সরকারি টিকা বাইরে বিক্রি করলে উপজেলা প্রাণিসম্পদ কর্মকর্তা বা দুদক ১০৬ এ অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dls.gov.bd'
    }
  ]
};
