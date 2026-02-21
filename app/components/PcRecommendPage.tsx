"use client";

import Link from "next/link";
import allCards from "../data/cards";

export default function PcRecommendPage() {
  return (
    <>
      {/* 네이비 타이틀 */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">오늘의 추천업체</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/" className="pc-rp-bc-home">HOME</Link>
              <span className="pc-rp-bc-sep">/</span>
              <span className="pc-rp-bc-current">오늘의 추천업체</span>
            </nav>
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="pc-inner" style={{ paddingTop: 18, paddingBottom: 40 }}>
        {/* 상단 안내 바 */}
        <div className="pc-rp-section-title-bar">
          <span className="pc-rp-section-notice">
            높은 승인율 · 빠른 진행 · 검증된 업체
          </span>
          <span className="pc-rp-section-heading">메인 등록업체</span>
          <Link href="/about" className="pc-rp-section-ad">광고문의 →</Link>
        </div>

        {/* 카드 그리드 */}
        <div className="pc-rp-cards-grid">
          {allCards.map((c) => (
            <Link href={`/recommend/${c.id}`} key={c.id} className="pc-rp-card" style={{ textDecoration: "none" }}>
              <div
                className="pc-card-top"
                style={{ backgroundImage: `url(${c.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <span className="pc-card-tag" style={{ background: c.tagColor }}>{c.badge}</span>
              </div>
              <div className="pc-card-bottom">
                <p className="pc-card-title">{c.title}</p>
                <ul className="pc-card-features">
                  {c.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="pc-card-feature">{f}</li>
                  ))}
                </ul>
                <div className="pc-card-info-row">
                  <div className="pc-card-info-left">
                    <span className="pc-card-company">{c.company}</span>
                    <span className="pc-card-region-dot">·</span>
                    <span className="pc-card-region">{c.region}</span>
                  </div>
                  <span className="pc-card-phone">{c.phone}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
