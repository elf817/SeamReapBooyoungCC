"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = ["/images/main1.png", "/images/main2.png"];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="부영 컨트리클럽 코스 전경"
          fill
          priority={i === 0}
          sizes="100vw"
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </>
  );
}
