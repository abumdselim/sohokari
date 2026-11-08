import { ServiceRecord } from '../../types/service';

export const btebDiplomaCertificateVerificationService: ServiceRecord = {
  id: 'bd-bteb-diploma-certificate-verification',
  slug: 'bd-bteb-diploma-certificate-verification',
  category_id: 'education_boards',
  name_bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা',
  name_en: 'Bangladesh Technical Education Board BTEB Diploma Certificate Verification Guide',
  responsible_ministry_bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)',
  responsible_ministry_en: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)',
  responsible_agency_bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)',
  responsible_agency_en: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)',
  visiting_office_level: 'division',
  official_portal_url: 'http://bteb.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://bteb.gov.bd',
  legal_basis: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh technical education board bteb diploma certificate verification guide', language: 'en', weight: 1.0 },
    { alias: 'কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই', language: 'bn', weight: 0.95 },
    { alias: 'কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই ফি', language: 'bn', weight: 0.95 },
    { alias: 'কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bteb diploma certificate verification', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bteb-diploma-certificate-verification-standard',
      variant_name_bn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Technical Education Board BTEB Diploma Certificate Verification Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'মূল ডিপ্লোমা সনদপত্র উত্তোলন ফি',
          fee_type_en: 'মূল ডিপ্লোমা সনদপত্র উত্তোলন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'বোর্ড নির্ধারিত সরকারি ফি ৫০০ টাকা।'
        },
        {
          fee_type_bn: 'নম্বরপত্র / ট্রান্সক্রিপ্ট ফি',
          fee_type_en: 'নম্বরপত্র / ট্রান্সক্রিপ্ট ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রতিটি একাডেমিক ট্রান্সক্রিপ্ট ৩০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বিটিইবি রেজিস্ট্রেশন কার্ড ও প্রবেশপত্রের (Admit Card) কপি',
          document_name_en: 'বিটিইবি রেজিস্ট্রেশন কার্ড ও প্রবেশপত্রের (Admit Card) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইনস্টিটিউটের অধ্যক্ষ কর্তৃক অগ্রায়নপত্র বা প্রত্যয়নপত্র',
          document_name_en: 'ইনস্টিটিউটের অধ্যক্ষ কর্তৃক অগ্রায়নপত্র বা প্রত্যয়নপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সোনালী সেবার পেমেন্ট স্লিপের কপি',
          document_name_en: 'সোনালী সেবার পেমেন্ট স্লিপের কপি',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিটিইবি পোর্টালে অনলাইন সেবা ফরম পূরণ',
          instruction_bn: 'http://bteb.gov.bd পোর্টালে সোনালী সেবার মাধ্যমে চালানের ফি পরিশোধ করুন।',
          warning_bn: 'দালালকে টাকা না দিয়ে সোনালী ই-সেবায় সরাসরি ফি দিন।',
          action_url: 'http://bteb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কারিগরি শিক্ষা বোর্ডের ওয়ান-স্টপ কাউন্টারে দাখিল',
          instruction_bn: 'আগারগাঁও কারিগরি বোর্ডের নিচতলার ওয়ান-স্টপ কাউন্টারে ফাইল জমা দিয়ে টোকেন স্লিপ নিন।',
          warning_bn: 'বোর্ডের সীমানায় ঘোরাঘুরি করা দালালদের পাত্তা দেবেন না।',
          action_url: 'http://bteb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'নির্ধারিত দিনে মূল সনদপত্র সংগ্রহ',
          instruction_bn: 'রসিদ দেখিয়ে কিউআর কোডযুক্ত মূল ডিপ্লোমা সার্টিফিকেট বা ভেরিফাইড ট্রান্সক্রিপ্ট গ্রহণ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://bteb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ডিপ্লোমা সনদ উত্তোলনে কোনো বোর্ড কর্মকর্তাকে বাড়তি টাকা দেওয়ার প্রয়োজন নেই। বোর্ডের নিচতলার অভিযোগ বক্সে অথবা চেয়ারম্যানের দপ্তরে তাৎক্ষণিক অনিয়ম জানাতে পারেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'http://bteb.gov.bd'
    }
  ]
};
