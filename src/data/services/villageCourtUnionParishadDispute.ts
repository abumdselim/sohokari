import { ServiceRecord } from '../../types/service';

export const villageCourtUnionParishadDisputeService: ServiceRecord = {
  id: 'bd-village-court-union-parishad-dispute',
  slug: 'bd-village-court-union-parishad-dispute',
  category_id: 'citizen_general',
  name_bn: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা',
  name_en: 'Village Court Union Parishad 10/20 Taka Justice Dispute Resolution Guide',
  responsible_ministry_bn: 'স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ',
  responsible_ministry_en: 'স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ',
  responsible_agency_bn: 'স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ',
  responsible_agency_en: 'স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ',
  visiting_office_level: 'district',
  official_portal_url: 'https://lgd.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lgd.gov.bd',
  legal_basis: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'village court union parishad 10/20 taka justice dispute resolution guide', language: 'en', weight: 1.0 },
    { alias: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি', language: 'bn', weight: 0.95 },
    { alias: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'village court union parishad dispute', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-village-court-union-parishad-dispute-standard',
      variant_name_bn: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Village Court Union Parishad 10/20 Taka Justice Dispute Resolution Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'গ্রাম আদালতে ফৌজদারি মামলা দায়ের ফি',
          fee_type_en: 'গ্রাম আদালতে ফৌজদারি মামলা দায়ের ফি',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: 'মারামারি, গালিগালাজ বা সাধারণ আঘাতের অভিযোগের ফি মাত্র ১০ টাকা।'
        },
        {
          fee_type_bn: 'গ্রাম আদালতে দেওয়ানি মামলা দায়ের ফি',
          fee_type_en: 'গ্রাম আদালতে দেওয়ানি মামলা দায়ের ফি',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'জমিজমার সীমানা, বকেয়া পাওনা টাকা বা মালামাল উদ্ধারের ফি মাত্র ২০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'গ্রাম আদালতে ইউনিয়ন পরিষদ চেয়ারম্যান বরাবর লিখিত আবেদনপত্র',
          document_name_en: 'গ্রাম আদালতে ইউনিয়ন পরিষদ চেয়ারম্যান বরাবর লিখিত আবেদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিরোধ সংক্রান্ত প্রমাণপত্র (জমির দলিল/রশিদ/চিকিৎসার প্রেসক্রিপশন)',
          document_name_en: 'বিরোধ সংক্রান্ত প্রমাণপত্র (জমির দলিল/রশিদ/চিকিৎসার প্রেসক্রিপশন)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: '১০ বা ২০ টাকার ফি দিয়ে ইউপি সচিবের কাছে আবেদন জমা',
          instruction_bn: 'ইউনিয়ন পরিষদে গিয়ে ১০ টাকা (ফৌজদারি) বা ২০ টাকা (দেওয়ানি) ফি দিয়ে মামলা দায়ের করে রসিদ নিন।',
          warning_bn: 'কোনো উকিল বা দালাল লাগে না।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'গ্রাম আদালত গঠন ও সদস্য মনোনয়ন',
          instruction_bn: 'ইউপি চেয়ারম্যানের নেতৃত্বে উভয় পক্ষ থেকে ২ জন করে মোট ৪ জন সদস্য (একজন মেম্বার ও একজন গণ্যমান্য ব্যক্তি) নিয়ে ৫ সদস্যের গ্রাম আদালত গঠিত হবে।',
          warning_bn: 'উভয় পক্ষ নিজের পছন্দের প্রতিনিধি দিতে পারেন।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'শুনানি ও আনুষ্ঠানিক রায় ঘোষণা',
          instruction_bn: 'উন্মুক্ত আদালতে সাক্ষ্যগ্রহণ শেষে গ্রাম আদালত রায় দেবে এবং ক্ষতিপূরণের টাকা আদায় করে বাদীকে বুঝিয়ে দেওয়া হবে। না মানলে তা উচ্চ আদালতে ডিক্রি জারির সমান কার্যকর।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lgd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: গ্রাম আদালত সাধারণ মানুষের কাছে বিচার পৌঁছে দেওয়ার জন্য সরকারের এক যুগান্তকারী ব্যবস্থা। ইউপি চেয়ারম্যান বা সচিব ২০ টাকার বেশি এক পয়সাও ফি দাবি করতে পারেন না। অতিরিক্ত ফি চাইলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) কার্যালয়ে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lgd.gov.bd'
    }
  ]
};
