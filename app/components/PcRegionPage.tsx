"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import allCards from "../data/cards";

/* ── 지역 데이터 (아이콘 SVG path + 업체 수) ── */
const regions = [
  { label: "전체",  count: 254, path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "서울",  count: 131, path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "경기",  count: 158, path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "인천",  count: 42,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "대전",  count: 28,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "대구",  count: 35,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "부산",  count: 48,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "광주",  count: 22,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "울산",  count: 18,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "세종",  count: 9,   path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "강원",  count: 15,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "충북",  count: 12,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "충남",  count: 14,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "전북",  count: 11,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "전남",  count: 10,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "경북",  count: 13,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "경남",  count: 16,  path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
  { label: "제주",  count: 8,   path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" },
];

/* ── 프리미엄 슬라이드 ── */
const premSlides = [
  { id: 1, badge: "월변·당일",     company: "24시전국당일승인대부", region: "전국", desc: "높은 승인률 비대면 간편진행", color1: "#0B2347", color2: "#1A4480" },
  { id: 2, badge: "무직자·저신용", company: "구조대부",             region: "서울", desc: "무직자·외국인 OK 당일입금",   color1: "#0F2A50", color2: "#1D4D90" },
  { id: 3, badge: "직장인·비대면", company: "드림파이낸셜",          region: "경기", desc: "직장인·자영업자 비대면 진행", color1: "#0D2240", color2: "#1B4080" },
  { id: 4, badge: "소액·당일",     company: "미래대부",             region: "부산", desc: "소액 가능 당일송금",          color1: "#0B2347", color2: "#1E5090" },
  { id: 5, badge: "사업자",        company: "성장파이낸셜",          region: "인천", desc: "자영업·개인사업자 OK",       color1: "#0D2240", color2: "#1A4070" },
];

/* allCards는 ../data/cards에서 import */

import { useEffect, useRef } from "react";

export default function PcRegionPage({ initialRegion = "전체" }: { initialRegion?: string }) {
  const [activeRegion, setActiveRegion] = useState(initialRegion);
  const [premIdx, setPremIdx] = useState(0);
  const [premPaused, setPremPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (premPaused) return;
    const t = setInterval(() => setPremIdx((i) => (i + 1) % premSlides.length), 3500);
    return () => clearInterval(t);
  }, [premPaused]);

  const prem = premSlides[premIdx];

  const filteredCards = allCards.filter((c) =>
    activeRegion === "전체" || c.region === activeRegion
  );

  return (
    <div className="pc-region-page">

      {/* ── 네이비 영역: 풀너비 배경 + 내부 max-width ── */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">

          {/* ── 브레드크럼 + 타이틀 ── */}
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">지역별 업체찾기</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/">HOME</Link>
              <span className="pc-rp-bc-sep">›</span>
              <span className="pc-rp-bc-cur">지역별 업체찾기</span>
            </nav>
          </div>

          {/* ── 프리미엄 배너 + 지역 그리드 2단 ── */}
          <div className="pc-rp-main">

            {/* 좌측: 프리미엄 배너 */}
            <div
              className="pc-rp-prem"
              style={{ background: `linear-gradient(150deg, ${prem.color1} 0%, ${prem.color2} 100%)` }}
              onMouseEnter={() => setPremPaused(true)}
              onMouseLeave={() => setPremPaused(false)}
            >
              <div className="pc-rp-prem-head">
                <span className="pc-rp-prem-label">⭐ Premium</span>
                <div className="pc-rp-prem-dots">
                  {premSlides.map((_, i) => (
                    <button
                      key={i}
                      className={"pc-rp-prem-dot" + (i === premIdx ? " active" : "")}
                      onClick={() => { setPremIdx(i); setPremPaused(true); }}
                      aria-label={`슬라이드 ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="pc-rp-prem-body">
                <span className="pc-rp-prem-badge">{prem.badge}</span>
                <p className="pc-rp-prem-desc">{prem.desc}</p>
                <div className="pc-rp-prem-info">
                  <span className="pc-rp-prem-region">{prem.region}</span>
                  <span className="pc-rp-prem-company">{prem.company}</span>
                </div>
                <Link href={`/recommend/${prem.id}`} className="pc-rp-prem-cta">상세보기 →</Link>
              </div>
            </div>

            {/* 우측: 지역 카드 그리드 */}
            <div className="pc-rp-region-grid-wrap">
              <div className="pc-rp-region-grid">
                {regions.map((r) => (
                  <button
                    key={r.label}
                    className={"pc-rp-region-card" + (activeRegion === r.label ? " active" : "")}
                    onClick={() => setActiveRegion(r.label)}
                  >
                    <svg className="pc-rp-region-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="pc-rp-region-name">{r.label}</span>
                    <span className="pc-rp-region-count">{r.count}개</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>{/* /pc-rp-navy-area */}

      <div className="pc-inner">

        {/* ── 섹션 타이틀 ── */}
        <div className="pc-rp-section-title-bar">
          <span className="pc-rp-section-notice">• 배너위치는 실시간으로 랜덤 배치됩니다.</span>
          <span className="pc-rp-section-heading">
            {activeRegion === "전체" ? "전체 지역" : activeRegion} 업체 등록 현황
          </span>
          <a href="/about" className="pc-rp-section-ad">광고문의 ?</a>
        </div>

        {/* ── 업체 카드 그리드 ── */}
        {filteredCards.length > 0 ? (
          <div className="pc-rp-cards-grid">
            {filteredCards.map((card) => (
              <div key={card.id} className="pc-rp-card" onClick={() => router.push(`/recommend/${card.id}`)}>
                <div className="pc-card-top" style={{ backgroundImage: `url(${card.img})` }}>
                  <span className={`pc-card-tag tag--${card.tagColor}`}>{card.badge}</span>
                </div>
                <div className="pc-card-bottom">
                  <div className="pc-card-title">{card.title}</div>
                  <ul className="pc-card-features">
                    {card.features.map((f, i) => (
                      <li key={i} className={`pc-card-feat feat-${i}`}>{f}</li>
                    ))}
                  </ul>
                  <div className="pc-card-info-row">
                    <div className="pc-card-info-left">
                      <span className="pc-card-company">{card.company}</span>
                      <span className="pc-card-region-row">{card.region}</span>
                    </div>
                    <a href={`tel:${card.phone}`} className="pc-card-phone" onClick={(e) => e.stopPropagation()}>{card.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="pc-rp-empty">
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔍</div>
            <p style={{ fontWeight: 700, color: "#555" }}>해당 지역의 업체가 없어요</p>
            <p style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>다른 지역을 선택해보세요</p>
          </div>
        )}

      </div>
    </div>
  );
}
