import { ReactNode } from "react";
import SubpageHero from "@/components/SubpageHero";
import RouteTabs from "@/components/RouteTabs";

const TABS = [
  { href: "/facilities/golftel", label: "골프텔" },
  { href: "/facilities/clubhouse", label: "클럽하우스" },
  { href: "/facilities/range", label: "골프연습장" },
];

export default function FacilityShell({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <div>
      <SubpageHero
        kicker="FACILITIES"
        title="시설안내"
        description={
          <>
            첫 걸음부터 마지막 라운드까지 한곳에서 여유롭게!
            <br />
            골프텔과 클럽하우스, 연습장이 한 곳에 조화롭게 자리해 라운드와 휴식, 연습까지 편리하게 즐길 수 있습니다.
          </>
        }
        descriptionMaxWidth={900}
      />
      <RouteTabs tabs={TABS} summary={summary} />
      {children}
    </div>
  );
}
