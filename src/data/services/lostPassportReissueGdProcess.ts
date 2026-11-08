import { ServiceRecord } from '../../types/service';

export const lostPassportReissueGdProcessService: ServiceRecord = {
  id: 'bd-lost-passport-reissue-gd-process',
  slug: 'bd-lost-passport-reissue-gd-process',
  category_id: 'passport_immigration',
  name_bn: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা',
  name_en: 'Lost Passport Re-issue & Police GD Official Procedure Guide',
  responsible_ministry_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_ministry_en: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_agency_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_agency_en: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  visiting_office_level: 'district',
  official_portal_url: 'https://epassport.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://epassport.gov.bd',
  legal_basis: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'lost passport re-issue & police gd official procedure guide', language: 'en', weight: 1.0 },
    { alias: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি', language: 'bn', weight: 0.95 },
    { alias: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি ফি', language: 'bn', weight: 0.95 },
    { alias: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'lost passport reissue gd process', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-lost-passport-reissue-gd-process-standard',
      variant_name_bn: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Lost Passport Re-issue & Police GD Official Procedure Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 2,
      fees: [
        {
          fee_type_bn: 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - নিয়মিত)',
          fee_type_en: 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - নিয়মিত)',
          amount_bdt: 4025.0,
          effective_date: '2022-01-01',
          notes_bn: 'ট্রেজারি চালানে ভ্যাটসহ ৪,০২৫ টাকা।'
        },
        {
          fee_type_bn: 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - জরুরি)',
          fee_type_en: 'হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - জরুরি)',
          amount_bdt: 6325.0,
          effective_date: '2022-01-01',
          notes_bn: 'জরুরি ডেলিভারিতে ভ্যাটসহ ৬,৩২৫ টাকা।'
        },
        {
          fee_type_bn: 'পুলিশ জিডি সরকারি ফি',
          fee_type_en: 'পুলিশ জিডি সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'থানায় সাধারণ ডায়েরি বা অনলাইনে জিডি করতে কোনো ফি লাগে না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'থানার সাধারণ ডায়েরি (GD) এর মূল কপি (যাতে পূর্বের পাসপোর্ট নম্বর ও হারানোর বিবরণ উল্লেখ থাকে)',
          document_name_en: 'থানার সাধারণ ডায়েরি (GD) এর মূল কপি (যাতে পূর্বের পাসপোর্ট নম্বর ও হারানোর বিবরণ উল্লেখ থাকে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হারানো পাসপোর্টের স্পষ্ট ফটোকপি (যদি থাকে)',
          document_name_en: 'হারানো পাসপোর্টের স্পষ্ট ফটোকপি (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ',
          document_name_en: 'জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ই-পাসপোর্ট অনলাইন সামারি ফরম ও পেমেন্ট চালান স্লিপ',
          document_name_en: 'ই-পাসপোর্ট অনলাইন সামারি ফরম ও পেমেন্ট চালান স্লিপ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'থানায় জিডি বা অনলাইন জিডি দায়ের',
          instruction_bn: 'পাসপোর্ট যে এলাকায় হারিয়েছে সেই থানায় জিডি করুন অথবা \'Online GD\' অ্যাপের মাধ্যমে বিনামূল্যে পাসপোর্ট হারানোর জিডি দায়ের করে জিডি কপি প্রিন্ট নিন।',
          warning_bn: 'জিডিতে অবশ্যই পুরাতন পাসপোর্ট নম্বর উল্লেখ থাকতে হবে।',
          action_url: 'https://epassport.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ই-পাসপোর্ট পোর্টালে \'Re-issue / Lost\' সিলেক্ট করে আবেদন',
          instruction_bn: 'https://epassport.gov.bd ওয়েবসাইটে ঢুকে Re-issue অপশন নির্বাচন করে জিডি নম্বর ও তারিখ প্রদান করুন।',
          warning_bn: 'ভুল তথ্য দেবেন না, সিস্টেমে পূর্বের রেকর্ড ম্যাচ করবে।',
          action_url: 'https://epassport.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পাসপোর্ট অফিসে বায়োমেট্রিক ও মূল জিডি দাখিল',
          instruction_bn: 'অ্যাপয়েন্টমেন্টের দিনে পাসপোর্ট অফিসে গিয়ে মূল জিডি কপি, এনআইডি ও চালান স্লিপ জমা দিয়ে ছবি ও আঙুলের ছাপ দিন। নির্দিষ্ট দিনে নতুন পাসপোর্ট ডেলিভারি নিন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://epassport.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: হারানো পাসপোর্টের ক্ষেত্রে দালালরা বলে বিশেষ ছাড়পত্র লাগবে বলে ১০,০০০-১৫,০০০ টাকা হাতিয়ে নেয়। প্রকৃত সত্য হলো থানায় জিডি কপি থাকলে আপনি নিজেই যেকোনো সাধারণ পাসপোর্টের মতো সরকারি ফি দিয়ে পাসপোর্ট তুলতে পারবেন। কাউকে কোনো অতিরিক্ত টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://epassport.gov.bd'
    }
  ]
};
