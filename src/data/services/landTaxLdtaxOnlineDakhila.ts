import { ServiceRecord } from '../../types/service';

export const landTaxLdtaxOnlineDakhilaService: ServiceRecord = {
  id: 'bd-land-tax-ldtax-online-dakhila',
  slug: 'bd-land-tax-ldtax-online-dakhila',
  category_id: 'land_property',
  name_bn: 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ',
  name_en: 'Bangladesh Online Land Development Tax (LD Tax) Payment & Dakhila Download',
  responsible_ministry_bn: 'ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'ভূমি মন্ত্রণালয়',
  responsible_agency_bn: 'ভূমি মন্ত্রণালয়',
  responsible_agency_en: 'ভূমি মন্ত্রণালয়',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://land.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://land.gov.bd',
  legal_basis: 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh online land development tax (ld tax) payment & dakhila download', language: 'en', weight: 1.0 },
    { alias: 'ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ', language: 'bn', weight: 0.95 },
    { alias: 'ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land tax ldtax online dakhila', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-tax-ldtax-online-dakhila-standard',
      variant_name_bn: 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Online Land Development Tax (LD Tax) Payment & Dakhila Download (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'কৃষি জমি (২৫ বিঘা বা ৮.২৫ একর পর্যন্ত)',
          fee_type_en: 'কৃষি জমি (২৫ বিঘা বা ৮.২৫ একর পর্যন্ত)',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'শুধুমাত্র দাখিলা ফি বাবদ নূন্যতম সরকারি চার্জ প্রযোজ্য হতে পারে।'
        },
        {
          fee_type_bn: 'আবাসিক বা বাণিজ্যিক জমি',
          fee_type_en: 'আবাসিক বা বাণিজ্যিক জমি',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'জমির অবস্থান (গ্রাম, পৌরসভা, সিটি কর্পোরেশন) এবং শতকের পরিমাণ অনুযায়ী স্বয়ংক্রিয়ভাবে সিস্টেম হিসাব করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর',
          document_name_en: 'জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির হালনাগাদ খতিয়ান ও দাগ নম্বর',
          document_name_en: 'জমির হালনাগাদ খতিয়ান ও দাগ নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্ববর্তী খাজনার দাখিলার কপি (যদি থাকে)',
          document_name_en: 'পূর্ববর্তী খাজনার দাখিলার কপি (যদি থাকে)',
          format_requirement: 'digital_scan',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'এলডি ট্যাক্স পোর্টালে নাগরিক নিবন্ধন',
          instruction_bn: 'https://ldtax.gov.bd পোর্টালে যান। \'নাগরিক কর্নার\'-এ গিয়ে মোবাইল নম্বর ও এনআইডি দিয়ে নিবন্ধন করুন।',
          warning_bn: 'একবার নিবন্ধন করলে আপনার সব জমির খাজনা এক প্রোফাইল থেকেই দেওয়া যাবে।',
          action_url: 'https://ldtax.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'খতিয়ান এন্ট্রি ও হোল্ডিং সংযোজন',
          instruction_bn: 'জেলা, উপজেলা, মৌজা এবং আপনার খতিয়ান নম্বর দিয়ে হোল্ডিং খুঁজুন এবং যুক্ত করুন। ভূমি সহকারী কর্মকর্তা হোল্ডিং অনুমোদন দিলে বকেয়া ও বর্তমান খাজনার দাবি সিস্টেমে দেখা যাবে।',
          warning_bn: 'অনুমোদন হতে দেরি হলে ১৬১২২ নম্বরে কল করে জানান।',
          action_url: 'https://land.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন পেমেন্ট ও দাখিলা প্রিন্ট',
          instruction_bn: '\'ই-পেমেন্ট\' বাটনে ক্লিক করে মোবাইল ব্যাংকিং দিয়ে কর পরিশোধ করুন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই কিউআর কোডযুক্ত অনলাইন দাখিলা ডাউনলোড ও প্রিন্ট করে নিন।',
          warning_bn: 'এই ডিজিটাল দাখিলা যে কোনো জমি রেজিস্ট্রি বা নামজারির কাজে শতভাগ বৈধ।',
          action_url: 'https://land.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: তহশিলদার বা ইউনিয়ন ভূমি অফিসের কোনো ব্যক্তিকে বাড়তি নগদ টাকা দেওয়ার প্রয়োজন নেই। সরকারি সিস্টেমে যে পরিমাণ টাকা আসবে, তার বাইরে অতিরিক্ত টাকা দাবি করা দণ্ডনীয় অপরাধ।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ অফিসিয়াল পোর্টাল',
      source_url: 'https://land.gov.bd'
    }
  ]
};
