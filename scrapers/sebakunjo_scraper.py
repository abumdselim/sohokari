import re
from typing import List, Dict, Any, Optional
from bs4 import BeautifulSoup
from loguru import logger

from schema.models import CitizenService, ServiceFee, RequiredDocument, ApplicationStep, ServiceOfficer
from scrapers.zyte_client import ZyteClient

class SebakunjoScraper:
    """
    Scraper for services.portal.gov.bd (সেবাকুঞ্জ / জাতীয় তথ্য বাতায়ন)
    Extracts standardized citizen charter tables across ministries.
    """
    BASE_URL = "https://services.portal.gov.bd"

    def __init__(self, zyte_client: Optional[ZyteClient] = None):
        self.client = zyte_client or ZyteClient()

    def parse_citizen_charter_html(self, html_content: str, url: str) -> Optional[CitizenService]:
        """
        Parses the standard 9-column Citizen Charter format used in BD government portals.
        """
        try:
            soup = BeautifulSoup(html_content, "lxml")
            
            # Find page title
            title_node = soup.find("h1") or soup.find("h2") or soup.find("title")
            title_bn = title_node.get_text(strip=True) if title_node else "সরকারি নাগরিক সেবা"
            
            # Clean title
            title_bn = re.sub(r"[-|] সেবাকুঞ্জ.*", "", title_bn).strip()
            
            # Look for service table or key-value definition list
            table = soup.find("table")
            summary = ""
            fees: List[ServiceFee] = []
            documents: List[RequiredDocument] = []
            steps: List[ApplicationStep] = []
            sla_time = "সরকারি সিটিজেন চার্টার অনুযায়ী প্রযোজ্য"
            
            if table:
                rows = table.find_all("tr")
                for row in rows:
                    cells = row.find_all(["td", "th"])
                    if len(cells) >= 2:
                        key = cells[0].get_text(strip=True)
                        val = cells[1].get_text(separator="\n", strip=True)
                        
                        if "সেবা প্রদান পদ্ধতি" in key or "আবেদন পদ্ধতি" in key:
                            step_lines = [l.strip() for l in val.split("\n") if l.strip()]
                            for idx, line in enumerate(step_lines, 1):
                                steps.append(ApplicationStep(
                                    step_number=idx,
                                    title=f"ধাপ {idx}",
                                    description=line
                                ))
                        elif "প্রয়োজনীয় কাগজপত্র" in key:
                            doc_lines = [l.strip() for l in val.split("\n") if l.strip()]
                            for d in doc_lines:
                                documents.append(RequiredDocument(
                                    name=d,
                                    is_mandatory=True,
                                    format_type="ফটোকপি ও অনলাইন কপি"
                                ))
                        elif "সেবামূল্য" in key or "ফি" in key:
                            # Try to extract numbers
                            fee_matches = re.findall(r"(\d+[\d,]*)\s*(?:টাকা|টাকা\.)?", val)
                            amount = float(fee_matches[0].replace(",", "")) if fee_matches else 0.0
                            fees.append(ServiceFee(
                                category_name="সরকারি নির্ধারিত ফি",
                                amount_bdt=amount,
                                remarks=val
                            ))
                        elif "সময়সীমা" in key:
                            sla_time = val
                            
            slug = re.sub(r"[^\w\s-]", "", title_bn).strip().replace(" ", "-")[:50]
            
            return CitizenService(
                service_id=slug,
                title_bn=title_bn,
                category="নাগরিক সেবা",
                department_agency="বাংলাদেশ সরকার",
                summary=summary or f"{title_bn} সম্পর্কিত সরকারি নির্দেশিকা ও বিস্তারিত ফি তালিকা।",
                official_fees=fees,
                processing_time_sla=sla_time,
                required_documents=documents,
                step_by_step_process=steps,
                official_portal_url=url,
                citizen_charter_url=url,
                anti_broker_warning="সতর্কতা: কোনো দালাল বা মধ্যস্বত্বভোগীর শরণাপন্ন হবেন না। নির্ধারিত সরকারি ফি ব্যতিরেকে কাউকে টাকা দেওয়া আইনত দণ্ডনীয় অপরাধ।"
            )
        except Exception as e:
            logger.error(f"Error parsing citizen charter from {url}: {e}")
            return None
