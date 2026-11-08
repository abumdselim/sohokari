import { ServiceRecord } from '../../types/service';

export const nationalUniversityCertificateService: ServiceRecord = {
  id: 'national-university-certificate',
  slug: 'national-university-certificate',
  category_id: 'higher_education',
  name_bn: 'জাতীয় বিশ্ববিদ্যালয় (NU) মূল সার্টিফিকেট, সাময়িক সনদ ও ট্রান্সক্রিপ্ট উত্তোলন',
  name_en: 'National University (NU) Certificate & Academic Transcript Issuance',
  responsible_ministry_bn: 'শিক্ষা মন্ত্রণালয় (মাধ্যমিক ও উচ্চশিক্ষা বিভাগ)',
  responsible_ministry_en: 'Ministry of Education (Secondary and Higher Education Division)',
  responsible_agency_bn: 'জাতীয় বিশ্ববিদ্যালয়, বাংলাদেশ (পরীক্ষা নিয়ন্ত্রণ দপ্তর)',
  responsible_agency_en: 'National University, Bangladesh (Office of Controller of Examinations)',
  visiting_office_level: 'district',
  official_portal_url: 'http://services.nu.ac.bd',
  helpline_number: '16122',
  grievance_channel: 'https://nu.ac.bd',
  legal_basis: 'জাতীয় বিশ্ববিদ্যালয় আইন ও পরীক্ষা নিয়ন্ত্রণ অধ্যাদেশ',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'national university certificate', language: 'en', weight: 1.0 },
    { alias: 'nu transcript', language: 'en', weight: 1.0 },
    { alias: 'nu certificate fee', language: 'banglish', weight: 1.0 },
    { alias: 'nu shonod tolar niyam', language: 'banglish', weight: 1.0 },
    { alias: 'জাতীয় বিশ্ববিদ্যালয় সার্টিফিকেট ফি', language: 'bn', weight: 1.0 },
    { alias: 'এনইউ ট্রান্সক্রিপ্ট উত্তোলনের নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'জাতীয় বিশ্ববিদ্যালয় মূল সনদ', language: 'bn', weight: 1.0 },
    { alias: 'সোনালী সেবায় এনইউ ফি জমা', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'nu-original-cert-transcript',
      variant_name_bn: 'সোনালী সেবায় অনলাইন আবেদন ও মূল সনদ/ট্রান্সক্রিপ্ট সংগ্রহ',
      variant_name_en: 'Online Application via Sonali Seba for Certificate & Transcript',
      conditions: { type: 'standard_issuance' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'মূল সার্টিফিকেট (Original Certificate) সরকারি ফি',
          fee_type_en: 'Original Certificate Government Fee',
          amount_bdt: 500,
          effective_date: '2021-01-01',
          notes_bn: 'সোনালী সেবায় পরিশোধযোগ্য'
        },
        {
          fee_type_bn: 'একাডেমিক ট্রান্সক্রিপ্ট (Academic Transcript) ফি',
          fee_type_en: 'Academic Transcript Fee',
          amount_bdt: 700,
          effective_date: '2021-01-01',
          notes_bn: 'সোনালী সেবায় পরিশোধযোগ্য'
        },
        {
          fee_type_bn: 'সাময়িক সনদ (Provisional Certificate) ফি',
          fee_type_en: 'Provisional Certificate Fee',
          amount_bdt: 300,
          effective_date: '2021-01-01',
          notes_bn: 'সোনালী সেবায় পরিশোধযোগ্য'
        }
      ],
      documents: [
        {
          document_name_bn: 'জাতীয় বিশ্ববিদ্যালয়ের রেজিস্ট্রেশন কার্ডের স্পষ্ট কপি',
          document_name_en: 'National University Registration Card copy',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সকল বর্ষের পরীক্ষার প্রবেশপত্রের কপি (Admit Cards)',
          document_name_en: 'Admit cards of all examination years',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'চূড়ান্ত ফলাফল বিবরণী / মার্কশিট প্রিন্ট কপি',
          document_name_en: 'Final result sheet / marksheet printout',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'National ID Card',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'services.nu.ac.bd পোর্টালে আবেদন ও পে-স্লিপ প্রিন্ট',
          instruction_bn: 'পোর্টালে রেজিস্ট্রেশন নম্বর দিয়ে মূল সনদ বা ট্রান্সক্রিপ্ট অপশন বেছে ফরম পূরণ করে সোনালী সেবা পে-স্লিপ ডাউনলোড করুন।'
        },
        {
          channel: 'bank',
          step_number: 2,
          title_bn: 'অনলাইনে বা ব্যাংকে ফি পরিশোধ',
          instruction_bn: 'যেকোনো সোনালী ব্যাংক শাখায় অথবা সোনালী ই-সেবা পোর্টালে বিকাশ বা কার্ড দিয়ে নির্ধারিত ফি পরিশোধ করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'সনদপত্র বা ট্রান্সক্রিপ্ট গ্রহণ',
          instruction_bn: 'এসএমএস পাওয়ার পর গাজীপুর মূল ক্যাম্পাস থেকে অথবা নিজ নিজ কলেজের মাধ্যমে কিউআর কোডযুক্ত মূল সনদপত্র সংগ্রহ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'জাতীয় বিশ্ববিদ্যালয়ের সনদ তোলার জন্য কলেজ সহকারী বা বাইরের দালালদের ৩,০০০-৫,০০০ টাকা দেবেন না। সম্পূর্ণ প্রক্রিয়াটি অনলাইনে সোনালী সেবার মাধ্যমে সরাসরি পরিচালনা করা যায়।',
      content_en: 'National University certificates require only statutory fees (500 BDT for original certificate, 700 BDT for transcript) paid via Sonali Seba.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'জাতীয় বিশ্ববিদ্যালয় অনলাইন সেবা নির্দেশিকা ও সিটিজেন চার্টার',
      source_url: 'http://services.nu.ac.bd',
      published_date: '2021-01-01'
    }
  ]
};
