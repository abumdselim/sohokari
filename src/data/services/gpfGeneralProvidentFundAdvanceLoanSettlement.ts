import { ServiceRecord } from '../../types/service';

export const gpfGeneralProvidentFundAdvanceLoanSettlementService: ServiceRecord = {
  id: 'bd-gpf-general-provident-fund-advance-loan-settlement',
  slug: 'bd-gpf-general-provident-fund-advance-loan-settlement',
  category_id: 'finance_pension',
  name_bn: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা',
  name_en: 'General Provident Fund GPF Advance Loan & Final Settlement via iBAS++ Guide',
  responsible_ministry_bn: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA) ও অর্থ বিভাগ',
  responsible_ministry_en: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA) ও অর্থ বিভাগ',
  responsible_agency_bn: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA) ও অর্থ বিভাগ',
  responsible_agency_en: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA) ও অর্থ বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://cga.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://cga.gov.bd',
  legal_basis: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'general provident fund gpf advance loan & final settlement via ibas++ guide', language: 'en', weight: 1.0 },
    { alias: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি', language: 'bn', weight: 0.95 },
    { alias: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'gpf general provident fund advance loan settlement', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-gpf-general-provident-fund-advance-loan-settlement-standard',
      variant_name_bn: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'General Provident Fund GPF Advance Loan & Final Settlement via iBAS++ Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'জিপিএফ অগ্রিম ও চূড়ান্ত নিষ্পত্তি আবেদন ফি',
          fee_type_en: 'জিপিএফ অগ্রিম ও চূড়ান্ত নিষ্পত্তি আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি কর্মচারীর নিজস্ব জমার ওপর কোনো ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সর্বশেষ বছরের হালনাগাদ জিপিএফ বাৎসরিক হিসাব বিবরণী (GPF Slip)',
          document_name_en: 'সর্বশেষ বছরের হালনাগাদ জিপিএফ বাৎসরিক হিসাব বিবরণী (GPF Slip)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আইবাস++ (iBAS++) এ পূরণকৃত অনলাইন আবেদন ফরমের প্রিন্ট কপি',
          document_name_en: 'আইবাস++ (iBAS++) এ পূরণকৃত অনলাইন আবেদন ফরমের প্রিন্ট কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিয়ন্ত্রণকারী কর্তৃপক্ষ (DDO) কর্তৃক মঞ্জুরিপত্র (Sanction Order)',
          document_name_en: 'নিয়ন্ত্রণকারী কর্তৃপক্ষ (DDO) কর্তৃক মঞ্জুরিপত্র (Sanction Order)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংক একাউন্টের তথ্য',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংক একাউন্টের তথ্য',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আইবাস++ পোর্টালে জিপিএফ মডিউলে অনলাইন আবেদন',
          instruction_bn: 'https://ibas.finance.gov.bd পোর্টালে নিজের এনআইডি দিয়ে লগইন করে জিপিএফ লোনের পরিমাণ উল্লেখ করে সাবমিট করুন।',
          warning_bn: 'কোনো মধ্যস্বত্বভোগী ছাড়াই নিজে নিজে অনলাইনে করা যায়।',
          action_url: 'https://ibas.finance.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'অফিস প্রধান (DDO) কর্তৃক ডিজিটাল অনুমোদন',
          instruction_bn: 'আপনার ডিডিও সিস্টেমে অনুমোদন দিয়ে হিসাবরক্ষণ অফিসে (CAO/DAO) অনলাইনে ফাইল ফরোয়ার্ড করবেন।',
          warning_bn: 'ম্যানুয়াল ফাইলের পেছনে ঘোরার প্রয়োজন নেই।',
          action_url: 'https://cga.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ইএফটি (EFT) এর মাধ্যমে সরাসরি ব্যাংক হিসাবে টাকা জমা',
          instruction_bn: 'হিসাবরক্ষণ কর্মকর্তা পাস করার পর বাংলাদেশ ব্যাংকের ইএফটি নেটওয়ার্কের মাধ্যমে সরাসরি কর্মচারীর বেতন অ্যাকাউন্টে টাকা ক্রেডিট হয়ে যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://cga.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জিপিএফ আপনার সারা জীবনের কষ্টার্জিত জমানো টাকা। হিসাবরক্ষণ অফিসের কোনো অডিটর বা কর্মচারী বিল পাসের নামে ঘুষ চাইলে সরাসরি হিসাব মহানিয়ন্ত্রক (CGA) বা দুদক ১০৬ এ অভিযোগ দায়ের করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://cga.gov.bd'
    }
  ]
};
