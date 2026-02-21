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

      {/* 텍스트 히어로 */}
      <div style={{
        background: "linear-gradient(135deg, #0B1D3A 0%, #1A3A6B 100%)",
        padding: "20px 18px 18px",
        color: "#fff",
      }}>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 6, letterSpacing: "-0.2px" }}>
          사기번호 조회 지원 · 정식 등록업체만 입점
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 900, lineHeight: 1.35, letterSpacing: "-0.5px", marginBottom: 6 }}>
          사기업체는 걸러내고<br />
          <em style={{ color: "#F5A623", fontStyle: "normal" }}>정식 등록업체</em>만 연결합니다
        </h1>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
          사기번호 조회 + 정식업체 인증 — 안전한 대출 비교의 시작
        </p>
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
