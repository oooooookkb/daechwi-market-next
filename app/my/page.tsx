"use client";

import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import PcHeader from "../components/PcHeader";
import PcFooter from "../components/PcFooter";
import PcMyPage from "../components/PcMyPage";

export default function MyPage() {
  return (
    <>
      {/* ── PC 전용 ── */}
      <div className="pc-only-block">
        <PcHeader />
        <PcMyPage />
        <PcFooter />
      </div>

      {/* ── 모바일 전용 ── */}
      <div className="mobile-only-block">
        <Header />
        <NavTabs />

        <section style={{ background: "#112A52", padding: "24px 20px 28px" }}>
          <div style={{
            width: "56px", height: "56px",
            background: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.3)",
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8C97A" strokeWidth="2" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 style={{ fontSize: "20px", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", marginBottom: "4px" }}>
            로그인이 필요해요
          </h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
            로그인 후 이용 내역을 확인하세요
          </p>
        </section>

        <div style={{ padding: "20px 16px", background: "#fff" }}>
          <button style={{
            display: "block", width: "100%", height: "50px",
            background: "linear-gradient(135deg, #0B1D3A, #1A3A6B)", color: "#fff",
            border: "none", fontSize: "15px", fontWeight: 800, fontFamily: "Noto Sans KR, sans-serif",
            cursor: "pointer", letterSpacing: "-0.3px", marginBottom: "10px",
          }}>
            로그인
          </button>
          <button style={{
            display: "block", width: "100%", height: "50px",
            background: "#fff", color: "#0B1D3A", border: "1.5px solid #D0D4E0",
            fontSize: "15px", fontWeight: 700, fontFamily: "Noto Sans KR, sans-serif",
            cursor: "pointer", letterSpacing: "-0.3px",
          }}>
            회원가입
          </button>
        </div>

        <div style={{ height: "8px", background: "#EDEEF4" }}></div>

        <div style={{ background: "#fff" }}>
          {[
            { icon: "📋", label: "내 상담 내역" },
            { icon: "❤️", label: "찜한 업체" },
            { icon: "✍️", label: "내가 쓴 후기" },
            { icon: "🔔", label: "알림 설정" },
            { icon: "⚙️", label: "고객센터" },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", padding: "16px",
              borderBottom: "1px solid #F2F3F8", cursor: "pointer", gap: "12px",
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#111", flex: 1 }}>{item.label}</span>
              <span style={{ fontSize: "18px", color: "#CCC" }}>&#x203A;</span>
            </div>
          ))}
        </div>

        <div className="spacer"></div>
        <BottomNav />
      </div>
    </>
  );
}
