import { ServiceRecord } from '../../types/service';

export const policeClearanceService: ServiceRecord = {
  id: 'police-clearance',
  slug: 'police-clearance',
  category_id: 'law_police',
  name_bn: 'অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট',
  name_en: 'Online Police Clearance Certificate (PCC)',
  responsible_ministry_bn: 'স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)',
  responsible_ministry_en: 'Ministry of Home Affairs (Public Security Division)',
  responsible_agency_bn: 'বাংলাদেশ পুলিশ হেডকোয়ার্টার্স',
  responsible_agency_en: 'Bangladesh Police Headquarters',
  visiting_office_level: 'none',
  official_portal_url: 'https://pcc.police.gov.bd',
  helpline_number: '999',
  grievance_channel: 'https://pcc.police.gov.bd/contact',
  legal_basis: 'পুলিশ প্রবিধান এবং স্বরাষ্ট্র মন্ত্রণালয়ের পরিপত্র',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'police clearance', language: 'en', weight: 1.0 },
    { alias: 'police clearance fee', language: 'banglish', weight: 1.0 },
    { alias: 'police clearance kivabe pabo', language: 'banglish', weight: 1.0 },
    { alias: 'পুলিশ ক্লিয়ারেন্স', language: 'bn', weight: 1.0 },
    { alias: 'পুলিশ ক্লিয়ারেন্স সরকারি ফি', language: 'bn', weight: 1.0 },
    { alias: 'পুলিশ ভেরিফিকেশন সার্টিফিকেট', language: 'bn', weight: 1.0 },
    { alias: 'police certificate', language: 'en', weight: 0.95 }
  ],
  variants: [
    {
      id: 'police-clearance-standard',
      variant_name_bn: 'সার্বজনীন অনলাইন পুলিশ ক্লিয়ারেন্স (বিদেশে গমন বা চাকরি)',
      variant_name_en: 'Standard Online Police Clearance Certificate',
      conditions: { type: 'standard' },
      processing_days_sla: 10,
      fees: [
        {
          fee_type_bn: 'সরকারি ট্রেজারি চালান ফি',
          fee_type_en: 'Government Treasury Challan Fee',
          amount_bdt: 500,
          effective_date: '2020-01-01',
          notes_bn: 'কোড: ১-২২১১-০০০০-২০৪৩ অথবা অটোমেটেড এ-চালান/বিকাশে প্রদেয়'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল পাসপোর্টের প্রথম শ্রেণির গেজেটেড কর্মকর্তা দ্বারা সত্যায়িত কপি',
          document_name_en: 'Attested copy of valid passport (minimum 3 months validity)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: '৫০০ টাকার সরকারি ট্রেজারি এ-চালান রসিদ',
          document_name_en: '500 BDT Treasury A-Challan payment receipt',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'চেয়ারম্যান বা ওয়ার্ড কাউন্সিলর কর্তৃক প্রদত্ত নাগরিকত্ব সনদ',
          document_name_en: 'Citizenship certificate from Ward Councillor / Union Parishad',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'pcc.police.gov.bd পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'মোবাইল নম্বর দিয়ে সাইনআপ করে পাসপোর্টের তথ্য অনুযায়ী ফরম পূরণ করুন।'
        },
        {
          channel: 'bank',
          step_number: 2,
          title_bn: '৫০০ টাকা সরকারি চালান জমা',
          instruction_bn: 'অনলাইনে এ-চালান বা মোবাইল ব্যাংকিংয়ের মাধ্যমে সরকারি কোডে ৫০০ টাকা ফি পরিশোধ করে চালান কপি আপলোড করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পুলিশ ভেরিফিকেশন ও ডিজিটাল ট্র্যাকিং',
          instruction_bn: 'থানা থেকে তদন্ত কর্মকর্তা যোগাযোগ করবেন। অনুমোদন শেষে পুলিশ সুপার বা ডিসি অফিস থেকে কিউআর কোডযুক্ত সার্টিফিকেট সরাসরি ডাকযোগে বা অনলাইন কপি সংগ্রহ করা যায়।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'পুলিশ ক্লিয়ারেন্সের সরকারি ফি সর্বসাকুল্যে মাত্র ৫০০ টাকা। কোনো দালাল বা কাউকে কোনো অতিরিক্ত অর্থ প্রদান করবেন না। সদরদপ্তর থেকে অনলাইন ট্র্যাকিং মনিটর করা হয়।',
      content_en: 'Police clearance fee is strictly 500 BDT. Never pay any extra bribes.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'বাংলাদেশ পুলিশ অনলাইন পুলিশ ক্লিয়ারেন্স গাইড',
      source_url: 'https://pcc.police.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};
