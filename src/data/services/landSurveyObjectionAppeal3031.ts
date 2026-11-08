import { ServiceRecord } from '../../types/service';

export const landSurveyObjectionAppeal3031Service: ServiceRecord = {
  id: 'bd-land-survey-objection-appeal-30-31',
  slug: 'bd-land-survey-objection-appeal-30-31',
  category_id: 'land_property',
  name_bn: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা',
  name_en: 'Land Survey Record Objection (Section 30) & Appeal (Section 31) Official Guide',
  responsible_ministry_bn: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়',
  responsible_agency_bn: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়',
  responsible_agency_en: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://dlrs.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://dlrs.gov.bd',
  legal_basis: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'land survey record objection (section 30) & appeal (section 31) official guide', language: 'en', weight: 1.0 },
    { alias: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি', language: 'bn', weight: 0.95 },
    { alias: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land survey objection appeal 30 31', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-survey-objection-appeal-30-31-standard',
      variant_name_bn: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Land Survey Record Objection (Section 30) & Appeal (Section 31) Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 90,
      fees: [
        {
          fee_type_bn: '৩০ ধারা আপত্তি কোর্ট ফি',
          fee_type_en: '৩০ ধারা আপত্তি কোর্ট ফি',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'তহশিলদার বা জরিপ ক্যাম্পের নোটিশ বোর্ডে নির্ধারিত কোর্ট ফি।'
        },
        {
          fee_type_bn: '৩১ ধারা আপিল কোর্ট ফি',
          fee_type_en: '৩১ ধারা আপিল কোর্ট ফি',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'সহকারী সেটেলমেন্ট অফিসার বা জোনাল সেটেলমেন্ট অফিসারের নিকট আপিলে প্রযোজ্য।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আপত্তি বা আপিল আবেদন ফরম (নির্ধারিত ফরম নং বা সাদা কাগজে বিবরণ)',
          document_name_en: 'আপত্তি বা আপিল আবেদন ফরম (নির্ধারিত ফরম নং বা সাদা কাগজে বিবরণ)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্ববর্তী চূড়ান্ত খতিয়ান (সিএস/এসএ/আরএস/সিটি জরিপ পর্চা)',
          document_name_en: 'পূর্ববর্তী চূড়ান্ত খতিয়ান (সিএস/এসএ/আরএস/সিটি জরিপ পর্চা)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মালিকানার মূল দলিল, বায়া দলিল অথবা উত্তরাধিকার সনদ (ওয়ারিশান)',
          document_name_en: 'মালিকানার মূল দলিল, বায়া দলিল অথবা উত্তরাধিকার সনদ (ওয়ারিশান)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিপি খতিয়ানের খসড়া প্রদর্শন ও ভুল চিহ্নিতকরণ',
          instruction_bn: 'খানাপুরী-তসদিক শেষে ক্যাম্প অফিস যখন খসড়া খতিয়ান জনগণের জন্য উন্মুক্ত করে, তখন নিজের দাগ নম্বর ও রেকর্ড মিলিয়ে নিন।',
          warning_bn: 'খসড়া প্রদর্শনের ৩০ দিনের মধ্যে আপত্তি দাখিল করতে হয়।',
          action_url: 'https://dlrs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ক্যাম্প বা সেটেলমেন্ট অফিসে ৩০ ধারায় আপত্তি দাখিল',
          instruction_bn: '২০ টাকার কোর্ট ফি লাগিয়ে সহকারী সেটেলমেন্ট অফিসার (ASO) বরাবর আবেদন জমা দিয়ে রিসিভিং স্লিপ নিন।',
          warning_bn: 'দালালকে কোনো টাকা দেবেন না, সরাসরি দায়িত্বপ্রাপ্ত পেশকারের কাছ থেকে তারিখ ও স্লিপ গ্রহণ করুন।',
          action_url: 'https://dlrs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'শুনানিতে পক্ষদ্বয়ের নথিপত্র উপস্থাপন',
          instruction_bn: 'উভয় পক্ষকে নোটিশ করা হবে। শুনানির দিন মূল দলিল ও পর্চা প্রদর্শন করুন। এএসও موقع তদন্ত বা সাক্ষ্য নিয়ে রায় প্রদান করবেন।',
          warning_bn: 'রায় বিপক্ষে গেলে ৩০ কার্যদিবসের মধ্যে ৩১ ধারায় জোনাল সেটেলমেন্ট অফিসারের কাছে ৫০ টাকার কোর্ট ফি দিয়ে আপিল করুন।',
          action_url: 'https://dlrs.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: জরিপ ক্যাম্পে দালাল চক্র মানুষকে মিথ্যা ভয় দেখায় যে টাকা না দিলে জমি অন্যের নামে রেকর্ড হয়ে যাবে। জমি রেকর্ডের মূল ভিত্তি আইনসম্মত দলিল ও নিরবচ্ছিন্ন দখল। কোনো সেটেলমেন্ট কর্মকর্তা বা দালাল উৎকোচ দাবি করলে সঙ্গে সঙ্গে ১৬১২২ অথবা দুর্নীতি দমন কমিশন (১০৬) এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dlrs.gov.bd'
    }
  ]
};
