from typing import List
from schema.models import CitizenService, ServiceFee, RequiredDocument, ApplicationStep

def get_additional_citizen_services() -> List[CitizenService]:
    """
    Returns 28 additional authoritative citizen services covering land dispute settlements,
    khas land, warishan certificates, lost passports, consumer protection, zero-tax returns,
    legal aid, cyber harassment, traffic prosecution, and expatriate welfare.
    """
    services: List[CitizenService] = []

    # 49. ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি
    services.append(CitizenService(
        service_id="bd-land-survey-objection-appeal-30-31",
        title_bn="ভূমি জরিপ আপত্তি (৩০ ধারা) ও আপিল (৩১ ধারা) নিষ্পত্তি নির্দেশিকা",
        title_en="Land Survey Record Objection (Section 30) & Appeal (Section 31) Official Guide",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="ভূমি রেকর্ড ও জরিপ অধিদপ্তর (DLRS), ভূমি মন্ত্রণালয়",
        summary="চলমান ক্যাডাস্ট্রাল বা ডিজিটাল ভূমি জরিপে খসড়া ডিপি (DP) খতিয়ান বা নকশায় ভুল হলে কিংবা অন্যের নামে জমি রেকর্ড হয়ে গেলে ৩০ ধারায় আপত্তি এবং আপত্তির রায়ের বিরুদ্ধে ৩১ ধারায় আপিল দায়ের করা যায়। সেটেলমেন্ট অফিসে দালালরা লক্ষ টাকা পর্যন্ত দাবি করে, অথচ সরকারি নির্ধারিত কোর্ট ফি মাত্র নামমাত্র ২০ টাকা থেকে ৫০ টাকা।",
        official_fees=[
            ServiceFee(
                category_name="৩০ ধারা আপত্তি কোর্ট ফি",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প (আবেদন ফরমে সংযুক্ত)",
                remarks="তহশিলদার বা জরিপ ক্যাম্পের নোটিশ বোর্ডে নির্ধারিত কোর্ট ফি।"
            ),
            ServiceFee(
                category_name="৩১ ধারা আপিল কোর্ট ফি",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="সহকারী সেটেলমেন্ট অফিসার বা জোনাল সেটেলমেন্ট অফিসারের নিকট আপিলে প্রযোজ্য।"
            )
        ],
        processing_time_sla="৩০ ধারা শুনানি: ৩০-৬০ কার্যদিবস | ৩১ ধারা আপিল: ৬০-৯০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আপত্তি বা আপিল আবেদন ফরম (নির্ধারিত ফরম নং বা সাদা কাগজে বিবরণ)",
                is_mandatory=True,
                format_type="কোর্ট ফি যুক্ত মূল কপি"
            ),
            RequiredDocument(
                name="পূর্ববর্তী চূড়ান্ত খতিয়ান (সিএস/এসএ/আরএস/সিটি জরিপ পর্চা)",
                is_mandatory=True,
                format_type="সত্যায়িত অনুলিপি"
            ),
            RequiredDocument(
                name="মালিকানার মূল দলিল, বায়া দলিল অথবা উত্তরাধিকার সনদ (ওয়ারিশান)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ডিপি খতিয়ানের খসড়া প্রদর্শন ও ভুল চিহ্নিতকরণ",
                description="খানাপুরী-তসদিক শেষে ক্যাম্প অফিস যখন খসড়া খতিয়ান জনগণের জন্য উন্মুক্ত করে, তখন নিজের দাগ নম্বর ও রেকর্ড মিলিয়ে নিন।",
                tips="খসড়া প্রদর্শনের ৩০ দিনের মধ্যে আপত্তি দাখিল করতে হয়।"
            ),
            ApplicationStep(
                step_number=2,
                title="ক্যাম্প বা সেটেলমেন্ট অফিসে ৩০ ধারায় আপত্তি দাখিল",
                description="২০ টাকার কোর্ট ফি লাগিয়ে সহকারী সেটেলমেন্ট অফিসার (ASO) বরাবর আবেদন জমা দিয়ে রিসিভিং স্লিপ নিন।",
                tips="দালালকে কোনো টাকা দেবেন না, সরাসরি দায়িত্বপ্রাপ্ত পেশকারের কাছ থেকে তারিখ ও স্লিপ গ্রহণ করুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="শুনানিতে পক্ষদ্বয়ের নথিপত্র উপস্থাপন",
                description="উভয় পক্ষকে নোটিশ করা হবে। শুনানির দিন মূল দলিল ও পর্চা প্রদর্শন করুন। এএসও موقع তদন্ত বা সাক্ষ্য নিয়ে রায় প্রদান করবেন।",
                tips="রায় বিপক্ষে গেলে ৩০ কার্যদিবসের মধ্যে ৩১ ধারায় জোনাল সেটেলমেন্ট অফিসারের কাছে ৫০ টাকার কোর্ট ফি দিয়ে আপিল করুন।"
            )
        ],
        official_portal_url="https://dlrs.gov.bd",
        application_url="https://eporcha.gov.bd",
        citizen_charter_url="https://dlrs.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: জরিপ ক্যাম্পে দালাল চক্র মানুষকে মিথ্যা ভয় দেখায় যে টাকা না দিলে জমি অন্যের নামে রেকর্ড হয়ে যাবে। জমি রেকর্ডের মূল ভিত্তি আইনসম্মত দলিল ও নিরবচ্ছিন্ন দখল। কোনো সেটেলমেন্ট কর্মকর্তা বা দালাল উৎকোচ দাবি করলে সঙ্গে সঙ্গে ১৬১২২ অথবা দুর্নীতি দমন কমিশন (১০৬) এ জানান।"
    ))

    # 50. ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত
    services.append(CitizenService(
        service_id="bd-khas-land-settlement-landless",
        title_bn="ভূমিহীন পরিবারের জন্য সরকারি খাস জমি স্থায়ী বন্দোবস্ত আবেদন নির্দেশিকা",
        title_en="Permanent Agricultural Khas Land Settlement for Landless Families Official Guide",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="ভূমি মন্ত্রণালয় ও জেলা প্রশাসন",
        summary="নদীভাঙা, অসচ্ছল ও সম্পূর্ণ ভূমিহীন কৃষক পরিবারকে সরকার কৃষি কাজের জন্য সর্বোচ্চ ১.৫ একর পর্যন্ত সরকারি খাস জমি স্থায়ী বন্দোবস্ত প্রদান করে। এই বন্দোবস্তের আবেদন সম্পূর্ণ বিনামূল্যে এবং কোনো সেলামি ছাড়াই (প্রতীকী ১ টাকা সেলামিতে) বন্দোবস্ত কবুলিয়ত রেজিস্ট্রি করে দেওয়া হয়।",
        official_fees=[
            ServiceFee(
                category_name="খাস জমি বন্দোবস্ত আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="আবেদন বা ফরমের জন্য কোনো ফি নেই।"
            ),
            ServiceFee(
                category_name="প্রতীকী সেলামি (সরকার নির্ধারিত)",
                amount_bdt=1.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="চূড়ান্ত বরাদ্দের সময় সরকার মাত্র ১ টাকা প্রতীকী সেলামি ধার্য করে।"
            )
        ],
        processing_time_sla="উপজেলা ও জেলা কমিটির যাচাই সাপেক্ষে ৯০-১৮০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা কৃষি খাস জমি ব্যবস্থাপনা কমিটির নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="ইউএনও বা এসিল্যান্ড অফিস থেকে বিনামূল্যে সংগৃহীত"
            ),
            RequiredDocument(
                name="আবেদনকারী স্বামী ও স্ত্রীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ইউনিয়ন পরিষদ চেয়ারম্যান কর্তৃক প্রদত্ত ভূমিহীন ও নদীভাঙা প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল প্রত্যয়ন"
            ),
            RequiredDocument(
                name="পাসপোর্ট সাইজ ছবি (স্বামী ও স্ত্রীর যৌথ ছবি)",
                is_mandatory=True,
                format_type="৩ কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সহকারী কমিশনার (ভূমি) কার্যালয়ে আবেদন দাখিল",
                description="নির্ধারিত ফরমে পরিবারপ্রধানের বিবরণ, নদীভাঙা সনদ ও এনআইডি সহ এসিল্যান্ড বরাবর আবেদন জমা দিন।",
                tips="আবেদনের জন্য কোনো দালালকে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ইউনিয়ন ভূমি সহকারী কর্মকর্তা ও উপজেলা কমিটির তদন্ত",
                description="তহশিলদার ও উপজেলা কৃষি খাস জমি কমিটি সরেজমিনে যাচাই করে দেখবে পরিবারটি আসলেই ভূমিহীন কি না।",
                tips="তদন্তে অসদুপায় অবলম্বনের চেষ্টা করা শাস্তিযোগ্য অপরাধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="জেলা কমিটির অনুমোদন ও যৌথ কবুলিয়ত দলিল সম্পাদন",
                description="জেলা প্রশাসক (DC)-এর সভাপতিত্বে জেলা কমিটি অনুমোদন দিলে স্বামী ও স্ত্রী উভয়ের নামে যৌথভাবে কবুলিয়ত ও দলিল সম্পাদন করে জমি বুঝিয়ে দেওয়া হয়।"
            )
        ],
        official_portal_url="https://minland.gov.bd",
        application_url="https://land.gov.bd",
        citizen_charter_url="https://minland.portal.gov.bd",
        anti_broker_warning="সতর্কতা: খাস জমি বন্দোবস্ত পাইয়ে দেওয়ার নামে কোনো সংঘবদ্ধ দালাল চক্র টাকা দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) বা ডিসি অফিসে অবহিত করুন। খাস জমি বিক্রয়যোগ্য নয় এবং এটি শুধুমাত্র প্রকৃত ভূমিহীন পরিবারকে প্রতীকী ১ টাকায় দেওয়া হয়।"
    ))

    # 51. ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র (ইউনিয়ন ও সিটি কর্পোরেশন)
    services.append(CitizenService(
        service_id="bd-warishan-succession-certificate-union-citycorp",
        title_bn="ওয়ারিশান সনদপত্র ও উত্তরাধিকার প্রত্যয়নপত্র সংগ্রহ নির্দেশিকা",
        title_en="Warishan Succession Certificate Union Parishad & City Corporation Official Guide",
        category="নাগরিক সনদ ও নিবন্ধন",
        department_agency="স্থানীয় সরকার বিভাগ, এলজিইডি",
        summary="পারিবারিক জমিজমা বণ্টন, নামজারি, ব্যাংকের টাকা উত্তোলন কিংবা সম্পত্তি বিক্রির জন্য মৃত ব্যক্তির সকল বৈধ ওয়ারিশের তালিকা সম্বলিত ওয়ারিশান সনদ অত্যাবশ্যক। ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন ওয়ার্ড কাউন্সিলর কার্যালয় থেকে এই সনদ সংগ্রহ করতে হয়।",
        official_fees=[
            ServiceFee(
                category_name="ইউনিয়ন পরিষদ ওয়ারিশান সনদ ফি",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="ইউপি রশিদ",
                remarks="ইউনিয়ন পরিষদ আদর্শ কর তফসিল অনুযায়ী সর্বোচ্চ ১০০ টাকা।"
            ),
            ServiceFee(
                category_name="পৌরসভা / সিটি কর্পোরেশন ওয়ারিশান সনদ ফি",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="অনলাইন বা ব্যাংক রশিদ",
                remarks="সিটি কর্পোরেশন বা পৌরসভা ভেদে ১০০ থেকে ৩০০ টাকা।"
            )
        ],
        processing_time_sla="তদন্ত সাপেক্ষে ৩ থেকে ৭ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="মৃত ব্যক্তির মূল মৃত্যু নিবন্ধন সনদ (Death Certificate)",
                is_mandatory=True,
                format_type="অনলাইন ডিজিটাল কপি"
            ),
            RequiredDocument(
                name="সকল জীবিত ওয়ারিশের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="সকল ওয়ারিশের পাসপোর্ট সাইজ ছবি",
                is_mandatory=True,
                format_type="সত্যায়িত ছবি"
            ),
            RequiredDocument(
                name="স্থানীয় গণ্যমান্য ৩ জন প্রতিবেশী বা সদস্যের সুপারিশ/সাক্ষ্য",
                is_mandatory=True,
                format_type="স্বাক্ষরিত ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="অনলাইনে বা নির্ধারিত ফরমে আবেদন",
                description="সংশ্লিষ্ট ইউপি সেবা পোর্টাল অথবা কাউন্সিলর অফিসে ওয়ারিশবৃন্দের নাম, সম্পর্ক ও বয়স উল্লেখ করে আবেদন করুন।",
                tips="কোনো জীবিত ওয়ারিশের নাম গোপন করা দণ্ডবিধি অনুযায়ী জালিয়াতির অপরাধ।"
            ),
            ApplicationStep(
                step_number=2,
                title="গ্রাম পুলিশ বা ওয়ার্ড সচিব কর্তৃক সরেজমিন তদন্ত",
                description="সচিব বা সংশ্লিষ্ট মেম্বার/কাউন্সিলর পারিবারিক ওয়ারিশের তালিকা সরেজমিনে যাচাই করবেন।",
                tips="তদন্তের নামে কেউ অতিরিক্ত টাকা চাইলে সরাসরি চেয়ারম্যান বা মেয়রের সাথে কথা বলুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইন বা কিউআর কোডযুক্ত ওয়ারিশান সনদ গ্রহণ",
                description="ইউপি/সিটি কর্পোরেশনের নির্ধারিত সরকারি ফি রশিদ গ্রহণ করে ডিজিটাল সিলমোহরযুক্ত ওয়ারিশান সনদপত্র সংগ্রহ করুন।"
            )
        ],
        official_portal_url="https://lgd.gov.bd",
        application_url="https://seba.gov.bd",
        citizen_charter_url="https://lgd.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: ওয়ারিশান সনদে ইচ্ছাকৃতভাবে কোনো কন্যা বা দুর্বল ওয়ারিশের নাম বাদ দিলে পরবর্তীতে পুরো সম্পত্তি হস্তান্তর বাতিল হয়ে যাবে। সচিব বা উদ্যোক্তার নামে কোনো মধ্যস্বত্বভোগী ১,০০০ থেকে ৫,০০০ টাকা দাবি করলে স্থানীয় ইউএনও কার্যালয়ে অভিযোগ করুন।"
    ))

    # 52. ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩)
    services.append(CitizenService(
        service_id="bd-voter-area-transfer-form-13",
        title_bn="ভোটার এলাকা স্থানান্তর ও ঠিকানা পরিবর্তন (ফর্ম-১৩) সরকারি নির্দেশিকা",
        title_en="Voter Area Migration and Address Relocation Form-13 Official Guide",
        category="জাতীয় পরিচয়পত্র (NID)",
        department_agency="নির্বাচন কমিশন সচিবালয় (ইসি)",
        summary="চাকরি, বিবাহ বা বাসস্থান পরিবর্তনের কারণে নিজের পূর্বের ভোটার এলাকা থেকে নতুন ঠিকানায় ভোটার তালিকাভুক্ত হওয়ার নিয়ম। নির্বাচন কমিশনের বিধান অনুযায়ী ভোটার এলাকা পরিবর্তনের জন্য কোনো সরকারি ফি লাগে না (সম্পূর্ণ বিনামূল্যে)।",
        official_fees=[
            ServiceFee(
                category_name="ভোটার এলাকা স্থানান্তর ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="নির্বাচন কমিশনের নিয়ম অনুযায়ী স্থানান্তর সেবায় কোনো সরকারি ফি নেই।"
            )
        ],
        processing_time_sla="তদন্ত ও উপজেলা নির্বাচন কর্মকর্তার অনুমোদন সাপেক্ষে ১৫-৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="ভোটার এলাকা স্থানান্তরের পূরণকৃত ফরম-১৩ (Form-13)",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল ফরম",
                how_to_obtain="নির্বাচন কমিশনের পোর্টাল (services.nidw.gov.bd) থেকে বিনামূল্যে ডাউনলোড"
            ),
            RequiredDocument(
                name="আবেদনকারীর বর্তমান মূল জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="নতুন ঠিকানার প্রমাণপত্র (বিদ্যুৎ বিল/গ্যাস বিল/ভাড়া চুক্তিপত্র/বাড়ি ভাড়ার রশিদ/হোল্ডিং ট্যাক্স)",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="নতুন ঠিকানার পৌর মেয়র / ইউপি চেয়ারম্যান / ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ফরম-১৩ পূরণ ও প্রত্যয়ন সংগ্রহ",
                description="এনআইডি ওয়েবসাইট থেকে ফরম-১৩ ডাউনলোড করে আপনার বর্তমান ও কাঙ্ক্ষিত ঠিকানার বিবরণ দিন।",
                action_url="https://services.nidw.gov.bd",
                tips="যে এলাকায় যেতে চান, সেই এলাকার নির্বাচন অফিসে আবেদন জমা দিতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="কাঙ্ক্ষিত উপজেলা/থানা নির্বাচন অফিসে আবেদন জমা",
                description="নতুন এলাকার থানা নির্বাচন কর্মকর্তার কার্যালয়ে ফরম-১৩ ও ঠিকানার নথিপত্র সশরীরে জমা দিয়ে প্রাপ্তি স্বীকারপত্র নিন।",
                tips="কোনো কম্পিউটার দোকানদার বা দালালকে ১,০০০-২,০০০ টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="তদন্ত ও সিস্টেমে ভোটার এলাকা স্থানান্তর সম্পন্ন",
                description="নির্বাচন কর্মকর্তা নথিপত্র ও ইউপি প্রত্যয়ন যাচাই করে সিস্টেমে আপনার ভোটার এলাকা আপডেট করে দেবেন। এরপর অনলাইন থেকে নতুন এনআইডি স্লিপ ডাউনলোড করা যাবে।"
            )
        ],
        official_portal_url="https://nidw.gov.bd",
        application_url="https://services.nidw.gov.bd",
        citizen_charter_url="https://ecs.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ভোটার এলাকা স্থানান্তরে নির্বাচন কমিশন কোনো ফি নেয় না। কোনো ব্যক্তি বা দালাল ভোটার এলাকা বদলিয়ে দেওয়ার প্রলোভন দেখিয়ে টাকা চাইলে নির্বাচন কমিশন হেল্পলাইন ১০৫ এ কল দিয়ে তাৎক্ষণিক অভিযোগ জানান।"
    ))

    # 53. হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-lost-passport-reissue-gd-process",
        title_bn="হারানো পাসপোর্ট রি-ইস্যু ও জিডি সংক্রান্ত সরকারি নির্দেশিকা",
        title_en="Lost Passport Re-issue & Police GD Official Procedure Guide",
        category="পাসপোর্ট ও ইমিগ্রেশন",
        department_agency="ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)",
        summary="পাসপোর্ট হারিয়ে গেলে সাধারণ মানুষ চরম উদ্বেগে পড়েন এবং দালালদের খপ্পরে পড়ে অতিরিক্ত হাজার হাজার টাকা গচ্চা দেন। সঠিক নিয়ম হলো নিকটস্থ থানায় অনলাইন বা সাধারণ জিডি (GD) করে সরাসরি ই-পাসপোর্ট পোর্টালে 'Lost Passport' ক্যাটাগরিতে আবেদন করা। সরকারি ফি সাধারণ নতুন পাসপোর্টের সমানই।",
        official_fees=[
            ServiceFee(
                category_name="হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - নিয়মিত)",
                amount_bdt=4025.0,
                vat_included=True,
                payment_method="এ-চালান / অনলাইন কার্ড / এমএফএস",
                remarks="ট্রেজারি চালানে ভ্যাটসহ ৪,০২৫ টাকা।"
            ),
            ServiceFee(
                category_name="হারানো পাসপোর্ট রি-ইস্যু (৪৮ পাতা, ৫ বছর - জরুরি)",
                amount_bdt=6325.0,
                vat_included=True,
                payment_method="এ-চালান / অনলাইন কার্ড / এমএফএস",
                remarks="জরুরি ডেলিভারিতে ভ্যাটসহ ৬,৩২৫ টাকা।"
            ),
            ServiceFee(
                category_name="পুলিশ জিডি সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="থানায় সাধারণ ডায়েরি বা অনলাইনে জিডি করতে কোনো ফি লাগে না।"
            )
        ],
        processing_time_sla="নিয়মিত: ১৫ কার্যদিবস | জরুরি: ৭ কার্যদিবস | অতি জরুরি: ২ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="থানার সাধারণ ডায়েরি (GD) এর মূল কপি (যাতে পূর্বের পাসপোর্ট নম্বর ও হারানোর বিবরণ উল্লেখ থাকে)",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল জিডি কপি বা অনলাইন জিডি"
            ),
            RequiredDocument(
                name="হারানো পাসপোর্টের স্পষ্ট ফটোকপি (যদি থাকে)",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ",
                is_mandatory=True,
                format_type="মূল কপি ও ফটোকপি"
            ),
            RequiredDocument(
                name="ই-পাসপোর্ট অনলাইন সামারি ফরম ও পেমেন্ট চালান স্লিপ",
                is_mandatory=True,
                format_type="প্রিন্ট কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="থানায় জিডি বা অনলাইন জিডি দায়ের",
                description="পাসপোর্ট যে এলাকায় হারিয়েছে সেই থানায় জিডি করুন অথবা 'Online GD' অ্যাপের মাধ্যমে বিনামূল্যে পাসপোর্ট হারানোর জিডি দায়ের করে জিডি কপি প্রিন্ট নিন।",
                tips="জিডিতে অবশ্যই পুরাতন পাসপোর্ট নম্বর উল্লেখ থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ই-পাসপোর্ট পোর্টালে 'Re-issue / Lost' সিলেক্ট করে আবেদন",
                description="https://epassport.gov.bd ওয়েবসাইটে ঢুকে Re-issue অপশন নির্বাচন করে জিডি নম্বর ও তারিখ প্রদান করুন।",
                action_url="https://epassport.gov.bd",
                tips="ভুল তথ্য দেবেন না, সিস্টেমে পূর্বের রেকর্ড ম্যাচ করবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="পাসপোর্ট অফিসে বায়োমেট্রিক ও মূল জিডি দাখিল",
                description="অ্যাপয়েন্টমেন্টের দিনে পাসপোর্ট অফিসে গিয়ে মূল জিডি কপি, এনআইডি ও চালান স্লিপ জমা দিয়ে ছবি ও আঙুলের ছাপ দিন। নির্দিষ্ট দিনে নতুন পাসপোর্ট ডেলিভারি নিন।"
            )
        ],
        official_portal_url="https://epassport.gov.bd",
        application_url="https://epassport.gov.bd",
        citizen_charter_url="https://dip.gov.bd",
        anti_broker_warning="সতর্কতা: হারানো পাসপোর্টের ক্ষেত্রে দালালরা বলে বিশেষ ছাড়পত্র লাগবে বলে ১০,০০০-১৫,০০০ টাকা হাতিয়ে নেয়। প্রকৃত সত্য হলো থানায় জিডি কপি থাকলে আপনি নিজেই যেকোনো সাধারণ পাসপোর্টের মতো সরকারি ফি দিয়ে পাসপোর্ট তুলতে পারবেন। কাউকে কোনো অতিরিক্ত টাকা দেবেন না।"
    ))

    # 54. দ্বৈত নাগরিকত্ব সনদপত্র (সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়)
    services.append(CitizenService(
        service_id="bd-dual-citizenship-certificate-mha",
        title_bn="দ্বৈত নাগরিকত্ব সনদপত্র (Dual Citizenship) আবেদন নির্দেশিকা",
        title_en="Dual Citizenship Certificate Ministry of Home Affairs Official Guide",
        category="পাসপোর্ট ও ইমিগ্রেশন",
        department_agency="সুরক্ষা সেবা বিভাগ, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="যেসব বাংলাদেশি নাগরিক যুক্তরাষ্ট্র, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া বা ইউরোপের বিভিন্ন দেশের নাগরিকত্ব গ্রহণ করেছেন, তারা বৈধভাবে বাংলাদেশের নাগরিকত্ব বহাল রাখতে দ্বৈত নাগরিকত্ব সনদ গ্রহণ করতে পারেন। এতে দেশে জমি কেনাবেচা, উত্তরাধিকার সম্পত্তি সংরক্ষণ ও ভোটাধিকার সুরক্ষিত থাকে।",
        official_fees=[
            ServiceFee(
                category_name="দ্বৈত নাগরিকত্ব সনদ সরকারি ফি",
                amount_bdt=7000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-২২০১-০০০১-২৬৮১)",
                remarks="অথবা বিদেশে বাংলাদেশি মিশন/দূতাবাসে সমপরিমাণ বৈদেশিক মুদ্রা (সাধারণত $৭৭-$১০০)।"
            )
        ],
        processing_time_sla="স্বরাষ্ট্র মন্ত্রণালয় ও এসবি যাচাই সাপেক্ষে ৬০-৯০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত দ্বৈত নাগরিকত্ব ফরম (ফরম-সি)",
                is_mandatory=True,
                format_type="পূরণকৃত ও নোটারাইজড মূল কপি"
            ),
            RequiredDocument(
                name="বিদেশি পাসপোর্ট ও বিদেশি নাগরিকত্ব সনদ (Naturalization Certificate)",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="পূর্বের বাংলাদেশি পাসপোর্ট বা এনআইডি বা জন্ম নিবন্ধন সনদ",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="বাংলাদেশে পিতা-মাতার বা নিজের স্থাবর সম্পত্তির বিবরণ ও ওয়ারিশান সনদ",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="সরকারি ট্রেজারি চালানের মূল কপি",
                is_mandatory=True,
                format_type="ব্যাংক সিলযুক্ত মূল চালান"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="স্বরাষ্ট্র মন্ত্রণালয়ের পোর্টালে বা দূতাবাসে আবেদন",
                description="দেশে থাকলে সুরক্ষা সেবা বিভাগ (https://ssd.gov.bd) অথবা বিদেশে থাকলে নিকটস্থ বাংলাদেশ দূতাবাসে প্রয়োজনীয় কাগজপত্রসহ আবেদন জমা দিন।",
                action_url="https://ssd.gov.bd",
                tips="ফরম নোটারি পাবলিক দ্বারা সত্যায়িত হতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="স্পেশাল ব্রাঞ্চ (SB) পুলিশ ও নিরাপত্তা যাচাই",
                description="স্বরাষ্ট্র মন্ত্রণালয় আবেদনটি সংশ্লিষ্ট এসবি ও জেলা প্রশাসকের কাছে নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।",
                tips="ভেরিফিকেশনে কোনো ঘুষ লেনদেন নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="দ্বৈত নাগরিকত্ব সনদপত্র সংগ্রহ",
                description="অনুমোদন সম্পন্ন হলে সুরক্ষা সেবা বিভাগ থেকে মহামান্য রাষ্ট্রপতির পক্ষে স্বাক্ষরিত দ্বৈত নাগরিকত্ব সনদ প্রদান করা হয়।"
            )
        ],
        official_portal_url="https://ssd.gov.bd",
        application_url="https://ssd.gov.bd",
        citizen_charter_url="https://ssd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: বিদেশে বা দেশে কোনো এজেন্সি যদি বলে লাখ টাকার বিনিময়ে দ্বৈত নাগরিকত্ব সনদ দ্রুত করিয়ে দেবে—তাদের বিশ্বাস করবেন না। সরকার নির্ধারিত ৭,০০০ টাকার চালানের বাইরে কাউকে কোনো টাকা দেবেন না।"
    ))

    # 55. জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি
    services.append(CitizenService(
        service_id="bd-emergency-passport-express-delivery",
        title_bn="জরুরি চিকিৎসা ও শিক্ষায় পাসপোর্ট এক্সপ্রেস ও সুপার এক্সপ্রেস ডেলিভারি নির্দেশিকা",
        title_en="Emergency Medical & Study Passport Express Delivery Official Guide",
        category="পাসপোর্ট ও ইমিগ্রেশন",
        department_agency="ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর (DIP)",
        summary="গুরুতর অসুস্থ রোগীর বিদেশে জরুরি চিকিৎসা, বিদেশি বিশ্ববিদ্যালয়ের স্কলারশিপ ডেডলাইন কিংবা জরুরি চাকরির ফ্লাইটের ক্ষেত্রে সরকারিভাবে 'সুপার এক্সপ্রেস' বা দ্রুত পাসপোর্ট ডেলিভারির আইনি ব্যবস্থা রয়েছে। দালালরা রোগী ও অভিভাবকদের চরম অসহায়ত্বের সুযোগ নিয়ে ২০,০০০-৩০,০০০ টাকা দাবি করে, অথচ সরকারি সুপার এক্সপ্রেস ফি মাত্র ৮,০৫০ টাকা।",
        official_fees=[
            ServiceFee(
                category_name="সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ৫ বছর)",
                amount_bdt=8050.0,
                vat_included=True,
                payment_method="এ-চালান / কার্ড / এমএফএস",
                remarks="ভ্যাটসহ মোট সরকারি ফি ৮,০৫০ টাকা (২ কর্মদিবসে ডেলিভারি)।"
            ),
            ServiceFee(
                category_name="সুপার এক্সপ্রেস ই-পাসপোর্ট ফি (৪৮ পাতা, ১০ বছর)",
                amount_bdt=10350.0,
                vat_included=True,
                payment_method="এ-চালান / কার্ড / এমএফএস",
                remarks="ভ্যাটসহ মোট সরকারি ফি ১০,৩৫০ টাকা।"
            )
        ],
        processing_time_sla="সুপার এক্সপ্রেস: ২ কার্যদিবস (৪৮ ঘণ্টা)",
        required_documents=[
            RequiredDocument(
                name="হাসপাতালের চিকিৎসকের রেফারেল ও এয়ার অ্যাম্বুলেন্স/ভিসা ইনভাইটেশন লেটার",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল মেডিকেল রেকর্ড"
            ),
            RequiredDocument(
                name="বিদেশি বিশ্ববিদ্যালয়ের অফার লেটার / ডেডলাইন নোটিশ (শিক্ষার্থীদের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="প্রিন্ট কপি"
            ),
            RequiredDocument(
                name="মহাপরিচালক (DG) বা উপ-পরিচালক (পাসপোর্ট) বরাবর লিখিত জরুরি আবেদনপত্র",
                is_mandatory=True,
                format_type="স্বাক্ষরিত সাদা কাগজের আবেদন"
            ),
            RequiredDocument(
                name="ই-পাসপোর্ট অনলাইন আবেদন ফরম ও সুপার এক্সপ্রেস চালানের কপি",
                is_mandatory=True,
                format_type="প্রিন্ট কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সুপার এক্সপ্রেস ক্যাটাগরিতে সরকারি চালান জমা",
                description="পাসপোর্ট আবেদন করার সময় 'Super Express' ডেলিভারি অপশন নির্বাচন করে নির্ধারিত সরকারি ফি অনলাইনে পরিশোধ করুন।",
                action_url="https://epassport.gov.bd",
                tips="অতিরিক্ত এক টাকাও কোনো দালালকে দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="পাসপোর্ট অফিসের উপ-পরিচালক/সহকারী পরিচালকের অনুমোদন",
                description="মেডিকেল নথিপত্রসহ আঞ্চলিক পাসপোর্ট অফিসের প্রধান কর্মকর্তার সাথে সরাসরি দেখা করুন। জরুরি মানবিক বিবেচনায় তিনি তাৎক্ষণিক আবেদন অগ্রায়ন করবেন।",
                tips="দালালের মাধ্যমে নয়, সরাসরি অফিস প্রধানের রুমে যান।"
            ),
            ApplicationStep(
                step_number=3,
                title="আগারগাঁও কেন্দ্রীয় প্রিন্টিং থেকে ২ দিনে ডেলিভারি",
                description="বায়োমেট্রিক নেওয়ার পর আবেদনটি সরাসরি এক্সপ্রেস কিউতে প্রিন্ট হয়ে ৪৮ ঘণ্টার মধ্যে প্রস্তুত হয়ে যায় এবং এসএমএস পাওয়া যায়।"
            )
        ],
        official_portal_url="https://epassport.gov.bd",
        application_url="https://epassport.gov.bd",
        citizen_charter_url="https://dip.gov.bd",
        anti_broker_warning="সতর্কতা: পাসপোর্ট অফিসের সীমানায় দালালরা জরুরি রোগীদের ঘিরে ধরে বলে 'আমাদের না দিলে ১০ দিনেও পাসপোর্ট পাবেন না'। এটি সম্পূর্ণ মিথ্যাচার। সরকারি সুপার এক্সপ্রেস সিস্টেমে ৪৮ ঘণ্টাতেই পাসপোর্ট পাওয়া যায়। দালালদের বিরুদ্ধে অভিযোগ জানাতে পাসপোর্ট অফিস পরিচালকের রুমে জানান।"
    ))

    # 56. বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি
    services.append(CitizenService(
        service_id="bd-brta-lost-smartcard-replacement",
        title_bn="বিআরটিএ হারানো ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) প্রতিলিপি নির্দেশিকা",
        title_en="BRTA Lost Digital Registration Certificate Smart Card Duplicate Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)",
        summary="মোটরসাইকেল বা গাড়ির ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট (ডিআরসি বা স্মার্ট কার্ড) হারিয়ে গেলে বা নষ্ট হয়ে গেলে বিআরটিএ সার্কেল অফিস থেকে প্রতিলিপি সংগ্রহ করা যায়। দালালরা সাধারণ মালিকদের কাছ থেকে ২,০০০-৩,০০০ টাকা দাবি করে, অথচ সরকারি ফি মাত্র ৬৩৩ টাকা।",
        official_fees=[
            ServiceFee(
                category_name="স্মার্ট কার্ড প্রতিলিপি ফি",
                amount_bdt=550.0,
                vat_included=False,
                payment_method="বিআরটিএ অনুমোদিত ব্যাংক / অনলাইন পেমেন্ট গেটওয়ে",
                remarks="ফি ৫৫০ টাকা।"
            ),
            ServiceFee(
                category_name="১৫% সরকারি ভ্যাট",
                amount_bdt=83.0,
                vat_included=True,
                payment_method="ব্যাংক চালান",
                remarks="মোট প্রদেয় সরকারি ফি ৬৩৩ টাকা।"
            )
        ],
        processing_time_sla="আবেদন ও বায়োমেট্রিক গ্রহণের পর ১৫-৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="থানার মূল সাধারণ ডায়েরি (জিডি) কপি ও ট্রাফিক ক্লিয়ারেন্স সনদ",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল কপি"
            ),
            RequiredDocument(
                name="গাড়ির মূল ট্যাক্স টোকেন ও ফিটনেস সনদের কপি",
                is_mandatory=True,
                format_type="ফটোকপি ও প্রদর্শনযোগ্য মূল কপি"
            ),
            RequiredDocument(
                name="মালিকের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বিআরটিএ নির্ধারিত আবেদন ফরম (স্মার্ট কার্ড প্রতিলিপি ফরম)",
                is_mandatory=True,
                format_type="পূরণকৃত ও স্বাক্ষরিত ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="থানায় জিডি ও ট্রাফিক ক্লিয়ারেন্স সংগ্রহ",
                description="গাড়ির স্মার্ট কার্ড হারানোর জিডি করে সংশ্লিষ্ট ট্রাফিক পুলিশ অফিস থেকে ক্লিয়ারেন্স নিন যে গাড়িটির কোনো মামলা বা জরিমানা বকেয়া নেই।",
                tips="জিডিতে চেসিস ও ইঞ্জিন নম্বর নির্ভুল থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="বিএসপি (BSP) পোর্টালে বা ব্যাংকে ৬৩৩ টাকা সরকারি ফি প্রদান",
                description="https://bsp.brta.gov.bd পোর্টাল বা নির্ধারিত ব্যাংকে ৬৩৩ টাকা জমা দিয়ে জমার রশিদ সংগ্রহ করুন।",
                action_url="https://bsp.brta.gov.bd",
                tips="কোনো দালালকে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সার্কেল অফিসে নথিপত্র জমা ও বায়োমেট্রিক প্রদান",
                description="মূল নথিপত্র সার্কেল অফিসে জমা দিয়ে বায়োমেট্রিক স্লিপ নিন। স্মার্ট কার্ড প্রস্তুত হলে ফোনে এসএমএস আসবে এবং অফিস থেকে সংগ্রহ করতে পারবেন।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.portal.gov.bd",
        anti_broker_warning="সতর্কতা: বিআরটিএ প্রাঙ্গণে দালালদের কোনো কাজ নেই। ব্যাংকে ৬৩৩ টাকার চালান জমা দিয়ে নিজেই আবেদন জমা দিন। কোনো কর্মকর্তা ঘুষ দাবি করলে বিআরটিএ হেল্পলাইন ১৬৪৩১ এ কল দিন।"
    ))

    # 57. ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি
    services.append(CitizenService(
        service_id="bd-traffic-prosecution-fine-online-payment",
        title_bn="ট্রাফিক পুলিশের মামলা ও রেকার জরিমানা অনলাইনে নিষ্পত্তি নির্দেশিকা",
        title_en="Traffic Police Prosecution Fine & Wrecker Bill Online Settlement Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ পুলিশ ও ঢাকা মেট্রোপলিটন পুলিশ (DMP Traffic)",
        summary="রাস্তায় উল্টোপথে চলা, হেলমেট না থাকা, ফিটনেস মেয়াদোত্তীর্ণ বা অবৈধ পার্কিংয়ের জন্য ট্রাফিক পুলিশ পিওএস মেশিনে ই-প্রসিকিউশন বা রেকার বিল করলে তা সরাসরি অনলাইন ব্যাংকিং ও এমএফএস (বিকাশ, রকেট, নগদ)-এর মাধ্যমে তাৎক্ষণিক পরিশোধ করে মামলা নিষ্পত্তি করা যায়। কোনো ট্রাফিক পুলিশ বা দালালকে নগদে ঘুষ দেওয়ার প্রয়োজন নেই।",
        official_fees=[
            ServiceFee(
                category_name="আইন অনুযায়ী ধার্যকৃত জরিমানা (ই-প্রসিকিউশন স্লিপ অনুযায়ী)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="বিকাশ / নগদ / রকেট / ভিসা / মাস্টারকার্ড",
                remarks="স্লিপে উল্লিখিত ধারা অনুযায়ী ৫০০ টাকা থেকে ৫,০০০ টাকা জরিমানা।"
            ),
            ServiceFee(
                category_name="এমএফএস গেটওয়ে সার্ভিস চার্জ",
                amount_bdt=10.0,
                vat_included=True,
                payment_method="অনলাইন চার্জ",
                remarks="১% বা সর্বোচ্চ ১০-১৫ টাকা।"
            )
        ],
        processing_time_sla="অনলাইনে ফি জমার সাথে সাথে তাৎক্ষণিক মামলা নিষ্পত্তি",
        required_documents=[
            RequiredDocument(
                name="ট্রাফিক পুলিশের পিওএস মেশিন থেকে প্রদত্ত ই-প্রসিকিউশন স্লিপ (মামলা স্লিপ)",
                is_mandatory=True,
                format_type="প্রিন্ট স্লিপ",
                how_to_obtain="ট্রাফিক পুলিশ কর্মকর্তা তাৎক্ষণিক প্রদান করবেন"
            ),
            RequiredDocument(
                name="আটককৃত ডকুমেন্টস (যদি ড্রাইভিং লাইসেন্স বা গাড়ির কাগজ জব্দ থাকে)",
                is_mandatory=False,
                format_type="জব্দ রশিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="মামলা স্লিপের কিউআর কোড বা রেফারেন্স নম্বর দেখা",
                description="ট্রাফিক পুলিশ যে স্লিপ দিয়েছে তাতে প্রসিকিউশন নম্বর ও জরিমানার পরিমাণ লেখা থাকবে।",
                tips="সড়কে কোনো পুলিশকে নগদে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="বিকাশ/ইউক্যাশ/ইউপে ট্রাফিক ফাইন অপশনে পেমেন্ট",
                description="বিকাশ বা ইউপে অ্যাপে 'Traffic Fine' অপশনে গিয়ে মামলা নম্বরটি লিখুন। নাম ও জরিমানার অংক যাচাই করে পিন দিয়ে পরিশোধ করুন।",
                tips="পেমেন্ট সফল হলে ট্রানজেকশন আইডি সম্বলিত এসএমএস আসবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="কাগজপত্র ফেরত গ্রহণ",
                description="পেমেন্ট কনফার্মেশন মেসেজটি সংশ্লিষ্ট ট্রাফিক সার্জেন্ট বা ট্রাফিক জোনের এডিসি/এসি অফিসে দেখালে সাথে সাথে জব্দকৃত ড্রাইভিং লাইসেন্স বা কাগজ বুঝিয়ে দেওয়া হবে।"
            )
        ],
        official_portal_url="https://police.gov.bd",
        application_url="https://dmp.gov.bd",
        citizen_charter_url="https://dmp.gov.bd",
        anti_broker_warning="সতর্কতা: ট্রাফিক মামলা দ্রুত ছাড়িয়ে দেওয়ার কথা বলে কোনো তৃতীয় পক্ষকে টাকা দেবেন না। সম্পূর্ণ প্রক্রিয়া ডিজিটাল ও স্বচ্ছ। অনলাইনে নির্ধারিত সরকারি ফাইন দেওয়ার সাথে সাথে সার্ভারে মামলা স্বয়ংক্রিয়ভাবে ডিসপোজড হয়ে যায়।"
    ))

    # 58. ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর
    services.append(CitizenService(
        service_id="bd-brta-driving-license-transfer-inter-district",
        title_bn="ড্রাইভিং লাইসেন্স এক জেলা সার্কেল থেকে অন্য জেলায় স্থানান্তর নির্দেশিকা",
        title_en="BRTA Driving License Inter-District Circle Transfer Official Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)",
        summary="স্থায়ী ঠিকানা বা কর্মস্থল পরিবর্তনের কারণে নিজের ড্রাইভিং লাইসেন্স পূর্বের বিআরটিএ সার্কেল অফিস থেকে নতুন সার্কেল অফিসে স্থানান্তর করার নিয়ম। দালালরা ৩,০০০-৫,০০০ টাকা দাবি করে, অথচ সরকারি অনাপত্তি সনদ (NOC) নেওয়া সম্পূর্ণ সাধারণ প্রশাসনিক প্রক্রিয়া।",
        official_fees=[
            ServiceFee(
                category_name="সার্কেল স্থানান্তর আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="স্থানান্তর আবেদন ও এনওসির জন্য কোনো অতিরিক্ত সরকারি ফি নেই।"
            ),
            ServiceFee(
                category_name="নতুন স্মার্ট কার্ড রি-ইস্যু ফি (যদি ঠিকানা সম্বলিত নতুন কার্ড নিতে চান)",
                amount_bdt=875.0,
                vat_included=True,
                payment_method="ব্যাংক চালান",
                remarks="ঐচ্ছিক, পুরোনো স্মার্ট কার্ড বহাল রাখলে এই ফি লাগে না।"
            )
        ],
        processing_time_sla="সার্কেল ছাড়পত্র সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বর্তমান মূল ড্রাইভিং লাইসেন্স (স্মার্ট কার্ড)",
                is_mandatory=True,
                format_type="মূল কপি ও ফটোকপি"
            ),
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) যাতে নতুন সার্কেল এলাকার বর্তমান/স্থায়ী ঠিকানা রয়েছে",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="নতুন এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের নাগরিকত্ব প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            ),
            RequiredDocument(
                name="সহকারী পরিচালক (ইঞ্জিঃ) বরাবর স্থানান্তর আবেদনপত্র",
                is_mandatory=True,
                format_type="স্বাক্ষরিত সাদা কাগজের আবেদন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বর্তমান ইস্যুকারী সার্কেল অফিসে এনওসি (NOC) আবেদন",
                description="যে সার্কেল থেকে লাইসেন্স ইস্যু হয়েছিল সেখানে আবেদন দিয়ে ছাড়পত্র (NOC) গ্রহণ করুন।",
                tips="দালাল ছাড়াই সরাসরি বিআরটিএ সহকারী পরিচালকের রুমে আবেদন জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="নতুন সার্কেল অফিসে ফাইল এন্ট্রি",
                description="এনওসি কপি ও এনআইডিসহ নতুন সার্কেল অফিসে ফাইল এন্ট্রি করান। ডাটাবেজে আপনার সার্কেল মাইগ্রেশন সম্পন্ন হবে।",
                action_url="https://bsp.brta.gov.bd"
            ),
            ApplicationStep(
                step_number=3,
                title="নতুন সার্কেল থেকে সেবা গ্রহণ",
                description="সার্কেল ট্রান্সফার সম্পন্ন হলে পরবর্তীতে নবায়ন বা ডুপ্লিকেট সংক্রান্ত সব সেবা নতুন সার্কেল থেকেই পাওয়া যাবে।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.portal.gov.bd",
        anti_broker_warning="সতর্কতা: লাইসেন্স ট্রান্সফারের নামে কোনো দালালকে টাকা দেবেন না। কোনো অফিসার আপত্তি জানালে সরাসরি বিআরটিএ প্রধান কার্যালয় বা অভিযোগ সেল ১৬৪৩১ এ জানান।"
    ))

    # 59. শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র
    services.append(CitizenService(
        service_id="bd-nbr-zero-tax-return-marginal-income",
        title_bn="শূন্য আয়কর রিটার্ন (Zero Tax Return) অনলাইনে দাখিল ও কর প্রত্যয়নপত্র নির্দেশিকা",
        title_en="NBR Zero Tax Return Online Submission & Tax Certificate Official Guide",
        category="অর্থ ও রাজস্ব সেবা",
        department_agency="জাতীয় রাজস্ব বোর্ড (NBR)",
        summary="যাদের বার্ষিক আয় করমুক্ত সীমার নিচে (পুরুষ ৩,৫০,০০০ টাকা, নারী ও প্রবীণ ৪,০০,০০০ টাকা) কিন্তু ট্রেড লাইসেন্স নবায়ন, ব্যাংক লোন বা ক্রেডিট কার্ডের জন্য রিটার্ন দাখিলের প্রমাণ (PSR) দরকার—তারা ঘরে বসেই এনবিআরের e-Return পোর্টালে সম্পূর্ণ বিনামূল্যে ১৫ মিনিটে জিরো রিটার্ন দাখিল করে ইনস্ট্যান্ট প্রাপ্তি স্বীকারপত্র ডাউনলোড করতে পারেন। উকিল বা দালালরা ২,০০০-৩,০০০ টাকা নেয়।",
        official_fees=[
            ServiceFee(
                category_name="অনলাইন রিটার্ন দাখিল ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="জাতীয় রাজস্ব বোর্ডের অনলাইন রিটার্ন পোর্টালে কোনো ফি লাগে না।"
            ),
            ServiceFee(
                category_name="জিরো রিটার্ন কর প্রদেয়",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="প্রদেয় কর শূন্য (০ টাকা)",
                remarks="করযোগ্য আয় না থাকলে প্রদেয় কর ০ টাকা।"
            )
        ],
        processing_time_sla="অনলাইনে দাখিলের সাথে সাথে তাৎক্ষণিক প্রাপ্তি স্বীকারপত্র ডাউনলোড",
        required_documents=[
            RequiredDocument(
                name="১২ ডিজিটের ই-টিন (e-TIN) নম্বর ও টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ডিজিটাল নম্বর"
            ),
            RequiredDocument(
                name="নিজের জাতীয় পরিচয়পত্র দিয়ে নিবন্ধিত বায়োমেট্রিক সিম নম্বর (OTP ভেরিফিকেশনের জন্য)",
                is_mandatory=True,
                format_type="সচল মোবাইল নম্বর"
            ),
            RequiredDocument(
                name="বাৎসরিক ব্যাংক স্টেটমেন্ট (যদি ব্যাংক হিসাব থাকে)",
                is_mandatory=False,
                format_type="পিডিএফ বা স্টেটমেন্ট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ই-রিটার্ন পোর্টালে রেজিস্ট্রেশন",
                description="https://etaxnbr.gov.bd ওয়েবসাইটে গিয়ে নিজের টিন নম্বর ও এনআইডি দিয়ে নিবন্ধিত মোবাইল নম্বর দিয়ে ওটিপি ভেরিফাই করে পাসওয়ার্ড সেট করুন।",
                action_url="https://etaxnbr.gov.bd",
                tips="অন্য কারো মোবাইল নম্বর ব্যবহার করবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="এক পাতার সহজ জিরো রিটার্ন ফর্ম পূরণ",
                description="আয়ের উৎস 'Non-taxable' বা করমুক্ত সীমার নিচে থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে প্রদেয় কর ০ টাকা দেখাবে। ব্যাংক ব্যালেন্স ও সম্পদের হিসাব দিয়ে সাবমিট করুন।",
                tips="কোনো ট্যাক্স কনসালট্যান্ট বা দালাল ছাড়াই নিজে করা যায়।"
            ),
            ApplicationStep(
                step_number=3,
                title="তাত্ক্ষণিক প্রাপ্তি স্বীকারপত্র ও ট্যাক্স সার্টিফিকেট প্রিন্ট",
                description="সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত সরকারি 'Acknowledgment Receipt' এবং 'Tax Certificate' ডাউনলোড করে প্রিন্ট করুন। এটি সব জায়গায় গ্রাহ্য।"
            )
        ],
        official_portal_url="https://nbr.gov.bd",
        application_url="https://etaxnbr.gov.bd",
        citizen_charter_url="https://nbr.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ইনকাম ট্যাক্স ফাইল করার নামে দালালরা ভুয়া অডিট বা জরিমানার ভয় দেখিয়ে মানুষের কাছ থেকে টাকা হাতিয়ে নেয়। এনবিআরের অনলাইন সিস্টেম শতভাগ স্বচ্ছ ও স্বয়ংক্রিয়। কোনো দালালের সাহায্য ছাড়াই নিজের ফোন বা কম্পিউটার থেকে নিজে রিটার্ন জমা দিন।"
    ))

    # 60. ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি
    services.append(CitizenService(
        service_id="bd-dncrp-consumer-rights-complaint-reward",
        title_bn="ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরে অভিযোগ ও জরিমানার ২৫% নগদ পুরস্কার প্রাপ্তি নির্দেশিকা",
        title_en="Consumer Rights Protection Directorate DNCRP Complaint & 25% Reward Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="জাতীয় ভোক্তা-অধিকার সংরক্ষণ অধিদপ্তর (DNCRP), বাণিজ্য মন্ত্রণালয়",
        summary="দোকান বা ব্যবসা প্রতিষ্ঠান পণ্যের গায়ের দামের বেশি নিলে, ওজনে কম দিলে, মেয়াদোত্তীর্ণ পণ্য বিক্রি করলে বা প্রতিশ্রুতি অনুযায়ী সেবা না দিলে নাগরিকরা বিনামূল্যে অনলাইনে বা ইমেইলে অভিযোগ করতে পারেন। অভিযোগ প্রমাণিত হলে দোষী ব্যবসায়ীকে জরিমানা করা হয় এবং আদায়কৃত জরিমানার ২৫% অর্থ তাৎক্ষণিক নগদ ক্যাশ পুরস্কার হিসেবে অভিযোগকারী নাগরিককে দেওয়া হয়।",
        official_fees=[
            ServiceFee(
                category_name="ভোক্তা অধিকার অভিযোগ ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="অভিযোগের জন্য কোনো ফি বা স্ট্যাম্প লাগে না।"
            )
        ],
        processing_time_sla="শুনানি ও তদন্ত সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="পণ্য ক্রয়ের ক্যাশ মেমো / মানি রিসিট / অনলাইন চালানের ছবি",
                is_mandatory=True,
                format_type="ফটোকপি বা স্ক্যান কপি"
            ),
            RequiredDocument(
                name="পণ্যের গায়ে মুদ্রিত এমআরপি (MRP) বা মেয়াদোত্তীর্ণ তারিখের স্পষ্ট ছবি",
                is_mandatory=True,
                format_type="ছবি"
            ),
            RequiredDocument(
                name="অভিযোগকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="অভিযোগের বিবরণ (দোকানের নাম, ঠিকানা, অপরাধের ধরন)",
                is_mandatory=True,
                format_type="লিখিত বা ইমেইল বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ক্রয় রসিদ ও প্রমাণ সংগ্রহ",
                description="পণ্য ক্রয়ের তারিখ থেকে ৩০ দিনের মধ্যে অভিযোগ করতে হবে। পণ্যের রসিদ ও মোড়কের ছবি তুলুন।",
                tips="রসিদ না দিলে সেটির জন্যও আলাদা অভিযোগ করা যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="ইমেইল বা ভোক্তা অধিকার পোর্টালে অভিযোগ দাখিল",
                description="মহাপরিচালক বরাবর অভিযোগ লিখে ncrp@dncrp.gov.bd অথবা সংশ্লিষ্ট জেলা কার্যালয়ের ইমেইলে পাঠিয়ে দিন।",
                action_url="https://dncrp.portal.gov.bd",
                tips="হটলাইন ১৬১২১ এ ফোন দিয়েও নির্দেশনা নেওয়া যায়।"
            ),
            ApplicationStep(
                step_number=3,
                title="উভয় পক্ষের শুনানি ও ২৫% নগদ অর্থ পুরস্কার লাভ",
                description="নির্বাহী ম্যাজিস্ট্রেট বা সহকারী পরিচালক উভয় পক্ষকে শুনানিতে ডাকবেন। অভিযোগ প্রমাণিত হলে জরিমানার ২৫% টাকা নগদে অভিযোগকারীকে বুঝিয়ে দেওয়া হয়।"
            )
        ],
        official_portal_url="https://dncrp.gov.bd",
        application_url="https://dncrp.portal.gov.bd",
        citizen_charter_url="https://dncrp.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: ভোক্তা অধিকার আইন সাধারণ নাগরিকের সুরক্ষার ঢাল। অভিযোগ করতে কোনো উকিল বা মধ্যস্বত্বভোগী লাগে না। কোনো সমস্যা হলে সরাসরি ভোক্তা বাতায়ন ১৬১২১ এ ফোন করুন।"
    ))

    # 61. ক্যানসার, কিডনি ও লিভার সিরোসিস রোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান
    services.append(CitizenService(
        service_id="bd-dss-cancer-kidney-special-grant-50k",
        title_bn="ক্যানসার, কিডনি, লিভার সিরোসিস ও হৃদরোগীদের ৫০,০০০ টাকা সরকারি এককালীন অনুদান নির্দেশিকা",
        title_en="Government One-time 50000 Taka Grant for Cancer & Kidney Patients Official Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়",
        summary="ক্যানসার, কিডনি রোগ, লিভার সিরোসিস, স্ট্রোকে অবশ, জন্মগত হৃদরোগ ও থ্যালাসেমিয়া আক্রান্ত অসচ্ছল রোগীদের চিকিৎসার জন্য সমাজকল্যাণ মন্ত্রণালয় প্রতি বছর এককালীন ৫০,০০০ টাকা করে আর্থিক সহায়তা প্রদান করে। সরকারি হাসপাতালের আশপাশে দালালরা রোগীদের বিভ্রান্ত করে টাকা কাটার চেষ্টা করে, অথচ আবেদন সম্পূর্ণ বিনামূল্যে এবং টাকা সরাসরি রোগীর ব্যাংক অ্যাকাউন্টে চলে আসে।",
        official_fees=[
            ServiceFee(
                category_name="চিকিৎসা অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="আবেদনের জন্য কোনো সরকারি ফি বা খরচ নেই।"
            )
        ],
        processing_time_sla="কমিটির অনুমোদন সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা সমাজসেবা কার্যালয়ের নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="বিনামূল্যে সংগৃহীত মূল ফরম",
                how_to_obtain="উপজেলা সমাজসেবা কার্যালয় বা dss.gov.bd থেকে ডাউনলোড"
            ),
            RequiredDocument(
                name="রেজিস্টার্ড সরকারি বিশেষজ্ঞ চিকিৎসক বা বিভাগীয় প্রধানের প্রত্যায়িত মেডিকেল রিপোর্ট",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল ব্যবস্থাপত্র ও ডায়াগনস্টিক রিপোর্ট"
            ),
            RequiredDocument(
                name="সিভিল সার্জন বা সরকারি হাসপাতালের পরিচালকের সুপারিশপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সুপারিশ"
            ),
            RequiredDocument(
                name="রোগীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন সনদ",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="রোগীর নিজের নামে তফসিলি ব্যাংকের একাউন্টের চেকের পাতার ফটোকপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="চিকিৎসক ও সিভিল সার্জনের প্রত্যয়ন সংগ্রহ",
                description="সরকারি মেডিকেল কলেজ বা হাসপাতালের বিশেষজ্ঞ ডাক্তারের প্রেসক্রিপশন নিয়ে জেলার সিভিল সার্জন থেকে সিল ও প্রত্যয়ন নিন।",
                tips="দালাল ছাড়াই সরাসরি সিভিল সার্জন অফিসে ফাইল জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা বা জেলা সমাজসেবা কার্যালয়ে আবেদন জমা",
                description="রোগীর স্থায়ী ঠিকানার উপজেলা সমাজসেবা অফিসারের নিকট আবেদন ফরম ও চেকের পাতার কপিসহ জমা দিন।",
                action_url="https://dss.gov.bd",
                tips="দালালের কোনো ভূমিকা নেই, কমিটি প্রতি মাসে আবেদন যাচাই করে।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি রোগীর ব্যাংক হিসাবে ৫০,০০০ টাকার চেক বা ইএফটি",
                description="মঞ্জুরিকৃত অনুদানের ৫০,০০০ টাকা সরাসরি বাংলাদেশ ব্যাংকের মাধ্যমে রোগীর ব্যাংক অ্যাকাউন্টে ইলেকট্রনিক ফান্ড ট্রান্সফার (EFT) হয়ে জমা হবে।"
            )
        ],
        official_portal_url="https://dss.gov.bd",
        application_url="https://dss.gov.bd",
        citizen_charter_url="https://dss.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: রোগাক্রান্ত অসহায় মানুষের টাকা মেরে খাওয়া মহাপাপ। কোনো হাসপাতালের কর্মচারী বা সমাজসেবা অফিসের কোনো দালাল অনুদান পাইয়ে দেওয়ার বিনিময়ে ৫,০০০-১০,০০০ টাকা কাটতে চাইলে সাথে সাথে জেলা প্রশাসক বা দুদক হেল্পলাইন ১০৬ এ অভিযোগ দায়ের করুন।"
    ))

    # 62. প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা
    services.append(CitizenService(
        service_id="bd-wewb-deceased-migrant-worker-compensation",
        title_bn="প্রবাসে মৃত কর্মীর মরদেহ পরিবহন, ৩৫,০০০ টাকা দাফন অনুদান ও ৩ লাখ টাকা পরিবার সহায়তা নির্দেশিকা",
        title_en="Deceased Migrant Worker Body Repatriation 35k Burial Grant & 3 Lakh Financial Aid Guide",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="ওয়েজ আর্নার্স কল্যাণ বোর্ড (WEWB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
        summary="বিদেশে কর্মরত অবস্থায় কোনো রেমিট্যান্স যোদ্ধা মৃত্যুবরণ করলে সরকার সরকারি খরচে বিমানযোগে মরদেহ দেশে ফিরিয়ে আনে। বিমানবন্দরে অবতরণের সাথে সাথে দাফন-কাফনের জন্য পরিবারকে তাৎক্ষণিক নগদ ৩৫,০০০ টাকা এবং পরবর্তীতে মৃতের পরিবারকে এককালীন ৩,০০,০০০ (তিন লাখ) টাকা আর্থিক অনুদান প্রদান করা হয়।",
        official_fees=[
            ServiceFee(
                category_name="দাফন অনুদান ও আর্থিক সহায়তা আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকার ও ওয়েজ আর্নার্স কল্যাণ বোর্ডের সম্পূর্ণ ফ্রি মানবিক সেবা।"
            )
        ],
        processing_time_sla="বিমানবন্দরে নগদ ৩৫,০০০ টাকা তাৎক্ষণিক | ৩ লাখ টাকার অনুদান: ৩০-৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="প্রবাসী কর্মীর পাসপোর্ট কপি ও ভিসা/আকামা কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বাংলাদেশ দূতাবাস বা সংশ্লিষ্ট দেশের মৃত্যু সনদ (Death Certificate)",
                is_mandatory=True,
                format_type="দূতাবাস সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="বিএমইটি স্মার্ট কার্ড বা ডাটাবেজ রেজিস্ট্রেশন কপি",
                is_mandatory=False,
                format_type="প্রিন্ট কপি"
            ),
            RequiredDocument(
                name="মৃত কর্মীর বৈধ ওয়ারিশান সনদপত্র (ইউপি চেয়ারম্যান বা মেয়র কর্তৃক প্রদত্ত)",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            ),
            RequiredDocument(
                name="ওয়ারিশগণের ব্যাংক হিসাবের চেকের পাতার কপি ও এনআইডি",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিমানবন্দর প্রবাসী কল্যাণ ডেস্ক থেকে ৩৫,০০০ টাকা নগদ গ্রহণ",
                description="মরদেহ হযরত শাহজালাল বা অন্য আন্তর্জাতিক বিমানবন্দরে পৌঁছামাত্র প্রবাসী কল্যাণ ডেস্ক থেকে ওয়ারিশের হাতে নগদ ৩৫,০০০ টাকা প্রদান করা হয়।",
                tips="কোনো ঘুষ বা ফি নেই, তাৎক্ষণিক রশিদ নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ওয়েজ আর্নার্স কল্যাণ বোর্ড বরাবর ৩ লাখ টাকা আর্থিক অনুদানের আবেদন",
                description="জেলা কর্মসংস্থান ও জনশক্তি অফিস (DEMO) অথবা সরাসরি বোর্ডের ওয়েবসাইটে ওয়ারিশান সনদসহ আবেদন জমা দিন।",
                action_url="https://wewb.gov.bd",
                tips="দালাল এড়িয়ে সরাসরি ডেমো অফিসে যান।"
            ),
            ApplicationStep(
                step_number=3,
                title="৩,০০,০০০ টাকার সরকারি চেক হস্তান্তর",
                description="যাচাই-বাছাই শেষে জেলা প্রশাসক বা জনশক্তি অফিসের মাধ্যমে সকল ওয়ারিশের নামে পৃথক অনুপাতে মোট ৩ লাখ টাকার সরকারি চেক প্রদান করা হয়।"
            )
        ],
        official_portal_url="https://wewb.gov.bd",
        application_url="https://wewb.gov.bd",
        citizen_charter_url="https://wewb.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: রেমিট্যান্স যোদ্ধার রক্তে ভেজা টাকার উপর কোনো দালালের হক নেই। বিমানবন্দর বা জেলায় কোনো মধ্যস্বত্বভোগী চেক ছাড়িয়ে দেওয়ার নাম করে পারসেন্টেজ চাইলে সোজা প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ অথবা দুদক ১০৬ এ কল দিন।"
    ))

    # 63. ১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন
    services.append(CitizenService(
        service_id="bd-nid-under-18-minor-smartcard",
        title_bn="১৬-১৭ বছর বয়সী অপ্রাপ্তবয়স্ক নাগরিকদের স্মার্ট জাতীয় পরিচয়পত্র আবেদন নির্দেশিকা",
        title_en="Under-18 Minor Citizen Smart National ID Card Application Official Guide",
        category="জাতীয় পরিচয়পত্র (NID)",
        department_agency="নির্বাচন কমিশন সচিবালয় (ইসি)",
        summary="১৬ ও ১৭ বছর বয়সী তরুণ-তরুণীদের ব্যাংক হিসাব খোলা, বিদেশে পড়াশোনা, পাসপোর্ট ও ড্রাইভিং লাইসেন্স পাওয়ার সুবিধার্থে নির্বাচন কমিশন ১৮ বছরের আগেই এনআইডি রেজিস্ট্রেশন ও স্মার্ট কার্ড প্রদান করে (তারা ১৮ বছর পূর্ণ হলে স্বয়ংক্রিয়ভাবে ভোটার তালিকায় অন্তর্ভুক্ত হন)। আবেদন সম্পূর্ণ বিনামূল্যে।",
        official_fees=[
            ServiceFee(
                category_name="নতুন অপ্রাপ্তবয়স্ক এনআইডি নিবন্ধন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো সরকারি ফি নেই।"
            )
        ],
        processing_time_sla="বায়োমেট্রিক গ্রহণের পর ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ (BDRIS ভেরিফাইড)",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রত্যয়নপত্র বা জেএসসি/এসএসসি রেজিস্ট্রেশন কার্ড",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="বিদ্যুৎ বিলের কপি বা হোল্ডিং ট্যাক্স রশিদ (ঠিকানা প্রমাণের জন্য)",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="অনলাইনে নতুন ভোটার হিসেবে তথ্য এন্ট্রি",
                description="https://services.nidw.gov.bd পোর্টালে ঢুকে নিজের নাম, পিতামাতার নাম, রক্তের গ্রুপ ও ঠিকানা পূরণ করে ফরম প্রিন্ট করুন।",
                action_url="https://services.nidw.gov.bd",
                tips="অনলাইন জন্ম নিবন্ধনের সাথে নামের বানান হুবহু মিল রাখুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা/থানা নির্বাচন অফিসে বায়োমেট্রিক প্রদান",
                description="প্রিন্টকৃত ফরম ও প্রয়োজনীয় নথিপত্রসহ নির্বাচন অফিসে গিয়ে ১০ আঙুলের ছাপ, চোখের আইরিশ স্ক্যান ও ছবি দিন।",
                tips="কোনো কম্পিউটার দোকানদারকে ফরম জমার জন্য টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইন এনআইডি স্লিপ ও স্মার্ট কার্ড গ্রহণ",
                description="বায়োমেট্রিক গ্রহণের পর প্রদত্ত স্লিপ নম্বর দিয়ে অনলাইন পোর্টাল থেকে এনআইডির সফট কপি ডাউনলোড করে সঙ্গে সঙ্গেই পাসপোর্ট বা ব্যাংকে ব্যবহার করা যাবে।"
            )
        ],
        official_portal_url="https://nidw.gov.bd",
        application_url="https://services.nidw.gov.bd",
        citizen_charter_url="https://ecs.portal.gov.bd",
        anti_broker_warning="সতর্কতা: অপ্রাপ্তবয়স্কদের এনআইডি সম্পূর্ণ বিনামূল্যে দেওয়া হয়। দালালরা তারিখ আগিয়ে দেওয়ার কথা বলে টাকা চাইলে নির্বাচন কমিশনের হটলাইন ১০৫ এ অভিযোগ জানান।"
    ))

    # 64. প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন
    services.append(CitizenService(
        service_id="bd-expatriate-embassy-nid-smartcard",
        title_bn="প্রবাসী বাংলাদেশিদের দূতাবাসে এনআইডি স্মার্ট কার্ড নিবন্ধন ও নবায়ন নির্দেশিকা",
        title_en="Expatriate Bangladeshi Embassy NID Smart Card Registration & Renewal Guide",
        category="জাতীয় পরিচয়পত্র (NID)",
        department_agency="নির্বাচন কমিশন সচিবালয় (ইসি) ও পররাষ্ট্র মন্ত্রণালয়",
        summary="সংযুক্ত আরব আমিরাত, সৌদি আরব, কুয়েত, কাতার, মালয়েশিয়া, ইতালি ও যুক্তরাজ্যে বসবাসরত প্রবাসী বাংলাদেশিরা এখন নিজ নিজ দেশের বাংলাদেশ দূতাবাসে গিয়ে সরাসরি বায়োমেট্রিক দিয়ে স্মার্ট জাতীয় পরিচয়পত্র গ্রহণ করতে পারেন। দেশে না এসেই এনআইডি সম্পন্ন করা সম্ভব।",
        official_fees=[
            ServiceFee(
                category_name="দূতাবাসে নতুন এনআইডি আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="প্রথমবার এনআইডি স্মার্ট কার্ড তৈরিতে কোনো ফি নেওয়া হয় না।"
            )
        ],
        processing_time_sla="নির্বাচন কমিশনের কেন্দ্রীয় ভেরিফিকেশন সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বৈধ বা মেয়াদোত্তীর্ণ বাংলাদেশি পাসপোর্ট কপি",
                is_mandatory=True,
                format_type="ফটোকপি ও মূল পাসপোর্ট প্রদর্শন"
            ),
            RequiredDocument(
                name="অনলাইন ১৭ ডিজিটের জন্ম নিবন্ধন সনদ",
                is_mandatory=True,
                format_type="অনলাইন ভেরিফাইড কপি"
            ),
            RequiredDocument(
                name="বিদেশের বৈধ আবাসিক ভিসা / রেসিডেন্স পারমিট / ইকামা / সিভিল আইডি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পিতা বা মাতার এনআইডি বা আত্মীয়ের ওয়ারিশান সনদ",
                is_mandatory=False,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="প্রবাসী পোর্টালে অনলাইন আবেদন",
                description="https://services.nidw.gov.bd পোর্টালে গিয়ে 'প্রবাসী আবেদন' অপশনে ক্লিক করে দেশের ঠিকানা ও পাসপোর্টের তথ্য পূরণ করুন।",
                action_url="https://services.nidw.gov.bd",
                tips="বিদেশে যে মিশনে বায়োমেট্রিক দিতে চান সেটি সিলেক্ট করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="বাংলাদেশ দূতাবাসে অ্যাপয়েন্টমেন্ট ও বায়োমেট্রিক",
                description="নির্ধারিত দিনে দূতাবাসে উপস্থিত হয়ে আঙুলের ছাপ, আইরিশ ও ছবি দিন। দূতাবাস টিম ডাটা নির্বাচন কমিশনে পাঠাবে।",
                tips="দালাল মুক্তভাবে সরাসরি দূতাবাসে যান।"
            ),
            ApplicationStep(
                step_number=3,
                title="স্মার্ট কার্ড ডেলিভারি ও অনলাইন এনআইডি ডাউনলোড",
                description="অনুমোদিত হলে অনলাইন থেকে রঙিন এনআইডি ডাউনলোড করা যাবে এবং নির্দিষ্ট সময়ে দূতাবাস থেকে স্মার্ট কার্ড সংগ্রহ করতে পারবেন।"
            )
        ],
        official_portal_url="https://nidw.gov.bd",
        application_url="https://services.nidw.gov.bd",
        citizen_charter_url="https://ecs.portal.gov.bd",
        anti_broker_warning="সতর্কতা: বিদেশের কোনো এজেন্সি বা ট্রাভেল এজেন্টের কাছে পাসপোর্ট বা এনআইডি বানানোর চুক্তি করবেন না। দূতাবাস ছাড়া অন্য কোথাও এনআইডি কার্যক্রম সম্পূর্ণ অবৈধ।"
    ))

    # 65. জাতীয় আইনগত সহায়তা সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও আইনি সেবা
    services.append(CitizenService(
        service_id="bd-nlasko-free-legal-aid-govt-lawyer",
        title_bn="জাতীয় আইনগত সহায়তা প্রদান সংস্থা (১৬৪৩০) - সম্পূর্ণ বিনামূল্যে সরকারি আইনজীবী ও বিচারিক সেবা",
        title_en="National Legal Aid Services Organization (16430) Free Govt Lawyer Official Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়",
        summary="অর্থের অভাবে কোনো নাগরিক যেন ন্যায়বিচার থেকে বঞ্চিত না হন, সেজন্য সরকার প্রত্যেক জেলা জজ আদালতে সরকারি খরচে আইনজীবী নিয়োগ, কোর্ট ফি প্রদান এবং মামলা পরিচালনার সম্পূর্ণ ব্যয় বহন করে। গরিব কৃষক, দিনমজুর, নির্যাতিত নারী ও অসচ্ছল যে-কেউ টোল-ফ্রি হটলাইন ১৬৪৩০ এ কল করে এই সেবা পেতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="আইনজীবী নিয়োগ ও মামলা পরিচালনা খরচ",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকার নিজ তহবিল থেকে আইনজীবীর ফি ও কোর্ট ফি পরিশোধ করে।"
            )
        ],
        processing_time_sla="আবেদন পাওয়ার পর ৩ থেকে ৭ কার্যদিবসের মধ্যে আইনজীবী বরাদ্দ",
        required_documents=[
            RequiredDocument(
                name="জেলা লিগ্যাল এইড অফিসের নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="বিনামূল্যে সরবরাহকৃত ফরম",
                how_to_obtain="জেলা জজ আদালত প্রাঙ্গণে লিগ্যাল এইড অফিস থেকে সংগৃহীত"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মামলার নথিপত্র (যদি ইতোমধ্যে মামলা হয়ে থাকে যেমন আরজি/অভিযোগপত্র/চার্জশিটের কপি)",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর অসচ্ছলতা প্রত্যয়নপত্র (ইউপি চেয়ারম্যান বা কাউন্সিলর প্রদত্ত)",
                is_mandatory=False,
                format_type="সিলযুক্ত সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="টোল-ফ্রি হটলাইন ১৬৪৩০ এ কল বা জেলা অফিসে যোগাযোগ",
                description="যেকোনো মোবাইল থেকে ১৬৪৩০ নম্বরে বিনামূল্যে কল করে আইনি পরামর্শ নিন অথবা সরাসরি জেলা জজ আদালতের লিগ্যাল এইড অফিসারের কাছে যান।",
                action_url="https://nlaso.gov.bd",
                tips="১৬৪৩০ কল করতে কোনো ব্যালেন্স কাটে না।"
            ),
            ApplicationStep(
                step_number=2,
                title="আবেদন দাখিল ও বিকল্প বিরোধ নিষ্পত্তি (ADR)",
                description="লিগ্যাল এইড কর্মকর্তা উভয় পক্ষকে ডেকে সমঝোতা (ADR) করার চেষ্টা করবেন যাতে মামলা ছাড়াই বিরোধ মিটে যায়।",
                tips="সমঝোতা না হলে জেলা কমিটি সরকারি আইনজীবী নিয়োগ দেবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি খরচে মামলা পরিচালনা",
                description="নিযুক্ত আইনজীবী আপনার পক্ষে আদালতে মামলা লড়বেন। আপনাকে বা আপনার পরিবারকে উকালতনামা বা কোর্ট ফির জন্য কোনো টাকা দিতে হবে না।"
            )
        ],
        official_portal_url="https://nlaso.gov.bd",
        application_url="https://nlaso.gov.bd",
        citizen_charter_url="https://nlaso.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: আদালতের বারান্দায় দালালরা মানুষকে মিথ্যা আশ্বাস দিয়ে সর্বস্বান্ত করে। আপনার অর্থ না থাকলে সোজা জেলা জজ আদালতের লিগ্যাল এইড অফিসে যান। সরকারি আইনজীবী আপনার জন্য বিনে পয়সায় লড়াই করবেন।"
    ))

    # 66. পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায়
    services.append(CitizenService(
        service_id="bd-family-court-denmohor-child-support",
        title_bn="পারিবারিক আদালত ও শালিসি কাউন্সিল: দেনমোহর ও শিশু ভরণপোষণ আদায় নির্দেশিকা",
        title_en="Family Court & Arbitration Council Denmohor & Child Maintenance Official Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="আইন ও বিচার বিভাগ ও স্থানীয় সরকার",
        summary="বিবাহ বিচ্ছেদ বা দাম্পত্য কলহের ক্ষেত্রে স্বামীর নিকট থেকে বকেয়া দেনমোহর এবং সন্তানের মাসিক ভরণপোষণ আইনগতভাবে আদায়ের প্রক্রিয়া। পারিবারিক আদালত অধ্যাদেশ ২০২৩ অনুযায়ী নামমাত্র মাত্র ৫০ টাকার কোর্ট ফি দিয়ে সিনিয়র সহকারী জজ (পারিবারিক আদালত)-এ মামলা করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="পারিবারিক আদালত আরজি কোর্ট ফি",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="পারিবারিক আদালতে দেনমোহর বা ভরণপোষণ মামলার কোর্ট ফি ফিক্সড মাত্র ৫০ টাকা।"
            )
        ],
        processing_time_sla="আইন অনুযায়ী সমন জারির পর ৯০ থেকে ১৮০ কার্যদিবসের মধ্যে নিষ্পত্তি",
        required_documents=[
            RequiredDocument(
                name="মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড নকল",
                is_mandatory=True,
                format_type="কাজি অফিস থেকে সংগৃহীত মূল নকল"
            ),
            RequiredDocument(
                name="সন্তানের জন্ম নিবন্ধন সনদ (ভরণপোষণের দাবির ক্ষেত্রে)",
                is_mandatory=False,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="তালাকের নোটিশ বা বিচ্ছেদের প্রমাণপত্র (যদি বিচ্ছেদ হয়ে থাকে)",
                is_mandatory=False,
                format_type="কপি"
            ),
            RequiredDocument(
                name="স্বামীর আর্থিক সামর্থ্য ও কর্মস্থলের বিবরণ",
                is_mandatory=False,
                format_type="বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলরে শালিসির আবেদন",
                description="প্রথমে সংশ্লিষ্ট ইউপি চেয়ারম্যান বা মেয়রের শালিসি কাউন্সিলে ভরণপোষণ ও দেনমোহর মেটানোর জন্য আবেদন করতে পারেন।",
                tips="শালিসে না মানলে পারিবারিক আদালতে সরাসরি যাওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="পারিবারিক আদালতে ৫০ টাকার কোর্ট ফি দিয়ে মামলা দায়ের",
                description="স্ত্রী যে এলাকায় বসবাস করেন সেই এলাকার পারিবারিক আদালতে আরজি দাখিল করুন (লিগ্যাল এইডের ফ্রি আইনজীবী নেওয়া যায়)।",
                tips="৫০ টাকার বেশি কোর্ট ফি লাগে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="আদালতের রায় ও ডিক্রি জারি",
                description="আদালত দেনমোহর ও সন্তানের মাসিক খরচ নির্ধারণ করে রায় দেবেন। স্বামী টাকা না দিলে দেওয়ানি জেলে প্রেরণ বা সম্পত্তি ক্রোকের আদেশ জারি হবে।"
            )
        ],
        official_portal_url="https://lawjusticediv.gov.bd",
        application_url="https://nlaso.gov.bd",
        citizen_charter_url="https://lawjusticediv.portal.gov.bd",
        anti_broker_warning="সতর্কতা: দেনমোহর নারীর ধর্মীয় ও আইনি মৌলিক অধিকার। কোনো দালাল বা মধ্যস্থতাকারী দেনমোহর মাফ করিয়ে দেওয়ার মিথ্যা চাপ প্রয়োগ করতে পারে না। প্রয়োজনে জাতীয় হেল্পলাইন ১০৯ অথবা লিগ্যাল এইড ১৬৪৩০ এ সহায়তা নিন।"
    ))

    # 67. বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও ভুল বিল সংশোধন
    services.append(CitizenService(
        service_id="bd-electricity-meter-load-extension-relocation",
        title_bn="বিদ্যুৎ মিটারের লোড বৃদ্ধি, মিটার স্থানান্তর ও অতিরিক্ত বিল সংশোধন নির্দেশিকা",
        title_en="Electricity Meter Load Extension Relocation & Bill Correction Guide",
        category="বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ",
        department_agency="বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB), ডেসকো, ডিপিডিসি",
        summary="বাসাবাড়িতে এসি বা ভারী যন্ত্রপাতি ব্যবহারের জন্য মিটারের অনুমোদিত লোড বৃদ্ধি করা, বাড়ি পুনর্নির্মাণের জন্য মিটার স্থানান্তর এবং অতিরিক্ত ভূতুড়ে বিদ্যুৎ বিল সংশোধনের অফিশিয়াল নিয়মাবলী। গ্রাহকরা সরাসরি অনলাইনে বা অভিযোগ কেন্দ্রে গিয়ে অতিরিক্ত দালাল ফি ছাড়াই সেবা নিতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="বিল সংশোধন আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="ভুল বিল বা অতিরিক্ত বিল সংশোধনের জন্য কোনো ফি লাগে না।"
            ),
            ServiceFee(
                category_name="মিটার লোড বৃদ্ধি জামানত (কিলোওয়াট প্রতি বৃদ্ধি)",
                amount_bdt=600.0,
                vat_included=True,
                payment_method="বিদ্যুৎ বিলের সাথে বা ব্যাংকে",
                remarks="ব্রেব/ডেসকো নিয়ম অনুযায়ী কিলোওয়াট প্রতি সরকারি নির্ধারিত সিকিউরিটি ডিপোজিট।"
            ),
            ServiceFee(
                category_name="মিটার স্থানান্তর চার্জ",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="অফিশিয়াল ব্যাংক চালান",
                remarks="একই চত্বরে বা নিকটবর্তী স্থানে মিটার স্থানান্তর।"
            )
        ],
        processing_time_sla="বিল সংশোধন: তাৎক্ষণিক (২৪ ঘণ্টা) | লোড বৃদ্ধি ও স্থানান্তর: ৩ থেকে ৭ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সর্বশেষ পরিশোধিত বিদ্যুৎ বিলের কপি",
                is_mandatory=True,
                format_type="রশিদ কপি"
            ),
            RequiredDocument(
                name="মিটারের বর্তমান রিডিং এর স্পষ্ট ছবি (বিল সংশোধনের ক্ষেত্রে)",
                is_mandatory=True,
                format_type="মোবাইল ছবি"
            ),
            RequiredDocument(
                name="মিটার গ্রাহকের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বাড়ির মালিকানার প্রমাণ বা হোল্ডিং ট্যাক্স রশিদ (স্থানান্তরের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="মিটারের ডিসপ্লে রিডিং এর ছবি তোলা",
                description="কাগজের বিলের সাথে মিটারের ডিসপ্লেতে প্রদর্শিত বর্তমান ইউনিট রিডিং এর ছবি তুলুন। রিডিং বেশি দেখানো থাকলে তাৎক্ষণিক অসঙ্গতি প্রমাণ হবে।",
                tips="বিল পরিশোধের ডেট পার হওয়ার আগেই অভিযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="অভিযোগ কেন্দ্র (Complain Center) বা পোর্টালে আবেদন",
                description="সংশ্লিষ্ট পল্লী বিদ্যুৎ জোনাল অফিস বা ডেসকো/ডিপিডিসি গ্রাহক সেবা কেন্দ্রে লিখিত দিন অথবা পোর্টালে লোড বৃদ্ধির আবেদন সাবমিট করুন।",
                tips="লাইনম্যান বা কোনো দালালের সাথে আর্থিক লেনদেন করবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সংশোধিত বিল ও লোড সমন্বয় অনুমোদন",
                description="কর্মকর্তারা তাৎক্ষণিক বিল সংশোধন করে কিউআর কোডযুক্ত নতুন বিল ইস্যু করবেন যা ব্যাংকে বা বিকাশে জমা দেওয়া যাবে।"
            )
        ],
        official_portal_url="https://powerdivision.gov.bd",
        application_url="https://desco.org.bd",
        citizen_charter_url="https://reb.gov.bd",
        anti_broker_warning="সতর্কতা: পল্লী বিদ্যুৎ ও বিদ্যুৎ অফিসে দালাল চক্র লোড বাড়িয়ে দেওয়া বা বিল কমিয়ে দেওয়ার নাম করে মোটা টাকা হাতিয়ে নেয়। বিল সংশোধন একটি সম্পূর্ণ ফ্রি সেবা। অতিরিক্ত টাকা চাইলে বিদ্যুৎ মন্ত্রণালয়ের কেন্দ্রীয় কল সেন্টার ১৬৯৯৯ এ তাৎক্ষণিক কল দিন।"
    ))

    # 68. ওয়াসা গভীর নলকূপ স্থাপন অনুমতি, পরিবেশ ছাড় ও নবায়ন লাইসেন্স
    services.append(CitizenService(
        service_id="bd-wasa-deep-tubewell-permission-license",
        title_bn="ওয়াসা গভীর নলকূপ (Deep Tube-well) স্থাপন অনুমতি ও লাইসেন্স নবায়ন নির্দেশিকা",
        title_en="WASA Deep Tube-well Installation Permission & License Renewal Guide",
        category="নাগরিক ইউটিলিটি ও পানি",
        department_agency="ঢাকা ওয়াসা, চট্টগ্রাম ওয়াসা, স্থানীয় সরকার বিভাগ",
        summary="বহুতল ভবন, শিল্প কারখানা বা বাণিজ্যিক প্রতিষ্ঠানে ভূগর্ভস্থ পানি উত্তোলনের জন্য গভীর নলকূপ স্থাপনের পূর্বে ওয়াসার বাধ্যতামূলক এনওসি ও লাইসেন্স গ্রহণ করতে হয়। অবৈধ নলকূপ স্থাপন আইনত দণ্ডনীয় অপরাধ। দালালদের খপ্পরে না পড়ে সরাসরি ঢাকা ওয়াসা ও চট্টগ্রাম ওয়াসার পোর্টালে আবেদন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="গভীর নলকূপ অনুমতি আবেদন ফি",
                amount_bdt=5000.0,
                vat_included=False,
                payment_method="ওয়াসা অনুমোদিত ব্যাংক পে-অর্ডার / চালান",
                remarks="অফেরতযোগ্য আবেদন ফি।"
            ),
            ServiceFee(
                category_name="বার্ষিক গভীর নলকূপ লাইসেন্স নবায়ন ফি",
                amount_bdt=12000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="নলকূপের আকার ও ব্যাস অনুযায়ী বাৎসরিক লাইসেন্স ফি।"
            )
        ],
        processing_time_sla="হাইড্রোলজিক্যাল ও ফিজিবিলিটি জরিপ সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="ওয়াসার নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="অনলাইন আবেদন প্রিন্ট"
            ),
            RequiredDocument(
                name="জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="রাজউক বা স্থানীয় কর্তৃপক্ষের অনুমোদিত ভবনের প্ল্যান",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত ছাড়পত্র (শিল্প প্রতিষ্ঠানের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ওয়াসা পোর্টালে অনলাইন আবেদন দাখিল",
                description="https://dwasa.org.bd পোর্টালে নলকূপের পাইপের ব্যাস ও কাঙ্ক্ষিত গভীরতা উল্লেখ করে প্রয়োজনীয় ডকুমেন্ট আপলোড করুন।",
                action_url="https://dwasa.org.bd",
                tips="দালাল ছাড়াই সরাসরি নিজের প্রতিষ্ঠানের নামে আবেদন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ওয়াসা প্রকৌশলী দল কর্তৃক ফিজিবিলিটি স্টাডি",
                description="ওয়াসার কারিগরি টিম সংশ্লিষ্ট এলাকার ভূগর্ভস্থ পানির স্তর পরীক্ষা করবে এবং পার্শ্ববর্তী ওয়াসা সাপ্লাই লাইনের অবস্থা যাচাই করবে।",
                tips="তদন্তকারী দলকে কোনো ব্যক্তিগত অর্থ দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="পে-অর্ডার জমা ও অফিশিয়াল অনুমতিপত্র গ্রহণ",
                description="অনুমোদনপত্র প্রাপ্তির পর নির্ধারিত লাইসেন্স ফি ব্যাংকে জমা দিয়ে কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://dwasa.org.bd",
        application_url="https://dwasa.org.bd",
        citizen_charter_url="https://dwasa.portal.gov.bd",
        anti_broker_warning="সতর্কতা: অবৈধ গভীর নলকূপের বিরুদ্ধে ভ্রাম্যমাণ আদালত পরিচালনা করে লাখ টাকা জরিমানা ও জেল দেওয়ার বিধান রয়েছে। কোনো দালাল যদি বলে ওয়াসা অনুমোদন ছাড়াই নলকূপ চালানো যাবে—তা সম্পূর্ণ মিথ্যা। যে-কোনো অনিয়মে ১৬১৬২ ওয়াসালিন্কে অভিযোগ করুন।"
    ))

    # 69. কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র
    services.append(CitizenService(
        service_id="bd-dife-factory-license-safety-clearance",
        title_bn="কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) ফ্যাক্টরি লাইসেন্স ও নিরাপত্তা ছাড়পত্র নির্দেশিকা",
        title_en="DIFE Factory License & Occupational Safety Clearance Official Guide",
        category="শিল্প ও পরিবেশ সেবা",
        department_agency="কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE), শ্রম ও কর্মসংস্থান মন্ত্রণালয়",
        summary="যেকোনো শিল্প কারখানা, গার্মেন্টস, ওয়ার্কশপ বা ম্যানুফ্যাকচারিং প্ল্যান্ট স্থাপনের জন্য বাংলাদেশ শ্রম আইন ২০০৬ অনুযায়ী ডিআইএফই (DIFE) থেকে লে-আউট প্ল্যান অনুমোদন ও ফ্যাক্টরি লাইসেন্স গ্রহণ বাধ্যতামূলক। শ্রমিকের সংখ্যা ও ব্যবহৃত মোটর হর্সপাওয়ারের ভিত্তিতে সরকারি ফি নির্ধারিত হয়।",
        official_fees=[
            ServiceFee(
                category_name="লে-আউট প্ল্যান অনুমোদন ফি (শ্রমিক সংখ্যা অনুযায়ী)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="এ-চালান (A-Challan)",
                remarks="শ্রমিক সংখ্যা ১০-৫০ জনের জন্য ১,৫০০ টাকা; ৫০ জনের বেশি হলে আনুপাতিক হারে বৃদ্ধি।"
            ),
            ServiceFee(
                category_name="বার্ষিক কারখানা লাইসেন্স ফি",
                amount_bdt=3000.0,
                vat_included=True,
                payment_method="এ-চালান",
                remarks="কারখানার মোট অশ্বশক্তি ও শ্রমিক অনুযায়ী ৩,০০০ থেকে সর্বোচ্চ ৩০,০০০ টাকা।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন ও পরিদর্শনের পর ১৫ থেকে ২১ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="কারখানার লে-আউট প্ল্যান ও মেশিনারিজের অবস্থান নকশা",
                is_mandatory=True,
                format_type="সিভিল ইঞ্জিনিয়ারের ব্লু-প্রিন্ট"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ফায়ার সার্ভিসের ফায়ার লাইসেন্স সনদ",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ভাড়া চুক্তিপত্র অথবা কারখানার নিজস্ব জায়গার দলিল",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ডিআইএফই পোর্টালে অনলাইন লাইসেন্স আবেদন",
                description="https://lima.dife.gov.bd (লিমস সিস্টেম)-এ ঢুকে প্রতিষ্ঠানের তথ্য, শ্রমিকের সংখ্যা ও যন্ত্রপাতি বিবরণ দিন।",
                action_url="https://lima.dife.gov.bd",
                tips="সব সরকারি ফি সরাসরি এ-চালানের মাধ্যমে জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ডিআইএফই শ্রম পরিদর্শক দল কর্তৃক কারখানার কর্মপরিবেশ পরিদর্শন",
                description="ইন্সপেক্টর দল অগ্নিনির্বাপণ ব্যবস্থা, প্রাথমিক চিকিৎসা বক্স, বায়ু চলাচল ও জরুরি নির্গমন পথ পরীক্ষা করবেন।",
                tips="দালালের কোনো জায়গা নেই, কোনো ত্রুটি থাকলে সরাসরি অফিস প্রধানকে জানান।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিজিটাল ফ্যাক্টরি লাইসেন্স ডাউনলোড",
                description="অনুমোদিত হলে লিমস পোর্টাল থেকে কিউআর কোড সম্বলিত ফ্যাক্টরি লাইসেন্স ডাউনলোড করা যায়।"
            )
        ],
        official_portal_url="https://dife.gov.bd",
        application_url="https://lima.dife.gov.bd",
        citizen_charter_url="https://dife.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ডিআইএফই লাইসেন্স এখন শতভাগ ডিজিটাল ও স্বচ্ছ। দালালদের খপ্পরে পড়লে অতিরিক্ত টাকা খোয়াবেন। কোনো পরিদর্শক অনৈতিক সুবিধা চাইলে শ্রম মন্ত্রণালয়ের অভিযোগ কেন্দ্র ১৬১৩৪ এ অভিযোগ দিন।"
    ))

    # 70. সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন
    services.append(CitizenService(
        service_id="bd-doc-cooperative-society-registration",
        title_bn="সমবায় অধিদপ্তর: সমবায় সমিতি নিবন্ধন, অডিট ও বাই-ল অনুমোদন নির্দেশিকা",
        title_en="Department of Cooperatives Society Registration Audit & Bylaws Approval Guide",
        category="ব্যবসা ও বাণিজ্য সেবা",
        department_agency="সমবায় অধিদপ্তর, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়",
        summary="কৃষক, সঞ্চয় ও ঋণদানকারী, যুব ও গৃহায়ন সমবায় সমিতি গঠনের জন্য সমবায় অধিদপ্তর থেকে প্রাতিষ্ঠানিক নিবন্ধন গ্রহণ করতে হয়। অনেকে ভুয়া সমবায় বানিয়ে সাধারণ মানুষের সঞ্চয় আত্মসাৎ করে। সঠিক নিয়মে ন্যূনতম ২০ জন সদস্য নিয়ে অনুমোদিত সরকারি বাই-ল দিয়ে জেলা বা উপজেলা সমবায় কর্মকর্তার কার্যালয়ে নামমাত্র সরকারি ফি দিয়ে নিবন্ধন নেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="প্রাথমিক সমবায় সমিতি নিবন্ধন ফি",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-৪৭৩১-০০০০-১৮০১)",
                remarks="কৃষি ও সাধারণ সমবায় সমিতির সরকারি ফি মাত্র ৩০০ টাকা।"
            ),
            ServiceFee(
                category_name="সঞ্চয় ও ঋণদান সমবায় সমিতি নিবন্ধন ফি",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="সঞ্চয় ও ক্ষুদ্রঋণ কার্যক্রম পরিচালনাকারী সমবায়।"
            )
        ],
        processing_time_sla="তদন্ত ও নথি যাচাই সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সমবায় অধিদপ্তরের নির্ধারিত আবেদন ফরম ও চার কপি উপ-আইন (Bylaws)",
                is_mandatory=True,
                format_type="সদস্যদের মূল স্বাক্ষরযুক্ত"
            ),
            RequiredDocument(
                name="প্রাথমিক সাধারণ সভার কার্যবিবরণী ও প্রস্তাব",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল কপি"
            ),
            RequiredDocument(
                name="সকল সদস্যের জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="সমিতির প্রাথমিক শেয়ার ও সঞ্চয় আমানতের ব্যাংক জমার বিবরণী",
                is_mandatory=True,
                format_type="ব্যাংক স্টেটমেন্ট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা সমবায় কর্মকর্তা বরাবর আবেদন",
                description="উপজেলা বা থানা সমবায় কর্মকর্তার নিকট চার কপি উপ-আইন ও চালানের কপিসহ আবেদন জমা দিন।",
                action_url="https://coop.gov.bd",
                tips="দালাল ছাড়া সরাসরি উপজেলা সমবায় অফিসে যান।"
            ),
            ApplicationStep(
                step_number=2,
                title="সমবায় ইন্সপেক্টর কর্তৃক প্রাথমিক তদন্ত",
                description="ইন্সপেক্টর সদস্যদের সাথে সরাসরি সাক্ষাৎ করবেন এবং সমিতির উদ্দেশ্য ও প্রাথমিক শেয়ার যাচাই করবেন।",
                tips="কোনো অনিয়ম বা উৎকোচ লেনদেন আইনত অপরাধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="নিবন্ধন সনদ ও সিলমোহরকৃত উপ-আইন গ্রহণ",
                description="উপজেলা বা জেলা সমবায় কর্মকর্তা নিবন্ধন সনদ ইস্যু করবেন এবং সমিতির নামে সরকারি অডিট নম্বর বরাদ্দ হবে।"
            )
        ],
        official_portal_url="https://coop.gov.bd",
        application_url="https://coop.gov.bd",
        citizen_charter_url="https://coop.portal.gov.bd",
        anti_broker_warning="সতর্কতা: সমবায় সমিতির নামে ব্যাংকিং বা উচ্চ সুদের ফাঁদ পাতা আইনত নিষিদ্ধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার নামে লাখ টাকা চাইলে সরাসরি জেলা সমবায় কর্মকর্তা বা দুর্নীতি দমন কমিশনে জানান।"
    ))

    # 71. বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স
    services.append(CitizenService(
        service_id="bd-sca-seed-fertilizer-dealership-license",
        title_bn="বীজ প্রত্যয়ন এজেন্সি ও কৃষি সম্প্রসারণ: বীজ ও সার ডিলারশিপ লাইসেন্স নির্দেশিকা",
        title_en="Seed Certification Agency & DAE Seed and Fertilizer Dealership License Guide",
        category="কৃষি ও খাদ্য নিরাপত্তা",
        department_agency="কৃষি সম্প্রসারণ অধিদপ্তর (DAE) ও বীজ প্রত্যয়ন এজেন্সি (SCA), কৃষি মন্ত্রণালয়",
        summary="কৃষি বীজ ও সরকারি ভর্তুকিমূল্যের সার বিক্রয়ের জন্য খুচরা ও পাইকারি সার-বীজ ডিলারশিপ লাইসেন্স গ্রহণ আবশ্যক। দালালরা কৃষকদের বিভ্রান্ত করে লাইসেন্স পাইয়ে দেওয়ার নামে লক্ষ টাকা নেয়, অথচ উপজেলা কৃষি অফিসে নির্ধারিত সরকারি ফি দিয়ে সহজেই প্রকৃত ব্যবসায়ীরা আবেদন করতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="খুচরা সার ডিলারশিপ লাইসেন্স ফি",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="উপজেলা কমিটির অনুমোদন সাপেক্ষে ১,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="বীজ ডিলারশিপ লাইসেন্স ফি (বীজ প্রত্যয়ন এজেন্সি)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-৪৩৪১-০০০০-১৮০১)",
                remarks="বাৎসরিক লাইসেন্স ফি ৫০০ টাকা।"
            )
        ],
        processing_time_sla="গুদাম পরিদর্শন ও সার ও বীজ কমিটির সুপারিশ সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা কৃষি অফিস কর্তৃক সরবরাহকৃত নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="মূল ফরম"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বীজ ও সার সংরক্ষণের জন্য উপযুক্ত গুদামের ভাড়া চুক্তিপত্র বা মালিকানার প্রমাণ",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা কৃষি কর্মকর্তা (UAO) বরাবর আবেদন দাখিল",
                description="দোকান ও গুদামের বিবরণ এবং ট্রেড লাইসেন্সসহ উপজেলা কৃষি কর্মকর্তার নিকট আবেদন জমা দিন।",
                action_url="https://dae.gov.bd",
                tips="দালাল ছাড়াই সরাসরি উপজেলা কৃষি অফিসে যোগাযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা সার ও বীজ মনিটরিং কমিটি কর্তৃক গুদাম পরিদর্শন",
                description="কৃষি কর্মকর্তা সরেজমিনে গুদামের ধারণক্ষমতা, আর্দ্রতা সুরক্ষা ও পরিমাপক স্কেল পরীক্ষা করবেন।",
                tips="তদন্তে অবৈধ সুবিধা দেওয়া নিষেধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="চালান জমা ও ডিলারশিপ লাইসেন্স গ্রহণ",
                description="কমিটির সুপারিশের পর ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি ডিলারশিপ লাইসেন্স ও কোড গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://dae.gov.bd",
        application_url="https://dae.gov.bd",
        citizen_charter_url="https://dae.portal.gov.bd",
        anti_broker_warning="সতর্কতা: সার ও বীজের কৃত্রিম সংকট সৃষ্টি করা বা বেশি দামে বিক্রি করা বিশেষ ক্ষমতা আইনে দণ্ডনীয় অপরাধ। ডিলারশিপ পেতে কোনো রাজনৈতিক মধ্যস্বত্বভোগী বা দালালকে টাকা দেবেন না।"
    ))

    # 72. মাদ্রাসা ফাজিল-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র
    services.append(CitizenService(
        service_id="bd-iau-madrasha-fazil-kamil-certificate-equivalence",
        title_bn="মাদ্রাসা ফাজil-কামিল ও কওমি সনদের সরকারি সমমান ও প্রত্যয়নপত্র নির্দেশিকা",
        title_en="Madrasha Fazil Kamil & Qawmi Degree Equivalence Certificate Official Guide",
        category="শিক্ষা ও শিক্ষাবোর্ড সেবা",
        department_agency="ইসলামী আরবী বিশ্ববিদ্যালয় (IAU) ও আল-হাইয়াতুল উলয়া লিল-জামি'আতিল কওমিয়া",
        summary="মাদ্রাসার ফাজিল ও কামিল সনদ সাধারণ বিশ্ববিদ্যালয় ডিগ্রির সমমান (স্নাতক পাস ও স্নাতকোত্তর) স্বীকৃতি প্রাপ্ত। কওমি মাদ্রাসার দাওরায়ে হাদিস মাস্টার্স সমমান সরকারিভাবে প্রত্যয়নের অফিশিয়াল নিয়ম। সরকারি চাকরি, বিসিএস বা বিদেশে উচ্চশিক্ষার জন্য সমমান সনদ উত্তোলন করতে হয়।",
        official_fees=[
            ServiceFee(
                category_name="ফাজিল / কামিল সমমান প্রত্যয়ন ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="ইসলামী আরবী বিশ্ববিদ্যালয় একাউন্ট পে স্লিপ",
                remarks="বিশ্ববিদ্যালয়ের নির্ধারিত ব্যাংক শাখায় ৫00 টাকা।"
            ),
            ServiceFee(
                category_name="জরুরি সমমান সনদ ফি",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="ব্যাংক পে স্লিপ",
                remarks="জরুরি ভিত্তিতে ২ কার্যদিবসে প্রদানের জন্য ১,০০০ টাকা।"
            )
        ],
        processing_time_sla="সাধারণ: ৭ কার্যদিবস | জরুরি: ২ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="মূল ফাজিল / কামিল / দাওরায়ে হাদিস পরীক্ষার নম্বরপত্র ও সনদপত্র",
                is_mandatory=True,
                format_type="মূল কপি ও ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মাদ্রাসা প্রধানের প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="ব্যাংক পে-অর্ডার বা জমার রশিদ",
                is_mandatory=True,
                format_type="মূল রশিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইসলামী আরবী বিশ্ববিদ্যালয় বা হাইয়াতুল উলয়া পোর্টালে আবেদন",
                description="পোর্টালে রেজিস্ট্রেশন নম্বর ও পাসের সাল দিয়ে নির্ধারিত ব্যাংক শাখায় ফি জমা দিন।",
                action_url="https://iau.edu.bd",
                tips="দালাল ছাড়াই বিশ্ববিদ্যালয়ের ওয়ান-স্টপ কাউন্টারে ফাইল জমা দেওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="মূল সনদ ও টেবুলেশন শিট যাচাই",
                description="বিশ্ববিদ্যালয় পরীক্ষা নিয়ন্ত্রক শাখা থেকে রেকর্ড যাচাই সম্পন্ন করবে।",
                tips="কোনো জাল সনদ জমা দিলে আইনগত ব্যবস্থা নেওয়া হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি সমমান প্রত্যয়নপত্র সংগ্রহ",
                description="নির্ধারিত দিনে ওয়ান-স্টপ সার্ভিস থেকে কিউআর কোড সম্বলিত সমমান প্রত্যয়নপত্র সংগ্রহ করুন।"
            )
        ],
        official_portal_url="https://iau.edu.bd",
        application_url="https://iau.edu.bd",
        citizen_charter_url="https://iau.portal.gov.bd",
        anti_broker_warning="সতর্কতা: সনদ সমমানের জন্য বিশ্ববিদ্যালয়ের গেটে দালালদের টাকা দেবেন না। বিশ্ববিদ্যালয়ের ওয়ান স্টপ সার্ভিস থেকে নির্ধারিত সরকারি ফি দিয়ে নিজ হাতে প্রত্যয়নপত্র সংগ্রহ করা যায়।"
    ))

    # 73. সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (PBI/CID/Cyber Police)
    services.append(CitizenService(
        service_id="bd-pbi-cid-cyber-crime-facebook-harassment-report",
        title_bn="সাইবার অপরাধ, সোশ্যাল মিডিয়া হ্যাকিং ও ব্ল্যাকমেইলিং অভিযোগ (CID/PBI/Cyber Police) নির্দেশিকা",
        title_en="Cyber Crime Social Media Hacking & Blackmailing Report (CID/Cyber Police) Guide",
        category="আইন ও পুলিশ সেবা",
        department_agency="পুলিশ হেডকোয়ার্টার্স, সিআইডি সাইবার পুলিশ সেন্টার ও পিবিআই",
        summary="ফেসবুক/হোয়াটসঅ্যাপ অ্যাকাউন্ট হ্যাক, ব্যক্তিগত ছবি এডিট করে ব্ল্যাকমেইল, অনলাইন প্রতারণা বা সাইবার বুলিংয়ের শিকার হলে কীভাবে পুলিশের বিশেষায়িত সাইবার ক্রাইম ইউনিটে বিনামূল্যে অভিযোগ করবেন। সাইবার সাপোর্ট ফর উইমেন (Cyber Support for Women) এবং সিআইডি সাইবার পুলিশ সেন্টার ২৪ ঘণ্টা বিনামূল্যে অভিযোগ গ্রহণ করে ও আইনি সুরক্ষা দেয়।",
        official_fees=[
            ServiceFee(
                category_name="সাইবার অপরাধ অভিযোগ ও তদন্ত ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="বাংলাদেশ পুলিশের সম্পূর্ণ ফ্রি আইনি ও তদন্ত সেবা।"
            )
        ],
        processing_time_sla="জরুরি সাইবার আক্রমণ: তাৎক্ষণিক ট্রেসিং ও ব্লক | তদন্ত: ৭-১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সাইবার অপরাধ সংক্রান্ত স্ক্রিনশট, প্রোফাইল লিংক (URL) ও মেসেজ হিস্ট্রি",
                is_mandatory=True,
                format_type="প্রিন্ট ও ডিজিটাল কপি"
            ),
            RequiredDocument(
                name="নিকটস্থ থানায় দায়েরকৃত জিডি বা মামলার অনুলিপি",
                is_mandatory=False,
                format_type="জিডি নম্বর ও কপি"
            ),
            RequiredDocument(
                name="ভুক্তভোগীর জাতীয় পরিচয়পত্র (NID) বা পরিচয়পত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="হ্যাকড হওয়া অ্যাকাউন্টের পূর্ববর্তী তথ্য (ইমেইল/ফোন নম্বর)",
                is_mandatory=False,
                format_type="বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ডিজিটাল আলামত সংরক্ষণ ও স্ক্রিনশট রাখা",
                description="ব্ল্যাকমেইলারের প্রোফাইলের সম্পূর্ণ লিঙ্ক (URL), চ্যাট হিস্ট্রি এবং অডিও/ভিডিওর ব্যাকআপ রাখুন। কোনো আলামত ডিলিট করবেন না।",
                tips="ব্ল্যাকমেইলারকে টাকা পাঠাবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="সিআইডি সাইবার বা পুলিশ সাইবার সেন্টারে সরাসরি যোগাযোগ",
                description="সিআইডি সাইবার পুলিশ হেল্পলাইন 01320010148 অথবা সাইবার সাপোর্ট ফর উইমেন হেল্পলাইন 01320000888 এ ফোন বা ইমেইল (smspc-cid@police.gov.bd) করুন।",
                action_url="https://cid.police.gov.bd",
                tips="নারীদের ক্ষেত্রে পরিচয় গোপন রেখে নারী পুলিশ সদস্য দিয়ে তদন্ত করা হয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="অ্যাকাউন্ট রিকভারি ও অপরাধী গ্রেফতার",
                description="পুলিশ আইপি ও ডিভাইস ট্র্যাক করে কন্টেন্ট রিমুভ ও অপরাধীকে শনাক্ত করে ডিজিটাল নিরাপত্তা/সাইবার সুরক্ষা আইনে ব্যবস্থা গ্রহণ করবে।"
            )
        ],
        official_portal_url="https://police.gov.bd",
        application_url="https://cid.police.gov.bd",
        citizen_charter_url="https://police.gov.bd",
        anti_broker_warning="সতর্কতা: ফেসবুক বা সোশ্যাল মিডিয়া অ্যাকাউন্ট ফেরত দেওয়ার নামে ফেসবুকে ছড়িয়ে থাকা ভুয়া হ্যাকারদের বিকাশ বা নগদে টাকা দেবেন না। এরা নিজেরাই প্রতারক। সরাসরি বাংলাদেশ পুলিশের সাইবার সেন্টারে ফ্রি আইনি সহায়তা নিন।"
    ))

    # 74. কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন
    services.append(CitizenService(
        service_id="bd-qazi-nikah-deed-search-nakal-certified-copy",
        title_bn="কাজি অফিস বিবাহ ও তালাক রেজিস্ট্রি তল্লাশি এবং কাবিননামার নকল উত্তোলন নির্দেশিকা",
        title_en="Qazi Office Marriage & Divorce Register Search and Nikahnama Certified Copy Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="আইন ও বিচার বিভাগ, আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়",
        summary="বিবাহ বা তালাকের কাবিননামার মূল কপি হারিয়ে গেলে বা আইনি মামলার প্রয়োজনে কাজি অফিস (নিকাহ রেজিস্ট্রি অফিস) থেকে সার্টিফাইড নকল কপি উত্তোলনের নিয়মাবলী। কাজিরা প্রায়ই অসহায় নারীদের কাছে ৫,০০০-১০,০০০ টাকা দাবি করে, অথচ সরকারি নির্ধারিত নকল ফি ও তলবানা ফি মাত্র ২০০ থেকে ৫০০ টাকা।",
        official_fees=[
            ServiceFee(
                category_name="নিকাহ রেজিস্ট্রি বালাম বহি তল্লাশি ফি (প্রতি বছর)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="কাজি অফিস সরকারি রশিদ",
                remarks="বিবাহের বছর জানা থাকলে ৫০ টাকা; অজানা থাকলে প্রতি বছরের জন্য ৫০ টাকা তলবানা।"
            ),
            ServiceFee(
                category_name="কাবিননামা সার্টিফাইড নকল ফি (প্রতি পৃষ্ঠার হিসাব)",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="কাজি অফিস সরকারি রশিদ",
                remarks="সরকারি নির্ধারিত সরকারি রশিদে সর্বোচ্চ ১০০-২০০ টাকা।"
            )
        ],
        processing_time_sla="রেজিস্ট্রি বই তল্লাশি সাপেক্ষে ১ থেকে ৩ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বর ও কনের পূর্ণ নাম ও পিতা-মাতার নাম",
                is_mandatory=True,
                format_type="লিখিত বিবরণ"
            ),
            RequiredDocument(
                name="বিবাহ বা তালাকের সম্ভাব্য তারিখ ও সন",
                is_mandatory=True,
                format_type="বিবরণ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="যে এলাকায় বিবাহ হয়েছিল সেই কাজী অফিসের অবস্থান",
                is_mandatory=True,
                format_type="বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সংশ্লিষ্ট নিকাহ রেজিস্ট্রি (কাজি) অফিসে আবেদন",
                description="বিবাহ যে এলাকায় হয়েছিল সেই এলাকার কাজি বরাবর আবেদন দিয়ে বালাম বহি তল্লাশির জন্য নির্ধারিত ৫০ টাকা ফি দিন।",
                tips="অবশ্যই কাজির সরকারি ক্যাশ মেমো বা রশিদ গ্রহণ করবেন।"
            ),
            ApplicationStep(
                step_number=2,
                title="বালাম বহি থেকে মূল রেজিস্ট্রির নকল প্রস্তুত",
                description="কাজি মূল বিবাহ রেজিস্ট্রি ভলিউম থেকে সরকারি ফরমে হুবহু বিবরণ লিখে স্বাক্ষর ও সিলমোহরযুক্ত করবেন।",
                tips="কোনো দালাল বা মোহরারকে বাড়তি টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সিলমোহরযুক্ত কাবিননামার নকল গ্রহণ",
                description="কাজি কর্তৃক প্রত্যায়িত মূল সার্টিফাইড কপি বুঝে নিন। এটি আদালতে ও পাসপোর্টে শতভাগ বৈধ হিসেবে গণ্য হবে।"
            )
        ],
        official_portal_url="https://lawjusticediv.gov.bd",
        application_url="https://lawjusticediv.gov.bd",
        citizen_charter_url="https://lawjusticediv.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কাজি যদি নকল কপি দিতে অস্বীকার করে বা ৫,০০০-১০,০০০ টাকা দাবি করে, তবে সরাসরি জেলা জজ আদালতের জেলা রেজিস্ট্রার (District Registrar) বরাবর লিখিত অভিযোগ দায়ের করুন। জেলা রেজিস্ট্রার কাজির লাইসেন্স বাতিলের ক্ষমতা রাখেন।"
    ))

    # 75. প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ
    services.append(CitizenService(
        service_id="bd-pkb-expatriate-rehabilitation-loan",
        title_bn="প্রবাসী কল্যাণ ব্যাংক: অভিবাসন ঋণ ও বিদেশ-ফেরত পুনর্বাসন ঋণ নির্দেশিকা",
        title_en="Probashi Kallyan Bank Expatriate Migration & Rehabilitation Loan Guide",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="প্রবাসী কল্যাণ ব্যাংক (PKB), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
        summary="জমি বা ভিটামাটি বিক্রি না করে বিদেশে বৈধ কর্মসংস্থানের জন্য সরকার স্বল্প সুদে (৪% থেকে ৯%) অভিবাসন ঋণ প্রদান করে। এছাড়া বিদেশ থেকে ফিরে আসা প্রবাসীদের দেশে স্বাবলম্বী ব্যবসা করার জন্য সর্বোচ্চ ৫০ লাখ টাকা পর্যন্ত জামানতবিহীন/স্বল্প জামানতে পুনর্বাসন ঋণ দেওয়া হয়। দালালদের মিষ্টি কথায় ফাঁদে না পড়ে সরাসরি ব্যাংকের শাখায় যোগাযোগ করতে হয়।",
        official_fees=[
            ServiceFee(
                category_name="ঋণ আবেদন ফরম ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="প্রবাসী কল্যাণ ব্যাংকের কোনো আবেদন ফি বা ঘুষ নেই।"
            ),
            ServiceFee(
                category_name="সিআইবি (CIB) চার্জ ও প্রসেসিং ফি (সরকার নির্ধারিত)",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="ব্যাংক রসিদ",
                remarks="বাংলাদেশ ব্যাংকের সিআইবি চার্জ বাবদ মাত্র ৩০০ টাকা।"
            )
        ],
        processing_time_sla="নথিপত্র যাচাই ও মঞ্জুরি সাপেক্ষে ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বৈধ কাজের ভিসা, কর্মসংস্থান চুক্তিপত্র ও বিএমইটি ইমিগ্রেশন ক্লিয়ারেন্স",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="আবেদনকারী ও জামিনদারের জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ব্যবসায়িক প্রজেক্ট প্রোফাইল (পুনর্বাসন ঋণের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="প্রজেক্ট প্ল্যান"
            ),
            RequiredDocument(
                name="চেয়ারম্যান বা মেয়র কর্তৃক নাগরিকত্ব ও চারিত্রিক সনদপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="প্রবাসী কল্যাণ ব্যাংকের নিকটস্থ শাখায় সরাসরি যোগাযোগ",
                description="ভিসা ও পাসপোর্ট নিয়ে সরাসরি ব্যাংকের ক্রেডিট ম্যানেজারের সাথে দেখা করুন এবং আবেদন ফরম পূরণ করুন।",
                action_url="https://pkb.gov.bd",
                tips="ব্যাংকের বাইরে থাকা কোনো দালালের সাথে কথা বলবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ভিসা ও নথিপত্র ব্যাংক কর্তৃক যাচাই",
                description="ব্যাংক ভিসা ও নিয়োগকর্তার তথ্য বিএমইটি ডাটাবেজ থেকে অনলাইনে যাচাই করবে।",
                tips="জাল বা ভুয়া ভিসা দিলে ঋণ মঞ্জুর হবে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="চেকের মাধ্যমে সরাসরি ঋণ বিতরণ",
                description="ঋণ অনুমোদিত হলে ৩ লাখ টাকা পর্যন্ত বিনা জামানতে সরাসরি আবেদনকারীর ব্যাংক হিসাবে ঋণ ছাড় করা হয় এবং কিস্তির শিডিউল বুঝিয়ে দেওয়া হয়।"
            )
        ],
        official_portal_url="https://pkb.gov.bd",
        application_url="https://pkb.gov.bd",
        citizen_charter_url="https://pkb.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কোনো ব্যাংক কর্মকর্তা বা বহিরাগত ব্যক্তি ঋণ মঞ্জুর করিয়ে দেওয়ার নাম করে পারসেন্টেজ বা কাটমানি চাইলে সাথে সাথে শাখা ব্যবস্থাপক অথবা মন্ত্রণালয় হেল্পলাইন ১৬১৩৫ এ অভিযোগ করুন।"
    ))

    # 76. সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য
    services.append(CitizenService(
        service_id="bd-bpeb-employee-welfare-grant-group-insurance",
        title_bn="সরকারি কর্মচারী কল্যাণ বোর্ড: যৌথবীমা দাবি, চিকিৎসা অনুদান ও দাফন সাহায্য নির্দেশিকা",
        title_en="Govt Employee Welfare Board Group Insurance Medical Grant & Burial Aid Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="বাংলাদেশ কর্মচারী কল্যাণ বোর্ড (BKKB), জনপ্রশাসন মন্ত্রণালয়",
        summary="সরকারি কর্মকর্তা-কর্মচারীদের চাকরি চলাকালীন মৃত্যুতে যৌথবীমার এককালীন অনুদান, অক্ষমতার আর্থিক সহায়তা এবং কর্মকর্তা বা পরিবারের সদস্যদের দুরারোগ্য ব্যাধির চিকিৎসার জন্য প্রতি বছর সর্বোচ্চ ২,০০,০০০ টাকা পর্যন্ত সরকারি অনুদান দেওয়া হয়। সম্পূর্ণ অনলাইন পোর্টালে দালালমুক্তভাবে এই সেবা পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="যৌথবীমা ও চিকিৎসা অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="কর্মচারী কল্যাণ বোর্ডের সকল সেবা সম্পূর্ণ বিনামূল্যে।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন ও ডিডিও অগ্রায়নের পর ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর সার্ভিস বুক ও শেষ বেতন প্রত্যয়নপত্র (LPC)",
                is_mandatory=True,
                format_type="ডিডিও সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসা অনুদানের ক্ষেত্রে)",
                is_mandatory=True,
                format_type="মূল ভাউচার ও রিপোর্ট"
            ),
            RequiredDocument(
                name="মৃত্যু সনদ ও ওয়ারিশান সনদ (যৌথবীমা দাবির ক্ষেত্রে)",
                is_mandatory=False,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংকের চেকের পাতা",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="কল্যাণ বোর্ডের ই-সেবা পোর্টালে অনলাইন আবেদন",
                description="https://bkkb.gov.bd পোর্টালে জাতীয় পরিচয়পত্র ও পিআইডি (PID) দিয়ে লগইন করে আবেদন ফরম পূরণ করুন।",
                action_url="https://bkkb.gov.bd",
                tips="কোনো মধ্যস্বত্বভোগী ছাড়াই নিজে নিজে অনলাইনে আবেদন করা যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="সংশ্লিষ্ট অফিস প্রধান (DDO) কর্তৃক অনলাইনে অনুমোদন",
                description="আপনার নিয়ন্ত্রণকারী কর্তৃপক্ষ অনলাইনে আবেদনটি যাচাই করে কর্মচারী কল্যাণ বোর্ডে ফরোয়ার্ড করবেন।",
                tips="ম্যানুয়াল কোনো কাগজের ফাইল ঘোরানোর প্রয়োজন নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি ব্যাংক হিসাবে ইএফটি (EFT) মাধ্যমে টাকা জমা",
                description="বোর্ড কর্তৃক মঞ্জুরিকৃত অনুদান সরাসরি আবেদনকারীর ব্যাংক অ্যাকাউন্টে জমা হবে এবং মোবাইলে এসএমএস পাবেন।"
            )
        ],
        official_portal_url="https://bkkb.gov.bd",
        application_url="https://bkkb.gov.bd",
        citizen_charter_url="https://bkkb.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কর্মচারী কল্যাণ বোর্ডের অর্থ আপনার চাকরি জীবনের অর্জিত অধিকার। বোর্ডের কোনো কর্মচারী বা দালাল অনুদান দ্রুত ছাড়ের নামে টাকা দাবি করলে সরাসরি জনপ্রশাসন মন্ত্রণালয়ের হটলাইন ১০৬ এ অভিযোগ দায়ের করুন।"
    ))

    return services
