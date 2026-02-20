"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PcHeader from "./components/PcHeader";
import PcFooter from "./components/PcFooter";
import Pc3ColSection from "./components/Pc3ColSection";
import PcCommunitySection from "./components/PcCommunitySection";
import HeroSection from "./components/HeroSection";
import CardsSection from "./components/CardsSection";
import RealtimeSection from "./components/RealtimeSection";
import RegionSection from "./components/RegionSection";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const ua = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    if (isMobile) {
      router.replace("/m");
    }
  }, [router]);

  return (
    <>
      {/* PC 전용 헤더 3단 */}
      <PcHeader />

      {/* 히어로 */}
      <HeroSection />

      {/* 히어로 하단 통계 바 */}
      <div className="hero-counter-bar">
        <div className="hero-counter-inner">
          <div className="hero-counter-item">
            <span className="hero-counter-label">📊 누적 대출상담</span>
            <span className="hero-counter-num"><span>15,690</span>억원</span>
          </div>
          <div className="hero-counter-item">
            <span className="hero-counter-label">👥 누적 방문자</span>
            <span className="hero-counter-num"><span>40,075,481</span>명</span>
          </div>
          <div className="hero-counter-item">
            <span className="hero-counter-label">💬 총 실시간 대출문의</span>
            <span className="hero-counter-num"><span>1,118,612</span>건</span>
          </div>
          <div className="hero-counter-item">
            <span className="hero-counter-label">🏢 등록 업체</span>
            <span className="hero-counter-num"><span>254</span>개</span>
          </div>
        </div>
      </div>

      {/* 3열 섹션 */}
      <Pc3ColSection />

      {/* 메인 카드 그리드 */}
      <CardsSection />

      {/* 지역(좌) + 실시간(우) */}
      <div className="pc-region-rt-wrap">
        <div className="pc-rt-side">
          <RealtimeSection />
        </div>
        <div className="pc-region-side">
          <div className="section-divider"></div>
          <RegionSection hideCards />
        </div>
      </div>

      {/* 커뮤니티 섹션 */}
      <PcCommunitySection />

      {/* 푸터 */}
      <PcFooter />
    </>
  );
}
