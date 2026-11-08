import { ServiceRecord } from '../../types/service';

export const wewbDeceasedMigrantWorkerCompensationService: ServiceRecord = {
  id: 'bd-wewb-deceased-migrant-worker-compensation',
  slug: 'bd-wewb-deceased-migrant-worker-compensation',
  category_id: 'expatriate_welfare',
  name_bn: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা',
  name_en: 'Deceased Migrant Worker Body Repatriation 35k Burial Grant & 3 Lakh Financial Aid Guide',
  responsible_ministry_bn: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_ministry_en: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_bn: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_en: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  visiting_office_level: 'division',
  official_portal_url: 'https://wewb.gov.bd',
  helpline_number: '16135',
  grievance_channel: 'https://wewb.gov.bd',
  legal_basis: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'deceased migrant worker body repatriation 35k burial grant & 3 lakh financial aid guide', language: 'en', weight: 1.0 },
    { alias: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'wewb deceased migrant worker compensation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-wewb-deceased-migrant-worker-compensation-standard',
      variant_name_bn: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Deceased Migrant Worker Body Repatriation 35k Burial Grant & 3 Lakh Financial Aid Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'দাফন অনুদান ও আর্থিক সহায়তা আবেদন ফি',
          fee_type_en: 'দাফন অনুদান ও আর্থিক সহায়তা আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকার ও ওয়েজ আর্নার্স কল্যাণ বোর্ডের সম্পূর্ণ ফ্রি মানবিক সেবা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রবাসী কর্মীর পাসপোর্ট কপি ও ভিসা/আকামা কপি',
          document_name_en: 'প্রবাসী কর্মীর পাসপোর্ট কপি ও ভিসা/আকামা কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাংলাদেশ দূতাবাস বা সংশ্লিষ্ট দেশের মৃত্যু সনদ (Death Certificate)',
          document_name_en: 'বাংলাদেশ দূতাবাস বা সংশ্লিষ্ট দেশের মৃত্যু সনদ (Death Certificate)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিএমইটি স্মার্ট কার্ড বা ডাটাবেজ রেজিস্ট্রেশন কপি',
          document_name_en: 'বিএমইটি স্মার্ট কার্ড বা ডাটাবেজ রেজিস্ট্রেশন কপি',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'মৃত কর্মীর বৈধ ওয়ারিশান সনদপত্র (ইউপি চেয়ারম্যান বা মেয়র কর্তৃক প্রদত্ত)',
          document_name_en: 'মৃত কর্মীর বৈধ ওয়ারিশান সনদপত্র (ইউপি চেয়ারম্যান বা মেয়র কর্তৃক প্রদত্ত)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ওয়ারিশগণের ব্যাংক হিসাবের চেকের পাতার কপি ও এনআইডি',
          document_name_en: 'ওয়ারিশগণের ব্যাংক হিসাবের চেকের পাতার কপি ও এনআইডি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিমানবন্দর প্রবাসী কল্যাণ ডেস্ক থেকে ৩৫,০০০ টাকা নগদ গ্রহণ',
          instruction_bn: 'মরদেহ হযরত শাহজালাল বা অন্য আন্তর্জাতিক বিমানবন্দরে পৌঁছামাত্র প্রবাসী কল্যাণ ডেস্ক থেকে ওয়ারিশের হাতে নগদ ৩৫,০০০ টাকা প্রদান করা হয়।',
          warning_bn: 'কোনো ঘুষ বা ফি নেই, তাৎক্ষণিক রশিদ নিন।',
          action_url: 'https://wewb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড বরাবর ৩ লাখ টাকা আর্থিক অনুদানের আবেদন',
          instruction_bn: 'জেলা কর্মসংস্থান ও জনশক্তি অফিস (DEMO) অথবা সরাসরি বোর্ডের ওয়েবসাইটে ওয়ারিশান সনদসহ আবেদন জমা দিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি ডেমো অফিসে যান।',
          action_url: 'https://wewb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: '৩,০০,০০০ টাকার সরকারি চেক হস্তান্তর',
          instruction_bn: 'যাচাই-বাছাই শেষে জেলা প্রশাসক বা জনশক্তি অফিসের মাধ্যমে সকল ওয়ারিশের নামে পৃথক অনুপাতে মোট ৩ লাখ টাকার সরকারি চেক প্রদান করা হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://wewb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রেমিট্যান্স যোদ্ধার রক্তে ভেজা টাকার উপর কোনো দালালের হক নেই। বিমানবন্দর বা জেলায় কোনো মধ্যস্বত্বভোগী চেক ছাড়িয়ে দেওয়ার নাম করে পারসেন্টেজ চাইলে সোজা প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ অথবা দুদক ১০৬ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://wewb.gov.bd'
    }
  ]
};
