import Image from "next/image";
import Placeholder from "@/components/Placeholder";

interface Item {
  name: string;
  photo: string;
  image?: string;
  hours: string;
  desc: string;
}

export default function FacilityItemGrid({
  items,
  showText = true,
  showHours = true,
}: {
  items: Item[];
  showText?: boolean;
  showHours?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {items.map((it) => (
        <div key={it.name}>
          {it.image ? (
            <div className="relative h-[180px] sm:h-[200px]">
              <Image src={it.image} alt={it.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
          ) : (
            <Placeholder label={it.photo} className="h-[180px] sm:h-[200px] items-center justify-center" />
          )}
          {showText && (
            <>
              <h4 className="mt-5 mb-2 font-serif font-medium text-[20px] sm:text-[22px] text-deep">{it.name}</h4>
              <p className="mb-3 text-[13.5px] leading-[1.85] text-muted font-light">{it.desc}</p>
              {showHours && <div className="text-[12px] text-bronze tracking-[0.04em]">{it.hours}</div>}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
