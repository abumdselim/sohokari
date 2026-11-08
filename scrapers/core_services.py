from typing import List
from schema.models import CitizenService, ServiceFee, RequiredDocument, ApplicationStep, ServiceOfficer

def get_authoritative_citizen_services() -> List[CitizenService]:
    """
    Authoritative, anti-corruption verified service definitions for Bangladesh citizen services
    where citizens most frequently suffer from middlemen (দালাল) and extortion.
    """
    services: List[CitizenService] = []

    # 1. ই-পাসপোর্ট (e-Passport)
    services.append(CitizenService(
        service_id="bd-epassport-application-fee-guide",
        title_bn="ই-পাসপোর্ট নতুন আবেদন ও নবায়ন নির্দেশিকা",
        title_en="Bangladesh e-Passport Application, Renewal & Official Fee Guide",
        category="পাসপোর্ট ও ইমিগ্রেশন",
        department_agency="ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="ই-পাসপোর্ট আবেদনের জন্য কোনো দালাল বা মধ্যস্থতাকারীর প্রয়োজন নেই। অনলাইন আবেদনের পর নির্দিষ্ট সরকারি ফি সরাসরি ব্যাংকে বা অনলাইনে পরিশোধ করে নির্দিষ্ট দিনে বায়োমেট্রিক দিয়ে পাসপোর্ট সংগ্রহ করা যায়। কোনো ছবি বা ফর্ম সত্যায়নের প্রয়োজন হয় না।",
        official_fees=[
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (সাধারণ - ২১ কার্যদিবস)",
                amount_bdt=4025.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট (একপে, বিকাশ ইত্যাদি) অথবা নির্দিষ্ট ব্যাংক (সোনালী, ওয়ান, প্রিমিয়ার ইত্যাদি)",
                remarks="মূল ফি ৩,৫০০ টাকা + ১৫% ভ্যাট ৫২৫ টাকা = ৪,০২৫ টাকা"
            ),
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (জরুরি - ৭ কার্যদিবস)",
                amount_bdt=6325.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি ৫,৫০০ টাকা + ১৫% ভ্যাট ৮২৫ টাকা = ৬,৩২৫ টাকা"
            ),
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ৫ বছর মেয়াদি (অতি জরুরি - ২ কার্যদিবস)",
                amount_bdt=8625.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি ৭,৫০০ টাকা + ১৫% ভ্যাট ১,১২৫ টাকা = ৮,৬২৫ টাকা"
            ),
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (সাধারণ - ২১ কার্যদিবস)",
                amount_bdt=5750.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি ৫,০০০ টাকা + ১৫% ভ্যাট ৭৫০ টাকা = ৫,৭৫০ টাকা"
            ),
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (জরুরি - ৭ কার্যদিবস)",
                amount_bdt=8050.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি ৭,০০০ টাকা + ১৫% ভ্যাট ১,০৫০ টাকা = ৮,০৫০ টাকা"
            ),
            ServiceFee(
                category_name="৪৮ পৃষ্ঠা, ১০ বছর মেয়াদি (অতি জরুরি - ২ কার্যদিবস)",
                amount_bdt=10350.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি ৯,০০০ টাকা + ১৫% ভ্যাট ১,৩৫০ টাকা = ১০,৩৫০ টাকা"
            ),
            ServiceFee(
                category_name="৬৪ পৃষ্ঠা, ৫ বছর মেয়াদি (সাধারণ)",
                amount_bdt=6325.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক"
            ),
            ServiceFee(
                category_name="৬৪ পৃষ্ঠা, ১০ বছর মেয়াদি (সাধারণ)",
                amount_bdt=8050.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক"
            )
        ],
        processing_time_sla="সাধারণ: ২১ কার্যদিবস | জরুরি: ৭ কার্যদিবস | অতি জরুরি: ২ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) অথবা অনলাইন জন্ম নিবন্ধন সনদ (১৮ বছরের নিচে হলে BRC)",
                is_mandatory=True,
                attestation_required=False,
                format_type="মূল কপি ও ১ সেট পরিষ্কার ফটোকপি",
                how_to_obtain="নির্বাচন কমিশন NID অথবা BDRIS অনলাইন পোর্টাল"
            ),
            RequiredDocument(
                name="ই-পাসপোর্ট অনলাইন আবেদন সামারি (Application Summary Printout)",
                is_mandatory=True,
                attestation_required=False,
                format_type="১ কপি A4 সাইজ প্রিন্ট",
                how_to_obtain="epassport.gov.bd ওয়েবসাইটে ফর্ম সাবমিট করার পর স্বয়ংক্রিয়ভাবে ডাউনলোড হয়"
            ),
            RequiredDocument(
                name="সরকারি ব্যাংক ফি জমার আসল রসিদ / চালান কপি",
                is_mandatory=True,
                attestation_required=False,
                format_type="আসল প্রিন্ট কপি",
                how_to_obtain="ব্যাংক কাউন্টার থেকে অথবা একপে অনলাইন পেমেন্ট স্লিপ"
            ),
            RequiredDocument(
                name="পুরাতন মূল পাসপোর্ট (যদি আগে পাসপোর্ট করা থাকে / নবায়নের ক্ষেত্রে)",
                is_mandatory=False,
                attestation_required=False,
                format_type="আসল মূল পাসপোর্ট এবং ডাটা পেজের ১ কপি ফটোকপি"
            ),
            RequiredDocument(
                name="পেশাগত সনদের কপি (সরকারি চাকরিজীবী হলে GO/NOC, ছাত্র হলে আইডি কার্ড)",
                is_mandatory=False,
                attestation_required=False,
                format_type="ফটোকপি ও মূল কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="অফিশিয়াল পোর্টালে একাউন্ট তৈরি ও ফর্ম পূরণ",
                description="https://www.epassport.gov.bd পোর্টালে যান। আপনার জেলা ও বর্তমান ঠিকানা অনুযায়ী পাসপোর্ট অফিস সিলেক্ট করুন। ব্যক্তিগত তথ্য NID কার্ডের হুবহু অনুযায়ী ইংরেজি ও বাংলায় নির্ভুলভাবে পূরণ করুন।",
                action_url="https://www.epassport.gov.bd/landing",
                tips="নাম, পিতা-মাতার নাম ও জন্মতারিখ যেন এনআইডি-র সাথে শতভাগ মিলে যায়। কোনো ভুল থাকলে আগেই এনআইডি সংশোধন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="আবেদন সাবমিট ও অ্যাপয়েন্টমেন্ট তারিখ নির্বাচন",
                description="ফর্মের সকল তথ্য রিভিও করে ফাইনাল সাবমিট করুন। আপনার সুবিধাজনক তারিখে বায়োমেট্রিক দেওয়ার জন্য অ্যাপয়েন্টমেন্ট শিডিউল বেছে নিন। Application Summary এবং Registration Form ডাউনলোড করে প্রিন্ট করুন।",
                tips="অ্যাপয়েন্টমেন্ট বাধ্যতামূলক না হলেও আগে শিডিউল নিলে পাসপোর্ট অফিসে দীর্ঘ লাইনে দাঁড়াতে হয় না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি ফি পরিশোধ",
                description="অনলাইনে একপে-র মাধ্যমে বিকাশ/রকেট/কার্ড দিয়ে অথবা সরকার নির্ধারিত ব্যাংকগুলোতে (সোনালী, ওয়ান, প্রিমিয়ার, ট্রাস্ট, ঢাকা ব্যাংক) স্বশরীরে ফি জমা দিন এবং রসিদ সংগ্রহ করুন।",
                tips="অনলাইনে পেমেন্ট করলে রসিদ তৎক্ষণাৎ প্রিন্ট করে নিন। ব্যাংক বুথে বাড়তি ফি দেওয়ার প্রয়োজন নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="পাসপোর্ট অফিসে বায়োমেট্রিক প্রদান ও ছবি তোলা",
                description="অ্যাপয়েন্টমেন্টের দিনে সকালবেলা মূল NID, সামারি শিট এবং ফি জমার রসিদসহ পাসপোর্ট অফিসে যান। কোনো ফটোকপি সত্যায়নের দরকার নেই। ফিঙ্গারপ্রিন্ট, আইরিশ স্ক্যান ও ছবি তোলার পর আপনাকে একটি ডেলিভারি স্লিপ দেওয়া হবে।",
                tips="সাদা বা হালকা রঙের পোশাক না পরে গাঢ় রঙের পোশাক পরে গেলে ছবি স্পষ্ট আসে।"
            ),
            ApplicationStep(
                step_number=5,
                title="পাসপোর্ট স্ট্যাটাস চেক ও ডেলিভারি গ্রহণ",
                description="পাসপোর্ট প্রিন্ট সম্পন্ন হলে আপনার ফোনে SMS আসবে। এছাড়াও epassport.gov.bd সাইটে অ্যাপ্লিকেশন আইডি দিয়ে অনলাইনে স্ট্যাটাস ট্র্যাক করতে পারেন। পাসপোর্ট রেডি হলে ডেলিভারি স্লিপ নিয়ে নিজে উপস্থিত হয়ে পাসপোর্ট গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://www.epassport.gov.bd",
        application_url="https://www.epassport.gov.bd/onboarding",
        citizen_charter_url="https://dip.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: পাসপোর্ট অফিসে কোনো দালাল বা মধ্যস্বত্বভোগীর সাথে কোনো লেনদেন করবেন না। তারা ভুয়া তথ্য দিয়ে আবেদন করলে আপনার পাসপোর্ট আবেদন আটকে যাবে। অনলাইনে ফরম পূরণ সম্পূর্ণ বিনামূল্যে নিজে করা যায় এবং সরকারি ফি সরাসরি ব্যাংক বা সরকারি পেমেন্ট গেটওয়েতে জমা হয়।",
        grievance_remedy="পাসপোর্ট পেতে অযথা বিলম্ব হলে বা কোনো কর্মকর্তা ঘুষ দাবি করলে পাসপোর্ট অফিসের উপ-পরিচালক (Deputy Director) বরাবর লিখিত অভিযোগ করুন অথবা মন্ত্রিপরিষদ বিভাগের অভিযোগ প্রতিকার ব্যবস্থাপনা (GRS: grs.gov.bd) পোর্টালে সরাসরি অভিযোগ দাখিল করুন।"
    ))

    # 2. জমির ই-নামজারি ও জমাভাগ (Land e-Mutation)
    services.append(CitizenService(
        service_id="bd-land-e-mutation-namjari-guide",
        title_bn="জমির ই-নামজারি (মিউটেশন) আবেদন ও সরকারি ফি নির্দেশিকা",
        title_en="Bangladesh Land e-Mutation (Namjari) Official Process & Exact Fee Breakdown",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="ভূমি মন্ত্রণালয় ও ভূমি সংস্কার বোর্ড",
        summary="জমির নামজারির ক্ষেত্রে সরকারি নির্ধারিত ফি মাত্র ১,১৭০ টাকা। এর বেশি এক টাকাও কাউকে দেওয়ার বিধান নেই। দালাল ছাড়াই ঘরে বসে অনলাইনে mutation.land.gov.bd থেকে আবেদন করে নির্দিষ্ট সময়সীমার মধ্যে নামজারি সম্পন্ন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="আবেদন কোর্ট ফি (Court Fee)",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="অনলাইন মোবাইল ওয়ালেট (বিকাশ, নগদ, রকেট, উপায়) বা কার্ড",
                remarks="আবেদন সাবমিট করার সময় পরিশোধযোগ্য"
            ),
            ServiceFee(
                category_name="নোটিশ জারি ফি (Notice Fee)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="আবেদন সাবমিট করার সময় পরিশোধযোগ্য (মোট ২০+৫০ = ৭০ টাকা শুরুতে)"
            ),
            ServiceFee(
                category_name="রেকর্ড সংশোধন ফি (Record Correction Fee)",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="খতিয়ান অনুমোদনের পর পরিশোধযোগ্য"
            ),
            ServiceFee(
                category_name="খতিয়ান সরবরাহ ও ডিসিআর ফি (DCR Fee)",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="অনুমোদনের পর পরিশোধযোগ্য (১,০০০+১০০ = ১,১০০ টাকা শেষে)"
            )
        ],
        processing_time_sla="সর্বোচ্চ ২৮ কার্যদিবস (বিনা বিরোধে নামজারি)",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="স্ক্যান কপি / ছবি",
                how_to_obtain="NID কার্ড"
            ),
            RequiredDocument(
                name="মূল দলিলের স্ক্যান কপি (ক্রয়সূত্রে হলে রেজিস্ট্রিকৃত সাফ-কবলা দলিল)",
                is_mandatory=True,
                format_type="পিডিএফ ফাইল (সর্বোচ্চ ২৫ মেগাবাইট)",
                how_to_obtain="সাব-রেজিস্ট্রি অফিস থেকে প্রাপ্ত মূল দলিল"
            ),
            RequiredDocument(
                name="পিঠ দলিল / বায়া দলিলের কপি (প্রযোজ্য ক্ষেত্রে)",
                is_mandatory=False,
                format_type="পিডিএফ ফাইল"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা",
                is_mandatory=True,
                format_type="স্ক্যান কপি",
                how_to_obtain="ldtax.gov.bd থেকে অনলাইনে খাজনা পরিশোধের রশিদ"
            ),
            RequiredDocument(
                name="ওয়ারিশান সনদপত্র (উত্তরাধিকার সূত্রে প্রাপ্ত জমির ক্ষেত্রে)",
                is_mandatory=False,
                format_type="স্ক্যান কপি",
                how_to_obtain="ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলর অফিস"
            ),
            RequiredDocument(
                name="সর্বশেষ সিএস/এসএ/আরএস/বিএস খতিয়ানের কপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="অনলাইন পোর্টালে প্রবেশ ও তথ্য পূরণ",
                description="mutation.land.gov.bd ওয়েবসাইটে যান। 'নামজারি আবেদন' বাটনে ক্লিক করুন। আপনার মোবাইল নম্বর ও এনআইডি নম্বর দিয়ে ওটিপি ভেরিফিকেশন সম্পন্ন করুন। এরপর বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা সিলেক্ট করুন।",
                action_url="https://mutation.land.gov.bd",
                tips="আবেদনকারীর এনআইডি তথ্য সঠিক হতে হবে। একাউন্টে দেওয়া মোবাইল নম্বরেই শুনানির এসএমএস আসবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="জমির বিবরণ ও কাগজপত্র আপলোড",
                description="খতিয়ান নম্বর, দাগ নম্বর এবং হস্তান্তরিত জমির পরিমাণ এককে লিখুন। এরপর সাফ-কবলা দলিল, বায়া দলিল, পূর্বের খতিয়ান ও খাজনার দাখিলার স্ক্যান কপি আপলোড করুন।",
                tips="সকল ফাইল পরিষ্কার স্ক্যান করে পিডিএফ আকারে আপলোড করবেন যাতে সহকারী কমিশনার (ভূমি) বা কানুনগো সহজেই পড়তে পারেন।"
            ),
            ApplicationStep(
                step_number=3,
                title="প্রাথমিক ৭০ টাকা ফি পরিশোধ",
                description="কোর্ট ফি (২০ টাকা) ও নোটিশ জারি ফি (৫০ টাকা) মোট ৭০ টাকা সরাসরি বিকাশ বা অন্যান্য অনলাইন পেমেন্ট সিস্টেমে পরিশোধ করুন। আবেদন সম্পন্ন হলে ট্র্যাকিং নম্বরসহ আবেদন ফরম প্রিন্ট করে রাখুন।",
                tips="কোনো অবস্থাতেই ইউনিয়ন ভূমি অফিসের কাউকে বাড়তি টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=4,
                title="তদন্ত ও শুনানি (Hearing)",
                description="ইউনিয়ন ভূমি সহকারী কর্মকর্তা প্রস্তাব পাঠাবেন এবং এসিল্যান্ড শুনানির দিন নির্ধারণ করবেন। শুনানির তারিখ মোবাইলে SMS-এর মাধ্যমে জানিয়ে দেওয়া হবে। শুনানির দিনে মূল দলিলপত্র নিয়ে এসিল্যান্ড অফিসে হাজির হন।",
                tips="কোনো কাগজপত্রের ঘাটতি না থাকলে শুনানি সফলভাবে সম্পন্ন হয়।"
            ),
            ApplicationStep(
                step_number=5,
                title="অনুমোদন ও চূড়ান্ত ১,১০০ টাকা ডিসিআর ফি প্রদান",
                description="এসিল্যান্ড নামজারি অনুমোদন করলে মোবাইলে মেসেজ আসবে। এরপর mutation.land.gov.bd-এ গিয়ে ডিসিআর ফি ১,১০০ টাকা অনলাইনে পরিশোধ করুন। সাথে সাথে আপনার কিউআর কোডযুক্ত অনলাইন খতিয়ান এবং ডিসিআর তৈরি হয়ে যাবে, যা আপনি নিজেই ডাউনলোড ও প্রিন্ট করতে পারবেন।"
            )
        ],
        official_portal_url="https://land.gov.bd",
        application_url="https://mutation.land.gov.bd",
        citizen_charter_url="https://minland.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: নামজারির মোট সরকারি ফি সর্বসাকুল্যে মাত্র ১,১৭০ টাকা (শুরুতে ৭০ টাকা এবং অনুমোদনের পর ১,১০০ টাকা)। ইউনিয়ন ভূমি সহকারী কর্মকর্তা, সার্ভেয়ার বা এসিল্যান্ড অফিসের কোনো দালালের মাধ্যমে কাজ করানোর কোনো নিয়ম নেই। দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে নাগরিকদের প্রতারিত করে। পুরো প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং এসএমএস ট্র্যাকিং ভিত্তিক।",
        grievance_remedy="যদি নির্ধারিত ২৮ কার্যদিবসের মধ্যে নামজারি নিষ্পত্তি না হয় বা কেউ ঘুষ দাবি করে, তবে হটলাইন ১৬১২২-তে কল করে সরাসরি অভিযোগ জানান অথবা জেলা প্রশাসক (DC) বা বিভাগীয় কমিশনার বরাবর আপিল করুন।"
    ))

    # 3. জাতীয় পরিচয়পত্র (NID) সংশোধন ও রি-ইস্যু
    services.append(CitizenService(
        service_id="bd-nid-correction-reissue-guide",
        title_bn="জাতীয় পরিচয়পত্র (NID) সংশোধন ও হারানো কার্ড রি-ইস্যু নির্দেশিকা",
        title_en="Bangladesh NID Correction, Reissue & Official Fee Guide",
        category="জাতীয় পরিচয়পত্র (NID)",
        department_agency="নির্বাচন কমিশন সচিবালয়, জাতীয় পরিচয় নিবন্ধন অনুবিভাগ",
        summary="জাতীয় পরিচয়পত্রের তথ্য সংশোধন বা হারানো কার্ড পুনরায় পেতে কোনো দালালের কাছে যাওয়ার প্রয়োজন নেই। services.nidw.gov.bd পোর্টাল থেকে খুব সহজে নির্ধারিত সরকারি ফি জমা দিয়ে উপযুক্ত প্রমাণপত্র আপলোড করে সংশোধন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="হারানো NID রি-ইস্যু (সাধারণ)",
                amount_bdt=230.0,
                vat_included=True,
                payment_method="বিকাশ, রকেট, নেক্সাস পে অথবা ব্যাংক চালান",
                remarks="মূল ফি ২০০ টাকা + ১৫% ভ্যাট ৩০ টাকা = ২৩০ টাকা"
            ),
            ServiceFee(
                category_name="হারানো NID রি-ইস্যু (জরুরি)",
                amount_bdt=345.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট গেটওয়ে",
                remarks="মূল ফি ৩০০ টাকা + ১৫% ভ্যাট ৪৫ টাকা = ৩৪৫ টাকা"
            ),
            ServiceFee(
                category_name="তথ্য সংশোধন - ১ম বার (ক্যাটাগরি ক - সাধারণ তথ্য)",
                amount_bdt=230.0,
                vat_included=True,
                payment_method="বিকাশ / রকেট / ব্যাংক",
                remarks="২০০ টাকা + ভ্যাট = ২৩০ টাকা"
            ),
            ServiceFee(
                category_name="তথ্য সংশোধন - ২য় বার",
                amount_bdt=345.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট",
                remarks="৩০০ টাকা + ভ্যাট = ৩৪৫ টাকা"
            ),
            ServiceFee(
                category_name="তথ্য সংশোধন - ৩য় বার বা তদুর্ধ্ব",
                amount_bdt=575.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট",
                remarks="৫০০ টাকা + ভ্যাট = ৫৭৫ টাকা"
            )
        ],
        processing_time_sla="সাধারণ তথ্য সংশোধন: ৭-১৫ কার্যদিবস | গুরুতর তথ্য সংশোধন: ৩০-৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="এসএসসি / সমমানের শিক্ষাগত সনদের মূল কপি স্ক্যান (যদি থাকে)",
                is_mandatory=False,
                format_type="স্ক্যান কপি (জেপিজি বা পিডিএফ)",
                how_to_obtain="শিক্ষাবোর্ড কর্তৃক প্রদত্ত সার্টিফিকেট"
            ),
            RequiredDocument(
                name="অনলাইন জন্ম নিবন্ধন সনদ (English & Bengali)",
                is_mandatory=True,
                format_type="ডিজিটাল জন্ম সনদের স্ক্যান কপি",
                how_to_obtain="bdris.gov.bd পোর্টাল"
            ),
            RequiredDocument(
                name="পিতা-মাতার জাতীয় পরিচয়পত্রের কপি (পিতা/মাতার নাম সংশোধনের জন্য)",
                is_mandatory=False,
                format_type="ফটোকপি ও স্ক্যান কপি"
            ),
            RequiredDocument(
                name="পাসপোর্ট / ড্রাইভিং লাইসেন্স (যদি থাকে)",
                is_mandatory=False,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="থানার জিডি (GD) কপি (শুধুমাত্র কার্ড হারিয়ে যাওয়ার ক্ষেত্রে)",
                is_mandatory=False,
                format_type="অনলাইন জিডি কপি",
                how_to_obtain="onlinegd.police.gov.bd"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="NID পোর্টালে রেজিস্ট্রেশন বা লগইন",
                description="https://services.nidw.gov.bd পোর্টালে গিয়ে 'রেজিস্ট্রেশন' অপশনে ক্লিক করুন। আপনার এনআইডি বা ফর্ম নম্বর এবং জন্মতারিখ দিন। বর্তমান ও স্থায়ী ঠিকানা নির্বাচন করুন।",
                action_url="https://services.nidw.gov.bd/nid-pub",
                tips="মোবাইলে 'NID Wallet' অ্যাপ ইনস্টল করে ফেস ভেরিফিকেশন সম্পন্ন করতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="সংশোধন বা রি-ইস্যু অপশন নির্বাচন",
                description="লগইন করার পর প্রোফাইলে গিয়ে 'এডিট' বাটনে ক্লিক করুন। যে যে তথ্য পরিবর্তন করতে চান (যেমন নিজের নাম, জন্মতারিখ, পিতা-মাতার নাম বা ঠিকানা) তা সঠিকভাবে লিখুন।",
                tips="সংশোধনের ক্ষেত্রে প্রমাণপত্র ছাড়া তথ্য পরিবর্তন গ্রহণ করা হয় না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি ফি পেমেন্ট",
                description="বিকাশ বা রকেট অ্যাপের 'পে বিল' অপশন থেকে 'NID Service' নির্বাচন করে আবেদন ফি পরিশোধ করুন। ফি পরিশোধ করার কয়েক মিনিটের মধ্যে এনআইডি পোর্টালে পেমেন্ট স্ট্যাটাস আপডেট হবে।",
                tips="সঠিক ট্রানজেকশন ফি সিলেক্ট করুন (যেমন সংশোধন হলে ২৩০ টাকা)।"
            ),
            ApplicationStep(
                step_number=4,
                title="প্রয়োজনীয় প্রমাণপত্র আপলোড ও সাবমিট",
                description="আপনার দাবির সপক্ষে এসএসসি সনদ, জন্ম সনদ, পাসপোর্ট ইত্যাদি ফাইল আপলোড করুন। এরপর প্রিভিউ দেখে চূড়ান্ত সাবমিট করুন এবং আবেদন ফর্মটি ডাউনলোড করে প্রিন্ট কপি সংরক্ষণ করুন।",
                tips="কোনো দালালের মাধ্যমে ভুয়া এফিডেভিট আপলোড করবেন না, এতে আবেদন বাতিল হতে পারে।"
            ),
            ApplicationStep(
                step_number=5,
                title="অনুমোদন ও নতুন এনআইডি ডাউনলোড",
                description="নির্বাচন কর্মকর্তা কর্তৃক আবেদন অনুমোদিত হলে মোবাইলে এসএমএস আসবে। এরপর services.nidw.gov.bd থেকে রঙিন ডিজিটাল স্মার্ট এনআইডির অনলাইন কপি সাথে সাথে ডাউনলোড করে ল্যামিনেট করে ব্যবহার করতে পারবেন।"
            )
        ],
        official_portal_url="https://services.nidw.gov.bd",
        application_url="https://services.nidw.gov.bd/nid-pub",
        citizen_charter_url="https://nidw.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: নির্বাচন কমিশন অফিসের সামনে কোনো ফটোকপির দোকানদার বা দালালের খপ্পরে পড়বেন না। তারা ২৩০ টাকার কাজের জন্য ৩,০০০ থেকে ১০,০০০ টাকা দাবি করে। ঘরে বসে নিজের ফোনেই এনআইডি সংশোধন করা যায়।",
        grievance_remedy="আবেদন বিনা কারণে দীর্ঘদিন ঝুলে থাকলে নির্বাচন কমিশনের হেল্পলাইন ১০৫-এ কল করে অভিযোগ জানান অথবা উপজেলা নির্বাচন কর্মকর্তা বরাবরে যোগাযোগ করুন।"
    ))

    # 4. বিআরটিএ ড্রাইভিং লাইসেন্স (BRTA Driving License)
    services.append(CitizenService(
        service_id="bd-brta-driving-license-smartcard-guide",
        title_bn="বিআরটিএ ড্রাইভিং লাইসেন্স আবেদন ও সরকারি ফি নির্দেশিকা",
        title_en="BRTA Driving License Smartcard Application, Test & Official Fee Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ",
        summary="বিআরটিএ সেবা বাতায়ন (BSP) পোর্টালে ঘরে বসেই লার্নার ড্রাইভিং লাইসেন্স এবং পরবর্তীতে পরীক্ষা দিয়ে স্মার্ট কার্ড ড্রাইভিং লাইসেন্স গ্রহণ করা যায়। দালালদের খপ্পরে না পড়ে বিএসপি সিস্টেমে নির্ধারিত ফি দিয়ে সহজে লাইসেন্স পাওয়া সম্ভব।",
        official_fees=[
            ServiceFee(
                category_name="লার্নার ড্রাইভিং লাইসেন্স ফি (এক ক্যাটাগরি - যেমন মোটরসাইকেল বা হালকা মোটরযান)",
                amount_bdt=518.0,
                vat_included=True,
                payment_method="BSP অনলাইন পেমেন্ট (বিকাশ, নগদ, কার্ড)"
            ),
            ServiceFee(
                category_name="লার্নার ড্রাইভিং লাইসেন্স ফি (দুই ক্যাটাগরি - যেমন মোটরসাইকেল + হালকা মোটরযান)",
                amount_bdt=748.0,
                vat_included=True,
                payment_method="BSP অনলাইন পেমেন্ট"
            ),
            ServiceFee(
                category_name="অপেশাদার স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (১০ বছর মেয়াদি)",
                amount_bdt=5077.0,
                vat_included=True,
                payment_method="অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক",
                remarks="মূল লাইসেন্স ফি + ডিকে কন্ট্রিবিউশন + ১৫% ভ্যাট অন্তর্ভুক্ত"
            ),
            ServiceFee(
                category_name="পেশাদার স্মার্ট কার্ড ড্রাইভিং লাইসেন্স (৫ বছর মেয়াদি)",
                amount_bdt=3453.0,
                vat_included=True,
                payment_method="অনলাইন গেটওয়ে বা অনুমোদিত ব্যাংক",
                remarks="মূল ফি + ডোপ টেস্ট ফি আলাদাভাবে পরিশোধযোগ্য"
            )
        ],
        processing_time_sla="লার্নার লাইসেন্স: তাৎক্ষণিক অনলাইন প্রিন্ট | স্মার্ট কার্ড ডেলিভারি: পরীক্ষার পর ৩০-৬০ দিন (ডাকযোগে ঘরে পৌঁছায়)",
        required_documents=[
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) এর স্পষ্ট কপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="রেজিস্টার্ড এমবিবিএস ডাক্তারের প্রদত্ত মেডিকেল সার্টিফিকেট (Medical Certificate Form)",
                is_mandatory=True,
                format_type="স্ক্যান কপি",
                how_to_obtain="বিআরটিএ নির্ধারিত মেডিকেল ফর্ম প্রিন্ট করে কোনো সরকারি/রেজিস্টার্ড ডাক্তার থেকে সাইন ও সিল নেওয়া"
            ),
            RequiredDocument(
                name="শিক্ষাগত যোগ্যতার সনদ (নূন্যতম অষ্টম শ্রেণি বা জেএসসি পাস)",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="বর্তমান ঠিকানার ইউটিলিটি বিলের কপি (গ্যাস/বিদ্যুৎ বিল)",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="সরকারি হাসপাতাল কর্তৃক ডোপ টেস্ট রিপোর্ট (পেশাদার লাইসেন্সের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="মূল কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিআরটিএ সার্ভিস পোর্টাল (BSP)-এ অ্যাকাউন্ট খোলা",
                description="https://bsp.brta.gov.bd পোর্টালে যান। আপনার মোবাইল নম্বর ও জন্মতারিখ দিয়ে অ্যাকাউন্ট রেজিস্টার করুন।",
                action_url="https://bsp.brta.gov.bd",
                tips="মোবাইল নম্বরটি ব্যক্তিগত হওয়া আবশ্যক কারণ ওটিপি ও টেস্টের তারিখ সেখানে আসবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="অনলাইন লার্নার লাইসেন্স আবেদন ও ফি পেমেন্ট",
                description="ড্যাশবোর্ড থেকে 'ড্রাইভিং লাইসেন্স' মেনুতে ক্লিক করে 'লার্নার আবেদন' সিলেক্ট করুন। ক্যাটাগরি (মোটরসাইকেল/গাড়ি) বেছে নিন। ডাক্তার স্বাক্ষরিত মেডিকেল সার্টিফিকেট ও ছবি আপলোড করে ফি পরিশোধ করুন।",
                tips="পেমেন্ট সফল হওয়ার সাথে সাথে কিউআর কোডযুক্ত লার্নার কার্ড অনলাইনে চলে আসবে, যা প্রিন্ট করে রাস্তায় গাড়ি চালানো শেখা যাবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="লিখিত, মৌখিক ও প্র্যাকটিক্যাল পরীক্ষা গ্রহণ",
                description="লার্নার কার্ডে উল্লেখিত তারিখে বিআরটিএ সার্কেল অফিসে উপস্থিত হয়ে লিখিত, মৌখিক এবং ফিল্ডে প্র্যাকটিক্যাল ড্রাইভ পরীক্ষায় অংশ নিন।",
                tips="ট্রাফিক সাইন ও সড়ক নিরাপত্তা বিষয়ক প্রশ্ন ভালোভাবে পড়ে গেলে পরীক্ষা খুব সহজ।"
            ),
            ApplicationStep(
                step_number=4,
                title="স্মার্ট কার্ড ফি পরিশোধ ও বায়োমেট্রিক প্রদান",
                description="পরীক্ষায় পাস করার পর বিএসপি পোর্টালে স্মার্ট কার্ড ফি (অপেশাদার ৫,০৭৭ টাকা) জমা দিন এবং নির্দিষ্ট দিনে বিআরটিএ অফিসে গিয়ে আঙ্গুলের ছাপ ও ডিজিটাল ছবি দিন।",
                tips="এখন ডিজিটাল ই-ড্রাইভিং লাইসেন্স তাৎক্ষণিক ডাউনলোড করা যায় এবং স্মার্ট কার্ড পোস্ট অফিসের মাধ্যমে আপনার ঠিকানায় পৌঁছে যায়।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: বিআরটিএ প্রাঙ্গণে কোনো দালালের মাধ্যমে পরীক্ষা ছাড়া লাইসেন্স পাওয়ার চেষ্টা করবেন না। এসব জাল লাইসেন্স ট্রাফিক পুলিশের পয়েন্ট চেকিংয়ে ধরা পড়লে ফৌজদারি আইনে মামলা হবে। সমস্ত পরীক্ষা ও আবেদন এখন সরাসরি ডিজিটাল সিস্টেমে পরিচালিত হয়।",
        grievance_remedy="কোনো বিআরটিএ কর্মকর্তা বা পরিদর্শক অনৈতিক সুবিধা চাইলে বিআরটিএ হেল্পলাইন ১৬১০৭-এ জানান অথবা নির্বাহী ম্যাজিস্ট্রেট বা পরিচালক (ইঞ্জিনিয়ারিং) বরাবরে অভিযোগ করুন।"
    ))

    # 5. অনলাইন পুলিশ ক্লিয়ারেন্স সনদ (Police Clearance Certificate)
    services.append(CitizenService(
        service_id="bd-police-clearance-online-application-guide",
        title_bn="অনলাইন পুলিশ ক্লিয়ারেন্স সনদ আবেদন ও ফি নির্দেশিকা",
        title_en="Bangladesh Online Police Clearance Certificate Application & Exact Fee Guide",
        category="আইন ও পুলিশ সেবা",
        department_agency="বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="বিদেশে গমন বা চাকরির জন্য পুলিশ ক্লিয়ারেন্স পেতে কাউকে কোনো ঘুষ বা বাড়তি টাকা দিতে হয় না। সরকারি চালান ফি মাত্র ৫০০ টাকা। pcc.police.gov.bd থেকে সম্পূর্ণ অনলাইনে আবেদন ও ট্র্যাক করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="পুলিশ ক্লিয়ারেন্স সরকারি চালান ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="বাংলাদেশ ব্যাংক / সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২২১১-০০০১-২০১১) অথবা একপে অনলাইন পেমেন্ট",
                remarks="সরকারি নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।"
            )
        ],
        processing_time_sla="৭ থেকে ১০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="মূল পাসপোর্টের স্ক্যান কপি (১ম শ্রেণির গেজেটেড কর্মকর্তা দ্বারা সত্যায়িত)",
                is_mandatory=True,
                format_type="স্ক্যান কপি (পিডিএফ / ছবি)",
                how_to_obtain="বর্তমান ভ্যালিড পাসপোর্ট"
            ),
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) অথবা জন্ম সনদের ফটোকপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="৫০০ টাকার সরকারি ট্রেজারি চালান কপি বা অনলাইন পেমেন্ট স্লিপ",
                is_mandatory=True,
                format_type="চালান ফর্ম বা অনলাইন রশিদ",
                how_to_obtain="সোনালী ব্যাংক বা pcc পোর্টালে অনলাইন পেমেন্ট"
            ),
            RequiredDocument(
                name="চেয়ারম্যান / ওয়ার্ড কাউন্সিলর প্রদত্ত নাগরিকত্ব ও চারিত্রিক সনদপত্র",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পুলিশ ক্লিয়ারেন্স পোর্টালে অ্যাকাউন্ট খোলা",
                description="https://pcc.police.gov.bd ওয়েবসাইটে যান। মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।",
                action_url="https://pcc.police.gov.bd",
                tips="আপনার পাসপোর্টে উল্লেখিত বর্তমান বা স্থায়ী ঠিকানার সংশ্লিষ্ট থানা সিলেক্ট করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="আবেদন ফর্ম পূরণ ও চালান নম্বর এন্ট্রি",
                description="পাসপোর্ট অনুযায়ী ব্যক্তিগত তথ্য পূরণ করুন। সোনালী ব্যাংকে চালানের মাধ্যমে জমা দেওয়া ৫০০ টাকার চালান নম্বর ও তারিখ লিখুন অথবা একপে দিয়ে সরাসরি ডেবিট/ক্রেডিট/বিকাশ দিয়ে ফি পরিশোধ করুন।",
                tips="চালান কোডটি সতর্কতার সাথে মেলাবেন: ১-২২১১-০০০১-২০১১।"
            ),
            ApplicationStep(
                step_number=3,
                title="কাগজপত্র আপলোড ও সাবমিট",
                description="সত্যায়িত পাসপোর্টের তথ্যপাতা, চালানের কপি এবং কাউন্সিলর সনদপত্র আপলোড করে আবেদন সাবমিট করুন। একটি রেফারেন্স নম্বর পাবেন।",
                tips="ফাইলের সাইজ যেন নির্দিষ্ট সীমার মধ্যে থাকে।"
            ),
            ApplicationStep(
                step_number=4,
                title="পুলিশ তদন্ত ও ভেরিফিকেশন",
                description="আপনার স্থানীয় থানার ডিএসবি বা এসবি কর্মকর্তা আপনার তথ্য যাচাই করবেন। তদন্তকারী কর্মকর্তা যোগাযোগ করলে তাকে প্রয়োজনীয় আসল কাগজপত্র দেখান।",
                tips="তদন্তের জন্য কোনো পুলিশ কর্মকর্তাকে কোনো নগদ টাকা দেওয়ার সরকারি কোনো নিয়ম নেই।"
            ),
            ApplicationStep(
                step_number=5,
                title="সনদ গ্রহণ ও পররাষ্ট্র মন্ত্রণালয়ের সত্যায়ন",
                description="তদন্ত শেষে সনদ প্রস্তুত হলে এসএমএস পাবেন। আপনি সংশ্লিষ্ট এসপি অফিস বা ডিএমপি ওয়ান স্টপ সার্ভিস কাউন্টার থেকে সনদটি সংগ্রহ করতে পারবেন। সনদে পররাষ্ট্র মন্ত্রণালয়ের কিউআর কোডযুক্ত সত্যায়ন স্বয়ংক্রিয়ভাবে থাকে।"
            )
        ],
        official_portal_url="https://police.gov.bd",
        application_url="https://pcc.police.gov.bd",
        citizen_charter_url="https://police.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: পুলিশ ক্লিয়ারেন্সের জন্য সরকারি ফি মাত্র ৫০০ টাকা। কোনো দালাল বা মধ্যস্থতাকারীকে ১ টাকাও বাড়তি দেবেন না। পুরো কার্যক্রমটি পুলিশ সদরদপ্তর থেকে কেন্দ্রীয়ভাবে মনিটর করা হয়।",
        grievance_remedy="কোনো থানা কর্মকর্তা ঘুষ দাবি করলে বা কারণ ছাড়া ফাইল আটকে রাখলে জেলা পুলিশ সুপার (SP) অথবা ডিএমপি কমিশনার কার্যালয়ে যোগাযোগ করুন অথবা পুলিশ কন্ট্রোল রুম ৯৯৯-এ সহায়তা চান।"
    ))

    # 6. অনলাইন জন্ম ও মৃত্যু নিবন্ধন (BDRIS)
    services.append(CitizenService(
        service_id="bd-birth-registration-bdris-guide",
        title_bn="অনলাইন জন্ম নিবন্ধন আবেদন, সংশোধন ও সরকারি ফি নির্দেশিকা",
        title_en="Bangladesh Online Birth Registration (BDRIS) Official Fee & Guidelines",
        category="নাগরিক সনদ ও নিবন্ধন",
        department_agency="রেজিস্ট্রার জেনারেলের কার্যালয়, জন্ম ও মৃত্যু নিবন্ধন, স্থানীয় সরকার বিভাগ",
        summary="জন্ম ও মৃত্যু নিবন্ধনের জন্য দালালদের অতিরিক্ত টাকা দেওয়া বন্ধ করতে সরকার ডিজিটাল BDRIS ব্যবস্থা চালু করেছে। ৪৫ দিন বয়সের মধ্যে শিশুর জন্ম নিবন্ধন সম্পূর্ণ বিনামূল্যে করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="জন্মের ৪৫ দিন পর্যন্ত শিশু নিবন্ধন",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="বিনামূল্যে",
                remarks="সরকারিভাবে সম্পূর্ণ ফ্রি।"
            ),
            ServiceFee(
                category_name="জন্মের ৪৬ দিন হতে ৫ বছর বয়স পর্যন্ত",
                amount_bdt=25.0,
                vat_included=True,
                payment_method="ইউনিয়ন পরিষদ / পৌরসভা / কাউন্সিলর অফিসে বা অনলাইন",
                remarks="সরকারি ফি মাত্র ২৫ টাকা।"
            ),
            ServiceFee(
                category_name="জন্মের ৫ বছর পর যেকোনো বয়সে",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="সরকারি ট্রেজারি বা অফিস কাউন্টার",
                remarks="সরকারি ফি মাত্র ৫০ টাকা।"
            ),
            ServiceFee(
                category_name="জন্ম সনদ তথ্য সংশোধন ফি",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="অনলাইন / অফিস কাউন্টার",
                remarks="বাংলা ও ইংরেজি উভয় ভাষায় সংশোধনের ক্ষেত্রে।"
            )
        ],
        processing_time_sla="আবেদন জমা দেওয়ার পর ৭ কার্যদিবসের মধ্যে",
        required_documents=[
            RequiredDocument(
                name="হাসপাতাল বা ক্লিনিক কর্তৃক প্রদত্ত ইপিআই (টিকা) কার্ড বা জন্ম প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="স্ক্যান কপি",
                how_to_obtain="যে হাসপাতাল বা ক্লিনিকে শিশুর জন্ম হয়েছে"
            ),
            RequiredDocument(
                name="পিতা ও মাতার ডিজিটাল ১৬/১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি ও স্ক্যান কপি"
            ),
            RequiredDocument(
                name="বাসার ট্যাক্স পরিশোধের রশিদ বা ইউটিলিটি বিলের কপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি",
                how_to_obtain="ইউনিয়ন পরিষদ / পৌরসভা / সিটি কর্পোরেশন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="BDRIS অনলাইন পোর্টালে ফর্ম পূরণ",
                description="https://bdris.gov.bd ওয়েবসাইটে যান। 'জন্ম নিবন্ধন আবেদন' লিঙ্কে ক্লিক করুন। নিবন্ধনাধীন ব্যক্তির স্থায়ী ঠিকানা অনুযায়ী সংশ্লিষ্ট ইউনিয়ন পরিষদ, পৌরসভা বা সিটি কর্পোরেশন জোন সিলেক্ট করুন।",
                action_url="https://bdris.gov.bd/br/application",
                tips="নামের বানান বাংলা এবং ইংরেজি বড় হাতের অক্ষরে (Capital Letters) সার্টিফিকেটের সাথে মিলিয়ে লিখুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="কাগজপত্র সংযুক্তি ও আবেদন সাবমিট",
                description="টিকা কার্ড, পিতা-মাতার জন্ম সনদ ও বাসার হোল্ডিং ট্যাক্স রশিদের ছবি আপলোড করুন। আপনার মোবাইল নম্বর দিন এবং সাবমিট বাটনে ক্লিক করুন।",
                tips="আবেদন সাবমিট হলে একটি অ্যাপ্লিকেশন আইডি নম্বর পাবেন। আবেদনপত্রটি প্রিন্ট করে নিন।"
            ),
            ApplicationStep(
                step_number=3,
                title="ইউনিয়ন পরিষদ বা ওয়ার্ড কার্যালয়ে আবেদন জমা ও ফি প্রদান",
                description="প্রিন্ট করা আবেদন ফরম ও সংযুক্তিগুলোর ১ সেট ফটোকপি নিয়ে ১৫ দিনের মধ্যে সংশ্লিষ্ট ইউনিয়ন পরিষদ বা ওয়ার্ড কাউন্সিলর অফিসে যান এবং সরকারি নির্ধারিত ফি (সর্বোচ্চ ৫০ টাকা) জমা দিন।",
                tips="দালালরা জন্ম সনদের জন্য ৫০০ থেকে ২,০০০ টাকা দাবি করে, যা সম্পূর্ণ অবৈধ।"
            ),
            ApplicationStep(
                step_number=4,
                title="ডিজিটাল জন্ম সনদ সংগ্রহ",
                description="নিবন্ধক কর্মকর্তা তথ্য যাচাই করে অনুমোদন দিলে আপনার ফোনে মেসেজ আসবে। এরপর কার্যালয় থেকে কিউআর কোডযুক্ত ডিজিটাল জন্ম নিবন্ধন সনদ সংগ্রহ করুন।"
            )
        ],
        official_portal_url="https://bdris.gov.bd",
        application_url="https://bdris.gov.bd/br/application",
        citizen_charter_url="https://lgd.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: জন্ম নিবন্ধন করতে কোনো দালালের শরণাপন্ন হবেন না। অনেকে ভুয়া ওয়েবসাইট বানিয়ে ভুয়া কিউআর কোডযুক্ত জাল জন্ম সনদ তৈরি করে দেয় যা পরবর্তীতে পাসপোর্ট বা স্কুলে ভর্তির সময় বাতিল হয়ে যায়। নিশ্চিত হয়ে নিন সনদটি অফিশিয়াল bdris.gov.bd ডেটাবেজে সংরক্ষিত হয়েছে কিনা।",
        grievance_remedy="কোনো সচিব বা উদ্যোক্তা অতিরিক্ত টাকা দাবি করলে উপজেলা নির্বাহী কর্মকর্তা (UNO) অথবা জেলা প্রশাসক বরাবরে লিখিত অভিযোগ দিন।"
    ))

    # 7. অনলাইন পরচা / খতিয়ান সংগ্রহ (e-Porcha)
    services.append(CitizenService(
        service_id="bd-land-eporcha-certified-copy-guide",
        title_bn="অনলাইন খতিয়ান (পরচা) ও মৌজা ম্যাপ সংগ্রহ নির্দেশিকা",
        title_en="Bangladesh e-Porcha Certified Copy & Mouza Map Official Online Delivery Guide",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="ভূমি রেকর্ড ও জরিপ অধিদপ্তর, ভূমি মন্ত্রণালয়",
        summary="জমির সিএস, এসএ, আরএস বা বিএস পরচা (খতিয়ান) তোলার জন্য রেকর্ড রুমে গিয়ে দালালের শরণাপন্ন হওয়ার প্রয়োজন নেই। eporcha.gov.bd পোর্টাল থেকে মাত্র ১০০ টাকায় সার্টিফাইড কপি আবেদন করে সরাসরি ডাকযোগে বা ডিসি অফিস থেকে নেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="অনলাইন খতিয়ান সার্টিফাইড কপি (অফিস কাউন্টার থেকে গ্রহণ)",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট (বিকাশ, নগদ, রকেট, কার্ড)",
                remarks="কোর্ট ফি ও প্রসেসিং ফি বাবদ ১০০ টাকা।"
            ),
            ServiceFee(
                category_name="অনলাইন খতিয়ান সার্টিফাইড কপি (ডাকযোগে বাড়িতে হোম ডেলিভারি)",
                amount_bdt=140.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট",
                remarks="ফি ১০০ টাকা + ডাকমাশুল ৪০ টাকা = মোট ১৪০ টাকা।"
            ),
            ServiceFee(
                category_name="মৌজা ম্যাপ (নকশা) সার্টিফাইড কপি",
                amount_bdt=520.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট",
                remarks="ম্যাপ ফি ৫০০ টাকা + ডাক ফি ২০ টাকা।"
            )
        ],
        processing_time_sla="সাধারণ কপি: ৭ কার্যদিবস | জরুরি কপি: ৩ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ",
                is_mandatory=True,
                format_type="অনলাইন ইনপুট"
            ),
            RequiredDocument(
                name="সংশ্লিষ্ট খতিয়ান নম্বর, দাগ নম্বর অথবা মালিকের নাম",
                is_mandatory=True,
                format_type="তথ্য"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ই-পরচা পোর্টালে অনুসন্ধান",
                description="https://eporcha.gov.bd ওয়েবসাইটে যান। আপনার বিভাগ, জেলা, উপজেলা এবং সংশ্লিষ্ট মৌজা সিলেক্ট করুন। এরপর জরিপের ধরন (যেমন: আরএস, বিএস, সিএস) বাছাই করে খতিয়ান নম্বর দিয়ে খুঁজুন।",
                action_url="https://eporcha.gov.bd",
                tips="আপনি সম্পূর্ণ বিনামূল্যে অনলাইনে পরচার অনলাইন ড্রাফট দেখতে পারবেন।"
            ),
            ApplicationStep(
                step_number=2,
                title="সার্টিফাইড কপির আবেদন ও ডেলিভারি মোড নির্বাচন",
                description="'আবেদন করুন' বাটনে ক্লিক করে ডেলিভারির মাধ্যম হিসেবে 'ডাকযোগে' অথবা 'সরাসরি ডিসি অফিস' বেছে নিন। ডাকযোগে নিলে আপনার পূর্ণ ডাক যোগাযোগের ঠিকানা দিন।",
                tips="ডাকযোগে নিলে ডিসি অফিসের রেকর্ড রুমে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইনে ১০০ বা ১৪০ টাকা ফি পরিশোধ",
                description="বিকাশ, নগদ বা ব্যাংক কার্ডের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। আবেদনের ট্র্যাকিং স্লিপ প্রিন্ট বা সেভ করুন।",
                tips="কোনো মুহুরি বা দালালের মাধ্যমে ৫০০০ টাকা ফি দেওয়ার কোনো সুযোগ নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="খতিয়ান গ্রহণ",
                description="ডিসি অফিসের রেকর্ড রুম থেকে সিল ও সাক্ষরযুক্ত আসল সার্টিফাইড খতিয়ান ডাক পিয়ন আপনার বাড়িতে পৌঁছে দেবে।"
            )
        ],
        official_portal_url="https://eporcha.gov.bd",
        application_url="https://eporcha.gov.bd",
        citizen_charter_url="https://dlrs.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: রেকর্ড রুম বা ডিসি অফিসের চত্বরে কোনো মুহুরির কাছে যাবেন না। তারা ১০০ টাকার খতিয়ানের জন্য ১,৫০০ থেকে ৩,০০০ টাকা পর্যন্ত দাবি করে। ঘরে বসে স্মার্টফোনে eporcha.gov.bd থেকেই আসল সার্টিফাইড কপি পাওয়া যায়।"
    ))

    # 8. অনলাইন জিডি (Online General Diary - GD)
    services.append(CitizenService(
        service_id="bd-police-online-gd-guide",
        title_bn="অনলাইন সাধারণ ডায়েরি (জিডি) নির্দেশিকা",
        title_en="Bangladesh Police Online General Diary (GD) Complete Guide",
        category="আইন ও পুলিশ সেবা",
        department_agency="বাংলাদেশ পুলিশ হেডকোয়ার্টার্স, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="জাতীয় পরিচয়পত্র, পাসপোর্ট, সার্টিফিকেট, গুরুত্বপূর্ণ দলিল বা মালামাল হারিয়ে গেলে থানায় গিয়ে দালালের মাধ্যমে জিডি করার প্রয়োজন নেই। অনলাইন জিডি অ্যাপ বা পোর্টাল থেকে বিনামূল্যে ঘরে বসেই যেকোনো থানার জিডি করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="অনলাইন জিডি সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="জিডি করার জন্য সরকারি কোনো ফি নেই।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক অনলাইনে ডিজিটাল জিডি কপি প্রস্তুত হয়",
        required_documents=[
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) নম্বর ও জন্মতারিখ",
                is_mandatory=True,
                format_type="অনলাইন ভেরিফিকেশন"
            ),
            RequiredDocument(
                name="হারিয়ে যাওয়া বা প্রাপ্ত জিনিসের বিস্তারিত বিবরণ (যেমন: ডকুমেন্টের নম্বর)",
                is_mandatory=True,
                format_type="অনলাইন টেক্সট ইনপুট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="অনলাইন জিডি অ্যাপ বা পোর্টালে প্রবেশ",
                description="https://gd.police.gov.bd ওয়েবসাইটে যান অথবা 'Online GD' মোবাইল অ্যাপ ডাউনলোড করুন। আপনার এনআইডি এবং জন্মতারিখ দিয়ে অ্যাকাউন্ট খুলুন।",
                action_url="https://gd.police.gov.bd",
                tips="মোবাইলের সামনের ক্যামেরা দিয়ে লাইভ ফেস ভেরিফিকেশন সম্পন্ন হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="হারানো বা প্রাপ্তির তথ্য নির্বাচন",
                description="'হারানো' অপশন সিলেক্ট করুন। কি হারিয়েছে তা বেছে নিন (ডকুমেন্ট, যানবাহন, মানুষ বা মালামাল)।",
                tips="ঘটনার সময় ও স্থান সঠিকভাবে লিখুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="থানা নির্বাচন ও সাবমিট",
                description="যে এলাকার মধ্যে জিনিসটি হারিয়েছে সেই থানা সিলেক্ট করে সাবমিট করুন। সাবমিট করার সাথে সাথে কিউআর কোডযুক্ত ডিজিটাল জিডি সার্টিফিকেট তৈরি হবে।",
                tips="সার্টিফিকেটটি ডাউনলোড ও প্রিন্ট করে নতুন এনআইডি, পাসপোর্ট বা সিম রিপ্লেসমেন্টে ব্যবহার করা যায়।"
            )
        ],
        official_portal_url="https://police.gov.bd",
        application_url="https://gd.police.gov.bd",
        citizen_charter_url="https://police.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: জিডি করতে থানায় কাউকে ১ টাকাও দেওয়ার নিয়ম নেই। অনলাইনে করা কিউআর কোডযুক্ত জিডি কপি দেশের সকল সরকারি ও বেসরকারি প্রতিষ্ঠানে সরাসরি গ্রহণযোগ্য।"
    ))

    # 9. ই-টিআইএন (e-TIN) রেজিস্ট্রেশন ও ট্যাক্স রিটার্ন দাখিল
    services.append(CitizenService(
        service_id="bd-nbr-etin-tax-return-guide",
        title_bn="ই-টিআইএন (e-TIN) গ্রহণ ও অনলাইন আয়কর রিটার্ন দাখিল",
        title_en="Bangladesh NBR e-TIN Registration & Online Tax Return Submission Guide",
        category="অর্থ ও রাজস্ব সেবা",
        department_agency="জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়",
        summary="ই-টিআইএন খোলা এবং বার্ষিক শূন্য বা করযোগ্য আয়কর রিটার্ন দাখিল করার জন্য ট্যাক্স ল ইয়ার বা দালালের পেছনে হাজার হাজার টাকা খরচ করার প্রয়োজন নেই। etaxnbr.gov.bd থেকে কয়েক মিনিটে বিনামূল্যে রিটার্ন জমা দিয়ে সাথে সাথে প্রাপ্তি স্বীকারপত্র (Acknowledgment Slip) পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ই-টিআইএন রেজিস্ট্রেশন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="টিআইএন সার্টিফিকেট তৈরির কোনো ফি নেই।"
            ),
            ServiceFee(
                category_name="অনলাইন রিটার্ন সাবমিশন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="অনলাইনে সিস্টেম ব্যবহারের কোনো চার্জ নেই। করযোগ্য আয় থাকলে প্রযোজ্য কর সোনালী ব্যাংক/কার্ড/বিকাশে জমা দেওয়া যায়।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক ডিজিটাল একনলেজমেন্ট স্লিপ ও সার্টিফিকেট ডাউনলোড",
        required_documents=[
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) নম্বর",
                is_mandatory=True,
                format_type="অনলাইন ভেরিফিকেশন"
            ),
            RequiredDocument(
                name="আবেদনকারীর নিজস্ব বায়োমেট্রিক সিম নম্বর",
                is_mandatory=True,
                format_type="ওটিপি ভেরিফিকেশন"
            ),
            RequiredDocument(
                name="ব্যাংক স্টেটমেন্ট ও বেতন বিবরণী (চাকরিজীবীদের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="তথ্য ইনপুট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ই-ট্যাক্স পোর্টালে রেজিস্ট্রেশন",
                description="https://etaxnbr.gov.bd পোর্টালে যান। আপনার টিআইএন এবং বায়োমেট্রিক সিম নম্বর দিয়ে ওটিপি ভেরিফাই করে পাসওয়ার্ড সেট করুন।",
                action_url="https://etaxnbr.gov.bd",
                tips="সিম কার্ডটি আবেদনকারীর নিজের এনআইডি দিয়ে নিবন্ধিত হতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="সহজ এক পাতার রিটার্ন ফর্ম পূরণ",
                description="আয়ের উৎস (চাকরি, ব্যবসা, গৃহসম্পত্তি) এবং মোট আয় লিখুন। বার্ষিক আয় করসীমার নিচে হলে স্বয়ংক্রিয়ভাবে 'জিরো ট্যাক্স' ক্যালকুলেট হবে।",
                tips="সিস্টেম নিজে নিজেই ট্যাক্স হিসাব করে দেয়, জটিল ফর্মুলা মুখস্থ করার দরকার নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="সাবমিট ও একনলেজমেন্ট স্লিপ ডাউনলোড",
                description="প্রিভিউ দেখে সাবমিট বাটনে ক্লিক করুন। সাথে সাথে কিউআর কোডযুক্ত অফিশিয়াল ট্যাক্স সার্টিফিকেট ও একনলেজমেন্ট স্লিপ ডাউনলোড করুন।",
                tips="এটি ব্যাংক লোন, পাসপোর্ট নবায়ন, ট্রেড লাইসেন্স ইত্যাদি সব কাজে ব্যবহারের জন্য সরকারিভাবে অনুমোদিত।"
            )
        ],
        official_portal_url="https://nbr.gov.bd",
        application_url="https://etaxnbr.gov.bd",
        citizen_charter_url="https://nbr.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দালালরা সাধারণ নাগরিকদের ভীতি প্রদর্শন করে টিআইএন ও শূন্য রিটার্নের জন্য ৩,০০০ থেকে ১০,০০০ টাকা পর্যন্ত দাবি করে। ঘরে বসে স্মার্টফোনে ১০ মিনিটে নিজে নিজেই সম্পূর্ণ বিনামূল্যে এই কাজ করা যায়।"
    ))

    # 10. অনলাইন ভূমি উন্নয়ন কর (খাজনা) দাখিলা
    services.append(CitizenService(
        service_id="bd-land-tax-ldtax-online-dakhila",
        title_bn="অনলাইন ভূমি উন্নয়ন কর (খাজনা) পরিশোধ ও দাখিলা সংগ্রহ",
        title_en="Bangladesh Online Land Development Tax (LD Tax) Payment & Dakhila Download",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="ভূমি মন্ত্রণালয়",
        summary="ইউনিয়ন ভূমি অফিসে গিয়ে খাজনা দেওয়ার নামে হয়রানি ও বাড়তি ঘুষ নেওয়ার দিন শেষ। ldtax.gov.bd পোর্টালে জমির খতিয়ান যুক্ত করে ঘরে বসেই অনলাইন পেমেন্টে বার্ষিক খাজনা দিয়ে কিউআর কোডযুক্ত ডিজিটাল দাখিলা (রশিদ) পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="কৃষি জমি (২৫ বিঘা বা ৮.২৫ একর পর্যন্ত)",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ মওকুফ (০ টাকা)",
                remarks="শুধুমাত্র দাখিলা ফি বাবদ নূন্যতম সরকারি চার্জ প্রযোজ্য হতে পারে।"
            ),
            ServiceFee(
                category_name="আবাসিক বা বাণিজ্যিক জমি",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="অনলাইন বিকাশ, নগদ, রকেট, কার্ড",
                remarks="জমির অবস্থান (গ্রাম, পৌরসভা, সিটি কর্পোরেশন) এবং শতকের পরিমাণ অনুযায়ী স্বয়ংক্রিয়ভাবে সিস্টেম হিসাব করে।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক কিউআর কোডযুক্ত দাখিলা তৈরি",
        required_documents=[
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর",
                is_mandatory=True,
                format_type="অনলাইন ইনপুট"
            ),
            RequiredDocument(
                name="জমির হালনাগাদ খতিয়ান ও দাগ নম্বর",
                is_mandatory=True,
                format_type="তথ্য ইনপুট"
            ),
            RequiredDocument(
                name="পূর্ববর্তী খাজনার দাখিলার কপি (যদি থাকে)",
                is_mandatory=False,
                format_type="স্ক্যান কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="এলডি ট্যাক্স পোর্টালে নাগরিক নিবন্ধন",
                description="https://ldtax.gov.bd পোর্টালে যান। 'নাগরিক কর্নার'-এ গিয়ে মোবাইল নম্বর ও এনআইডি দিয়ে নিবন্ধন করুন।",
                action_url="https://ldtax.gov.bd",
                tips="একবার নিবন্ধন করলে আপনার সব জমির খাজনা এক প্রোফাইল থেকেই দেওয়া যাবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="খতিয়ান এন্ট্রি ও হোল্ডিং সংযোজন",
                description="জেলা, উপজেলা, মৌজা এবং আপনার খতিয়ান নম্বর দিয়ে হোল্ডিং খুঁজুন এবং যুক্ত করুন। ভূমি সহকারী কর্মকর্তা হোল্ডিং অনুমোদন দিলে বকেয়া ও বর্তমান খাজনার দাবি সিস্টেমে দেখা যাবে।",
                tips="অনুমোদন হতে দেরি হলে ১৬১২২ নম্বরে কল করে জানান।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইন পেমেন্ট ও দাখিলা প্রিন্ট",
                description="'ই-পেমেন্ট' বাটনে ক্লিক করে মোবাইল ব্যাংকিং দিয়ে কর পরিশোধ করুন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই কিউআর কোডযুক্ত অনলাইন দাখিলা ডাউনলোড ও প্রিন্ট করে নিন।",
                tips="এই ডিজিটাল দাখিলা যে কোনো জমি রেজিস্ট্রি বা নামজারির কাজে শতভাগ বৈধ।"
            )
        ],
        official_portal_url="https://land.gov.bd",
        application_url="https://ldtax.gov.bd",
        citizen_charter_url="https://minland.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: তহশিলদার বা ইউনিয়ন ভূমি অফিসের কোনো ব্যক্তিকে বাড়তি নগদ টাকা দেওয়ার প্রয়োজন নেই। সরকারি সিস্টেমে যে পরিমাণ টাকা আসবে, তার বাইরে অতিরিক্ত টাকা দাবি করা দণ্ডনীয় অপরাধ।"
    ))

    return services
