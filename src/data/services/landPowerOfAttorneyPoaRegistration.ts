import { ServiceRecord } from '../../types/service';

export const landPowerOfAttorneyPoaRegistrationService: ServiceRecord = {
  id: 'bd-land-power-of-attorney-poa-registration',
  slug: 'bd-land-power-of-attorney-poa-registration',
  category_id: 'land_property',
  name_bn: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা',
  name_en: 'Bangladesh Power of Attorney (PoA) Official Deed Registration Guide',
  responsible_ministry_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ',
  visiting_office_level: 'upazila',
  official_portal_url: 'http://www.dolil.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.dolil.gov.bd',
  legal_basis: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh power of attorney (poa) official deed registration guide', language: 'en', weight: 1.0 },
    { alias: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন', language: 'bn', weight: 0.95 },
    { alias: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন ফি', language: 'bn', weight: 0.95 },
    { alias: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land power of attorney poa registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-power-of-attorney-poa-registration-standard',
      variant_name_bn: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Power of Attorney (PoA) Official Deed Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সাধারণ আমমোক্তারনামা স্ট্যাম্প শুল্ক (General PoA)',
          fee_type_en: 'সাধারণ আমমোক্তারনামা স্ট্যাম্প শুল্ক (General PoA)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'মামলা পরিচালনা ও সম্পত্তি তদারকির জন্য নির্দিষ্ট সরকারি ফি ১৫০০ টাকা।'
        },
        {
          fee_type_bn: 'রেজিস্ট্রেশন ফি',
          fee_type_en: 'রেজিস্ট্রেশন ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি ট্রেজারি চালান ফি।'
        },
        {
          fee_type_bn: 'হলফনামা স্ট্যাম্প ফি',
          fee_type_en: 'হলফনামা স্ট্যাম্প ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'আমমোক্তারদাতার হলফনামা ৩০০ টাকার স্ট্যাম্প।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আমমোক্তারদাতা ও আমমোক্তারগ্রহীতার জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আমমোক্তারদাতা ও আমমোক্তারগ্রহীতার জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'উভয় পক্ষের পাসপোর্ট সাইজ ল্যাব প্রিন্ট রঙিন ছবি',
          document_name_en: 'উভয় পক্ষের পাসপোর্ট সাইজ ল্যাব প্রিন্ট রঙিন ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'তফসিলভুক্ত সম্পত্তির হালনাগাদ খতিয়ান, ডিসিআর ও খাজনার দাখিলা',
          document_name_en: 'তফসিলভুক্ত সম্পত্তির হালনাগাদ খতিয়ান, ডিসিআর ও খাজনার দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মূল দলিলের কপি',
          document_name_en: 'মূল দলিলের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আমমোক্তারনামার ধরন নির্বাচন',
          instruction_bn: 'সাধারণ আমমোক্তারনামা (General PoA) নাকি বিক্রির ক্ষমতাসহ অপ্রত্যাহারযোগ্য (Irrevocable PoA) তা নির্ধারণ করুন। সাধারণ তদারকি ও মামলা লড়তে সাধারণ আমমোক্তারনামা যথেষ্ট।',
          warning_bn: 'অপ্রয়োজনে বিক্রির ক্ষমতাসম্পন্ন আমমোক্তারনামা দেবেন না।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: '১,৫০০ টাকার স্ট্যাম্পে দলিল প্রস্তুত',
          instruction_bn: 'নির্ধারিত স্ট্যাম্পে দলিলের শর্তাবলি লিখুন। ক্ষমতার পরিধি ও মেয়াদ স্পষ্টভাবে উল্লেখ করুন।',
          warning_bn: 'কোনো অনির্দিষ্ট বা অস্পষ্ট শর্ত রাখবেন না।',
          action_url: 'http://www.dolil.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সাব-রেজিস্ট্রারের এজলাসে উভয়ের উপস্থিতি',
          instruction_bn: 'দাতা ও গ্রহীতা নিজে উপস্থিত হয়ে সাব-রেজিস্ট্রারের সামনে স্বাক্ষর ও বায়োমেট্রিক প্রদান করুন।',
          warning_bn: 'উপস্থিতি ছাড়া কোনো ভুয়া আমমোক্তারনামা আইনত কার্যকর হয় না।',
          action_url: 'http://www.dolil.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দালালদের মাধ্যমে কোনো ব্ল্যাঙ্ক স্ট্যাম্পে সই করবেন না। পাওয়ার অব অ্যাটর্নি অপব্যবহার করে জমি আত্মসাতের ঘটনা ঘটে। সরকারি নিয়ম মেনে সুনির্দিষ্ট দায়িত্বের জন্য সীমিত ক্ষমতার আমমোক্তারনামা সম্পাদন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আমমোক্তারনামা দলিল (Power of Attorney) সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.dolil.gov.bd'
    }
  ]
};
