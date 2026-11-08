import { ServiceRecord } from '../../types/service';

export const nidUnder18MinorSmartcardService: ServiceRecord = {
  id: 'bd-nid-under-18-minor-smartcard',
  slug: 'bd-nid-under-18-minor-smartcard',
  category_id: 'nid_identity',
  name_bn: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা',
  name_en: 'Under-18 Minor Citizen Smart National ID Card Application Official Guide',
  responsible_ministry_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_ministry_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  visiting_office_level: 'district',
  official_portal_url: 'https://nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://nidw.gov.bd',
  legal_basis: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'under-18 minor citizen smart national id card application official guide', language: 'en', weight: 1.0 },
    { alias: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন', language: 'bn', weight: 0.95 },
    { alias: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'nid under 18 minor smartcard', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-nid-under-18-minor-smartcard-standard',
      variant_name_bn: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Under-18 Minor Citizen Smart National ID Card Application Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'নতুন অপ্রাপ্তবয়স্ক এনআইডি নিবন্ধন ফি',
          fee_type_en: 'নতুন অপ্রাপ্তবয়স্ক এনআইডি নিবন্ধন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো সরকারি ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (BDRIS ভেরিফাইড)',
          document_name_en: 'আবেদনকারীর ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (BDRIS ভেরিফাইড)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রত্যয়নপত্র বা জেএসসি/এসএসসি রেজিস্ট্রেশন কার্ড',
          document_name_en: 'শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রত্যয়নপত্র বা জেএসসি/এসএসসি রেজিস্ট্রেশন কার্ড',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদ্যুৎ বিলের কপি বা হোল্ডিং ট্যাক্স রশিদ (ঠিকানা প্রমাণের জন্য)',
          document_name_en: 'বিদ্যুৎ বিলের কপি বা হোল্ডিং ট্যাক্স রশিদ (ঠিকানা প্রমাণের জন্য)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইনে নতুন ভোটার হিসেবে তথ্য এন্ট্রি',
          instruction_bn: 'https://services.nidw.gov.bd পোর্টালে ঢুকে নিজের নাম, পিতামাতার নাম, রক্তের গ্রুপ ও ঠিকানা পূরণ করে ফরম প্রিন্ট করুন।',
          warning_bn: 'অনলাইন জন্ম নিবন্ধনের সাথে নামের বানান হুবহু মিল রাখুন।',
          action_url: 'https://services.nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা/থানা নির্বাচন অফিসে বায়োমেট্রিক প্রদান',
          instruction_bn: 'প্রিন্টকৃত ফরম ও প্রয়োজনীয় নথিপত্রসহ নির্বাচন অফিসে গিয়ে ১০ আঙুলের ছাপ, চোখের আইরিশ স্ক্যান ও ছবি দিন।',
          warning_bn: 'কোনো কম্পিউটার দোকানদারকে ফরম জমার জন্য টাকা দেবেন না।',
          action_url: 'https://nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন এনআইডি স্লিপ ও স্মার্ট কার্ড গ্রহণ',
          instruction_bn: 'বায়োমেট্রিক গ্রহণের পর প্রদত্ত স্লিপ নম্বর দিয়ে অনলাইন পোর্টাল থেকে এনআইডির সফট কপি ডাউনলোড করে সঙ্গে সঙ্গেই পাসপোর্ট বা ব্যাংকে ব্যবহার করা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nidw.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অপ্রাপ্তবয়স্কদের এনআইডি সম্পূর্ণ বিনামূল্যে দেওয়া হয়। দালালরা তারিখ আগিয়ে দেওয়ার কথা বলে টাকা চাইলে নির্বাচন কমিশনের হটলাইন ১০৫ এ অভিযোগ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: '১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nidw.gov.bd'
    }
  ]
};
