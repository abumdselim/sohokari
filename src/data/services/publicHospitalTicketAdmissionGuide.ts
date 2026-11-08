import { ServiceRecord } from '../../types/service';

export const publicHospitalTicketAdmissionGuideService: ServiceRecord = {
  id: 'bd-public-hospital-ticket-admission-guide',
  slug: 'bd-public-hospital-ticket-admission-guide',
  category_id: 'healthcare',
  name_bn: 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা',
  name_en: 'Bangladesh Public Hospital Outdoor Ticket, Evening Specialist Service & Admission Guide',
  responsible_ministry_bn: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_ministry_en: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_agency_bn: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  responsible_agency_en: 'স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dghs.gov.bd',
  helpline_number: '16263',
  grievance_channel: 'https://dghs.gov.bd',
  legal_basis: 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh public hospital outdoor ticket, evening specialist service & admission guide', language: 'en', weight: 1.0 },
    { alias: 'হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি', language: 'bn', weight: 0.95 },
    { alias: 'হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'public hospital ticket admission guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-public-hospital-ticket-admission-guide-standard',
      variant_name_bn: 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Public Hospital Outdoor Ticket, Evening Specialist Service & Admission Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 24,
      fees: [
        {
          fee_type_bn: 'উপজেলা স্বাস্থ্য কমপ্লেক্স ও জেলা সদর হাসপাতাল বহির্বিভাগ টিকিট',
          fee_type_en: 'উপজেলা স্বাস্থ্য কমপ্লেক্স ও জেলা সদর হাসপাতাল বহির্বিভাগ টিকিট',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত প্রমিত টিকিট ফি মাত্র ১০ টাকা।'
        },
        {
          fee_type_bn: 'মেডিকেল কলেজ ও বিশেষায়িত টারশিয়ারি হাসপাতাল বহির্বিভাগ টিকিট',
          fee_type_en: 'মেডিকেল কলেজ ও বিশেষায়িত টারশিয়ারি হাসপাতাল বহির্বিভাগ টিকিট',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'টিকিট ফি মাত্র ২০ টাকা।'
        },
        {
          fee_type_bn: 'সরকারি বৈকালিক প্রাতিষ্ঠানিক প্র্যাকটিস (অধ্যাপক / বিশেষজ্ঞ ডাক্তার)',
          fee_type_en: 'সরকারি বৈকালিক প্রাতিষ্ঠানিক প্র্যাকটিস (অধ্যাপক / বিশেষজ্ঞ ডাক্তার)',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিকালে সরকারি হাসপাতালেই প্রাইভেট চেম্বারের মতো বিশেষজ্ঞ ডাক্তার দেখানো যায়।'
        },
        {
          fee_type_bn: 'সাধারণ বেড ও ভর্তি ফি',
          fee_type_en: 'সাধারণ বেড ও ভর্তি ফি',
          amount_bdt: 15.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভর্তি ফি মাত্র ১৫ টাকা। সাধারণ ওয়ার্ডের কোনো দৈনিক বেড চার্জ নেই।'
        }
      ],
      documents: [
        {
          document_name_bn: 'রোগীর জাতীয় পরিচয়পত্র (NID) অথবা জন্ম নিবন্ধন নম্বর',
          document_name_en: 'রোগীর জাতীয় পরিচয়পত্র (NID) অথবা জন্ম নিবন্ধন নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পূর্ববর্তী প্রেসক্রিপশন ও টেস্টের রিপোর্ট (যদি থাকে)',
          document_name_en: 'পূর্ববর্তী প্রেসক্রিপশন ও টেস্টের রিপোর্ট (যদি থাকে)',
          format_requirement: 'original',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'হাসপাতাল কাউন্টারে ১০/২০ টাকার সরকারি টিকিট কাটা',
          instruction_bn: 'সরাসরি টিকিট কাউন্টারে গিয়ে রোগীর নাম, বয়স ও সমস্যা বলুন। ১০ টাকার টিকিট কেটে নির্দিষ্ট রুম নম্বরে ডাক্তারের জন্য অপেক্ষা করুন।',
          warning_bn: 'কাউন্টারের সামনে দালালরা এসে বলবে \'তাড়াতাড়ি ডাক্তার দেখায় দিচ্ছি, ১০০ টাকা দেন\'—কখনোই তাদের সাথে যাবেন না।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ডাক্তার দেখানো ও বিনামূল্যে ওষুধ সংগ্রহ',
          instruction_bn: 'ডাক্তার ব্যবস্থাপত্র লিখলে হাসপাতালের নিজস্ব ডিসপেনসারি কাউন্টারে যান। সরকারি তালিকায় থাকা ওষুধগুলো সম্পূর্ণ বিনামূল্যে দেওয়া হয়।',
          warning_bn: 'ওষুধের জন্য কাউকে টাকা দিতে হয় না।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'হাসপাতাল ল্যাবে সরকার নির্ধারিত নামমাত্র মূল্যে টেস্ট',
          instruction_bn: 'বাইরের প্রাইভেট ক্লিনিকে না গিয়ে হাসপাতালের নিজস্ব প্যাথলজিতে সরকারি নামমাত্র মূল্যে (রক্ত পরীক্ষা ৫০-১০০ টাকা, এক্স-রে ১০০-২০০ টাকা) টেস্ট করান।',
          warning_bn: 'দালালরা প্রাইভেট ক্লিনিকে নিয়ে বেশি টাকা কমিশনের ধান্দা করে।',
          action_url: 'https://dghs.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ভর্তি ও জরুরি সেবা',
          instruction_bn: 'ভর্তির প্রয়োজন হলে জরুরি বিভাগ বা বহির্বিভাগের চিকিৎসকের সিলযুক্ত স্লিপ নিয়ে ভর্তি কাউন্টারে ১৫ টাকা জমা দিয়ে বেডে যান। কোনো ট্রলিম্যান বা আয়াকে বকশিশ দেওয়ার কোনো বাধ্যবাধকতা নেই।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dghs.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: হাসপাতাল চত্বরে সক্রিয় দালালরা রোগী ভাগিয়ে প্রাইভেট হাসপাতালে নিয়ে যায় এবং আইসিইউ বা টেস্টের নামে প্রতারণা করে। রোগী বা স্বজনরা যেকোনো বিপদে আনসার সদস্য বা হাসপাতাল পুলিশ ক্যাম্পে যোগাযোগ করুন। বিনামূল্যে স্বাস্থ্য পরামর্শের জন্য স্বাস্থ্য বাতায়ন ১৬২৬৩-তে কল করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dghs.gov.bd'
    }
  ]
};
