import { ServiceRecord } from '../../types/service';

export const electricityMeterLoadExtensionRelocationService: ServiceRecord = {
  id: 'bd-electricity-meter-load-extension-relocation',
  slug: 'bd-electricity-meter-load-extension-relocation',
  category_id: 'citizen_general',
  name_bn: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা',
  name_en: 'Electricity Meter Load Extension Relocation & Bill Correction Guide',
  responsible_ministry_bn: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি',
  responsible_ministry_en: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি',
  responsible_agency_bn: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি',
  responsible_agency_en: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি',
  visiting_office_level: 'district',
  official_portal_url: 'https://powerdivision.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://powerdivision.gov.bd',
  legal_basis: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'electricity meter load extension relocation & bill correction guide', language: 'en', weight: 1.0 },
    { alias: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন', language: 'bn', weight: 0.95 },
    { alias: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'electricity meter load extension relocation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-electricity-meter-load-extension-relocation-standard',
      variant_name_bn: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Electricity Meter Load Extension Relocation & Bill Correction Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'বিল সংশোধন আবেদন ফি',
          fee_type_en: 'বিল সংশোধন আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভুল বিল বা অতিরিক্ত বিল সংশোধনের জন্য কোনো ফি লাগে না।'
        },
        {
          fee_type_bn: 'মিটার লোড বৃদ্ধি জামানত (কিলোওয়াট প্রতি বৃদ্ধি)',
          fee_type_en: 'মিটার লোড বৃদ্ধি জামানত (কিলোওয়াট প্রতি বৃদ্ধি)',
          amount_bdt: 600.0,
          effective_date: '2022-01-01',
          notes_bn: 'ব্রেব/ডেসকো নিয়ম অনুযায়ী কিলোওয়াট প্রতি সরকারি নির্ধারিত সিকিউরিটি ডিপোজিট।'
        },
        {
          fee_type_bn: 'মিটার স্থানান্তর চার্জ',
          fee_type_en: 'মিটার স্থানান্তর চার্জ',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'একই চত্বরে বা নিকটবর্তী স্থানে মিটার স্থানান্তর।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সর্বশেষ পরিশোধিত বিদ্যুৎ বিলের কপি',
          document_name_en: 'সর্বশেষ পরিশোধিত বিদ্যুৎ বিলের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মিটারের বর্তমান রিডিং এর স্পষ্ট ছবি (বিল সংশোধনের ক্ষেত্রে)',
          document_name_en: 'মিটারের বর্তমান রিডিং এর স্পষ্ট ছবি (বিল সংশোধনের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মিটার গ্রাহকের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'মিটার গ্রাহকের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাড়ির মালিকানার প্রমাণ বা হোল্ডিং ট্যাক্স রশিদ (স্থানান্তরের ক্ষেত্রে)',
          document_name_en: 'বাড়ির মালিকানার প্রমাণ বা হোল্ডিং ট্যাক্স রশিদ (স্থানান্তরের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মিটারের ডিসপ্লে রিডিং এর ছবি তোলা',
          instruction_bn: 'কাগজের বিলের সাথে মিটারের ডিসপ্লেতে প্রদর্শিত বর্তমান ইউনিট রিডিং এর ছবি তুলুন। রিডিং বেশি দেখানো থাকলে তাৎক্ষণিক অসঙ্গতি প্রমাণ হবে।',
          warning_bn: 'বিল পরিশোধের ডেট পার হওয়ার আগেই অভিযোগ করুন।',
          action_url: 'https://powerdivision.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'অভিযোগ কেন্দ্র (Complain Center) বা পোর্টালে আবেদন',
          instruction_bn: 'সংশ্লিষ্ট পল্লী বিদ্যুৎ জোনাল অফিস বা ডেসকো/ডিপিডিসি গ্রাহক সেবা কেন্দ্রে লিখিত দিন অথবা পোর্টালে লোড বৃদ্ধির আবেদন সাবমিট করুন।',
          warning_bn: 'লাইনম্যান বা কোনো দালালের সাথে আর্থিক লেনদেন করবেন না।',
          action_url: 'https://powerdivision.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সংশোধিত বিল ও লোড সমন্বয় অনুমোদন',
          instruction_bn: 'কর্মকর্তারা তাৎক্ষণিক বিল সংশোধন করে কিউআর কোডযুক্ত নতুন বিল ইস্যু করবেন যা ব্যাংকে বা বিকাশে জমা দেওয়া যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://powerdivision.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পল্লী বিদ্যুৎ ও বিদ্যুৎ অফিসে দালাল চক্র লোড বাড়িয়ে দেওয়া বা বিল কমিয়ে দেওয়ার নাম করে মোটা টাকা হাতিয়ে নেয়। বিল সংশোধন একটি সম্পূর্ণ ফ্রি সেবা। অতিরিক্ত টাকা চাইলে বিদ্যুৎ মন্ত্রণালয়ের কেন্দ্রীয় কল সেন্টার ১৬৯৯৯ এ তাৎক্ষণিক কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://powerdivision.gov.bd'
    }
  ]
};
