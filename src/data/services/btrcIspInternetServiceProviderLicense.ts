import { ServiceRecord } from '../../types/service';

export const btrcIspInternetServiceProviderLicenseService: ServiceRecord = {
  id: 'bd-btrc-isp-internet-service-provider-license',
  slug: 'bd-btrc-isp-internet-service-provider-license',
  category_id: 'citizen_general',
  name_bn: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা',
  name_en: 'BTRC Internet Service Provider ISP License & Renewal Official Guide',
  responsible_ministry_bn: 'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)',
  responsible_ministry_en: 'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)',
  responsible_agency_bn: 'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)',
  responsible_agency_en: 'বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)',
  visiting_office_level: 'district',
  official_portal_url: 'https://btrc.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://btrc.gov.bd',
  legal_basis: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'btrc internet service provider isp license & renewal official guide', language: 'en', weight: 1.0 },
    { alias: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'btrc isp internet service provider license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-btrc-isp-internet-service-provider-license-standard',
      variant_name_bn: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'BTRC Internet Service Provider ISP License & Renewal Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: 'উপজেলা বা থানা ক্যাটাগরি আইএসপি লাইসেন্স ফি',
          fee_type_en: 'উপজেলা বা থানা ক্যাটাগরি আইএসপি লাইসেন্স ফি',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'উপজেলা পর্যায়ে লাইসেন্স ফি মাত্র ১০,০০০ টাকা।'
        },
        {
          fee_type_bn: 'জেলা ক্যাটাগরি আইএসপি লাইসেন্স ফি',
          fee_type_en: 'জেলা ক্যাটাগরি আইএসপি লাইসেন্স ফি',
          amount_bdt: 25000.0,
          effective_date: '2022-01-01',
          notes_bn: 'জেলা পর্যায়ে লাইসেন্স ফি ২৫,০০০ টাকা।'
        },
        {
          fee_type_bn: '১৫% সরকারি ভ্যাট',
          fee_type_en: '১৫% সরকারি ভ্যাট',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'উপজেলা ফি-এর ওপর ১৫% সরকারি ভ্যাট।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারী প্রতিষ্ঠানের ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          document_name_en: 'আবেদনকারী প্রতিষ্ঠানের ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিক বা পরিচালকদের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'মালিক বা পরিচালকদের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নেটওয়ার্ক টপোলজি ডায়াগ্রাম ও ব্যবহৃত ব্যান্ডউইথ প্রোভাইডারের বিবরণ',
          document_name_en: 'নেটওয়ার্ক টপোলজি ডায়াগ্রাম ও ব্যবহৃত ব্যান্ডউইথ প্রোভাইডারের বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ব্যাংক সলভেন্সি সার্টিফিকেট (ন্যূনতম আর্থিক সামর্থ্যের প্রমাণ)',
          document_name_en: 'ব্যাংক সলভেন্সি সার্টিফিকেট (ন্যূনতম আর্থিক সামর্থ্যের প্রমাণ)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিটিআরসি পোর্টালে অনলাইন লাইসেন্স আবেদন',
          instruction_bn: 'https://btrc.gov.bd পোর্টালে গিয়ে নির্ধারিত পে-অর্ডার ও কারিগরি নথিসহ আবেদন সাবমিট করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি নিজের কোম্পানির নামে আবেদন করুন।',
          action_url: 'https://btrc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'গোয়েন্দা সংস্থা ও বিটিআরসি কারিগরি টিম কর্তৃক ভেরিফিকেশন',
          instruction_bn: 'আবেদনকারীর বিরুদ্ধে কোনো সাইবার অপরাধ বা রাষ্ট্রবিরোধী রেকর্ড নেই তা যাচাই করা হবে।',
          warning_bn: 'তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।',
          action_url: 'https://btrc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আইএসপি লাইসেন্স ইস্যু ও ব্যান্ডউইথ সংযোগ',
          instruction_bn: 'অনুমোদিত হলে বিটিআরসি ৫ বছর মেয়াদি লাইসেন্স ইস্যু করবে যার ভিত্তিতে এনটিটিএন ও আইআইজি থেকে বৈধ ব্যান্ডউইথ টানা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://btrc.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ ব্রডব্যান্ড ব্যবসা ফৌজদারি অপরাধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার চুক্তি করতে চাইলে সরাসরি বিটিআরসি হেল্পলাইন ১০০ নম্বরে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://btrc.gov.bd'
    }
  ]
};
