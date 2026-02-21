"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const FADE_MS = 250;
const INTERVAL_MS = 4000;
const PAUSE_AFTER_CLICK_MS = 8000;

const bgImages = ["/banner1.png", "/banner2.png", "/banner3.png"];

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
    line1: "지금 바로",
    line2: <><em>내 조건 맞춤</em> 업체 찾기</>,
    sub: "지역·상품·금액 선택 → 3초 안에 맞는 업체 바로 연결",
    meta: "전국 254개 등록업체 · 24시간 빠른 상담 연결",
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
  { label: "대환",    href: "/product?q=대환대출" },
  { label: "주부",    href: "/product?q=주부대출" },
  { label: "학생",    href: "/product?q=학생대출" },
  { label: "더보기+", href: "/product" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [premIdx, setPremIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* 사기번호검색 카운트업 */
  const [scamCount1, setScamCount1] = useState(0); // 총 이력조회
  const [scamCount2, setScamCount2] = useState(0); // 총 사기번호
  useEffect(() => {
    const target1 = 301406;
    const target2 = 4111;
    const duration = 1500;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const e = ease(p);
      setScamCount1(Math.floor(e * target1));
      setScamCount2(Math.floor(e * target2));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  /* 사기번호검색 폼 */
  const [scamPhone, setScamPhone] = useState("");
  const [scamLoading, setScamLoading] = useState(false);
  const [scamResult, setScamResult] = useState<{ totCnt: number; voiceCnt: number; smsCnt: number } | null>(null);
  const [scamError, setScamError] = useState("");

  const handleScamSearch = async () => {
    const digits = scamPhone.replace(/[^0-9]/g, "");
    if (digits.length < 8) {
      setScamError("전화번호를 정확히 입력해주세요 (8자리 이상)");
      return;
    }
    setScamError("");
    setScamResult(null);
    setScamLoading(true);
    try {
      const res = await fetch("/api/fraud-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telNum: digits }),
      });
      const data = await res.json();
      if (!res.ok) {
        setScamError(data.error || "조회 중 오류가 발생했습니다.");
      } else {
        setScamResult(data);
      }
    } catch {
      setScamError("네트워크 오류가 발생했습니다.");
    } finally {
      setScamLoading(false);
    }
  };

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

      {/* 좌측: 슬로건 + 배경 이미지 슬라이드 */}
      <div className="hero-left" style={{ position: "relative", overflow: "hidden" }}>
        {/* 좌측 배경 이미지 슬라이드 */}
        {bgImages.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              opacity: i === activeIndex ? 1 : 0,
              transition: "opacity 0.6s ease",
              filter: "blur(2px)",
              transform: "scale(1.03)",
              zIndex: 0,
            }}
          />
        ))}
        {/* 어두운 오버레이: 텍스트 가독성 */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8, 18, 45, 0.78)",
          zIndex: 1,
        }} />
        {/* 콘텐츠 */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
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
        </div>
        <div className="hero-dots" style={{ position: "relative", zIndex: 2 }}>
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

      {/* 우측: 사기번호검색 + 프리미엄 배너 + 지역/상품 찾기 */}
      <div className="hero-right">

        {/* 사기번호검색 */}
        <div className="hrp-scam-search">
          <div className="hrp-scam-title">사기번호검색</div>
          <div className="hrp-scam-desc">경찰청 실시간 사기번호 DB와 연동하여 조회합니다</div>
          <div className="hrp-scam-form">
            <input
              type="tel"
              className="hrp-scam-input"
              placeholder="전화번호 입력 (예: 01012345678)"
              value={scamPhone}
              onChange={(e) => setScamPhone(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleScamSearch()}
              style={{ flex: 2 }}
            />
            <button className="hrp-scam-btn" onClick={handleScamSearch} disabled={scamLoading}>
              {scamLoading ? "조회중..." : "검색"}
            </button>
          </div>

          {/* 조회 결과 */}
          {scamError && (
            <div className="hrp-scam-result hrp-scam-result--error">{scamError}</div>
          )}
          {scamResult && (
            <div className={`hrp-scam-result ${scamResult.totCnt === 0 ? "hrp-scam-result--safe" : scamResult.totCnt <= 2 ? "hrp-scam-result--caution" : "hrp-scam-result--danger"}`}>
              {scamResult.totCnt === 0 ? (
                <span>✔ 안전 — 사기 신고이력 없음</span>
              ) : scamResult.totCnt <= 2 ? (
                <span>⚠ 주의 — 신고 {scamResult.totCnt}건 (보이스피싱 {scamResult.voiceCnt}건 · 스미싱 {scamResult.smsCnt}건)</span>
              ) : (
                <span>✕ 위험 — 신고 {scamResult.totCnt}건 (보이스피싱 {scamResult.voiceCnt}건 · 스미싱 {scamResult.smsCnt}건)</span>
              )}
            </div>
          )}

          <div className="hrp-scam-stats">
            <div className="hrp-scam-stat">
              <span className="hrp-scam-stat-label">총 이력조회</span>
              <span className="hrp-scam-stat-num">{scamCount1.toLocaleString()}건</span>
            </div>
            <div className="hrp-scam-stat">
              <span className="hrp-scam-stat-label">총 사기번호</span>
              <span className="hrp-scam-stat-num">{scamCount2.toLocaleString()}건</span>
            </div>
          </div>
        </div>

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
