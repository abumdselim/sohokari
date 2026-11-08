import { ServiceRecord } from '../../types/service';

export const ugcForeignDegreeEquivalenceCertificateService: ServiceRecord = {
  id: 'bd-ugc-foreign-degree-equivalence-certificate',
  slug: 'bd-ugc-foreign-degree-equivalence-certificate',
  category_id: 'citizen_general',
  name_bn: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা',
  name_en: 'UGC Foreign University Degree Equivalence Certificate Official Guide',
  responsible_ministry_bn: 'বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)',
  responsible_ministry_en: 'বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)',
  responsible_agency_bn: 'বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)',
  responsible_agency_en: 'বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)',
  visiting_office_level: 'district',
  official_portal_url: 'https://ugc.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://ugc.gov.bd',
  legal_basis: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'ugc foreign university degree equivalence certificate official guide', language: 'en', weight: 1.0 },
    { alias: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ', language: 'bn', weight: 0.95 },
    { alias: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ ফি', language: 'bn', weight: 0.95 },
    { alias: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'ugc foreign degree equivalence certificate', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-ugc-foreign-degree-equivalence-certificate-standard',
      variant_name_bn: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'UGC Foreign University Degree Equivalence Certificate Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'স্নাতক / স্নাতকোত্তর সমমান ফি (সাধারণ)',
          fee_type_en: 'স্নাতক / স্নাতকোত্তর সমমান ফি (সাধারণ)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতিটি ডিগ্রির জন্য ৩,০০০ টাকা।'
        },
        {
          fee_type_bn: 'পিএইচডি (PhD) ডিগ্রি সমমান ফি',
          fee_type_en: 'পিএইচডি (PhD) ডিগ্রি সমমান ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ডক্টরেট ডিগ্রির সমমান ফি ৫,০০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বিদেশি বিশ্ববিদ্যালয়ের মূল ডিগ্রি সনদ ও একাডেমিক ট্রান্সক্রিপ্ট',
          document_name_en: 'বিদেশি বিশ্ববিদ্যালয়ের মূল ডিগ্রি সনদ ও একাডেমিক ট্রান্সক্রিপ্ট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদেশে পড়াশোনাকালীন ব্যবহৃত মূল পাসপোর্টের ভিসার পাতার কপি',
          document_name_en: 'বিদেশে পড়াশোনাকালীন ব্যবহৃত মূল পাসপোর্টের ভিসার পাতার কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্ববর্তী এসএসসি ও এইচএসসি বা সমমান সনদের কপি',
          document_name_en: 'পূর্ববর্তী এসএসসি ও এইচএসসি বা সমমান সনদের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউজিসি নির্ধারিত সমমান আবেদন ফরম ও পে-অর্ডারের মূল কপি',
          document_name_en: 'ইউজিসি নির্ধারিত সমমান আবেদন ফরম ও পে-অর্ডারের মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সনদপত্র দূতাবাস ও পররাষ্ট্র মন্ত্রণালয় থেকে সত্যায়ন',
          instruction_bn: 'বিদেশি বিশ্ববিদ্যালয়ের মূল সার্টিফিকেট সংশ্লিষ্ট দেশের দূতাবাস এবং বাংলাদেশ পররাষ্ট্র মন্ত্রণালয় (MOFA) থেকে সত্যায়ন করান।',
          warning_bn: 'অনলাইন দূরশিক্ষণ (Distance Learning) ডিগ্রি সাধারণত সরকার সমমান দেয় না।',
          action_url: 'https://ugc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ইউজিসি ভবনে ওয়ান-স্টপ সার্ভিসে আবেদন দাখিল',
          instruction_bn: 'আগারগাঁও ইউজিসি ভবনে নির্ধারিত পে-অর্ডারসহ সকল সত্যায়িত কাগজপত্র জমা দিয়ে রিসিভিং স্লিপ নিন।',
          warning_bn: 'দালাল ছাড়াই নিজে সশরীরে জমা দিন।',
          action_url: 'https://ugc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সমমান কমিটির অনুমোদন ও সনদপত্র সংগ্রহ',
          instruction_bn: 'সমমান কমিটির অনুমোদনের পর সরকারি কিউআর কোডযুক্ত সমমান সনদপত্র সংগ্রহ করুন যা বিসিএস ও সরকারি চাকরিতে গ্রহণযোগ্য।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://ugc.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভুয়া বিদেশি ডিগ্রির জন্য কোনো চক্রের ফাঁদে পা দেবেন না। ইউজিসি আন্তর্জাতিক ডাটাবেজ দিয়ে বিশ্ববিদ্যালয়ের অনুমোদন যাচাই করে। কোনো অসদুপায় শাস্তিযোগ্য ফৌজদারি অপরাধ।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://ugc.gov.bd'
    }
  ]
};
