import { ServiceRecord } from '../../types/service';

export const daeAgriculturalLoanSubsidySeedService: ServiceRecord = {
  id: 'bd-dae-agricultural-loan-subsidy-seed',
  slug: 'bd-dae-agricultural-loan-subsidy-seed',
  category_id: 'agriculture_food',
  name_bn: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা',
  name_en: 'Bangladesh 4% Concessionary Agricultural Loan & Free Seed/Fertilizer Subsidy Guide',
  responsible_ministry_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বাংলাদেশ ব্যাংক',
  responsible_ministry_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বাংলাদেশ ব্যাংক',
  responsible_agency_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বাংলাদেশ ব্যাংক',
  responsible_agency_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বাংলাদেশ ব্যাংক',
  visiting_office_level: 'district',
  official_portal_url: 'https://dae.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dae.gov.bd',
  legal_basis: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh 4% concessionary agricultural loan & free seed/fertilizer subsidy guide', language: 'en', weight: 1.0 },
    { alias: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা', language: 'bn', weight: 0.95 },
    { alias: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা ফি', language: 'bn', weight: 0.95 },
    { alias: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dae agricultural loan subsidy seed', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dae-agricultural-loan-subsidy-seed-standard',
      variant_name_bn: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh 4% Concessionary Agricultural Loan & Free Seed/Fertilizer Subsidy Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 10,
      fees: [
        {
          fee_type_bn: 'কৃষি ঋণ আবেদন সরকারি ফি',
          fee_type_en: 'কৃষি ঋণ আবেদন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ঋণ আবেদনের কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'কৃষকের ১০ টাকার ব্যাংক অ্যাকাউন্ট খোলার ফি',
          fee_type_en: 'কৃষকের ১০ টাকার ব্যাংক অ্যাকাউন্ট খোলার ফি',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: 'মাত্র ১০ টাকা প্রাথমিক জমা দিয়ে সরকারি একাউন্ট খোলা যায়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপসহকারী কৃষি কর্মকর্তা (BS) কর্তৃক প্রদত্ত কৃষক কার্ড / কৃষি উপকরণ সহায়তা কার্ড',
          document_name_en: 'উপসহকারী কৃষি কর্মকর্তা (BS) কর্তৃক প্রদত্ত কৃষক কার্ড / কৃষি উপকরণ সহায়তা কার্ড',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'কৃষকের জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'কৃষকের জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: '১০ টাকার সরকারি ব্যাংক অ্যাকাউন্টের চেক বই বা পাস বইয়ের কপি',
          document_name_en: '১০ টাকার সরকারি ব্যাংক অ্যাকাউন্টের চেক বই বা পাস বইয়ের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির খতিয়ান বা বর্গাচাষী হলে জমির মালিকের প্রত্যয়নপত্র',
          document_name_en: 'জমির খতিয়ান বা বর্গাচাষী হলে জমির মালিকের প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'কৃষক কার্ড প্রস্তুত ও ১০ টাকার ব্যাংক একাউন্ট খোলা',
          instruction_bn: 'ইউনিয়ন উপসহকারী কৃষি কর্মকর্তার কাছে গিয়ে কৃষক কার্ড সংগ্রহ করুন এবং বাংলাদেশ কৃষি ব্যাংক বা সোনালী ব্যাংকে মাত্র ১০ টাকায় হিসাব খুলুন।',
          warning_bn: 'বর্গাচাষীদের জন্যও বিশেষ সরকারি ঋণের বিধান রয়েছে।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ব্যাংক শাখায় সরাসরি কৃষি ঋণ আবেদন',
          instruction_bn: 'কোনো দালালের মাধ্যমে না গিয়ে সরাসরি ব্যাংক ম্যানেজারের সাথে দেখা করে কৃষি ঋণের ফর্ম পূরণ করুন।',
          warning_bn: 'বাংলাদেশ ব্যাংকের নিয়ম অনুযায়ী কৃষি ঋণে কোনো গোপন চার্জ বা বাড়তি কমিশন নেওয়া সম্পূর্ণ নিষিদ্ধ।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি অ্যাকাউন্টে ঋণ বিতরণ ও ফসল কর্তন শেষে পরিশোধ',
          instruction_bn: 'ব্যাংক আপনার জমিন পরিদর্শন করে সরাসরি আপনার একাউন্টে ৪% সুদে ঋণের টাকা পাঠিয়ে দেবে। ফসল উঠলে কিস্তিতে ঋণ পরিশোধ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dae.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো মেম্বার বা টাউটকে ঋণের টাকার ভাগ দেবেন না। সরকার কৃষকদের সর্বোচ্চ অগ্রাধিকার দিয়েছে। কোনো ব্যাংক ম্যানেজার কৃষি ঋণ দিতে গড়িমসি বা ঘুষ চাইলে বাংলাদেশ ব্যাংকের আর্থিক অন্তর্ভুক্তি বিভাগ বা হটলাইন ১৬২৩৬-এ সরাসরি জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: '৪% রেয়াতি সুদের সরকারি কৃষি ঋণ ও বিনামূল্যে বীজ/সার প্রণোদনা নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dae.gov.bd'
    }
  ]
};
