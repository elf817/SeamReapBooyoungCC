"use client";

import BoardShell from "@/components/BoardShell";
import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/components/LanguageContext";
import { FAQS } from "@/lib/data";

export default function FaqPage() {
  const { lang } = useLanguage();
  return (
    <BoardShell summary={lang === "en" ? `${FAQS.length} Frequently Asked Questions` : `자주 묻는 질문 ${FAQS.length}건`}>
      <section className="px-5 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <div className="border-t border-deep/20">
          <FaqAccordion />
        </div>
      </section>
    </BoardShell>
  );
}
