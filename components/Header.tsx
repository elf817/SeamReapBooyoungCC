"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center gap-5 px-5 sm:px-7 py-0 bg-bg backdrop-blur-md border-b border-deep/[0.12]">
      <Link href="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
        <span className="bg-bg flex items-center">
          <Image
            src="/images/logo.png"
            alt="시엠립 부영 컨트리클럽"
            width={230}
            height={84}
            priority
            className="h-[58px] sm:h-[79px] w-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </span>
      </Link>

      <div className="flex items-center gap-8 ml-auto mr-16 sm:mr-24">
        <nav className="hidden md:flex items-center gap-7 text-[16px] text-ink-soft2">
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname);
            return (
              <Link key={item.href} href={item.href} className="flex flex-col gap-[7px] whitespace-nowrap text-ink-soft2 hover:text-bronze">
                {item.label}
                <span className="h-px" style={{ background: active ? "#a8823f" : "transparent" }} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center shrink-0 border border-deep/25 text-[11px] tracking-[0.1em] overflow-hidden">
          <span className="px-3 py-[7px] bg-deep text-bg">KR</span>
          <span className="px-3 py-[7px] text-muted-2">EN</span>
        </div>

        <button
          aria-label="전체 메뉴 열기"
          aria-expanded={open}
          className="flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-deep transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-deep transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-deep transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg border-b border-deep/[0.12] flex flex-col">
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-[14px] border-b border-deep/[0.08] last:border-b-0"
                style={{ color: active ? "#1e3a2b" : "#3d4438", background: active ? "#f2efe5" : "transparent" }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
