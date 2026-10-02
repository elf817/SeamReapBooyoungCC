"use client";

import Image from "next/image";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
import HeroCarousel from "@/components/HeroCarousel";
import ClubGallery from "@/components/ClubGallery";
import HomeGalleryCarousel from "@/components/HomeGalleryCarousel";
import { useLanguage } from "@/components/LanguageContext";
import { CONTACT_ROWS, FACILITY_TEASERS, GALLERY_IMAGES } from "@/lib/data";

const STATS = [
  { value: "18", caption: "HOLES · PAR 72" },
  { value: "7,396", caption: "YARDS · CHAMPION TEE" },
  { value: "94", caption: "GOLF RESORT ROOMS" },
  { value: "78", caption: "DRIVING RANGE BAYS" },
];

const TEXT = {
  ko: {
    heroDesc: (
      <>
        7,396야드 18홀 챔피언십 코스와 94실의 골프텔, 78타석의 골프연습장까지.
        <br />
        씨엠립의 아름다운 자연 속에서 일상의 여유를 내려놓고 특별한 라운드를 경험하세요.
      </>
    ),
    heroCourseBtn: "코스 안내",
    heroFacilityBtn: "시설 안내",
    clubHeading: "라운드가 여행의 중심이 되는 곳",
    clubP1: (
      <>
        씨엠립 부영 컨트리클럽은 원시림의 풍경과 자연 지형을 그대로 품은 18홀 챔피언십 골프장입니다.
        <br />
        넓고 편안한 페어웨이에서 시작해 워터해저드와 다양한 지형이 어우러진 코스는 라운드마다 새로운 즐거움을 선사합니다.
      </>
    ),
    clubP2: (
      <>
        코스 가까이에 자리한 94실 규모의 골프텔에서는 이동의 번거로움 없이 여유로운 연박과 라운드를 즐길 수 있습니다.
        <br />
        골프와 휴식, 식사, 연습장까지 한곳에서 누리며 라운드와 여행을 함께 즐기는 특별한 시간을 만나보세요.
      </>
    ),
    opened: "개장",
    designer: "코스 설계 (일본)",
    galleryHeading: "클럽의 풍경",
    galleryLink: "갤러리 바로가기 →",
    quote: (
      <>
        &ldquo;자연과 사람이 함께 빚어낸 최고의 필드,
        <br />
        진심을 담은 서비스로 여러분을 맞이합니다.&rdquo;
      </>
    ),
    facilitiesHeading: "첫 걸음부터 마지막 라운드까지 한곳에서 여유롭게!",
    facilitiesLink: "시설안내 전체 보기 →",
    accessHeading: "오시는 길",
    accessBtn: "상세 약도 보기",
  },
  en: {
    heroDesc: (
      <>
        <span className="block lg:whitespace-nowrap">
          From a 7,396-yard, 18-hole championship course to a 94-room golftel and a 78-bay driving range.
        </span>
        <span className="block lg:whitespace-nowrap">
          Set the everyday aside and experience an extraordinary round amid the natural beauty of Siem Reap.
        </span>
      </>
    ),
    heroCourseBtn: "The Course",
    heroFacilityBtn: "Facilities",
    clubHeading: "Where Every Journey Centers on the Round",
    clubP1: (
      <>
        Siem Reap Booyoung Country Club is an 18-hole championship course set within untouched rainforest scenery
        and natural terrain.
        <br />
        Wide, forgiving fairways give way to water hazards and varied landscapes, offering something new with
        every round.
      </>
    ),
    clubP2: (
      <>
        The 94-room golftel beside the course lets you enjoy relaxed multi-night stays and rounds without ever
        needing to travel.
        <br />
        Golf, rest, dining and practice all in one place — a special time where your trip and your round become
        one.
      </>
    ),
    opened: "Opened",
    designer: "Course Design (Japan)",
    galleryHeading: "Scenes from the Club",
    galleryLink: "View Gallery →",
    quote: (
      <>
        &ldquo;A premier course shaped together by nature and people,
        <br />
        welcoming you with heartfelt service.&rdquo;
      </>
    ),
    facilitiesHeading: "From your first step to your last round, all in one place.",
    facilitiesLink: "View All Facilities →",
    accessHeading: "Directions",
    accessBtn: "View Detailed Map",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = TEXT[lang];
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[560px] h-[80vh] flex items-end overflow-hidden bg-deep">
        <HeroCarousel />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(16,32,24,0.18) 0%, rgba(16,32,24,0.82) 100%)" }}
        />
        <div className="relative w-full min-w-0 pl-[58px] pr-5 sm:pl-[86px] sm:pr-12 pb-14 sm:pb-[76px] max-w-[1080px]">
          <p className="mb-4 sm:mb-[22px] text-[10.5px] tracking-[0.44em] text-gold">GOLF · STAY · PRACTICE · RELAX</p>
          <h1 className="font-serif font-medium text-[22px] sm:text-[30px] md:text-[38px] leading-[1.3] text-bg">
            Experience Golf, <span className="text-gold">Stay</span> &amp; Relax
          </h1>
          <p className="font-serif font-medium text-[13px] sm:text-[26px] md:text-[32px] lg:text-[46px] leading-[1.2] text-bg whitespace-nowrap">
            SIEM REAP BOOYOUNG COUNTRY CLUB
          </p>
          <p
            className={`mt-5 sm:mt-[26px] max-w-[660px] ${
              lang === "en" ? "lg:max-w-none" : ""
            } text-[15.5px] sm:text-[17px] leading-[1.9] sm:leading-[1.95] text-bg/78 font-light`}
          >
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 mt-8 sm:mt-[38px]">
            <Link href="/course" className="px-8 py-4 bg-gold text-deep-dark text-[14px] tracking-[0.06em] text-center">
              {t.heroCourseBtn}
            </Link>
            <Link
              href="/facilities/golftel"
              className="px-8 py-4 border border-bg/45 text-bg text-[14px] tracking-[0.06em] text-center"
            >
              {t.heroFacilityBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-deep-dark text-bg">
        {STATS.map((s, i) => (
          <div
            key={s.caption}
            className="px-6 sm:px-8 py-[14px] sm:py-[18px] text-center border-b md:border-b-0 md:border-r border-bg/[0.12] last:border-r-0 last:border-b-0"
            style={i % 2 === 1 ? { borderRight: "none" } : undefined}
          >
            <div className="font-serif text-[28px] sm:text-[34px]">{s.value}</div>
            <div className="text-[10px] sm:text-[10.5px] tracking-[0.18em] text-bg/55 mt-1.5">{s.caption}</div>
          </div>
        ))}
      </div>

      {/* THE CLUB */}
      <section className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
        <div className="px-5 sm:px-12 py-16 sm:py-[112px] sm:pr-[72px] flex flex-col justify-center order-2 md:order-1">
          <p className="mb-[22px] text-[10.5px] tracking-[0.34em] text-bronze">THE CLUB</p>
          <h2 className="mb-[30px] font-kr-heading font-normal text-[24px] sm:text-[34px] leading-[1.2] text-deep break-keep sm:whitespace-nowrap">
            {t.clubHeading}
          </h2>
          <p className="mb-5 text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">{t.clubP1}</p>
          <p className="text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">{t.clubP2}</p>
          <div className="flex flex-wrap gap-x-8 sm:gap-x-11 gap-y-6 mt-9 sm:mt-[46px] pt-7 sm:pt-8 border-t border-deep/15">
            <div>
              <div className="font-serif text-[24px] sm:text-[27px] text-deep">2009</div>
              <div className="text-[12px] text-muted-2 mt-1">{t.opened}</div>
            </div>
            <div>
              <div className="font-serif text-[24px] sm:text-[27px] text-deep">Kentaro Sato</div>
              <div className="text-[12px] text-muted-2 mt-1">{t.designer}</div>
            </div>
          </div>
        </div>
        <div className="relative order-1 md:order-2 min-h-[320px] md:min-h-[580px]">
          <ClubGallery />
        </div>
      </section>

      {/* CLUB GALLERY */}
      <section className="bg-bg-contrast px-5 sm:px-12 py-16 sm:py-[104px]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="mb-[18px] text-[10.5px] tracking-[0.34em] text-bronze">GALLERY</p>
            <h2 className="font-kr-heading font-normal text-[26px] sm:text-[38px] leading-[1.15] text-deep">{t.galleryHeading}</h2>
          </div>
          <Link href="/facilities/gallery" className="text-[13.5px] tracking-[0.06em] border-b border-deep/35 pb-1 self-start whitespace-nowrap">
            {t.galleryLink}
          </Link>
        </div>
        <HomeGalleryCarousel images={GALLERY_IMAGES} />
        <div className="mt-12 sm:mt-16 flex flex-col items-center text-center">
          <p className="text-[15px] sm:text-[16px] leading-[1.9] text-ink-soft font-light">{t.quote}</p>
          <div className="mt-6 w-10 h-[2px] bg-gold" />
        </div>
      </section>

      {/* FACILITIES teaser */}
      <section className="px-5 sm:px-12 py-16 sm:py-[104px]">
        <p className="mb-[18px] text-[10.5px] tracking-[0.34em] text-bronze">FACILITIES</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-10 mb-9 sm:mb-[46px]">
          <h2 className="font-kr-heading font-normal text-[26px] sm:text-[38px] text-deep break-keep">{t.facilitiesHeading}</h2>
          <Link href="/facilities/golftel" className="text-[13.5px] tracking-[0.06em] border-b border-deep/35 pb-1 whitespace-nowrap self-start">
            {t.facilitiesLink}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FACILITY_TEASERS.map((f) => (
            <Link
              key={f.id}
              href={`/facilities/${f.id}`}
              className="flex flex-col border border-deep/[0.14] bg-bg"
            >
              <div className="relative h-[calc(230px+1cm)]">
                <Image src={f.image} alt={lang === "en" ? f.nameEn : f.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="px-6 sm:px-[30px] pt-[30px] pb-[34px]">
                <div className="flex flex-col items-start gap-[7px]">
                  <span className="text-[10.5px] tracking-[0.16em] text-bronze whitespace-nowrap">{f.en}</span>
                  <h3 className="font-kr-heading font-medium text-[25px] sm:text-[27px] text-deep whitespace-nowrap">
                    {lang === "en" ? f.nameEn : f.name}
                  </h3>
                </div>
                <p className="mt-[15px] mb-5 text-[14px] leading-[1.95] text-ink-soft font-light">
                  {lang === "en" ? f.descEn : f.desc}
                </p>
                <div className="pt-[18px] border-t border-deep/[0.12] text-[12.5px] text-muted">
                  {lang === "en" ? f.metaEn : f.meta}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ACCESS */}
      <section
        className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] bg-deep text-bg"
        style={{ backgroundImage: "repeating-linear-gradient(135deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 11px)" }}
      >
        <GoogleMap className="min-h-[280px] md:min-h-[520px]" />
        <div className="px-5 sm:px-14 py-14 sm:py-[90px] flex flex-col justify-center">
          <p className="mb-5 text-[10.5px] tracking-[0.34em] text-gold">ACCESS</p>
          <h2 className="mb-8 font-kr-heading font-normal text-[25px] sm:text-[36px] leading-[1.2]">{t.accessHeading}</h2>
          <div className="flex flex-col gap-[26px]">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="pb-6 border-b border-bg/[0.18]">
                <div className="text-[10.5px] tracking-[0.26em] text-gold mb-[11px]">
                  {lang === "en" ? row.labelEn : row.label}
                </div>
                <div className="text-[14.5px] leading-[1.9] text-bg/82 font-light">
                  {lang === "en" ? row.valueEn : row.value}
                </div>
              </div>
            ))}
          </div>
          <Link href="/access" className="mt-9 self-start px-8 py-[15px] bg-gold text-deep-dark text-[14px] tracking-[0.06em]">
            {t.accessBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
