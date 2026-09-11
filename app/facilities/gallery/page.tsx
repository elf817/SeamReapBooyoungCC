import FacilityShell from "@/components/FacilityShell";
import GalleryGrid from "@/components/GalleryGrid";
import RevealBelowTabs from "@/components/RevealBelowTabs";
import { GALLERY_IMAGES } from "@/lib/data";

export default function GalleryPage() {
  return (
    <FacilityShell summary={`사진 ${GALLERY_IMAGES.length}장`}>
      <section className="px-[60px] sm:px-36 pt-10 sm:pt-[76px] pb-16 sm:pb-[104px]">
        <RevealBelowTabs className="mb-10 sm:mb-14 flex flex-col items-center text-center">
          <p className="mb-4 text-[11px] tracking-[0.34em] text-bronze">GALLERY</p>
          <h2 className="mb-5 font-kr-heading font-normal text-[28px] sm:text-[36px] text-deep">갤러리</h2>
          <div className="mb-6 w-10 h-[2px] bg-gold" />
          <p className="text-[16px] sm:text-[17px] text-deep font-medium">
            SIEM REAP BOOYOUNG C.C.의 아름다운 순간들을 만나보세요.
          </p>
        </RevealBelowTabs>
        <div className="max-w-[1320px] mx-auto">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>
    </FacilityShell>
  );
}
