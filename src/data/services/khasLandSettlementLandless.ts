import { ServiceRecord } from '../../types/service';

export const khasLandSettlementLandlessService: ServiceRecord = {
  id: 'bd-khas-land-settlement-landless',
  slug: 'bd-khas-land-settlement-landless',
  category_id: 'land_property',
  name_bn: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা',
  name_en: 'Permanent Agricultural Khas Land Settlement for Landless Families Official Guide',
  responsible_ministry_bn: 'ভূমি মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_ministry_en: 'ভূমি মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_agency_bn: 'ভূমি মন্ত্রণালয় ও জেলা প্রশাসন',
  responsible_agency_en: 'ভূমি মন্ত্রণালয় ও জেলা প্রশাসন',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://minland.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://minland.gov.bd',
  legal_basis: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'permanent agricultural khas land settlement for landless families official guide', language: 'en', weight: 1.0 },
    { alias: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'khas land settlement landless', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-khas-land-settlement-landless-standard',
      variant_name_bn: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Permanent Agricultural Khas Land Settlement for Landless Families Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 180,
      fees: [
        {
          fee_type_bn: 'খাস জমি বন্দোবস্ত আবেদন ফি',
          fee_type_en: 'খাস জমি বন্দোবস্ত আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবেদন বা ফরমের জন্য কোনো ফি নেই।'
        },
        {
          fee_type_bn: 'প্রতীকী সেলামি (সরকার নির্ধারিত)',
          fee_type_en: 'প্রতীকী সেলামি (সরকার নির্ধারিত)',
          amount_bdt: 1.0,
          effective_date: '2022-01-01',
          notes_bn: 'চূড়ান্ত বরাদ্দের সময় সরকার মাত্র ১ টাকা প্রতীকী সেলামি ধার্য করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা কৃষি খাস জমি ব্যবস্থাপনা কমিটির নির্ধারিত আবেদন ফরম',
          document_name_en: 'উপজেলা কৃষি খাস জমি ব্যবস্থাপনা কমিটির নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী স্বামী ও স্ত্রীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারী স্বামী ও স্ত্রীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউনিয়ন পরিষদ চেয়ারম্যান কর্তৃক প্রদত্ত ভূমিহীন ও নদীভাঙা প্রত্যয়নপত্র',
          document_name_en: 'ইউনিয়ন পরিষদ চেয়ারম্যান কর্তৃক প্রদত্ত ভূমিহীন ও নদীভাঙা প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজ ছবি (স্বামী ও স্ত্রীর যৌথ ছবি)',
          document_name_en: 'পাসপোর্ট সাইজ ছবি (স্বামী ও স্ত্রীর যৌথ ছবি)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সহকারী কমিশনার (ভূমি) কার্যালয়ে আবেদন দাখিল',
          instruction_bn: 'নির্ধারিত ফরমে পরিবারপ্রধানের বিবরণ, নদীভাঙা সনদ ও এনআইডি সহ এসিল্যান্ড বরাবর আবেদন জমা দিন।',
          warning_bn: 'আবেদনের জন্য কোনো দালালকে টাকা দেবেন না।',
          action_url: 'https://minland.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ইউনিয়ন ভূমি সহকারী কর্মকর্তা ও উপজেলা কমিটির তদন্ত',
          instruction_bn: 'তহশিলদার ও উপজেলা কৃষি খাস জমি কমিটি সরেজমিনে যাচাই করে দেখবে পরিবারটি আসলেই ভূমিহীন কি না।',
          warning_bn: 'তদন্তে অসদুপায় অবলম্বনের চেষ্টা করা শাস্তিযোগ্য অপরাধ।',
          action_url: 'https://minland.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'জেলা কমিটির অনুমোদন ও যৌথ কবুলিয়ত দলিল সম্পাদন',
          instruction_bn: 'জেলা প্রশাসক (DC)-এর সভাপতিত্বে জেলা কমিটি অনুমোদন দিলে স্বামী ও স্ত্রী উভয়ের নামে যৌথভাবে কবুলিয়ত ও দলিল সম্পাদন করে জমি বুঝিয়ে দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://minland.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: খাস জমি বন্দোবস্ত পাইয়ে দেওয়ার নামে কোনো সংঘবদ্ধ দালাল চক্র টাকা দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) বা ডিসি অফিসে অবহিত করুন। খাস জমি বিক্রয়যোগ্য নয় এবং এটি শুধুমাত্র প্রকৃত ভূমিহীন পরিবারকে প্রতীকী ১ টাকায় দেওয়া হয়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://minland.gov.bd'
    }
  ]
};
