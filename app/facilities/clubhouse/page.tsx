import FacilityShell from "@/components/FacilityShell";
import FacilityItemGrid from "@/components/FacilityItemGrid";
import Placeholder from "@/components/Placeholder";
import { CLUBHOUSE_ITEMS } from "@/lib/data";

export default function ClubhousePage() {
  return (
    <FacilityShell summary="2층 · 레스토랑 · 프로샵 · 스파">
      <section className="px-5 sm:px-12 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center mb-14 sm:mb-16">
          <Placeholder label="클럽하우스 전경 (4:3)" className="min-h-[280px] md:min-h-[420px] items-center justify-center" />
          <div>
            <h2 className="mb-6 font-serif font-normal text-[30px] sm:text-[42px] leading-[1.2] text-deep">
              라운드의 즐거움을 완성하는 공간
            </h2>
            <p className="text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
              편안한 휴식과 맛있는 식사를 즐길 수 있는 레스토랑과, 프로샵, 락커룸, 사우나 등 골퍼를 위한 다양한 편의시설을 갖추고 있습니다.
            </p>
          </div>
        </div>
        <FacilityItemGrid items={CLUBHOUSE_ITEMS} />
      </section>
    </FacilityShell>
  );
}
