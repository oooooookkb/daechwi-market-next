import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import CardsSection from "../components/CardsSection";

export const metadata: Metadata = {
  title: "상품별 업체찾기 | 대출마켓",
  description: "월변대출, 당일대출, 비대면대출, 소액대출, 사업자대출 등 상품별 대출업체 찾기",
};

const productCategories = [
  { name: "월변대출", desc: "1개월 단위 대출", icon: "📅" },
  { name: "당일대출", desc: "당일 입금 가능", icon: "⚡" },
  { name: "비대면대출", desc: "방문 없이 온라인으로", icon: "💻" },
  { name: "소액대출", desc: "10만~300만원", icon: "💰" },
  { name: "사업자대출", desc: "자영업·개인사업자", icon: "🏪" },
  { name: "무직자대출", desc: "무직자도 가능", icon: "✅" },
  { name: "저신용대출", desc: "신용불량자 가능", icon: "🔓" },
  { name: "담보대출", desc: "부동산 담보 대출", icon: "🏠" },
];

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

      <div style={{ background: "#D0D4DF", padding: "2px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {productCategories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: "#fff",
                padding: "20px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "28px" }}>{cat.icon}</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#111", letterSpacing: "-0.3px" }}>
                  {cat.name}
                </div>
                <div style={{ fontSize: "11.5px", color: "#888", marginTop: "2px" }}>{cat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rt-divider"></div>
      <CardsSection />
      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
