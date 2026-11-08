import { ServiceRecord } from '../../types/service';

export const universalPensionUpensionGuideService: ServiceRecord = {
  id: 'bd-universal-pension-upension-guide',
  slug: 'bd-universal-pension-upension-guide',
  category_id: 'finance_pension',
  name_bn: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা',
  name_en: 'Bangladesh Universal Pension Scheme (UPension) Registration & Installment Guide',
  responsible_ministry_bn: 'জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_agency_bn: 'জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_agency_en: 'জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://upension.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://upension.gov.bd',
  legal_basis: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh universal pension scheme (upension) registration & installment guide', language: 'en', weight: 1.0 },
    { alias: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ', language: 'bn', weight: 0.95 },
    { alias: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ ফি', language: 'bn', weight: 0.95 },
    { alias: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'universal pension upension guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-universal-pension-upension-guide-standard',
      variant_name_bn: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Universal Pension Scheme (UPension) Registration & Installment Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'নিবন্ধন সরকারি ফি',
          fee_type_en: 'নিবন্ধন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'রেজিস্ট্রেশনের কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'প্রবাস স্কিম মাসিক চাঁদা (প্রবাসী বাংলাদেশিদের জন্য)',
          fee_type_en: 'প্রবাস স্কিম মাসিক চাঁদা (প্রবাসী বাংলাদেশিদের জন্য)',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মাসিক ২০০০, ৫০০০, ৭৫০০ বা ১০,০০০ টাকা।'
        },
        {
          fee_type_bn: 'প্রগতি স্কিম (বেসরকারি চাকরিজীবী)',
          fee_type_en: 'প্রগতি স্কিম (বেসরকারি চাকরিজীবী)',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মাসিক ২০০০, ৩০০০, ৫০০০ বা ১০,০০০ টাকা।'
        },
        {
          fee_type_bn: 'সুরক্ষা স্কিম (অনানুষ্ঠানিক খাতের কর্মী/কৃষক/চালক)',
          fee_type_en: 'সুরক্ষা স্কিম (অনানুষ্ঠানিক খাতের কর্মী/কৃষক/চালক)',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মাসিক ১০০০, ২০০০, ৩০০০ বা ৫০০০ টাকা।'
        },
        {
          fee_type_bn: 'সমতা স্কিম (স্বল্প আয়ের মানুষ - ৫০% সরকার প্রদান করে)',
          fee_type_en: 'সমতা স্কিম (স্বল্প আয়ের মানুষ - ৫০% সরকার প্রদান করে)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'নাগরিক ৫০০ টাকা দিলে সরকার বাকি ৫০০ টাকা জমা দেয়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'নমিনীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'নমিনীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর নিজস্ব ব্যাংক একাউন্ট নম্বর ও রাউটিং কোড',
          document_name_en: 'আবেদনকারীর নিজস্ব ব্যাংক একাউন্ট নম্বর ও রাউটিং কোড',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'পেনশন পোর্টালে স্কিম নির্বাচন',
          instruction_bn: 'https://upension.gov.bd ওয়েবসাইটে যান। \'পেনশন আবেদন\' বাটনে ক্লিক করুন। আপনার পেশা অনুযায়ী উপযুক্ত স্কিম (প্রবাস, প্রগতি, সুরক্ষা বা সমতা) নির্বাচন করুন।',
          warning_bn: 'স্বল্প আয়ের পরিবার হলে সমতা স্কিম নির্বাচন করুন।',
          action_url: 'https://upension.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'এনআইডি ও ব্যাংক তথ্য পূরণ',
          instruction_bn: 'এনআইডি এবং জন্মতারিখ দিন। নির্বাচন কমিশনের ডাটাবেজ থেকে স্বয়ংক্রিয়ভাবে ছবি ও তথ্য চলে আসবে। এরপর আপনার ব্যাংক একাউন্টের তথ্য এবং নমিনীর তথ্য পূরণ করুন।',
          warning_bn: 'নমিনীর তথ্য নির্ভুলভাবে দিন।',
          action_url: 'https://upension.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'প্রথম কিস্তির চাঁদা পেমেন্ট ও ইউনিক আইডি লাভ',
          instruction_bn: 'বিকাশ, নগদ বা ব্যাংক কার্ড দিয়ে প্রথম কিস্তির চাঁদা দিন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই আপনাকে একটি ইউনিক পেনশন আইডি (UID) দেওয়া হবে।',
          warning_bn: 'প্রতি মাসে মোবাইল থেকে নিয়মিত ঘরে বসেই চাঁদা জমা দিতে পারবেন।',
          action_url: 'https://upension.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সর্বজনীন পেনশনে অন্তর্ভুক্ত হতে কোনো দালাল বা এজেন্টের শরণাপন্ন হবেন না। আপনার চাঁদা সরাসরি বাংলাদেশ ব্যাংকের ট্রেজারি অ্যাকাউন্টে সুরক্ষিত থাকে। সোনালী ব্যাংক বা যেকোনো স্মার্টফোন থেকে নিজেই এটি পরিচালনা করতে পারেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://upension.gov.bd'
    }
  ]
};
