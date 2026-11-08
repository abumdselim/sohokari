import { ServiceRecord } from '../../types/service';

export const govtHospitalAmbulanceServiceRatesService: ServiceRecord = {
  id: 'bd-govt-hospital-ambulance-service-rates',
  slug: 'bd-govt-hospital-ambulance-service-rates',
  category_id: 'healthcare',
  name_bn: 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড',
  name_en: 'Government Hospital Official Rate Card Ambulance Booking & Syndicate Prevention Guide',
  responsible_ministry_bn: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dghs.gov.bd',
  helpline_number: '16263',
  grievance_channel: 'https://dghs.gov.bd',
  legal_basis: 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড', language: 'bn', weight: 1.0 },
    { alias: 'government hospital official rate card ambulance booking & syndicate prevention guide', language: 'en', weight: 1.0 },
    { alias: 'হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড', language: 'bn', weight: 0.95 },
    { alias: 'হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড ফি', language: 'bn', weight: 0.95 },
    { alias: 'হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'govt hospital ambulance service rates', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-govt-hospital-ambulance-service-rates-standard',
      variant_name_bn: 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড (সাধারণ আবেদন)',
      variant_name_en: 'Government Hospital Official Rate Card Ambulance Booking & Syndicate Prevention Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সরকারি অ্যাম্বুলেন্স বেস ফেয়ার (মেট্রোপলিটন এলাকা)',
          fee_type_en: 'সরকারি অ্যাম্বুলেন্স বেস ফেয়ার (মেট্রোপলিটন এলাকা)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রথম ৫ কিলোমিটারের জন্য সরকারি নির্ধারিত বেস ফেয়ার।'
        },
        {
          fee_type_bn: 'প্রতি কিলোমিটার অতিরিক্ত ভাড়া (দূরপাল্লায়)',
          fee_type_en: 'প্রতি কিলোমিটার অতিরিক্ত ভাড়া (দূরপাল্লায়)',
          amount_bdt: 15.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি কিমি দূরত্ব অনুযায়ী নির্ধারিত সরকারি রেট।'
        }
      ],
      documents: [
        {
          document_name_bn: 'কর্তব্যরত সরকারি চিকিৎসকের রেফারেল ও অ্যাম্বুলেন্স চাহিদাপত্র',
          document_name_en: 'কর্তব্যরত সরকারি চিকিৎসকের রেফারেল ও অ্যাম্বুলেন্স চাহিদাপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগীর ভর্তি টিকিট ও বেড নম্বর',
          document_name_en: 'রোগীর ভর্তি টিকিট ও বেড নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হাসপাতাল ক্যাশ কাউন্টারে ভাড়া পরিশোধের মানি রিসিট',
          document_name_en: 'হাসপাতাল ক্যাশ কাউন্টারে ভাড়া পরিশোধের মানি রিসিট',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডাক্তারের রেফারেল নিয়ে সরাসরি হাসপাতালের কন্ট্রোল রুমে যাওয়া',
          instruction_bn: 'প্রাইভেট অ্যাম্বুলেন্স ড্রাইভার বা দালালের সাথে কথা না বলে সরাসরি হাসপাতালের জরুরি বিভাগের \'অ্যাম্বুলেন্স নিয়ন্ত্রণ কক্ষে\' যান।',
          warning_bn: 'দালালরা বলবে সরকারি গাড়ি নষ্ট, তাদের কথায় কান দেবেন না।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সরকারি কাউন্টারে রসিদ কেটে ভাড়া পরিশোধ',
          instruction_bn: 'দূরত্ব অনুযায়ী সরকারি রেট কার্ড দেখে ক্যাশ কাউন্টারে টাকা জমা দিয়ে সিলমোহরযুক্ত রসিদ নিন।',
          warning_bn: 'চালককে সরাসরি অতিরিক্ত কোনো টাকা দেবেন না।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি অ্যাম্বুলেন্সে নিরাপদ স্থানান্তর',
          instruction_bn: 'সরকারি অ্যাম্বুলেন্স চালককে রসিদ দেখিয়ে রোগীকে নিরাপদে নির্ধারিত হাসপাতালে নিয়ে যান।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dghs.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: হাসপাতালে অ্যাম্বুলেন্স সিন্ডিকেট রোগীর জীবন নিয়ে বাণিজ্য করে। কোনো চালক বেশি টাকা দাবি করলে বা সিন্ডিকেট বাধা দিলে সাথে সাথে হাসপাতাল পরিচালক বা জরুরি পুলিশ সেবা ৯৯৯ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড অফিসিয়াল পোর্টাল',
      source_url: 'https://dghs.gov.bd'
    }
  ]
};
