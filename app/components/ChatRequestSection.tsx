"use client";
import { useState } from "react";

const amountOptions = ["50만원 이하", "100만원", "200만원", "300만원", "500만원 이상"];
const jobOptions = ["직장인", "자영업자", "무직자", "주부", "학생"];
const regionOptions = ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "기타"];

export default function ChatRequestSection() {
  const [amount, setAmount] = useState("");
  const [job, setJob] = useState("");
  const [region, setRegion] = useState("");
  const [memo, setMemo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = amount && job && region;

  function handleSubmit() {
    if (!canSubmit) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="chat-success">
        <div className="chat-success-icon">✅</div>
        <p className="chat-success-title">상담 요청이 등록됐어요!</p>
        <p className="chat-success-sub">
          <b>{region}</b> 지역 업체들이 곧 연락드릴 거예요.<br />
          아래 실시간 목록에서 내 문의를 확인할 수 있어요.
        </p>
        <div className="chat-success-tag">
          <span>💰 {amount}</span>
          <span>👤 {job}</span>
          <span>📍 {region}</span>
        </div>
        <button className="chat-reset-btn" onClick={() => { setSubmitted(false); setAmount(""); setJob(""); setRegion(""); setMemo(""); }}>
          다시 요청하기
        </button>
      </div>
    );
  }

  return (
    <div className="chat-request">
      <div className="chat-request-header">
        <span className="chat-live-dot" />
        <span className="chat-request-title">실시간 채팅 상담 요청</span>
      </div>
      <p className="chat-request-sub">내 상황을 선택하면 맞는 업체가 바로 연락해드려요</p>

      {/* 금액 */}
      <div className="chat-field">
        <label className="chat-label">💰 필요 금액</label>
        <div className="chat-chips">
          {amountOptions.map(v => (
            <button
              key={v}
              className={`chat-chip ${amount === v ? "active" : ""}`}
              onClick={() => setAmount(v)}
            >{v}</button>
          ))}
        </div>
      </div>

      {/* 직업 */}
      <div className="chat-field">
        <label className="chat-label">👤 직업</label>
        <div className="chat-chips">
          {jobOptions.map(v => (
            <button
              key={v}
              className={`chat-chip ${job === v ? "active" : ""}`}
              onClick={() => setJob(v)}
            >{v}</button>
          ))}
        </div>
      </div>

      {/* 지역 */}
      <div className="chat-field">
        <label className="chat-label">📍 지역</label>
        <div className="chat-chips">
          {regionOptions.map(v => (
            <button
              key={v}
              className={`chat-chip ${region === v ? "active" : ""}`}
              onClick={() => setRegion(v)}
            >{v}</button>
          ))}
        </div>
      </div>

      {/* 메모 */}
      <div className="chat-field">
        <label className="chat-label">📝 추가 상황 <span className="chat-optional">(선택)</span></label>
        <textarea
          className="chat-memo"
          placeholder="예: 신용등급 낮아도 가능한 곳, 당일 송금 원해요"
          value={memo}
          onChange={e => setMemo(e.target.value)}
          rows={2}
        />
      </div>

      <button
        className={`chat-submit-btn ${canSubmit ? "ready" : ""}`}
        onClick={handleSubmit}
        disabled={!canSubmit}
      >
        💬 채팅 상담 요청하기
      </button>
      {!canSubmit && (
        <p className="chat-hint">금액·직업·지역을 선택해주세요</p>
      )}
    </div>
  );
}
