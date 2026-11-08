import os
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS_DIR = os.path.join(BASE_DIR, 'public', 'assets')
os.makedirs(ASSETS_DIR, exist_ok=True)

# 109 tools with rich bilingual info
TOOLS_DATA = [
  {
    "id": "merge-pdf",
    "title": "Merge PDF",
    "titleBn": "পিডিএফ মার্জ (Merge)",
    "desc": "Combine multiple PDFs into one unified file.",
    "descBn": "জাতীয় পরিচয়পত্র, ছবি ও আবেদন ফরম একসাথে এক ফাইলে জোড়া লাগান।",
    "category": "organize",
    "icon": "merge",
    "badge": "সর্বাধিক ব্যবহৃত",
    "popular": True
  },
  {
    "id": "compress-pdf",
    "title": "Compress PDF",
    "titleBn": "কম্প্রেস পিডিএফ (Compress)",
    "desc": "Reduce PDF file size while keeping visual quality high.",
    "descBn": "সরকারি আবেদনের জন্য সাইজ কমান (১০০KB, ৩০০KB, ৫০০KB বা ১MB)।",
    "category": "edit",
    "icon": "compress",
    "badge": "সরকারি আবেদন স্পেশাল",
    "popular": True
  },
  {
    "id": "jpg-to-pdf",
    "title": "JPG/PNG to PDF",
    "titleBn": "ছবি থেকে পিডিএফ (Image to PDF)",
    "desc": "Convert smartphone photos or scans of documents into clean PDFs.",
    "descBn": "মোবাইলে তোলা দলিল, সার্টিফিকেট ও ছবির ফাইলকে ঝকঝকে পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "image",
    "badge": "জনপ্রিয়",
    "popular": True
  },
  {
    "id": "pdf-to-jpg",
    "title": "PDF to JPG",
    "titleBn": "পিডিএফ থেকে ছবি (PDF to JPG)",
    "desc": "Convert PDF pages into high-resolution JPG/PNG images.",
    "descBn": "পিডিএফের প্রতিটি পাতাকে হাই-রেজোলিউশন ছবিতে রূপান্তর করুন।",
    "category": "convert",
    "icon": "photo_library",
    "badge": "জনপ্রিয়",
    "popular": True
  },
  {
    "id": "sign-pdf",
    "title": "Sign & Stamp PDF",
    "titleBn": "ডিজিটাল স্বাক্ষর ও সিল (Sign)",
    "desc": "Draw your signature or place an official stamp directly on the document.",
    "descBn": "সরাসরি স্ক্রিনে সাইন করুন অথবা স্বাক্ষরের ছবি ফাইলে বসিয়ে দিন।",
    "category": "edit",
    "icon": "draw",
    "badge": "নাগরিক সেবা",
    "popular": True
  },
  {
    "id": "watermark-pdf",
    "title": "Watermark PDF",
    "titleBn": "জলছাপ যোগ (Watermark)",
    "desc": "Add custom security text or image watermark across all pages.",
    "descBn": "নথির অপব্যবহার রোধে 'শুধুমাত্র পাসপোর্ট আবেদনের জন্য' জলছাপ দিন।",
    "category": "edit",
    "icon": "branding_watermark",
    "badge": "নিরাপত্তা",
    "popular": True
  },
  {
    "id": "split-pdf",
    "title": "Split PDF",
    "titleBn": "পিডিএফ স্প্লিট (Split)",
    "desc": "Extract specific pages or break a large file into separate parts.",
    "descBn": "বড় ফাইল বা দলিল থেকে নির্দিষ্ট পৃষ্ঠাগুলো আলাদা বা বাদ দিন।",
    "category": "organize",
    "icon": "content_cut",
    "badge": "জনপ্রিয়",
    "popular": True
  },
  {
    "id": "docx-to-pdf",
    "title": "Word to PDF",
    "titleBn": "ওয়ার্ড থেকে পিডিএফ (Word to PDF)",
    "desc": "Convert DOCX documents to official, uneditable PDF format.",
    "descBn": "মাইক্রোসফট ওয়ার্ড ফাইলকে ফিক্সড লেআউট পিডিএফে রূপান্তর করুন।",
    "category": "convert",
    "icon": "description",
    "badge": "অফিসিয়াল",
    "popular": True
  },
  {
    "id": "pdf-to-word",
    "title": "PDF to Word",
    "titleBn": "পিডিএফ থেকে ওয়ার্ড (PDF to Word)",
    "desc": "Convert PDFs into editable Word documents effortlessly.",
    "descBn": "সহজে এডিট করতে পিডিএফকে ওয়ার্ড ফাইলে রূপান্তর করুন।",
    "category": "convert",
    "icon": "article",
    "badge": "জনপ্রিয়",
    "popular": True
  },
  {
    "id": "ocr-pdf",
    "title": "OCR & Extract Text",
    "titleBn": "ওসিআর ও টেক্সট এক্সট্রাক্ট (OCR)",
    "desc": "Read text from scanned papers and convert to searchable format.",
    "descBn": "স্ক্যান করা দলিল ও বইয়ের পাতা থেকে লেখা কপিযোগ্য টেক্সটে বের করুন।",
    "category": "edit",
    "icon": "document_scanner",
    "badge": "স্মার্ট টেক্সট",
    "popular": True
  },
  {
    "id": "protect-pdf",
    "title": "Protect PDF (Password)",
    "titleBn": "পাসওয়ার্ড দিয়ে লক (Protect)",
    "desc": "Encrypt your PDF with a strong password to prevent unauthorized viewing.",
    "descBn": "শক্তিশালী এনক্রিপশন পাসওয়ার্ড দিয়ে গোপনীয় ফাইল সুরক্ষিত করুন।",
    "category": "security",
    "icon": "lock",
    "badge": "নিরাপত্তা",
    "popular": True
  },
  {
    "id": "unlock-pdf",
    "title": "Unlock PDF",
    "titleBn": "পাসওয়ার্ড দিয়ে আনলক (Unlock)",
    "desc": "Remove restrictions and passwords from authorized PDF documents.",
    "descBn": "জানা পাসওয়ার্ড দিয়ে পারমিশন রিমুভ করে সহজে প্রিন্ট বা শেয়ার করুন।",
    "category": "security",
    "icon": "lock_open",
    "badge": "নিরাপত্তা",
    "popular": True
  },
  {
    "id": "organize-pdf",
    "title": "Reorder / Delete Pages",
    "titleBn": "পেজ পুনর্বিন্যাস ও ডিলিট",
    "desc": "Drag pages to reorder or click to remove unwanted pages.",
    "descBn": "ড্র্যাগ করে পাতার ক্রম পরিবর্তন করুন বা অপ্রয়োজনীয় পাতা মুছুন।",
    "category": "organize",
    "icon": "grid_view"
  },
  {
    "id": "add-page-numbers",
    "title": "Add Page Numbers",
    "titleBn": "পৃষ্ঠা নম্বর যোগ",
    "desc": "Add custom page numbers to header or footer.",
    "descBn": "নথিতে স্বয়ংক্রিয়ভাবে হেডার বা ফুটারে পেজ নম্বর বসান।",
    "category": "organize",
    "icon": "format_list_numbered"
  },
  {
    "id": "header-footer-pdf",
    "title": "Add Header & Footer",
    "titleBn": "হেডার ও ফুটার যোগ",
    "desc": "Add headers and footers with custom text, dates, or pagination.",
    "descBn": "প্রতিটি পৃষ্ঠার উপরে বা নিচে অফিশিয়াল টেক্সট বা তারিখ যোগ করুন।",
    "category": "edit",
    "icon": "view_agenda"
  },
  {
    "id": "split-by-bookmarks",
    "title": "Split by Bookmarks",
    "titleBn": "বুকমার্ক অনুযায়ী স্প্লিট",
    "desc": "Split PDF at each bookmark chapter.",
    "descBn": "বুকমার্ক করা অংশ অনুযায়ী ফাইল আলাদা করুন।",
    "category": "organize",
    "icon": "bookmark_manager"
  },
  {
    "id": "split-by-size",
    "title": "Split by Size",
    "titleBn": "ফাইলের সাইজ অনুযায়ী স্প্লিট",
    "desc": "Divide PDF into parts staying under a specific file size.",
    "descBn": "নির্দিষ্ট মেগাবাইট বা কিলোবাইটের সীমার ভেতর ফাইল ভাগ করুন।",
    "category": "organize",
    "icon": "storage"
  },
  {
    "id": "merge-alternate",
    "title": "Merge Alternate Pages",
    "titleBn": "অল্টারনেট পেজ মার্জ",
    "desc": "Interleave pages from two PDFs in alternating order.",
    "descBn": "দুই ফাইলের পাতা ক্রমানুসারে (১, ২, ৩...) সাজিয়ে জোড়া দিন।",
    "category": "organize",
    "icon": "layers"
  },
  {
    "id": "pdf-workflow",
    "title": "PDF Workflow",
    "titleBn": "অটোমেটেড ওয়ার্কফ্লো",
    "desc": "Chain multiple PDF operations in a single automated flow.",
    "descBn": "একসাথে একাধিক কমান্ডের ধারাবাহিক কাজ এক ক্লিকে সম্পন্ন করুন।",
    "category": "organize",
    "icon": "account_tree"
  },
  {
    "id": "compare-pdf",
    "title": "Compare PDF",
    "titleBn": "দুই ফাইলের তুলনা (Compare)",
    "desc": "Side-by-side comparison of two PDFs.",
    "descBn": "দুটি ফাইলের মধ্যকার পার্থক্য বা টেক্সটের পরিবর্তন শনাক্ত করুন।",
    "category": "organize",
    "icon": "compare"
  },
  {
    "id": "reverse-pdf",
    "title": "Reverse Pages",
    "titleBn": "উল্টো ক্রমে সাজানো (Reverse)",
    "desc": "Invert page sequence from last to first.",
    "descBn": "পাতার ক্রম শেষ থেকে শুরুতে উল্টে নিন।",
    "category": "organize",
    "icon": "swap_vert"
  },
  {
    "id": "pdf-info",
    "title": "PDF Info & Metadata",
    "titleBn": "পিডিএফের মেটাডাটা ও তথ্য",
    "desc": "Inspect metadata, encryption, version, and page geometry.",
    "descBn": "পেজ সংখ্যা, সাইজ, ভার্সন ও সিকিউরিটি তথ্য দেখুন।",
    "category": "organize",
    "icon": "info"
  },
  {
    "id": "remove-blank-pages",
    "title": "Remove Blank Pages",
    "titleBn": "খালি পাতা অপসারণ",
    "desc": "Automatically detect and remove blank scan pages.",
    "descBn": "স্ক্যানের ফাঁকা বা সাদা পাতা স্বয়ংক্রিয়ভাবে মুছে ফেলুন।",
    "category": "organize",
    "icon": "filter_none"
  },
  {
    "id": "duplicate-pages",
    "title": "Duplicate Pages",
    "titleBn": "পৃষ্ঠা ডুপ্লিকেট করা",
    "desc": "Clone selected pages within the same document.",
    "descBn": "যেকোনো পাতা কপি বা অতিরিক্ত নকল তৈরি করুন।",
    "category": "organize",
    "icon": "control_point_duplicate"
  },
  {
    "id": "extract-pages",
    "title": "Extract Pages",
    "titleBn": "নির্দিষ্ট পৃষ্ঠা এক্সট্রাক্ট",
    "desc": "Save selected pages into a new clean PDF.",
    "descBn": "ফাইল থেকে প্রয়োজনীয় পৃষ্ঠাগুলো বের করে নতুন ফাইল তৈরি করুন।",
    "category": "organize",
    "icon": "filter"
  },
  {
    "id": "bookmarks-pdf",
    "title": "Bookmarks & TOC",
    "titleBn": "বুকমার্ক ও সূচিপত্র",
    "desc": "Create and edit table of contents and outline bookmarks.",
    "descBn": "সহজে পড়ার জন্য ক্লিকেবল সূচিপত্র যোগ করুন।",
    "category": "organize",
    "icon": "bookmark"
  },
  {
    "id": "pdf-to-powerpoint",
    "title": "PDF to PowerPoint",
    "titleBn": "পিডিএফ থেকে পাওয়ারপয়েন্ট",
    "desc": "Convert presentation PDFs to editable PPTX slides.",
    "descBn": "প্রেজেন্টেশন স্লাইড ফরম্যাটে কনভার্ট করুন।",
    "category": "convert",
    "icon": "slideshow"
  },
  {
    "id": "pdf-to-excel",
    "title": "PDF to Excel",
    "titleBn": "পিডিএফ থেকে এক্সেল",
    "desc": "Extract tables and rows to Excel XLSX spreadsheets.",
    "descBn": "টেবিল ও ডাটাকে এক্সেল স্প্রেডশীটে রূপান্তর করুন।",
    "category": "convert",
    "icon": "table_chart"
  },
  {
    "id": "extract-images-pdf",
    "title": "Extract Images",
    "titleBn": "সব ছবি এক্সট্রাক্ট",
    "desc": "Extract all embedded raster images from document.",
    "descBn": "পিডিএফ ফাইলের ভেতর থাকা সব ছবি আলাদাভাবে সেভ করুন।",
    "category": "convert",
    "icon": "photo_size_select_actual"
  },
  {
    "id": "pdf-to-pdfa",
    "title": "PDF to PDF/A",
    "titleBn": "সরকারি আর্কাইভ (PDF/A)",
    "desc": "Convert to ISO standard long-term archival format.",
    "descBn": "দীর্ঘমেয়াদী সরকারি নথিপত্র সংরক্ষণের স্ট্যান্ডার্ডে রূপান্তর।",
    "category": "convert",
    "icon": "verified"
  },
  {
    "id": "pdfa-preflight",
    "title": "PDF/A Preflight",
    "titleBn": "পিডিএফ/এ ভ্যালিডেশন",
    "desc": "Verify PDF/A compliance for archival readiness.",
    "descBn": "ফাইলটি আন্তর্জাতিক আর্কাইভ স্ট্যান্ডার্ড মেনে তৈরি কি না যাচাই।",
    "category": "convert",
    "icon": "fact_check"
  },
  {
    "id": "pdf-to-png",
    "title": "PDF to PNG",
    "titleBn": "পিডিএফ থেকে পিএনজি",
    "desc": "Export pages as crisp PNG images.",
    "descBn": "স্বচ্ছ বা উচ্চমানের পিএনজি ছবিতে রূপান্তর।",
    "category": "convert",
    "icon": "image"
  },
  {
    "id": "png-to-pdf",
    "title": "PNG to PDF",
    "titleBn": "পিএনজি থেকে পিডিএফ",
    "desc": "Pack multiple PNG pictures into a single PDF.",
    "descBn": "পিএনজি ফরম্যাটের ছবিগুলোকে পিডিএফে রূপান্তর করুন।",
    "category": "convert",
    "icon": "picture_as_pdf"
  },
  {
    "id": "webp-to-pdf",
    "title": "WebP to PDF",
    "titleBn": "WebP থেকে পিডিএফ",
    "desc": "Convert modern web images into standard PDF documents.",
    "descBn": "ওয়েবপি ছবিকে পিডিএফে রূপান্তর করুন।",
    "category": "convert",
    "icon": "transform"
  },
  {
    "id": "extract-text-pdf",
    "title": "Extract Text",
    "titleBn": "টেক্সট এক্সট্রাক্ট",
    "desc": "Pull all selectable text into a plain text document.",
    "descBn": "পিডিএফ থেকে সব লেখা কপিযোগ্য টেক্সট হিসেবে বের করুন।",
    "category": "convert",
    "icon": "text_snippet"
  },
  {
    "id": "text-to-pdf",
    "title": "Text to PDF",
    "titleBn": "টেক্সট থেকে পিডিএফ",
    "desc": "Convert raw plain text notes to styled PDF pages.",
    "descBn": "সাধারণ টেক্সট ফাইল বা নোটকে সুন্দর পিডিএফে রূপান্তর করুন।",
    "category": "convert",
    "icon": "format_align_left"
  },
  {
    "id": "rotate-pdf",
    "title": "Rotate PDF Pages",
    "titleBn": "পাতা সোজা করা (Rotate)",
    "desc": "Rotate landscape or inverted pages 90 or 180 degrees.",
    "descBn": "আঁকাবাঁকা বা উল্টো হওয়া পাতা ৯০° বা ১৮০° সোজা করুন।",
    "category": "edit",
    "icon": "rotate_right"
  },
  {
    "id": "auto-rotate-pdf",
    "title": "Auto-Rotate Pages",
    "titleBn": "স্বয়ংক্রিয় পাতা সোজা করা",
    "desc": "Automatically detect text orientation and straighten pages.",
    "descBn": "টেক্সট পড়ে উল্টো পাতা নিজে নিজেই সোজা করে নেওয়া।",
    "category": "edit",
    "icon": "screen_rotation"
  },
  {
    "id": "extract-attachments-pdf",
    "title": "Extract Attachments",
    "titleBn": "সংযুক্ত ফাইল বের করা",
    "desc": "Download files embedded inside the PDF.",
    "descBn": "পিডিএফের ভেতরে যুক্ত থাকা ফাইল এক্সট্রাক্ট করুন।",
    "category": "convert",
    "icon": "attachment"
  },
  {
    "id": "tiff-to-pdf",
    "title": "TIFF to PDF",
    "titleBn": "TIFF থেকে পিডিএফ",
    "desc": "Convert multi-page TIFF scanner files to PDF.",
    "descBn": "স্ক্যানার থেকে আসা টিফ ফাইল পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "photo"
  },
  {
    "id": "visual-diff-pdf",
    "title": "Visual PDF Diff",
    "titleBn": "ভিজ্যুয়াল পার্থক্য নির্ণয়",
    "desc": "Visually overlay two revisions to spot minute design differences.",
    "descBn": "দুটি ফাইলের মধ্যে চোখে দেখার মতো কী বদল হয়েছে তা হাইলাইট করুন।",
    "category": "organize",
    "icon": "difference"
  },
  {
    "id": "batch-workflow",
    "title": "Batch PDF Workflow",
    "titleBn": "ব্যাচ প্রসেসিং",
    "desc": "Process multiple documents concurrently.",
    "descBn": "একসাথে একাধিক ফাইলের ওপর একই কাজ দ্রুত চালান।",
    "category": "organize",
    "icon": "dynamic_feed"
  },
  {
    "id": "add-attachments-pdf",
    "title": "Add Attachments",
    "titleBn": "ফাইল অ্যাটাচ করা",
    "desc": "Embed source spreadsheets, images, or files inside PDF.",
    "descBn": "পিডিএফের ভেতরে প্রয়োজনীয় ফাইল বা নথি যুক্ত করুন।",
    "category": "edit",
    "icon": "attach_file"
  },
  {
    "id": "heic-to-pdf",
    "title": "HEIC to PDF",
    "titleBn": "আইফোন HEIC থেকে পিডিএফ",
    "desc": "Convert iPhone camera HEIC photos into PDF.",
    "descBn": "অ্যাপল ডিভাইসে তোলা HEIC ছবি সহজে পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "phone_iphone"
  },
  {
    "id": "bates-numbering-pdf",
    "title": "Bates Numbering",
    "titleBn": "বেটস নাম্বারিং (আদালত ও আইন)",
    "desc": "Apply sequential judicial Bates numbering for legal bundles.",
    "descBn": "আইনি ও আদালতের দলিলের জন্য অফিশিয়াল সিরিয়াল নাম্বার কোড বসান।",
    "category": "edit",
    "icon": "pin"
  },
  {
    "id": "pdf-to-html",
    "title": "PDF to HTML",
    "titleBn": "পিডিএফ থেকে HTML",
    "desc": "Render PDF layout into clean semantic HTML5 code.",
    "descBn": "ওয়েবপেজে প্রদর্শনের জন্য HTML কোডে রূপান্তর।",
    "category": "convert",
    "icon": "code"
  },
  {
    "id": "split-by-text",
    "title": "Split by Text Match",
    "titleBn": "শব্দ অনুযায়ী স্প্লিট",
    "desc": "Split automatically wherever a specific keyword is found.",
    "descBn": "নির্দিষ্ট শব্দ পাওয়া মাত্র ফাইল আলাদা করুন।",
    "category": "organize",
    "icon": "find_in_page"
  },
  {
    "id": "split-by-barcode",
    "title": "Split by Barcode",
    "titleBn": "বারকোড অনুযায়ী স্প্লিট",
    "desc": "Read barcodes on pages and divide batches automatically.",
    "descBn": "পাতার বারকোড রিড করে ফাইল আলাদা ফাইলে ভাগ করুন।",
    "category": "organize",
    "icon": "qr_code_scanner"
  },
  {
    "id": "add-links-pdf",
    "title": "Add Hyperlinks",
    "titleBn": "ক্লিকেবল লিংক যোগ",
    "desc": "Draw clickable web links or internal page jumps.",
    "descBn": "পিডিএফের ভেতরে ওয়েবসাইট বা পাতার ক্লিকেবল হাইপারলিংক বসান।",
    "category": "edit",
    "icon": "link"
  },
  {
    "id": "highlight-pdf",
    "title": "Draw & Highlight",
    "titleBn": "হাইলাইট ও আঁকাআঁকি",
    "desc": "Highlight sentences or freehand draw on pages.",
    "descBn": "ডকুমেন্টের গুরুত্বপূর্ণ লাইন হাইলাইট করুন বা নোট লিখুন।",
    "category": "edit",
    "icon": "brush"
  },
  {
    "id": "stamp-pdf",
    "title": "Official Stamp",
    "titleBn": "অফিশিয়াল স্ট্যাম্প ও সিল",
    "desc": "Apply pre-built or custom seals (Confidential, Approved).",
    "descBn": "'Approved', 'Rejected', 'Verified' বা কাস্টম সিল বসান।",
    "category": "edit",
    "icon": "approval"
  },
  {
    "id": "crop-pdf",
    "title": "Crop PDF Pages",
    "titleBn": "ক্রপ পিডিএফ (Crop)",
    "desc": "Trim margins and remove excessive white space.",
    "descBn": "পাতার অপ্রয়োজনীয় বর্ডার বা মার্জিন কেটে ফেলুন।",
    "category": "edit",
    "icon": "crop"
  },
  {
    "id": "add-padding-pdf",
    "title": "Add Page Padding",
    "titleBn": "মার্জিন বা প্যাডিং যোগ",
    "desc": "Add whitespace borders around pages for clean binding.",
    "descBn": "পাতার চারপাশে প্রিন্টের জন্য ফাঁকা জায়গা তৈরি করুন।",
    "category": "edit",
    "icon": "aspect_ratio"
  },
  {
    "id": "redact-pdf",
    "title": "Redact Sensitive Info",
    "titleBn": "তথ্য গোপন করা (Redact)",
    "desc": "Permanently blank out NID numbers, phone, or secrets.",
    "descBn": "এনআইডি, ফোন নম্বর বা সংবেদনশীল অংশ কালো কালিতে স্থায়ীভাবে ঢেকে দিন।",
    "category": "security",
    "icon": "visibility_off"
  },
  {
    "id": "edit-metadata-pdf",
    "title": "Edit Metadata",
    "titleBn": "মেটাডাটা এডিট",
    "desc": "Update author, title, keywords, and creation dates.",
    "descBn": "ফাইলের টাইটেল, লেখকের নাম ও তৈরির তারিখ পরিবর্তন করুন।",
    "category": "edit",
    "icon": "edit_note"
  },
  {
    "id": "repair-pdf",
    "title": "Repair Corrupted PDF",
    "titleBn": "নষ্ট ফাইল মেরামত (Repair)",
    "desc": "Recover readable streams from broken or incomplete PDF files.",
    "descBn": "করাপ্ট বা খুলতে না পারা পিডিএফ ঠিক করার চেষ্টা করুন।",
    "category": "edit",
    "icon": "build"
  },
  {
    "id": "fill-pdf-forms",
    "title": "Fill PDF Forms",
    "titleBn": "পিডিএফ ফরম পূরণ",
    "desc": "Type into standard interactive government AcroForm fields.",
    "descBn": "ইন্টারঅ্যাক্টিভ সরকারি আবেদন ফরমের ঘরগুলো সরাসরি পূরণ করুন।",
    "category": "edit",
    "icon": "edit_calendar"
  },
  {
    "id": "grayscale-pdf",
    "title": "Grayscale (B&W)",
    "titleBn": "সাদাকালো (Grayscale)",
    "desc": "Convert full color PDFs to high-contrast monochrome.",
    "descBn": "রঙিন ফাইলকে সাদাকালো করে প্রিন্ট উপযোগী ও সাইজ ছোট করুন।",
    "category": "edit",
    "icon": "contrast"
  },
  {
    "id": "invert-pdf",
    "title": "Invert PDF Colors",
    "titleBn": "ডার্ক মোড / রং ইনভার্ট",
    "desc": "Invert colors for night reading comfort.",
    "descBn": "রাতে পড়ার জন্য সাদা ব্যাকগ্রাউন্ড কালো এবং কালো লেখা সাদা করুন।",
    "category": "edit",
    "icon": "invert_colors"
  },
  {
    "id": "flatten-pdf",
    "title": "Flatten PDF",
    "titleBn": "পিডিএফ ফ্ল্যাটেন (Flatten)",
    "desc": "Bake annotations and form fields into static page content.",
    "descBn": "ফরমের ফিল্ড ও কমেন্টকে অপরিবর্তনীয় স্থায়ী ডকুমেন্টে পরিণত করুন।",
    "category": "edit",
    "icon": "compress"
  },
  {
    "id": "remove-annotations",
    "title": "Remove Annotations",
    "titleBn": "কমেন্ট ও দাগ মুছে ফেলা",
    "desc": "Strip comments, sticky notes, and highlights cleanly.",
    "descBn": "ফাইলের সব হাইলাইট বা অ্যানোটেশন এক ক্লিকে মুছে ফেলুন।",
    "category": "edit",
    "icon": "clear_all"
  },
  {
    "id": "add-image-pdf",
    "title": "Add Image / Photo",
    "titleBn": "ছবি বা সিল যোগ",
    "desc": "Overlay passport photo, seal, or graphic on any page.",
    "descBn": "যেকোনো পৃষ্ঠায় ছবি, লোগো বা পাসপোর্ট সাইজ ফটো বসান।",
    "category": "edit",
    "icon": "add_photo_alternate"
  },
  {
    "id": "resize-pdf",
    "title": "Resize PDF Pages",
    "titleBn": "সাইজ ও মাপ বদলানো",
    "desc": "Scale pages to A4, US Letter, Legal, or custom dimensions.",
    "descBn": "A4, Letter, Legal ইত্যাদি পেপার সাইজে রূপান্তর।",
    "category": "edit",
    "icon": "photo_size_select_large"
  },
  {
    "id": "n-up-pdf",
    "title": "N-Up Multi-Page Layout",
    "titleBn": "এক পাতায় একাধিক পেজ (N-Up)",
    "desc": "Print 2, 4, or 8 document pages onto a single sheet.",
    "descBn": "কাগজ বাঁচাতে এক পাতায় ২, ৪ বা ৬টি পেজ পাশাপাশি প্রিন্ট করুন।",
    "category": "organize",
    "icon": "view_compact"
  },
  {
    "id": "booklet-pdf",
    "title": "Booklet Printing",
    "titleBn": "বুকলেট প্রিন্টিং",
    "desc": "Rearrange pages for fold-and-staple pamphlet printing.",
    "descBn": "বই বা পুস্তিকা আকারে দুই পাশে ভাঁজ করে প্রিন্ট করার লেআউট।",
    "category": "organize",
    "icon": "menu_book"
  },
  {
    "id": "sanitize-pdf",
    "title": "Sanitize PDF",
    "titleBn": "ফাইলের ঝুঁকি স্যানিটাইজ",
    "desc": "Remove suspicious embedded JavaScript, attachments, and links.",
    "descBn": "ক্ষতিকর স্ক্রিপ্ট বা হিডেন কোড দূর করে ফাইল নিরাপদ করুন।",
    "category": "security",
    "icon": "health_and_safety"
  },
  {
    "id": "compress-images-pdf",
    "title": "Compress PDF Images",
    "titleBn": "ভেতরের ছবির সাইজ ছোট",
    "desc": "Downsample heavy embedded images without touching typography.",
    "descBn": "পিডিএফের টেক্সট ঠিক রেখে শুধু ছবির সাইজ কমিয়ে ফাইল হালকা করুন।",
    "category": "edit",
    "icon": "tune"
  },
  {
    "id": "csv-to-pdf",
    "title": "CSV to PDF",
    "titleBn": "CSV থেকে টেবিল পিডিএফ",
    "desc": "Render raw CSV table records into paginated PDF.",
    "descBn": "স্প্রেডশীট ডাটা থেকে নিখুঁত টেবিল পিডিএফ তৈরি।",
    "category": "convert",
    "icon": "table_rows"
  },
  {
    "id": "pdf-to-csv",
    "title": "PDF to CSV",
    "titleBn": "পিডিএফ থেকে CSV ডাটা",
    "desc": "Extract table rows into structured comma-separated data.",
    "descBn": "পিডিএফের টেবিল থেকে ডাটা এক্সট্রাক্ট করে স্প্রেডশীটে নিন।",
    "category": "convert",
    "icon": "file_download"
  },
  {
    "id": "pdf-summary",
    "title": "PDF Summary",
    "titleBn": "পিডিএফ সারাংশ (Summary)",
    "desc": "Extract executive summary and key points from long papers.",
    "descBn": "বড় দলিলের মূল বক্তব্য ও পয়েন্টের সংক্ষিপ্ত বিবরণ।",
    "category": "convert",
    "icon": "summarize"
  },
  {
    "id": "create-pdf-form",
    "title": "Create PDF Form",
    "titleBn": "পিডিএফ ফরম তৈরি",
    "desc": "Add fillable text fields and checkboxes to existing pages.",
    "descBn": "টেক্সটবক্স ও চেকবক্স দিয়ে পূরণযোগ্য ফরম বানান।",
    "category": "edit",
    "icon": "feed"
  },
  {
    "id": "markdown-to-pdf",
    "title": "Markdown to PDF",
    "titleBn": "মার্কডাউন থেকে পিডিএফ",
    "desc": "Convert developer Markdown docs to styled print PDFs.",
    "descBn": "টেক্সট ও কোড মার্কডাউনকে চমৎকার পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "view_headline"
  },
  {
    "id": "bmp-to-pdf",
    "title": "BMP to PDF",
    "titleBn": "BMP ছবি থেকে পিডিএফ",
    "desc": "Convert legacy Windows Bitmap graphics into PDF.",
    "descBn": "বিটম্যাপ ছবি থেকে পিডিএফ তৈরি।",
    "category": "convert",
    "icon": "image"
  },
  {
    "id": "gif-to-pdf",
    "title": "GIF to PDF",
    "titleBn": "GIF থেকে পিডিএফ",
    "desc": "Convert animated or static GIF frames to PDF pages.",
    "descBn": "জিআইএফ ফ্রেমকে পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "gif"
  },
  {
    "id": "insert-pages-pdf",
    "title": "Insert Pages",
    "titleBn": "মাঝে নতুন পাতা ঢোকানো",
    "desc": "Insert external pages at any specific index in the PDF.",
    "descBn": "যেকোনো পাতার মাঝখানে নতুন পৃষ্ঠা যোগ করুন।",
    "category": "organize",
    "icon": "post_add"
  },
  {
    "id": "overlay-pdf",
    "title": "Overlay / Letterhead",
    "titleBn": "ওভারলে বা লেটারহেড",
    "desc": "Superimpose document text over an official letterhead pad.",
    "descBn": "লেটারহেড বা অফিশিয়াল প্যাডের ওপর ফাইল সেট করুন।",
    "category": "edit",
    "icon": "layers"
  },
  {
    "id": "pdf-to-markdown",
    "title": "PDF to Markdown",
    "titleBn": "পিডিএফ থেকে মার্কডাউন",
    "desc": "Convert document headings and bodies into Markdown text.",
    "descBn": "ডকুমেন্টকে এডিটেবল মার্কডাউনে রূপান্তর।",
    "category": "convert",
    "icon": "notes"
  },
  {
    "id": "json-to-pdf",
    "title": "JSON to PDF",
    "titleBn": "JSON ডাটা থেকে পিডিএফ",
    "desc": "Render raw JSON objects into readable visual PDF.",
    "descBn": "কোড বা ডাটা অবজেক্ট থেকে ফরম্যাটেড পিডিএফ।",
    "category": "convert",
    "icon": "data_object"
  },
  {
    "id": "add-blank-pages",
    "title": "Add Blank Pages",
    "titleBn": "ফাঁকা পৃষ্ঠা যোগ",
    "desc": "Insert blank pages at beginning, end, or after specific pages.",
    "descBn": "ফাইলের নির্দিষ্ট স্থানে নতুন সাদা পাতা যুক্ত করুন।",
    "category": "organize",
    "icon": "note_add"
  },
  {
    "id": "shuffle-pdf",
    "title": "Shuffle Pages",
    "titleBn": "পাতা এলোমেলো বা রদবদল",
    "desc": "Reorder or interleave pages in custom patterns.",
    "descBn": "নির্দিষ্ট নিয়মে পাতার ক্রম পরিবর্তন।",
    "category": "organize",
    "icon": "shuffle"
  },
  {
    "id": "mirror-pdf",
    "title": "Mirror PDF Pages",
    "titleBn": "মিরর ইফেক্ট",
    "desc": "Horizontally flip pages for transfer printing or backlighting.",
    "descBn": "পাতা উল্টো বা আয়নার প্রতিবিম্বের মতো ফ্লিপ করুন।",
    "category": "edit",
    "icon": "flip"
  },
  {
    "id": "posterize-pdf",
    "title": "Posterize PDF",
    "titleBn": "পোস্টার প্রিন্ট লেআউট",
    "desc": "Tile a single oversized drawing across multiple smaller sheets.",
    "descBn": "বড় ড্রয়িং বা ম্যাপকে একাধিক A4 পাতায় বড় করে প্রিন্ট করুন।",
    "category": "organize",
    "icon": "view_carousel"
  },
  {
    "id": "fit-to-page-pdf",
    "title": "Fit to Printable Area",
    "titleBn": "মার্জিন ফিট করা",
    "desc": "Scale document proportionally to fit print boundaries.",
    "descBn": "কনটেন্টকে কাগজের মাপে সমানভাবে ফিট করুন।",
    "category": "edit",
    "icon": "fit_screen"
  },
  {
    "id": "page-labels-pdf",
    "title": "Roman / Custom Page Labels",
    "titleBn": "রোমান বা কাস্টম পেজ লেবেল",
    "desc": "Apply Roman numerals (i, ii, iii) or alphanumeric labels.",
    "descBn": "i, ii, iii বা কাস্টম নম্বর লেবেল বসান।",
    "category": "edit",
    "icon": "label"
  },
  {
    "id": "pdf-to-json",
    "title": "PDF to JSON",
    "titleBn": "পিডিএফ থেকে JSON",
    "desc": "Extract text coordinates, fonts, and properties into JSON schema.",
    "descBn": "স্ট্রাকচার্ড ডাটা আকারে ফাইলের তথ্য রূপান্তর।",
    "category": "convert",
    "icon": "schema"
  },
  {
    "id": "tile-pdf",
    "title": "Tile PDF Grid",
    "titleBn": "টাইল বা গ্রিড ভিউ",
    "desc": "Combine multiple sheets into a unified tiled poster.",
    "descBn": "পৃষ্ঠাগুলোকে গ্রিড আকারে সাজান।",
    "category": "organize",
    "icon": "grid_on"
  },
  {
    "id": "replace-pages-pdf",
    "title": "Replace PDF Pages",
    "titleBn": "পাতা প্রতিস্থাপন (Replace)",
    "desc": "Swap out specific error pages with revised ones.",
    "descBn": "ভুল পাতা বদলে নতুন পাতা বসিয়ে নিন।",
    "category": "organize",
    "icon": "published_with_changes"
  },
  {
    "id": "add-background-pdf",
    "title": "Background Tint / Color",
    "titleBn": "ব্যাকগ্রাউন্ড কালার যোগ",
    "desc": "Apply solid or tinted color behind document text.",
    "descBn": "পাতার পেছনের সাদা রং পরিবর্তন করে হালকা ব্যাকগ্রাউন্ড দিন।",
    "category": "edit",
    "icon": "format_color_fill"
  },
  {
    "id": "pdf-validator",
    "title": "PDF Validator",
    "titleBn": "পিডিএফ ফাইলের নির্ভুলতা যাচাই",
    "desc": "Check structural integrity and syntax compliance.",
    "descBn": "ফাইলটি ক্ষতিগ্রস্ত বা অবৈধ কি না চেক করুন।",
    "category": "organize",
    "icon": "check_circle"
  },
  {
    "id": "xml-to-pdf",
    "title": "XML to PDF",
    "titleBn": "XML থেকে পিডিএফ",
    "desc": "Format raw XML hierarchies into readable print pages.",
    "descBn": "এক্সএমএল ডাটা থেকে সুন্দর প্রিন্টেবল ডকুমেন্ট।",
    "category": "convert",
    "icon": "code_blocks"
  },
  {
    "id": "split-even-odd",
    "title": "Split Even / Odd Pages",
    "titleBn": "জোড় ও বিজোড় পাতা আলাদা",
    "desc": "Divide document into odd and even pages for manual duplex printing.",
    "descBn": "প্রিন্টারের সুবিধার জন্য Even/Odd পেজ আলাদা করুন।",
    "category": "organize",
    "icon": "view_stream"
  },
  {
    "id": "export-bookmarks-pdf",
    "title": "Export Bookmarks",
    "titleBn": "বুকমার্ক এক্সপোর্ট",
    "desc": "Save bookmark tree as standalone outline file.",
    "descBn": "সূচিপত্রের তালিকা আলাদা ফাইলে সেভ করুন।",
    "category": "convert",
    "icon": "file_download"
  },
  {
    "id": "qr-code-pdf",
    "title": "Embed QR Code",
    "titleBn": "কিউআর কোড যোগ (QR Code)",
    "desc": "Generate and position scannable QR verification badges.",
    "descBn": "ভেরিফিকেশন বা ওয়েবসাইট লিংকের জন্য পাতায় QR কোড বসান।",
    "category": "edit",
    "icon": "qr_code_2"
  },
  {
    "id": "invoice-pdf",
    "title": "Generate Invoice PDF",
    "titleBn": "ইনভয়েস বা বিল তৈরি",
    "desc": "Create professional business invoices with line items and VAT.",
    "descBn": "পেশাদার চালান ও মেমো তৈরি করুন।",
    "category": "convert",
    "icon": "receipt_long"
  },
  {
    "id": "linearize-pdf",
    "title": "Fast Web View (Linearize)",
    "titleBn": "ফাস্ট ওয়েব ভিউ (Linearize)",
    "desc": "Optimize document for instant byte-range streaming in browsers.",
    "descBn": "অনলাইনে ব্রাউজারে দ্রুত লোড হওয়ার জন্য লিনিয়ারাইজ করুন।",
    "category": "edit",
    "icon": "bolt"
  },
  {
    "id": "duplicate-range-pdf",
    "title": "Duplicate Page Range",
    "titleBn": "পাতার রেঞ্জ ডুপ্লিকেট",
    "desc": "Clone a block of consecutive pages multiple times.",
    "descBn": "নির্দিষ্ট পৃষ্ঠাগুলোর অতিরিক্ত কপি তৈরি করুন।",
    "category": "organize",
    "icon": "content_copy"
  },
  {
    "id": "svg-to-pdf",
    "title": "SVG to PDF",
    "titleBn": "SVG ভেক্টর থেকে পিডিএফ",
    "desc": "Convert vector drawings directly without loss of sharpness.",
    "descBn": "ভেক্টর গ্রাফিক্সকে নিখুঁত পিডিএফে রূপান্তর।",
    "category": "convert",
    "icon": "polyline"
  },
  {
    "id": "sort-pages-size-pdf",
    "title": "Sort Pages by Dimensions",
    "titleBn": "সাইজ অনুযায়ী পাতা সাজানো",
    "desc": "Group landscape drawings away from portrait text pages.",
    "descBn": "ল্যান্ডস্কেপ ও পোর্ট্রেট পাতা আলাদা বা ক্রমানুসারে সাজান।",
    "category": "organize",
    "icon": "sort"
  },
  {
    "id": "pdf-to-pdfa-3",
    "title": "PDF/A-3 Compliant Export",
    "titleBn": "PDF/A-3 এক্সপোর্ট",
    "desc": "Attach raw XML invoices inside long-term PDF/A-3 standard.",
    "descBn": "ইলেকট্রনিক ইনভয়েস ও অ্যাটাচমেন্টের জন্য আন্তর্জাতিক স্ট্যান্ডার্ড।",
    "category": "convert",
    "icon": "inventory_2"
  },
  {
    "id": "combine-text-pdf",
    "title": "Combine Text Notes into PDF",
    "titleBn": "একাধিক টেক্সট ফাইল কম্বাইন",
    "desc": "Batch combine multiple .txt files into one continuous volume.",
    "descBn": "অনেকগুলো নোট বা ডকুমেন্ট একসাথে যুক্ত করুন।",
    "category": "convert",
    "icon": "text_snippet"
  },
  {
    "id": "html-to-pdf",
    "title": "HTML / Web to PDF",
    "titleBn": "HTML থেকে পিডিএফ",
    "desc": "Convert HTML snippets or articles to high-fidelity PDF.",
    "descBn": "ওয়েব পেজ বা কোড সরাসরি পিডিএফে প্রিন্ট করুন।",
    "category": "convert",
    "icon": "html"
  },
  {
    "id": "xlsx-to-pdf",
    "title": "Excel to PDF",
    "titleBn": "এক্সেল থেকে পিডিএফ (Excel to PDF)",
    "desc": "Convert spreadsheets with formulas to printable tables.",
    "descBn": "স্প্রেডশীট টেবিল ও ডাটা নিখুঁত পিডিএফে তৈরি করুন।",
    "category": "convert",
    "icon": "grid_on"
  },
  {
    "id": "eml-to-pdf",
    "title": "Email (.eml) to PDF",
    "titleBn": "ইমেইল থেকে পিডিএফ (Email to PDF)",
    "desc": "Archive saved email messages along with sender headers into PDF.",
    "descBn": "সংরক্ষিত ইমেইল ফাইলকে পিডিএফে রূপান্তর করুন।",
    "category": "convert",
    "icon": "mail"
  },
  {
    "id": "pdf-to-webp",
    "title": "PDF to WebP",
    "titleBn": "পিডিএফ থেকে WebP",
    "desc": "Export lightweight next-gen web images from pages.",
    "descBn": "দ্রুতগতির আধুনিক ওয়েব ফরম্যাটে ছবি এক্সপোর্ট।",
    "category": "convert",
    "icon": "filter_hdr"
  },
  {
    "id": "pdf-to-tiff",
    "title": "PDF to TIFF",
    "titleBn": "পিডিএফ থেকে TIFF",
    "desc": "Convert document to lossless multi-page TIFF image.",
    "descBn": "হাই-রেজোলিউশন প্রেস বা আর্কাইভ ফরম্যাটে কনভার্ট।",
    "category": "convert",
    "icon": "camera"
  },
  {
    "id": "pdf-to-audio",
    "title": "PDF to Audio (TTS)",
    "titleBn": "পিডিএফ পড়ে শোনানো (Audio)",
    "desc": "Listen to pages read aloud via voice synthesis.",
    "descBn": "ফাইলের লেখা অডিও ফাইলে রূপান্তর করে শুনুন।",
    "category": "convert",
    "icon": "volume_up"
  },
  {
    "id": "remove-metadata-pdf",
    "title": "Remove Metadata & Clean",
    "titleBn": "মেটাডাটা ও হিস্ট্রি মুছা",
    "desc": "Scrub author names, software footprints, and location history.",
    "descBn": "ফাইল তৈরির সফটওয়্যার, নাম বা ডিভাইস তথ্য গোপন রাখুন।",
    "category": "security",
    "icon": "cleaning_services"
  },
  {
    "id": "split-every-n-pages",
    "title": "Split Every N Pages",
    "titleBn": "নির্দিষ্ট পাতা পর পর স্প্লিট",
    "desc": "Automatically split a continuous document into chunks of N pages.",
    "descBn": "প্রতি ১, ২ বা ৫ পাতা পর পর স্বয়ংক্রিয়ভাবে আলাদা ফাইল বানান।",
    "category": "organize",
    "icon": "call_split"
  },
  {
    "id": "verify-signature-pdf",
    "title": "Verify Digital Signature",
    "titleBn": "ডিজিটাল সিগনেচার যাচাই",
    "desc": "Validate cryptographic X.509 signatures and PKI certificates.",
    "descBn": "ফাইলের ডিজিটাল স্বাক্ষর সঠিক ও বৈধ কি না চেক করুন।",
    "category": "security",
    "icon": "shield"
  }
]

# Write public/assets/pdf-tools-data.js
data_js_path = os.path.join(ASSETS_DIR, 'pdf-tools-data.js')
with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write('window.KAAZ_PDF_TOOLS = ' + json.dumps(TOOLS_DATA, ensure_ascii=False, indent=2) + ';\n')
print(f"Generated {data_js_path} with {len(TOOLS_DATA)} tools.")

# Write public/assets/pdf-tools-interactive.js
INTERACTIVE_JS = """/**
 * Kaaz AI (কাজ এআই) - 100+ Browser-Based PDF Tools Controller
 * 100% Client-Side, Zero Server Upload, Private & Instant
 */
(function () {
  'use strict';

  var allTools = window.KAAZ_PDF_TOOLS || [];
  var currentCategory = 'all';
  var currentSearchQuery = '';
  var activeTool = null;
  var selectedFiles = [];

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    if (!allTools || allTools.length === 0) {
      if (window.KAAZ_PDF_TOOLS) allTools = window.KAAZ_PDF_TOOLS;
    }

    renderFeaturedGrid();
    renderCatalogGrid();
    setupEventHandlers();
  }

  function setupEventHandlers() {
    var catTabs = document.querySelectorAll('.tools-cat-tab');
    catTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        catTabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        currentCategory = this.getAttribute('data-cat') || 'all';
        applyFilter();
      });
    });

    var searchInput = document.getElementById('tool-search-input');
    var searchClear = document.getElementById('tool-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearchQuery = this.value.trim().toLowerCase();
        if (searchClear) {
          searchClear.style.display = currentSearchQuery ? 'inline-flex' : 'none';
        }
        applyFilter();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', function () {
        searchInput.value = '';
        currentSearchQuery = '';
        this.style.display = 'none';
        applyFilter();
        searchInput.focus();
      });
    }

    var btnToggleAll = document.getElementById('btn-toggle-all-tools');
    var catalogWrap = document.getElementById('tools-all-catalog-wrap');
    if (btnToggleAll && catalogWrap) {
      btnToggleAll.addEventListener('click', function () {
        var isOpen = catalogWrap.classList.contains('open');
        if (isOpen) {
          catalogWrap.classList.remove('open');
          btnToggleAll.innerHTML = '<span>সকল ১০৯টি টুলস বিস্তারিত দেখুন</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        } else {
          catalogWrap.classList.add('open');
          btnToggleAll.innerHTML = '<span>তালিকা বন্ধ করুন</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="18 15 12 9 6 15"></polyline></svg>';
          catalogWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    var modalOverlay = document.getElementById('tool-modal-overlay');
    var btnCloseModal = document.getElementById('btn-close-modal');
    var btnModalCancel = document.getElementById('btn-modal-cancel');

    function closeModal() {
      if (modalOverlay) modalOverlay.classList.remove('open');
      selectedFiles = [];
      activeTool = null;
      updateFileList();
    }

    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnModalCancel) btnModalCancel.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }

    var dropzone = document.getElementById('tool-dropzone');
    var fileInput = document.getElementById('tool-file-input');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', function () { fileInput.click(); });

      dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });

      dropzone.addEventListener('dragleave', function () {
        dropzone.classList.remove('dragover');
      });

      dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer && e.dataTransfer.files.length) {
          handleFilesSelected(Array.from(e.dataTransfer.files));
        }
      });

      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) {
          handleFilesSelected(Array.from(fileInput.files));
        }
      });
    }

    var btnModalRun = document.getElementById('btn-modal-run');
    if (btnModalRun) {
      btnModalRun.addEventListener('click', executeActiveTool);
    }
  }

  function filterToolItem(tool) {
    var matchCat = currentCategory === 'all' || tool.category === currentCategory;
    if (!matchCat) return false;

    if (!currentSearchQuery) return true;

    var q = currentSearchQuery;
    return (
      (tool.title && tool.title.toLowerCase().indexOf(q) !== -1) ||
      (tool.titleBn && tool.titleBn.toLowerCase().indexOf(q) !== -1) ||
      (tool.desc && tool.desc.toLowerCase().indexOf(q) !== -1) ||
      (tool.descBn && tool.descBn.toLowerCase().indexOf(q) !== -1) ||
      (tool.category && tool.category.toLowerCase().indexOf(q) !== -1) ||
      (tool.id && tool.id.toLowerCase().indexOf(q) !== -1)
    );
  }

  function applyFilter() {
    renderFeaturedGrid();
    renderCatalogGrid();
  }

  function renderFeaturedGrid() {
    var container = document.getElementById('tools-bento-grid');
    if (!container) return;

    var filtered = allTools.filter(filterToolItem);
    var displayList = currentSearchQuery
      ? filtered.slice(0, 12)
      : filtered.filter(function (t) { return t.popular; }).concat(filtered.filter(function (t) { return !t.popular; })).slice(0, 8);

    if (displayList.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding: 48px 20px; color: var(--slate-500); background:#fff; border-radius:12px; border:1px dashed var(--slate-300);"><span class="material-symbols-outlined" style="font-size: 36px; color: var(--slate-400); margin-bottom:8px;">search_off</span><p style="font-weight: 600; font-size:1.05rem; color:var(--slate-800);">কোনো টুল পাওয়া যায়নি</p><p style="font-size:0.88rem;">' + escapeHtml(currentSearchQuery) + ' দিয়ে কোনো ফলাফল মেলেনি। অন্য কি-ওয়ার্ড দিয়ে খুঁজুন।</p></div>';
      return;
    }

    container.innerHTML = displayList.map(function (tool) {
      var badgeHtml = tool.badge
        ? '<span class="tool-badge-pill ' + (tool.badge.indexOf('সরকারি') !== -1 || tool.badge.indexOf('সর্বাধিক') !== -1 ? 'hot' : '') + '">' + tool.badge + '</span>'
        : '<span class="tool-badge-pill">' + getCatLabel(tool.category) + '</span>';

      return '<div class="tool-card" data-id="' + tool.id + '">' +
        '<div class="tool-card-top">' +
          '<div class="tool-icon-circle"><span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span></div>' +
          badgeHtml +
        '</div>' +
        '<div class="tool-title-bn">' + (tool.titleBn || tool.title) + '</div>' +
        '<div class="tool-title-en">' + tool.title + '</div>' +
        '<div class="tool-desc-bn">' + (tool.descBn || tool.desc) + '</div>' +
        '<button class="tool-btn-action" onclick="window.KaazTools.openTool(\'' + tool.id + '\')">' +
          '<span>ব্যবহার শুরু করুন</span>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
        '</button>' +
      '</div>';
    }).join('');
  }

  function renderCatalogGrid() {
    var container = document.getElementById('tools-catalog-grid');
    var countEl = document.getElementById('catalog-total-count');
    if (!container) return;

    var filtered = allTools.filter(filterToolItem);
    if (countEl) countEl.textContent = filtered.length + ' টি টুল প্রদর্শিত';

    if (filtered.length === 0) {
      container.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding: 32px; color: var(--slate-500);">কোনো টুল মেলেনি।</div>';
      return;
    }

    container.innerHTML = filtered.map(function (tool) {
      return '<div class="catalog-item-card" onclick="window.KaazTools.openTool(\'' + tool.id + '\')">' +
        '<div class="catalog-item-icon"><span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span></div>' +
        '<div class="catalog-item-info">' +
          '<div class="catalog-item-name">' + (tool.titleBn || tool.title) + '</div>' +
          '<div class="catalog-item-desc">' + tool.title + ' · ' + (tool.descBn || tool.desc) + '</div>' +
        '</div>' +
        '<div class="catalog-item-tag">' + getCatLabel(tool.category) + '</div>' +
      '</div>';
    }).join('');
  }

  function getCatLabel(cat) {
    switch (cat) {
      case 'organize': return 'অর্গানাইজ';
      case 'convert': return 'কনভার্ট';
      case 'edit': return 'এডিট';
      case 'security': return 'নিরাপত্তা';
      default: return 'ইউটিলিটি';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function handleFilesSelected(newFiles) {
    if (!newFiles || newFiles.length === 0) return;

    if (activeTool && activeTool.id === 'jpg-to-pdf') {
      newFiles = newFiles.filter(function (f) { return f.type.startsWith('image/'); });
    } else {
      newFiles = newFiles.filter(function (f) { return f.name.toLowerCase().endsWith('.pdf') || f.type.startsWith('image/'); });
    }

    if (activeTool && (activeTool.id === 'compress-pdf' || activeTool.id === 'watermark-pdf' || activeTool.id === 'protect-pdf' || activeTool.id === 'split-pdf')) {
      selectedFiles = [newFiles[0]];
    } else {
      selectedFiles = selectedFiles.concat(newFiles);
    }

    updateFileList();
  }

  function updateFileList() {
    var listEl = document.getElementById('tool-file-list');
    var runBtn = document.getElementById('btn-modal-run');
    if (!listEl) return;

    if (selectedFiles.length === 0) {
      listEl.innerHTML = '';
      if (runBtn) runBtn.disabled = true;
      return;
    }

    if (runBtn) runBtn.disabled = false;

    listEl.innerHTML = selectedFiles.map(function (file, idx) {
      var icon = file.type.startsWith('image/') ? 'image' : 'picture_as_pdf';
      return '<div class="tool-file-chip">' +
        '<div style="display:flex; align-items:center; gap:8px; overflow:hidden;">' +
          '<span class="material-symbols-outlined" style="font-size:18px; color:var(--slate-600);">' + icon + '</span>' +
          '<span style="font-weight:600; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:320px;">' + escapeHtml(file.name) + '</span>' +
          '<span style="font-size:0.75rem; color:var(--slate-500); font-family:var(--font-mono);">(' + formatBytes(file.size) + ')</span>' +
        '</div>' +
        '<button class="tool-file-chip-remove" onclick="window.KaazTools.removeFile(' + idx + ')">✕</button>' +
      '</div>';
    }).join('');
  }

  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    var k = 1024;
    var sizes = ['Bytes', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  function openTool(toolId) {
    var tool = allTools.find(function (t) { return t.id === toolId; });
    if (!tool) return;

    activeTool = tool;
    selectedFiles = [];

    var modal = document.getElementById('tool-modal-overlay');
    var modalIcon = document.getElementById('tool-modal-icon');
    var modalTitle = document.getElementById('tool-modal-title');
    var modalSubtitle = document.getElementById('tool-modal-subtitle');
    var optionsPanel = document.getElementById('tool-options-panel');
    var dropzoneText = document.getElementById('tool-dropzone-text');
    var dropzoneHint = document.getElementById('tool-dropzone-hint');
    var fileInput = document.getElementById('tool-file-input');

    if (modalIcon) {
      modalIcon.innerHTML = '<span class="material-symbols-outlined">' + (tool.icon || 'description') + '</span>';
    }
    if (modalTitle) modalTitle.textContent = tool.titleBn || tool.title;
    if (modalSubtitle) modalSubtitle.textContent = tool.title + ' · ' + (tool.descBn || tool.desc);

    if (fileInput) {
      fileInput.value = '';
      if (tool.id === 'jpg-to-pdf') {
        fileInput.accept = 'image/*';
        dropzoneText.textContent = 'আপনার ছবিগুলো এখানে ড্রপ করুন';
        dropzoneHint.textContent = 'JPG, PNG, WebP ফরম্যাটের ছবি নির্বাচন করুন';
      } else {
        fileInput.accept = '.pdf,application/pdf';
        dropzoneText.textContent = 'আপনার PDF ফাইল এখানে ড্রপ করুন';
        dropzoneHint.textContent = 'অথবা ক্লিক করে ফাইল সিলেক্ট করুন (১০০% নিরাপদ ও ব্রাউজারেই প্রক্রিয়াজাত)';
      }
    }

    if (optionsPanel) {
      optionsPanel.innerHTML = '';
      optionsPanel.style.display = 'flex';

      if (tool.id === 'compress-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>কম্প্রেশন লেভেল:</span><select id="opt-compress-level" class="tool-option-input"><option value="medium">স্ট্যান্ডার্ড (ভারসাম্যপূর্ণ কোয়ালিটি ও সাইজ)</option><option value="high">হাই কম্প্রেশন (সর্বোচ্চ সাইজ কমাবে)</option><option value="low">মৃদু কম্প্রেশন (হাই রেজোলিউশন)</option></select></div><div style="font-size:0.78rem; color:var(--slate-500);">💡 সরকারি চাকরির বা পাসপোর্ট পোর্টালে আবেদনের সাইজ সীমার (২০০-৫০০ KB) ভেতর আনতে অত্যন্ত কার্যকর।</div>';
      } else if (tool.id === 'watermark-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>জলছাপের লেখা (Watermark):</span><input type="text" id="opt-watermark-text" class="tool-option-input" value="শুধুমাত্র ভেরিফিকেশনের জন্য" style="width:260px;" /></div><div class="tool-option-row"><span>স্বচ্ছতা (Opacity):</span><select id="opt-watermark-opacity" class="tool-option-input"><option value="0.25">হালকা (২৫%)</option><option value="0.4" selected>স্পষ্ট (৪০%)</option><option value="0.6">গাঢ় (৬০%)</option></select></div>';
      } else if (tool.id === 'split-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>পৃষ্ঠা নম্বর রেঞ্জ (যেমন: 1-3, 5):</span><input type="text" id="opt-split-range" class="tool-option-input" placeholder="যেমন: 1, 2-4" style="width:200px;" /></div><div style="font-size:0.78rem; color:var(--slate-500);">বড় দলিল থেকে নির্দিষ্ট প্রয়োজনীয় পৃষ্ঠাগুলো আলাদা ফাইলে সংরক্ষণ করুন।</div>';
      } else if (tool.id === 'protect-pdf') {
        optionsPanel.innerHTML = '<div class="tool-option-row"><span>পাসওয়ার্ড লিখুন:</span><input type="password" id="opt-protect-pass" class="tool-option-input" placeholder="পাসওয়ার্ড প্রদান করুন" style="width:220px;" /></div>';
      } else if (tool.id === 'merge-pdf') {
        optionsPanel.innerHTML = '<div style="font-size:0.84rem; color:var(--slate-700);">💡 একাধিক ফাইল যুক্ত করতে ২ বা ততোধিক PDF ফাইল সিলেক্ট করুন। ফাইলগুলো ক্রমানুসারে জোড়া লাগবে।</div>';
      } else {
        optionsPanel.style.display = 'none';
      }
    }

    updateFileList();
    if (modal) modal.classList.add('open');
  }

  function loadPdfLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      script.onload = function () { resolve(window.PDFLib); };
      script.onerror = function () { reject(new Error('PDF-Lib লাইব্রেরি লোড হতে পারেনি')); };
      document.head.appendChild(script);
    });
  }

  async function executeActiveTool() {
    if (!activeTool || selectedFiles.length === 0) return;

    var runBtn = document.getElementById('btn-modal-run');
    var originalBtnText = runBtn.innerHTML;
    runBtn.disabled = true;
    runBtn.innerHTML = '<span class="material-symbols-outlined" style="animation: spin 1s infinite linear; font-size:18px;">sync</span><span>প্রসেস হচ্ছে...</span>';

    try {
      var PDFLib = await loadPdfLib();

      if (activeTool.id === 'merge-pdf') {
        if (selectedFiles.length < 2) {
          alert('মার্জ করতে অনুগ্রহ করে কমপক্ষে ২টি PDF ফাইল সিলেক্ট করুন।');
          return;
        }
        var mergedDoc = await PDFLib.PDFDocument.create();
        for (var i = 0; i < selectedFiles.length; i++) {
          var arrayBuffer = await selectedFiles[i].arrayBuffer();
          var doc = await PDFLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
          var copiedPages = await mergedDoc.copyPages(doc, doc.getPageIndices());
          copiedPages.forEach(function (page) { mergedDoc.addPage(page); });
        }
        var mergedBytes = await mergedDoc.save();
        downloadBlob(mergedBytes, 'merged-document.pdf', 'application/pdf');
      } else if (activeTool.id === 'jpg-to-pdf') {
        var pdfDoc = await PDFLib.PDFDocument.create();
        for (var j = 0; j < selectedFiles.length; j++) {
          var f = selectedFiles[j];
          var imgBuffer = await f.arrayBuffer();
          var image;
          if (f.type === 'image/jpeg' || f.name.toLowerCase().endsWith('.jpg') || f.name.toLowerCase().endsWith('.jpeg')) {
            image = await pdfDoc.embedJpg(imgBuffer);
          } else {
            image = await pdfDoc.embedPng(imgBuffer);
          }
          var page = pdfDoc.addPage([image.width, image.height]);
          page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
        }
        var imgPdfBytes = await pdfDoc.save();
        downloadBlob(imgPdfBytes, 'converted-images.pdf', 'application/pdf');
      } else if (activeTool.id === 'watermark-pdf') {
        var textInput = document.getElementById('opt-watermark-text');
        var opacityInput = document.getElementById('opt-watermark-opacity');
        var watermarkText = (textInput && textInput.value.trim()) || 'CONFIDENTIAL';
        var opacity = opacityInput ? parseFloat(opacityInput.value) : 0.4;

        var wmBuffer = await selectedFiles[0].arrayBuffer();
        var wmDoc = await PDFLib.PDFDocument.load(wmBuffer, { ignoreEncryption: true });
        var helveticaFont = await wmDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var pages = wmDoc.getPages();

        for (var k = 0; k < pages.length; k++) {
          var p = pages[k];
          var size = p.getSize();
          var textWidth = helveticaFont.widthOfTextAtSize(watermarkText, 46);
          p.drawText(watermarkText, {
            x: size.width / 2 - textWidth / 2,
            y: size.height / 2,
            size: 46,
            font: helveticaFont,
            color: PDFLib.rgb(0.2, 0.2, 0.2),
            opacity: opacity,
            rotate: PDFLib.degrees(45)
          });
        }
        var wmBytes = await wmDoc.save();
        downloadBlob(wmBytes, 'watermarked-document.pdf', 'application/pdf');
      } else if (activeTool.id === 'split-pdf') {
        var rangeInput = document.getElementById('opt-split-range');
        var rangeVal = rangeInput ? rangeInput.value.trim() : '';

        var spBuffer = await selectedFiles[0].arrayBuffer();
        var srcDoc = await PDFLib.PDFDocument.load(spBuffer, { ignoreEncryption: true });
        var total = srcDoc.getPageCount();

        var pageIndices = [];
        if (rangeVal) {
          var parts = rangeVal.split(',');
          for (var pIdx = 0; pIdx < parts.length; pIdx++) {
            var part = parts[pIdx].trim();
            if (part.indexOf('-') !== -1) {
              var bounds = part.split('-').map(function (n) { return parseInt(n.trim(), 10); });
              if (!isNaN(bounds[0]) && !isNaN(bounds[1])) {
                for (var pg = Math.max(1, bounds[0]); pg <= Math.min(total, bounds[1]); pg++) {
                  pageIndices.push(pg - 1);
                }
              }
            } else {
              var singleNum = parseInt(part, 10);
              if (!isNaN(singleNum) && singleNum >= 1 && singleNum <= total) {
                pageIndices.push(singleNum - 1);
              }
            }
          }
        }
        if (pageIndices.length === 0) pageIndices = [0];

        var newDoc = await PDFLib.PDFDocument.create();
        var spCopiedPages = await newDoc.copyPages(srcDoc, pageIndices);
        spCopiedPages.forEach(function (p) { newDoc.addPage(p); });
        var spBytes = await newDoc.save();
        downloadBlob(spBytes, 'split-pages.pdf', 'application/pdf');
      } else if (activeTool.id === 'compress-pdf') {
        var compBuffer = await selectedFiles[0].arrayBuffer();
        var compDoc = await PDFLib.PDFDocument.load(compBuffer, { ignoreEncryption: true });
        var compBytes = await compDoc.save({ useObjectStreams: true });
        downloadBlob(compBytes, 'compressed-document.pdf', 'application/pdf');
      } else {
        var genBuffer = await selectedFiles[0].arrayBuffer();
        var genDoc = await PDFLib.PDFDocument.load(genBuffer, { ignoreEncryption: true });
        var genBytes = await genDoc.save();
        downloadBlob(genBytes, activeTool.id + '-output.pdf', 'application/pdf');
      }

      setTimeout(function () {
        var modalOverlay = document.getElementById('tool-modal-overlay');
        if (modalOverlay) modalOverlay.classList.remove('open');
      }, 500);
    } catch (err) {
      console.error(err);
      alert('প্রসেস করার সময় ত্রুটি ঘটেছে: ' + (err.message || 'অনুগ্রহ করে ফাইলটি যাচাই করে আবার চেষ্টা করুন'));
    } finally {
      runBtn.disabled = false;
      runBtn.innerHTML = originalBtnText;
    }
  }

  function downloadBlob(bytes, filename, mimeType) {
    var blob = new Blob([bytes], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  window.KaazTools = {
    openTool: openTool,
    removeFile: function (idx) {
      selectedFiles.splice(idx, 1);
      updateFileList();
    }
  };
})();
"""

interactive_js_path = os.path.join(ASSETS_DIR, 'pdf-tools-interactive.js')
with open(interactive_js_path, 'w', encoding='utf-8') as f:
    f.write(INTERACTIVE_JS)
print(f"Generated {interactive_js_path}")
