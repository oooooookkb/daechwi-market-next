"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";

const popularKeywords = ["월변대출", "당일대출", "무직자대출", "소액대출", "사업자대출", "비대면대출", "저신용자", "급전대출"];

const allCompanies = [
  { id: 1, name: "24시전국당일승인대부", tags: ["월변대출", "당일대출", "24시대출"], region: "전국" },
  { id: 2, name: "구조대부", tags: ["무직자대출", "당일대출", "저신용자"], region: "서울" },
  { id: 3, name: "드림파이낸셜", tags: ["직장인대출", "월변대출", "비대면대출"], region: "경기" },
  { id: 4, name: "미래대부", tags: ["당일대출", "소액대출", "24시대출"], region: "부산" },
  { id: 5, name: "희망대부", tags: ["소액대출", "급전대출", "신불자대출"], region: "대구" },
  { id: 6, name: "성장파이낸셜", tags: ["사업자대출", "비대면대출"], region: "인천" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = query.trim().length > 0
    ? allCompanies.filter(c =>
        c.name.includes(query) || c.tags.some(t => t.includes(query)) || c.region.includes(query)
      )
    : [];

  return (
    <>
      <Header />
      <NavTabs />

      {/* 검색바 */}
      <div style={{ background: "#112A52", padding: "16px 16px 20px" }}>
        <div style={{
          display: "flex", gap: "8px", alignItems: "center",
          background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "12px", padding: "0 14px",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="업체명, 대출상품, 지역 검색..."
            style={{
              flex: 1, height: "48px", background: "none", border: "none",
              outline: "none", fontSize: "14px", color: "#fff",
              fontFamily: "Noto Sans KR, sans-serif",
            }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: "18px", padding: 0 }}>
              ✕
            </button>
          )}
        </div>
      </div>

      {query.trim().length > 0 ? (
        <div style={{ background: "#fff", minHeight: "300px" }}>
          {results.length > 0 ? (
            <>
              <p style={{ padding: "14px 16px 10px", fontSize: "13px", color: "#888", borderBottom: "1px solid #F2F3F8" }}>
                <strong style={{ color: "#0B1D3A" }}>&#39;{query}&#39;</strong> 검색결과 {results.length}건
              </p>
              {results.map(c => (
                <div key={c.id} onClick={() => router.push(`/recommend/${c.id}`)} style={{
                  display: "flex", alignItems: "center", padding: "14px 16px",
                  borderBottom: "1px solid #F2F3F8", cursor: "pointer", gap: "12px",
                }}>
                  <div style={{
                    width: "40px", height: "40px",
                    background: "linear-gradient(135deg, #0B1D3A, #1A3A6B)",
                    borderRadius: "10px", flexShrink: 0,
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "14px", fontWeight: 800, color: "#111", marginBottom: "4px" }}>{c.name}</p>
                    <p style={{ fontSize: "12px", color: "#999" }}>{c.tags.slice(0, 3).join(" · ")}</p>
                  </div>
                  <span style={{ fontSize: "11px", background: "#0B1D3A", color: "#fff", padding: "3px 8px", borderRadius: "4px", fontWeight: 700 }}>{c.region}</span>
                </div>
              ))}
            </>
          ) : (
            <div style={{ padding: "60px 16px", textAlign: "center" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>😥</div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "6px" }}>검색 결과가 없어요</p>
              <p style={{ fontSize: "13px", color: "#999" }}>다른 검색어를 입력해보세요</p>
            </div>
          )}
        </div>
      ) : (
        <div style={{ background: "#fff" }}>
          {/* 인기 검색어 */}
          <div style={{ padding: "20px 16px 16px" }}>
            <p style={{ fontSize: "13px", fontWeight: 800, color: "#111", marginBottom: "12px", letterSpacing: "-0.3px" }}>🔥 인기 검색어</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {popularKeywords.map((kw, i) => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "7px 13px", background: "#F5F6FA",
                    border: "1px solid #E8EAF0", borderRadius: "20px",
                    fontSize: "13px", fontWeight: 600, color: "#333",
                    cursor: "pointer", fontFamily: "Noto Sans KR, sans-serif",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#4DBFA8", fontWeight: 800, minWidth: "12px" }}>{i + 1}</span>
                  {kw}
                </button>
              ))}
            </div>
          </div>

          <div style={{ height: "8px", background: "#EDEEF4" }} />

          {/* 빠른 카테고리 */}
          <div style={{ padding: "16px 16px 8px" }}>
            <p style={{ fontSize: "13px", fontWeight: 800, color: "#111", marginBottom: "12px", letterSpacing: "-0.3px" }}>📂 카테고리별 검색</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {[
                { label: "지역별", sub: "서울·경기·전국", icon: "📍" },
                { label: "금액별", sub: "소액~고액 대출", icon: "💰" },
                { label: "직업별", sub: "직장인·무직자", icon: "👤" },
                { label: "신용별", sub: "저신용·신불자", icon: "📊" },
              ].map(cat => (
                <div key={cat.label} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  padding: "14px 12px", background: "#F8F9FB",
                  border: "1px solid #ECEEF4", borderRadius: "10px", cursor: "pointer",
                }}>
                  <span style={{ fontSize: "22px" }}>{cat.icon}</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 800, color: "#111", marginBottom: "2px" }}>{cat.label}</p>
                    <p style={{ fontSize: "11px", color: "#999" }}>{cat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "24px 16px 32px", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "#BBB", lineHeight: 1.7 }}>
              업체명, 상품명, 지역을 검색해보세요
            </p>
          </div>
        </div>
      )}

      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
