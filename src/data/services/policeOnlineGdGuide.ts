import { ServiceRecord } from '../../types/service';

export const policeOnlineGdGuideService: ServiceRecord = {
  id: 'bd-police-online-gd-guide',
  slug: 'bd-police-online-gd-guide',
  category_id: 'law_police',
  name_bn: 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা',
  name_en: 'Bangladesh Police Online General Diary (GD) Complete Guide',
  responsible_ministry_bn: 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://police.gov.bd',
  helpline_number: '999',
  grievance_channel: 'https://police.gov.bd',
  legal_basis: 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh police online general diary (gd) complete guide', language: 'en', weight: 1.0 },
    { alias: 'সাধারণ ডায়েরি (জিডি)', language: 'bn', weight: 0.95 },
    { alias: 'সাধারণ ডায়েরি (জিডি) ফি', language: 'bn', weight: 0.95 },
    { alias: 'সাধারণ ডায়েরি (জিডি) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'police online gd guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-police-online-gd-guide-standard',
      variant_name_bn: 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Police Online General Diary (GD) Complete Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'অনলাইন জিডি সরকারি ফি',
          fee_type_en: 'অনলাইন জিডি সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'জিডি করার জন্য সরকারি কোনো ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ',
          document_name_en: 'জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হারিয়ে যাওয়া বা প্রাপ্ত জিনিসের বিস্তারিত বিবরণ (যেমন: ডকুমেন্টের নম্বর)',
          document_name_en: 'হারিয়ে যাওয়া বা প্রাপ্ত জিনিসের বিস্তারিত বিবরণ (যেমন: ডকুমেন্টের নম্বর)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইন জিডি অ্যাপ বা পোর্টালে প্রবেশ',
          instruction_bn: 'https://gd.police.gov.bd ওয়েবসাইটে যান অথবা \'Online GD\' মোবাইল অ্যাপ ডাউনলোড করুন। আপনার এনআইডি এবং জন্মতারিখ দিয়ে অ্যাকাউন্ট খুলুন।',
          warning_bn: 'মোবাইলের সামনের ক্যামেরা দিয়ে লাইভ ফেস ভেরিফিকেশন সম্পন্ন হবে।',
          action_url: 'https://gd.police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'হারানো বা প্রাপ্তির তথ্য নির্বাচন',
          instruction_bn: '\'হারানো\' অপশন সিলেক্ট করুন। কি হারিয়েছে তা বেছে নিন (ডকুমেন্ট, যানবাহন, মানুষ বা মালামাল)।',
          warning_bn: 'ঘটনার সময় ও স্থান সঠিকভাবে লিখুন।',
          action_url: 'https://police.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'থানা নির্বাচন ও সাবমিট',
          instruction_bn: 'যে এলাকার মধ্যে জিনিসটি হারিয়েছে সেই থানা সিলেক্ট করে সাবমিট করুন। সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত ডিজিটাল জিডি সার্টিফিকেট তৈরি হবে।',
          warning_bn: 'সার্টিফিকেটটি ডাউনলোড ও প্রিন্ট করে নতুন এনআইডি, পাসপোর্ট বা সিম রিপ্লেসমেন্টে ব্যবহার করা যায়।',
          action_url: 'https://police.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জিডি করতে থানায় কাউকে ১ টাকাও দেওয়ার নিয়ম নেই। অনলাইনে করা কিউআর কোডযুক্ত জিডি কপি দেশের সকল সরকারি ও বেসরকারি প্রতিষ্ঠানে সরাসরি গ্রহণযোগ্য।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://police.gov.bd'
    }
  ]
};
