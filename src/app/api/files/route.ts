import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { listAllObjects, putObject, deleteObject } from "@/lib/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_SIZE = 100 * 1024 * 1024; // 100 MB per file

function basename(key: string): string {
  const idx = key.lastIndexOf("/");
  return idx === -1 ? key : key.slice(idx + 1);
}

/** GET /api/files — list all objects in the bucket, merged with DB metadata. */
export async function GET() {
  try {
    const [objects, records] = await Promise.all([
      listAllObjects(),
      db.storedFile.findMany(),
    ]);

    const byKey = new Map(records.map((r) => [r.key, r]));
    const files = objects.map((obj) => {
      const rec = byKey.get(obj.key);
      return {
        key: obj.key,
        name: rec?.name ?? basename(obj.key),
        size: obj.size,
        contentType: rec?.contentType ?? "application/octet-stream",
        uploadedAt: obj.lastModified.toISOString(),
        tracked: Boolean(rec),
      };
    });

    const totalSize = files.reduce((sum, f) => sum + f.size, 0);
    return NextResponse.json({ files, stats: { count: files.length, totalSize } });
  } catch (err) {
    console.error("[api/files] GET failed:", err);
    return NextResponse.json(
      { error: "Failed to list files from R2" },
      { status: 500 }
    );
  }
}

/** POST /api/files — upload one or more files (multipart/form-data). */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const entries = formData.getAll("files").filter((v): v is File => v instanceof File);
    if (entries.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const uploaded: { key: string; name: string; size: number }[] = [];
    for (const file of entries) {
      if (file.size === 0) {
        return NextResponse.json({ error: `"${file.name}" is empty` }, { status: 400 });
      }
      if (file.size > MAX_SIZE) {
        return NextResponse.json(
          { error: `"${file.name}" exceeds the 100 MB limit` },
          { status: 413 }
        );
      }

      // Sanitize the filename and prefix with a timestamp to avoid collisions.
      const safeName = file.name.replace(/[^a-zA-Z0-9._ -]/g, "_").replace(/\s+/g, "-");
      const key = `uploads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${safeName}`;

      const buffer = Buffer.from(await file.arrayBuffer());
      const contentType = file.type || "application/octet-stream";

      await putObject(key, buffer, contentType);
      await db.storedFile.create({
        data: { key, name: file.name, contentType, size: file.size },
      });

      uploaded.push({ key, name: file.name, size: file.size });
    }

    return NextResponse.json({ uploaded }, { status: 201 });
  } catch (err) {
    console.error("[api/files] POST failed:", err);
    return NextResponse.json({ error: "Upload to R2 failed" }, { status: 500 });
  }
}

/** DELETE /api/files?key=... — remove an object from R2 and its DB record. */
export async function DELETE(req: NextRequest) {
  try {
    const key = req.nextUrl.searchParams.get("key");
    if (!key) {
      return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
    }

    await deleteObject(key);
    await db.storedFile.deleteMany({ where: { key } });

    return NextResponse.json({ ok: true, key });
  } catch (err) {
    console.error("[api/files] DELETE failed:", err);
    return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
  }
}
