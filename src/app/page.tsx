"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import {
  CloudUpload,
  Database,
  Download,
  ExternalLink,
  File as FileIcon,
  FileArchive,
  FileAudio,
  FileCode2,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileVideo,
  FolderOpen,
  HardDrive,
  Link2,
  Loader2,
  RefreshCw,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface StoredFile {
  key: string;
  name: string;
  size: number;
  contentType: string;
  uploadedAt: string;
  tracked: boolean;
}

interface Stats {
  count: number;
  totalSize: number;
}

const BUCKET = "sohokari-assets";

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function FileIconFor({ name, className }: { name: string; className?: string }) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, React.ReactNode> = {
    pdf: <FileText className={cn("text-rose-500", className)} />,
    doc: <FileText className={cn("text-teal-600", className)} />,
    docx: <FileText className={cn("text-teal-600", className)} />,
    txt: <FileText className={cn("text-teal-600", className)} />,
    md: <FileText className={cn("text-teal-600", className)} />,
    png: <FileImage className={cn("text-emerald-600", className)} />,
    jpg: <FileImage className={cn("text-emerald-600", className)} />,
    jpeg: <FileImage className={cn("text-emerald-600", className)} />,
    gif: <FileImage className={cn("text-emerald-600", className)} />,
    webp: <FileImage className={cn("text-emerald-600", className)} />,
    svg: <FileImage className={cn("text-emerald-600", className)} />,
    zip: <FileArchive className={cn("text-amber-600", className)} />,
    rar: <FileArchive className={cn("text-amber-600", className)} />,
    gz: <FileArchive className={cn("text-amber-600", className)} />,
    csv: <FileSpreadsheet className={cn("text-lime-600", className)} />,
    xlsx: <FileSpreadsheet className={cn("text-lime-600", className)} />,
    json: <FileCode2 className={cn("text-violet-600", className)} />,
    sql: <FileCode2 className={cn("text-violet-600", className)} />,
    mp3: <FileAudio className={cn("text-orange-500", className)} />,
    wav: <FileAudio className={cn("text-orange-500", className)} />,
    mp4: <FileVideo className={cn("text-fuchsia-600", className)} />,
    mov: <FileVideo className={cn("text-fuchsia-600", className)} />,
  };
  return <>{map[ext] ?? <FileIcon className={cn("text-muted-foreground", className)} />}</>;
}

export default function Home() {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<StoredFile[]>([]);
  const [stats, setStats] = useState<Stats>({ count: 0, totalSize: 0 });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<StoredFile | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/files", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setFiles(data.files);
      setStats(data.stats);
    } catch {
      toast({
        title: "Could not load files",
        description: "Failed to reach the R2 bucket. Check the server logs.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const uploadFiles = useCallback(
    async (picked: FileList | File[]) => {
      const list = Array.from(picked);
      if (list.length === 0) return;

      setUploading(true);
      const formData = new FormData();
      for (const f of list) formData.append("files", f);

      try {
        const res = await fetch("/api/files", { method: "POST", body: formData });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);

        toast({
          title: "Upload complete",
          description:
            list.length === 1
              ? `"${list[0].name}" uploaded to ${BUCKET}.`
              : `${list.length} files uploaded to ${BUCKET}.`,
        });
        await refresh();
      } catch (err) {
        toast({
          title: "Upload failed",
          description: err instanceof Error ? err.message : "Unknown error",
          variant: "destructive",
        });
      } finally {
        setUploading(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    },
    [refresh, toast]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files?.length) uploadFiles(e.dataTransfer.files);
    },
    [uploadFiles]
  );

  const confirmDelete = useCallback(async () => {
    if (!deleteTarget) return;
    const target = deleteTarget;
    setDeleteTarget(null);
    try {
      const res = await fetch(`/api/files?key=${encodeURIComponent(target.key)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast({ title: "File deleted", description: `"${target.name}" removed from ${BUCKET}.` });
      await refresh();
    } catch (err) {
      toast({
        title: "Delete failed",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    }
  }, [deleteTarget, refresh, toast]);

  const copyLink = useCallback(
    async (file: StoredFile) => {
      const url = `${window.location.origin}/api/files/download?key=${encodeURIComponent(file.key)}`;
      try {
        await navigator.clipboard.writeText(url);
        toast({ title: "Link copied", description: "Presigned download link is on your clipboard." });
      } catch {
        toast({ title: "Copy failed", description: url, variant: "destructive" });
      }
    },
    [toast]
  );

  const download = useCallback((file: StoredFile) => {
    window.location.href = `/api/files/download?key=${encodeURIComponent(file.key)}`;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-50/60 via-background to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
              <CloudUpload className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold leading-tight">
                সহকারী <span className="text-emerald-600">Storage</span>
              </h1>
              <p className="truncate text-xs text-muted-foreground">
                Cloudflare R2 console for Kaaz AI assets
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden font-mono text-xs sm:inline-flex">
              {BUCKET}
            </Badge>
            <Button asChild variant="ghost" size="icon" aria-label="Open GitHub repository">
              <a
                href="https://github.com/abumdselim/sohokari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        {/* Stats */}
        <section
          aria-label="Bucket statistics"
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <FolderOpen className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xl font-bold leading-none">{stats.count}</p>
                <p className="mt-1 text-xs text-muted-foreground">Objects</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                <HardDrive className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xl font-bold leading-none">{formatBytes(stats.totalSize)}</p>
                <p className="mt-1 text-xs text-muted-foreground">Total size</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Database className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold leading-none">R2 · auto</p>
                <p className="mt-1 text-xs text-muted-foreground">S3-compatible</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                <Link2 className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-none">Presigned</p>
                <p className="mt-1 text-xs text-muted-foreground">1h download links</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Upload zone */}
        <section aria-label="Upload files" className="mt-6">
          <div
            role="button"
            tabIndex={0}
            aria-label="Upload files: drop files here or press Enter to browse"
            onClick={() => inputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-colors sm:p-10",
              dragActive
                ? "border-emerald-500 bg-emerald-50"
                : "border-border bg-card hover:border-emerald-400 hover:bg-emerald-50/40",
              uploading && "pointer-events-none opacity-70"
            )}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              className="sr-only"
              aria-hidden="true"
              tabIndex={-1}
              onChange={(e) => e.target.files && uploadFiles(e.target.files)}
            />
            {uploading ? (
              <Loader2 className="size-8 animate-spin text-emerald-600" aria-hidden="true" />
            ) : (
              <CloudUpload className="size-8 text-emerald-600" aria-hidden="true" />
            )}
            <div>
              <p className="font-semibold">
                {uploading ? "Uploading to R2…" : "Drop files here or click to upload"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Any file type · up to 100 MB each · stored in <span className="font-mono">{BUCKET}</span>
              </p>
            </div>
          </div>
        </section>

        {/* File list */}
        <section aria-label="Stored files" className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold">
              Files <span className="text-muted-foreground">({stats.count})</span>
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setLoading(true);
                refresh();
              }}
              disabled={loading}
            >
              <RefreshCw className={cn("size-4", loading && "animate-spin")} />
              Refresh
            </Button>
          </div>

          <Card>
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center gap-2 p-10 text-muted-foreground">
                  <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                  <span className="text-sm">Loading bucket contents…</span>
                </div>
              ) : files.length === 0 ? (
                <div className="flex flex-col items-center gap-2 p-10 text-center">
                  <FolderOpen className="size-10 text-muted-foreground/40" aria-hidden="true" />
                  <p className="font-medium">Bucket is empty</p>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Upload government forms, PDFs, circulars or any asset above — they will appear
                    here with presigned download links.
                  </p>
                </div>
              ) : (
                <div className="max-h-[480px] overflow-y-auto scrollbar-thin">
                  <Table>
                    <TableHeader className="sticky top-0 z-10 bg-card shadow-[0_1px_0_0_hsl(var(--border))]">
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">Size</TableHead>
                        <TableHead className="hidden md:table-cell">Uploaded</TableHead>
                        <TableHead className="w-12 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {files.map((file) => (
                        <TableRow key={file.key}>
                          <TableCell className="max-w-[220px] sm:max-w-[320px]">
                            <div className="flex items-center gap-3">
                              <FileIconFor name={file.name} className="size-5 shrink-0" />
                              <div className="min-w-0">
                                <p className="truncate font-medium" title={file.name}>
                                  {file.name}
                                </p>
                                <p className="truncate font-mono text-xs text-muted-foreground" title={file.key}>
                                  {file.key}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden whitespace-nowrap text-sm text-muted-foreground sm:table-cell">
                            {formatBytes(file.size)}
                          </TableCell>
                          <TableCell className="hidden whitespace-nowrap text-sm text-muted-foreground md:table-cell">
                            {format(new Date(file.uploadedAt), "dd MMM yyyy, HH:mm")}
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label={`Actions for ${file.name}`}>
                                  <span className="sr-only">Open actions</span>
                                  <svg
                                    className="size-4"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <circle cx="8" cy="3" r="1.5" />
                                    <circle cx="8" cy="8" r="1.5" />
                                    <circle cx="8" cy="13" r="1.5" />
                                  </svg>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => download(file)}>
                                  <Download className="size-4" /> Download
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => copyLink(file)}>
                                  <Link2 className="size-4" /> Copy presigned link
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setDeleteTarget(file)}
                                  className="text-destructive focus:text-destructive"
                                >
                                  <Trash2 className="size-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Sticky footer */}
      <footer className="mt-auto border-t bg-background">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>
            সহকারী Storage Console — built for{" "}
            <span className="font-medium text-foreground">Kaaz AI (কাজ এআই)</span>
          </p>
          <p>
            Cloudflare R2 · bucket <span className="font-mono">{BUCKET}</span>
          </p>
        </div>
      </footer>

      {/* Delete confirmation */}
      <AlertDialog open={deleteTarget !== null} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this file?</AlertDialogTitle>
            <AlertDialogDescription>
              &quot;{deleteTarget?.name}&quot; will be permanently removed from the{" "}
              <span className="font-mono">{BUCKET}</span> bucket. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              <Trash2 className="size-4" /> Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
