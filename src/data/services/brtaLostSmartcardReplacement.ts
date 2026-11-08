import { ServiceRecord } from '../../types/service';

export const brtaLostSmartcardReplacementService: ServiceRecord = {
  id: 'bd-brta-lost-smartcard-replacement',
  slug: 'bd-brta-lost-smartcard-replacement',
  category_id: 'transport_brta',
  name_bn: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা',
  name_en: 'BRTA Lost Digital Registration Certificate Smart Card Duplicate Guide',
  responsible_ministry_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_ministry_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  visiting_office_level: 'district',
  official_portal_url: 'https://brta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'brta lost digital registration certificate smart card duplicate guide', language: 'en', weight: 1.0 },
    { alias: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brta lost smartcard replacement', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brta-lost-smartcard-replacement-standard',
      variant_name_bn: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BRTA Lost Digital Registration Certificate Smart Card Duplicate Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'স্মার্ট কার্ড প্রতিলিপি ফি',
          fee_type_en: 'স্মার্ট কার্ড প্রতিলিপি ফি',
          amount_bdt: 550.0,
          effective_date: '2022-01-01',
          notes_bn: 'ফি ৫৫০ টাকা।'
        },
        {
          fee_type_bn: '১৫% সরকারি ভ্যাট',
          fee_type_en: '১৫% সরকারি ভ্যাট',
          amount_bdt: 83.0,
          effective_date: '2022-01-01',
          notes_bn: 'মোট প্রদেয় সরকারি ফি ৬৩৩ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'থানার মূল সাধারণ ডায়েরি (জিডি) কপি ও ট্রাফিক ক্লিয়ারেন্স সনদ',
          document_name_en: 'থানার মূল সাধারণ ডায়েরি (জিডি) কপি ও ট্রাফিক ক্লিয়ারেন্স সনদ',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'গাড়ির মূল ট্যাক্স টোকেন ও ফিটনেস সনদের কপি',
          document_name_en: 'গাড়ির মূল ট্যাক্স টোকেন ও ফিটনেস সনদের কপি',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিকের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'মালিকের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিআরটিএ নির্ধারিত আবেদন ফরম (স্মার্ট কার্ড প্রতিলিপি ফরম)',
          document_name_en: 'বিআরটিএ নির্ধারিত আবেদন ফরম (স্মার্ট কার্ড প্রতিলিপি ফরম)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'থানায় জিডি ও ট্রাফিক ক্লিয়ারেন্স সংগ্রহ',
          instruction_bn: 'গাড়ির স্মার্ট কার্ড হারানোর জিডি করে সংশ্লিষ্ট ট্রাফিক পুলিশ অফিস থেকে ক্লিয়ারেন্স নিন যে গাড়িটির কোনো মামলা বা জরিমানা বকেয়া নেই।',
          warning_bn: 'জিডিতে চেসিস ও ইঞ্জিন নম্বর নির্ভুল থাকতে হবে।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বিএসপি (BSP) পোর্টালে বা ব্যাংকে ৬৩৩ টাকা সরকারি ফি প্রদান',
          instruction_bn: 'https://bsp.brta.gov.bd পোর্টাল বা নির্ধারিত ব্যাংকে ৬৩৩ টাকা জমা দিয়ে জমার রশিদ সংগ্রহ করুন।',
          warning_bn: 'কোনো দালালকে টাকা দেবেন না।',
          action_url: 'https://bsp.brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সার্কেল অফিসে নথিপত্র জমা ও বায়োমেট্রিক প্রদান',
          instruction_bn: 'মূল নথিপত্র সার্কেল অফিসে জমা দিয়ে বায়োমেট্রিক স্লিপ নিন। স্মার্ট কার্ড প্রস্তুত হলে ফোনে এসএমএস আসবে এবং অফিস থেকে সংগ্রহ করতে পারবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://brta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বিআরটিএ প্রাঙ্গণে দালালদের কোনো কাজ নেই। ব্যাংকে ৬৩৩ টাকার চালান জমা দিয়ে নিজেই আবেদন জমা দিন। কোনো কর্মকর্তা ঘুষ দাবি করলে বিআরটিএ হেল্পলাইন ১৬৪৩১ এ কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://brta.gov.bd'
    }
  ]
};
