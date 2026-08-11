import BoardShell from "@/components/BoardShell";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ_CATS } from "@/lib/data";

export default function FaqPage() {
  return (
    <BoardShell summary="자주 묻는 질문 8건">
      <section className="px-5 sm:px-12 pt-10 sm:pt-14 pb-16 sm:pb-[104px] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-14">
        <div>
          <p className="mb-4 text-[10.5px] tracking-[0.3em] text-bronze">CATEGORY</p>
          <div className="flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-3 text-[14px] text-ink-soft font-light">
            {FAQ_CATS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="border-t border-deep/20">
          <FaqAccordion />
        </div>
      </section>
    </BoardShell>
  );
}
