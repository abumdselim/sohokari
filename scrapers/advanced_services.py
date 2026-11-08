from typing import List
from schema.models import CitizenService, ServiceFee, RequiredDocument, ApplicationStep

def get_advanced_citizen_services() -> List[CitizenService]:
    """
    Returns 21 advanced authoritative citizen services covering Labor Courts & Workers' Rights,
    RTI Act 2009 (Freedom of Information Form-Ka), Divorce Notice & Effectiveness Certificates,
    Inland Waterway Vessel Survey, River Ghat Toll Rates, Youth Development Collateral-Free Loans,
    Railway Ticket Refunds & Parcel Booking, Disaster Corrugated Tin Grants, GPF Loans via iBAS++,
    Customs e-Auctions, Central Zakat Fund Grants, Deceased Voter Deletion Form-12, Firearms Licenses,
    Recruiting Agency BMET Complaints, Stranded Female Expat Safe Homes, Film Certification,
    and Post International EMS. (Services 105 to 125).
    """
    services: List[CitizenService] = []

    # 105. শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা
    services.append(CitizenService(
        service_id="bd-labor-court-unpaid-wages-compensation",
        title_bn="শ্রম আদালতে বকেয়া বেতন, গ্র্যাচুইটি ও বেআইনি বরখাস্তের ক্ষতিপূরণ মামলা নির্দেশিকা",
        title_en="Labor Court Unpaid Wages Gratuity & Illegal Termination Compensation Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="শ্রম ও কর্মসংস্থান মন্ত্রণালয় ও শ্রম আদালত (Labor Court)",
        summary="গার্মেন্টস, শিল্প কারখানা বা বেসরকারি প্রতিষ্ঠানে কর্মরত শ্রমিক-কর্মচারীদের কোনো নোটিশ ছাড়া হঠাৎ ছাঁটাই করলে, মাসের পর মাস বেতন বকেয়া রাখলে কিংবা চাকরি শেষে গ্র্যাচুইটি ও প্রভিডেন্ট ফান্ডের টাকা না দিলে বাংলাদেশ শ্রম আইন ২০০৬ এর ৩৩ ধারা অনুযায়ী কোনো কোর্ট ফি ছাড়াই শ্রম আদালতে সরাসরি মামলা করা যায়। দালাল বা মধ্যস্থতাকারীদের ছাড়াই শ্রমিকরা তাদের আইনগত শতভাগ পাওনা আদায় করতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="শ্রম আদালতে শ্রমিক কর্তৃক মামলা দায়ের সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="শ্রম আইন ২০০৬ অনুযায়ী শ্রমিকের অধিকার আদায়ে কোনো কোর্ট ফি দিতে হয় না।"
            )
        ],
        processing_time_sla="শ্রম আদালতে নোটিশ জারির পর ৬০ থেকে ৯০ কার্যদিবসের মধ্যে নিষ্পত্তি",
        required_documents=[
            RequiredDocument(
                name="মালিকপক্ষ বরাবর প্রেরিত আইনি অভিযোগপত্রের কপি (ধারা ৩৩ অনুযায়ী রেজিস্ট্রি ডাকযোগে প্রেরিত রসিদসহ)",
                is_mandatory=True,
                format_type="কপি ও পোস্টাল রিসিট"
            ),
            RequiredDocument(
                name="প্রতিষ্ঠানের নিয়োগপত্র (Appointment Letter), আইডি কার্ড বা সার্ভিস বুক",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বেতন প্রদানের পে-স্লিপ, ব্যাংক স্টেটমেন্ট বা হাজিরা কার্ডের কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="শ্রম আদালতে লিখিত মামলার দরখাস্ত (পিটিশন)",
                is_mandatory=True,
                format_type="মূল আরজি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="মালিকপক্ষ বরাবর ৩৩ ধারায় লিখিত অভিযোগ প্রেরণ",
                description="চাকরিচ্যুতি বা বেতন বকেয়ার ৩০ দিনের মধ্যে রেজিস্ট্রি ডাকযোগে এডি (AD) সহকারে মালিকের ঠিকানায় পাওনা দাবি করে দরখাস্ত পাঠান।",
                tips="মালিকপক্ষ ১৫ দিনের মধ্যে জবাব না দিলে বা দাবি না মানলে শ্রম আদালতের পথ উন্মুক্ত হয়।"
            ),
            ApplicationStep(
                step_number=2,
                title="শ্রম আদালতে সরাসরি মামলা দায়ের",
                description="পরবর্তী ৩০ দিনের মধ্যে সংশ্লিষ্ট এলাকার শ্রম আদালতে (যেমন ঢাকা বা চট্টগ্রামের শ্রম আদালত) বিনামূল্যে মামলা ফাইল করুন।",
                action_url="https://mole.gov.bd",
                tips="দালাল ছাড়াই আদালতের রেজিস্ট্রার শাখায় সরাসরি ফাইল জমা দেওয়া যায়।"
            ),
            ApplicationStep(
                step_number=3,
                title="শ্রম আদালতের রায় ও পাওনা অর্থ আদায়",
                description="আদালত মালিকপক্ষকে ডেকে শুনানি শেষে বকেয়া বেতন, ক্ষতিপূরণ ও গ্র্যাচুইটির টাকা বাদীর হাতে বুঝিয়ে দেওয়ার নির্দেশ দেবেন।"
            )
        ],
        official_portal_url="https://mole.gov.bd",
        application_url="https://mole.gov.bd",
        citizen_charter_url="https://mole.portal.gov.bd",
        anti_broker_warning="সতর্কতা: শ্রম আদালতে মামলা করতে কোনো কোটি টাকা বা কোর্ট ফি লাগে না। কলকারখানা পরিদর্শকের দপ্তরের কোনো দালাল বা ট্রেড ইউনিয়নের ভুয়া নেতার সাথে আর্থিক রফা করবেন না। প্রয়োজনে সরকারি লিগ্যাল এইড ১৬৪৩০ এ ফ্রি আইনজীবী নিন।"
    ))

    # 106. বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান
    services.append(CitizenService(
        service_id="bd-sramik-kalyan-worker-accident-death-grant",
        title_bn="বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন: দুর্ঘটনায় নিহত ও আহত শ্রমিকের ৩ লাখ টাকা সরকারি অনুদান নির্দেশিকা",
        title_en="Bangladesh Sramik Kalyan Foundation Worker Accident & Death 3 Lakh Grant Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="বাংলাদেশ শ্রমিক কল্যাণ ফাউন্ডেশন, শ্রম ও কর্মসংস্থান মন্ত্রণালয়",
        summary="প্রাতিষ্ঠানিক বা অপ্রাতিষ্ঠানিক খাতে (গার্মেন্টস, পরিবহন, রাজমিস্ত্রি, কৃষি, দিনমজুর) কর্মরত অবস্থায় কোনো শ্রমিক দুর্ঘটনায় নিহত হলে তার পরিবারকে এককালীন ৩,০০,০০০ (তিন লাখ) টাকা এবং স্থায়ী পঙ্গুত্ববরণ করলে বা মারাত্মক আহত হলে সর্বোচ্চ ২,০০,০০০ টাকা আর্থিক সহায়তা প্রদান করা হয়। এছাড়া শ্রমিকের সন্তানদের উচ্চশিক্ষার জন্য প্রতি বছর ২৫,০০০ টাকা শিক্ষা অনুদান দেওয়া হয়।",
        official_fees=[
            ServiceFee(
                category_name="শ্রমিক কল্যাণ অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="শ্রমিক ও তাদের পরিবারের জন্য সরকারের সম্পূর্ণ ফ্রি মানবিক সহায়তা।"
            )
        ],
        processing_time_sla="বোর্ডের সভায় যাচাই-বাছাই সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="শ্রমিক কল্যাণ ফাউন্ডেশনের নির্ধারিত আবেদন ফরম (ফরম-ক বা খ)",
                is_mandatory=True,
                format_type="বিনামূল্যে সংগৃহীত মূল ফরম",
                how_to_obtain="উপজেলা নির্বাহী কর্মকর্তা বা dife.gov.bd থেকে ডাউনলোড"
            ),
            RequiredDocument(
                name="হাসপাতালের মৃত্যু সনদ (Death Certificate) ও ময়নাতদন্তের রিপোর্ট (মৃত্যুর ক্ষেত্রে)",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল কপি"
            ),
            RequiredDocument(
                name="থানার সুরতহাল প্রতিবেদন ও জিডি বা এফআইআরের কপি",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="মৃত বা আহত শ্রমিকের জাতীয় পরিচয়পত্র এবং নিয়োগকর্তার প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ওয়ারিশগণের জাতীয় পরিচয়পত্র ও ব্যাংক হিসাবের চেকের পাতার কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ডিআইএফই বা ইউএনও অফিসে আবেদন জমা",
                description="দুর্ঘটনার ৬ মাসের মধ্যে কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর (DIFE) কার্যালয় বা উপজেলা নির্বাহী কর্মকর্তার নিকট আবেদন দাখিল করুন।",
                action_url="https://dife.gov.bd",
                tips="দালাল ছাড়াই সরাসরি সরকারি দপ্তরে ফাইল জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="শ্রম পরিদর্শক কর্তৃক দুর্ঘটনাস্থল তদন্ত",
                description="শ্রম পরিদর্শক সরেজমিনে কারখানা বা দুর্ঘটনাস্থল পরিদর্শন করে শ্রমিক কল্যাণ ট্রাস্টি বোর্ডে সুপারিশ পাঠাবেন।",
                tips="তদন্তকারী দলকে কোনো ব্যক্তিগত অর্থ দেওয়া নিষেধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি ওয়ারিশদের ব্যাংক হিসাবে ৩ লাখ টাকার চেক হস্তান্তর",
                description="অনুমোদন শেষে মন্ত্রণালয় থেকে সরাসরি ওয়ারিশদের নিজ নিজ ব্যাংক হিসাবে অ্যাকাউন্ট পেয়ি চেকের মাধ্যমে ৩ লাখ টাকা পৌঁছে দেওয়া হয়।"
            )
        ],
        official_portal_url="https://mole.gov.bd",
        application_url="https://dife.gov.bd",
        citizen_charter_url="https://mole.portal.gov.bd",
        anti_broker_warning="সতর্কতা: মেহনতি শ্রমিকের রক্তের টাকায় কোনো দালালকে ভাগ দেবেন না। অনুদানের অর্থ ছাড়ানোর নামে কেউ পারসেন্টেজ বা উৎকোচ দাবি করলে সাথে সাথে শ্রম মন্ত্রণালয়ের কন্ট্রোল রুম ১৬১৩৪ নম্বরে জানান।"
    ))

    # 107. তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক)
    services.append(CitizenService(
        service_id="bd-rti-right-to-information-corruption-unveil",
        title_bn="তথ্য অধিকার আইনে (RTI) সরকারি তথ্য ও ফাইলের কপি প্রাপ্তির আবেদন (ফরম-ক) নির্দেশিকা",
        title_en="Right to Information RTI Act 2009 Citizen Official Document Access Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="তথ্য কমিশন বাংলাদেশ ও সকল সরকারি দপ্তর",
        summary="সরকারি কর্মকর্তা-কর্মচারীরা জনগণের ট্যাক্সের টাকায় বেতন পান। রাস্তাঘাট নির্মাণ, স্থানীয় প্রকল্পের বাজেট, মাস্টাররোল, নিয়োগ জালিয়াতি বা সরকারি কোনো অনিয়মের প্রমাণ উন্মোচন করতে তথ্য অধিকার আইন ২০০৯ অনুযায়ী যে-কোনো নাগরিক মাত্র ২০ টাকার কোর্ট ফি দিয়ে 'ফরম-ক'-তে তথ্য চাইতে পারেন। আইন অনুযায়ী ২০ কার্যদিবসের মধ্যে কর্মকর্তা তথ্য দিতে বাধ্য। তথ্য না দিলে তথ্য কমিশনে অভিযোগ করে কর্মকর্তার জরিমানা ও শাস্তি করানো যায়।",
        official_fees=[
            ServiceFee(
                category_name="তথ্য প্রাপ্তির আবেদন কোর্ট ফি স্ট্যাম্প (ফরম-ক)",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প (ফরমে সংযুক্ত)",
                remarks="তথ্য অধিকার আইনে আবেদন ফি নির্ধারিত মাত্র ২০ টাকা।"
            ),
            ServiceFee(
                category_name="নথিপত্রের ফটোকপি চার্জ (প্রতি পৃষ্ঠা)",
                amount_bdt=2.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান / ক্যাশ রসিদ",
                remarks="সরকার নির্ধারিত প্রতি পৃষ্ঠার প্রকৃত ফটোকপি খরচ মাত্র ২ টাকা।"
            )
        ],
        processing_time_sla="সাধারণ তথ্য: ২০ কার্যদিবস | একাধিক দপ্তরের তথ্য: ৩০ কার্যদিবস | জীবন-মৃত্যুর জরুরি তথ্য: ৪৮ ঘণ্টা",
        required_documents=[
            RequiredDocument(
                name="তথ্য অধিকার বিধিমালার নির্ধারিত 'ফরম-ক' (আবেদন ফরম)",
                is_mandatory=True,
                format_type="কোর্ট ফি যুক্ত মূল ফরম",
                how_to_obtain="তথ্য কমিশনের ওয়েবসাইট (infocom.gov.bd) থেকে বিনামূল্যে ডাউনলোড"
            ),
            RequiredDocument(
                name="আবেদনকারী নাগরিকের জাতীয় পরিচয়পত্র (NID) কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="যে নির্দিষ্ট নথিপত্র বা ফাইলের অনুলিপি চান তার স্পষ্ট বিবরণ",
                is_mandatory=True,
                format_type="লিখিত তালিকা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সংশ্লিষ্ট দপ্তরের 'দায়িত্বপ্রাপ্ত কর্মকর্তা' (RTI Officer) বরাবর আবেদন",
                description="যে দপ্তরের তথ্য চান (যেমন এসিল্যান্ড, উপজেলা স্বাস্থ্য কমপ্লেক্স, এলজিইডি, ডিসি অফিস) তাদের RTI দায়িত্বপ্রাপ্ত কর্মকর্তার নিকট ২০ টাকার কোর্ট ফি সহ ফরম-ক জমা দিয়ে রিসিভিং কপি নিন।",
                tips="রিসিভিং কপিতে তারিখ ও স্বাক্ষর নিশ্চিত করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="২০ কার্যদিবসের মধ্যে তথ্য সংগ্রহ",
                description="কর্মকর্তা নির্ধারিত সময়ের মধ্যে তথ্য প্রস্তুত করে ফটোকপি বাবদ পৃষ্ঠা প্রতি ২ টাকা চালানে জমা নিয়ে নথির সত্যায়িত কপি বুঝিয়ে দেবেন।",
                tips="তথ্য দিতে অস্বীকার করলে তিনি কারণ দর্শাতে বাধ্য।"
            ),
            ApplicationStep(
                step_number=3,
                title="তথ্য না দিলে আপিল ও তথ্য কমিশনে নালিশ",
                description="তথ্য না পেলে ৩০ দিনের মধ্যে অফিস প্রধানের নিকট আপিল করুন। সেখানেও বিচার না পেলে সরাসরি তথ্য কমিশন (infocom.gov.bd)-এ অভিযোগ দায়ের করুন। কমিশন শুনানি ডেকে তথ্য আদায় করবে এবং অসাধু কর্মকর্তার প্রতিদিনের জন্য ৫০ টাকা হারে জরিমানা করবে।"
            )
        ],
        official_portal_url="https://infocom.gov.bd",
        application_url="https://infocom.gov.bd",
        citizen_charter_url="https://infocom.portal.gov.bd",
        anti_broker_warning="সতর্কতা: তথ্য পাওয়া কোনো অনুকম্পা নয়, এটি নাগরিকের সাংবিধানিক অধিকার। সরকারি দপ্তরের কোনো দুর্নীতির তথ্য চেয়ে আপনি কোনো অপরাধ করছেন না। কোনো কর্মকর্তা ভয়ভীতি দেখালে সোজা তথ্য কমিশন ও দুদকের সহায়তা নিন।"
    ))

    # 108. আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র
    services.append(CitizenService(
        service_id="bd-divorce-notice-effectiveness-certificate-90-days",
        title_bn="আইনসম্মত তালাকের নোটিশ ও ৯০ দিন পর তালাক কার্যকারিতা সনদপত্র নির্দেশিকা",
        title_en="Legal Divorce Notice & 90 Days Divorce Effectiveness Certificate Official Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="স্থানীয় সরকার বিভাগ, সিটি কর্পোরেশন ও ইউনিয়ন পরিষদ",
        summary="মুসলিম পারিবারিক আইন অধ্যাদেশ ১৯৬১ এর ৭ ধারা অনুযায়ী বিবাহ বিচ্ছেদ কার্যকর করার জন্য শুধু কাজির কাছে গিয়ে তালাক স্বাক্ষর করলেই ডিভোর্স কার্যকর হয় না। আইনসম্মতভাবে চেয়ারম্যান বা মেয়রের সালিশি কাউন্সিলে নোটিশ পাঠাতে হয়। নোটিশ পৌঁছানোর ৯০ দিন অতিক্রান্ত হলে সালিশি কাউন্সিল থেকে 'তালাক কার্যকারিতা সনদপত্র' (Divorce Effectiveness Certificate) সংগ্রহ করতে হয়। এই সনদ ছাড়া দ্বিতীয় বিবাহ করলে জেল ও অর্থদণ্ডের ঝুঁকি থাকে।",
        official_fees=[
            ServiceFee(
                category_name="তালাকের নোটিশ এন্ট্রি ফি (সালিশি কাউন্সিল)",
                amount_bdt=100.0,
                vat_included=True,
                payment_method="ইউপি বা সিটি কর্পোরেশন সরকারি রশিদ",
                remarks="আদর্শ কর তফসিল অনুযায়ী ১০০ থেকে ৩০০ টাকা।"
            ),
            ServiceFee(
                category_name="তালাক কার্যকারিতা সনদপত্র ফি",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="সরকারি রশিদ",
                remarks="৯০ দিন পর সনদ গ্রহণের সরকারি ফি।"
            )
        ],
        processing_time_sla="আইন অনুযায়ী নোটিশ প্রাপ্তির তারিখ থেকে বাধ্যতামূলক ৯০ দিন",
        required_documents=[
            RequiredDocument(
                name="রেজিস্ট্রি ডাকযোগে প্রেরিত মূল তালাকনামার নোটিশ ও পোস্টাল রিসিট",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল রসিদ"
            ),
            RequiredDocument(
                name="মূল নিকাহনামা (কাবিননামা) এর সার্টিফাইড অনুলিপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="তালাক প্রদানকারী স্বামী বা স্ত্রীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="সালিশি কাউন্সিলের শুনানিতে উপস্থিতির নোটিশের কপি",
                is_mandatory=False,
                format_type="কাউন্সিল নোটিশ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="স্বামী/স্ত্রী এবং স্থানীয় চেয়ারম্যান/মেয়র বরাবর নোটিশ প্রেরণ",
                description="যে এলাকায় স্ত্রী বসবাস করেন সেই এলাকার ইউপি চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরকে রেজিস্ট্রি ডাকযোগে তালাকের নোটিশের এক কপি এবং অপর পক্ষকে এক কপি পাঠান।",
                tips="পোস্টাল এডি (AD) রসিদ অত্যন্ত যত্নসহকারে সংরক্ষণ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="সালিশি কাউন্সিলে সমঝোতার সুযোগ (৯০ দিনের মধ্যে)",
                description="চেয়ারম্যান উভয় পক্ষকে ডেকে আপস-মীমাংসার চেষ্টা করবেন। পুনর্মিলন না হলে নোটিশ পাওয়ার ৯০ দিন পর তালাক আইনত কার্যকর হয়ে যায়।",
                tips="দালাল বা কোনো পক্ষ সালিশে জোর খাটাতে পারে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিজিটাল সিলমোহরযুক্ত তালাক কার্যকারিতা সনদ সংগ্রহ",
                description="৯০ দিন পূর্ণ হলে চেয়ারম্যান বা আঞ্চলিক নির্বাহী কর্মকর্তার কার্যালয় থেকে নির্ধারিত সরকারি ফি দিয়ে 'তালাক কার্যকর প্রত্যয়নপত্র' গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://lgd.gov.bd",
        application_url="https://seba.gov.bd",
        citizen_charter_url="https://lgd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কাজি অফিস কোনো আদালত নয়। কোনো কাজি যদি বলে নোটিশ ছাড়াই তালাক সম্পন্ন হয়ে গেছে—তবে তা সম্পূর্ণ অবৈধ এবং দণ্ডবিধির ৪৯৪ ধারায় শাস্তিযোগ্য হতে পারেন। সরকারি সালিশি কাউন্সিলের কার্যকারিতা সনদ ছাড়া কোনো বিচ্ছেদ শতভাগ বৈধ নয়।"
    ))

    # 109. নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স
    services.append(CitizenService(
        service_id="bd-dos-inland-vessel-survey-registration",
        title_bn="নৌযান (ট্রলার, স্পিডবোট, কার্গো) সার্ভে ও বার্ষিক ফিটনেস লাইসেন্স নির্দেশিকা",
        title_en="Inland Waterway Vessel Survey & Annual Fitness Registration Official Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="নৌপরিবহন অধিদপ্তর (DOS), নৌপরিবহন মন্ত্রণালয়",
        summary="নদীমাতৃক বাংলাদেশে যাত্রী ও পণ্যবাহী ট্রলার, ড্রেজার, বাল্কহেড, স্পিডবোট ও কার্গো জাহাজের নিবন্ধন এবং বার্ষিক ফিটনেস ও সার্ভে সনদ গ্রহণ বাধ্যতামূলক। নদীপথে নৌ পুলিশের অযথা হয়রানি ও নৌ দুর্ঘটনা রোধে নৌপরিবহন অধিদপ্তর থেকে সরাসরি সরকার নির্ধারিত ট্রেজারি চালানের মাধ্যমে সার্ভে সনদ পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="নৌযান সার্ভে ও পরিমাপ সরকারি ফি (আকার অনুযায়ী)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-৫০৫১-০০০০-১৮০১)",
                remarks="১০ থেকে ৫০ অশ্বশক্তির জন্য ১,৫০০ টাকা; বড় জাহাজে আনুপাতিক হারে বৃদ্ধি।"
            ),
            ServiceFee(
                category_name="বার্ষিক ফিটনেস সনদ নবায়ন ফি",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বাৎসরিক লাইসেন্স নবায়ন ফি।"
            )
        ],
        processing_time_sla="জাহাজ পরিদর্শক কর্তৃক ডকইয়ার্ড বা নদীঘাটে সরেজমিন পরিদর্শনের পর ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="নৌযানের ব্লু-প্রিন্ট বা অনুমোদিত নির্মাণ নকশা",
                is_mandatory=True,
                format_type="নেভাল আর্কিটেক্ট অনুমোদিত নকশা"
            ),
            RequiredDocument(
                name="ইঞ্জিন ক্রয়ের মূল ক্যাশ মেমো ও কাস্টমস বিল অফ এন্ট্রি",
                is_mandatory=True,
                format_type="ফটোকপি ও প্রদর্শনযোগ্য মূল কপি"
            ),
            RequiredDocument(
                name="মালিকের জাতীয় পরিচয়পত্র (NID) ও ট্রেড লাইসেন্স",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="লাইফ জ্যাকেট ও অগ্নিনির্বাপক সরঞ্জামের পর্যাপ্ততার বিবরণ",
                is_mandatory=True,
                format_type="নিরাপত্তা তালিকা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="নৌপরিবহন অধিদপ্তরের পোর্টালে অনলাইন সার্ভে আবেদন",
                description="https://dos.gov.bd পোর্টালে নৌযানের আকার, ইঞ্জিন হর্সপাওয়ার ও নকশাসহ আবেদন দাখিল করুন।",
                action_url="https://dos.gov.bd",
                tips="দালাল ছাড়াই সোনালী ব্যাংকে চালানের ফি জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="নৌযান পরিদর্শক কর্তৃক বডি ও ইঞ্জিন সার্ভে",
                description="ইন্সপেক্টর দল নদীঘাটে এসে হাল (Hull), ইঞ্জিন, বয়া ও লাইফ জ্যাকেট পরীক্ষা করে ফিটনেস সার্টিফিকেট অনুমোদন করবেন।",
                tips="নৌযানে পর্যাপ্ত লাইফ জ্যাকেট রাখা বাধ্যতামূলক।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিজিটাল সার্ভে ও রেজিস্ট্রেশন সনদ গ্রহণ",
                description="অনুমোদন শেষে জাহাজের গায়ে অফিসিয়াল রেজিস্ট্রেশন নম্বর খোদাই করে প্রদর্শন করুন।"
            )
        ],
        official_portal_url="https://dos.gov.bd",
        application_url="https://dos.gov.bd",
        citizen_charter_url="https://mos.gov.bd",
        anti_broker_warning="সতর্কতা: নদীপথে ফিটনেসবিহীন জাহাজ চালানো যাত্রী সাধারণের জীবনের জন্য ঝুঁকিপূর্ণ। কোনো দালাল যদি সার্ভে ছাড়াই লাইসেন্স করিয়ে দেওয়ার চুক্তি করতে চায়—তবে তা জালিয়াতি। যে-কোনো অনিয়মে নৌপরিবহন অধিদপ্তরে অভিযোগ দিন।"
    ))

    # 110. বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ
    services.append(CitizenService(
        service_id="bd-biwta-river-ghat-passenger-toll-rates",
        title_bn="বিআইডব্লিউটিএ নদী পারাপার ঘাট ও জেটি টোল রেট চার্ট ও চাঁদাবাজি প্রতিরোধ নির্দেশিকা",
        title_en="BIWTA River Passenger Ghat Jetty Official Toll Rates & Extortion Prevention Guide",
        category="নাগরিক ইউটিলিটি ও পানি",
        department_agency="বাংলাদেশ অভ্যন্তরীণ নৌপরিবহন কর্তৃপক্ষ (BIWTA)",
        summary="সদরঘাটসহ দেশের সকল লঞ্চ টার্মিনাল, ফেরিঘাট ও নদী পারাপার খেয়াঘাটে সাধারণ যাত্রীদের কাছ থেকে ইজারাদারের কর্মচারীরা জোরপূর্বক অতিরিক্ত টোল ও কুলি ফি আদায় করে। বিআইডব্লিউটিএ সরকার নির্ধারিত যাত্রী প্রতি টোল মাত্র ২ থেকে ৫ টাকা এবং ট্রলি ও মালামাল বহনের নির্দিষ্ট সরকারি রেট রয়েছে। অতিরিক্ত টাকা দাবি সম্পূর্ণ বেআইনি ও দণ্ডনীয় চাঁদাবাজি।",
        official_fees=[
            ServiceFee(
                category_name="লঞ্চ টার্মিনাল সাধারণ যাত্রী প্রবেশ টোল",
                amount_bdt=5.0,
                vat_included=True,
                payment_method="টার্মিনাল গেট সরকারি টিকিট",
                remarks="সরকার নির্ধারিত টার্মিনাল এন্ট্রি ফি মাত্র ৫ টাকা।"
            ),
            ServiceFee(
                category_name="নদী পারাপার খেয়াঘাট যাত্রী টোল",
                amount_bdt=2.0,
                vat_included=True,
                payment_method="খেয়াঘাট রশিদ",
                remarks="খেয়া পারাপারে সরকার নির্ধারিত জনপ্রতি টোল মাত্র ২ টাকা।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক প্রবেশ",
        required_documents=[
            RequiredDocument(
                name="যাত্রী টিকিট বা লঞ্চের ভ্রমণ টিকিট",
                is_mandatory=True,
                format_type="টিকিট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="টার্মিনাল বা ঘাটের নোটিশ বোর্ডে সরকারি রেট চার্ট দেখা",
                description="প্রতিটি অনুমোদিত ঘাটে বিআইডব্লিউটিএ-এর অনুমোদিত টোল চার্ট টাঙানো থাকা বাধ্যতামূলক। চার্টের বেশি এক পয়সাও দেবেন না।",
                tips="ইজারাদাররা ইচ্ছামতো ১০-২০ টাকা চাইলে প্রতিবাদ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="গেট পাস বা টোল টিকিট সংগ্রহ",
                description="৫ টাকার সরকারি টিকিট কেটে টার্মিনালে প্রবেশ করুন এবং টিকিটটি নিজের কাছে রাখুন।",
                tips="কুলি বা লেবার জোর করে মালামাল টেনে টাকা দাবি করতে পারে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="অতিরিক্ত চাঁদাবাজির বিরুদ্ধে অভিযোগ",
                description="অতিরিক্ত অর্থ দাবি করলে ঘাটে দায়িত্বরত নৌ পুলিশ বা বিআইডব্লিউটিএ পরিবহন পরিদর্শকের রুমে গিয়ে তাৎক্ষণিক অভিযোগ জানান।"
            )
        ],
        official_portal_url="https://biwta.gov.bd",
        application_url="https://biwta.gov.bd",
        citizen_charter_url="https://biwta.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ঘাটে অতিরিক্ত টোল আদায় চাঁদাবাজির শামিল। কোনো ইজারাদার জোর খাটালে তাৎক্ষণিক নৌ পুলিশ হেল্পলাইন অথবা ৯৯৯ এ কল দিন।"
    ))

    # 111. যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ
    services.append(CitizenService(
        service_id="bd-dyd-youth-collateral-free-loan-training",
        title_bn="যুব উন্নয়ন অধিদপ্তর (DYD): ফ্রি কারিগরি প্রশিক্ষণ ও জামানতবিহীন যুব ঋণ (১ থেকে ৫ লাখ টাকা) নির্দেশিকা",
        title_en="Department of Youth Development DYD Free Vocational Training & Collateral-Free Loan Guide",
        category="অর্থ ও রাজস্ব সেবা",
        department_agency="যুব উন্নয়ন অধিদপ্তর (DYD), যুব ও ক্রীড়া মন্ত্রণালয়",
        summary="১৮ থেকে ৩৫ বছর বয়সী বেকার যুবক ও যুবতীদের স্বাবলম্বী করার জন্য সরকার উপজেলা যুব উন্নয়ন কার্যালয়ের মাধ্যমে সম্পূর্ণ বিনামূল্যে কম্পিউটার, ফ্রিল্যান্সিং, ড্রাইভিং, মোবাইল সার্ভিসিং, আধুনিক ডেইরি ও মৎস্য চাষের প্রশিক্ষণ দেয়। প্রশিক্ষণ শেষে ব্যবসা শুরু করার জন্য কোনো জামানত ছাড়াই মাত্র ৪% থেকে ৫% সার্ভিস চার্জে ১ লাখ থেকে ৫ লাখ টাকা পর্যন্ত যুব ঋণ প্রদান করা হয়।",
        official_fees=[
            ServiceFee(
                category_name="প্রশিক্ষণ আবেদন ও কোর্স ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="কিছু বিশেষ কোর্সে প্রতীকী ৫০-১০০ টাকা জামানত যা কোর্স শেষে ফেরত দেওয়া হয়।"
            ),
            ServiceFee(
                category_name="যুব ঋণ আবেদন ফরম ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="উপজেলা যুব উন্নয়ন কার্যালয়ে আবেদন সম্পূর্ণ ফ্রি।"
            )
        ],
        processing_time_sla="প্রশিক্ষণ সম্পন্ন সাপেক্ষে ঋণ প্রস্তাব যাচাইয়ে ১৫ থেকে ২১ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ন্যূনতম শিক্ষাগত যোগ্যতার সনদ (অষ্টম শ্রেণি/এসএসসি/এইচএসসি)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="যুব উন্নয়ন অধিদপ্তর কর্তৃক প্রদত্ত কোর্স সমাপ্তি সনদপত্র",
                is_mandatory=True,
                format_type="মূল সনদ ও কপি"
            ),
            RequiredDocument(
                name="প্রস্তাবিত ব্যবসা বা খামারের প্রকল্প বিবরণী (Project Profile)",
                is_mandatory=True,
                format_type="লিখিত পরিকল্পনা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা যুব উন্নয়ন কার্যালয়ে প্রশিক্ষণে ভর্তি",
                description="নিজের উপজেলার যুব উন্নয়ন কর্মকর্তার কার্যালয়ে গিয়ে পছন্দের কোর্সে (কম্পিউটার/ডেইরি/ইলেকট্রিক্যাল) ফ্রিতে ভর্তি হন।",
                action_url="https://dyd.gov.bd",
                tips="প্রশিক্ষণ চলাকালীন সরকার যাতায়াত ভাতাও প্রদান করে।"
            ),
            ApplicationStep(
                step_number=2,
                title="প্রশিক্ষণ শেষে জামানতবিহীন ঋণের আবেদন",
                description="সার্টিফিকেট অর্জনের পর নিজস্ব ব্যবসা বা ফার্মের প্রজেক্ট প্ল্যান জমা দিয়ে যুব ঋণের আবেদন করুন।",
                tips="দালাল ছাড়াই সরাসরি যুব উন্নয়ন কর্মকর্তার সাথে দেখা করুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি ব্যাংক অ্যাকাউন্টে ঋণের অর্থ ছাড় ও সহজ কিস্তি",
                description="উপজেলা ঋণ কমিটি আবেদন অনুমোদন করলে ১ থেকে ৫ লাখ টাকার ঋণ সরাসরি ব্যাংক হিসাবে চলে আসবে এবং সহজ মাসিক কিস্তিতে পরিশোধ করা যাবে।"
            )
        ],
        official_portal_url="https://dyd.gov.bd",
        application_url="https://dyd.gov.bd",
        citizen_charter_url="https://dyd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: যুব ঋণ পাওয়ার জন্য কোনো তৃতীয় পক্ষ বা সমিতির দালালকে এক টাকাও দেবেন না। যুব ঋণ সরকার সরাসরি প্রকৃত প্রশিক্ষণপ্রাপ্ত যুবকদের প্রদান করে। কোনো কর্মকর্তা কমিশন চাইলে জেলা যুব উন্নয়ন কার্যালয়ে অভিযোগ জানান।"
    ))

    # 112. বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও নাম সংশোধন
    services.append(CitizenService(
        service_id="bd-railway-online-ticket-refund-cancellation",
        title_bn="বাংলাদেশ রেলওয়ের অনলাইন ট্রেনের টিকিট বাতিল, রিফান্ড ও টিকিট নীতি নির্দেশিকা",
        title_en="Bangladesh Railway Online Train Ticket Refund Cancellation & Policy Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ রেলওয়ে (Bangladesh Railway), রেলপথ মন্ত্রণালয়",
        summary="অনলাইনে কেনা ট্রেনের টিকিট যাত্রা বাতিলের কারণে ফেরত দিলে সরকার নির্ধারিত হারে রিফান্ড পাওয়া নাগরিকের অধিকার। দালালরা স্টেশন থেকে রিফান্ড করিয়ে দেওয়ার নামে পুরো টাকাই কেটে নেয়। সঠিক নিয়ম হলো রেলওয়ের 'Rail Sheba' অ্যাপ বা ওয়েবসাইটে লগইন করে যাত্রা শুরুর নির্দিষ্ট সময় আগে অনলাইন ক্লিকেই রিফান্ডের টাকা সরাসরি নিজের বিকাশ/নগদ বা কার্ডে ফেরত আনা যায়। এছাড়া অন্যের এনআইডিতে কাটা টিকিট দিয়ে ভ্রমণ দণ্ডনীয় অপরাধ।",
        official_fees=[
            ServiceFee(
                category_name="৪৮ ঘণ্টা পূর্বে টিকিট ফেরত সার্ভিস চার্জ",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="ভাড়ার ২৫% কর্তন",
                remarks="যাত্রা শুরুর ৪৮ ঘণ্টার বেশি পূর্বে বাতিল করলে ভাড়ার ২৫% কাটা যাবে।"
            ),
            ServiceFee(
                category_name="২৪ ঘণ্টা থেকে ৪৮ ঘণ্টার মধ্যে ফেরত চার্জ",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="ভাড়ার ৫০% কর্তন",
                remarks="যাত্রা শুরুর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে বাতিল করলে ৫০% টাকা ফেরত।"
            )
        ],
        processing_time_sla="অনলাইন রিফান্ড ক্লিকের পর ব্যাংকিং নিয়মানুযায়ী ৩ থেকে ৮ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="রেলওয়ের ই-টিকেটের কপি ও পিএনআর (PNR) নম্বর",
                is_mandatory=True,
                format_type="অনলাইন পিডিএফ"
            ),
            RequiredDocument(
                name="যে মোবাইল নম্বর বা একাউন্ট দিয়ে টিকিট কেনা হয়েছিল সেই তথ্য",
                is_mandatory=True,
                format_type="ডিজিটাল ভেরিফিকেশন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="রেলওয়ে পোর্টালে Purchase History তে যাওয়া",
                description="https://eticket.railway.gov.bd পোর্টালে নিজের অ্যাকাউন্টে লগইন করে পারচেজ হিস্ট্রিতে টিকিটটি নির্বাচন করুন।",
                action_url="https://eticket.railway.gov.bd",
                tips="স্টেশনে যাওয়ার কোনো প্রয়োজন নেই, অনলাইনেই রিফান্ড অপশন থাকে।"
            ),
            ApplicationStep(
                step_number=2,
                title="Refund Ticket বাটনে ক্লিক ও ওটিপি ভেরিফিকেশন",
                description="রিফান্ড বাটনে ক্লিক করলে আপনার মোবাইলে ওটিপি কোড আসবে। কোড দিলে টিকিট স্বয়ংক্রিয়ভাবে বাতিল হয়ে যাবে।",
                tips="কাউন্টার থেকে কেনা কাগজের টিকিট হলে কাউন্টারে সশরীরে যেতে হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="মোবাইল ওয়ালেটে রিফান্ডের অর্থ ফেরত",
                description="নির্ধারিত সার্ভিস চার্জ বাদে বাকি টাকা যে পেমেন্ট মেথড (বিকাশ/নগদ/কার্ড) দিয়ে কেনা হয়েছিল সেই একাউন্টে স্বয়ংক্রিয়ভাবে রিফান্ড হবে।"
            )
        ],
        official_portal_url="https://railway.gov.bd",
        application_url="https://eticket.railway.gov.bd",
        citizen_charter_url="https://railway.portal.gov.bd",
        anti_broker_warning="সতর্কতা: স্টেশনের কালোবাজারিদের কাছ থেকে টিকিট কেনা এবং অন্যের এনআইডিতে ভ্রমণ করা আইনত নিষিদ্ধ। কালোবাজারির টিকিট দিয়ে ট্রেনে উঠলে টিকিটবিহীন হিসেবে বিবেচনা করে জরিমানা করা হবে। টিকিট কালোবাজারি দেখলে রেলওয়ে পুলিশ বা ৯৯৯ এ জানান।"
    ))

    # 113. বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং
    services.append(CitizenService(
        service_id="bd-railway-parcel-luggage-booking-rates",
        title_bn="বাংলাদেশ রেলওয়ে লাগেজ ও পার্সেল সরকারি রেট চার্টে মালামাল বুকিং নির্দেশিকা",
        title_en="Bangladesh Railway Luggage & Cargo Parcel Booking Official Rates Guide",
        category="যানবাহন ও লাইসেন্স",
        department_agency="বাংলাদেশ রেলওয়ে (Bangladesh Railway)",
        summary="শাকসবজি, আম-লিচু, ফলমূল, মোটরসাইকেল বা গৃহস্থালি মালামাল এক জেলা থেকে অন্য জেলায় স্বল্প খরচে পরিবহণের জন্য রেলওয়ের লাগেজ ও পার্সেল ভ্যান সবচেয়ে সাশ্রয়ী। স্টেশন বুকিং পয়েন্টে বুকিং সহকারীদের দালালরা প্রতি কেজিতে অতিরিক্ত টাকা দাবি করে, অথচ রেলওয়ের ওজন ও কিলোমিটার ভিত্তিক ফিক্সড সরকারি রেট রয়েছে।",
        official_fees=[
            ServiceFee(
                category_name="পার্সেল ভাড়া (দূরত্ব ও ওজন অনুযায়ী ফিক্সড সরকারি রেট)",
                amount_bdt=2.0,
                vat_included=True,
                payment_method="রেলওয়ে পার্সেল ক্যাশ কাউন্টার রসিদ",
                remarks="প্রতি ১০০ কিলোমিটারের জন্য কেজি প্রতি মাত্র ১.৫০ থেকে ২.৫০ টাকা।"
            ),
            ServiceFee(
                category_name="মোটরসাইকেল বুকিং চার্জ (সিসি অনুযায়ী সরকারি রেট)",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="অফিশিয়াল পার্সেল রসিদ",
                remarks="দূরত্ব ভেদে ১,২০০ থেকে ২,৫০০ টাকা।"
            )
        ],
        processing_time_sla="ট্রেনের শিডিউল অনুযায়ী গন্তব্যে পৌঁছানো",
        required_documents=[
            RequiredDocument(
                name="প্রেরক ও প্রাপকের জাতীয় পরিচয়পত্র (NID) ও মোবাইল নম্বর",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মোটরসাইকেলের ক্ষেত্রে মূল ব্লু-বুক বা রেজিস্ট্রেশনের ফটোকপি",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মালামালের ওজন ও বিবরণ সংবলিত বুকিং ইনভয়েস",
                is_mandatory=True,
                format_type="মূল বুকিং রসিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="রেলওয়ে স্টেশন পার্সেল অফিসে মালামাল ওজন করানো",
                description="ট্রেন ছাড়ার ন্যূনতম ৩ ঘণ্টা পূর্বে পার্সেল অফিসে গিয়ে সরকারি ডিজিটাল স্কেলে মালামাল ওজন করান।",
                tips="দালাল ছাড়াই সরাসরি রেলওয়ে বুকিং ক্লার্কের সাথে কথা বলুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="কম্পিউটারাইজড পার্সেল ওয়ে-বিল (Way Bill) গ্রহণ",
                description="ওজন ও দূরত্বের সরকারি হিসাব অনুযায়ী টাকা জমা দিয়ে সিলমোহরযুক্ত প্রিন্ট কপি (ওয়ে-বিল) গ্রহণ করুন।",
                tips="রসিদে উল্লিখিত টাকার বেশি এক পয়সাও দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="গন্তব্য স্টেশনে ওয়ে-বিল দেখিয়ে মালামাল খালাস",
                description="মালামাল গন্তব্য স্টেশনে পৌঁছালে প্রাপক মূল ওয়ে-বিল ও এনআইডি প্রদর্শন করে কোনো বকশিশ ছাড়াই মালামাল বুঝে নেবেন।"
            )
        ],
        official_portal_url="https://railway.gov.bd",
        application_url="https://railway.gov.bd",
        citizen_charter_url="https://railway.portal.gov.bd",
        anti_broker_warning="সতর্কতা: মালামাল বুকিংয়ের সময় বুকিং কর্মচারীরা ওজন বেশি দেখিয়ে বা বাড়তি টাকার রসিদ ছাড়া ঘুষ দাবি করলে সাথে সাথে স্টেশন মাস্টার বা রেলওয়ে নিরাপত্তা বাহিনী (RNB) কমান্ড্যান্টকে অবহিত করুন।"
    ))

    # 114. অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান
    services.append(CitizenService(
        service_id="bd-disaster-relief-corrugated-tin-housing-grant",
        title_bn="অগ্নিকাণ্ড, বন্যা ও নদীভাঙনে ক্ষতিগ্রস্ত পরিবারের সরকারি ঢেউটিন ও গৃহনির্মাণ অনুদান নির্দেশিকা",
        title_en="Disaster Affected Families Govt Corrugated Tin & Housing Cash Grant Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয় ও জেলা প্রশাসন",
        summary="অগ্নিকাণ্ড, ঘূর্ণিঝড়, বন্যা বা নদীভাঙনে যাদের বসতবাড়ি সম্পূর্ণরূপে ধ্বংস হয়ে যায়, সরকার তাদের তাৎক্ষণিক পুনর্বাসনের জন্য দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়ের মাধ্যমে বিনামূল্যে ২ বান্ডিল থেকে ৪ বান্ডিল সরকারি ঢেউটিন এবং ঘর নির্মাণের জন্য নগদ ৬,০০০ থেকে ১২,০০০ টাকার সরকারি চেক প্রদান করে। কোনো দালাল বা মধ্যস্বত্বভোগী ছাড়া উপজেলা পিআইও অফিস থেকে সরাসরি এই মানবিক সহায়তা প্রদান করা হয়।",
        official_fees=[
            ServiceFee(
                category_name="ত্রাণ ও ঢেউটিন অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারের সম্পূর্ণ ফ্রি দুর্যোগ সহায়তা।"
            )
        ],
        processing_time_sla="জরুরি অগ্নিকাণ্ড: ২৪ থেকে ৭২ ঘণ্টা | সাধারণ পুনর্বাসন: ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO) বা ইউএনও বরাবর আবেদনপত্র",
                is_mandatory=True,
                format_type="সাদা কাগজে লিখিত দরখাস্ত"
            ),
            RequiredDocument(
                name="ক্ষতিগ্রস্ত বাড়ির স্পষ্ট ছবি (অগ্নিকাণ্ড বা ভাঙনের চিত্র)",
                is_mandatory=True,
                format_type="ছবি"
            ),
            RequiredDocument(
                name="ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলর কর্তৃক 'সম্পূর্ণ ক্ষতিগ্রস্ত' প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইউপি চেয়ারম্যানের প্রত্যয়ন ও ছবিসহ ইউএনও অফিসে আবেদন",
                description="ঘটনার পরপরই উপজেলা নির্বাহী কর্মকর্তা (UNO) বা উপজেলা প্রকল্প বাস্তবায়ন কর্মকর্তা (PIO) এর নিকট আবেদন জমা দিন।",
                tips="দালাল ছাড়াই সরাসরি পিআইও অফিসে যোগাযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="পিআইও ও ট্যাগ অফিসার কর্তৃক সরেজমিন ক্ষয়ক্ষতি যাচাই",
                description="সরকারি দল সরেজমিনে ধ্বংসপ্রাপ্ত বাড়ি পরিদর্শন করে তালিকার অনুমোদন দেবেন।",
                tips="তদন্তে অবৈধ সুবিধা চাওয়া দণ্ডনীয় অপরাধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি গুদাম থেকে ঢেউটিন ও নগদ অর্থের চেক হস্তান্তর",
                description="উপজেলা পরিষদ থেকে সরাসরি ক্ষতিগ্রস্ত পরিবারপ্রধানের হাতে সরকারি ঢেউটিনের বান্ডিল ও ব্যাংকের চেক তুলে দেওয়া হয়।"
            )
        ],
        official_portal_url="https://modmr.gov.bd",
        application_url="https://modmr.gov.bd",
        citizen_charter_url="https://ddm.portal.gov.bd",
        anti_broker_warning="সতর্কতা: দুর্যোগপীড়িত নিঃস্ব মানুষের ত্রাণের টিন বা টাকা আত্মসাৎ করা মারাত্মক ফৌজদারি অপরাধ। কোনো মেম্বার বা দালাল ত্রাণের টিনের বদলে টাকা দাবি করলে সরাসরি জেলা প্রশাসক বা দুদক হেল্পলাইন ১০৬ এ অভিযোগ জানান।"
    ))

    # 115. সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি
    services.append(CitizenService(
        service_id="bd-gpf-general-provident-fund-advance-loan-settlement",
        title_bn="সাধারণ ভবিষ্যৎ তহবিল (GPF): সরকারি কর্মচারীদের আইবাস++ এ জিপিএফ লোন ও চূড়ান্ত নিষ্পত্তি নির্দেশিকা",
        title_en="General Provident Fund GPF Advance Loan & Final Settlement via iBAS++ Guide",
        category="অর্থ ও পেনশন সেবা",
        department_agency="হিসাব মহানিয়ন্ত্রকের কার্যালয় (CGA) ও অর্থ বিভাগ",
        summary="সরকারি কর্মকর্তা-কর্মচারীদের মাসিক মূল বেতন থেকে কর্তনকৃত সাধারণ ভবিষ্যৎ তহবিল (GPF) থেকে বাড়ি নির্মাণ, চিকিৎসা বা মেয়ের বিবাহের জন্য অফেরতযোগ্য বা ফেরতযোগ্য অগ্রিম লোন গ্রহণ এবং অবসরে যাওয়ার পর জিপিএফের পুঞ্জীভূত টাকা মুনাফাসহ চূড়ান্ত উত্তোলনের অফিশিয়াল নিয়মাবলী। দালাল বা অডিট অফিসের ঘুষের ঝামেলা ছাড়া সরাসরি আইবাস++ (iBAS++) পোর্টালে অনলাইন আবেদনের মাধ্যমে এই সেবা মেলে।",
        official_fees=[
            ServiceFee(
                category_name="জিপিএফ অগ্রিম ও চূড়ান্ত নিষ্পত্তি আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারি কর্মচারীর নিজস্ব জমার ওপর কোনো ফি নেই।"
            )
        ],
        processing_time_sla="অনলাইন আবেদন ও ডিডিও অগ্রায়নের পর ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সর্বশেষ বছরের হালনাগাদ জিপিএফ বাৎসরিক হিসাব বিবরণী (GPF Slip)",
                is_mandatory=True,
                format_type="সিজিএ বা হিসাবরক্ষণ অফিস কর্তৃক মুদ্রিত স্লিপ"
            ),
            RequiredDocument(
                name="আইবাস++ (iBAS++) এ পূরণকৃত অনলাইন আবেদন ফরমের প্রিন্ট কপি",
                is_mandatory=True,
                format_type="ডিজিটাল ফরম"
            ),
            RequiredDocument(
                name="নিয়ন্ত্রণকারী কর্তৃপক্ষ (DDO) কর্তৃক মঞ্জুরিপত্র (Sanction Order)",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল আদেশ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংক একাউন্টের তথ্য",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="আইবাস++ পোর্টালে জিপিএফ মডিউলে অনলাইন আবেদন",
                description="https://ibas.finance.gov.bd পোর্টালে নিজের এনআইডি দিয়ে লগইন করে জিপিএফ লোনের পরিমাণ উল্লেখ করে সাবমিট করুন।",
                action_url="https://ibas.finance.gov.bd",
                tips="কোনো মধ্যস্বত্বভোগী ছাড়াই নিজে নিজে অনলাইনে করা যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="অফিস প্রধান (DDO) কর্তৃক ডিজিটাল অনুমোদন",
                description="আপনার ডিডিও সিস্টেমে অনুমোদন দিয়ে হিসাবরক্ষণ অফিসে (CAO/DAO) অনলাইনে ফাইল ফরোয়ার্ড করবেন।",
                tips="ম্যানুয়াল ফাইলের পেছনে ঘোরার প্রয়োজন নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="ইএফটি (EFT) এর মাধ্যমে সরাসরি ব্যাংক হিসাবে টাকা জমা",
                description="হিসাবরক্ষণ কর্মকর্তা পাস করার পর বাংলাদেশ ব্যাংকের ইএফটি নেটওয়ার্কের মাধ্যমে সরাসরি কর্মচারীর বেতন অ্যাকাউন্টে টাকা ক্রেডিট হয়ে যায়।"
            )
        ],
        official_portal_url="https://cga.gov.bd",
        application_url="https://ibas.finance.gov.bd",
        citizen_charter_url="https://cga.portal.gov.bd",
        anti_broker_warning="সতর্কতা: জিপিএফ আপনার সারা জীবনের কষ্টার্জিত জমানো টাকা। হিসাবরক্ষণ অফিসের কোনো অডিটর বা কর্মচারী বিল পাসের নামে ঘুষ চাইলে সরাসরি হিসাব মহানিয়ন্ত্রক (CGA) বা দুদক ১০৬ এ অভিযোগ দায়ের করুন।"
    ))

    # 116. কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী
    services.append(CitizenService(
        service_id="bd-customs-eauction-car-goods-bidding",
        title_bn="কাস্টমস ই-নিলাম (e-Auction): সাধারণ নাগরিকদের গাড়ি ও পণ্য ক্রয়ের নিয়মাবলী",
        title_en="Bangladesh Customs e-Auction Online Car & Goods Bidding Citizen Guide",
        category="অর্থ ও রাজস্ব সেবা",
        department_agency="কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)",
        summary="চট্টগ্রাম ও ঢাকা কাস্টমস হাউজে খালাস না হওয়া বা বাজেয়াপ্ত বিলাসবহুল গাড়ি, মোটরসাইকেল, ল্যাপটপ, ইলেকট্রনিক্স ও কন্টেইনারজাত পণ্য সরকার 'কাস্টমস ই-নিলাম' পোর্টালে উন্মুক্ত নিলামে বিক্রয় করে। সিন্ডিকেটের ভয় না পেয়ে ঘরে বসেই যে-কোনো সাধারণ নাগরিক বা প্রতিষ্ঠান জাতীয় রাজস্ব বোর্ডের ই-অকশন পোর্টালে অনলাইনে বিড করে পানির দামে বৈধ গাড়ি ও পণ্য ক্রয় করতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="ই-নিলাম বিডার রেজিস্ট্রেশন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="পোর্টালে রেজিস্ট্রেশনের জন্য কোনো ফি নেই।"
            ),
            ServiceFee(
                category_name="দরপত্রের জামানত (Earnest Money)",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="অনলাইন পে-অর্ডার / ব্যাংক গ্যারান্টি",
                remarks="বিডকৃত মূল্যের সাধারণত ১০% জামানত (পণ্য না পেলে জামানত সম্পূর্ণ ফেরতযোগ্য)।"
            )
        ],
        processing_time_sla="নিলাম বিজ্ঞপ্তি অনুযায়ী বিডিং ও চূড়ান্ত অনুমোদন শেষে ৭ কার্যদিবসে ডেলিভারি",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর ১২ ডিজিটের ই-টিন (e-TIN) সার্টিফিকেট ও সর্বশেষ রিটার্ন জমার কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও পাসপোর্ট সাইজ ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="প্রতিষ্ঠানের ক্ষেত্রে ভ্যাট নিবন্ধন (BIN) ও ট্রেড লাইসেন্স",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="কাস্টমস নির্ধারিত ব্যাংকে জামানতের পে-অর্ডার",
                is_mandatory=True,
                format_type="ব্যাংক পে-অর্ডার"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="কাস্টমস ই-অকশন পোর্টালে রেজিস্ট্রেশন",
                description="https://eauction.customs.gov.bd পোর্টালে নিজের এনআইডি ও টিন নম্বর দিয়ে বিডার হিসেবে রেজিস্ট্রেশন করুন।",
                action_url="https://eauction.customs.gov.bd",
                tips="অনলাইনে গাড়ির লট নম্বর ও সংরক্ষিত মূল্য (Reserve Price) দেখে নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="অনলাইনে গোপন দরপত্র (Bid) দাখিল",
                description="নির্ধারিত জামানতের তথ্য দিয়ে নিজের কাঙ্ক্ষিত দর অনলাইনে গোপনভাবে সাবমিট করুন।",
                tips="কোনো সিন্ডিকেট জানতে পারবে না আপনি কত দর দিয়েছেন।"
            ),
            ApplicationStep(
                step_number=3,
                title="লট বিজয়ী হওয়া ও সরকারি ডেলিভারি গ্রহণ",
                description="সর্বোচ্চ দরদাতা হলে কাস্টমস নিলাম কমিটি অনুমোদন দেবে। বাকি টাকা পরিশোধ করে কাস্টমস চত্বর থেকে গাড়ি বা পণ্য ডেলিভারি চালান বুঝে নিন।"
            )
        ],
        official_portal_url="https://customs.gov.bd",
        application_url="https://eauction.customs.gov.bd",
        citizen_charter_url="https://nbr.gov.bd",
        anti_broker_warning="সতর্কতা: কাস্টমস নিলামের নামে বাইরে কিছু প্রতারক চক্র ভুয়া টোকেন দিয়ে লাখ লাখ টাকা হাতিয়ে নেয়। কাস্টমসের কোনো নিলাম অফলাইনের দালালদের হাতে নেই; শতভাগ বিডিং শুধুমাত্র সরকারি e-Auction পোর্টাল থেকেই পরিচালিত হয়।"
    ))

    # 117. ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান
    services.append(CitizenService(
        service_id="bd-islamic-foundation-central-zakat-fund-grant",
        title_bn="ধর্ম মন্ত্রণালয় কেন্দ্রীয় যাকাত ফান্ড: অসচ্ছল নাগরিকদের চিকিৎসা ও পুনর্বাসন অনুদান নির্দেশিকা",
        title_en="Ministry of Religious Affairs Central Zakat Fund Financial & Medical Aid Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="ইসলামিক ফাউন্ডেশন ও যাকাত বোর্ড, ধর্ম বিষয়ক মন্ত্রণালয়",
        summary="যাকাত বোর্ড বাংলাদেশ এর কেন্দ্রীয় সরকারি যাকাত ফান্ড থেকে দেশের দরিদ্র, এতিম, বিধবা, পঙ্গু এবং ক্যানসার বা দূরারোগ্য ব্যাধিতে আক্রান্ত ব্যক্তিদের চিকিৎসা ও স্বাবলম্বী করার জন্য এককালীন নগদ আর্থিক অনুদান দেওয়া হয়। এছাড়া অসচ্ছল মহিলাদের সেলাই মেশিন ও যুবকদের ক্ষুদ্র ব্যবসা সহায়তা প্রদান করা হয়। কোনো দালাল ছাড়া ইসলামিক ফাউন্ডেশনের জেলা কার্যালয়ের মাধ্যমে এই সরকারি যাকাত পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="যাকাত অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="যাকাতের অর্থ হকদারদের সম্পূর্ণ ফ্রিতে দেওয়া হয়।"
            )
        ],
        processing_time_sla="যাকাত বোর্ডের অনুমোদন সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="যাকাত বোর্ডের নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="মূল ফরম",
                how_to_obtain="ইসলামিক ফাউন্ডেশনের জেলা কার্যালয় বা zakatboard.gov.bd থেকে সংগৃহীত"
            ),
            RequiredDocument(
                name="রেজিস্টার্ড চিকিৎসকের ব্যবস্থাপত্র ও চিকিৎসা ব্যয়ের ভাউচার (চিকিৎসার ক্ষেত্রে)",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল প্রেসক্রিপশন"
            ),
            RequiredDocument(
                name="ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক 'অসচ্ছল ও যাকাত পাওয়ার যোগ্য' প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ব্যাংক একাউন্টের তথ্য",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইসলামিক ফাউন্ডেশনের জেলা কার্যালয়ে আবেদন দাখিল",
                description="মেডিকেল প্রেসক্রিপশন ও ইউপি প্রত্যয়নসহ জেলা ইসলামিক ফাউন্ডেশন উপ-পরিচালকের অফিসে আবেদন জমা দিন।",
                action_url="https://zakatboard.gov.bd",
                tips="দালাল ছাড়াই সরাসরি ইসলামিক ফাউন্ডেশন অফিসে যান।"
            ),
            ApplicationStep(
                step_number=2,
                title="জেলা যাকাত কমিটি কর্তৃক যাচাই-বাছাই",
                description="কমিটি আবেদনকারীর আর্থিক অসচ্ছলতা যাচাই করে অনুমোদনের জন্য কেন্দ্রীয় যাকাত বোর্ডে তালিকা পাঠাবে।",
                tips="যাকাতে কোনো ঘুষ বা উৎকোচ দেওয়া হারাম ও দণ্ডনীয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="চেক বা অনলাইন ব্যাংকিংয়ে যাকাতের অর্থ প্রাপ্তি",
                description="অনুমোদিত অর্থ সরাসরি আবেদনকারীর ব্যাংক অ্যাকাউন্টে পাঠিয়ে দেওয়া হয় এবং রোগী বা পরিবারকে এসএমএস দেওয়া হয়।"
            )
        ],
        official_portal_url="https://zakatboard.gov.bd",
        application_url="https://islamicfoundation.gov.bd",
        citizen_charter_url="https://mora.gov.bd",
        anti_broker_warning="সতর্কতা: যাকাত ফান্ডের অর্থ একমাত্র দরিদ্র ও অসহায়দের হক। কোনো ব্যক্তি বা দালাল যাকাতের টাকা পাইয়ে দেওয়ার নামে অংশ দাবি করলে সাথে সাথে জেলা প্রশাসক বা ধর্ম মন্ত্রণালয়ে জানান।"
    ))

    # 118. মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২)
    services.append(CitizenService(
        service_id="bd-ec-voter-list-deceased-deletion-form-12",
        title_bn="মৃত ভোটারের নাম ভোটার তালিকা থেকে কর্তন ও মৃত্যু তথ্য আপডেট (ফরম-১২) নির্দেশিকা",
        title_en="Deceased Voter Name Deletion from Electoral Roll Form-12 Official Guide",
        category="জাতীয় পরিচয়পত্র (NID)",
        department_agency="নির্বাচন কমিশন সচিবালয় (ইসি)",
        summary="পরিবারের কোনো সদস্য মৃত্যুবরণ করলে তার নাম ভোটার তালিকা ও এনআইডি ডাটাবেজ থেকে অফিশিয়ালি কর্তন করা অত্যন্ত গুরুত্বপূর্ণ। অন্যথায় মৃত ব্যক্তির এনআইডি ও আঙ্গুলের ছাপ জালিয়াতি করে ব্যাংক ঋণ নেওয়া, বেনামে সিম তোলা বা ভুয়া ভোটার হওয়ার মতো বড় ধরনের আর্থিক জালিয়াতি হতে পারে। নির্বাচন কমিশনের বিধান অনুযায়ী ফরম-১২ জমা দিয়ে সম্পূর্ণ বিনামূল্যে মৃত ব্যক্তির নাম ভোটার তালিকা থেকে বাদ দেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ভোটার তালিকা থেকে নাম কর্তন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="নির্বাচন কমিশনে নাম কর্তনে কোনো ফি লাগে না।"
            )
        ],
        processing_time_sla="উপজেলা নির্বাচন কর্মকর্তার যাচাই সাপেক্ষে ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="ভোটার তালিকা থেকে নাম কর্তনের নির্ধারিত ফরম-১২ (Form-12)",
                is_mandatory=True,
                format_type="পূরণকৃত মূল ফরম",
                how_to_obtain="নির্বাচন অফিস বা services.nidw.gov.bd থেকে ডাউনলোড"
            ),
            RequiredDocument(
                name="মৃত ব্যক্তির মূল অনলাইন মৃত্যু নিবন্ধন সনদপত্র (Death Certificate)",
                is_mandatory=True,
                format_type="অনলাইন ভেরিফাইড কপি"
            ),
            RequiredDocument(
                name="মৃত ব্যক্তির মূল জাতীয় পরিচয়পত্র (NID কার্ড)",
                is_mandatory=True,
                format_type="মূল কার্ড সমর্পণ"
            ),
            RequiredDocument(
                name="তথ্য প্রদানকারী ওয়ারিশের এনআইডি কপি ও ইউপি প্রত্যয়ন",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ফরম-১২ পূরণ ও মৃত্যু সনদ সংগ্রহ",
                description="ইউনিয়ন পরিষদ বা পৌরসভা থেকে অনলাইন মৃত্যু সনদ সংগ্রহ করে নির্বাচন কমিশনের ফরম-১২ পূরণ করুন।",
                action_url="https://services.nidw.gov.bd",
                tips="ফরম জমার জন্য কোনো দালালকে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা/থানা নির্বাচন অফিসে মূল এনআইডিসহ দাখিল",
                description="সংশ্লিষ্ট উপজেলা নির্বাচন অফিসারের নিকট ফরম-১২, মৃত্যু সনদ ও মৃত ব্যক্তির মূল এনআইডি কার্ড জমা দিন।",
                tips="রিসিভিং স্লিপ যত্নসহকারে সংগ্রহ করুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="সেন্ট্রাল ডাটাবেজে ভোটার স্ট্যাটাস 'মৃত' হিসেবে চিহ্নিত",
                description="নির্বাচন কর্মকর্তা ডাটাবেজে স্ট্যাটাস আপডেট করে দেবেন। এর ফলে মৃত ব্যক্তির এনআইডি দিয়ে ভবিষ্যতে কেউ কোনো অবৈধ লেনদেন করতে পারবে না।"
            )
        ],
        official_portal_url="https://nidw.gov.bd",
        application_url="https://services.nidw.gov.bd",
        citizen_charter_url="https://ecs.portal.gov.bd",
        anti_broker_warning="সতর্কতা: মৃত ব্যক্তির নাম ভোটার তালিকা থেকে বাদ দেওয়া প্রতিটি সুনাগরিকের দায়িত্ব। নির্বাচন অফিসে এই সেবায় কোনো ফি নেই। অতিরিক্ত টাকা চাইলে নির্বাচন কমিশন হেল্পলাইন ১০৫ এ জানান।"
    ))

    # 119. ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন
    services.append(CitizenService(
        service_id="bd-firearms-shotgun-pistol-license-renewal",
        title_bn="ব্যক্তিগত নিরাপত্তার জন্য আগ্নেয়াস্ত্র (শটগান/পিস্তল) লাইসেন্স ও বাৎসরিক নবায়ন নির্দেশিকা",
        title_en="Personal Firearms Shotgun & Pistol License & Annual Renewal Official Guide",
        category="শিল্প ও নাগরিক নিরাপত্তা",
        department_agency="জেলা প্রশাসন ও স্বরাষ্ট্র মন্ত্রণালয় (জননিরাপত্তা বিভাগ)",
        summary="ব্যক্তিগত জানমালের নিরাপত্তার স্বার্থে ৩০ বছরের বেশি বয়সী করদাতা নাগরিকরা বৈধ আগ্নেয়াস্ত্রের (যেমন শটগান বা পয়েন্ট ২২ বোর রাইফেল) লাইসেন্সের জন্য জেলা প্রশাসকের কার্যালয়ে আবেদন করতে পারেন। লাইসেন্স পাইয়ে দেওয়ার নামে বাইরে দালালরা ৫ থেকে ১০ লাখ টাকা দাবি করে প্রতারণা করে। প্রকৃতপক্ষে সমস্ত অনুমোদন স্বরাষ্ট্র মন্ত্রণালয়ের নিরাপত্তা ছাড়পত্র ও চালানের ফিক্সড সরকারি ফিতে স্বচ্ছভাবে সম্পন্ন হয়।",
        official_fees=[
            ServiceFee(
                category_name="শটগান / রাইফেলের লাইসেন্স সরকারি ফি",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-২২০১-০০০১-১৮০১)",
                remarks="লং ব্যারেল বন্দুক বা শটগানের সরকারি ফি।"
            ),
            ServiceFee(
                category_name="পিস্তল / রিভলভার লাইসেন্স সরকারি ফি",
                amount_bdt=10000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="শর্ট ব্যারেল পিস্তল বা রিভলভারের সরকারি ফি।"
            ),
            ServiceFee(
                category_name="বার্ষিক লাইসেন্স নবায়ন ফি",
                amount_bdt=2000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="প্রতি বছর ডিসি অফিসে বাৎসরিক নবায়ন ফি।"
            )
        ],
        processing_time_sla="পুলিশ স্পেশাল ব্রাঞ্চ (SB) ও এনএসআই নিরাপত্তা ছাড়পত্র সাপেক্ষে ৬০-৯০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="স্বরাষ্ট্র মন্ত্রণালয়ের নির্ধারিত আগ্নেয়াস্ত্র লাইসেন্স আবেদন ফরম",
                is_mandatory=True,
                format_type="পূরণকৃত মূল ফরম"
            ),
            RequiredDocument(
                name="আবেদনকারীর ন্যূনতম বাৎসরিক আয়কর পরিশোধের প্রমাণ (ন্যূনতম ৩ লাখ টাকা আয়কর)",
                is_mandatory=True,
                format_type="আইন অনুযায়ী হালনাগাদ আয়কর সনদ"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও শারীরিক সুস্থতার ডোপ টেস্ট রিপোর্ট",
                is_mandatory=True,
                format_type="সিভিল সার্জন সত্যায়িত সনদ"
            ),
            RequiredDocument(
                name="শারীরিক ফিটনেস ও মানসিক সুস্থতার প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="মেডিকেল বোর্ড সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="জেলা প্রশাসকের কার্যালয়ে আবেদন ফরম জমা",
                description="জেলা ম্যাজিস্ট্রেট (ডিসি)-এর জেএম (JM) শাখায় চালানের ফি ও ট্যাক্স ফাইলসহ আবেদন দাখিল করুন।",
                action_url="https://mopa.gov.bd",
                tips="দালাল ছাড়াই সরাসরি ডিসি অফিসে ফাইল জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="পুলিশ এসবি ও জাতীয় নিরাপত্তা গোয়েন্দা সংস্থার ক্লিয়ারেন্স",
                description="গোয়েন্দা সংস্থা সরেজমিনে আবেদনকারীর কোনো ফৌজদারি রেকর্ড বা সমাজবিরোধী কর্মকাণ্ড নেই তা যাচাই করে রিপোর্ট দেবে।",
                tips="ভেরিফিকেশনে উৎকোচ দেওয়া নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="স্বরাষ্ট্র মন্ত্রণালয়ের অনুমোদন ও লাইসেন্স বহি ইস্যু",
                description="মন্ত্রণালয় ছাড়পত্র দিলে জেলা ম্যাজিস্ট্রেট লাইসেন্স বহি ইস্যু করবেন এবং অনুমোদিত ডিলার থেকে অস্ত্র কিনে ডিসি অফিসে নম্বর এন্ট্রি করাতে হবে।"
            )
        ],
        official_portal_url="https://mhapsd.gov.bd",
        application_url="https://mopa.gov.bd",
        citizen_charter_url="https://mhapsd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: অবৈধ অস্ত্র বা জাল লাইসেন্স রাখা যাবজ্জীবন কারাদণ্ডযোগ্য অপরাধ। কোনো দালাল চক্রকে অস্ত্র লাইসেন্সের জন্য টাকা দেবেন না; ডিসি অফিসের মাধ্যমে বৈধ চ্যানেলে আবেদন করুন।"
    ))

    # 120. বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ
    services.append(CitizenService(
        service_id="bd-bmet-recruiting-agency-rl-license-fraud-complaint",
        title_bn="বৈদেশিক কর্মসংস্থান রিক্রুটিং এজেন্সি (RL) লাইসেন্স যাচাই ও জালিয়াতির বিরুদ্ধে অভিযোগ নির্দেশিকা",
        title_en="BMET Recruiting Agency RL License Verification & Fraud Complaint Official Guide",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET), প্রবাসী কল্যাণ মন্ত্রণালয়",
        summary="বিদেশে চাকরির নামে ভুয়া ট্রাভেল এজেন্ট ও আদম ব্যবসায়ীরা গ্রামের সহজ-সরল মানুষকে ফ্রি ভিসা বা উচ্চ বেতনের লোভ দেখিয়ে লক্ষ লক্ষ টাকা হাতিয়ে নেয়। বিএমইটির ডাটাবেজে বৈধ রিক্রুটিং এজেন্সির (Recruiting License - RL) তালিকা থাকে। কোনো এজেন্সি টাকা নিয়ে ভিসা না দিলে বা চুক্তি ভঙ্গ করলে বিএমইটি মহাপরিচালক বরাবর অভিযোগ দায়ের করে এজেন্সির জামানতের অর্থ বাজেয়াপ্ত করিয়ে টাকা ফেরত ও লাইসেন্স বাতিল করানো যায়।",
        official_fees=[
            ServiceFee(
                category_name="আরএল লাইসেন্স অনলাইন যাচাই ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="বিএমইটি পোর্টালে আরএল নম্বর যাচাই সম্পূর্ণ ফ্রি।"
            ),
            ServiceFee(
                category_name="এজেন্সির বিরুদ্ধে আনুষ্ঠানিক অভিযোগ দাখিল ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="অভিযোগের জন্য কোনো ফি লাগে না।"
            )
        ],
        processing_time_sla="শুনানি ও তদন্ত সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="এজেন্সির নাম ও আরএল (RL) নম্বর সম্বলিত চুক্তিপত্র বা মানি রিসিট",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল রসিদ বা ব্যাংক স্লিপ"
            ),
            RequiredDocument(
                name="অভিযোগকারীর পাসপোর্ট কপি ও জাতীয় পরিচয়পত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ভুয়া ভিসার কপি বা প্রতারণার প্রমাণপত্র (যদি থাকে)",
                is_mandatory=False,
                format_type="প্রিন্ট কপি"
            ),
            RequiredDocument(
                name="মহাপরিচালক (BMET) বরাবর লিখিত অভিযোগপত্র",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল আবেদন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিএমইটি পোর্টালে আরএল (RL) লাইসেন্স ভেরিফাই করা",
                description="টাকা দেওয়ার আগে https://bmet.gov.bd পোর্টালে গিয়ে এজেন্সির লাইসেন্স বৈধ ও সচল কি না তা যাচাই করে নিন।",
                action_url="https://bmet.gov.bd",
                tips="অননুমোদিত কোনো সাব-এজেন্ট বা দালালের হাতে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="কাকরাইল বিএমইটি ভবনে সরাসরি অভিযোগ দাখিল",
                description="প্রতারণার শিকার হলে টাকা জমার রসিদসহ বিএমইটির অভিযোগ তদন্ত শাখায় লিখিত অভিযোগ জমা দিন।",
                tips="এজেন্সির মালিককে শুনানিতে হাজির হতে সমন দেওয়া হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="এজেন্সির জামানত থেকে টাকা উদ্ধার ও লাইসেন্স বাতিল",
                description="অভিযোগ প্রমাণিত হলে মন্ত্রণালয় এজেন্সির ৫০ লাখ টাকার সরকারি জামানত থেকে প্রবাসীর টাকা উদ্ধার করে ফেরত দেবে এবং লাইসেন্স বাতিল করবে।"
            )
        ],
        official_portal_url="https://bmet.gov.bd",
        application_url="https://bmet.gov.bd",
        citizen_charter_url="https://probashi.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কোনো এজেন্সির সাথে লেনদেনের সময় অবশ্যই সিলযুক্ত রসিদ বা ব্যাংকিং চ্যানেল ব্যবহার করুন। কোনো অনিয়মে সরাসরি প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ অথবা আন্তর্জাতিক হটলাইন +৮৮০৯৬৫৩১৩৫১৩৫ এ যোগাযোগ করুন।"
    ))

    # 121. বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা
    services.append(CitizenService(
        service_id="bd-embassy-safe-home-stranded-female-migrants",
        title_bn="বিদেশে নির্যাতিত বা আটকে পড়া নারী গৃহকর্মীদের দূতাবাস সেফ হোম ও দেশে ফেরা নির্দেশিকা",
        title_en="Stranded Female Migrant Workers Embassy Safe Home & Repatriation Guide",
        category="প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান",
        department_agency="ওয়েজ আর্নার্স কল্যাণ বোর্ড ও বাংলাদেশ দূতাবাস (শ্রম উইং)",
        summary="সৌদি আরব, জর্ডান, ওমান বা মধ্যপ্রাচ্যে গৃহকর্মে গিয়ে নারী শ্রমিকরা গৃহকর্তা বা রিক্রুটিং এজেন্সির নির্যাতন, খাদ্য সংকট বা অবরুদ্ধ অবস্থায় পড়লে বাংলাদেশ দূতাবাসের 'সেফ হোম' (Safe Home)-এ আশ্রয় পাওয়া তাদের আইনগত মানবিক অধিকার। দূতাবাসের শ্রম উইং স্থানীয় পুলিশের সাহায্যে তাদের উদ্ধার করে সেফ হোমে থাকা-খাওয়ার ব্যবস্থা করে এবং ওয়েজ আর্নার্স কল্যাণ বোর্ডের খরচে বিমান টিকিট দিয়ে দেশে ফিরিয়ে আনে।",
        official_fees=[
            ServiceFee(
                category_name="দূতাবাস সেফ হোমে আশ্রয় ও চিকিৎসা ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারের সম্পূর্ণ ফ্রি আশ্রয় ও আইনি সুরক্ষা।"
            ),
            ServiceFee(
                category_name="দেশে প্রত্যাবাসনের বিমান টিকিট",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সরকার ও ওয়েজ আর্নার্স কল্যাণ বোর্ড বহন করে",
                remarks="অসচ্ছল ও নির্যাতিত নারী কর্মীদের জন্য টিকিট সরকার বহন করে।"
            )
        ],
        processing_time_sla="উদ্ধার অভিযান: তাৎক্ষণিক | সেফ হোম থেকে প্রত্যাবাসন: ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="নারী গৃহকর্মীর পাসপোর্ট নম্বর বা বিএমইটি স্মার্ট কার্ড নম্বর",
                is_mandatory=True,
                format_type="তথ্য বা ফটোকপি"
            ),
            RequiredDocument(
                name="বিদেশে অবস্থানরত গৃহকর্তা বা এজেন্সির ঠিকানা/ফোন নম্বর (যদি জানা থাকে)",
                is_mandatory=False,
                format_type="যোগাযোগের বিবরণ"
            ),
            RequiredDocument(
                name="দেশে থাকা পরিবারের ওয়ারিশ বা অভিভাবকের জাতীয় পরিচয়পত্র ও আবেদন",
                is_mandatory=True,
                format_type="স্বাক্ষরিত আবেদনপত্র"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="দূতাবাস হেল্পলাইনে বা দেশে প্রবাসী কল্যাণ মন্ত্রণালয়ে তাৎক্ষণিক যোগাযোগ",
                description="নারী কর্মীর পাসপোর্ট নম্বরসহ সরাসরি সৌদি বা সংশ্লিষ্ট দেশের বাংলাদেশ দূতাবাসের শ্রম উইংয়ে ফোন দিন অথবা দেশে প্রবাসী কল্যাণ বোর্ডে আবেদন জমা দিন।",
                action_url="https://wewb.gov.bd",
                tips="প্রবাসী কল্যাণ হেল্পলাইন ১৬১৩৫ নম্বরে তাৎক্ষণিক মেসেজ বা কল দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="দূতাবাস কর্তৃক স্থানীয় পুলিশের সহায়তায় উদ্ধার ও সেফ হোমে স্থানান্তর",
                description="দূতাবাসের কর্মকর্তারা স্পন্সর বা স্থানীয় পুলিশের সাথে যোগাযোগ করে নারী কর্মীকে নিরাপদ হেফাজতে (Safe Home) নিয়ে আসবেন।",
                tips="সেফ হোমে খাদ্য, বাসস্থান ও ডাক্তার সম্পূর্ণ ফ্রি।"
            ),
            ApplicationStep(
                step_number=3,
                title="আউটপাস (Outpass) ও বিনামূল্যে দেশে ফেরা",
                description="পাসপোর্ট না থাকলে দূতাবাস ট্রাভেল পারমিট (আউটপাস) ইস্যু করবে এবং ওয়েজ আর্নার্স বোর্ডের বিমান টিকিটে নিরাপদে দেশে ফিরিয়ে আনবে।"
            )
        ],
        official_portal_url="https://wewb.gov.bd",
        application_url="https://probashi.gov.bd",
        citizen_charter_url="https://wewb.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কোনো ভুয়া আদম ব্যবসায়ীকে স্বজন ছাড়ানোর নামে টাকা পাঠাবেন না। বিদেশে আটকে পড়া নাগরিকদের সুরক্ষা দিতে বাংলাদেশ সরকার আইনত দায়বদ্ধ। ১৬১৩৫ নম্বরে ফোন করে সরকারের সরাসরি সহায়তা নিন।"
    ))

    # 122. বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র
    services.append(CitizenService(
        service_id="bd-bfcb-film-content-certification-censor-clearance",
        title_bn="বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড চলচ্চিত্র ও ওটিটি কনটেন্ট প্রদর্শনী ছাড়পত্র নির্দেশিকা",
        title_en="Bangladesh Film Certification Board Movie & OTT Content Clearance Guide",
        category="গণমাধ্যম ও তথ্যপ্রযুক্তি",
        department_agency="বাংলাদেশ ফিল্ম সার্টিফিকেশন বোর্ড (BFCB), তথ্য ও সম্প্রচার মন্ত্রণালয়",
        summary="সিনেমা হল, টেলিভিশন চ্যানেল বা ওটিটি (OTT) প্ল্যাটফর্মে পূর্ণদৈর্ঘ্য চলচ্চিত্র, স্বল্পদৈর্ঘ্য ছবি, ট্রেলার ও ডকুমেন্টারি বাণিজ্যিকভাবে প্রদর্শনের পূর্বে বাংলাদেশ ফিল্ম সার্টিফিকেশন আইন ২০২৩ অনুযায়ী সার্টিফিকেশন বোর্ড থেকে ছাড়পত্র (সেন্সর সনদ) গ্রহণ আবশ্যক। কোনো মধ্যস্বত্বভোগী ছাড়া প্রযোজক বা পরিচালক সরাসরি ফিল্ম সার্টিফিকেশন বোর্ডে আবেদন করে ছাড়পত্র নিতে পারেন।",
        official_fees=[
            ServiceFee(
                category_name="পূর্ণদৈর্ঘ্য চলচ্চিত্র সার্টিফিকেশন ফি (প্রতি রিল বা ডিজিটাল মিনিট)",
                amount_bdt=10000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="তথ্য ও সম্প্রচার মন্ত্রণালয় নির্ধারিত সরকারি ফি।"
            ),
            ServiceFee(
                category_name="স্বল্পদৈর্ঘ্য ও ডকুমেন্টারি ছাড়পত্র ফি",
                amount_bdt=2000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="সংক্ষিপ্ত চলচ্চিত্রের নামমাত্র ফি।"
            )
        ],
        processing_time_sla="সার্টিফিকেশন বোর্ড কর্তৃক প্রদর্শন ও স্ক্রুটিনির পর ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="চলচ্চিত্রের মূল প্রিন্ট বা ডিজিটাল ড্রাইভ (DCP বা উচ্চ রেজ্যুলেশন ফাইল)",
                is_mandatory=True,
                format_type="ডিজিটাল মাস্টার কপি"
            ),
            RequiredDocument(
                name="চলচ্চিত্রের পূর্ণাঙ্গ চিত্রনাট্য ও সংলাপের প্রত্যায়িত কপি",
                is_mandatory=True,
                format_type="প্রিন্ট কপি"
            ),
            RequiredDocument(
                name="প্রযোজকের ট্রেড লাইসেন্স, ই-টিন ও প্রযোজক সমিতির সদস্যপত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ট্রেজারি চালানের মূল কপি",
                is_mandatory=True,
                format_type="মূল চালান"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ফিল্ম সার্টিফিকেশন বোর্ডে নির্ধারিত ফরমে আবেদন",
                description="কাকরাইল তথ্য ভবনস্থ সার্টিফিকেশন বোর্ডে চিত্রনাট্য ও চালানের কপিসহ চলচ্চিত্র জমা দিন।",
                action_url="https://moi.gov.bd",
                tips="দালাল ছাড়াই সরাসরি সচিবালয়/বোর্ডের কাউন্টারে ফাইল জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="সার্টিফিকেশন বোর্ডের স্ক্রিনিং থিয়েটারে প্রদর্শন",
                description="বোর্ডের জুরিবৃন্দ সিনেমাটি দেখে বয়সভিত্তিক গ্রেডিং (যেমন: সবার জন্য উন্মুক্ত, ১২+, ১৫+ বা ১৮+) নির্ধারণ করবেন।",
                tips="আইনবহির্ভূত কোনো দৃশ্য থাকলে সম্পাদনার সুযোগ দেওয়া হয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="কিউআর কোডযুক্ত সেন্সর বা সার্টিফিকেশন সনদ গ্রহণ",
                description="অনুমোদিত হলে সার্টিফিকেট প্রদান করা হবে যা সিনেমা হল ও ওটিটি প্ল্যাটফর্মে প্রদর্শনের আইনি অনুমতিপত্র হিসেবে কাজ করবে।"
            )
        ],
        official_portal_url="https://moi.gov.bd",
        application_url="https://moi.gov.bd",
        citizen_charter_url="https://moi.portal.gov.bd",
        anti_broker_warning="সতর্কতা: অবৈধ ও সনদবিহীন চলচ্চিত্র প্রদর্শন কপিরাইট ও সার্টিফিকেশন আইনে দণ্ডনীয় অপরাধ। ছাড়পত্র পেতে কোনো দালালকে ঘুষ দেবেন না।"
    ))

    # 123. প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট
    services.append(CitizenService(
        service_id="bd-archeology-historical-site-shooting-research",
        title_bn="প্রত্নতত্ত্ব অধিদপ্তর: ঐতিহাসিক ও সংরক্ষিত প্রত্নতাত্ত্বিক স্থানে শুটিং ও গবেষণা পারমিট নির্দেশিকা",
        title_en="Department of Archeology Historical Heritage Site Shooting & Research Permit Guide",
        category="শিল্প ও নাগরিক নিরাপত্তা",
        department_agency="প্রত্নতত্ত্ব অধিদপ্তর, সংস্কৃতি বিষয়ক মন্ত্রণালয়",
        summary="লালবাগ কেল্লা, পাহাড়পুর বৌদ্ধ বিহার, মহাস্থানগড়, ষাট গম্বুজ মসজিদ বা পানাম নগরের মতো জাতীয় সংরক্ষিত ঐতিহাসিক স্থানে নাটক, সিনেমা, তথ্যচিত্র শুটিং বা ড্রোন ওড়ানোর জন্য প্রত্নতত্ত্ব অধিদপ্তর থেকে বাধ্যতামূলক পারমিট নিতে হয়। অনুমতি ছাড়া শুটিং করলে মালামাল বাজেয়াপ্ত ও প্রত্নতত্ত্ব আইনে জেল-জরিমানা হয়। সরকারি ফি চালানের মাধ্যমে জমা দিয়ে সরাসরি আবেদন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="বাণিজ্যিক সিনেমা বা নাটকের শুটিং সরকারি ফি (প্রতিদিন)",
                amount_bdt=10000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="প্রতি সাইটের জন্য দৈনিক সরকার নির্ধারিত ফি।"
            ),
            ServiceFee(
                category_name="শিক্ষার্থী বা গবেষণাধর্মী তথ্যচিত্র শুটিং ফি",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য বিশেষ ছাড়।"
            )
        ],
        processing_time_sla="আবেদন যাচাই সাপেক্ষে ৩ থেকে ৭ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="প্রত্নতত্ত্ব অধিদপ্তর বরাবর নির্ধারিত আবেদনপত্র",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল আবেদন"
            ),
            RequiredDocument(
                name="শুটিংয়ের স্ক্রিপ্ট বা সিনোপসিস ও শুটিং দলের সদস্যদের তালিকা",
                is_mandatory=True,
                format_type="প্রিন্ট কপি"
            ),
            RequiredDocument(
                name="প্রযোজক বা পরিচালকের জাতীয় পরিচয়পত্র ও প্রাতিষ্ঠানিক পরিচয়পত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ড্রোন ব্যবহারের ক্ষেত্রে প্রতিরক্ষা মন্ত্রণালয় ও বেবিচকের পূর্বানুমতি",
                is_mandatory=False,
                format_type="ড্রোন ছাড়পত্র"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="মহাপরিচালক প্রত্নতত্ত্ব অধিদপ্তর বরাবর আবেদন দাখিল",
                description="আগারগাঁও প্রত্নতত্ত্ব ভবনে সাইটের নাম, তারিখ ও সময় উল্লেখ করে দরখাস্ত জমা দিন।",
                action_url="https://archaeology.gov.bd",
                tips="দালাল ছাড়াই সরাসরি অধিদপ্তরের প্রধান কার্যালয়ে যোগাযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ট্রেজারি চালানে সরকারি ফি জমা",
                description="অনুমতিপত্র প্রাপ্তির পর বাংলাদেশ ব্যাংকে চালানের ফি জমা দিয়ে রসিদ জমা দিন।",
                tips="ঐতিহাসিক স্থাপনার কোনো ক্ষতি না করার অঙ্গীকারনামা দিতে হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="সাইট অফিসারের নিকট পারমিট প্রদর্শন ও শুটিং",
                description="সংশ্লিষ্ট প্রত্নতাত্ত্বিক স্থানের কাস্টোডিয়ান বা কর্মকর্তার নিকট পারমিট দেখিয়ে নির্বিঘ্নে শুটিং সম্পন্ন করুন।"
            )
        ],
        official_portal_url="https://archaeology.gov.bd",
        application_url="https://archaeology.gov.bd",
        citizen_charter_url="https://moca.gov.bd",
        anti_broker_warning="সতর্কতা: জাতীয় প্রত্নসম্পদের ক্ষতিসাধন করা বা অনুমোদনহীন ড্রোন ওড়ানো নিরাপত্তা আইনে মারাত্মক অপরাধ। সাইট কর্মচারীদের কোনো ব্যক্তিগত টাকা দেবেন না, সরকারি চালানে ফি পরিশোধ করুন।"
    ))

    # 124. ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং
    services.append(CitizenService(
        service_id="bd-post-ems-international-express-parcel",
        title_bn="ডাক বিভাগের আন্তর্জাতিক এক্সপ্রেস মেইল সার্ভিস (EMS) ও পার্সেল ট্র্যাকিং নির্দেশিকা",
        title_en="Bangladesh Post International Express Mail Service EMS Parcel Tracking Guide",
        category="টেলিযোগাযোগ ও আইসিটি",
        department_agency="বাংলাদেশ ডাক বিভাগ",
        summary="বিদেশে জরুরি শিক্ষাগত ডকুমেন্টস, আইনি কাগজপত্র বা বাণিজ্যিক পার্সেল পাঠানোর ক্ষেত্রে বেসরকারি আন্তর্জাতিক কুরিয়ারগুলো (ডিএইচএল/ফেডেক্স) ১০,০০০ থেকে ২০,০০০ টাকা পর্যন্ত চার্জ নেয়। অথচ বাংলাদেশ ডাক বিভাগের সরকারি 'ইএমএস' (EMS - Express Mail Service)-এর মাধ্যমে বিশ্ব ডাক ইউনিয়নের (UPU) আন্তর্জাতিক নেটওয়ার্কে মাত্র ২,০০০ থেকে ৪,০০০ টাকায় বিশ্বের যে-কোনো দেশে ট্র্যাকিং সুবিধাসহ নিরাপদে পার্সেল পাঠানো যায়।",
        official_fees=[
            ServiceFee(
                category_name="ইএমএস আন্তর্জাতিক ডকুমেন্ট ফি (৫০০ গ্রাম পর্যন্ত)",
                amount_bdt=1800.0,
                vat_included=True,
                payment_method="পোস্ট অফিস কাউন্টার সরকারি রশিদ",
                remarks="ইউরোপ, আমেরিকা ও মধ্যপ্রাচ্যে ৫০০ গ্রাম ডকুমেন্টে মাত্র ১,৮০০ থেকে ২,২০০ টাকা।"
            ),
            ServiceFee(
                category_name="প্রতি ৫০০ গ্রাম অতিরিক্ত পার্সেল মালামাল ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="সরকারি রশিদ",
                remarks="গন্তব্য দেশ ও ওজন অনুযায়ী নির্ধারিত সরকারি রেট।"
            )
        ],
        processing_time_sla="আন্তর্জাতিক ডেলিভারি: ৩ থেকে ৭ কার্যদিবস (দেশভেদে)",
        required_documents=[
            RequiredDocument(
                name="প্রেরক ও বিদেশি প্রাপকের পূর্ণ ঠিকানা, ফোন নম্বর ও জিপ কোড (Zip Code)",
                is_mandatory=True,
                format_type="ইংরেজি ব্লকে স্পষ্ট লিখিত"
            ),
            RequiredDocument(
                name="কাস্টমস ডিক্লারেশন ফরম (CN-22 / CN-23 ফরম)",
                is_mandatory=True,
                format_type="ডাকঘর থেকে সরবরাহকৃত ফরম"
            ),
            RequiredDocument(
                name="প্রেরকের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="প্রধান ডাকঘর বা জিপিও-র ইএমএস (EMS) কাউন্টারে যাওয়া",
                description="জেলা জিপিও বা প্রধান ডাকঘরে গিয়ে পার্সেলটি খোলা অবস্থায় উপস্থাপন করুন যাতে ডাক কর্মকর্তা স্ক্যান করতে পারেন।",
                tips="কোনো অবৈধ বা নিষিদ্ধ পণ্য পাঠানো যাবে না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ওজন ও সরকারি রসিদ গ্রহণ",
                description="ওজন করিয়ে সরকারি রেট অনুযায়ী টাকা জমা দিয়ে ১৩ ডিজিটের আন্তর্জাতিক বারকোড ট্র্যাকিং নম্বর (যেমন EE123456789BD) যুক্ত রসিদ নিন।",
                tips="রসিদে উল্লিখিত টাকার বাইরে কোনো বকশিশ নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="আন্তর্জাতিক অনলাইন ট্র্যাকিং",
                description="https://bdpost.gov.bd এবং আন্তর্জাতিক UPU ওয়েবসাইটে ট্র্যাকিং নম্বর দিয়ে পার্সেলটি ফ্লাইটে ওঠা থেকে শুরু করে বিদেশি গ্রাহকের হাতে পৌঁছানো পর্যন্ত প্রতি মুহূর্তের আপডেট দেখুন।"
            )
        ],
        official_portal_url="https://bdpost.gov.bd",
        application_url="https://bdpost.gov.bd",
        citizen_charter_url="https://ptd.gov.bd",
        anti_broker_warning="সতর্কতা: ডাকঘর প্রাঙ্গণে কোনো কুরিয়ারের দালালের কথায় কান দেবেন না। সরকারি ইএমএস সেবা বেসরকারি কুরিয়ারের চেয়ে ৩ গুণ সাশ্রয়ী এবং বিশ্ব ডাক ইউনিয়ন দ্বারা আইনত সুরক্ষিত।"
    ))

    # 125. মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স
    services.append(CitizenService(
        service_id="bd-dnc-industrial-alcohol-chemical-license",
        title_bn="মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর: শিল্প কারখানায় রেকটিফাইড স্পিরিট ও কেমিক্যাল লাইসেন্স নির্দেশিকা",
        title_en="DNC Industrial Rectified Spirit & Alcohol Chemical License Guide",
        category="শিল্প ও বাণিজ্য লাইসেন্স",
        department_agency="মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ",
        summary="ফার্মাসিউটিক্যালস, পেইন্টস, পারফিউম ও কেমিক্যাল কারখানায় পণ্য উৎপাদনে দ্রাবক হিসেবে রেকটিফাইড স্পিরিট বা ইন্ডাস্ট্রিয়াল অ্যালকোহল ব্যবহার করতে মাদকদ্রব্য নিয়ন্ত্রণ আইন অনুযায়ী ব্যবহারিক পারমিট ও কোটা লাইসেন্স নিতে হয়। দালালরা বড় বড় শিল্পমালিকদের বিভ্রান্ত করে লাখ লাখ টাকা ঘুষ দাবি করে, অথচ সরাসরি স্বরাষ্ট্র মন্ত্রণালয় ও ডিএনসির অনলাইন পোর্টাল থেকে সরকারি চালানে স্বচ্ছভাবে এই লাইসেন্স সম্পন্ন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="ইন্ডাস্ট্রিয়াল রেকটিফাইড স্পিরিট ব্যবহার লাইসেন্স ফি",
                amount_bdt=25000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-২২০১-০০০১-১৮০১)",
                remarks="বাৎসরিক লাইসেন্স ফি ২৫,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="বার্ষিক কোটা নবায়ন ফি",
                amount_bdt=10000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বাৎসরিক নবায়নে ১০,০০০ টাকা।"
            )
        ],
        processing_time_sla="কেমিক্যাল ল্যাব টেস্ট ও কারখানা পরিদর্শনের পর ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="কারখানার ট্রেড লাইসেন্স, ই-টিন ও ভ্যাট রেজিস্ট্রেশন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ঔষধ প্রশাসন অধিদপ্তর (DGDA) বা বিএসটিআই কর্তৃক উৎপাদিত পণ্যের অনুমোদনপত্র",
                is_mandatory=True,
                format_type="সত্যায়িত কপি"
            ),
            RequiredDocument(
                name="উৎপাদন প্রক্রিয়ায় স্পিরিটের প্রয়োজনীয়তার কেমিক্যাল ফর্মুলা ও ইঞ্জিনিয়ারিং অনুপাত",
                is_mandatory=True,
                format_type="কেমিস্ট প্রত্যায়িত ফর্মুলা"
            ),
            RequiredDocument(
                name="নিরাপদ স্টোরেজ ও অগ্নিনির্বাপণ ব্যবস্থার বিবরণ",
                is_mandatory=True,
                format_type="নকশা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের পোর্টালে অনলাইন লাইসেন্স আবেদন",
                description="https://dnc.gov.bd পোর্টালে কারখানার বিবরণ ও কেমিক্যাল ড্রয়িংসহ আবেদন দাখিল করুন।",
                action_url="https://dnc.gov.bd",
                tips="দালাল ছাড়াই সরাসরি নিজের প্রতিষ্ঠানের নামে আবেদন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ডিএনসি উপ-পরিচালক ও রাসায়নিক পরীক্ষক দল কর্তৃক কারখানা পরিদর্শন",
                description="পরিদর্শন দল কারখানার স্টোরেজ ভল্ট ও ব্যবহৃত রেজিস্টার খাতা পরীক্ষা করবেন।",
                tips="অবৈধ অপব্যবহারের প্রমাণ পেলে ফৌজদারি মামলা হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="ট্রেজারি চালান জমা ও বাৎসরিক কোটা লাইসেন্স গ্রহণ",
                description="মন্ত্রণালয়ের অনুমোদন সাপেক্ষে চালানের মূল কপি জমা দিয়ে অফিশিয়াল পারমিট গ্রহণ করুন যার ভিত্তিতে সরকারি ডিস্টিলারি বা আমদানিকারক থেকে স্পিরিট সংগ্রহ করা যাবে।"
            )
        ],
        official_portal_url="https://dnc.gov.bd",
        application_url="https://dnc.gov.bd",
        citizen_charter_url="https://dnc.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ইন্ডাস্ট্রিয়াল অ্যালকোহলের অপব্যবহার বিশেষ ক্ষমতা আইনে মৃত্যুদণ্ড বা যাবজ্জীবনযোগ্য অপরাধ। লাইসেন্স পেতে কোনো দালালকে টাকা দেবেন না, সরকারি আইন অনুযায়ী ডিএনসির সাথে সরাসরি কাজ করুন।"
    ))

    return services
