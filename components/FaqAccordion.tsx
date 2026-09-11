"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import RevealBelowTabs from "@/components/RevealBelowTabs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {FAQS.map((faq, i) => {
        const open = openIndex === i;
        const item = (
          <div className="border-b border-deep/[0.15]">
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-start gap-4 py-6 text-left"
            >
              <span className="font-serif text-[20px] text-bronze shrink-0">Q</span>
              <span className="flex-1 text-[14.5px] sm:text-[15px] font-bold text-ink pt-[3px]">{faq.q}</span>
              <span className="font-serif text-[20px] text-muted-2 shrink-0">{open ? "−" : "+"}</span>
            </button>
            {open && (
              <div className="flex items-start gap-4 pb-6 -mt-2">
                <span className="font-serif text-[20px] text-deep shrink-0">A</span>
                <p className="flex-1 text-[14px] leading-[1.9] text-ink-soft font-light">{faq.a}</p>
              </div>
            )}
          </div>
        );
        return i === 0 ? <RevealBelowTabs key={faq.q}>{item}</RevealBelowTabs> : <div key={faq.q}>{item}</div>;
      })}
    </div>
  );
}
