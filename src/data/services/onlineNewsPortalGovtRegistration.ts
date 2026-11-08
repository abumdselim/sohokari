import { ServiceRecord } from '../../types/service';

export const onlineNewsPortalGovtRegistrationService: ServiceRecord = {
  id: 'bd-online-news-portal-govt-registration',
  slug: 'bd-online-news-portal-govt-registration',
  category_id: 'citizen_general',
  name_bn: 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা',
  name_en: 'Online News Portal & Newspaper Official Government Registration Guide',
  responsible_ministry_bn: 'তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_ministry_en: 'তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_agency_bn: 'তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_agency_en: 'তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://pressinform.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://pressinform.gov.bd',
  legal_basis: 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'online news portal & newspaper official government registration guide', language: 'en', weight: 1.0 },
    { alias: 'নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন', language: 'bn', weight: 0.95 },
    { alias: 'নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন ফি', language: 'bn', weight: 0.95 },
    { alias: 'নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'online news portal govt registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-online-news-portal-govt-registration-standard',
      variant_name_bn: 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Online News Portal & Newspaper Official Government Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 180,
      fees: [
        {
          fee_type_bn: 'অনলাইন নিউজ পোর্টাল প্রাথমিক নিবন্ধন ফি',
          fee_type_en: 'অনলাইন নিউজ পোর্টাল প্রাথমিক নিবন্ধন ফি',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'নিবন্ধন অনুমোদনের পর চালানের মাধ্যমে জমা।'
        },
        {
          fee_type_bn: 'বার্ষিক লাইসেন্স নবায়ন ফি',
          fee_type_en: 'বার্ষিক লাইসেন্স নবায়ন ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি বছর ৫,০০০ টাকা নবায়ন ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সম্পাদক ও প্রকাশকের জাতীয় পরিচয়পত্র (NID), ছবি ও শিক্ষাগত যোগ্যতার সনদ',
          document_name_en: 'সম্পাদক ও প্রকাশকের জাতীয় পরিচয়পত্র (NID), ছবি ও শিক্ষাগত যোগ্যতার সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ডোমেইন রেজিস্ট্রেশন ও হোস্টিংয়ের বৈধ মালিকানার চুক্তিপত্র',
          document_name_en: 'ডোমেইন রেজিস্ট্রেশন ও হোস্টিংয়ের বৈধ মালিকানার চুক্তিপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পত্রিকা বা পোর্টালের স্থায়ী অফিস ও সম্পাদকীয় সেটআপের প্রমাণপত্র',
          document_name_en: 'পত্রিকা বা পোর্টালের স্থায়ী অফিস ও সম্পাদকীয় সেটআপের প্রমাণপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          document_name_en: 'ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'তথ্য অধিদপ্তরে নির্ধারিত ফরমে আবেদন দাখিল',
          instruction_bn: 'তথ্য অধিদপ্তর (PID) বরাবর নির্ধারিত ফরমে পোর্টালের বিবরণ ও প্রকাশকের অঙ্গীকারনামাসহ আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সচিবালয়ে পিআইডি কাউন্টারে জমা দেওয়া যায়।',
          action_url: 'https://pressinform.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'স্বরাষ্ট্র মন্ত্রণালয় ও নিরাপত্তা গোয়েন্দা সংস্থার ছাড়পত্র',
          instruction_bn: 'মন্ত্রণালয় আবেদনটি পুলিশের স্পেশাল ব্রাঞ্চ (SB) ও এনএসআই-এর নিকট নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।',
          warning_bn: 'কোনো অসত্য বা বিভ্রান্তিকর তথ্য দেবেন না।',
          action_url: 'https://pressinform.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'চালান জমা ও সরকারি গেজেটভুক্ত নিবন্ধন সনদ গ্রহণ',
          instruction_bn: 'অনুমোদনপত্র প্রাপ্তির পর ১০,০০০ টাকার ট্রেজারি চালান জমা দিলে তথ্য ও সম্প্রচার মন্ত্রণালয় আনুষ্ঠানিক নিবন্ধন সনদ ইস্যু করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://pressinform.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সাংবাদিকতার নামে কার্ড বিক্রি করা বা কোনো দালাল চক্রের মাধ্যমে পোর্টাল নিবন্ধন করানোর প্রতিশ্রুতি সম্পূর্ণ ভুয়া। সরাসরি তথ্য অধিদপ্তরের অফিসিয়াল প্রক্রিয়ার মাধ্যমে আবেদন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://pressinform.gov.bd'
    }
  ]
};
