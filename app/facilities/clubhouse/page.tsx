"use client";

import Image from "next/image";
import FacilityShell from "@/components/FacilityShell";
import FacilityItemGrid from "@/components/FacilityItemGrid";
import RevealBelowTabs from "@/components/RevealBelowTabs";
import { useLanguage } from "@/components/LanguageContext";
import { CLUBHOUSE_ITEMS } from "@/lib/data";

export default function ClubhousePage() {
  const { lang } = useLanguage();
  return (
    <FacilityShell summary={lang === "en" ? "Restaurant · Pro Shop · Locker · Shower" : "레스토랑 · 프로샵 · 라커 · 샤워"}>
      <section className="px-5 sm:px-36 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 sm:gap-14 items-center mb-14 sm:mb-16">
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src="/images/lobby.png"
              alt={lang === "en" ? "Clubhouse view" : "클럽하우스 전경"}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <RevealBelowTabs>
            <h2 className="mb-6 font-kr-heading font-normal text-[30px] sm:text-[42px] leading-[1.2] text-deep">
              {lang === "en" ? "A Space That Completes the Joy of the Round" : "라운드의 즐거움을 완성하는 공간"}
            </h2>
            <p className="text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
              {lang === "en"
                ? "Experience refined service and comfortable rest in our luxurious, well-appointed clubhouse lobby. Every member of staff treats each guest like a VIP."
                : "럭셔리하고 쾌적한 클럽하우스 로비에서 편안한 휴식과 함께 품격 있는 서비스를 경험해 보세요. 모든 직원이 고객 여러분을 VIP처럼 정성껏 모십니다."}
            </p>
          </RevealBelowTabs>
        </div>
        <FacilityItemGrid
          items={CLUBHOUSE_ITEMS}
          showHours={false}
          photoHeight="h-[220px] sm:h-[280px]"
          columnsClassName="grid-cols-1 sm:grid-cols-3"
        />
      </section>
    </FacilityShell>
  );
}
