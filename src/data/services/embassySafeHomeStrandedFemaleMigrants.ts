import { ServiceRecord } from '../../types/service';

export const embassySafeHomeStrandedFemaleMigrantsService: ServiceRecord = {
  id: 'bd-embassy-safe-home-stranded-female-migrants',
  slug: 'bd-embassy-safe-home-stranded-female-migrants',
  category_id: 'expatriate_welfare',
  name_bn: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা',
  name_en: 'Stranded Female Migrant Workers Embassy Safe Home & Repatriation Guide',
  responsible_ministry_bn: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড ও বাংলাদেশ দূতাবাস (শ্রম উইং)',
  responsible_ministry_en: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড ও বাংলাদেশ দূতাবাস (শ্রম উইং)',
  responsible_agency_bn: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড ও বাংলাদেশ দূতাবাস (শ্রম উইং)',
  responsible_agency_en: 'ওয়েজ আর্নার্স কল্যাণ বোর্ড ও বাংলাদেশ দূতাবাস (শ্রম উইং)',
  visiting_office_level: 'division',
  official_portal_url: 'https://wewb.gov.bd',
  helpline_number: '16135',
  grievance_channel: 'https://wewb.gov.bd',
  legal_basis: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'stranded female migrant workers embassy safe home & repatriation guide', language: 'en', weight: 1.0 },
    { alias: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা', language: 'bn', weight: 0.95 },
    { alias: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'embassy safe home stranded female migrants', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-embassy-safe-home-stranded-female-migrants-standard',
      variant_name_bn: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Stranded Female Migrant Workers Embassy Safe Home & Repatriation Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'দূতাবাস সেফ হোমে আশ্রয় ও চিকিৎসা ফি',
          fee_type_en: 'দূতাবাস সেফ হোমে আশ্রয় ও চিকিৎসা ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারের সম্পূর্ণ ফ্রি আশ্রয় ও আইনি সুরক্ষা।'
        },
        {
          fee_type_bn: 'দেশে প্রত্যাবাসনের বিমান টিকিট',
          fee_type_en: 'দেশে প্রত্যাবাসনের বিমান টিকিট',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'অসচ্ছল ও নির্যাতিত নারী কর্মীদের জন্য টিকিট সরকার বহন করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'নারী গৃহকর্মীর পাসপোর্ট নম্বর বা বিএমইটি স্মার্ট কার্ড নম্বর',
          document_name_en: 'নারী গৃহকর্মীর পাসপোর্ট নম্বর বা বিএমইটি স্মার্ট কার্ড নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদেশে অবস্থানরত গৃহকর্তা বা এজেন্সির ঠিকানা/ফোন নম্বর (যদি জানা থাকে)',
          document_name_en: 'বিদেশে অবস্থানরত গৃহকর্তা বা এজেন্সির ঠিকানা/ফোন নম্বর (যদি জানা থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'দেশে থাকা পরিবারের ওয়ারিশ বা অভিভাবকের জাতীয় পরিচয়পত্র ও আবেদন',
          document_name_en: 'দেশে থাকা পরিবারের ওয়ারিশ বা অভিভাবকের জাতীয় পরিচয়পত্র ও আবেদন',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'দূতাবাস হেল্পলাইনে বা দেশে প্রবাসী কল্যাণ মন্ত্রণালয়ে তাৎক্ষণিক যোগাযোগ',
          instruction_bn: 'নারী কর্মীর পাসপোর্ট নম্বরসহ সরাসরি সৌদি বা সংশ্লিষ্ট দেশের বাংলাদেশ দূতাবাসের শ্রম উইংয়ে ফোন দিন অথবা দেশে প্রবাসী কল্যাণ বোর্ডে আবেদন জমা দিন।',
          warning_bn: 'প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ নম্বরে তাৎক্ষণিক মেসেজ বা কল দিন।',
          action_url: 'https://wewb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'দূতাবাস কর্তৃক স্থানীয় পুলিশের সহায়তায় উদ্ধার ও সেফ হোমে স্থানান্তর',
          instruction_bn: 'দূতাবাসের কর্মকর্তারা স্পন্সর বা স্থানীয় পুলিশের সাথে যোগাযোগ করে নারী কর্মীকে নিরাপদ হেফাজতে (Safe Home) নিয়ে আসবেন।',
          warning_bn: 'সেফ হোমে খাদ্য, বাসস্থান ও ডাক্তার সম্পূর্ণ ফ্রি।',
          action_url: 'https://wewb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আউটপাস (Outpass) ও বিনামূল্যে দেশে ফেরা',
          instruction_bn: 'পাসপোর্ট না থাকলে দূতাবাস ট্রাভেল পারমিট (আউটপাস) ইস্যু করবে এবং ওয়েজ আর্নার্স বোর্ডের বিমান টিকিটে নিরাপদে দেশে ফিরিয়ে আনবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://wewb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো ভুয়া আদম ব্যবসায়ীকে স্বজন ছাড়ানোর নামে টাকা পাঠাবেন না। বিদেশে আটকে পড়া নাগরিকদের সুরক্ষা দিতে বাংলাদেশ সরকার আইনত দায়বদ্ধ। ১৬১৩৫ নম্বরে ফোন করে সরকারের সরাসরি সহায়তা নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://wewb.gov.bd'
    }
  ]
};
