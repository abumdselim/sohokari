import { ServiceRecord } from '../../types/service';

export const scaSeedFertilizerDealershipLicenseService: ServiceRecord = {
  id: 'bd-sca-seed-fertilizer-dealership-license',
  slug: 'bd-sca-seed-fertilizer-dealership-license',
  category_id: 'agriculture_food',
  name_bn: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা',
  name_en: 'Seed Certification Agency & DAE Seed and Fertilizer Dealership License Guide',
  responsible_ministry_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়',
  responsible_ministry_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়',
  responsible_agency_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়',
  responsible_agency_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dae.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dae.gov.bd',
  legal_basis: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'seed certification agency & dae seed and fertilizer dealership license guide', language: 'en', weight: 1.0 },
    { alias: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'sca seed fertilizer dealership license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-sca-seed-fertilizer-dealership-license-standard',
      variant_name_bn: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Seed Certification Agency & DAE Seed and Fertilizer Dealership License Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'খুচরা সার ডিলারশিপ লাইসেন্স ফি',
          fee_type_en: 'খুচরা সার ডিলারশিপ লাইসেন্স ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'উপজেলা কমিটির অনুমোদন সাপেক্ষে ১,০০০ টাকা।'
        },
        {
          fee_type_bn: 'বীজ ডিলারশিপ লাইসেন্স ফি (বীজ প্রত্যয়ন এজেন্সি)',
          fee_type_en: 'বীজ ডিলারশিপ লাইসেন্স ফি (বীজ প্রত্যয়ন এজেন্সি)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাৎসরিক লাইসেন্স ফি ৫০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা কৃষি অফিস কর্তৃক সরবরাহকৃত নির্ধারিত আবেদন ফরম',
          document_name_en: 'উপজেলা কৃষি অফিস কর্তৃক সরবরাহকৃত নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বীজ ও সার সংরক্ষণের জন্য উপযুক্ত গুদামের ভাড়া চুক্তিপত্র বা মালিকানার প্রমাণ',
          document_name_en: 'বীজ ও সার সংরক্ষণের জন্য উপযুক্ত গুদামের ভাড়া চুক্তিপত্র বা মালিকানার প্রমাণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা কৃষি কর্মকর্তা (UAO) বরাবর আবেদন দাখিল',
          instruction_bn: 'দোকান ও গুদামের বিবরণ এবং ট্রেড লাইসেন্সসহ উপজেলা কৃষি কর্মকর্তার নিকট আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি উপজেলা কৃষি অফিসে যোগাযোগ করুন।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা সার ও বীজ মনিটরিং কমিটি কর্তৃক গুদাম পরিদর্শন',
          instruction_bn: 'কৃষি কর্মকর্তা সরেজমিনে গুদামের ধারণক্ষমতা, আর্দ্রতা সুরক্ষা ও পরিমাপক স্কেল পরীক্ষা করবেন।',
          warning_bn: 'তদন্তে অবৈধ সুবিধা দেওয়া নিষেধ।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'চালান জমা ও ডিলারশিপ লাইসেন্স গ্রহণ',
          instruction_bn: 'কমিটির সুপারিশের পর ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি ডিলারশিপ লাইসেন্স ও কোড গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dae.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সার ও বীজের কৃত্রিম সংকট সৃষ্টি করা বা বেশি দামে বিক্রি করা বিশেষ ক্ষমতা আইনে দণ্ডনীয় অপরাধ। ডিলারশিপ পেতে কোনো রাজনৈতিক মধ্যস্বত্বভোগী বা দালালকে টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dae.gov.bd'
    }
  ]
};
