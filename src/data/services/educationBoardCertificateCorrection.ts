import { ServiceRecord } from '../../types/service';

export const educationBoardCertificateCorrectionService: ServiceRecord = {
  id: 'bd-education-board-certificate-correction',
  slug: 'bd-education-board-certificate-correction',
  category_id: 'education_boards',
  name_bn: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা',
  name_en: 'Bangladesh Education Board SSC/HSC Certificate & Marksheet Correction Official Fee Guide',
  responsible_ministry_bn: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)',
  responsible_ministry_en: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)',
  responsible_agency_bn: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)',
  responsible_agency_en: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)',
  visiting_office_level: 'division',
  official_portal_url: 'https://dhakaeducationboard.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dhakaeducationboard.gov.bd',
  legal_basis: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh education board ssc/hsc certificate & marksheet correction official fee guide', language: 'en', weight: 1.0 },
    { alias: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন', language: 'bn', weight: 0.95 },
    { alias: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন ফি', language: 'bn', weight: 0.95 },
    { alias: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'education board certificate correction', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-education-board-certificate-correction-standard',
      variant_name_bn: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Education Board SSC/HSC Certificate & Marksheet Correction Official Fee Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'প্রতি সার্টিফিকেটে নাম ও তথ্য সংশোধন ফি',
          fee_type_en: 'প্রতি সার্টিফিকেটে নাম ও তথ্য সংশোধন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'বোর্ড নির্ধারিত ফি প্রতি সনদে ৫০০ টাকা।'
        },
        {
          fee_type_bn: 'প্রতি সনদের নতুন মূল কপি উত্তোলন ফি (সংশোধনের পর)',
          fee_type_en: 'প্রতি সনদের নতুন মূল কপি উত্তোলন ফি (সংশোধনের পর)',
          amount_bdt: 558.0,
          effective_date: '2022-01-01',
          notes_bn: 'সংশোধিত মূল সনদ প্রিন্ট ফি।'
        },
        {
          fee_type_bn: 'মার্কশিট / একাডেমিক ট্রান্সক্রিপ্ট সংশোধন ফি',
          fee_type_en: 'মার্কশিট / একাডেমিক ট্রান্সক্রিপ্ট সংশোধন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি মার্কশিট ফি ৫০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর অনলাইন জন্ম নিবন্ধন সনদ ও জাতীয় পরিচয়পত্র',
          document_name_en: 'আবেদনকারীর অনলাইন জন্ম নিবন্ধন সনদ ও জাতীয় পরিচয়পত্র',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (পিতা-মাতার নাম সংশোধনের ক্ষেত্রে)',
          document_name_en: 'পিতা ও মাতার জাতীয় পরিচয়পত্র (পিতা-মাতার নাম সংশোধনের ক্ষেত্রে)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'অধ্যক্ষ / প্রধান শিক্ষক কর্তৃক ফরওয়ার্ডিং প্রত্যয়নপত্র',
          document_name_en: 'অধ্যক্ষ / প্রধান শিক্ষক কর্তৃক ফরওয়ার্ডিং প্রত্যয়নপত্র',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় দৈনিকে বিজ্ঞপ্তি (বিজ্ঞপ্তির মূল কাটিং)',
          document_name_en: 'জাতীয় দৈনিকে বিজ্ঞপ্তি (বিজ্ঞপ্তির মূল কাটিং)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সংশ্লিষ্ট শিক্ষাবোর্ডের ই-সেবা পোর্টালে আবেদন',
          instruction_bn: 'নিজ শিক্ষাবোর্ডের পোর্টালে (যেমন ঢাকা বোর্ড: dhakaeducationboard.gov.bd) যান। \'নাম ও বয়স সংশোধন\' মেনুতে রোল নম্বর, রেজিস্ট্রেশন নম্বর ও পাসের সন দিয়ে ফর্ম পূরণ করুন।',
          warning_bn: 'জেএসসি, এসএসসি এবং এইচএসসি ধারাবাহিকভাবে সংশোধন করতে হয়।',
          action_url: 'https://dhakaeducationboard.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'প্রমাণপত্র আপলোড ও ফি পরিশোধ',
          instruction_bn: 'পত্রিকার বিজ্ঞপ্তির কাটিং, প্রধান শিক্ষকের প্রত্যয়ন এবং জন্ম সনদ আপলোড করে \'সোনালী সেবা\' বা অনলাইন গেটওয়েতে ফি দিন।',
          warning_bn: 'বোর্ড কাউন্টারে কাউকে বাড়তি টাকা দেবেন না।',
          action_url: 'https://dhakaeducationboard.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'নাম সংশোধন কমিটির ভার্চুয়াল বা সরাসরি মিটিং',
          instruction_bn: 'বোর্ড কর্তৃক নির্ধারিত তারিখে অভিভাবক বা মূল কাগজপত্রসহ উপস্থিত হন। তথ্য সঠিক থাকলে কমিটি অনুমোদন দেবে।',
          warning_bn: 'অনুমোদনের পর পুরোনো মূল সনদ বোর্ডে জমা দিয়ে নতুন নির্ভুল সনদ সংগ্রহ করতে পারবেন।',
          action_url: 'https://dhakaeducationboard.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: বোর্ড প্রাঙ্গণে কোনো বহিরাগত ব্যক্তির সাথে সনদের নাম সংশোধনের জন্য চুক্তি করবেন না। তাদের দেওয়া ভূয়া সিল বা জাল সার্টিফিকেট দিয়ে পাসপোর্টে জালিয়াতি ধরা পড়লে ফৌজদারি আইনে জেল হতে পারে। বোর্ডের পুরো পদ্ধতিটি এখন অনলাইন ট্র্যাকিংযুক্ত।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dhakaeducationboard.gov.bd'
    }
  ]
};
