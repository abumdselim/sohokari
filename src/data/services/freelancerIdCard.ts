import { ServiceRecord } from '../../types/service';

export const freelancerIdCardService: ServiceRecord = {
  id: 'freelancer-id-card',
  slug: 'freelancer-id-card',
  category_id: 'ict_freelancing',
  name_bn: 'আইটি ফ্রিল্যান্সার আইডি কার্ড ও সরকারি ৪% নগদ সহায়তা গাইড',
  name_en: 'IT Freelancer ID Card & 4% Government Cash Incentive Guide',
  responsible_ministry_bn: 'ডাক, টেলিযোগাযোগ ও তথ্যপ্রযুক্তি মন্ত্রণালয় (আইসিটি বিভাগ)',
  responsible_ministry_en: 'Ministry of Posts, Telecommunications and Information Technology (ICT Division)',
  responsible_agency_bn: 'বাংলাদেশ ফ্রিল্যান্সার ডেভেলপমেন্ট ট্রাস্ট (BFDT) ও বাংলাদেশ কম্পিউটার কাউন্সিল',
  responsible_agency_en: 'Bangladesh Freelancer Development Trust & Bangladesh Computer Council',
  visiting_office_level: 'none',
  official_portal_url: 'https://freelancers.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://ictd.gov.bd',
  legal_basis: 'তথ্য ও যোগাযোগ প্রযুক্তি নীতিমালা এবং জাতীয় ফ্রিল্যান্সার ডাটাবেজ গাইডলাইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'freelancer id card', language: 'en', weight: 1.0 },
    { alias: 'freelancer card', language: 'banglish', weight: 1.0 },
    { alias: 'freelancer card kivabe banabo', language: 'banglish', weight: 1.0 },
    { alias: 'freelancer incentive', language: 'en', weight: 1.0 },
    { alias: 'ফ্রিল্যান্সার আইডি কার্ড', language: 'bn', weight: 1.0 },
    { alias: 'ফ্রিল্যান্সার কার্ড করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'ফ্রিল্যান্সিং নগদ প্রণোদনা', language: 'bn', weight: 1.0 },
    { alias: 'সরকারি ফ্রিল্যান্সার পরিচয়পত্র', language: 'bn', weight: 1.0 },
    { alias: 'ফ্রিল্যান্সার কার্ডের ফি কত', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'freelancer-id-annual-issuance',
      variant_name_bn: 'বাৎসরিক ফ্রিল্যান্সার স্মার্ট ডিজিটাল আইডি কার্ড ইস্যু',
      variant_name_en: 'Annual Freelancer Smart Digital ID Card Issuance',
      conditions: { type: 'annual_issuance' },
      processing_days_sla: 15,
      fees: [
        {
          fee_type_bn: 'বাৎসরিক প্ল্যাটফর্ম ও স্মার্ট কার্ড সরকারি ফি',
          fee_type_en: 'Annual Platform & Smart Card Government Fee',
          amount_bdt: 1500,
          effective_date: '2020-11-01',
          notes_bn: 'অনলাইন পেমেন্ট গেটওয়েতে পরিশোধযোগ্য (১ বছর মেয়াদি)'
        }
      ],
      documents: [
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) এর স্পষ্ট স্ক্যান কপি',
          document_name_en: 'Scanned copy of National Identity Card (NID)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'মার্কেটপ্লেস প্রোফাইল (Upwork, Fiverr ইত্যাদি) বা ডিরেক্ট ক্লায়েন্ট কন্ট্রাক্ট লিঙ্ক',
          document_name_en: 'Marketplace Profile URL (Upwork/Fiverr) or Direct Client Contract',
          format_requirement: 'digital_scan',
          is_mandatory: true,
          condition_description_bn: 'পূর্ববর্তী ১২ মাসে ন্যূনতম ১,০০০ ডলার বা সমপরিমাণ বৈদেশিক আয়ের রেকর্ড থাকতে হবে'
        },
        {
          document_name_bn: 'ফরেন ইনওয়ার্ড রেমিট্যান্স সার্টিফিকেট (FIRC) বা ব্যাংক স্টেটমেন্ট',
          document_name_en: 'Foreign Inward Remittance Certificate (FIRC) or Bank Statement',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট সাইজের স্পষ্ট ডিজিটাল ছবি',
          document_name_en: 'Passport size digital photograph',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'freelancers.gov.bd পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'পোর্টালে প্রবেশ করে ব্যক্তিগত মোবাইল, ইমেইল ও এনআইডি নম্বর দিয়ে অ্যাকাউন্ট খুলুন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'কাজের তথ্য ও ব্যাংক স্টেটমেন্ট আপলোড',
          instruction_bn: 'মার্কেটপ্লেসের প্রোফাইল লিঙ্ক ও ব্যাংক অ্যাকাউন্টে ডলার আসার স্টেটমেন্ট সংযুক্ত করে ১,৫০০ টাকা ফি অনলাইনে পরিশোধ করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'যাচাই ও ডিজিটাল কিউআর কোডযুক্ত কার্ড গ্রহণ',
          instruction_bn: 'আইসিটি বিভাগের নিরীক্ষা টিম তথ্য যাচাই করে অনুমোদন দিলে তাৎক্ষণিক ভার্চুয়াল আইডি কার্ড ও ডাকযোগে ফিজিক্যাল স্মার্ট কার্ড পাঠানো হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'ফ্রিল্যান্সার কার্ড পাওয়ার জন্য কোনো থার্ড পার্টি বা দালালের আশ্রয় নেবেন না। এই কার্ডের মাধ্যমে ব্যাংক থেকে পার্সোনাল লোন, ক্রেডিট কার্ড, বিদেশের ভিসা আবেদন এবং সরকারি ৪% নগদ ক্যাশ ইনসেন্টিভ দাবি করা যায়।',
      content_en: 'Freelancer ID cards provide official proof of profession for bank loans, visas, and claiming 4% export cash incentives.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'আইসিটি বিভাগ জাতীয় ফ্রিল্যান্সার ডাটাবেজ নির্দেশিকা',
      source_url: 'https://freelancers.gov.bd',
      published_date: '2020-11-01'
    }
  ]
};
