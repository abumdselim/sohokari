import { ServiceRecord } from '../../types/service';

export const nidCorrectionService: ServiceRecord = {
  id: 'nid-correction',
  slug: 'nid-correction',
  category_id: 'identity_civil',
  name_bn: 'জাতীয় পরিচয়পত্র (NID) তথ্য সংশোধন',
  name_en: 'National Identity (NID) Card Information Correction',
  responsible_ministry_bn: 'বাংলাদেশ নির্বাচন কমিশন',
  responsible_ministry_en: 'Bangladesh Election Commission',
  responsible_agency_bn: 'জাতীয় পরিচয় নিবন্ধন অনুবিভাগ (NID Wing)',
  responsible_agency_en: 'National Identity Registration Wing',
  visiting_office_level: 'upazila',
  official_portal_url: 'https://services.nidw.gov.bd',
  helpline_number: '105',
  grievance_channel: 'https://services.nidw.gov.bd/nid-pub/complain',
  legal_basis: 'জাতীয় পরিচয়পত্র নিবন্ধন বিধিমালা ২০১৪ (সংশোধিত ২০২০)',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Sohokari Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'nid correction', language: 'en', weight: 1.0 },
    { alias: 'nid songshodhon', language: 'banglish', weight: 1.0 },
    { alias: 'nid vul', language: 'banglish', weight: 1.0 },
    { alias: 'nid card er name vul', language: 'banglish', weight: 1.0 },
    { alias: 'nid shami name change', language: 'banglish', weight: 1.0 },
    { alias: 'জাতীয় পরিচয়পত্র সংশোধন', language: 'bn', weight: 1.0 },
    { alias: 'এনআইডি সংশোধন', language: 'bn', weight: 1.0 },
    { alias: 'ভোটার আইডি কার্ড সংশোধন', language: 'bn', weight: 1.0 },
    { alias: 'আইডি কার্ডে নাম ভুল', language: 'bn', weight: 1.0 },
    { alias: 'পিতার নাম সংশোধন এনআইডি', language: 'bn', weight: 1.0 },
    { alias: 'স্বামীর নাম যোগ এনআইডি', language: 'bn', weight: 1.0 },
    { alias: 'nid change', language: 'banglish', weight: 0.9 },
    { alias: 'voter id correction', language: 'en', weight: 0.9 },
    { alias: 'nid date of birth correction', language: 'en', weight: 0.9 },
    { alias: 'ভোটার কার্ড সংশোধন ফি', language: 'bn', weight: 0.9 }
  ],
  variants: [
    {
      id: 'nid-correction-info-1st',
      variant_name_bn: 'ব্যক্তিগত তথ্য সংশোধন (১ম বার)',
      variant_name_en: 'Personal Info Correction (1st Time)',
      conditions: { correction_count: 1, type: 'personal_info' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'মূল সরকারি ফি',
          fee_type_en: 'Government Fee',
          amount_bdt: 200,
          effective_date: '2020-07-01',
          gazette_reference: 'এস.আর.ও. নং- ২১২-আইন/২০২০'
        },
        {
          fee_type_bn: '১৫% ভ্যাট',
          fee_type_en: '15% VAT',
          amount_bdt: 30,
          effective_date: '2020-07-01'
        }
      ],
      documents: [
        {
          document_name_bn: 'এসএসসি / সমমানের শিক্ষাগত সনদের সত্যায়িত কপি',
          document_name_en: 'Attested copy of SSC / educational certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true,
          condition_description_bn: 'শিক্ষাগত যোগ্যতা থাকলে বাধ্যতামূলক'
        },
        {
          document_name_bn: 'অনলাইন জন্ম নিবন্ধন সনদ (বাংলা ও ইংরেজি)',
          document_name_en: 'Digital Birth Registration Certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'পাসপোর্ট / ড্রাইভিং লাইসেন্স (যদি থাকে)',
          document_name_en: 'Passport / Driving Licence (if available)',
          format_requirement: 'digital_scan',
          is_mandatory: false
        },
        {
          document_name_bn: 'নিকাহনামা / বিবাহ নিবন্ধন সনদ',
          document_name_en: 'Nikahnama / Marriage Certificate',
          format_requirement: 'digital_scan',
          is_mandatory: false,
          condition_description_bn: 'স্বামীর নাম যোগ বা সংশোধনের ক্ষেত্রে বাধ্যতামূলক'
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'NID পোর্টালে রেজিস্ট্রেশন ও লগইন',
          instruction_bn: 'services.nidw.gov.bd পোর্টালে প্রবেশ করে মোবাইল নম্বর ও এনআইডি নম্বর দিয়ে রেজিস্ট্রেশন করুন। NID Wallet অ্যাপের মাধ্যমে মুখমণ্ডল স্ক্যান করে ফেস ভেরিফিকেশন সম্পন্ন করুন।'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'সংশোধন অপশন নির্বাচন',
          instruction_bn: 'প্রোফাইল থেকে "এডিট" বা "সংশোধন" বাটনে ক্লিক করুন। যে তথ্য সংশোধন করতে চান (নাম, জন্মতারিখ, পিতা/মাতার নাম ইত্যাদি) টিক দিয়ে সঠিক তথ্য লিখুন।'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি ফি পরিশোধ',
          instruction_bn: 'বিকাশ, রকেট, নগদ বা সোনালী ব্যাংকের মাধ্যমে নির্ধারিত সরকারি ফি (২৩০ টাকা) পরিশোধ করুন। ট্রানজেকশন আইডি পোর্টালে স্বয়ংক্রিয়ভাবে যাচাই হবে।'
        },
        {
          channel: 'online_portal',
          step_number: 4,
          title_bn: 'প্রয়োজনীয় কাগজপত্র আপলোড ও সাবমিট',
          instruction_bn: 'শিক্ষাগত সনদ, জন্ম সনদ বা নিকাহনামার স্পষ্ট স্ক্যান কপি সংযুক্ত করে আবেদন ফাইনাল সাবমিট করুন এবং আবেদন ফর্মের প্রিন্ট কপি ডাউনলোড করে সংরক্ষণ করুন।'
        },
        {
          channel: 'office',
          step_number: 5,
          title_bn: 'উপজেলা নির্বাচন অফিসে শুনানি (প্রয়োজনে)',
          instruction_bn: 'গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে উপজেলা/থানা নির্বাচন কর্মকর্তা শুনানির জন্য ডাকলে মূল কাগজপত্রসহ উপস্থিত হতে হবে। অনুমোদন শেষে পোর্টাল থেকে নতুন সংশোধিত ডিজিটাল কপি ডাউনলোড করা যাবে।'
        }
      ]
    },
    {
      id: 'nid-correction-info-2nd',
      variant_name_bn: 'ব্যক্তিগত তথ্য সংশোধন (২য় বার)',
      variant_name_en: 'Personal Info Correction (2nd Time)',
      conditions: { correction_count: 2, type: 'personal_info' },
      processing_days_sla: 30,
      fees: [
        {
          fee_type_bn: 'মূল সরকারি ফি',
          fee_type_en: 'Government Fee',
          amount_bdt: 300,
          effective_date: '2020-07-01'
        },
        {
          fee_type_bn: '১৫% ভ্যাট',
          fee_type_en: '15% VAT',
          amount_bdt: 45,
          effective_date: '2020-07-01'
        }
      ],
      documents: [
        {
          document_name_bn: 'এসএসসি / শিক্ষাগত সনদ',
          document_name_en: 'Educational Certificate',
          format_requirement: 'digital_scan',
          is_mandatory: true
        },
        {
          document_name_bn: 'প্রথম শ্রেণির ম্যাজিস্ট্রেট কোর্টের এফিডেভিট',
          document_name_en: '1st Class Magistrate Court Affidavit',
          format_requirement: 'digital_scan',
          is_mandatory: true,
          condition_description_bn: 'দ্বিতীয়বার সংশোধনের ক্ষেত্রে আইনগত হলফনামা আবশ্যক'
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'অনলাইনে আবেদন ও ৩৪৫ টাকা ফি জমা',
          instruction_bn: 'NID পোর্টালে লগইন করে ৩৪৫ টাকা ফি প্রদানপূর্বক এফিডেভিট ও প্রমাণপত্র আপলোড করুন।'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: এনআইডি সংশোধনে সরকার নির্ধারিত ফি ১ম বারের জন্য মোট মাত্র ২৩০ টাকা (ভ্যাটসহ)। কোনো দালাল বা কম্পিউটার দোকানদারকে অতিরিক্ত টাকা দিবেন না। সকল ফি সরকারিভাবে মোবাইল ব্যাংকিংয়ে জমা হয় এবং রসিদ পাওয়া যায়।',
      content_en: 'Warning: Official fee for first-time NID correction is strictly 230 BDT (including 15% VAT). Never pay brokers extra money; all fees are paid directly via mobile banking with an instant receipt.'
    },
    {
      guidance_type: 'rejection_reason',
      content_bn: 'সাধারণ ভুল: শিক্ষাগত সনদের সাথে জন্ম সনদ বা বাবা-মায়ের এনআইডির অমিল থাকলে আবেদন স্থগিত হয়ে যায়। সব নথিতে নামের বানান যেন হুবহু এক থাকে তা নিশ্চিত করুন।',
      content_en: 'Common Mistake: Discrepancies between educational certificates and birth certificates will result in application rejection or inquiry.'
    }
  ],
  sources: [
    {
      source_type: 'citizens_charter',
      source_title: 'বাংলাদেশ নির্বাচন কমিশন সিটিজেন চার্টার ও এনআইডি সেবা নির্দেশিকা',
      source_url: 'https://services.nidw.gov.bd',
      circular_number: 'NIDW-CIRCULAR-2020/212',
      published_date: '2020-07-01'
    }
  ]
};
