"use client";

import BoardShell from "@/components/BoardShell";
import InquiryListClient from "@/components/InquiryListClient";
import { useLanguage } from "@/components/LanguageContext";

export default function InquiryPage() {
  const { lang } = useLanguage();
  return (
    <BoardShell summary={lang === "en" ? "Inquiry" : "문의게시판"}>
      <section className="px-5 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <InquiryListClient />
      </section>
    </BoardShell>
  );
}
