import { ServiceRecord } from '../../types/service';

export const nationalSavingsCertificatesService: ServiceRecord = {
  id: 'national-savings-certificates',
  slug: 'national-savings-certificates',
  category_id: 'finance_tax',
  name_bn: 'জাতীয় সঞ্চয়পত্র ক্রয়, মুনাফার হার ও কর কর্তন গাইড',
  name_en: 'National Savings Certificates (Sanchayapatra) Purchase & Tax Guide',
  responsible_ministry_bn: 'অভ্যন্তরীণ সম্পদ বিভাগ, অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'Internal Resources Division, Ministry of Finance',
  responsible_agency_bn: 'জাতীয় সঞ্চয় অধিদপ্তর, বাংলাদেশ ব্যাংক ও তফসিলি ব্যাংকসমূহ',
  responsible_agency_en: 'Department of National Savings & Bangladesh Bank',
  visiting_office_level: 'district',
  official_portal_url: 'https://savings.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://savings.gov.bd',
  legal_basis: 'সরকারি সঞ্চয়পত্র বিধিমালা এবং জাতীয় সঞ্চয় স্কিম নীতিমালা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'sanchayapatra', language: 'banglish', weight: 1.0 },
    { alias: 'national savings certificate', language: 'en', weight: 1.0 },
    { alias: 'sanchayapatra kinar niyam', language: 'banglish', weight: 1.0 },
    { alias: 'paribar sanchayapatra', language: 'banglish', weight: 1.0 },
    { alias: 'pensioner sanchayapatra', language: 'banglish', weight: 1.0 },
    { alias: 'জাতীয় সঞ্চয়পত্র কেনার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'পরিবার সঞ্চয়পত্র মুনাফার হার', language: 'bn', weight: 1.0 },
    { alias: 'পেনশনার সঞ্চয়পত্র', language: 'bn', weight: 1.0 },
    { alias: '৩ মাস অন্তর মুনাফাভিত্তিক সঞ্চয়পত্র', language: 'bn', weight: 1.0 },
    { alias: 'সঞ্চয়পত্রে ট্যাক্স কর্তন হার', language: 'bn', weight: 1.0 },
    { alias: 'সঞ্চয়পত্র মুনাফা কত', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'sanchayapatra-standard-purchase',
      variant_name_bn: 'জাতীয় সঞ্চয়পত্র ক্রয় ও স্বয়ংক্রিয় ইএফটি মুনাফা উত্তোলন',
      variant_name_en: 'Savings Certificate Purchase & EFT Profit Guide',
      conditions: { type: 'standard' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'সঞ্চয়পত্র ক্রয় ও আবেদন ফরম ফি',
          fee_type_en: 'Savings Certificate Application Fee',
          amount_bdt: 0,
          effective_date: '2023-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        },
        {
          fee_type_bn: 'মুনাফার ওপর উৎসে আয়কর কর্তন (পিএসআর দাখিল করলে)',
          fee_type_en: 'Source Tax with Return Submission Proof (PSR)',
          amount_bdt: 0,
          effective_date: '2023-07-01',
          notes_bn: 'মুনাফার মাত্র ৫% উৎসে কর কাটা হয় (আয়কর রিটার্ন দাখিল স্লিপ দিলে)'
        },
        {
          fee_type_bn: 'মুনাফার ওপর উৎসে আয়কর কর্তন (পিএসআর না থাকলে)',
          fee_type_en: 'Source Tax without Return Proof',
          amount_bdt: 0,
          effective_date: '2023-07-01',
          notes_bn: 'মুনাফার ১০% উৎসে কর কাটা হয়'
        }
      ],
      documents: [
        {
          document_name_bn: 'বিনিয়োগকারীর জাতীয় পরিচয়পত্র (NID) ও ২ কপি পাসপোর্ট ছবি',
          document_name_en: 'Investor NID and 2 passport photos',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'নমিনির জাতীয় পরিচয়পত্র/জন্ম সনদ ও ১ কপি সত্যায়িত ছবি',
          document_name_en: 'Nominee NID / Birth certificate and attested photo',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বিনিয়োগকারীর ই-টিআইএন ও আয়কর রিটার্ন দাখিলের প্রমাণপত্র (PSR)',
          document_name_en: 'e-TIN certificate & Proof of Tax Return Submission (PSR)',
          format_requirement: 'digital_scan',
          is_mandatory: true,
          condition_description_bn: '৫ লাখ টাকার বেশি সঞ্চয়পত্র ক্রয়ে বাধ্যতামূলক'
        },
        {
          document_name_bn: 'বিনিয়োগকারীর নিজস্ব এমআইসিআর (MICR) ব্যাংক চেক বা চেকবইয়ের পাতা',
          document_name_en: 'Investor MICR Bank Cheque',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'bank',
          step_number: 1,
          title_bn: 'ব্যাংক বা সঞ্চয় ব্যুরো থেকে ফরম সংগ্রহ',
          instruction_bn: 'বাংলাদেশ ব্যাংক, সোনালী ব্যাংক, যেকোনো তফসিলি ব্যাংক বা ডাকঘর থেকে সংশ্লিষ্ট সঞ্চয়পত্রের (পরিবার, পেনশনার বা ৩ মাস অন্তর মুনাফাভিত্তিক) ফরম পূরণ করুন।'
        },
        {
          channel: 'bank',
          step_number: 2,
          title_bn: 'চেক ও নথিপত্র জমাদান',
          instruction_bn: 'এনআইডি, টিআইএন, রিটার্ন জমার স্লিপ ও চেকের পাতাসহ কাউন্টারে জমা দিন। জাতীয় সঞ্চয় ম্যানেজমেন্ট সিস্টেমে স্বয়ংক্রিয়ভাবে তথ্য এন্ট্রি হবে।'
        },
        {
          channel: 'bank',
          step_number: 3,
          title_bn: 'স্বয়ংক্রিয় ব্যাংকিং ইএফটি (EFT) মুনাফা গ্রহণ',
          instruction_bn: 'সঞ্চয়পত্রের স্লিপ বা সার্টিফিকেট বুঝে নিন। নির্ধারিত প্রতি মাসে বা ৩ মাস অন্তর আপনার দেওয়া ব্যাংক হিসাবে সরকার থেকে স্বয়ংক্রিয়ভাবে নিট মুনাফা জমা হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সঞ্চয়পত্র কেনার জন্য কোনো তৃতীয় পক্ষ বা দালালের সহায়তা নেবেন না। যেকোনো অনুমোদিত ব্যাংকে সরাসরি নিজের চেক দিয়ে কিনুন। টিআইএন ও রিটার্ন দাখিলের প্রমাণপত্র দিলে উৎসে মাত্র ৫% ট্যাক্স কাটা হয়, অন্যথায় ১০% কাটা যায়।',
      content_en: 'Buy national savings certificates directly through authorized banks. Submit proof of income tax return (PSR) to enjoy a reduced 5% source tax rate instead of 10%.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'জাতীয় সঞ্চয় অধিদপ্তর নীতিমালা ও সঞ্চয় স্কিম নির্দেশিকা',
      source_url: 'https://savings.gov.bd',
      published_date: '2023-01-01'
    }
  ]
};
