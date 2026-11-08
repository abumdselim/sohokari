import { ServiceRecord } from '../../types/service';

export const postalLifeInsurancePliClaimLoanService: ServiceRecord = {
  id: 'bd-postal-life-insurance-pli-claim-loan',
  slug: 'bd-postal-life-insurance-pli-claim-loan',
  category_id: 'finance_pension',
  name_bn: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা',
  name_en: 'Postal Life Insurance PLI Policy Claim Settlement & Loan Official Guide',
  responsible_ministry_bn: 'বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ',
  responsible_ministry_en: 'বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ',
  responsible_agency_bn: 'বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ',
  responsible_agency_en: 'বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://bdpost.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://bdpost.gov.bd',
  legal_basis: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'postal life insurance pli policy claim settlement & loan official guide', language: 'en', weight: 1.0 },
    { alias: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন', language: 'bn', weight: 0.95 },
    { alias: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন ফি', language: 'bn', weight: 0.95 },
    { alias: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'postal life insurance pli claim loan', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-postal-life-insurance-pli-claim-loan-standard',
      variant_name_bn: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Postal Life Insurance PLI Policy Claim Settlement & Loan Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'পলিসি আবেদন ফরম ও প্রসেসিং ফি',
          fee_type_en: 'পলিসি আবেদন ফরম ও প্রসেসিং ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'পিএলআই পলিসি খোলার কোনো আবেদন ফি নেই।'
        },
        {
          fee_type_bn: 'সরকারি মেডিকেল পরীক্ষা ফি (যদি প্রযোজ্য হয়)',
          fee_type_en: 'সরকারি মেডিকেল পরীক্ষা ফি (যদি প্রযোজ্য হয়)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি চিকিৎসকের ফি মাত্র ৫০-১০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারী ও নমিনির জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারী ও নমিনির জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বয়সের প্রমাণপত্র (এসএসসি সনদ বা অনলাইন জন্ম নিবন্ধন)',
          document_name_en: 'বয়সের প্রমাণপত্র (এসএসসি সনদ বা অনলাইন জন্ম নিবন্ধন)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজ রঙিন ছবি (বীমাগ্রহীতা ও নমিনি)',
          document_name_en: 'পাসপোর্ট সাইজ রঙিন ছবি (বীমাগ্রহীতা ও নমিনি)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ডাক জীবন বীমার নির্ধারিত পূরণকৃত প্রস্তাবপত্র',
          document_name_en: 'ডাক জীবন বীমার নির্ধারিত পূরণকৃত প্রস্তাবপত্র',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নিকটস্থ প্রধান ডাকঘর বা উপজেলা পোস্ট অফিসে যোগাযোগ',
          instruction_bn: 'ডাক জীবন বীমার ফিল্ড অফিসার বা কাউন্টারে গিয়ে বয়স অনুযায়ী প্রিমিয়ামের চার্ট দেখে পলিসি নির্বাচন করুন।',
          warning_bn: 'সরকারি কর্মচারী ও সাধারণ নাগরিক উভয়ই এই বীমা করতে পারেন।',
          action_url: 'https://bdpost.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'প্রথম প্রিমিয়াম জমা ও প্রিমিয়াম বুক গ্রহণ',
          instruction_bn: 'পোস্ট অফিস কাউন্টারে সরাসরি টাকা জমা দিয়ে অফিশিয়াল প্রিমিয়াম পাসবই গ্রহণ করুন। নগদ বা মোবাইল ওয়ালেটেও জমা দেওয়া যায়।',
          warning_bn: 'সব সময় ডাকঘরের অফিশিয়াল রসিদ রাখবেন।',
          action_url: 'https://bdpost.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'মেয়াদপূর্তিতে মূল টাকা ও সর্বোচ্চ সরকারি বোনাস লাভ',
          instruction_bn: 'মেয়াদপূর্তিতে পাসবই জমা দিলে সরকার নির্ধারিত দেশের সর্বোচ্চ বোনাসসহ সম্পূর্ণ টাকা চেকের মাধ্যমে সরাসরি প্রদান করা হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bdpost.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ডাক জীবন বীমা শতভাগ সরকারি ও নিরাপদ। কোনো দালাল বা তৃতীয় পক্ষের হাতে প্রিমিয়ামের টাকা দেবেন না, সরাসরি ডাকঘর কাউন্টারে বা সরকারি ডিজিটাল মাধ্যমে জমা দিয়ে রসিদ নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bdpost.gov.bd'
    }
  ]
};
