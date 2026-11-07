import { ServiceRecord } from '../../types/service';

export const landMutationService: ServiceRecord = {
  id: 'land-mutation',
  slug: 'land-mutation',
  category_id: 'land_property',
  name_bn: 'ই-নামজারি (জমি খারিজ ও রেকর্ড সংশোধন)',
  name_en: 'e-Mutation (Land Record of Rights Correction)',
  responsible_ministry_bn: 'ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Land',
  responsible_agency_bn: 'ভূমি সংস্কার বোর্ড ও উপজেলা ভূমি অফিস (সহকারী কমিশনার ভূমি)',
  responsible_agency_en: 'Land Reforms Board & Upazila Land Office',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://mutation.land.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://land.gov.bd/grievance',
  legal_basis: 'রাষ্ট্রীয় অধিগ্রহণ ও প্রজাস্বত্ব আইন ১৯৫০ এবং ভূমি মন্ত্রণালয়ের পরিপত্র ২০২১',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Sheyal Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'namjari', language: 'banglish', weight: 1.0 },
    { alias: 'namzari', language: 'banglish', weight: 1.0 },
    { alias: 'khariz', language: 'banglish', weight: 1.0 },
    { alias: 'kharij', language: 'banglish', weight: 1.0 },
    { alias: 'jomi kharij fee', language: 'banglish', weight: 1.0 },
    { alias: 'e mutation', language: 'en', weight: 1.0 },
    { alias: 'land mutation', language: 'en', weight: 1.0 },
    { alias: 'land e mutation', language: 'en', weight: 1.0 },
    { alias: 'mutation', language: 'en', weight: 0.95 },
    { alias: 'mutation fee bangladesh', language: 'en', weight: 1.0 },
    { alias: 'নামজারি', language: 'bn', weight: 1.0 },
    { alias: 'ই-নামজারি', language: 'bn', weight: 1.0 },
    { alias: 'খারিজ', language: 'bn', weight: 1.0 },
    { alias: 'জমি খারিজ', language: 'bn', weight: 1.0 },
    { alias: 'খারিজ খতিয়ান', language: 'bn', weight: 1.0 },
    { alias: 'নামজারি খতিয়ান', language: 'bn', weight: 1.0 },
    { alias: 'নামজারি করতে কত টাকা লাগে', language: 'bn', weight: 1.0 },
    { alias: 'জমি নামজারি করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'নামজারি সরকারি ফি', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'land-mutation-standard',
      variant_name_bn: 'সার্বজনীন ই-নামজারি আবেদন (ক্রয় / হেবা / ওয়ারিশ সূত্রে)',
      variant_name_en: 'Standard e-Mutation Application (Purchase / Gift / Inheritance)',
      conditions: { type: 'standard' },
      processing_days_sla: 28,
      fees: [
        {
          fee_type_bn: 'অনলাইন আবেদন কোর্ট ফি',
          fee_type_en: 'Application Court Fee',
          amount_bdt: 20,
          effective_date: '2021-03-15',
          notes_bn: 'আবেদনের সময় পরিশোধযোগ্য'
        },
        {
          fee_type_bn: 'নোটিশ জারি প্রসেস ফি',
          fee_type_en: 'Notice Process Fee',
          amount_bdt: 50,
          effective_date: '2021-03-15',
          notes_bn: 'আবেদনের সময় পরিশোধযোগ্য'
        },
        {
          fee_type_bn: 'রেকর্ড সংশোধন ফি',
          fee_type_en: 'Record Correction Fee',
          amount_bdt: 1000,
          effective_date: '2021-03-15',
          notes_bn: 'আবেদন মঞ্জুর হওয়ার পর ডিসিআর কাটার সময় প্রদেয়'
        },
        {
          fee_type_bn: 'খতিয়ান সরবরাহ ফি',
          fee_type_en: 'Khatian Issuance Fee',
          amount_bdt: 100,
          effective_date: '2021-03-15',
          notes_bn: 'আবেদন মঞ্জুর হওয়ার পর ডিসিআর কাটার সময় প্রদেয়'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল রেজিস্ট্রিকৃত দলিলের স্পষ্ট স্ক্যান কপি',
          document_name_en: 'Scanned copy of registered deed',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভায়া দলিলের স্ক্যান কপি (প্রযোজ্য ক্ষেত্রে ধারাবাহিক পূর্ব দলিল)',
          document_name_en: 'Chain / Via Deeds (if applicable)',
          format_requirement: 'digital_scan',
          is_mandatory: false,
          condition_description_bn: 'দলিলদাতা যার কাছ থেকে জমি কিনেছেন তার ধারাবাহিক দলিল'
        },
        {
          document_name_bn: 'হাল সন (বর্তমান বছর) পর্যন্ত ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'Up-to-date Land Development Tax Receipt (Dakhila)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সংশ্লিষ্ট পরচা / খতিয়ানের কপি (CS / SA / RS / BS / সিটি জরিপ)',
          document_name_en: 'Record of Rights / Khatian (CS / SA / RS / BS)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ওয়ারিশান সনদ (ওয়ারিশ সূত্রে হলে স্থানীয় চেয়ারম্যান/কাউন্সিলর প্রদত্ত)',
          document_name_en: 'Succession Certificate (if inherited)',
          format_requirement: 'digital_scan',
          is_mandatory: false,
          condition_description_bn: 'পৈত্রিক বা ওয়ারিশ সূত্রে প্রাপ্ত জমির জন্য আবশ্যক'
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'Applicant NID & Passport Photo',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইনে আবেদন ও ৭০ টাকা ফি জমা',
          instruction_bn: 'mutation.land.gov.bd পোর্টালে গিয়ে "নামজারি আবেদন" বাটনে ক্লিক করুন। এনআইডি যাচাই করে মৌজা, খতিয়ান, দলিল ও দাগ নম্বর লিখুন এবং দলিল ও খাজনার স্ক্যান কপি আপলোড করুন। বিকাশ/নগদে আবেদন ফি ২০ টাকা ও প্রসেস ফি ৫০ টাকা (মোট ৭০ টাকা) পরিশোধ করে ট্র্যাকিং নম্বর সংগ্রহ করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সহকারী কমিশনার (ভূমি) কর্তৃক যাচাই ও তদন্ত',
          instruction_bn: 'আবেদনটি সংশ্লিষ্ট উপজেলা ভূমি অফিস ও ইউনিয়ন ভূমি সহকারী কর্মকর্তা (তহশিলদার)-এর কাছে প্রেরিত হবে। তহশিলদার জমির বাস্তব দখল ও কাগজপত্র যাচাই করে প্রতিবেদন দিবেন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'শুনানি (প্রয়োজনে)',
          instruction_bn: 'কোনো আপত্তি বা জটিলতা থাকলে এসএমএস-এর মাধ্যমে শুনানির তারিখ জানানো হবে। অন্যথায় সাধারণ ক্ষেত্রে সশরীরে উপস্থিত ছাড়াই অনুমোদন সম্পন্ন হয়।'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'অনুমোদনের পর ১১০০ টাকা ফি জমা ও ডিজিটাল খতিয়ান সংগ্রহ',
          instruction_bn: 'আবেদন মঞ্জুর হলে মোবাইলে এসএমএস আসবে। পোর্টালে লগইন করে ১১০০ টাকা (রেকর্ড সংশোধন ১০০০ + খতিয়ান ফি ১০০) পরিশোধ করুন। সাথে সাথে কিউআর কোডযুক্ত ডিজিটাল নামজারি খতিয়ান ও ডিসিআর ডাউনলোড করে নিন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'জরুরি সতর্কতা: নামজারিতে সরকার নির্ধারিত মোট ফি নির্দিষ্টভাবে মাত্র ১,১৭০ টাকা (আবেদনের সময় ৭০ টাকা + অনুমোদনের পর ১,১০০ টাকা)। এর বাইরে ১ টাকাও অতিরিক্ত নয়। কোনো দালাল বা তহশিল অফিসের কাউকে অতিরিক্ত টাকা দিবেন না। কেউ অতিরিক্ত টাকা দাবি করলে সাথে সাথে ভূমি মন্ত্রণালয়ের সার্বক্ষণিক হটলাইন ১৬১২২ নম্বরে কল করে অভিযোগ জানান।',
      content_en: 'Critical Warning: The total official fee for e-mutation is strictly 1,170 BDT (70 BDT upon application + 1,100 BDT upon approval). Any demand beyond 1,170 BDT is illegal corruption. Report extortion immediately to the Ministry of Land 24/7 hotline 16122.'
    },
    {
      guidance_type: 'tip',
      content_bn: 'প্রস্তুতি পরামর্শ: আবেদন করার আগে অবশ্যই আপনার জমির বর্তমান বছরের ভূমি উন্নয়ন কর (খাজনা) অনলাইনে পরিশোধ করে দাখিলা সংগ্রহ রাখুন। বকেয়া খাজনা থাকলে নামজারি আবেদন তাৎক্ষণিক বাতিল হয়ে যায়।',
      content_en: 'Preparation Tip: Ensure your current year land development tax is fully cleared online before applying. Applications with overdue land rent are rejected automatically.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'ভূমি মন্ত্রণালয়ের নামজারি ফি নির্ধারণ সংক্রান্ত অফিসিয়াল পরিপত্র',
      source_url: 'https://mutation.land.gov.bd',
      circular_number: '৩১.০০.০০০০.০৪২.৬৮.০১৮.১৯-৭২',
      published_date: '2021-03-15'
    }
  ]
};
