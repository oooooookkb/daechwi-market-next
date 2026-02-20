"use client";

import { useState } from "react";
import Link from "next/link";
import BottomNav from "../components/BottomNav";

const loanTypes = ["소액급전", "월변대출", "무직자대출", "직장인대출", "사업자대출", "자동차담보", "부동산담보"];
const jobOptions = ["직장인", "자영업자", "무직자", "주부", "학생", "프리랜서"];
const amountOptions = ["50만원 이하", "100만원", "200만원", "300만원", "500만원", "500만원 이상"];
const regionOptions = ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];

export default function ChatRequestPage() {
  const [loanType, setLoanType] = useState<string[]>([]);
  const [job, setJob] = useState("");
  const [amount, setAmount] = useState("");
  const [region, setRegion] = useState("");
  const [memo, setMemo] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = loanType.length > 0 && job && amount && region && agreed;

  function toggleLoan(v: string) {
    setLoanType(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  }

  if (submitted) {
    return (
      <div className="cr-page">
        {/* 헤더 */}
        <header className="cr-header">
          <Link href="/realtime" className="cr-back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <span className="cr-header-title">채팅 상담 요청</span>
          <div style={{ width: 40 }} />
        </header>

        <div className="cr-success">
          <div className="cr-success-emoji">🎉</div>
          <p className="cr-success-title">상담 요청이 등록됐어요!</p>
          <p className="cr-success-sub">
            선택하신 조건에 맞는 업체가<br />
            곧 연락드릴 거예요.
          </p>
          <div className="cr-success-tags">
            {loanType.map(t => <span key={t} className="cr-stag">#{t}</span>)}
            <span className="cr-stag">👤 {job}</span>
            <span className="cr-stag">💰 {amount}</span>
            <span className="cr-stag">📍 {region}</span>
          </div>
          <Link href="/realtime" className="cr-go-btn">실시간 문의 확인하기</Link>
          <button className="cr-retry-btn" onClick={() => { setSubmitted(false); setLoanType([]); setJob(""); setAmount(""); setRegion(""); setMemo(""); setAgreed(false); }}>
            다시 요청하기
          </button>
        </div>
        <div className="spacer" />
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="cr-page">
      {/* 헤더 */}
      <header className="cr-header">
        <Link href="/realtime" className="cr-back">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <span className="cr-header-title">채팅 상담 요청</span>
        <div style={{ width: 40 }} />
      </header>

      {/* 히어로 */}
      <div className="cr-hero">
        <span className="cr-live-badge">🔴 실시간 상담 연결 중</span>
        <h1 className="cr-hero-title">내 상황을 알려주면<br />맞는 업체가 바로 연락해요</h1>
        <p className="cr-hero-sub">평균 응답시간 <b>3분 이내</b></p>
      </div>

      {/* 안내 카드 */}
      <div className="cr-notice">
        <span className="cr-notice-icon">💡</span>
        <p className="cr-notice-text">정확한 정보를 입력할수록 조건이 맞는 업체 연결 확률이 높아져요</p>
      </div>

      {/* 대출 분야 */}
      <div className="cr-card">
        <div className="cr-card-head">
          <span className="cr-card-icon">📋</span>
          <span className="cr-card-label">대출 분야</span>
          <span className="cr-badge-req">필수</span>
        </div>
        <div className="cr-chips">
          {loanTypes.map(v => (
            <button key={v} className={`cr-chip ${loanType.includes(v) ? "active" : ""}`} onClick={() => toggleLoan(v)}>
              {loanType.includes(v) && <span className="cr-check">✓</span>} {v}
            </button>
          ))}
        </div>
      </div>

      {/* 직업 */}
      <div className="cr-card">
        <div className="cr-card-head">
          <span className="cr-card-icon">👤</span>
          <span className="cr-card-label">직업</span>
          <span className="cr-badge-req">필수</span>
        </div>
        <div className="cr-chips">
          {jobOptions.map(v => (
            <button key={v} className={`cr-chip ${job === v ? "active" : ""}`} onClick={() => setJob(v)}>
              {job === v && <span className="cr-check">✓</span>} {v}
            </button>
          ))}
        </div>
      </div>

      {/* 금액 */}
      <div className="cr-card">
        <div className="cr-card-head">
          <span className="cr-card-icon">💰</span>
          <span className="cr-card-label">필요 금액</span>
          <span className="cr-badge-req">필수</span>
        </div>
        <div className="cr-chips">
          {amountOptions.map(v => (
            <button key={v} className={`cr-chip ${amount === v ? "active" : ""}`} onClick={() => setAmount(v)}>
              {amount === v && <span className="cr-check">✓</span>} {v}
            </button>
          ))}
        </div>
      </div>

      {/* 지역 */}
      <div className="cr-card">
        <div className="cr-card-head">
          <span className="cr-card-icon">📍</span>
          <span className="cr-card-label">지역</span>
          <span className="cr-badge-req">필수</span>
        </div>
        <div className="cr-chips">
          {regionOptions.map(v => (
            <button key={v} className={`cr-chip ${region === v ? "active" : ""}`} onClick={() => setRegion(v)}>
              {region === v && <span className="cr-check">✓</span>} {v}
            </button>
          ))}
        </div>
      </div>

      {/* 추가 메모 */}
      <div className="cr-card">
        <div className="cr-card-head">
          <span className="cr-card-icon">📝</span>
          <span className="cr-card-label">추가 상황</span>
          <span className="cr-badge-opt">선택</span>
        </div>
        <textarea
          className="cr-memo"
          placeholder="예: 신용등급 낮아도 가능한 곳, 당일 송금 원해요, 상환 기간 유연하게..."
          value={memo}
          onChange={e => setMemo(e.target.value.slice(0, 500))}
          rows={3}
        />
        <p className="cr-memo-count">{memo.length}/500</p>
      </div>

      {/* 약관 동의 */}
      <div className="cr-agree-box">
        <button className={`cr-agree-btn ${agreed ? "checked" : ""}`} onClick={() => setAgreed(v => !v)}>
          <span className="cr-agree-check">{agreed ? "✓" : ""}</span>
          <span className="cr-agree-text">상담 요청 정보 활용에 동의합니다 <span className="cr-agree-req">(필수)</span></span>
        </button>
        <p className="cr-agree-sub">입력하신 정보는 대출 업체 연결 목적으로만 사용됩니다</p>
      </div>

      {/* 등록 버튼 */}
      <div className="cr-submit-bar">
        <button
          className={`cr-submit-btn ${canSubmit ? "ready" : ""}`}
          disabled={!canSubmit}
          onClick={() => setSubmitted(true)}
        >
          {canSubmit ? "💬 채팅 상담 등록하기" : "필수 항목을 모두 선택해주세요"}
        </button>
      </div>

      <div className="spacer" />
      <BottomNav />
    </div>
  );
}
