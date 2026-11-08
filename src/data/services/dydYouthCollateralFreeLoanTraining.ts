import { ServiceRecord } from '../../types/service';

export const dydYouthCollateralFreeLoanTrainingService: ServiceRecord = {
  id: 'bd-dyd-youth-collateral-free-loan-training',
  slug: 'bd-dyd-youth-collateral-free-loan-training',
  category_id: 'tax_revenue',
  name_bn: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা',
  name_en: 'Department of Youth Development DYD Free Vocational Training & Collateral-Free Loan Guide',
  responsible_ministry_bn: 'যুব উন্নয়ন অধিদপ্তর (DYD), যুব ও ক্রীড়া মন্ত্রণালয়',
  responsible_ministry_en: 'যুব উন্নয়ন অধিদপ্তর (DYD), যুব ও ক্রীড়া মন্ত্রণালয়',
  responsible_agency_bn: 'যুব উন্নয়ন অধিদপ্তর (DYD), যুব ও ক্রীড়া মন্ত্রণালয়',
  responsible_agency_en: 'যুব উন্নয়ন অধিদপ্তর (DYD), যুব ও ক্রীড়া মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dyd.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dyd.gov.bd',
  legal_basis: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'department of youth development dyd free vocational training & collateral-free loan guide', language: 'en', weight: 1.0 },
    { alias: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা)', language: 'bn', weight: 0.95 },
    { alias: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) ফি', language: 'bn', weight: 0.95 },
    { alias: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dyd youth collateral free loan training', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dyd-youth-collateral-free-loan-training-standard',
      variant_name_bn: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Department of Youth Development DYD Free Vocational Training & Collateral-Free Loan Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 21,
      fees: [
        {
          fee_type_bn: 'প্রশিক্ষণ আবেদন ও কোর্স ফি',
          fee_type_en: 'প্রশিক্ষণ আবেদন ও কোর্স ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'কিছু বিশেষ কোর্সে প্রতীকী ৫০-১০০ টাকা জামানত যা কোর্স শেষে ফেরত দেওয়া হয়।'
        },
        {
          fee_type_bn: 'যুব ঋণ আবেদন ফরম ফি',
          fee_type_en: 'যুব ঋণ আবেদন ফরম ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'উপজেলা যুব উন্নয়ন কার্যালয়ে আবেদন সম্পূর্ণ ফ্রি।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ন্যূনতম শিক্ষাগত যোগ্যতার সনদ (অষ্টম শ্রেণি/এসএসসি/এইচএসসি)',
          document_name_en: 'ন্যূনতম শিক্ষাগত যোগ্যতার সনদ (অষ্টম শ্রেণি/এসএসসি/এইচএসসি)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'যুব উন্নয়ন অধিদপ্তর কর্তৃক প্রদত্ত কোর্স সমাপ্তি সনদপত্র',
          document_name_en: 'যুব উন্নয়ন অধিদপ্তর কর্তৃক প্রদত্ত কোর্স সমাপ্তি সনদপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রস্তাবিত ব্যবসা বা খামারের প্রকল্প বিবরণী (Project Profile)',
          document_name_en: 'প্রস্তাবিত ব্যবসা বা খামারের প্রকল্প বিবরণী (Project Profile)',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা যুব উন্নয়ন কার্যালয়ে প্রশিক্ষণে ভর্তি',
          instruction_bn: 'নিজের উপজেলার যুব উন্নয়ন কর্মকর্তার কার্যালয়ে গিয়ে পছন্দের কোর্সে (কম্পিউটার/ডেইরি/ইলেকট্রিক্যাল) ফ্রিতে ভর্তি হন।',
          warning_bn: 'প্রশিক্ষণ চলাকালীন সরকার যাতায়াত ভাতাও প্রদান করে।',
          action_url: 'https://dyd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'প্রশিক্ষণ শেষে জামানতবিহীন ঋণের আবেদন',
          instruction_bn: 'সার্টিফিকেট অর্জনের পর নিজস্ব ব্যবসা বা ফার্মের প্রজেক্ট প্ল্যান জমা দিয়ে যুব ঋণের আবেদন করুন।',
          warning_bn: 'দালাল ছাড়াই সরাসরি যুব উন্নয়ন কর্মকর্তার সাথে দেখা করুন।',
          action_url: 'https://dyd.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি ব্যাংক অ্যাকাউন্টে ঋণের অর্থ ছাড় ও সহজ কিস্তি',
          instruction_bn: 'উপজেলা ঋণ কমিটি আবেদন অনুমোদন করলে ১ থেকে ৫ লাখ টাকার ঋণ সরাসরি ব্যাংক হিসাবে চলে আসবে এবং সহজ মাসিক কিস্তিতে পরিশোধ করা যাবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dyd.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: যুব ঋণ পাওয়ার জন্য কোনো তৃতীয় পক্ষ বা সমিতির দালালকে এক টাকাও দেবেন না। যুব ঋণ সরকার সরাসরি প্রকৃত প্রশিক্ষণপ্রাপ্ত যুবকদের প্রদান করে। কোনো কর্মকর্তা কমিশন চাইলে জেলা যুব উন্নয়ন কার্যালয়ে অভিযোগ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dyd.gov.bd'
    }
  ]
};
