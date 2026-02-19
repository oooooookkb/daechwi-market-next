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
      <RegionSection regionOnly />
      <div style={{ height: "10px", background: "#C4C8D4" }}></div>
      <CompanySection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
