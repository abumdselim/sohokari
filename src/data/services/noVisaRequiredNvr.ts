import { ServiceRecord } from '../../types/service';

export const noVisaRequiredNvrService: ServiceRecord = {
  id: 'no-visa-required-nvr',
  slug: 'no-visa-required-nvr',
  category_id: 'immigration_passport',
  name_bn: 'প্রবাসীদের বিদেশি পাসপোর্টে নো-ভিসা রিকোয়ার্ড (NVR) সিল সংগ্রহ নির্দেশিকা',
  name_en: 'No Visa Required (NVR) Endorsement for Foreign Passport Holders',
  responsible_ministry_bn: 'স্বরাষ্ট্র মন্ত্রণালয় (সুরক্ষা সেবা বিভাগ) ও পররাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Home Affairs & Ministry of Foreign Affairs',
  responsible_agency_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP) ও বিদেশে বাংলাদেশ দূতাবাসসমূহ',
  responsible_agency_en: 'Department of Immigration and Passports & Bangladesh Foreign Missions',
  visiting_office_level: 'district',
  official_portal_url: 'https://visa.gov.bd',
  helpline_number: '16445',
  grievance_channel: 'https://www.dip.gov.bd',
  legal_basis: 'বাংলাদেশ নাগরিকত্ব আইন এবং ইমিগ্রেশন ও পাসপোর্ট ম্যানুয়াল',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'no visa required', language: 'en', weight: 1.0 },
    { alias: 'nvr seal', language: 'en', weight: 1.0 },
    { alias: 'nvr fee koto', language: 'banglish', weight: 1.0 },
    { alias: 'nvr seal kivabe pabo', language: 'banglish', weight: 1.0 },
    { alias: 'এনভিআর সিল আবেদন', language: 'bn', weight: 1.0 },
    { alias: 'নো ভিসা রিকোয়ার্ড ফি', language: 'bn', weight: 1.0 },
    { alias: 'বিদেশি পাসপোর্টে বাংলাদেশ ভিসা ছাড়া প্রবেশ', language: 'bn', weight: 1.0 },
    { alias: 'এনভিআর স্টিকার পাওয়ার নিয়ম', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'nvr-endorsement-standard',
      variant_name_bn: 'বিদেশি পাসপোর্টে আজীবন নো-ভিসা রিকোয়ার্ড (NVR) অনুমোদন',
      variant_name_en: 'Lifelong No Visa Required (NVR) Endorsement',
      conditions: { type: 'standard_nvr' },
      processing_days_sla: 10,
      fees: [
        {
          fee_type_bn: 'সরকারি এনভিআর সিল এনডোর্সমেন্ট ফি',
          fee_type_en: 'Government NVR Endorsement Fee',
          amount_bdt: 6000,
          effective_date: '2022-01-01',
          notes_bn: '৫০ মার্কিন ডলার বা সমপরিমাণ সরকারি ট্রেজারি চালান (প্রায় ৬,০০০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'বৈধ বিদেশি পাসপোর্টের মূল কপি (নূন্যতম ৬ মাস মেয়াদ)',
          document_name_en: 'Original Foreign Passport with minimum 6 months validity',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর পূর্ববর্তী বাংলাদেশি মূল পাসপোর্ট বা অনলাইন জন্ম সনদ / এনআইডি',
          document_name_en: 'Previous Bangladeshi Passport or Digital Birth Certificate / NID',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'পিতা-মাতার মাধ্যমে বংশোদ্ভূত প্রমাণ হলে পিতা/মাতার বাংলাদেশি পাসপোর্ট ও সম্পর্ক সনদ',
          document_name_en: 'Parents Bangladeshi Passport & proof of parentage',
          format_requirement: 'original',
          is_mandatory: false,
          condition_description_bn: 'বিদেশে জন্ম নেওয়া সন্তানদের ক্ষেত্রে প্রযোজ্য'
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজের স্পষ্ট রঙিন ছবি (২ কপি)',
          document_name_en: 'Passport size color photograph (2 copies)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'visa.gov.bd পোর্টালে NVR ফরম পূরণ',
          instruction_bn: 'অনলাইন ভিসা পোর্টালে গিয়ে ভিসার ধরন "No Visa Required (NVR)" নির্বাচন করে ফরম পূরণ ও প্রিন্ট করুন।'
        },
        {
          channel: 'bank',
          step_number: 2,
          title_bn: '৫০ ডলার বা ৬,০০০ টাকা ফি পরিশোধ',
          instruction_bn: 'বিদেশে সংশ্লিষ্ট বাংলাদেশ দূতাবাসে অথবা বাংলাদেশে পাসপোর্ট অফিসে সরকারি চালান কোডে ফি জমা দিন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'পাসপোর্টে NVR সিল গ্রহণ',
          instruction_bn: 'পাসপোর্ট অধিদপ্তরের প্রধান কার্যালয় বা দূতাবাসে মূল পাসপোর্ট জমা দিয়ে কিউআর কোডযুক্ত NVR স্টিকার গ্রহণ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'NVR সিলের জন্য কোনো ট্রাভেল এজেন্ট বা দালালকে বাড়তি টাকা দেবেন না। একবার এই সিল পাসপোর্টে লাগালে ওই পাসপোর্টের মেয়াদ থাকা পর্যন্ত বাংলাদেশে আসতে কোনো ভিসা লাগবে না এবং যেকোনো সময় অবাধে অবস্থান করা যাবে।',
      content_en: 'NVR endorsement fee is officially 50 USD. It allows visa-free entry to Bangladesh for the entire validity of the foreign passport.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর NVR নির্দেশিকা',
      source_url: 'https://www.dip.gov.bd',
      published_date: '2022-01-01'
    }
  ]
};
