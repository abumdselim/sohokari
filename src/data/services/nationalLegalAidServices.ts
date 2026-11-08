import { ServiceRecord } from '../../types/service';

export const nationalLegalAidServicesService: ServiceRecord = {
  id: 'bd-national-legal-aid-services',
  slug: 'bd-national-legal-aid-services',
  category_id: 'legal_judiciary',
  name_bn: 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি',
  name_en: 'Bangladesh National Legal Aid Services (Free Legal Advice & Government Lawyer)',
  responsible_ministry_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ',
  responsible_ministry_en: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ',
  responsible_agency_bn: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ',
  responsible_agency_en: 'জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ',
  visiting_office_level: 'district',
  official_portal_url: 'http://www.nlaso.gov.bd',
  helpline_number: '333',
  grievance_channel: 'http://www.nlaso.gov.bd',
  legal_basis: 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি', language: 'bn', weight: 1.0 },
    { alias: 'bangladesh national legal aid services (free legal advice & government lawyer)', language: 'en', weight: 1.0 },
    { alias: 'national legal aid services', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-national-legal-aid-services-standard',
      variant_name_bn: 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি (সাধারণ আবেদন)',
      variant_name_en: 'Bangladesh National Legal Aid Services (Free Legal Advice & Government Lawyer) (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'আইনগত সহায়তা ও আইনজীবী ফি',
          fee_type_en: 'আইনগত সহায়তা ও আইনজীবী ফি',
          amount_bdt: 0.0,
          effective_date: '2022-01-01',
          notes_bn: 'আইনজীবীর ফি, কোর্ট ফি ও মামলার সমস্ত খরচ সরকার বহন করে।'
        }
      ],
      documents: [
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র বা জন্ম সনদ কপি',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র বা জন্ম সনদ কপি',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মামলা বা বিরোধ সংক্রান্ত কাগজপত্রের ফটোকপি (যদি থাকে)',
          document_name_en: 'মামলা বা বিরোধ সংক্রান্ত কাগজপত্রের ফটোকপি (যদি থাকে)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'দরিদ্রতার প্রমাণপত্র / বার্ষিক আয় বিবরণী (সাধারণত বাৎসরিক আয় অনূর্ধ্ব দেড় লাখ টাকা)',
          document_name_en: 'দরিদ্রতার প্রমাণপত্র / বার্ষিক আয় বিবরণী (সাধারণত বাৎসরিক আয় অনূর্ধ্ব দেড় লাখ টাকা)',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'টোল-ফ্রি হেল্পলাইন ১৬৪৩০ নম্বরে কল বা অফিসে যোগাযোগ',
          instruction_bn: 'যেকোনো মোবাইল বা ল্যান্ডফোন থেকে বিনা খরচে ১৬৪৩০ নম্বরে কল করুন অথবা আপনার জেলা জজ আদালত ভবনে অবস্থিত \'জেলা লিগ্যাল এইড অফিসে\' সরাসরি যান।',
          warning_bn: '১৬৪৩০ নম্বরটি দিন-রাত ২৪ ঘণ্টা সরকারিভাবে ফ্রি।',
          action_url: 'http://www.nlaso.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'বিনা খরচে আইনি পরামর্শ ও দরখাস্ত প্রদান',
          instruction_bn: 'লিগ্যাল এইড অফিসার আপনার অভিযোগ শুনে বিনামূল্যে আইনি পরামর্শ দেবেন এবং দরখাস্ত গ্রহণ করবেন।',
          warning_bn: 'পারিবারিক বা জমিজমা সংক্রান্ত বিরোধ হলে প্রথমে বিনা কোর্ট ফিতে আপস-মীমাংসা (ADR) করা হয়।',
          action_url: 'http://www.nlaso.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি আইনজীবী নিয়োগ ও মামলা পরিচালনা',
          instruction_bn: 'আপসে না মিললে সরকার আপনার পক্ষে লড়ার জন্য প্যানেল আইনজীবী নিযুক্ত করবে। আপনাকে উকিলের কোনো ফি বা কোর্ট ফি দিতে হবে না।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'http://www.nlaso.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: কোর্ট চত্বরে কোনো দালালের খপ্পরে পড়ে সর্বস্ব হারাবেন না। আপনি অসচ্ছল, প্রতিবন্ধী, দরিদ্র বা নির্যাতিত নারী হলে সরকার আপনার মামলার সমস্ত ব্যয়ভার বহন করবে।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি অফিসিয়াল পোর্টাল',
      source_url: 'http://www.nlaso.gov.bd'
    }
  ]
};
