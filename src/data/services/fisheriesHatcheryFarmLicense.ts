import { ServiceRecord } from '../../types/service';

export const fisheriesHatcheryFarmLicenseService: ServiceRecord = {
  id: 'bd-fisheries-hatchery-farm-license',
  slug: 'bd-fisheries-hatchery-farm-license',
  category_id: 'citizen_general',
  name_bn: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা',
  name_en: 'Fisheries Farm & Hatchery Establishment License and Fry Transit Guide',
  responsible_ministry_bn: 'মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_ministry_en: 'মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_bn: 'মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  responsible_agency_en: 'মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://fisheries.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://fisheries.gov.bd',
  legal_basis: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'fisheries farm & hatchery establishment license and fry transit guide', language: 'en', weight: 1.0 },
    { alias: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র', language: 'bn', weight: 0.95 },
    { alias: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'fisheries hatchery farm license', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-fisheries-hatchery-farm-license-standard',
      variant_name_bn: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Fisheries Farm & Hatchery Establishment License and Fry Transit Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'মাছের হ্যাচারি স্থাপন লাইসেন্স ফি',
          fee_type_en: 'মাছের হ্যাচারি স্থাপন লাইসেন্স ফি',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাৎসরিক লাইসেন্স ফি ২,০০০ টাকা।'
        },
        {
          fee_type_bn: 'মৎস্য খামার নিবন্ধন ফি',
          fee_type_en: 'মৎস্য খামার নিবন্ধন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সাধারণ মৎস্য খামারের জন্য মাত্র ৫০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'নির্ধারিত আবেদন ফরম (উপজেলা মৎস্য অফিস থেকে সংগৃহীত)',
          document_name_en: 'নির্ধারিত আবেদন ফরম (উপজেলা মৎস্য অফিস থেকে সংগৃহীত)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পুকুর বা হ্যাচারির জমির মালিকানার দলিল ও নামজারি খতিয়ান',
          document_name_en: 'পুকুর বা হ্যাচারির জমির মালিকানার দলিল ও নামজারি খতিয়ান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পানির উৎস ও পরিবেশ সুরক্ষা ব্যবস্থার বিবরণ',
          document_name_en: 'পানির উৎস ও পরিবেশ সুরক্ষা ব্যবস্থার বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা জ্যেষ্ঠ মৎস্য কর্মকর্তা বরাবর আবেদন',
          instruction_bn: 'জমির কাগজপত্র ও ট্রেড লাইসেন্সসহ উপজেলা মৎস্য কার্যালয়ে আবেদন জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি অফিসে ফাইল জমা দিন।',
          action_url: 'https://fisheries.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'মৎস্য কারিগরি দল কর্তৃক পরিদর্শন',
          instruction_bn: 'মৎস্য কর্মকর্তা সরেজমিনে হ্যাচারির ব্রুড মাছের মান ও হ্যাচিং জার পরীক্ষা করবেন।',
          warning_bn: 'পরিদর্শনে কোনো অনৈতিক লেনদেন নিষিদ্ধ।',
          action_url: 'https://fisheries.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'চালান জমা ও হ্যাচারি লাইসেন্স গ্রহণ',
          instruction_bn: 'ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি হ্যাচারি লাইসেন্স ও সনদপত্র সংগ্রহ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://fisheries.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: নিষিদ্ধ আফ্রিকান মাগুর বা পিরানহার হ্যাচারি করা শাস্তিযোগ্য অপরাধ। লাইসেন্স পাওয়ার জন্য কোনো মধ্যস্থতাকারীকে টাকা দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://fisheries.gov.bd'
    }
  ]
};
