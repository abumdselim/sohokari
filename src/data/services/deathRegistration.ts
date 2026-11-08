import { ServiceRecord } from '../../types/service';

export const deathRegistrationService: ServiceRecord = {
  id: 'death-registration',
  slug: 'death-registration',
  category_id: 'civil_registration',
  name_bn: 'অনলাইন মৃত্যু নিবন্ধন ও মৃত্যু সনদ (BDRIS)',
  name_en: 'Online Digital Death Registration Certificate (BDRIS)',
  responsible_ministry_bn: 'স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Local Government, Rural Development and Cooperatives',
  responsible_agency_bn: 'রেজিস্ট্রার জেনারেলের কার্যালয়, জন্ম ও মৃত্যু নিবন্ধন (BDRIS)',
  responsible_agency_en: 'Office of the Registrar General, Birth and Death Registration',
  visiting_office_level: 'union',
  official_portal_url: 'https://bdris.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://bdris.gov.bd',
  legal_basis: 'জন্ম ও মৃত্যু নিবন্ধন আইন ২০০৪ এবং বিধিমালা ২০১৮',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'death certificate', language: 'en', weight: 1.0 },
    { alias: 'death registration', language: 'en', weight: 1.0 },
    { alias: 'mrittu nibondhon', language: 'banglish', weight: 1.0 },
    { alias: 'mrittu সনদ', language: 'banglish', weight: 1.0 },
    { alias: 'মৃত্যু নিবন্ধন ফি', language: 'bn', weight: 1.0 },
    { alias: 'মৃত্যু সনদ আবেদন', language: 'bn', weight: 1.0 },
    { alias: 'অনলাইন মৃত্যু নিবন্ধন', language: 'bn', weight: 1.0 },
    { alias: 'মৃত্যুর সার্টিফিকেট নেওয়ার নিয়ম', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'death-reg-standard',
      variant_name_bn: 'মৃত্যু নিবন্ধন ও ডিজিটাল মৃত্যু সনদপত্র',
      variant_name_en: 'Digital Death Registration & Certificate',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'মৃত্যুর ৪৫ দিনের মধ্যে সরকারি ফি',
          fee_type_en: 'Fee within 45 days of death',
          amount_bdt: 0,
          effective_date: '2018-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'মৃত্যুর ৪৬ দিন থেকে ৫ বছরের মধ্যে ফি',
          fee_type_en: 'Fee between 46 days to 5 years',
          amount_bdt: 25,
          effective_date: '2018-01-01',
          notes_bn: 'সরকারি নির্ধারিত চালান বা রসিদ ফি'
        },
        {
          fee_type_bn: 'মৃত্যুর ৫ বছর পর যেকোনো সময় ফি',
          fee_type_en: 'Fee after 5 years',
          amount_bdt: 50,
          effective_date: '2018-01-01',
          notes_bn: 'সরকারি নির্ধারিত ফি ৫০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'রেজিস্টার্ড চিকিৎসক/হাসপাতালের মৃত্যু সনদ বা কবরস্থান/শ্মশান রসিদ',
          document_name_en: 'Doctor/Hospital Death Proof or Burial/Cremation receipt',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত ব্যক্তির জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম সনদ',
          document_name_en: 'Deceased person NID or digital birth certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী ওয়ারিশের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'Applicant heir NID card',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'bdris.gov.bd পোর্টালে আবেদন ফরম পূরণ',
          instruction_bn: 'পোর্টালে প্রবেশ করে সংশ্লিষ্ট ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন ওয়ার্ড নির্বাচন করে মৃত ব্যক্তি ও আবেদনকারীর তথ্য দিন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ডাক্তারি প্রত্যয়নপত্র আপলোড',
          instruction_bn: 'হাসপাতাল/চিকিৎসকের মৃত্যু সনদ এবং মৃত ব্যক্তির এনআইডি স্ক্যান কপি আপলোড করে সাবমিট করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'ডিজিটাল সনদ গ্রহণ',
          instruction_bn: 'আবেদন ফর্মের প্রিন্ট কপি নিয়ে ইউনিয়ন পরিষদ বা পৌরসভা কার্যালয়ে জমা দিয়ে কিউআর কোডযুক্ত মূল অনলাইন মৃত্যু সনদ গ্রহণ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'মৃত্যু সনদের জন্য কোনো মধ্যস্বত্বভোগী বা দালালকে অতিরিক্ত টাকা দেবেন না। ৪৫ দিনের মধ্যে আবেদন সম্পূর্ণ ফ্রি এবং পরবর্তীতে মাত্র ২৫-৫০ টাকা। ব্যাংক অ্যাকাউন্ট, জমি খারিজ ও পেনশনের জন্য অনলাইন কিউআর কোডযুক্ত আসল সনদ নিশ্চিত করুন।',
      content_en: 'Death registration is free within 45 days and strictly 25-50 BDT thereafter. Never pay unauthorized fees to middlemen.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'জন্ম ও মৃত্যু নিবন্ধন বিধিমালা এবং ফি নির্দেশিকা',
      source_url: 'https://bdris.gov.bd',
      published_date: '2018-01-01'
    }
  ]
};
