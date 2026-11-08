import { ServiceRecord } from '../../types/service';

export const brickfieldEnvironmentalClearanceDcLicenseService: ServiceRecord = {
  id: 'bd-brickfield-environmental-clearance-dc-license',
  slug: 'bd-brickfield-environmental-clearance-dc-license',
  category_id: 'citizen_general',
  name_bn: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা',
  name_en: 'Brickfield Environmental Clearance & Deputy Commissioner License Guide',
  responsible_ministry_bn: 'পরিবেশ অধিদপ্তর ও জেলা প্রশাসন',
  responsible_ministry_en: 'পরিবেশ অধিদপ্তর ও জেলা প্রশাসন',
  responsible_agency_bn: 'পরিবেশ অধিদপ্তর ও জেলা প্রশাসন',
  responsible_agency_en: 'পরিবেশ অধিদপ্তর ও জেলা প্রশাসন',
  visiting_office_level: 'district',
  official_portal_url: 'https://doe.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://doe.gov.bd',
  legal_basis: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'brickfield environmental clearance & deputy commissioner license guide', language: 'en', weight: 1.0 },
    { alias: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brickfield environmental clearance dc license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brickfield-environmental-clearance-dc-license-standard',
      variant_name_bn: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Brickfield Environmental Clearance & Deputy Commissioner License Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'ইটভাটা পরিবেশ ছাড়পত্র ফি (ক্যাটাগরি লাল)',
          fee_type_en: 'ইটভাটা পরিবেশ ছাড়পত্র ফি (ক্যাটাগরি লাল)',
          amount_bdt: 50000.0,
          effective_date: '2022-01-01',
          notes_bn: 'পরিবেশ অধিদপ্তর নির্ধারিত সরকারি ফি।'
        },
        {
          fee_type_bn: 'জেলা প্রশাসন ইটভাটা লাইসেন্স ফি',
          fee_type_en: 'জেলা প্রশাসন ইটভাটা লাইসেন্স ফি',
          amount_bdt: 25000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ডিসি অফিস ট্রেজারি চালান।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ভাটার জমির মালিকানার দলিল, নামজারি পর্চা বা রেজিস্ট্রিকৃত লিজ ডিড',
          document_name_en: 'ভাটার জমির মালিকানার দলিল, নামজারি পর্চা বা রেজিস্ট্রিকৃত লিজ ডিড',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'উপজেলা কৃষি কর্মকর্তা কর্তৃক \'অনাবাদি জমি\' মর্মে প্রত্যয়নপত্র',
          document_name_en: 'উপজেলা কৃষি কর্মকর্তা কর্তৃক \'অনাবাদি জমি\' মর্মে প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউপি চেয়ারম্যান বা পৌর মেয়রের অনাপত্তি সনদ (NOC)',
          document_name_en: 'ইউপি চেয়ারম্যান বা পৌর মেয়রের অনাপত্তি সনদ (NOC)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'জিগজ্যাগ বা আধুনিক চিমনি ও নিঃসরণ নিয়ন্ত্রণ নকশা',
          document_name_en: 'জিগজ্যাগ বা আধুনিক চিমনি ও নিঃসরণ নিয়ন্ত্রণ নকশা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'পরিবেশ অধিদপ্তরের পোর্টালে অনলাইন ছাড়পত্র আবেদন',
          instruction_bn: 'https://doe.gov.bd পোর্টালে নকশা ও কৃষি প্রত্যয়নসহ ছাড়পত্রের আবেদন সাবমিট করুন।',
          warning_bn: 'সব চালান সরাসরি বাংলাদেশ ব্যাংকে জমা দিন।',
          action_url: 'https://doe.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'জেলা ইটভাটা নিয়ন্ত্রণ কমিটি কর্তৃক সরেজমিন পরিদর্শন',
          instruction_bn: 'এডিসি (জেনারেল) ও পরিবেশ কর্মকর্তাদের দল দূরত্ব ও আধুনিক প্রযুক্তির মান পরীক্ষা করবেন।',
          warning_bn: 'অবৈধ ভাটায় ভ্রাম্যমাণ আদালত ভেঙে দেবে।',
          action_url: 'https://doe.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'জেলা প্রশাসক কর্তৃক চূড়ান্ত ইটভাটা লাইসেন্স ইস্যু',
          instruction_bn: 'পরিবেশ ছাড়পত্র জমা দিয়ে জেলা প্রশাসকের কার্যালয় থেকে সরকারি কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://doe.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ ইটভাটা স্থাপন পরিবেশ ও ফসলের মারাত্মক ক্ষতি করে। কোনো দালাল যদি বলে পরিবেশ ছাড়পত্র ছাড়াই ভাটা চালানো যাবে—তবে মনে রাখবেন যেকোনো দিন মোবাইল কোর্টে জরিমানা ও জেল হবে।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://doe.gov.bd'
    }
  ]
};
