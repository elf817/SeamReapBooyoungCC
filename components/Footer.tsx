"use client";

import { FAMILY_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-deep-deep text-bg/70">
      <div className="relative flex flex-col items-center gap-6 px-5 sm:px-12 py-[21px] sm:py-[29px]">
        <div className="text-center">
          <div className="text-[13px] leading-[1.9] font-light">
            SIEM REAP BOOYOUNG C.C.&nbsp; Tropaingrun Road, Krong Siem Reap, Kingdom of Cambodia
          </div>
          <div className="text-[13px] leading-[1.9] font-light">
            CONTACT&nbsp; +855 63 967 101 / 114, FAX +855 63 967 133, M +855 12 365 712
          </div>
        </div>

        <div className="sm:absolute sm:right-12 sm:top-1/2 sm:-translate-y-1/2">
          <select
            className="w-[220px] px-3 py-2 bg-transparent border border-bg/25 text-bg text-[13px] cursor-pointer"
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) window.open(e.target.value, "_blank", "noopener,noreferrer");
              e.target.value = "";
            }}
          >
            <option value="" disabled className="text-ink">
              Family Link
            </option>
            {FAMILY_LINKS.map((f) => (
              <option key={f.url} value={f.url} className="text-ink">
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-[16px] border-t border-bg/[0.14] text-[11.5px] text-bg/40 text-center">
        <span>© 2026 Siem Reap Booyoung Country Club. All rights reserved.</span>
      </div>
    </footer>
  );
}
