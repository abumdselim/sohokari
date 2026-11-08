import { ServiceRecord } from '../../types/service';

export const rajukBuildingPlanEcpsApprovalService: ServiceRecord = {
  id: 'bd-rajuk-building-plan-ecps-approval',
  slug: 'bd-rajuk-building-plan-ecps-approval',
  category_id: 'citizen_general',
  name_bn: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা',
  name_en: 'RAJUK / Development Authority Building Construction Permit (e-CPS) Guide',
  responsible_ministry_bn: 'রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক) / সিডিএ / কেডিএ, গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_ministry_en: 'রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক) / সিডিএ / কেডিএ, গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_agency_bn: 'রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক) / সিডিএ / কেডিএ, গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_agency_en: 'রাজধানী উন্নয়ন কর্তৃপক্ষ (রাজউক) / সিডিএ / কেডিএ, গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'http://www.rajuk.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'http://www.rajuk.gov.bd',
  legal_basis: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'rajuk / development authority building construction permit (e-cps) guide', language: 'en', weight: 1.0 },
    { alias: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন', language: 'bn', weight: 0.95 },
    { alias: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'rajuk building plan ecps approval', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-rajuk-building-plan-ecps-approval-standard',
      variant_name_bn: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'RAJUK / Development Authority Building Construction Permit (e-CPS) Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'ভূমি ব্যবহার ছাড়পত্র ফি (Land Use Clearance - LUT)',
          fee_type_en: 'ভূমি ব্যবহার ছাড়পত্র ফি (Land Use Clearance - LUT)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'আবাসিক প্লটের ছাড়পত্র ফি।'
        },
        {
          fee_type_bn: 'ভবন নির্মাণ অনুমোদন ফি (Building Permit Fee - প্রতি বর্গমিটার)',
          fee_type_en: 'ভবন নির্মাণ অনুমোদন ফি (Building Permit Fee - প্রতি বর্গমিটার)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিল্ট-আপ এরিয়া অনুযায়ী প্রতি বর্গমিটারে সরকার নির্ধারিত প্রমিত রেট।'
        },
        {
          fee_type_bn: 'বিশেষ প্রকল্প ও বাণিজ্যিক নকশা পরীক্ষণ ফি',
          fee_type_en: 'বিশেষ প্রকল্প ও বাণিজ্যিক নকশা পরীক্ষণ ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাণিজ্যিক ও বহুতল ভবনের ক্ষেত্রে প্রযোজ্য।'
        }
      ],
      documents: [
        {
          document_name_bn: 'অনুমোদিত স্থপতি ও প্রকৌশলী (IEB/IAB সদস্য) কর্তৃক প্রস্তুতকৃত অটোক্যাড ও পিডিএফ নকশা',
          document_name_en: 'অনুমোদিত স্থপতি ও প্রকৌশলী (IEB/IAB সদস্য) কর্তৃক প্রস্তুতকৃত অটোক্যাড ও পিডিএফ নকশা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মালিকানা দলিল, হালনাগাদ নামজারি খতিয়ান ও খাজনার দাখিলা',
          document_name_en: 'জমির মালিকানা দলিল, হালনাগাদ নামজারি খতিয়ান ও খাজনার দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মৃত্তিকা পরীক্ষা প্রতিবেদন (Soil Test Report) ও স্ট্রাকচারাল ডিজাইন',
          document_name_en: 'মৃত্তিকা পরীক্ষা প্রতিবেদন (Soil Test Report) ও স্ট্রাকচারাল ডিজাইন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-সিপিএস পোর্টালে আবেদন শুরু',
          instruction_bn: 'http://ecps.rajuk.gov.bd ওয়েবসাইটে গিয়ে একাউন্ট খুলুন। আপনার অনুমোদিত স্থপতিকে ডিজাইনার হিসেবে অ্যাসাইন করুন।',
          warning_bn: 'রাজউকের তালিকাভুক্ত স্থপতি (IAB রেজিস্টার্ড) ছাড়া নকশা সিস্টেমে আপলোড করা যায় না।',
          action_url: 'http://ecps.rajuk.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ভূমি ব্যবহার ছাড়পত্র ও নকশা আপলোড',
          instruction_bn: 'মাস্টার প্ল্যান অনুযায়ী জমির ছাড়পত্র নিন। এরপর স্ট্রাকচারাল, আর্কিটেকচারাল এবং প্লাম্বিং নকশা আপলোড করুন।',
          warning_bn: 'সেটব্যাক রুলস (রাস্তা ও চারপাশের ফাঁকা জায়গা) শতভাগ মেনে ড্রয়িং করুন।',
          action_url: 'http://www.rajuk.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইনে সরকারি ফি পরিশোধ ও অনুমোদন',
          instruction_bn: 'সিস্টেমে প্রদর্শিত সরকারি স্কয়ারমিটার ফি ব্যাংকে জমা দিন। রাজউক অথরাইজড অফিসার ও বিসি কমিটি অনলাইনে রিভিউ করে ডিজিটাল কিউআর কোডযুক্ত প্ল্যান অনুমোদন করবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.rajuk.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রাজউক ভবনে ঘুরঘুর করা দালাল বা অসাধু কর্মচারীরা প্ল্যান পাস করিয়ে দেওয়ার নামে লাখ লাখ টাকা ঘুষ দাবি করে। e-CPS সিস্টেম সম্পূর্ণ ডিজিটাল, যেখানে ফাইলের প্রতি মুহূর্তের স্ট্যাটাস ট্র্যাকিং থাকে। ফাইল আটকে রাখলে সরাসরি রাজউক চেয়ারম্যান বা দুদকের হটলাইন ১০৬-এ অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'রাজউক / উন্নয়ন কর্তৃপক্ষ ভবন নির্মাণ প্ল্যান (ই-সিপিএস) অনুমোদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://www.rajuk.gov.bd'
    }
  ]
};
