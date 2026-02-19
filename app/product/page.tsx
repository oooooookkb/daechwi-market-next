import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import RegionSectionProduct from "../components/RegionSectionProduct";

export const metadata: Metadata = {
  title: "상품별 업체찾기 | 대출마켓",
  description: "월변대출, 당일대출, 비대면대출, 소액대출, 사업자대출 등 상품별 대출업체 찾기",
};

export default function ProductPage() {
  return (
    <>
      <Header />
      <NavTabs />
      <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          상품별 업체찾기
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          필요한 대출 상품을 선택하면 맞는 업체를 찾아드려요
        </p>
      </section>
      <RegionSectionProduct />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
