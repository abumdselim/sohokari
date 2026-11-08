import { ServiceRecord } from '../../types/service';

export const pmReliefFundMedicalGrantService: ServiceRecord = {
  id: 'pm-relief-fund-medical-grant',
  slug: 'pm-relief-fund-medical-grant',
  category_id: 'social_welfare',
  name_bn: 'প্রধানমন্ত্রীর ত্রাণ ও কল্যাণ তহবিল থেকে চিকিৎসার এককালীন অনুদান নির্দেশিকা',
  name_en: 'Prime Ministers Relief & Welfare Fund One-Time Medical Financial Assistance',
  responsible_ministry_bn: 'প্রধানমন্ত্রীর কার্যালয় / প্রধান উপদেষ্টার কার্যালয়',
  responsible_ministry_en: 'Prime Ministers Office / Chief Advisers Office',
  responsible_agency_bn: 'ত্রাণ ও কল্যাণ তহবিল শাখা',
  responsible_agency_en: 'Relief & Welfare Fund Branch',
  visiting_office_level: 'district',
  official_portal_url: 'https://pmo.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://pmo.gov.bd',
  legal_basis: 'সরকারি ত্রাণ ও কল্যাণ তহবিল পরিচালনা নীতিমালা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'pm relief fund', language: 'en', weight: 1.0 },
    { alias: 'medical grant', language: 'en', weight: 1.0 },
    { alias: 'pm onudan chikitsha', language: 'banglish', weight: 1.0 },
    { alias: 'chikitsha onudan kivabe pabo', language: 'banglish', weight: 1.0 },
    { alias: 'প্রধানমন্ত্রীর চিকিৎসা অনুদান', language: 'bn', weight: 1.0 },
    { alias: 'ত্রাণ তহবিল থেকে চিকিৎসা সাহায্য', language: 'bn', weight: 1.0 },
    { alias: 'ক্যান্সার রোগীদের সরকারি অনুদান', language: 'bn', weight: 1.0 },
    { alias: 'অসহায় রোগীদের সরকারি আর্থিক সাহায্য', language: 'bn', weight: 1.0 },
    { alias: 'প্রধানমন্ত্রীর ত্রাণ তহবিল আবেদন', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'pm-fund-critical-illness-grant',
      variant_name_bn: 'জটিল রোগে আক্রান্ত অসচ্ছল রোগীদের ৫০,০০০ থেকে ২ লাখ টাকা সরকারি অনুদান',
      variant_name_en: 'One-Time Medical Grant for Critical Illness (50,000 - 200,000 BDT)',
      conditions: { type: 'medical_grant' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'আবেদন ফরম ও প্রসেসিং সরকারি ফি',
          fee_type_en: 'Application & Processing Fee',
          amount_bdt: 0,
          effective_date: '2015-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'সরকার প্রদত্ত অনুদানের পরিমাণ',
          fee_type_en: 'Government Financial Grant Amount',
          amount_bdt: 0,
          effective_date: '2015-01-01',
          notes_bn: '৫০,০০০ থেকে ২,০০,০০০ টাকা (এককালীন অনুদান, ফেরত দিতে হয় না)'
        }
      ],
      documents: [
        {
          document_name_bn: 'সরকারি হাসপাতালের বিশেষজ্ঞ চিকিৎসক কর্তৃক চিকিৎসা ব্যয়ের প্রাক্কলন (Estimate) ও প্রত্যয়ন',
          document_name_en: 'Government Specialist Doctor Treatment Cost Estimate Certificate',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ',
          document_name_en: 'Patient NID or digital birth certificate',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হাসপাতালের ভর্তি টিকিট, প্রেসক্রিপশন ও ডায়াগনস্টিক পরীক্ষার মূল কপি',
          document_name_en: 'Hospital admission ticket, prescription and test reports',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সংসদ সদস্য (এমপি) বা জেলা প্রশাসক (ডিসি)-র সুপারিশপত্র',
          document_name_en: 'Official recommendation letter from MP or Deputy Commissioner',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগী বা বৈধ অভিভাবকের ব্যাংক অ্যাকাউন্টের চেক পাতার কপি',
          document_name_en: 'Bank account cheque leaf for account payee payment',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'ডাক্তারি খরচ প্রাক্কলন ও সুপারিশপত্র সংগ্রহ',
          instruction_bn: 'সরকারি মেডিকেল কলেজ বা হাসপাতালের বিশেষজ্ঞ ডাক্তারের সিলমোহরযুক্ত খরচের প্রত্যয়ন এবং ডিসি বা এমপির সুপারিশপত্র নিন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'প্রধানমন্ত্রীর কার্যালয়ে আবেদন দাখিল',
          instruction_bn: 'তেজগাঁও প্রধানমন্ত্রীর কার্যালয়ে ত্রাণ ও কল্যাণ তহবিল শাখায় অথবা জেলা প্রশাসকের কার্যালয়ের মাধ্যমে আবেদনপত্র জমা দিন।'
        },
        {
          channel: 'bank',
          step_number: 3,
          title_bn: 'ব্যাংক অ্যাকাউন্টে অনুদানের চেক গ্রহণ',
          instruction_bn: 'যাচাই শেষে প্রধানমন্ত্রীর কার্যালয় থেকে সরাসরি রোগীর নামে ৫০,০০০ থেকে ২,০০,০০০ টাকার অ্যাকাউন্ট পেয়ী চেক হস্তান্তর করা হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'প্রধানমন্ত্রীর চিকিৎসা অনুদান পাওয়ার জন্য কোনো মধ্যস্বত্বভোগী বা দালালকে ১ টাকাও দেবেন না। চেক সরাসরি রোগীর নিজের নামে ইস্যু হয়। ক্যানসার, ওপেন হার্ট সার্জারি, কিডনি ডায়ালাইসিস ও মারাত্মক দুর্ঘটনায় আহত অসচ্ছল পরিবারের জন্য এটি সরকারের সম্পূর্ণ অহিংস আর্থিক সহায়তা।',
      content_en: 'Financial assistance from the Prime Ministers Relief Fund is granted directly to patients suffering from critical illnesses (50,000 to 200,000 BDT). Never pay intermediaries.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'প্রধানমন্ত্রীর কার্যালয় ত্রাণ ও কল্যাণ তহবিল সেবা নির্দেশিকা',
      source_url: 'https://pmo.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};
