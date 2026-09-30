"use client";

import { ReactNode } from "react";
import SubpageHero from "@/components/SubpageHero";
import RouteTabs from "@/components/RouteTabs";
import { useLanguage } from "@/components/LanguageContext";

const TABS = {
  ko: [
    { href: "/board/notice", label: "공지사항" },
    { href: "/board/faq", label: "FAQ" },
    { href: "/board/inquiry", label: "문의게시판" },
  ],
  en: [
    { href: "/board/notice", label: "Notice" },
    { href: "/board/faq", label: "FAQ" },
    { href: "/board/inquiry", label: "Inquiry" },
  ],
};

export default function BoardShell({ summary, children }: { summary: string; children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <div>
      <SubpageHero
        kicker="BOARD"
        title={lang === "en" ? "Board" : "게시판"}
        backgroundImage="/images/gallery/gellery06.jpg"
        description={
          lang === "en"
            ? "Check Notices for course operations and pricing changes, or the FAQ for common questions."
            : "코스 운영과 요금 변경은 공지사항에서, 자주 묻는 내용은 FAQ에서 먼저 확인하실 수 있습니다."
        }
        descriptionMaxWidth={640}
        descriptionNoWrap={lang === "ko"}
      />
      <RouteTabs tabs={TABS[lang]} summary={summary} />
      {children}
    </div>
  );
}
