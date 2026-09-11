"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteNotice, listNotices, type Notice } from "@/lib/api";

export default function NoticeAdminListClient() {
  const [notices, setNotices] = useState<Notice[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    listNotices()
      .then(setNotices)
      .catch((err) => setError(err instanceof Error ? err.message : "불러오지 못했습니다."));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("이 공지사항을 삭제할까요?")) return;
    try {
      await deleteNotice(id);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "삭제에 실패했습니다.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-kr-heading text-[22px] text-deep">공지사항 관리</h1>
        <Link
          href="/admin/notices/new"
          className="px-5 py-2.5 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors"
        >
          새 공지 작성
        </Link>
      </div>

      {error && <p className="text-[14px] text-muted-2">{error}</p>}
      {!error && !notices && <p className="text-[14px] text-muted-2">불러오는 중…</p>}
      {notices && notices.length === 0 && <p className="text-[14px] text-muted-2">등록된 공지사항이 없습니다.</p>}

      {notices && notices.length > 0 && (
        <div className="border-t border-deep/20">
          {notices.map((n) => (
            <div key={n.id} className="flex items-center gap-4 px-2 py-4 border-b border-deep/[0.12]">
              <span className="flex-1 text-[14px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">
                {n.pinned && <span className="mr-2 px-2 py-[3px] bg-deep text-bg text-[10px]">고정</span>}
                {n.title}
              </span>
              <span className="text-[12.5px] text-muted-2 w-[90px] shrink-0">{n.createdAt}</span>
              <Link href={`/admin/notices/edit/?id=${n.id}`} className="text-[13px] text-ink-soft border-b border-muted-3 shrink-0">
                수정
              </Link>
              <button onClick={() => handleDelete(n.id)} className="text-[13px] text-[#b23b3b] border-b border-[#b23b3b]/40 shrink-0">
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
