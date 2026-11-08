import { ServiceRecord } from '../../types/service';

export const tradeLicenseService: ServiceRecord = {
  id: 'trade-license',
  slug: 'trade-license',
  category_id: 'business_commerce',
  name_bn: 'ই-ট্রেড লাইসেন্স ইস্যু ও নবায়ন',
  name_en: 'e-Trade License Issuance & Renewal',
  responsible_ministry_bn: 'স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Local Government, Rural Development and Cooperatives',
  responsible_agency_bn: 'সিটি কর্পোরেশন / পৌরসভা / ইউনিয়ন পরিষদ',
  responsible_agency_en: 'City Corporation / Pourashava / Union Parishad',
  visiting_office_level: 'city_corporation',
  official_portal_url: 'https://etradelicense.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://etradelicense.gov.bd',
  legal_basis: 'আদর্শ কর তফসিল ২০১৬ এবং স্থানীয় সরকার আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'trade license', language: 'en', weight: 1.0 },
    { alias: 'trade license fee', language: 'banglish', weight: 1.0 },
    { alias: 'trade license kivabe banabo', language: 'banglish', weight: 1.0 },
    { alias: 'ট্রেড লাইসেন্স ফি', language: 'bn', weight: 1.0 },
    { alias: 'ই ট্রেড লাইসেন্স', language: 'bn', weight: 1.0 },
    { alias: 'দোকানের ট্রেড লাইসেন্স', language: 'bn', weight: 1.0 },
    { alias: 'ট্রেড লাইসেন্স নবায়ন ফি', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'trade-license-citycorp-standard',
      variant_name_bn: 'সিটি কর্পোরেশন ট্রেড লাইসেন্স (সাধারণ বাণিজ্যিক প্রতিষ্ঠান / আইটি)',
      variant_name_en: 'City Corporation Trade License (Commercial / IT)',
      conditions: { area: 'city_corporation' },
      processing_days_sla: 5,
      fees: [
        {
          fee_type_bn: 'সরকারি মূল লাইসেন্স ফি',
          fee_type_en: 'Base Government License Fee',
          amount_bdt: 2000,
          effective_date: '2022-01-01',
          notes_bn: 'ব্যবসার ধরন অনুযায়ী আদর্শ কর তফসিল ভিত্তিক'
        },
        {
          fee_type_bn: 'সাইনবোর্ড কর ও ১৫% ভ্যাট',
          fee_type_en: 'Signboard Tax & 15% VAT',
          amount_bdt: 1500,
          effective_date: '2022-01-01',
          notes_bn: 'মোট আনুমানিক ৩৫০০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'ব্যবসা প্রতিষ্ঠানের দোকান বা অফিসের ভাড়ার চুক্তিপত্র বা মালিকানার দলিল',
          document_name_en: 'Rent agreement or ownership deed of commercial space',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিকের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'Owner NID and passport size photo',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হোল্ডিং ট্যাক্স পরিশোধের রসিদ',
          document_name_en: 'Holding tax payment receipt of premises',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'etradelicense.gov.bd পোর্টালে আবেদন',
          instruction_bn: 'অনলাইন পোর্টালে গিয়ে জোন ও ওয়ার্ড নির্বাচন করে ব্যবসার তথ্য ও নথিপত্র আপলোড করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'অনলাইনে ফি পরিশোধ ও সার্টিফিকেট ডাউনলোড',
          instruction_bn: 'যাচাই শেষে প্রদত্ত চালান অনুযায়ী অনলাইন পেমেন্ট গেটওয়েতে ফি জমা দিয়ে সাথে সাথে কিউআর কোডযুক্ত ডিজিটাল ট্রেড লাইসেন্স ডাউনলোড করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ইউনিয়ন পরিষদে সাধারণ ট্রেড লাইসেন্স মাত্র ৫০০-১০০০ টাকা এবং সিটি কর্পোরেশনে সরকারি ফি রসিদসহ জমা হয়। দালালদের অতিরিক্ত টাকা দেবেন না।',
      content_en: 'Trade license fees are statutory. Never pay intermediaries extra unreceipted amounts.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'স্থানীয় সরকার বিভাগ আদর্শ কর তফসিল নির্দেশিকা',
      source_url: 'https://etradelicense.gov.bd',
      published_date: '2022-01-01'
    }
  ]
};
