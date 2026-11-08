import "server-only";

import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  type _Object,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

/**
 * Cloudflare R2 (S3-compatible) client.
 * Credentials come from .env.local (gitignored) — see R2_* vars.
 */
export const R2_BUCKET = process.env.R2_BUCKET || "sohokari-assets";

export const r2 = new S3Client({
  region: "auto",
  endpoint:
    process.env.R2_S3_ENDPOINT ||
    `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

export interface R2Object {
  key: string;
  size: number;
  lastModified: Date;
}

/** List every object in the bucket (handles pagination). */
export async function listAllObjects(prefix?: string): Promise<R2Object[]> {
  const out: R2Object[] = [];
  let token: string | undefined;

  do {
    const res = await r2.send(
      new ListObjectsV2Command({
        Bucket: R2_BUCKET,
        Prefix: prefix,
        ContinuationToken: token,
      })
    );
    for (const obj of res.Contents ?? []) {
      out.push({
        key: obj.Key!,
        size: obj.Size ?? 0,
        lastModified: obj.LastModified ?? new Date(0),
      });
    }
    token = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (token);

  return out.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
}

/** Upload a buffer to R2. */
export async function putObject(
  key: string,
  body: Buffer,
  contentType: string
): Promise<void> {
  await r2.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
}

/** Delete an object from R2 (idempotent). */
export async function deleteObject(key: string): Promise<void> {
  await r2.send(new DeleteObjectCommand({ Bucket: R2_BUCKET, Key: key }));
}

/**
 * Generate a short-lived presigned download URL (default 1 hour).
 * Forces the browser to download the file with its original name.
 */
export async function getPresignedDownloadUrl(
  key: string,
  filename?: string,
  expiresIn = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    ...(filename
      ? { ResponseContentDisposition: `attachment; filename="${filename.replace(/"/g, "")}"` }
      : {}),
  });
  return getSignedUrl(r2, command, { expiresIn });
}

export type { _Object };
