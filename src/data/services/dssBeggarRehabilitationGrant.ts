import { ServiceRecord } from '../../types/service';

export const dssBeggarRehabilitationGrantService: ServiceRecord = {
  id: 'bd-dss-beggar-rehabilitation-grant',
  slug: 'bd-dss-beggar-rehabilitation-grant',
  category_id: 'social_welfare',
  name_bn: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা',
  name_en: 'Beggar Rehabilitation & Alternative Employment Government Grant Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'beggar rehabilitation & alternative employment government grant guide', language: 'en', weight: 1.0 },
    { alias: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dss beggar rehabilitation grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dss-beggar-rehabilitation-grant-standard',
      variant_name_bn: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Beggar Rehabilitation & Alternative Employment Government Grant Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'পুনর্বাসন অনুদান আবেদন ফি',
          fee_type_en: 'পুনর্বাসন অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সম্পূর্ণ ফ্রি সরকারি সহায়তা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের প্রত্যয়নপত্র',
          document_name_en: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভিক্ষাবৃত্তি ছেড়ে বিকল্প কাজ করার লিখিত অঙ্গীকারনামা',
          document_name_en: 'ভিক্ষাবৃত্তি ছেড়ে বিকল্প কাজ করার লিখিত অঙ্গীকারনামা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ইউএনও বা উপজেলা সমাজসেবা অফিসারের কাছে আবেদন',
          instruction_bn: 'উপজেলা ভিক্ষুক পুনর্বাসন কমিটির সভাপতি (ইউএনও) বরাবর কী ধরণের বিকল্প কাজ করতে চান তা উল্লেখ করে আবেদন করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি ইউএনও অফিসে যান।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কমিটি কর্তৃক সরেজমিন যাচাই ও প্যাকেজ অনুমোদন',
          instruction_bn: 'কমিটি যাচাই করে আবেদনকারীকে গরু, ভ্যানগাড়ি বা মুদি দোকানের সামগ্রী ক্রয়ের অনুমোদন দেবে।',
          warning_bn: 'নগদ টাকার বদলে সরাসরি মালামাল কিনে দেওয়া হয় যাতে অপব্যবহার না হয়।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আনুষ্ঠানিকভাবে মালামাল ও সনদপত্র হস্তান্তর',
          instruction_bn: 'জেলা প্রশাসক বা ইউএনও আনুষ্ঠানিকভাবে কৃষিজীবী বা ব্যবসায়িক সামগ্রী তুলে দেবেন যাতে পরিবারটি স্বাবলম্বী হতে পারে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভিক্ষুকদের পুনর্বাসন তহবিলের এক পয়সাও আত্মসাৎ করা মারাত্মক অপরাধ। কোনো মধ্যস্বত্বভোগী অনুদানের সম্পদ দেওয়ার নামে অর্থ দাবি করলে সাথে সাথে ইউএনও বা ৯৯৯ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};
