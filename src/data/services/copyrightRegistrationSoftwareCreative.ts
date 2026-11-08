import { ServiceRecord } from '../../types/service';

export const copyrightRegistrationSoftwareCreativeService: ServiceRecord = {
  id: 'bd-copyright-registration-software-creative',
  slug: 'bd-copyright-registration-software-creative',
  category_id: 'citizen_general',
  name_bn: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা',
  name_en: 'Bangladesh Copyright Office Software, Book & Creative Work Registration Guide',
  responsible_ministry_bn: 'বাংলাদেশ কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'http://www.copyrightoffice.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.copyrightoffice.gov.bd',
  legal_basis: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh copyright office software, book & creative work registration guide', language: 'en', weight: 1.0 },
    { alias: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ)', language: 'bn', weight: 0.95 },
    { alias: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) ফি', language: 'bn', weight: 0.95 },
    { alias: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'copyright registration software creative', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-copyright-registration-software-creative-standard',
      variant_name_bn: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Copyright Office Software, Book & Creative Work Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'সফটওয়্যার / কম্পিউটার প্রোগ্রাম / মোবাইল অ্যাপ কপিরাইট ফি',
          fee_type_en: 'সফটওয়্যার / কম্পিউটার প্রোগ্রাম / মোবাইল অ্যাপ কপিরাইট ফি',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'আইটি সফটওয়্যারের সরকারি রেজিস্ট্রেশন ফি মাত্র ২,০০০ টাকা (+১৫% ভ্যাট)।'
        },
        {
          fee_type_bn: 'সাহিত্যকর্ম / বই / পাণ্ডুলিপি কপিরাইট ফি',
          fee_type_en: 'সাহিত্যকর্ম / বই / পাণ্ডুলিপি কপিরাইট ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বই ও নাটকের সরকারি নির্দিষ্ট ফি ১,০০০ টাকা।'
        },
        {
          fee_type_bn: 'সঙ্গীতকর্ম ও অডিও-ভিডিও অ্যালবাম ফি',
          fee_type_en: 'সঙ্গীতকর্ম ও অডিও-ভিডিও অ্যালবাম ফি',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'গান ও ভিডিও অ্যালবামের সরকারি ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সফটওয়্যারের সোর্স কোড ও ইউজার ম্যানুয়াল (অথবা বই/গানের মূল কপি - ২ সেট)',
          document_name_en: 'সফটওয়্যারের সোর্স কোড ও ইউজার ম্যানুয়াল (অথবা বই/গানের মূল কপি - ২ সেট)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী/রচয়িতার জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারী/রচয়িতার জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্বত্বাধিকারীর অঙ্গীকারনামা (মৌলিক সৃষ্টির ঘোষণাপত্র)',
          document_name_en: 'স্বত্বাধিকারীর অঙ্গীকারনামা (মৌলিক সৃষ্টির ঘোষণাপত্র)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সরকারি ট্রেজারি চালানের মূল কপি',
          document_name_en: 'সরকারি ট্রেজারি চালানের মূল কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-কপিরাইট পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'http://www.copyrightoffice.gov.bd ওয়েবসাইটে যান। \'অনলাইন কপিরাইট আবেদন\' সিস্টেমে গিয়ে ফর্ম-২ পূরণ করুন।',
          warning_bn: 'কাজটি সম্পূর্ণ নিজের মৌলিক সৃষ্টি হতে হবে, অন্য কারো কাজ থেকে কপি করা যাবে না।',
          action_url: 'http://www.copyrightoffice.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সোনালী ব্যাংকে সরকারি চালান ফি জমা',
          instruction_bn: 'সফটওয়্যারের জন্য ২,০০০ টাকা বা বইয়ের জন্য ১,০০০ টাকা চালানে জমা দিয়ে রসিদ সিস্টেমে আপলোড করুন।',
          warning_bn: 'কোনো মধ্যস্থতাকারীকে অতিরিক্ত টাকা দেবেন না।',
          action_url: 'http://www.copyrightoffice.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'কপিরাইট রেজিস্ট্রারের চূড়ান্ত সনদ লাভ',
          instruction_bn: 'কপিরাইট পরীক্ষক যাচাই শেষে আপনাকে সরকারি সিলমোহরযুক্ত কপিরাইট রেজিস্ট্রেশন সার্টিফিকেট প্রদান করবেন যা রচয়িতার আজীবন এবং মৃত্যুর পর আরও ৬০ বছর পর্যন্ত কার্যকর থাকে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.copyrightoffice.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কপিরাইট সনদ সম্পূর্ণ আইনগত বিষয়। দালাল ছাড়াই যেকোনো প্রোগ্রামার বা লেখক ঘরে বসে অনলাইনে সরাসরি সরকারের কপিরাইট রেজিস্ট্রি থেকে নিজের সৃষ্টি নিরাপদ রাখতে পারেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'কপিরাইট নিবন্ধন (সফটওয়্যার, বই ও ক্রিয়েটিভ কাজ) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.copyrightoffice.gov.bd'
    }
  ]
};
