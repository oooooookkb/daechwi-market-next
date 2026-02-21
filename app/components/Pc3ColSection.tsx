"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* ── 지역 데이터 (3행 6열) ── */
const regionRows = [
  [
    { label: "전체",  href: "/region" },
    { label: "서울",  href: "/region?q=서울" },
    { label: "경기",  href: "/region?q=경기" },
    { label: "인천",  href: "/region?q=인천" },
    { label: "대전",  href: "/region?q=대전" },
    { label: "대구",  href: "/region?q=대구" },
  ],
  [
    { label: "부산",  href: "/region?q=부산" },
    { label: "광주",  href: "/region?q=광주" },
    { label: "울산",  href: "/region?q=울산" },
    { label: "세종",  href: "/region?q=세종" },
    { label: "강원",  href: "/region?q=강원" },
    { label: "충북",  href: "/region?q=충북" },
  ],
  [
    { label: "충남",  href: "/region?q=충남" },
    { label: "전북",  href: "/region?q=전북" },
    { label: "전남",  href: "/region?q=전남" },
    { label: "경북",  href: "/region?q=경북" },
    { label: "경남",  href: "/region?q=경남" },
    { label: "제주",  href: "/region?q=제주" },
  ],
];

/* ── 상품 데이터 (3행 5열 텍스트) ── */
const productRows = [
  [
    { label: "전체",   href: "/product" },
    { label: "직장인", href: "/product?q=직장인대출" },
    { label: "무직자", href: "/product?q=무직자대출" },
    { label: "여성",   href: "/product?q=여성대출" },
    { label: "비상금", href: "/product?q=비상금대출" },
  ],
  [
    { label: "모바일", href: "/product?q=무방문대출" },
    { label: "소액",   href: "/product?q=소액대출" },
    { label: "무방문", href: "/product?q=무방문대출" },
    { label: "자영업", href: "/product?q=사업자대출" },
    { label: "당일",   href: "/product?q=당일대출" },
  ],
  [
    { label: "사업자", href: "/product?q=사업자대출" },
    { label: "전문직", href: "/product?q=전문직대출" },
    { label: "저신용", href: "/product?q=저신용자" },
    { label: "신용",   href: "/product?q=신용대출" },
    { label: "더보기+", href: "/product" },
  ],
];

/* ── 프리미엄 슬라이드 ── */
const slides = [
  { id: 1, badge: "월변·당일",    title: "24시 비대면\n월변대출",  company: "24시전국당일승인대부", region: "전국", desc: "상담 후 당일 송금 OK",   color1: "#0B2347", color2: "#1A4480" },
  { id: 2, badge: "무직자·저신용", title: "24시 비대면\n당일입금",  company: "구조대부",            region: "서울", desc: "무직자·외국인 OK",     color1: "#0F2A50", color2: "#1D4D90" },
  { id: 3, badge: "직장인·비대면", title: "1개월 비대면\n월변대출", company: "드림파이낸셜",         region: "경기", desc: "직장인·자영업자 OK",   color1: "#0D2240", color2: "#1B4080" },
  { id: 4, badge: "소액·당일",    title: "24시 비대면\n당일대출",  company: "미래대부",            region: "부산", desc: "소액 가능·당일송금",   color1: "#0B2347", color2: "#1E5090" },
  { id: 5, badge: "사업자",       title: "사업자\n비대면대출",     company: "성장파이낸셜",         region: "인천", desc: "자영업·개인사업자 OK", color1: "#0D2240", color2: "#1A4070" },
];

export default function Pc3ColSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[slideIdx];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setSlideIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

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
            <div className="pc3col-prem-head">
              <span className="pc3col-prem-badge">⭐ Premium</span>
              <span className="pc3col-prem-count">{slideIdx + 1} / {slides.length}</span>
            </div>
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
              <Link href={`/recommend/${slide.id}`} className="pc3col-prem-cta">상세보기 →</Link>
            </div>
            <div className="pc3col-prem-footer">
              <div className="pc3col-prem-co">
                <span className="pc3col-prem-region">{slide.region}</span>
                <span className="pc3col-prem-name">{slide.company}</span>
              </div>
              <div className="pc3col-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={"pc3col-dot" + (i === slideIdx ? " active" : "")}
                    onClick={() => { setSlideIdx(i); setPaused(true); }}
                    aria-label={"슬라이드 " + (i + 1)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ② 지역으로 업체찾기 */}
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

          {/* ③ 상품으로 업체찾기 — 대출나라 스타일 텍스트 dot */}
          <div className="pc3col-product">
            <div className="pc3col-col-head">
              <span className="pc3col-col-icon">📋</span>
              <span className="pc3col-col-title">상품으로 업체찾기</span>
              <Link href="/product" className="pc3col-col-more">전체보기 +</Link>
            </div>
            <div className="pc3col-region-body">
              {productRows.map((row, ri) => (
                <div key={ri} className="pc3col-region-row">
                  {row.map((p, ci) => (
                    <span key={p.label} className="pc3col-region-cell">
                      <Link
                        href={p.href}
                        className={"pc3col-region-link" + (p.label === "더보기+" ? " pc3col-more-link" : "")}
                      >
                        {p.label}
                      </Link>
                      {ci < row.length - 1 && <span className="pc3col-region-dot">·</span>}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
