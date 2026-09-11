"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { replyInquiry, verifyInquiry, type InquiryDetail } from "@/lib/api";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink focus:outline-none focus:border-deep transition-colors";

export default function InquiryAdminDetailClient() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const [inquiry, setInquiry] = useState<InquiryDetail | null>(null);
  const [reply, setReply] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) {
      setError("잘못된 접근입니다.");
      return;
    }
    verifyInquiry(id)
      .then((detail) => {
        setInquiry(detail);
        setReply(detail.reply ?? "");
      })
      .catch((err) => setError(err instanceof Error ? err.message : "불러오지 못했습니다."));
  }, [id]);

  const handleReply = async (e: FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) return;
    setSubmitting(true);
    try {
      await replyInquiry(id, reply);
      const detail = await verifyInquiry(id);
      setInquiry(detail);
    } catch (err) {
      setError(err instanceof Error ? err.message : "답변 등록에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  if (error) return <p className="text-[14px] text-muted-2">{error}</p>;
  if (!inquiry) return <p className="text-[14px] text-muted-2">불러오는 중…</p>;

  return (
    <div className="max-w-[720px]">
      <h1 className="mb-2 font-kr-heading text-[22px] text-deep">{inquiry.title}</h1>
      <div className="mb-6 flex gap-4 text-[12.5px] text-muted-2">
        <span>{inquiry.writerName}</span>
        <span>{inquiry.createdAt}</span>
      </div>
      <p className="mb-10 p-5 bg-bg-contrast text-[14.5px] leading-[1.9] text-ink-soft font-light whitespace-pre-wrap">
        {inquiry.content}
      </p>

      <form onSubmit={handleReply} className="flex flex-col gap-4">
        <label className="text-[11px] tracking-[0.22em] text-bronze">답변</label>
        <textarea value={reply} onChange={(e) => setReply(e.target.value)} rows={6} className={inputClass} />
        <button
          type="submit"
          disabled={submitting}
          className="self-start px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
        >
          {submitting ? "저장 중…" : inquiry.reply ? "답변 수정" : "답변 등록"}
        </button>
      </form>
    </div>
  );
}
