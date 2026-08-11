import BoardShell from "@/components/BoardShell";
import { INQUIRIES, INQUIRY_CHANNELS } from "@/lib/data";

export default function InquiryPage() {
  return (
    <BoardShell summary="총 6건 · 평균 답변 소요 1일">
      <section className="px-5 sm:px-12 pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[22px] mb-10 sm:mb-11">
          {INQUIRY_CHANNELS.map((c) => (
            <div key={c.label} className="flex-1 px-7 py-8 border border-deep/15 bg-bg-contrast">
              <div className="mb-3.5 text-[10.5px] tracking-[0.26em] text-bronze">{c.label}</div>
              <div className="mb-2.5 font-serif text-[24px] sm:text-[26px] text-deep">{c.value}</div>
              <div className="text-[13px] text-muted font-light">{c.note}</div>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex gap-6 px-6 pb-4 border-b border-deep/25 text-[11px] tracking-[0.22em] text-muted-2">
          <span className="w-[70px]">NO</span>
          <span className="flex-1">문의 내용</span>
          <span className="w-[110px]">작성자</span>
          <span className="w-[110px]">등록일</span>
          <span className="w-[100px]">처리 상태</span>
        </div>
        {INQUIRIES.map((q) => {
          const done = q.status === "답변완료";
          return (
            <div
              key={q.no}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-4 sm:px-6 py-5 sm:py-6 border-b border-deep/[0.12]"
            >
              <span className="hidden sm:block w-[70px] font-serif text-[18px] text-muted-2">{q.no}</span>
              <span className="flex-1 text-[14px] sm:text-[15px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">
                {q.title}
              </span>
              <span className="flex items-center gap-4 sm:contents">
                <span className="sm:w-[110px] text-[13px] text-muted">{q.writer}</span>
                <span className="sm:w-[110px] text-[12.5px] text-muted-2">{q.date}</span>
                <span className="sm:w-[100px]">
                  <span
                    className="inline-block px-3 py-[6px] text-[11.5px] tracking-[0.06em]"
                    style={{ background: done ? "#1e3a2b" : "#e0dccd", color: done ? "#f6f4ee" : "#4a5145" }}
                  >
                    {q.status}
                  </span>
                </span>
              </span>
            </div>
          );
        })}
        <p className="mt-8 text-[13px] text-muted-2 font-light">
          비공개로 등록된 문의는 목록에 제목만 표시되며, 답변은 작성 시 남기신 연락처로 개별 안내드립니다.
        </p>
      </section>
    </BoardShell>
  );
}
