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

    # 11. বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র (প্রবাসী কল্যাণ)
    services.append(CitizenService(
        service_id="bd-bmet-smart-card-emigration-clearance",
        title_bn="বিএমইটি (BMET) স্মার্ট কার্ড ও বহির্গমন ছাড়পত্র আবেদন নির্দেশিকা",
        title_en="Bangladesh BMET Smart Card & Emigration Clearance Official Fee Guide (Ami Probashi)",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
        summary="বিদেশে চাকরির উদ্দেশ্যে যাওয়ার জন্য বিএমইটি স্মার্ট কার্ড আবশ্যক। দালাল বা রিক্রুটিং এজেন্টরা এর জন্য ২০,০০০ থেকে ৫০,০০০ টাকা দাবি করে, অথচ সরকারি নির্ধারিত সর্বমোট ফি মাত্র ৪,০০০-৫,০০০ টাকার মতো। 'আমি প্রবাসী' (Ami Probashi) অ্যাপ বা পোর্টালে নিজেই সরাসরি ফি দিয়ে কার্ড নেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="প্রবাসী কল্যাণ তহবিল ও সদস্যপদ ফি",
                amount_bdt=3500.0,
                vat_included=True,
                payment_method="আমি প্রবাসী অ্যাপ / সোনালী ব্যাংক একপে",
                remarks="সরকারি নির্ধারিত কল্যাণ ফি ৩৫০০ টাকা (প্রবাসী কর্মী ও তার পরিবারের কল্যাণে ব্যবহৃত হয়)"
            ),
            ServiceFee(
                category_name="প্রবাসী জীবন বীমা প্রিমিয়াম (বাধ্যতামূলক)",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট গেটওয়ে",
                remarks="প্রবাসী কর্মীর জন্য জীবন বীমা পলিসি বাবদ ১০০০ টাকা"
            ),
            ServiceFee(
                category_name="বিএমইটি স্মার্ট কার্ড ও সার্ভিস চার্জ",
                amount_bdt=250.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="স্মার্ট কার্ড প্রিন্ট ও সার্ভিস ফি ২৫০ টাকা"
            ),
            ServiceFee(
                category_name="বিএমইটি ডাটাবেজ রেজিস্ট্রেশন ফি",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="আমি প্রবাসী মোবাইল ওয়ালেট",
                remarks="শুরুতে ডাটাবেজে নাম অন্তর্ভুক্তির জন্য ৩০০ টাকা (ডিমো অফিসে গেলে মাত্র ২০০ টাকা)"
            )
        ],
        processing_time_sla="আবেদন ও ফি জমার পর ৩ থেকে ৫ কার্যদিবসের মধ্যে",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর আসল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)",
                is_mandatory=True,
                format_type="স্ক্যান কপি ও মূল পাসপোর্ট",
                how_to_obtain="ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর"
            ),
            RequiredDocument(
                name="বৈধ কাজের ভিসা (Work Visa / Employment Visa)",
                is_mandatory=True,
                format_type="অনলাইন ভিসা কপি বা পাসপোর্টে স্ট্যাম্পিং কপি"
            ),
            RequiredDocument(
                name="নিয়োগকর্তার কর্মচুক্তিপত্র (Job Contract / Employment Agreement)",
                is_mandatory=True,
                format_type="পিডিএফ ফাইল / স্ক্যান কপি"
            ),
            RequiredDocument(
                name="মেডিকেল ফিটনেস সনদ (GAMCA / সরকার অনুমোদিত মেডিকেল সেন্টার)",
                is_mandatory=True,
                format_type="অনলাইন মেডিকেল আনফিট/ফিট রিপোর্ট"
            ),
            RequiredDocument(
                name="প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) সনদ",
                is_mandatory=True,
                format_type="টিটিসি (TTC) প্রদত্ত ওরিয়েন্টেশন সার্টিফিকেট",
                how_to_obtain="সরকারি টেকনিক্যাল ট্রেনিং সেন্টার (TTC) থেকে ৩ দিনের ট্রেনিং"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="আমি প্রবাসী অ্যাপে রেজিস্ট্রেশন ও বিএমইটি নম্বর গ্রহণ",
                description="'Ami Probashi' অ্যাপ ডাউনলোড করুন অথবা amiprobashi.com পোর্টালে যান। আপনার পাসপোর্ট নম্বর দিয়ে স্ক্যান করে ডাটাবেজ রেজিস্ট্রেশন সম্পন্ন করুন এবং ৩০০ টাকা ফি দিন।",
                action_url="https://amiprobashi.com",
                tips="নাম ও পাসপোর্ট তথ্য শতভাগ পাসপোর্টের সাথে মিল থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="PDO ট্রেনিং সম্পন্ন করা",
                description="নিকটস্থ সরকারি টিটিসি (Technical Training Center)-তে ৩ দিনের প্রি-ডিপার্চার ওরিয়েন্টেশন (PDO) ট্রেনিংয়ে অংশ নিন এবং অনলাইন সনদ ডাউনলোড করুন।",
                tips="PDO সার্টিফিকেট ছাড়া বহির্গমন ছাড়পত্রের আবেদন গ্রহণ করা হয় না।"
            ),
            ApplicationStep(
                step_number=3,
                title="ভিসা ও চুক্তিপত্র যাচাই এবং ফি প্রদান",
                description="ভিসা কপি, মেডিকেল সনদ ও জব কন্ট্রাক্ট আপলোড করে ক্লিয়ারেন্সের জন্য আবেদন করুন। মোট সরকারি ফি (কল্যাণ ফি ৩৫০০ + বীমা ১০০০ + কার্ড ২৫০ = মোট ৪,৭৫০ টাকা) অনলাইনে বিকাশ বা ব্যাংকে পরিশোধ করুন।",
                tips="দালাল বা এজেন্সিকে অতিরিক্ত কোনো টাকা দেওয়ার প্রয়োজন নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="ডিজিটাল স্মার্ট কার্ড ও কিউআর ক্লিয়ারেন্স ডাউনলোড",
                description="বিএমইটি কর্মকর্তা কর্তৃক আবেদন অনুমোদিত হলে মোবাইলে কিউআর কোডযুক্ত ডিজিটাল ই-ক্লিয়ারেন্স কার্ড পাওয়া যায়। এটি প্রিন্ট করে বিমানবন্দরে ইমিগ্রেশনে দেখালেই বিদেশ যাওয়া যায়।"
            )
        ],
        official_portal_url="https://bmet.gov.bd",
        application_url="https://amiprobashi.com",
        citizen_charter_url="https://bmet.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: রিক্রুটিং এজেন্সি বা কোনো দালাল স্মার্ট কার্ডের নামে ২০ থেকে ৫০ হাজার টাকা দাবি করলে তা সম্পূর্ণ চাঁদাবাজি। সরকারি ফি মাত্র ৪,৭৫০ টাকা। সরাসরি 'আমি প্রবাসী' অ্যাপ থেকে নিজে নিজেই আবেদন করে কিউআর কার্ড ডাউনলোড করা যায়।",
        grievance_remedy="কোনো রিক্রুটিং এজেন্ট পাসপোর্ট আটকে রাখলে বা চাঁদাবাজি করলে প্রবাসী কল্যাণ মন্ত্রণালয়ের হেল্পলাইন ১৬১৩৫ অথবা বৈরাশিক অভিযোগ সেলে অভিযোগ দায়ের করুন।"
    ))

    # 12. সাব-রেজিস্ট্রি অফিসে জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি
    services.append(CitizenService(
        service_id="bd-land-deed-registration-fees-breakdown",
        title_bn="জমি রেজিস্ট্রেশন ও সাফ-কবলা দলিল সম্পাদন ফি নির্দেশিকা",
        title_en="Bangladesh Sub-Registry Land Deed Registration Official Fees Breakdown",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ",
        summary="জমি বা ফ্ল্যাট ক্রয়ের পর সাব-রেজিস্ট্রি অফিসে জমি রেজিস্ট্রি করতে গেলে দলিল লেখক ও দালালরা অজ্ঞতার সুযোগ নিয়ে ১৫-২০% টাকা হাতিয়ে নেয়। সরকারি গ্যাজেট অনুযায়ী মোট রেজিস্ট্রেশন খরচ দলিলের সরকারি বাজারমূল্যের মাত্র ৮% থেকে ৯.৫% (এলাকাভেদে)।",
        official_fees=[
            ServiceFee(
                category_name="রেজিস্ট্রেশন ফি (Registration Fee)",
                amount_bdt=1.0,
                vat_included=True,
                payment_method="সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২১২২-০০০১-১৮১৬)",
                remarks="দলিলের মোট মূল্যের ১% (নূন্যতম ১০০ টাকা)"
            ),
            ServiceFee(
                category_name="স্ট্যাম্প শুল্ক (Stamp Duty)",
                amount_bdt=1.5,
                vat_included=True,
                payment_method="জুডিশিয়াল স্ট্যাম্প বা ই-চালান",
                remarks="দলিলের মোট মূল্যের ১.৫%"
            ),
            ServiceFee(
                category_name="স্থানীয় সরকার কর (Local Govt Tax)",
                amount_bdt=3.0,
                vat_included=True,
                payment_method="ব্যাংক পে-অর্ডার / চালান",
                remarks="সিটি কর্পোরেশন/পৌরসভায় ৩%, ইউনিয়ন পরিষদে ২%"
            ),
            ServiceFee(
                category_name="উৎস কর / এআইটি (AIT - আয়কর কর্ড)",
                amount_bdt=3.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="জমির এলাকাভিত্তিক ১% থেকে সর্বোচ্চ ৫% পর্যন্ত (গ্রামাঞ্চলে সাধারণত ১-২%)"
            ),
            ServiceFee(
                category_name="হলফনামা স্ট্যাম্প ও এন-ফি",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="নন-জুডিশিয়াল স্ট্যাম্প",
                remarks="হলফনামা ৩০০ টাকার স্ট্যাম্প + এন ফি প্রতি ৩০০ শব্দে ২৪ টাকা"
            )
        ],
        processing_time_sla="দলিল উপস্থাপনের দিনই সম্পাদন ও মূল রসিদ (৫২ ধারা) প্রদান",
        required_documents=[
            RequiredDocument(
                name="প্রস্তুতকৃত সাফ-কবলা দলিল ও হলফনামা",
                is_mandatory=True,
                format_type="জুডিশিয়াল স্ট্যাম্পে প্রিন্ট"
            ),
            RequiredDocument(
                name="বিক্রেতার নামে হালনাগাদ নামজারি খতিয়ান ও ডিসিআর কপি",
                is_mandatory=True,
                format_type="অনলাইন কিউআর কোড কপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) দাখিলা",
                is_mandatory=True,
                format_type="ডিজিটাল রশিদ"
            ),
            RequiredDocument(
                name="ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ রঙিন ছবি",
                is_mandatory=True,
                format_type="ফটোকপি ও সত্যায়িত ছবি"
            ),
            RequiredDocument(
                name="ট্রেজারি চালান ও স্থানীয় সরকার পে-অর্ডারের মূল কপি",
                is_mandatory=True,
                format_type="ব্যাংক রসিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="জমির সরকারি মৌজা রেট যাচাই",
                description="dolil.gov.bd বা সাব-রেজিস্ট্রি অফিসে গিয়ে সংশ্লিষ্ট মৌজার সরকার নির্ধারিত সর্বনিম্ন বাজারমূল্য (মৌজা রেট) জানুন। দলিলের মূল্য এর কম হতে পারবে না।",
                action_url="http://www.dolil.gov.bd",
                tips="দালালরা মৌজা রেটের হিসাব লুকিয়ে বাড়তি টাকা দাবি করে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ব্যাংক চালান ও পে-অর্ডার তৈরি",
                description="মৌজা মূল্যের উপর ১% রেজিস্ট্রেশন ফি, ১.৫% স্ট্যাম্প শুল্ক, স্থানীয় সরকার কর (২-৩%) সোনালী ব্যাংকে চালানের মাধ্যমে জমা দিয়ে মূল রসিদ নিন।",
                tips="সকল ফি সরকারি চালানে সরাসরি সোনালী ব্যাংক বা বাংলাদেশ ব্যাংকে জমা হয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="সাব-রেজিস্ট্রারের এজলাসে দলিল উপস্থাপন ও বায়োমেট্রিক",
                description="ক্রেতা, বিক্রেতা ও সাক্ষীরা সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে ফিঙ্গারপ্রিন্ট ও স্বাক্ষর প্রদান করুন। কোনো কর্মকর্তা বা কর্মচারীকে বাড়তি ঘুষ দেবেন না।",
                tips="সাব-রেজিস্ট্রার দলিল যাচাই করে স্বাক্ষর করবেন।"
            ),
            ApplicationStep(
                step_number=4,
                title="৫২ ধারার রসিদ গ্রহণ ও মূল দলিল উত্তোলন",
                description="রেজিস্ট্রি সম্পন্ন হলে সাব-রেজিস্ট্রি অফিস থেকে ৫২ ধারার মূল প্রাপ্তি রসিদ বুঝে নিন। পরবর্তীতে এই রসিদ জমা দিয়ে মূল রেজিস্ট্রিকৃত দলিল তুলতে পারবেন।"
            )
        ],
        official_portal_url="http://www.dolil.gov.bd",
        application_url="http://www.dolil.gov.bd",
        citizen_charter_url="https://mor.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দলিল লেখক বা নকলনবিশরা সাব-রেজিস্ট্রারের নামে 'অফিস খরচ' বা 'টেবিল কালেকশন' হিসেবে ৫০ হাজার থেকে লাখ টাকা পর্যন্ত দাবি করে, যা সম্পূর্ণ অবৈধ ও ঘুষ। সরকারি চালানের রসিদের বাইরে কোনো ব্যক্তিকে নগদ টাকা দেবেন না।",
        grievance_remedy="রেজিস্ট্রি অফিসে ঘুষ দাবি করলে দুর্নীতি দমন কমিশন (দুদক) হটলাইন ১০৬-এ ফোন করে সরাসরি ট্র্যাপ অভিযানে সহায়তা নিন অথবা জেলা রেজিস্ট্রার বরাবরে অভিযোগ দিন।"
    ))

    # 13. দলিলের সার্টিফাইড নকল (Certified Copy of Deed) সংগ্রহ
    services.append(CitizenService(
        service_id="bd-land-certified-copy-deed-nakal",
        title_bn="দলিলের সার্টিফাইড নকল (নকল কপি) সংগ্রহ নির্দেশিকা",
        title_en="Bangladesh Sub-Registry Certified Copy of Registered Deed (Nakal Guide)",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ",
        summary="পুরোনো রেজিস্ট্রিকৃত দলিলের নকল (সার্টিফাইড কপি) তোলার জন্য সাব-রেজিস্ট্রি অফিসে নকলনবিশ ও দালাল চক্র সাধারণ মানুষকে জিম্মি করে ৩,০০০ থেকে ১০,০০০ টাকা আদায় করে। অথচ সরকারি নির্ধারিত নকল ফি মাত্র ২০০ থেকে ৫০০ টাকা।",
        official_fees=[
            ServiceFee(
                category_name="দলিল তল্লাশি ফি (Search Fee - ১ বছরের জন্য)",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="১ বছরের বেশি তল্লাশির ক্ষেত্রে প্রতি বছরের জন্য অতিরিক্ত ১৫ টাকা"
            ),
            ServiceFee(
                category_name="নকল ফি (Copy Fee - প্রতি ৩০০ শব্দে)",
                amount_bdt=24.0,
                vat_included=True,
                payment_method="কোর্ট ফি / সরকারি স্ট্যাম্প",
                remarks="সরকারি নির্ধারিত শব্দভিত্তিক ফি"
            ),
            ServiceFee(
                category_name="জরুরি নকল ফি (Urgent Fee)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="স্ট্যাম্প",
                remarks="জরুরি ভিত্তিতে নকল চাইলে অতিরিক্ত ফি"
            ),
            ServiceFee(
                category_name="সার্টিফাইড স্ট্যাম্প ফি",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="স্ট্যাম্প",
                remarks="দলিল প্রমাণের আসল সিলমোহর ফি"
            )
        ],
        processing_time_sla="সাধারণ নকল: ৭ কার্যদিবস | জরুরি নকল: ৩ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর এনআইডি (NID) নম্বর ও মোবাইল নম্বর",
                is_mandatory=True,
                format_type="আবেদনে উল্লেখ"
            ),
            RequiredDocument(
                name="দলিল নম্বর, রেজিস্ট্রির সাল ও সাব-রেজিস্ট্রি অফিসের নাম",
                is_mandatory=True,
                format_type="তথ্য ইনপুট"
            ),
            RequiredDocument(
                name="দলিল নম্বর জানা না থাকলে দাতা ও গ্রহীতার নাম এবং মৌজার বিবরণ",
                is_mandatory=False,
                format_type="তল্লাশির জন্য তথ্য"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="নির্ধারিত ফরমে আবেদন ও কোর্ট ফি সংযোজন",
                description="সাব-রেজিস্ট্রি অফিসের নকল শাখায় নির্ধারিত আবেদন ফরমে দলিলের নম্বর, সাল ও জমির বিবরণ লিখুন। আবেদনের উপরে ২০ টাকার কোর্ট ফি লাগান।",
                action_url="http://www.dolil.gov.bd",
                tips="দলিল নম্বর জানা থাকলে কোনো তল্লাশি ফি ছাড়া সরাসরি নকলের আবেদন করা যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="নকল শাখায় জমা ও রসিদ গ্রহণ",
                description="আবেদনপত্রটি সংশ্লিষ্ট সাব-রেজিস্ট্রি অফিসের রেকর্ড কিপারের কাছে জমা দিন এবং একটি গ্রহণ রসিদ (টোকেন) নিন যাতে সম্ভাব্য ডেলিভারির তারিখ লেখা থাকবে।",
                tips="কোনো মুহুরি বা নকলনবিশকে ব্যক্তিগতভাবে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="নকলের মূল পাতার স্ট্যাম্প প্রদান ও নকল গ্রহণ",
                description="দলিল যত পাতার হবে সেই অনুযায়ী সরকারি মূল্যের স্ট্যাম্প জমা দিয়ে সাব-রেজিস্ট্রারের স্বাক্ষর ও সিলযুক্ত আসল সার্টিফাইড নকল বুঝে নিন।",
                tips="এই নকল কপি আদালত ও ব্যাংকে মূল দলিলের সমতুল্য হিসেবে গ্রহণযোগ্য।"
            )
        ],
        official_portal_url="http://www.dolil.gov.bd",
        application_url="http://www.dolil.gov.bd",
        citizen_charter_url="https://mor.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: সাব-রেজিস্ট্রি অফিসের বাইরে ঘোরাঘুরি করা দালালরা নকল তুলে দেওয়ার নামে বিশাল অঙ্ক দাবি করে। আপনি নিজে সাব-রেজিস্ট্রি অফিসে ঢুকে সরাসরি রেকর্ড শাখায় ২০ টাকার কোর্ট ফি দিয়ে আবেদন করতে পারেন।"
    ))

    # 14. ই-ট্রেড লাইসেন্স আবেদন ও নবায়ন (Trade License)
    services.append(CitizenService(
        service_id="bd-etrade-license-citycorp-union-guide",
        title_bn="ই-ট্রেড লাইসেন্স নতুন আবেদন ও নবায়ন নির্দেশিকা",
        title_en="Bangladesh e-Trade License (City Corp, Pourashava, Union Parishad) Official Fee Guide",
        category="ব্যবসা ও বাণিজ্য সেবা",
        department_agency="স্থানীয় সরকার বিভাগ, স্থানীয় সরকার, পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়",
        summary="যেকোনো বৈধ ব্যবসা শুরু করতে ট্রেড লাইসেন্স বাধ্যতামূলক। ইউনিয়ন পরিষদ বা সিটি কর্পোরেশনের সামনে দালালরা ট্রেড লাইসেন্সের জন্য ১০,০০০ থেকে ২৫,০০০ টাকা নেয়। অনলাইনে etradelicense.gov.bd বা সংশ্লিষ্ট সিটি কর্পোরেশন পোর্টালে সরকার নির্ধারিত ন্যূনতম ফি দিয়ে নিজে নিজেই লাইসেন্স পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ইউনিয়ন পরিষদ ট্রেড লাইসেন্স (সাধারণ ক্ষুদ্র ব্যবসা)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="অনলাইন / ইউনিয়ন পরিষদ ক্যাশ রসিদ",
                remarks="বার্ষিক সরকারি ফি ৫০০ থেকে ১,০০০ টাকা মাত্র।"
            ),
            ServiceFee(
                category_name="পৌরসভা ট্রেড লাইসেন্স (মাঝারি ব্যবসা)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট গেটওয়ে",
                remarks="ব্যবসার ধরন অনুযায়ী ১,৫০০ থেকে ৩,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="সিটি কর্পোরেশন ট্রেড লাইসেন্স (আইটি / জেনারেল ট্রেডিং)",
                amount_bdt=3500.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট (বিকাশ, রকেট, কার্ড)",
                remarks="লাইসেন্স ফি ২০০০ + সাইনবোর্ড কর + ১৫% ভ্যাট অন্তর্ভুক্ত।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন ও ফি জমার পর সর্বোচ্চ ৩ কার্যদিবসের মধ্যে ডিজিটাল লাইসেন্স প্রস্তুত",
        required_documents=[
            RequiredDocument(
                name="ব্যবসায়ীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="ব্যবসা প্রতিষ্ঠানের ভাড়ার চুক্তিপত্র অথবা নিজস্ব দোকান হলে হোল্ডিং ট্যাক্স দাখিলা",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর পাসপোর্ট সাইজ রঙিন ছবি",
                is_mandatory=True,
                format_type="ডিজিটাল ছবি"
            ),
            RequiredDocument(
                name="ই-টিআইএন (e-TIN) সার্টিফিকেট",
                is_mandatory=False,
                format_type="অনলাইন কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ই-ট্রেড লাইসেন্স পোর্টালে প্রবেশ",
                description="https://etradelicense.gov.bd (অথবা ঢাকা উত্তর/দক্ষিণ হলে নিজ নিজ সিটি কর্পোরেশনের ট্রেড লাইসেন্স পোর্টাল)-এ যান। মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।",
                action_url="https://etradelicense.gov.bd",
                tips="আপনার ব্যবসার সঠিক ক্যাটাগরি (খুচরা, পাইকারি, আইটি, কনসালটেন্সি) নির্বাচন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ব্যবসার ঠিকানা ও ভাড়া চুক্তি আপলোড",
                description="ব্যবসা প্রতিষ্ঠানের সাইনবোর্ড নাম, ঠিকানা এবং ভাড়ার চুক্তিপত্রের স্ক্যান কপি আপলোড করুন।",
                tips="কোনো ভুয়া দলিল আপলোড করবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইনে সরকারি ফি পরিশোধ",
                description="বিকাশ, রকেট বা ব্যাংক কার্ড দিয়ে নির্ধারিত ফি প্রদান করুন। ফি জমা হওয়ার সাথে সাথেই একটি ডিজিটাল প্রাপ্তি ট্র্যাকিং স্লিপ পাবেন।",
                tips="কোনো রাজস্ব পরিদর্শক বা দালালকে ক্যাশ টাকা দেওয়ার প্রয়োজন নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="কিউআর কোডযুক্ত ডিজিটাল লাইসেন্স ডাউনলোড",
                description="লাইসেন্স অফিসার অনুমোদন দিলে তৎক্ষণাৎ কিউআর কোডযুক্ত রঙিন ই-ট্রেড লাইসেন্স ডাউনলোড ও কালার প্রিন্ট করে দোকানে ঝুলিয়ে রাখুন। এটি দিয়ে যে কোনো ব্যাংকে কারেন্ট একাউন্ট খোলা যায়।"
            )
        ],
        official_portal_url="https://etradelicense.gov.bd",
        application_url="https://etradelicense.gov.bd",
        citizen_charter_url="https://lgd.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: সিটি কর্পোরেশন ও ইউনিয়ন পরিষদের দালালের মাধ্যমে অফলাইন ট্রেড লাইসেন্স নেবেন না। অনেক সময় তারা জাল বা ভূয়া সিল দেওয়া লাইসেন্স ধরিয়ে দেয় যা দিয়ে পরবর্তীতে ব্যাংক একাউন্ট খোলা বা ট্যাক্স ফাইল করা যায় না। সম্পূর্ণ অনলাইন সিস্টেম ব্যবহার করুন।"
    ))

    # 15. বিআরটিএ মোটরযান রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট
    services.append(CitizenService(
        service_id="bd-brta-vehicle-registration-numberplate",
        title_bn="বিআরটিএ মোটরযান (বাইক/কার) রেজিস্ট্রেশন ও ডিজিটাল নম্বর প্লেট নির্দেশিকা",
        title_en="Bangladesh BRTA Motor Vehicle Registration, Digital Number Plate & RFID Tag Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ",
        summary="মোটরসাইকেল বা গাড়ি কেনার পর রেজিস্ট্রেশনের জন্য শোরুমের দালালরা ২৫,০০০ থেকে ৫০,০০০ টাকা দাবি করে। বিআরটিএ সেবা বাতায়ন (BSP) পোর্টালে সরাসরি সরকার নির্ধারিত ফি জমা দিয়ে নিজে নিজেই রেজিস্ট্রেশন ও বায়োমেট্রিক দিয়ে স্মার্ট কার্ড এবং ডিজিটাল নম্বর প্লেট গ্রহণ করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসি পর্যন্ত)",
                amount_bdt=13913.0,
                vat_included=True,
                payment_method="BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক",
                remarks="রেজিস্ট্রেশন ফি + রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট + আরএফআইডি ট্যাগ + ডিজিটাল রেজিস্ট্রেশন সার্টিফিকেট ও ট্যাক্স টোকেন (২ বছর) অন্তর্ভুক্ত।"
            ),
            ServiceFee(
                category_name="মোটরসাইকেল রেজিস্ট্রেশন ফি (১০০ সিসির ঊর্ধ্বে)",
                amount_bdt=21232.0,
                vat_included=True,
                payment_method="BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক",
                remarks="রেজিস্ট্রেশন ফি + নম্বর প্লেট + আরএফআইডি + ১০ বছরের ট্যাক্স টোকেন অন্তর্ভুক্ত।"
            ),
            ServiceFee(
                category_name="ডিজিটাল নম্বর প্লেট ও আরএফআইডি ফি (আলাদা প্রতিস্থাপন)",
                amount_bdt=2260.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট"
            )
        ],
        processing_time_sla="রেজিস্ট্রেশন নম্বর বরাদ্দ: ফি জমার পর ২-৩ দিন | স্মার্ট কার্ড ও প্লেট সংযোজন: ১৫-৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="যানবাহন বিক্রয়কারী প্রতিষ্ঠানের বিক্রয় চালান (Sales Invoice / Gate Pass)",
                is_mandatory=True,
                format_type="মূল কপি ও স্ক্যান"
            ),
            RequiredDocument(
                name="ক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="ই-টিআইএন (e-TIN) সার্টিফিকেট ও রিটার্ন জমার রশিদ",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="আমদানি সংক্রান্ত বিল অব এন্ট্রি ও কাস্টমস ডিউটি সনদ (আমদানিকৃত গাড়ির ক্ষেত্রে)",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিআরটিএ সার্ভিস পোর্টালে রেজিস্ট্রেশন আবেদন",
                description="https://bsp.brta.gov.bd পোর্টালে লগইন করে 'মোটরযান রেজিস্ট্রেশন' মেনুতে যান। চেসিস নম্বর ও ইঞ্জিন নম্বর দিন।",
                action_url="https://bsp.brta.gov.bd",
                tips="শোরুমের সেলস ইনভয়েসের চেসিস নম্বরের সাথে সতর্কভাবে মিলিয়ে নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="অনলাইনে নির্ধারিত সরকারি ফি পরিশোধ",
                description="সিস্টেমে প্রদর্শিত সরকারি ফি বিকাশ বা ব্যাংকের মাধ্যমে সরাসরি জমা দিন। কোনো দালাল বা শোরুমের কর্মচারীকে অতিরিক্ত টাকা দেওয়ার প্রয়োজন নেই।",
                tips="পেমেন্ট সফল হলে স্বয়ংক্রিয়ভাবে মানি রসিদ ও রেজিস্ট্রেশন ট্র্যাকিং কোড তৈরি হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="যানবাহন পরিদর্শন ও বায়োমেট্রিক প্রদান",
                description="নির্দিষ্ট দিনে গাড়ি/বাইক নিয়ে বিআরটিএ সার্কেল অফিসে যান। মোটরযান পরিদর্শক ফিজিক্যাল চেসিস ও ইঞ্জিন মিলিয়ে রিপোর্ট দেবেন। এরপর বায়োমেট্রিক ছবি ও আঙুলের ছাপ দিন।",
                tips="পরিদর্শনের জন্য কোনো ফি নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="ডিজিটাল নম্বর প্লেট ও আরএফআইডি ট্যাগ সংযোজন",
                description="এসএমএস পাওয়ার পর বিআরটিএ বুথ থেকে আপনার গাড়িতে সরকারি সিলসহ রেট্রো-রিফ্লেক্টিভ নম্বর প্লেট এবং উইন্ডশিল্ডে আরএফআইডি ট্যাগ লাগিয়ে নিন।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: বিআরটিএ চত্বরে দালালদের ফাঁদে পড়বেন না। শোরুমের বিক্রেতারা প্রায়ই রেজিস্ট্রেশন ফির নামে ৮,০০০ থেকে ১৫,০০০ টাকা অতিরিক্ত আত্মসাৎ করে। আপনি নিজে বিএসপি পোর্টালে ফি দিয়ে সরাসরি রেজিস্ট্রেশন করতে পারেন।"
    ))

    # 16. সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা)
    services.append(CitizenService(
        service_id="bd-social-safety-allowances-dss",
        title_bn="সামাজিক নিরাপত্তা ভাতা (বয়স্ক, বিধবা ও প্রতিবন্ধী ভাতা) আবেদন",
        title_en="Bangladesh Social Safety Net Allowances (Old Age, Widow, Disability Allowance) Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়",
        summary="হতদরিদ্র, বয়োবৃদ্ধ, বিধবা এবং প্রতিবন্ধী ব্যক্তিদের সহায়তার জন্য সরকার সরাসরি মোবাইল ব্যাংকিংয়ের (বিকাশ/নগদ) মাধ্যমে প্রতি মাসে ভাতা প্রদান করে। এই ভাতা পেতে স্থানীয় মেম্বার, চেয়ারম্যান বা দালালকে কোনো টাকা দিতে হয় না। আবেদন সম্পূর্ণ বিনামূল্যে করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="ভাতা আবেদন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="আবেদন করার জন্য কোনো ফি বা ঘুষ দেওয়ার কোনো বিধান নেই।"
            )
        ],
        processing_time_sla="ইউনিয়ন/উপজেলা কমিটি কর্তৃক চূড়ান্ত যাচাই সাপেক্ষে নিয়মিত বরাদ্দ",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি",
                is_mandatory=True,
                format_type="ফটোকপি / অনলাইন"
            ),
            RequiredDocument(
                name="সুবিধাভোগীর নামে নিবন্ধিত সচল নগদ/বিকাশ একাউন্টের সিম",
                is_mandatory=True,
                format_type="মোবাইল নম্বর"
            ),
            RequiredDocument(
                name="সুবর্ণ নাগরিক প্রতিবন্ধী পরিচয়পত্র (শুধুমাত্র প্রতিবন্ধী ভাতার ক্ষেত্রে)",
                is_mandatory=False,
                format_type="সমাজসেবা অধিদপ্তর কর্তৃক প্রদত্ত আইডি",
                how_to_obtain="উপজেলা সমাজসেবা অফিস থেকে বিনামূল্যে সংগ্রহ করা যায়"
            ),
            RequiredDocument(
                name="স্বামীর মৃত্যু সনদ (বিধবা ভাতার ক্ষেত্রে)",
                is_mandatory=False,
                format_type="ডিজিটাল মৃত্যু সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সমাজসেবা পোর্টালে অনলাইন আবেদন",
                description="https://mis.bhata.gov.bd পোর্টালে যান অথবা ইউনিয়ন ডিজিটাল সেন্টারের (UDC) সহায়তায় বিনামূল্যে আবেদন করুন।",
                action_url="https://mis.bhata.gov.bd",
                tips="মোবাইল নম্বরটি অবশ্যই আবেদনকারীর নিজের নামে বায়োমেট্রিক সিম হতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="কমিটি কর্তৃক যাচাই ও তালিকাভুক্তকরণ",
                description="ইউনিয়ন বা ওয়ার্ড কমিটি আপনার দারিদ্র্যসীমা ও বয়স যাচাই করবে (পুরুষের ক্ষেত্রে সর্বনিম্ন ৬৫ বছর এবং মহিলার ক্ষেত্রে সর্বনিম্ন ৬২ বছর)।",
                tips="কোনো জনপ্রতিনিধি ভাতা তালিকায় নাম দেওয়ার জন্য টাকা চাইলে সরাসরি ইউএসও বা ডিসিকে জানান।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি মোবাইলে টাকা গ্রহণ",
                description="তালিকাভুক্ত হলে সরকারি ফান্ড থেকে সরাসরি আপনার নগদ বা বিকাশ অ্যাকাউন্টে কোনো মধ্যস্বত্বভোগী ছাড়া মাসিক ভাতার টাকা চলে আসবে। কোনো ক্যাশ ডেলিভারি বা হাতবদলের সুযোগ নেই।"
            )
        ],
        official_portal_url="https://dss.gov.bd",
        application_url="https://mis.bhata.gov.bd",
        citizen_charter_url="https://dss.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: বয়স্ক ভাতা বা বিধবা ভাতার কার্ড করে দেওয়ার নামে গ্রামের মেম্বার বা দালালরা ৩,০০০ থেকে ১০,০০০ টাকা ঘুষ দাবি করে। এটি একটি শাস্তিযোগ্য অপরাধ। ভাতা সম্পূর্ণ ডিজিটাল পদ্ধতিতে কোনো কার্ড বা বই ছাড়াই সরাসরি মোবাইলে চলে যায়। কাউকে কোনো টাকা দেবেন না।",
        grievance_remedy="ভাতা প্রদানে ঘুষ দাবি করা হলে উপজেলা নির্বাহী কর্মকর্তা (UNO) অথবা সমাজসেবা অধিদপ্তরের হটলাইন ১০৯৮-এ অভিযোগ করুন।"
    ))

    # 17. সর্বজনীন পেনশন স্কিম (Universal Pension Scheme - UPension)
    services.append(CitizenService(
        service_id="bd-universal-pension-upension-guide",
        title_bn="সর্বজনীন পেনশন স্কিম নিবন্ধন ও চাঁদা পরিশোধ নির্দেশিকা",
        title_en="Bangladesh Universal Pension Scheme (UPension) Registration & Installment Guide",
        category="অর্থ ও পেনশন সেবা",
        department_agency="জাতীয় পেনশন কর্তৃপক্ষ, অর্থ বিভাগ, অর্থ মন্ত্রণালয়",
        summary="১৮ থেকে ৫০ বছর বয়সী সকল বাংলাদেশি নাগরিক এবং প্রবাসীদের জন্য সরকার সর্বজনীন পেনশন স্কিম চালু করেছে। কোনো ব্যাংক বা দালালের কাছে না গিয়ে upension.gov.bd পোর্টাল থেকে সরাসরি রেজিস্ট্রেশন ও মোবাইল ব্যাংকিং দিয়ে মাসিক চাঁদা পরিশোধ করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="নিবন্ধন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="রেজিস্ট্রেশনের কোনো ফি নেই।"
            ),
            ServiceFee(
                category_name="প্রবাস স্কিম মাসিক চাঁদা (প্রবাসী বাংলাদেশিদের জন্য)",
                amount_bdt=2000.0,
                vat_included=True,
                payment_method="বৈদেশিক ক্রেডিট কার্ড / অনলাইন গেটওয়ে",
                remarks="মাসিক ২০০০, ৫০০০, ৭৫০০ বা ১০,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="প্রগতি স্কিম (বেসরকারি চাকরিজীবী)",
                amount_bdt=2000.0,
                vat_included=True,
                payment_method="বিকাশ, নগদ, কার্ড",
                remarks="মাসিক ২০০০, ৩০০০, ৫০০০ বা ১০,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="সুরক্ষা স্কিম (অনানুষ্ঠানিক খাতের কর্মী/কৃষক/চালক)",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="মোবাইল ব্যাংকিং",
                remarks="মাসিক ১০০০, ২০০০, ৩০০০ বা ৫০০০ টাকা।"
            ),
            ServiceFee(
                category_name="সমতা স্কিম (স্বল্প আয়ের মানুষ - ৫০% সরকার প্রদান করে)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="নাগরিক ৫০০ টাকা দিলে সরকার বাকি ৫০০ টাকা জমা দেয়।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক অনলাইনে পেনশন আইডি ও কিউআর সনদ প্রদান",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) নম্বর",
                is_mandatory=True,
                format_type="অনলাইন ভেরিফিকেশন"
            ),
            RequiredDocument(
                name="নমিনীর জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর নিজস্ব ব্যাংক একাউন্ট নম্বর ও রাউটিং কোড",
                is_mandatory=True,
                format_type="তথ্য ইনপুট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পেনশন পোর্টালে স্কিম নির্বাচন",
                description="https://upension.gov.bd ওয়েবসাইটে যান। 'পেনশন আবেদন' বাটনে ক্লিক করুন। আপনার পেশা অনুযায়ী উপযুক্ত স্কিম (প্রবাস, প্রগতি, সুরক্ষা বা সমতা) নির্বাচন করুন।",
                action_url="https://upension.gov.bd",
                tips="স্বল্প আয়ের পরিবার হলে সমতা স্কিম নির্বাচন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="এনআইডি ও ব্যাংক তথ্য পূরণ",
                description="এনআইডি এবং জন্মতারিখ দিন। নির্বাচন কমিশনের ডাটাবেজ থেকে স্বয়ংক্রিয়ভাবে ছবি ও তথ্য চলে আসবে। এরপর আপনার ব্যাংক একাউন্টের তথ্য এবং নমিনীর তথ্য পূরণ করুন।",
                tips="নমিনীর তথ্য নির্ভুলভাবে দিন।"
            ),
            ApplicationStep(
                step_number=3,
                title="প্রথম কিস্তির চাঁদা পেমেন্ট ও ইউনিক আইডি লাভ",
                description="বিকাশ, নগদ বা ব্যাংক কার্ড দিয়ে প্রথম কিস্তির চাঁদা দিন। পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই আপনাকে একটি ইউনিক পেনশন আইডি (UID) দেওয়া হবে।",
                tips="প্রতি মাসে মোবাইল থেকে নিয়মিত ঘরে বসেই চাঁদা জমা দিতে পারবেন।"
            )
        ],
        official_portal_url="https://upension.gov.bd",
        application_url="https://upension.gov.bd",
        citizen_charter_url="https://mof.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: সর্বজনীন পেনশনে অন্তর্ভুক্ত হতে কোনো দালাল বা এজেন্টের শরণাপন্ন হবেন না। আপনার চাঁদা সরাসরি বাংলাদেশ ব্যাংকের ট্রেজারি অ্যাকাউন্টে সুরক্ষিত থাকে। সোনালী ব্যাংক বা যেকোনো স্মার্টফোন থেকে নিজেই এটি পরিচালনা করতে পারেন।"
    ))

    # 18. শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট সংশোধন
    services.append(CitizenService(
        service_id="bd-education-board-certificate-correction",
        title_bn="শিক্ষাবোর্ডের সার্টিফিকেট ও মার্কশিট নাম/বয়স সংশোধন নির্দেশিকা",
        title_en="Bangladesh Education Board SSC/HSC Certificate & Marksheet Correction Official Fee Guide",
        category="শিক্ষা ও শিক্ষাবোর্ড সেবা",
        department_agency="মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড (ঢাকা/কুমিল্লা/চট্টগ্রাম/রাজশাহী ইত্যাদি)",
        summary="এসএসসি বা এইচএসসি সার্টিফিকেটে নিজের নাম, পিতার নাম, মাতার নাম বা জন্মতারিখ ভুল থাকলে বোর্ড অফিসের চত্বরে দালালরা ৫,০০০ থেকে ২০,০০০ টাকা দাবি করে। অথচ শিক্ষাবোর্ডের অনলাইন পোর্টালে সরাসরি সরকার নির্ধারিত ফি দিয়ে নামজারি কমিটির সভায় নির্ভুলভাবে সংশোধন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="প্রতি সার্টিফিকেটে নাম ও তথ্য সংশোধন ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="সোনালী সেবা / বিকাশ",
                remarks="বোর্ড নির্ধারিত ফি প্রতি সনদে ৫০০ টাকা।"
            ),
            ServiceFee(
                category_name="প্রতি সনদের নতুন মূল কপি উত্তোলন ফি (সংশোধনের পর)",
                amount_bdt=558.0,
                vat_included=True,
                payment_method="সোনালী ব্যাংক ই-সেবা",
                remarks="সংশোধিত মূল সনদ প্রিন্ট ফি।"
            ),
            ServiceFee(
                category_name="মার্কশিট / একাডেমিক ট্রান্সক্রিপ্ট সংশোধন ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="প্রতি মার্কশিট ফি ৫০০ টাকা।"
            )
        ],
        processing_time_sla="নাম ও বয়স সংশোধন কমিটির সভা অনুযায়ী ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর অনলাইন জন্ম নিবন্ধন সনদ ও জাতীয় পরিচয়পত্র",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="পিতা ও মাতার জাতীয় পরিচয়পত্র (পিতা-মাতার নাম সংশোধনের ক্ষেত্রে)",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="অধ্যক্ষ / প্রধান শিক্ষক কর্তৃক ফরওয়ার্ডিং প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত স্ক্যান কপি",
                how_to_obtain="যে স্কুল/কলেজ থেকে পরীক্ষা পাস করেছেন"
            ),
            RequiredDocument(
                name="জাতীয় দৈনিকে বিজ্ঞপ্তি (বিজ্ঞপ্তির মূল কাটিং)",
                is_mandatory=True,
                format_type="পত্রিকার মূল কপি স্ক্যান",
                how_to_obtain="যেকোনো বহুল প্রচারিত পত্রিকায় নাম সংশোধনের হারানো/ভুল বিজ্ঞপ্তি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সংশ্লিষ্ট শিক্ষাবোর্ডের ই-সেবা পোর্টালে আবেদন",
                description="নিজ শিক্ষাবোর্ডের পোর্টালে (যেমন ঢাকা বোর্ড: dhakaeducationboard.gov.bd) যান। 'নাম ও বয়স সংশোধন' মেনুতে রোল নম্বর, রেজিস্ট্রেশন নম্বর ও পাসের সন দিয়ে ফর্ম পূরণ করুন।",
                action_url="https://dhakaeducationboard.gov.bd",
                tips="জেএসসি, এসএসসি এবং এইচএসসি ধারাবাহিকভাবে সংশোধন করতে হয়।"
            ),
            ApplicationStep(
                step_number=2,
                title="প্রমাণপত্র আপলোড ও ফি পরিশোধ",
                description="পত্রিকার বিজ্ঞপ্তির কাটিং, প্রধান শিক্ষকের প্রত্যয়ন এবং জন্ম সনদ আপলোড করে 'সোনালী সেবা' বা অনলাইন গেটওয়েতে ফি দিন।",
                tips="বোর্ড কাউন্টারে কাউকে বাড়তি টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="নাম সংশোধন কমিটির ভার্চুয়াল বা সরাসরি মিটিং",
                description="বোর্ড কর্তৃক নির্ধারিত তারিখে অভিভাবক বা মূল কাগজপত্রসহ উপস্থিত হন। তথ্য সঠিক থাকলে কমিটি অনুমোদন দেবে।",
                tips="অনুমোদনের পর পুরোনো মূল সনদ বোর্ডে জমা দিয়ে নতুন নির্ভুল সনদ সংগ্রহ করতে পারবেন।"
            )
        ],
        official_portal_url="https://dhakaeducationboard.gov.bd",
        application_url="https://dhakaeducationboard.gov.bd",
        citizen_charter_url="https://dhakaeducationboard.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: বোর্ড প্রাঙ্গণে কোনো বহিরাগত ব্যক্তির সাথে সনদের নাম সংশোধনের জন্য চুক্তি করবেন না। তাদের দেওয়া ভূয়া সিল বা জাল সার্টিফিকেট দিয়ে পাসপোর্টে জালিয়াতি ধরা পড়লে ফৌজদারি আইনে জেল হতে পারে। বোর্ডের পুরো পদ্ধতিটি এখন অনলাইন ট্র্যাকিংযুক্ত।"
    ))

    # 19. জাতীয় আইনগত সহায়তা (Government Legal Aid - বিনা খরচে সরকারি উকিল)
    services.append(CitizenService(
        service_id="bd-national-legal-aid-services",
        title_bn="জাতীয় আইনগত সহায়তা (লিগ্যাল এইড) - বিনা খরচে সরকারি আইনজীবী প্রাপ্তি",
        title_en="Bangladesh National Legal Aid Services (Free Legal Advice & Government Lawyer)",
        category="আইন ও বিচারিক সেবা",
        department_agency="জাতীয় আইনগত সহায়তা প্রদান সংস্থা, আইন ও বিচার বিভাগ",
        summary="আদালতে মামলা লড়তে গিয়ে আইনজীবী ও আদালতের খরচে সর্বস্বান্ত হওয়া সাধারণ দরিদ্র মানুষের জন্য সরকার সম্পূর্ণ বিনামূল্যে সরকারি খরচে বিজ্ঞ আইনজীবী নিয়োগ ও মামলা পরিচালনার সুবিধা দেয়। জাতীয় টোল-ফ্রি হেল্পলাইন ১৬৪৩০-এ ফোন করে যে কেউ এই সুবিধা পেতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="আইনগত সহায়তা ও আইনজীবী ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="আইনজীবীর ফি, কোর্ট ফি ও মামলার সমস্ত খরচ সরকার বহন করে।"
            )
        ],
        processing_time_sla="আবেদনের পর তাৎক্ষণিক আইনি পরামর্শ এবং ৩-৭ দিনের মধ্যে আইনজীবী নিয়োগ",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র বা জন্ম সনদ কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মামলা বা বিরোধ সংক্রান্ত কাগজপত্রের ফটোকপি (যদি থাকে)",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="দরিদ্রতার প্রমাণপত্র / বার্ষিক আয় বিবরণী (সাধারণত বাৎসরিক আয় অনূর্ধ্ব দেড় লাখ টাকা)",
                is_mandatory=False,
                format_type="কাউন্সিলর / চেয়ারম্যান সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="টোল-ফ্রি হেল্পলাইন ১৬৪৩০ নম্বরে কল বা অফিসে যোগাযোগ",
                description="যেকোনো মোবাইল বা ল্যান্ডফোন থেকে বিনা খরচে ১৬৪৩০ নম্বরে কল করুন অথবা আপনার জেলা জজ আদালত ভবনে অবস্থিত 'জেলা লিগ্যাল এইড অফিসে' সরাসরি যান।",
                action_url="http://www.nlaso.gov.bd",
                tips="১৬৪৩০ নম্বরটি দিন-রাত ২৪ ঘণ্টা সরকারিভাবে ফ্রি।"
            ),
            ApplicationStep(
                step_number=2,
                title="বিনা খরচে আইনি পরামর্শ ও দরখাস্ত প্রদান",
                description="লিগ্যাল এইড অফিসার আপনার অভিযোগ শুনে বিনামূল্যে আইনি পরামর্শ দেবেন এবং দরখাস্ত গ্রহণ করবেন।",
                tips="পারিবারিক বা জমিজমা সংক্রান্ত বিরোধ হলে প্রথমে বিনা কোর্ট ফিতে আপস-মীমাংসা (ADR) করা হয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি আইনজীবী নিয়োগ ও মামলা পরিচালনা",
                description="আপসে না মিললে সরকার আপনার পক্ষে লড়ার জন্য প্যানেল আইনজীবী নিযুক্ত করবে। আপনাকে উকিলের কোনো ফি বা কোর্ট ফি দিতে হবে না।"
            )
        ],
        official_portal_url="http://www.nlaso.gov.bd",
        application_url="http://www.nlaso.gov.bd",
        citizen_charter_url="http://nlaso.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: কোর্ট চত্বরে কোনো দালালের খপ্পরে পড়ে সর্বস্ব হারাবেন না। আপনি অসচ্ছল, প্রতিবন্ধী, দরিদ্র বা নির্যাতিত নারী হলে সরকার আপনার মামলার সমস্ত ব্যয়ভার বহন করবে।"
    ))

    # 20. আরজেএসসি (RJSC) কোম্পানি নিবন্ধন ও নাম ছাড়পত্র
    services.append(CitizenService(
        service_id="bd-rjsc-company-registration-name-clearance",
        title_bn="আরজেএসসি (RJSC) কোম্পানি নাম ছাড়পত্র ও রেজিস্ট্রেশন নির্দেশিকা",
        title_en="Bangladesh RJSC Private Limited Company Registration & Name Clearance Guide",
        category="ব্যবসা ও বাণিজ্য সেবা",
        department_agency="যৌথ মূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC), বাণিজ্য মন্ত্রণালয়",
        summary="প্রাইভেট লিমিটেড বা ওয়ান পারসন কোম্পানি (OPC) খোলার জন্য কোনো অসাধু সিএ ফার্ম বা দালালকে ৫০,০০০ থেকে ১ লাখ টাকা দেওয়ার প্রয়োজন নেই। roc.gov.bd পোর্টালে সরাসরি নাম ছাড়পত্র নিয়ে নির্ধারিত সরকারি ফি ব্যাংকে দিয়ে সম্পূর্ণ অনলাইনে কোম্পানি ইনকর্পোরেশন সার্টিফিকেট পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="নাম ছাড়পত্র ফি (Name Clearance Fee)",
                amount_bdt=230.0,
                vat_included=True,
                payment_method="অনলাইন বিকাশ / সোনালী ব্যাংক একপে",
                remarks="মূল ফি ২০০ টাকা + ১৫% ভ্যাট ৩০ টাকা = ২৩০ টাকা।"
            ),
            ServiceFee(
                category_name="কোম্পানি রেজিস্ট্রেশন ফি (অনূর্ধ্ব ২০ লাখ টাকা মূলধন)",
                amount_bdt=4370.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট / ব্যাংক চালান",
                remarks="অনুমোদিত মূলধনের ভিত্তিতে সরকারি স্লাব অনুযায়ী নির্ধারিত।"
            ),
            ServiceFee(
                category_name="ডিজিটাল স্ট্যাম্প শুল্ক (MoA & AoA)",
                amount_bdt=3000.0,
                vat_included=True,
                payment_method="ই-চালান / স্ট্যাম্প",
                remarks="মেমোরেন্ডাম ও আর্টিকেলের সরকারি স্ট্যাম্প।"
            )
        ],
        processing_time_sla="নাম ছাড়পত্র: ১ কার্যদিবস | কোম্পানি রেজিস্ট্রেশন: ৩ থেকে ৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সকল শেয়ারহোল্ডার ও পরিচালকদের এনআইডি ও টিআইএন সার্টিফিকেট",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="কোম্পানির সংঘস্মারক (MoA) ও সংঘবিধি (AoA)",
                is_mandatory=True,
                format_type="পিডিএফ ফাইল",
                how_to_obtain="স্ট্যান্ডার্ড ড্রাফট RJSC সাইটে বিনামূল্যে পাওয়া যায়"
            ),
            RequiredDocument(
                name="কোম্পানির নিবন্ধিত কার্যালয়ের ঠিকানার প্রমাণপত্র",
                is_mandatory=True,
                format_type="ভাড়া চুক্তি / ইউটিলিটি বিল"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="আরজেএসসি পোর্টালে নাম ছাড়পত্র (Name Clearance) আবেদন",
                description="https://roc.gov.bd ওয়েবসাইটে গিয়ে ইউজারের একাউন্ট খুলুন। আপনার প্রস্তাবিত কোম্পানির নাম দিয়ে সার্চ করে ২৩০ টাকা ফি পরিশোধ করুন। ২৪ ঘণ্টার মধ্যে ডিজিটাল নাম ছাড়পত্র চলে আসবে।",
                action_url="https://roc.gov.bd",
                tips="নামটি যেন বিদ্যমান কোনো কোম্পানির সাথে মিলে না যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="MoA ও AoA তৈরি ও ফরম পূরণ",
                description="অনলাইনে ফর্ম-১, ফর্ম-৬, ফর্ম-৯, ফর্ম-১০ এবং ফর্ম-১২ পূরণ করুন। মেমোরেন্ডাম ও আর্টিকেল আপলোড করুন।",
                tips="RJSC-র স্ট্যান্ডার্ড টেমপ্লেট ব্যবহার করলে অতিরিক্ত আইনজীবী ফি লাগে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি ফি পেমেন্ট ও সার্টিফিকেট লাভ",
                description="মূলধনের উপর সরকারি ফি সোনালী ব্যাংক বা অনলাইনে জমা দিন। আরজেএসসি কর্মকর্তা তথ্য যাচাই করে ডিজিটাল স্বাক্ষরিত কোম্পানি নিগমবদ্ধকরণ সনদ (Certificate of Incorporation) সিস্টেমে জারি করবেন, যা সাথে সাথে ডাউনলোড করা যায়।"
            )
        ],
        official_portal_url="https://roc.gov.bd",
        application_url="https://roc.gov.bd",
        citizen_charter_url="https://roc.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: আরজেএসসি ভবনে ঘুরঘুর করা মধ্যস্থতাকারীরা কোম্পানি রেজিস্ট্রেশনের জন্য বিপুল অঙ্কের চাঁদা দাবি করে। পুরো প্রক্রিয়াটি সম্পূর্ণ অনলাইন এবং ডিজিটালি পরিচালিত হয়। ঘরে বসেই এটি সম্পন্ন করা যায়।"
    ))

    # 21. অনলাইন ভ্যাট রেজিস্ট্রেশন (BIN - Business Identification Number)
    services.append(CitizenService(
        service_id="bd-nbr-vat-online-bin-registration",
        title_bn="অনলাইন ভ্যাট (BIN) নিবন্ধন ও রিটার্ন দাখিল নির্দেশিকা",
        title_en="Bangladesh NBR Online VAT (BIN) Registration & Filing Free Guide",
        category="অর্থ ও রাজস্ব সেবা",
        department_agency="জাতীয় রাজস্ব বোর্ড (এনবিআর), অর্থ মন্ত্রণালয়",
        summary="ব্যবসায়িক লেনদেন ও ব্যাংক একাউন্ট পরিচালনার জন্য ১৩ ডিজিটের বিজনেস আইডেন্টিফিকেশন নম্বর (BIN) বা ভ্যাট রেজিস্ট্রেশন প্রয়োজন। vat.gov.bd পোর্টালে সম্পূর্ণ বিনামূল্যে (০ টাকা) ঘরে বসে আবেদনের কয়েক ঘণ্টার মধ্যে ডিজিটাল ভ্যাট সার্টিফিকেট পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ভ্যাট (BIN) নিবন্ধন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="ভ্যাট নিবন্ধনের কোনো ফি নেই।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন সাবমিটের পর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডিজিটাল বিন জারি",
        required_documents=[
            RequiredDocument(
                name="মালিক বা ব্যবস্থাপনা পরিচালকের এনআইডি ও ছবি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="মালিকের ই-টিআইএন (e-TIN) সনদ",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="ব্যবসা প্রতিষ্ঠানের ব্যাংক স্টেটমেন্ট বা সার্টিফিকেট",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="আইভাস পোর্টালে রেজিস্ট্রেশন",
                description="https://vat.gov.bd পোর্টালে গিয়ে 'Sign Up' বাটনে ক্লিক করে মোবাইল ও ইমেইল ওটিপি দিয়ে একাউন্ট তৈরি করুন।",
                action_url="https://vat.gov.bd",
                tips="মোবাইল নম্বরটি সবসময় সচল থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ভ্যাট ফর্ম পূরণ ও ডকুমেন্টস আপলোড",
                description="ব্যবসায়ের নাম, ক্যাটাগরি, বার্ষিক সম্ভাব্য টার্নওভার, ট্রেড লাইসেন্স নম্বর ও ব্যাংক একাউন্টের তথ্য দিন।",
                tips="টার্নওভার ৫০ লাখ টাকার নিচে হলে ভ্যাট অব্যাহতি পাওয়া যায়।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিজিটাল ভ্যাট সার্টিফিকেট (মুসক-২.৩) ডাউনলোড",
                description="তথ্য সঠিক থাকলে সিস্টেম স্বয়ংক্রিয়ভাবে ১৩ ডিজিটের কিউআর কোডযুক্ত ডিজিটাল ভ্যাট সার্টিফিকেট জারি করবে যা সরাসরি ডাউনলোড করে প্রিন্ট করা যায়।"
            )
        ],
        official_portal_url="https://vat.gov.bd",
        application_url="https://vat.gov.bd",
        citizen_charter_url="https://nbr.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: ভ্যাট অফিসে না গিয়েই ঘরে বসে সম্পূর্ণ বিনামূল্যে ভ্যাট সার্টিফিকেট পাওয়া যায়। কোনো ভ্যাট কর্মকর্তা বা দালালকে ১ টাকাও দেওয়া আইনত দণ্ডনীয় অপরাধ।"
    ))

    # 22. বিআরটিএ মোটরযানের মালিকানা পরিবর্তন (Transfer of Ownership)
    services.append(CitizenService(
        service_id="bd-brta-vehicle-ownership-transfer",
        title_bn="বিআরটিএ মোটরযান (বাইক/কার) মালিকানা পরিবর্তন নির্দেশিকা",
        title_en="Bangladesh BRTA Vehicle Ownership Transfer Official Procedure & Fee Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ",
        summary="পুরাতন গাড়ি বা বাইক ক্রয়-বিক্রয়ের পর মালিকানা পরিবর্তন না করলে আইনি ঝামেলা তৈরি হয়। সাব-রেজিস্ট্রার অফিসের হলফনামা ও বিআরটিএ-তে দালালরা এর জন্য ১০,০০০ থেকে ২৫,০০০ টাকা হাতিয়ে নেয়। বিএসপি সিস্টেমে ক্রেতা-বিক্রেতা উভয়ের উপস্থিতিতে নির্ধারিত ফি দিয়ে স্বচ্ছভাবে মালিকানা বদল করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="মোটরসাইকেল মালিকানা পরিবর্তন সরকারি ফি",
                amount_bdt=2473.0,
                vat_included=True,
                payment_method="BSP অনলাইন পেমেন্ট / অনুমোদিত ব্যাংক",
                remarks="মালিকানা পরিবর্তন ফি + নতুন ডিজিটাল স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট ফি অন্তর্ভুক্ত।"
            ),
            ServiceFee(
                category_name="হালকা মোটরযান (প্রাইভেট কার/মাইক্রোবাস) মালিকানা পরিবর্তন ফি",
                amount_bdt=7648.0,
                vat_included=True,
                payment_method="অনলাইন বা অনুমোদিত ব্যাংক",
                remarks="মালিকানা বদল ও স্মার্ট কার্ড প্রসেসিং ফি।"
            ),
            ServiceFee(
                category_name="২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে হলফনামা",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="স্ট্যাম্প",
                remarks="বিক্রেতার নোটারি পাবলিক কর্তৃক প্রত্যায়িত হলফনামা।"
            )
        ],
        processing_time_sla="বায়োমেট্রিক ও গাড়ি পরিদর্শনের পর ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="মূল রেজিস্ট্রেশন সার্টিফিকেট (স্মার্ট কার্ড) বা মূল ব্লু-বুক",
                is_mandatory=True,
                format_type="মূল কপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্যাক্স টোকেন ও ফিটনেস সনদের মূল কপি",
                is_mandatory=True,
                format_type="মূল কপি"
            ),
            RequiredDocument(
                name="ক্রেতা ও বিক্রেতার জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি",
                is_mandatory=True,
                format_type="ফটোকপি ও আসল কপি"
            ),
            RequiredDocument(
                name="ফর্ম ‘টি.ও’ (Transfer of Ownership) ও ফর্ম ‘টি.আর.ও’ (বিক্রেতার রসিদ)",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল ফর্ম",
                how_to_obtain="বিআরটিএ সাইট থেকে ডাউনলোড"
            ),
            RequiredDocument(
                name="২০০ টাকার নন-জুডিশিয়াল স্ট্যাম্পে বিক্রেতার বিক্রয় হলফনামা (নোটারি সত্যায়িত)",
                is_mandatory=True,
                format_type="মূল হলফনামা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিএসপি পোর্টালে মালিকানা পরিবর্তনের আবেদন ও ফি পেমেন্ট",
                description="https://bsp.brta.gov.bd পোর্টালে যান। 'মালিকানা বদল' অপশনে চেসিস ও রেজিস্ট্রেশন নম্বর দিয়ে অনলাইনে নির্দিষ্ট ফি জমা দিন।",
                action_url="https://bsp.brta.gov.bd",
                tips="ট্যাক্স টোকেন যেন বকেয়া না থাকে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ফর্ম টিও এবং টিআরও স্বাক্ষর ও হলফনামা",
                description="টি.ও (Transfer Order) ফর্মে ক্রেতার স্বাক্ষর এবং টি.আর.ও (Transfer Receipt Order) ফর্মে বিক্রেতার স্বাক্ষর দিন। নোটারি পাবলিকের মাধ্যমে বিক্রেতার হলফনামা সম্পন্ন করুন।",
                tips="ক্রেতা ও বিক্রেতার স্বাক্ষর রেজিস্ট্রেশন রেকর্ডের সাথে মিলতে হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="বিআরটিএ অফিসে ক্রেতা ও বিক্রেতার সরাসরি উপস্থিতি",
                description="ক্রেতা ও বিক্রেতা মূল গাড়ি ও কাগজপত্রসহ বিআরটিএ মোটরযান পরিদর্শকের সামনে উপস্থিত হন। পরিদর্শক গাড়ির চেসিস যাচাই করবেন এবং ক্রেতার বায়োমেট্রিক গ্রহণ করবেন।",
                tips="উপস্থিতি বাধ্যতামূলক হওয়ায় দালালকে কোনো টাকা দিয়ে কাজ হবে না।"
            ),
            ApplicationStep(
                step_number=4,
                title="নতুন মালিকের নামে স্মার্ট কার্ড গ্রহণ",
                description="স্মার্ট কার্ড প্রস্তুত হলে এসএমএস আসবে। এরপর বিআরটিএ অফিস থেকে অথবা ডাকযোগে নতুন মালিকের নামে মুদ্রিত স্মার্ট রেজিস্ট্রেশন সার্টিফিকেট গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দালালদের মাধ্যমে মালিকানা পরিবর্তন করলে বিক্রেতার ভূয়া সই দিয়ে জালিয়াতি করার ঝুঁকি থাকে যা পরবর্তীতে দুর্ঘটনা বা ফৌজদারি অপরাধে মারাত্মক আইনি বিপদ ডেকে আনে। নিজে উপস্থিত হয়ে আসল মালিকের সামনে সরাসরি মালিকানা পরিবর্তন সম্পন্ন করুন।"
    ))

    # 23. বিদেশে গমনে মেডিকেল টেস্ট (GAMCA / Wafid) অনলাইন স্লিপ বুকিং
    services.append(CitizenService(
        service_id="bd-gamca-wafid-medical-appointment-guide",
        title_bn="বিদেশে গমনে গামকা (GAMCA/Wafid) মেডিকেল অনলাইন অ্যাপয়েন্টমেন্ট ও ফি",
        title_en="GAMCA / Wafid Medical Examination Online Appointment & Official Fee Guide (GCC Countries)",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="উপসাগরীয় স্বাস্থ্য কাউন্সিল (Gulf Health Council) ও প্রবাসী কল্যাণ মন্ত্রণালয়",
        summary="সৌদি আরব, ওমান, কাতার, কুয়েত, বাহরাইন ও সংযুক্ত আরব আমিরাত গমনে গামকা অনুমোদিত সেন্টারে মেডিকেল টেস্ট বাধ্যতামূলক। ট্রাভেল এজেন্সি ও দালালরা একটি মেডিকেল স্লিপের জন্য ৩,০০০ থেকে ৮,০০০ টাকা হাতিয়ে নেয়। অথচ অফিসিয়াল wafid.com পোর্টালে সরাসরি ১০ মার্কিন ডলার (প্রায় ১,২০০ টাকা) কার্ডে পরিশোধ করে তাৎক্ষণিক অ্যাপয়েন্টমেন্ট স্লিপ পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="Wafid আন্তর্জাতিক অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ ফি",
                amount_bdt=1250.0,
                vat_included=True,
                payment_method="আন্তর্জাতিক ক্রেডিট / ডেবিট কার্ড (Visa, Mastercard)",
                remarks="১০ মার্কিন ডলার ($10 USD) সমমূল্যের টাকা।"
            ),
            ServiceFee(
                category_name="মেডিকেল সেন্টার ফি (পুরুষ কর্মী - সম্পূর্ণ শারীরিক ও ল্যাব টেস্ট)",
                amount_bdt=8500.0,
                vat_included=True,
                payment_method="মেডিকেল সেন্টার কাউন্টারে সরাসরি নগদ / কার্ড",
                remarks="GAMCA নির্ধারিত প্রমিত মেডিকেল ফি (ব্লাড টেস্ট, এক্স-রে, এইচআইভি, হেপাটাইটিস ইত্যাদি)।"
            ),
            ServiceFee(
                category_name="মেডিকেল সেন্টার ফি (নারী কর্মী)",
                amount_bdt=8500.0,
                vat_included=True,
                payment_method="সরাসরি মেডিকেল সেন্টার",
                remarks="গর্ভধারণ ও অন্যান্য অতিরিক্ত টেস্ট অন্তর্ভুক্ত।"
            )
        ],
        processing_time_sla="অনলাইন স্লিপ: তাৎক্ষণিক | মেডিকেল রিপোর্ট: টেস্টের পর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে অনলাইন রেজাল্ট",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর মূল পাসপোর্ট (সর্বনিম্ন ৬ মাস মেয়াদি)",
                is_mandatory=True,
                format_type="মূল কপি ও ২ সেট ফটোকপি"
            ),
            RequiredDocument(
                name="Wafid অনলাইন অ্যাপয়েন্টমেন্ট স্লিপ প্রিন্ট কপি",
                is_mandatory=True,
                format_type="রঙিন প্রিন্ট কপি",
                how_to_obtain="wafid.com থেকে ডাউনলোড"
            ),
            RequiredDocument(
                name="পাসপোর্ট সাইজ সাদা ব্যাকগ্রাউন্ডের ল্যাব ছবি (৪ কপি)",
                is_mandatory=True,
                format_type="ছবি"
            ),
            RequiredDocument(
                name="জাতীয় পরিচয়পত্র (NID) কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="Wafid অফিশিয়াল পোর্টালে বুকিং শুরু",
                description="https://wafid.com ওয়েবসাইটে যান। 'Book an Appointment' বাটনে ক্লিক করুন। আপনার দেশ (Bangladesh), শহর (Dhaka/Chittagong/Sylhet) এবং গন্তব্য দেশ (যেমন: Saudi Arabia) নির্বাচন করুন।",
                action_url="https://wafid.com/book-appointment",
                tips="সিস্টেম স্বয়ংক্রিয়ভাবে এলোমেলোভাবে (Randomly) একটি অনুমোদিত মেডিকেল সেন্টার বরাদ্দ করে। কোনো নির্দিষ্ট সেন্টার পছন্দ করার সরকারি সুযোগ নেই।"
            ),
            ApplicationStep(
                step_number=2,
                title="পাসপোর্ট তথ্য পূরণ ও ১০ ডলার ফি পরিশোধ",
                description="পাসপোর্ট নম্বর, জাতীয়তা, ভিসা ক্যাটাগরি (Work Visa) নির্ভুলভাবে লিখুন। এরপর ডুয়েল কারেন্সি ডেবিট/ক্রেডিট কার্ড দিয়ে ১০ ডলার পরিশোধ করুন।",
                tips="দালালকে ৩,০০০-৫,০০০ টাকা না দিয়ে ব্যাংকের ডুয়েল কারেন্সি কার্ড দিয়ে ১,২৫০ টাকায় নিজেই স্লিপ কাটুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="মেডিকেল সেন্টারে টেস্ট প্রদান",
                description="স্লিপে উল্লেখিত নির্দিষ্ট মেডিকেল সেন্টারে সকাল ৮টা থেকে ১০টার মধ্যে খালি পেটে উপস্থিত হন। নির্ধারিত ৮,৫০০ টাকা ফি জমা দিয়ে রক্ত পরীক্ষা ও বুকের এক্স-রে সম্পন্ন করুন।",
                tips="টেস্টের আগে কোনো অ্যান্টিবায়োটিক বা ভারী ওষুধ সেবন করবেন না।"
            ),
            ApplicationStep(
                step_number=4,
                title="অনলাইনে মেডিকেল রিপোর্ট 'FIT' স্ট্যাটাস চেক",
                description="wafid.com-এর 'View Medical Status' অপশনে পাসপোর্ট নম্বর দিয়ে রিপোর্ট চেক করুন। ফিট রিপোর্টটি সরাসরি বিএমইটি ও সৌদি/উপসাগরীয় দূতাবাস সিস্টেমে সিঙ্ক হয়ে যায়।"
            )
        ],
        official_portal_url="https://wafid.com",
        application_url="https://wafid.com/book-appointment",
        citizen_charter_url="https://bmet.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: কোনো দালাল 'মেডিকেল সেন্টারের নাম বদলে দেব' বা 'আনফিট হলে ফিট করে দেব' বলে লাখ টাকা দাবি করলে সরাসরি প্রতারণার শিকার হবেন। গামকা সেন্টারের কোনো রেজাল্ট ম্যানুয়ালি পরিবর্তন করা অসম্ভব, এটি সরাসরি বারকোড স্ক্যানের মাধ্যমে সেন্ট্রাল সার্ভারে সংরক্ষিত হয়।",
        grievance_remedy="কোনো মেডিকেল সেন্টার নির্ধারিত ফির চেয়ে বেশি অর্থ দাবি করলে প্রবাসী কল্যাণ মন্ত্রণালয়ের কন্ট্রোল রুম ১৬১৩৫ অথবা গামকা বাংলাদেশ অফিসে লিখিত অভিযোগ জানান।"
    ))

    # 24. পারিবারিক সম্পত্তি আপস বণ্টননামা দলিল (Family Partition Deed)
    services.append(CitizenService(
        service_id="bd-land-family-partition-deed-bonton",
        title_bn="পারিবারিক আপস বণ্টননামা দলিল সম্পাদন ও রেজিস্ট্রেশন নির্দেশিকা",
        title_en="Bangladesh Family Property Amicable Partition Deed (Bontonnamah) Registration Guide",
        category="ভূমি ও জমিজমা সেবা",
        department_agency="নিবন্ধন অধিদপ্তর, আইন ও বিচার বিভাগ",
        summary="পিতা-মাতার মৃত্যুর পর ভাই-বোন ও ওয়ারিশদের মধ্যে জমি বা ফ্ল্যাট আপসে ভাগাভাগি করার জন্য বণ্টননামা দলিল আবশ্যক। অজ্ঞতার কারণে দলিল লেখকরা জমির মূল্যের ওপর লাখ লাখ টাকা চায়। অথচ রেজিস্ট্রেশন আইন অনুযায়ী আপস বণ্টননামা দলিলের স্ট্যাম্প শুল্ক ও রেজিস্ট্রেশন ফি নির্দিষ্ট (Fixed)—সম্পত্তির মূল্য যত কোটি টাকাই হোক না কেন, মোট সরকারি ফি মাত্র ৫০০ থেকে ১,০০০ টাকা!",
        official_fees=[
            ServiceFee(
                category_name="আপস বণ্টননামা রেজিস্ট্রেশন ফি (সম্পত্তির মূল্য ৩ লাখের বেশি হলে)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="সোনালী ব্যাংক ট্রেজারি চালান",
                remarks="সম্পত্তির মূল্য ৩ লাখ টাকার ঊর্ধ্বে হলে নির্ধারিত নির্দিষ্ট ফি মাত্র ৫০০ টাকা।"
            ),
            ServiceFee(
                category_name="আপস বণ্টননামা স্ট্যাম্প শুল্ক (Stamp Duty)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="নন-জুডিশিয়াল স্ট্যাম্প",
                remarks="নির্দিষ্ট স্ট্যাম্প ফি মাত্র ৫০ টাকা।"
            ),
            ServiceFee(
                category_name="হলফনামা স্ট্যাম্প ফি",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="স্ট্যাম্প",
                remarks="ওয়ারিশদের হলফনামা ৩০০ টাকার স্ট্যাম্পে সম্পাদন।"
            )
        ],
        processing_time_sla="দলিল উপস্থাপনের দিনই সম্পাদন ও রসিদ প্রদান",
        required_documents=[
            RequiredDocument(
                name="মূল মালিকের মৃত্যু সনদ (ডিজিটাল ডেথ সার্টিফিকেট)",
                is_mandatory=True,
                format_type="অনলাইন কপি",
                how_to_obtain="bdris.gov.bd পোর্টাল"
            ),
            RequiredDocument(
                name="অনলাইন ওয়ারিশান সনদপত্র (Family Inheritance Certificate)",
                is_mandatory=True,
                format_type="ইউপি চেয়ারম্যান / পৌর মেয়র / কাউন্সিলর স্বাক্ষরিত মূল সনদ"
            ),
            RequiredDocument(
                name="বণ্টনযোগ্য সকল জমির মূল দলিল, পূর্ববর্তী বায়া দলিল ও আরএস/বিএস খতিয়ান",
                is_mandatory=True,
                format_type="স্ক্যান ও মূল কপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা",
                is_mandatory=True,
                format_type="অনলাইন দাখিলা রশিদ"
            ),
            RequiredDocument(
                name="বণ্টনের নকশা / ট্রেস ম্যাপ (কোন ওয়ারিশ কোন অংশে থাকবেন তার স্পষ্ট সীমানা)",
                is_mandatory=True,
                format_type="সার্ভেয়ার স্বাক্ষরিত নকশা"
            ),
            RequiredDocument(
                name="সকল জীবিত ওয়ারিশের এনআইডি ও পাসপোর্ট সাইজ ছবি",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ওয়ারিশান সনদ সংগ্রহ ও সীমানা চিহ্নিতকরণ",
                description="স্থানীয় ইউনিয়ন পরিষদ বা সিটি কর্পোরেশন থেকে অনলাইন কিউআর কোডযুক্ত ওয়ারিশান সনদ নিন। অনুমোদিত আমিন/সার্ভেয়ার দিয়ে জমি মেপে কে কোন অংশ পাবেন তা সহ বণ্টন নকশা চূড়ান্ত করুন।",
                action_url="http://www.dolil.gov.bd",
                tips="সকল ওয়ারিশের সর্বসম্মত সম্মতি থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="আপস বণ্টননামা দলিল খসড়া তৈরি",
                description="দলিল ফর্মে কার অংশে কত শতক জমি পড়েছে এবং তফসিল স্পষ্টভাবে লিখুন। দলিলের উপরে ৫০ টাকার নন-জুডিশিয়াল স্ট্যাম্প ও হলফনামা যুক্ত করুন।",
                tips="সাধারণ সাফ-কবলা দলিলের মতো এখানে কোনো শতাংশভিত্তিক ফি নেই, এটি নির্দিষ্ট ফি।"
            ),
            ApplicationStep(
                step_number=3,
                title="ট্রেজারি চালানে সরকারি ৫০০ টাকা জমা",
                description="সোনালী ব্যাংকে রেজিস্ট্রেশন ফি বাবদ ৫০০ টাকা সরকারি কোডে জমা দিয়ে রসিদ নিন।",
                tips="কোনো দালাল লাখ টাকা দাবি করলে আইন দেখান—বণ্টননামায় শতাংশ হারে ফি আইনত অবৈধ।"
            ),
            ApplicationStep(
                step_number=4,
                title="সাব-রেজিস্ট্রি অফিসে সম্পাদন",
                description="সকল ওয়ারিশ একত্রে সাব-রেজিস্ট্রারের সামনে উপস্থিত হয়ে স্বাক্ষর ও আঙুলের ছাপ দিন। দলিল রেজিস্ট্রি শেষে প্রত্যেকে যার যার অংশে আলাদাভাবে নামজারি (মিউটেশন) করতে পারবেন।"
            )
        ],
        official_portal_url="http://www.dolil.gov.bd",
        application_url="http://www.dolil.gov.bd",
        citizen_charter_url="https://mor.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দলিল লেখক সমিতি বা দালালরা বলে 'সম্পত্তির মূল্যের শতকরা ২% বা ৫% দিতে হবে'—এটি ডাহা মিথ্যা ও প্রতারণা। স্ট্যাম্প আইন এবং রেজিস্ট্রেশন অ্যাক্ট অনুযায়ী পারিবারিক বণ্টননামা দলিলের সরকারি খরচ মাত্র ৫০০ টাকা রেজিস্ট্রেশন ফি + ৫০ টাকা স্ট্যাম্প শুল্ক। কোনো অতিরিক্ত অর্থ দেবেন না।"
    ))

    # 25. সরকারি কর্মচারী ও প্রাথমিক শিক্ষকদের পেনশন মঞ্জুরি ও ই-পেনশন (iBAS++ EFT)
    services.append(CitizenService(
        service_id="bd-govt-pension-ibas-eft-processing",
        title_bn="সরকারি চাকরিজীবী ও প্রাথমিক শিক্ষকদের ডিজিটাল পেনশন মঞ্জুরি ও EFT নির্দেশিকা",
        title_en="Bangladesh Government Employees & Primary Teachers Pension & Monthly EFT Disbursement Guide",
        category="অর্থ ও পেনশন সেবা",
        department_agency="হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA), অর্থ বিভাগ, অর্থ মন্ত্রণালয়",
        summary="অবসরপ্রাপ্ত সরকারি কর্মচারী ও প্রাথমিক বিদ্যালয়ের শিক্ষকদের পেনশন চালু করতে থানা বা জেলা হিসাবরক্ষণ অফিসে (DAO/CAO) বছরের পর বছর ফাইল আটকে ঘুষ নেওয়া হতো। সরকার এখন সম্পূর্ণ ই-পেনশন ও iBAS++ সিস্টেম বাধ্যতামূলক করেছে, যার মাধ্যমে কোনো মধ্যস্বত্বভোগী ছাড়া পেনশনের লাম্পগ্রান্ট এবং মাসিক পেনশন সরাসরি ব্যাংকে EFT এর মাধ্যমে চলে আসে।",
        official_fees=[
            ServiceFee(
                category_name="পেনশন প্রসেসিং সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="পেনশন প্রক্রিয়াকরণে কোনো সরকারি ফি বা চার্জ নেই।"
            )
        ],
        processing_time_sla="পিআরএল শেষ হওয়ার পূর্বে সর্বোচ্চ ৩০ কার্যদিবসের মধ্যে চূড়ান্ত পেনশন অনুমোদন",
        required_documents=[
            RequiredDocument(
                name="পেনশন আবেদন ফরম (ই-পেনশন ফরম ২.১)",
                is_mandatory=True,
                format_type="পূরণকৃত ও স্বাক্ষরিত মূল ফর্ম"
            ),
            RequiredDocument(
                name="হালনাগাদ সার্ভিস বুক (Service Book) মূল কপি",
                is_mandatory=True,
                format_type="অফিস প্রধান কর্তৃক প্রতিস্বাক্ষরিত মূল কপি"
            ),
            RequiredDocument(
                name="পিআরএল (PRL) মঞ্জুরির সরকারি আদেশ (GO)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পেনশনারের জাতীয় পরিচয়পত্র ও ৩ কপি সত্যায়িত ছবি",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="নমিনীর ছবি, এনআইডি এবং উত্তরাধিকার সনদ",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="পেনশনারের ব্যাংক একাউন্ট সংক্রান্ত প্রত্যয়নপত্র (MICS চেক পাতা স্ক্যান)",
                is_mandatory=True,
                format_type="ব্যাংক ম্যানেজারের সিলযুক্ত কপি"
            ),
            RequiredDocument(
                name="বেসরকারি অনাপত্তিপত্র (NDC - No Demand Certificate)",
                is_mandatory=True,
                format_type="দপ্তর প্রধান কর্তৃক প্রদত্ত সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পিআরএল শুরুর ৬ মাস আগে সার্ভিস বুক হালনাগাদ",
                description="অবসরে যাওয়ার ৬ মাস পূর্বে নিজ অফিস থেকে সার্ভিস বুক ও সার্ভিস ভেরিফিকেশন রোল সিজিএ বা হিসাবরক্ষণ অফিস থেকে যাচাই (Pay Fixation Verification) করিয়ে নিন।",
                action_url="https://ibas.finance.gov.bd",
                tips="অনলাইন পে-ফিক্সেশন এনআইডির সাথে হুবহু মিল থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ই-পেনশন আবেদন ও ডকুমেন্টস সাবমিশন",
                description="অফিস প্রধান বরাবর পেনশন আবেদন ফরম ও এনডিসি জমা দিন। অফিস প্রধান পেনশন মঞ্জুরি আদেশ (PPO) তৈরি করে অনলাইনে হিসাবরক্ষণ অফিসে (iBAS++ পোর্টালে) ফরোয়ার্ড করবেন।",
                tips="এখন আর ম্যানুয়াল ফাইল নিয়ে হিসাবরক্ষণ অফিসে দৌড়াদৌড়ি করতে হয় না।"
            ),
            ApplicationStep(
                step_number=3,
                title="হিসাবরক্ষণ কর্মকর্তা কর্তৃক অডিট ও অনুমোদন",
                description="হিসাবরক্ষণ কর্মকর্তা অনলাইনে পিটিও (Pension Payment Order) পাস করবেন এবং এককালীন গ্র্যাচুইটি ও লাম্পগ্রান্ট অনুমোদনের বিল ইস্যু করবেন।",
                tips="কোনো অডিটর ফাইল আটকে ঘুষ দাবি করলে সরাসরি সিজিএ-র হেল্পলাইনে জানান।"
            ),
            ApplicationStep(
                step_number=4,
                title="সরাসরি ব্যাংক অ্যাকাউন্টে ইএফটি (EFT) পেমেন্ট লাভ",
                description="টাকা স্বয়ংক্রিয়ভাবে বাংলাদেশ ব্যাংকের BEFTN নেটওয়ার্ক দিয়ে সরাসরি আপনার ব্যাংকে জমা হবে। মোবাইলে ক্রেডিট মেসেজ আসবে। প্রতি মাসের ১ তারিখে পেনশন সরাসরি ব্যাংকে চলে আসবে, ব্যাংকে গিয়ে লাইনে দাঁড়ানোর প্রয়োজন নেই।"
            )
        ],
        official_portal_url="https://cga.gov.bd",
        application_url="https://ibas.finance.gov.bd",
        citizen_charter_url="https://cga.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: হিসাবরক্ষণ অফিসের কোনো কর্মকর্তা বা কর্মচারী পেনশনের চেক ছাড়ানোর জন্য পারসেন্টেজ বা ঘুষ দাবি করলে তা সম্পূর্ণ ফৌজদারি অপরাধ। iBAS++ সিস্টেমে পেনশনের পুরো প্রক্রিয়াটি ডিজিটালাইজড এবং সেন্ট্রালি ট্র্যাক করা হয়। কাউকে ১ টাকাও দেবেন না।",
        grievance_remedy="পেনশন মঞ্জুরিতে ঘুষ বা হয়রানির শিকার হলে সিজিএ (Controller General of Accounts) অভিযোগ সেল ০২-৯৩৩০৩১২ অথবা অর্থ বিভাগের ই-মেইল অভিযোগ কেন্দ্রে অভিযোগ জানান।"
    ))

    # 26. পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (DoE Environmental Clearance - ECC)
    services.append(CitizenService(
        service_id="bd-doe-environmental-clearance-certificate-ecc",
        title_bn="পরিবেশ অধিদপ্তর পরিবেশগত ছাড়পত্র (ECC) অনলাইন আবেদন ও ফি নির্দেশিকা",
        title_en="Bangladesh Department of Environment Clearance Certificate (ECC) Online Guide",
        category="শিল্প ও পরিবেশ সেবা",
        department_agency="পরিবেশ অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়",
        summary="যেকোনো শিল্প-কারখানা, রাইস মিল, ওয়ার্কশপ, পোল্ট্রি ফার্ম, ক্লিনিক বা আবাসন প্রকল্পের জন্য পরিবেশগত ছাড়পত্র (ECC) বাধ্যতামূলক। পরিবেশ অফিসের নামে দালালরা ১ থেকে ৫ লাখ টাকা ঘুষ দাবি করে। e-ecc.doe.gov.bd পোর্টালে সবুজ, হলুদ, কমলা ও লাল ক্যাটাগরি অনুযায়ী সরকার নির্ধারিত ফি দিয়ে সরাসরি অনলাইনে ছাড়পত্র পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="সবুজ শ্রেণি (Green Category - ক্ষুদ্র কুটির শিল্প/দোকান)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-৪৫৩১-০০০১-২৬৮১)",
                remarks="বিনিয়োগ সীমা ৫০ লাখ পর্যন্ত হলে ফি মাত্র ১৫০০ টাকা (+১৫% ভ্যাট)।"
            ),
            ServiceFee(
                category_name="কমলা শ্রেণি (Orange Category - মাঝারি কারখানা/রাইস মিল)",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বিনিয়োগ অনুপাত অনুযায়ী ৫,০০০ থেকে ১৫,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="লাল শ্রেণি (Red Category - বড় রাসায়নিক/টেক্সটাইল শিল্প)",
                amount_bdt=25000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="ইআইএ (EIA) ও ইটিপি (ETP) প্ল্যান সাপেক্ষে।"
            )
        ],
        processing_time_sla="সবুজ শ্রেণি: ৭ কার্যদিবস | কমলা শ্রেণি: ৩০ কার্যদিবস | লাল শ্রেণি: ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="প্রকল্পের বিস্তারিত বিবরণ ও বিনিয়োগের পরিমাণ সম্বলিত প্রোজেক্ট প্রোফাইল",
                is_mandatory=True,
                format_type="পিডিএফ ফাইল"
            ),
            RequiredDocument(
                name="কারখানা বা প্রকল্পের জমির মালিকানা দলিল / ভাড়ার চুক্তিপত্র ও খতিয়ান",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স ও টিআইএন সার্টিফিকেট",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="স্থানীয় কর্তৃপক্ষের অনাপত্তিপত্র (ইউপি চেয়ারম্যান বা পৌর মেয়রের প্রত্যয়নপত্র)",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="কারখানার লে-আউট প্ল্যান ও বর্জ্য ব্যবস্থাপনা পরিকল্পনা (EMP / ETP)",
                is_mandatory=True,
                format_type="প্রকৌশলী নকশা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পরিবেশ অধিদপ্তরের পোর্টালে নিবন্ধন",
                description="https://e-ecc.doe.gov.bd পোর্টালে প্রবেশ করে উদ্যোক্তা একাউন্ট তৈরি করুন। আপনার প্রকল্পের সঠিক ক্যাটাগরি (সবুজ/কমলা/লাল) নির্বাচন করুন।",
                action_url="https://e-ecc.doe.gov.bd",
                tips="সবুজ ক্যাটাগরির প্রকল্প হলে কোনো দীর্ঘ তদন্ত ছাড়াই তাৎক্ষণিক ছাড়পত্র পাওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="তথ্য পূরণ ও প্রয়োজনীয় ডকুমেন্টস আপলোড",
                description="লে-আউট প্ল্যান, জমির দলিল, বিনিয়োগের পরিমাণ ও ট্রেড লাইসেন্স আপলোড করুন।",
                tips="বর্জ্য নিষ্কাশনের সঠিক ব্যবস্থা প্রদর্শন করুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি ট্রেজারি চালান প্রদান",
                description="সোনালী ব্যাংকে নির্দিষ্ট কোডে সরকারি ফি জমা দিয়ে চালানের নম্বর ও স্ক্যান কপি সিস্টেমে এন্ট্রি করুন।",
                tips="পরিবেশ পরিদর্শককে ব্যক্তিগতভাবে কোনো টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=4,
                title="পরিদর্শন ও কিউআর কোডযুক্ত ডিজিটাল সনদ প্রাপ্তি",
                description="পরিবেশ পরিদর্শক সরেজমিনে স্থান পরিদর্শন করবেন। আবেদন অনুমোদিত হলে সিস্টেম থেকে কিউআর কোডযুক্ত ডিজিটাল পরিবেশগত ছাড়পত্র ডাউনলোড করে প্রিন্ট করুন।"
            )
        ],
        official_portal_url="https://doe.gov.bd",
        application_url="https://e-ecc.doe.gov.bd",
        citizen_charter_url="https://doe.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দালালরা ছাড়পত্র পাইয়ে দেওয়ার নামে পরিবেশ অধিদপ্তরের কর্মকর্তাদের নাম ভাঙিয়ে লাখ লাখ টাকা হাতিয়ে নেয়। অনলাইনে আবেদন করলে প্রতিটি ফাইলের অগ্রগতি ঢাকা হেডকোয়ার্টার্স থেকে সরাসরি ট্র্যাক করা হয়। ঘুষ দেওয়া এবং নেওয়া উভয়ই আইনত দণ্ডনীয় অপরাধ।",
        grievance_remedy="অনলাইনে কোনো আবেদন অনাকাঙ্ক্ষিতভাবে ঝুলিয়ে রাখলে পরিবেশ অধিদপ্তরের মহাপরিচালক (DG) বা দুদক হটলাইন ১০৬-এ অভিযোগ জানান।"
    ))

    # 27. ফায়ার সার্ভিস ও সিভিল ডিফেন্স ফায়ার লাইসেন্স (Fire License)
    services.append(CitizenService(
        service_id="bd-fire-service-safety-license-guide",
        title_bn="ফায়ার সার্ভিস অগ্নিনিরাপত্তা ছাড়পত্র ও ফায়ার লাইসেন্স নির্দেশিকা",
        title_en="Bangladesh Fire Service & Civil Defence Fire Safety Clearance & License Guide",
        category="শিল্প ও নাগরিক নিরাপত্তা",
        department_agency="ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="বাণিজ্যিক ভবন, গুদাম, মার্কেট, রেস্তোরাঁ, এলপিজি গ্যাস সিলিন্ডার বিক্রয় কেন্দ্র ও কারখানার জন্য ফায়ার লাইসেন্স থাকা বাধ্যতামূলক। ফায়ার স্টেশনের আশেপাশে দালাল চক্র ফায়ার লাইসেন্সের জন্য ২০,০০০ থেকে ৫০,০০০ টাকা পর্যন্ত দাবি করে। অথচ ভবনের আয়তন অনুযায়ী সরকারি ট্রেজারি ফি মাত্র ১,৫০০ থেকে ৫,০০০ টাকার মধ্যে।",
        official_fees=[
            ServiceFee(
                category_name="ফায়ার লাইসেন্স সরকারি ফি (১,০০০ বর্গফুট পর্যন্ত বাণিজ্যিক প্রতিষ্ঠান)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="বাংলাদেশ ব্যাংক / সোনালী ব্যাংক ট্রেজারি চালান (কোড: ১-২২৬১-০০০১-২৬৮১)",
                remarks="সরকারি নির্ধারিত প্রমিত ফি।"
            ),
            ServiceFee(
                category_name="ফায়ার লাইসেন্স সরকারি ফি (১,০০১ থেকে ৫,০০০ বর্গফুট)",
                amount_bdt=3000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="ভবনের আয়তন অনুযায়ী নির্দিষ্ট সরকারি ফি।"
            ),
            ServiceFee(
                category_name="গ্যাস সিলিন্ডার ও বিপজ্জনক দ্রব্য সংরক্ষণাগার ফি",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বিশেষ ঝুঁকি পরিদর্শন অন্তর্ভুক্ত।"
            )
        ],
        processing_time_sla="পরিদর্শন সাপেক্ষে সর্বোচ্চ ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ভবন বা প্রতিষ্ঠানের অনুমোদিত আর্কিটেকচারাল লে-আউট নকশা",
                is_mandatory=True,
                format_type="ব্লু-প্রিন্ট / নকশা"
            ),
            RequiredDocument(
                name="ভবন নির্মাণের অনুমোদনপত্র (রাজউক / সিডিএ / কেডিএ / পৌরসভা)",
                is_mandatory=True,
                format_type="অনুমোদনপত্র কপি"
            ),
            RequiredDocument(
                name="অগ্নিনির্বাপক সিলিন্ডার (ABC/CO2 Dry Chemical Powder) ক্রয়ের ভাউচার",
                is_mandatory=True,
                format_type="রশিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ফায়ার সার্ভিসের পোর্টালে ই-লাইসেন্স আবেদন",
                description="https://efirelicense.gov.bd ওয়েবসাইটে যান। প্রতিষ্ঠান ও ভবনের বিস্তারিত তথ্য পূরণ করে আবেদন সাবমিট করুন।",
                action_url="https://efirelicense.gov.bd",
                tips="প্রতিষ্ঠানে জরুরি নির্গমন সিঁড়ি (Fire Exit) ও সিলিন্ডারের অবস্থান স্পষ্ট উল্লেখ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="চালানে সরকারি ফি পরিশোধ",
                description="নির্দিষ্ট কোডে সোনালী ব্যাংকে চালানের মাধ্যমে সরকারি ফি জমা দিন। চালানের কপি সিস্টেমে আপলোড করুন।",
                tips="কোনো কর্মচারীকে নগদ টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="ফায়ার পরিদর্শক কর্তৃক সরেজমিনে পরিদর্শন",
                description="নিকটস্থ ফায়ার স্টেশনের পরিদর্শক আপনার ভবন পরিদর্শন করবেন এবং মহড়ার ব্যবস্থা ও অগ্নিনির্বাপক ব্যবস্থা দেখবেন। সন্তোষজনক হলে তিনি ইতিবাচক প্রতিবেদন দাখিল করবেন।",
                tips="পর্যাপ্ত ফায়ার এক্সটিংগুইশার ও স্মোক ডিটেক্টর প্রস্তুত রাখুন।"
            ),
            ApplicationStep(
                step_number=4,
                title="ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড",
                description="উপ-পরিচালক বা সহকারী পরিচালক অনুমোদন দিলে সিস্টেম থেকে কিউআর কোডযুক্ত আসল ডিজিটাল ফায়ার লাইসেন্স ডাউনলোড করে প্রিন্ট করুন।"
            )
        ],
        official_portal_url="https://fireservice.gov.bd",
        application_url="https://efirelicense.gov.bd",
        citizen_charter_url="https://fireservice.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: ফায়ার স্টেশনের দালালরা সনদ পাইয়ে দেওয়ার নামে বিপুল অর্থ দাবি করে এবং অনেক ক্ষেত্রে নকল জাল সার্টিফিকেট ধরিয়ে দেয়। কোনো দুর্ঘটনায় নকল লাইসেন্স ধরা পড়লে ভবন মালিকের বিরুদ্ধে জামিন-অযোগ্য ফৌজদারি মামলা হবে। শুধুমাত্র ই-ফায়ার লাইসেন্স পোর্টালের ডিজিটাল সনদ গ্রহণ করুন।"
    ))

    # 28. প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E) আমদানি-রপ্তানি সনদ (IRC/ERC)
    services.append(CitizenService(
        service_id="bd-ccie-irc-erc-import-export-registration",
        title_bn="আমদানি ও রপ্তানি সনদ (IRC ও ERC) অনলাইন নিবন্ধন ও ফি",
        title_en="Bangladesh Import & Export Registration Certificate (IRC & ERC) Official Online Guide",
        category="ব্যবসা ও আন্তর্জাতিক বাণিজ্য",
        department_agency="প্রধান আমদানি ও রপ্তানি নিয়ন্ত্রকের দপ্তর (CCI&E), বাণিজ্য মন্ত্রণালয়",
        summary="আন্তর্জাতিক বাণিজ্য ও পণ্য আমদানি-রপ্তানি করার জন্য আইআরসি (IRC) ও ইআরসি (ERC) সনদ বাধ্যতামূলক। সিঅ্যান্ডএফ দালালরা এর জন্য ৫০,০০০ থেকে ১ লাখ টাকা পর্যন্ত ফি নেয়। olrs.ccie.gov.bd পোর্টালে সরাসরি অনলাইনে আবেদন করে নির্ধারিত সরকারি ফি দিয়ে ঘরে বসেই সনদ পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="রপ্তানি নিবন্ধন সনদ (ERC - বাৎসরিক যেকোনো পরিমাণ রপ্তানির জন্য)",
                amount_bdt=7000.0,
                vat_included=True,
                payment_method="অনলাইন ই-পেমেন্ট বা সোনালী ব্যাংক চালান",
                remarks="সরকারি ফি ৭,০০০ টাকা (+১৫% ভ্যাট)।"
            ),
            ServiceFee(
                category_name="আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫০ লাখ টাকা পর্যন্ত)",
                amount_bdt=18000.0,
                vat_included=True,
                payment_method="অনলাইন চালান",
                remarks="আমদানি সীমার উপর ভিত্তি করে সরকারি স্লাব নির্ধারিত।"
            ),
            ServiceFee(
                category_name="আমদানি নিবন্ধন সনদ (IRC - বাৎসরিক আমদানি সীমা ৫ লাখ টাকা পর্যন্ত ক্ষুদ্র আমদানিকারক)",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="অনলাইন চালান",
                remarks="ক্ষুদ্র উদ্যোক্তাদের জন্য বিশেষ ছাড়।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন ও ফি জমার পর সর্বোচ্চ ৩ কার্যদিবসের মধ্যে ডিজিটাল সনদ প্রস্তুত",
        required_documents=[
            RequiredDocument(
                name="হালনাগাদ বাণিজ্যিক ট্রেড লাইসেন্স",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="ই-টিআইএন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন দাখিলের প্রাপ্তিস্বীকার",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="ভ্যাট (BIN) রেজিস্ট্রেশন সনদপত্র",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="তফসিলি ব্যাংকের সলভেন্সি সার্টিফিকেট (Bank Solvency Certificate)",
                is_mandatory=True,
                format_type="ব্যাংক ম্যানেজারের সিলযুক্ত মূল কপি"
            ),
            RequiredDocument(
                name="স্বীকৃত চেম্বার অব কমার্স বা ট্রেড অ্যাসোসিয়েশনের মেম্বারশিপ সার্টিফিকেট",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="OLRS পোর্টালে অনলাইন রেজিস্ট্রেশন",
                description="https://olrs.ccie.gov.bd ওয়েবসাইটে যান। আপনার প্রতিষ্ঠানের নাম ও ইমেইল দিয়ে রেজিস্ট্রেশন করুন।",
                action_url="https://olrs.ccie.gov.bd",
                tips="আপনার ট্রেড লাইসেন্স ও ব্যাংক একাউন্টের নাম হুবহু এক হতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="আবেদন ফরম পূরণ ও ডকুমেন্টস আপলোড",
                description="আমদানি বা রপ্তানি সনদ বাছাই করুন। ব্যাংক সলভেন্সি ও চেম্বার সার্টিফিকেট আপলোড করুন।",
                tips="কাগজপত্র পরিষ্কারভাবে স্ক্যান করে দিন।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইন পেমেন্ট গেটওয়েতে ফি পরিশোধ",
                description="সিস্টেমের একপে বা সোনালী পেমেন্ট গেটওয়ের মাধ্যমে নির্ধারিত সরকারি ফি পরিশোধ করুন। তাৎক্ষণিক ডিজিটাল চালান স্লিপ তৈরি হবে।",
                tips="কোনো মধ্যস্থতাকারীকে অতিরিক্ত টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=4,
                title="ডিজিটাল আইআরসি/ইআরসি সনদ ডাউনলোড",
                description="CCI&E কর্মকর্তা অনুমোদন দিলে কিউআর কোডযুক্ত আসল ডিজিটাল সনদ অনলাইনে প্রস্তুত হবে, যা দিয়ে বাংলাদেশ কাস্টমস ও ব্যাংকে এলসি (Letter of Credit) খোলা যাবে।"
            )
        ],
        official_portal_url="https://ccie.gov.bd",
        application_url="https://olrs.ccie.gov.bd",
        citizen_charter_url="https://ccie.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: মতিঝিল বা চট্টগ্রামের দালালরা আইআরসি পাইয়ে দেওয়ার নামে লাখ টাকা হাতিয়ে নেয়। এখন সম্পূর্ণ সেবাটি শতভাগ পেপারলেস এবং অনলাইনভিত্তিক। ঘরে বসেই এটি সংগ্রহ করা সম্ভব।"
    ))

    # 29. সরকারি হাসপাতালের ওয়ান স্টপ স্বাস্থ্যসেবা ও রোগী ভর্তি নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-public-hospital-ticket-admission-guide",
        title_bn="সরকারি হাসপাতালে ওয়ান স্টপ স্বাস্থ্যসেবা, বৈকালিক টিকিট ও ভর্তি নির্দেশিকা",
        title_en="Bangladesh Public Hospital Outdoor Ticket, Evening Specialist Service & Admission Guide",
        category="স্বাস্থ্য ও পরিবার কল্যাণ",
        department_agency="স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
        summary="ঢাকা মেডিকেল, সোহরাওয়ার্দী, বিএসএমএমইউ (পিজি) কিংবা জেলা সদর হাসপাতালে রোগী নিয়ে গেলে দালাল চক্র টিকিট কাটা, ট্রলি নেওয়া, টেস্ট করানো এবং বেড দেওয়ার নামে অসহায় রোগীদের সর্বস্বান্ত করে। সরকারি হাসপাতালে বহির্বিভাগ টিকিট মাত্র ১০ টাকা এবং বৈকালিক বিশেষজ্ঞ ডাক্তার কনসালটেন্সি ফি মাত্র ২০০-৩০০ টাকা। স্বাস্থ্য বাতায়ন হেল্পলাইন ১৬২৬৩-তে ফোন করে যেকোনো সময় বিনামূল্যে সরকারি ডাক্তারের পরামর্শ নেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="উপজেলা স্বাস্থ্য কমপ্লেক্স ও জেলা সদর হাসপাতাল বহির্বিভাগ টিকিট",
                amount_bdt=10.0,
                vat_included=True,
                payment_method="হাসপাতাল টিকিট কাউন্টার",
                remarks="সরকারি নির্ধারিত প্রমিত টিকিট ফি মাত্র ১০ টাকা।"
            ),
            ServiceFee(
                category_name="মেডিকেল কলেজ ও বিশেষায়িত টারশিয়ারি হাসপাতাল বহির্বিভাগ টিকিট",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="হাসপাতাল কাউন্টার",
                remarks="টিকিট ফি মাত্র ২০ টাকা।"
            ),
            ServiceFee(
                category_name="সরকারি বৈকালিক প্রাতিষ্ঠানিক প্র্যাকটিস (অধ্যাপক / বিশেষজ্ঞ ডাক্তার)",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="হাসপাতাল বৈকালিক কাউন্টার",
                remarks="বিকালে সরকারি হাসপাতালেই প্রাইভেট চেম্বারের মতো বিশেষজ্ঞ ডাক্তার দেখানো যায়।"
            ),
            ServiceFee(
                category_name="সাধারণ বেড ও ভর্তি ফি",
                amount_bdt=15.0,
                vat_included=True,
                payment_method="কাউন্টার",
                remarks="ভর্তি ফি মাত্র ১৫ টাকা। সাধারণ ওয়ার্ডের কোনো দৈনিক বেড চার্জ নেই।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক বহির্বিভাগ টিকিট ও সেবা | জরুরি বিভাগ ২৪ ঘণ্টা খোলা",
        required_documents=[
            RequiredDocument(
                name="রোগীর জাতীয় পরিচয়পত্র (NID) অথবা জন্ম নিবন্ধন নম্বর",
                is_mandatory=True,
                format_type="টিকিট কাউন্টারে মৌখিক বা কার্ড প্রদর্শন"
            ),
            RequiredDocument(
                name="পূর্ববর্তী প্রেসক্রিপশন ও টেস্টের রিপোর্ট (যদি থাকে)",
                is_mandatory=False,
                format_type="মূল ফাইল"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="হাসপাতাল কাউন্টারে ১০/২০ টাকার সরকারি টিকিট কাটা",
                description="সরাসরি টিকিট কাউন্টারে গিয়ে রোগীর নাম, বয়স ও সমস্যা বলুন। ১০ টাকার টিকিট কেটে নির্দিষ্ট রুম নম্বরে ডাক্তারের জন্য অপেক্ষা করুন।",
                action_url="https://dghs.gov.bd",
                tips="কাউন্টারের সামনে দালালরা এসে বলবে 'তাড়াতাড়ি ডাক্তার দেখায় দিচ্ছি, ১০০ টাকা দেন'—কখনোই তাদের সাথে যাবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ডাক্তার দেখানো ও বিনামূল্যে ওষুধ সংগ্রহ",
                description="ডাক্তার ব্যবস্থাপত্র লিখলে হাসপাতালের নিজস্ব ডিসপেনসারি কাউন্টারে যান। সরকারি তালিকায় থাকা ওষুধগুলো সম্পূর্ণ বিনামূল্যে দেওয়া হয়।",
                tips="ওষুধের জন্য কাউকে টাকা দিতে হয় না।"
            ),
            ApplicationStep(
                step_number=3,
                title="হাসপাতাল ল্যাবে সরকার নির্ধারিত নামমাত্র মূল্যে টেস্ট",
                description="বাইরের প্রাইভেট ক্লিনিকে না গিয়ে হাসপাতালের নিজস্ব প্যাথলজিতে সরকারি নামমাত্র মূল্যে (রক্ত পরীক্ষা ৫০-১০০ টাকা, এক্স-রে ১০০-২০০ টাকা) টেস্ট করান।",
                tips="দালালরা প্রাইভেট ক্লিনিকে নিয়ে বেশি টাকা কমিশনের ধান্দা করে।"
            ),
            ApplicationStep(
                step_number=4,
                title="ভর্তি ও জরুরি সেবা",
                description="ভর্তির প্রয়োজন হলে জরুরি বিভাগ বা বহির্বিভাগের চিকিৎসকের সিলযুক্ত স্লিপ নিয়ে ভর্তি কাউন্টারে ১৫ টাকা জমা দিয়ে বেডে যান। কোনো ট্রলিম্যান বা আয়াকে বকশিশ দেওয়ার কোনো বাধ্যবাধকতা নেই।"
            )
        ],
        official_portal_url="https://dghs.gov.bd",
        application_url="https://dghs.gov.bd",
        citizen_charter_url="https://hsd.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: হাসপাতাল চত্বরে সক্রিয় দালালরা রোগী ভাগিয়ে প্রাইভেট হাসপাতালে নিয়ে যায় এবং আইসিইউ বা টেস্টের নামে প্রতারণা করে। রোগী বা স্বজনরা যেকোনো বিপদে আনসার সদস্য বা হাসপাতাল পুলিশ ক্যাম্পে যোগাযোগ করুন। বিনামূল্যে স্বাস্থ্য পরামর্শের জন্য স্বাস্থ্য বাতায়ন ১৬২৬৩-তে কল করুন।",
        grievance_remedy="হাসপাতালে ডাক্তার অনুপস্থিত থাকলে বা চিকিৎসা অবহেলা হলে হাসপাতাল পরিচালক / সিভিল সার্জন বরাবরে অভিযোগ করুন অথবা জাতীয় জরুরি সেবা ৯৯৯ বা ১৬২৬৩-এ রিপোর্ট করুন।"
    ))

    # 30. নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন (পল্লী বিদ্যুৎ ও ডেসকো/ডিপিডিসি)
    services.append(CitizenService(
        service_id="bd-electricity-new-connection-meter-guide",
        title_bn="নতুন বিদ্যুৎ সংযোগ ও ডিজিটাল মিটার আবেদন নির্দেশিকা (পল্লী বিদ্যুৎ/ডেসকো/ডিপিডিসি)",
        title_en="Bangladesh New Electricity Connection & Digital Smart Meter Application Guide",
        category="বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ",
        department_agency="বাংলাদেশ পল্লী বিদ্যুতায়ন বোর্ড (BREB) / ডেসকো / ডিপিডিসি",
        summary="নতুন বাড়ি বা ব্যবসা প্রতিষ্ঠানে পল্লী বিদ্যুৎ বা ডেসকো/ডিপিডিসি থেকে মিটার নিতে স্থানীয় দালাল বা কথিত ইলেকট্রিশিয়ানরা ১৫,০০০ থেকে ৩০,০০০ টাকা দাবি করে। অনলাইনে ঘরে বসেই মাত্র কয়েকশ থেকে কয়েক হাজার টাকায় সরকারি নিয়মে সংযোগ পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="আবেদন ফি (এক ফেজ আবাসিক সংযোগ)",
                amount_bdt=115.0,
                vat_included=True,
                payment_method="বিকাশ, রকেট, নগদ বা অনলাইন",
                remarks="আবেদন ফি ১০০ টাকা + ১৫% ভ্যাট = ১১৫ টাকা।"
            ),
            ServiceFee(
                category_name="নিরাপত্তা জামানত (Security Deposit - প্রতি কিলোওয়াট)",
                amount_bdt=600.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট",
                remarks="ফেরতযোগ্য সরকারি জামানত।"
            ),
            ServiceFee(
                category_name="মিটার টেস্ট ও সার্ভিস সংযোগ ফি",
                amount_bdt=800.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="মিটার সরবরাহ ও তার টানার সরকারি চার্জ।"
            )
        ],
        processing_time_sla="আবেদন ও ওয়্যারিং পরিদর্শনের পর সর্বোচ্চ ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) কপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="যে জমিতে সংযোগ হবে তার খারিজ খতিয়ান বা দলিলের কপি",
                is_mandatory=True,
                format_type="স্ক্যান কপি"
            ),
            RequiredDocument(
                name="লাইসেন্সপ্রাপ্ত ইলেকট্রিশিয়ান কর্তৃক বাড়ি ওয়্যারিং প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="প্রত্যয়ন ফরম"
            ),
            RequiredDocument(
                name="নিকটবর্তী প্রতিবেশীর বিদ্যুৎ বিলের কপি (হিসাব নম্বর উল্লেখের জন্য)",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিদ্যুৎ বিতরণ সংস্থার পোর্টালে অনলাইন আবেদন",
                description="পল্লী বিদ্যুৎ হলে https://rebpbs.org এবং ঢাকা হলে desco.org.bd বা dpdc.org.bd-এ যান। 'নতুন সংযোগ আবেদন' অপশনে ক্লিক করে ১১৫ টাকা আবেদন ফি বিকাশ দিয়ে সাবমিট করুন।",
                action_url="https://rebpbs.org",
                tips="আপনার নিকটবর্তী ট্রান্সফরমার ও পোলের নম্বর সঠিকভাবে দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="লাইনম্যান কর্তৃক কারিগরি পরিদর্শন",
                description="বিদ্যুৎ অফিসের ওয়্যারিং পরিদর্শক সরেজমিনে এসে বাড়ির ওয়্যারিং ও আর্থিং রড পরীক্ষা করবেন।",
                tips="ওয়্যারিং টেস্টের জন্য কোনো পরিদর্শককে ব্যক্তিগত টাকা দেওয়া নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিমান্ড নোটের ফি অনলাইনে জমা",
                description="সিস্টেমে ডিমান্ড নোট ইস্যু হবে। জামানত ও মিটার চার্জের টাকা সরাসরি রকেট/বিকাশ বা ব্যাংকে জমা দিন।",
                tips="দালালরা বলে 'অফিস খরচ লাগবে'—ডিমান্ড নোটের বাইরে কোনো টাকা নেই।"
            ),
            ApplicationStep(
                step_number=4,
                title="মিটার স্থাপন ও বিদ্যুৎ চালু",
                description="ফি জমার ৩-৫ দিনের মধ্যে লাইনম্যান এসে সরকারি সিলযুক্ত ডিজিটাল মিটার স্থাপন করে বিদ্যুৎ চালু করে দেবে।"
            )
        ],
        official_portal_url="https://reb.gov.bd",
        application_url="https://rebpbs.org",
        citizen_charter_url="https://mpemr.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: কোনো দালাল বা অসাধু ইলেকট্রিশিয়ানকে মিটার আনার জন্য চুক্তি করে টাকা দেবেন না। তারা অবৈধ হুক লাইন বা চোরাই মিটার লাগিয়ে দিলে বিদ্যুৎ আদালতের অভিযানে জেল ও লাখ টাকা জরিমানা হতে পারে। সম্পূর্ণ বৈধ অনলাইন আবেদন করুন।",
        grievance_remedy="বিদ্যুৎ সংযোগে কালক্ষেপণ বা ঘুষ দাবি করলে পল্লী বিদ্যুতের জিএম (General Manager) অথবা মন্ত্রণালয় হটলাইন ১৬৯৯৯-এ অভিযোগ দায়ের করুন।"
    ))

    # 31. বিআরটিএ ট্যাক্স টোকেন ও মোটরযান রুট পারমিট অনলাইন নবায়ন
    services.append(CitizenService(
        service_id="bd-brta-tax-token-route-permit-renewal",
        title_bn="বিআরটিএ মোটরযান ট্যাক্স টোকেন ও রুট পারমিট অনলাইন নবায়ন নির্দেশিকা",
        title_en="Bangladesh BRTA Motor Vehicle Tax Token & Route Permit Online Renewal Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (বিআরটিএ), সড়ক পরিবহন ও মহাসড়ক বিভাগ",
        summary="প্রতি বছর মোটরসাইকেল, প্রাইভেট কার, বাস বা ট্রাকের ট্যাক্স টোকেন নবায়ন করতে ব্যাংকে গিয়ে লম্বা লাইনে দাঁড়াতে হয় অথবা দালাল ধরে বাড়তি টাকা দিতে হয়। বিএসপি (BSP) সিস্টেমে ঘরে বসেই মোবাইল ব্যাংকিংয়ে এক সেকেন্ডে ট্যাক্স পরিশোধ করে ডিজিটাল কিউআর কোডযুক্ত ট্যাক্স টোকেন ডাউনলোড করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="মোটরসাইকেল বার্ষিক ট্যাক্স টোকেন ফি",
                amount_bdt=1150.0,
                vat_included=True,
                payment_method="বিকাশ, রকেট, নগদ, উপায়, কার্ড বা যেকোনো ব্যাংক",
                remarks="১০ বছরের এককালীন ট্যাক্স না থাকলে বার্ষিক নবায়ন ফি।"
            ),
            ServiceFee(
                category_name="প্রাইভেট কার বার্ষিক রোড ট্যাক্স ও টোকেন (১৫০০ সিসি পর্যন্ত)",
                amount_bdt=15000.0,
                vat_included=True,
                payment_method="অনলাইন পেমেন্ট গেটওয়ে",
                remarks="সরকারি নির্ধারিত প্রমিত ফি + এআইটি প্রযোজ্য।"
            ),
            ServiceFee(
                category_name="লেট ফি / জরিমানা (মেয়াদোত্তীর্ণ হলে)",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="অনলাইন",
                remarks="বিলম্বে পরিশোধের সরকারি রুলস অনুযায়ী হিসাব।"
            )
        ],
        processing_time_sla="অনলাইনে ফি জমার সাথে সাথে তাৎক্ষণিক ডিজিটাল ট্যাক্স টোকেন প্রস্তুত",
        required_documents=[
            RequiredDocument(
                name="গাড়ির পূর্ববর্তী ট্যাক্স টোকেনের তথ্য বা ছবি",
                is_mandatory=True,
                format_type="তথ্য ইনপুট"
            ),
            RequiredDocument(
                name="গাড়ির চেসিস নম্বর ও রেজিস্ট্রেশন নম্বর",
                is_mandatory=True,
                format_type="তথ্য ইনপুট"
            ),
            RequiredDocument(
                name="আয়কর রিটার্ন দাখিলের প্রমাণপত্র (গাড়ির ক্ষেত্রে বাধ্যতামূলক)",
                is_mandatory=True,
                format_type="অনলাইন টিআইএন ও রিটার্ন রসিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিএসপি পোর্টালে লগইন",
                description="https://bsp.brta.gov.bd সাইটে লগইন করে আপনার মোটরযান প্রোফাইলে যান। 'ট্যাক্স টোকেন নবায়ন' বাটনে ক্লিক করুন।",
                action_url="https://bsp.brta.gov.bd",
                tips="আপনার গাড়ি আগেই বিএসপি প্রোফাইলে যুক্ত না থাকলে চেসিস নম্বর দিয়ে যুক্ত করে নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="বকেয়া ট্যাক্স হিসাব ও অনলাইন পেমেন্ট",
                description="সিস্টেম স্বয়ংক্রিয়ভাবে সরকারি ট্যাক্স ও ভ্যাট হিসাব করে দেবে। বিকাশ বা কার্ড দিয়ে ফি পরিশোধ করুন।",
                tips="কোনো ব্যাংকে গিয়ে ঘণ্টার পর ঘণ্টা লাইনে দাঁড়াতে হবে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="কিউআর কোডযুক্ত ডিজিটাল ট্যাক্স টোকেন ডাউনলোড ও প্রিন্ট",
                description="পেমেন্ট সফল হওয়ার সাথে সাথে কিউআর কোডযুক্ত রঙিন ডিজিটাল ট্যাক্স টোকেন স্ক্রিনে চলে আসবে। এটি ডাউনলোড করে প্রিন্ট করে গাড়িতে রাখুন। ট্রাফিক পুলিশ কিউআর কোড স্ক্যান করে তাৎক্ষণিক বৈধতা যাচাই করতে পারবে।"
            )
        ],
        official_portal_url="https://brta.gov.bd",
        application_url="https://bsp.brta.gov.bd",
        citizen_charter_url="https://brta.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: দালালদের মাধ্যমে ভুয়া ম্যানুয়াল সিল দেওয়া ট্যাক্স টোকেন কাটাবেন না। পুলিশি তল্লাশিতে বারকোড বা কিউআর কোড ম্যাচ না করলে গাড়ি ডাম্পিংয়ে পাঠানো হবে এবং জাল দলিলের মামলা হবে। সম্পূর্ণ অফিশিয়াল বিএসপি সিস্টেম থেকে ই-ট্যাক্স টোকেন নিন।"
    ))

    # 32. পাসপোর্টের পুলিশ ভেরিফিকেশন (SB Verification) ট্র্যাকিং ও অযাচিত দাবি রোধ
    services.append(CitizenService(
        service_id="bd-passport-police-sb-verification-guide",
        title_bn="পাসপোর্টের পুলিশ ভেরিফিকেশন (SB) ট্র্যাকিং ও অযাচিত ঘুষ দাবি রোধ নির্দেশিকা",
        title_en="Bangladesh e-Passport Special Branch (SB) Police Verification Tracking & Anti-Extortion Guide",
        category="পাসপোর্ট ও ইমিগ্রেশন",
        department_agency="স্পেশাল ব্রাঞ্চ (SB), বাংলাদেশ পুলিশ",
        summary="নতুন পাসপোর্টের ক্ষেত্রে পুলিশ ভেরিফিকেশনের নামে তদন্তকারী কর্মকর্তারা প্রায়ই বাড়ি এসে বা থানায় ডেকে ১,০০০ থেকে ৫,০০০ টাকা 'চা-মিষ্টির খরচ' বা ঘুষ দাবি করে। স্বরাষ্ট্র মন্ত্রণালয় ও পুলিশ সদরদপ্তরের সুস্পষ্ট নির্দেশ অনুযায়ী—পাসপোর্ট ভেরিফিকেশনে নাগরিকদের কোনো ফি বা অর্থ দেওয়ার কোনো সরকারি নিয়ম নেই (ফি সম্পূর্ণ ০ টাকা)। নাগরিকের তথ্য সঠিক থাকলে কোনো অর্থ ছাড়াই রিপোর্ট পজিটিভ দিতে পুলিশ বাধ্য।",
        official_fees=[
            ServiceFee(
                category_name="পুলিশ ভেরিফিকেশন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="পুলিশ ভেরিফিকেশনের জন্য কোনো প্রকার অর্থ নেওয়া আইনত দণ্ডনীয় ঘুষ।"
            )
        ],
        processing_time_sla="এসবি অফিসে ফাইল প্রেরণের পর সর্বোচ্চ ৩ থেকে ৭ কার্যদিবসের মধ্যে রিপোর্ট নিষ্পত্তি",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর আসল জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম সনদ",
                is_mandatory=True,
                format_type="মূল কপি পরিদর্শন"
            ),
            RequiredDocument(
                name="স্থায়ী ঠিকানার প্রমাণপত্র (চেয়ারম্যান/কাউন্সিলর প্রত্যয়ন বা হোল্ডিং ট্যাক্স দাখিলা)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পিতা ও মাতার জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পাসপোর্টের অনলাইন রেজিস্ট্রেশন সামারি শিট ও ডেলিভারি স্লিপ",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পাসপোর্ট স্ট্যাটাস ট্র্যাকিং",
                description="https://www.epassport.gov.bd পোর্টালে অ্যাপ্লিকেশন আইডি ও জন্মতারিখ দিয়ে চেক করুন। স্ট্যাটাস যখন 'Police Verification' দেখাবে, তখন ফাইলটি আপনার সংশ্লিষ্ট এলাকার এসবি বা ডিএসবি শাখায় থাকে।",
                action_url="https://www.epassport.gov.bd/landing",
                tips="নবায়নকৃত সাধারণ পাসপোর্টে কোনো পুলিশ ভেরিফিকেশন লাগে না, শুধুমাত্র নতুন পাসপোর্টে প্রযোজ্য।"
            ),
            ApplicationStep(
                step_number=2,
                title="তদন্ত কর্মকর্তার সাথে যোগাযোগ ও আসল কাগজপত্র প্রদর্শন",
                description="তদন্তকারী কর্মকর্তা ফোন দিলে তাকে আপনার স্থায়ী ঠিকানার ইউটিলিটি বিল, চেয়ারম্যান সার্টিফিকেট ও আসল এনআইডি দেখান।",
                tips="কর্মকর্তা যদি বলেন 'অফিস খরচ লাগবে', তাকে বিনয়ের সাথে বলুন যে সরকার নির্ধারিত পাসপোর্ট ফি চালানে জমা দেওয়া আছে, কোনো বাড়তি খরচ দেওয়ার সরকারি নিয়ম নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনলাইন রিপোর্ট সাবমিশন ও ছাড়পত্র",
                description="তদন্তকারী কর্মকর্তা তার মোবাইল অ্যাপ দিয়ে সরাসরি কেন্দ্রীয় এসবি সার্ভারে ডিজিটাল পজিটিভ রিপোর্ট আপলোড করবেন। আপনার পাসপোর্টের স্ট্যাটাস স্বয়ংক্রিয়ভাবে 'Pending for Approval' হয়ে যাবে।"
            )
        ],
        official_portal_url="https://police.gov.bd",
        application_url="https://www.epassport.gov.bd",
        citizen_charter_url="https://police.portal.gov.bd/site/view/citizen_charter",
        anti_broker_warning="সতর্কতা: পুলিশ ভেরিফিকেশনের জন্য কাউকে কোনো নগদ টাকা দেবেন না। যদি কোনো কর্মকর্তা অনৈতিকভাবে টাকা দাবি করে বা টাকা না দিলে নেতিবাচক রিপোর্ট দেওয়ার হুমকি দেয়, তবে অবিলম্বে পুলিশ সদরদপ্তরের আইজিপি কমপ্লেইন সেল অথবা স্থানীয় পুলিশ সুপার (SP) বরাবর সরাসরি অভিযোগ করুন।",
        grievance_remedy="পুলিশের অনৈতিক সুবিধা দাবির বিরুদ্ধে আইজিপি কমপ্লেইন সেল মোবাইল: ০১৭৬৯৬৯৩৫৩৫, ০১৭৬৯৬৯৩৫৩৬ অথবা জাতীয় জরুরি সেবা ৯৯৯ বা grs.gov.bd-এ সরাসরি নাম প্রকাশ না করে অভিযোগ দাখিল করুন।"
    ))

    return services
