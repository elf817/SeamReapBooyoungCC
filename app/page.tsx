import Image from "next/image";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
import HeroCarousel from "@/components/HeroCarousel";
import ClubGallery from "@/components/ClubGallery";
import { CONTACT_ROWS, FACILITY_TEASERS, SIGNATURE_HOLES } from "@/lib/data";

const STATS = [
  { value: "18", caption: "HOLES · PAR 72" },
  { value: "7,396", caption: "YARDS · CHAMPION TEE" },
  { value: "94", caption: "GOLF RESORT ROOMS" },
  { value: "78", caption: "DRIVING RANGE BAYS" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[560px] h-[80vh] flex items-end overflow-hidden bg-deep">
        <HeroCarousel />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(16,32,24,0.18) 0%, rgba(16,32,24,0.82) 100%)" }}
        />
        <div className="relative pl-[58px] pr-5 sm:pl-[86px] sm:pr-12 pb-14 sm:pb-[76px] max-w-[1080px]">
          <p className="mb-4 sm:mb-[22px] text-[10.5px] tracking-[0.44em] text-gold">GOLF · STAY · PRACTICE · RELAX</p>
          <h1 className="font-serif font-medium text-[38px] sm:text-[52px] md:text-[66px] leading-[1.12] sm:leading-[1.1] text-bg">
            Experience
            <br />
            Golf, <span className="text-gold">Stay</span> &amp; Relax
          </h1>
          <p className="mt-5 sm:mt-[26px] max-w-[660px] text-[15.5px] sm:text-[17px] leading-[1.9] sm:leading-[1.95] text-bg/78 font-light">
            7,396야드 18홀 챔피언십 코스와 94실의 골프텔, 78타석의 골프연습장까지.
            <br />
            씨엠립의 아름다운 자연 속에서 일상의 여유를 내려놓고 특별한 라운드를 경험하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 mt-8 sm:mt-[38px]">
            <Link href="/course" className="px-8 py-4 bg-gold text-deep-dark text-[14px] tracking-[0.06em] text-center">
              18홀 코스 보기
            </Link>
            <Link
              href="/facilities/golftel"
              className="px-8 py-4 border border-bg/45 text-bg text-[14px] tracking-[0.06em] text-center"
            >
              시설 안내
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
            라운드가 여행의 중심이 되는 곳
          </h2>
          <p className="mb-5 text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
            씨엠립 부영 컨트리클럽은 원시림의 풍경과 자연 지형을 그대로 품은 18홀 챔피언십 골프장입니다.
            <br />
            넓고 편안한 페어웨이에서 시작해 워터해저드와 다양한 지형이 어우러진 코스는 라운드마다 새로운 즐거움을 선사합니다.
          </p>
          <p className="text-[14.5px] sm:text-[15px] leading-[2.05] text-ink-soft font-light">
            코스 가까이에 자리한 94실 규모의 골프텔에서는 이동의 번거로움 없이 여유로운 연박과 라운드를 즐길 수 있습니다.
            <br />
            골프와 휴식, 식사, 연습장까지 한곳에서 누리며 라운드와 여행을 함께 즐기는 특별한 시간을 만나보세요.
          </p>
          <div className="flex flex-wrap gap-x-8 sm:gap-x-11 gap-y-6 mt-9 sm:mt-[46px] pt-7 sm:pt-8 border-t border-deep/15">
            <div>
              <div className="font-serif text-[24px] sm:text-[27px] text-deep">2009</div>
              <div className="text-[12px] text-muted-2 mt-1">개장</div>
            </div>
            <div>
              <div className="font-serif text-[24px] sm:text-[27px] text-deep">Kentaro Sato</div>
              <div className="text-[12px] text-muted-2 mt-1">코스 설계 (일본)</div>
            </div>
          </div>
        </div>
        <div className="relative order-1 md:order-2 min-h-[320px] md:min-h-[580px]">
          <ClubGallery />
        </div>
      </section>

      {/* SIGNATURE HOLES */}
      <section className="bg-bg-contrast px-5 sm:px-12 py-16 sm:py-[104px]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-[52px]">
          <div>
            <p className="mb-[18px] text-[10.5px] tracking-[0.34em] text-bronze">SIGNATURE HOLES</p>
            <h2 className="font-kr-heading font-normal text-[26px] sm:text-[38px] leading-[1.15] text-deep">특별한 순간을 위한 특별한 공간</h2>
          </div>
          <Link href="/course" className="text-[13.5px] tracking-[0.06em] border-b border-deep/35 pb-1 self-start whitespace-nowrap">
            18홀 전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7">
          {SIGNATURE_HOLES.map((h) => (
            <article key={h.title} className="bg-bg border border-deep/[0.12]">
              <div className="relative h-[220px]">
                <Image src={h.image} alt={h.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="px-6 sm:px-[30px] pt-[30px] pb-[34px]">
                <div className="flex flex-col items-start gap-[7px]">
                  <span className="text-[11px] tracking-[0.16em] text-bronze whitespace-nowrap">{h.en}</span>
                  <h3 className="font-kr-heading font-medium text-[26px] sm:text-[28px] text-deep whitespace-nowrap">{h.title}</h3>
                </div>
                <p className="my-4 text-[14px] leading-[1.95] text-ink-soft font-light">{h.desc}</p>
                <div className="flex flex-wrap gap-x-[22px] gap-y-2.5 pt-[18px] border-t border-deep/[0.12] text-[12.5px] text-muted">
                  <span className="whitespace-nowrap">PAR {h.par}</span>
                  <span className="whitespace-nowrap">{h.yards} yds</span>
                  <span className="whitespace-nowrap">{h.trait}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FACILITIES teaser */}
      <section className="px-5 sm:px-12 py-16 sm:py-[104px]">
        <p className="mb-[18px] text-[10.5px] tracking-[0.34em] text-bronze">FACILITIES</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-10 mb-9 sm:mb-[46px]">
          <h2 className="font-kr-heading font-normal text-[26px] sm:text-[38px] text-deep break-keep">첫 걸음부터 마지막 라운드까지 한곳에서 여유롭게!</h2>
          <Link href="/facilities/golftel" className="text-[13.5px] tracking-[0.06em] border-b border-deep/35 pb-1 whitespace-nowrap self-start">
            시설안내 전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FACILITY_TEASERS.map((f) => (
            <Link
              key={f.id}
              href={`/facilities/${f.id}`}
              className="flex flex-col border border-deep/[0.14] bg-bg"
            >
              <div className="relative h-[230px]">
                <Image src={f.image} alt={f.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="px-6 sm:px-[30px] pt-[30px] pb-[34px]">
                <div className="flex flex-col items-start gap-[7px]">
                  <span className="text-[10.5px] tracking-[0.16em] text-bronze whitespace-nowrap">{f.en}</span>
                  <h3 className="font-kr-heading font-medium text-[25px] sm:text-[27px] text-deep whitespace-nowrap">{f.name}</h3>
                </div>
                <p className="mt-[15px] mb-5 text-[14px] leading-[1.95] text-ink-soft font-light">{f.desc}</p>
                <div className="pt-[18px] border-t border-deep/[0.12] text-[12.5px] text-muted">{f.meta}</div>
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
          <h2 className="mb-8 font-kr-heading font-normal text-[25px] sm:text-[36px] leading-[1.2]">오시는 길</h2>
          <div className="flex flex-col gap-[26px]">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="pb-6 border-b border-bg/[0.18]">
                <div className="text-[10.5px] tracking-[0.26em] text-gold mb-[11px]">{row.label}</div>
                <div className="text-[14.5px] leading-[1.9] text-bg/82 font-light">{row.value}</div>
              </div>
            ))}
          </div>
          <Link href="/access" className="mt-9 self-start px-8 py-[15px] bg-gold text-deep-dark text-[14px] tracking-[0.06em]">
            상세 약도 보기
          </Link>
        </div>
      </section>
    </div>
  );
}
