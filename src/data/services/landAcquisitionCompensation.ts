import { ServiceRecord } from '../../types/service';

export const landAcquisitionCompensationService: ServiceRecord = {
  id: 'land-acquisition-compensation',
  slug: 'land-acquisition-compensation',
  category_id: 'land_property',
  name_bn: 'ভূমি অধিগ্রহণ (LA Case) ক্ষতিপূরণের ৩ গুণ টাকা ডিসি অফিস থেকে উত্তোলন',
  name_en: 'Land Acquisition (LA Case) 300% Compensation Claim from DC Office',
  responsible_ministry_bn: 'ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Land',
  responsible_agency_bn: 'জেলা প্রশাসকের কার্যালয় (ভূমি অধিগ্রহণ শাখা / LA Section)',
  responsible_agency_en: 'Office of the Deputy Commissioner (Land Acquisition Section)',
  visiting_office_level: 'district',
  official_portal_url: 'https://land.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://land.gov.bd',
  legal_basis: 'স্থাবর সম্পত্তি অধিগ্রহণ ও হুকুমদখল আইন ২০১৭',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'land acquisition', language: 'en', weight: 1.0 },
    { alias: 'la case', language: 'en', weight: 1.0 },
    { alias: 'la case khotipuron', language: 'banglish', weight: 1.0 },
    { alias: 'dc office la check', language: 'banglish', weight: 1.0 },
    { alias: 'ভূমি অধিগ্রহণ ক্ষতিপূরণ', language: 'bn', weight: 1.0 },
    { alias: 'এলএ কেসের টাকা তোলার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'জমির ক্ষতিপূরণ ৩ গুণ', language: 'bn', weight: 1.0 },
    { alias: 'ডিসি অফিস থেকে এলএ চেক উত্তোলন', language: 'bn', weight: 1.0 },
    { alias: '৮ ধারা নোটিশের জবাব', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'la-compensation-private-land',
      variant_name_bn: 'বেসরকারি ব্যক্তিমালিকানাধীন জমির ৩০০% ক্ষতিপূরণ দাবি ও উত্তোলন',
      variant_name_en: 'Private Land 300% Statutory Compensation Claim & Payout',
      conditions: { type: 'statutory_compensation' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'সরকারি ক্ষতিপূরণ দাবি আবেদন ফি',
          fee_type_en: 'Compensation Claim Processing Fee',
          amount_bdt: 0,
          effective_date: '2017-09-21',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'আইনসম্মত সরকারি ক্ষতিপূরণের হার',
          fee_type_en: 'Statutory Land Compensation Rate',
          amount_bdt: 0,
          effective_date: '2017-09-21',
          notes_bn: 'আইনানুযায়ী বাজারদরের ২০০% অতিরিক্তসহ মোট ৩০০% (৩ গুণ) টাকা প্রদেয়'
        }
      ],
      documents: [
        {
          document_name_bn: 'জেলা প্রশাসন কর্তৃক জারিকৃত ৭ ধারা ও ৮ ধারা সরকারি নোটিশের কপি',
          document_name_en: 'Section 7 & 8 Land Acquisition official notice copies',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মূল রেজিস্ট্রিকৃত দলিল ও ভায়া দলিলের সার্টিফাইড কপি',
          document_name_en: 'Original registered deed & certified chain deeds',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সিএস, এসএ, আরএস ও হাল বিএস/সিটি খতিয়ানের স্পষ্ট কপি',
          document_name_en: 'CS, SA, RS and current BS/City Khatiyan records',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সাব-রেজিস্ট্রি অফিস কর্তৃক ১২ বছরের নির্দায় সনদ (Non-Encumbrance Certificate - NEC)',
          document_name_en: '12-year Non-Encumbrance Certificate (NEC)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ক্ষতিপূরণ গ্রহীতার জাতীয় পরিচয়পত্র ও ব্যাংক অ্যাকাউন্টের চেক বইয়ের পাতা',
          document_name_en: 'Claimant NID & Bank Account MICR Cheque leaf',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: '৮ ধারা নোটিশের প্রেক্ষিতে এলএ শাখায় নথিপত্র দাখিল',
          instruction_bn: 'ডিসি অফিসের ৮ ধারা নোটিশ পাওয়ার ১৫ দিনের মধ্যে মূল দলিল, খতিয়ান ও ১২ বছরের নির্দায় সনদ (NEC) সহ এলএ শাখায় মালিকানার দাবি পেশ করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'যৌথ তদন্ত ও রোয়েদাদ প্রস্তুত',
          instruction_bn: 'ভূমি অধিগ্রহণ কর্মকর্তা ও সার্ভেয়ার সরেজমিনে গিয়ে সীমানা ও স্থাপনা পরিমাপ করে আইনসম্মত ৩০০% ক্ষতিপূরণের রোয়েদাদ (Award) তৈরি করবেন।'
        },
        {
          channel: 'bank',
          step_number: 3,
          title_bn: 'অ্যাকাউন্ট পেয়ী চেকের মাধ্যমে ৩ গুণ টাকা গ্রহণ',
          instruction_bn: 'জেলা প্রশাসকের (DC) দপ্তর থেকে সরাসরি আপনার নামে অ্যাকাউন্ট পেয়ী সরকারি চেক বুঝে নিন, যা আপনার ব্যক্তিগত ব্যাংক অ্যাকাউন্টে জমা হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ডিসি অফিসের সামনে দালাল চক্র ক্ষতিপূরণের চেকের জন্য ১০% থেকে ৩০% কমিশন দাবি করে মিথ্যা আশ্বাস দেয়। কোনো দালাল বা মধ্যস্বত্বভোগীর সাথে আর্থিক লেনদেন করবেন না। মূল দলিল, হাল খাজনার রসিদ ও ১২ বছরের নির্দায়ের কাগজ ঠিক থাকলে সরকার সরাসরি আপনার নামে শতভাগ আইনসম্মত ৩ গুণ ক্ষতিপূরণের চেক হস্তান্তর করে।',
      content_en: 'Land acquisition compensation under the 2017 Act is strictly 300% of market value. Never pay commission to brokers; payments are made directly via account payee cheques.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'স্থাবর সম্পত্তি অধিগ্রহণ ও হুকুমদখল আইন ২০১৭',
      source_url: 'https://land.gov.bd',
      published_date: '2017-09-21'
    }
  ]
};
