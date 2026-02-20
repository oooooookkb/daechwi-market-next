"use client";

import { useEffect, useRef, useState } from "react";

const FADE_MS = 250;
const INTERVAL_MS = 4000;
const PAUSE_AFTER_CLICK_MS = 8000;

// ① 줄바꿈 개선 + ② 강조 단어 1개만 + ⑤ meta는 안전/혜택 문장으로 분리
const slides = [
  {
    key: "A",
    line1: "내 조건으로",
    line2: <>딱 맞는 <em>대출업체</em> 찾기</>,
    sub: "조건 확인 후 안전하게 연결해드려요",
    meta: "사기예방 안내 제공 · 24시간 빠른 연결",
  },
  {
    key: "B",
    line1: "지금 바로,",
    line2: <><em>맞춤</em> 업체 매칭</>,
    sub: "지역·유형·금액 선택 → 빠르게 상담 연결",
    meta: "상담 전 필수 확인사항 안내 · 사기번호 조회 지원",
  },
  {
    key: "C",
    line1: "안심하고 비교하고",
    line2: <><em>선택</em>하세요</>,
    sub: "내 조건에 맞는 업체만 빠르게 추천",
    meta: "사기예방 가이드 · 24시간 빠른 연결",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (nextIndex: number, userInitiated = false) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(((nextIndex % slides.length) + slides.length) % slides.length);
      setIsFading(false);
    }, FADE_MS);
    if (userInitiated) {
      setIsPaused(true);
      if (pauseRef.current) clearTimeout(pauseRef.current);
      pauseRef.current = setTimeout(() => setIsPaused(false), PAUSE_AFTER_CLICK_MS);
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((cur) => (cur + 1) % slides.length);
        setIsFading(false);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused]);

  const slide = slides[activeIndex];

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-left">

        {/* ─ 페이드 텍스트 블록 ─ */}
        <div
          style={{
            opacity: isFading ? 0 : 1,
            transform: isFading ? "translateY(5px)" : "translateY(0)",
            transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
          }}
        >
          {/* ① 줄바꿈 개선된 제목 */}
          <h1 className="hero-title">
            {slide.line1}<br />{slide.line2}
          </h1>

          {/* 서브 문구 */}
          <p className="hero-sub-text">{slide.sub}</p>

          {/* ⑦ meta 밝기↑, 순수 텍스트로 */}
          <p className="hero-meta-text">{slide.meta}</p>

        </div>

        {/* 도트 인디케이터 */}
        <div className="hero-dots">
          {slides.map((s, i) => (
            <button
              key={s.key}
              className={`hero-dot${i === activeIndex ? " active" : ""}`}
              onClick={() => goTo(i, true)}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
