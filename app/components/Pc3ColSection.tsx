"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* ── 지역 데이터 ── */
const regions = [
  { label: "전체",  href: "/region" },
  { label: "서울",  href: "/region?q=서울" },
  { label: "경기",  href: "/region?q=경기" },
  { label: "인천",  href: "/region?q=인천" },
  { label: "대전",  href: "/region?q=대전" },
  { label: "대구",  href: "/region?q=대구" },
  { label: "부산",  href: "/region?q=부산" },
  { label: "광주",  href: "/region?q=광주" },
  { label: "울산",  href: "/region?q=울산" },
  { label: "세종",  href: "/region?q=세종" },
  { label: "강원",  href: "/region?q=강원" },
  { label: "충북",  href: "/region?q=충북" },
  { label: "충남",  href: "/region?q=충남" },
  { label: "전북",  href: "/region?q=전북" },
  { label: "전남",  href: "/region?q=전남" },
  { label: "경북",  href: "/region?q=경북" },
  { label: "경남",  href: "/region?q=경남" },
  { label: "제주",  href: "/region?q=제주" },
];

/* ── 상품 데이터 (SVG 아이콘) ── */
const products = [
  { label: "전체",    icon: "grid",      href: "/product" },
  { label: "직장인",  icon: "work",      href: "/product?q=직장인대출" },
  { label: "무직자",  icon: "person",    href: "/product?q=무직자대출" },
  { label: "여성",    icon: "female",    href: "/product?q=여성대출" },
  { label: "비상금",  icon: "emergency", href: "/product?q=비상금대출" },
  { label: "모바일",  icon: "online",    href: "/product?q=무방문대출" },
  { label: "소액",    icon: "coin",      href: "/product?q=소액대출" },
  { label: "무방문",  icon: "nomeet",    href: "/product?q=무방문대출" },
  { label: "자영업",  icon: "biz",       href: "/product?q=사업자대출" },
  { label: "당일",    icon: "day",       href: "/product?q=당일대출" },
  { label: "전문직",  icon: "expert",    href: "/product?q=전문직대출" },
  { label: "저신용",  icon: "down",      href: "/product?q=저신용자" },
  { label: "신용",    icon: "credit",    href: "/product?q=신용대출" },
  { label: "대환",    icon: "exchange",  href: "/product?q=대환대출" },
  { label: "프리랜서",icon: "free",      href: "/product?q=프리랜서" },
  { label: "더보기",  icon: "more",      href: "/product" },
];

/* ── SVG 아이콘 컴포넌트 ── */
function ProductIcon({ type }: { type: string }) {
  const cls = "pc3col-prod-svg";
  switch (type) {
    case "grid":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>;
    case "work":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>;
    case "person":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    case "female":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>;
    case "emergency":return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
    case "online":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>;
    case "coin":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5-1.3 2.5-3 2.5-3 1.1-3 2.5 1.3 2.5 3 2.5 3-1.1 3-2.5"/></svg>;
    case "nomeet":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
    case "biz":      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4"/></svg>;
    case "day":      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01"/></svg>;
    case "expert":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.09 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
    case "down":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
    case "credit":   return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>;
    case "exchange": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>;
    case "free":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
    case "more":     return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>;
    default:         return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/></svg>;
  }
}

/* ── 프리미엄 슬라이드 데이터 ── */
const slides = [
  { id: 1, badge: "월변·당일",    title: "24시 비대면\n월변대출",   company: "24시전국당일승인대부", region: "전국", desc: "상담 후 당일 송금 OK",   color1: "#0B2347", color2: "#1A4480" },
  { id: 2, badge: "무직자·저신용", title: "24시 비대면\n당일입금",   company: "구조대부",           region: "서울", desc: "무직자·외국인 OK",     color1: "#12284A", color2: "#1D4D90" },
  { id: 3, badge: "직장인·비대면", title: "1개월 비대면\n월변대출",  company: "드림파이낸셜",        region: "경기", desc: "직장인·자영업자 OK",   color1: "#0D2240", color2: "#1B4080" },
  { id: 4, badge: "소액·당일",    title: "24시 비대면\n당일대출",   company: "미래대부",           region: "부산", desc: "소액 가능·당일송금",   color1: "#0B2347", color2: "#1E5090" },
  { id: 5, badge: "사업자",       title: "사업자\n비대면대출",      company: "성장파이낸셜",        region: "인천", desc: "자영업·개인사업자 OK", color1: "#0D2240", color2: "#1A4070" },
];

export default function Pc3ColSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[slideIdx];

  /* 3.5초 자동 슬라이드 */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  /* 지역 텍스트를 3행 6열로 분리 */
  const regionRows = [
    regions.slice(0, 6),
    regions.slice(6, 12),
    regions.slice(12, 18),
  ];

  return (
    <div className="pc3col-wrap">
      <div className="pc-inner">
        <div className="pc3col-inner">

          {/* ① 프리미엄 배너 */}
          <div
            className="pc3col-premium"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* 헤더 */}
            <div className="pc3col-prem-head">
              <span className="pc3col-prem-badge">⭐ Premium</span>
              <span className="pc3col-prem-count">{slideIdx + 1} / {slides.length}</span>
            </div>

            {/* 메인 배너 바디 */}
            <div
              className="pc3col-prem-body"
              style={{ background: `linear-gradient(150deg, ${slide.color1} 0%, ${slide.color2} 100%)` }}
            >
              <div className="pc3col-prem-deco1" />
              <div className="pc3col-prem-deco2" />

              <span className="pc3col-prem-tag">{slide.badge}</span>
              <p className="pc3col-prem-title">
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </p>
              <p className="pc3col-prem-desc">{slide.desc}</p>
              <Link href={`/recommend/${slide.id}`} className="pc3col-prem-cta">
                상세보기 →
              </Link>
            </div>

            {/* 업체 정보 푸터 */}
            <div className="pc3col-prem-footer">
              <div className="pc3col-prem-co">
                <span className="pc3col-prem-region">{slide.region}</span>
                <span className="pc3col-prem-name">{slide.company}</span>
              </div>
              <div className="pc3col-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`pc3col-dot${i === slideIdx ? " active" : ""}`}
                    onClick={() => { setSlideIdx(i); setPaused(true); }}
                    aria-label={`슬라이드 ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ② 지역별 대출찾기 — 텍스트 dot 스타일 */}
          <div className="pc3col-region">
            <div className="pc3col-col-head">
              <span className="pc3col-col-icon">📍</span>
              <span className="pc3col-col-title">지역으로 업체찾기</span>
              <Link href="/region" className="pc3col-col-more">전체보기 +</Link>
            </div>
            <div className="pc3col-region-body">
              {regionRows.map((row, ri) => (
                <div key={ri} className="pc3col-region-row">
                  {row.map((r, ci) => (
                    <span key={r.label} className="pc3col-region-cell">
                      <Link href={r.href} className="pc3col-region-link">{r.label}</Link>
                      {ci < row.length - 1 && <span className="pc3col-region-dot">·</span>}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ③ 상품별 대출찾기 */}
          <div className="pc3col-product">
            <div className="pc3col-col-head">
              <span className="pc3col-col-icon">📋</span>
              <span className="pc3col-col-title">상품으로 업체찾기</span>
              <Link href="/product" className="pc3col-col-more">전체보기 +</Link>
            </div>
            <ul className="pc3col-prod-list">
              {products.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className={`pc3col-prod-item${p.label === "더보기" ? " more" : ""}`}
                  >
                    <span className="pc3col-prod-icon-wrap">
                      <ProductIcon type={p.icon} />
                    </span>
                    <span className="pc3col-prod-label">{p.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
