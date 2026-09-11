// In production, out/ and backend/ share the same domain, so a relative
// path (e.g. "/backend/api") is correct as-is.
//
// In local dev, the frontend (next dev, :3000) and backend (XAMPP Apache,
// :80) are different ports, so an absolute URL is required — but hardcoding
// "http://localhost" breaks the moment the site is opened from another
// device on the network (e.g. http://<lan-ip>:3000), since that browser's
// "localhost" points at itself, not at the dev machine. Instead, take the
// configured dev URL's port/protocol but swap in whatever hostname the
// browser actually used to load the page.
function resolveApiBase(): string {
  const configured = process.env.NEXT_PUBLIC_API_BASE || "/backend/api";
  if (configured.startsWith("/")) return configured;
  if (typeof window === "undefined") return configured;
  try {
    const url = new URL(configured);
    url.hostname = window.location.hostname;
    return url.toString().replace(/\/$/, "");
  } catch {
    return configured;
  }
}

export interface Notice {
  id: number;
  title: string;
  pinned: boolean;
  createdAt: string;
}

export interface NoticeImage {
  id: number;
  url: string;
  originalName: string | null;
}

export interface NoticeDetail extends Notice {
  body: string;
  updatedAt: string;
  images: NoticeImage[];
}

export interface InquiryListItem {
  id: number;
  title: string;
  writerMasked: string;
  createdAt: string;
  hasReply: boolean;
}

export interface InquiryDetail {
  id: number;
  title: string;
  writerName: string;
  content: string;
  reply: string | null;
  repliedAt: string | null;
  createdAt: string;
}

class ApiError extends Error {}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${resolveApiBase()}${path}`, { ...options, credentials: "include" });
  } catch {
    throw new ApiError("서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.");
  }
  const data = await res.json().catch(() => null);
  if (!res.ok || !data || data.ok === false) {
    throw new ApiError(data?.error || `요청에 실패했습니다. (${res.status})`);
  }
  return data.data as T;
}

function toFormData(fields: Record<string, unknown>): FormData {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item instanceof Blob) fd.append(`${key}[]`, item);
        else fd.append(`${key}[]`, String(item));
      }
    } else if (value instanceof Blob) {
      fd.append(key, value);
    } else {
      fd.append(key, String(value));
    }
  }
  return fd;
}

function postForm<T>(path: string, fields: Record<string, unknown>): Promise<T> {
  return apiFetch<T>(path, { method: "POST", body: toFormData(fields) });
}

// ---- Notices ----

export function listNotices(): Promise<Notice[]> {
  return apiFetch<Notice[]>("/notices.php?action=list");
}

export function getNotice(id: number): Promise<NoticeDetail> {
  return apiFetch<NoticeDetail>(`/notices.php?action=get&id=${id}`);
}

export function createNotice(input: {
  title: string;
  body: string;
  pinned: boolean;
  photos: File[];
}): Promise<{ id: number }> {
  return postForm("/notices.php?action=create", input);
}

export function updateNotice(input: {
  id: number;
  title: string;
  body: string;
  pinned: boolean;
  photos: File[];
  removeImageIds: number[];
}): Promise<void> {
  return postForm("/notices.php?action=update", input);
}

export function deleteNotice(id: number): Promise<void> {
  return postForm("/notices.php?action=delete", { id });
}

// ---- Inquiries ----

export function listInquiries(): Promise<InquiryListItem[]> {
  return apiFetch<InquiryListItem[]>("/inquiries.php?action=list");
}

export function createInquiry(input: {
  title: string;
  writerName: string;
  password: string;
  content: string;
  honeypot?: string;
}): Promise<{ id: number }> {
  return postForm("/inquiries.php?action=create", input);
}

export function verifyInquiry(id: number, password?: string): Promise<InquiryDetail> {
  return postForm("/inquiries.php?action=verify", { id, password });
}

export function replyInquiry(id: number, reply: string): Promise<void> {
  return postForm("/inquiries.php?action=reply", { id, reply });
}

export function deleteInquiry(id: number): Promise<void> {
  return postForm("/inquiries.php?action=delete", { id });
}

// ---- Admin auth ----

export function adminLogin(username: string, password: string): Promise<void> {
  return postForm("/admin_login.php", { username, password });
}

export function adminLogout(): Promise<void> {
  return apiFetch("/admin_logout.php", { method: "POST" });
}

export function adminMe(): Promise<{ authenticated: boolean }> {
  return apiFetch<{ authenticated: boolean }>("/admin_me.php");
}

export function isApiError(err: unknown): err is Error {
  return err instanceof Error;
}
