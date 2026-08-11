"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface RouteTabsProps {
  tabs: { href: string; label: string }[];
  summary?: ReactNode;
}

export default function RouteTabs({ tabs, summary }: RouteTabsProps) {
  const pathname = usePathname();

  return (
    <div className="sticky top-[65px] sm:top-[89px] z-40 bg-bg border-b border-deep/[0.12]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-12 py-4">
        <div className="flex gap-2.5 flex-wrap">
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="px-5 py-2.5 text-[13.5px] border border-deep/20 whitespace-nowrap transition-colors"
                style={{
                  background: active ? "#1e3a2b" : "transparent",
                  color: active ? "#f6f4ee" : "#3d4438",
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
        {summary && <div className="text-[13px] text-muted-2 whitespace-nowrap">{summary}</div>}
      </div>
    </div>
  );
}
