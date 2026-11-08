import { ServiceRecord } from '../../types/service';

export const courtAffidavitNotaryPublicService: ServiceRecord = {
  id: 'court-affidavit-notary-public',
  slug: 'court-affidavit-notary-public',
  category_id: 'law_justice',
  name_bn: 'ম্যাজিস্ট্রেট কোর্ট হলফনামা ও নোটারি পাবলিক এফিডেভিট নির্দেশিকা',
  name_en: 'Magistrate Court Affidavit & Notary Public Legal Declaration Guide',
  responsible_ministry_bn: 'আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়',
  responsible_ministry_en: 'Law and Justice Division, Ministry of Law, Justice and Parliamentary Affairs',
  responsible_agency_bn: 'চিফ জুডিসিয়াল/মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত ও সরকার অনুমোদিত নোটারি পাবলিক',
  responsible_agency_en: 'Chief Judicial Magistrate Court & Government Authorized Notary Public',
  visiting_office_level: 'district',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '16430',
  grievance_channel: 'https://lawjusticediv.gov.bd',
  legal_basis: 'স্ট্যাম্প আইন ১৮৯৯ এবং নোটারি অধ্যাদেশ ১৯৬১',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'affidavit', language: 'en', weight: 1.0 },
    { alias: 'notary public', language: 'en', weight: 1.0 },
    { alias: 'holofnama', language: 'banglish', weight: 1.0 },
    { alias: 'court affidavit fee', language: 'banglish', weight: 1.0 },
    { alias: 'এফিডেভিট করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'ম্যাজিস্ট্রেট কোর্ট হলফনামা', language: 'bn', weight: 1.0 },
    { alias: 'নোটারি পাবলিক ফি কত', language: 'bn', weight: 1.0 },
    { alias: 'নাম সংশোধনের এফিডেভিট', language: 'bn', weight: 1.0 },
    { alias: '৩০০ টাকার স্ট্যাম্প হলফনামা', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'affidavit-standard-statutory',
      variant_name_bn: '৩০০ টাকার স্ট্যাম্পে আইনি হলফনামা ও নোটারি সম্পাদন',
      variant_name_en: 'Legal Affidavit Execution on 300 BDT Non-Judicial Stamp',
      conditions: { type: 'statutory_declaration' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'সরকারি নন-জুডিশিয়াল স্ট্যাম্প মূল্য',
          fee_type_en: 'Non-Judicial Stamp Statutory Cost',
          amount_bdt: 300,
          effective_date: '2020-01-01',
          notes_bn: 'স্ট্যাম্প ভেন্ডার থেকে ৩০০ টাকার সরকারি স্ট্যাম্প ক্রয়'
        },
        {
          fee_type_bn: 'নোটারি পাবলিক সরকারি প্রত্যয়ন ফি',
          fee_type_en: 'Notary Public Statutory Attestation Fee',
          amount_bdt: 100,
          effective_date: '2020-01-01',
          notes_bn: 'আইনানুযায়ী নোটারি ফি ৫০ থেকে ১০০ টাকা মাত্র'
        },
        {
          fee_type_bn: 'ম্যাজিস্ট্রেট কোর্ট ফি (যদি ১ম শ্রেণির ম্যাজিস্ট্রেট লাগে)',
          fee_type_en: 'Magistrate Court Fee',
          amount_bdt: 20,
          effective_date: '2020-01-01',
          notes_bn: 'কোর্টে হলফনামা দাখিলের সরকারি কোর্ট ফি ২০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'হলফকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন ডিজিটাল জন্ম সনদ',
          document_name_en: 'Deponent NID or digital birth certificate',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হলফকারীর পাসপোর্ট সাইজের স্পষ্ট রঙিন ছবি (১ কপি)',
          document_name_en: 'Passport size color photograph (1 copy)',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'নাম/বয়স বা তথ্যের সপক্ষে মূল প্রমাণপত্র (শিক্ষাগত সনদ, পাসপোর্ট ইত্যাদি)',
          document_name_en: 'Original supporting evidence for declaration',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: '৩০০ টাকার স্ট্যাম্পে হলফনামা ড্রাফট প্রস্তুত',
          instruction_bn: 'সরকারি ভেন্ডার থেকে ৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্প নিয়ে একজন আইনজীবীর মাধ্যমে হলফনামার সঠিক বক্তব্য টাইপ করান।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'নোটারি পাবলিক বা ম্যাজিস্ট্রেটের সামনে স্বাক্ষর',
          instruction_bn: 'হলফকারী নিজে সশরীরে উপস্থিত হয়ে নোটারি পাবলিক বা ১ম শ্রেণির ম্যাজিস্ট্রেটের সামনে সত্যপাঠ করে স্বাক্ষর ও ছবি সত্যায়িত করবেন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'নোটারি ভলিউম এন্ট্রি ও সিলমোহরযুক্ত হলফনামা গ্রহণ',
          instruction_bn: 'নোটারি রেজিস্টার খাতায় এন্ট্রি নম্বর ও তারিখ নিশ্চিত করে অফিসিয়াল সিলযুক্ত মূল এফিডেভিট গ্রহণ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'আদালতের সামনে মুহুরি বা দালালরা এফিডেভিট করার জন্য ১,০০০ থেকে ৩,০০০ টাকা দাবি করে। সরকারিভাবে ৩০০ টাকার স্ট্যাম্প এবং ১০০ টাকার নোটারি ফিতেই কাজ সম্পন্ন হয়। এনআইডি বা পাসপোর্টের বয়স ও নাম সংশোধনের জন্য নোটারির চেয়ে ১ম শ্রেণির ম্যাজিস্ট্রেট কোর্ট এফিডেভিট আইনগতভাবে অধিক গ্রহণযোগ্য।',
      content_en: 'A standard legal affidavit requires a 300 BDT non-judicial stamp and a nominal 50-100 BDT notary fee. For major NID/passport corrections, 1st class magistrate affidavits are legally superior.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'স্ট্যাম্প আইন এবং নোটারি অধ্যাদেশ ১৯৬১',
      source_url: 'https://lawjusticediv.gov.bd',
      published_date: '2020-01-01'
    }
  ]
};
