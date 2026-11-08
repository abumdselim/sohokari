import { ServiceRecord } from '../../types/service';

export const warishanSuccessionCertificateUnionCitycorpService: ServiceRecord = {
  id: 'bd-warishan-succession-certificate-union-citycorp',
  slug: 'bd-warishan-succession-certificate-union-citycorp',
  category_id: 'certificates_registration',
  name_bn: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা',
  name_en: 'Warishan Succession Certificate Union Parishad & City Corporation Official Guide',
  responsible_ministry_bn: 'স্থানীয় সরকার বিভাগ, এলজিইডি',
  responsible_ministry_en: 'স্থানীয় সরকার বিভাগ, এলজিইডি',
  responsible_agency_bn: 'স্থানীয় সরকার বিভাগ, এলজিইডি',
  responsible_agency_en: 'স্থানীয় সরকার বিভাগ, এলজিইডি',
  visiting_office_level: 'district',
  official_portal_url: 'https://lgd.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lgd.gov.bd',
  legal_basis: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'warishan succession certificate union parishad & city corporation official guide', language: 'en', weight: 1.0 },
    { alias: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ', language: 'bn', weight: 0.95 },
    { alias: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ ফি', language: 'bn', weight: 0.95 },
    { alias: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'warishan succession certificate union citycorp', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-warishan-succession-certificate-union-citycorp-standard',
      variant_name_bn: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Warishan Succession Certificate Union Parishad & City Corporation Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'ইউনিয়ন পরিষদ ওয়ারিশান সনদ ফি',
          fee_type_en: 'ইউনিয়ন পরিষদ ওয়ারিশান সনদ ফি',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'ইউনিয়ন পরিষদ আদর্শ কর তফসিল অনুযায়ী সর্বোচ্চ ১০০ টাকা।'
        },
        {
          fee_type_bn: 'পৌরসভা / সিটি কর্পোরেশন ওয়ারিশান সনদ ফি',
          fee_type_en: 'পৌরসভা / সিটি কর্পোরেশন ওয়ারিশান সনদ ফি',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'সিটি কর্পোরেশন বা পৌরসভা ভেদে ১০০ থেকে ৩০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মৃত ব্যক্তির মূল মৃত্যু নিবন্ধন সনদ (Death Certificate)',
          document_name_en: 'মৃত ব্যক্তির মূল মৃত্যু নিবন্ধন সনদ (Death Certificate)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সকল জীবিত ওয়ারিশের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          document_name_en: 'সকল জীবিত ওয়ারিশের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সকল ওয়ারিশের পাসপোর্ট সাইজ ছবি',
          document_name_en: 'সকল ওয়ারিশের পাসপোর্ট সাইজ ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্থানীয় গণ্যমান্য ৩ জন প্রতিবেশী বা সদস্যের সুপারিশ/সাক্ষ্য',
          document_name_en: 'স্থানীয় গণ্যমান্য ৩ জন প্রতিবেশী বা সদস্যের সুপারিশ/সাক্ষ্য',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইনে বা নির্ধারিত ফরমে আবেদন',
          instruction_bn: 'সংশ্লিষ্ট ইউপি সেবা পোর্টাল অথবা কাউন্সিলর অফিসে ওয়ারিশবৃন্দের নাম, সম্পর্ক ও বয়স উল্লেখ করে আবেদন করুন।',
          warning_bn: 'কোনো জীবিত ওয়ারিশের নাম গোপন করা দণ্ডবিধি অনুযায়ী জালিয়াতির অপরাধ।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'গ্রাম পুলিশ বা ওয়ার্ড সচিব কর্তৃক সরেজমিন তদন্ত',
          instruction_bn: 'সচিব বা সংশ্লিষ্ট মেম্বার/কাউন্সিলর পারিবারিক ওয়ারিশের তালিকা সরেজমিনে যাচাই করবেন।',
          warning_bn: 'তদন্তের নামে কেউ অতিরিক্ত টাকা চাইলে সরাসরি চেয়ারম্যান বা মেয়রের সাথে কথা বলুন।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইন বা কিউআর কোডযুক্ত ওয়ারিশান সনদ গ্রহণ',
          instruction_bn: 'ইউপি/সিটি কর্পোরেশনের নির্ধারিত সরকারি ফি রশিদ গ্রহণ করে ডিজিটাল সিলমোহরযুক্ত ওয়ারিশান সনদপত্র সংগ্রহ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lgd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ওয়ারিশান সনদে ইচ্ছাকৃতভাবে কোনো কন্যা বা দুর্বল ওয়ারিশের নাম বাদ দিলে পরবর্তীতে পুরো সম্পত্তি হস্তান্তর বাতিল হয়ে যাবে। সচিব বা উদ্যোক্তার নামে কোনো মধ্যস্বত্বভোগী ১,০০০ থেকে ৫,০০০ টাকা দাবি করলে স্থানীয় ইউএনও কার্যালয়ে অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lgd.gov.bd'
    }
  ]
};
