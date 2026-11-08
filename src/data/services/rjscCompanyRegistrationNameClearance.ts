import { ServiceRecord } from '../../types/service';

export const rjscCompanyRegistrationNameClearanceService: ServiceRecord = {
  id: 'bd-rjsc-company-registration-name-clearance',
  slug: 'bd-rjsc-company-registration-name-clearance',
  category_id: 'business_trade',
  name_bn: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা',
  name_en: 'Bangladesh RJSC Private Limited Company Registration & Name Clearance Guide',
  responsible_ministry_bn: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়',
  responsible_ministry_en: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_bn: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_en: 'যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://roc.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://roc.gov.bd',
  legal_basis: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh rjsc private limited company registration & name clearance guide', language: 'en', weight: 1.0 },
    { alias: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন', language: 'bn', weight: 0.95 },
    { alias: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন ফি', language: 'bn', weight: 0.95 },
    { alias: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'rjsc company registration name clearance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-rjsc-company-registration-name-clearance-standard',
      variant_name_bn: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh RJSC Private Limited Company Registration & Name Clearance Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 5,
      fees: [
        {
          fee_type_bn: 'নাম ছাড়পত্র ফি (Name Clearance Fee)',
          fee_type_en: 'নাম ছাড়পত্র ফি (Name Clearance Fee)',
          amount_bdt: 230.0,
          effective_date: '2022-01-01',
          notes_bn: 'মূল ফি ২০০ টাকা + ১৫% ভ্যাট ৩০ টাকা = ২৩০ টাকা।'
        },
        {
          fee_type_bn: 'কোম্পানি রেজিস্ট্রেশন ফি (অনূর্ধ্ব ২০ লাখ টাকা মূলধন)',
          fee_type_en: 'কোম্পানি রেজিস্ট্রেশন ফি (অনূর্ধ্ব ২০ লাখ টাকা মূলধন)',
          amount_bdt: 4370.0,
          effective_date: '2022-01-01',
          notes_bn: 'অনুমোদিত মূলধনের ভিত্তিতে সরকারি স্লাব অনুযায়ী নির্ধারিত।'
        },
        {
          fee_type_bn: 'ডিজিটাল স্ট্যাম্প শুল্ক (MoA & AoA)',
          fee_type_en: 'ডিজিটাল স্ট্যাম্প শুল্ক (MoA & AoA)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মেমোরেন্ডাম ও আর্টিকেলের সরকারি স্ট্যাম্প।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সকল শেয়ারহোল্ডার ও পরিচালকদের এনআইডি ও টিআইএন সার্টিফিকেট',
          document_name_en: 'সকল শেয়ারহোল্ডার ও পরিচালকদের এনআইডি ও টিআইএন সার্টিফিকেট',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'কোম্পানির সংঘস্মারক (MoA) ও সংঘবিধি (AoA)',
          document_name_en: 'কোম্পানির সংঘস্মারক (MoA) ও সংঘবিধি (AoA)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'কোম্পানির নিবন্ধিত কার্যালয়ের ঠিকানার প্রমাণপত্র',
          document_name_en: 'কোম্পানির নিবন্ধিত কার্যালয়ের ঠিকানার প্রমাণপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আরজেএসসি পোর্টালে নাম ছাড়পত্র (Name Clearance) আবেদন',
          instruction_bn: 'https://roc.gov.bd ওয়েবসাইটে গিয়ে ইউজারের একাউন্ট খুলুন। আপনার প্রস্তাবিত কোম্পানির নাম দিয়ে সার্চ করে ২৩০ টাকা ফি পরিশোধ করুন। ২৪ ঘণ্টার মধ্যে ডিজিটাল নাম ছাড়পত্র চলে আসবে।',
          warning_bn: 'নামটি যেন বিদ্যমান কোনো কোম্পানির সাথে মিলে না যায়।',
          action_url: 'https://roc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'MoA ও AoA তৈরি ও ফরম পূরণ',
          instruction_bn: 'অনলাইনে ফর্ম-১, ফর্ম-৬, ফর্ম-৯, ফর্ম-১০ এবং ফর্ম-১২ পূরণ করুন। মেমোরেন্ডাম ও আর্টিকেল আপলোড করুন।',
          warning_bn: 'RJSC-র স্ট্যান্ডার্ড টেমপ্লেট ব্যবহার করলে অতিরিক্ত আইনজীবী ফি লাগে না।',
          action_url: 'https://roc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি ফি পেমেন্ট ও সার্টিফিকেট লাভ',
          instruction_bn: 'মূলধনের উপর সরকারি ফি সোনালী ব্যাংক বা অনলাইনে জমা দিন। আরজেএসসি কর্মকর্তা তথ্য যাচাই করে ডিজিটাল স্বাক্ষরিত কোম্পানি নিগমবদ্ধকরণ সনদ (Certificate of Incorporation) সিস্টেমে জারি করবেন, যা সাথে সাথে ডাউনলোড করা যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://roc.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: আরজেএসসি ভবনে ঘুরঘুর করা মধ্যস্থতাকারীরা কোম্পানি রেজিস্ট্রেশনের জন্য বিপুল অঙ্কের চাঁদা দাবি করে। পুরো প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং ডিজিটালি পরিচালিত হয়। ঘরে বসেই এটি সম্পন্ন করা যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://roc.gov.bd'
    }
  ]
};
