"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteInquiry, listInquiries, type InquiryListItem } from "@/lib/api";

export default function InquiryAdminListClient() {
  const [inquiries, setInquiries] = useState<InquiryListItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    listInquiries()
      .then(setInquiries)
      .catch((err) => setError(err instanceof Error ? err.message : "불러오지 못했습니다."));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("이 문의를 삭제할까요?")) return;
    try {
      await deleteInquiry(id);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "삭제에 실패했습니다.");
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-kr-heading text-[22px] text-deep">문의게시판 관리</h1>

      {error && <p className="text-[14px] text-muted-2">{error}</p>}
      {!error && !inquiries && <p className="text-[14px] text-muted-2">불러오는 중…</p>}
      {inquiries && inquiries.length === 0 && <p className="text-[14px] text-muted-2">등록된 문의가 없습니다.</p>}

      {inquiries && inquiries.length > 0 && (
        <div className="border-t border-deep/20">
          {inquiries.map((q) => (
            <div key={q.id} className="flex items-center gap-4 px-2 py-4 border-b border-deep/[0.12]">
              <span className="flex-1 text-[14px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">{q.title}</span>
              <span className="text-[12.5px] text-muted w-[80px] shrink-0">{q.writerMasked}</span>
              <span className="text-[12.5px] text-muted-2 w-[90px] shrink-0">{q.createdAt}</span>
              <span
                className="inline-block px-3 py-[6px] text-[11.5px] tracking-[0.06em] shrink-0"
                style={{ background: q.hasReply ? "#1e3a2b" : "#e0dccd", color: q.hasReply ? "#f6f4ee" : "#4a5145" }}
              >
                {q.hasReply ? "답변완료" : "접수"}
              </span>
              <Link href={`/admin/inquiries/detail/?id=${q.id}`} className="text-[13px] text-ink-soft border-b border-muted-3 shrink-0">
                보기
              </Link>
              <button onClick={() => handleDelete(q.id)} className="text-[13px] text-[#b23b3b] border-b border-[#b23b3b]/40 shrink-0">
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
