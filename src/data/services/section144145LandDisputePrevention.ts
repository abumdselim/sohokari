import { ServiceRecord } from '../../types/service';

export const section144145LandDisputePreventionService: ServiceRecord = {
  id: 'bd-section-144-145-land-dispute-prevention',
  slug: 'bd-section-144-145-land-dispute-prevention',
  category_id: 'legal_judiciary',
  name_bn: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা',
  name_en: 'Prevention of Land Dispossession Section 144 & 145 CrPC Official Guide',
  responsible_ministry_bn: 'অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন',
  responsible_ministry_en: 'অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন',
  responsible_agency_bn: 'অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন',
  responsible_agency_en: 'অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন',
  visiting_office_level: 'district',
  official_portal_url: 'https://minland.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://minland.gov.bd',
  legal_basis: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'prevention of land dispossession section 144 & 145 crpc official guide', language: 'en', weight: 1.0 },
    { alias: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'section 144 145 land dispute prevention', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-section-144-145-land-dispute-prevention-standard',
      variant_name_bn: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Prevention of Land Dispossession Section 144 & 145 CrPC Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: '১৪৪/১৪৫ ধারা আবেদন কোর্ট ফি',
          fee_type_en: '১৪৪/১৪৫ ধারা আবেদন কোর্ট ফি',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'এডিসি/এডিএম আদালতে আবেদনের কোর্ট ফি মাত্র ৫০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর স্বত্ব ও দখলের প্রমাণপত্র (মূল দলিল ও নামজারি খতিয়ান)',
          document_name_en: 'আবেদনকারীর স্বত্ব ও দখলের প্রমাণপত্র (মূল দলিল ও নামজারি খতিয়ান)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের রশিদ',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের রশিদ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিপক্ষ কর্তৃক জমি দখলের হুমকি সংক্রান্ত জিডি (GD) কপি (যদি থাকে)',
          document_name_en: 'বিপক্ষ কর্তৃক জমি দখলের হুমকি সংক্রান্ত জিডি (GD) কপি (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'বিরোধীয় জমির তফসিল ও চৌহদ্দি সম্বলিত আবেদনপত্র',
          document_name_en: 'বিরোধীয় জমির তফসিল ও চৌহদ্দি সম্বলিত আবেদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'এডিএম আদালতে ৫০ টাকার কোর্ট ফি দিয়ে আবেদন দাখিল',
          instruction_bn: 'জেলা প্রশাসকের কার্যালয়ে অতিরিক্ত জেলা ম্যাজিস্ট্রেট কোর্টে বিরোধীয় জমির বিবরণ দিয়ে পিটিশন দাখিল করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি ডিসি অফিসের এডিএম কোর্ট কাউন্টারে জমা দেওয়া যায়।',
          action_url: 'https://minland.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'থানা পুলিশ ও এসিল্যান্ডের নিকট প্রতিবেদন তলব',
          instruction_bn: 'আদালত সংশ্লিষ্ট থানার ওসিকে শান্তি বজায় রাখতে নোটিশ জারি করার নির্দেশ দেবেন এবং এসিল্যান্ডকে জমির বাস্তব দখল যাচাইয়ের আদেশ দেবেন।',
          warning_bn: 'পুলিশ কোনো পক্ষকে জমিতে জোর করে তুলতে পারবে না।',
          action_url: 'https://minland.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'উভয় পক্ষের শুনানির পর চূড়ান্ত আদেশ',
          instruction_bn: 'পুলিশ ও এসিল্যান্ডের রিপোর্টের ভিত্তিতে আদালত রায় দেবেন এবং প্রকৃত দখলকারীকে দেওয়ানি আদালতের চূড়ান্ত রায় না হওয়া পর্যন্ত জমিতে শান্তিতে থাকার সুরক্ষা দেবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://minland.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জমিতে দালাল বা ভূমিদস্যুরা পেশিশক্তি দেখালে আইন নিজের হাতে তুলে নেবেন না। ১৪৪/১৪৫ ধারার আইনি আবেদন করে পুলিশি প্রোটেকশন নিন। জরুরি বিপদে পুলিশ কন্ট্রোল রুম ৯৯৯-এ তাৎক্ষণিক কল দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://minland.gov.bd'
    }
  ]
};
