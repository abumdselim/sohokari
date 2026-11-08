import { ServiceRecord } from '../../types/service';

export const fireServiceSafetyLicenseGuideService: ServiceRecord = {
  id: 'bd-fire-service-safety-license-guide',
  slug: 'bd-fire-service-safety-license-guide',
  category_id: 'citizen_general',
  name_bn: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা',
  name_en: 'Bangladesh Fire Service & Civil Defence Fire Safety Clearance & License Guide',
  responsible_ministry_bn: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_ministry_en: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_bn: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  responsible_agency_en: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://fireservice.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://fireservice.gov.bd',
  legal_basis: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh fire service & civil defence fire safety clearance & license guide', language: 'en', weight: 1.0 },
    { alias: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স', language: 'bn', weight: 0.95 },
    { alias: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স ফি', language: 'bn', weight: 0.95 },
    { alias: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'fire service safety license guide', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-fire-service-safety-license-guide-standard',
      variant_name_bn: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh Fire Service & Civil Defence Fire Safety Clearance & License Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'ফায়ার লাইসেন্স সরকারি ফি (১,০০০ বর্গফুট পর্যন্ত বাণিজ্যিক প্রতিষ্ঠান)',
          fee_type_en: 'ফায়ার লাইসেন্স সরকারি ফি (১,০০০ বর্গফুট পর্যন্ত বাণিজ্যিক প্রতিষ্ঠান)',
          amount_bdt: 1500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত প্রমিত ফি।'
        },
        {
          fee_type_bn: 'ফায়ার লাইসেন্স সরকারি ফি (১,০০১ থেকে ৫,০০০ বর্গফুট)',
          fee_type_en: 'ফায়ার লাইসেন্স সরকারি ফি (১,০০১ থেকে ৫,০০০ বর্গফুট)',
          amount_bdt: 3000.0,
          effective_date: '2022-01-01',
          notes_bn: 'ভবনের আয়তন অনুযায়ী নির্দিষ্ট সরকারি ফি।'
        },
        {
          fee_type_bn: 'গ্যাস সিলিন্ডার ও বিপজ্জনক দ্রব্য সংরক্ষণাগার ফি',
          fee_type_en: 'গ্যাস সিলিন্ডার ও বিপজ্জনক দ্রব্য সংরক্ষণাগার ফি',
          amount_bdt: 5000.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিশেষ ঝুঁকি পরিদর্শন অন্তর্ভুক্ত।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্রেড লাইসেন্স',
          document_name_en: 'হালনাগাদ ট্রেড লাইসেন্স',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভবন বা প্রতিষ্ঠানের অনুমোদিত আর্কিটেকচারাল লে-আউট নকশা',
          document_name_en: 'ভবন বা প্রতিষ্ঠানের অনুমোদিত আর্কিটেকচারাল লে-আউট নকশা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ভবন নির্মাণের অনুমোদনপত্র (রাজউক / সিডিএ / কেডিএ / পৌরসভা)',
          document_name_en: 'ভবন নির্মাণের অনুমোদনপত্র (রাজউক / সিডিএ / কেডিএ / পৌরসভা)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'অগ্নিনির্বাপক সিলিন্ডার (ABC/CO2 Dry Chemical Powder) ক্রয়ের ভাউচার',
          document_name_en: 'অগ্নিনির্বাপক সিলিন্ডার (ABC/CO2 Dry Chemical Powder) ক্রয়ের ভাউচার',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ফায়ার সার্ভিসের পোর্টালে ই-লাইসেন্স আবেদন',
          instruction_bn: 'https://efirelicense.gov.bd ওয়েবসাইটে যান। প্রতিষ্ঠান ও ভবনের বিস্তারিত তথ্য পূরণ করে আবেদন সাবমিট করুন।',
          warning_bn: 'প্রতিষ্ঠানে জরুরি নির্গমন সিঁড়ি (Fire Exit) ও সিলিন্ডারের অবস্থান স্পষ্ট উল্লেখ করুন।',
          action_url: 'https://efirelicense.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'চালানে সরকারি ফি পরিশোধ',
          instruction_bn: 'নির্দিষ্ট কোডে সোনালী ব্যাংকে চালানের মাধ্যমে সরকারি ফি জমা দিন। চালানের কপি সিস্টেমে আপলোড করুন।',
          warning_bn: 'কোনো কর্মচারীকে নগদ টাকা দেবেন না।',
          action_url: 'https://fireservice.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ফায়ার পরিদর্শক কর্তৃক সরেজমিনে পরিদর্শন',
          instruction_bn: 'নিকটস্থ ফায়ার স্টেশনের পরিদর্শক আপনার ভবন পরিদর্শন করবেন এবং মহড়ার ব্যবস্থা ও অগ্নিনির্বাপক ব্যবস্থা দেখবেন। সন্তোষজনক হলে তিনি ইতিবাচক প্রতিবেদন দাখিল করবেন।',
          warning_bn: 'পর্যাপ্ত ফায়ার এক্সটিংগুইশার ও স্মোক ডিটেক্টর প্রস্তুত রাখুন।',
          action_url: 'https://fireservice.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড',
          instruction_bn: 'উপ-পরিচালক বা সহকারী পরিচালক অনুমোদন দিলে সিস্টেম থেকে কিউআর কোডযুক্ত আসল ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড করে প্রিন্ট করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://fireservice.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ফায়ার স্টেশনের দালালরা সনদ পাইয়ে দেওয়ার নামে বিপুল অর্থ দাবি করে এবং অনেক ক্ষেত্রে নকল জাল সার্টিফিকেট ধরিয়ে দেয়। কোনো দুর্ঘটনায় নকল লাইসেন্স ধরা পড়লে ভবন মালিকের বিরুদ্ধে জামিন-অযোগ্য ফৌজদারি মামলা হবে। শুধুমাত্র ই-ফায়ার লাইসেন্স পোর্টালের ডিজিটাল সনদ গ্রহণ করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://fireservice.gov.bd'
    }
  ]
};
