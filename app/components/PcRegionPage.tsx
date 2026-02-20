"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

/* ── 업체 카드 데이터 ── */
const allCards = [
  { id: 1,  badge: "BEST", best: true,  tagColor: "gold",   title: "24시 비대면 월변대출",    desc: "상담 후 당일 송금 OK\n신속한 당일 간편 대출",   company: "24시전국당일승인대부", region: "전국", color: "#0B2347", initial: "24" },
  { id: 2,  badge: "추천", best: false, tagColor: "red",    title: "무직자·외국인 당일입금",  desc: "무직자·저신용·외국인 OK\n무방문 월변 빠른진행", company: "구조대부",            region: "서울", color: "#1A3A6B", initial: "구" },
  { id: 3,  badge: "BEST", best: true,  tagColor: "blue",   title: "직장인 1개월 월변대출",   desc: "직장인·자영업자 OK\n신속 비대면 빠른진행",     company: "드림파이낸셜",         region: "경기", color: "#122B55", initial: "드" },
  { id: 4,  badge: "",     best: false, tagColor: "gold",   title: "소액 당일대출 전국OK",    desc: "소액 가능·당일송금\n전국 어디서나 OK",        company: "미래대부",            region: "부산", color: "#0F2D5E", initial: "미" },
  { id: 5,  badge: "",     best: false, tagColor: "red",    title: "신용불량 소액 급전",      desc: "10만~300만원 소액\n신용불량·연체 가능",       company: "희망대부",            region: "대구", color: "#1A3A6B", initial: "희" },
  { id: 6,  badge: "추천", best: false, tagColor: "purple", title: "개인사업자 비대면대출",   desc: "자영업·개인사업자 OK\n매출 기반 한도산정",    company: "성장파이낸셜",         region: "인천", color: "#122B55", initial: "성" },
  { id: 7,  badge: "",     best: false, tagColor: "purple", title: "여성·주부 전용 대출",     desc: "주부·무직 여성 OK\n당일 입금 빠른진행",       company: "레이디파이낸셜",       region: "서울", color: "#1A3060", initial: "레" },
  { id: 8,  badge: "",     best: false, tagColor: "green",  title: "고금리 대환 전환대출",    desc: "고금리 → 저금리 전환\n원클릭 간편 신청",     company: "클린대부",            region: "경기", color: "#0F2550", initial: "클" },
  { id: 9,  badge: "BEST", best: true,  tagColor: "gold",   title: "비상금 10분 즉시입금",    desc: "50만~500만원 비상금\n10분 안에 입금",        company: "빠른머니대부",         region: "전국", color: "#102040", initial: "빠" },
  { id: 10, badge: "",     best: false, tagColor: "blue",   title: "프리랜서 소득증빙 없이",  desc: "소득증빙 불필요\n실적 기반 간편 심사",        company: "자유대부",            region: "전국", color: "#0A1E3C", initial: "자" },
];

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
      <div className="pc-inner">

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
              <div
                key={card.id}
                className="pc-rp-card"
                onClick={() => router.push(`/recommend/${card.id}`)}
              >
                {/* 이미지 썸네일 영역 */}
                <div
                  className="pc-rp-card-thumb"
                  style={{ background: `linear-gradient(160deg, ${card.color} 0%, #1E4A8A 100%)` }}
                >
                  {card.badge && (
                    <span className={`pc-rp-card-badge${card.best ? " best" : ""} tag--${card.tagColor}`}>{card.badge}</span>
                  )}
                  <div className="pc-rp-card-initial">{card.initial}</div>
                  <span className="pc-rp-card-co-overlay">{card.company}</span>
                </div>
                {/* 텍스트 영역 */}
                <div className="pc-rp-card-body">
                  <div className="pc-rp-card-title">{card.title}</div>
                  <p className="pc-rp-card-desc">
                    {card.desc.split("\n").map((line, i) => (
                      <span key={i}>{line}{i < card.desc.split("\n").length - 1 && <br />}</span>
                    ))}
                  </p>
                  <div className="pc-rp-card-footer">
                    <span className="pc-rp-card-co">{card.company}</span>
                    <span className="pc-rp-card-region">{card.region}</span>
                  </div>
                </div>
                <div className="pc-rp-card-btns">
                  <button
                    className="pc-rp-btn-detail"
                    onClick={(e) => { e.stopPropagation(); router.push(`/recommend/${card.id}`); }}
                  >🔍 상세보기</button>
                  <a
                    href={`tel:010-0000-0000`}
                    className="pc-rp-btn-call"
                    onClick={(e) => e.stopPropagation()}
                  >📞 통화하기</a>
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
