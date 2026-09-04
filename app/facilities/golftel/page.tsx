import Image from "next/image";
import FacilityShell from "@/components/FacilityShell";
import FacilityItemGrid from "@/components/FacilityItemGrid";
import Placeholder from "@/components/Placeholder";
import { GOLFTEL_ITEMS, ROOMS } from "@/lib/data";

export default function GolftelPage() {
  return (
    <FacilityShell summary="94실 · 2개 타입">
      <section className="px-5 sm:px-12 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-9 sm:mb-[46px]">
          <div>
            <p className="mb-4 text-[10.5px] tracking-[0.26em] text-bronze">94 ROOMS · STAY & PLAY</p>
            <h2 className="font-kr-heading font-normal text-[30px] sm:text-[42px] text-deep max-w-[560px]">
              라운드의 여유가 머무는 곳
            </h2>
          </div>
          <p className="max-w-[600px] text-[15px] leading-[1.9] text-muted-2 font-light">
            골프코스와 가까운 편안한 객실에서 라운드의 여운을 이어가십시오. 94실 규모의 골프텔과 수영장, 레스토랑 등 다양한 편의시설을 갖추어 편안한 골프 여행을 완성합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-deep/15">
          {ROOMS.map((r) => (
            <div
              key={r.name}
              className="border-b md:border-b-0 md:border-r border-deep/15 last:border-r-0 flex flex-col"
              style={{ background: r.dark ? "#1e3a2b" : "#efece2", color: r.dark ? "#f6f4ee" : "#22261f" }}
            >
              {r.image ? (
                <div className="relative h-[calc(230px+4cm)]">
                  <Image src={r.image} alt={r.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <Placeholder
                  label={r.photo}
                  tone={r.dark ? "dark" : "light"}
                  className="h-[calc(230px+4cm)] items-center justify-center"
                />
              )}
              <div className="px-8 pt-[38px] pb-10 flex flex-col flex-1">
                <div className="mt-4 mb-[22px] flex items-baseline gap-3 whitespace-nowrap">
                  <h3 className="font-serif font-bold text-[30px]">{r.name}</h3>
                  <p className="text-[13px]" style={{ color: r.dark ? "rgba(246,244,238,0.6)" : "#8b8878" }}>
                    {r.spec}
                  </p>
                </div>
                <p
                  className="mb-6 pb-6 text-[14px] leading-[1.9] font-light border-b"
                  style={{ borderColor: r.dark ? "rgba(246,244,238,0.2)" : "rgba(30,58,43,0.15)" }}
                >
                  {r.desc}
                </p>
                <ul className="flex flex-col gap-3 text-[13.5px] font-light leading-[1.6]">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span style={{ color: r.dark ? "#c9b78c" : "#a8823f" }}>—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-16 sm:mt-20 mb-8 sm:mb-10 font-kr-heading font-normal text-[26px] sm:text-[32px] text-deep">
          골프텔 부대시설
        </h3>
        <FacilityItemGrid items={GOLFTEL_ITEMS} showHours={false} />
      </section>
    </FacilityShell>
  );
}
