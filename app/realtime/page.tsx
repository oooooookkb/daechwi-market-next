import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import InfoSlider from "../components/InfoSlider";
import RealtimeSection from "../components/RealtimeSection";
import RealtimeHero from "../components/RealtimeHero";

export const metadata: Metadata = {
  title: "실시간 대출상담 | 대출마켓",
  description: "지금 이 순간 올라오는 실시간 대출 상담 문의를 확인하세요.",
};

export default function RealtimePage() {
  return (
    <>
      <Header />
      <NavTabs />
      <RealtimeHero />
      <InfoSlider />
      <RealtimeSection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
