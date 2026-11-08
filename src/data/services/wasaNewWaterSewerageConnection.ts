import { ServiceRecord } from '../../types/service';

export const wasaNewWaterSewerageConnectionService: ServiceRecord = {
  id: 'bd-wasa-new-water-sewerage-connection',
  slug: 'bd-wasa-new-water-sewerage-connection',
  category_id: 'citizen_general',
  name_bn: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা',
  name_en: 'WASA New Water & Sewerage Connection Official Procedure & Fee Guide',
  responsible_ministry_bn: 'ঢাকা / চট্টগ্রাম / রাজশাহী / খুলনা ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_ministry_en: 'ঢাকা / চট্টগ্রাম / রাজশাহী / খুলনা ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_agency_bn: 'ঢাকা / চট্টগ্রাম / রাজশাহী / খুলনা ওয়াসা, স্থানীয় সরকার বিভাগ',
  responsible_agency_en: 'ঢাকা / চট্টগ্রাম / রাজশাহী / খুলনা ওয়াসা, স্থানীয় সরকার বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dwasa.org.bd',
  helpline_number: '333',
  grievance_channel: 'https://dwasa.org.bd',
  legal_basis: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'wasa new water & sewerage connection official procedure & fee guide', language: 'en', weight: 1.0 },
    { alias: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি', language: 'bn', weight: 0.95 },
    { alias: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি ফি', language: 'bn', weight: 0.95 },
    { alias: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'wasa new water sewerage connection', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-wasa-new-water-sewerage-connection-standard',
      variant_name_bn: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'WASA New Water & Sewerage Connection Official Procedure & Fee Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'আবেদন ফরম ফি (আবাসিক)',
          fee_type_en: 'আবেদন ফরম ফি (আবাসিক)',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি আবেদন ফি মাত্র ৩০০ টাকা।'
        },
        {
          fee_type_bn: 'পানি ও স্যুয়ারেজ সংযোগ জামানত ও প্রসেসিং ফি (ডিমান্ড নোট)',
          fee_type_en: 'পানি ও স্যুয়ারেজ সংযোগ জামানত ও প্রসেসিং ফি (ডিমান্ড নোট)',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'পাইপের ব্যাস (ডায়ামিটার যেমন: ৩/৪ ইঞ্চি বা ১ ইঞ্চি) অনুযায়ী ওয়াসা নির্ধারিত সরকারি ডিমান্ড নোট।'
        },
        {
          fee_type_bn: 'রাস্তা খনন ক্ষতিপূরণ ফি (সিটি কর্পোরেশন রোড কাটিং চার্জ)',
          fee_type_en: 'রাস্তা খনন ক্ষতিপূরণ ফি (সিটি কর্পোরেশন রোড কাটিং চার্জ)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'রাস্তা কাটার প্রয়োজন হলে প্রযোজ্য সরকারি ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মালিকানা দলিল ও হালনাগাদ নামজারি খতিয়ান',
          document_name_en: 'জমির মালিকানা দলিল ও হালনাগাদ নামজারি খতিয়ান',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সিটি কর্পোরেশন / পৌরসভার অনুমোদিত হোল্ডিং ট্যাক্স দাখিলা',
          document_name_en: 'সিটি কর্পোরেশন / পৌরসভার অনুমোদিত হোল্ডিং ট্যাক্স দাখিলা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের নকশা (প্ল্যান)',
          document_name_en: 'রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের নকশা (প্ল্যান)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-ওয়াসা পোর্টালে অনলাইন আবেদন',
          instruction_bn: 'https://dwasa.org.bd (বা নিজ ওয়াসার পোর্টালে) যান। \'New Connection\' অপশনে ক্লিক করে ৩০০ টাকা ফি দিয়ে আবেদন করুন।',
          warning_bn: 'আপনার নিকটবর্তী মূল পানির পাইপলাইনের অবস্থান ও দূরত্ব উল্লেখ করুন।',
          action_url: 'https://dwasa.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ওয়াসা প্রকৌশলী কর্তৃক প্রাক্কলন ও ডিমান্ড নোট জারি',
          instruction_bn: 'ওয়াসা জোনাল প্রকৌশলী এসে পাইপের সাইজ পরীক্ষা করবেন এবং সরকারি ডিমান্ড নোট ইস্যু করবেন।',
          warning_bn: 'প্রকৌশলী বা পরিদর্শককে কোনো অবৈধ টাকা দেবেন না।',
          action_url: 'https://dwasa.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ডিমান্ড নোট পরিশোধ ও মিটার সংযোগ',
          instruction_bn: 'অনুমোদিত ব্যাংকে ডিমান্ড নোটের টাকা জমা দিলে ওয়াসা অনুমোদিত প্লাম্বার এসে পাইপ সংযোগ করে ডিজিটাল ওয়াটার মিটার স্থাপন করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dwasa.org.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: অবৈধ পানির লাইন বা চোরাই মিটার নিলে ওয়াসার ভ্রাম্যমাণ আদালত লাখ টাকা জরিমানা ও পানির লাইন চিরতরে বিচ্ছিন্ন করে দেয়। শুধুমাত্র বৈধ ই-ওয়াসা সিস্টেমের মাধ্যমে ডিমান্ড নোট দিয়ে সংযোগ নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ওয়াসা (WASA) নতুন পানির সংযোগ ও গভীর নলকূপ অনুমতি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dwasa.org.bd'
    }
  ]
};
