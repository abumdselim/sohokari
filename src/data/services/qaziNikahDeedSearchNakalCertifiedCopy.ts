import { ServiceRecord } from '../../types/service';

export const qaziNikahDeedSearchNakalCertifiedCopyService: ServiceRecord = {
  id: 'bd-qazi-nikah-deed-search-nakal-certified-copy',
  slug: 'bd-qazi-nikah-deed-search-nakal-certified-copy',
  category_id: 'legal_judiciary',
  name_bn: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা',
  name_en: 'Qazi Office Marriage & Divorce Register Search and Nikahnama Certified Copy Guide',
  responsible_ministry_bn: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lawjusticediv.gov.bd',
  legal_basis: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'qazi office marriage & divorce register search and nikahnama certified copy guide', language: 'en', weight: 1.0 },
    { alias: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন', language: 'bn', weight: 0.95 },
    { alias: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন ফি', language: 'bn', weight: 0.95 },
    { alias: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'qazi nikah deed search nakal certified copy', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-qazi-nikah-deed-search-nakal-certified-copy-standard',
      variant_name_bn: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Qazi Office Marriage & Divorce Register Search and Nikahnama Certified Copy Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'নিকাহ রেজিস্ট্রি বালাম বহি তল্লাশি ফি (প্রতি বছর)',
          fee_type_en: 'নিকাহ রেজিস্ট্রি বালাম বহি তল্লাশি ফি (প্রতি বছর)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিবাহের বছর জানা থাকলে ৫০ টাকা; অজানা থাকলে প্রতি বছরের জন্য ৫০ টাকা তলবানা।'
        },
        {
          fee_type_bn: 'কাবিননামা সার্টিফাইড নকল ফি (প্রতি পৃষ্ঠার হিসাব)',
          fee_type_en: 'কাবিননামা সার্টিফাইড নকল ফি (প্রতি পৃষ্ঠার হিসাব)',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত সরকারি রশিদে সর্বোচ্চ ১০০-২০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বর ও কনের পূর্ণ নাম ও পিতা-মাতার নাম',
          document_name_en: 'বর ও কনের পূর্ণ নাম ও পিতা-মাতার নাম',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিবাহ বা তালাকের সম্ভাব্য তারিখ ও সন',
          document_name_en: 'বিবাহ বা তালাকের সম্ভাব্য তারিখ ও সন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'যে এলাকায় বিবাহ হয়েছিল সেই কাজী অফিসের অবস্থান',
          document_name_en: 'যে এলাকায় বিবাহ হয়েছিল সেই কাজী অফিসের অবস্থান',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সংশ্লিষ্ট নিকাহ রেজিস্ট্রি (কাজি) অফিসে আবেদন',
          instruction_bn: 'বিবাহ যে এলাকায় হয়েছিল সেই এলাকার কাজি বরাবর আবেদন দিয়ে বালাম বহি তল্লাশির জন্য নির্ধারিত ৫০ টাকা ফি দিন।',
          warning_bn: 'অবশ্যই কাজির সরকারি ক্যাশ মেমো বা রশিদ গ্রহণ করবেন।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বালাম বহি থেকে মূল রেজিস্ট্রির নকল প্রস্তুত',
          instruction_bn: 'কাজি মূল বিবাহ রেজিস্ট্রি ভলিউম থেকে সরকারি ফরমে হুবহু বিবরণ লিখে স্বাক্ষর ও সিলমোহরযুক্ত করবেন।',
          warning_bn: 'কোনো দালাল বা মোহরারকে বাড়তি টাকা দেবেন না।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সিলমোহরযুক্ত কাবিননামার নকল গ্রহণ',
          instruction_bn: 'কাজি কর্তৃক প্রত্যায়িত মূল সার্টিফাইড কপি বুঝে নিন। এটি আদালতে ও পাসপোর্টে শতভাগ বৈধ হিসেবে গণ্য হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lawjusticediv.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কাজি যদি নকল কপি দিতে অস্বীকার করে বা ৫,০০০-১০,০০০ টাকা দাবি করে, তবে সরাসরি জেলা জজ আদালতের জেলা রেজিস্ট্রার (District Registrar) বরাবর লিখিত অভিযোগ দায়ের করুন। জেলা রেজিস্ট্রার কাজির লাইসেন্স বাতিলের ক্ষমতা রাখেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lawjusticediv.gov.bd'
    }
  ]
};
