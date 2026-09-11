import Image from "next/image";
import FacilityShell from "@/components/FacilityShell";
import FacilityItemGrid from "@/components/FacilityItemGrid";
import RevealBelowTabs from "@/components/RevealBelowTabs";
import { RANGE_ITEMS } from "@/lib/data";

export default function RangePage() {
  return (
    <FacilityShell summary="78타석 · 1층·2층 구조">
      <section className="px-[60px] sm:px-36 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 sm:gap-14 items-center mb-14 sm:mb-16">
          <RevealBelowTabs className="order-2 md:order-1">
            <h2 className="mb-6 font-kr-heading font-normal text-[28px] sm:text-[38px] leading-[1.2] text-deep break-keep">
              실전 감각을 완성하는 78타석 골프연습장
            </h2>
            <p className="mb-1 text-[14.5px] sm:text-[15px] leading-[1.5] text-ink-soft font-light break-keep md:whitespace-nowrap">
              넓고 쾌적한 1·2층 78타석 규모의 연습시설에서 스윙의 완성도를 높여보세요.
            </p>
            <p className="mb-1 text-[14.5px] sm:text-[15px] leading-[1.5] text-ink-soft font-light break-keep md:whitespace-nowrap">
              필드 라운드 전 충분한 연습은 물론, 꾸준한 실력 향상을 위한 최적의 환경을 제공합니다.
            </p>
            <p className="text-[14.5px] sm:text-[15px] leading-[1.5] text-ink-soft font-light break-keep md:whitespace-nowrap">
              라운드와 연습을 한 곳에서 편리하게 즐기며 더욱 만족스러운 골프를 경험해보세요.
            </p>
          </RevealBelowTabs>
          <div className="relative order-1 md:order-2 min-h-[280px] md:min-h-[420px]">
            <Image
              src="/images/drivingrange.jpg"
              alt="골프연습장 전경"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <FacilityItemGrid items={RANGE_ITEMS} showText={false} />
      </section>
    </FacilityShell>
  );
}
