"use client";

import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import StatsSection from "../components/StatsSection";
import MobileCardsSection from "../components/MobileCardsSection";
import RealtimeSection from "../components/RealtimeSection";
import RegionSection from "../components/RegionSection";

export default function MobilePage() {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      {/* 모바일 헤더 */}
      <Header />
      <NavTabs />

      {/* 히어로 배너 */}
      <div style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url(/hero-banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0B1D3A",
        padding: "24px 18px 20px",
        color: "#fff",
        overflow: "hidden",
      }}>
        {/* 어두운 오버레이 */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8, 18, 45, 0.35)",
        }} />
        {/* 텍스트 */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 8, letterSpacing: "0.3px", fontWeight: 600 }}>
            ✔ 금융감독원 등록업체만 입점 &nbsp;|&nbsp; ✔ 중개수수료 없음
          </p>
          <h1 style={{ fontSize: 21, fontWeight: 900, lineHeight: 1.4, letterSpacing: "-0.3px", marginBottom: 10, fontFamily: "'Noto Serif KR', serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            믿을 수 있는 업체만<br />
            <em style={{ color: "#F5A623", fontStyle: "normal" }}>직접 검증</em>하여 연결합니다
          </h1>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, borderLeft: "3px solid #F5A623", paddingLeft: 10 }}>
            전국 254개 공식 등록 대부업체 · 중개수수료 없음<br />
            24시간 빠른 상담 연결
          </p>
        </div>
      </div>

      {/* 통계 */}
      <StatsSection />

      {/* 카드 그리드 — 모바일 전용 6개 */}
      <MobileCardsSection />

      {/* 지역별 업체찾기 */}
      <RegionSection />

      {/* 실시간 */}
      <div className="rt-divider"></div>
      <RealtimeSection />

      {/* 하단 여백 + 네비 */}
      <div className="spacer"></div>
      <BottomNav />
    </div>
  );
}
