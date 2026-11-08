import { ServiceRecord } from '../../types/service';

export const railwayOnlineTicketRefundCancellationService: ServiceRecord = {
  id: 'bd-railway-online-ticket-refund-cancellation',
  slug: 'bd-railway-online-ticket-refund-cancellation',
  category_id: 'transport_brta',
  name_bn: 'বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা',
  name_en: 'Bangladesh Railway Online Train Ticket Refund Cancellation & Policy Guide',
  responsible_ministry_bn: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway), রেলপথ মন্ত্রণালয়',
  responsible_ministry_en: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway), রেলপথ মন্ত্রণালয়',
  responsible_agency_bn: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway), রেলপথ মন্ত্রণালয়',
  responsible_agency_en: 'বাংলাদেশ রেলওয়ে (Bangladesh Railway), রেলপথ মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://railway.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://railway.gov.bd',
  legal_basis: 'বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh railway online train ticket refund cancellation & policy guide', language: 'en', weight: 1.0 },
    { alias: 'রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি', language: 'bn', weight: 0.95 },
    { alias: 'রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি ফি', language: 'bn', weight: 0.95 },
    { alias: 'রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'railway online ticket refund cancellation', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-railway-online-ticket-refund-cancellation-standard',
      variant_name_bn: 'বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Railway Online Train Ticket Refund Cancellation & Policy Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 8,
      fees: [
        {
          fee_type_bn: '৪৮ ঘণ্টা পূর্বে টিকিট ফেরত সার্ভিস চার্জ',
          fee_type_en: '৪৮ ঘণ্টা পূর্বে টিকিট ফেরত সার্ভিস চার্জ',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'যাত্রা শুরুর ৪৮ ঘণ্টার বেশি পূর্বে বাতিল করলে ভাড়ার ২৫% কাটা যাবে।'
        },
        {
          fee_type_bn: '২৪ ঘণ্টা থেকে ৪৮ ঘণ্টার মধ্যে ফেরত চার্জ',
          fee_type_en: '২৪ ঘণ্টা থেকে ৪৮ ঘণ্টার মধ্যে ফেরত চার্জ',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'যাত্রা শুরুর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে বাতিল করলে ৫০% টাকা ফেরত।'
        }
      ],
      documents: [
        {
          document_name_bn: 'রেলওয়ের ই-টিকেটের কপি ও পিএনআর (PNR) নম্বর',
          document_name_en: 'রেলওয়ের ই-টিকেটের কপি ও পিএনআর (PNR) নম্বর',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'যে মোবাইল নম্বর বা একাউন্ট দিয়ে টিকিট কেনা হয়েছিল সেই তথ্য',
          document_name_en: 'যে মোবাইল নম্বর বা একাউন্ট দিয়ে টিকিট কেনা হয়েছিল সেই তথ্য',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'রেলওয়ে পোর্টালে Purchase History তে যাওয়া',
          instruction_bn: 'https://eticket.railway.gov.bd পোর্টালে নিজের অ্যাকাউন্টে লগইন করে পারচেজ হিস্ট্রিতে টিকিটটি নির্বাচন করুন।',
          warning_bn: 'স্টেশনে যাওয়ার কোনো প্রয়োজন নেই, অনলাইনেই রিফান্ড অপশন থাকে।',
          action_url: 'https://eticket.railway.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'Refund Ticket বাটনে ক্লিক ও ওটিপি ভেরিফিকেশন',
          instruction_bn: 'রিফান্ড বাটনে ক্লিক করলে আপনার মোবাইলে ওটিপি কোড আসবে। কোড দিলে টিকিট স্বয়ংক্রিয়ভাবে বাতিল হয়ে যাবে।',
          warning_bn: 'কাউন্টার থেকে কেনা কাগজের টিকিট হলে কাউন্টারে সশরীরে যেতে হবে।',
          action_url: 'https://railway.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'মোবাইল ওয়ালেটে রিফান্ডের অর্থ ফেরত',
          instruction_bn: 'নির্ধারিত সার্ভিস চার্জ বাদে বাকি টাকা যে পেমেন্ট মেথড (বিকাশ/নগদ/কার্ড) দিয়ে কেনা হয়েছিল সেই একাউন্টে স্বয়ংক্রিয়ভাবে রিফান্ড হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://railway.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: স্টেশনের কালোবাজারিদের কাছ থেকে টিকিট কেনা এবং অন্যের এনআইডিতে ভ্রমণ করা আইনত নিষিদ্ধ। কালোবাজারির টিকিট দিয়ে ট্রেনে উঠলে টিকিটবিহীন হিসেবে বিবেচনা করে জরিমানা করা হবে। টিকিট কালোবাজারি দেখলে রেলওয়ে পুলিশ বা ৯৯৯ এ জানান।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://railway.gov.bd'
    }
  ]
};
