import { ServiceRecord } from '../../types/service';

export const dncrpConsumerRightsComplaintRewardService: ServiceRecord = {
  id: 'bd-dncrp-consumer-rights-complaint-reward',
  slug: 'bd-dncrp-consumer-rights-complaint-reward',
  category_id: 'legal_judiciary',
  name_bn: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা',
  name_en: 'Consumer Rights Protection Directorate DNCRP Complaint & 25% Reward Guide',
  responsible_ministry_bn: 'জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়',
  responsible_ministry_en: 'জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_bn: 'জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়',
  responsible_agency_en: 'জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dncrp.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dncrp.gov.bd',
  legal_basis: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'consumer rights protection directorate dncrp complaint & 25% reward guide', language: 'en', weight: 1.0 },
    { alias: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি', language: 'bn', weight: 0.95 },
    { alias: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dncrp consumer rights complaint reward', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dncrp-consumer-rights-complaint-reward-standard',
      variant_name_bn: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Consumer Rights Protection Directorate DNCRP Complaint & 25% Reward Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'ভোক্তা অধিকার অভিযোগ ফি',
          fee_type_en: 'ভোক্তা অধিকার অভিযোগ ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'অভিযোগের জন্য কোনো ফি বা স্ট্যাম্প লাগে না।'
        }
      ],
      documents: [
        {
          document_name_bn: 'পণ্য ক্রয়ের ক্যাশ মেমো / মানি রিসিট / অনলাইন চালানের ছবি',
          document_name_en: 'পণ্য ক্রয়ের ক্যাশ মেমো / মানি রিসিট / অনলাইন চালানের ছবি',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পণ্যের গায়ে মুদ্রিত এমআরপি (MRP) বা মেয়াদোত্তীর্ণ তারিখের স্পষ্ট ছবি',
          document_name_en: 'পণ্যের গায়ে মুদ্রিত এমআরপি (MRP) বা মেয়াদোত্তীর্ণ তারিখের স্পষ্ট ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'অভিযোগকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'অভিযোগকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'অভিযোগের বিবরণ (দোকানের নাম, ঠিকানা, অপরাধের ধরন)',
          document_name_en: 'অভিযোগের বিবরণ (দোকানের নাম, ঠিকানা, অপরাধের ধরন)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ক্রয় রসিদ ও প্রমাণ সংগ্রহ',
          instruction_bn: 'পণ্য ক্রয়ের তারিখ থেকে ৩০ দিনের মধ্যে অভিযোগ করতে হবে। পণ্যের রসিদ ও মোড়কের ছবি তুলুন।',
          warning_bn: 'রসিদ না দিলে সেটির জন্যও আলাদা অভিযোগ করা যায়।',
          action_url: 'https://dncrp.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ইমেইল বা ভোক্তা অধিকার পোর্টালে অভিযোগ দাখিল',
          instruction_bn: 'মহাপরিচালক বরাবর অভিযোগ লিখে ncrp@dncrp.gov.bd অথবা সংশ্লিষ্ট জেলা কার্যালয়ের ইমেইলে পাঠিয়ে দিন।',
          warning_bn: 'হটলাইন ১৬১২১ এ ফোন দিয়েও নির্দেশনা নেওয়া যায়।',
          action_url: 'https://dncrp.portal.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'উভয় পক্ষের শুনানি ও ২৫% নগদ অর্থ পুরস্কার লাভ',
          instruction_bn: 'নির্বাহী ম্যাজিস্ট্রেট বা সহকারী পরিচালক উভয় পক্ষকে শুনানিতে ডাকবেন। অভিযোগ প্রমাণিত হলে জরিমানার ২৫% টাকা নগদে অভিযোগকারীকে বুঝিয়ে দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dncrp.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভোক্তা অধিকার আইন সাধারণ নাগরিকের সুরক্ষার ঢাল। অভিযোগ করতে কোনো উকিল বা মধ্যস্বত্বভোগী লাগে না। কোনো সমস্যা হলে সরাসরি ভোক্তা বাতায়ন ১৬১২১ এ ফোন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dncrp.gov.bd'
    }
  ]
};
