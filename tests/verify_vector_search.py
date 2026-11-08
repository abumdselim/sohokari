import sys
from pathlib import Path
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

if sys.platform.startswith("win"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from vectorize.vectorize_client import CloudflareVectorizeClient

console = Console(force_terminal=True, legacy_windows=False)

def run_tests():
    client = CloudflareVectorizeClient()
    console.print(Panel.fit("[bold green]🔍 সহকারী (Sohokari) - লাইভ ক্লাউডফ্লেয়ার ভেক্টর সার্চ টেস্ট[/bold green]", border_style="cyan"))

    test_queries = [
        "জমির নামজারি করতে গেলে দালাল ১০ হাজার টাকা চায়, আসল সরকারি ফি কত?",
        "পাসপোর্টের পুলিশ ভেরিফিকেশনে টাকা চাইলে কি করব?",
        "বিদেশে যাওয়ার মেডিকেল গামকা (Wafid) স্লিপের সরকারি ফি কত?",
        "পারিবারিক জমি ভাগাভাগি করার বণ্টননামা দলিলের আসল খরচ কত?"
    ]

    for idx, q in enumerate(test_queries, 1):
        console.print(f"\n[bold yellow]প্রশ্ন {idx}:[/bold yellow] [bold white]{q}[/bold white]")
        matches = client.search(q, top_k=2)

        if not matches:
            console.print("[red]❌ কোনো রেজাল্ট পাওয়া যায়নি।[/red]")
            continue

        table = Table(show_header=True, header_style="bold magenta")
        table.add_column("র‌্যাঙ্ক", width=6, justify="center")
        table.add_column("সেবা আইডি", style="cyan", width=32)
        table.add_column("স্কোর (Cosine)", justify="right", style="green", width=14)
        table.add_column("প্রিভিউ তথ্য", style="white")

        for r_idx, match in enumerate(matches, 1):
            metadata = match.get("metadata", {})
            score = match.get("score", 0.0)
            service_id = metadata.get("service_id", "N/A")
            preview = metadata.get("preview", "")[:120] + "..."
            table.add_row(str(r_idx), service_id, f"{score:.4f}", preview)

        console.print(table)

if __name__ == "__main__":
    run_tests()
