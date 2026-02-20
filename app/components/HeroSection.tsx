"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const FADE_MS = 250;
const INTERVAL_MS = 4000;
const PAUSE_AFTER_CLICK_MS = 8000;

const slides = [
  {
    key: "A",
    line1: "사기업체는 걸러내고",
    line2: <><em>정식 등록업체</em>만 연결합니다</>,
    sub: "사기번호 조회 + 정식업체 인증 — 안전한 대출 비교의 시작",
    meta: "사기번호 조회 지원 · 정식 등록업체만 입점",
  },
  {
    key: "B",
    line1: "거절 이력 있어도",
    line2: <>괜찮아요, <em>조건별 업체</em> 찾아드립니다</>,
    sub: "무직자·저신용·외국인도 OK — 내 상황에 맞는 업체만 추천",
    meta: "전국 254개 등록업체 · 24시간 빠른 연결",
  },
  {
    key: "C",
    line1: "전국 254개 업체 중",
    line2: <><em>내 조건</em>에 딱 맞는 곳만</>,
    sub: "지역·상품·금액 조건으로 3초 안에 맞춤 비교",
    meta: "사기예방 가이드 무료 제공 · 상담 전 필수 확인사항 안내",
  },
];

const premSlides = [
  { id: 1, badge: "월변·당일",     company: "24시전국당일승인대부", region: "전국", desc: "높은 승인률 비대면 간편진행" },
  { id: 2, badge: "무직자·저신용", company: "구조대부",             region: "서울", desc: "무직자·외국인 OK 당일입금" },
  { id: 3, badge: "직장인·비대면", company: "드림파이낸셜",          region: "경기", desc: "직장인·자영업자 비대면 진행" },
  { id: 4, badge: "소액·당일",     company: "미래대부",             region: "부산", desc: "소액 가능 당일송금" },
  { id: 5, badge: "사업자",        company: "성장파이낸셜",          region: "인천", desc: "자영업·개인사업자 OK" },
];

const regionTags = [
  { label: "전체", href: "/region" },
  { label: "서울", href: "/region?q=서울" },
  { label: "경기", href: "/region?q=경기" },
  { label: "인천", href: "/region?q=인천" },
  { label: "대전", href: "/region?q=대전" },
  { label: "대구", href: "/region?q=대구" },
  { label: "부산", href: "/region?q=부산" },
  { label: "광주", href: "/region?q=광주" },
  { label: "울산", href: "/region?q=울산" },
  { label: "세종", href: "/region?q=세종" },
  { label: "강원", href: "/region?q=강원" },
  { label: "충북", href: "/region?q=충북" },
  { label: "충남", href: "/region?q=충남" },
  { label: "전북", href: "/region?q=전북" },
  { label: "전남", href: "/region?q=전남" },
  { label: "경북", href: "/region?q=경북" },
  { label: "경남", href: "/region?q=경남" },
  { label: "제주", href: "/region?q=제주" },
];

const productTags = [
  { label: "전체",    href: "/product" },
  { label: "직장인",  href: "/product?q=직장인대출" },
  { label: "무직자",  href: "/product?q=무직자대출" },
  { label: "여성",    href: "/product?q=여성대출" },
  { label: "비상금",  href: "/product?q=비상금대출" },
  { label: "모바일",  href: "/product?q=무방문대출" },
  { label: "소액",    href: "/product?q=소액대출" },
  { label: "무방문",  href: "/product?q=무방문대출" },
  { label: "자영업",  href: "/product?q=사업자대출" },
  { label: "당일",    href: "/product?q=당일대출" },
  { label: "사업자",  href: "/product?q=사업자대출" },
  { label: "전문직",  href: "/product?q=전문직대출" },
  { label: "저신용",  href: "/product?q=저신용자" },
  { label: "신용",    href: "/product?q=신용대출" },
  { label: "더보기+", href: "/product" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [premIdx, setPremIdx] = useState(0);
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

  useEffect(() => {
    const t = setInterval(() => setPremIdx((i) => (i + 1) % premSlides.length), 3500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[activeIndex];
  const prem = premSlides[premIdx];

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-inner">
      {/* 좌측: 슬로건 */}
      <div className="hero-left">
        <div
          style={{
            opacity: isFading ? 0 : 1,
            transform: isFading ? "translateY(5px)" : "translateY(0)",
            transition: `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
          }}
        >
          <h1 className="hero-title">
            {slide.line1}<br />{slide.line2}
          </h1>
          <p className="hero-sub-text">{slide.sub}</p>
          <p className="hero-meta-text">{slide.meta}</p>
          <div className="hero-cta-row">
            <a href="/realtime" className="hero-cta-btn hero-cta-btn--primary">지금 바로 상담받기 →</a>
            <a href="/search" className="hero-cta-btn hero-cta-btn--ghost">맞춤 업체 찾기</a>
          </div>
        </div>
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

      {/* 우측: 프리미엄 배너 + 지역/상품 찾기 */}
      <div className="hero-right">

        {/* 프리미엄 배너 */}
        <div className="hrp-premium">
          <div className="hrp-prem-header">
            <span className="hrp-prem-badge">Premium Banner</span>
            <div className="hrp-prem-dots">
              {premSlides.map((_, i) => (
                <button
                  key={i}
                  className={"hrp-prem-dot" + (i === premIdx ? " active" : "")}
                  onClick={() => setPremIdx(i)}
                  aria-label={`프리미엄 ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="hrp-prem-body">
            <div className="hrp-prem-desc">{prem.desc}</div>
            <div className="hrp-prem-info">
              <span className="hrp-prem-region">{prem.region}</span>
              <span className="hrp-prem-company">{prem.company}</span>
              <Link href={`/recommend/${prem.id}`} className="hrp-prem-cta">🔍 상세보기</Link>
            </div>
          </div>
        </div>

        {/* 지역 + 상품 찾기 */}
        <div className="hrp-search-row">
          <div className="hrp-search-col">
            <div className="hrp-search-head">
              <span className="hrp-search-title">지역으로 업체찾기</span>
              <Link href="/region" className="hrp-search-more">+</Link>
            </div>
            <div className="hrp-tag-grid">
              {regionTags.map((t, i) => (
                <span key={t.label} className="hrp-tag-cell">
                  <Link href={t.href} className="hrp-tag-link">{t.label}</Link>
                  {i < regionTags.length - 1 && <span className="hrp-tag-dot">·</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="hrp-search-col hrp-search-col--border">
            <div className="hrp-search-head">
              <span className="hrp-search-title">상품으로 업체찾기</span>
              <Link href="/product" className="hrp-search-more">+</Link>
            </div>
            <div className="hrp-tag-grid">
              {productTags.map((t, i) => (
                <span key={t.label} className="hrp-tag-cell">
                  <Link
                    href={t.href}
                    className={"hrp-tag-link" + (t.label === "더보기+" ? " hrp-tag-more" : "")}
                  >{t.label}</Link>
                  {i < productTags.length - 1 && <span className="hrp-tag-dot">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
