import { ServiceRecord } from '../../types/service';

export const birthRegistrationService: ServiceRecord = {
  id: 'birth-registration',
  slug: 'birth-registration',
  category_id: 'civil_registration',
  name_bn: 'অনলাইন জন্ম নিবন্ধন সনদ (BDRIS)',
  name_en: 'Online Digital Birth Registration Certificate (BDRIS)',
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
    { alias: 'birth certificate', language: 'en', weight: 1.0 },
    { alias: 'birth registration', language: 'en', weight: 1.0 },
    { alias: 'jonmo nibondhon fee', language: 'banglish', weight: 1.0 },
    { alias: 'jonmo nibondhon', language: 'banglish', weight: 1.0 },
    { alias: 'জন্ম নিবন্ধন ফি', language: 'bn', weight: 1.0 },
    { alias: 'অনলাইন জন্ম নিবন্ধন', language: 'bn', weight: 1.0 },
    { alias: 'জন্ম সনদ সংশোধনের নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'শিশুর জন্ম নিবন্ধন ফি', language: 'bn', weight: 1.0 },
    { alias: 'bdris birth certificate', language: 'en', weight: 0.95 }
  ],
  variants: [
    {
      id: 'birth-reg-child-under-45d',
      variant_name_bn: 'শিশুর জন্ম নিবন্ধন (জন্মের ৪৫ দিনের মধ্যে)',
      variant_name_en: 'Child Birth Registration (Within 45 Days)',
      conditions: { age_days: 45 },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সরকারি ফি (জন্মের ৪৫ দিনের মধ্যে)',
          fee_type_en: 'Government Fee (Within 45 days)',
          amount_bdt: 0,
          effective_date: '2018-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে'
        }
      ],
      documents: [
        {
          document_name_bn: 'হাসপাতাল বা ক্লিনিকের ইপিআই (টিকা) কার্ড বা জন্ম প্রত্যয়নপত্র',
          document_name_en: 'EPI vaccination card or hospital discharge birth proof',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা ও মাতার ১৬/১৭ ডিজিটের ডিজিটাল অনলাইন জন্ম নিবন্ধন সনদ',
          document_name_en: 'Digital online birth registration certificate of parents',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাসার হোল্ডিং ট্যাক্স রসিদ বা ইউটিলিটি বিলের কপি',
          document_name_en: 'Holding tax receipt or utility bill of residence',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'bdris.gov.bd পোর্টালে ফরম পূরণ',
          instruction_bn: 'bdris.gov.bd ওয়েবসাইটে গিয়ে ইউনিয়ন পরিষদ বা সিটি কর্পোরেশন ওয়ার্ড সিলেক্ট করে তথ্য পূরণ করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'কাগজপত্র জমা ও সনদ সংগ্রহ',
          instruction_bn: 'অনলাইন আবেদনের প্রিন্ট কপি এবং ইপিআই কার্ডসহ সংশ্লিষ্ট ইউনিয়ন পরিষদ বা পৌরসভা/ওয়ার্ড কার্যালয়ে জমা দিয়ে ডিজিটাল সনদ গ্রহণ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'জন্ম নিবন্ধনে ভুয়া দালালরা কিউআর কোড নকল করে ভুয়া সনদ বানিয়ে দেয়। সবসময় bdris.gov.bd ডেটাবেজে ভেরিফাই করে আসল ডিজিটাল সনদ সংগ্রহ করুন।',
      content_en: 'Beware of fake brokers issuing fraudulent birth certificates with non-verifiable QR codes.'
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
