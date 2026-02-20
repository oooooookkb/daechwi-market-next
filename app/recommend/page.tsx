import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import CardsSection from "../components/CardsSection";

export const metadata: Metadata = {
  title: "오늘의 추천업체 | 대출마켓",
  description: "오늘 가장 인기 있는 대출업체를 추천해드립니다. 빠른 승인, 높은 한도",
};

export default function RecommendPage() {
  return (
    <>
      <Header />
      <NavTabs />
      <section
        style={{
          background: "linear-gradient(135deg, #0B1D3A 0%, #1A3A6B 65%, #1E4D8C 100%)",
          padding: "24px 20px 28px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #C9A84C, transparent)",
          }}
        ></div>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          오늘의 <span style={{ color: "#E8C97A" }}>추천업체</span>
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          높은 승인율 · 빠른 진행 · 검증된 업체
        </p>
      </section>
      <CardsSection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
