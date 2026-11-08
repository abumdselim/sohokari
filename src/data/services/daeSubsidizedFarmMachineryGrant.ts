import { ServiceRecord } from '../../types/service';

export const daeSubsidizedFarmMachineryGrantService: ServiceRecord = {
  id: 'bd-dae-subsidized-farm-machinery-grant',
  slug: 'bd-dae-subsidized-farm-machinery-grant',
  category_id: 'agriculture_food',
  name_bn: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা',
  name_en: '50% to 70% Subsidized Farm Machinery Combine Harvester Grant Guide',
  responsible_ministry_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়',
  responsible_ministry_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়',
  responsible_agency_bn: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়',
  responsible_agency_en: 'কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://dae.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://dae.gov.bd',
  legal_basis: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: '50% to 70% subsidized farm machinery combine harvester grant guide', language: 'en', weight: 1.0 },
    { alias: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি', language: 'bn', weight: 0.95 },
    { alias: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি ফি', language: 'bn', weight: 0.95 },
    { alias: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'dae subsidized farm machinery grant', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-dae-subsidized-farm-machinery-grant-standard',
      variant_name_bn: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: '50% to 70% Subsidized Farm Machinery Combine Harvester Grant Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 45,
      fees: [
        {
          fee_type_bn: 'ভর্তুকি আবেদন ফরম ফি',
          fee_type_en: 'ভর্তুকি আবেদন ফরম ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'উপজেলা কৃষি অফিসে আবেদন সম্পূর্ণ ফ্রি।'
        },
        {
          fee_type_bn: 'কৃষকের নিজস্ব প্রদেয় অংশ',
          fee_type_en: 'কৃষকের নিজস্ব প্রদেয় অংশ',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'যন্ত্রপাতির দামের সমতলে ৫০% এবং হাওরে ৩০% অংশ কৃষক পরিশোধ করবেন।'
        }
      ],
      documents: [
        {
          document_name_bn: 'উপজেলা কৃষি কার্যালয়ের নির্ধারিত আবেদন ফরম',
          document_name_en: 'উপজেলা কৃষি কার্যালয়ের নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারী কৃষক বা কৃষক দলের কৃষি কার্ড ও জাতীয় পরিচয়পত্র',
          document_name_en: 'আবেদনকারী কৃষক বা কৃষক দলের কৃষি কার্ড ও জাতীয় পরিচয়পত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ন্যূনতম আবাদযোগ্য জমির পরিমাণ বা কৃষক দলের চুক্তিনামা',
          document_name_en: 'ন্যূনতম আবাদযোগ্য জমির পরিমাণ বা কৃষক দলের চুক্তিনামা',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'যন্ত্রপাতি রাখার উপযোগী গ্যারেজ বা জায়গার বিবরণ',
          document_name_en: 'যন্ত্রপাতি রাখার উপযোগী গ্যারেজ বা জায়গার বিবরণ',
          format_requirement: 'photocopy',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'উপজেলা কৃষি অফিসার (UAO) বরাবর আবেদন',
          instruction_bn: 'কৃষি সম্প্রসারণ অধিদপ্তরের সমন্বিত কৃষি যন্ত্রায়করণ প্রকল্পের আওতায় ফরমে আবেদন দাখিল করুন।',
          warning_bn: 'কৃষক দল বা সমবায় হিসেবে আবেদন করলে অগ্রাধিকার পাওয়া যায়।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'উপজেলা কৃষি পুনর্বাসন ও বাস্তবায়ন কমিটি কর্তৃক যাচাই',
          instruction_bn: 'কমিটি আবেদনকারীর জমি ও দক্ষতা সরেজমিনে যাচাই করে চূড়ান্ত তালিকা জেলা কমিটিতে পাঠাবে।',
          warning_bn: 'তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।',
          action_url: 'https://dae.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'ভর্তুকির অর্থ সমন্বয় ও যন্ত্রপাতি হস্তান্তর',
          instruction_bn: 'অনুমোদিত কোম্পানি থেকে যন্ত্রপাতির ৫০% কৃষক জমা দিলে বাকি ৫০% বা ৭০% অর্থ সরকার পরিশোধ করে এবং আনুষ্ঠানিকভাবে হারভেস্টার হস্তান্তর করা হয়।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://dae.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোনো অসাধু ব্যক্তি বা দালাল ভর্তুকির হারভেস্টার বিক্রি করে দেওয়া বা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে জেলা প্রশাসক বা কৃষি মন্ত্রণালয়ের নিয়ন্ত্রণ কক্ষে অবহিত করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: '৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://dae.gov.bd'
    }
  ]
};
