import BoardShell from "@/components/BoardShell";
import { NOTICES } from "@/lib/data";

export default function NoticePage() {
  return (
    <BoardShell summary="총 8건 · 최근 업데이트 2026.08.01">
      <section className="px-5 sm:px-12 pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <div className="hidden sm:flex gap-6 px-6 pb-4 border-b border-deep/25 text-[11px] tracking-[0.22em] text-muted-2">
          <span className="w-[70px]">NO</span>
          <span className="flex-1">제목</span>
          <span className="w-[120px]">구분</span>
          <span className="w-[110px]">등록일</span>
        </div>
        {NOTICES.map((n) => (
          <div
            key={n.no}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-4 sm:px-6 py-5 sm:py-6 border-b border-deep/[0.12]"
            style={{ background: n.pinned ? "#f2efe5" : "transparent" }}
          >
            <span className="hidden sm:block w-[70px] font-serif text-[18px] text-muted-2">{n.no}</span>
            <span className="flex-1 flex items-center gap-3.5 min-w-0">
              {n.pinned && (
                <span className="px-2.5 py-[5px] bg-deep text-bg text-[10px] tracking-[0.14em] shrink-0">공지</span>
              )}
              <a className="text-[14px] sm:text-[15px] text-ink overflow-hidden text-ellipsis whitespace-nowrap">
                {n.title}
              </a>
            </span>
            <span className="flex items-center gap-3 sm:contents">
              <span className="sm:w-[120px] text-[12.5px] text-bronze tracking-[0.06em]">{n.cat}</span>
              <span className="sm:w-[110px] text-[12.5px] text-muted-2">{n.date}</span>
            </span>
          </div>
        ))}
      </section>
    </BoardShell>
  );
}
