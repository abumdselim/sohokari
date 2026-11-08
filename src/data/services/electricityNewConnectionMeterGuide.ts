import { ServiceRecord } from '../../types/service';

export const electricityNewConnectionMeterGuideService: ServiceRecord = {
  id: 'bd-electricity-new-connection-meter-guide',
  slug: 'bd-electricity-new-connection-meter-guide',
  category_id: 'citizen_general',
  name_bn: 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি)',
  name_en: 'Bangladesh New Electricity Connection & Digital Smart Meter Application Guide',
  responsible_ministry_bn: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি',
  responsible_ministry_en: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি',
  responsible_agency_bn: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি',
  responsible_agency_en: 'বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি',
  visiting_office_level: 'district',
  official_portal_url: 'https://reb.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://reb.gov.bd',
  legal_basis: 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি) সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি)', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh new electricity connection & digital smart meter application guide', language: 'en', weight: 1.0 },
    { alias: 'electricity new connection meter guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-electricity-new-connection-meter-guide-standard',
      variant_name_bn: 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি) (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh New Electricity Connection & Digital Smart Meter Application Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'আবেদন ফি (এক ফেজ আবাসিক সংযোগ)',
          fee_type_en: 'আবেদন ফি (এক ফেজ আবাসিক সংযোগ)',
          amount_bdt: 115.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদন ফি ১০০ টাকা + ১৫% ভ্যাট = ১১৫ টাকা।'
        },
        {
          fee_type_bn: 'নিরাপত্তা জামানত (Security Deposit - প্রতি কিলোওয়াট)',
          fee_type_en: 'নিরাপত্তা জামানত (Security Deposit - প্রতি কিলোওয়াট)',
          amount_bdt: 600.0,
          effective_date: '2022-01-01',
          notes_bn: 'ফেরতযোগ্য সরকারি জামানত।'
        },
        {
          fee_type_bn: 'মিটার টেস্ট ও সার্ভিস সংযোগ ফি',
          fee_type_en: 'মিটার টেস্ট ও সার্ভিস সংযোগ ফি',
          amount_bdt: 800.0,
          effective_date: '2022-01-01',
          notes_bn: 'মিটার সরবরাহ ও তার টানার সরকারি চার্জ।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'যে জমিতে সংযোগ হবে তার খারিজ খতিয়ান বা দলিলের কপি',
          document_name_en: 'যে জমিতে সংযোগ হবে তার খারিজ খতিয়ান বা দলিলের কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান কর্তৃক বাড়ি ওয়্যারিং প্রত্যয়নপত্র',
          document_name_en: 'লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান কর্তৃক বাড়ি ওয়্যারিং প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিকটবর্তী প্রতিবেশীর বিদ্যুৎ বিলের কপি (হিসাব নম্বর উল্লেখের জন্য)',
          document_name_en: 'নিকটবর্তী প্রতিবেশীর বিদ্যুৎ বিলের কপি (হিসাব নম্বর উল্লেখের জন্য)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিদ্যুৎ বিতরণ সংস্থার পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'পল্লী বিদ্যুৎ হলে https://rebpbs.org এবং ঢাকা হলে desco.org.bd বা dpdc.org.bd-এ যান। \'নতুন সংযোগ আবেদন\' অপশনে ক্লিক করে ১১৫ টাকা আবেদন ফি বিকাশ দিয়ে সাবমিট করুন।',
          warning_bn: 'আপনার নিকটবর্তী ট্রান্সফরমার ও পোলের নম্বর সঠিকভাবে দিন।',
          action_url: 'https://rebpbs.org'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'লাইনম্যান কর্তৃক কারিগরি পরিদর্শন',
          instruction_bn: 'বিদ্যুৎ অফিসের ওয়্যারিং পরিদর্শক সরেজমিনে এসে বাড়ির ওয়্যারিং ও আর্থিং রড পরীক্ষা করবেন।',
          warning_bn: 'ওয়্যারিং টেস্টের জন্য কোনো পরিদর্শককে ব্যক্তিগত টাকা দেওয়া নিষিদ্ধ।',
          action_url: 'https://reb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিমান্ড নোটের ফি অনলাইনে জমা',
          instruction_bn: 'সিস্টেমে ডিমান্ড নোট ইস্যু হবে। জামানত ও মিটার চার্জের টাকা সরাসরি রকেট/বিকাশ বা ব্যাংকে জমা দিন।',
          warning_bn: 'দালালরা বলে \'অফিস খরচ লাগবে\'—ডিমান্ড নোটের বাইরে কোনো টাকা নেই।',
          action_url: 'https://reb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'মিটার স্থাপন ও বিদ্যুৎ চালু',
          instruction_bn: 'ফি জমার ৩-৫ দিনের মধ্যে লাইনম্যান এসে সরকারি সিলযুক্ত ডিজিটাল মিটার স্থাপন করে বিদ্যুৎ চালু করে দেবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://reb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো দালাল বা অসাধু ইলেকট্রিশিয়ানকে মিটার আনার জন্য চুক্তি করে টাকা দেবেন না। তারা অবৈধ হুক লাইন বা চোরাই মিটার লাগিয়ে দিলে বিদ্যুৎ আদালতের অভিযানে জেল ও লাখ টাকা জরিমানা হতে পারে। সম্পূর্ণ বৈধ অনলাইন আবেদন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি) অফিসিয়াল পোর্টাল',
      source_url: 'https://reb.gov.bd'
    }
  ]
};
