import { ServiceRecord } from '../../types/service';

export const nbrVatOnlineBinRegistrationService: ServiceRecord = {
  id: 'bd-nbr-vat-online-bin-registration',
  slug: 'bd-nbr-vat-online-bin-registration',
  category_id: 'tax_revenue',
  name_bn: 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা',
  name_en: 'Bangladesh NBR Online VAT (BIN) Registration & Filing Free Guide',
  responsible_ministry_bn: 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়',
  responsible_agency_bn: 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়',
  responsible_agency_en: 'জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়',
  visiting_office_level: 'division',
  official_portal_url: 'https://vat.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://vat.gov.bd',
  legal_basis: 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh nbr online vat (bin) registration & filing free guide', language: 'en', weight: 1.0 },
    { alias: 'ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল', language: 'bn', weight: 0.95 },
    { alias: 'ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'nbr vat online bin registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-nbr-vat-online-bin-registration-standard',
      variant_name_bn: 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh NBR Online VAT (BIN) Registration & Filing Free Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 48,
      fees: [
        {
          fee_type_bn: 'ভ্যাট (BIN) নিবন্ধন সরকারি ফি',
          fee_type_en: 'ভ্যাট (BIN) নিবন্ধন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভ্যাট নিবন্ধনের কোনো ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মালিক বা ব্যবস্থাপনা পরিচালকের এনআইডি ও ছবি',
          document_name_en: 'মালিক বা ব্যবস্থাপনা পরিচালকের এনআইডি ও ছবি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিকের ই-টিআইএন (e-TIN) সনদ',
          document_name_en: 'মালিকের ই-টিআইএন (e-TIN) সনদ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ব্যবসা প্রতিষ্ঠানের ব্যাংক স্টেটমেন্ট বা সার্টিফিকেট',
          document_name_en: 'ব্যবসা প্রতিষ্ঠানের ব্যাংক স্টেটমেন্ট বা সার্টিফিকেট',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আইভাস পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'https://vat.gov.bd পোর্টালে গিয়ে \'Sign Up\' বাটনে ক্লিক করে মোবাইল ও ইমেইল ওটিপি দিয়ে একাউন্ট তৈরি করুন।',
          warning_bn: 'মোবাইল নম্বরটি সবসময় সচল থাকতে হবে।',
          action_url: 'https://vat.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ভ্যাট ফর্ম পূরণ ও ডকুমেন্টস আপলোড',
          instruction_bn: 'ব্যবসায়ের নাম, ক্যাটাগরি, বার্ষিক সম্ভাব্য টার্নওভার, ট্রেড লাইসেন্স নম্বর ও ব্যাংক একাউন্টের তথ্য দিন।',
          warning_bn: 'টার্নওভার ৫০ লাখ টাকার নিচে হলে ভ্যাট অব্যাহতি পাওয়া যায়।',
          action_url: 'https://vat.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিজিটাল ভ্যাট সার্টিফিকেট (মুসক-২.৩) ডাউনলোড',
          instruction_bn: 'তথ্য সঠিক থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে ১৩ ডিজিটের কিউআর কোডযুক্ত ডিজিটাল ভ্যাট সার্টিফিকেট জারি করবে যা সরাসরি ডাউনলোড করে প্রিন্ট করা যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://vat.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভ্যাট অফিসে না গিয়েই ঘরে বসে সম্পূর্ণ বিনামূল্যে ভ্যাট সার্টিফিকেট পাওয়া যায়। কোনো ভ্যাট কর্মকর্তা বা দালালকে ১ টাকাও দেওয়া আইনত দণ্ডনীয় অপরাধ।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://vat.gov.bd'
    }
  ]
};
