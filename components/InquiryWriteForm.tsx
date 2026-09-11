"use client";

import { FormEvent, useState } from "react";
import { createInquiry } from "@/lib/api";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink placeholder:text-muted-3 focus:outline-none focus:border-deep transition-colors";

export default function InquiryWriteForm({ onSuccess }: { onSuccess: () => void }) {
  const [title, setTitle] = useState("");
  const [writerName, setWriterName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !writerName.trim() || !password.trim() || !content.trim()) {
      setError("모든 항목을 입력해 주세요.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await createInquiry({ title, writerName, password, content, honeypot });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "등록에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="inquiry-title" className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">
          제목
        </label>
        <input
          id="inquiry-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1">
          <label htmlFor="inquiry-writer" className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">
            작성자
          </label>
          <input
            id="inquiry-writer"
            type="text"
            value={writerName}
            onChange={(e) => setWriterName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="inquiry-password" className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">
            비밀번호
          </label>
          <input
            id="inquiry-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-content" className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">
          내용
        </label>
        <textarea
          id="inquiry-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className={inputClass}
        />
      </div>

      {error && <p className="text-[13px] text-[#b23b3b]">{error}</p>}

      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
        >
          {submitting ? "등록 중…" : "문의 등록"}
        </button>
      </div>
    </form>
  );
}
