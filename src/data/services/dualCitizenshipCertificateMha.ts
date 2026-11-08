import { ServiceRecord } from '../../types/service';

export const dualCitizenshipCertificateMhaService: ServiceRecord = {
  id: 'bd-dual-citizenship-certificate-mha',
  slug: 'bd-dual-citizenship-certificate-mha',
  category_id: 'passport_immigration',
  name_bn: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা',
  name_en: 'Dual Citizenship Certificate Ministry of Home Affairs Official Guide',
  responsible_ministry_bn: 'সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_bn: 'সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_en: 'সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://ssd.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://ssd.gov.bd',
  legal_basis: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'dual citizenship certificate ministry of home affairs official guide', language: 'en', weight: 1.0 },
    { alias: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dual citizenship certificate mha', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dual-citizenship-certificate-mha-standard',
      variant_name_bn: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Dual Citizenship Certificate Ministry of Home Affairs Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: 'দ্বৈত নাগরিকত্ব সনদ সরকারি ফি',
          fee_type_en: 'দ্বৈত নাগরিকত্ব সনদ সরকারি ফি',
          amount_bdt: 7000.0,
          effective_date: '2022-01-01',
          notes_bn: 'অথবা বিদেশে বাংলাদেশি মিশন/দূতাবাসে সমপরিমাণ বৈদেশিক মুদ্রা (সাধারণত $৭৭-$১০০)।'
        }
      ],
      documents: [
        {
          document_name_bn: 'স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত দ্বৈত নাগরিকত্ব ফরম (ফরম-সি)',
          document_name_en: 'স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত দ্বৈত নাগরিকত্ব ফরম (ফরম-সি)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদেশি পাসপোর্ট ও বিদেশি নাগরিকত্ব সনদ (Naturalization Certificate)',
          document_name_en: 'বিদেশি পাসপোর্ট ও বিদেশি নাগরিকত্ব সনদ (Naturalization Certificate)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্বের বাংলাদেশি পাসপোর্ট বা এনআইডি বা জন্ম নিবন্ধন সনদ',
          document_name_en: 'পূর্বের বাংলাদেশি পাসপোর্ট বা এনআইডি বা জন্ম নিবন্ধন সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাংলাদেশে পিতা-মাতার বা নিজের স্থাবর সম্পত্তির বিবরণ ও ওয়ারিশান সনদ',
          document_name_en: 'বাংলাদেশে পিতা-মাতার বা নিজের স্থাবর সম্পত্তির বিবরণ ও ওয়ারিশান সনদ',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'সরকারি ট্রেজারি চালানের মূল কপি',
          document_name_en: 'সরকারি ট্রেজারি চালানের মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'স্বরাষ্ট্র মন্ত্রণালয়ের পোর্টালে বা দূতাবাসে আবেদন',
          instruction_bn: 'দেশে থাকলে সুরক্ষা সেবা বিভাগ (https://ssd.gov.bd) অথবা বিদেশে থাকলে নিকটস্থ বাংলাদেশ দূতাবাসে প্রয়োজনীয় কাগজপত্রসহ আবেদন জমা দিন।',
          warning_bn: 'ফরম নোটারি পাবলিক দ্বারা সত্যায়িত হতে হবে।',
          action_url: 'https://ssd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'স্পেশাল ব্রাঞ্চ (SB) পুলিশ ও নিরাপত্তা যাচাই',
          instruction_bn: 'স্বরাষ্ট্র মন্ত্রণালয় আবেদনটি সংশ্লিষ্ট এসবি ও জেলা প্রশাসকের কাছে নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।',
          warning_bn: 'ভেরিফিকেশনে কোনো ঘুষ লেনদেন নিষিদ্ধ।',
          action_url: 'https://ssd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'দ্বৈত নাগরিকত্ব সনদপত্র সংগ্রহ',
          instruction_bn: 'অনুমোদন সম্পন্ন হলে সুরক্ষা সেবা বিভাগ থেকে মহামান্য রাষ্ট্রপতির পক্ষে স্বাক্ষরিত দ্বৈত নাগরিকত্ব সনদ প্রদান করা হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://ssd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিদেশে বা দেশে কোনো এজেন্সি যদি বলে লাখ টাকার বিনিময়ে দ্বৈত নাগরিকত্ব সনদ দ্রুত করিয়ে দেবে—তাদের বিশ্বাস করবেন না। সরকার নির্ধারিত ৭,০০০ টাকার চালানের বাইরে কাউকে কোনো টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://ssd.gov.bd'
    }
  ]
};
