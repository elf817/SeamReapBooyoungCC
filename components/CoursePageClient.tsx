"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SubpageHero from "@/components/SubpageHero";
import Placeholder from "@/components/Placeholder";
import RevealBelowTabs from "@/components/RevealBelowTabs";
import { useLanguage } from "@/components/LanguageContext";
import { HOLES } from "@/lib/data";

const NINES: { id: "out" | "in"; label: string; labelEn: string }[] = [
  { id: "out", label: "우정코스", labelEn: "Friendship Course" },
  { id: "in", label: "사랑코스", labelEn: "Love Course" },
];

export default function CoursePageClient() {
  const searchParams = useSearchParams();
  const { lang } = useLanguage();
  const [nine, setNine] = useState<"out" | "in">(searchParams.get("nine") === "in" ? "in" : "out");
  const holes = nine === "out" ? HOLES.slice(0, 9) : HOLES.slice(9);

  const [selectedHole, setSelectedHole] = useState(holes[0].no);

  useEffect(() => {
    setNine(searchParams.get("nine") === "in" ? "in" : "out");
  }, [searchParams]);

  useEffect(() => {
    setSelectedHole(holes[0].no);
  }, [nine]);

  const selectedDetail = holes.find((h) => h.no === selectedHole) ?? holes[0];
  const nineLabel = (lang === "en"
    ? NINES.find((n) => n.id === nine)?.labelEn
    : NINES.find((n) => n.id === nine)?.label) ?? "";

  return (
    <div>
      <SubpageHero
        kicker="THE COURSE · 18 HOLES · PAR 72 · 7,396 YARDS"
        title={lang === "en" ? "An 18-Hole Championship Course Amid Nature" : "자연과 함께하는 18홀 챔피언십 코스"}
        backgroundImage="/images/gallery/gellery01.jpg"
        descriptionMaxWidth={720}
        description={
          lang === "en" ? (
            <>
              A 7,396-yard, 18-hole championship golf course set amid the beautiful nature of Cambodia. Lakes,
              waterways,
              <br />
              and tropical forest come together for a relaxed, extraordinary round on this nature-friendly course.
            </>
          ) : (
            <>
              캄보디아의 아름다운 자연 속에서 만나는 7,396야드 규모의 18홀 챔피언십 골프코스. 호수와 수로,
              <br />
              열대수림이 어우러진 자연친화적인 코스에서 여유롭고 특별한 라운드를 경험해 보십시오.
            </>
          )
        }
      />
      <section className="px-[60px] sm:px-36 pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <RevealBelowTabs className="mb-10 sm:mb-12 flex flex-col items-center text-center">
          <p className="mb-4 text-[11px] tracking-[0.34em]" style={{ color: "#d8642a" }}>COURSE GUIDE</p>
          <h2 className="mb-5 font-kr-heading font-bold text-[28px] sm:text-[36px]" style={{ color: "#0b4b8c" }}>
            {lang === "en" ? "Course Guide" : "코스소개"}
          </h2>
          <div className="mb-6 w-10 h-[2px]" style={{ background: "#d8642a" }} />
          <p className="text-[16px] sm:text-[17px] font-medium" style={{ color: "#666666" }}>
            {lang === "en"
              ? "Discover a distinctive course shaped by natural beauty and refined design."
              : "자연의 아름다움과 정교한 설계가 어우러진 차별화된 코스를 소개합니다."}
          </p>
        </RevealBelowTabs>

        <div className="grid grid-cols-2 max-w-[900px] mx-auto mb-10 sm:mb-12">
          {NINES.map((n) => {
            const active = nine === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setNine(n.id)}
                className="py-4 text-[15px] sm:text-[16px] font-bold tracking-[0.04em] transition-colors"
                style={{
                  background: active ? "#2d7a4a" : "#8bb59b",
                  color: "#ffffff",
                }}
              >
                {lang === "en" ? n.labelEn : n.label}
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
                className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full border flex items-center justify-center text-[12px] sm:text-[13px] font-bold transition-colors"
                style={{
                  background: active ? "#2d7a4a" : "#ffffff",
                  color: active ? "#ffffff" : "#666666",
                  borderColor: active ? "#2d7a4a" : "#cccccc",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="max-w-[900px] -mx-11 sm:mx-auto border border-deep/15 bg-white">
          <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4">
            <div className="flex items-baseline gap-3 mb-5">
              <h3 className="font-kr-heading font-bold text-[32px] sm:text-[40px]" style={{ color: "#2d7a4a" }}>
                {parseInt(selectedDetail.no, 10)} Hole
              </h3>
              <span className="text-[14px] font-medium" style={{ color: "#0b4b8c" }}>{nineLabel}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 p-4" style={{ background: "#f6f8fa" }}>
              {selectedDetail.tees ? (
                selectedDetail.tees.map((t) => (
                  <span key={t.label} className="flex items-center gap-2 text-[16px] sm:text-[17px] font-medium text-ink-soft">
                    <span
                      title={lang === "en" ? t.labelEn : t.label}
                      aria-label={lang === "en" ? t.labelEn : t.label}
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
                <span className="px-3 py-1.5 text-[13px] font-medium text-bg" style={{ background: "#0b4b8c" }}>
                  HDCP {selectedDetail.hdcp}
                </span>
              )}
              <span className="px-3 py-1.5 text-[13px] font-medium text-bg" style={{ background: "#d8642a" }}>
                PAR {selectedDetail.par}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-deep shrink-0" />
              <span className="font-bold text-[15px] text-deep">{lang === "en" ? "Strategy" : "공략법"}</span>
            </div>
            <p className="mb-3 text-[14px] leading-[1.9] text-ink-soft font-light">
              {lang === "en" ? selectedDetail.tipEn : selectedDetail.tip}
            </p>
          </div>

          <div className="px-4 sm:px-[2cm] pb-[1cm]">
            {selectedDetail.image ? (
              <div className="relative w-full overflow-hidden pt-[75%] sm:pt-[calc(75%_-_1cm)]">
                <Image
                  src={selectedDetail.image}
                  alt={lang === "en" ? `Hole ${selectedDetail.no} view` : `${selectedDetail.no}번 홀 전경`}
                  fill
                  sizes="(min-width: 900px) 750px, 100vw"
                  className="object-cover object-bottom"
                />
              </div>
            ) : (
              <Placeholder
                label={lang === "en" ? `Hole ${selectedDetail.no} Layout` : `홀 레이아웃 ${selectedDetail.no}`}
                className="aspect-[4/3] items-center justify-center"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
