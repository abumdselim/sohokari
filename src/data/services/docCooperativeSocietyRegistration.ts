import { ServiceRecord } from '../../types/service';

export const docCooperativeSocietyRegistrationService: ServiceRecord = {
  id: 'bd-doc-cooperative-society-registration',
  slug: 'bd-doc-cooperative-society-registration',
  category_id: 'business_trade',
  name_bn: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা',
  name_en: 'Department of Cooperatives Society Registration Audit & Bylaws Approval Guide',
  responsible_ministry_bn: 'সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_ministry_en: 'সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_agency_bn: 'সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_agency_en: 'সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://coop.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://coop.gov.bd',
  legal_basis: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'department of cooperatives society registration audit & bylaws approval guide', language: 'en', weight: 1.0 },
    { alias: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন', language: 'bn', weight: 0.95 },
    { alias: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'doc cooperative society registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-doc-cooperative-society-registration-standard',
      variant_name_bn: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Department of Cooperatives Society Registration Audit & Bylaws Approval Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'প্রাথমিক সমবায় সমিতি নিবন্ধন ফি',
          fee_type_en: 'প্রাথমিক সমবায় সমিতি নিবন্ধন ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'কৃষি ও সাধারণ সমবায় সমিতির সরকারি ফি মাত্র ৩০০ টাকা।'
        },
        {
          fee_type_bn: 'সঞ্চয় ও ঋণদান সমবায় সমিতি নিবন্ধন ফি',
          fee_type_en: 'সঞ্চয় ও ঋণদান সমবায় সমিতি নিবন্ধন ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সঞ্চয় ও ক্ষুদ্রঋণ কার্যক্রম পরিচালনাকারী সমবায়।'
        }
      ],
      documents: [
        {
          document_name_bn: 'সমবায় অধিদপ্তরের নির্ধারিত আবেদন ফরম ও চার কপি উপ-আইন (Bylaws)',
          document_name_en: 'সমবায় অধিদপ্তরের নির্ধারিত আবেদন ফরম ও চার কপি উপ-আইন (Bylaws)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রাথমিক সাধারণ সভার কার্যবিবরণী ও প্রস্তাব',
          document_name_en: 'প্রাথমিক সাধারণ সভার কার্যবিবরণী ও প্রস্তাব',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সকল সদস্যের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'সকল সদস্যের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সমিতির প্রাথমিক শেয়ার ও সঞ্চয় আমানতের ব্যাংক জমার বিবরণী',
          document_name_en: 'সমিতির প্রাথমিক শেয়ার ও সঞ্চয় আমানতের ব্যাংক জমার বিবরণী',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা সমবায় কর্মকর্তা বরাবর আবেদন',
          instruction_bn: 'উপজেলা বা থানা সমবায় কর্মকর্তার নিকট চার কপি উপ-আইন ও চালানের কপিসহ আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়া সরাসরি উপজেলা সমবায় অফিসে যান।',
          action_url: 'https://coop.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সমবায় ইন্সপেক্টর কর্তৃক প্রাথমিক তদন্ত',
          instruction_bn: 'ইন্সপেক্টর সদস্যদের সাথে সরাসরি সাক্ষাৎ করবেন এবং সমিতির উদ্দেশ্য ও প্রাথমিক শেয়ার যাচাই করবেন।',
          warning_bn: 'কোনো অনিয়ম বা উৎকোচ লেনদেন আইনত অপরাধ।',
          action_url: 'https://coop.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'নিবন্ধন সনদ ও সিলমোহরকৃত উপ-আইন গ্রহণ',
          instruction_bn: 'উপজেলা বা জেলা সমবায় কর্মকর্তা নিবন্ধন সনদ ইস্যু করবেন এবং সমিতির নামে সরকারি অডিট নম্বর বরাদ্দ হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://coop.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সমবায় সমিতির নামে ব্যাংকিং বা উচ্চ সুদের ফাঁদ পাতা আইনত নিষিদ্ধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার নামে লাখ টাকা চাইলে সরাসরি জেলা সমবায় কর্মকর্তা বা দুর্নীতি দমন কমিশনে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://coop.gov.bd'
    }
  ]
};
