import { ServiceRecord } from '../../types/service';

export const pkbExpatriateRehabilitationLoanService: ServiceRecord = {
  id: 'bd-pkb-expatriate-rehabilitation-loan',
  slug: 'bd-pkb-expatriate-rehabilitation-loan',
  category_id: 'expatriate_welfare',
  name_bn: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা',
  name_en: 'Probashi Kallyan Bank Expatriate Migration & Rehabilitation Loan Guide',
  responsible_ministry_bn: 'প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_ministry_en: 'প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_bn: 'প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_en: 'প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://pkb.gov.bd',
  helpline_number: '16135',
  grievance_channel: 'https://pkb.gov.bd',
  legal_basis: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'probashi kallyan bank expatriate migration & rehabilitation loan guide', language: 'en', weight: 1.0 },
    { alias: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ ফি', language: 'bn', weight: 0.95 },
    { alias: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'pkb expatriate rehabilitation loan', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-pkb-expatriate-rehabilitation-loan-standard',
      variant_name_bn: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Probashi Kallyan Bank Expatriate Migration & Rehabilitation Loan Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'ঋণ আবেদন ফরম ফি',
          fee_type_en: 'ঋণ আবেদন ফরম ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রবাসী কল্যাণ ব্যাংকের কোনো আবেদন ফি বা ঘুষ নেই।'
        },
        {
          fee_type_bn: 'সিআইবি (CIB) চার্জ ও প্রসেসিং ফি (সরকার নির্ধারিত)',
          fee_type_en: 'সিআইবি (CIB) চার্জ ও প্রসেসিং ফি (সরকার নির্ধারিত)',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'বাংলাদেশ ব্যাংকের সিআইবি চার্জ বাবদ মাত্র ৩০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'বৈধ কাজের ভিসা, কর্মসংস্থান চুক্তিপত্র ও বিএমইটি ইমিগ্রেশন ক্লিয়ারেন্স',
          document_name_en: 'বৈধ কাজের ভিসা, কর্মসংস্থান চুক্তিপত্র ও বিএমইটি ইমিগ্রেশন ক্লিয়ারেন্স',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী ও জামিনদারের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          document_name_en: 'আবেদনকারী ও জামিনদারের জাতীয় পরিচয়পত্র (NID) ও ছবি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ব্যবসায়িক প্রজেক্ট প্রোফাইল (পুনর্বাসন ঋণের ক্ষেত্রে)',
          document_name_en: 'ব্যবসায়িক প্রজেক্ট প্রোফাইল (পুনর্বাসন ঋণের ক্ষেত্রে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'চেয়ারম্যান বা মেয়র কর্তৃক নাগরিকত্ব ও চারিত্রিক সনদপত্র',
          document_name_en: 'চেয়ারম্যান বা মেয়র কর্তৃক নাগরিকত্ব ও চারিত্রিক সনদপত্র',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'প্রবাসী কল্যাণ ব্যাংকের নিকটস্থ শাখায় সরাসরি যোগাযোগ',
          instruction_bn: 'ভিসা ও পাসপোর্ট নিয়ে সরাসরি ব্যাংকের ক্রেডিট ম্যানেজারের সাথে দেখা করুন এবং আবেদন ফরম পূরণ করুন।',
          warning_bn: 'ব্যাংকের বাইরে থাকা কোনো দালালের সাথে কথা বলবেন না।',
          action_url: 'https://pkb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ভিসা ও নথিপত্র ব্যাংক কর্তৃক যাচাই',
          instruction_bn: 'ব্যাংক ভিসা ও নিয়োগকর্তার তথ্য বিএমইটি ডাটাবেজ থেকে অনলাইনে যাচাই করবে।',
          warning_bn: 'জাল বা ভুয়া ভিসা দিলে ঋণ মঞ্জুর হবে না।',
          action_url: 'https://pkb.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'চেকের মাধ্যমে সরাসরি ঋণ বিতরণ',
          instruction_bn: 'ঋণ অনুমোদিত হলে ৩ লাখ টাকা পর্যন্ত বিনা জামানতে সরাসরি আবেদনকারীর ব্যাংক হিসাবে ঋণ ছাড় করা হয় এবং কিস্তির শিডিউল বুঝিয়ে দেওয়া হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://pkb.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো ব্যাংক কর্মকর্তা বা বহিরাগত ব্যক্তি ঋণ মঞ্জুর করিয়ে দেওয়ার নাম করে পারসেন্টেজ বা কাটমানি চাইলে সাথে সাথে শাখা ব্যবস্থাপক অথবা মন্ত্রণালয় হেল্পলাইন ১৬১৩৫ এ অভিযোগ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://pkb.gov.bd'
    }
  ]
};
