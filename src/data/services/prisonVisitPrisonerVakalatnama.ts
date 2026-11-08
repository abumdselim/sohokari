import { ServiceRecord } from '../../types/service';

export const prisonVisitPrisonerVakalatnamaService: ServiceRecord = {
  id: 'bd-prison-visit-prisoner-vakalatnama',
  slug: 'bd-prison-visit-prisoner-vakalatnama',
  category_id: 'legal_judiciary',
  name_bn: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা',
  name_en: 'Prisoner Visitation & Vakalatnama Signing Official Procedure Guide',
  responsible_ministry_bn: 'কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_bn: 'কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_en: 'কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://prison.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://prison.gov.bd',
  legal_basis: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'prisoner visitation & vakalatnama signing official procedure guide', language: 'en', weight: 1.0 },
    { alias: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি', language: 'bn', weight: 0.95 },
    { alias: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি ফি', language: 'bn', weight: 0.95 },
    { alias: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'prison visit prisoner vakalatnama', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-prison-visit-prisoner-vakalatnama-standard',
      variant_name_bn: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Prisoner Visitation & Vakalatnama Signing Official Procedure Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'কারাগারে সাক্ষাৎ আবেদন ফি',
          fee_type_en: 'কারাগারে সাক্ষাৎ আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'কারাগারে বন্দীর সাথে সাক্ষাতের কোনো সরকারি ফি নেই।'
        },
        {
          fee_type_bn: 'ওকালতনামায় টিপসই বা স্বাক্ষর সত্যায়ন ফি',
          fee_type_en: 'ওকালতনামায় টিপসই বা স্বাক্ষর সত্যায়ন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'জেল সুপার বা জেলার কর্তৃক ওকালতনামা স্বাক্ষরে কোনো অর্থ নেওয়া সম্পূর্ণ অবৈধ।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সাক্ষাৎপ্রার্থী স্বজনের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          document_name_en: 'সাক্ষাৎপ্রার্থী স্বজনের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বন্দীর নাম, পিতার নাম, মামলার নম্বর ও হাজতি/কয়েদি নম্বর',
          document_name_en: 'বন্দীর নাম, পিতার নাম, মামলার নম্বর ও হাজতি/কয়েদি নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আইনজীবী সমিতি কর্তৃক সরবরাহকৃত খালি উকালতনামা (ওকালতনামার ক্ষেত্রে)',
          document_name_en: 'আইনজীবী সমিতি কর্তৃক সরবরাহকৃত খালি উকালতনামা (ওকালতনামার ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'জেল গেটের নির্ধারিত কাউন্টারে সাক্ষাতের আবেদন স্লিপ জমা',
          instruction_bn: 'সকাল ৯টা থেকে দুপুর ২টার মধ্যে কারাগারের মূল কাউন্টারে গিয়ে বন্দীর নাম ও সম্পর্ক লিখে স্লিপ জমা দিয়ে টোকেন গ্রহণ করুন।',
          warning_bn: 'গেট প্রাঙ্গণে ঘুরে বেড়ানো কোনো দালাল বা চা দোকানিকে টাকা দেবেন না।',
          action_url: 'https://prison.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'আইনজীবীর সহকারী বা স্বজন কর্তৃক ওকালতনামা জমা',
          instruction_bn: 'ওকালতনামায় স্বাক্ষর করাতে চাইলে নির্ধারিত কাউন্টারে উকালতনামা জমা দিন। ডেপুটি জেলার ভেতরে গিয়ে বন্দীর স্বাক্ষর নিয়ে ফেরত দেবেন।',
          warning_bn: 'স্বাক্ষরের জন্য কাউকে নগদ টাকা দেওয়া জেল কোড অনুযায়ী শাস্তিযোগ্য অপরাধ।',
          action_url: 'https://prison.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ইন্টারকম বা সাক্ষাৎ কক্ষে কথা বলা',
          instruction_bn: 'নিরাপত্তা তল্লাশি শেষে বন্দীর সাথে দেখা করুন। অনুমোদিত শুকনো খাবার ছাড়া কোনো নগদ টাকা, মোবাইল বা ইলেকট্রনিক্স ভেতরে নেওয়া সম্পূর্ণ নিষিদ্ধ।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://prison.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জেল গেটে কোনো কারারক্ষী বা দালাল দেখা করানোর নামে বকশিশ বা টাকা চাইলে সরাসরি জেল সুপার বা জেলার-এর অফিসে জানান কিংবা দুর্নীতি দমন কমিশন (১০৬) এ ফোন দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://prison.gov.bd'
    }
  ]
};
