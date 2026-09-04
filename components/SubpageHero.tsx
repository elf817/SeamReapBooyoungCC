import { ReactNode } from "react";

interface SubpageHeroProps {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  descriptionMaxWidth?: number;
  descriptionNoWrap?: boolean;
}

export default function SubpageHero({
  kicker,
  title,
  description,
  descriptionMaxWidth = 560,
  descriptionNoWrap = false,
}: SubpageHeroProps) {
  return (
    <section
      className="relative px-5 sm:px-12 pt-16 sm:pt-24 pb-14 sm:pb-[84px] bg-deep text-bg"
      style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 11px)" }}
    >
      <p className="mb-5 text-[10.5px] tracking-[0.3em] sm:tracking-[0.44em] text-gold">{kicker}</p>
      <h1 className="mb-5 font-kr-heading font-normal text-[38px] sm:text-[60px] leading-[1.1]">{title}</h1>
      {description && (
        <p
          className={`text-[14px] sm:text-[15px] leading-[1.95] font-light text-bg/75 ${descriptionNoWrap ? "whitespace-nowrap" : ""}`}
          style={{ maxWidth: descriptionNoWrap ? "none" : descriptionMaxWidth }}
        >
          {description}
        </p>
      )}
    </section>
  );
}
