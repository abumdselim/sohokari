import { ServiceRecord } from '../../types/service';

export const dssOrphanCapitationGrantMadrashaService: ServiceRecord = {
  id: 'bd-dss-orphan-capitation-grant-madrasha',
  slug: 'bd-dss-orphan-capitation-grant-madrasha',
  category_id: 'social_welfare',
  name_bn: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা',
  name_en: 'Private Orphanage & Madrasha Capitation Grant Allowance Official Guide',
  responsible_ministry_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dss.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dss.gov.bd',
  legal_basis: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'private orphanage & madrasha capitation grant allowance official guide', language: 'en', weight: 1.0 },
    { alias: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant)', language: 'bn', weight: 0.95 },
    { alias: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) ফি', language: 'bn', weight: 0.95 },
    { alias: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dss orphan capitation grant madrasha', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dss-orphan-capitation-grant-madrasha-standard',
      variant_name_bn: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Private Orphanage & Madrasha Capitation Grant Allowance Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ক্যাপিটেশন গ্রান্ট আবেদন সরকারি ফি',
          fee_type_en: 'ক্যাপিটেশন গ্রান্ট আবেদন সরকারি ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সমাজসেবা অধিদপ্তরের সম্পূর্ণ ফ্রি সহায়তা সেবা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'এতিমখানাটি সমাজসেবা অধিদপ্তর কর্তৃক স্বেচ্ছাসেবী সমাজকল্যাণ সংস্থা হিসেবে নিবন্ধিত হওয়ার সনদ',
          document_name_en: 'এতিমখানাটি সমাজসেবা অধিদপ্তর কর্তৃক স্বেচ্ছাসেবী সমাজকল্যাণ সংস্থা হিসেবে নিবন্ধিত হওয়ার সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রতিটি এতিম শিশুর মূল মৃত্যু সনদ (পিতার মৃত্যু) ও অনলাইন জন্ম নিবন্ধন',
          document_name_en: 'প্রতিটি এতিম শিশুর মূল মৃত্যু সনদ (পিতার মৃত্যু) ও অনলাইন জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'শিশুদের ছবিসহ পূর্ণাঙ্গ বালাম বই ও উপস্থিতি খাতা',
          document_name_en: 'শিশুদের ছবিসহ পূর্ণাঙ্গ বালাম বই ও উপস্থিতি খাতা',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'এতিমখানার নিজস্ব নামে পরিচালিত ব্যাংক হিসাবের স্টেটমেন্ট',
          document_name_en: 'এতিমখানার নিজস্ব নামে পরিচালিত ব্যাংক হিসাবের স্টেটমেন্ট',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা সমাজসেবা কর্মকর্তা বরাবর আবেদন দাখিল',
          instruction_bn: 'এতিম শিশুদের প্রকৃত সংখ্যা ও পিতার মৃত্যু সনদসহ উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি উপজেলা সমাজসেবা অফিসে যোগাযোগ করুন।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা যাচাই কমিটি কর্তৃক এতিমখানায় সরেজমিন গণনা',
          instruction_bn: 'উপজেলা নির্বাহী কর্মকর্তা (UNO) ও সমাজসেবা কর্মকর্তা এতিমখানায় গিয়ে শিশুদের মুখে মুখে সাক্ষাতকার নিয়ে প্রকৃত এতিমদের মাথা গণনা করবেন।',
          warning_bn: 'কোনো ভুয়া এতিম শিশু দেখালে প্রতিষ্ঠান বাতিল হবে।',
          action_url: 'https://dss.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনুমোদিত শিশুর অনুপাতে সরাসরি ব্যাংকে টাকা ছাড়',
          instruction_bn: 'অনুমোদন পেলে প্রতি শিশুর জন্য মাসিক ২,০০০ টাকা হারে প্রতি ত্রৈমাসিকে সরাসরি এতিমখানার ব্যাংক হিসাবে টাকা জমা হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dss.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: এতিমের হক নষ্ট করা মহাপাপ। কোনো কর্মকর্তা বা দালাল অনুদানের চেক ছাড়ানোর নামে পারসেন্টেজ চাইলে সোজা জেলা প্রশাসক বা দুর্নীতি দমন কমিশন (১০৬) এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dss.gov.bd'
    }
  ]
};
