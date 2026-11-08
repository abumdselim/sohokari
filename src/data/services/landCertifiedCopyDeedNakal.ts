import { ServiceRecord } from '../../types/service';

export const landCertifiedCopyDeedNakalService: ServiceRecord = {
  id: 'bd-land-certified-copy-deed-nakal',
  slug: 'bd-land-certified-copy-deed-nakal',
  category_id: 'land_property',
  name_bn: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা',
  name_en: 'Bangladesh Sub-Registry Certified Copy of Registered Deed (Nakal Guide)',
  responsible_ministry_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://www.dolil.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.dolil.gov.bd',
  legal_basis: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh sub-registry certified copy of registered deed (nakal guide)', language: 'en', weight: 1.0 },
    { alias: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ', language: 'bn', weight: 0.95 },
    { alias: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ ফি', language: 'bn', weight: 0.95 },
    { alias: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land certified copy deed nakal', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-certified-copy-deed-nakal-standard',
      variant_name_bn: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Sub-Registry Certified Copy of Registered Deed (Nakal Guide) (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'দলিল তল্লাশি ফি (Search Fee - ১ বছরের জন্য)',
          fee_type_en: 'দলিল তল্লাশি ফি (Search Fee - ১ বছরের জন্য)',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: '১ বছরের বেশি তল্লাশির ক্ষেত্রে প্রতি বছরের জন্য অতিরিক্ত ১৫ টাকা'
        },
        {
          fee_type_bn: 'নকল ফি (Copy Fee - প্রতি ৩০০ শব্দে)',
          fee_type_en: 'নকল ফি (Copy Fee - প্রতি ৩০০ শব্দে)',
          amount_bdt: 24.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত শব্দভিত্তিক ফি'
        },
        {
          fee_type_bn: 'জরুরি নকল ফি (Urgent Fee)',
          fee_type_en: 'জরুরি নকল ফি (Urgent Fee)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'জরুরি ভিত্তিতে নকল চাইলে অতিরিক্ত ফি'
        },
        {
          fee_type_bn: 'সার্টিফাইড স্ট্যাম্প ফি',
          fee_type_en: 'সার্টিফাইড স্ট্যাম্প ফি',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'দলিল প্রমাণের আসল সিলমোহর ফি'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর এনআইডি (NID) নম্বর ও মোবাইল নম্বর',
          document_name_en: 'আবেদনকারীর এনআইডি (NID) নম্বর ও মোবাইল নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'দলিল নম্বর, রেজিস্ট্রির সাল ও সাব-রেজিস্ট্রি অফিসের নাম',
          document_name_en: 'দলিল নম্বর, রেজিস্ট্রির সাল ও সাব-রেজিস্ট্রি অফিসের নাম',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'দলিল নম্বর জানা না থাকলে দাতা ও গ্রহীতার নাম এবং মৌজার বিবরণ',
          document_name_en: 'দলিল নম্বর জানা না থাকলে দাতা ও গ্রহীতার নাম এবং মৌজার বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নির্ধারিত ফরমে আবেদন ও কোর্ট ফি সংযোজন',
          instruction_bn: 'সাব-রেজিস্ট্রি অফিসের নকল শাখায় নির্ধারিত আবেদন ফরমে দলিলের নম্বর, সাল ও জমির বিবরণ লিখুন। আবেদনের উপরে ২০ টাকার কোর্ট ফি লাগান।',
          warning_bn: 'দলিল নম্বর জানা থাকলে কোনো তল্লাশি ফি ছাড়া সরাসরি নকলের আবেদন করা যায়।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'নকল শাখায় জমা ও রসিদ গ্রহণ',
          instruction_bn: 'আবেদনপত্রটি সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিসের রেকর্ড কিপারের কাছে জমা দিন এবং একটি গ্রহণ রসিদ (টোকেন) নিন যাতে সম্ভাব্য ডেলিভারির তারিখ লেখা থাকবে।',
          warning_bn: 'কোনো মুহুরি বা নকলনবিশকে ব্যক্তিগতভাবে টাকা দেবেন না।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'নকলের মূল পাতার স্ট্যাম্প প্রদান ও নকল গ্রহণ',
          instruction_bn: 'দলিল যত পাতার হবে সেই অনুযায়ী সরকারি মূল্যের স্ট্যাম্প জমা দিয়ে সাব-রেজিস্ট্রারের স্বাক্ষর ও সিলযুক্ত আসল সার্টিফাইড নকল বুঝে নিন।',
          warning_bn: 'এই নকল কপি আদালত ও ব্যাংকে মূল দলিলের সমতুল্য হিসেবে গ্রহণযোগ্য।',
          action_url: 'http://www.dolil.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সাব-রেজিস্ট্রি অফিসের বাইরে ঘোরাঘুরি করা দালালরা নকল তুলে দেওয়ার নামে বিশাল অঙ্ক দাবি করে। আপনি নিজে সাব-রেজিস্ট্রি অফিসে ঢুকে সরাসরি রেকর্ড শাখায় ২০ টাকার কোর্ট ফি দিয়ে আবেদন করতে পারেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.dolil.gov.bd'
    }
  ]
};
