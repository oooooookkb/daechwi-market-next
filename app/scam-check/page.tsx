"use client";

import { useState } from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";

export default function ScamCheckPage() {
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (phone.length < 10) {
      alert("올바른 전화번호를 입력해주세요.");
      return;
    }
    setChecked(true);
  };

  return (
    <>
      <Header />
      <NavTabs />

      <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          사기번호 조회
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          불법 대출 사기 전화번호를 조회해드려요
        </p>
      </section>

      <div style={{ background: "#fff", padding: "20px 16px" }}>
        <p style={{ fontSize: "13.5px", color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
          📌 의심되는 전화번호를 입력하면 사기 이력을 확인할 수 있어요.
          대출을 빌미로 수수료나 보증금을 요구하는 경우 100% 사기입니다.
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            background: "#F5F6FA",
            border: "1.5px solid #E8EAF0",
            borderRadius: "12px",
            padding: "0 14px",
            marginBottom: "12px",
          }}
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            style={{
              flex: 1,
              height: "50px",
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "15px",
              color: "#111",
              fontFamily: "Noto Sans KR, sans-serif",
            }}
          />
        </div>

        <button
          onClick={handleCheck}
          style={{
            display: "block",
            width: "100%",
            height: "50px",
            background: "linear-gradient(135deg, #0B1D3A, #1A3A6B)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: 800,
            fontFamily: "Noto Sans KR, sans-serif",
            cursor: "pointer",
            letterSpacing: "-0.3px",
          }}
        >
          🔍 사기번호 조회
        </button>

        {checked && (
          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "#F0FFF4",
              border: "1.5px solid #52C41A",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>✅</div>
            <p style={{ fontSize: "15px", fontWeight: 800, color: "#237804", marginBottom: "4px" }}>
              사기 이력 없음
            </p>
            <p style={{ fontSize: "13px", color: "#555" }}>
              {phone} — 등록된 사기 이력이 없습니다.
            </p>
          </div>
        )}
      </div>

      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
