import { ServiceRecord } from '../../types/service';

export const nlaskoFreeLegalAidGovtLawyerService: ServiceRecord = {
  id: 'bd-nlasko-free-legal-aid-govt-lawyer',
  slug: 'bd-nlasko-free-legal-aid-govt-lawyer',
  category_id: 'legal_judiciary',
  name_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা',
  name_en: 'National Legal Aid Services Organization (16430) Free Govt Lawyer Official Guide',
  responsible_ministry_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_agency_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_agency_en: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  visiting_office_level: 'district',
  official_portal_url: 'https://nlaso.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://nlaso.gov.bd',
  legal_basis: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা', language: 'bn', weight: 1.0 },
    { alias: 'national legal aid services organization (16430) free govt lawyer official guide', language: 'en', weight: 1.0 },
    { alias: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক', language: 'bn', weight: 0.95 },
    { alias: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক ফি', language: 'bn', weight: 0.95 },
    { alias: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'nlasko free legal aid govt lawyer', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-nlasko-free-legal-aid-govt-lawyer-standard',
      variant_name_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা (সাধারণ আবেদন)',
      variant_name_en: 'National Legal Aid Services Organization (16430) Free Govt Lawyer Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'আইনজীবী নিয়োগ ও মামলা পরিচালনা খরচ',
          fee_type_en: 'আইনজীবী নিয়োগ ও মামলা পরিচালনা খরচ',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'সরকার নিজ তহবিল থেকে আইনজীবীর ফি ও কোর্ট ফি পরিশোধ করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'জেলা লিগ্যাল এইড অফিসের নির্ধারিত আবেদন ফরম',
          document_name_en: 'জেলা লিগ্যাল এইড অফিসের নির্ধারিত আবেদন ফরম',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মামলার নথিপত্র (যদি ইতোমধ্যে মামলা হয়ে থাকে যেমন আরজি/অভিযোগপত্র/চার্জশিটের কপি)',
          document_name_en: 'মামলার নথিপত্র (যদি ইতোমধ্যে মামলা হয়ে থাকে যেমন আরজি/অভিযোগপত্র/চার্জশিটের কপি)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'আবেদনকারীর অসচ্ছলতা প্রত্যয়নপত্র (ইউপি চেয়ারম্যান বা কাউন্সিলর প্রদত্ত)',
          document_name_en: 'আবেদনকারীর অসচ্ছলতা প্রত্যয়নপত্র (ইউপি চেয়ারম্যান বা কাউন্সিলর প্রদত্ত)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'টোল-ফ্রি হটলাইন ১৬৪৩০ এ কল বা জেলা অফিসে যোগাযোগ',
          instruction_bn: 'যেকোনো মোবাইল থেকে ১৬৪৩০ নম্বরে বিনামূল্যে কল করে আইনি পরামর্শ নিন অথবা সরাসরি জেলা জজ আদালতের লিগ্যাল এইড অফিসারের কাছে যান।',
          warning_bn: '১৬৪৩০ কল করতে কোনো ব্যালেন্স কাটে না।',
          action_url: 'https://nlaso.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'আবেদন দাখিল ও বিকল্প বিরোধ নিষ্পত্তি (ADR)',
          instruction_bn: 'লিগ্যাল এইড কর্মকর্তা উভয় পক্ষকে ডেকে সমঝোতা (ADR) করার চেষ্টা করবেন যাতে মামলা ছাড়াই বিরোধ মিটে যায়।',
          warning_bn: 'সমঝোতা না হলে জেলা কমিটি সরকারি আইনজীবী নিয়োগ দেবে।',
          action_url: 'https://nlaso.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি খরচে মামলা পরিচালনা',
          instruction_bn: 'নিযুক্ত আইনজীবী আপনার পক্ষে আদালতে মামলা লড়বেন। আপনাকে বা আপনার পরিবারকে উকালতনামা বা কোর্ট ফির জন্য কোনো টাকা দিতে হবে না।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://nlaso.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: আদালতের বারান্দায় দালালরা মানুষকে মিথ্যা আশ্বাস দিয়ে সর্বস্বান্ত করে। আপনার অর্থ না থাকলে সোজা জেলা জজ আদালতের লিগ্যাল এইড অফিসে যান। সরকারি আইনজীবী আপনার জন্য বিনে পয়সায় লড়াই করবেন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা অফিসিয়াল পোর্টাল',
      source_url: 'https://nlaso.gov.bd'
    }
  ]
};
