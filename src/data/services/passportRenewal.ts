import { ServiceRecord } from '../../types/service';

export const passportRenewalService: ServiceRecord = {
  id: 'passport-renewal',
  slug: 'passport-renewal',
  category_id: 'travel_immigration',
  name_bn: 'ই-পাসপোর্ট নবায়ন / রি-ইস্যু',
  name_en: 'e-Passport Renewal / Reissue',
  responsible_ministry_bn: 'স্বরাষ্ট্র মন্ত্রণালয় (সুরক্ষা সেবা বিভাগ)',
  responsible_ministry_en: 'Ministry of Home Affairs (Security Services Division)',
  responsible_agency_bn: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)',
  responsible_agency_en: 'Department of Immigration and Passports',
  visiting_office_level: 'district',
  official_portal_url: 'https://epassport.gov.bd',
  helpline_number: '16445',
  grievance_channel: 'https://www.dip.gov.bd/site/page/grs',
  legal_basis: 'বাংলাদেশ পাসপোর্ট আদেশ ১৯৭৩ এবং পাসপোর্ট বিধিমালা ২০২০',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Sheyal Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'passport renewal', language: 'en', weight: 1.0 },
    { alias: 'epassport renew', language: 'en', weight: 1.0 },
    { alias: 'passport renew fee', language: 'banglish', weight: 1.0 },
    { alias: 'passport er meyad sesh', language: 'banglish', weight: 1.0 },
    { alias: 'passport er fee koto', language: 'banglish', weight: 1.0 },
    { alias: 'passport reissue', language: 'banglish', weight: 1.0 },
    { alias: 'পাসপোর্ট নবায়ন', language: 'bn', weight: 1.0 },
    { alias: 'ই-পাসপোর্ট রি-ইস্যু', language: 'bn', weight: 1.0 },
    { alias: 'পাসপোর্টের মেয়াদ শেষ', language: 'bn', weight: 1.0 },
    { alias: 'পাসপোর্ট রিনিউ ফি', language: 'bn', weight: 1.0 },
    { alias: 'ই পাসপোর্ট ফি', language: 'bn', weight: 1.0 },
    { alias: 'urgent passport fee', language: 'banglish', weight: 0.95 },
    { alias: 'passport 48 page 10 years fee', language: 'en', weight: 0.95 }
  ],
  variants: [
    {
      id: 'passport-renewal-48p-5y-regular',
      variant_name_bn: '৪৮ পৃষ্ঠা, ৫ বছর মেয়াদ (সাধারণ ডেলিভারি)',
      variant_name_en: '48 Pages, 5 Years (Regular Delivery)',
      conditions: { pages: 48, validity_years: 5, urgency: 'regular' },
      processing_days_sla: 15,
      validity_years: 5,
      fees: [
        {
          fee_type_bn: 'মূল সরকারি পাসপোর্ট ফি',
          fee_type_en: 'Base Government Fee',
          amount_bdt: 3500,
          effective_date: '2020-01-22'
        },
        {
          fee_type_bn: '১৫% সরকারি ভ্যাট',
          fee_type_en: '15% VAT',
          amount_bdt: 525,
          effective_date: '2020-01-22'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল পুরাতন পাসপোর্ট ও ১ সেট স্পষ্ট ফটোকপি',
          document_name_en: 'Original previous passport & 1 photocopy set',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) মূল ও ফটোকপি (২০ বছরের নিচে হলে অনলাইন জন্ম সনদ)',
          document_name_en: 'Original NID card & photocopy (or digital birth certificate if under 20)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'অনলাইন আবেদন সারসংক্ষেপ (Application Summary) প্রিন্ট কপি',
          document_name_en: 'Printed Application Summary copy',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'সরকারি ফি জমার এ-চালান / ব্যাংক পেমেন্ট রসিদ',
          document_name_en: 'A-Challan / Bank payment receipt',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইন পোর্টালে ফরম পূরণ',
          instruction_bn: 'epassport.gov.bd ওয়েবসাইটে যান। বর্তমান বসবাসরত জেলা অনুযায়ী সংশ্লিষ্ট পাসপোর্ট অফিস নির্বাচন করুন এবং "Reissue / Renewal" অপশন বেছে নিয়ে পুরাতন পাসপোর্টের তথ্য দিন।'
        },
        {
          channel: 'bank',
          step_number: 2,
          title_bn: 'সরকারি ফি পরিশোধ (৪০২৫ টাকা)',
          instruction_bn: 'অনলাইনে এ-চালান, বিকাশ/নগদ বা সোনালী ব্যাংক/নির্দিষ্ট ব্যাংকে মোট ৪০২৫ টাকা (ভ্যাটসহ) সরকারি ফি পরিশোধ করে রসিদ সংরক্ষণ করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'বায়োমেট্রিক ও ছবি প্রদান (পাসপোর্ট অফিস)',
          instruction_bn: 'পুরাতন পাসপোর্ট, এনআইডি এবং আবেদন সামারিসহ নির্দিষ্ট দিনে আঞ্চলিক পাসপোর্ট অফিসে উপস্থিত হয়ে ছবি, ফিঙ্গারপ্রিন্ট ও আইরিশ স্ক্যান সম্পন্ন করুন।'
        },
        {
          channel: 'office',
          step_number: 4,
          title_bn: 'পাসপোর্ট ডেলিভারি গ্রহণ',
          instruction_bn: 'ডেলিভারি স্লিপ ও পুরাতন পাসপোর্ট নিয়ে পাসপোর্ট অফিসে যান। পুরাতন পাসপোর্টটি ছিদ্র/বাতিল করে সিল মেরে নতুন ই-পাসপোর্টের সাথে ফেরত দেওয়া হবে।'
        }
      ]
    },
    {
      id: 'passport-renewal-48p-10y-regular',
      variant_name_bn: '৪৮ পৃষ্ঠা, ১০ বছর মেয়াদ (সাধারণ ডেলিভারি)',
      variant_name_en: '48 Pages, 10 Years (Regular Delivery)',
      conditions: { pages: 48, validity_years: 10, urgency: 'regular' },
      processing_days_sla: 15,
      validity_years: 10,
      fees: [
        {
          fee_type_bn: 'মূল সরকারি পাসপোর্ট ফি',
          fee_type_en: 'Base Government Fee',
          amount_bdt: 5000,
          effective_date: '2020-01-22'
        },
        {
          fee_type_bn: '১৫% সরকারি ভ্যাট',
          fee_type_en: '15% VAT',
          amount_bdt: 750,
          effective_date: '2020-01-22'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল পুরাতন পাসপোর্ট ও ফটোকপি',
          document_name_en: 'Original previous passport & photocopy',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মূল NID ও ফটোকপি',
          document_name_en: 'Original NID card & photocopy',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদন সারসংক্ষেপ ও ৫৭৫০ টাকা ফি জমার রসিদ',
          document_name_en: 'Application summary & 5750 BDT payment receipt',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইনে আবেদন ও ৫৭৫০ টাকা ফি পরিশোধ',
          instruction_bn: 'epassport.gov.bd পোর্টালে ১০ বছর ও ৪৮ পৃষ্ঠা সিলেক্ট করে মোট ৫৭৫০ টাকা ফি জমা দিন।'
        }
      ]
    },
    {
      id: 'passport-renewal-48p-10y-express',
      variant_name_bn: '৪৮ পৃষ্ঠা, ১০ বছর মেয়াদ (জরুরি / এক্সপ্রেস ডেলিভারি)',
      variant_name_en: '48 Pages, 10 Years (Express Delivery)',
      conditions: { pages: 48, validity_years: 10, urgency: 'express' },
      processing_days_sla: 7,
      validity_years: 10,
      fees: [
        {
          fee_type_bn: 'মূল এক্সপ্রেস ফি',
          fee_type_en: 'Base Express Fee',
          amount_bdt: 7000,
          effective_date: '2020-01-22'
        },
        {
          fee_type_bn: '১৫% ভ্যাট',
          fee_type_en: '15% VAT',
          amount_bdt: 1050,
          effective_date: '2020-01-22'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল পুরাতন পাসপোর্ট, NID ও ৮০৫০ টাকা পেমেন্ট রসিদ',
          document_name_en: 'Original passport, NID & 8050 BDT payment receipt',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'এক্সপ্রেস ডেলিভারি নির্বাচন ও ৮০৫০ টাকা ফি প্রদান',
          instruction_bn: 'অনলাইন আবেদনে Express Delivery নির্বাচন করে ৭ কার্যদিবসের মধ্যে ডেলিভারি পেতে ৮০৫০ টাকা পরিশোধ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'দালাল সতর্কতা: পাসপোর্ট অফিসে কোনো দালাল বা মধ্যস্বত্বভোগীর সাথে লেনদেন করবেন না। লাইনে দাঁড়ানো বা বায়োমেট্রিকের জন্য কোনো বাড়তি টাকা লাগে না। কোনো কর্মচারী অবৈধ টাকা দাবি করলে সরাসরি উপ-পরিচালক বা দুর্নীতি দমন কমিশনের ১০৬ হটলাইনে জানান।',
      content_en: 'Anti-Broker Alert: Never deal with brokers at passport offices. Biometrics and queuing require no extra money. Report extortion directly to the Deputy Director or ACC Helpline 106.'
    },
    {
      guidance_type: 'tip',
      content_bn: 'জরুরি তথ্য: যদি আপনার নাম বা পিতার নামে পরিবর্তন না থাকে, তবে পাসপোর্ট নবায়নে সাধারণত কোনো নতুন পুলিশ ভেরিফিকেশন (Police Clearance) প্রয়োজন হয় না।',
      content_en: 'Key Insight: No new police verification is normally required for standard passport renewal if personal data remains unchanged.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর অফিসিয়াল ফি চার্ট ও নির্দেশিকা',
      source_url: 'https://epassport.gov.bd/instructions/passport-fees',
      published_date: '2020-01-22'
    }
  ]
};
