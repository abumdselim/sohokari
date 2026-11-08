import { ServiceRecord } from '../../types/service';

export const duplicateAcademicCertificateService: ServiceRecord = {
  id: 'duplicate-academic-certificate',
  slug: 'duplicate-academic-certificate',
  category_id: 'education_boards',
  name_bn: 'হারানো এসএসসি/এইচএসসি মূল সার্টিফিকেট ও নম্বরপত্রের ডুপ্লিকেট কপি উত্তোলন',
  name_en: 'Duplicate Academic Certificate & Marksheet Issuance (SSC / HSC)',
  responsible_ministry_bn: 'শিক্ষা মন্ত্রণালয় (মাধ্যমিক ও উচ্চশিক্ষা বিভাগ)',
  responsible_ministry_en: 'Ministry of Education (Secondary and Higher Education Division)',
  responsible_agency_bn: 'সকল মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা, চট্টগ্রাম, রাজশাহী ইত্যাদি)',
  responsible_agency_en: 'Board of Intermediate and Secondary Education (BISE)',
  visiting_office_level: 'division',
  official_portal_url: 'https://dhakaeducationboard.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://moedu.gov.bd',
  legal_basis: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড আইন ও পরীক্ষা নীতিমালা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'duplicate certificate', language: 'en', weight: 1.0 },
    { alias: 'certificate harie geche', language: 'banglish', weight: 1.0 },
    { alias: 'duplicate marksheet', language: 'en', weight: 1.0 },
    { alias: 'shonod harale ki korbo', language: 'banglish', weight: 1.0 },
    { alias: 'হারানো সার্টিফিকেট উত্তোলনের নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'ডুপ্লিকেট সার্টিফিকেট ফি', language: 'bn', weight: 1.0 },
    { alias: 'এসএসসি সার্টিফিকেট হারিয়ে গেলে করণীয়', language: 'bn', weight: 1.0 },
    { alias: 'মার্কশিট উত্তোলনের সরকারি ফি', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'duplicate-cert-standard-board',
      variant_name_bn: 'শিক্ষা বোর্ড থেকে ডুপ্লিকেট মূল সার্টিফিকেট ও ট্রান্সক্রিপ্ট উত্তোলন',
      variant_name_en: 'Duplicate Original Certificate & Transcript from Board',
      conditions: { type: 'duplicate_copy' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'মূল সার্টিফিকেট ডুপ্লিকেট সরকারি ফি',
          fee_type_en: 'Duplicate Original Certificate Fee',
          amount_bdt: 600,
          effective_date: '2022-01-01',
          notes_bn: 'বোর্ড ভেদে ৫০০ থেকে ৮০০ টাকা (সোনালী সেবায় পরিশোধযোগ্য)'
        },
        {
          fee_type_bn: 'নম্বরপত্র / একাডেমিক ট্রান্সক্রিপ্ট ডুপ্লিকেট ফি',
          fee_type_en: 'Duplicate Marksheet / Transcript Fee',
          amount_bdt: 400,
          effective_date: '2022-01-01',
          notes_bn: 'সোনালী সেবায় পরিশোধযোগ্য'
        }
      ],
      documents: [
        {
          document_name_bn: 'থানায় করা সাধারণ ডায়েরির (GD) মূল সার্টিফাইড কপি',
          document_name_en: 'Original Police General Diary (GD) copy',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'দৈনিক জাতীয় পত্রিকায় প্রকাশিত হারানো বিজ্ঞপ্তির মূল কাটিং',
          document_name_en: 'Original newspaper clipping of lost certificate notice',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রবেশপত্র (Admit Card) বা রেজিস্ট্রেশন কার্ডের স্পষ্ট কপি',
          document_name_en: 'Admit Card or Registration Card photocopy',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম সনদ',
          document_name_en: 'Applicant NID or digital birth certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'থানায় জিডি ও পত্রিকায় বিজ্ঞপ্তি প্রকাশ',
          instruction_bn: 'নিকটস্থ থানায় গিয়ে রোল, রেজিস্ট্রেশন ও পাসের সাল উল্লেখ করে জিডি করুন এবং যেকোনো দৈনিক পত্রিকায় হারানো বিজ্ঞপ্তি দিন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'শিক্ষা বোর্ডের অনলাইন পোর্টালে সোনালী সেবায় ফি জমা',
          instruction_bn: 'সংশ্লিষ্ট বোর্ডের ওয়েবসাইটে গিয়ে ফরম পূরণ করে সোনালী সেবার মাধ্যমে নির্ধারিত ৬০০ টাকা ফি পরিশোধ করে রসিদ ডাউনলোড করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'বোর্ড থেকে নতুন মূল সার্টিফিকেট সংগ্রহ',
          instruction_bn: 'জিডির কপি, পত্রিকার কাটিং ও পেমেন্ট রসিদসহ বোর্ডের সার্টিফিকেট শাখায় জমা দিয়ে অনুমোদনের পর নতুন ডুপ্লিকেট মূল সার্টিফিকেট বুঝে নিন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'শিক্ষা বোর্ডের গেটে দালালরা সার্টিফিকেট তুলে দেওয়ার নামে ৩,০০০ থেকে ৮,০০০ টাকা পর্যন্ত দাবি করে। সরকারি ফি মাত্র ৬০০ টাকা এবং পুরো আবেদনটি ঘরে বসে অনলাইনে সোনালী সেবায় দেওয়া যায়। দালালদের সম্পূর্ণ পরিহার করুন।',
      content_en: 'Official duplicate certificate fee is strictly 600 BDT via Sonali Seba. Never pay education board brokers.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড ঢাকা সিটিজেন চার্টার',
      source_url: 'https://dhakaeducationboard.gov.bd',
      published_date: '2022-01-01'
    }
  ]
};
