import BoardShell from "@/components/BoardShell";
import FaqAccordion from "@/components/FaqAccordion";

export default function FaqPage() {
  return (
    <BoardShell summary="자주 묻는 질문 8건">
      <section className="px-24 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <div className="border-t border-deep/20">
          <FaqAccordion />
        </div>
      </section>
    </BoardShell>
  );
}
