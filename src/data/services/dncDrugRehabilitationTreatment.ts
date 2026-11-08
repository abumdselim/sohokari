import { ServiceRecord } from '../../types/service';

export const dncDrugRehabilitationTreatmentService: ServiceRecord = {
  id: 'bd-dnc-drug-rehabilitation-treatment',
  slug: 'bd-dnc-drug-rehabilitation-treatment',
  category_id: 'citizen_general',
  name_bn: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা',
  name_en: 'Drug Addiction Treatment Rehabilitation Center License & Govt Admission Guide',
  responsible_ministry_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_ministry_en: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_agency_bn: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  responsible_agency_en: 'মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://dnc.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dnc.gov.bd',
  legal_basis: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'drug addiction treatment rehabilitation center license & govt admission guide', language: 'en', weight: 1.0 },
    { alias: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি', language: 'bn', weight: 0.95 },
    { alias: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি ফি', language: 'bn', weight: 0.95 },
    { alias: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dnc drug rehabilitation treatment', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dnc-drug-rehabilitation-treatment-standard',
      variant_name_bn: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Drug Addiction Treatment Rehabilitation Center License & Govt Admission Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 3,
      fees: [
        {
          fee_type_bn: 'সরকারি মাদকাসক্তি নিরাময় হাসপাতালে ভর্তি টিকিট',
          fee_type_en: 'সরকারি মাদকাসক্তি নিরাময় হাসপাতালে ভর্তি টিকিট',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভর্তি ফি মাত্র ৫০ টাকা।'
        },
        {
          fee_type_bn: 'সরকারি হাসপাতালে দৈনিক বেড ও খাবার চার্জ (সাধারণ ওয়ার্ড)',
          fee_type_en: 'সরকারি হাসপাতালে দৈনিক বেড ও খাবার চার্জ (সাধারণ ওয়ার্ড)',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'ওষুধ ও খাবার সরকার সম্পূর্ণ বিনামূল্যে প্রদান করে।'
        },
        {
          fee_type_bn: 'বেসরকারি নিরাময় কেন্দ্র লাইসেন্স ফি',
          fee_type_en: 'বেসরকারি নিরাময় কেন্দ্র লাইসেন্স ফি',
          amount_bdt: 20000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ডিএনসি নির্ধারিত লাইসেন্স ফি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'রোগী ও অভিভাবকের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'রোগী ও অভিভাবকের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'রোগীর ডোপ টেস্ট (Dope Test) বা পূর্ববর্তী প্রেসক্রিপশন (যদি থাকে)',
          document_name_en: 'রোগীর ডোপ টেস্ট (Dope Test) বা পূর্ববর্তী প্রেসক্রিপশন (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'অভিভাবকের অঙ্গীকারনামা ফরম',
          document_name_en: 'অভিভাবকের অঙ্গীকারনামা ফরম',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'তেজগাঁও কেন্দ্রীয় নিরাময় হাসপাতাল বা বিভাগীয় হাসপাতালে উপস্থিত হওয়া',
          instruction_bn: 'দালাল ছাড়া সরাসরি সরকারি মাদকাসক্তি নিরাময় হাসপাতালের জরুরি বহির্বিভাগে রোগীকে নিয়ে যান।',
          warning_bn: 'দালালরা প্রাইভেট রিহ্যাবে নেওয়ার প্রলোভন দেখাবে, যাবেন না।',
          action_url: 'https://dnc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'মনোরোগ বিশেষজ্ঞ ও চিকিৎসকের অ্যাসেসমেন্ট',
          instruction_bn: 'চিকিৎসক শারীরিক ও মানসিক অবস্থা দেখে ডিটক্সিফিকেশন (Detoxification) ওয়ার্ডে ভর্তি করাবেন।',
          warning_bn: 'চিকিৎসা অত্যন্ত নিরাপদ ও মানবিক।',
          action_url: 'https://dnc.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সাইকোথেরাপি ও পুনর্বাসন শেষে সুস্থ প্রত্যাবর্তন',
          instruction_bn: '১৪ থেকে ২৮ দিনের কোর্সে রোগীকে শারীরিক ও মানসিক কাউন্সেলিং করিয়ে সম্পূর্ণ সুস্থ করে বাড়ি পাঠানো হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dnc.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভুয়া রিহ্যাব সেন্টারের টর্চার সেলে রোগী পাঠাবেন না। মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের অনুমোদন ছাড়া কোনো রিহ্যাব চালানো দণ্ডনীয় অপরাধ। অভিযোগ জানাতে ডিএনসি হটলাইন ০১৯৫৮৮৮৮৮৮৮ এ যোগাযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dnc.gov.bd'
    }
  ]
};
