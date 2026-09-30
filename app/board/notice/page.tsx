"use client";

import BoardShell from "@/components/BoardShell";
import NoticeListClient from "@/components/NoticeListClient";
import { useLanguage } from "@/components/LanguageContext";

export default function NoticePage() {
  const { lang } = useLanguage();
  return (
    <BoardShell summary={lang === "en" ? "Notice" : "공지사항"}>
      <section className="px-5 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <NoticeListClient />
      </section>
    </BoardShell>
  );
}
