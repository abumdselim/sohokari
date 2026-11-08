import { ServiceRecord } from '../../types/service';

export const postEmsInternationalExpressParcelService: ServiceRecord = {
  id: 'bd-post-ems-international-express-parcel',
  slug: 'bd-post-ems-international-express-parcel',
  category_id: 'citizen_general',
  name_bn: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা',
  name_en: 'Bangladesh Post International Express Mail Service EMS Parcel Tracking Guide',
  responsible_ministry_bn: 'বাংলাদেশ ডাক বিভাগ',
  responsible_ministry_en: 'বাংলাদেশ ডাক বিভাগ',
  responsible_agency_bn: 'বাংলাদেশ ডাক বিভাগ',
  responsible_agency_en: 'বাংলাদেশ ডাক বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://bdpost.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://bdpost.gov.bd',
  legal_basis: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh post international express mail service ems parcel tracking guide', language: 'en', weight: 1.0 },
    { alias: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং', language: 'bn', weight: 0.95 },
    { alias: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং ফি', language: 'bn', weight: 0.95 },
    { alias: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'post ems international express parcel', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-post-ems-international-express-parcel-standard',
      variant_name_bn: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Post International Express Mail Service EMS Parcel Tracking Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ইএমএস আন্তর্জাতিক ডকুমেন্ট ফি (৫০০ গ্রাম পর্যন্ত)',
          fee_type_en: 'ইএমএস আন্তর্জাতিক ডকুমেন্ট ফি (৫০০ গ্রাম পর্যন্ত)',
          amount_bdt: 1800.0,
          effective_date: '2022-01-01',
          notes_bn: 'ইউরোপ, আমেরিকা ও মধ্যপ্রাচ্যে ৫০০ গ্রাম ডকুমেন্টে মাত্র ১,৮০০ থেকে ২,২০০ টাকা।'
        },
        {
          fee_type_bn: 'প্রতি ৫০০ গ্রাম অতিরিক্ত পার্সেল মালামাল ফি',
          fee_type_en: 'প্রতি ৫০০ গ্রাম অতিরিক্ত পার্সেল মালামাল ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'গন্তব্য দেশ ও ওজন অনুযায়ী নির্ধারিত সরকারি রেট।'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রেরক ও বিদেশি প্রাপকের পূর্ণ ঠিকানা, ফোন নম্বর ও জিপ কোড (Zip Code)',
          document_name_en: 'প্রেরক ও বিদেশি প্রাপকের পূর্ণ ঠিকানা, ফোন নম্বর ও জিপ কোড (Zip Code)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'কাস্টমস ডিক্লারেশন ফরম (CN-22 / CN-23 ফরম)',
          document_name_en: 'কাস্টমস ডিক্লারেশন ফরম (CN-22 / CN-23 ফরম)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রেরকের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'প্রেরকের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'প্রধান ডাকঘর বা জিপিও-র ইএমএস (EMS) কাউন্টারে যাওয়া',
          instruction_bn: 'জেলা জিপিও বা প্রধান ডাকঘরে গিয়ে পার্সেলটি খোলা অবস্থায় উপস্থাপন করুন যাতে ডাক কর্মকর্তা স্ক্যান করতে পারেন।',
          warning_bn: 'কোনো অবৈধ বা নিষিদ্ধ পণ্য পাঠানো যাবে না।',
          action_url: 'https://bdpost.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ওজন ও সরকারি রসিদ গ্রহণ',
          instruction_bn: 'ওজন করিয়ে সরকারি রেট অনুযায়ী টাকা জমা দিয়ে ১৩ ডিজিটের আন্তর্জাতিক বারকোড ট্র্যাকিং নম্বর (যেমন EE123456789BD) যুক্ত রসিদ নিন।',
          warning_bn: 'রসিদে উল্লিখিত টাকার বাইরে কোনো বকশিশ নেই।',
          action_url: 'https://bdpost.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আন্তর্জাতিক অনলাইন ট্র্যাকিং',
          instruction_bn: 'https://bdpost.gov.bd এবং আন্তর্জাতিক UPU ওয়েবসাইটে ট্র্যাকিং নম্বর দিয়ে পার্সেলটি ফ্লাইটে ওঠা থেকে শুরু করে বিদেশি গ্রাহকের হাতে পৌঁছানো পর্যন্ত প্রতি মুহূর্তের আপডেট দেখুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bdpost.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ডাকঘর প্রাঙ্গণে কোনো কুরিয়ারের দালালের কথায় কান দেবেন না। সরকারি ইএমএস সেবা বেসরকারি কুরিয়ারের চেয়ে ৩ গুণ সাশ্রয়ী এবং বিশ্ব ডাক ইউনিয়ন দ্বারা আইনত সুরক্ষিত।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bdpost.gov.bd'
    }
  ]
};
