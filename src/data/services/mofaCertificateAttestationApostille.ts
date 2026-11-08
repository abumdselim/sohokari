import { ServiceRecord } from '../../types/service';

export const mofaCertificateAttestationApostilleService: ServiceRecord = {
  id: 'bd-mofa-certificate-attestation-apostille',
  slug: 'bd-mofa-certificate-attestation-apostille',
  category_id: 'citizen_general',
  name_bn: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা',
  name_en: 'Ministry of Foreign Affairs (MOFA) & MOE Certificate Attestation Free Guide',
  responsible_ministry_bn: 'কনস্যুলার ও কল্যাণ অনুবিভাগ, পররাষ্ট্র মন্ত্রণালয় / শিক্ষা মন্ত্রণালয়',
  responsible_ministry_en: 'কনস্যুলার ও কল্যাণ অনুবিভাগ, পররাষ্ট্র মন্ত্রণালয় / শিক্ষা মন্ত্রণালয়',
  responsible_agency_bn: 'কনস্যুলার ও কল্যাণ অনুবিভাগ, পররাষ্ট্র মন্ত্রণালয় / শিক্ষা মন্ত্রণালয়',
  responsible_agency_en: 'কনস্যুলার ও কল্যাণ অনুবিভাগ, পররাষ্ট্র মন্ত্রণালয় / শিক্ষা মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://mofa.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://mofa.gov.bd',
  legal_basis: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'ministry of foreign affairs (mofa) & moe certificate attestation free guide', language: 'en', weight: 1.0 },
    { alias: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন', language: 'bn', weight: 0.95 },
    { alias: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'mofa certificate attestation apostille', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-mofa-certificate-attestation-apostille-standard',
      variant_name_bn: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Ministry of Foreign Affairs (MOFA) & MOE Certificate Attestation Free Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 2,
      fees: [
        {
          fee_type_bn: 'পররাষ্ট্র মন্ত্রণালয় কনস্যুলার সত্যায়ন সরকারি ফি',
          fee_type_en: 'পররাষ্ট্র মন্ত্রণালয় কনস্যুলার সত্যায়ন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'মন্ত্রণালয়ের কাউন্টারে কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'শিক্ষা মন্ত্রণালয় সত্যায়ন ফি',
          fee_type_en: 'শিক্ষা মন্ত্রণালয় সত্যায়ন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি ফি ০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সংশ্লিষ্ট শিক্ষাবোর্ড / বিশ্ববিদ্যালয় কর্তৃক মূল সনদের পেছনের পাতায় সত্যায়ন সিল',
          document_name_en: 'সংশ্লিষ্ট শিক্ষাবোর্ড / বিশ্ববিদ্যালয় কর্তৃক মূল সনদের পেছনের পাতায় সত্যায়ন সিল',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর আসল পাসপোর্ট বা জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর আসল পাসপোর্ট বা জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিবাহ সনদ বা জন্ম নিবন্ধন হলে আইন মন্ত্রণালয়ের সত্যায়ন সিল',
          document_name_en: 'বিবাহ সনদ বা জন্ম নিবন্ধন হলে আইন মন্ত্রণালয়ের সত্যায়ন সিল',
          format_requirement: 'original',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বোর্ড বা বিশ্ববিদ্যালয় থেকে প্রাথমিক সত্যায়ন',
          instruction_bn: 'যে শিক্ষাবোর্ড বা ভার্সিটি থেকে পাস করেছেন, তাদের পরীক্ষা নিয়ন্ত্রক শাখা থেকে সনদের পেছনে ভেরিফিকেশন সিল করিয়ে নিন।',
          warning_bn: 'বোর্ড সিল ছাড়া মন্ত্রণালয় সরাসরি সত্যায়ন করে না।',
          action_url: 'https://mofa.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শিক্ষা মন্ত্রণালয়ে সত্যায়ন (সেগুনবাগিচা কাউন্টার)',
          instruction_bn: 'শিক্ষা মন্ত্রণালয়ের সত্যায়ন কাউন্টারে মূল সনদ দেখান। কোনো ফি ছাড়াই তাৎক্ষণিক সিল ও সাক্ষর করে দেওয়া হবে।',
          warning_bn: 'দালালরা বলে ভেতরে ঢোকা যায় না—সাধারণ নাগরিকরা সরাসরি কাউন্টারে যেতে পারেন।',
          action_url: 'https://mofa.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পররাষ্ট্র মন্ত্রণালয়ের কনস্যুলার উইংয়ে জমা',
          instruction_bn: 'সেগুনবাগিচায় পররাষ্ট্র মন্ত্রণালয়ের কনস্যুলার কাউন্টারে সকাল ৯টা থেকে বেলা ১২টার মধ্যে জমা দিন। কোনো ফরমের দরকার নেই। কাউন্টার থেকে টোকেন নিন।',
          warning_bn: 'দুপুর ১টা থেকে ৩টার মধ্যে টোকেন দেখালেই কিউআর কোডযুক্ত ডিজিটাল পররাষ্ট্র সত্যায়ন স্টিকার লাগানো মূল সনদ আপনার হাতে তুলে দেওয়া হবে।',
          action_url: 'https://mofa.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পররাষ্ট্র মন্ত্রণালয়ের গেটের বাইরে দাঁড়িয়ে থাকা কোনো দালালকে নিজের মূল্যবান আসল সনদপত্র দেবেন না। তারা অনেক সময় ভুয়া বা জাল স্টিকার লাগিয়ে দেয় যা এম্বাসিতে ধরা পড়লে ভিসা বাতিল ও আজীবন ব্ল্যাকলিস্ট হতে পারেন। মন্ত্রণালয় নিজেই সম্পূর্ণ বিনামূল্যে দ্রুততম সময়ে আসল সিল দিয়ে থাকে।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'পররাষ্ট্র ও শিক্ষা মন্ত্রণালয়ে শিক্ষাগত সনদ ও জন্ম নিবন্ধন সত্যায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://mofa.gov.bd'
    }
  ]
};
