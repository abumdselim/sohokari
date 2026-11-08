from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime

class ServiceFee(BaseModel):
    category_name: str = Field(..., description="ফি-এর ক্যাটাগরি (যেমন: সাধারণ, জরুরি, ৫ বছর মেয়াদি, ১০ বছর মেয়াদি)")
    amount_bdt: float = Field(..., description="নির্ধারিত সরকারি টাকার পরিমাণ")
    vat_included: bool = Field(default=True, description="ভ্যাট অন্তর্ভুক্ত কি না")
    payment_method: str = Field(default="অনলাইন / চালান / নির্দিষ্ট ব্যাংক", description="ফি পরিশোধের মাধ্যম")
    remarks: Optional[str] = Field(None, description="অতিরিক্ত মন্তব্য")

class RequiredDocument(BaseModel):
    name: str = Field(..., description="কাগজপত্রের নাম (যেমন: জাতীয় পরিচয়পত্র, এসএসসি সনদ, ইউটিলিটি বিল)")
    is_mandatory: bool = Field(default=True, description="বাধ্যতামূলক কি না")
    attestation_required: bool = Field(default=False, description="সত্যায়ন প্রয়োজন কি না")
    format_type: str = Field(default="অরিজিনাল ও ফটোকপি", description="কোন ফরম্যাটে জমা দিতে হবে (অনলাইন স্ক্যান / ফটোকপি / মূল কপি)")
    how_to_obtain: Optional[str] = Field(None, description="কাগজপত্রটি কোথায় বা কীভাবে সংগ্রহ করা যাবে")

class ApplicationStep(BaseModel):
    step_number: int
    title: str
    description: str
    action_url: Optional[str] = None
    tips: Optional[str] = None

class ServiceOfficer(BaseModel):
    designation: Optional[str] = None
    department: Optional[str] = None
    office_address: Optional[str] = None
    helpline: Optional[str] = None
    email: Optional[str] = None

class CitizenService(BaseModel):
    service_id: str = Field(..., description="ইউনিক আইডেন্টিফায়ার (slug)")
    title_bn: str = Field(..., description="সেবার নাম (বাংলা)")
    title_en: Optional[str] = Field(None, description="সেবার নাম (ইংরেজি)")
    category: str = Field(..., description="ক্যাটাগরি (পাসপোর্ট, এনআইডি, ভূমি সেবা, ইত্যাদি)")
    sub_category: Optional[str] = None
    department_agency: str = Field(..., description="মন্ত্রণালয় ও দপ্তর/অধিদপ্তর")
    summary: str = Field(..., description="সেবার সংক্ষিপ্ত সারসংক্ষেপ")
    
    # নাগরিক ভোগান্তি ও দালাল রোধের প্রধান তথ্যসমূহ
    official_fees: List[ServiceFee] = Field(default_factory=list, description="সরকারি নির্ধারিত ফি-এর তালিকা")
    processing_time_sla: str = Field(..., description="সেবা প্রদানের সর্বোচ্চ সরকারি সময়সীমা")
    required_documents: List[RequiredDocument] = Field(default_factory=list, description="প্রয়োজনীয় কাগজপত্র")
    step_by_step_process: List[ApplicationStep] = Field(default_factory=list, description="ধাপে ধাপে আবেদন পদ্ধতি")
    
    # অফিশিয়াল লিঙ্ক ও ফরম
    official_portal_url: str = Field(..., description="মূল সরকারি ওয়েবসাইট")
    application_url: Optional[str] = Field(None, description="সরাসরি অনলাইনে আবেদন করার অফিশিয়াল লিঙ্ক")
    citizen_charter_url: Optional[str] = Field(None, description="সেবাকুঞ্জ বা সিটিজেন চার্টার সোর্স লিঙ্ক")
    form_download_urls: List[Dict[str, str]] = Field(default_factory=list, description="পিডিএফ ফর্ম বা নির্দেশিকা ডাউনলোড লিঙ্ক")
    
    # জবাবদিহিতা ও অভিযোগ নিষ্পত্তি (GRS)
    responsible_officer: Optional[ServiceOfficer] = None
    grievance_remedy: Optional[str] = Field(None, description="সেবা পেতে দেরি বা হয়রানি হলে প্রতিকারের নিয়ম / আপিল কর্মকর্তা")
    
    # দালাল ও প্রতারণা রোধে নাগরিক সচেতনতা
    anti_broker_warning: str = Field(
        default="সতর্কতা: এই সেবা পেতে কোনো দালাল বা মধ্যস্বত্বভোগীর শরণাপন্ন হবেন না। সরকার নির্ধারিত ফি ছাড়া কাউকে অতিরিক্ত অর্থ দেবেন না।",
        description="দালাল ও প্রতারণা রোধে বিশেষ নির্দেশনা"
    )
    faqs: List[Dict[str, str]] = Field(default_factory=list, description="সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর")
    
    # মেটাডাটা
    source_platform: str = Field(default="services.portal.gov.bd", description="উৎস পোর্টাল")
    last_scraped_at: datetime = Field(default_factory=datetime.utcnow)
    version: int = 1
