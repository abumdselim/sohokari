import { ServiceRecord } from '../../types/service';

export const familyCourtDenmohorChildSupportService: ServiceRecord = {
  id: 'bd-family-court-denmohor-child-support',
  slug: 'bd-family-court-denmohor-child-support',
  category_id: 'legal_judiciary',
  name_bn: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা',
  name_en: 'Family Court & Arbitration Council Denmohor & Child Maintenance Official Guide',
  responsible_ministry_bn: 'আইন ও বিচার বিভাগ ও স্থানীয় সরকার',
  responsible_ministry_en: 'আইন ও বিচার বিভাগ ও স্থানীয় সরকার',
  responsible_agency_bn: 'আইন ও বিচার বিভাগ ও স্থানীয় সরকার',
  responsible_agency_en: 'আইন ও বিচার বিভাগ ও স্থানীয় সরকার',
  visiting_office_level: 'district',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lawjusticediv.gov.bd',
  legal_basis: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'family court & arbitration council denmohor & child maintenance official guide', language: 'en', weight: 1.0 },
    { alias: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায়', language: 'bn', weight: 0.95 },
    { alias: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় ফি', language: 'bn', weight: 0.95 },
    { alias: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'family court denmohor child support', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-family-court-denmohor-child-support-standard',
      variant_name_bn: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Family Court & Arbitration Council Denmohor & Child Maintenance Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 180,
      fees: [
        {
          fee_type_bn: 'পারিবারিক আদালত আরজি কোর্ট ফি',
          fee_type_en: 'পারিবারিক আদালত আরজি কোর্ট ফি',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'পারিবারিক আদালতে দেনমোহর বা ভরণপোষণ মামলার কোর্ট ফি ফিক্সড মাত্র ৫০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড নকল',
          document_name_en: 'মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড নকল',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সন্তানের জন্ম নিবন্ধন সনদ (ভরণপোষণের দাবির ক্ষেত্রে)',
          document_name_en: 'সন্তানের জন্ম নিবন্ধন সনদ (ভরণপোষণের দাবির ক্ষেত্রে)',
          format_requirement: 'digital_scan',
          is_mandatory: false
        },
        {
          document_name_bn: 'তালাকের নোটিশ বা বিচ্ছেদের প্রমাণপত্র (যদি বিচ্ছেদ হয়ে থাকে)',
          document_name_en: 'তালাকের নোটিশ বা বিচ্ছেদের প্রমাণপত্র (যদি বিচ্ছেদ হয়ে থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'স্বামীর আর্থিক সামর্থ্য ও কর্মস্থলের বিবরণ',
          document_name_en: 'স্বামীর আর্থিক সামর্থ্য ও কর্মস্থলের বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলরে শালিসির আবেদন',
          instruction_bn: 'প্রথমে সংশ্লিষ্ট ইউপি চেয়ারম্যান বা মেয়রের শালিসি কাউন্সিলে ভরণপোষণ ও দেনমোহর মেটানোর জন্য আবেদন করতে পারেন।',
          warning_bn: 'শালিসে না মানলে পারিবারিক আদালতে সরাসরি যাওয়া যায়।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পারিবারিক আদালতে ৫০ টাকার কোর্ট ফি দিয়ে মামলা দায়ের',
          instruction_bn: 'স্ত্রী যে এলাকায় বসবাস করেন সেই এলাকার পারিবারিক আদালতে আরজি দাখিল করুন (লিগ্যাল এইডের ফ্রি আইনজীবী নেওয়া যায়)।',
          warning_bn: '৫০ টাকার বেশি কোর্ট ফি লাগে না।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আদালতের রায় ও ডিক্রি জারি',
          instruction_bn: 'আদালত দেনমোহর ও সন্তানের মাসিক খরচ নির্ধারণ করে রায় দেবেন। স্বামী টাকা না দিলে দেওয়ানি জেলে প্রেরণ বা সম্পত্তি ক্রোকের আদেশ জারি হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lawjusticediv.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দেনমোহর নারীর ধর্মীয় ও আইনি মৌলিক অধিকার। কোনো দালাল বা মধ্যস্থতাকারী দেনমোহর মাফ করিয়ে দেওয়ার মিথ্যা চাপ প্রয়োগ করতে পারে না। প্রয়োজনে জাতীয় হেল্পলাইন ১০৯ অথবা লিগ্যাল এইড ১৬৪৩০ এ সহায়তা নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lawjusticediv.gov.bd'
    }
  ]
};
