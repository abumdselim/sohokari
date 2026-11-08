import { ServiceRecord } from '../../types/service';

export const kaziMarriageRegistrationService: ServiceRecord = {
  id: 'kazi-marriage-registration',
  slug: 'kazi-marriage-registration',
  category_id: 'law_justice',
  name_bn: 'মুসলিম বিবাহ নিবন্ধন ও নিকাহনামা সরকারি কাজি ফি স্কেল',
  name_en: 'Muslim Marriage Registration & Official Kazi Fee Scale',
  responsible_ministry_bn: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'Law and Justice Division, Ministry of Law, Justice and Parliamentary Affairs',
  responsible_agency_bn: 'নিবন্ধন অধিদপ্তর ও সংশ্লিষ্ট নিকাহ ও তালাক রেজিস্ট্রার (কাজি) কার্যালয়',
  responsible_agency_en: 'Directorate of Registration & Nikah Registrar Office',
  visiting_office_level: 'pourashava',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '16430',
  grievance_channel: 'https://lawjusticediv.gov.bd/site/page/contact',
  legal_basis: 'মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা ২০০৯ (সংশোধিত ২০২২)',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'kazi marriage fee', language: 'en', weight: 1.0 },
    { alias: 'marriage registration fee', language: 'en', weight: 1.0 },
    { alias: 'biye registry fee', language: 'banglish', weight: 1.0 },
    { alias: 'kazi office fee', language: 'banglish', weight: 1.0 },
    { alias: 'kabin fee koto', language: 'banglish', weight: 1.0 },
    { alias: 'বিবাহ নিবন্ধন সরকারি ফি', language: 'bn', weight: 1.0 },
    { alias: 'কাজি অফিসের বিয়ের ফি', language: 'bn', weight: 1.0 },
    { alias: 'নিকাহনামা রেজিস্ট্রেশন ফি', language: 'bn', weight: 1.0 },
    { alias: 'দেনমোহর অনুযায়ী কাজি ফি', language: 'bn', weight: 1.0 },
    { alias: 'কাবিননামা করার নিয়ম', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'kazi-fee-standard-scale',
      variant_name_bn: 'দেনমোহর অনুযায়ী সরকারি নির্ধারিত কাজি ফি স্কেল',
      variant_name_en: 'Statutory Government Kazi Fee Scale by Dower',
      conditions: { type: 'statutory_scale' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'দেনমোহরের প্রতি ১,০০০ টাকায় কাজি ফি (৪ লাখ টাকা পর্যন্ত)',
          fee_type_en: 'Kazi Fee per 1,000 BDT Dower (Up to 400,000 BDT)',
          amount_bdt: 12.5,
          effective_date: '2022-01-01',
          notes_bn: '১.২৫% হার। যেমন: ১ লাখ টাকায় ১,২৫০ টাকা; ৪ লাখ টাকায় ৫,০০০ টাকা'
        },
        {
          fee_type_bn: '৪ লাখের অতিরিক্ত দেনমোহরে প্রতি লাখে ফি',
          fee_type_en: 'Kazi Fee per 100,000 BDT above 400,000 BDT',
          amount_bdt: 100,
          effective_date: '2022-01-01',
          notes_bn: '৪ লাখের বেশি যেকোনো পরিমাণের জন্য প্রতি লাখে মাত্র ১০০ টাকা'
        },
        {
          fee_type_bn: 'সর্বনিম্ন সরকারি বিবাহ নিবন্ধন ফি',
          fee_type_en: 'Minimum Marriage Registration Fee',
          amount_bdt: 200,
          effective_date: '2022-01-01',
          notes_bn: 'দেনমোহর যত কমই হোক ন্যূনতম ২০০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'বর ও কনের জাতীয় পরিচয়পত্র (NID) বা ডিজিটাল জন্ম সনদ (বয়স প্রমাণের জন্য)',
          document_name_en: 'NID or digital birth certificate of bride and groom',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বর ও কনের পাসপোর্ট সাইজের স্পষ্ট ছবি (প্রত্যেকের ২ কপি)',
          document_name_en: 'Passport size photographs (2 copies each)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'দুইজন সুস্থমস্তিষ্ক প্রাপ্তবয়স্ক পুরুষ সাক্ষী অথবা একজন পুরুষ ও দুইজন নারী সাক্ষীর এনআইডি',
          document_name_en: 'NID of witnesses (2 adult males or 1 male and 2 females)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'কনের অভিভাবক / উকিল বাবার এনআইডি কপি',
          document_name_en: 'NID copy of bride guardian / representative',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'বয়স ও পরিচয় যাচাই',
          instruction_bn: 'কনের বয়স ন্যূনতম ১৮ এবং বরের বয়স ন্যূনতম ২১ বছর হতে হবে। কাজি মূল এনআইডি বা জন্ম সনদ দেখে বালাম বইয়ে এন্ট্রি করবেন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'দেনমোহর নির্ধারণ ও সরকারি ফি পরিশোধ',
          instruction_bn: 'দেনমোহর অনুযায়ী সরকারি স্কেল মেনে হিসাব করুন। যেমন: দেনমোহর ১০ লাখ টাকা হলে মোট কাজি ফি মাত্র ৫,৬০০ টাকা (৪ লাখে ৫,০০০ + বাকি ৬ লাখে ৬০০)। রসিদ গ্রহণ করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'স্বাক্ষর ও সার্টিফাইড নিকাহনামা গ্রহণ',
          instruction_bn: 'সরকারি বালাম বইয়ে বর, কনে, উকিল বাবা ও সাক্ষীদের স্বাক্ষর প্রদান সম্পন্ন করে নিকাহনামার মূল কপি ও রসিদ সংগ্রহ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'কাজি অফিসগুলো সাধারণ মানুষের কাছে প্রায়ই ২০,০০০ থেকে ৫০,০০০ টাকা দাবি করে, যা সম্পূর্ণ বেআইনি। দেনমোহর ১০ লাখ টাকা হলেও মোট সরকারি ফি মাত্র ৫,৬০০ টাকা। কাজি রশিদ ছাড়া অতিরিক্ত অর্থ দাবি করলে সরাসরি জেলা জজ আদালতের জেলা রেজিস্ট্রার (District Registrar) বা দুদক ১০৬-এ অভিযোগ জানান।',
      content_en: 'Official marriage registration fee is strictly based on the government scale (12.5 BDT per 1,000 up to 4 Lakh, and 100 BDT per 1 Lakh thereafter). Extortion by Kazis is illegal and punishable.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'মুসলিম বিবাহ ও তালাক (নিবন্ধন) বিধিমালা ২০০৯ (সংশোধিত ২০২২)',
      source_url: 'https://lawjusticediv.gov.bd',
      published_date: '2022-01-01'
    }
  ]
};
