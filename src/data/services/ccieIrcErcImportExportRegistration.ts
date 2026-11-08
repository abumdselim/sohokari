import { ServiceRecord } from '../../types/service';

export const ccieIrcErcImportExportRegistrationService: ServiceRecord = {
  id: 'bd-ccie-irc-erc-import-export-registration',
  slug: 'bd-ccie-irc-erc-import-export-registration',
  category_id: 'citizen_general',
  name_bn: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি',
  name_en: 'Bangladesh Import & Export Registration Certificate (IRC & ERC) Official Online Guide',
  responsible_ministry_bn: 'প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়',
  responsible_ministry_en: 'প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_bn: 'প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_en: 'প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://ccie.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://ccie.gov.bd',
  legal_basis: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh import & export registration certificate (irc & erc) official online guide', language: 'en', weight: 1.0 },
    { alias: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও', language: 'bn', weight: 0.95 },
    { alias: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি', language: 'bn', weight: 0.95 },
    { alias: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'ccie irc erc import export registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-ccie-irc-erc-import-export-registration-standard',
      variant_name_bn: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Import & Export Registration Certificate (IRC & ERC) Official Online Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'রপ্তানি নিবন্ধন সনদ (ERC - বাৎসরিক যেকোনো পরিমাণ রপ্তানির জন্য)',
          fee_type_en: 'রপ্তানি নিবন্ধন সনদ (ERC - বাৎসরিক যেকোনো পরিমাণ রপ্তানির জন্য)',
          amount_bdt: 7000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি ফি ৭,০০০ টাকা (+১৫% ভ্যাট)।'
        },
        {
          fee_type_bn: 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫০ লাখ টাকা পর্যন্ত)',
          fee_type_en: 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫০ লাখ টাকা পর্যন্ত)',
          amount_bdt: 18000.0,
          effective_date: '2022-01-01',
          notes_bn: 'আমদানি সীমার উপর ভিত্তি করে সরকারি স্লাব নির্ধারিত।'
        },
        {
          fee_type_bn: 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫ লাখ টাকা পর্যন্ত ক্ষুদ্র আমদানিকারক)',
          fee_type_en: 'আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫ লাখ টাকা পর্যন্ত ক্ষুদ্র আমদানিকারক)',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ক্ষুদ্র উদ্যোক্তাদের জন্য বিশেষ ছাড়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'হালনাগাদ বাণিজ্যিক ট্রেড লাইসেন্স',
          document_name_en: 'হালনাগাদ বাণিজ্যিক ট্রেড লাইসেন্স',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ই-টিআইএন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন দাখিলের প্রাপ্তিস্বীকার',
          document_name_en: 'ই-টিআইএন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন দাখিলের প্রাপ্তিস্বীকার',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভ্যাট (BIN) রেজিস্ট্রেশন সনদপত্র',
          document_name_en: 'ভ্যাট (BIN) রেজিস্ট্রেশন সনদপত্র',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'তফসিলি ব্যাংকের সলভেন্সি সার্টিফিকেট (Bank Solvency Certificate)',
          document_name_en: 'তফসিলি ব্যাংকের সলভেন্সি সার্টিফিকেট (Bank Solvency Certificate)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্বীকৃত চেম্বার অব কমার্স বা ট্রেড অ্যাসোসিয়েশনের মেম্বারশিপ সার্টিফিকেট',
          document_name_en: 'স্বীকৃত চেম্বার অব কমার্স বা ট্রেড অ্যাসোসিয়েশনের মেম্বারশিপ সার্টিফিকেট',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'OLRS পোর্টালে অনলাইন রেজিস্ট্রেশন',
          instruction_bn: 'https://olrs.ccie.gov.bd ওয়েবসাইটে যান। আপনার প্রতিষ্ঠানের নাম ও ইমেইল দিয়ে রেজিস্ট্রেশন করুন।',
          warning_bn: 'আপনার ট্রেড লাইসেন্স ও ব্যাংক একাউন্টের নাম হুবহু এক হতে হবে।',
          action_url: 'https://olrs.ccie.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'আবেদন ফরম পূরণ ও ডকুমেন্টস আপলোড',
          instruction_bn: 'আমদানি বা রপ্তানি সনদ বাছাই করুন। ব্যাংক সলভেন্সি ও চেম্বার সার্টিফিকেট আপলোড করুন।',
          warning_bn: 'কাগজপত্র পরিষ্কারভাবে স্ক্যান করে দিন।',
          action_url: 'https://ccie.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন পেমেন্ট গেটওয়েতে ফি পরিশোধ',
          instruction_bn: 'সিস্টেমের একপে বা সোনালী পেমেন্ট গেটওয়ের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। তাৎক্ষণিক ডিজিটাল চালান স্লিপ তৈরি হবে।',
          warning_bn: 'কোনো মধ্যস্থতাকারীকে অতিরিক্ত টাকা দেবেন না।',
          action_url: 'https://ccie.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ডিজিটাল আইআরসি/ইআরসি সনদ ডাউনলোড',
          instruction_bn: 'CCI&E কর্মকর্তা অনুমোদন দিলে কিউআর কোডযুক্ত আসল ডিজিটাল সনদ অনলাইনে প্রস্তুত হবে, যা দিয়ে বাংলাদেশ কাস্টমস ও ব্যাংকে এলসি (Letter of Credit) খোলা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://ccie.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: মতিঝিল বা চট্টগ্রামের দালালরা আইআরসি পাইয়ে দেওয়ার নামে লাখ টাকা হাতিয়ে নেয়। এখন সম্পূর্ণ সেবাটি শতভাগ পেপারলেস এবং অনলাইনভিত্তিক। ঘরে বসেই এটি সংগ্রহ করা সম্ভব।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি অফিসিয়াল পোর্টাল',
      source_url: 'https://ccie.gov.bd'
    }
  ]
};
