import { ServiceRecord } from '../../types/service';

export const landEporchaCertifiedCopyGuideService: ServiceRecord = {
  id: 'bd-land-eporcha-certified-copy-guide',
  slug: 'bd-land-eporcha-certified-copy-guide',
  category_id: 'land_property',
  name_bn: 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা',
  name_en: 'Bangladesh e-Porcha Certified Copy & Mouza Map Official Online Delivery Guide',
  responsible_ministry_bn: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়',
  responsible_agency_bn: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়',
  responsible_agency_en: 'ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://eporcha.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://eporcha.gov.bd',
  legal_basis: 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh e-porcha certified copy & mouza map official online delivery guide', language: 'en', weight: 1.0 },
    { alias: 'খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ', language: 'bn', weight: 0.95 },
    { alias: 'খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ ফি', language: 'bn', weight: 0.95 },
    { alias: 'খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'land eporcha certified copy guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-land-eporcha-certified-copy-guide-standard',
      variant_name_bn: 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh e-Porcha Certified Copy & Mouza Map Official Online Delivery Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'অনলাইন খতিয়ান সার্টিফাইড কপি (অফিস কাউন্টার থেকে গ্রহণ)',
          fee_type_en: 'অনলাইন খতিয়ান সার্টিফাইড কপি (অফিস কাউন্টার থেকে গ্রহণ)',
          amount_bdt: 100.0,
          effective_date: '2022-01-01',
          notes_bn: 'কোর্ট ফি ও প্রসেসিং ফি বাবদ ১০০ টাকা।'
        },
        {
          fee_type_bn: 'অনলাইন খতিয়ান সার্টিফাইড কপি (ডাকযোগে বাড়িতে হোম ডেলিভারি)',
          fee_type_en: 'অনলাইন খতিয়ান সার্টিফাইড কপি (ডাকযোগে বাড়িতে হোম ডেলিভারি)',
          amount_bdt: 140.0,
          effective_date: '2022-01-01',
          notes_bn: 'ফি ১০০ টাকা + ডাকমাশুল ৪০ টাকা = মোট ১৪০ টাকা।'
        },
        {
          fee_type_bn: 'মৌজা ম্যাপ (নকশা) সার্টিফাইড কপি',
          fee_type_en: 'মৌজা ম্যাপ (নকশা) সার্টিফাইড কপি',
          amount_bdt: 520.0,
          effective_date: '2022-01-01',
          notes_bn: 'ম্যাপ ফি ৫০০ টাকা + ডাক ফি ২০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সংশ্লিষ্ট খতিয়ান নম্বর, দাগ নম্বর অথবা মালিকের নাম',
          document_name_en: 'সংশ্লিষ্ট খতিয়ান নম্বর, দাগ নম্বর অথবা মালিকের নাম',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-পরচা পোর্টালে অনুসন্ধান',
          instruction_bn: 'https://eporcha.gov.bd ওয়েবসাইটে যান। আপনার বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা সিলেক্ট করুন। এরপর জরিপের ধরন (যেমন: আরএস, বিএস, সিএস) বাছাই করে খতিয়ান নম্বর দিয়ে খুঁজুন।',
          warning_bn: 'আপনি সম্পূর্ণ বিনামূল্যে অনলাইনে পরচার অনলাইন ড্রাফট দেখতে পারবেন।',
          action_url: 'https://eporcha.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সার্টিফাইড কপির আবেদন ও ডেলিভারি মোড নির্বাচন',
          instruction_bn: '\'আবেদন করুন\' বাটনে ক্লিক করে ডেলিভারির মাধ্যম হিসেবে \'ডাকযোগে\' অথবা \'সরাসরি ডিসি অফিস\' বেছে নিন। ডাকযোগে নিলে আপনার পূর্ণ ডাক যোগাযোগের ঠিকানা দিন।',
          warning_bn: 'ডাকযোগে নিলে ডিসি অফিসের রেকর্ড রুমে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।',
          action_url: 'https://eporcha.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'অনলাইনে ১০০ বা ১৪০ টাকা ফি পরিশোধ',
          instruction_bn: 'বিকাশ, নগদ বা ব্যাংক কার্ডের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। আবেদনের ট্র্যাকিং স্লিপ প্রিন্ট বা সেভ করুন।',
          warning_bn: 'কোনো মুহুরি বা দালালের মাধ্যমে ৫০০০ টাকা ফি দেওয়ার কোনো সুযোগ নেই।',
          action_url: 'https://eporcha.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'খতিয়ান গ্রহণ',
          instruction_bn: 'ডিসি অফিসের রেকর্ড রুম থেকে সিল ও সাক্ষরযুক্ত আসল সার্টিফাইড খতিয়ান ডাক পিয়ন আপনার বাড়িতে পৌঁছে দেবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://eporcha.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রেকর্ড রুম বা ডিসি অফিসের চত্বরে কোনো মুহুরির কাছে যাবেন না। তারা ১০০ টাকার খতিয়ানের জন্য ১,৫০০ থেকে ৩,০০০ টাকা পর্যন্ত দাবি করে। ঘরে বসে স্মার্টফোনে eporcha.gov.bd থেকেই আসল সার্টিফাইড কপি পাওয়া যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://eporcha.gov.bd'
    }
  ]
};
