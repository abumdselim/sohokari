import { ServiceRecord } from '../../types/service';

export const expatriateEmbassyNidSmartcardService: ServiceRecord = {
  id: 'bd-expatriate-embassy-nid-smartcard',
  slug: 'bd-expatriate-embassy-nid-smartcard',
  category_id: 'nid_identity',
  name_bn: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা',
  name_en: 'Expatriate Bangladeshi Embassy NID Smart Card Registration & Renewal Guide',
  responsible_ministry_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়',
  responsible_agency_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়',
  responsible_agency_en: 'নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://nidw.gov.bd',
  legal_basis: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'expatriate bangladeshi embassy nid smart card registration & renewal guide', language: 'en', weight: 1.0 },
    { alias: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'expatriate embassy nid smartcard', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-expatriate-embassy-nid-smartcard-standard',
      variant_name_bn: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Expatriate Bangladeshi Embassy NID Smart Card Registration & Renewal Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'দূতাবাসে নতুন এনআইডি আবেদন ফি',
          fee_type_en: 'দূতাবাসে নতুন এনআইডি আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো ফি নেওয়া হয় না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বৈধ বা মেয়াদোত্তীর্ণ বাংলাদেশি পাসপোর্ট কপি',
          document_name_en: 'বৈধ বা মেয়াদোত্তীর্ণ বাংলাদেশি পাসপোর্ট কপি',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'অনলাইন ১৭ ডিজিটের জন্ম নিবন্ধন সনদ',
          document_name_en: 'অনলাইন ১৭ ডিজিটের জন্ম নিবন্ধন সনদ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদেশের বৈধ আবাসিক ভিসা / রেসিডেন্স পারমিট / ইকামা / সিভিল আইডি',
          document_name_en: 'বিদেশের বৈধ আবাসিক ভিসা / রেসিডেন্স পারমিট / ইকামা / সিভিল আইডি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা বা মাতার এনআইডি বা আত্মীয়ের ওয়ারিশান সনদ',
          document_name_en: 'পিতা বা মাতার এনআইডি বা আত্মীয়ের ওয়ারিশান সনদ',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'প্রবাসী পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'https://services.nidw.gov.bd পোর্টালে গিয়ে \'প্রবাসী আবেদন\' অপশনে ক্লিক করে দেশের ঠিকানা ও পাসপোর্টের তথ্য পূরণ করুন।',
          warning_bn: 'বিদেশে যে মিশনে বায়োমেট্রিক দিতে চান সেটি সিলেক্ট করুন।',
          action_url: 'https://services.nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বাংলাদেশ দূতাবাসে অ্যাপয়েন্টমেন্ট ও বায়োমেট্রিক',
          instruction_bn: 'নির্ধারিত দিনে দূতাবাসে উপস্থিত হয়ে আঙুলের ছাপ, আইরিশ ও ছবি দিন। দূতাবাস টিম ডাটা নির্বাচন কমিশনে পাঠাবে।',
          warning_bn: 'দালাল মুক্তভাবে সরাসরি দূতাবাসে যান।',
          action_url: 'https://nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'স্মার্ট কার্ড ডেলিভারি ও অনলাইন এনআইডি ডাউনলোড',
          instruction_bn: 'অনুমোদিত হলে অনলাইন থেকে রঙিন এনআইডি ডাউনলোড করা যাবে এবং নির্দিষ্ট সময়ে দূতাবাস থেকে স্মার্ট কার্ড সংগ্রহ করতে পারবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nidw.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিদেশের কোনো এজেন্সি বা ট্রাভেল এজেন্টের কাছে পাসপোর্ট বা এনআইডি বানানোর চুক্তি করবেন না। দূতাবাস ছাড়া অন্য কোথাও এনআইডি কার্যক্রম সম্পূর্ণ অবৈধ।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nidw.gov.bd'
    }
  ]
};
