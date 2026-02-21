"use client";

import { useState } from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import PcHeader from "../components/PcHeader";
import PcFooter from "../components/PcFooter";
import PcScamCheckPage from "../components/PcScamCheckPage";
import MobileFooter from "../components/MobileFooter";

const scamTips = [
  { icon: "💸", title: "수수료 요구", desc: "대출 전 수수료·보증금을 요구하면 100% 사기" },
  { icon: "🔒", title: "통장·카드 요청", desc: "통장이나 카드를 요구하는 경우 즉시 신고" },
  { icon: "📱", title: "문자·SNS 대출광고", desc: "문자·카카오톡으로 오는 대출 광고는 불법" },
  { icon: "⚠️", title: "미등록 업체", desc: "금감원 등록 여부를 반드시 확인하세요" },
];

type FraudResult = {
  totCnt: number;
  voiceCnt: number;
  smsCnt: number;
};

export default function ScamCheckPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FraudResult | null>(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    const digits = phone.replace(/[^0-9]/g, "");
    if (digits.length < 8) {
      alert("올바른 전화번호를 입력해주세요. (8자리 이상)");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/fraud-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telNum: digits }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "조회 중 오류가 발생했습니다.");
      } else {
        setResult(data);
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPhone("");
    setResult(null);
    setError("");
  };

  const level = result ? (result.totCnt === 0 ? "safe" : result.totCnt <= 2 ? "caution" : "danger") : null;

  return (
    <>
      {/* ── PC 전용 ── */}
      <div className="pc-only-block">
        <PcHeader />
        <PcScamCheckPage />
        <PcFooter />
      </div>

      {/* ── 모바일 전용 ── */}
      <div className="mobile-only-block">
        <Header />
        <NavTabs />

        <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
          <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
            사기번호 조회
          </h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
            경찰청 실시간 사기번호 DB와 연동하여 조회합니다
          </p>
        </section>

        <div style={{ background: "#fff", padding: "20px 16px 24px" }}>
          <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "16px", background: "#FFF8E7", border: "1px solid #FFE58F", borderRadius: "10px", padding: "12px 14px" }}>
            의심되는 전화번호를 입력하면 경찰청 DB에서 사기 이력을 실시간 확인합니다.<br />
            대출을 빌미로 수수료나 보증금을 요구하면 <strong style={{ color: "#CF1322" }}>100% 사기</strong>입니다.
          </p>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", background: "#F5F6FA", border: "1.5px solid #E8EAF0", borderRadius: "12px", padding: "0 14px", marginBottom: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleCheck()} placeholder="010-0000-0000" style={{ flex: 1, height: "50px", background: "none", border: "none", outline: "none", fontSize: "15px", color: "#111" }} />
            {phone && <button onClick={handleReset} style={{ background: "none", border: "none", color: "#CCC", cursor: "pointer", fontSize: "18px", padding: 0 }}>✕</button>}
          </div>

          <button onClick={handleCheck} disabled={loading} style={{ display: "block", width: "100%", height: "50px", background: loading ? "#aaa" : "linear-gradient(135deg, #0B1D3A, #1A3A6B)", color: "#fff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 800, cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? "조회 중..." : "사기번호 조회하기"}
          </button>

          {error && <div style={{ marginTop: "16px", padding: "16px", background: "#FFF1F0", border: "1.5px solid #FFCCC7", borderRadius: "12px", textAlign: "center" }}><p style={{ fontSize: "14px", fontWeight: 700, color: "#CF1322" }}>{error}</p></div>}

          {result && level === "safe" && (
            <div style={{ marginTop: "20px", padding: "20px 16px", background: "#F6FFED", border: "1.5px solid #B7EB8F", borderRadius: "12px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>✅</div>
              <p style={{ fontSize: "16px", fontWeight: 900, color: "#237804", marginBottom: "6px" }}>안전 — 사기 신고이력 없음</p>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}><strong>{phone}</strong><br />보이스피싱 0건 · 스미싱 0건</p>
            </div>
          )}
          {result && level === "caution" && (
            <div style={{ marginTop: "20px", padding: "20px 16px", background: "#FFF7E6", border: "1.5px solid #FFE58F", borderRadius: "12px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>⚠️</div>
              <p style={{ fontSize: "16px", fontWeight: 900, color: "#AD6800", marginBottom: "6px" }}>주의 — 신고 {result.totCnt}건</p>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}><strong>{phone}</strong><br />보이스피싱 {result.voiceCnt}건 · 스미싱 {result.smsCnt}건</p>
            </div>
          )}
          {result && level === "danger" && (
            <div style={{ marginTop: "20px", padding: "20px 16px", background: "#FFF1F0", border: "1.5px solid #FFCCC7", borderRadius: "12px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🚨</div>
              <p style={{ fontSize: "16px", fontWeight: 900, color: "#CF1322", marginBottom: "6px" }}>위험 — 신고 {result.totCnt}건</p>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}><strong>{phone}</strong><br />보이스피싱 {result.voiceCnt}건 · 스미싱 {result.smsCnt}건</p>
            </div>
          )}
        </div>

        <div style={{ height: "8px", background: "#EDEEF4" }} />

        <div style={{ background: "#fff", padding: "20px 16px 24px" }}>
          <p style={{ fontSize: "14px", fontWeight: 800, color: "#111", marginBottom: "14px" }}>대출 사기 예방 가이드</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {scamTips.map(tip => (
              <div key={tip.title} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px", background: "#F8F9FB", border: "1px solid #ECEEF4", borderRadius: "10px" }}>
                <span style={{ fontSize: "22px", flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <p style={{ fontSize: "13.5px", fontWeight: 800, color: "#111", marginBottom: "3px" }}>{tip.title}</p>
                  <p style={{ fontSize: "12.5px", color: "#666", lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "16px", padding: "14px", background: "#FFF1F0", border: "1px solid #FFCCC7", borderRadius: "10px", textAlign: "center" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#CF1322", marginBottom: "4px" }}>불법 대출 신고</p>
            <p style={{ fontSize: "12.5px", color: "#555" }}>금융감독원 <strong>1332</strong> · 경찰청 <strong>112</strong></p>
          </div>
        </div>

        <MobileFooter />
        <div className="spacer"></div>
        <BottomNav />
      </div>
    </>
  );
}
