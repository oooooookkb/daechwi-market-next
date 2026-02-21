"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type FraudResult = {
  totCnt: number;
  voiceCnt: number;
  smsCnt: number;
};

const scamTips = [
  { title: "수수료 요구", desc: "대출 전 수수료·보증금을 요구하면 100% 사기입니다." },
  { title: "통장·카드 요청", desc: "통장이나 카드를 요구하는 경우 즉시 신고하세요." },
  { title: "문자·SNS 대출광고", desc: "문자·카카오톡으로 오는 대출 광고는 불법입니다." },
  { title: "미등록 업체", desc: "금융감독원 등록 여부를 반드시 확인하세요." },
];

const recentSearches = [
  { phone: "010-****-3847", result: "안전", time: "2분 전" },
  { phone: "02-****-1192",  result: "위험", time: "5분 전" },
  { phone: "010-****-5521", result: "안전", time: "8분 전" },
  { phone: "031-****-9903", result: "주의", time: "12분 전" },
  { phone: "010-****-7764", result: "안전", time: "15분 전" },
  { phone: "010-****-2218", result: "안전", time: "21분 전" },
];

export default function PcScamCheckPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FraudResult | null>(null);
  const [error, setError] = useState("");

  /* 카운트업 */
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const t1 = 301406, t2 = 4111, dur = 1500;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = ease(p);
      setCount1(Math.floor(e * t1));
      setCount2(Math.floor(e * t2));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const handleSearch = async () => {
    const digits = phone.replace(/[^0-9]/g, "");
    if (digits.length < 8) {
      setError("전화번호를 정확히 입력해주세요 (8자리 이상)");
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

  const level = result ? (result.totCnt === 0 ? "safe" : result.totCnt <= 2 ? "caution" : "danger") : null;

  return (
    <>
      {/* ── 네이비 상단 ── */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">
          <div className="pc-rp-topbar">
            <h2 className="pc-rp-title">사기번호 조회</h2>
            <div className="pc-rp-breadcrumb">
              <Link href="/">홈</Link>
              <span className="pc-rp-bc-sep">/</span>
              <span className="pc-rp-bc-current">사기번호 조회</span>
            </div>
          </div>

          {/* 검색 영역 */}
          <div className="pc-scam-main">
            {/* 좌측: 검색폼 + 결과 */}
            <div className="pc-scam-left">
              <div className="pc-scam-search-box">
                <p className="pc-scam-desc">경찰청 실시간 사기번호 DB와 연동하여 조회합니다</p>
                <div className="pc-scam-form">
                  <input
                    type="tel"
                    className="pc-scam-input"
                    placeholder="전화번호 입력 (예: 01012345678)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button className="pc-scam-btn" onClick={handleSearch} disabled={loading}>
                    {loading ? "조회중..." : "조회하기"}
                  </button>
                </div>

                {/* 에러 */}
                {error && <div className="pc-scam-alert pc-scam-alert--error">{error}</div>}

                {/* 결과 */}
                {result && level === "safe" && (
                  <div className="pc-scam-alert pc-scam-alert--safe">
                    <span className="pc-scam-alert-icon">✅</span>
                    <div>
                      <strong>안전 — 사기 신고이력 없음</strong>
                      <p>보이스피싱 0건 · 스미싱 0건</p>
                    </div>
                  </div>
                )}
                {result && level === "caution" && (
                  <div className="pc-scam-alert pc-scam-alert--caution">
                    <span className="pc-scam-alert-icon">⚠️</span>
                    <div>
                      <strong>주의 — 신고 {result.totCnt}건</strong>
                      <p>보이스피싱 {result.voiceCnt}건 · 스미싱 {result.smsCnt}건</p>
                    </div>
                  </div>
                )}
                {result && level === "danger" && (
                  <div className="pc-scam-alert pc-scam-alert--danger">
                    <span className="pc-scam-alert-icon">🚨</span>
                    <div>
                      <strong>위험 — 신고 {result.totCnt}건</strong>
                      <p>보이스피싱 {result.voiceCnt}건 · 스미싱 {result.smsCnt}건</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 통계 */}
              <div className="pc-scam-stats-row">
                <div className="pc-scam-stat-box">
                  <span className="pc-scam-stat-label">총 이력조회</span>
                  <span className="pc-scam-stat-num">{count1.toLocaleString()}건</span>
                </div>
                <div className="pc-scam-stat-box">
                  <span className="pc-scam-stat-label">총 사기번호</span>
                  <span className="pc-scam-stat-num">{count2.toLocaleString()}건</span>
                </div>
                <div className="pc-scam-stat-box">
                  <span className="pc-scam-stat-label">데이터 출처</span>
                  <span className="pc-scam-stat-src">경찰청 counterscam112</span>
                </div>
              </div>
            </div>

            {/* 우측: 최근 조회 + 신고안내 */}
            <div className="pc-scam-right">
              <div className="pc-scam-recent">
                <div className="pc-scam-recent-title">최근 조회내역</div>
                {recentSearches.map((s, i) => (
                  <div key={i} className="pc-scam-recent-row">
                    <span className="pc-scam-recent-phone">{s.phone}</span>
                    <span className={`pc-scam-recent-badge pc-scam-recent-badge--${s.result === "안전" ? "safe" : s.result === "주의" ? "caution" : "danger"}`}>
                      {s.result === "안전" ? "✔ " : s.result === "주의" ? "⚠ " : "✕ "}{s.result}
                    </span>
                    <span className="pc-scam-recent-time">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 라이트 하단 ── */}
      <div className="pc-rp-light-area">
        <div className="pc-rp-light-inner">
          <h3 className="pc-rp-section-title">대출 사기 예방 가이드</h3>
          <div className="pc-scam-tips-grid">
            {scamTips.map((tip) => (
              <div key={tip.title} className="pc-scam-tip-card">
                <div className="pc-scam-tip-title">{tip.title}</div>
                <div className="pc-scam-tip-desc">{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
