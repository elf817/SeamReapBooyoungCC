"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NoticeForm from "@/components/admin/NoticeForm";
import { getNotice, type NoticeDetail } from "@/lib/api";

export default function NoticeEditClient() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const [notice, setNotice] = useState<NoticeDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("잘못된 접근입니다.");
      return;
    }
    getNotice(id)
      .then(setNotice)
      .catch((err) => setError(err instanceof Error ? err.message : "불러오지 못했습니다."));
  }, [id]);

  return (
    <div>
      <h1 className="mb-8 font-kr-heading text-[22px] text-deep">공지사항 수정</h1>
      {error && <p className="text-[14px] text-muted-2">{error}</p>}
      {!error && !notice && <p className="text-[14px] text-muted-2">불러오는 중…</p>}
      {notice && <NoticeForm initial={notice} />}
    </div>
  );
}
