"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

// The sticky header + sticky RouteTabs/CourseTabs bar together cover the top
// of the viewport while scrolling. Content flows underneath them like any
// sticky nav, which is normal — but a large heading that comes to rest
// straddling that boundary gets visually sliced in half, and Korean glyphs
// cut through the middle read as garbled noise rather than legible text.
// This wraps a heading (or any block that sits close to the tabs) and hides
// it only while it's actually straddling the tabs' bottom edge, so it either
// stays fully hidden underneath or snaps into full view once clear — never
// a half-cut sliver.
export default function RevealBelowTabs({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [straddling, setStraddling] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = ref.current;
      const bar = document.querySelector<HTMLElement>("[data-route-tabs]");
      if (!el || !bar) {
        setStraddling(false);
        return;
      }
      const elRect = el.getBoundingClientRect();
      const barBottom = bar.getBoundingClientRect().bottom;
      setStraddling(elRect.top < barBottom && elRect.bottom > barBottom);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ visibility: straddling ? "hidden" : "visible" }}>
      {children}
    </div>
  );
}
