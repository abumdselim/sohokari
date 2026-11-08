import { ServiceRecord } from '../../types/service';

export const courtBailPetitionBondSubmissionService: ServiceRecord = {
  id: 'bd-court-bail-petition-bond-submission',
  slug: 'bd-court-bail-petition-bond-submission',
  category_id: 'legal_judiciary',
  name_bn: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা',
  name_en: 'Court Bail Petition & Bail Bond Submission Official Procedure Guide',
  responsible_ministry_bn: 'বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত',
  responsible_ministry_en: 'বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত',
  responsible_agency_bn: 'বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত',
  responsible_agency_en: 'বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত',
  visiting_office_level: 'district',
  official_portal_url: 'https://supremecourt.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://supremecourt.gov.bd',
  legal_basis: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'court bail petition & bail bond submission official procedure guide', language: 'en', weight: 1.0 },
    { alias: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল', language: 'bn', weight: 0.95 },
    { alias: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল ফি', language: 'bn', weight: 0.95 },
    { alias: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'court bail petition bond submission', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-court-bail-petition-bond-submission-standard',
      variant_name_bn: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Court Bail Petition & Bail Bond Submission Official Procedure Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'জামিন আবেদন কোর্ট ফি স্ট্যাম্প',
          fee_type_en: 'জামিন আবেদন কোর্ট ফি স্ট্যাম্প',
          amount_bdt: 20.0,
          effective_date: '2022-01-01',
          notes_bn: 'ম্যাজিস্ট্রেট বা জজ কোর্টে জামিন আবেদনের কোর্ট ফি মাত্র ২০ টাকা।'
        },
        {
          fee_type_bn: 'জামিন বন্ড স্ট্যাম্প ফি (Bail Bond Stamp)',
          fee_type_en: 'জামিন বন্ড স্ট্যাম্প ফি (Bail Bond Stamp)',
          amount_bdt: 50.0,
          effective_date: '2022-01-01',
          notes_bn: 'আদালতের আদেশ অনুযায়ী ৫০ থেকে ১০০ টাকার বন্ড স্ট্যাম্প।'
        },
        {
          fee_type_bn: 'উকালতনামা কোর্ট ফি',
          fee_type_en: 'উকালতনামা কোর্ট ফি',
          amount_bdt: 30.0,
          effective_date: '2022-01-01',
          notes_bn: 'আইনজীবী নিয়োগের মূল উকালতনামা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'থানার এফআইআর (FIR) / এজাহার বা সিআর নালিশি মামলার অনুলিপি',
          document_name_en: 'থানার এফআইআর (FIR) / এজাহার বা সিআর নালিশি মামলার অনুলিপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আসামির জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন কপি',
          document_name_en: 'আসামির জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'জামিনদারদের (Surety) জাতীয় পরিচয়পত্র ও স্থায়ী ঠিকানার প্রত্যয়ন',
          document_name_en: 'জামিনদারদের (Surety) জাতীয় পরিচয়পত্র ও স্থায়ী ঠিকানার প্রত্যয়ন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'আইনজীবী কর্তৃক স্বাক্ষরিত জামিন পিটিশন ও উকালতনামা',
          document_name_en: 'আইনজীবী কর্তৃক স্বাক্ষরিত জামিন পিটিশন ও উকালতনামা',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'এজাহার ও ওকালতনামাসহ জামিন আবেদন প্রস্তুত',
          instruction_bn: 'মামলার ধারা উল্লেখ করে বিজ্ঞ আইনজীবীর মাধ্যমে জামিন আবেদন প্রস্তুত করুন। অসচ্ছল হলে সরকারি লিগ্যাল এইড (১৬৪৩০) থেকে ফ্রি উকিল নিন।',
          warning_bn: 'দালাল নয়, সরাসরি বারের সনদপ্রাপ্ত আইনজীবীর সাথে কথা বলুন।',
          action_url: 'https://supremecourt.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'আদালতে জামিন শুনানি',
          instruction_bn: 'বিজ্ঞ বিচারক মামলার নথি, ধারার গুরুত্ব ও জামিনের যুক্তি পর্যালোচনা করে জামিন মঞ্জুর বা নামঞ্জুর করবেন।',
          warning_bn: 'কোনো পেশকার বা কর্মচারীকে টাকা দেওয়ার সুযোগ নেই।',
          action_url: 'https://supremecourt.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'জামিন বন্ড দাখিল ও রিলিজ অর্ডার (Release Order) প্রেরণ',
          instruction_bn: 'জামিন মঞ্জুর হলে নির্ধারিত টাকার বন্ড স্ট্যাম্প ও স্থানীয় জামিনদারের এনআইডিসহ বন্ড জমা দিন। আদালত থেকে সরাসরি কারাগারে রিলিজ আদেশ পাঠানো হবে এবং আসামি মুক্ত হবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://supremecourt.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোর্ট প্রাঙ্গণে তথাকথিত মুহুরী বা দালালরা বিচারক ও পুলিশের নামে লাখ লাখ টাকা হাতিয়ে নেয়। জামিন কোনো কেনাবেচার জিনিস নয়; এটি আইনের ভিত্তিতে বিচারকের নিজস্ব এখতিয়ার। সরকারি লিগ্যাল এইড হটলাইন ১৬৪৩০ নম্বরে কল করে বিনা পয়সায় আইনি সুরক্ষা নিন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://supremecourt.gov.bd'
    }
  ]
};
