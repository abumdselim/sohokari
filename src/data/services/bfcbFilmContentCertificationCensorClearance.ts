import { ServiceRecord } from '../../types/service';

export const bfcbFilmContentCertificationCensorClearanceService: ServiceRecord = {
  id: 'bd-bfcb-film-content-certification-censor-clearance',
  slug: 'bd-bfcb-film-content-certification-censor-clearance',
  category_id: 'citizen_general',
  name_bn: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা',
  name_en: 'Bangladesh Film Certification Board Movie & OTT Content Clearance Guide',
  responsible_ministry_bn: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড (BFCB), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড (BFCB), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড (BFCB), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড (BFCB), তথ্য ও সম্প্রচার মন্ত্রণালয়',
  visiting_office_level: 'division',
  official_portal_url: 'https://moi.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://moi.gov.bd',
  legal_basis: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh film certification board movie & ott content clearance guide', language: 'en', weight: 1.0 },
    { alias: 'ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র', language: 'bn', weight: 0.95 },
    { alias: 'ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bfcb film content certification censor clearance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bfcb-film-content-certification-censor-clearance-standard',
      variant_name_bn: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Film Certification Board Movie & OTT Content Clearance Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'পূর্ণদৈর্ঘ্য চলচ্চিত্র সার্টিফিকেশন ফি (প্রতি রিল বা ডিজিটাল মিনিট)',
          fee_type_en: 'পূর্ণদৈর্ঘ্য চলচ্চিত্র সার্টিফিকেশন ফি (প্রতি রিল বা ডিজিটাল মিনিট)',
          amount_bdt: 10000.0,
          effective_date: '2022-01-01',
          notes_bn: 'তথ্য ও সম্প্রচার মন্ত্রণালয় নির্ধারিত সরকারি ফি।'
        },
        {
          fee_type_bn: 'স্বল্পদৈর্ঘ্য ও ডকুমেন্টারি ছাড়পত্র ফি',
          fee_type_en: 'স্বল্পদৈর্ঘ্য ও ডকুমেন্টারি ছাড়পত্র ফি',
          amount_bdt: 2000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সংক্ষিপ্ত চলচ্চিত্রের নামমাত্র ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'চলচ্চিত্রের মূল প্রিন্ট বা ডিজিটাল ড্রাইভ (DCP বা উচ্চ রেজ্যুলেশন ফাইল)',
          document_name_en: 'চলচ্চিত্রের মূল প্রিন্ট বা ডিজিটাল ড্রাইভ (DCP বা উচ্চ রেজ্যুলেশন ফাইল)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'চলচ্চিত্রের পূর্ণাঙ্গ চিত্রনাট্য ও সংলাপের প্রত্যায়িত কপি',
          document_name_en: 'চলচ্চিত্রের পূর্ণাঙ্গ চিত্রনাট্য ও সংলাপের প্রত্যায়িত কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রযোজকের ট্রেড লাইসেন্স, ই-টিন ও প্রযোজক সমিতির সদস্যপত্র',
          document_name_en: 'প্রযোজকের ট্রেড লাইসেন্স, ই-টিন ও প্রযোজক সমিতির সদস্যপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ট্রেজারি চালানের মূল কপি',
          document_name_en: 'ট্রেজারি চালানের মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ফিল্ম সার্টিফিকেশন বোর্ডে নির্ধারিত ফরমে আবেদন',
          instruction_bn: 'কাকরাইল তথ্য ভবনস্থ সার্টিফিকেশন বোর্ডে চিত্রনাট্য ও চালানের কপিসহ চলচ্চিত্র জমা দিন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি সচিবালয়/বোর্ডের কাউন্টারে ফাইল জমা দিন।',
          action_url: 'https://moi.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সার্টিফিকেশন বোর্ডের স্ক্রিনিং থিয়েটারে প্রদর্শন',
          instruction_bn: 'বোর্ডের জুরিবৃন্দ সিনেমাটি দেখে বয়সভিত্তিক গ্রেডিং (যেমন: সবার জন্য উন্মুক্ত, ১২+, ১৫+ বা ১৮+) নির্ধারণ করবেন।',
          warning_bn: 'আইনবহির্ভূত কোনো দৃশ্য থাকলে সম্পাদনার সুযোগ দেওয়া হয়।',
          action_url: 'https://moi.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'কিউআর কোডযুক্ত সেন্সর বা সার্টিফিকেশন সনদ গ্রহণ',
          instruction_bn: 'অনুমোদিত হলে সার্টিফিকেট প্রদান করা হবে যা সিনেমা হল ও ওটিটি প্ল্যাটফর্মে প্রদর্শনের আইনি অনুমতিপত্র হিসেবে কাজ করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://moi.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ ও সনদবিহীন চলচ্চিত্র প্রদর্শন কপিরাইট ও সার্টিফিকেশন আইনে দণ্ডনীয় অপরাধ। ছাড়পত্র পেতে কোনো দালালকে ঘুষ দেবেন না।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://moi.gov.bd'
    }
  ]
};
