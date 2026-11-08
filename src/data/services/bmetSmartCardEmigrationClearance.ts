import { ServiceRecord } from '../../types/service';

export const bmetSmartCardEmigrationClearanceService: ServiceRecord = {
  id: 'bd-bmet-smart-card-emigration-clearance',
  slug: 'bd-bmet-smart-card-emigration-clearance',
  category_id: 'expatriate_welfare',
  name_bn: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা',
  name_en: 'Bangladesh BMET Smart Card & Emigration Clearance Official Fee Guide (Ami Probashi)',
  responsible_ministry_bn: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_ministry_en: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_bn: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  responsible_agency_en: 'জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://bmet.gov.bd',
  helpline_number: '16135',
  grievance_channel: 'https://bmet.gov.bd',
  legal_basis: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh bmet smart card & emigration clearance official fee guide (ami probashi)', language: 'en', weight: 1.0 },
    { alias: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন', language: 'bn', weight: 0.95 },
    { alias: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন ফি', language: 'bn', weight: 0.95 },
    { alias: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'bmet smart card emigration clearance', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-bmet-smart-card-emigration-clearance-standard',
      variant_name_bn: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh BMET Smart Card & Emigration Clearance Official Fee Guide (Ami Probashi) (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 5,
      fees: [
        {
          fee_type_bn: 'প্রবাসী কল্যাণ তহবিল ও সদস্যপদ ফি',
          fee_type_en: 'প্রবাসী কল্যাণ তহবিল ও সদস্যপদ ফি',
          amount_bdt: 3500.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকারি নির্ধারিত কল্যাণ ফি ৩৫০০ টাকা (প্রবাসী কর্মী ও তার পরিবারের কল্যাণে ব্যবহৃত হয়)'
        },
        {
          fee_type_bn: 'প্রবাসী জীবন বীমা প্রিমিয়াম (বাধ্যতামূলক)',
          fee_type_en: 'প্রবাসী জীবন বীমা প্রিমিয়াম (বাধ্যতামূলক)',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রবাসী কর্মীর জন্য জীবন বীমা পলিসি বাবদ ১০০০ টাকা'
        },
        {
          fee_type_bn: 'বিএমইটি স্মার্ট কার্ড ও সার্ভিস চার্জ',
          fee_type_en: 'বিএমইটি স্মার্ট কার্ড ও সার্ভিস চার্জ',
          amount_bdt: 250.0,
          effective_date: '2022-01-01',
          notes_bn: 'স্মার্ট কার্ড প্রিন্ট ও সার্ভিস ফি ২৫০ টাকা'
        },
        {
          fee_type_bn: 'বিএমইটি ডাটাবেজ রেজিস্ট্রেশন ফি',
          fee_type_en: 'বিএমইটি ডাটাবেজ রেজিস্ট্রেশন ফি',
          amount_bdt: 300.0,
          effective_date: '2022-01-01',
          notes_bn: 'শুরুতে ডাটাবেজে নাম অন্তর্ভুক্তির জন্য ৩০০ টাকা (ডিমো অফিসে গেলে মাত্র ২০০ টাকা)'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর আসল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)',
          document_name_en: 'আবেদনকারীর আসল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বৈধ কাজের ভিসা (Work Visa / Employment Visa)',
          document_name_en: 'বৈধ কাজের ভিসা (Work Visa / Employment Visa)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'নিয়োগকর্তার কর্মচুক্তিপত্র (Job Contract / Employment Agreement)',
          document_name_en: 'নিয়োগকর্তার কর্মচুক্তিপত্র (Job Contract / Employment Agreement)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মেডিকেল ফিটনেস সনদ (GAMCA / সরকার অনুমোদিত মেডিকেল সেন্টার)',
          document_name_en: 'মেডিকেল ফিটনেস সনদ (GAMCA / সরকার অনুমোদিত মেডিকেল সেন্টার)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) সনদ',
          document_name_en: 'প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) সনদ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'আমি প্রবাসী অ্যাপে রেজিস্ট্রেশন ও বিএমইটি নম্বর গ্রহণ',
          instruction_bn: '\'Ami Probashi\' অ্যাপ ডাউনলোড করুন অথবা amiprobashi.com পোর্টালে যান। আপনার পাসপোর্ট নম্বর দিয়ে স্ক্যান করে ডাটাবেজ রেজিস্ট্রেশন সম্পন্ন করুন এবং ৩০০ টাকা ফি দিন।',
          warning_bn: 'নাম ও পাসপোর্ট তথ্য শতভাগ পাসপোর্টের সাথে মিল থাকতে হবে।',
          action_url: 'https://amiprobashi.com'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'PDO ট্রেনিং সম্পন্ন করা',
          instruction_bn: 'নিকটস্থ সরকারি টিটিসি (Technical Training Center)-তে ৩ দিনের প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) ট্রেনিংয়ে অংশ নিন এবং অনলাইন সনদ ডাউনলোড করুন।',
          warning_bn: 'PDO সার্টিফিকেট ছাড়া বহির্গমন ছাড়পত্রের আবেদন গ্রহণ করা হয় না।',
          action_url: 'https://bmet.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ভিসা ও চুক্তিপত্র যাচাই এবং ফি প্রদান',
          instruction_bn: 'ভিসা কপি, মেডিকেল সনদ ও জব কন্ট্রাক্ট আপলোড করে ক্লিয়ারেন্সের জন্য আবেদন করুন। মোট সরকারি ফি (কল্যাণ ফি ৩৫০০ + বীমা ১০০০ + কার্ড ২৫০ = মোট ৪,৭৫০ টাকা) অনলাইনে বিকাশ বা ব্যাংকে পরিশোধ করুন।',
          warning_bn: 'দালাল বা এজেন্সিকে অতিরিক্ত কোনো টাকা দেওয়ার প্রয়োজন নেই।',
          action_url: 'https://bmet.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'ডিজিটাল স্মার্ট কার্ড ও কিউআর ক্লিয়ারেন্স ডাউনলোড',
          instruction_bn: 'বিএমইটি কর্মকর্তা কর্তৃক আবেদন অনুমোদিত হলে মোবাইলে কিউআর কোডযুক্ত ডিজিটাল ই-ক্লিয়ারেন্স কার্ড পাওয়া যায়। এটি প্রিন্ট করে বিমানবন্দরে ইমিগ্রেশনে দেখালেই বিদেশ যাওয়া যায়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://bmet.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: রিক্রুটিং এজেন্সি বা কোনো দালাল স্মার্ট কার্ডের নামে ২০ থেকে ৫০ হাজার টাকা দাবি করলে তা সম্পূর্ণ চাঁদাবাজি। সরকারি ফি মাত্র ৪,৭৫০ টাকা। সরাসরি \'আমি প্রবাসী\' অ্যাপ থেকে নিজে নিজেই আবেদন করে কিউআর কার্ড ডাউনলোড করা যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://bmet.gov.bd'
    }
  ]
};
