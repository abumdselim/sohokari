import { ServiceRecord } from '../../types/service';

export const crCaseMagistrateCourtFilingService: ServiceRecord = {
  id: 'bd-cr-case-magistrate-court-filing',
  slug: 'bd-cr-case-magistrate-court-filing',
  category_id: 'law_police',
  name_bn: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা',
  name_en: 'Magistrate Court Direct CR Complaint Case Filing Official Guide',
  responsible_ministry_bn: 'চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত',
  responsible_ministry_en: 'চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত',
  responsible_agency_bn: 'চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত',
  responsible_agency_en: 'চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://lawjusticediv.gov.bd',
  helpline_number: '333',
  grievance_channel: 'https://lawjusticediv.gov.bd',
  legal_basis: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'magistrate court direct cr complaint case filing official guide', language: 'en', weight: 1.0 },
    { alias: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের', language: 'bn', weight: 0.95 },
    { alias: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের ফি', language: 'bn', weight: 0.95 },
    { alias: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'cr case magistrate court filing', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-cr-case-magistrate-court-filing-standard',
      variant_name_bn: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Magistrate Court Direct CR Complaint Case Filing Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 7,
      fees: [
        {
          fee_type_bn: 'সিআর মামলা নালিশি আরজি কোর্ট ফি',
          fee_type_en: 'সিআর মামলা নালিশি আরজি কোর্ট ফি',
          amount_bdt: 200.0,
          effective_date: '2022-01-01',
          notes_bn: 'ম্যাজিস্ট্রেট আদালতে নালিশি মামলার নির্ধারিত কোর্ট ফি মাত্র ২০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'লিখিত নালিশি দরখাস্ত (আরজি) - যাতে ঘটনার তারিখ, সময় ও সাক্ষীদের তালিকা থাকবে',
          document_name_en: 'লিখিত নালিশি দরখাস্ত (আরজি) - যাতে ঘটনার তারিখ, সময় ও সাক্ষীদের তালিকা থাকবে',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'বাদী ও সাক্ষীদের জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'বাদী ও সাক্ষীদের জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'অপরাধের প্রমাণপত্র (মেডিকেল সার্টিফিকেট, অডিও, ভিডিও, ছবি, দলিলের কপি ইত্যাদি)',
          document_name_en: 'অপরাধের প্রমাণপত্র (মেডিকেল সার্টিফিকেট, অডিও, ভিডিও, ছবি, দলিলের কপি ইত্যাদি)',
          format_requirement: 'photocopy',
          is_mandatory: false
        },
        {
          document_name_bn: 'থানায় মামলা করতে যাওয়ার বিবরণ বা থানায় সাধারণ ডায়েরির (GD) অনুলিপি',
          document_name_en: 'থানায় মামলা করতে যাওয়ার বিবরণ বা থানায় সাধারণ ডায়েরির (GD) অনুলিপি',
          format_requirement: 'photocopy',
          is_mandatory: false
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'বিজ্ঞ আইনজীবীর মাধ্যমে বা লিগ্যাল এইড দিয়ে আরজি প্রস্তুত',
          instruction_bn: 'অভিযোগের বিস্তারিত উল্লেখ করে জুডিশিয়াল ম্যাজিস্ট্রেট আদালত বরাবর আরজি ড্রাফট করুন (অসচ্ছল হলে লিগ্যাল এইড ১৬৪৩০ থেকে ফ্রি আইনজীবী নিন)।',
          warning_bn: 'ঘটনার তারিখ ও অপরাধের স্থান নির্ভুল থাকতে হবে।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'ম্যাজিস্ট্রেটের খাস কামরা বা এজলাসে জবানবন্দি প্রদান (২০০ ধারা)',
          instruction_bn: 'ম্যাজিস্ট্রেট বাদীর জবানবন্দি নিজে লিখে নেবেন এবং বাদীর স্বাক্ষর গ্রহণ করবেন।',
          warning_bn: 'সত্য ঘটনা নির্ভয়ে বিচারকের সামনে বলুন।',
          action_url: 'https://lawjusticediv.gov.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'আদালতের আদেশ (তদন্ত বা সমন জারি)',
          instruction_bn: 'ম্যাজিস্ট্রেট সন্তুষ্ট হলে আসামির বিরুদ্ধে সমন/গ্রেপ্তারি পরোয়ানা জারি করবেন কিংবা থানাকে এজাহার হিসেবে গণ্য করতে বা পিবিআইকে তদন্তের নির্দেশ দেবেন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://lawjusticediv.gov.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: থানা মামলা না নিলেও আপনার ন্যায়বিচার পাওয়ার পথ বন্ধ হয় না। কোনো মধ্যস্থতাকারীকে টাকা না দিয়ে সোজা আদালতে গিয়ে ২০০ টাকার কোর্ট ফি দিয়ে সিআর মামলা দায়ের করুন।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://lawjusticediv.gov.bd'
    }
  ]
};
