import { ServiceRecord } from '../../types/service';

export const archeologyHistoricalSiteShootingResearchService: ServiceRecord = {
  id: 'bd-archeology-historical-site-shooting-research',
  slug: 'bd-archeology-historical-site-shooting-research',
  category_id: 'citizen_general',
  name_bn: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা',
  name_en: 'Department of Archeology Historical Heritage Site Shooting & Research Permit Guide',
  responsible_ministry_bn: 'প্রত্নতত্ত্ব অধিদপ্তর, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'প্রত্নতত্ত্ব অধিদপ্তর, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'প্রত্নতত্ত্ব অধিদপ্তর, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'প্রত্নতত্ত্ব অধিদপ্তর, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://archaeology.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://archaeology.gov.bd',
  legal_basis: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'department of archeology historical heritage site shooting & research permit guide', language: 'en', weight: 1.0 },
    { alias: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট', language: 'bn', weight: 0.95 },
    { alias: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'archeology historical site shooting research', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-archeology-historical-site-shooting-research-standard',
      variant_name_bn: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Department of Archeology Historical Heritage Site Shooting & Research Permit Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'বাণিজ্যিক সিনেমা বা নাটকের শুটিং সরকারি ফি (প্রতিদিন)',
          fee_type_en: 'বাণিজ্যিক সিনেমা বা নাটকের শুটিং সরকারি ফি (প্রতিদিন)',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি সাইটের জন্য দৈনিক সরকার নির্ধারিত ফি।'
        },
        {
          fee_type_bn: 'শিক্ষার্থী বা গবেষণাধর্মী তথ্যচিত্র শুটিং ফি',
          fee_type_en: 'শিক্ষার্থী বা গবেষণাধর্মী তথ্যচিত্র শুটিং ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য বিশেষ ছাড়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রত্নতত্ত্ব অধিদপ্তর বরাবর নির্ধারিত আবেদনপত্র',
          document_name_en: 'প্রত্নতত্ত্ব অধিদপ্তর বরাবর নির্ধারিত আবেদনপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'শুটিংয়ের স্ক্রিপ্ট বা সিনোপসিস ও শুটিং দলের সদস্যদের তালিকা',
          document_name_en: 'শুটিংয়ের স্ক্রিপ্ট বা সিনোপসিস ও শুটিং দলের সদস্যদের তালিকা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রযোজক বা পরিচালকের জাতীয় পরিচয়পত্র ও প্রাতিষ্ঠানিক পরিচয়পত্র',
          document_name_en: 'প্রযোজক বা পরিচালকের জাতীয় পরিচয়পত্র ও প্রাতিষ্ঠানিক পরিচয়পত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ড্রোন ব্যবহারের ক্ষেত্রে প্রতিরক্ষা মন্ত্রণালয় ও বেবিচকের পূর্বানুমতি',
          document_name_en: 'ড্রোন ব্যবহারের ক্ষেত্রে প্রতিরক্ষা মন্ত্রণালয় ও বেবিচকের পূর্বানুমতি',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মহাপরিচালক প্রত্নতত্ত্ব অধিদপ্তর বরাবর আবেদন দাখিল',
          instruction_bn: 'আগারগাঁও প্রত্নতত্ত্ব ভবনে সাইটের নাম, তারিখ ও সময় উল্লেখ করে দরখাস্ত জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি অধিদপ্তরের প্রধান কার্যালয়ে যোগাযোগ করুন।',
          action_url: 'https://archaeology.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ট্রেজারি চালানে সরকারি ফি জমা',
          instruction_bn: 'অনুমতিপত্র প্রাপ্তির পর বাংলাদেশ ব্যাংকে চালানের ফি জমা দিয়ে রসিদ জমা দিন।',
          warning_bn: 'ঐতিহাসিক স্থাপনার কোনো ক্ষতি না করার অঙ্গীকারনামা দিতে হবে।',
          action_url: 'https://archaeology.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সাইট অফিসারের নিকট পারমিট প্রদর্শন ও শুটিং',
          instruction_bn: 'সংশ্লিষ্ট প্রত্নতাত্ত্বিক স্থানের কাস্টোডিয়ান বা কর্মকর্তার নিকট পারমিট দেখিয়ে নির্বিঘ্নে শুটিং সম্পন্ন করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://archaeology.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জাতীয় প্রত্নসম্পদের ক্ষতিসাধন করা বা অনুমোদনহীন ড্রোন ওড়ানো নিরাপত্তা আইনে মারাত্মক অপরাধ। সাইট কর্মচারীদের কোনো ব্যক্তিগত টাকা দেবেন না, সরকারি চালানে ফি পরিশোধ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://archaeology.gov.bd'
    }
  ]
};
