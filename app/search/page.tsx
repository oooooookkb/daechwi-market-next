"use client";

import { useState } from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <NavTabs />

      <div
        style={{
          background: "#112A52",
          padding: "16px 16px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "0 14px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="업체명, 대출상품 검색..."
            style={{
              flex: 1,
              height: "48px",
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "#fff",
              fontFamily: "Noto Sans KR, sans-serif",
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: "20px 16px",
          background: "#fff",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <div style={{ fontSize: "40px" }}>🔍</div>
        <p style={{ fontSize: "15px", fontWeight: 700, color: "#111", letterSpacing: "-0.3px" }}>
          업체를 검색해보세요
        </p>
        <p style={{ fontSize: "13px", color: "#999", textAlign: "center", lineHeight: 1.6 }}>
          업체명이나 대출 상품명을 입력하면<br />
          맞는 업체를 찾아드려요
        </p>
      </div>

      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
