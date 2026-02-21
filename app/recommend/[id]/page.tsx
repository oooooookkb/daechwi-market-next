"use client";

import { useParams, useRouter } from "next/navigation";
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
          {/* 히어로 배너 */}
          <div className="detail-hero" style={{ background: `linear-gradient(160deg, ${card.color} 0%, #1E4A8A 100%)` }}>
            <button className="detail-back" onClick={() => router.back()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <div className="detail-hero-inner">
              <span className="detail-hero-badge">{card.badge}</span>
              <h1 className="detail-hero-title">{card.title}</h1>
              <p className="detail-hero-sub">{card.subtitle}</p>
            </div>
          </div>

          {/* 업체정보 */}
          <div className="detail-card">
            <div className="detail-card-title"><span className="detail-card-title-bar" />업체정보</div>
            <div className="detail-table">
              <div className="detail-row"><span className="detail-label">업체명</span><span className="detail-value fw">{card.company}</span></div>
              <div className="detail-row"><span className="detail-label">등록번호</span><span className="detail-value">{card.regNo}</span></div>
              <div className="detail-row align-top">
                <span className="detail-label">연락처</span>
                <div className="detail-contact">
                  <span className="detail-phone">{card.phone}</span>
                  <div className="detail-contact-btns">
                    <a href={`tel:${card.phone}`} className="detail-btn-call">📞 전화하기</a>
                    <a href={`sms:${card.phone}`} className="detail-btn-sms">💬 문자하기</a>
                  </div>
                  <p className="detail-contact-tip">💡 &quot;대출마켓&quot;을 보고 연락드렸다고 하시면 상담이 빠르고 쉬워집니다.</p>
                </div>
              </div>
              <div className="detail-row"><span className="detail-label">등록기관</span><span className="detail-value">{card.regOrg}</span></div>
              <div className="detail-row"><span className="detail-label">영업소</span><span className="detail-value">{card.office}</span></div>
            </div>
          </div>

          {/* 상품 특징 아이콘 카드 */}
          <div className="detail-card">
            <div className="detail-card-title"><span className="detail-card-title-bar" />주요 특징</div>
            <div className="detail-features-grid">
              {(card.features || []).map((feat, i) => {
                const icons = ["✅", "⚡", "🏦", "📋"];
                return (
                  <div className="detail-feature-item" key={i}>
                    <span className="detail-feature-icon">{icons[i % icons.length]}</span>
                    <span className="detail-feature-text">{feat}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 상품정보 */}
          <div className="detail-card">
            <div className="detail-card-title"><span className="detail-card-title-bar" />상품정보</div>
            <div className="detail-table">
              {[
                { label: "월금리", value: card.monthRate }, { label: "대출한도", value: card.limit },
                { label: "추가비용", value: card.extraFee }, { label: "상환방식", value: card.repayType },
                { label: "지역", value: card.region }, { label: "연금리", value: card.yearRate },
                { label: "연체금리", value: card.overRate }, { label: "조기상환수수료", value: card.earlyFee },
                { label: "상환기간", value: card.repayPeriod },
              ].map((row, i) => (
                <div className="detail-row" key={i}><span className="detail-label">{row.label}</span><span className="detail-value">{row.value}</span></div>
              ))}
            </div>
          </div>

          {/* 부가설명 */}
          <div className="detail-card">
            <div className="detail-card-title"><span className="detail-card-title-bar" />부가설명</div>
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
