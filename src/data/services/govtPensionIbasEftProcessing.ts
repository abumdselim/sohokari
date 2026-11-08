import { ServiceRecord } from '../../types/service';

export const govtPensionIbasEftProcessingService: ServiceRecord = {
  id: 'bd-govt-pension-ibas-eft-processing',
  slug: 'bd-govt-pension-ibas-eft-processing',
  category_id: 'finance_pension',
  name_bn: 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা',
  name_en: 'Bangladesh Government Employees & Primary Teachers Pension & Monthly EFT Disbursement Guide',
  responsible_ministry_bn: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_agency_bn: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_agency_en: 'হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://cga.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://cga.gov.bd',
  legal_basis: 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh government employees & primary teachers pension & monthly eft disbursement guide', language: 'en', weight: 1.0 },
    { alias: 'চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT', language: 'bn', weight: 0.95 },
    { alias: 'চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT ফি', language: 'bn', weight: 0.95 },
    { alias: 'চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'govt pension ibas eft processing', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-govt-pension-ibas-eft-processing-standard',
      variant_name_bn: 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Government Employees & Primary Teachers Pension & Monthly EFT Disbursement Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'পেনশন প্রসেসিং সরকারি ফি',
          fee_type_en: 'পেনশন প্রসেসিং সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'পেনশন প্রক্রিয়াকরণে কোনো সরকারি ফি বা চার্জ নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'পেনশন আবেদন ফরম (ই-পেনশন ফরম ২.১)',
          document_name_en: 'পেনশন আবেদন ফরম (ই-পেনশন ফরম ২.১)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ সার্ভিস বুক (Service Book) মূল কপি',
          document_name_en: 'হালনাগাদ সার্ভিস বুক (Service Book) মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিআরএল (PRL) মঞ্জুরির সরকারি আদেশ (GO)',
          document_name_en: 'পিআরএল (PRL) মঞ্জুরির সরকারি আদেশ (GO)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পেনশনারের জাতীয় পরিচয়পত্র ও ৩ কপি সত্যায়িত ছবি',
          document_name_en: 'পেনশনারের জাতীয় পরিচয়পত্র ও ৩ কপি সত্যায়িত ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নমিনীর ছবি, এনআইডি এবং উত্তরাধিকার সনদ',
          document_name_en: 'নমিনীর ছবি, এনআইডি এবং উত্তরাধিকার সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পেনশনারের ব্যাংক একাউন্ট সংক্রান্ত প্রত্যয়নপত্র (MICS চেক পাতা স্ক্যান)',
          document_name_en: 'পেনশনারের ব্যাংক একাউন্ট সংক্রান্ত প্রত্যয়নপত্র (MICS চেক পাতা স্ক্যান)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বেসরকারি অনাপত্তিপত্র (NDC - No Demand Certificate)',
          document_name_en: 'বেসরকারি অনাপত্তিপত্র (NDC - No Demand Certificate)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'পিআরএল শুরুর ৬ মাস আগে সার্ভিস বুক হালনাগাদ',
          instruction_bn: 'অবসরে যাওয়ার ৬ মাস পূর্বে নিজ অফিস থেকে সার্ভিস বুক ও সার্ভিস ভেরিফিকেশন রোল সিজিএ বা হিসাবরক্ষণ অফিস থেকে যাচাই (Pay Fixation Verification) করিয়ে নিন।',
          warning_bn: 'অনলাইন পে-ফিক্সেশন এনআইডির সাথে হুবহু মিল থাকতে হবে।',
          action_url: 'https://ibas.finance.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ই-পেনশন আবেদন ও ডকুমেন্টস সাবমিশন',
          instruction_bn: 'অফিস প্রধান বরাবর পেনশন আবেদন ফরম ও এনডিসি জমা দিন। অফিস প্রধান পেনশন মঞ্জুরি আদেশ (PPO) তৈরি করে অনলাইনে হিসাবরক্ষণ অফিসে (iBAS++ পোর্টালে) ফরোয়ার্ড করবেন।',
          warning_bn: 'এখন আর ম্যানুয়াল ফাইল নিয়ে হিসাবরক্ষণ অফিসে দৌড়াদৌড়ি করতে হয় না।',
          action_url: 'https://cga.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'হিসাবরক্ষণ কর্মকর্তা কর্তৃক অডিট ও অনুমোদন',
          instruction_bn: 'হিসাবরক্ষণ কর্মকর্তা অনলাইনে পিটিও (Pension Payment Order) পাস করবেন এবং এককালীন গ্র্যাচুইটি ও লাম্পগ্রান্ট অনুমোদনের বিল ইস্যু করবেন।',
          warning_bn: 'কোনো অডিটর ফাইল আটকে ঘুষ দাবি করলে সরাসরি সিজিএ-র হেল্পলাইনে জানান।',
          action_url: 'https://cga.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'সরাসরি ব্যাংক অ্যাকাউন্টে ইএফটি (EFT) পেমেন্ট লাভ',
          instruction_bn: 'টাকা স্বয়ংক্রিয়ভাবে বাংলাদেশ ব্যাংকের BEFTN নেটওয়ার্ক দিয়ে সরাসরি আপনার ব্যাংকে জমা হবে। মোবাইলে ক্রেডিট মেসেজ আসবে। প্রতি মাসের ১ তারিখে পেনশন সরাসরি ব্যাংকে চলে আসবে, ব্যাংকে গিয়ে লাইনে দাঁড়ানোর প্রয়োজন নেই।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://cga.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: হিসাবরক্ষণ অফিসের কোনো কর্মকর্তা বা কর্মচারী পেনশনের চেক ছাড়ানোর জন্য পারসেন্টেজ বা ঘুষ দাবি করলে তা সম্পূর্ণ ফৌজদারি অপরাধ। iBAS++ সিস্টেমে পেনশনের পুরো প্রক্রিয়াটি ডিজিটালাইজড এবং সেন্ট্রালি ট্র্যাক করা হয়। কাউকে ১ টাকাও দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://cga.gov.bd'
    }
  ]
};
