import { ServiceRecord } from '../../types/service';

export const landMutationAppealMissCaseService: ServiceRecord = {
  id: 'land-mutation-appeal-miss-case',
  slug: 'land-mutation-appeal-miss-case',
  category_id: 'land_property',
  name_bn: 'ভুয়া নামজারি বাতিল ও মিস কেস / এডিসি (রেভিনিউ) আদালতে আপিল নির্দেশিকা',
  name_en: 'Illegal Land Mutation Cancellation & Appeal Miss Case before ADC Revenue',
  responsible_ministry_bn: 'ভূমি মন্ত্রণালয়',
  responsible_ministry_en: 'Ministry of Land',
  responsible_agency_bn: 'জেলা প্রশাসন (অতিরিক্ত জেলা প্রশাসক - রাজস্ব / ADC Revenue)',
  responsible_agency_en: 'District Administration (Additional Deputy Commissioner - Revenue)',
  visiting_office_level: 'district',
  official_portal_url: 'https://land.gov.bd',
  helpline_number: '16122',
  grievance_channel: 'https://land.gov.bd',
  legal_basis: 'রাষ্ট্রীয় অধিগ্রহণ ও প্রজাস্বত্ব আইন ১৯৫০ এর ১৫০ ধারা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'namjari miss case', language: 'banglish', weight: 1.0 },
    { alias: 'mutation appeal', language: 'en', weight: 1.0 },
    { alias: 'vua namjari batil', language: 'banglish', weight: 1.0 },
    { alias: 'adc revenue appeal', language: 'banglish', weight: 1.0 },
    { alias: 'নামজারি মিস কেস করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'ভুয়া নামজারি বাতিল', language: 'bn', weight: 1.0 },
    { alias: 'এডিসি রেভিনিউ আদালতে আপিল', language: 'bn', weight: 1.0 },
    { alias: 'খারিজ বাতিলের নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'নামজারি আপিল ফি কত', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'mutation-appeal-adc-revenue',
      variant_name_bn: 'এডিসি (রেভিনিউ) আদালতে নামজারি আদেশের বিরুদ্ধে আপিল মিস কেস',
      variant_name_en: 'Appeal Miss Case against Mutation Order before ADC Revenue',
      conditions: { type: 'statutory_appeal' },
      processing_days_sla: 60,
      fees: [
        {
          fee_type_bn: 'আপিল পিটিশন কোর্ট ফি (Court Fee)',
          fee_type_en: 'Appeal Petition Court Fee',
          amount_bdt: 20,
          effective_date: '2021-01-01',
          notes_bn: 'আইনত নির্ধারিত কোর্ট ফি মাত্র ২০ টাকা'
        },
        {
          fee_type_bn: 'প্রতিপক্ষের প্রতি সমন ও নোটিশ জারি ফি',
          fee_type_en: 'Notice Issuance Process Fee',
          amount_bdt: 50,
          effective_date: '2021-01-01',
          notes_bn: 'নোটিশ জারি ফি ৫০ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'সহকারী কমিশনার (ভূমি) প্রদত্ত বিতর্কিত নামজারি আদেশের সার্টিফাইড নকল কপি',
          document_name_en: 'Certified copy of impugned AC Land mutation order',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আপিলকারীর মূল রেজিস্ট্রিকৃত দলিল ও বায়া দলিলের কপি',
          document_name_en: 'Original registered deed & chain deeds',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'সিএস, এসএ, আরএস ও হাল বিএস খতিয়ানের স্পষ্ট কপি',
          document_name_en: 'CS, SA, RS and BS Khatiyan copies',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'হাল সন পর্যন্ত ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা',
          document_name_en: 'Up-to-date Land Development Tax receipt (Dakhila)',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'office',
          step_number: 1,
          title_bn: 'এসিল্যান্ড আদেশের সার্টিফাইড নকল সংগ্রহ',
          instruction_bn: 'সহকারী কমিশনার (ভূমি) অফিস বা ডিসি রেকর্ড রুম থেকে বিতর্কিত নামজারি মঞ্জুর বা বাতিলের আদেশের নকল কপি তুলুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: '৩০ দিনের মধ্যে এডিসি রেভিনিউ আদালতে আপিল পিটিশন দাখিল',
          instruction_bn: 'আদেশ পাওয়ার ৩০ দিনের মধ্যে অতিরিক্ত জেলা প্রশাসক (রাজস্ব)-এর আদালতে ২০ টাকার কোর্ট ফি দিয়ে আপিল মিস কেস দায়ের করুন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'শুনানি ও ভুয়া নামজারি বাতিলের আদেশ গ্রহণ',
          instruction_bn: 'এডিসি রেভিনিউ আদালতে উভয় পক্ষের শুনানিতে মূল দলিল ও রেকর্ড প্রদর্শন করে অবৈধ নামজারি বাতিলের আনুষ্ঠানিক আদেশ লাভ করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'কেউ গোপনে আপনার জমি নামজারি করে ফেললে আতঙ্কিত হবেন না এবং ভূমি অফিসের দালালদের লাখ লাখ টাকা দেবেন না। এসিল্যান্ডের আদেশের বিরুদ্ধে অতিরিক্ত জেলা প্রশাসক (এডিসি রেভিনিউ) আদালতে মাত্র ২০ টাকার কোর্ট ফি দিয়ে আপিল মিস কেস দায়ের করে ভুয়া নামজারি বাতিল করানো যায়।',
      content_en: 'Fraudulent land mutations can be cancelled by filing a statutory Appeal Miss Case before the Additional Deputy Commissioner (Revenue) within 30 days.'
    }
  ],
  sources: [
    {
      source_type: 'gazette',
      source_title: 'রাষ্ট্রীয় অধিগ্রহণ ও প্রজাস্বত্ব আইন ১৯৫০ ও ভূমি আপিল নির্দেশিকা',
      source_url: 'https://land.gov.bd',
      published_date: '2021-01-01'
    }
  ]
};
