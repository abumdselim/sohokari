import { ServiceRecord } from '../../types/service';

export const aChallanTreasuryPaymentService: ServiceRecord = {
  id: 'a-challan-treasury-payment',
  slug: 'a-challan-treasury-payment',
  category_id: 'finance_tax',
  name_bn: 'অটোমেটেড এ-চালান (A-Challan) সরকারি ফি ও ট্রেজারি পেমেন্ট গাইড',
  name_en: 'Automated Challan (A-Challan) Government Treasury Fee Payment Guide',
  responsible_ministry_bn: 'অর্থ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'Finance Division, Ministry of Finance',
  responsible_agency_bn: 'বাংলাদেশ ব্যাংক ও হিসাব মহানিয়ন্ত্রক (CGA) কার্যালয়',
  responsible_agency_en: 'Bangladesh Bank & Office of the Controller General of Accounts',
  visiting_office_level: 'none',
  official_portal_url: 'https://echallan.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://mof.gov.bd',
  legal_basis: 'অটোমেটেড ট্রেজারি চালান বাস্তবায়ন নির্দেশিকা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'a challan', language: 'banglish', weight: 1.0 },
    { alias: 'echallan', language: 'en', weight: 1.0 },
    { alias: 'treasury challan', language: 'en', weight: 1.0 },
    { alias: 'challan kivabe dibo', language: 'banglish', weight: 1.0 },
    { alias: 'এ চালান করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'অনলাইন ট্রেজারি চালান', language: 'bn', weight: 1.0 },
    { alias: 'সরকারি চালান কাটার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'সোনালী ব্যাংক চালান অনলাইনে', language: 'bn', weight: 1.0 },
    { alias: 'পুলিশ ক্লিয়ারেন্স চালান কোড', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'a-challan-online-portal',
      variant_name_bn: 'echallan.gov.bd পোর্টালে সরাসরি এ-চালান প্রদান',
      variant_name_en: 'Direct Online A-Challan Payment via Portal',
      conditions: { type: 'online_challan' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'এ-চালান সিস্টেম সরকারি সার্ভিস চার্জ',
          fee_type_en: 'A-Challan System Government Fee',
          amount_bdt: 0,
          effective_date: '2021-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'সেবা সংশ্লিষ্ট নির্দিষ্ট সরকারি চালান কোড (যেমন: পুলিশ ক্লিয়ারেন্স ১-২২১১-০০০০-২০৪৩)',
          document_name_en: 'Specific Treasury Economic Code for the service',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জমা প্রদানকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও সচল মোবাইল নম্বর',
          document_name_en: 'Depositor NID and active mobile number',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিকাশ, নগদ, রকেট, ডেবিট/ক্রেডিট কার্ড বা অনলাইন ব্যাংক অ্যাকাউন্ট',
          document_name_en: 'Mobile Banking or Bank Card for payment',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'echallan.gov.bd পোর্টালে প্রবেশ ও কোড নির্বাচন',
          instruction_bn: 'echallan.gov.bd ওয়েবসাইটে যান। সংশ্লিষ্ট মন্ত্রণালয় বা বিভাগ নির্বাচন করে নির্দিষ্ট অর্থনৈতিক কোড বেছে নিন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ব্যক্তিগত তথ্য ও টাকার পরিমাণ এন্ট্রি',
          instruction_bn: 'জমা প্রদানকারীর নাম, এনআইডি এবং সঠিক টাকার পরিমাণ লিখুন এবং পেমেন্ট মেথড (বিকাশ/নগদ/কার্ড) বেছে নিন।'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পেমেন্ট ও তাৎক্ষণিক ডিজিটাল এ-চালান ডাউনলোড',
          instruction_bn: 'পেমেন্ট সম্পন্ন হওয়ার সাথে সাথে বাংলাদেশ সরকারের অফিশিয়াল বারকোডযুক্ত এ-চালান পিডিএফ জেনারেট হবে, যা সরাসরি প্রিন্ট করে পাসপোর্ট/পুলিশ ক্লিয়ারেন্সে জমা দেওয়া যাবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ট্রেজারি চালান জমা দেওয়ার জন্য সোনালী ব্যাংকের লাইনে দাঁড়িয়ে সময় নষ্ট করার প্রয়োজন নেই। ব্যাংক ও পাসপোর্ট অফিসের সামনের দালালরা চালান কাটার জন্য ১০০-৫০০ টাকা বাড়তি দাবি করে। ঘরে বসে নিজের ফোনেই echallan.gov.bd থেকে ১ মিনিটে আসল সরকারি এ-চালান পাওয়া যায়।',
      content_en: 'Never pay middlemen commissions for treasury challans. You can generate authentic government A-Challan receipts directly online via echallan.gov.bd in 1 minute.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'অর্থ বিভাগ অটোমেটেড চালান সিস্টেম নির্দেশিকা',
      source_url: 'https://echallan.gov.bd',
      published_date: '2021-01-01'
    }
  ]
};
