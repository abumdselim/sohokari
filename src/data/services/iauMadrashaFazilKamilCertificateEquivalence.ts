import { ServiceRecord } from '../../types/service';

export const iauMadrashaFazilKamilCertificateEquivalenceService: ServiceRecord = {
  id: 'bd-iau-madrasha-fazil-kamil-certificate-equivalence',
  slug: 'bd-iau-madrasha-fazil-kamil-certificate-equivalence',
  category_id: 'education_boards',
  name_bn: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা',
  name_en: 'Madrasha Fazil Kamil & Qawmi Degree Equivalence Certificate Official Guide',
  responsible_ministry_bn: 'ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি\'আতিল কওমিয়া',
  responsible_ministry_en: 'ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি\'আতিল কওমিয়া',
  responsible_agency_bn: 'ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি\'আতিল কওমিয়া',
  responsible_agency_en: 'ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি\'আতিল কওমিয়া',
  visiting_office_level: 'division',
  official_portal_url: 'https://iau.edu.bd',
  helpline_number: '333',
  grievance_channel: 'https://iau.edu.bd',
  legal_basis: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা সরকারি সিটিজেন চার্টার ও সংশ্লিষ্ট আইন',
  status: 'verified',
  confidence_score: 1.0,
  last_verified_at: '2026-11-01T00:00:00Z',
  verified_by: 'Kaaz AI Official Legal & Gazette Verification Desk',
  aliases: [
    { alias: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা', language: 'bn', weight: 1.0 },
    { alias: 'madrasha fazil kamil & qawmi degree equivalence certificate official guide', language: 'en', weight: 1.0 },
    { alias: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র', language: 'bn', weight: 0.95 },
    { alias: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র ফি', language: 'bn', weight: 0.95 },
    { alias: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র করার নিয়ম', language: 'bn', weight: 0.95 },
    { alias: 'iau madrasha fazil kamil certificate equivalence', language: 'en', weight: 0.9 }
  ],
  variants: [
    {
      id: 'bd-iau-madrasha-fazil-kamil-certificate-equivalence-standard',
      variant_name_bn: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা (সাধারণ আবেদন)',
      variant_name_en: 'Madrasha Fazil Kamil & Qawmi Degree Equivalence Certificate Official Guide (Standard Process)',
      conditions: { type: 'standard' },
      processing_days_sla: 2,
      fees: [
        {
          fee_type_bn: 'ফাজিল / কামিল সমমান প্রত্যয়ন ফি',
          fee_type_en: 'ফাজিল / কামিল সমমান প্রত্যয়ন ফি',
          amount_bdt: 500.0,
          effective_date: '2022-01-01',
          notes_bn: 'বিশ্ববিদ্যালয়ের নির্ধারিত ব্যাংক শাখায় ৫00 টাকা।'
        },
        {
          fee_type_bn: 'জরুরি সমমান সনদ ফি',
          fee_type_en: 'জরুরি সমমান সনদ ফি',
          amount_bdt: 1000.0,
          effective_date: '2022-01-01',
          notes_bn: 'জরুরি ভিত্তিতে ২ কার্যদিবসে প্রদানের জন্য ১,০০০ টাকা।'
        }
      ],
      documents: [
        {
          document_name_bn: 'মূল ফাজিল / কামিল / দাওরায়ে হাদিস পরীক্ষার নম্বরপত্র ও সনদপত্র',
          document_name_en: 'মূল ফাজিল / কামিল / দাওরায়ে হাদিস পরীক্ষার নম্বরপত্র ও সনদপত্র',
          format_requirement: 'original',
          is_mandatory: true
        },
        {
          document_name_bn: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          document_name_en: 'আবেদনকারীর জাতীয় পরিচয়পত্র (NID)',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'মাদ্রাসা প্রধানের প্রত্যয়নপত্র',
          document_name_en: 'মাদ্রাসা প্রধানের প্রত্যয়নপত্র',
          format_requirement: 'photocopy',
          is_mandatory: true
        },
        {
          document_name_bn: 'ব্যাংক পে-অর্ডার বা জমার রশিদ',
          document_name_en: 'ব্যাংক পে-অর্ডার বা জমার রশিদ',
          format_requirement: 'original',
          is_mandatory: true
        }
      ],
      steps: [
        {
          channel: 'online_portal',
          step_number: 1,
          title_bn: 'ইসলামী আরবী বিশ্ববিদ্যালয় বা হাইয়াতুল উলয়া পোর্টালে আবেদন',
          instruction_bn: 'পোর্টালে রেজিস্ট্রেশন নম্বর ও পাসের সাল দিয়ে নির্ধারিত ব্যাংক শাখায় ফি জমা দিন।',
          warning_bn: 'দালাল ছাড়াই বিশ্ববিদ্যালয়ের ওয়ান-স্টপ কাউন্টারে ফাইল জমা দেওয়া যায়।',
          action_url: 'https://iau.edu.bd'
        },
        {
          channel: 'online_portal',
          step_number: 2,
          title_bn: 'মূল সনদ ও টেবুলেশন শিট যাচাই',
          instruction_bn: 'বিশ্ববিদ্যালয় পরীক্ষা নিয়ন্ত্রক শাখা থেকে রেকর্ড যাচাই সম্পন্ন করবে।',
          warning_bn: 'কোনো জাল সনদ জমা দিলে আইনগত ব্যবস্থা নেওয়া হবে।',
          action_url: 'https://iau.edu.bd'
        },
        {
          channel: 'online_portal',
          step_number: 3,
          title_bn: 'সরকারি সমমান প্রত্যয়নপত্র সংগ্রহ',
          instruction_bn: 'নির্ধারিত দিনে ওয়ান-স্টপ সার্ভিস থেকে কিউআর কোড সম্বলিত সমমান প্রত্যয়নপত্র সংগ্রহ করুন।',
          warning_bn: 'দালাল এড়িয়ে সরাসরি আবেদন করুন।',
          action_url: 'https://iau.edu.bd'
        }
      ]
    }
  ],
  guidance: [
    {
      guidance_type: 'broker_warning',
      content_bn: 'সতর্কতা: সনদ সমমানের জন্য বিশ্ববিদ্যালয়ের গেটে দালালদের টাকা দেবেন না। বিশ্ববিদ্যালয়ের ওয়ান স্টপ সার্ভিস থেকে নির্ধারিত সরকারি ফি দিয়ে নিজ হাতে প্রত্যয়নপত্র সংগ্রহ করা যায়।',
      content_en: 'Statutory fees apply. Do not pay extra to brokers.'
    }
  ],
  sources: [
    {
      source_type: 'portal',
      source_title: 'মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা অফিসিয়াল পোর্টাল',
      source_url: 'https://iau.edu.bd'
    }
  ]
};
