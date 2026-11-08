import { ServiceRecord } from '../../types/service';

export const firearmsShotgunPistolLicenseRenewalService: ServiceRecord = {
  id: 'bd-firearms-shotgun-pistol-license-renewal',
  slug: 'bd-firearms-shotgun-pistol-license-renewal',
  category_id: 'citizen_general',
  name_bn: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা',
  name_en: 'Personal Firearms Shotgun & Pistol License & Annual Renewal Official Guide',
  responsible_ministry_bn: 'জেলা প্রশাসন ও স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)',
  responsible_ministry_en: 'জেলা প্রশাসন ও স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)',
  responsible_agency_bn: 'জেলা প্রশাসন ও স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)',
  responsible_agency_en: 'জেলা প্রশাসন ও স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)',
  visiting_office_level: 'district',
  official_portal_url: 'https://mhapsd.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://mhapsd.gov.bd',
  legal_basis: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'personal firearms shotgun & pistol license & annual renewal official guide', language: 'en', weight: 1.0 },
    { alias: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'firearms shotgun pistol license renewal', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-firearms-shotgun-pistol-license-renewal-standard',
      variant_name_bn: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Personal Firearms Shotgun & Pistol License & Annual Renewal Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: 'শটগান / রাইফেলের লাইসেন্স সরকারি ফি',
          fee_type_en: 'শটগান / রাইফেলের লাইসেন্স সরকারি ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'লং ব্যারেল বন্দুক বা শটগানের সরকারি ফি।'
        },
        {
          fee_type_bn: 'পিস্তল / রিভলভার লাইসেন্স সরকারি ফি',
          fee_type_en: 'পিস্তল / রিভলভার লাইসেন্স সরকারি ফি',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'শর্ট ব্যারেল পিস্তল বা রিভলভারের সরকারি ফি।'
        },
        {
          fee_type_bn: 'বার্ষিক লাইসেন্স নবায়ন ফি',
          fee_type_en: 'বার্ষিক লাইসেন্স নবায়ন ফি',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতি বছর ডিসি অফিসে বাৎসরিক নবায়ন ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত আগ্নেয়াস্ত্র লাইসেন্স আবেদন ফরম',
          document_name_en: 'স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত আগ্নেয়াস্ত্র লাইসেন্স আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর ন্যূনতম বাৎসরিক আয়কর পরিশোধের প্রমাণ (ন্যূনতম ৩ লাখ টাকা আয়কর)',
          document_name_en: 'আবেদনকারীর ন্যূনতম বাৎসরিক আয়কর পরিশোধের প্রমাণ (ন্যূনতম ৩ লাখ টাকা আয়কর)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও শারীরিক সুস্থতার ডোপ টেস্ট রিপোর্ট',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও শারীরিক সুস্থতার ডোপ টেস্ট রিপোর্ট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শারীরিক ফিটনেস ও মানসিক সুস্থতার প্রত্যয়নপত্র',
          document_name_en: 'শারীরিক ফিটনেস ও মানসিক সুস্থতার প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'জেলা প্রশাসকের কার্যালয়ে আবেদন ফরম জমা',
          instruction_bn: 'জেলা ম্যাজিস্ট্রেট (ডিসি)-এর জেএম (JM) শাখায় চালানের ফি ও ট্যাক্স ফাইলসহ আবেদন দাখিল করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি ডিসি অফিসে ফাইল জমা দিন।',
          action_url: 'https://mopa.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পুলিশ এসবি ও জাতীয় নিরাপত্তা গোয়েন্দা সংস্থার ক্লিয়ারেন্স',
          instruction_bn: 'গোয়েন্দা সংস্থা সরেজমিনে আবেদনকারীর কোনো ফৌজদারি রেকর্ড বা সমাজবিরোধী কর্মকাণ্ড নেই তা যাচাই করে রিপোর্ট দেবে।',
          warning_bn: 'ভেরিফিকেশনে উৎকোচ দেওয়া নিষিদ্ধ।',
          action_url: 'https://mhapsd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'স্বরাষ্ট্র মন্ত্রণালয়ের অনুমোদন ও লাইসেন্স বহি ইস্যু',
          instruction_bn: 'মন্ত্রণালয় ছাড়পত্র দিলে জেলা ম্যাজিস্ট্রেট লাইসেন্স বহি ইস্যু করবেন এবং অনুমোদিত ডিলার থেকে অস্ত্র কিনে ডিসি অফিসে নম্বর এন্ট্রি করাতে হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://mhapsd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ অস্ত্র বা জাল লাইসেন্স রাখা যাবজ্জীবন কারাদণ্ডযোগ্য অপরাধ। কোনো দালাল চক্রকে অস্ত্র লাইসেন্সের জন্য টাকা দেবেন না; ডিসি অফিসের মাধ্যমে বৈধ চ্যানেলে আবেদন করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://mhapsd.gov.bd'
    }
  ]
};
