import { ServiceRecord } from '../../types/service';

export const brtaTaxTokenRoutePermitRenewalService: ServiceRecord = {
  id: 'bd-brta-tax-token-route-permit-renewal',
  slug: 'bd-brta-tax-token-route-permit-renewal',
  category_id: 'transport_brta',
  name_bn: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা',
  name_en: 'Bangladesh BRTA Motor Vehicle Tax Token & Route Permit Online Renewal Guide',
  responsible_ministry_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_ministry_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_agency_en: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'https://brta.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh brta motor vehicle tax token & route permit online renewal guide', language: 'en', weight: 1.0 },
    { alias: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'brta tax token route permit renewal', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-brta-tax-token-route-permit-renewal-standard',
      variant_name_bn: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh BRTA Motor Vehicle Tax Token & Route Permit Online Renewal Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'মোটরসাইকেল বার্ষিক ট্যাক্স টোকেন ফি',
          fee_type_en: 'মোটরসাইকেল বার্ষিক ট্যাক্স টোকেন ফি',
          amount_bdt: 1150.0,
          effective_date: '2022-01-01',
          notes_bn: '১০ বছরের এককালীন ট্যাক্স না থাকলে বার্ষিক নবায়ন ফি।'
        },
        {
          fee_type_bn: 'প্রাইভেট কার বার্ষিক রোড ট্যাক্স ও টোকেন (১৫০০ সিসি পর্যন্ত)',
          fee_type_en: 'প্রাইভেট কার বার্ষিক রোড ট্যাক্স ও টোকেন (১৫০০ সিসি পর্যন্ত)',
          amount_bdt: 15000.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত প্রমিত ফি + এআইটি প্রযোজ্য।'
        },
        {
          fee_type_bn: 'লেট ফি / জরিমানা (মেয়াদোত্তীর্ণ হলে)',
          fee_type_en: 'লেট ফি / জরিমানা (মেয়াদোত্তীর্ণ হলে)',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিলম্বে পরিশোধের সরকারি রুলস অনুযায়ী হিসাব।'
        }
      ],
      documents: [
        {
          document_name_bn: 'গাড়ির পূর্ববর্তী ট্যাক্স টোকেনের তথ্য বা ছবি',
          document_name_en: 'গাড়ির পূর্ববর্তী ট্যাক্স টোকেনের তথ্য বা ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'গাড়ির চেসিস নম্বর ও রেজিস্ট্রেশন নম্বর',
          document_name_en: 'গাড়ির চেসিস নম্বর ও রেজিস্ট্রেশন নম্বর',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আয়কর রিটার্ন দাখিলের প্রমাণপত্র (গাড়ির ক্ষেত্রে বাধ্যতামূলক)',
          document_name_en: 'আয়কর রিটার্ন দাখিলের প্রমাণপত্র (গাড়ির ক্ষেত্রে বাধ্যতামূলক)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিএসপি পোর্টালে লগইন',
          instruction_bn: 'https://bsp.brta.gov.bd সাইটে লগইন করে আপনার মোটরযান প্রোফাইলে যান। \'ট্যাক্স টোকেন নবায়ন\' বাটনে ক্লিক করুন।',
          warning_bn: 'আপনার গাড়ি আগেই বিএসপি প্রোফাইলে যুক্ত না থাকলে চেসিস নম্বর দিয়ে যুক্ত করে নিন।',
          action_url: 'https://bsp.brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বকেয়া ট্যাক্স হিসাব ও অনলাইন পেমেন্ট',
          instruction_bn: 'সিস্টেম স্বয়ংক্রিয়ভাবে সরকারি ট্যাক্স ও ভ্যাট হিসাব করে দেবে। বিকাশ বা কার্ড দিয়ে ফি পরিশোধ করুন।',
          warning_bn: 'কোনো ব্যাংকে গিয়ে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।',
          action_url: 'https://brta.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'কিউআর কোডযুক্ত ডিজিটাল ট্যাক্স টোকেন ডাউনলোড ও প্রিন্ট',
          instruction_bn: 'পেমেন্ট সফল হওয়ার সাথে সাথে কিউআর কোডযুক্ত রঙিন ডিজিটাল ট্যাক্স টোকেন স্ক্রিনে চলে আসবে। এটি ডাউনলোড করে প্রিন্ট করে গাড়িতে রাখুন। ট্রাফিক পুলিশ কিউআর কোড স্ক্যান করে তাৎক্ষণিক বৈধতা যাচাই করতে পারবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://brta.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দালালদের মাধ্যমে ভুয়া ম্যানুয়াল সিল দেওয়া ট্যাক্স টোকেন কাটাবেন না। পুলিশি তল্লাশিতে বারকোড বা কিউআর কোড ম্যাচ না করলে গাড়ি ডাম্পিংয়ে পাঠানো হবে এবং জাল দলিলের মামলা হবে। সম্পূর্ণ অফিশিয়াল বিএসপি সিস্টেম থেকে ই-ট্যাক্স টোকেন নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://brta.gov.bd'
    }
  ]
};
