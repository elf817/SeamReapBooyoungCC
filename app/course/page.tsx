"use client";

import { useState } from "react";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import CourseTabs from "@/components/CourseTabs";
import Placeholder from "@/components/Placeholder";
import { HOLES } from "@/lib/data";

export default function CoursePage() {
  const [nine, setNine] = useState<"out" | "in">("out");
  const holes = nine === "out" ? HOLES.slice(0, 9) : HOLES.slice(9);
  const par = holes.reduce((s, h) => s + h.par, 0);
  const yds = holes.reduce((s, h) => s + h.champion, 0);
  const summary = `PAR ${par} · ${yds.toLocaleString()} yards (Champion)`;

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

      <section className="px-5 sm:px-12 pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {holes.map((h) => (
            <article key={h.no} className="border border-deep/[0.14] bg-bg flex flex-col">
              <div className="relative">
                {h.image ? (
                  <div className="relative h-[220px] bg-placeholder-2">
                    <Image src={h.image} alt={`${h.no}번 홀 안내도`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain" />
                  </div>
                ) : (
                  <Placeholder label={`홀 레이아웃 ${h.no}`} className="h-[170px] items-center justify-center" />
                )}
                <span className="absolute top-0 left-0 px-4 py-2 bg-deep text-bg font-serif text-[20px]">{h.no}</span>
              </div>
              <div className="px-6 pt-6 pb-7 flex flex-col flex-1">
                <div className="flex items-baseline justify-between mb-3.5">
                  <h3 className="font-serif font-medium text-[24px] text-deep">PAR {h.par}</h3>
                  <span className="text-[12.5px] text-bronze tracking-[0.08em]">HDCP {h.hdcp}</span>
                </div>
                {h.tees ? (
                  <div className="grid grid-cols-5 gap-1.5 py-3.5 border-t border-b border-deep/[0.12] text-center">
                    {h.tees.map((t) => (
                      <div key={t.label} className="flex flex-col items-center gap-1.5">
                        <span
                          title={t.label}
                          aria-label={t.label}
                          className="w-3.5 h-3.5 rounded-full border border-deep/20"
                          style={{ background: t.color }}
                        />
                        <div className="text-[11px] text-muted">{t.yards}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 py-3.5 border-t border-b border-deep/[0.12] text-[12px] text-muted">
                    <div>
                      <div className="text-[10px] tracking-[0.14em] text-muted-3 mb-1.5">CHAMPION</div>
                      {h.champion}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.14em] text-muted-3 mb-1.5">REGULAR</div>
                      {h.regular}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.14em] text-muted-3 mb-1.5">LADIES</div>
                      {h.ladies}
                    </div>
                  </div>
                )}
                <p className="mt-4 text-[13.5px] leading-[1.9] text-ink-soft font-light">{h.tip}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
