/**
 * Quick R2 connectivity test — lists objects in the configured bucket.
 * Run: bun scripts/test-r2.ts   (requires R2_* env vars, see .env.local)
 */
import { S3Client, ListObjectsV2Command, HeadBucketCommand } from "@aws-sdk/client-s3";

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID || process.env.CLOUDFLARE_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET || "sohokari-assets";

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  console.error(
    "❌ Missing R2 credentials. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY (see .env.local)."
  );
  process.exit(1);
}

const client = new S3Client({
  region: "auto",
  endpoint:
    process.env.R2_S3_ENDPOINT || `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY },
});

async function main() {
  // 1. Verify bucket exists & is accessible
  await client.send(new HeadBucketCommand({ Bucket: BUCKET }));
  console.log(`✅ Bucket "${BUCKET}" is accessible`);

  // 2. List objects
  const res = await client.send(new ListObjectsV2Command({ Bucket: BUCKET, MaxKeys: 20 }));
  const objects = res.Contents ?? [];
  console.log(`📦 Found ${objects.length} object(s)${res.IsTruncated ? " (more...)" : ""}`);
  for (const o of objects) {
    console.log(`  - ${o.Key}  (${o.Size} bytes, ${(o.LastModified ?? new Date()).toISOString()})`);
  }
}

main().catch((err) => {
  console.error("❌ R2 test failed:", err.message ?? err);
  process.exit(1);
});
