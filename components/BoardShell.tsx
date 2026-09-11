import { ReactNode } from "react";
import SubpageHero from "@/components/SubpageHero";
import RouteTabs from "@/components/RouteTabs";

const TABS = [
  { href: "/board/notice", label: "공지사항" },
  { href: "/board/faq", label: "FAQ" },
  { href: "/board/inquiry", label: "문의게시판" },
];

export default function BoardShell({ summary, children }: { summary: string; children: ReactNode }) {
  return (
    <div>
      <SubpageHero
        kicker="BOARD"
        title="게시판"
        description="코스 운영과 요금 변경은 공지사항에서, 자주 묻는 내용은 FAQ에서 먼저 확인하실 수 있습니다."
        descriptionNoWrap
      />
      <RouteTabs tabs={TABS} summary={summary} />
      {children}
    </div>
  );
}
