"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  "/images/main_sub1.png",
  "/images/main_sub2.jpg",
  "/images/main_sub3.jpg",
  "/images/main_sub4.jpg",
  "/images/main_sub5.jpg",
  "/images/main_sub6.jpg",
  "/images/main_sub7.jpg",
];

export default function ClubGallery() {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => setIndex((i) => (i + delta + IMAGES.length) % IMAGES.length);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="클럽하우스 전경"
          fill
          priority={i === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0, filter: "saturate(0.85) brightness(0.96) contrast(0.96)" }}
        />
      ))}

      <button
        aria-label="이전 사진"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-deep-deep/50 text-bg hover:bg-deep-deep/75 transition-colors"
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path d="M9 1L2 8L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        aria-label="다음 사진"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-deep-deep/50 text-bg hover:bg-deep-deep/75 transition-colors"
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
          <path d="M1 1L8 8L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            aria-label={`${i + 1}번 사진 보기`}
            onClick={() => setIndex(i)}
            className="w-1.5 h-1.5"
            style={{ background: i === index ? "#f6f4ee" : "rgba(246,244,238,0.4)" }}
          />
        ))}
      </div>
    </div>
  );
}
