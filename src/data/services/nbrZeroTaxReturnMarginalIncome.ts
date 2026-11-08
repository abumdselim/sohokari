import { ServiceRecord } from '../../types/service';

export const nbrZeroTaxReturnMarginalIncomeService: ServiceRecord = {
  id: 'bd-nbr-zero-tax-return-marginal-income',
  slug: 'bd-nbr-zero-tax-return-marginal-income',
  category_id: 'tax_revenue',
  name_bn: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা',
  name_en: 'NBR Zero Tax Return Online Submission & Tax Certificate Official Guide',
  responsible_ministry_bn: 'জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_ministry_en: 'জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_bn: 'জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_en: 'জাতীয় রাজস্ব বোর্ড (NBR)',
  visiting_office_level: 'division',
  official_portal_url: 'https://nbr.gov.bd',
  helpline_number: '16555',
  grievance_channel: 'https://nbr.gov.bd',
  legal_basis: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'nbr zero tax return online submission & tax certificate official guide', language: 'en', weight: 1.0 },
    { alias: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র', language: 'bn', weight: 0.95 },
    { alias: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'nbr zero tax return marginal income', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-nbr-zero-tax-return-marginal-income-standard',
      variant_name_bn: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'NBR Zero Tax Return Online Submission & Tax Certificate Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'অনলাইন রিটার্ন দাখিল ফি',
          fee_type_en: 'অনলাইন রিটার্ন দাখিল ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'জাতীয় রাজস্ব বোর্ডের অনলাইন রিটার্ন পোর্টালে কোনো ফি লাগে না।'
        },
        {
          fee_type_bn: 'জিরো রিটার্ন কর প্রদেয়',
          fee_type_en: 'জিরো রিটার্ন কর প্রদেয়',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'করযোগ্য আয় না থাকলে প্রদেয় কর ০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: '১২ ডিজিটের ই-টিন (e-TIN) নম্বর ও টিন সার্টিফিকেট',
          document_name_en: '১২ ডিজিটের ই-টিন (e-TIN) নম্বর ও টিন সার্টিফিকেট',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিজের জাতীয় পরিচয়পত্র দিয়ে নিবন্ধিত বায়োমেট্রিক সিম নম্বর (OTP ভেরিফিকেশনের জন্য)',
          document_name_en: 'নিজের জাতীয় পরিচয়পত্র দিয়ে নিবন্ধিত বায়োমেট্রিক সিম নম্বর (OTP ভেরিফিকেশনের জন্য)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাৎসরিক ব্যাংক স্টেটমেন্ট (যদি ব্যাংক হিসাব থাকে)',
          document_name_en: 'বাৎসরিক ব্যাংক স্টেটমেন্ট (যদি ব্যাংক হিসাব থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-রিটার্ন পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'https://etaxnbr.gov.bd ওয়েবসাইটে গিয়ে নিজের টিন নম্বর ও এনআইডি দিয়ে নিবন্ধিত মোবাইল নম্বর দিয়ে ওটিপি ভেরিফাই করে পাসওয়ার্ড সেট করুন।',
          warning_bn: 'অন্য কারো মোবাইল নম্বর ব্যবহার করবেন না।',
          action_url: 'https://etaxnbr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'এক পাতার সহজ জিরো রিটার্ন ফর্ম পূরণ',
          instruction_bn: 'আয়ের উৎস \'Non-taxable\' বা করমুক্ত সীমার নিচে থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে প্রদেয় কর ০ টাকা দেখাবে। ব্যাংক ব্যালেন্স ও সম্পদের হিসাব দিয়ে সাবমিট করুন।',
          warning_bn: 'কোনো ট্যাক্স কনসালট্যান্ট বা দালাল ছাড়াই নিজে করা যায়।',
          action_url: 'https://nbr.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'তাত্ক্ষণিক প্রাপ্তি স্বীকারপত্র ও ট্যাক্স সার্টিফিকেট প্রিন্ট',
          instruction_bn: 'সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত সরকারি \'Acknowledgment Receipt\' এবং \'Tax Certificate\' ডাউনলোড করে প্রিন্ট করুন। এটি সব জায়গায় গ্রাহ্য।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nbr.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ইনকাম ট্যাক্স ফাইল করার নামে দালালরা ভুয়া অডিট বা জরিমানার ভয় দেখিয়ে মানুষের কাছ থেকে টাকা হাতিয়ে নেয়। এনবিআরের অনলাইন সিস্টেম শতভাগ স্বচ্ছ ও স্বয়ংক্রিয়। কোনো দালালের সাহায্য ছাড়াই নিজের ফোন বা কম্পিউটার থেকে নিজে রিটার্ন জমা দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://nbr.gov.bd'
    }
  ]
};
