"use client";

import { useEffect, useState } from "react";
import { deleteNotice, getNotice, listNotices, type Notice, type NoticeDetail } from "@/lib/api";
import { useAdminAuth } from "@/components/AdminAuthContext";
import Modal from "@/components/Modal";
import NoticeForm from "@/components/admin/NoticeForm";

export default function NoticeListClient() {
  const { isAdmin } = useAdminAuth();
  const [notices, setNotices] = useState<Notice[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [openId, setOpenId] = useState<number | null>(null);
  const [detailCache, setDetailCache] = useState<Record<number, NoticeDetail>>({});
  const [detailError, setDetailError] = useState<string | null>(null);

  const load = () => {
    listNotices()
      .then(setNotices)
      .catch((err) => setError(err instanceof Error ? err.message : "공지사항을 불러오지 못했습니다."));
  };

  useEffect(load, []);

  const toggle = (id: number) => {
    if (openId === id) {
      setOpenId(null);
      return;
    }
    setOpenId(id);
    setDetailError(null);
    if (!detailCache[id]) {
      getNotice(id)
        .then((detail) => setDetailCache((c) => ({ ...c, [id]: detail })))
        .catch((err) => setDetailError(err instanceof Error ? err.message : "불러오지 못했습니다."));
    }
  };

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("이 공지사항을 삭제할까요?")) return;
    try {
      await deleteNotice(id);
      setOpenId(null);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "삭제에 실패했습니다.");
    }
  };

  const currentDetail = openId !== null ? detailCache[openId] : undefined;

  return (
    <>
      {isAdmin && (
        <div className="flex justify-end mb-5">
          <button
            onClick={() => setCreateOpen(true)}
            className="px-5 py-2.5 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors"
          >
            글쓰기
          </button>
        </div>
      )}

      {error && <p className="px-6 py-16 text-center text-[14px] text-muted-2">{error}</p>}
      {!error && !notices && <p className="px-6 py-16 text-center text-[14px] text-muted-2">불러오는 중…</p>}
      {notices && notices.length === 0 && (
        <p className="px-6 py-16 text-center text-[14px] text-muted-2">등록된 공지사항이 없습니다.</p>
      )}

      {notices && notices.length > 0 && (
        <>
          <div className="hidden sm:flex gap-6 px-6 pb-4 border-b-2 border-deep/60 text-[12.5px] font-bold tracking-[0.22em] text-ink-soft2">
            <span className="w-[70px]">NO</span>
            <span className="flex-1">제목</span>
            <span className="w-[110px]">등록일</span>
            {isAdmin && <span className="w-[50px]">관리</span>}
          </div>
          {notices.map((n, i) => (
            <div key={n.id} className="border-b border-deep/[0.12]">
              <button
                onClick={() => toggle(n.id)}
                className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-4 sm:px-6 py-5 sm:py-6 text-left"
                style={{ background: n.pinned ? "#f2efe5" : "transparent" }}
              >
                <span className="hidden sm:block w-[70px] font-serif text-[18px] text-muted-2">
                  {String(notices.length - i).padStart(2, "0")}
                </span>
                <span className="flex-1 flex items-center gap-3.5 min-w-0">
                  {n.pinned && (
                    <span className="px-2.5 py-[5px] bg-deep text-bg text-[10px] tracking-[0.14em] shrink-0">공지</span>
                  )}
                  <span className="text-[14px] sm:text-[15px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">
                    {n.title}
                  </span>
                </span>
                <span className="flex items-center gap-3 sm:contents">
                  <span className="sm:w-[110px] text-[12.5px] text-muted-2">{n.createdAt}</span>
                  {isAdmin && (
                    <span
                      onClick={(e) => handleDelete(n.id, e)}
                      className="sm:w-[50px] text-[13px] text-[#b23b3b] border-b border-[#b23b3b]/40"
                    >
                      삭제
                    </span>
                  )}
                </span>
              </button>

              {openId === n.id && (
                <div className="px-6 sm:px-10 pb-8">
                  {detailError && <p className="text-[13px] text-muted-2">{detailError}</p>}
                  {!detailError && !currentDetail && <p className="text-[13px] text-muted-2">불러오는 중…</p>}
                  {currentDetail && (
                    <div>
                      {isAdmin && (
                        <div className="flex justify-end mb-4">
                          <button onClick={() => setEditOpen(true)} className="text-[13px] text-ink-soft border-b border-muted-3">
                            수정
                          </button>
                        </div>
                      )}
                      <p className="mb-6 text-[14.5px] leading-[1.9] text-ink-soft font-light whitespace-pre-wrap">
                        {currentDetail.body}
                      </p>
                      {currentDetail.images.length > 0 && (
                        <div className="flex flex-col items-center gap-4">
                          {currentDetail.images.map((img) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={img.id}
                              src={img.url}
                              alt={img.originalName || currentDetail.title}
                              className="w-full max-w-[780px] h-auto"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}

      <Modal open={createOpen} onClose={() => setCreateOpen(false)} title="공지사항 작성">
        <NoticeForm
          onSuccess={() => {
            setCreateOpen(false);
            load();
          }}
        />
      </Modal>

      <Modal open={editOpen} onClose={() => setEditOpen(false)} title="공지사항 수정">
        {currentDetail && (
          <NoticeForm
            initial={currentDetail}
            onSuccess={() => {
              setEditOpen(false);
              if (openId !== null) {
                getNotice(openId).then((detail) => setDetailCache((c) => ({ ...c, [openId]: detail })));
              }
              load();
            }}
          />
        )}
      </Modal>
    </>
  );
}
