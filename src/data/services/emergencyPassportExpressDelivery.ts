import { ServiceRecord } from '../../types/service';

export const emergencyPassportExpressDeliveryService: ServiceRecord = {
  id: 'bd-emergency-passport-express-delivery',
  slug: 'bd-emergency-passport-express-delivery',
  category_id: 'passport_immigration',
  name_bn: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা',
  name_en: 'Emergency Medical & Study Passport Express Delivery Official Guide',
  responsible_ministry_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_ministry_en: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_agency_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_agency_en: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  visiting_office_level: 'district',
  official_portal_url: 'https://epassport.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://epassport.gov.bd',
  legal_basis: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'emergency medical & study passport express delivery official guide', language: 'en', weight: 1.0 },
    { alias: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি', language: 'bn', weight: 0.95 },
    { alias: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি ফি', language: 'bn', weight: 0.95 },
    { alias: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'emergency passport express delivery', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-emergency-passport-express-delivery-standard',
      variant_name_bn: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Emergency Medical & Study Passport Express Delivery Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 48,
      fees: [
        {
          fee_type_bn: 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ৫ বছর)',
          fee_type_en: 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ৫ বছর)',
          amount_bdt: 8050.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভ্যাটসহ মোট সরকারি ফি ৮,০৫০ টাকা (২ কর্মদিবসে ডেলিভারি)।'
        },
        {
          fee_type_bn: 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ১০ বছর)',
          fee_type_en: 'সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ১০ বছর)',
          amount_bdt: 10350.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভ্যাটসহ মোট সরকারি ফি ১০,৩৫০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'হাসপাতালের চিকিৎসকের রেফারেল ও এয়ার অ্যাম্বুলেন্স/ভিসা ইনভাইটেশন লেটার',
          document_name_en: 'হাসপাতালের চিকিৎসকের রেফারেল ও এয়ার অ্যাম্বুলেন্স/ভিসা ইনভাইটেশন লেটার',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিদেশি বিশ্ববিদ্যালয়ের অফার লেটার / ডেডলাইন নোটিশ (শিক্ষার্থীদের ক্ষেত্রে)',
          document_name_en: 'বিদেশি বিশ্ববিদ্যালয়ের অফার লেটার / ডেডলাইন নোটিশ (শিক্ষার্থীদের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'মহাপরিচালক (DG) বা উপ-পরিচালক (পাসপোর্ট) বরাবর লিখিত জরুরি আবেদনপত্র',
          document_name_en: 'মহাপরিচালক (DG) বা উপ-পরিচালক (পাসপোর্ট) বরাবর লিখিত জরুরি আবেদনপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ই-পাসপোর্ট অনলাইন আবেদন ফরম ও সুপার এক্সপ্রেস চালানের কপি',
          document_name_en: 'ই-পাসপোর্ট অনলাইন আবেদন ফরম ও সুপার এক্সপ্রেস চালানের কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সুপার এক্সপ্রেস ক্যাটাগরিতে সরকারি চালান জমা',
          instruction_bn: 'পাসপোর্ট আবেদন করার সময় \'Super Express\' ডেলিভারি অপশন নির্বাচন করে নির্ধারিত সরকারি ফি অনলাইনে পরিশোধ করুন।',
          warning_bn: 'অতিরিক্ত এক টাকাও কোনো দালালকে দেবেন না।',
          action_url: 'https://epassport.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'পাসপোর্ট অফিসের উপ-পরিচালক/সহকারী পরিচালকের অনুমোদন',
          instruction_bn: 'মেডিকেল নথিপত্রসহ আঞ্চলিক পাসপোর্ট অফিসের প্রধান কর্মকর্তার সাথে সরাসরি দেখা করুন। জরুরি মানবিক বিবেচনায় তিনি তাৎক্ষণিক আবেদন অগ্রায়ন করবেন।',
          warning_bn: 'দালালের মাধ্যমে নয়, সরাসরি অফিস প্রধানের রুমে যান।',
          action_url: 'https://epassport.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আগারগাঁও কেন্দ্রীয় প্রিন্টিং থেকে ২ দিনে ডেলিভারি',
          instruction_bn: 'বায়োমেট্রিক নেওয়ার পর আবেদনটি সরাসরি এক্সপ্রেস কিউতে প্রিন্ট হয়ে ৪৮ ঘণ্টার মধ্যে প্রস্তুত হয়ে যায় এবং এসএমএস পাওয়া যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://epassport.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: পাসপোর্ট অফিসের সীমানায় দালালরা জরুরি রোগীদের ঘিরে ধরে বলে \'আমাদের না দিলে ১০ দিনেও পাসপোর্ট পাবেন না\'। এটি সম্পূর্ণ মিথ্যাচার। সরকারি সুপার এক্সপ্রেস সিস্টেমে ৪৮ ঘণ্টাতেই পাসপোর্ট পাওয়া যায়। দালালদের বিরুদ্ধে অভিযোগ জানাতে পাসপোর্ট অফিস পরিচালকের রুমে জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://epassport.gov.bd'
    }
  ]
};
