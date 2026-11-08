import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getPresignedDownloadUrl } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/files/download?key=...
 * Redirects (302) to a short-lived presigned R2 download URL.
 */
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (!key) {
    return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
  }

  try {
    const record = await db.storedFile.findUnique({ where: { key } });
    const url = await getPresignedDownloadUrl(key, record?.name ?? key.split("/").pop());
    return NextResponse.redirect(url, 302);
  } catch (err) {
    console.error("[api/files/download] failed:", err);
    return NextResponse.json({ error: "Failed to create download link" }, { status: 500 });
  }
}
