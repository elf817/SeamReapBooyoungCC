"use client";

import { ReactNode } from "react";
import SubpageHero from "@/components/SubpageHero";
import RouteTabs from "@/components/RouteTabs";
import { useLanguage } from "@/components/LanguageContext";

const TABS = {
  ko: [
    { href: "/facilities/golftel", label: "골프텔" },
    { href: "/facilities/clubhouse", label: "클럽하우스" },
    { href: "/facilities/range", label: "골프연습장" },
    { href: "/facilities/gallery", label: "갤러리" },
  ],
  en: [
    { href: "/facilities/golftel", label: "Golftel" },
    { href: "/facilities/clubhouse", label: "Clubhouse" },
    { href: "/facilities/range", label: "Driving Range" },
    { href: "/facilities/gallery", label: "Gallery" },
  ],
};

export default function FacilityShell({ summary, children }: { summary: string; children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <div>
      <SubpageHero
        kicker="FACILITIES"
        title={lang === "en" ? "Facilities" : "시설안내"}
        backgroundImage="/images/gallery/gellery02.jpg"
        description={
          lang === "en" ? (
            <>
              From your first step to your last round, all in one place.
              <br />
              The golftel, clubhouse and driving range sit together in harmony, so you can enjoy rounds, rest and
              practice with ease.
            </>
          ) : (
            <>
              첫 걸음부터 마지막 라운드까지 한곳에서 여유롭게!
              <br />
              골프텔과 클럽하우스, 연습장이 한 곳에 조화롭게 자리해 라운드와 휴식, 연습까지 편리하게 즐길 수 있습니다.
            </>
          )
        }
        descriptionMaxWidth={900}
      />
      <RouteTabs tabs={TABS[lang]} summary={summary} />
      {children}
    </div>
  );
}
