import { ServiceRecord } from '../../types/service';

export const agriCropLoan4PercentConcessionService: ServiceRecord = {
  id: 'bd-agri-crop-loan-4-percent-concession',
  slug: 'bd-agri-crop-loan-4-percent-concession',
  category_id: 'agriculture_food',
  name_bn: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা',
  name_en: '10 Taka Bank Account & 4% Concessional Interest Agri Crop Loan Guide',
  responsible_ministry_bn: 'বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ',
  responsible_ministry_en: 'বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ',
  responsible_agency_bn: 'বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ',
  responsible_agency_en: 'বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ',
  visiting_office_level: 'district',
  official_portal_url: 'https://bb.org.bd',
  helpline_number: '333',
  grievance_channel: 'https://bb.org.bd',
  legal_basis: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: '10 taka bank account & 4% concessional interest agri crop loan guide', language: 'en', weight: 1.0 },
    { alias: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ', language: 'bn', weight: 0.95 },
    { alias: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ ফি', language: 'bn', weight: 0.95 },
    { alias: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'agri crop loan 4 percent concession', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-agri-crop-loan-4-percent-concession-standard',
      variant_name_bn: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: '10 Taka Bank Account & 4% Concessional Interest Agri Crop Loan Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 10,
      fees: [
        {
          fee_type_bn: 'কৃষক ব্যাংক একাউন্ট খোলার প্রাথমিক জমা',
          fee_type_en: 'কৃষক ব্যাংক একাউন্ট খোলার প্রাথমিক জমা',
          amount_bdt: 10.0,
          effective_date: '2022-01-01',
          notes_bn: '১০ টাকার কৃষক একাউন্টে কোনো বাৎসরিক রক্ষণাবেক্ষণ চার্জ নেই।'
        },
        {
          fee_type_bn: 'ঋণ আবেদন ফি',
          fee_type_en: 'ঋণ আবেদন ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'কৃষি ঋণ আবেদনের জন্য কোনো ফি লাগে না।'
        },
        {
          fee_type_bn: 'রেয়াতি সুদের হার (ডাল, তেলবীজ ও মসলা)',
          fee_type_en: 'রেয়াতি সুদের হার (ডাল, তেলবীজ ও মসলা)',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাকি সুদ সরকার ভর্তুকি হিসেবে ব্যাংককে প্রদান করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা কৃষি সম্প্রসারণ অধিদপ্তর কর্তৃক প্রদত্ত কৃষি কার্ড (Krishi Card)',
          document_name_en: 'উপজেলা কৃষি সম্প্রসারণ অধিদপ্তর কর্তৃক প্রদত্ত কৃষি কার্ড (Krishi Card)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমির মালিকানার দলিল/পর্চা অথবা বর্গা চাষের ক্ষেত্রে জমির মালিকের সম্মতিপত্র',
          document_name_en: 'জমির মালিকানার দলিল/পর্চা অথবা বর্গা চাষের ক্ষেত্রে জমির মালিকের সম্মতিপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ইউপি চেয়ারম্যান বা মেম্বারের প্রত্যয়নপত্র',
          document_name_en: 'ইউপি চেয়ারম্যান বা মেম্বারের প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'নিকটস্থ কৃষি ব্যাংক বা সোনালী/জনতা ব্যাংকের শাখায় আবেদন',
          instruction_bn: 'কৃষি কার্ড ও এনআইডিসহ সরাসরি ব্যাংকের ফিল্ড অফিসার বা লোন ম্যানেজারের সাথে দেখা করুন।',
          warning_bn: 'ব্যাংকের বাইরে থাকা কোনো মধ্যস্বত্বভোগীর সাথে কথা বলবেন না।',
          action_url: 'https://bb.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ফসলি জমি সরেজমিনে ফিল্ড অফিসার কর্তৃক পরিদর্শন',
          instruction_bn: 'ব্যাংক কর্মকর্তা জমিতে গিয়ে আবাদযোগ্য ফসলের এলাকা দেখে ঋণের পরিমাণ অনুমোদন করবেন।',
          warning_bn: 'পরিদর্শনের নামে কোনো টাকা দেওয়া নিষেধ।',
          action_url: 'https://bb.org.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরাসরি ১০ টাকার একাউন্টে ঋণের অর্থ প্রদান',
          instruction_bn: 'অনুমোদিত ঋণের অর্থ সরাসরি কৃষকের ব্যাংক হিসাবে জমা হবে এবং ফসল ওঠার পর মাত্র ৪% সুদে কিস্তি পরিশোধের সুযোগ মিলবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bb.org.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কৃষি ঋণ কৃষকের রাষ্ট্রীয় অধিকার। কোনো ব্যাংক ম্যানেজার বা ফিল্ড সুপারভাইজার ঋণের টাকা ছাড়ার বিনিময়ে ঘুষ চাইলে সরাসরি বাংলাদেশ ব্যাংকের ফাইনান্সিয়াল ইন্টিগ্রিটি হেল্পলাইন ১৬২৩৬ নম্বরে অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: '১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bb.org.bd'
    }
  ]
};
