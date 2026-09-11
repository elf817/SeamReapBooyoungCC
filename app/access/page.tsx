import SubpageHero from "@/components/SubpageHero";
import GoogleMap from "@/components/GoogleMap";
import { CONTACT_ROWS } from "@/lib/data";

export default function AccessPage() {
  return (
    <div>
      <SubpageHero kicker="ACCESS & CONTACT" title="오시는 길" />
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
        <GoogleMap className="min-h-[320px] md:min-h-[560px]" />
        <div className="px-5 sm:px-12 py-12 sm:py-20 flex flex-col gap-8">
          {CONTACT_ROWS.map((row) => (
            <div key={row.label} className="pb-7 border-b border-deep/[0.14]">
              <div className="mb-3 text-[13px] tracking-[0.22em] text-bronze">{row.label}</div>
              <div className="text-[16px] sm:text-[17px] leading-[1.9] text-ink-soft2 font-light">{row.value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
