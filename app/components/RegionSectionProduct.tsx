"use client";

import { useState } from "react";

/* 인기 상품 TOP 8 — 먼저 크게 노출 */
const hotProducts = [
  { label: "무직자대출", emoji: "🙋" },
  { label: "당일대출",   emoji: "⚡" },
  { label: "소액대출",   emoji: "💸" },
  { label: "월변대출",   emoji: "📅" },
  { label: "직장인대출", emoji: "💼" },
  { label: "저신용자",   emoji: "🔓" },
  { label: "사업자대출", emoji: "🏢" },
  { label: "무방문대출", emoji: "📱" },
];

/* 나머지 상품 (전체 포함) */
const moreProducts = [
  "전체", "여성대출", "개인돈대출", "연체자대출",
  "신용대출", "추가대출", "자동차대출", "부동산대출",
  "24시대출", "급전대출", "일용직대출", "주부대출",
  "프리랜서", "전당포대출", "신불자대출", "대환대출",
  "회생파산", "모바일대출", "카드소지자", "무서류대출",
  "무담보대출", "대학생대출", "비상금대출", "기타대출",
  "일수대출",
];

const allCards = [
  { id: 1, badge: "월변·당일", title: "24시 비대면 월변대출", desc: "상담 후 송금 OK\n신속한 당일 간편 대출", company: "24시전국당일승인대부", region: "전국", color: "#0F2D5E", tags: ["월변대출", "당일대출", "무방문대출", "24시대출"] },
  { id: 2, badge: "무직자·저신용", title: "24시 비대면 당일입금", desc: "무직자·저신용·외국인 OK\n무방문 월변 빠른진행", company: "구조대부", region: "서울", color: "#1A3A6B", tags: ["무직자대출", "당일대출", "저신용자", "무방문대출"] },
  { id: 3, badge: "직장인·비대면", title: "1개월 비대면 월변대출", desc: "직장인·자영업자 OK\n신속 비대면 빠른진행", company: "드림파이낸셜", region: "경기", color: "#122B55", tags: ["직장인대출", "월변대출", "비대면대출"] },
  { id: 4, badge: "소액·당일", title: "24시 비대면 당일대출", desc: "소액 가능·당일송금\n전국 어디서나 OK", company: "미래대부", region: "부산", color: "#0F2D5E", tags: ["당일대출", "소액대출", "24시대출"] },
  { id: 5, badge: "소액·급전", title: "소액 급전 당일송금", desc: "10만~300만원 소액\n신용불량 가능", company: "희망대부", region: "대구", color: "#1A3A6B", tags: ["소액대출", "급전대출", "신불자대출"] },
  { id: 6, badge: "사업자", title: "사업자 비대면대출", desc: "자영업·개인사업자 OK\n매출 기반 한도산정", company: "성장파이낸셜", region: "인천", color: "#122B55", tags: ["사업자대출", "비대면대출"] },
];

type Card = typeof allCards[0];

function CardItem({ card }: { card: Card }) {
  return (
    <div className="card">
      <div className="card-thumb" style={{ background: `linear-gradient(160deg, ${card.color} 0%, #1E4A8A 100%)` }}>
        <span className="card-thumb-badge">{card.badge}</span>
        <span className="card-thumb-co">{card.company}</span>
      </div>
      <div className="card-body">
        <div className="card-title">{card.title}</div>
        <p className="card-desc">
          {card.desc.split("\n").map((line, i) => (
            <span key={i}>{line}{i < card.desc.split("\n").length - 1 && <br />}</span>
          ))}
        </p>
        <div className="card-footer">
          <span className="card-co">{card.company}</span>
          <span className="card-region">{card.region}</span>
        </div>
      </div>
      <div className="card-btns">
        <button className="btn-detail">🔍 상세</button>
        <button className="btn-call" onClick={() => alert("업체 연결 중...")}>📞 통화</button>
      </div>
    </div>
  );
}

export default function RegionSectionProduct() {
  const [activeProduct, setActiveProduct] = useState("전체");
  const [showMore, setShowMore] = useState(false);

  const filteredCards = allCards.filter((card) =>
    activeProduct === "전체" || card.tags.includes(activeProduct)
  );

  const label = activeProduct === "전체" ? "전체 상품" : activeProduct;

  return (
    <>
      <section className="region-section">

        {/* 인기 상품 — 이모지 + 라벨 버튼 */}
        <p className="prod-section-label">🔥 인기 상품</p>
        <div className="prod-hot-grid">
          {hotProducts.map((p) => (
            <button
              key={p.label}
              className={`prod-hot-btn ${activeProduct === p.label ? "active" : ""}`}
              onClick={() => setActiveProduct(p.label)}
            >
              <span className="prod-hot-emoji">{p.emoji}</span>
              <span className="prod-hot-label">{p.label}</span>
            </button>
          ))}
        </div>

        {/* 전체 상품 펼치기 */}
        <button className="prod-more-toggle" onClick={() => setShowMore((v) => !v)}>
          {showMore ? "▲ 접기" : "전체 상품 더보기 ∨"}
        </button>

        {showMore && (
          <div className="region-grid region-grid--product prod-more-grid">
            {moreProducts.map((item) => (
              <button
                key={item}
                className={`region-btn ${activeProduct === item ? "active" : ""}`}
                onClick={() => setActiveProduct(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="cards-section">
        <p className="section-head">
          <span>{label}</span> 업체{filteredCards.length > 0 ? ` ${filteredCards.length}개` : ""}
        </p>
        {filteredCards.length > 0 ? (
          <div className="cards-grid">
            {filteredCards.map((card) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
        ) : (
          <div style={{ padding: "40px 16px", textAlign: "center", background: "#fff" }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔍</div>
            <p style={{ fontSize: "14px", fontWeight: 700, color: "#555" }}>해당 조건의 업체가 없어요</p>
            <p style={{ fontSize: "12.5px", color: "#999", marginTop: "4px" }}>다른 상품을 선택해보세요</p>
          </div>
        )}
      </section>
    </>
  );
}
