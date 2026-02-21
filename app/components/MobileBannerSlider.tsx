"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const banners = [
  { src: "/mobile-banner1.png", alt: "대출마켓 배너 1" },
  { src: "/mobile-banner2.png", alt: "신속하게 월변 비대면대출" },
  { src: "/mobile-banner3.png", alt: "24시 비대면" },
  { src: "/mobile-banner4.png", alt: "24시 전직 당일 비대면" },
  { src: "/mobile-banner5.png", alt: "24시 비대면 당일 지급" },
  { src: "/mobile-banner6.png", alt: "비대면 당일 신속대출" },
  { src: "/mobile-banner7.png", alt: "시간 낭비는 이제 그만" },
  { src: "/mobile-banner8.png", alt: "24시전국 당일 월변가능" },
  { src: "/mobile-banner9.png", alt: "긴급비대면당일대출" },
  { src: "/mobile-banner10.png", alt: "24시 비대면 당일 진행" },
];

const INTERVAL_MS = 3500;

export default function MobileBannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "2.5 / 1",
      overflow: "hidden",
      background: "#0b1a3a",
    }}>
      {banners.map((banner, i) => (
        <div
          key={banner.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* 하단 인디케이터 dots */}
      <div style={{
        position: "absolute",
        bottom: 8,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 5,
        zIndex: 10,
      }}>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 18 : 6,
              height: 6,
              borderRadius: 3,
              border: "none",
              background: i === current ? "#f5a623" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`배너 ${i + 1}`}
          />
        ))}
      </div>

      {/* 현재 번호 표시 */}
      <div style={{
        position: "absolute",
        top: 8,
        right: 10,
        background: "rgba(0,0,0,0.4)",
        color: "#fff",
        fontSize: 11,
        padding: "2px 7px",
        borderRadius: 10,
        zIndex: 10,
      }}>
        {current + 1} / {banners.length}
      </div>
    </div>
  );
}
