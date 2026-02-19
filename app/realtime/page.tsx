import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import InfoSlider from "../components/InfoSlider";
import RealtimeSection from "../components/RealtimeSection";

export const metadata: Metadata = {
  title: "실시간 대출상담 | 대출마켓",
  description: "지금 이 순간 올라오는 실시간 대출 상담 문의를 확인하세요.",
};

export default function RealtimePage() {
  return (
    <>
      <Header />
      <NavTabs />
      <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          실시간 대출상담
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          지금 이 순간 올라오는 대출 문의를 확인하세요
        </p>
      </section>
      <InfoSlider />
      <RealtimeSection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
