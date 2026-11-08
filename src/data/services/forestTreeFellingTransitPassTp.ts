import { ServiceRecord } from '../../types/service';

export const forestTreeFellingTransitPassTpService: ServiceRecord = {
  id: 'bd-forest-tree-felling-transit-pass-tp',
  slug: 'bd-forest-tree-felling-transit-pass-tp',
  category_id: 'citizen_general',
  name_bn: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা',
  name_en: 'Privately Owned Tree Felling & Timber Transit Pass TP Official Guide',
  responsible_ministry_bn: 'বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_ministry_en: 'বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_agency_bn: 'বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  responsible_agency_en: 'বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://bforest.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://bforest.gov.bd',
  legal_basis: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'privately owned tree felling & timber transit pass tp official guide', language: 'en', weight: 1.0 },
    { alias: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP)', language: 'bn', weight: 0.95 },
    { alias: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) ফি', language: 'bn', weight: 0.95 },
    { alias: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'forest tree felling transit pass tp', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-forest-tree-felling-transit-pass-tp-standard',
      variant_name_bn: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Privately Owned Tree Felling & Timber Transit Pass TP Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটার ট্রানজিট পাস আবেদন ফি',
          fee_type_en: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটার ট্রানজিট পাস আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ব্যক্তিগত জমির গাছের জন্য সরকারি কোনো পারমিট ফি নেই।'
        },
        {
          fee_type_bn: 'কাঠের হাতুড়ি বা সিলমোহর ফি (হ্যামার ফি)',
          fee_type_en: 'কাঠের হাতুড়ি বা সিলমোহর ফি (হ্যামার ফি)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'গাছের গুড়িতে অফিশিয়াল হ্যামার মারার নামমাত্র ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'গাছ থাকা জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান',
          document_name_en: 'গাছ থাকা জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলরের \'গাছের মালিকানা\' প্রত্যয়নপত্র',
          document_name_en: 'ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলরের \'গাছের মালিকানা\' প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'কাটা গাছের প্রজাতি, সংখ্যা ও আনুমানিক পরিমাপের তালিকা',
          document_name_en: 'কাটা গাছের প্রজাতি, সংখ্যা ও আনুমানিক পরিমাপের তালিকা',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নিকটস্থ বন রেঞ্জ বা বিট কর্মকর্তার নিকট আবেদন',
          instruction_bn: 'জমির পর্চা ও ইউপি প্রত্যয়নসহ উপজেলা বন কর্মকর্তা বা রেঞ্জ কর্মকর্তার কাছে আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি বন অফিসে যোগাযোগ করুন।',
          action_url: 'https://bforest.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বন কর্মকর্তা কর্তৃক সরেজমিন গাছ ও সীমানা পরিদর্শন',
          instruction_bn: 'বিট কর্মকর্তা জমিতে গিয়ে নিশ্চিত হবেন গাছটি সরকারি বন বা খাস জমির নয় এবং নিজের ব্যক্তিগত জমির।',
          warning_bn: 'পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।',
          action_url: 'https://bforest.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'গুড়িতে হ্যামার সিল ও ট্রানজিট পাস (TP) গ্রহণ',
          instruction_bn: 'গাছের গুড়িতে বন বিভাগের অফিসিয়াল হ্যামার সিল মেরে কিউআর কোড বা সিলযুক্ত ট্রানজিট পাস দেওয়া হবে। এই পাস দেখালে রাস্তায় কোনো পুলিশ গাড়ি আটকাতে পারবে না।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bforest.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: নিজের জমির বৈধ গাছ পরিবহনে কোনো পুলিশ বা বন কর্মচারী চাঁদা দাবি করলে ট্রানজিট পাস প্রদর্শন করুন এবং জরুরি পুলিশ হেল্পলাইন ৯৯৯ অথবা বন অধিদপ্তরের কন্ট্রোল রুমে অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bforest.gov.bd'
    }
  ]
};
