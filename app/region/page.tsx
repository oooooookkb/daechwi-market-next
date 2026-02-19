import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import RegionSection from "../components/RegionSection";
import CompanySection from "../components/CompanySection";

export const metadata: Metadata = {
  title: "지역별 업체찾기 | 대출마켓",
  description: "지역별로 대출업체를 찾아보세요. 서울, 경기, 인천, 부산 등 전국 모든 지역 대출업체",
};

export default function RegionPage() {
  return (
    <>
      <Header />
      <NavTabs />
      <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          지역별 업체찾기
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          원하는 지역을 선택하면 해당 지역 업체를 확인할 수 있어요
        </p>
      </section>
      <RegionSection />
      <div style={{ height: "10px", background: "#C4C8D4" }}></div>
      <CompanySection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
