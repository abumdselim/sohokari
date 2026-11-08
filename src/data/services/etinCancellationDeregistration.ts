import { ServiceRecord } from '../../types/service';

export const etinCancellationDeregistrationService: ServiceRecord = {
  id: 'etin-cancellation-deregistration',
  slug: 'etin-cancellation-deregistration',
  category_id: 'finance_tax',
  name_bn: 'অপ্রয়োজনীয় বা অব্যবহৃত ই-টিআইএন (e-TIN) বাতিল ও নিষ্ক্রিয়করণ নির্দেশিকা',
  name_en: 'e-TIN Cancellation, Surrender & Deregistration Procedure (NBR)',
  responsible_ministry_bn: 'অর্থ মন্ত্রণালয় (অভ্যন্তরীণ সম্পদ বিভাগ)',
  responsible_ministry_en: 'Ministry of Finance (Internal Resources Division)',
  responsible_agency_bn: 'জাতীয় রাজস্ব বোর্ড (এনবিআর) ও সংশ্লিষ্ট কর সার্কেল কার্যালয়',
  responsible_agency_en: 'National Board of Revenue (NBR) & Tax Circle Offices',
  visiting_office_level: 'district',
  official_portal_url: 'https://nbr.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://nbr.gov.bd',
  legal_basis: 'আয়কর আইন ২০২৩',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'tin cancellation', language: 'en', weight: 1.0 },
    { alias: 'etin cancel', language: 'banglish', weight: 1.0 },
    { alias: 'tin bondho korbo kivabe', language: 'banglish', weight: 1.0 },
    { alias: 'tin deregistration', language: 'en', weight: 1.0 },
    { alias: 'ই-টিআইএন বাতিল করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'টিন সার্টিফিকেট বন্ধ করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'টিন বাতিল সরকারি ফি', language: 'bn', weight: 1.0 },
    { alias: 'টিআইএন সারেন্ডার পদ্ধতি', language: 'bn', weight: 1.0 },
    { alias: 'টিন নম্বর নিষ্ক্রিয়করণ', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'tin-cancellation-standard',
      variant_name_bn: 'কর সার্কেলে আবেদন করে টিআইএন স্থায়ীভাবে নিষ্ক্রিয়করণ',
      variant_name_en: 'Permanent TIN Deregistration through Tax Circle',
      conditions: { type: 'deregistration' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'টিআইএন বাতিল ও নিষ্ক্রিয়করণ সরকারি ফি',
          fee_type_en: 'TIN Deregistration Government Fee',
          amount_bdt: 0,
          effective_date: '2023-07-01',
          notes_bn: 'আইনত সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল ১২ ডিজিটের ই-টিআইএন (e-TIN) সনদের কপি',
          document_name_en: '12-digit e-TIN Certificate copy',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'National ID Card',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'উপ-কর কমিশনার (DCT) বরাবর লিখিত আবেদনপত্র',
          document_name_en: 'Written application addressed to Deputy Commissioner of Taxes',
          format_requirement: 'original',
          is_mandatory: true,
          condition_description_bn: 'যে কারণে টিআইএন খোলা হয়েছিল তার প্রয়োজনীয়তা ফুরিয়ে যাওয়া ও করযোগ্য আয় না থাকার কারণ উল্লেখ করতে হবে'
        },
        {
          document_name_bn: 'বিগত ৩ বছরের জিরো রিটার্ন স্লিপ বা ব্যাংক অ্যাকাউন্ট স্টেটমেন্ট',
          document_name_en: 'Last 3 years zero return acknowledgement or bank statement',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'সংশ্লিষ্ট কর সার্কেল চিহ্নিতকরণ ও আবেদন প্রস্তুত',
          instruction_bn: 'টিআইএন সনদে উল্লেখিত কর অঞ্চল ও সার্কেল নম্বরের উপ-কর কমিশনার (DCT) বরাবর টিআইএন বাতিলের সুস্পষ্ট কারণ দেখিয়ে আবেদন লিখুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'কর সার্কেল কার্যালয়ে আবেদন দাখিল ও রিসিভ কপি গ্রহণ',
          instruction_bn: 'এনআইডি, টিআইএন কপি ও ব্যাংক স্টেটমেন্টসহ সার্কেল অফিসে জমা দিয়ে ডকেট নম্বর ও সিলযুক্ত রিসিভ কপি অবশ্যই সংরক্ষণ করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'ফাইল অডিট ও টিআইএন নিষ্ক্রিয়করণ অনুমোদন',
          instruction_bn: 'উপ-কর কমিশনার আপনার ফাইলে কোনো অপরিশোধিত কর দাবি নেই মর্মে নিশ্চিত হয়ে কর কমিশনার বরাবর সুপারিশ পাঠাবেন এবং টিআইএন স্থায়ীভাবে ডিঅ্যাক্টিভেট করা হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'অনেকে ছাত্রাবস্থায় বা সাধারণ কাজের জন্য না বুঝে টিআইএন খুলে পরে প্রতি বছর রিটার্ন জমা না দেওয়ায় ৫,০০০ টাকার জরিমানার ঝুঁকিতে পড়েন। কোনো দালালকে টিআইএন বাতিলের নামে ১০,০০০-২০,০০০ টাকা দেবেন না। করযোগ্য আয় না থাকলে সার্কেল অফিসে লিখিত আবেদন দিয়ে সম্পূর্ণ বিনামূল্যে টিআইএন নিষ্ক্রিয় করা যায়।',
      content_en: 'Cancelling an unused e-TIN is completely free by submitting a formal deregistration petition with zero-income proof to your respective Deputy Commissioner of Taxes.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'আয়কর আইন ২০২৩ ও জাতীয় রাজস্ব বোর্ড নির্দেশিকা',
      source_url: 'https://nbr.gov.bd',
      published_date: '2023-07-01'
    }
  ]
};
