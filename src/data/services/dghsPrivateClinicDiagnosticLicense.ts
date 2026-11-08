import { ServiceRecord } from '../../types/service';

export const dghsPrivateClinicDiagnosticLicenseService: ServiceRecord = {
  id: 'bd-dghs-private-clinic-diagnostic-license',
  slug: 'bd-dghs-private-clinic-diagnostic-license',
  category_id: 'citizen_general',
  name_bn: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা',
  name_en: 'Private Clinic Hospital & Diagnostic Center Online License & Renewal Guide',
  responsible_ministry_bn: 'স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ',
  responsible_ministry_en: 'স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ',
  responsible_agency_bn: 'স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ',
  responsible_agency_en: 'স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dghs.gov.bd',
  helpline_number: '16263',
  grievance_channel: 'https://dghs.gov.bd',
  legal_basis: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'private clinic hospital & diagnostic center online license & renewal guide', language: 'en', weight: 1.0 },
    { alias: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dghs private clinic diagnostic license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dghs-private-clinic-diagnostic-license-standard',
      variant_name_bn: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Private Clinic Hospital & Diagnostic Center Online License & Renewal Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'ডায়াগনস্টিক সেন্টার লাইসেন্স ফি (ক্যাটাগরি-এ)',
          fee_type_en: 'ডায়াগনস্টিক সেন্টার লাইসেন্স ফি (ক্যাটাগরি-এ)',
          amount_bdt: 50000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মেট্রোপলিটন এলাকার জন্য ৫০,০০০ টাকা; জেলা-উপজেলায় আনুপাতিক কম।'
        },
        {
          fee_type_bn: '১০-৫০ বেডের বেসরকারি হাসপাতাল লাইসেন্স ফি',
          fee_type_en: '১০-৫০ বেডের বেসরকারি হাসপাতাল লাইসেন্স ফি',
          amount_bdt: 50000.0,
          effective_date: '2022-01-01',
          notes_bn: '১০-৫০ শয্যার হাসপাতালের সরকারি ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'অনাবাসিক বাণিজ্যিক ভবনের রাজউক/পৌরসভা অনুমোদিত প্ল্যান ও ট্রেড লাইসেন্স',
          document_name_en: 'অনাবাসিক বাণিজ্যিক ভবনের রাজউক/পৌরসভা অনুমোদিত প্ল্যান ও ট্রেড লাইসেন্স',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্ণকালীন বিএমডিসি (BMDC) নিবন্ধিত চিকিৎসক ও ডিপ্লোমা নার্সদের তালিকা',
          document_name_en: 'পূর্ণকালীন বিএমডিসি (BMDC) নিবন্ধিত চিকিৎসক ও ডিপ্লোমা নার্সদের তালিকা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত পরিবেশ ছাড়পত্র (ECC)',
          document_name_en: 'পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত পরিবেশ ছাড়পত্র (ECC)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পরমাণু শক্তি কমিশন কর্তৃক এক্স-রে ও রেডিয়েশন লাইসেন্স (ডায়াগনস্টিকের ক্ষেত্রে)',
          document_name_en: 'পরমাণু শক্তি কমিশন কর্তৃক এক্স-রে ও রেডিয়েশন লাইসেন্স (ডায়াগনস্টিকের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'স্বাস্থ্য অধিদপ্তরের পোর্টালে অনলাইন লাইসেন্স আবেদন',
          instruction_bn: 'https://dghs.gov.bd পোর্টালে গিয়ে হাসপাতালের বিবরণ ও চিকিৎসকদের বিএমডিসি সনদ আপলোড করুন।',
          warning_bn: 'সব চালানের ফি সরাসরি অনলাইনে পরিশোধ করুন।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সিভিল সার্জন কর্তৃক সরেজমিনে হাসপাতাল পরিদর্শন',
          instruction_bn: 'জেলার সিভিল সার্জন ও পরিদর্শন দল অপারেশন থিয়েটার, আইসিইউ ও বর্জ্য ব্যবস্থাপনা পরীক্ষা করবেন।',
          warning_bn: 'পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিজিটাল লাইসেন্স ডাউনলোড ও প্রদর্শন',
          instruction_bn: 'অনুমোদিত হলে কিউআর কোড সম্বলিত সরকারি লাইসেন্স ডাউনলোড করে ক্লিনিকের ফ্রন্ট ডেস্কে প্রদর্শন করতে হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dghs.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: স্বাস্থ্য অধিদপ্তরে লাইসেন্স পাইয়ে দেওয়ার নামে কোনো অসাধু চক্র লাখ টাকা দাবি করলে সরাসরি স্বাস্থ্য অধিদপ্তরের ভিজিলেন্স সেল বা স্বাস্থ্য বাতায়ন ১৬২৬৩ নম্বরে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dghs.gov.bd'
    }
  ]
};
