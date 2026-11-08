import { ServiceRecord } from '../../types/service';

export const landDeedRegistrationFeesBreakdownService: ServiceRecord = {
  id: 'bd-land-deed-registration-fees-breakdown',
  slug: 'bd-land-deed-registration-fees-breakdown',
  category_id: 'land_property',
  name_bn: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা',
  name_en: 'Bangladesh Sub-Registry Land Deed Registration Official Fees Breakdown',
  responsible_ministry_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://www.dolil.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.dolil.gov.bd',
  legal_basis: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh sub-registry land deed registration official fees breakdown', language: 'en', weight: 1.0 },
    { alias: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি ফি', language: 'bn', weight: 0.95 },
    { alias: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land deed registration fees breakdown', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-deed-registration-fees-breakdown-standard',
      variant_name_bn: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Sub-Registry Land Deed Registration Official Fees Breakdown (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 52,
      fees: [
        {
          fee_type_bn: 'রেজিস্ট্রেশন ফি (Registration Fee)',
          fee_type_en: 'রেজিস্ট্রেশন ফি (Registration Fee)',
          amount_bdt: 1.0,
          effective_date: '2022-01-01',
          notes_bn: 'দলিলের মোট মূল্যের ১% (নূন্যতম ১০০ টাকা)'
        },
        {
          fee_type_bn: 'স্ট্যাম্প শুল্ক (Stamp Duty)',
          fee_type_en: 'স্ট্যাম্প শুল্ক (Stamp Duty)',
          amount_bdt: 1.5,
          effective_date: '2022-01-01',
          notes_bn: 'দলিলের মোট মূল্যের ১.৫%'
        },
        {
          fee_type_bn: 'স্থানীয় সরকার কর (Local Govt Tax)',
          fee_type_en: 'স্থানীয় সরকার কর (Local Govt Tax)',
          amount_bdt: 3.0,
          effective_date: '2022-01-01',
          notes_bn: 'সিটি কর্পোরেশন/পৌরসভায় ৩%, ইউনিয়ন পরিষদে ২%'
        },
        {
          fee_type_bn: 'উৎস কর / এআইটি (AIT - আয়কর কর্ড)',
          fee_type_en: 'উৎস কর / এআইটি (AIT - আয়কর কর্ড)',
          amount_bdt: 3.0,
          effective_date: '2022-01-01',
          notes_bn: 'জমির এলাকাভিত্তিক ১% থেকে সর্বোচ্চ ৫% পর্যন্ত (গ্রামাঞ্চলে সাধারণত ১-২%)'
        },
        {
          fee_type_bn: 'হলফনামা স্ট্যাম্প ও এন-ফি',
          fee_type_en: 'হলফনামা স্ট্যাম্প ও এন-ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'হলফনামা ৩০০ টাকার স্ট্যাম্প + এন ফি প্রতি ৩০০ শব্দে ২৪ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'প্রস্তুতকৃত সাফ-কবলা দলিল ও হলফনামা',
          document_name_en: 'প্রস্তুতকৃত সাফ-কবলা দলিল ও হলফনামা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিক্রেতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি',
          document_name_en: 'বিক্রেতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) দাখিলা',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) দাখিলা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ রঙিন ছবি',
          document_name_en: 'ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ রঙিন ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ট্রেজারি চালান ও স্থানীয় সরকার পে-অর্ডারের মূল কপি',
          document_name_en: 'ট্রেজারি চালান ও স্থানীয় সরকার পে-অর্ডারের মূল কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'জমির সরকারি মৌজা রেট যাচাই',
          instruction_bn: 'dolil.gov.bd বা সাব-রেজিস্ট্রি অফিসে গিয়ে সংশ্লিষ্ট মৌজার সরকার নির্ধারিত সর্বনিম্ন বাজারমূল্য (মৌজা রেট) জানুন। দলিলের মূল্য এর কম হতে পারবে না।',
          warning_bn: 'দালালরা মৌজা রেটের হিসাব লুকিয়ে বাড়তি টাকা দাবি করে।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ব্যাংক চালান ও পে-অর্ডার তৈরি',
          instruction_bn: 'মৌজা মূল্যের উপর ১% রেজিস্ট্রেশন ফি, ১.৫% স্ট্যাম্প শুল্ক, স্থানীয় সরকার কর (২-৩%) সোনালী ব্যাংকে চালানের মাধ্যমে জমা দিয়ে মূল রসিদ নিন।',
          warning_bn: 'সকল ফি সরকারি চালানে সরাসরি সোনালী ব্যাংক বা বাংলাদেশ ব্যাংকে জমা হয়।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সাব-রেজিস্ট্রারের এজলাসে দলিল উপস্থাপন ও বায়োমেট্রিক',
          instruction_bn: 'ক্রেতা, বিক্রেতা ও সাক্ষীরা সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে ফিঙ্গারপ্রিন্ট ও স্বাক্ষর প্রদান করুন। কোনো কর্মকর্তা বা কর্মচারীকে বাড়তি ঘুষ দেবেন না।',
          warning_bn: 'সাব-রেজিস্ট্রার দলিল যাচাই করে স্বাক্ষর করবেন।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: '৫২ ধারার রসিদ গ্রহণ ও মূল দলিল উত্তোলন',
          instruction_bn: 'রেজিস্ট্রি সম্পন্ন হলে সাব-রেজিস্ট্রি অফিস থেকে ৫২ ধারার মূল প্রাপ্তি রসিদ বুঝে নিন। পরবর্তীতে এই রসিদ জমা দিয়ে মূল রেজিস্ট্রিকৃত দলিল তুলতে পারবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.dolil.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দলিল লেখক বা নকলনবিশরা সাব-রেজিস্ট্রারের নামে \'অফিস খরচ\' বা \'টেবিল কালেকশন\' হিসেবে ৫০ হাজার থেকে লাখ টাকা পর্যন্ত দাবি করে, যা সম্পূর্ণ অবৈধ ও ঘুষ। সরকারি চালানের রসিদের বাইরে কোনো ব্যক্তিকে নগদ টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.dolil.gov.bd'
    }
  ]
};
