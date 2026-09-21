"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SubpageHero from "@/components/SubpageHero";
import CourseTabs from "@/components/CourseTabs";
import Placeholder from "@/components/Placeholder";
import RevealBelowTabs from "@/components/RevealBelowTabs";
import { HOLES } from "@/lib/data";

const NINES: { id: "out" | "in"; label: string }[] = [
  { id: "out", label: "우정코스" },
  { id: "in", label: "사랑코스" },
];

export default function CoursePageClient() {
  const searchParams = useSearchParams();
  const initialNine = searchParams.get("nine") === "in" ? "in" : "out";
  const [nine, setNine] = useState<"out" | "in">(initialNine);
  const holes = nine === "out" ? HOLES.slice(0, 9) : HOLES.slice(9);
  const par = holes.reduce((s, h) => s + h.par, 0);
  const yds = holes.reduce((s, h) => s + h.champion, 0);
  const summary = `PAR ${par} · ${yds.toLocaleString()} yards (Champion)`;

  const [selectedHole, setSelectedHole] = useState(holes[0].no);

  useEffect(() => {
    setSelectedHole(holes[0].no);
  }, [nine]);

  const selectedDetail = holes.find((h) => h.no === selectedHole) ?? holes[0];
  const nineLabel = NINES.find((n) => n.id === nine)?.label ?? "";

  return (
    <div>
      <SubpageHero
        kicker="THE COURSE · 18 HOLES · PAR 72 · 7,396 YARDS"
        title="자연과 함께하는 18홀 챔피언십 코스"
        descriptionMaxWidth={720}
        description={
          <>
            캄보디아의 아름다운 자연 속에서 만나는 7,396야드 규모의 18홀 챔피언십 골프코스. 호수와 수로,
            <br />
            열대수림이 어우러진 자연친화적인 코스에서 여유롭고 특별한 라운드를 경험해 보십시오.
          </>
        }
      />
      <CourseTabs nine={nine} onChange={setNine} summary={summary} />

      <section className="px-[60px] sm:px-36 pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <RevealBelowTabs className="mb-10 sm:mb-12 flex flex-col items-center text-center">
          <p className="mb-4 text-[11px] tracking-[0.34em] text-bronze">COURSE GUIDE</p>
          <h2 className="mb-5 font-kr-heading font-bold text-[28px] sm:text-[36px] text-[#1b2a4a]">코스소개</h2>
          <div className="mb-6 w-10 h-[2px] bg-gold" />
          <p className="text-[16px] sm:text-[17px] text-deep font-medium">
            자연의 아름다움과 정교한 설계가 어우러진 차별화된 코스를 소개합니다.
          </p>
        </RevealBelowTabs>

        <div className="grid grid-cols-2 max-w-[720px] mx-auto mb-10 sm:mb-12">
          {NINES.map((n) => {
            const active = nine === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setNine(n.id)}
                className="py-4 text-[15px] sm:text-[16px] font-medium tracking-[0.04em] transition-colors"
                style={{
                  background: active ? "#1e3a2b" : "#efece2",
                  color: active ? "#f6f4ee" : "#4a5145",
                }}
              >
                {n.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-12">
          {holes.map((h) => {
            const label = `${parseInt(h.no, 10)}H`;
            const active = selectedHole === h.no;
            return (
              <button
                key={h.no}
                onClick={() => setSelectedHole(h.no)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center text-[13px] sm:text-[14px] font-medium transition-colors"
                style={{
                  background: active ? "#1e3a2b" : "transparent",
                  color: active ? "#f6f4ee" : "#3d4438",
                  borderColor: active ? "#1e3a2b" : "rgba(30,58,43,0.25)",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="max-w-[900px] mx-auto border border-deep/15 bg-white">
          <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
            <div className="flex items-baseline gap-3 mb-5">
              <h3 className="font-kr-heading font-bold text-[32px] sm:text-[40px] text-deep">
                {parseInt(selectedDetail.no, 10)} Hole
              </h3>
              <span className="text-[13px] text-muted-2">{nineLabel}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 p-4" style={{ background: "#e9efe6" }}>
              {selectedDetail.tees ? (
                selectedDetail.tees.map((t) => (
                  <span key={t.label} className="flex items-center gap-2 text-[16px] sm:text-[17px] font-medium text-ink-soft">
                    <span
                      title={t.label}
                      aria-label={t.label}
                      className="w-4 h-4 rounded-full border border-deep/20 shrink-0"
                      style={{ background: t.color }}
                    />
                    {t.yards}
                  </span>
                ))
              ) : (
                <>
                  <span className="text-[16px] sm:text-[17px] font-medium text-ink-soft">CHAMPION {selectedDetail.champion}</span>
                  <span className="text-[16px] sm:text-[17px] font-medium text-ink-soft">REGULAR {selectedDetail.regular}</span>
                  <span className="text-[16px] sm:text-[17px] font-medium text-ink-soft">LADIES {selectedDetail.ladies}</span>
                </>
              )}
              {selectedDetail.hdcp != null && (
                <span className="px-3 py-1.5 text-[13px] font-medium text-bg" style={{ background: "#1b2a4a" }}>
                  HDCP {selectedDetail.hdcp}
                </span>
              )}
              <span className="px-3 py-1.5 text-[13px] font-medium text-bg" style={{ background: "#a8823f" }}>
                PAR {selectedDetail.par}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-deep shrink-0" />
              <span className="font-bold text-[15px] text-deep">공략법</span>
            </div>
            <p className="mb-3 text-[14px] leading-[1.9] text-ink-soft font-light">{selectedDetail.tip}</p>
          </div>

          <div className="px-[1cm] pb-[1cm]">
            {selectedDetail.image ? (
              <div className="relative aspect-[4/3]">
                <Image
                  src={selectedDetail.image}
                  alt={`${selectedDetail.no}번 홀 전경`}
                  fill
                  sizes="(min-width: 900px) 820px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Placeholder label={`홀 레이아웃 ${selectedDetail.no}`} className="aspect-[4/3] items-center justify-center" />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
