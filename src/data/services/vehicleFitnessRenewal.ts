import { ServiceRecord } from '../../types/service';

export const vehicleFitnessRenewalService: ServiceRecord = {
  id: 'vehicle-fitness-renewal',
  slug: 'vehicle-fitness-renewal',
  category_id: 'transport_vehicles',
  name_bn: 'বিআরটিএ মোটরযান ফিটনেস সনদ নবায়ন ও ফি নির্দেশিকা',
  name_en: 'BRTA Motor Vehicle Fitness Certificate Renewal & Official Fees',
  responsible_ministry_bn: 'সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_ministry_en: 'Road Transport and Highways Division',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_en: 'Bangladesh Road Transport Authority',
  visiting_office_level: 'district',
  official_portal_url: 'https://bsp.brta.gov.bd',
  helpline_number: '16107',
  grievance_channel: 'https://brta.gov.bd',
  legal_basis: 'সড়ক পরিবহন আইন ২০১৮ এবং বাংলাদেশ মোটরযান বিধিমালা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'vehicle fitness fee', language: 'en', weight: 1.0 },
    { alias: 'car fitness renewal', language: 'en', weight: 1.0 },
    { alias: 'fitness renewal fee', language: 'banglish', weight: 1.0 },
    { alias: 'gari fitness fee', language: 'banglish', weight: 1.0 },
    { alias: 'ফিটনেস নবায়ন ফি', language: 'bn', weight: 1.0 },
    { alias: 'বিআরটিএ ফিটনেস ফি', language: 'bn', weight: 1.0 },
    { alias: 'গাড়ির ফিটনেস করার নিয়ম', language: 'bn', weight: 1.0 },
    { alias: 'মোটরযান ফিটনেস সার্টিফিকেট', language: 'bn', weight: 1.0 },
    { alias: 'প্রাইভেট কার ফিটনেস ফি', language: 'bn', weight: 1.0 }
  ],
  variants: [
    {
      id: 'fitness-renewal-private-car',
      variant_name_bn: 'প্রাইভেট কার ও জিপের বাৎসরিক ফিটনেস নবায়ন',
      variant_name_en: 'Annual Fitness Renewal for Private Car & Jeep',
      conditions: { vehicle_type: 'car_jeep' },
      processing_days_sla: 1,
      fees: [
        {
          fee_type_bn: 'মোটরকার (১৫০০ সিসি পর্যন্ত) ফিটনেস ফি ও ১৫% ভ্যাট',
          fee_type_en: 'Motor Car (Up to 1500cc) Fitness Fee & VAT',
          amount_bdt: 1179,
          effective_date: '2021-01-01',
          notes_bn: 'মূল ফি ১,০২৫ টাকা + ১৫% ভ্যাট ১৫৪ টাকা = ১,১৭৯ টাকা'
        },
        {
          fee_type_bn: 'মাইক্রোবাস ও জিপ ফিটনেস ফি ও ১৫% ভ্যাট',
          fee_type_en: 'Microbus & Jeep Fitness Fee & VAT',
          amount_bdt: 1725,
          effective_date: '2021-01-01',
          notes_bn: 'মূল ফি ১,৫০০ টাকা + ১৫% ভ্যাট ২২৫ টাকা = ১,৭২৫ টাকা'
        }
      ],
      documents: [
        {
          document_name_bn: 'পূর্ববর্তী মূল ফিটনেস সনদের মূল কপি',
          document_name_en: 'Original previous fitness certificate',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'হালনাগাদ ট্যাক্স টোকেনের মূল কপি ও ফটোকপি',
          document_name_en: 'Up-to-date Tax Token copy',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'মোটরযানের ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড)',
          document_name_en: 'Motor Vehicle Digital Registration Smart Card',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'ফিটনেস ফি জমার অনলাইন ব্যাংক রসিদ বা এ-চালান',
          document_name_en: 'Bank / A-Challan payment receipt for fitness fee',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'bsp.brta.gov.bd পোর্টালে ফি পরিশোধ ও সময় বুকিং',
          instruction_bn: 'বিআরটিএ সার্ভিস পোর্টালে গাড়ি রেজিস্ট্রেশন নম্বর দিন। নির্ধারিত ফি অনলাইনে পরিশোধ করে গাড়ি পরিদর্শনের (VIC) তারিখ নির্বাচন করুন।'
        },
        {
          channel: 'office',
          step_number: 2,
          title_bn: 'বিআরটিএ সার্কেলে গাড়ি নিয়ে পরিদর্শন সম্পন্ন করা',
          instruction_bn: 'নির্ধারিত দিনে গাড়ি নিয়ে বিআরটিএ টেস্টিং গ্রাউন্ডে যান। মোটরযান পরিদর্শক ব্রেক, লাইট, টায়ার, এমিশন ও ইঞ্জিন চেসিস নম্বর যাচাই করবেন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'ডিজিটাল ফিটনেস সনদপত্র গ্রহণ',
          instruction_bn: 'টেস্টে পাস করার সাথে সাথে পরিদর্শক সিস্টেমের মাধ্যমে অনুমোদন দেবেন এবং নতুন ১ বছর মেয়াদি ডিজিটাল ফিটনেস সার্টিফিকেট সাথে সাথে প্রদান করা হবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'বিআরটিএ অফিসের সামনে দালালরা ফিটনেস ফেল করানোর ভীতি দেখিয়ে ৫,০০০ থেকে ১০,০০০ টাকা দাবি করে। গাড়ির হেডলাইট, ব্রেক, হর্ন, লুকিং গ্লাস ও টায়ার ঠিক থাকলে কোনো সমস্যা ছাড়াই নির্ধারিত সরকারি ফি (মাত্র ১,১৭৯–১,৭২৫ টাকা) দিয়ে নিজেই আধা ঘণ্টায় কাজ শেষ করতে পারবেন। দালালদের সম্পূর্ণ এড়িয়ে চলুন।',
      content_en: 'Never hire brokers for vehicle fitness. If vehicle lights, brakes, and safety mechanisms are functional, fitness certificate is issued directly upon paying the official fee of 1,179 - 1,725 BDT.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'বিআরটিএ মোটরযান ফিটনেস ও সিটিজেন চার্টার নির্দেশিকা',
      source_url: 'https://bsp.brta.gov.bd',
      published_date: '2021-01-01'
    }
  ]
};
