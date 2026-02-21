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
