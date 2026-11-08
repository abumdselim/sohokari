import { ServiceRecord } from '../../types/service';

export const courtJudgmentDecreeCertifiedCopyService: ServiceRecord = {
  id: 'bd-court-judgment-decree-certified-copy',
  slug: 'bd-court-judgment-decree-certified-copy',
  category_id: 'legal_judiciary',
  name_bn: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা',
  name_en: 'Court Judgment Order & Decree Certified Copy Extraction Official Guide',
  responsible_ministry_bn: 'আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা',
  responsible_ministry_en: 'আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা',
  responsible_agency_bn: 'আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা',
  responsible_agency_en: 'আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা',
  visiting_office_level: 'district',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lawjusticediv.gov.bd',
  legal_basis: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'court judgment order & decree certified copy extraction official guide', language: 'en', weight: 1.0 },
    { alias: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন', language: 'bn', weight: 0.95 },
    { alias: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন ফি', language: 'bn', weight: 0.95 },
    { alias: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'court judgment decree certified copy', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-court-judgment-decree-certified-copy-standard',
      variant_name_bn: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Court Judgment Order & Decree Certified Copy Extraction Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'নকলখানা তল্লাশি ফি (প্রতি মোকদ্দমা)',
          fee_type_en: 'নকলখানা তল্লাশি ফি (প্রতি মোকদ্দমা)',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: 'মামলার রেকর্ড খোঁজার সরকারি ফি ১০ টাকা।'
        },
        {
          fee_type_bn: 'প্রতি ফোলিও সরকারি কোর্ট ফি',
          fee_type_en: 'প্রতি ফোলিও সরকারি কোর্ট ফি',
          amount_bdt: 5.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি পৃষ্ঠার অনুলিপিতে সরকার নির্ধারিত ফোলিও ফি।'
        },
        {
          fee_type_bn: 'জরুরি নকল ফি',
          fee_type_en: 'জরুরি নকল ফি',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'জরুরি ভিত্তিতে নকল উত্তোলনে প্রযোজ্য।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আদালতের নির্ধারিত নকলের আবেদন ফরম (ফরম নং-সি)',
          document_name_en: 'আদালতের নির্ধারিত নকলের আবেদন ফরম (ফরম নং-সি)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মামলা নম্বর, পক্ষগণের নাম ও আদেশের তারিখ',
          document_name_en: 'মামলা নম্বর, পক্ষগণের নাম ও আদেশের তারিখ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নকলখানা কাউন্টারে আবেদন দাখিল',
          instruction_bn: 'জেলা জজ কোর্টের নকলখানায় গিয়ে নির্ধারিত ফরমে মামলা নম্বর ও আদেশের তারিখ লিখে কোর্ট ফি লাগিয়ে জমা দিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি নকলখানা রিসিভিং কাউন্টারে স্লিপ জমা দিন।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ফোলিও হিসাব ও স্ট্যাম্প সংযোজন',
          instruction_bn: 'নকলখানা নোটিশ বোর্ডে কত ফোলিও স্ট্যাম্প লাগবে তার তালিকা টানিয়ে দেবে। হিসাব অনুযায়ী ফোলিও জমা দিয়ে রসিদ নিন।',
          warning_bn: 'রসিদে উল্লিখিত তারিখেই নকল পাওয়ার কথা।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সিলমোহরকৃত সার্টিফাইড নকল গ্রহণ',
          instruction_bn: 'তুলনাকারী ও প্রধান নকলনবীশের সিলমোহর এবং স্বাক্ষরযুক্ত আসল সার্টিফাইড কপি বুঝে নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lawjusticediv.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: নকলখানা থেকে নকল নিতে কোনো কর্মচারীকে বাড়তি বকশিশ বা দালাল ধরা সম্পূর্ণ বেআইনি। কোনো কর্মকর্তা নকল আটকে রাখলে সরাসরি জেলা জজ আদালতের নাজির বা প্রশাসনিক কর্মকর্তার নিকট লিখিত অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lawjusticediv.gov.bd'
    }
  ]
};
