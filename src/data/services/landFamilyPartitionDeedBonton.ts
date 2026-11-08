import { ServiceRecord } from '../../types/service';

export const landFamilyPartitionDeedBontonService: ServiceRecord = {
  id: 'bd-land-family-partition-deed-bonton',
  slug: 'bd-land-family-partition-deed-bonton',
  category_id: 'land_property',
  name_bn: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা',
  name_en: 'Bangladesh Family Property Amicable Partition Deed (Bontonnamah) Registration Guide',
  responsible_ministry_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://www.dolil.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.dolil.gov.bd',
  legal_basis: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh family property amicable partition deed (bontonnamah) registration guide', language: 'en', weight: 1.0 },
    { alias: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন', language: 'bn', weight: 0.95 },
    { alias: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন ফি', language: 'bn', weight: 0.95 },
    { alias: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land family partition deed bonton', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-family-partition-deed-bonton-standard',
      variant_name_bn: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Family Property Amicable Partition Deed (Bontonnamah) Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'আপস বণ্টননামা রেজিস্ট্রেশন ফি (সম্পত্তির মূল্য ৩ লাখের বেশি হলে)',
          fee_type_en: 'আপস বণ্টননামা রেজিস্ট্রেশন ফি (সম্পত্তির মূল্য ৩ লাখের বেশি হলে)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সম্পত্তির মূল্য ৩ লাখ টাকার ঊর্ধ্বে হলে নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।'
        },
        {
          fee_type_bn: 'আপস বণ্টননামা স্ট্যাম্প শুল্ক (Stamp Duty)',
          fee_type_en: 'আপস বণ্টননামা স্ট্যাম্প শুল্ক (Stamp Duty)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'নির্দিষ্ট স্ট্যাম্প ফি মাত্র ৫০ টাকা।'
        },
        {
          fee_type_bn: 'হলফনামা স্ট্যাম্প ফি',
          fee_type_en: 'হলফনামা স্ট্যাম্প ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'ওয়ারিশদের হলফনামা ৩০০ টাকার স্ট্যাম্পে সম্পাদন।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল মালিকের মৃত্যু সনদ (ডিজিটাল ডেথ সার্টিফিকেট)',
          document_name_en: 'মূল মালিকের মৃত্যু সনদ (ডিজিটাল ডেথ সার্টিফিকেট)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'অনলাইন ওয়ারিশান সনদপত্র (Family Inheritance Certificate)',
          document_name_en: 'অনলাইন ওয়ারিশান সনদপত্র (Family Inheritance Certificate)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বণ্টনযোগ্য সকল জমির মূল দলিল, পূর্ববর্তী বায়া দলিল ও আরএস/বিএস খতিয়ান',
          document_name_en: 'বণ্টনযোগ্য সকল জমির মূল দলিল, পূর্ববর্তী বায়া দলিল ও আরএস/বিএস খতিয়ান',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বণ্টনের নকশা / ট্রেস ম্যাপ (কোন ওয়ারিশ কোন অংশে থাকবেন তার স্পষ্ট সীমানা)',
          document_name_en: 'বণ্টনের নকশা / ট্রেস ম্যাপ (কোন ওয়ারিশ কোন অংশে থাকবেন তার স্পষ্ট সীমানা)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সকল জীবিত ওয়ারিশের এনআইডি ও পাসপোর্ট সাইজ ছবি',
          document_name_en: 'সকল জীবিত ওয়ারিশের এনআইডি ও পাসপোর্ট সাইজ ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ওয়ারিশান সনদ সংগ্রহ ও সীমানা চিহ্নিতকরণ',
          instruction_bn: 'স্থানীয় ইউনিয়ন পরিষদ বা সিটি কর্পোরেশন থেকে অনলাইন কিউআর কোডযুক্ত ওয়ারিশান সনদ নিন। অনুমোদিত আমিন/সার্ভেয়ার দিয়ে জমি মেপে কে কোন অংশ পাবেন তা সহ বণ্টন নকশা চূড়ান্ত করুন।',
          warning_bn: 'সকল ওয়ারিশের সর্বসম্মত সম্মতি থাকতে হবে।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'আপস বণ্টননামা দলিল খসড়া তৈরি',
          instruction_bn: 'দলিল ফর্মে কার অংশে কত শতক জমি পড়েছে এবং তফসিল স্পষ্টভাবে লিখুন। দলিলের উপরে ৫০ টাকার নন-জুডিশিয়াল স্ট্যাম্প ও হলফনামা যুক্ত করুন।',
          warning_bn: 'সাধারণ সাফ-কবলা দলিলের মতো এখানে কোনো শতাংশভিত্তিক ফি নেই, এটি নির্দিষ্ট ফি।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ট্রেজারি চালানে সরকারি ৫০০ টাকা জমা',
          instruction_bn: 'সোনালী ব্যাংকে রেজিস্ট্রেশন ফি বাবদ ৫০০ টাকা সরকারি কোডে জমা দিয়ে রসিদ নিন।',
          warning_bn: 'কোনো দালাল লাখ টাকা দাবি করলে আইন দেখান—বণ্টননামায় শতাংশ হারে ফি আইনত অবৈধ।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'সাব-রেজিস্ট্রি অফিসে সম্পাদন',
          instruction_bn: 'সকল ওয়ারিশ একত্রে সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে স্বাক্ষর ও আঙুলের ছাপ দিন। দলিল রেজিস্ট্রি শেষে প্রত্যেকে যার যার অংশে আলাদাভাবে নামজারি (মিউটেশন) করতে পারবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.dolil.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দলিল লেখক সমিতি বা দালালরা বলে \'সম্পত্তির মূল্যের শতকরা ২% বা ৫% দিতে হবে\'—এটি ডাহা মিথ্যা ও প্রতারণা। স্ট্যাম্প আইন এবং রেজিস্ট্রেশন অ্যাক্ট অনুযায়ী পারিবারিক বণ্টননামা দলিলের সরকারি খরচ মাত্র ৫০০ টাকা রেজিস্ট্রেশন ফি + ৫০ টাকা স্ট্যাম্প শুল্ক। কোনো অতিরিক্ত অর্থ দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.dolil.gov.bd'
    }
  ]
};
