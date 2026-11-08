import { ServiceRecord } from '../../types/service';

export const etinTaxReturnService: ServiceRecord = {
  id: 'etin-tax-return',
  slug: 'etin-tax-return',
  category_id: 'finance_tax',
  name_bn: 'ই-টিআইএন (e-TIN) ও অনলাইন আয়কর রিটার্ন দাখিল',
  name_en: 'e-TIN Registration & Online Income Tax Return Submission',
  responsible_ministry_bn: 'অর্থ মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Finance',
  responsible_agency_bn: 'জাতীয় রাজস্ব বোর্ড (NBR)',
  responsible_agency_en: 'National Board of Revenue',
  visiting_office_level: 'none',
  official_portal_url: 'https://etaxnbr.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://nbr.gov.bd',
  legal_basis: 'আয়কর আইন ২০২৩',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'tin certificate', language: 'en', weight: 1.0 },
    { alias: 'etin registration', language: 'en', weight: 1.0 },
    { alias: 'tax return', language: 'en', weight: 1.0 },
    { alias: 'tin certificate kivabe korbo', language: 'banglish', weight: 1.0 },
    { alias: 'tax return fee koto', language: 'banglish', weight: 1.0 },
    { alias: 'ই টিআইএন', language: 'bn', weight: 1.0 },
    { alias: 'টিন সার্টিফিকেট ফি', language: 'bn', weight: 1.0 },
    { alias: 'আয়কর রিটার্ন দাখিলের নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'টিন সার্টিফিকেট করার নিয়ম', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'etin-registration-individual',
      variant_name_bn: 'ব্যক্তিগত ১২ ডিজিটের ই-টিআইএন রেজিস্ট্রেশন',
      variant_name_en: 'Individual 12-Digit e-TIN Registration',
      conditions: { type: 'etin_registration' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'ই-টিআইএন রেজিস্ট্রেশন সরকারি ফি',
          fee_type_en: 'e-TIN Government Fee',
          amount_bdt: 0,
          effective_date: '2023-01-01',
          notes_bn: 'সম্পূর্ণ বিনামূল্যে (০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) নম্বর',
          document_name_en: 'National ID Card Number',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর নিজস্ব বায়োমেট্রিক সিম নম্বর (ওটিপির জন্য)',
          document_name_en: 'Biometric Mobile Number for OTP Verification',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'secure.incometax.gov.bd পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'পোর্টালে গিয়ে এনআইডি নম্বর ও জন্মতারিখ দিন। নির্বাচন কমিশনের ডেটাবেজ থেকে স্বয়ংক্রিয়ভাবে তথ্য যাচাই হবে।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'তাৎক্ষণিক ই-টিআইএন ডাউনলোড',
          instruction_bn: 'ওটিপি দেওয়ার সাথে সাথে ১২ ডিজিটের ট্যাক্স আইডেন্টিফিকেশন সার্টিফিকেট জেনারেট হবে এবং প্রিন্ট নেওয়া যাবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ই-টিআইএন তৈরি এবং শূন্য রিটার্ন দাখিল সম্পূর্ণ ফ্রি। দালালরা সাধারণ মানুষকে ভয় দেখিয়ে হাজার হাজার টাকা দাবি করে। ঘরে বসেই স্মার্টফোনে ১০ মিনিটে নিজে নিজেই এই কাজ করা যায়।',
      content_en: 'e-TIN registration and zero tax return submission are 100% free of charge.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'জাতীয় রাজস্ব বোর্ড আয়কর নির্দেশিকা ২০২৩-২৪',
      source_url: 'https://etaxnbr.gov.bd',
      published_date: '2023-07-01'
    }
  ]
};
