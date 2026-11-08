import { ServiceRecord } from '../../types/service';

export const dssTransgenderHijraStipendAllowanceService: ServiceRecord = {
  id: 'bd-dss-transgender-hijra-stipend-allowance',
  slug: 'bd-dss-transgender-hijra-stipend-allowance',
  category_id: 'social_welfare',
  name_bn: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা',
  name_en: 'Transgender (Hijra) & Marginalized Community Welfare Allowance & Training Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'transgender (hijra) & marginalized community welfare allowance & training guide', language: 'en', weight: 1.0 },
    { alias: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ', language: 'bn', weight: 0.95 },
    { alias: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ ফি', language: 'bn', weight: 0.95 },
    { alias: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dss transgender hijra stipend allowance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dss-transgender-hijra-stipend-allowance-standard',
      variant_name_bn: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Transgender (Hijra) & Marginalized Community Welfare Allowance & Training Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ভাতা ও প্রশিক্ষণ আবেদন ফি',
          fee_type_en: 'ভাতা ও প্রশিক্ষণ আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারের সম্পূর্ণ ফ্রি কল্যাণমূলক সেবা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সিভিল সার্জন কর্তৃক হিজড়া জনগোষ্ঠীর প্রত্যয়নপত্র (হিজড়া ভাতার ক্ষেত্রে)',
          document_name_en: 'সিভিল সার্জন কর্তৃক হিজড়া জনগোষ্ঠীর প্রত্যয়নপত্র (হিজড়া ভাতার ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক অনগ্রসর সম্প্রদায় প্রত্যয়ন',
          document_name_en: 'ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক অনগ্রসর সম্প্রদায় প্রত্যয়ন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর সচল নগদ বা বিকাশ মোবাইল একাউন্ট',
          document_name_en: 'আবেদনকারীর সচল নগদ বা বিকাশ মোবাইল একাউন্ট',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা সমাজসেবা কার্যালয়ে যোগাযোগ ও নাম অন্তর্ভুক্তি',
          instruction_bn: 'এনআইডি ও সিভিল সার্জনের প্রত্যয়নপত্র নিয়ে উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সমাজসেবা অফিসে যান।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: '৫০ দিনের সরকারি ড্রাইভিং বা সেলাই প্রশিক্ষণ গ্রহণ',
          instruction_bn: 'সমাজসেবা অধিদপ্তর পরিচালিত আয়বর্ধক ভোকেশনাল প্রশিক্ষণে অংশ নিলে দৈনিক ভাতা ও প্রশিক্ষণ শেষে টুলস দেওয়া হয়।',
          warning_bn: 'প্রশিক্ষণ সম্পূর্ণ ফ্রি।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি মোবাইলে মাসিক ভাতা ও অনুদান লাভ',
          instruction_bn: 'জিটুপি সিস্টেমে প্রতি মাসের শুরুতে সরাসরি নিজের নগদ বা বিকাশ একাউন্টে সরকারি ভাতার টাকা চলে আসবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পিছিয়ে পড়া জনগোষ্ঠীর ভাতা তাদের মৌলিক অধিকার। কোনো দালাল কার্ড করিয়ে দেওয়ার নামে টাকা দাবি করলে উপজেলা নির্বাহী কর্মকর্তা বা ১০৬ এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};
