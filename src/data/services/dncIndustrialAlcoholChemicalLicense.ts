import { ServiceRecord } from '../../types/service';

export const dncIndustrialAlcoholChemicalLicenseService: ServiceRecord = {
  id: 'bd-dnc-industrial-alcohol-chemical-license',
  slug: 'bd-dnc-industrial-alcohol-chemical-license',
  category_id: 'citizen_general',
  name_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা',
  name_en: 'DNC Industrial Rectified Spirit & Alcohol Chemical License Guide',
  responsible_ministry_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_ministry_en: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_agency_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_agency_en: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dnc.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dnc.gov.bd',
  legal_basis: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'dnc industrial rectified spirit & alcohol chemical license guide', language: 'en', weight: 1.0 },
    { alias: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dnc industrial alcohol chemical license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dnc-industrial-alcohol-chemical-license-standard',
      variant_name_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'DNC Industrial Rectified Spirit & Alcohol Chemical License Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'ইন্ডাস্ট্রিয়াল রেকটিফাইড স্পিরিট ব্যবহার লাইসেন্স ফি',
          fee_type_en: 'ইন্ডাস্ট্রিয়াল রেকটিফাইড স্পিরিট ব্যবহার লাইসেন্স ফি',
          amount_bdt: 25000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাৎসরিক লাইসেন্স ফি ২৫,০০০ টাকা।'
        },
        {
          fee_type_bn: 'বার্ষিক কোটা নবায়ন ফি',
          fee_type_en: 'বার্ষিক কোটা নবায়ন ফি',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাৎসরিক নবায়নে ১০,০০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'কারখানার ট্রেড লাইসেন্স, ই-টিন ও ভ্যাট রেজিস্ট্রেশন',
          document_name_en: 'কারখানার ট্রেড লাইসেন্স, ই-টিন ও ভ্যাট রেজিস্ট্রেশন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA) বা বিএসটিআই কর্তৃক উৎপাদিত পণ্যের অনুমোদনপত্র',
          document_name_en: 'ঔষধ প্রশাসন অধিদপ্তর (DGDA) বা বিএসটিআই কর্তৃক উৎপাদিত পণ্যের অনুমোদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'উৎপাদন প্রক্রিয়ায় স্পিরিটের প্রয়োজনীয়তার কেমিক্যাল ফর্মুলা ও ইঞ্জিনিয়ারিং অনুপাত',
          document_name_en: 'উৎপাদন প্রক্রিয়ায় স্পিরিটের প্রয়োজনীয়তার কেমিক্যাল ফর্মুলা ও ইঞ্জিনিয়ারিং অনুপাত',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিরাপদ স্টোরেজ ও অগ্নিনির্বাপণ ব্যবস্থার বিবরণ',
          document_name_en: 'নিরাপদ স্টোরেজ ও অগ্নিনির্বাপণ ব্যবস্থার বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের পোর্টালে অনলাইন লাইসেন্স আবেদন',
          instruction_bn: 'https://dnc.gov.bd পোর্টালে কারখানার বিবরণ ও কেমিক্যাল ড্রয়িংসহ আবেদন দাখিল করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি নিজের প্রতিষ্ঠানের নামে আবেদন করুন।',
          action_url: 'https://dnc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ডিএনসি উপ-পরিচালক ও রাসায়নিক পরীক্ষক দল কর্তৃক কারখানা পরিদর্শন',
          instruction_bn: 'পরিদর্শন দল কারখানার স্টোরেজ ভল্ট ও ব্যবহৃত রেজিস্টার খাতা পরীক্ষা করবেন।',
          warning_bn: 'অবৈধ অপব্যবহারের প্রমাণ পেলে ফৌজদারি মামলা হবে।',
          action_url: 'https://dnc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ট্রেজারি চালান জমা ও বাৎসরিক কোটা লাইসেন্স গ্রহণ',
          instruction_bn: 'মন্ত্রণালয়ের অনুমোদন সাপেক্ষে চালানের মূল কপি জমা দিয়ে অফিশিয়াল পারমিট গ্রহণ করুন যার ভিত্তিতে সরকারি ডিস্টিলারি বা আমদানিকারক থেকে স্পিরিট সংগ্রহ করা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dnc.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ইন্ডাস্ট্রিয়াল অ্যালকোহলের অপব্যবহার বিশেষ ক্ষমতা আইনে মৃত্যুদণ্ড বা যাবজ্জীবনযোগ্য অপরাধ। লাইসেন্স পেতে কোনো দালালকে টাকা দেবেন না, সরকারি আইন অনুযায়ী ডিএনসির সাথে সরাসরি কাজ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dnc.gov.bd'
    }
  ]
};
