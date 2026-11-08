import { ServiceRecord } from '../../types/service';

export const brtaDrivingLicenseService: ServiceRecord = {
  id: 'brta-driving-license',
  slug: 'brta-driving-license',
  category_id: 'transport_vehicles',
  name_bn: 'বিআরটিএ ড্রাইভিং লাইসেন্স (পেশাদার ও অপেশাদার)',
  name_en: 'BRTA Driving License (Professional & Non-Professional)',
  responsible_ministry_bn: 'সড়ক পরিবহন ও মহাসড়ক বিভাগ',
  responsible_ministry_en: 'Road Transport and Highways Division',
  responsible_agency_bn: 'বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)',
  responsible_agency_en: 'Bangladesh Road Transport Authority',
  visiting_office_level: 'district',
  official_portal_url: 'https://bsp.brta.gov.bd',
  helpline_number: '16107',
  grievance_channel: 'https://brta.gov.bd/site/view/citizen_charter',
  legal_basis: 'সড়ক পরিবহন আইন ২০১৮ ও মোটরযান বিধিমালা',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'driving license', language: 'en', weight: 1.0 },
    { alias: 'brta driving license', language: 'en', weight: 1.0 },
    { alias: 'driving license fee', language: 'banglish', weight: 1.0 },
    { alias: 'driving license kivabe korbo', language: 'banglish', weight: 1.0 },
    { alias: 'ড্রাইভিং লাইসেন্স', language: 'bn', weight: 1.0 },
    { alias: 'বিআরটিএ ড্রাইভিং লাইসেন্স ফি', language: 'bn', weight: 1.0 },
    { alias: 'লার্নার লাইসেন্স ফি', language: 'bn', weight: 1.0 },
    { alias: 'অপেশাদার ড্রাইভিং লাইসেন্স ফি', language: 'bn', weight: 1.0 },
    { alias: 'পেশাদার ড্রাইভিং লাইসেন্স ফি', language: 'bn', weight: 1.0 },
    { alias: 'driving license koto taka', language: 'banglish', weight: 0.95 }
  ],
  variants: [
    {
      id: 'brta-dl-non-professional',
      variant_name_bn: 'অপেশাদার স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (১০ বছর মেয়াদ)',
      variant_name_en: 'Non-Professional Smart Card Driving License (10 Years)',
      conditions: { type: 'non_professional', validity_years: 10 },
      processing_days_sla: 45,
      validity_years: 10,
      fees: [
        {
          fee_type_bn: 'লার্নার পারমিট ফি (এক ক্যাটাগরি)',
          fee_type_en: 'Learner Permit Fee (Single Category)',
          amount_bdt: 518,
          effective_date: '2021-01-01',
          notes_bn: 'BSP অনলাইনে পরিশোধযোগ্য (দুই ক্যাটাগরি হলে ৭৪৮ টাকা)'
        },
        {
          fee_type_bn: 'স্মার্ট কার্ড ড্রাইভিং লাইসেন্স ফি ও ১৫% ভ্যাট',
          fee_type_en: 'Smart Card License Fee & 15% VAT',
          amount_bdt: 4559,
          effective_date: '2021-01-01',
          notes_bn: 'পরীক্ষায় উত্তীর্ণ হওয়ার পর প্রদেয়'
        }
      ],
      documents: [
        {
          document_name_bn: 'রেজিস্টার্ড ডাক্তারের মেডিকেল সার্টিফিকেট (বিআরটিএ নির্ধারিত ফর্ম)',
          document_name_en: 'Medical Fitness Certificate by Registered Doctor',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'জাতীয় পরিচয়পত্র (NID) এর স্পষ্ট স্ক্যান কপি',
          document_name_en: 'National ID Card scan',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'ন্যূনতম ৮ম শ্রেণি বা সমমান পাসের শিক্ষাগত সনদ',
          document_name_en: 'Minimum Class 8 / JSC educational pass certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'বর্তমান ঠিকানার ইউটিলিটি বিলের স্ক্যান কপি',
          document_name_en: 'Utility Bill of Current Residence',
          format_requirement: 'digital_scan',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'BSP পোর্টালে রেজিস্ট্রেশন',
          instruction_bn: 'bsp.brta.gov.bd ওয়েবসাইটে গিয়ে ব্যক্তিগত মোবাইল নম্বর ও এনআইডি দিয়ে অ্যাকাউন্ট রেজিস্টার করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'লার্নার আবেদন ও ফি জমা',
          instruction_bn: 'ডাক্তারের সিলমোহরযুক্ত মেডিকেল ফর্ম ও ছবি আপলোড করে লার্নার ফি (৫১৮ টাকা) বিকাশ/নগদে পরিশোধ করে তাৎক্ষণিক লার্নার কার্ড প্রিন্ট নিন।'
        },
        {
          channel: 'office',
          step_number: 3,
          title_bn: 'পরীক্ষায় অংশগ্রহণ',
          instruction_bn: 'লার্নার কার্ডে নির্ধারিত তারিখে বিআরটিএ টেস্ট ভেন্যুতে লিখিত, মৌখিক ও প্র্যাকটিক্যাল ড্রাইভ পরীক্ষায় অংশ নিয়ে উত্তীর্ণ হন।'
        },
        {
          channel: 'office',
          step_number: 4,
          title_bn: 'বায়োমেট্রিক প্রদান ও কার্ড ডেলিভারি',
          instruction_bn: 'উত্তীর্ণ হওয়ার পর স্মার্ট কার্ড ফি জমা দিয়ে সার্কেল অফিসে ফিঙ্গারপ্রিন্ট দিন। স্মার্ট কার্ড ডাকযোগে ঠিকানায় পৌঁছাবে এবং ই-লাইসেন্স অনলাইনে পাওয়া যাবে।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'বিআরটিএ অফিসের সামনে কোনো দালালকে পরীক্ষা ছাড়া লাইসেন্স পাওয়ার জন্য টাকা দেবেন না। সমস্ত প্রক্রিয়া অনলাইন ও সিসিটিভি নিয়ন্ত্রিত। ভুয়া লাইসেন্স নিয়ে গাড়ি চালালে কঠোর আইনি ব্যবস্থা নেওয়া হয়।',
      content_en: 'Never pay brokers for test-free driving licenses. All tests and licensing records are strictly computerized.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'বিআরটিএ সিটিজেন চার্টার ও সেবা নির্দেশিকা',
      source_url: 'https://bsp.brta.gov.bd',
      published_date: '2021-01-01'
    }
  ]
};
