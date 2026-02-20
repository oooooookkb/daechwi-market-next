"use client";

import { useRouter } from "next/navigation";

const cards = [
  { id: 1,  badge: "월변·당일",    title: "24시 비대면 월변대출",    desc: "상담 후 당일 송금 OK\n신속한 당일 간편 대출",    company: "24시전국당일승인대부", region: "전국", color: "#0B2347", initial: "24" },
  { id: 2,  badge: "무직자·저신용", title: "무직자·외국인 당일입금",  desc: "무직자·저신용·외국인 OK\n무방문 월변 빠른진행",  company: "구조대부",            region: "서울", color: "#12284A", initial: "구" },
  { id: 3,  badge: "직장인·비대면", title: "직장인 1개월 월변대출",   desc: "직장인·자영업자 OK\n신속 비대면 빠른진행",      company: "드림파이낸셜",         region: "경기", color: "#0D2240", initial: "드" },
  { id: 4,  badge: "소액·당일",    title: "소액 당일대출 전국OK",    desc: "소액 가능·당일송금\n전국 어디서나 OK",          company: "미래대부",            region: "부산", color: "#0B2347", initial: "미" },
  { id: 5,  badge: "신불자·소액",  title: "신용불량 소액 급전",      desc: "10만~300만원 소액\n신용불량·연체 가능",         company: "희망대부",            region: "대구", color: "#122B50", initial: "희" },
  { id: 6,  badge: "사업자",       title: "개인사업자 비대면대출",   desc: "자영업·개인사업자 OK\n매출 기반 한도산정",      company: "성장파이낸셜",         region: "인천", color: "#0D2240", initial: "성" },
  { id: 7,  badge: "여성·주부",    title: "여성·주부 전용 대출",     desc: "주부·무직 여성 OK\n당일 입금 빠른진행",         company: "레이디파이낸셜",       region: "서울", color: "#1A3060", initial: "레" },
  { id: 8,  badge: "대환·저금리",  title: "고금리 대환 전환대출",    desc: "고금리 → 저금리 전환\n원클릭 간편 신청",        company: "클린대부",            region: "경기", color: "#0F2550", initial: "클" },
  { id: 9,  badge: "비상금·즉시",  title: "비상금 10분 즉시입금",    desc: "50만~500만원 비상금\n10분 안에 입금",           company: "빠른머니대부",         region: "전국", color: "#102040", initial: "빠" },
  { id: 10, badge: "프리랜서",     title: "프리랜서 소득증빙 없이",  desc: "소득증빙 불필요\n실적 기반 간편 심사",          company: "자유대부",            region: "전국", color: "#0A1E3C", initial: "자" },
];

export default function CardsSection() {
  const router = useRouter();

  return (
    <section className="cards-section">
      <div className="cards-section-head">
        <div className="cards-section-title-wrap">
          <span className="cards-section-badge">메인 등록업체</span>
          <span className="cards-section-sub">광고문의 →</span>
        </div>
      </div>
      <div className="cards-grid">
        {cards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => router.push(`/recommend/${card.id}`)}
            style={{ cursor: "pointer" }}
          >
            {/* 썸네일: 이니셜 플레이스홀더 */}
            <div
              className="card-thumb"
              style={{ background: `linear-gradient(160deg, ${card.color} 0%, #1E4A8A 100%)` }}
            >
              <span className="card-thumb-badge">{card.badge}</span>
              <div className="card-thumb-initial">{card.initial}</div>
              <span className="card-thumb-co">{card.company}</span>
            </div>

            <div className="card-body">
              <div className="card-title">{card.title}</div>
              <p className="card-desc">
                {card.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.desc.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div className="card-footer">
                <span className="card-co">{card.company}</span>
                <span className="card-region">{card.region}</span>
              </div>
            </div>

            <div className="card-btns">
              <button
                className="btn-detail"
                onClick={(e) => { e.stopPropagation(); router.push(`/recommend/${card.id}`); }}
              >
                상세보기
              </button>
              <a
                href={`tel:${card.id === 1 ? "010-2365-1383" : "010-0000-0000"}`}
                className="btn-call"
                onClick={(e) => e.stopPropagation()}
              >
                📞 통화하기
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
