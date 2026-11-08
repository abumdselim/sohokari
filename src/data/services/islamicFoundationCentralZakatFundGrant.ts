import { ServiceRecord } from '../../types/service';

export const islamicFoundationCentralZakatFundGrantService: ServiceRecord = {
  id: 'bd-islamic-foundation-central-zakat-fund-grant',
  slug: 'bd-islamic-foundation-central-zakat-fund-grant',
  category_id: 'social_welfare',
  name_bn: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা',
  name_en: 'Ministry of Religious Affairs Central Zakat Fund Financial & Medical Aid Guide',
  responsible_ministry_bn: 'ইসলামিক ফাউন্ডেশন ও যাকাত বোর্ড, ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'ইসলামিক ফাউন্ডেশন ও যাকাত বোর্ড, ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'ইসলামিক ফাউন্ডেশন ও যাকাত বোর্ড, ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'ইসলামিক ফাউন্ডেশন ও যাকাত বোর্ড, ধর্ম বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'division',
  official_portal_url: 'https://zakatboard.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://zakatboard.gov.bd',
  legal_basis: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'ministry of religious affairs central zakat fund financial & medical aid guide', language: 'en', weight: 1.0 },
    { alias: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'islamic foundation central zakat fund grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-islamic-foundation-central-zakat-fund-grant-standard',
      variant_name_bn: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Ministry of Religious Affairs Central Zakat Fund Financial & Medical Aid Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'যাকাত অনুদান আবেদন ফি',
          fee_type_en: 'যাকাত অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'যাকাতের অর্থ হকদারদের সম্পূর্ণ ফ্রিতে দেওয়া হয়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'যাকাত বোর্ডের নির্ধারিত আবেদন ফরম',
          document_name_en: 'যাকাত বোর্ডের নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসার ক্ষেত্রে)',
          document_name_en: 'রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসার ক্ষেত্রে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক \'অসচ্ছল ও যাকাত পাওয়ার যোগ্য\' প্রত্যয়নপত্র',
          document_name_en: 'ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক \'অসচ্ছল ও যাকাত পাওয়ার যোগ্য\' প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
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
          title_bn: 'ইসলামিক ফাউন্ডেশনের জেলা কার্যালয়ে আবেদন দাখিল',
          instruction_bn: 'মেডিকেল প্রেসক্রিপশন ও ইউপি প্রত্যয়নসহ জেলা ইসলামিক ফাউন্ডেশন উপ-পরিচালকের অফিসে আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি ইসলামিক ফাউন্ডেশন অফিসে যান।',
          action_url: 'https://zakatboard.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'জেলা যাকাত কমিটি কর্তৃক যাচাই-বাছাই',
          instruction_bn: 'কমিটি আবেদনকারীর আর্থিক অসচ্ছলতা যাচাই করে অনুমোদনের জন্য কেন্দ্রীয় যাকাত বোর্ডে তালিকা পাঠাবে।',
          warning_bn: 'যাকাতে কোনো ঘুষ বা উৎকোচ দেওয়া হারাম ও দণ্ডনীয়।',
          action_url: 'https://zakatboard.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'চেক বা অনলাইন ব্যাংকিংয়ে যাকাতের অর্থ প্রাপ্তি',
          instruction_bn: 'অনুমোদিত অর্থ সরাসরি আবেদনকারীর ব্যাংক অ্যাকাউন্টে পাঠিয়ে দেওয়া হয় এবং রোগী বা পরিবারকে এসএমএস দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://zakatboard.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: যাকাত ফান্ডের অর্থ একমাত্র দরিদ্র ও অসহায়দের হক। কোনো ব্যক্তি বা দালাল যাকাতের টাকা পাইয়ে দেওয়ার নামে অংশ দাবি করলে সাথে সাথে জেলা প্রশাসক বা ধর্ম মন্ত্রণালয়ে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://zakatboard.gov.bd'
    }
  ]
};
