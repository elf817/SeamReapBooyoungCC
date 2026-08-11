import FacilityShell from "@/components/FacilityShell";
import FacilityItemGrid from "@/components/FacilityItemGrid";
import Placeholder from "@/components/Placeholder";
import { RANGE_ITEMS } from "@/lib/data";

export default function RangePage() {
  return (
    <FacilityShell summary="78타석 · 1층·2층 구조">
      <section className="px-5 sm:px-12 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center mb-14 sm:mb-16">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 font-serif font-normal text-[30px] sm:text-[42px] leading-[1.2] text-deep">
              라운드 전 30분,
              <br />
              몸을 깨우는 연습장
            </h2>
            <p className="mb-4 text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
              1층과 2층으로 나뉜 78타석 규모의 최첨단 자동화 드라이빙 레인지와 별도의 쇼트게임 구역, 두 개의 퍼팅 그린을 갖췄습니다. 레인지 그린은 코스와 동일한 벤트그라스로 관리해 실제 라운드 감각을 그대로 옮겼습니다.
            </p>
            <p className="text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
              골프텔 투숙객은 연습 볼 1바구니가 매일 무료로 제공되며, 소속 프로의 1:1 레슨은 프론트에서 당일 신청할 수 있습니다.
            </p>
          </div>
          <Placeholder
            label="드라이빙 레인지 (4:3)"
            className="order-1 md:order-2 min-h-[280px] md:min-h-[420px] items-center justify-center"
          />
        </div>
        <FacilityItemGrid items={RANGE_ITEMS} />
      </section>
    </FacilityShell>
  );
}
