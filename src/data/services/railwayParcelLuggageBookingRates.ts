import { ServiceRecord } from '../../types/service';

export const railwayParcelLuggageBookingRatesService: ServiceRecord = {
  id: 'bd-railway-parcel-luggage-booking-rates',
  slug: 'bd-railway-parcel-luggage-booking-rates',
  category_id: 'transport_brta',
  name_bn: 'বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা',
  name_en: 'Bangladesh Railway Luggage & Cargo Parcel Booking Official Rates Guide',
  responsible_ministry_bn: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway)',
  responsible_ministry_en: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway)',
  responsible_agency_bn: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway)',
  responsible_agency_en: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway)',
  visiting_office_level: 'district',
  official_portal_url: 'https://railway.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://railway.gov.bd',
  legal_basis: 'বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh railway luggage & cargo parcel booking official rates guide', language: 'en', weight: 1.0 },
    { alias: 'রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং', language: 'bn', weight: 0.95 },
    { alias: 'রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং ফি', language: 'bn', weight: 0.95 },
    { alias: 'রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'railway parcel luggage booking rates', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-railway-parcel-luggage-booking-rates-standard',
      variant_name_bn: 'বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Railway Luggage & Cargo Parcel Booking Official Rates Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'পার্সেল ভাড়া (দূরত্ব ও ওজন অনুযায়ী ফিক্সড সরকারি রেট)',
          fee_type_en: 'পার্সেল ভাড়া (দূরত্ব ও ওজন অনুযায়ী ফিক্সড সরকারি রেট)',
          amount_bdt: 2.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি ১০০ কিলোমিটারের জন্য কেজি প্রতি মাত্র ১.৫০ থেকে ২.৫০ টাকা।'
        },
        {
          fee_type_bn: 'মোটরসাইকেল বুকিং চার্জ (সিসি অনুযায়ী সরকারি রেট)',
          fee_type_en: 'মোটরসাইকেল বুকিং চার্জ (সিসি অনুযায়ী সরকারি রেট)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'দূরত্ব ভেদে ১,২০০ থেকে ২,৫০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রেরক ও প্রাপকের জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর',
          document_name_en: 'প্রেরক ও প্রাপকের জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মোটরসাইকেলের ক্ষেত্রে মূল ব্লু-বুক বা রেজিস্ট্রেশনের ফটোকপি',
          document_name_en: 'মোটরসাইকেলের ক্ষেত্রে মূল ব্লু-বুক বা রেজিস্ট্রেশনের ফটোকপি',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'মালামালের ওজন ও বিবরণ সংবলিত বুকিং ইনভয়েস',
          document_name_en: 'মালামালের ওজন ও বিবরণ সংবলিত বুকিং ইনভয়েস',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'রেলওয়ে স্টেশন পার্সেল অফিসে মালামাল ওজন করানো',
          instruction_bn: 'ট্রেন ছাড়ার ন্যূনতম ৩ ঘণ্টা পূর্বে পার্সেল অফিসে গিয়ে সরকারি ডিজিটাল স্কেলে মালামাল ওজন করান।',
          warning_bn: 'দালাল ছাড়াই সরাসরি রেলওয়ে বুকিং ক্লার্কের সাথে কথা বলুন।',
          action_url: 'https://railway.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কম্পিউটারাইজড পার্সেল ওয়ে-বিল (Way Bill) গ্রহণ',
          instruction_bn: 'ওজন ও দূরত্বের সরকারি হিসাব অনুযায়ী টাকা জমা দিয়ে সিলমোহরযুক্ত প্রিন্ট কপি (ওয়ে-বিল) গ্রহণ করুন।',
          warning_bn: 'রসিদে উল্লিখিত টাকার বেশি এক পয়সাও দেবেন না।',
          action_url: 'https://railway.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'গন্তব্য স্টেশনে ওয়ে-বিল দেখিয়ে মালামাল খালাস',
          instruction_bn: 'মালামাল গন্তব্য স্টেশনে পৌঁছালে প্রাপক মূল ওয়ে-বিল ও এনআইডি প্রদর্শন করে কোনো বকশিশ ছাড়াই মালামাল বুঝে নেবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://railway.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: মালামাল বুকিংয়ের সময় বুকিং কর্মচারীরা ওজন বেশি দেখিয়ে বা বাড়তি টাকার রসিদ ছাড়া ঘুষ দাবি করলে সাথে সাথে স্টেশন মাস্টার বা রেলওয়ে নিরাপত্তা বাহিনী (RNB) কমান্ড্যান্টকে অবহিত করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://railway.gov.bd'
    }
  ]
};
