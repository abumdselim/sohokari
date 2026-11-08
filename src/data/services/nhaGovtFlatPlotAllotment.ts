import { ServiceRecord } from '../../types/service';

export const nhaGovtFlatPlotAllotmentService: ServiceRecord = {
  id: 'bd-nha-govt-flat-plot-allotment',
  slug: 'bd-nha-govt-flat-plot-allotment',
  category_id: 'citizen_general',
  name_bn: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা',
  name_en: 'National Housing Authority NHA Govt Flat & Plot Allotment Official Guide',
  responsible_ministry_bn: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_ministry_en: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_agency_bn: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  responsible_agency_en: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://nha.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://nha.gov.bd',
  legal_basis: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'national housing authority nha govt flat & plot allotment official guide', language: 'en', weight: 1.0 },
    { alias: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'nha govt flat plot allotment', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-nha-govt-flat-plot-allotment-standard',
      variant_name_bn: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'National Housing Authority NHA Govt Flat & Plot Allotment Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'প্লট / ফ্ল্যাট আবেদন ফরম ও প্রসপেক্টাস ফি',
          fee_type_en: 'প্লট / ফ্ল্যাট আবেদন ফরম ও প্রসপেক্টাস ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রকল্প অনুযায়ী ১,০০০ থেকে ২,০০০ টাকা।'
        },
        {
          fee_type_bn: 'প্রাথমিক জামানত (Earnest Money Deposit)',
          fee_type_en: 'প্রাথমিক জামানত (Earnest Money Deposit)',
          amount_bdt: 50000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ফ্ল্যাট অনুযায়ী ৫০,০০০ থেকে ২,০০,০০০ টাকা জামানত।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারী ও স্বামীর/স্ত্রীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'আবেদনকারী ও স্বামীর/স্ত্রীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী বা পরিবারের ঢাকায় অন্য কোনো সরকারি প্লট নেই মর্মে নোটারি এফিডেভিট',
          document_name_en: 'আবেদনকারী বা পরিবারের ঢাকায় অন্য কোনো সরকারি প্লট নেই মর্মে নোটারি এফিডেভিট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ই-টিন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন জমার কপি',
          document_name_en: 'ই-টিন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন জমার কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ব্যাংক ড্রাফট বা পে-অর্ডারের মূল কপি',
          document_name_en: 'ব্যাংক ড্রাফট বা পে-অর্ডারের মূল কপি',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'গৃহায়ন কর্তৃপক্ষের বিজ্ঞপ্তি দেখে ব্যাংকে আবেদন দাখিল',
          instruction_bn: 'গৃহায়নের ওয়েবসাইটে (https://nha.gov.bd) প্রকাশিত বিজ্ঞপ্তি অনুযায়ী সোনালী ব্যাংকে জামানতের পে-অর্ডারসহ আবেদন জমা দিন।',
          warning_bn: 'কোনো দালালকে টাকা দিয়ে প্লট পাওয়ার কোনো সুযোগ নেই।',
          action_url: 'https://nha.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উন্মুক্ত ডিজিটাল লটারির মাধ্যমে বরাদ্দ',
          instruction_bn: 'আবেদনকারীদের উপস্থিতিতে ও সিসিটিভি ক্যামেরার সামনে সফটওয়্যারের মাধ্যমে ডিজিটাল লটারি অনুষ্ঠিত হয়।',
          warning_bn: 'লটারিতে নাম না এলে ব্যাংকের পে-অর্ডার সম্পূর্ণ ফেরত পাওয়া যায়।',
          action_url: 'https://nha.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'বরাদ্দপত্র ও কিস্তিতে মূল্য পরিশোধ',
          instruction_bn: 'লটারিতে নির্বাচিত হলে আনুষ্ঠানিক বরাদ্দপত্র ইস্যু করা হবে এবং সহজ কিস্তিতে টাকা দিয়ে ফ্ল্যাটের চাবি বুঝে নেওয়া যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nha.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: গৃহায়ন কর্তৃপক্ষ বা রাজউকের কোনো কর্মচারী বা দালাল যদি বলে লটারি ছাড়াই গোপনে প্লট পাইয়ে দেবে—সেটি সম্পূর্ণ জালিয়াতি। কোনো প্রতারককে টাকা দেবেন না, সরাসরি চেয়ারম্যান এনএইচএ-র সাথে দেখা করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nha.gov.bd'
    }
  ]
};
