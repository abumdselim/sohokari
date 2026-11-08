import { ServiceRecord } from '../../types/service';

export const socialSafetyAllowancesDssService: ServiceRecord = {
  id: 'bd-social-safety-allowances-dss',
  slug: 'bd-social-safety-allowances-dss',
  category_id: 'social_welfare',
  name_bn: 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন',
  name_en: 'Bangladesh Social Safety Net Allowances (Old Age, Widow, Disability Allowance) Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh social safety net allowances (old age, widow, disability allowance) guide', language: 'en', weight: 1.0 },
    { alias: 'social safety allowances dss', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-social-safety-allowances-dss-standard',
      variant_name_bn: 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Social Safety Net Allowances (Old Age, Widow, Disability Allowance) Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ভাতা আবেদন সরকারি ফি',
          fee_type_en: 'ভাতা আবেদন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদন করার জন্য কোনো ফি বা ঘুষ দেওয়ার কোনো বিধান নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সুবিধাভোগীর নামে নিবন্ধিত সচল নগদ/বিকাশ একাউন্টের সিম',
          document_name_en: 'সুবিধাভোগীর নামে নিবন্ধিত সচল নগদ/বিকাশ একাউন্টের সিম',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সুবর্ণ নাগরিক প্রতিবন্ধী পরিচয়পত্র (শুধুমাত্র প্রতিবন্ধী ভাতার ক্ষেত্রে)',
          document_name_en: 'সুবর্ণ নাগরিক প্রতিবন্ধী পরিচয়পত্র (শুধুমাত্র প্রতিবন্ধী ভাতার ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'স্বামীর মৃত্যু সনদ (বিধবা ভাতার ক্ষেত্রে)',
          document_name_en: 'স্বামীর মৃত্যু সনদ (বিধবা ভাতার ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সমাজসেবা পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'https://mis.bhata.gov.bd পোর্টালে যান অথবা ইউনিয়ন ডিজিটাল সেন্টারের (UDC) সহায়তায় বিনামূল্যে আবেদন করুন।',
          warning_bn: 'মোবাইল নম্বরটি অবশ্যই আবেদনকারীর নিজের নামে বায়োমেট্রিক সিম হতে হবে।',
          action_url: 'https://mis.bhata.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কমিটি কর্তৃক যাচাই ও তালিকাভুক্তকরণ',
          instruction_bn: 'ইউনিয়ন বা ওয়ার্ড কমিটি আপনার দারিদ্র্যসীমা ও বয়স যাচাই করবে (পুরুষের ক্ষেত্রে সর্বনিম্ন ৬৫ বছর এবং মহিলার ক্ষেত্রে সর্বনিম্ন ৬২ বছর)।',
          warning_bn: 'কোনো জনপ্রতিনিধি ভাতা তালিকায় নাম দেওয়ার জন্য টাকা চাইলে সরাসরি ইউএসও বা ডিসিকে জানান।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি মোবাইলে টাকা গ্রহণ',
          instruction_bn: 'তালিকাভুক্ত হলে সরকারি ফান্ড থেকে সরাসরি আপনার নগদ বা বিকাশ অ্যাকাউন্টে কোনো মধ্যস্বত্বভোগী ছাড়া মাসিক ভাতার টাকা চলে আসবে। কোনো ক্যাশ ডেলিভারি বা হাতবদলের সুযোগ নেই।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বয়স্ক ভাতা বা বিধবা ভাতার কার্ড করে দেওয়ার নামে গ্রামের মেম্বার বা দালালরা ৩,০০০ থেকে ১০,০০০ টাকা ঘুষ দাবি করে। এটি একটি শাস্তিযোগ্য অপরাধ। ভাতা সম্পূর্ণ ডিজিটাল পদ্ধতিতে কোনো কার্ড বা বই ছাড়াই সরাসরি মোবাইলে চলে যায়। কাউকে কোনো টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};
