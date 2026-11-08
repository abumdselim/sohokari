import { ServiceRecord } from '../../types/service';

export const dpdtTrademarkBrandRegistrationService: ServiceRecord = {
  id: 'bd-dpdt-trademark-brand-registration',
  slug: 'bd-dpdt-trademark-brand-registration',
  category_id: 'citizen_general',
  name_bn: 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি)',
  name_en: 'Bangladesh DPDT Trademark & Brand Name Official Registration Guide',
  responsible_ministry_bn: 'পেটেন্ট, শিল্প-নকশা ও ট্রেডমার্ক অধিদপ্তর (ডিপিডিটি), শিল্প মন্ত্রণালয়',
  responsible_ministry_en: 'পেটেন্ট, শিল্প-নকশা ও ট্রেডমার্ক অধিদপ্তর (ডিপিডিটি), শিল্প মন্ত্রণালয়',
  responsible_agency_bn: 'পেটেন্ট, শিল্প-নকশা ও ট্রেডমার্ক অধিদপ্তর (ডিপিডিটি), শিল্প মন্ত্রণালয়',
  responsible_agency_en: 'পেটেন্ট, শিল্প-নকশা ও ট্রেডমার্ক অধিদপ্তর (ডিপিডিটি), শিল্প মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dpdt.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dpdt.gov.bd',
  legal_basis: 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি) সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি)', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh dpdt trademark & brand name official registration guide', language: 'en', weight: 1.0 },
    { alias: 'dpdt trademark brand registration', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dpdt-trademark-brand-registration-standard',
      variant_name_bn: 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি) (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh DPDT Trademark & Brand Name Official Registration Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 12,
      fees: [
        {
          fee_type_bn: 'ট্রেডমার্ক প্রাথমিক আবেদন সরকারি ফি (Form TM-1)',
          fee_type_en: 'ট্রেডমার্ক প্রাথমিক আবেদন সরকারি ফি (Form TM-1)',
          amount_bdt: 4025.0,
          effective_date: '2022-01-01',
          notes_bn: 'মূল আবেদন ফি ৩,৫০০ টাকা + ১৫% ভ্যাট ৫২৫ টাকা = ৪,০২৫ টাকা।'
        },
        {
          fee_type_bn: 'ট্রেডমার্ক জার্নাল প্রকাশনা ফি',
          fee_type_en: 'ট্রেডমার্ক জার্নাল প্রকাশনা ফি',
          amount_bdt: 1725.0,
          effective_date: '2022-01-01',
          notes_bn: 'পরীক্ষায় পাস করার পর সরকারি গেজেট জার্নালে প্রকাশের ফি (১৫০০ + ভ্যাট)।'
        },
        {
          fee_type_bn: 'চূড়ান্ত ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট ফি (১০ বছর মেয়াদি)',
          fee_type_en: 'চূড়ান্ত ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট ফি (১০ বছর মেয়াদি)',
          amount_bdt: 17250.0,
          effective_date: '2022-01-01',
          notes_bn: 'গেজেটে কোনো আপত্তি না এলে ১০ বছরের সুরক্ষার জন্য ১৫,০০০ টাকা (+ভ্যাট)।'
        }
      ],
      documents: [
        {
          document_name_bn: 'ব্র্যান্ডের নাম ও লোগোর পরিষ্কার জেপিজি/পিডিএফ কপি (লোগো স্পেসিফিকেশন)',
          document_name_en: 'ব্র্যান্ডের নাম ও লোগোর পরিষ্কার জেপিজি/পিডিএফ কপি (লোগো স্পেসিফিকেশন)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি বা কোম্পানির ট্রেড লাইসেন্স',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি বা কোম্পানির ট্রেড লাইসেন্স',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পণ্য বা সেবার আন্তর্জাতিক নাইস শ্রেণিবিন্যাস (Nice Classification - Class 1 to 45)',
          document_name_en: 'পণ্য বা সেবার আন্তর্জাতিক নাইস শ্রেণিবিন্যাস (Nice Classification - Class 1 to 45)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'সোনালী ব্যাংকে সরকারি ট্রেজারি চালানের মূল কপি',
          document_name_en: 'সোনালী ব্যাংকে সরকারি ট্রেজারি চালানের মূল কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ডিপিডিটি পোর্টালে ট্রেডমার্ক অনুসন্ধান (Search)',
          instruction_bn: 'https://dpdt.gov.bd ওয়েবসাইটে গিয়ে \'Public Search\'-এ আপনার ব্র্যান্ড নামটি অন্য কারও নামে ইতোমধ্যে আছে কিনা তা বিনামূল্যে চেক করুন।',
          warning_bn: 'নামটি বিদ্যমান কোনো জনপ্রিয় ব্র্যান্ডের কাছাকাছি বা বিভ্রান্তিকর হতে পারবে না।',
          action_url: 'https://dpdt.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'টিএম-১ (TM-1) ফর্ম পূরণ ও চালান জমা',
          instruction_bn: 'সোনালী ব্যাংকে ৪,০২৫ টাকার চালান জমা দিয়ে টিএম-১ ফর্ম পূরণ করে অনলাইনে আবেদন সাবমিট করুন। তাৎক্ষণিক একটি অ্যাপ্লিকেশন নম্বর পাবেন।',
          warning_bn: 'অ্যাপ্লিকেশন নম্বর পাওয়ার দিন থেকেই আপনি আপনার নামের সাথে \'TM\' চিহ্ন ব্যবহার করতে পারবেন।',
          action_url: 'https://dpdt.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ট্রেডমার্ক এক্সামিনার কর্তৃক পরীক্ষা ও জার্নাল প্রকাশ',
          instruction_bn: 'রেজিস্ট্রার নাম পরীক্ষা করে অনুমতি দিলে সরকারি ট্রেডমার্ক জার্নালে দুই মাসের জন্য প্রকাশ করা হবে যাতে কারো কোনো আপত্তি থাকলে জানাতে পারে।',
          warning_bn: 'আপত্তি না এলে চূড়ান্ত সার্টিফিকেট প্রস্তুত হয়।',
          action_url: 'https://dpdt.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: '১০ বছর মেয়াদি ট্রেডমার্ক সার্টিফিকেট ও ® সিম্বল লাভ',
          instruction_bn: 'চূড়ান্ত ফি জমা দিয়ে সিলমোহরযুক্ত ট্রেডমার্ক রেজিস্ট্রেশন সার্টিফিকেট নিন। এরপর থেকে আপনার ব্র্যান্ড নামের পাশে \'®\' (Registered) চিহ্ন ব্যবহার করতে পারবেন এবং কেউ কপি করলে কপিরাইট ও ট্রেডমার্ক আইনে ক্ষতিপূরণ দাবি করতে পারবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dpdt.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: দালালরা একটি ট্রেডমার্কের জন্য লাখ টাকা হাতিয়ে নেয়। আপনি নিজে সরাসরি ডিপিডিটির ওয়েবসাইটে ফর্ম পূরণ করে সরকারি চালানে ৩,৫০০ টাকা জমা দিয়ে আবেদন সম্পন্ন করতে পারেন। কোনো তৃতীয় পক্ষের কোনো প্রভাব খাটানোর নিয়ম নেই।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ট্রেডমার্ক ও ব্র্যান্ড নাম রেজিস্ট্রেশন নির্দেশিকা (ডিপিডিটি) অফিসিয়াল পোর্টাল',
      source_url: 'https://dpdt.gov.bd'
    }
  ]
};
