import { ServiceRecord } from '../../types/service';

export const bpebEmployeeWelfareGrantGroupInsuranceService: ServiceRecord = {
  id: 'bd-bpeb-employee-welfare-grant-group-insurance',
  slug: 'bd-bpeb-employee-welfare-grant-group-insurance',
  category_id: 'social_welfare',
  name_bn: 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা',
  name_en: 'Govt Employee Welfare Board Group Insurance Medical Grant & Burial Aid Guide',
  responsible_ministry_bn: 'বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়',
  visiting_office_level: 'division',
  official_portal_url: 'https://bkkb.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://bkkb.gov.bd',
  legal_basis: 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'govt employee welfare board group insurance medical grant & burial aid guide', language: 'en', weight: 1.0 },
    { alias: 'কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য', language: 'bn', weight: 0.95 },
    { alias: 'কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য ফি', language: 'bn', weight: 0.95 },
    { alias: 'কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bpeb employee welfare grant group insurance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bpeb-employee-welfare-grant-group-insurance-standard',
      variant_name_bn: 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Govt Employee Welfare Board Group Insurance Medical Grant & Burial Aid Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'যৌথবীমা ও চিকিৎসা অনুদান আবেদন ফি',
          fee_type_en: 'যৌথবীমা ও চিকিৎসা অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'কর্মচারী কল্যাণ বোর্ডের সকল সেবা সম্পূর্ণ বিনামূল্যে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর সার্ভিস বুক ও শেষ বেতন প্রত্যয়নপত্র (LPC)',
          document_name_en: 'আবেদনকারীর সার্ভিস বুক ও শেষ বেতন প্রত্যয়নপত্র (LPC)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসা অনুদানের ক্ষেত্রে)',
          document_name_en: 'রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসা অনুদানের ক্ষেত্রে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত্যু সনদ ও ওয়ারিশান সনদ (যৌথবীমা দাবির ক্ষেত্রে)',
          document_name_en: 'মৃত্যু সনদ ও ওয়ারিশান সনদ (যৌথবীমা দাবির ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংকের চেকের পাতা',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংকের চেকের পাতা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'কল্যাণ বোর্ডের ই-সেবা পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'https://bkkb.gov.bd পোর্টালে জাতীয় পরিচয়পত্র ও পিআইডি (PID) দিয়ে লগইন করে আবেদন ফরম পূরণ করুন।',
          warning_bn: 'কোনো মধ্যস্বত্বভোগী ছাড়াই নিজে নিজে অনলাইনে আবেদন করা যায়।',
          action_url: 'https://bkkb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সংশ্লিষ্ট অফিস প্রধান (DDO) কর্তৃক অনলাইনে অনুমোদন',
          instruction_bn: 'আপনার নিয়ন্ত্রণকারী কর্তৃপক্ষ অনলাইনে আবেদনটি যাচাই করে কর্মচারী কল্যাণ বোর্ডে ফরোয়ার্ড করবেন।',
          warning_bn: 'ম্যানুয়াল কোনো কাগজের ফাইল ঘোরানোর প্রয়োজন নেই।',
          action_url: 'https://bkkb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি ব্যাংক হিসাবে ইএফটি (EFT) মাধ্যমে টাকা জমা',
          instruction_bn: 'বোর্ড কর্তৃক মঞ্জুরিকৃত অনুদান সরাসরি আবেদনকারীর ব্যাংক অ্যাকাউন্টে জমা হবে এবং মোবাইলে এসএমএস পাবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bkkb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কর্মচারী কল্যাণ বোর্ডের অর্থ আপনার চাকরি জীবনের অর্জিত অধিকার। বোর্ডের কোনো কর্মচারী বা দালাল অনুদান দ্রুত ছাড়ের নামে টাকা দাবি করলে সরাসরি জনপ্রশাসন মন্ত্রণালয়ের হটলাইন ১০৬ এ অভিযোগ দায়ের করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bkkb.gov.bd'
    }
  ]
};
