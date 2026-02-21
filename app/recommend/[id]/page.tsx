"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import BottomNav from "../../components/BottomNav";
import PcHeader from "../../components/PcHeader";
import PcFooter from "../../components/PcFooter";
import PcDetailPage from "../../components/PcDetailPage";
import allCards from "../../data/cards";

const cards = [
  {
    id: 1, badge: "월변·당일", title: "24시 비대면 월변대출",
    subtitle: "무직 직장인 사업자 알바 학생 군인 업소 저신용 OK",
    company: "24시전국당일승인대부", regNo: "2026-인천서구-0003", phone: "010-2365-1383",
    region: "전국 경기 대전 대구 광주", regOrg: "인천 서구 경제정책과",
    office: "인천 서구 완정로 153 803호(왕길동, 이레메디칼센타)",
    monthRate: "상담 후 결정", limit: "상담 후 결정", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["무직자·직장인·사업자 OK", "당일 입금 가능", "24시간 상담 가능", "비대면 간편 진행"],
    extra: "대출마켓을 보고 연락드렸다고 하시면 보다 상담이 쉬워집니다.\n\n무직자 · 직장인 · 개인사업자 전문 대출상담\n\n금융협회 정식등록 대부중개업체로 안전하게 진행합니다.\n\n요즘 갑자기 돈이 필요할 때,\n은행은 조건이 까다롭고, 카드론은 금리가 너무 높죠\n그럴 때 신용점수나 직업 상관없이 빠르게 도와드릴 수 있는 곳이 필요합니다.\n저희는 무직자, 직장인, 개인사업자, 알바, 학생, 군인, 주부,\n저신용자까지 누구나 부담 없이 상담 가능한 정식 등록 중개업체 입니다.\n\n진행가능 대상\n\n무직자 / 알바생 / 프리랜서\n직장인 / 급여소득자\n개인사업자 / 자영업자\n주부 / 군인 / 학생 / 업소 종사자\n저신용자 / 연체 이력자 (일부 조건 가능)",
    warning: "계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을 읽어보시기 바랍니다. 관계법령에 따라 금융상품에 관한 중요 사항을 설명받을 권리가 있습니다. 대출 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 중개수수료를 요구하거나 받는 것은 불법입니다.\n\n금리 연20% 이내 (연체이자율 포함 20% 이내), 취급수수료 없음, 중도상환 수수료 없음, 중개수수료 없음, 추가비용 없음. 상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 : 100만원을 12개월 기간 동안 최대 금리 연20% 적용 시 총 상환금액 1,111,614원. 채무의 조기상환수수료율 등 조기상환조건 없음.",
    color: "#0F2D5E",
  },
  {
    id: 2, badge: "무직자·저신용", title: "24시 비대면 당일입금",
    subtitle: "무직자·저신용·외국인 OK 무방문 월변 빠른진행",
    company: "구조대부", regNo: "2024-서울중구-0012", phone: "010-1234-5678",
    region: "서울 경기 인천", regOrg: "서울 중구 경제진흥과", office: "서울 중구 을지로 100 5층",
    monthRate: "상담 후 결정", limit: "상담 후 결정", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["무직자·저신용·외국인 OK", "당일 입금 가능", "무방문 비대면", "빠른 진행"],
    extra: "대출마켓을 보고 연락주시면 빠르게 도와드리겠습니다.\n\n무직자, 저신용자, 외국인도 상담 가능합니다.",
    warning: "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 중개수수료를 요구하거나 받는 것은 불법입니다.",
    color: "#1A3A6B",
  },
  {
    id: 3, badge: "직장인·비대면", title: "1개월 비대면 월변대출",
    subtitle: "직장인·자영업자 OK 신속 비대면 빠른진행",
    company: "드림파이낸셜", regNo: "2023-경기수원-0045", phone: "010-9876-5432",
    region: "경기 서울 인천", regOrg: "경기 수원시 경제과", office: "경기 수원시 영통구 대학로 55 3층",
    monthRate: "상담 후 결정", limit: "상담 후 결정", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["직장인·자영업자 OK", "신속 비대면 진행", "1개월 단위 월변", "재직증명서 하나로 OK"],
    extra: "직장인과 자영업자를 위한 전문 대출 서비스입니다.",
    warning: "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.", color: "#122B55",
  },
  {
    id: 4, badge: "소액·당일", title: "24시 비대면 당일대출",
    subtitle: "소액 가능·당일송금 전국 어디서나 OK",
    company: "미래대부", regNo: "2025-부산해운대-0007", phone: "010-5555-7777",
    region: "전국", regOrg: "부산 해운대구 경제과", office: "부산 해운대구 해운대로 100 2층",
    monthRate: "상담 후 결정", limit: "상담 후 결정", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["소액 급전 전문", "당일 송금 OK", "전국 어디서나", "10분 내 심사완료"],
    extra: "소액 급전이 필요하신 분들을 위한 전문 서비스입니다.",
    warning: "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.", color: "#0F2D5E",
  },
  {
    id: 5, badge: "소액·급전", title: "소액 급전 당일송금",
    subtitle: "10만~300만원 소액 신용불량 가능",
    company: "희망대부", regNo: "2024-대구중구-0022", phone: "010-3333-4444",
    region: "대구 경북", regOrg: "대구 중구 경제과", office: "대구 중구 중앙대로 100 4층",
    monthRate: "상담 후 결정", limit: "10만~300만원", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["10만~300만원 소액", "신용불량·연체 가능", "무서류 간편 심사", "당일 입금"],
    extra: "신용불량자도 상담 가능한 소액 전문 대부업체입니다.",
    warning: "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.", color: "#1A3A6B",
  },
  {
    id: 6, badge: "사업자", title: "사업자 비대면대출",
    subtitle: "자영업·개인사업자 OK 매출 기반 한도산정",
    company: "성장파이낸셜", regNo: "2023-인천남동-0033", phone: "010-8888-9999",
    region: "인천 경기 서울", regOrg: "인천 남동구 경제과", office: "인천 남동구 구월로 200 5층",
    monthRate: "상담 후 결정", limit: "상담 후 결정", extraFee: "없음",
    repayType: "상담 후 결정", yearRate: "연 20%", overRate: "연 20% 이내",
    earlyFee: "없음", repayPeriod: "상담 후 결정",
    features: ["자영업·사업자 전문", "매출 기반 한도산정", "사업자등록증 하나로", "비대면 간편 진행"],
    extra: "사업자 전문 비대면 대출 서비스입니다.",
    warning: "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.", color: "#122B55",
  },
];

export default function CardDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const card = cards.find(c => c.id === Number(id));

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);

  // 다른 업체 추천 (현재 업체 제외, 최대 3개)
  const relatedCards = allCards.filter(c => c.id !== Number(id)).slice(0, 3);

  if (!card) return <div style={{ padding: 40, textAlign: "center" }}>업체 정보를 찾을 수 없습니다.</div>;

  return (
    <>
      {/* ── PC 전용 ── */}
      <div className="pc-only-block">
        <PcHeader />
        <PcDetailPage card={card} />
        <PcFooter />
      </div>

      {/* ── 모바일 전용 ── */}
      <div className="mobile-only-block">
        <Header />
        <NavTabs />

        <div className="detail-wrap">
          {/* 타이틀 바 — 뒤로가기 + 제목 */}
          <div className="detail-title-bar">
            <button className="detail-back-sm" onClick={() => router.back()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <h1 className="detail-title-text">{card.title}</h1>
          </div>

          {/* 업체정보 — 경쟁사 레이아웃 */}
          <div className="detail-card">
            <div className="detail-card-title">
              <span className="detail-card-title-bar" />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E07B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 3v18"/>
              </svg>
              업체정보
            </div>

            {/* 상단: 등록번호 | 업체명 아이콘 2열 */}
            <div className="detail-info-top">
              <div className="detail-info-top-item">
                {/* 등록증/문서 아이콘 */}
                <span className="detail-info-icon">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                    {/* 문서 몸통 */}
                    <rect x="8" y="4" width="28" height="36" rx="3" fill="#F0F2F8" stroke="#D0D4E8" strokeWidth="1.5"/>
                    {/* 상단 컬러 탭 */}
                    <rect x="8" y="4" width="28" height="8" rx="3" fill="#E07B00" opacity="0.15"/>
                    <rect x="8" y="8" width="28" height="4" fill="#E07B00" opacity="0.15"/>
                    {/* 줄 */}
                    <line x1="14" y1="18" x2="30" y2="18" stroke="#B0B8D0" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="14" y1="23" x2="30" y2="23" stroke="#B0B8D0" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="14" y1="28" x2="24" y2="28" stroke="#B0B8D0" strokeWidth="2" strokeLinecap="round"/>
                    {/* 도장 원 */}
                    <circle cx="34" cy="34" r="8" fill="#E07B00"/>
                    <text x="34" y="38" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">인</text>
                  </svg>
                </span>
                <span className="detail-info-top-label">등록번호</span>
                <span className="detail-info-top-value">{card.regNo}</span>
              </div>
              <div className="detail-info-top-divider" />
              <div className="detail-info-top-item">
                {/* 빌딩 아이콘 */}
                <span className="detail-info-icon">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                    {/* 큰 건물 */}
                    <rect x="6" y="14" width="22" height="30" rx="1" fill="#E8ECF8" stroke="#C8D0E8" strokeWidth="1.5"/>
                    {/* 작은 건물(우측) */}
                    <rect x="26" y="22" width="16" height="22" rx="1" fill="#D8DFEF" stroke="#C8D0E8" strokeWidth="1.5"/>
                    {/* 큰 건물 창문들 */}
                    <rect x="10" y="19" width="4" height="4" rx="0.5" fill="#E07B00" opacity="0.7"/>
                    <rect x="18" y="19" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    <rect x="10" y="27" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    <rect x="18" y="27" width="4" height="4" rx="0.5" fill="#E07B00" opacity="0.7"/>
                    <rect x="10" y="35" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    <rect x="18" y="35" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    {/* 작은 건물 창문 */}
                    <rect x="29" y="26" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    <rect x="35" y="26" width="4" height="4" rx="0.5" fill="#E07B00" opacity="0.7"/>
                    <rect x="29" y="34" width="4" height="4" rx="0.5" fill="#E07B00" opacity="0.7"/>
                    <rect x="35" y="34" width="4" height="4" rx="0.5" fill="#9EB0D8"/>
                    {/* 출입구 */}
                    <rect x="14" y="37" width="6" height="7" rx="0.5" fill="#C8D0E8"/>
                  </svg>
                </span>
                <span className="detail-info-top-label">업체명</span>
                <span className="detail-info-top-value fw">{card.company}</span>
              </div>
            </div>

            {/* 하단: 등록기관·영업소 테이블 */}
            <div className="detail-table">
              <div className="detail-row"><span className="detail-label">등록기관</span><span className="detail-value">{card.regOrg}</span></div>
              <div className="detail-row"><span className="detail-label">영업소</span><span className="detail-value">{card.office}</span></div>
            </div>

            {/* 연락처 + 통화하기 가로 배치 */}
            <div className="detail-phone-row">
              <span className="detail-phone-label">연락처 {card.phone}</span>
              <a href={`tel:${card.phone}`} className="detail-phone-call-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                통화하기
              </a>
            </div>
          </div>

          {/* 유틸리티 바 — 이자계산기 | 등록대부업체 통합조회 */}
          <div className="detail-util-bar">
            <a href="https://www.fss.or.kr/fss/main/sub1Page.do?menuNo=200218" target="_blank" rel="noopener noreferrer" className="detail-util-item">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E07B00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="7" y1="7" x2="17" y2="7"/>
                <rect x="7" y="11" width="2" height="2"/><rect x="11" y="11" width="2" height="2"/><rect x="15" y="11" width="2" height="2"/>
                <rect x="7" y="15" width="2" height="2"/><rect x="11" y="15" width="2" height="2"/><rect x="15" y="15" width="2" height="2"/>
              </svg>
              <span className="detail-util-text">대출상환금<br />이자계산기</span>
            </a>
            <div className="detail-util-divider" />
            <a href="https://www.fss.or.kr/fss/main/sub1Page.do?menuNo=200218" target="_blank" rel="noopener noreferrer" className="detail-util-item">
              <span className="detail-util-icon-stack">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="8" ry="3"/>
                  <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
                  <path d="M4 10v4c0 1.66 3.58 3 8 3"/>
                </svg>
                <svg className="detail-util-search" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E07B00" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="10" cy="10" r="6"/><line x1="14.5" y1="14.5" x2="19" y2="19"/>
                </svg>
              </span>
              <span className="detail-util-text">등록대부업체<br />통합조회</span>
            </a>
          </div>

          {/* 상품정보 — 2쌍 4열 테이블 */}
          <div className="detail-card">
            <div className="detail-card-title">
              <span className="detail-card-title-bar" />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E07B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              상품정보
            </div>
            <div className="detail-product-table">
              {[
                [{ label: "월금리", value: card.monthRate },    { label: "연금리",       value: card.yearRate }],
                [{ label: "대출한도", value: card.limit },      { label: "연체금리",     value: card.overRate }],
                [{ label: "추가비용", value: card.extraFee },   { label: "조기상환수수료", value: card.earlyFee }],
                [{ label: "상환방식", value: card.repayType },  { label: "상환기간",     value: card.repayPeriod }],
                [{ label: "지역",    value: card.region },      { label: "",            value: "" }],
              ].map((pair, i) => (
                <div className="detail-product-row" key={i}>
                  <div className="detail-product-cell">
                    <span className="detail-product-label">{pair[0].label}</span>
                    <span className="detail-product-value">{pair[0].value}</span>
                  </div>
                  {pair[1].label && (
                    <>
                      <div className="detail-product-divider" />
                      <div className="detail-product-cell">
                        <span className="detail-product-label">{pair[1].label}</span>
                        <span className="detail-product-value">{pair[1].value}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 업체정보 상세보기 | 대출시 주의사항 버튼 */}
          <div className="detail-expand-btns">
            <button className="detail-expand-btn" onClick={() => setShowInfoModal(true)}>업체정보 상세보기 <span className="detail-expand-plus">+</span></button>
            <button className="detail-expand-btn" onClick={() => setShowWarningModal(true)}>대출시 주의사항 <span className="detail-expand-plus">+</span></button>
          </div>

          {/* 업체정보 상세보기 모달 */}
          {showInfoModal && (
            <div className="modal-overlay" onClick={() => setShowInfoModal(false)}>
              <div className="modal-sheet" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <span className="modal-title">업체정보 상세보기</span>
                  <button className="modal-close" onClick={() => setShowInfoModal(false)}>✕</button>
                </div>
                <div className="modal-body">
                  <div className="modal-table">
                    <div className="modal-row">
                      <span className="modal-label">업체명</span>
                      <span className="modal-value">{card.company}</span>
                    </div>
                    <div className="modal-row">
                      <span className="modal-label">업체 연락처</span>
                      <span className="modal-value modal-value-phone">
                        {card.phone}
                        <a href={`tel:${card.phone}`} className="modal-call-btn">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                          통화
                        </a>
                      </span>
                    </div>
                    <div className="modal-row">
                      <span className="modal-label">등록번호</span>
                      <span className="modal-value">{card.regNo}</span>
                    </div>
                    <div className="modal-row">
                      <span className="modal-label">영업소</span>
                      <span className="modal-value">{card.office}</span>
                    </div>
                    <div className="modal-row">
                      <span className="modal-label">등록기관</span>
                      <span className="modal-value">{card.regOrg}</span>
                    </div>
                  </div>
                  <p className="modal-notice">📢 대출마켓을 보고 연락드렸다고 말씀해주세요</p>
                </div>
                <button className="modal-close-btn" onClick={() => setShowInfoModal(false)}>창닫기</button>
              </div>
            </div>
          )}

          {/* 대출시 주의사항 모달 */}
          {showWarningModal && (
            <div className="modal-overlay" onClick={() => setShowWarningModal(false)}>
              <div className="modal-sheet" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <span className="modal-title">대출거래 시 주의사항</span>
                  <button className="modal-close" onClick={() => setShowWarningModal(false)}>✕</button>
                </div>
                <div className="modal-body">
                  <ul className="modal-warning-list">
                    {[
                      { text: "대출 상담시 본인이 대출한 업체를 잊지않기 위해 정확히 해당업체 상호명, 연락처 등 꼭 메모·저장 하시기 바랍니다.", sub: "(업체상호명, 연락처 등 대출마켓 홈페이지에서 검색 가능)", highlight: false },
                      { text: "대출을 목적으로 첫거래 고금리 대출(급전)을 강요하고 기타 수수료를 입금 후 월변등으로 한도를 높여주는 조건은 사기행위입니다.", sub: "", highlight: true },
                      { text: "대출마켓 담당자를 사칭하여 대출상담 및 대출을 권유하는 경우 절대 거래 응하지 마시기 바랍니다.", sub: "(대출마켓은 직접적인 대출 및 알선/중개를 하지 않습니다.)", highlight: false },
                      { text: "대면 미팅 명목으로 고객에게 출장비(거마비) 요구는 사기행위입니다.", sub: "", highlight: true },
                      { text: "대출 알선 또는 대출 처리 비용 (공증비) 명목으로 고객에게 수수료, 선이자, 선입금 요구는 사기행위입니다.", sub: "", highlight: true },
                      { text: "법적 최대 연 이자율은 20% 입니다. (추가, 수수료 비용 포함) 이자율 초과하여 수취 및 요구는 사기행위입니다.", sub: "", highlight: false },
                      { text: "위임장, 인감증명서, 신분증 등 개인 정보가 담긴 중요 서류를 보낼 때는 업체 정보를 (상호,연락처) 다시 한번 확인하고 신중을 기해야 합니다.", sub: "", highlight: false },
                      { text: "공인인증서 (ID, 비밀번호, OTP) 정보 요구시 절대 응하지 마시기 바랍니다.", sub: "", highlight: false },
                      { text: "휴대폰, 통장, 신용카드, 체크카드 매매 혹은 양도 요구시 절대 응하지 마시기 바랍니다.", sub: "(대포통장, 대포폰 사기범행에 이용 될 수 있습니다.)", highlight: true },
                      { text: "대출채권 추심자가 소속과 성명을 밝히지 않거나, 확인되지 않는 채권에 대해 일방적 변제 요구 시 절대 응하지 마시기 바랍니다.", sub: "", highlight: false },
                      { text: "각종 연락처, SNS(텔레그램, 카톡 등)로 접근하여 얼굴 및 신체 사진을 요구하는 경우 절대 응하지 마시길 바랍니다.", sub: "", highlight: true },
                    ].map((item, i) => (
                      <li key={i} className="modal-warning-item">
                        <span className="modal-warning-num">{i + 1}</span>
                        <span className={`modal-warning-text${item.highlight ? " highlight" : ""}`}>
                          {item.text}
                          {item.sub && <span className="modal-warning-sub"><br />{item.sub}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/scam-check" className="modal-scam-btn">사칭및사기피해번호더보기 »</a>
                <button className="modal-close-btn" onClick={() => setShowWarningModal(false)}>창닫기</button>
              </div>
            </div>
          )}

          {/* 부가설명 */}
          <div className="detail-card">
            <div className="detail-card-title">
              <span className="detail-card-title-bar" />
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#E07B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              부가설명
            </div>
            <p className="detail-extra">{card.extra.split("\n").map((line, i) => (<span key={i}>{line}<br /></span>))}</p>
          </div>

          {/* 주의사항 */}
          <div className="detail-warning-box">
            <p className="detail-warning-title">⚠ 주의사항</p>
            <p className="detail-warning-text">{card.warning.split("\n").map((line, i) => (<span key={i}>{line}<br /></span>))}</p>
          </div>

          {/* 다른 업체 추천 */}
          <div className="detail-related">
            <div className="detail-related-title">🔍 다른 업체도 비교해보세요</div>
            <div className="detail-related-list">
              {relatedCards.map((rc) => (
                <div
                  key={rc.id}
                  className="detail-related-item"
                  onClick={() => router.push(`/recommend/${rc.id}`)}
                >
                  <div className="detail-related-badge">{rc.badge}</div>
                  <div className="detail-related-info">
                    <p className="detail-related-company">{rc.company}</p>
                    <p className="detail-related-name">{rc.title}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* 저작권 */}
          <div className="detail-copyright">
            <div className="detail-copyright-logo"><div className="detail-copyright-logo-icon">대</div>대출마켓</div>
            <p className="detail-copyright-text">본 정보는 <strong>[{card.company}]</strong>에 등록한 자료를 바탕으로 대출마켓에서 편집한 것입니다. 대출마켓 동의없이 무단전재 또는 재배포, 재가공 할 수 없습니다.</p>
            <p className="detail-copyright-mark">[저작권 대출마켓. 무단전재·재배포 금지]</p>
          </div>

          <div className="detail-footer">
            <button className="detail-list-btn" onClick={() => router.push("/recommend")}>목록으로</button>
          </div>
        </div>

        {/* 하단 고정 CTA 바 (대출나라 벤치마킹) */}
        <div className="detail-sticky-bar">
          <a href={`sms:${card.phone}`} className="detail-sticky-sms">💬 문자상담</a>
          <a href={`tel:${card.phone}`} className="detail-sticky-call">📞 전화상담</a>
        </div>

        <div className="spacer" style={{ height: 80 }} />
        <BottomNav />
      </div>
    </>
  );
}
