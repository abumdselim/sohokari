import { ServiceRecord } from '../../types/service';

export const gamcaWafidMedicalAppointmentGuideService: ServiceRecord = {
  id: 'bd-gamca-wafid-medical-appointment-guide',
  slug: 'bd-gamca-wafid-medical-appointment-guide',
  category_id: 'expatriate_welfare',
  name_bn: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি',
  name_en: 'GAMCA / Wafid Medical Examination Online Appointment & Official Fee Guide (GCC Countries)',
  responsible_ministry_bn: 'উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://wafid.com',
  helpline_number: '16263',
  grievance_channel: 'https://wafid.com',
  legal_basis: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি', language: 'bn', weight: 1.0 },
    { alias: 'gamca / wafid medical examination online appointment & official fee guide (gcc countries)', language: 'en', weight: 1.0 },
    { alias: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও', language: 'bn', weight: 0.95 },
    { alias: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'gamca wafid medical appointment guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-gamca-wafid-medical-appointment-guide-standard',
      variant_name_bn: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি (সাধারণ আবেদন)',
      variant_name_en: 'GAMCA / Wafid Medical Examination Online Appointment & Official Fee Guide (GCC Countries) (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 48,
      fees: [
        {
          fee_type_bn: 'Wafid আন্তর্জাতিক অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ ফি',
          fee_type_en: 'Wafid আন্তর্জাতিক অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ ফি',
          amount_bdt: 1250.0,
          effective_date: '2022-01-01',
          notes_bn: '১০ মার্কিন ডলার ($10 USD) সমমূল্যের টাকা।'
        },
        {
          fee_type_bn: 'মেডিকেল সেন্টার ফি (পুরুষ কর্মী - সম্পূর্ণ শারীরিক ও ল্যাব টেস্ট)',
          fee_type_en: 'মেডিকেল সেন্টার ফি (পুরুষ কর্মী - সম্পূর্ণ শারীরিক ও ল্যাব টেস্ট)',
          amount_bdt: 8500.0,
          effective_date: '2022-01-01',
          notes_bn: 'GAMCA নির্ধারিত প্রমিত মেডিকেল ফি (ব্লাড টেস্ট, এক্স-রে, এইচআইভি, হেপাটাইটিস ইত্যাদি)।'
        },
        {
          fee_type_bn: 'মেডিকেল সেন্টার ফি (নারী কর্মী)',
          fee_type_en: 'মেডিকেল সেন্টার ফি (নারী কর্মী)',
          amount_bdt: 8500.0,
          effective_date: '2022-01-01',
          notes_bn: 'গর্ভধারণ ও অন্যান্য অতিরিক্ত টেস্ট অন্তর্ভুক্ত।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর মূল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)',
          document_name_en: 'আবেদনকারীর মূল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'Wafid অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ প্রিন্ট কপি',
          document_name_en: 'Wafid অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ প্রিন্ট কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজ সাদা ব্যাকগ্রাউন্ডের ল্যাব ছবি (৪ কপি)',
          document_name_en: 'পাসপোর্ট সাইজ সাদা ব্যাকগ্রাউন্ডের ল্যাব ছবি (৪ কপি)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'Wafid অফিশিয়াল পোর্টালে বুকিং শুরু',
          instruction_bn: 'https://wafid.com ওয়েবসাইটে যান। \'Book an Appointment\' বাটনে ক্লিক করুন। আপনার দেশ (Bangladesh), শহর (Dhaka/Chittagong/Sylhet) এবং গন্তব্য দেশ (যেমন: Saudi Arabia) নির্বাচন করুন।',
          warning_bn: 'সিস্টেম স্বয়ংক্রিয়ভাবে এলোমেলোভাবে (Randomly) একটি অনুমোদিত মেডিকেল সেন্টার বরাদ্দ করে। কোনো নির্দিষ্ট সেন্টার পছন্দ করার সরকারি সুযোগ নেই।',
          action_url: 'https://wafid.com/book-appointment'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পাসপোর্ট তথ্য পূরণ ও ১০ ডলার ফি পরিশোধ',
          instruction_bn: 'পাসপোর্ট নম্বর, জাতীয়তা, ভিসা ক্যাটাগরি (Work Visa) নির্ভুলভাবে লিখুন। এরপর ডুয়েল কারেন্সি ডেবিট/ক্রেডিট কার্ড দিয়ে ১০ ডলার পরিশোধ করুন।',
          warning_bn: 'দালালকে ৩,০০০-৫,০০০ টাকা না দিয়ে ব্যাংকের ডুয়েল কারেন্সি কার্ড দিয়ে ১,২৫০ টাকায় নিজেই স্লিপ কাটুন।',
          action_url: 'https://wafid.com'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'মেডিকেল সেন্টারে টেস্ট প্রদান',
          instruction_bn: 'স্লিপে উল্লেখিত নির্দিষ্ট মেডিকেল সেন্টারে সকাল ৮টা থেকে ১০টার মধ্যে খালি পেটে উপস্থিত হন। নির্ধারিত ৮,৫০০ টাকা ফি জমা দিয়ে রক্ত পরীক্ষা ও বুকের এক্স-রে সম্পন্ন করুন।',
          warning_bn: 'টেস্টের আগে কোনো অ্যান্টিবায়োটিক বা ভারী ওষুধ সেবন করবেন না।',
          action_url: 'https://wafid.com'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'অনলাইনে মেডিকেল রিপোর্ট \'FIT\' স্ট্যাটাস চেক',
          instruction_bn: 'wafid.com-এর \'View Medical Status\' অপশনে পাসপোর্ট নম্বর দিয়ে রিপোর্ট চেক করুন। ফিট রিপোর্টটি সরাসরি বিএমইটি ও সৌদি/উপসাগরীয় দূতাবাস সিস্টেমে সিঙ্ক হয়ে যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://wafid.com'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো দালাল \'মেডিকেল সেন্টারের নাম বদলে দেব\' বা \'আনফিট হলে ফিট করে দেব\' বলে লাখ টাকা দাবি করলে সরাসরি প্রতারণার শিকার হবেন। গামকা সেন্টারের কোনো রেজাল্ট ম্যানুয়ালি পরিবর্তন করা অসম্ভব, এটি সরাসরি বারকোড স্ক্যানের মাধ্যমে সেন্ট্রাল সার্ভারে সংরক্ষিত হয়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি অফিসিয়াল পোর্টাল',
      source_url: 'https://wafid.com'
    }
  ]
};
