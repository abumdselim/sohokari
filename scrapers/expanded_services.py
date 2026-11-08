from typing import List
from schema.models import CitizenService, ServiceFee, RequiredDocument, ApplicationStep

def get_expanded_citizen_services() -> List[CitizenService]:
    """
    Returns 28 expanded authoritative citizen services covering Court & Bail Petitions,
    Certified Copies of Judgments, Village Courts (Union Parishad 10/20 Taka Justice),
    Airport Customs Passenger Baggage Gold & Mobile Rules, 4% Subsidized Agri Loans,
    Combine Harvester Machinery Subsidy, Free Cattle Vaccination, PM Education Trust Grants,
    Forest Tree-Felling Transit Pass, e-Hajj, Postal Life Insurance, Orphan Capitation Grants,
    and Transgender Welfare. (Services 77 to 104).
    """
    services: List[CitizenService] = []

    # 77. আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-court-bail-petition-bond-submission",
        title_bn="আদালতে জামিন আবেদন (Bail Petition) ও জামিন বন্ড দাখিল নির্দেশিকা",
        title_en="Court Bail Petition & Bail Bond Submission Official Procedure Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="বাংলাদেশ সুপ্রিম কোর্ট ও জেলা জজ/ম্যাজিস্ট্রেট আদালত",
        summary="পুলিশ কাউকে গ্রেপ্তার করলে কিংবা আদালতে আত্মসমর্পণ করার পর জামিন লাভ করা নাগরিকের মৌলিক আইনি অধিকার। আদালতের বারান্দায় দালাল চক্র সাধারণ মানুষকে বলে '৫০,০০০ বা ১ লাখ টাকা না দিলে জামিন হবে না'। অথচ প্রকৃত সত্য হলো জামিনের জন্য সরকারি জামিন বন্ডের স্ট্যাম্প ফি মাত্র ৫০ থেকে ১০০ টাকা এবং জামিন মঞ্জুর হওয়ার পর আদালতের কোনো কর্মচারীকে এক টাকাও দিতে হয় না।",
        official_fees=[
            ServiceFee(
                category_name="জামিন আবেদন কোর্ট ফি স্ট্যাম্প",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প (আবেদন ফরমে সংযুক্ত)",
                remarks="ম্যাজিস্ট্রেট বা জজ কোর্টে জামিন আবেদনের কোর্ট ফি মাত্র ২০ টাকা।"
            ),
            ServiceFee(
                category_name="জামিন বন্ড স্ট্যাম্প ফি (Bail Bond Stamp)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="নন-জুডিশিয়াল স্ট্যাম্প / কোর্ট স্ট্যাম্প",
                remarks="আদালতের আদেশ অনুযায়ী ৫০ থেকে ১০০ টাকার বন্ড স্ট্যাম্প।"
            ),
            ServiceFee(
                category_name="উকালতনামা কোর্ট ফি",
                amount_bdt=30.0,
                vat_included=True,
                payment_method="উকালতনামা স্ট্যাম্প ও আইনজীবী সমিতি স্ট্যাম্প",
                remarks="আইনজীবী নিয়োগের মূল উকালতনামা।"
            )
        ],
        processing_time_sla="জামিন শুনানি সাপেক্ষে তাৎক্ষণিক (একই কার্যদিবসে আদেশ)",
        required_documents=[
            RequiredDocument(
                name="থানার এফআইআর (FIR) / এজাহার বা সিআর নালিশি মামলার অনুলিপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="আসামির জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="জামিনদারদের (Surety) জাতীয় পরিচয়পত্র ও স্থায়ী ঠিকানার প্রত্যয়ন",
                is_mandatory=True,
                format_type="সিলযুক্ত কপি"
            ),
            RequiredDocument(
                name="আইনজীবী কর্তৃক স্বাক্ষরিত জামিন পিটিশন ও উকালতনামা",
                is_mandatory=True,
                format_type="মূল আবেদন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="এজাহার ও ওকালতনামাসহ জামিন আবেদন প্রস্তুত",
                description="মামলার ধারা উল্লেখ করে বিজ্ঞ আইনজীবীর মাধ্যমে জামিন আবেদন প্রস্তুত করুন। অসচ্ছল হলে সরকারি লিগ্যাল এইড (১৬৪৩০) থেকে ফ্রি উকিল নিন।",
                tips="দালাল নয়, সরাসরি বারের সনদপ্রাপ্ত আইনজীবীর সাথে কথা বলুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="আদালতে জামিন শুনানি",
                description="বিজ্ঞ বিচারক মামলার নথি, ধারার গুরুত্ব ও জামিনের যুক্তি পর্যালোচনা করে জামিন মঞ্জুর বা নামঞ্জুর করবেন।",
                tips="কোনো পেশকার বা কর্মচারীকে টাকা দেওয়ার সুযোগ নেই।"
            ),
            ApplicationStep(
                step_number=3,
                title="জামিন বন্ড দাখিল ও রিলিজ অর্ডার (Release Order) প্রেরণ",
                description="জামিন মঞ্জুর হলে নির্ধারিত টাকার বন্ড স্ট্যাম্প ও স্থানীয় জামিনদারের এনআইডিসহ বন্ড জমা দিন। আদালত থেকে সরাসরি কারাগারে রিলিজ আদেশ পাঠানো হবে এবং আসামি মুক্ত হবেন।"
            )
        ],
        official_portal_url="https://supremecourt.gov.bd",
        application_url="https://supremecourt.gov.bd",
        citizen_charter_url="https://lawjusticediv.gov.bd",
        anti_broker_warning="সতর্কতা: কোর্ট প্রাঙ্গণে তথাকথিত মুহুরী বা দালালরা বিচারক ও পুলিশের নামে লাখ লাখ টাকা হাতিয়ে নেয়। জামিন কোনো কেনাবেচার জিনিস নয়; এটি আইনের ভিত্তিতে বিচারকের নিজস্ব এখতিয়ার। সরকারি লিগ্যাল এইড হটলাইন ১৬৪৩০ নম্বরে কল করে বিনা পয়সায় আইনি সুরক্ষা নিন।"
    ))

    # 78. আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-court-judgment-decree-certified-copy",
        title_bn="আদালতের মামলার রায়, আদেশ ও ডিক্রির সার্টিফাইড নকল উত্তোলন নির্দেশিকা",
        title_en="Court Judgment Order & Decree Certified Copy Extraction Official Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="আইন ও বিচার বিভাগ ও জেলা দায়রা জজ আদালত নকলখানা",
        summary="দেওয়ানি বা ফৌজদারি মামলার রায়, অন্তর্বর্তী আদেশ, চার্জশিট বা ডিক্রির সার্টিফাইড নকল উচ্চ আদালতে আপিল বা জমি খারিজের জন্য অপরিহার্য। নকলখানার দালালরা দ্রুত দেওয়ার নাম করে সাধারণ মানুষের কাছ থেকে ৫,০০০-১০,০০০ টাকা দাবি করে, অথচ ফোলিও অনুযায়ী সরকারি খরচ মাত্র কয়েকশত টাকা।",
        official_fees=[
            ServiceFee(
                category_name="নকলখানা তল্লাশি ফি (প্রতি মোকদ্দমা)",
                amount_bdt=10.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="মামলার রেকর্ড খোঁজার সরকারি ফি ১০ টাকা।"
            ),
            ServiceFee(
                category_name="প্রতি ফোলিও সরকারি কোর্ট ফি",
                amount_bdt=5.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="প্রতি পৃষ্ঠার অনুলিপিতে সরকার নির্ধারিত ফোলিও ফি।"
            ),
            ServiceFee(
                category_name="জরুরি নকল ফি",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="জরুরি ভিত্তিতে নকল উত্তোলনে প্রযোজ্য।"
            )
        ],
        processing_time_sla="জরুরি নকল: ৩ থেকে ৫ কার্যদিবস | সাধারণ নকল: ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আদালতের নির্ধারিত নকলের আবেদন ফরম (ফরম নং-সি)",
                is_mandatory=True,
                format_type="কোর্ট ফি স্ট্যাম্পযুক্ত মূল ফরম"
            ),
            RequiredDocument(
                name="মামলা নম্বর, পক্ষগণের নাম ও আদেশের তারিখ",
                is_mandatory=True,
                format_type="লিখিত বিবরণ"
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
                title="নকলখানা কাউন্টারে আবেদন দাখিল",
                description="জেলা জজ কোর্টের নকলখানায় গিয়ে নির্ধারিত ফরমে মামলা নম্বর ও আদেশের তারিখ লিখে কোর্ট ফি লাগিয়ে জমা দিন।",
                tips="দালাল এড়িয়ে সরাসরি নকলখানা রিসিভিং কাউন্টারে স্লিপ জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="ফোলিও হিসাব ও স্ট্যাম্প সংযোজন",
                description="নকলখানা নোটিশ বোর্ডে কত ফোলিও স্ট্যাম্প লাগবে তার তালিকা টানিয়ে দেবে। হিসাব অনুযায়ী ফোলিও জমা দিয়ে রসিদ নিন।",
                tips="রসিদে উল্লিখিত তারিখেই নকল পাওয়ার কথা।"
            ),
            ApplicationStep(
                step_number=3,
                title="সিলমোহরকৃত সার্টিফাইড নকল গ্রহণ",
                description="তুলনাকারী ও প্রধান নকলনবীশের সিলমোহর এবং স্বাক্ষরযুক্ত আসল সার্টিফাইড কপি বুঝে নিন।"
            )
        ],
        official_portal_url="https://lawjusticediv.gov.bd",
        application_url="https://supremecourt.gov.bd",
        citizen_charter_url="https://lawjusticediv.portal.gov.bd",
        anti_broker_warning="সতর্কতা: নকলখানা থেকে নকল নিতে কোনো কর্মচারীকে বাড়তি বকশিশ বা দালাল ধরা সম্পূর্ণ বেআইনি। কোনো কর্মকর্তা নকল আটকে রাখলে সরাসরি জেলা জজ আদালতের নাজির বা প্রশাসনিক কর্মকর্তার নিকট লিখিত অভিযোগ দিন।"
    ))

    # 79. থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা দায়ের নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-cr-case-magistrate-court-filing",
        title_bn="থানায় মামলা না নিলে সরাসরি ম্যাজিস্ট্রেট আদালতে সিআর মামলা (CR Case) দায়ের নির্দেশিকা",
        title_en="Magistrate Court Direct CR Complaint Case Filing Official Guide",
        category="আইন ও পুলিশ সেবা",
        department_agency="চিফ জুডিশিয়াল / মেট্রোপলিটন ম্যাজিস্ট্রেট আদালত",
        summary="কোনো অপরাধ সংঘটিত হওয়ার পর থানা যদি প্রভাবশালীদের চাপে মামলা (FIR) নিতে অস্বীকার করে, তবে যে-কোনো নাগরিক সরাসরি জুডিশিয়াল বা মেট্রোপলিটন ম্যাজিস্ট্রেট আদালতে নালিশি মামলা (Complaint Register - CR Case) দায়ের করতে পারেন। ম্যাজিস্ট্রেট নিজে জবানবন্দি গ্রহণ করে থানাকে মামলা রেকর্ডের নির্দেশ দেন বা পিবিআই/সিআইডিকে তদন্তের নির্দেশ দেন।",
        official_fees=[
            ServiceFee(
                category_name="সিআর মামলা নালিশি আরজি কোর্ট ফি",
                amount_bdt=200.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="ম্যাজিস্ট্রেট আদালতে নালিশি মামলার নির্ধারিত কোর্ট ফি মাত্র ২০০ টাকা।"
            )
        ],
        processing_time_sla="আবেদন করার একই দিনে ম্যাজিস্ট্রেটের নিকট জবানবন্দি গ্রহণ",
        required_documents=[
            RequiredDocument(
                name="লিখিত নালিশি দরখাস্ত (আরজি) - যাতে ঘটনার তারিখ, সময় ও সাক্ষীদের তালিকা থাকবে",
                is_mandatory=True,
                format_type="কোর্ট ফি যুক্ত মূল আরজি"
            ),
            RequiredDocument(
                name="বাদী ও সাক্ষীদের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="অপরাধের প্রমাণপত্র (মেডিকেল সার্টিফিকেট, অডিও, ভিডিও, ছবি, দলিলের কপি ইত্যাদি)",
                is_mandatory=False,
                format_type="সংযুক্ত প্রমাণ"
            ),
            RequiredDocument(
                name="থানায় মামলা করতে যাওয়ার বিবরণ বা থানায় সাধারণ ডায়েরির (GD) অনুলিপি",
                is_mandatory=False,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিজ্ঞ আইনজীবীর মাধ্যমে বা লিগ্যাল এইড দিয়ে আরজি প্রস্তুত",
                description="অভিযোগের বিস্তারিত উল্লেখ করে জুডিশিয়াল ম্যাজিস্ট্রেট আদালত বরাবর আরজি ড্রাফট করুন (অসচ্ছল হলে লিগ্যাল এইড ১৬৪৩০ থেকে ফ্রি আইনজীবী নিন)।",
                tips="ঘটনার তারিখ ও অপরাধের স্থান নির্ভুল থাকতে হবে।"
            ),
            ApplicationStep(
                step_number=2,
                title="ম্যাজিস্ট্রেটের খাস কামরা বা এজলাসে জবানবন্দি প্রদান (২০০ ধারা)",
                description="ম্যাজিস্ট্রেট বাদীর জবানবন্দি নিজে লিখে নেবেন এবং বাদীর স্বাক্ষর গ্রহণ করবেন।",
                tips="সত্য ঘটনা নির্ভয়ে বিচারকের সামনে বলুন।"
            ),
            ApplicationStep(
                step_number=3,
                title="আদালতের আদেশ (তদন্ত বা সমন জারি)",
                description="ম্যাজিস্ট্রেট সন্তুষ্ট হলে আসামির বিরুদ্ধে সমন/গ্রেপ্তারি পরোয়ানা জারি করবেন কিংবা থানাকে এজাহার হিসেবে গণ্য করতে বা পিবিআইকে তদন্তের নির্দেশ দেবেন।"
            )
        ],
        official_portal_url="https://lawjusticediv.gov.bd",
        application_url="https://nlaso.gov.bd",
        citizen_charter_url="https://lawjusticediv.portal.gov.bd",
        anti_broker_warning="সতর্কতা: থানা মামলা না নিলেও আপনার ন্যায়বিচার পাওয়ার পথ বন্ধ হয় না। কোনো মধ্যস্থতাকারীকে টাকা না দিয়ে সোজা আদালতে গিয়ে ২০০ টাকার কোর্ট ফি দিয়ে সিআর মামলা দায়ের করুন।"
    ))

    # 80. জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-section-144-145-land-dispute-prevention",
        title_bn="জমি বেদখল রোধ ও শান্তিভঙ্গ প্রতিকারে ১৪৪ ও ১৪৫ ধারা আবেদন নির্দেশিকা",
        title_en="Prevention of Land Dispossession Section 144 & 145 CrPC Official Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালত, জেলা প্রশাসন",
        summary="নিজের বৈধ জমিতে কেউ অবৈধভাবে জোরপূর্বক দখল নেওয়ার চেষ্টা করলে কিংবা শান্তিভঙ্গ ও রক্তপাতের আশঙ্কা দেখা দিলে অতিরিক্ত জেলা ম্যাজিস্ট্রেট (ADM) আদালতে ফৌজদারি কার্যবিধির ১৪৪ ও ১৪৫ ধারায় আবেদন করা যায়। আদালত তাৎক্ষণিক পুলিশকে শান্তি শৃঙ্খলা বজায় রাখার এবং জমিতে উভয় পক্ষের স্থিতাবস্থা (Status Quo) বজায় রাখার আদেশ দেন।",
        official_fees=[
            ServiceFee(
                category_name="১৪৪/১৪৫ ধারা আবেদন কোর্ট ফি",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="কোর্ট ফি স্ট্যাম্প",
                remarks="এডিসি/এডিএম আদালতে আবেদনের কোর্ট ফি মাত্র ৫০ টাকা।"
            )
        ],
        processing_time_sla="জরুরি অন্তর্বর্তী আদেশ: তাৎক্ষণিক (২৪ থেকে ৪৮ ঘণ্টা) | চূড়ান্ত নিষ্পত্তি: ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর স্বত্ব ও দখলের প্রমাণপত্র (মূল দলিল ও নামজারি খতিয়ান)",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের রশিদ",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="বিপক্ষ কর্তৃক জমি দখলের হুমকি সংক্রান্ত জিডি (GD) কপি (যদি থাকে)",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বিরোধীয় জমির তফসিল ও চৌহদ্দি সম্বলিত আবেদনপত্র",
                is_mandatory=True,
                format_type="কোর্ট ফি যুক্ত আবেদন"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="এডিএম আদালতে ৫০ টাকার কোর্ট ফি দিয়ে আবেদন দাখিল",
                description="জেলা প্রশাসকের কার্যালয়ে অতিরিক্ত জেলা ম্যাজিস্ট্রেট কোর্টে বিরোধীয় জমির বিবরণ দিয়ে পিটিশন দাখিল করুন।",
                tips="দালাল ছাড়াই সরাসরি ডিসি অফিসের এডিএম কোর্ট কাউন্টারে জমা দেওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="থানা পুলিশ ও এসিল্যান্ডের নিকট প্রতিবেদন তলব",
                description="আদালত সংশ্লিষ্ট থানার ওসিকে শান্তি বজায় রাখতে নোটিশ জারি করার নির্দেশ দেবেন এবং এসিল্যান্ডকে জমির বাস্তব দখল যাচাইয়ের আদেশ দেবেন।",
                tips="পুলিশ কোনো পক্ষকে জমিতে জোর করে তুলতে পারবে না।"
            ),
            ApplicationStep(
                step_number=3,
                title="উভয় পক্ষের শুনানির পর চূড়ান্ত আদেশ",
                description="পুলিশ ও এসিল্যান্ডের রিপোর্টের ভিত্তিতে আদালত রায় দেবেন এবং প্রকৃত দখলকারীকে দেওয়ানি আদালতের চূড়ান্ত রায় না হওয়া পর্যন্ত জমিতে শান্তিতে থাকার সুরক্ষা দেবেন।"
            )
        ],
        official_portal_url="https://minland.gov.bd",
        application_url="https://land.gov.bd",
        citizen_charter_url="https://mopa.gov.bd",
        anti_broker_warning="সতর্কতা: জমিতে দালাল বা ভূমিদস্যুরা পেশিশক্তি দেখালে আইন নিজের হাতে তুলে নেবেন না। ১৪৪/১৪৫ ধারার আইনি আবেদন করে পুলিশি প্রোটেকশন নিন। জরুরি বিপদে পুলিশ কন্ট্রোল রুম ৯৯৯-এ তাৎক্ষণিক কল দিন।"
    ))

    # 81. কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর নিয়মাবলী
    services.append(CitizenService(
        service_id="bd-prison-visit-prisoner-vakalatnama",
        title_bn="কারাগারে বন্দীর সাথে সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সরকারি নির্দেশিকা",
        title_en="Prisoner Visitation & Vakalatnama Signing Official Procedure Guide",
        category="আইন ও বিচারিক সেবা",
        department_agency="কারা অধিদপ্তর, স্বরাষ্ট্র মন্ত্রণালয়",
        summary="কারাগারে আটক কোনো হাজতি বা কয়েদি আত্মীয়ের সাথে প্রতি ১৫ দিনে একবার স্বজনদের সাক্ষাৎ করা এবং আইনজীবী নিয়োগের জন্য ওকালতনামা স্বাক্ষর করানো বন্দীর আইনগত অধিকার। জেল গেটের সামনে সংঘবদ্ধ দালালরা ১,০০০ থেকে ৫,০০০ টাকা দাবি করে, অথচ সরকারি নিয়মে সাক্ষাৎ এবং ওকালতনামায় টিপসই নেওয়ার জন্য কোনো ফি দিতে হয় না (সম্পূর্ণ বিনামূল্যে)।",
        official_fees=[
            ServiceFee(
                category_name="কারাগারে সাক্ষাৎ আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="কারাগারে বন্দীর সাথে সাক্ষাতের কোনো সরকারি ফি নেই।"
            ),
            ServiceFee(
                category_name="ওকালতনামায় টিপসই বা স্বাক্ষর সত্যায়ন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="জেল সুপার বা জেলার কর্তৃক ওকালতনামা স্বাক্ষরে কোনো অর্থ নেওয়া সম্পূর্ণ অবৈধ।"
            )
        ],
        processing_time_sla="আবেদন জমা দেওয়ার দিনেই সাক্ষাৎ ও ওকালতনামা স্বাক্ষর সম্পন্ন",
        required_documents=[
            RequiredDocument(
                name="সাক্ষাৎপ্রার্থী স্বজনের জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="মূল কপি ও ফটোকপি"
            ),
            RequiredDocument(
                name="বন্দীর নাম, পিতার নাম, মামলার নম্বর ও হাজতি/কয়েদি নম্বর",
                is_mandatory=True,
                format_type="লিখিত তথ্য"
            ),
            RequiredDocument(
                name="আইনজীবী সমিতি কর্তৃক সরবরাহকৃত খালি উকালতনামা (ওকালতনামার ক্ষেত্রে)",
                is_mandatory=False,
                format_type="স্ট্যাম্পযুক্ত উকালতনামা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="জেল গেটের নির্ধারিত কাউন্টারে সাক্ষাতের আবেদন স্লিপ জমা",
                description="সকাল ৯টা থেকে দুপুর ২টার মধ্যে কারাগারের মূল কাউন্টারে গিয়ে বন্দীর নাম ও সম্পর্ক লিখে স্লিপ জমা দিয়ে টোকেন গ্রহণ করুন।",
                tips="গেট প্রাঙ্গণে ঘুরে বেড়ানো কোনো দালাল বা চা দোকানিকে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="আইনজীবীর সহকারী বা স্বজন কর্তৃক ওকালতনামা জমা",
                description="ওকালতনামায় স্বাক্ষর করাতে চাইলে নির্ধারিত কাউন্টারে উকালতনামা জমা দিন। ডেপুটি জেলার ভেতরে গিয়ে বন্দীর স্বাক্ষর নিয়ে ফেরত দেবেন।",
                tips="স্বাক্ষরের জন্য কাউকে নগদ টাকা দেওয়া জেল কোড অনুযায়ী শাস্তিযোগ্য অপরাধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="ইন্টারকম বা সাক্ষাৎ কক্ষে কথা বলা",
                description="নিরাপত্তা তল্লাশি শেষে বন্দীর সাথে দেখা করুন। অনুমোদিত শুকনো খাবার ছাড়া কোনো নগদ টাকা, মোবাইল বা ইলেকট্রনিক্স ভেতরে নেওয়া সম্পূর্ণ নিষিদ্ধ।"
            )
        ],
        official_portal_url="https://prison.gov.bd",
        application_url="https://prison.gov.bd",
        citizen_charter_url="https://prison.portal.gov.bd",
        anti_broker_warning="সতর্কতা: জেল গেটে কোনো কারারক্ষী বা দালাল দেখা করানোর নামে বকশিশ বা টাকা চাইলে সরাসরি জেল সুপার বা জেলার-এর অফিসে জানান কিংবা দুর্নীতি দমন কমিশন (১০৬) এ ফোন দিন।"
    ))

    # 82. গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-village-court-union-parishad-dispute",
        title_bn="গ্রাম আদালত: মাত্র ১০/২০ টাকায় পারিবারিক ও জমিজমা বিরোধ নিষ্পত্তি নির্দেশিকা",
        title_en="Village Court Union Parishad 10/20 Taka Justice Dispute Resolution Guide",
        category="স্থানীয় সরকার ও বিচারিক সেবা",
        department_agency="স্থানীয় সরকার বিভাগ, এলজিইডি ও ইউনিয়ন পরিষদ",
        summary="আদালতে উকিলের পেছনে বছরের পর বছর লাখ লাখ টাকা খরচ না করে সাধারণ মানুষ তাদের বাড়ির কাছে ইউনিয়ন পরিষদে 'গ্রাম আদালত' (Village Court)-এর মাধ্যমে মাত্র ১০ টাকা বা ২০ টাকা ফি দিয়ে পারিবারিক, জমিজমা ও ছোটখাটো ফৌজদারি বিরোধের সর্বোচ্চ ৭৫,০০০ থেকে ৩,০০,০০০ টাকা পর্যন্ত আইনি প্রতিকার পেতে পারেন। গ্রাম আদালতের রায় সরকারি ডিক্রির সমান কার্যকর।",
        official_fees=[
            ServiceFee(
                category_name="গ্রাম আদালতে ফৌজদারি মামলা দায়ের ফি",
                amount_bdt=10.0,
                vat_included=True,
                payment_method="ইউপি গ্রাম আদালত সরকারি রশিদ",
                remarks="মারামারি, গালিগালাজ বা সাধারণ আঘাতের অভিযোগের ফি মাত্র ১০ টাকা।"
            ),
            ServiceFee(
                category_name="গ্রাম আদালতে দেওয়ানি মামলা দায়ের ফি",
                amount_bdt=20.0,
                vat_included=True,
                payment_method="ইউপি গ্রাম আদালত সরকারি রশিদ",
                remarks="জমিজমার সীমানা, বকেয়া পাওনা টাকা বা মালামাল উদ্ধারের ফি মাত্র ২০ টাকা।"
            )
        ],
        processing_time_sla="আবেদন থেকে বিচার নিষ্পত্তি সর্বোচ্চ ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="গ্রাম আদালতে ইউনিয়ন পরিষদ চেয়ারম্যান বরাবর লিখিত আবেদনপত্র",
                is_mandatory=True,
                format_type="সাদা কাগজে লিখিত বা নির্ধারিত ফরম"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বিরোধ সংক্রান্ত প্রমাণপত্র (জমির দলিল/রশিদ/চিকিৎসার প্রেসক্রিপশন)",
                is_mandatory=False,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="১০ বা ২০ টাকার ফি দিয়ে ইউপি সচিবের কাছে আবেদন জমা",
                description="ইউনিয়ন পরিষদে গিয়ে ১০ টাকা (ফৌজদারি) বা ২০ টাকা (দেওয়ানি) ফি দিয়ে মামলা দায়ের করে রসিদ নিন।",
                tips="কোনো উকিল বা দালাল লাগে না।"
            ),
            ApplicationStep(
                step_number=2,
                title="গ্রাম আদালত গঠন ও সদস্য মনোনয়ন",
                description="ইউপি চেয়ারম্যানের নেতৃত্বে উভয় পক্ষ থেকে ২ জন করে মোট ৪ জন সদস্য (একজন মেম্বার ও একজন গণ্যমান্য ব্যক্তি) নিয়ে ৫ সদস্যের গ্রাম আদালত গঠিত হবে।",
                tips="উভয় পক্ষ নিজের পছন্দের প্রতিনিধি দিতে পারেন।"
            ),
            ApplicationStep(
                step_number=3,
                title="শুনানি ও আনুষ্ঠানিক রায় ঘোষণা",
                description="উন্মুক্ত আদালতে সাক্ষ্যগ্রহণ শেষে গ্রাম আদালত রায় দেবে এবং ক্ষতিপূরণের টাকা আদায় করে বাদীকে বুঝিয়ে দেওয়া হবে। না মানলে তা উচ্চ আদালতে ডিক্রি জারির সমান কার্যকর।"
            )
        ],
        official_portal_url="https://lgd.gov.bd",
        application_url="https://villagecourts.gov.bd",
        citizen_charter_url="https://lgd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: গ্রাম আদালত সাধারণ মানুষের কাছে বিচার পৌঁছে দেওয়ার জন্য সরকারের এক যুগান্তকারী ব্যবস্থা। ইউপি চেয়ারম্যান বা সচিব ২০ টাকার বেশি এক পয়সাও ফি দাবি করতে পারেন না। অতিরিক্ত ফি চাইলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা (UNO) কার্যালয়ে জানান।"
    ))

    # 83. বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড
    services.append(CitizenService(
        service_id="bd-customs-passenger-baggage-rules",
        title_bn="বিমানবন্দর ব্যাগেজ রুলস: স্বর্ণ, মোবাইল ও ব্যাগেজের শুল্কমুক্ত সীমা ও কাস্টমস গাইড",
        title_en="Airport Baggage Rules Gold Mobile & Luggage Duty Free Allowance Guide",
        category="অর্থ ও শুল্ক সেবা",
        department_agency="কাস্টমস ও জাতীয় রাজস্ব বোর্ড (NBR)",
        summary="বিদেশ থেকে আগত প্রবাসী ও যাত্রীদের সাথে আনা স্বর্ণালংকার, মোবাইল ও ইলেকট্রনিক্স নিয়ে বিমানবন্দরে প্রায়ই কাস্টমস ও দালালের অযথা হয়রানির শিকার হতে হয়। ব্যাগেজ রুলস অনুযায়ী একজন যাত্রী ১১৭ গ্রাম (১০ ভরি) পর্যন্ত স্বর্ণালংকার সম্পূর্ণ শুল্কমুক্তভাবে আনতে পারেন এবং সর্বোচ্চ ২৩৪ গ্রাম (২০ ভরি) স্বর্ণবার সরকার নির্ধারিত শুল্ক দিয়ে বৈধভাবে আনতে পারেন। এছাড়া ২টি সচল মোবাইল শুল্কমুক্ত।",
        official_fees=[
            ServiceFee(
                category_name="স্বর্ণালংকার (সর্বোচ্চ ১১৭ গ্রাম বা ১০ ভরি পর্যন্ত)",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ শুল্কমুক্ত (০ টাকা)",
                remarks="ব্যক্তিগত ব্যবহারের স্বর্ণালংকারে কোনো ট্যাক্স নেই।"
            ),
            ServiceFee(
                category_name="স্বর্ণের বার শুল্ক (প্রতি ১১.৬৬৪ গ্রাম বা ১ ভরি প্রতি)",
                amount_bdt=4000.0,
                vat_included=True,
                payment_method="এয়ারপোর্ট কাস্টমস ক্যাশ কাউন্টার রশিদ",
                remarks="সর্বোচ্চ ২০ ভরি পর্যন্ত আনা যায়, প্রতি ভরিতে ৪,০০০ টাকা শুল্ক।"
            ),
            ServiceFee(
                category_name="শুল্কমুক্ত মোবাইল ফোন",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ শুল্কমুক্ত (০ টাকা)",
                remarks="ব্যক্তিগত ব্যবহারের সর্বোচ্চ ২টি মোবাইল সম্পূর্ণ শুল্কমুক্ত।"
            )
        ],
        processing_time_sla="বিমানবন্দর কাস্টমস গ্রিন চ্যানেলে তাৎক্ষণিক ক্লিয়ারেন্স",
        required_documents=[
            RequiredDocument(
                name="যাত্রীর মূল পাসপোর্ট ও আগমনী বোর্ডিং পাস",
                is_mandatory=True,
                format_type="মূল কপি"
            ),
            RequiredDocument(
                name="স্বর্ণ বার থাকলে কাস্টমস ডিক্লারেশন ফরম পূরণ",
                is_mandatory=False,
                format_type="ফ্লাইটে বা এয়ারপোর্টে সরবরাহকৃত ফরম"
            ),
            RequiredDocument(
                name="বিদেশ থেকে পণ্য ক্রয়ের মানি রিসিট (যদি থাকে)",
                is_mandatory=False,
                format_type="রশিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="শুল্কমুক্ত সীমার মধ্যে থাকলে গ্রিন চ্যানেল (Green Channel) ব্যবহার",
                description="আপনার সাথে যদি শুল্কযোগ্য পণ্য না থাকে তবে কোনো কাস্টমস অফিসারকে টাকা না দিয়ে সরাসরি গ্রিন চ্যানেল দিয়ে বের হয়ে যান।",
                tips="দালাল বা কোনো ব্যক্তির কথায় ভয় পাবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="স্বর্ণ বার বা শুল্কযোগ্য পণ্য থাকলে রেড চ্যানেলে ডিক্লারেশন",
                description="স্বর্ণের বার থাকলে রেড চ্যানেলে গিয়ে কাস্টমস অফিসারের কাছে ডিক্লেয়ার করুন এবং সরকারি রসিদে প্রতি ভরিতে ৪,০০০ টাকা শুল্ক পরিশোধ করুন।",
                tips="অবশ্যই কাস্টমসের সিলযুক্ত অফিশিয়াল ব্যাংক রসিদ নেবেন।"
            ),
            ApplicationStep(
                step_number=3,
                title="কাস্টমস ক্লিয়ারেন্স ও লাগেজ বুঝে নেওয়া",
                description="রসিদ পাওয়ার পর আপনার ব্যাগেজ নিয়ে বিমানবন্দরে কোনো উৎকোচ ছাড়াই নিরাপদে বের হয়ে আসুন।"
            )
        ],
        official_portal_url="https://nbr.gov.bd",
        application_url="https://customs.gov.bd",
        citizen_charter_url="https://customs.gov.bd",
        anti_broker_warning="সতর্কতা: বিমানবন্দরে কোনো ট্রলি বয়, দালাল বা অসাধু কর্মকর্তা লাগেজ আটকে দেওয়ার ভয় দেখিয়ে টাকা চাইলে সোজা এয়ারপোর্ট আর্মড পুলিশ ব্যাটালিয়ন (APBn) বা বিমানবন্দর ম্যাজিস্ট্রেট হেল্পডেস্কে জানান।"
    ))

    # 84. সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-ehajj-pilgrim-registration-fraud-prevention",
        title_bn="সরকারি ও বেসরকারি হজ নিবন্ধন এবং এজেন্সি প্রতারণা প্রতিরোধ নির্দেশিকা",
        title_en="Government & Private Hajj Pilgrim Registration & Fraud Prevention Guide",
        category="ধর্মীয় বিষয় ও হজ সেবা",
        department_agency="ধর্ম বিষয়ক মন্ত্রণালয়",
        summary="পবিত্র হজ পালনে ইচ্ছুক ধর্মপ্রাণ মুসলমানদের ভুয়া ট্রাভেল এজেন্সির প্রতারণা থেকে বাঁচাতে সরকার 'e-Hajj' অনলাইন পোর্টাল চালু করেছে। সরকারি ও অনুমোদিত বেসরকারি উভয় প্যাকেজের প্রাক-নিবন্ধন ও চূড়ান্ত নিবন্ধন সরাসরি ব্যাংকের মাধ্যমে ধর্ম মন্ত্রণালয়ের কেন্দ্রীয় সার্ভারে জমা হয়। কোনো মধ্যস্বত্বভোগী বা এজেন্সিকে অতিরিক্ত অর্থ দেওয়া নিষেধ।",
        official_fees=[
            ServiceFee(
                category_name="হজ প্রাক-নিবন্ধন (Pre-registration) সরকারি ফি",
                amount_bdt=30725.0,
                vat_included=True,
                payment_method="ব্যাংক চালান / পে-অর্ডার",
                remarks="প্রাক-নিবন্ধন ফি সরকার নির্ধারিত এবং ব্যাংকের মাধ্যমে জমা।"
            ),
            ServiceFee(
                category_name="হজ প্যাকেজ চূড়ান্ত সরকারি ফি (বছর অনুযায়ী প্যাকেজ ঘোষিত)",
                amount_bdt=450000.0,
                vat_included=True,
                payment_method="ব্যাংক ডিপোজিট",
                remarks="মন্ত্রণালয় ঘোষিত অফিশিয়াল প্যাকেজ রেট।"
            )
        ],
        processing_time_sla="প্রাক-নিবন্ধন তাৎক্ষণিক | কোটা অনুযায়ী বছরভিত্তিক চূড়ান্ত অনুমোদন",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর মেশিন রিডেবল পাসপোর্ট বা ই-পাসপোর্ট (ন্যূনতম ৬ মাস মেয়াদ থাকতে হবে)",
                is_mandatory=True,
                format_type="মূল কপি ও ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পাসপোর্ট সাইজ রঙিন ছবি (সাদা ব্যাকগ্রাউন্ড)",
                is_mandatory=True,
                format_type="৪ কপি"
            ),
            RequiredDocument(
                name="স্বাস্থ্য পরীক্ষার সনদ ও টিকাদান কার্ড (মেনিনজাইটিস ও ইনফ্লুয়েঞ্জা)",
                is_mandatory=True,
                format_type="সরকারি মেডিকেল ক্যাম্পের মূল কার্ড"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ই-হজ পোর্টালে বা অনুমোদিত ব্যাংকে প্রাক-নিবন্ধন",
                description="https://hajj.gov.bd পোর্টালে এনআইডি ও পাসপোর্ট দিয়ে প্রাক-নিবন্ধন সম্পন্ন করে ইউনিক সিরিয়াল নম্বর নিন।",
                action_url="https://hajj.gov.bd",
                tips="অনুমোদিত হজ এজেন্সির তালিকা পোর্টালে দেখে নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="মন্ত্রণালয় কর্তৃক নির্ধারিত সময়সীমার মধ্যে প্যাকেজ নির্বাচন ও ফি পরিশোধ",
                description="হজের সিরিয়াল এলে সরকারি প্যাকেজ বা অনুমোদিত বেসরকারি এজেন্সির ব্যাংক একাউন্টে টাকা জমা দিন।",
                tips="ব্যক্তিগত কোনো এজেন্টের হাতে নগদে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="পিলগ্রিম আইডি (PID) ও ভিসা গ্রহণ",
                description="টাকা জমা হলে ধর্ম মন্ত্রণালয় পিলগ্রিম আইডি ইস্যু করবে এবং সৌদি হজ ও ওমরাহ মন্ত্রণালয় থেকে ইলেকট্রনিক হজ ভিসা সম্পন্ন হবে।"
            )
        ],
        official_portal_url="https://mora.gov.bd",
        application_url="https://hajj.gov.bd",
        citizen_charter_url="https://mora.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ভুয়া এজেন্সির প্রলোভনে পড়ে টিকিট না পাওয়া বা মক্কায় গিয়ে রাস্তায় রাত কাটানোর ঘটনা রোধে শুধুমাত্র সরকার অনুমোদিত লাইসেন্সধারী এজেন্সির সাথে চুক্তি করুন। কোনো প্রতারণা হলে হজ কল সেন্টার ১৬১৩৬ নম্বরে অভিযোগ দিন।"
    ))

    # 85. ১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-agri-crop-loan-4-percent-concession",
        title_bn="১০ টাকার ব্যাংক হিসাব ও ৪% রেয়াতি সুদে সরকারি কৃষি ফসল ঋণ নির্দেশিকা",
        title_en="10 Taka Bank Account & 4% Concessional Interest Agri Crop Loan Guide",
        category="কৃষি ও খাদ্য নিরাপত্তা",
        department_agency="বাংলাদেশ ব্যাংক ও রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহ",
        summary="কৃষকদের মহাজনী সুদের হাত থেকে বাঁচাতে সরকার মাত্র ১০ টাকায় ব্যাংক অ্যাকাউন্ট খোলার সুযোগ এবং ডাল, তেলবীজ, মসলা ও ভুট্টা চাষের জন্য মাত্র ৪% রেয়াতি সুদে বিশেষ কৃষি ঋণ প্রদান করে। ব্যাংক কর্মকর্তা বা স্থানীয় দালালরা ঋণ পাইয়ে দেওয়ার নামে পারসেন্টেজ বা ঘুষ চাইতে পারে না।",
        official_fees=[
            ServiceFee(
                category_name="কৃষক ব্যাংক একাউন্ট খোলার প্রাথমিক জমা",
                amount_bdt=10.0,
                vat_included=True,
                payment_method="নগদ ১০ টাকা",
                remarks="১০ টাকার কৃষক একাউন্টে কোনো বাৎসরিক রক্ষণাবেক্ষণ চার্জ নেই।"
            ),
            ServiceFee(
                category_name="ঋণ আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="কৃষি ঋণ আবেদনের জন্য কোনো ফি লাগে না।"
            ),
            ServiceFee(
                category_name="রেয়াতি সুদের হার (ডাল, তেলবীজ ও মসলা)",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="বার্ষিক মাত্র ৪% সরল সুদ",
                remarks="বাকি সুদ সরকার ভর্তুকি হিসেবে ব্যাংককে প্রদান করে।"
            )
        ],
        processing_time_sla="আবেদন ও সরেজমিন জমি যাচাইয়ের পর ৭ থেকে ১০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা কৃষি সম্প্রসারণ অধিদপ্তর কর্তৃক প্রদত্ত কৃষি কার্ড (Krishi Card)",
                is_mandatory=True,
                format_type="মূল কার্ড ও ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="জমির মালিকানার দলিল/পর্চা অথবা বর্গা চাষের ক্ষেত্রে জমির মালিকের সম্মতিপত্র",
                is_mandatory=True,
                format_type="ফটোকপি বা বর্গা প্রত্যয়ন"
            ),
            RequiredDocument(
                name="ইউপি চেয়ারম্যান বা মেম্বারের প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="নিকটস্থ কৃষি ব্যাংক বা সোনালী/জনতা ব্যাংকের শাখায় আবেদন",
                description="কৃষি কার্ড ও এনআইডিসহ সরাসরি ব্যাংকের ফিল্ড অফিসার বা লোন ম্যানেজারের সাথে দেখা করুন।",
                tips="ব্যাংকের বাইরে থাকা কোনো মধ্যস্বত্বভোগীর সাথে কথা বলবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ফসলি জমি সরেজমিনে ফিল্ড অফিসার কর্তৃক পরিদর্শন",
                description="ব্যাংক কর্মকর্তা জমিতে গিয়ে আবাদযোগ্য ফসলের এলাকা দেখে ঋণের পরিমাণ অনুমোদন করবেন।",
                tips="পরিদর্শনের নামে কোনো টাকা দেওয়া নিষেধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি ১০ টাকার একাউন্টে ঋণের অর্থ প্রদান",
                description="অনুমোদিত ঋণের অর্থ সরাসরি কৃষকের ব্যাংক হিসাবে জমা হবে এবং ফসল ওঠার পর মাত্র ৪% সুদে কিস্তি পরিশোধের সুযোগ মিলবে।"
            )
        ],
        official_portal_url="https://bb.org.bd",
        application_url="https://krishi.gov.bd",
        citizen_charter_url="https://moa.gov.bd",
        anti_broker_warning="সতর্কতা: কৃষি ঋণ কৃষকের রাষ্ট্রীয় অধিকার। কোনো ব্যাংক ম্যানেজার বা ফিল্ড সুপারভাইজার ঋণের টাকা ছাড়ার বিনিময়ে ঘুষ চাইলে সরাসরি বাংলাদেশ ব্যাংকের ফাইনান্সিয়াল ইন্টিগ্রিটি হেল্পলাইন ১৬২৩৬ নম্বরে অভিযোগ দিন।"
    ))

    # 86. ৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dae-subsidized-farm-machinery-grant",
        title_bn="৫০% থেকে ৭০% সরকারি ভর্তুকিতে আধুনিক কৃষি যন্ত্রপাতি (হারভেস্টার) প্রাপ্তি নির্দেশিকা",
        title_en="50% to 70% Subsidized Farm Machinery Combine Harvester Grant Guide",
        category="কৃষি ও খাদ্য নিরাপত্তা",
        department_agency="কৃষি সম্প্রসারণ অধিদপ্তর (DAE), কৃষি মন্ত্রণালয়",
        summary="কৃষিতে শ্রমিক সংকট দূর করতে সরকার কম্বাইন হারভেস্টার, রাইস ট্রান্সপ্লান্টার ও রিপার কেনার জন্য হাওর ও উপকূলীয় এলাকায় ৭০% এবং সমতল এলাকায় ৫০% পর্যন্ত সরাসরি নগদ ভর্তুকি প্রদান করে। ৩০ লাখ টাকার একটি হারভেস্টার মাত্র ৯ থেকে ১৫ লাখ টাকায় কেনা সম্ভব। দালাল চক্র কৃষকদের নাম দিয়ে যন্ত্রপাতি তুলে বেশি দামে বিক্রি করার অপচেষ্টা চালায়।",
        official_fees=[
            ServiceFee(
                category_name="ভর্তুকি আবেদন ফরম ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="উপজেলা কৃষি অফিসে আবেদন সম্পূর্ণ ফ্রি।"
            ),
            ServiceFee(
                category_name="কৃষকের নিজস্ব প্রদেয় অংশ",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="অনুমোদিত ব্যাংকে পে-অর্ডার",
                remarks="যন্ত্রপাতির দামের সমতলে ৫০% এবং হাওরে ৩০% অংশ কৃষক পরিশোধ করবেন।"
            )
        ],
        processing_time_sla="উপজেলা ও জেলা কৃষি কমিটির যাচাই সাপেক্ষে ৩০ থেকে ৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="উপজেলা কৃষি কার্যালয়ের নির্ধারিত আবেদন ফরম",
                is_mandatory=True,
                format_type="মূল ফরম"
            ),
            RequiredDocument(
                name="আবেদনকারী কৃষক বা কৃষক দলের কৃষি কার্ড ও জাতীয় পরিচয়পত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ন্যূনতম আবাদযোগ্য জমির পরিমাণ বা কৃষক দলের চুক্তিনামা",
                is_mandatory=True,
                format_type="প্রত্যয়ন"
            ),
            RequiredDocument(
                name="যন্ত্রপাতি রাখার উপযোগী গ্যারেজ বা জায়গার বিবরণ",
                is_mandatory=True,
                format_type="বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা কৃষি অফিসার (UAO) বরাবর আবেদন",
                description="কৃষি সম্প্রসারণ অধিদপ্তরের সমন্বিত কৃষি যন্ত্রায়করণ প্রকল্পের আওতায় ফরমে আবেদন দাখিল করুন।",
                action_url="https://dae.gov.bd",
                tips="কৃষক দল বা সমবায় হিসেবে আবেদন করলে অগ্রাধিকার পাওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা কৃষি পুনর্বাসন ও বাস্তবায়ন কমিটি কর্তৃক যাচাই",
                description="কমিটি আবেদনকারীর জমি ও দক্ষতা সরেজমিনে যাচাই করে চূড়ান্ত তালিকা জেলা কমিটিতে পাঠাবে।",
                tips="তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="ভর্তুকির অর্থ সমন্বয় ও যন্ত্রপাতি হস্তান্তর",
                description="অনুমোদিত কোম্পানি থেকে যন্ত্রপাতির ৫০% কৃষক জমা দিলে বাকি ৫০% বা ৭০% অর্থ সরকার পরিশোধ করে এবং আনুষ্ঠানিকভাবে হারভেস্টার হস্তান্তর করা হয়।"
            )
        ],
        official_portal_url="https://dae.gov.bd",
        application_url="https://dae.gov.bd",
        citizen_charter_url="https://moa.portal.gov.bd",
        anti_broker_warning="সতর্কতা: কোনো অসাধু ব্যক্তি বা দালাল ভর্তুকির হারভেস্টার বিক্রি করে দেওয়া বা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে জেলা প্রশাসক বা কৃষি মন্ত্রণালয়ের নিয়ন্ত্রণ কক্ষে অবহিত করুন।"
    ))

    # 87. উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dls-free-cattle-vaccination-deworming",
        title_bn="উপজেলা প্রাণিসম্পদ দপ্তর থেকে বিনামূল্যে গবাদিপশু ও হাঁস-মুরগির সরকারি টিকা নির্দেশিকা",
        title_en="Upazila Livestock Office Free Cattle Vaccination & Deworming Guide",
        category="প্রাণিসম্পদ ও কৃষি",
        department_agency="প্রাণিসম্পদ অধিদপ্তর (DLS), মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়",
        summary="গরুর ক্ষুরারোগ (FMD), তড়কা, বাদলা, বাদলা-গলাফুলা এবং হাঁস-মুরগির রানীক্ষেত ও ডাকপ্লেগ রোগ প্রতিরোধে সরকার উপজেলা প্রাণিসম্পদ হাসপাতালের মাধ্যমে নিয়মিত বিনামূল্যে সরকারি ভ্যাকসিন সরবরাহ করে। স্থানীয় পল্লী পশু চিকিৎসক বা দালালরা এই সরকারি ফ্রি ভ্যাকসিন বিক্রি করে টাকা হাতিয়ে নেয়।",
        official_fees=[
            ServiceFee(
                category_name="সরকারি টিকা ও ভ্যাকসিনের মূল্য",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="বা অ্যাম্পুল প্রতি প্রতীকী ৫০ পয়সা থেকে ১ টাকা।"
            ),
            ServiceFee(
                category_name="ভেটেরিনারি ডাক্তারের চিকিৎসা পরামর্শ ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারি পশু হাসপাতালে পরামর্শ সম্পূর্ণ ফ্রি।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক (হাসপাতালের ওয়ান-স্টপ কাউন্টার)",
        required_documents=[
            RequiredDocument(
                name="খামারি বা পশুপালকের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=False,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ভ্যাকসিন পরিবহনের জন্য উপযুক্ত ফ্লাস্ক বা আইস-বক্স (বরফসহ)",
                is_mandatory=True,
                format_type="কোল্ড চেইন বক্স"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বরফের ফ্লাস্ক নিয়ে উপজেলা প্রাণিসম্পদ দপ্তরে যাওয়া",
                description="টিকা যাতে নষ্ট না হয় সেজন্য বরফ ভর্তি ফ্লাস্ক নিয়ে সরাসরি সরকারি পশু হাসপাতালের টিকা কাউন্টারে যোগাযোগ করুন।",
                tips="দালাল ছাড়াই সরাসরি সরকারি কর্মচারীর কাছ থেকে টিকা নিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="পশুর সংখ্যা উল্লেখ করে ভ্যাকসিন গ্রহণ",
                description="গরু, ছাগল বা হাঁস-মুরগির সংখ্যা লিখে সরকারি রেজিস্টারে এন্ট্রি করে প্রয়োজনীয় সংখ্যক ডোজ বুঝে নিন।",
                tips="সরকারি ভ্যাকসিনের গায়ে 'বিক্রয়ের জন্য নহে' সিল থাকবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="উপজেলা ভেটেরিনারি সার্জনের নির্দেশনা অনুযায়ী প্রয়োগ",
                description="নির্দিষ্ট তাপমাত্রায় রেখে নিয়মানুযায়ী গবাদিপশুকে টিকা পুশ করুন অথবা হাসপাতালের ফিল্ড সহকারীর সহায়তা নিন।"
            )
        ],
        official_portal_url="https://dls.gov.bd",
        application_url="https://dls.gov.bd",
        citizen_charter_url="https://dls.portal.gov.bd",
        anti_broker_warning="সতর্কতা: সরকারি ভ্যাকসিন কোনো ফার্মেসি বা ব্যক্তির কাছে বিক্রি করা আইনত নিষিদ্ধ। কোনো কর্মচারী সরকারি টিকা বাইরে বিক্রি করলে উপজেলা প্রাণিসম্পদ কর্মকর্তা বা দুদক ১০৬ এ অভিযোগ করুন।"
    ))

    # 88. মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-fisheries-hatchery-farm-license",
        title_bn="মৎস্য খামার ও হ্যাচারি স্থাপন লাইসেন্স এবং পোনা পরিবহণ ছাড়পত্র নির্দেশিকা",
        title_en="Fisheries Farm & Hatchery Establishment License and Fry Transit Guide",
        category="মৎস্য ও প্রাণিসম্পদ",
        department_agency="মৎস্য অধিদপ্তর, মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়",
        summary="বাণিজ্যিক মৎস্য খামার, মাছের হ্যাচারি স্থাপন ও গুণগত মানসম্পন্ন রেণু-পোনা পরিবহণের জন্য মৎস্য হ্যাচারি আইন অনুযায়ী নিবন্ধন গ্রহণ আবশ্যক। দালালদের খপ্পর ছাড়া উপজেলা মৎস্য অফিসে ট্রেজারি চালানের মাধ্যমে নামমাত্র সরকারি ফি দিয়ে লাইসেন্স পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="মাছের হ্যাচারি স্থাপন লাইসেন্স ফি",
                amount_bdt=2000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="বাৎসরিক লাইসেন্স ফি ২,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="মৎস্য খামার নিবন্ধন ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="সাধারণ মৎস্য খামারের জন্য মাত্র ৫০০ টাকা।"
            )
        ],
        processing_time_sla="হ্যাচারি পরিদর্শন ও পানির গুণমান পরীক্ষার পর ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="নির্ধারিত আবেদন ফরম (উপজেলা মৎস্য অফিস থেকে সংগৃহীত)",
                is_mandatory=True,
                format_type="মূল ফরম"
            ),
            RequiredDocument(
                name="পুকুর বা হ্যাচারির জমির মালিকানার দলিল ও নামজারি খতিয়ান",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পানির উৎস ও পরিবেশ সুরক্ষা ব্যবস্থার বিবরণ",
                is_mandatory=True,
                format_type="বিবরণ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা জ্যেষ্ঠ মৎস্য কর্মকর্তা বরাবর আবেদন",
                description="জমির কাগজপত্র ও ট্রেড লাইসেন্সসহ উপজেলা মৎস্য কার্যালয়ে আবেদন জমা দিন।",
                action_url="https://fisheries.gov.bd",
                tips="দালাল ছাড়াই সরাসরি অফিসে ফাইল জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="মৎস্য কারিগরি দল কর্তৃক পরিদর্শন",
                description="মৎস্য কর্মকর্তা সরেজমিনে হ্যাচারির ব্রুড মাছের মান ও হ্যাচিং জার পরীক্ষা করবেন।",
                tips="পরিদর্শনে কোনো অনৈতিক লেনদেন নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="চালান জমা ও হ্যাচারি লাইসেন্স গ্রহণ",
                description="ট্রেজারি চালানের মূল কপি জমা দিয়ে সরকারি হ্যাচারি লাইসেন্স ও সনদপত্র সংগ্রহ করুন।"
            )
        ],
        official_portal_url="https://fisheries.gov.bd",
        application_url="https://fisheries.gov.bd",
        citizen_charter_url="https://mofl.gov.bd",
        anti_broker_warning="সতর্কতা: নিষিদ্ধ আফ্রিকান মাগুর বা পিরানহার হ্যাচারি করা শাস্তিযোগ্য অপরাধ। লাইসেন্স পাওয়ার জন্য কোনো মধ্যস্থতাকারীকে টাকা দেবেন না।"
    ))

    # 89. সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড
    services.append(CitizenService(
        service_id="bd-govt-hospital-ambulance-service-rates",
        title_bn="সরকারি হাসপাতালের সরকারি রেট কার্ডে অ্যাম্বুলেন্স বুকিং ও সিন্ডিকেট প্রতিরোধ গাইড",
        title_en="Government Hospital Official Rate Card Ambulance Booking & Syndicate Prevention Guide",
        category="স্বাস্থ্য ও পরিবার কল্যাণ",
        department_agency="স্বাস্থ্য সেবা বিভাগ, স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
        summary="সরকারি মেডিকেল কলেজ ও জেলা হাসপাতালে মুমূর্ষু রোগীদের জরুরি স্থানান্তরের জন্য সরকারি অ্যাম্বুলেন্স রয়েছে যার কিলোমিটার প্রতি রেট সরকার কর্তৃক নির্ধারিত (ঢাকা শহরে সাধারণত সর্বনিম্ন ৫০০-১০০০ টাকা বা প্রতি কিমি ১০-১৫ টাকা)। বেসরকারি অ্যাম্বুলেন্স সিন্ডিকেট সরকারি অ্যাম্বুলেন্সকে নষ্ট দেখিয়ে রোগীদের কাছ থেকে ১০,০০০-২০,০০০ টাকা হাতিয়ে নেয়।",
        official_fees=[
            ServiceFee(
                category_name="সরকারি অ্যাম্বুলেন্স বেস ফেয়ার (মেট্রোপলিটন এলাকা)",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="হাসপাতাল ক্যাশ কাউন্টার সরকারি রশিদ",
                remarks="প্রথম ৫ কিলোমিটারের জন্য সরকারি নির্ধারিত বেস ফেয়ার।"
            ),
            ServiceFee(
                category_name="প্রতি কিলোমিটার অতিরিক্ত ভাড়া (দূরপাল্লায়)",
                amount_bdt=15.0,
                vat_included=True,
                payment_method="অফিশিয়াল রশিদ",
                remarks="প্রতি কিমি দূরত্ব অনুযায়ী নির্ধারিত সরকারি রেট।"
            )
        ],
        processing_time_sla="জরুরি ভিত্তিতে তাৎক্ষণিক অ্যাম্বুলেন্স বরাদ্দ",
        required_documents=[
            RequiredDocument(
                name="কর্তব্যরত সরকারি চিকিৎসকের রেফারেল ও অ্যাম্বুলেন্স চাহিদাপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল স্লিপ"
            ),
            RequiredDocument(
                name="রোগীর ভর্তি টিকিট ও বেড নম্বর",
                is_mandatory=True,
                format_type="টিকিট"
            ),
            RequiredDocument(
                name="হাসপাতাল ক্যাশ কাউন্টারে ভাড়া পরিশোধের মানি রিসিট",
                is_mandatory=True,
                format_type="সরকারি রশিদ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ডাক্তারের রেফারেল নিয়ে সরাসরি হাসপাতালের কন্ট্রোল রুমে যাওয়া",
                description="প্রাইভেট অ্যাম্বুলেন্স ড্রাইভার বা দালালের সাথে কথা না বলে সরাসরি হাসপাতালের জরুরি বিভাগের 'অ্যাম্বুলেন্স নিয়ন্ত্রণ কক্ষে' যান।",
                tips="দালালরা বলবে সরকারি গাড়ি নষ্ট, তাদের কথায় কান দেবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="সরকারি কাউন্টারে রসিদ কেটে ভাড়া পরিশোধ",
                description="দূরত্ব অনুযায়ী সরকারি রেট কার্ড দেখে ক্যাশ কাউন্টারে টাকা জমা দিয়ে সিলমোহরযুক্ত রসিদ নিন।",
                tips="চালককে সরাসরি অতিরিক্ত কোনো টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি অ্যাম্বুলেন্সে নিরাপদ স্থানান্তর",
                description="সরকারি অ্যাম্বুলেন্স চালককে রসিদ দেখিয়ে রোগীকে নিরাপদে নির্ধারিত হাসপাতালে নিয়ে যান।"
            )
        ],
        official_portal_url="https://dghs.gov.bd",
        application_url="https://dghs.gov.bd",
        citizen_charter_url="https://hsd.gov.bd",
        anti_broker_warning="সতর্কতা: হাসপাতালে অ্যাম্বুলেন্স সিন্ডিকেট রোগীর জীবন নিয়ে বাণিজ্য করে। কোনো চালক বেশি টাকা দাবি করলে বা সিন্ডিকেট বাধা দিলে সাথে সাথে হাসপাতাল পরিচালক বা জরুরি পুলিশ সেবা ৯৯৯ এ কল দিন।"
    ))

    # 90. বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dghs-private-clinic-diagnostic-license",
        title_bn="বেসরকারি ক্লিনিক, হাসপাতাল ও ডায়াগনস্টিক সেন্টার লাইসেন্স ও বার্ষিক নবায়ন নির্দেশিকা",
        title_en="Private Clinic Hospital & Diagnostic Center Online License & Renewal Guide",
        category="স্বাস্থ্য ও বাণিজ্য লাইসেন্স",
        department_agency="স্বাস্থ্য অধিদপ্তর (DGHS), স্বাস্থ্য সেবা বিভাগ",
        summary="বেসরকারি হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টার পরিচালনার জন্য স্বাস্থ্য অধিদপ্তর থেকে অনলাইন লাইসেন্স গ্রহণ ও নবায়ন বাধ্যতামূলক। অবৈধ ক্লিনিক সিলগালা করা হচ্ছে। দালালদের মাধ্যমে না গিয়ে সরাসরি স্বাস্থ্য অধিদপ্তরের অনলাইন পোর্টালে সরকারি ফি দিয়ে স্বচ্ছভাবে লাইসেন্স নেওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ডায়াগনস্টিক সেন্টার লাইসেন্স ফি (ক্যাটাগরি-এ)",
                amount_bdt=50000.0,
                vat_included=True,
                payment_method="এ-চালান (ট্রেজারি চালান)",
                remarks="মেট্রোপলিটন এলাকার জন্য ৫০,০০০ টাকা; জেলা-উপজেলায় আনুপাতিক কম।"
            ),
            ServiceFee(
                category_name="১০-৫০ বেডের বেসরকারি হাসপাতাল লাইসেন্স ফি",
                amount_bdt=50000.0,
                vat_included=True,
                payment_method="এ-চালান",
                remarks="১০-৫০ শয্যার হাসপাতালের সরকারি ফি।"
            )
        ],
        processing_time_sla="সিভিল সার্জন পরিদর্শন ও স্বাস্থ্য অধিদপ্তরের অনুমোদন সাপেক্ষে ৩০-৪৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="অনাবাসিক বাণিজ্যিক ভবনের রাজউক/পৌরসভা অনুমোদিত প্ল্যান ও ট্রেড লাইসেন্স",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পূর্ণকালীন বিএমডিসি (BMDC) নিবন্ধিত চিকিৎসক ও ডিপ্লোমা নার্সদের তালিকা",
                is_mandatory=True,
                format_type="সনদের ফটোকপিসহ"
            ),
            RequiredDocument(
                name="পরিবেশ অধিদপ্তর কর্তৃক প্রদত্ত পরিবেশ ছাড়পত্র (ECC)",
                is_mandatory=True,
                format_type="কপি"
            ),
            RequiredDocument(
                name="পরমাণু শক্তি কমিশন কর্তৃক এক্স-রে ও রেডিয়েশন লাইসেন্স (ডায়াগনস্টিকের ক্ষেত্রে)",
                is_mandatory=False,
                format_type="কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="স্বাস্থ্য অধিদপ্তরের পোর্টালে অনলাইন লাইসেন্স আবেদন",
                description="https://dghs.gov.bd পোর্টালে গিয়ে হাসপাতালের বিবরণ ও চিকিৎসকদের বিএমডিসি সনদ আপলোড করুন।",
                action_url="https://dghs.gov.bd",
                tips="সব চালানের ফি সরাসরি অনলাইনে পরিশোধ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="সিভিল সার্জন কর্তৃক সরেজমিনে হাসপাতাল পরিদর্শন",
                description="জেলার সিভিল সার্জন ও পরিদর্শন দল অপারেশন থিয়েটার, আইসিইউ ও বর্জ্য ব্যবস্থাপনা পরীক্ষা করবেন।",
                tips="পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="ডিজিটাল লাইসেন্স ডাউনলোড ও প্রদর্শন",
                description="অনুমোদিত হলে কিউআর কোড সম্বলিত সরকারি লাইসেন্স ডাউনলোড করে ক্লিনিকের ফ্রন্ট ডেস্কে প্রদর্শন করতে হবে।"
            )
        ],
        official_portal_url="https://dghs.gov.bd",
        application_url="https://dghs.gov.bd",
        citizen_charter_url="https://dghs.portal.gov.bd",
        anti_broker_warning="সতর্কতা: স্বাস্থ্য অধিদপ্তরে লাইসেন্স পাইয়ে দেওয়ার নামে কোনো অসাধু চক্র লাখ টাকা দাবি করলে সরাসরি স্বাস্থ্য অধিদপ্তরের ভিজিলেন্স সেল বা স্বাস্থ্য বাতায়ন ১৬২৬৩ নম্বরে জানান।"
    ))

    # 91. সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dgfp-family-planning-methods-incentives",
        title_bn="সরকারি পরিবার পরিকল্পনা সেবা, দীর্ঘমেয়াদী পদ্ধতি ও আর্থিক প্রণোদনা নির্দেশিকা",
        title_en="Government Family Planning Methods Services & Financial Incentives Guide",
        category="স্বাস্থ্য ও পরিবার কল্যাণ",
        department_agency="পরিবার পরিকল্পনা অধিদপ্তর (DGFP)",
        summary="মাতৃ ও শিশু স্বাস্থ্য সুরক্ষায় সরকার ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্রের মাধ্যমে সম্পূর্ণ বিনামূল্যে পরিবার পরিকল্পনা সামগ্রী (পিল, কনডম), দীর্ঘমেয়াদি পদ্ধতি (আইইউডি, ইমপ্ল্যান্ট) এবং স্থায়ী পদ্ধতি (এনএসভি/লাইগেশন) প্রদান করে। স্থায়ী পদ্ধতির ক্ষেত্রে রোগীকে কোনো খরচ করতে হয় না, উল্টো সরকার নগদ ২,০০০ টাকা প্রণোদনা ও লুঙ্গি/শাড়ি প্রদান করে।",
        official_fees=[
            ServiceFee(
                category_name="সকল পরিবার পরিকল্পনা সামগ্রী ও চিকিৎসা",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারের সম্পূর্ণ ফ্রি পরিবার পরিকল্পনা সেবা।"
            ),
            ServiceFee(
                category_name="স্থায়ী পদ্ধতি গ্রহীতাকে সরকারি প্রণোদনা প্রদান",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সরকার রোগীকে উল্টো ২০০০ টাকা নগদ দেয়",
                remarks="মজুরি ক্ষতিপূরণ হিসেবে রোগীকে নগদ অর্থ ও বস্ত্র দেওয়া হয়।"
            )
        ],
        processing_time_sla="তাৎক্ষণিক সেবা",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="স্বামী বা স্ত্রীর লিখিত সম্মতিপত্র (স্থায়ী পদ্ধতির ক্ষেত্রে)",
                is_mandatory=True,
                format_type="স্বাক্ষরিত ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্রে যোগাযোগ",
                description="পরিবার কল্যাণ পরিদর্শিকা (FWV) বা উপজেলা পরিবার পরিকল্পনা কর্মকর্তার সাথে দেখা করুন।",
                tips="পরামর্শ সম্পূর্ণ ফ্রি ও গোপনীয়।"
            ),
            ApplicationStep(
                step_number=2,
                title="স্বাস্থ্য পরীক্ষা ও উপযুক্ত পদ্ধতি নির্বাচন",
                description="ডাক্তার শারীরিক পরীক্ষা করে উপযুক্ত দীর্ঘমেয়াদি বা স্থায়ী পদ্ধতি সম্পন্ন করবেন।",
                tips="কোনো দালালকে টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরকারি প্রণোদনা ও ওষুধপত্র গ্রহণ",
                description="স্থায়ী পদ্ধতি শেষে সরকারি বরাদ্দ থেকে নগদ অর্থ, নতুন পোশাক ও অ্যান্টিবায়োটিক ওষুধপত্র বিনামূল্যে বুঝে নিন।"
            )
        ],
        official_portal_url="https://dgfp.gov.bd",
        application_url="https://dgfp.gov.bd",
        citizen_charter_url="https://dgfp.portal.gov.bd",
        anti_broker_warning="সতর্কতা: পরিবার পরিকল্পনা সেবায় কোনো টাকা নেওয়া অপরাধ। কোনো ডাক্তার বা নার্স ফি দাবি করলে সরাসরি উপজেলা পরিবার পরিকল্পনা কর্মকর্তা বা স্বাস্থ্য বাতায়ন ১৬২৬৩ এ কল দিন।"
    ))

    # 92. মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dnc-drug-rehabilitation-treatment",
        title_bn="মাদকাসক্তি নিরাময় কেন্দ্র লাইসেন্স ও সরকারি নিরাময় হাসপাতালে ভর্তি নির্দেশিকা",
        title_en="Drug Addiction Treatment Rehabilitation Center License & Govt Admission Guide",
        category="স্বাস্থ্য ও সমাজকল্যাণ",
        department_agency="মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC), সুরক্ষা সেবা বিভাগ",
        summary="মাদকাসক্ত স্বজনদের চিকিৎসার নামে দেশে শত শত অবৈধ রিহ্যাব সেন্টার গড়ে উঠেছে যেখানে রোগীদের নির্যাতন ও লাখ লাখ টাকা হাতিয়ে নেওয়া হয়। সরকারিভাবে তেজগাঁও কেন্দ্রীয় মাদকাসক্তি নিরাময় হাসপাতাল ও বিভাগীয় নিরাময় কেন্দ্রে মাত্র ৫০ টাকায় টিকিট কেটে আন্তর্জাতিক মানের চিকিৎসায় রোগীদের সুস্থ করা হয়। এছাড়া বেসরকারি রিহ্যাব সেন্টারের সরকারি লাইসেন্স নেওয়া বাধ্যতামূলক।",
        official_fees=[
            ServiceFee(
                category_name="সরকারি মাদকাসক্তি নিরাময় হাসপাতালে ভর্তি টিকিট",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="হাসপাতাল কাউন্টার রশিদ",
                remarks="ভর্তি ফি মাত্র ৫০ টাকা।"
            ),
            ServiceFee(
                category_name="সরকারি হাসপাতালে দৈনিক বেড ও খাবার চার্জ (সাধারণ ওয়ার্ড)",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="ওষুধ ও খাবার সরকার সম্পূর্ণ বিনামূল্যে প্রদান করে।"
            ),
            ServiceFee(
                category_name="বেসরকারি নিরাময় কেন্দ্র লাইসেন্স ফি",
                amount_bdt=20000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="ডিএনসি নির্ধারিত লাইসেন্স ফি।"
            )
        ],
        processing_time_sla="জরুরি রোগী: তাৎক্ষণিক ভর্তি | সাধারণ ভর্তি: সিট খালি সাপেক্ষে ১-৩ দিন",
        required_documents=[
            RequiredDocument(
                name="রোগী ও অভিভাবকের জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="রোগীর ডোপ টেস্ট (Dope Test) বা পূর্ববর্তী প্রেসক্রিপশন (যদি থাকে)",
                is_mandatory=False,
                format_type="মেডিকেল রেকর্ড"
            ),
            RequiredDocument(
                name="অভিভাবকের অঙ্গীকারনামা ফরম",
                is_mandatory=True,
                format_type="স্বাক্ষরিত মূল ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="তেজগাঁও কেন্দ্রীয় নিরাময় হাসপাতাল বা বিভাগীয় হাসপাতালে উপস্থিত হওয়া",
                description="দালাল ছাড়া সরাসরি সরকারি মাদকাসক্তি নিরাময় হাসপাতালের জরুরি বহির্বিভাগে রোগীকে নিয়ে যান।",
                tips="দালালরা প্রাইভেট রিহ্যাবে নেওয়ার প্রলোভন দেখাবে, যাবেন না।"
            ),
            ApplicationStep(
                step_number=2,
                title="মনোরোগ বিশেষজ্ঞ ও চিকিৎসকের অ্যাসেসমেন্ট",
                description="চিকিৎসক শারীরিক ও মানসিক অবস্থা দেখে ডিটক্সিফিকেশন (Detoxification) ওয়ার্ডে ভর্তি করাবেন।",
                tips="চিকিৎসা অত্যন্ত নিরাপদ ও মানবিক।"
            ),
            ApplicationStep(
                step_number=3,
                title="সাইকোথেরাপি ও পুনর্বাসন শেষে সুস্থ প্রত্যাবর্তন",
                description="১৪ থেকে ২৮ দিনের কোর্সে রোগীকে শারীরিক ও মানসিক কাউন্সেলিং করিয়ে সম্পূর্ণ সুস্থ করে বাড়ি পাঠানো হয়।"
            )
        ],
        official_portal_url="https://dnc.gov.bd",
        application_url="https://dnc.gov.bd",
        citizen_charter_url="https://dnc.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ভুয়া রিহ্যাব সেন্টারের টর্চার সেলে রোগী পাঠাবেন না। মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের অনুমোদন ছাড়া কোনো রিহ্যাব চালানো দণ্ডনীয় অপরাধ। অভিযোগ জানাতে ডিএনসি হটলাইন ০১৯৫৮৮৮৮৮৮৮ এ যোগাযোগ করুন।"
    ))

    # 93. প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-pmeat-pm-education-trust-student-grant",
        title_bn="প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট: অসচ্ছল শিক্ষার্থীদের সরকারি এককালীন শিক্ষা অনুদান নির্দেশিকা",
        title_en="PM Education Assistance Trust Financial Aid for Underprivileged Students Guide",
        category="শিক্ষা ও সমাজকল্যাণ",
        department_agency="প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্ট, শিক্ষা মন্ত্রণালয়",
        summary="দরিদ্র, এতিম, প্রতিবন্ধী ও অসচ্ছল পরিবারের শিক্ষার্থীদের পড়াশোনা যাতে অর্থাভাবে বন্ধ না হয়ে যায়, সেজন্য সরকার এককালীন ৫,০০০ থেকে ১০,০০০ টাকা পর্যন্ত সরকারি শিক্ষা অনুদান প্রদান করে। সম্পূর্ণ অনলাইন পোর্টালে কোনো দালাল ছাড়া আবেদন করা যায় এবং অনুমোদিত অনুদান সরাসরি শিক্ষার্থীর মোবাইল ওয়ালেটে (নগদ/বিকাশ) চলে আসে।",
        official_fees=[
            ServiceFee(
                category_name="শিক্ষা অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="আবেদনের জন্য কোনো ফি বা টাকা দিতে হয় না।"
            )
        ],
        processing_time_sla="প্রতি শিক্ষাবর্ষের সার্কুলার অনুযায়ী আবেদন সাপেক্ষে ৩০ থেকে ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="শিক্ষা প্রতিষ্ঠানের প্রধান কর্তৃক প্রদত্ত প্রত্যায়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            ),
            RequiredDocument(
                name="শিক্ষার্থীর অনলাইন জন্ম নিবন্ধন বা এনআইডি কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পিতা/মাতা বা অভিভাবকের এনআইডি ও বাৎসরিক আয়ের প্রত্যয়নপত্র (ইউপি চেয়ারম্যান কর্তৃক)",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="শিক্ষার্থী বা অভিভাবকের নামে নিবন্ধিত সচল নগদ/বিকাশ মোবাইল নম্বর",
                is_mandatory=True,
                format_type="সচল নম্বর"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="শিক্ষা সহায়তা ট্রাস্টের পোর্টালে অনলাইন রেজিস্ট্রেশন",
                description="https://eservice.pmeat.gov.bd পোর্টালে ঢুকে নিজের নাম, শিক্ষা প্রতিষ্ঠান ও পিতা-মাতার আয়ের তথ্য দিয়ে ফরম পূরণ করুন।",
                action_url="https://eservice.pmeat.gov.bd",
                tips="মোবাইল নম্বরটি অবশ্যই নিজের এনআইডি দিয়ে বায়োমেট্রিক হওয়া আবশ্যক।"
            ),
            ApplicationStep(
                step_number=2,
                title="শিক্ষা প্রতিষ্ঠান প্রধান কর্তৃক অনলাইনে ভেরিফিকেশন",
                description="বিদ্যালয় বা কলেজের প্রধান শিক্ষক সিস্টেমে আপনার তথ্য ভেরিফাই করে ট্রাস্টে অগ্রায়ন করবেন।",
                tips="স্কুলে কোনো অতিরিক্ত টাকা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি মোবাইল ওয়ালেটে অনুদানের টাকা জমা",
                description="ট্রাস্ট কর্তৃক যাচাই শেষে বাংলাদেশ ব্যাংকের মাধ্যমে সরাসরি শিক্ষার্থীর নগদ বা বিকাশ হিসাবে ৫,০০০-১০,০০০ টাকা ক্রেডিট হবে।"
            )
        ],
        official_portal_url="https://pmeat.gov.bd",
        application_url="https://eservice.pmeat.gov.bd",
        citizen_charter_url="https://pmeat.portal.gov.bd",
        anti_broker_warning="সতর্কতা: প্রধানমন্ত্রীর শিক্ষা অনুদান শিক্ষার্থীদের নাগরিক অধিকার। কোনো কম্পিউটার দোকান বা শিক্ষক এই টাকা পাইয়ে দেওয়ার নামে ঘুষ দাবি করলে সরাসরি উপজেলা নির্বাহী কর্মকর্তা বা শিক্ষা মন্ত্রণালয়ে অভিযোগ জানান।"
    ))

    # 94. ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-ugc-foreign-degree-equivalence-certificate",
        title_bn="ইউজিসি (UGC) বিদেশি বিশ্ববিদ্যালয় ডিগ্রি সরকারি সমমান সনদ নির্দেশিকা",
        title_en="UGC Foreign University Degree Equivalence Certificate Official Guide",
        category="শিক্ষা ও উচ্চশিক্ষা",
        department_agency="বাংলাদেশ বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)",
        summary="বিদেশি বিশ্ববিদ্যালয় বা আন্তর্জাতিক প্রতিষ্ঠান থেকে অর্জিত স্নাতক (Bachelor), স্নাতকোত্তর (Master's) বা পিএইচডি ডিগ্রি দিয়ে বাংলাদেশে বিসিএস পরীক্ষা, সরকারি চাকরি বা শিক্ষকতায় আবেদনের জন্য ইউজিসি থেকে ডিগ্রি সমমান সনদ (Equivalence Certificate) গ্রহণ বাধ্যতামূলক। দালালরা লক্ষ টাকা চায়, অথচ ইউজিসিতে সরকার নির্ধারিত ব্যাংকিং ফি দিয়ে সরাসরি আবেদন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="স্নাতক / স্নাতকোত্তর সমমান ফি (সাধারণ)",
                amount_bdt=3000.0,
                vat_included=True,
                payment_method="ইউজিসি সচিব বরাবর ব্যাংক ড্রাফট / পে-অর্ডার",
                remarks="প্রতিটি ডিগ্রির জন্য ৩,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="পিএইচডি (PhD) ডিগ্রি সমমান ফি",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ব্যাংক পে-অর্ডার",
                remarks="ডক্টরেট ডিগ্রির সমমান ফি ৫,০০০ টাকা।"
            )
        ],
        processing_time_sla="ইউজিসি সমমান কমিটির সভা সাপেক্ষে ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বিদেশি বিশ্ববিদ্যালয়ের মূল ডিগ্রি সনদ ও একাডেমিক ট্রান্সক্রিপ্ট",
                is_mandatory=True,
                format_type="পররাষ্ট্র মন্ত্রণালয় ও সংশ্লিষ্ট দূতাবাস কর্তৃক সত্যায়িত"
            ),
            RequiredDocument(
                name="বিদেশে পড়াশোনাকালীন ব্যবহৃত মূল পাসপোর্টের ভিসার পাতার কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পূর্ববর্তী এসএসসি ও এইচএসসি বা সমমান সনদের কপি",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="ইউজিসি নির্ধারিত সমমান আবেদন ফরম ও পে-অর্ডারের মূল কপি",
                is_mandatory=True,
                format_type="পূরণকৃত মূল ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="সনদপত্র দূতাবাস ও পররাষ্ট্র মন্ত্রণালয় থেকে সত্যায়ন",
                description="বিদেশি বিশ্ববিদ্যালয়ের মূল সার্টিফিকেট সংশ্লিষ্ট দেশের দূতাবাস এবং বাংলাদেশ পররাষ্ট্র মন্ত্রণালয় (MOFA) থেকে সত্যায়ন করান।",
                tips="অনলাইন দূরশিক্ষণ (Distance Learning) ডিগ্রি সাধারণত সরকার সমমান দেয় না।"
            ),
            ApplicationStep(
                step_number=2,
                title="ইউজিসি ভবনে ওয়ান-স্টপ সার্ভিসে আবেদন দাখিল",
                description="আগারগাঁও ইউজিসি ভবনে নির্ধারিত পে-অর্ডারসহ সকল সত্যায়িত কাগজপত্র জমা দিয়ে রিসিভিং স্লিপ নিন।",
                action_url="https://ugc.gov.bd",
                tips="দালাল ছাড়াই নিজে সশরীরে জমা দিন।"
            ),
            ApplicationStep(
                step_number=3,
                title="সমমান কমিটির অনুমোদন ও সনদপত্র সংগ্রহ",
                description="সমমান কমিটির অনুমোদনের পর সরকারি কিউআর কোডযুক্ত সমমান সনদপত্র সংগ্রহ করুন যা বিসিএস ও সরকারি চাকরিতে গ্রহণযোগ্য।"
            )
        ],
        official_portal_url="https://ugc.gov.bd",
        application_url="https://ugc.gov.bd",
        citizen_charter_url="https://ugc.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ভুয়া বিদেশি ডিগ্রির জন্য কোনো চক্রের ফাঁদে পা দেবেন না। ইউজিসি আন্তর্জাতিক ডাটাবেজ দিয়ে বিশ্ববিদ্যালয়ের অনুমোদন যাচাই করে। কোনো অসদুপায় শাস্তিযোগ্য ফৌজদারি অপরাধ।"
    ))

    # 95. বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-bteb-diploma-certificate-verification",
        title_bn="বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) ডিপ্লোমা সনদ ও নম্বরপত্র যাচাই নির্দেশিকা",
        title_en="Bangladesh Technical Education Board BTEB Diploma Certificate Verification Guide",
        category="শিক্ষা ও শিক্ষাবোর্ড সেবা",
        department_agency="বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)",
        summary="পলিটেকনিক ডিপ্লোমা ইন ইঞ্জিনিয়ারিং, ডিপ্লোমা ইন টেক্সটাইল, মেডিকেল টেকনোলজি ও এনটিভি কিউএফ সনদের মূল সার্টিফিকেট উত্তোলন, সংশোধন ও বিদেশে যাওয়ার জন্য বোর্ড ভেরিফিকেশনের নিয়ম। দালালরা শিক্ষার্থীদের কাছ থেকে অতিরিক্ত হাজার হাজার টাকা হাতিয়ে নেয়, অথচ বোর্ডের ওয়ান-স্টপ সেবায় স্বল্প ফিতেই সেবা মেলে।",
        official_fees=[
            ServiceFee(
                category_name="মূল ডিপ্লোমা সনদপত্র উত্তোলন ফি",
                amount_bdt=500.0,
                vat_included=True,
                payment_method="সোনালী সেবা / অনলাইন ব্যাংক স্লিপ",
                remarks="বোর্ড নির্ধারিত সরকারি ফি ৫০০ টাকা।"
            ),
            ServiceFee(
                category_name="নম্বরপত্র / ট্রান্সক্রিপ্ট ফি",
                amount_bdt=300.0,
                vat_included=True,
                payment_method="সোনালী সেবা",
                remarks="প্রতিটি একাডেমিক ট্রান্সক্রিপ্ট ৩০০ টাকা।"
            )
        ],
        processing_time_sla="সাধারণ: ৭ কার্যদিবস | জরুরি: ৩ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="বিটিইবি রেজিস্ট্রেশন কার্ড ও প্রবেশপত্রের (Admit Card) কপি",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="ইনস্টিটিউটের অধ্যক্ষ কর্তৃক অগ্রায়নপত্র বা প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            ),
            RequiredDocument(
                name="সোনালী সেবার পেমেন্ট স্লিপের কপি",
                is_mandatory=True,
                format_type="মূল স্লিপ"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিটিইবি পোর্টালে অনলাইন সেবা ফরম পূরণ",
                description="http://bteb.gov.bd পোর্টালে সোনালী সেবার মাধ্যমে চালানের ফি পরিশোধ করুন।",
                action_url="http://bteb.gov.bd",
                tips="দালালকে টাকা না দিয়ে সোনালী ই-সেবায় সরাসরি ফি দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="কারিগরি শিক্ষা বোর্ডের ওয়ান-স্টপ কাউন্টারে দাখিল",
                description="আগারগাঁও কারিগরি বোর্ডের নিচতলার ওয়ান-স্টপ কাউন্টারে ফাইল জমা দিয়ে টোকেন স্লিপ নিন।",
                tips="বোর্ডের সীমানায় ঘোরাঘুরি করা দালালদের পাত্তা দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="নির্ধারিত দিনে মূল সনদপত্র সংগ্রহ",
                description="রসিদ দেখিয়ে কিউআর কোডযুক্ত মূল ডিপ্লোমা সার্টিফিকেট বা ভেরিফাইড ট্রান্সক্রিপ্ট গ্রহণ করুন।"
            )
        ],
        official_portal_url="http://bteb.gov.bd",
        application_url="http://bteb.gov.bd",
        citizen_charter_url="http://bteb.portal.gov.bd",
        anti_broker_warning="সতর্কতা: ডিপ্লোমা সনদ উত্তোলনে কোনো বোর্ড কর্মকর্তাকে বাড়তি টাকা দেওয়ার প্রয়োজন নেই। বোর্ডের নিচতলার অভিযোগ বক্সে অথবা চেয়ারম্যানের দপ্তরে তাৎক্ষণিক অনিয়ম জানাতে পারেন।"
    ))

    # 96. ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-forest-tree-felling-transit-pass-tp",
        title_bn="ব্যক্তি মালিকানাধীন জমির গাছ কাটা ও পরিবহণ পারমিট (Transit Pass / TP) নির্দেশিকা",
        title_en="Privately Owned Tree Felling & Timber Transit Pass TP Official Guide",
        category="বন, পরিবেশ ও জলবায়ু পরিবর্তন",
        department_agency="বন অধিদপ্তর, পরিবেশ, বন ও জলবায়ু পরিবর্তন মন্ত্রণালয়",
        summary="নিজের জমিতে লাগানো সেগুন, মেহগনি, রেইনট্রি বা অন্য কাঠ কেটে করাতকলে নেওয়া বা অন্য জেলায় পরিবহণের জন্য বন সংরক্ষণ আইন অনুযায়ী 'ট্রানজিট পাস' (Transit Pass বা টিপি) নিতে হয়। পাস না থাকলে পুলিশ ও বন কর্মকর্তারা রাস্তায় কাঠ জব্দ করার ভয় দেখিয়ে হাজার হাজার টাকা ঘুষ দাবি করে। অথচ বন বিভাগ থেকে টিপি আবেদন সরকারিভাবে সম্পূর্ণ বিনামূল্যে বা নামমাত্র ফিতে দেওয়া হয়।",
        official_fees=[
            ServiceFee(
                category_name="ব্যক্তি মালিকানাধীন জমির গাছ কাটার ট্রানজিট পাস আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="ব্যক্তিগত জমির গাছের জন্য সরকারি কোনো পারমিট ফি নেই।"
            ),
            ServiceFee(
                category_name="কাঠের হাতুড়ি বা সিলমোহর ফি (হ্যামার ফি)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="গাছের গুড়িতে অফিশিয়াল হ্যামার মারার নামমাত্র ফি।"
            )
        ],
        processing_time_sla="বন কর্মকর্তা কর্তৃক সরেজমিন যাচাইয়ের পর ৩ থেকে ৭ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="গাছ থাকা জমির মালিকানার মূল দলিল ও হালনাগাদ নামজারি খতিয়ান",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="হালনাগাদ ভূমি উন্নয়ন কর (খাজনা) পরিশোধের দাখিলা",
                is_mandatory=True,
                format_type="অনলাইন কপি"
            ),
            RequiredDocument(
                name="ইউনিয়ন পরিষদ চেয়ারম্যান বা কাউন্সিলরের 'গাছের মালিকানা' প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত মূল সনদ"
            ),
            RequiredDocument(
                name="কাটা গাছের প্রজাতি, সংখ্যা ও আনুমানিক পরিমাপের তালিকা",
                is_mandatory=True,
                format_type="স্বাক্ষরিত তালিকা"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="নিকটস্থ বন রেঞ্জ বা বিট কর্মকর্তার নিকট আবেদন",
                description="জমির পর্চা ও ইউপি প্রত্যয়নসহ উপজেলা বন কর্মকর্তা বা রেঞ্জ কর্মকর্তার কাছে আবেদন জমা দিন।",
                tips="দালাল ছাড়াই সরাসরি বন অফিসে যোগাযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="বন কর্মকর্তা কর্তৃক সরেজমিন গাছ ও সীমানা পরিদর্শন",
                description="বিট কর্মকর্তা জমিতে গিয়ে নিশ্চিত হবেন গাছটি সরকারি বন বা খাস জমির নয় এবং নিজের ব্যক্তিগত জমির।",
                tips="পরিদর্শনে কোনো ঘুষ লেনদেন নিষিদ্ধ।"
            ),
            ApplicationStep(
                step_number=3,
                title="গুড়িতে হ্যামার সিল ও ট্রানজিট পাস (TP) গ্রহণ",
                description="গাছের গুড়িতে বন বিভাগের অফিসিয়াল হ্যামার সিল মেরে কিউআর কোড বা সিলযুক্ত ট্রানজিট পাস দেওয়া হবে। এই পাস দেখালে রাস্তায় কোনো পুলিশ গাড়ি আটকাতে পারবে না।"
            )
        ],
        official_portal_url="https://bforest.gov.bd",
        application_url="https://bforest.gov.bd",
        citizen_charter_url="https://moef.gov.bd",
        anti_broker_warning="সতর্কতা: নিজের জমির বৈধ গাছ পরিবহনে কোনো পুলিশ বা বন কর্মচারী চাঁদা দাবি করলে ট্রানজিট পাস প্রদর্শন করুন এবং জরুরি পুলিশ হেল্পলাইন ৯৯৯ অথবা বন অধিদপ্তরের কন্ট্রোল রুমে অভিযোগ দিন।"
    ))

    # 97. ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-brickfield-environmental-clearance-dc-license",
        title_bn="ইটভাটা পরিবেশ ছাড়পত্র ও জেলা প্রশাসন লাইসেন্স নির্দেশিকা",
        title_en="Brickfield Environmental Clearance & Deputy Commissioner License Guide",
        category="শিল্প ও পরিবেশ সেবা",
        department_agency="পরিবেশ অধিদপ্তর ও জেলা প্রশাসন",
        summary="ইট প্রস্তুত ও ভাটা স্থাপন (নিয়ন্ত্রণ) আইন অনুযায়ী কৃষি জমি, বনভূমি বা শিক্ষাপ্রতিষ্ঠানের ১ কিলোমিটারের মধ্যে ড্রাম চিমনি বা সাধারণ ভাটা সম্পূর্ণ নিষিদ্ধ। পরিবেশবান্ধব জিগজ্যাগ বা হাইব্রিড হফম্যান ভাটার জন্য পরিবেশ অধিদপ্তর থেকে ছাড়পত্র এবং জেলা প্রশাসকের নিকট থেকে ইটভাটা লাইসেন্স নিতে হয়। দালাল চক্র রাজনৈতিক প্রভাবের নামে লাখ লাখ টাকা হাতিয়ে নেয়।",
        official_fees=[
            ServiceFee(
                category_name="ইটভাটা পরিবেশ ছাড়পত্র ফি (ক্যাটাগরি লাল)",
                amount_bdt=50000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="পরিবেশ অধিদপ্তর নির্ধারিত সরকারি ফি।"
            ),
            ServiceFee(
                category_name="জেলা প্রশাসন ইটভাটা লাইসেন্স ফি",
                amount_bdt=25000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="ডিসি অফিস ট্রেজারি চালান।"
            )
        ],
        processing_time_sla="যৌথ তদন্ত ও পরিবেশ কমিটির যাচাই সাপেক্ষে ৪৫ থেকে ৬০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="ভাটার জমির মালিকানার দলিল, নামজারি পর্চা বা রেজিস্ট্রিকৃত লিজ ডিড",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="উপজেলা কৃষি কর্মকর্তা কর্তৃক 'অনাবাদি জমি' মর্মে প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত প্রত্যয়ন"
            ),
            RequiredDocument(
                name="ইউপি চেয়ারম্যান বা পৌর মেয়রের অনাপত্তি সনদ (NOC)",
                is_mandatory=True,
                format_type="মূল কপি"
            ),
            RequiredDocument(
                name="জিগজ্যাগ বা আধুনিক চিমনি ও নিঃসরণ নিয়ন্ত্রণ নকশা",
                is_mandatory=True,
                format_type="ইঞ্জিনিয়ারিং ব্লু-প্রিন্ট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="পরিবেশ অধিদপ্তরের পোর্টালে অনলাইন ছাড়পত্র আবেদন",
                description="https://doe.gov.bd পোর্টালে নকশা ও কৃষি প্রত্যয়নসহ ছাড়পত্রের আবেদন সাবমিট করুন।",
                action_url="https://doe.gov.bd",
                tips="সব চালান সরাসরি বাংলাদেশ ব্যাংকে জমা দিন।"
            ),
            ApplicationStep(
                step_number=2,
                title="জেলা ইটভাটা নিয়ন্ত্রণ কমিটি কর্তৃক সরেজমিন পরিদর্শন",
                description="এডিসি (জেনারেল) ও পরিবেশ কর্মকর্তাদের দল দূরত্ব ও আধুনিক প্রযুক্তির মান পরীক্ষা করবেন।",
                tips="অবৈধ ভাটায় ভ্রাম্যমাণ আদালত ভেঙে দেবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="জেলা প্রশাসক কর্তৃক চূড়ান্ত ইটভাটা লাইসেন্স ইস্যু",
                description="পরিবেশ ছাড়পত্র জমা দিয়ে জেলা প্রশাসকের কার্যালয় থেকে সরকারি কিউআর কোডযুক্ত লাইসেন্স গ্রহণ করুন।"
            )
        ],
        official_portal_url="https://doe.gov.bd",
        application_url="https://doe.gov.bd",
        citizen_charter_url="https://moef.gov.bd",
        anti_broker_warning="সতর্কতা: অবৈধ ইটভাটা স্থাপন পরিবেশ ও ফসলের মারাত্মক ক্ষতি করে। কোনো দালাল যদি বলে পরিবেশ ছাড়পত্র ছাড়াই ভাটা চালানো যাবে—তবে মনে রাখবেন যেকোনো দিন মোবাইল কোর্টে জরিমানা ও জেল হবে।"
    ))

    # 98. ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-postal-life-insurance-pli-claim-loan",
        title_bn="ডাক জীবন বীমা (Postal Life Insurance - PLI) নতুন পলিসি, দাবি নিষ্পত্তি ও লোন নির্দেশিকা",
        title_en="Postal Life Insurance PLI Policy Claim Settlement & Loan Official Guide",
        category="অর্থ ও পেনশন সেবা",
        department_agency="বাংলাদেশ ডাক বিভাগ, ডাক ও টেলিযোগাযোগ বিভাগ",
        summary="১৮৮৪ সাল থেকে পরিচালিত সরকারের শতভাগ গ্যারান্টিযুক্ত ডাক জীবন বীমা (PLI) বাংলাদেশের সবচেয়ে নিরাপদ ও সর্বোচ্চ বোনাস প্রদানকারী জীবন বীমা। বেসরকারি বীমা কোম্পানিগুলো মেয়াদপূর্তিতে গ্রাহকদের টাকা নিয়ে টালবাহানা করলেও পিএলআই সরাসরি সরকারের ট্রেজারি দ্বারা সুরক্ষিত। এছাড়া পলিসির বিপরীতে অত্যন্ত স্বল্প সুদে লোন পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="পলিসি আবেদন ফরম ও প্রসেসিং ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="পিএলআই পলিসি খোলার কোনো আবেদন ফি নেই।"
            ),
            ServiceFee(
                category_name="সরকারি মেডিকেল পরীক্ষা ফি (যদি প্রযোজ্য হয়)",
                amount_bdt=50.0,
                vat_included=True,
                payment_method="ডাকঘর কাউন্টার রশিদ",
                remarks="সরকারি চিকিৎসকের ফি মাত্র ৫০-১০০ টাকা।"
            )
        ],
        processing_time_sla="পলিসি ইস্যু: ৩ কার্যদিবস | মেয়াদপূর্তিতে দাবি নিষ্পত্তি: ৭ থেকে ১৫ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারী ও নমিনির জাতীয় পরিচয়পত্র (NID)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="বয়সের প্রমাণপত্র (এসএসসি সনদ বা অনলাইন জন্ম নিবন্ধন)",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পাসপোর্ট সাইজ রঙিন ছবি (বীমাগ্রহীতা ও নমিনি)",
                is_mandatory=True,
                format_type="৩ কপি"
            ),
            RequiredDocument(
                name="ডাক জীবন বীমার নির্ধারিত পূরণকৃত প্রস্তাবপত্র",
                is_mandatory=True,
                format_type="মূল ফরম"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="নিকটস্থ প্রধান ডাকঘর বা উপজেলা পোস্ট অফিসে যোগাযোগ",
                description="ডাক জীবন বীমার ফিল্ড অফিসার বা কাউন্টারে গিয়ে বয়স অনুযায়ী প্রিমিয়ামের চার্ট দেখে পলিসি নির্বাচন করুন।",
                action_url="https://bdpost.gov.bd",
                tips="সরকারি কর্মচারী ও সাধারণ নাগরিক উভয়ই এই বীমা করতে পারেন।"
            ),
            ApplicationStep(
                step_number=2,
                title="প্রথম প্রিমিয়াম জমা ও প্রিমিয়াম বুক গ্রহণ",
                description="পোস্ট অফিস কাউন্টারে সরাসরি টাকা জমা দিয়ে অফিশিয়াল প্রিমিয়াম পাসবই গ্রহণ করুন। নগদ বা মোবাইল ওয়ালেটেও জমা দেওয়া যায়।",
                tips="সব সময় ডাকঘরের অফিশিয়াল রসিদ রাখবেন।"
            ),
            ApplicationStep(
                step_number=3,
                title="মেয়াদপূর্তিতে মূল টাকা ও সর্বোচ্চ সরকারি বোনাস লাভ",
                description="মেয়াদপূর্তিতে পাসবই জমা দিলে সরকার নির্ধারিত দেশের সর্বোচ্চ বোনাসসহ সম্পূর্ণ টাকা চেকের মাধ্যমে সরাসরি প্রদান করা হয়।"
            )
        ],
        official_portal_url="https://bdpost.gov.bd",
        application_url="https://bdpost.gov.bd",
        citizen_charter_url="https://ptd.gov.bd",
        anti_broker_warning="সতর্কতা: ডাক জীবন বীমা শতভাগ সরকারি ও নিরাপদ। কোনো দালাল বা তৃতীয় পক্ষের হাতে প্রিমিয়ামের টাকা দেবেন না, সরাসরি ডাকঘর কাউন্টারে বা সরকারি ডিজিটাল মাধ্যমে জমা দিয়ে রসিদ নিন।"
    ))

    # 99. বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-btrc-isp-internet-service-provider-license",
        title_bn="বিটিআরসি (BTRC) ইন্টারনেট সার্ভিস প্রোভাইডার (ISP) লাইসেন্স ও নবায়ন নির্দেশিকা",
        title_en="BTRC Internet Service Provider ISP License & Renewal Official Guide",
        category="টেলিযোগাযোগ ও আইসিটি",
        department_agency="বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)",
        summary="উপজেলা, জেলা বা বিভাগীয় পর্যায়ে বৈধভাবে ব্রডব্যান্ড ইন্টারনেট ব্যবসা করার জন্য বিটিআরসি থেকে আইএসপি লাইসেন্স নেওয়া বাধ্যতামূলক। অবৈধভাবে সংযোগ দিলে লাখ টাকা জরিমানা ও সরঞ্জাম বাজেয়াপ্ত হয়। দালাল চক্র বিটিআরসি লাইসেন্স পাইয়ে দেওয়ার নামে লাখ টাকা হাতিয়ে নেয়, অথচ বিটিআরসির অনলাইন পোর্টালে সরাসরি স্বল্প ফিতে আবেদন করা যায়।",
        official_fees=[
            ServiceFee(
                category_name="উপজেলা বা থানা ক্যাটাগরি আইএসপি লাইসেন্স ফি",
                amount_bdt=10000.0,
                vat_included=False,
                payment_method="পে-অর্ডার (BTRC সচিব বরাবর)",
                remarks="উপজেলা পর্যায়ে লাইসেন্স ফি মাত্র ১০,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="জেলা ক্যাটাগরি আইএসপি লাইসেন্স ফি",
                amount_bdt=25000.0,
                vat_included=False,
                payment_method="পে-অর্ডার",
                remarks="জেলা পর্যায়ে লাইসেন্স ফি ২৫,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="১৫% সরকারি ভ্যাট",
                amount_bdt=1500.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="উপজেলা ফি-এর ওপর ১৫% সরকারি ভ্যাট।"
            )
        ],
        processing_time_sla="কমিশনের যাচাই ও নিরাপত্তা ছাড়পত্র সাপেক্ষে ৬০ থেকে ৯০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারী প্রতিষ্ঠানের ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="মালিক বা পরিচালকদের জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="নেটওয়ার্ক টপোলজি ডায়াগ্রাম ও ব্যবহৃত ব্যান্ডউইথ প্রোভাইডারের বিবরণ",
                is_mandatory=True,
                format_type="কারিগরি নকশা"
            ),
            RequiredDocument(
                name="ব্যাংক সলভেন্সি সার্টিফিকেট (ন্যূনতম আর্থিক সামর্থ্যের প্রমাণ)",
                is_mandatory=True,
                format_type="মূল কপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="বিটিআরসি পোর্টালে অনলাইন লাইসেন্স আবেদন",
                description="https://btrc.gov.bd পোর্টালে গিয়ে নির্ধারিত পে-অর্ডার ও কারিগরি নথিসহ আবেদন সাবমিট করুন।",
                action_url="https://btrc.gov.bd",
                tips="দালাল ছাড়াই সরাসরি নিজের কোম্পানির নামে আবেদন করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="গোয়েন্দা সংস্থা ও বিটিআরসি কারিগরি টিম কর্তৃক ভেরিফিকেশন",
                description="আবেদনকারীর বিরুদ্ধে কোনো সাইবার অপরাধ বা রাষ্ট্রবিরোধী রেকর্ড নেই তা যাচাই করা হবে।",
                tips="তদন্তে অবৈধ সুবিধা দেওয়া দণ্ডনীয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="আইএসপি লাইসেন্স ইস্যু ও ব্যান্ডউইথ সংযোগ",
                description="অনুমোদিত হলে বিটিআরসি ৫ বছর মেয়াদি লাইসেন্স ইস্যু করবে যার ভিত্তিতে এনটিটিএন ও আইআইজি থেকে বৈধ ব্যান্ডউইথ টানা যাবে।"
            )
        ],
        official_portal_url="https://btrc.gov.bd",
        application_url="https://btrc.gov.bd",
        citizen_charter_url="https://ptd.portal.gov.bd",
        anti_broker_warning="সতর্কতা: অবৈধ ব্রডব্যান্ড ব্যবসা ফৌজদারি অপরাধ। কোনো দালাল লাইসেন্স করিয়ে দেওয়ার চুক্তি করতে চাইলে সরাসরি বিটিআরসি হেল্পলাইন ১০০ নম্বরে জানান।"
    ))

    # 100. অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-online-news-portal-govt-registration",
        title_bn="অনলাইন নিউজ পোর্টাল ও দৈনিক পত্রিকার সরকারি নিবন্ধন নির্দেশিকা",
        title_en="Online News Portal & Newspaper Official Government Registration Guide",
        category="গণমাধ্যম ও তথ্যপ্রযুক্তি",
        department_agency="তথ্য অধিদপ্তর (PID), তথ্য ও সম্প্রচার মন্ত্রণালয়",
        summary="অনলাইন সংবাদমাধ্যম ও আইপি টিভির অপসাংবাদিকতা রোধ ও প্রাতিষ্ঠানিক স্বীকৃতির জন্য তথ্য ও সম্প্রচার মন্ত্রণালয় থেকে সরকারি নিবন্ধন বাধ্যতামূলক। গোয়েন্দা সংস্থার ছাড়পত্র সাপেক্ষে প্রকৃত গণমাধ্যম প্রতিষ্ঠানগুলোকে নিবন্ধন প্রদান করা হয়। দালালের খপ্পরে না পড়ে তথ্য অধিদপ্তরের মাধ্যমে আবেদন করার সরকারি নিয়মাবলী।",
        official_fees=[
            ServiceFee(
                category_name="অনলাইন নিউজ পোর্টাল প্রাথমিক নিবন্ধন ফি",
                amount_bdt=10000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান (কোড: ১-১৫৩৩-০০০০-২৬৮১)",
                remarks="নিবন্ধন অনুমোদনের পর চালানের মাধ্যমে জমা।"
            ),
            ServiceFee(
                category_name="বার্ষিক লাইসেন্স নবায়ন ফি",
                amount_bdt=5000.0,
                vat_included=True,
                payment_method="ট্রেজারি চালান",
                remarks="প্রতি বছর ৫,০০০ টাকা নবায়ন ফি।"
            )
        ],
        processing_time_sla="নিরাপত্তা ছাড়পত্র ও মন্ত্রণালয়ের অনুমোদন সাপেক্ষে ৯০ থেকে ১৮০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="সম্পাদক ও প্রকাশকের জাতীয় পরিচয়পত্র (NID), ছবি ও শিক্ষাগত যোগ্যতার সনদ",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="ডোমেইন রেজিস্ট্রেশন ও হোস্টিংয়ের বৈধ মালিকানার চুক্তিপত্র",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="পত্রিকা বা পোর্টালের স্থায়ী অফিস ও সম্পাদকীয় সেটআপের প্রমাণপত্র",
                is_mandatory=True,
                format_type="ভাড়া চুক্তিপত্র ও ছবি"
            ),
            RequiredDocument(
                name="ট্রেড লাইসেন্স ও ই-টিন সার্টিফিকেট",
                is_mandatory=True,
                format_type="ফটোকপি"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="তথ্য অধিদপ্তরে নির্ধারিত ফরমে আবেদন দাখিল",
                description="তথ্য অধিদপ্তর (PID) বরাবর নির্ধারিত ফরমে পোর্টালের বিবরণ ও প্রকাশকের অঙ্গীকারনামাসহ আবেদন জমা দিন।",
                action_url="https://pressinform.gov.bd",
                tips="দালাল ছাড়াই সরাসরি সচিবালয়ে পিআইডি কাউন্টারে জমা দেওয়া যায়।"
            ),
            ApplicationStep(
                step_number=2,
                title="স্বরাষ্ট্র মন্ত্রণালয় ও নিরাপত্তা গোয়েন্দা সংস্থার ছাড়পত্র",
                description="মন্ত্রণালয় আবেদনটি পুলিশের স্পেশাল ব্রাঞ্চ (SB) ও এনএসআই-এর নিকট নিরাপত্তা ছাড়পত্রের জন্য পাঠাবে।",
                tips="কোনো অসত্য বা বিভ্রান্তিকর তথ্য দেবেন না।"
            ),
            ApplicationStep(
                step_number=3,
                title="চালান জমা ও সরকারি গেজেটভুক্ত নিবন্ধন সনদ গ্রহণ",
                description="অনুমোদনপত্র প্রাপ্তির পর ১০,০০০ টাকার ট্রেজারি চালান জমা দিলে তথ্য ও সম্প্রচার মন্ত্রণালয় আনুষ্ঠানিক নিবন্ধন সনদ ইস্যু করবে।"
            )
        ],
        official_portal_url="https://pressinform.gov.bd",
        application_url="https://moi.gov.bd",
        citizen_charter_url="https://moi.portal.gov.bd",
        anti_broker_warning="সতর্কতা: সাংবাদিকতার নামে কার্ড বিক্রি করা বা কোনো দালাল চক্রের মাধ্যমে পোর্টাল নিবন্ধন করানোর প্রতিশ্রুতি সম্পূর্ণ ভুয়া। সরাসরি তথ্য অধিদপ্তরের অফিসিয়াল প্রক্রিয়ার মাধ্যমে আবেদন করুন।"
    ))

    # 101. বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dss-orphan-capitation-grant-madrasha",
        title_bn="বেসরকারি এতিমখানা ও মাদ্রাসার জন্য সরকারি ক্যাপিটেশন গ্রান্ট (Capitation Grant) নির্দেশিকা",
        title_en="Private Orphanage & Madrasha Capitation Grant Allowance Official Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়",
        summary="বেসরকারিভাবে পরিচালিত অনুমোদিত এতিমখানা ও লিল্লাহ বোর্ডিংয়ে বসবাসরত পিতৃহীন বা মাতৃহীন শিশুদের ভরণপোষণ ও শিক্ষার জন্য সরকার প্রতি শিশুর জন্য প্রতি মাসে ২,০০০ টাকা হারে ক্যাপিটেশন গ্রান্ট প্রদান করে। এতিমদের টাকা নিয়ে দালাল ও ভুয়া পরিচালনা কমিটির দুর্নীতি রোধে সরকার সরাসরি জিটুপি (G2P) ব্যাংকিং চ্যানেলে অর্থ ছাড় করে।",
        official_fees=[
            ServiceFee(
                category_name="ক্যাপিটেশন গ্রান্ট আবেদন সরকারি ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সমাজসেবা অধিদপ্তরের সম্পূর্ণ ফ্রি সহায়তা সেবা।"
            )
        ],
        processing_time_sla="জেলা কমিটি ও সমাজসেবা অধিদপ্তরের অনুমোদন সাপেক্ষে বাৎসরিক বরাদ্দ",
        required_documents=[
            RequiredDocument(
                name="এতিমখানাটি সমাজসেবা অধিদপ্তর কর্তৃক স্বেচ্ছাসেবী সমাজকল্যাণ সংস্থা হিসেবে নিবন্ধিত হওয়ার সনদ",
                is_mandatory=True,
                format_type="সত্যায়িত ফটোকপি"
            ),
            RequiredDocument(
                name="প্রতিটি এতিম শিশুর মূল মৃত্যু সনদ (পিতার মৃত্যু) ও অনলাইন জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ভেরিফাইড ফটোকপি"
            ),
            RequiredDocument(
                name="শিশুদের ছবিসহ পূর্ণাঙ্গ বালাম বই ও উপস্থিতি খাতা",
                is_mandatory=True,
                format_type="মূল খাতা প্রদর্শন"
            ),
            RequiredDocument(
                name="এতিমখানার নিজস্ব নামে পরিচালিত ব্যাংক হিসাবের স্টেটমেন্ট",
                is_mandatory=True,
                format_type="ব্যাংক স্টেটমেন্ট"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা সমাজসেবা কর্মকর্তা বরাবর আবেদন দাখিল",
                description="এতিম শিশুদের প্রকৃত সংখ্যা ও পিতার মৃত্যু সনদসহ উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।",
                action_url="https://dss.gov.bd",
                tips="দালাল ছাড়াই সরাসরি উপজেলা সমাজসেবা অফিসে যোগাযোগ করুন।"
            ),
            ApplicationStep(
                step_number=2,
                title="উপজেলা যাচাই কমিটি কর্তৃক এতিমখানায় সরেজমিন গণনা",
                description="উপজেলা নির্বাহী কর্মকর্তা (UNO) ও সমাজসেবা কর্মকর্তা এতিমখানায় গিয়ে শিশুদের মুখে মুখে সাক্ষাতকার নিয়ে প্রকৃত এতিমদের মাথা গণনা করবেন।",
                tips="কোনো ভুয়া এতিম শিশু দেখালে প্রতিষ্ঠান বাতিল হবে।"
            ),
            ApplicationStep(
                step_number=3,
                title="অনুমোদিত শিশুর অনুপাতে সরাসরি ব্যাংকে টাকা ছাড়",
                description="অনুমোদন পেলে প্রতি শিশুর জন্য মাসিক ২,০০০ টাকা হারে প্রতি ত্রৈমাসিকে সরাসরি এতিমখানার ব্যাংক হিসাবে টাকা জমা হবে।"
            )
        ],
        official_portal_url="https://dss.gov.bd",
        application_url="https://dss.gov.bd",
        citizen_charter_url="https://dss.portal.gov.bd",
        anti_broker_warning="সতর্কতা: এতিমের হক নষ্ট করা মহাপাপ। কোনো কর্মকর্তা বা দালাল অনুদানের চেক ছাড়ানোর নামে পারসেন্টেজ চাইলে সোজা জেলা প্রশাসক বা দুর্নীতি দমন কমিশন (১০৬) এ জানান।"
    ))

    # 102. হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dss-transgender-hijra-stipend-allowance",
        title_bn="হিজড়া ও অনগ্রসর জনগোষ্ঠীর জীবনমান উন্নয়ন ভাতা ও সরকারি প্রশিক্ষণ নির্দেশিকা",
        title_en="Transgender (Hijra) & Marginalized Community Welfare Allowance & Training Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="সমাজসেবা অধিদপ্তর, সমাজকল্যাণ মন্ত্রণালয়",
        summary="হিজড়া, দলিত, হরিজন, বেদে ও চা-শ্রমিক জনগোষ্ঠীর সামাজিক মর্যাদা প্রতিষ্ঠা ও পুনর্বাসনের জন্য সরকার প্রতি মাসে নিয়মিত মাসিক ভাতা (৮০০ টাকা) এবং বিশেষ কারিগরি প্রশিক্ষণ ও এককালীন ১০,০০০ টাকা পুনর্বাসন অনুদান প্রদান করে। কোনো মধ্যস্বত্বভোগী ছাড়া সরাসরি মোবাইলে (G2P) টাকা পাওয়া যায়।",
        official_fees=[
            ServiceFee(
                category_name="ভাতা ও প্রশিক্ষণ আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সরকারের সম্পূর্ণ ফ্রি কল্যাণমূলক সেবা।"
            )
        ],
        processing_time_sla="উপজেলা কমিটির তালিকাভুক্তির পর নিয়মিত মাসিক বিতরণ",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা অনলাইন জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="সিভিল সার্জন কর্তৃক হিজড়া জনগোষ্ঠীর প্রত্যয়নপত্র (হিজড়া ভাতার ক্ষেত্রে)",
                is_mandatory=True,
                format_type="মেডিকেল সনদ"
            ),
            RequiredDocument(
                name="ইউপি চেয়ারম্যান বা কাউন্সিলর কর্তৃক অনগ্রসর সম্প্রদায় প্রত্যয়ন",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="আবেদনকারীর সচল নগদ বা বিকাশ মোবাইল একাউন্ট",
                is_mandatory=True,
                format_type="সচল নম্বর"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="উপজেলা সমাজসেবা কার্যালয়ে যোগাযোগ ও নাম অন্তর্ভুক্তি",
                description="এনআইডি ও সিভিল সার্জনের প্রত্যয়নপত্র নিয়ে উপজেলা সমাজসেবা অফিসারের নিকট আবেদন করুন।",
                action_url="https://dss.gov.bd",
                tips="দালাল ছাড়াই সরাসরি সমাজসেবা অফিসে যান।"
            ),
            ApplicationStep(
                step_number=2,
                title="৫০ দিনের সরকারি ড্রাইভিং বা সেলাই প্রশিক্ষণ গ্রহণ",
                description="সমাজসেবা অধিদপ্তর পরিচালিত আয়বর্ধক ভোকেশনাল প্রশিক্ষণে অংশ নিলে দৈনিক ভাতা ও প্রশিক্ষণ শেষে টুলস দেওয়া হয়।",
                tips="প্রশিক্ষণ সম্পূর্ণ ফ্রি।"
            ),
            ApplicationStep(
                step_number=3,
                title="সরাসরি মোবাইলে মাসিক ভাতা ও অনুদান লাভ",
                description="জিটুপি সিস্টেমে প্রতি মাসের শুরুতে সরাসরি নিজের নগদ বা বিকাশ একাউন্টে সরকারি ভাতার টাকা চলে আসবে।"
            )
        ],
        official_portal_url="https://dss.gov.bd",
        application_url="https://dss.gov.bd",
        citizen_charter_url="https://dss.portal.gov.bd",
        anti_broker_warning="সতর্কতা: পিছিয়ে পড়া জনগোষ্ঠীর ভাতা তাদের মৌলিক অধিকার। কোনো দালাল কার্ড করিয়ে দেওয়ার নামে টাকা দাবি করলে উপজেলা নির্বাহী কর্মকর্তা বা ১০৬ এ জানান।"
    ))

    # 103. ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-dss-beggar-rehabilitation-grant",
        title_bn="ভিক্ষুক পুনর্বাসন ও বিকল্প কর্মসংস্থান সরকারি অনুদান নির্দেশিকা",
        title_en="Beggar Rehabilitation & Alternative Employment Government Grant Guide",
        category="সামাজিক নিরাপত্তা ও কল্যাণ",
        department_agency="সমাজসেবা অধিদপ্তর ও জেলা প্রশাসন",
        summary="ভিক্ষাবৃত্তিমুক্ত সমাজ গঠনে সরকার প্রকৃত ভিক্ষুকদের ভিক্ষা ছেড়ে সম্মানজনক জীবিকা নির্বাহের জন্য এককালীন ২৫,০০০ থেকে ৫০,০০০ টাকা সমমূল্যের সম্পদ (যেমন: মুদি দোকানের মালামাল, গাভী, রিকশা বা ভ্যান) সম্পূর্ণ বিনামূল্যে অনুদান হিসেবে প্রদান করে। দালালদের খপ্পর ছাড়া উপজেলা প্রশাসনের মাধ্যমে এই সহায়তা মেলে।",
        official_fees=[
            ServiceFee(
                category_name="পুনর্বাসন অনুদান আবেদন ফি",
                amount_bdt=0.0,
                vat_included=True,
                payment_method="সম্পূর্ণ বিনামূল্যে (০ টাকা)",
                remarks="সম্পূর্ণ ফ্রি সরকারি সহায়তা।"
            )
        ],
        processing_time_sla="যাচাই ও মালামাল ক্রয়ের পর ১৫ থেকে ৩০ কার্যদিবস",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারীর জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধন",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ইউনিয়ন পরিষদ চেয়ারম্যান বা ওয়ার্ড কাউন্সিলরের প্রত্যয়নপত্র",
                is_mandatory=True,
                format_type="সিলযুক্ত সনদ"
            ),
            RequiredDocument(
                name="ভিক্ষাবৃত্তি ছেড়ে বিকল্প কাজ করার লিখিত অঙ্গীকারনামা",
                is_mandatory=True,
                format_type="টিপসই/স্বাক্ষরিত অঙ্গীকার"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="ইউএনও বা উপজেলা সমাজসেবা অফিসারের কাছে আবেদন",
                description="উপজেলা ভিক্ষুক পুনর্বাসন কমিটির সভাপতি (ইউএনও) বরাবর কী ধরণের বিকল্প কাজ করতে চান তা উল্লেখ করে আবেদন করুন।",
                tips="দালাল ছাড়াই সরাসরি ইউএনও অফিসে যান।"
            ),
            ApplicationStep(
                step_number=2,
                title="কমিটি কর্তৃক সরেজমিন যাচাই ও প্যাকেজ অনুমোদন",
                description="কমিটি যাচাই করে আবেদনকারীকে গরু, ভ্যানগাড়ি বা মুদি দোকানের সামগ্রী ক্রয়ের অনুমোদন দেবে।",
                tips="নগদ টাকার বদলে সরাসরি মালামাল কিনে দেওয়া হয় যাতে অপব্যবহার না হয়।"
            ),
            ApplicationStep(
                step_number=3,
                title="আনুষ্ঠানিকভাবে মালামাল ও সনদপত্র হস্তান্তর",
                description="জেলা প্রশাসক বা ইউএনও আনুষ্ঠানিকভাবে কৃষিজীবী বা ব্যবসায়িক সামগ্রী তুলে দেবেন যাতে পরিবারটি স্বাবলম্বী হতে পারে।"
            )
        ],
        official_portal_url="https://dss.gov.bd",
        application_url="https://dss.gov.bd",
        citizen_charter_url="https://mopa.gov.bd",
        anti_broker_warning="সতর্কতা: ভিক্ষুকদের পুনর্বাসন তহবিলের এক পয়সাও আত্মসাৎ করা মারাত্মক অপরাধ। কোনো মধ্যস্বত্বভোগী অনুদানের সম্পদ দেওয়ার নামে অর্থ দাবি করলে সাথে সাথে ইউএনও বা ৯৯৯ এ কল দিন।"
    ))

    # 104. জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা
    services.append(CitizenService(
        service_id="bd-nha-govt-flat-plot-allotment",
        title_bn="জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA): সরকারি প্লট ও ফ্ল্যাট বরাদ্দ আবেদন নির্দেশিকা",
        title_en="National Housing Authority NHA Govt Flat & Plot Allotment Official Guide",
        category="আবাসন ও নগর উন্নয়ন",
        department_agency="জাতীয় গৃহায়ন কর্তৃপক্ষ (NHA), গৃহায়ন ও গণপূর্ত মন্ত্রণালয়",
        summary="মধ্যবিত্ত, নিম্নবিত্ত ও সরকারি কর্মচারীদের জন্য সরকার জাতীয় গৃহায়ন কর্তৃপক্ষের মাধ্যমে সাশ্রয়ী মূল্যে প্লট ও ফ্ল্যাট বরাদ্দ দেয়। গৃহায়নের লটারি ও বরাদ্দের নামে বাইরে সংঘবদ্ধ দালাল চক্র কোটি কোটি টাকা প্রতারণা করে। প্রকৃতপক্ষে সমস্ত বরাদ্দ অফিশিয়াল বিজ্ঞপ্তির মাধ্যমে সোনালী ব্যাংকে চালানের ফি জমা দিয়ে ডিজিটাল লটারিতে সম্পূর্ণ স্বচ্ছভাবে সম্পন্ন হয়।",
        official_fees=[
            ServiceFee(
                category_name="প্লট / ফ্ল্যাট আবেদন ফরম ও প্রসপেক্টাস ফি",
                amount_bdt=1000.0,
                vat_included=True,
                payment_method="অনুমোদিত ব্যাংকে পে-অর্ডার / চালান",
                remarks="প্রকল্প অনুযায়ী ১,০০০ থেকে ২,০০০ টাকা।"
            ),
            ServiceFee(
                category_name="প্রাথমিক জামানত (Earnest Money Deposit)",
                amount_bdt=50000.0,
                vat_included=True,
                payment_method="ব্যাংক পে-অর্ডার (অফেরতযোগ্য নয়, লটারিতে না পেলে ফেরতযোগ্য)",
                remarks="ফ্ল্যাট অনুযায়ী ৫০,০০০ থেকে ২,০০,০০০ টাকা জামানত।"
            )
        ],
        processing_time_sla="বিজ্ঞপ্তি সাপেক্ষে ডিজিটাল লটারি ও কিস্তিভিত্তিক হস্তান্তর",
        required_documents=[
            RequiredDocument(
                name="আবেদনকারী ও স্বামীর/স্ত্রীর জাতীয় পরিচয়পত্র (NID) ও ছবি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="আবেদনকারী বা পরিবারের ঢাকায় অন্য কোনো সরকারি প্লট নেই মর্মে নোটারি এফিডেভিট",
                is_mandatory=True,
                format_type="৩০০ টাকার নন-জুডিশিয়াল স্ট্যাম্প"
            ),
            RequiredDocument(
                name="ই-টিন সার্টিফিকেট ও সর্বশেষ আয়কর রিটার্ন জমার কপি",
                is_mandatory=True,
                format_type="ফটোকপি"
            ),
            RequiredDocument(
                name="ব্যাংক ড্রাফট বা পে-অর্ডারের মূল কপি",
                is_mandatory=True,
                format_type="মূল পে-অর্ডার"
            )
        ],
        step_by_step_process=[
            ApplicationStep(
                step_number=1,
                title="গৃহায়ন কর্তৃপক্ষের বিজ্ঞপ্তি দেখে ব্যাংকে আবেদন দাখিল",
                description="গৃহায়নের ওয়েবসাইটে (https://nha.gov.bd) প্রকাশিত বিজ্ঞপ্তি অনুযায়ী সোনালী ব্যাংকে জামানতের পে-অর্ডারসহ আবেদন জমা দিন।",
                action_url="https://nha.gov.bd",
                tips="কোনো দালালকে টাকা দিয়ে প্লট পাওয়ার কোনো সুযোগ নেই।"
            ),
            ApplicationStep(
                step_number=2,
                title="উন্মুক্ত ডিজিটাল লটারির মাধ্যমে বরাদ্দ",
                description="আবেদনকারীদের উপস্থিতিতে ও সিসিটিভি ক্যামেরার সামনে সফটওয়্যারের মাধ্যমে ডিজিটাল লটারি অনুষ্ঠিত হয়।",
                tips="লটারিতে নাম না এলে ব্যাংকের পে-অর্ডার সম্পূর্ণ ফেরত পাওয়া যায়।"
            ),
            ApplicationStep(
                step_number=3,
                title="বরাদ্দপত্র ও কিস্তিতে মূল্য পরিশোধ",
                description="লটারিতে নির্বাচিত হলে আনুষ্ঠানিক বরাদ্দপত্র ইস্যু করা হবে এবং সহজ কিস্তিতে টাকা দিয়ে ফ্ল্যাটের চাবি বুঝে নেওয়া যাবে।"
            )
        ],
        official_portal_url="https://nha.gov.bd",
        application_url="https://nha.gov.bd",
        citizen_charter_url="https://mohpw.gov.bd",
        anti_broker_warning="সতর্কতা: গৃহায়ন কর্তৃপক্ষ বা রাজউকের কোনো কর্মচারী বা দালাল যদি বলে লটারি ছাড়াই গোপনে প্লট পাইয়ে দেবে—সেটি সম্পূর্ণ জালিয়াতি। কোনো প্রতারককে টাকা দেবেন না, সরাসরি চেয়ারম্যান এনএইচএ-র সাথে দেখা করুন।"
    ))

    return services
