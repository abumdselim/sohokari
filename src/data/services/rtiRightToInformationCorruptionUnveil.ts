import { ServiceRecord } from '../../types/service';

export const rtiRightToInformationCorruptionUnveilService: ServiceRecord = {
  id: 'bd-rti-right-to-information-corruption-unveil',
  slug: 'bd-rti-right-to-information-corruption-unveil',
  category_id: 'legal_judiciary',
  name_bn: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা',
  name_en: 'Right to Information RTI Act 2009 Citizen Official Document Access Guide',
  responsible_ministry_bn: 'তথ্য কমিশন বাংলাদেশ ও সকল সরকারি দপ্তর',
  responsible_ministry_en: 'তথ্য কমিশন বাংলাদেশ ও সকল সরকারি দপ্তর',
  responsible_agency_bn: 'তথ্য কমিশন বাংলাদেশ ও সকল সরকারি দপ্তর',
  responsible_agency_en: 'তথ্য কমিশন বাংলাদেশ ও সকল সরকারি দপ্তর',
  visiting_office_level: 'district',
  official_portal_url: 'https://infocom.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://infocom.gov.bd',
  legal_basis: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'right to information rti act 2009 citizen official document access guide', language: 'en', weight: 1.0 },
    { alias: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক)', language: 'bn', weight: 0.95 },
    { alias: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) ফি', language: 'bn', weight: 0.95 },
    { alias: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'rti right to information corruption unveil', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-rti-right-to-information-corruption-unveil-standard',
      variant_name_bn: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Right to Information RTI Act 2009 Citizen Official Document Access Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 48,
      fees: [
        {
          fee_type_bn: 'তথ্য প্রাপ্তির আবেদন কোর্ট ফি স্ট্যাম্প (ফরম-ক)',
          fee_type_en: 'তথ্য প্রাপ্তির আবেদন কোর্ট ফি স্ট্যাম্প (ফরম-ক)',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'তথ্য অধিকার আইনে আবেদন ফি নির্ধারিত মাত্র ২০ টাকা।'
        },
        {
          fee_type_bn: 'নথিপত্রের ফটোকপি চার্জ (প্রতি পৃষ্ঠা)',
          fee_type_en: 'নথিপত্রের ফটোকপি চার্জ (প্রতি পৃষ্ঠা)',
          amount_bdt: 2.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকার নির্ধারিত প্রতি পৃষ্ঠার প্রকৃত ফটোকপি খরচ মাত্র ২ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'তথ্য অধিকার বিধিমালার নির্ধারিত \'ফরম-ক\' (আবেদন ফরম)',
          document_name_en: 'তথ্য অধিকার বিধিমালার নির্ধারিত \'ফরম-ক\' (আবেদন ফরম)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী নাগরিকের জাতীয় পরিচয়পত্র (NID) কপি',
          document_name_en: 'আবেদনকারী নাগরিকের জাতীয় পরিচয়পত্র (NID) কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'যে নির্দিষ্ট নথিপত্র বা ফাইলের অনুলিপি চান তার স্পষ্ট বিবরণ',
          document_name_en: 'যে নির্দিষ্ট নথিপত্র বা ফাইলের অনুলিপি চান তার স্পষ্ট বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'সংশ্লিষ্ট দপ্তরের \'দায়িত্বপ্রাপ্ত কর্মকর্তা\' (RTI Officer) বরাবর আবেদন',
          instruction_bn: 'যে দপ্তরের তথ্য চান (যেমন এসিল্যান্ড, উপজেলা স্বাস্থ্য কমপ্লেক্স, এলজিইডি, ডিসি অফিস) তাদের RTI দায়িত্বপ্রাপ্ত কর্মকর্তার নিকট ২০ টাকার কোর্ট ফি সহ ফরম-ক জমা দিয়ে রিসিভিং কপি নিন।',
          warning_bn: 'রিসিভিং কপিতে তারিখ ও স্বাক্ষর নিশ্চিত করুন।',
          action_url: 'https://infocom.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: '২০ কার্যদিবসের মধ্যে তথ্য সংগ্রহ',
          instruction_bn: 'কর্মকর্তা নির্ধারিত সময়ের মধ্যে তথ্য প্রস্তুত করে ফটোকপি বাবদ পৃষ্ঠা প্রতি ২ টাকা চালানে জমা নিয়ে নথির সত্যায়িত কপি বুঝিয়ে দেবেন।',
          warning_bn: 'তথ্য দিতে অস্বীকার করলে তিনি কারণ দর্শাতে বাধ্য।',
          action_url: 'https://infocom.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'তথ্য না দিলে আপিল ও তথ্য কমিশনে নালিশ',
          instruction_bn: 'তথ্য না পেলে ৩০ দিনের মধ্যে অফিস প্রধানের নিকট আপিল করুন। সেখানেও বিচার না পেলে সরাসরি তথ্য কমিশন (infocom.gov.bd)-এ অভিযোগ দায়ের করুন। কমিশন শুনানি ডেকে তথ্য আদায় করবে এবং অসাধু কর্মকর্তার প্রতিদিনের জন্য ৫০ টাকা হারে জরিমানা করবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://infocom.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: তথ্য পাওয়া কোনো অনুকম্পা নয়, এটি নাগরিকের সাংবিধানিক অধিকার। সরকারি দপ্তরের কোনো দুর্নীতির তথ্য চেয়ে আপনি কোনো অপরাধ করছেন না। কোনো কর্মকর্তা ভয়ভীতি দেখালে সোজা তথ্য কমিশন ও দুদকের সহায়তা নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://infocom.gov.bd'
    }
  ]
};
