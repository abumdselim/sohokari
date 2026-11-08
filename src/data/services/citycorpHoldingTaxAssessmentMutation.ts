import { ServiceRecord } from '../../types/service';

export const citycorpHoldingTaxAssessmentMutationService: ServiceRecord = {
  id: 'bd-citycorp-holding-tax-assessment-mutation',
  slug: 'bd-citycorp-holding-tax-assessment-mutation',
  category_id: 'citizen_general',
  name_bn: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা',
  name_en: 'City Corporation & Pourashava Holding Tax Assessment & Ownership Transfer Guide',
  responsible_ministry_bn: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও পৌরসভাসমূহ',
  responsible_ministry_en: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও পৌরসভাসমূহ',
  responsible_agency_bn: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও পৌরসভাসমূহ',
  responsible_agency_en: 'স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও পৌরসভাসমূহ',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://lgd.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://lgd.gov.bd',
  legal_basis: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'city corporation & pourashava holding tax assessment & ownership transfer guide', language: 'en', weight: 1.0 },
    { alias: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন', language: 'bn', weight: 0.95 },
    { alias: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন ফি', language: 'bn', weight: 0.95 },
    { alias: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'citycorp holding tax assessment mutation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-citycorp-holding-tax-assessment-mutation-standard',
      variant_name_bn: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'City Corporation & Pourashava Holding Tax Assessment & Ownership Transfer Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'হোল্ডিং নির্ধারণ আবেদন ফি',
          fee_type_en: 'হোল্ডিং নির্ধারণ আবেদন ফি',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি আবেদন ফরম ফি মাত্র ২০০ টাকা।'
        },
        {
          fee_type_bn: 'হোল্ডিং নাম পরিবর্তন / নামজারি ফি (ফ্ল্যাট/বাড়ি)',
          fee_type_en: 'হোল্ডিং নাম পরিবর্তন / নামজারি ফি (ফ্ল্যাট/বাড়ি)',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'মালিকানা পরিবর্তনের সরকারি নির্দিষ্ট ফি।'
        },
        {
          fee_type_bn: 'বাৎসরিক পৌর কর (Property Tax Rate)',
          fee_type_en: 'বাৎসরিক পৌর কর (Property Tax Rate)',
          amount_bdt: 7.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভবনের বাৎসরিক মূল্যায়নকৃত ভাড়ার ৭% থেকে ১২% (বাণিজ্যিক হলে প্রযোজ্য রেট)।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মূল রেজিস্ট্রিকৃত দলিল ও হালনাগাদ নামজারি খতিয়ান',
          document_name_en: 'জমির মূল রেজিস্ট্রিকৃত দলিল ও হালনাগাদ নামজারি খতিয়ান',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'অনুমোদিত ভবনের নকশা (রাজউক বা পৌরসভা কর্তৃক অনুমোদিত প্ল্যান)',
          document_name_en: 'অনুমোদিত ভবনের নকশা (রাজউক বা পৌরসভা কর্তৃক অনুমোদিত প্ল্যান)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদ্যুৎ বিল বা গ্যাস বিলের কপি',
          document_name_en: 'বিদ্যুৎ বিল বা গ্যাস বিলের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আবেদন ফরম পূরণ ও জমা',
          instruction_bn: 'সংশ্লিষ্ট জোনাল অফিসে রাজস্ব বিভাগে \'হোল্ডিং নির্ধারণ\' বা \'নাম পরিবর্তনের\' ফরম পূরণ করুন। দলিলের কপি ও এনআইডি সংযুক্ত করুন।',
          warning_bn: 'বাড়ির মোট আয়তন ও তলার সংখ্যা সঠিকভাবে লিখুন।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'রাজস্ব পরিদর্শক কর্তৃক সরেজমিনে পরিদর্শন',
          instruction_bn: 'অ্যাসেসর বা পরিদর্শক বাড়ি পরিদর্শন করে বাৎসরিক আনুমানিক ভাড়া হিসাব করবেন।',
          warning_bn: 'অযৌক্তিক উচ্চ ভাড়া ধার্য করলে রাজস্ব কর্মকর্তা বরাবরে আপত্তি দাখিল করা যায়।',
          action_url: 'https://lgd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'হোল্ডিং প্লেট ও বার্ষিক কর পরিশোধ',
          instruction_bn: 'নির্ধারিত হোল্ডিং ট্যাক্স ব্যাংকে বা অনলাইনে জমা দিয়ে ডিজিটাল ট্যাক্স রসিদ সংগ্রহ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lgd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রাজস্ব পরিদর্শক বা দালালদের ট্যাক্স কমিয়ে দেওয়ার আশ্বাসে কোনো নগদ টাকা দেবেন না। ট্যাক্স অ্যাসেসমেন্টে অনিয়ম হলে সিটি কর্পোরেশনের রিভিউ বোর্ডে (Review Board) আবেদন করে আইনানুযায়ী কর পুনর্নির্ধারণ করা যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সিটি কর্পোরেশন ও পৌরসভা হোল্ডিং ট্যাক্স নির্ধারণ ও নাম পরিবর্তন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lgd.gov.bd'
    }
  ]
};
