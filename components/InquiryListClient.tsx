"use client";

import { FormEvent, useEffect, useState } from "react";
import { deleteInquiry, listInquiries, replyInquiry, verifyInquiry, type InquiryDetail, type InquiryListItem } from "@/lib/api";
import { useAdminAuth } from "@/components/AdminAuthContext";
import Modal from "@/components/Modal";
import InquiryWriteForm from "@/components/InquiryWriteForm";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink placeholder:text-muted-3 focus:outline-none focus:border-deep transition-colors";

export default function InquiryListClient() {
  const { isAdmin } = useAdminAuth();
  const [inquiries, setInquiries] = useState<InquiryListItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [writeOpen, setWriteOpen] = useState(false);

  const [openId, setOpenId] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [detailCache, setDetailCache] = useState<Record<number, InquiryDetail>>({});

  const [replyDraft, setReplyDraft] = useState("");
  const [replySubmitting, setReplySubmitting] = useState(false);
  const [replyError, setReplyError] = useState<string | null>(null);

  const load = () => {
    listInquiries()
      .then(setInquiries)
      .catch((err) => setError(err instanceof Error ? err.message : "문의사항을 불러오지 못했습니다."));
  };

  useEffect(load, []);

  const toggle = (id: number) => {
    if (openId === id) {
      setOpenId(null);
      return;
    }
    setOpenId(id);
    setPassword("");
    setVerifyError(null);
    setReplyError(null);

    if (isAdmin && !detailCache[id]) {
      verifyInquiry(id)
        .then((detail) => {
          setDetailCache((c) => ({ ...c, [id]: detail }));
          setReplyDraft(detail.reply ?? "");
        })
        .catch((err) => setVerifyError(err instanceof Error ? err.message : "불러오지 못했습니다."));
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (openId === null) return;
    setVerifying(true);
    setVerifyError(null);
    try {
      const detail = await verifyInquiry(openId, password);
      setDetailCache((c) => ({ ...c, [openId]: detail }));
    } catch (err) {
      setVerifyError(err instanceof Error ? err.message : "비밀번호가 일치하지 않습니다.");
    } finally {
      setVerifying(false);
    }
  };

  const handleReply = async (e: FormEvent) => {
    e.preventDefault();
    if (openId === null || !replyDraft.trim()) return;
    setReplySubmitting(true);
    setReplyError(null);
    try {
      await replyInquiry(openId, replyDraft);
      setOpenId(null);
      load();
    } catch (err) {
      setReplyError(err instanceof Error ? err.message : "답변 등록에 실패했습니다.");
    } finally {
      setReplySubmitting(false);
    }
  };

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("이 문의를 삭제할까요?")) return;
    try {
      await deleteInquiry(id);
      if (openId === id) setOpenId(null);
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "삭제에 실패했습니다.");
    }
  };

  const currentDetail = openId !== null ? detailCache[openId] : undefined;

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setWriteOpen(true)}
          className="px-6 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors"
        >
          문의 등록
        </button>
      </div>

      {error && <p className="py-16 text-center text-[14px] text-muted-2">{error}</p>}
      {!error && !inquiries && <p className="py-16 text-center text-[14px] text-muted-2">불러오는 중…</p>}
      {inquiries && inquiries.length === 0 && (
        <p className="py-16 text-center text-[14px] text-muted-2">등록된 문의가 없습니다.</p>
      )}

      {inquiries && inquiries.length > 0 && (
        <>
          <div className="hidden sm:flex gap-6 px-6 pb-4 border-b-2 border-deep/60 text-[12.5px] font-bold tracking-[0.22em] text-ink-soft2">
            <span className="w-[70px]">NO</span>
            <span className="flex-1">제목</span>
            <span className="w-[110px]">작성자</span>
            <span className="w-[110px]">등록일</span>
            <span className="w-[100px]">처리 상태</span>
            {isAdmin && <span className="w-[50px]">관리</span>}
          </div>

          {inquiries.map((q, i) => (
            <div key={q.id} className="border-b border-deep/[0.12]">
              <button
                onClick={() => toggle(q.id)}
                className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-4 sm:px-6 py-5 sm:py-6 text-left"
              >
                <span className="hidden sm:block w-[70px] font-serif text-[18px] text-muted-2">
                  {String(inquiries.length - i).padStart(2, "0")}
                </span>
                <span className="flex-1 flex items-center gap-2 min-w-0">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="shrink-0 text-muted-2">
                    <rect x="1" y="6" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                  <span className="text-[14px] sm:text-[15px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">
                    {q.title}
                  </span>
                </span>
                <span className="flex items-center gap-4 sm:contents">
                  <span className="sm:w-[110px] text-[13px] text-muted">{q.writerMasked}</span>
                  <span className="sm:w-[110px] text-[12.5px] text-muted-2">{q.createdAt}</span>
                  <span className="sm:w-[100px]">
                    <span
                      className="inline-block px-3 py-[6px] text-[11.5px] tracking-[0.06em]"
                      style={{ background: q.hasReply ? "#1e3a2b" : "#e0dccd", color: q.hasReply ? "#f6f4ee" : "#4a5145" }}
                    >
                      {q.hasReply ? "답변완료" : "접수"}
                    </span>
                  </span>
                  {isAdmin && (
                    <span
                      onClick={(e) => handleDelete(q.id, e)}
                      className="sm:w-[50px] text-[13px] text-[#b23b3b] border-b border-[#b23b3b]/40"
                    >
                      삭제
                    </span>
                  )}
                </span>
              </button>

              {openId === q.id && (
                <div className="px-6 sm:px-10 pb-8">
                  {!currentDetail ? (
                    isAdmin ? (
                      <p className="text-[13px] text-muted-2">{verifyError || "불러오는 중…"}</p>
                    ) : (
                      <form onSubmit={handleVerify} className="flex flex-col gap-4 py-4">
                        <p className="text-[14px] text-ink-soft">작성 시 입력한 비밀번호를 입력해 주세요.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호"
                            className={`${inputClass} sm:max-w-[260px]`}
                          />
                          <button
                            type="submit"
                            disabled={verifying}
                            className="px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
                          >
                            {verifying ? "확인 중…" : "확인"}
                          </button>
                        </div>
                        {verifyError && <p className="text-[13px] text-[#b23b3b]">{verifyError}</p>}
                      </form>
                    )
                  ) : (
                    <div>
                      <p className="mb-6 text-[14.5px] leading-[1.9] text-ink-soft font-light whitespace-pre-wrap">
                        {currentDetail.content}
                      </p>

                      {!isAdmin && currentDetail.reply && (
                        <div className="mb-4 p-6 bg-bg-contrast border-l-2 border-deep">
                          <div className="mb-3 text-[11px] tracking-[0.22em] text-bronze">답변</div>
                          <p className="text-[14.5px] leading-[1.9] text-ink-soft font-light whitespace-pre-wrap">
                            {currentDetail.reply}
                          </p>
                          {currentDetail.repliedAt && (
                            <div className="mt-3 text-[12px] text-muted-2">{currentDetail.repliedAt}</div>
                          )}
                        </div>
                      )}
                      {!isAdmin && !currentDetail.reply && (
                        <p className="text-[13.5px] text-muted-2">아직 답변이 등록되지 않았습니다.</p>
                      )}

                      {isAdmin && (
                        <form onSubmit={handleReply} className="flex flex-col gap-4 p-6 bg-bg-contrast">
                          <label className="text-[11px] tracking-[0.22em] text-bronze">답변</label>
                          <textarea
                            value={replyDraft}
                            onChange={(e) => setReplyDraft(e.target.value)}
                            rows={5}
                            className={inputClass}
                          />
                          {replyError && <p className="text-[13px] text-[#b23b3b]">{replyError}</p>}
                          <button
                            type="submit"
                            disabled={replySubmitting}
                            className="self-start px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
                          >
                            {replySubmitting ? "저장 중…" : currentDetail.reply ? "답변 수정" : "답변 등록"}
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}

      <Modal open={writeOpen} onClose={() => setWriteOpen(false)} title="문의게시판 작성">
        <InquiryWriteForm
          onSuccess={() => {
            setWriteOpen(false);
            load();
          }}
        />
      </Modal>
    </>
  );
}
