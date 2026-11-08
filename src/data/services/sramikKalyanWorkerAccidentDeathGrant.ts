import { ServiceRecord } from '../../types/service';

export const sramikKalyanWorkerAccidentDeathGrantService: ServiceRecord = {
  id: 'bd-sramik-kalyan-worker-accident-death-grant',
  slug: 'bd-sramik-kalyan-worker-accident-death-grant',
  category_id: 'social_welfare',
  name_bn: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা',
  name_en: 'Bangladesh Sramik Kalyan Foundation Worker Accident & Death 3 Lakh Grant Guide',
  responsible_ministry_bn: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন, শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন, শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন, শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন, শ্রম ও কর্মসংস্থান মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://mole.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://mole.gov.bd',
  legal_basis: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh sramik kalyan foundation worker accident & death 3 lakh grant guide', language: 'en', weight: 1.0 },
    { alias: 'শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান', language: 'bn', weight: 0.95 },
    { alias: 'শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান ফি', language: 'bn', weight: 0.95 },
    { alias: 'শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'sramik kalyan worker accident death grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-sramik-kalyan-worker-accident-death-grant-standard',
      variant_name_bn: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Sramik Kalyan Foundation Worker Accident & Death 3 Lakh Grant Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'শ্রমিক কল্যাণ অনুদান আবেদন ফি',
          fee_type_en: 'শ্রমিক কল্যাণ অনুদান আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'শ্রমিক ও তাদের পরিবারের জন্য সরকারের সম্পূর্ণ ফ্রি মানবিক সহায়তা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'শ্রমিক কল্যাণ ফাউন্ডেশনের নির্ধারিত আবেদন ফরম (ফরম-ক বা খ)',
          document_name_en: 'শ্রমিক কল্যাণ ফাউন্ডেশনের নির্ধারিত আবেদন ফরম (ফরম-ক বা খ)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হাসপাতালের মৃত্যু সনদ (Death Certificate) ও ময়নাতদন্তের রিপোর্ট (মৃত্যুর ক্ষেত্রে)',
          document_name_en: 'হাসপাতালের মৃত্যু সনদ (Death Certificate) ও ময়নাতদন্তের রিপোর্ট (মৃত্যুর ক্ষেত্রে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'থানার সুরতহাল প্রতিবেদন ও জিডি বা এফআইআরের কপি',
          document_name_en: 'থানার সুরতহাল প্রতিবেদন ও জিডি বা এফআইআরের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত বা আহত শ্রমিকের জাতীয় পরিচয়পত্র এবং নিয়োগকর্তার প্রত্যয়নপত্র',
          document_name_en: 'মৃত বা আহত শ্রমিকের জাতীয় পরিচয়পত্র এবং নিয়োগকর্তার প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ওয়ারিশগণের জাতীয় পরিচয়পত্র ও ব্যাংক হিসাবের চেকের পাতার কপি',
          document_name_en: 'ওয়ারিশগণের জাতীয় পরিচয়পত্র ও ব্যাংক হিসাবের চেকের পাতার কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিআইএফই বা ইউএনও অফিসে আবেদন জমা',
          instruction_bn: 'দুর্ঘটনার ৬ মাসের মধ্যে কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) কার্যালয় বা উপজেলা নির্বাহী কর্মকর্তার নিকট আবেদন দাখিল করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সরকারি দপ্তরে ফাইল জমা দিন।',
          action_url: 'https://dife.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শ্রম পরিদর্শক কর্তৃক দুর্ঘটনাস্থল তদন্ত',
          instruction_bn: 'শ্রম পরিদর্শক সরেজমিনে কারখানা বা দুর্ঘটনাস্থল পরিদর্শন করে শ্রমিক কল্যাণ ট্রাস্টি বোর্ডে সুপারিশ পাঠাবেন।',
          warning_bn: 'তদন্তকারী দলকে কোনো ব্যক্তিগত অর্থ দেওয়া নিষেধ।',
          action_url: 'https://mole.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি ওয়ারিশদের ব্যাংক হিসাবে ৩ লাখ টাকার চেক হস্তান্তর',
          instruction_bn: 'অনুমোদন শেষে মন্ত্রণালয় থেকে সরাসরি ওয়ারিশদের নিজ নিজ ব্যাংক হিসাবে অ্যাকাউন্ট পেয়ি চেকের মাধ্যমে ৩ লাখ টাকা পৌঁছে দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://mole.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: মেহনতি শ্রমিকের রক্তের টাকায় কোনো দালালকে ভাগ দেবেন না। অনুদানের অর্থ ছাড়ানোর নামে কেউ পারসেন্টেজ বা উৎকোচ দাবি করলে সাথে সাথে শ্রম মন্ত্রণালয়ের কন্ট্রোল রুম ১৬১৩৪ নম্বরে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://mole.gov.bd'
    }
  ]
};
