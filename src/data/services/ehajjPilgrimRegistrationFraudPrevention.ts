import { ServiceRecord } from '../../types/service';

export const ehajjPilgrimRegistrationFraudPreventionService: ServiceRecord = {
  id: 'bd-ehajj-pilgrim-registration-fraud-prevention',
  slug: 'bd-ehajj-pilgrim-registration-fraud-prevention',
  category_id: 'citizen_general',
  name_bn: 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা',
  name_en: 'Government & Private Hajj Pilgrim Registration & Fraud Prevention Guide',
  responsible_ministry_bn: 'ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'ধর্ম বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'ধর্ম বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://mora.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://mora.gov.bd',
  legal_basis: 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'government & private hajj pilgrim registration & fraud prevention guide', language: 'en', weight: 1.0 },
    { alias: 'ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ', language: 'bn', weight: 0.95 },
    { alias: 'ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ ফি', language: 'bn', weight: 0.95 },
    { alias: 'ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'ehajj pilgrim registration fraud prevention', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-ehajj-pilgrim-registration-fraud-prevention-standard',
      variant_name_bn: 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Government & Private Hajj Pilgrim Registration & Fraud Prevention Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'হজ প্রাক-নিবন্ধন (Pre-registration) সরকারি ফি',
          fee_type_en: 'হজ প্রাক-নিবন্ধন (Pre-registration) সরকারি ফি',
          amount_bdt: 30725.0,
          effective_date: '2022-01-01',
          notes_bn: 'প্রাক-নিবন্ধন ফি সরকার নির্ধারিত এবং ব্যাংকের মাধ্যমে জমা।'
        },
        {
          fee_type_bn: 'হজ প্যাকেজ চূড়ান্ত সরকারি ফি (বছর অনুযায়ী প্যাকেজ ঘোষিত)',
          fee_type_en: 'হজ প্যাকেজ চূড়ান্ত সরকারি ফি (বছর অনুযায়ী প্যাকেজ ঘোষিত)',
          amount_bdt: 450000.0,
          effective_date: '2022-01-01',
          notes_bn: 'মন্ত্রণালয় ঘোষিত অফিশিয়াল প্যাকেজ রেট।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর মেশিন রিডেবল পাসপোর্ট বা ই-পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদ থাকতে হবে)',
          document_name_en: 'আবেদনকারীর মেশিন রিডেবল পাসপোর্ট বা ই-পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদ থাকতে হবে)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজ রঙিন ছবি (সাদা ব্যাকগ্রাউন্ড)',
          document_name_en: 'পাসপোর্ট সাইজ রঙিন ছবি (সাদা ব্যাকগ্রাউন্ড)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'স্বাস্থ্য পরীক্ষার সনদ ও টিকাদান কার্ড (মেনিনজাইটিস ও ইনফ্লুয়েঞ্জা)',
          document_name_en: 'স্বাস্থ্য পরীক্ষার সনদ ও টিকাদান কার্ড (মেনিনজাইটিস ও ইনফ্লুয়েঞ্জা)',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ই-হজ পোর্টালে বা অনুমোদিত ব্যাংকে প্রাক-নিবন্ধন',
          instruction_bn: 'https://hajj.gov.bd পোর্টালে এনআইডি ও পাসপোর্ট দিয়ে প্রাক-নিবন্ধন সম্পন্ন করে ইউনিক সিরিয়াল নম্বর নিন।',
          warning_bn: 'অনুমোদিত হজ এজেন্সির তালিকা পোর্টালে দেখে নিন।',
          action_url: 'https://hajj.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'মন্ত্রণালয় কর্তৃক নির্ধারিত সময়সীমার মধ্যে প্যাকেজ নির্বাচন ও ফি পরিশোধ',
          instruction_bn: 'হজের সিরিয়াল এলে সরকারি প্যাকেজ বা অনুমোদিত বেসরকারি এজেন্সির ব্যাংক একাউন্টে টাকা জমা দিন।',
          warning_bn: 'ব্যক্তিগত কোনো এজেন্টের হাতে নগদে টাকা দেবেন না।',
          action_url: 'https://mora.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'পিলগ্রিম আইডি (PID) ও ভিসা গ্রহণ',
          instruction_bn: 'টাকা জমা হলে ধর্ম মন্ত্রণালয় পিলগ্রিম আইডি ইস্যু করবে এবং সৌদি হজ ও ওমরাহ মন্ত্রণালয় থেকে ইলেকট্রনিক হজ ভিসা সম্পন্ন হবে।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://mora.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: ভুয়া এজেন্সির প্রলোভনে পড়ে টিকিট না পাওয়া বা মক্কায় গিয়ে রাস্তায় রাত কাটানোর ঘটনা রোধে শুধুমাত্র সরকার অনুমোদিত লাইসেন্সধারী এজেন্সির সাথে চুক্তি করুন। কোনো প্রতারণা হলে হজ কল সেন্টার ১৬১৩৬ নম্বরে অভিযোগ দিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://mora.gov.bd'
    }
  ]
};
