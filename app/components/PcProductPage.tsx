"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import allCards from "../data/cards";

/* ── 상품 카테고리 데이터 (27개) ── */
const categories = [
  { label: "전체",       count: 254, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  { label: "직장인대출",  count: 89,  icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { label: "무직자대출",  count: 67,  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "여성대출",    count: 45,  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { label: "비상금대출",  count: 72,  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "모바일대출",  count: 38,  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { label: "소액대출",    count: 95,  icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "무방문대출",  count: 54,  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  { label: "자영업대출",  count: 41,  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "당일대출",    count: 110, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "사업자대출",  count: 36,  icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "전문직대출",  count: 28,  icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { label: "저신용대출",  count: 58,  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "신용대출",    count: 76,  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { label: "추가대출",    count: 33,  icon: "M12 6v6m0 0v6m0-6h6m-6 0H6" },
  { label: "자동차대출",  count: 22,  icon: "M8 17h8M8 17v-4m8 4v-4m-8 0h8m-8 0L5 9h14l-3 4M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" },
  { label: "부동산대출",  count: 19,  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  { label: "생활비대출",  count: 48,  icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { label: "온라인대출",  count: 62,  icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { label: "일용직대출",  count: 31,  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { label: "프리랜서대출", count: 27, icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
  { label: "전당포대출",  count: 14,  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { label: "비대면대출",  count: 83,  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { label: "주부대출",    count: 35,  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { label: "회생파산대출", count: 21, icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { label: "대환대출",    count: 44,  icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { label: "기타대출",    count: 18,  icon: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" },
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

export default function PcProductPage({ initialCategory = "전체" }: { initialCategory?: string }) {
  const [activeCat, setActiveCat] = useState(initialCategory);
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
    activeCat === "전체" || c.category === activeCat
  );

  return (
    <div className="pc-region-page">

      {/* ── 네이비 영역: 풀너비 배경 ── */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">

          {/* ── 브레드크럼 + 타이틀 ── */}
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">상품별 업체찾기</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/">HOME</Link>
              <span className="pc-rp-bc-sep">›</span>
              <span className="pc-rp-bc-cur">상품별 업체찾기</span>
            </nav>
          </div>

          {/* ── 프리미엄 배너 + 상품 그리드 ── */}
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

            {/* 우측: 상품 카테고리 그리드 (3줄) */}
            <div className="pc-rp-region-grid-wrap">
              <div className="pc-pp-cat-grid">
                {categories.map((c) => (
                  <button
                    key={c.label}
                    className={"pc-rp-region-card" + (activeCat === c.label ? " active" : "")}
                    onClick={() => setActiveCat(c.label)}
                  >
                    <svg className="pc-rp-region-icon" viewBox="0 0 24 24" fill="none">
                      <path d={c.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span className="pc-rp-region-name">{c.label.replace("대출", "")}</span>
                    <span className="pc-rp-region-count">{c.count}개</span>
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
            {activeCat === "전체" ? "전체 상품" : activeCat} 업체 등록 현황
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
            <p style={{ fontWeight: 700, color: "#555" }}>해당 상품의 업체가 없어요</p>
            <p style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>다른 상품을 선택해보세요</p>
          </div>
        )}

      </div>
    </div>
  );
}
