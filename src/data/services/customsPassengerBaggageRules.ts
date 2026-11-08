import { ServiceRecord } from '../../types/service';

export const customsPassengerBaggageRulesService: ServiceRecord = {
  id: 'bd-customs-passenger-baggage-rules',
  slug: 'bd-customs-passenger-baggage-rules',
  category_id: 'citizen_general',
  name_bn: 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড',
  name_en: 'Airport Baggage Rules Gold Mobile & Luggage Duty Free Allowance Guide',
  responsible_ministry_bn: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_ministry_en: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_bn: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_en: 'কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)',
  visiting_office_level: 'division',
  official_portal_url: 'https://nbr.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://nbr.gov.bd',
  legal_basis: 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড', language: 'bn', weight: 1.0 },
    { alias: 'airport baggage rules gold mobile & luggage duty free allowance guide', language: 'en', weight: 1.0 },
    { alias: 'customs passenger baggage rules', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-customs-passenger-baggage-rules-standard',
      variant_name_bn: 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড (সাধারণ আবেদন)',
      variant_name_en: 'Airport Baggage Rules Gold Mobile & Luggage Duty Free Allowance Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'স্বর্ণালংকার (সর্বোচ্চ ১১৭ গ্রাম বা ১০ ভরি পর্যন্ত)',
          fee_type_en: 'স্বর্ণালংকার (সর্বোচ্চ ১১৭ গ্রাম বা ১০ ভরি পর্যন্ত)',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ব্যক্তিগত ব্যবহারের স্বর্ণালংকারে কোনো ট্যাক্স নেই।'
        },
        {
          fee_type_bn: 'স্বর্ণের বার শুল্ক (প্রতি ১১.৬৬৪ গ্রাম বা ১ ভরি প্রতি)',
          fee_type_en: 'স্বর্ণের বার শুল্ক (প্রতি ১১.৬৬৪ গ্রাম বা ১ ভরি প্রতি)',
          amount_bdt: 4000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সর্বোচ্চ ২০ ভরি পর্যন্ত আনা যায়, প্রতি ভরিতে ৪,০০০ টাকা শুল্ক।'
        },
        {
          fee_type_bn: 'শুল্কমুক্ত মোবাইল ফোন',
          fee_type_en: 'শুল্কমুক্ত মোবাইল ফোন',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ব্যক্তিগত ব্যবহারের সর্বোচ্চ ২টি মোবাইল সম্পূর্ণ শুল্কমুক্ত।'
        }
      ],
      documents: [
        {
          document_name_bn: 'যাত্রীর মূল পাসপোর্ট ও আগমনী বোর্ডিং পাস',
          document_name_en: 'যাত্রীর মূল পাসপোর্ট ও আগমনী বোর্ডিং পাস',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্বর্ণ বার থাকলে কাস্টমস ডিক্লারেশন ফরম পূরণ',
          document_name_en: 'স্বর্ণ বার থাকলে কাস্টমস ডিক্লারেশন ফরম পূরণ',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'বিদেশ থেকে পণ্য ক্রয়ের মানি রিসিট (যদি থাকে)',
          document_name_en: 'বিদেশ থেকে পণ্য ক্রয়ের মানি রিসিট (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'শুল্কমুক্ত সীমার মধ্যে থাকলে গ্রিন চ্যানেল (Green Channel) ব্যবহার',
          instruction_bn: 'আপনার সাথে যদি শুল্কযোগ্য পণ্য না থাকে তবে কোনো কাস্টমস অফিসারকে টাকা না দিয়ে সরাসরি গ্রিন চ্যানেল দিয়ে বের হয়ে যান।',
          warning_bn: 'দালাল বা কোনো ব্যক্তির কথায় ভয় পাবেন না।',
          action_url: 'https://nbr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'স্বর্ণ বার বা শুল্কযোগ্য পণ্য থাকলে রেড চ্যানেলে ডিক্লারেশন',
          instruction_bn: 'স্বর্ণের বার থাকলে রেড চ্যানেলে গিয়ে কাস্টমস অফিসারের কাছে ডিক্লেয়ার করুন এবং সরকারি রসিদে প্রতি ভরিতে ৪,০০০ টাকা শুল্ক পরিশোধ করুন।',
          warning_bn: 'অবশ্যই কাস্টমসের সিলযুক্ত অফিশিয়াল ব্যাংক রসিদ নেবেন।',
          action_url: 'https://nbr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'কাস্টমস ক্লিয়ারেন্স ও লাগেজ বুঝে নেওয়া',
          instruction_bn: 'রসিদ পাওয়ার পর আপনার ব্যাগেজ নিয়ে বিমানবন্দরে কোনো উৎকোচ ছাড়াই নিরাপদে বের হয়ে আসুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nbr.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিমানবন্দরে কোনো ট্রলি বয়, দালাল বা অসাধু কর্মকর্তা লাগেজ আটকে দেওয়ার ভয় দেখিয়ে টাকা চাইলে সোজা এয়ারপোর্ট আর্মড পুলিশ ব্যাটালিয়ন (APBn) বা বিমানবন্দর ম্যাজিস্ট্রেট হেল্পডেস্কে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড অফিসিয়াল পোর্টাল',
      source_url: 'https://nbr.gov.bd'
    }
  ]
};
