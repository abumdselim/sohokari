import { ServiceRecord } from '../../types/service';

export const trafficProsecutionFineOnlinePaymentService: ServiceRecord = {
  id: 'bd-traffic-prosecution-fine-online-payment',
  slug: 'bd-traffic-prosecution-fine-online-payment',
  category_id: 'transport_brta',
  name_bn: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা',
  name_en: 'Traffic Police Prosecution Fine & Wrecker Bill Online Settlement Guide',
  responsible_ministry_bn: 'বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)',
  responsible_ministry_en: 'বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)',
  responsible_agency_bn: 'বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)',
  responsible_agency_en: 'বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://police.gov.bd',
  helpline_number: '999',
  grievance_channel: 'https://police.gov.bd',
  legal_basis: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'traffic police prosecution fine & wrecker bill online settlement guide', language: 'en', weight: 1.0 },
    { alias: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি', language: 'bn', weight: 0.95 },
    { alias: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'traffic prosecution fine online payment', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-traffic-prosecution-fine-online-payment-standard',
      variant_name_bn: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Traffic Police Prosecution Fine & Wrecker Bill Online Settlement Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'আইন অনুযায়ী ধার্যকৃত জরিমানা (ই-প্রসিকিউশন স্লিপ অনুযায়ী)',
          fee_type_en: 'আইন অনুযায়ী ধার্যকৃত জরিমানা (ই-প্রসিকিউশন স্লিপ অনুযায়ী)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'স্লিপে উল্লিখিত ধারা অনুযায়ী ৫০০ টাকা থেকে ৫,০০০ টাকা জরিমানা।'
        },
        {
          fee_type_bn: 'এমএফএস গেটওয়ে সার্ভিস চার্জ',
          fee_type_en: 'এমএফএস গেটওয়ে সার্ভিস চার্জ',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: '১% বা সর্বোচ্চ ১০-১৫ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ট্রাফিক পুলিশের পিওএস মেশিন থেকে প্রদত্ত ই-প্রসিকিউশন স্লিপ (মামলা স্লিপ)',
          document_name_en: 'ট্রাফিক পুলিশের পিওএস মেশিন থেকে প্রদত্ত ই-প্রসিকিউশন স্লিপ (মামলা স্লিপ)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আটককৃত ডকুমেন্টস (যদি ড্রাইভিং লাইসেন্স বা গাড়ির কাগজ জব্দ থাকে)',
          document_name_en: 'আটককৃত ডকুমেন্টস (যদি ড্রাইভিং লাইসেন্স বা গাড়ির কাগজ জব্দ থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মামলা স্লিপের কিউআর কোড বা রেফারেন্স নম্বর দেখা',
          instruction_bn: 'ট্রাফিক পুলিশ যে স্লিপ দিয়েছে তাতে প্রসিকিউশন নম্বর ও জরিমানার পরিমাণ লেখা থাকবে।',
          warning_bn: 'সড়কে কোনো পুলিশকে নগদে টাকা দেবেন না।',
          action_url: 'https://police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বিকাশ/ইউক্যাশ/ইউপে ট্রাফিক ফাইন অপশনে পেমেন্ট',
          instruction_bn: 'বিকাশ বা ইউপে অ্যাপে \'Traffic Fine\' অপশনে গিয়ে মামলা নম্বরটি লিখুন। নাম ও জরিমানার অংক যাচাই করে পিন দিয়ে পরিশোধ করুন।',
          warning_bn: 'পেমেন্ট সফল হলে ট্রানজেকশন আইডি সম্বলিত এসএমএস আসবে।',
          action_url: 'https://police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'কাগজপত্র ফেরত গ্রহণ',
          instruction_bn: 'পেমেন্ট কনফার্মেশন মেসেজটি সংশ্লিষ্ট ট্রাফিক সার্জেন্ট বা ট্রাফিক জোনের এডিসি/এসি অফিসে দেখালে সাথে সাথে জব্দকৃত ড্রাইভিং লাইসেন্স বা কাগজ বুঝিয়ে দেওয়া হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://police.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ট্রাফিক মামলা দ্রুত ছাড়িয়ে দেওয়ার কথা বলে কোনো তৃতীয় পক্ষকে টাকা দেবেন না। সম্পূর্ণ প্রক্রিয়া ডিজিটাল ও স্বচ্ছ। অনলাইনে নির্ধারিত সরকারি ফাইন দেওয়ার সাথে সাথে সার্ভারে মামলা স্বয়ংক্রিয়ভাবে ডিসপোজড হয়ে যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://police.gov.bd'
    }
  ]
};
