import { ServiceRecord } from '../../types/service';

export const voterAreaTransferForm13Service: ServiceRecord = {
  id: 'bd-voter-area-transfer-form-13',
  slug: 'bd-voter-area-transfer-form-13',
  category_id: 'nid_identity',
  name_bn: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা',
  name_en: 'Voter Area Migration and Address Relocation Form-13 Official Guide',
  responsible_ministry_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_ministry_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_bn: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  responsible_agency_en: 'নির্বাচন কমিশন সচিবালয় (ইসি)',
  visiting_office_level: 'district',
  official_portal_url: 'https://nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://nidw.gov.bd',
  legal_basis: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'voter area migration and address relocation form-13 official guide', language: 'en', weight: 1.0 },
    { alias: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি', language: 'bn', weight: 0.95 },
    { alias: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'voter area transfer form 13', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-voter-area-transfer-form-13-standard',
      variant_name_bn: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Voter Area Migration and Address Relocation Form-13 Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'ভোটার এলাকা স্থানান্তর ফি',
          fee_type_en: 'ভোটার এলাকা স্থানান্তর ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'নির্বাচন কমিশনের নিয়ম অনুযায়ী স্থানান্তর সেবায় কোনো সরকারি ফি নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ভোটার এলাকা স্থানান্তরের পূরণকৃত ফরম-১৩ (Form-13)',
          document_name_en: 'ভোটার এলাকা স্থানান্তরের পূরণকৃত ফরম-১৩ (Form-13)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর বর্তমান মূল জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর বর্তমান মূল জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নতুন ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল/গ্যাস বিল/ভাড়া চুক্তিপত্র/বাড়ি ভাড়ার রশিদ/হোল্ডিং ট্যাক্স)',
          document_name_en: 'নতুন ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল/গ্যাস বিল/ভাড়া চুক্তিপত্র/বাড়ি ভাড়ার রশিদ/হোল্ডিং ট্যাক্স)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নতুন ঠিকানার পৌর মেয়র / ইউপি চেয়ারম্যান / ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র',
          document_name_en: 'নতুন ঠিকানার পৌর মেয়র / ইউপি চেয়ারম্যান / ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ফরম-১৩ পূরণ ও প্রত্যয়ন সংগ্রহ',
          instruction_bn: 'এনআইডি ওয়েবসাইট থেকে ফরম-১৩ ডাউনলোড করে আপনার বর্তমান ও কাঙ্ক্ষিত ঠিকানার বিবরণ দিন।',
          warning_bn: 'যে এলাকায় যেতে চান, সেই এলাকার নির্বাচন অফিসে আবেদন জমা দিতে হবে।',
          action_url: 'https://services.nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কাঙ্ক্ষিত উপজেলা/থানা নির্বাচন অফিসে আবেদন জমা',
          instruction_bn: 'নতুন এলাকার থানা নির্বাচন কর্মকর্তার কার্যালয়ে ফরম-১৩ ও ঠিকানার নথিপত্র সশরীরে জমা দিয়ে প্রাপ্তি স্বীকারপত্র নিন।',
          warning_bn: 'কোনো কম্পিউটার দোকানদার বা দালালকে ১,০০০-২,০০০ টাকা দেবেন না।',
          action_url: 'https://nidw.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'তদন্ত ও সিস্টেমে ভোটার এলাকা স্থানান্তর সম্পন্ন',
          instruction_bn: 'নির্বাচন কর্মকর্তা নথিপত্র ও ইউপি প্রত্যয়ন যাচাই করে সিস্টেমে আপনার ভোটার এলাকা আপডেট করে দেবেন। এরপর অনলাইন থেকে নতুন এনআইডি স্লিপ ডাউনলোড করা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nidw.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভোটার এলাকা স্থানান্তরে নির্বাচন কমিশন কোনো ফি নেয় না। কোনো ব্যক্তি বা দালাল ভোটার এলাকা বদলিয়ে দেওয়ার প্রলোভন দেখিয়ে টাকা চাইলে নির্বাচন কমিশন হেল্পলাইন ১০৫ এ কল দিয়ে তাৎক্ষণিক অভিযোগ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nidw.gov.bd'
    }
  ]
};
