"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PAGE_SIZE = 4;

export default function HomeGalleryCarousel({ images }: { images: string[] }) {
  const [page, setPage] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pageCount = Math.ceil(images.length / PAGE_SIZE);

  const go = (delta: number) => setPage((p) => (p + delta + pageCount) % pageCount);

  const close = useCallback(() => setOpenIndex(null), []);
  const goLightbox = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? null : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goLightbox(-1);
      if (e.key === "ArrowRight") goLightbox(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, goLightbox]);

  const visible = images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        {visible.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(page * PAGE_SIZE + i)}
            aria-label={`사진 ${page * PAGE_SIZE + i + 1} 확대 보기`}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            <Image
              src={src}
              alt="씨엠립 부영 컨트리클럽 갤러리 사진"
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {pageCount > 1 && (
        <>
          <button
            aria-label="이전 사진"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:flex w-11 h-11 rounded-full bg-bg text-deep shadow-md items-center justify-center hover:bg-bg-contrast transition-colors"
          >
            <svg width="9" height="15" viewBox="0 0 10 16" fill="none">
              <path d="M9 1L2 8L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="다음 사진"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:flex w-11 h-11 rounded-full bg-bg text-deep shadow-md items-center justify-center hover:bg-bg-contrast transition-colors"
          >
            <svg width="9" height="15" viewBox="0 0 10 16" fill="none">
              <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex sm:hidden justify-center gap-3 mt-5">
            <button aria-label="이전 사진" onClick={() => go(-1)} className="w-9 h-9 rounded-full bg-bg text-deep shadow-md flex items-center justify-center">
              <svg width="8" height="13" viewBox="0 0 10 16" fill="none">
                <path d="M9 1L2 8L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button aria-label="다음 사진" onClick={() => go(1)} className="w-9 h-9 rounded-full bg-bg text-deep shadow-md flex items-center justify-center">
              <svg width="8" height="13" viewBox="0 0 10 16" fill="none">
                <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </>
      )}

      {openIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-deep-deep/95 flex items-center justify-center" onClick={close}>
          <button
            aria-label="닫기"
            onClick={close}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center text-bg hover:text-bg/70 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M1 1L21 21M21 1L1 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            aria-label="이전 사진"
            onClick={(e) => {
              e.stopPropagation();
              goLightbox(-1);
            }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-bg/10 text-bg hover:bg-bg/20 transition-colors"
          >
            <svg width="12" height="20" viewBox="0 0 10 16" fill="none">
              <path d="M9 1L2 8L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="다음 사진"
            onClick={(e) => {
              e.stopPropagation();
              goLightbox(1);
            }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-bg/10 text-bg hover:bg-bg/20 transition-colors"
          >
            <svg width="12" height="20" viewBox="0 0 10 16" fill="none">
              <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="relative w-[88vw] h-[78vh] sm:w-[76vw] sm:h-[82vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={images[openIndex]} alt="씨엠립 부영 컨트리클럽 갤러리 사진" fill sizes="90vw" className="object-contain" priority />
          </div>

          <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-bg/70 text-[13px] tracking-[0.1em]">
            {openIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
