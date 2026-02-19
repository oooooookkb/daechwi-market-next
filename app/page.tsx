import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import BottomNav from "./components/BottomNav";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CardsSection from "./components/CardsSection";
import RealtimeSection from "./components/RealtimeSection";
import RegionSection from "./components/RegionSection";
import CompanySection from "./components/CompanySection";

export default function Home() {
  return (
    <>
      <Header />
      <NavTabs />
      <HeroSection />
      <StatsSection />
      <CardsSection />
      <div className="rt-divider"></div>
      <RealtimeSection />
      <div className="section-divider"></div>
      <RegionSection hideCards />
      <CompanySection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
