"use client";

import { useState } from "react";
import Link from "next/link";

const regions = ["전체", "서울", "경기", "인천", "대전", "대구", "부산", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const products = [
  "전체", "직장인대출", "무직자대출", "여성대출", "개인돈대출",
  "연체자대출", "소액대출", "무방문대출", "월변대출",
  "당일대출", "사업자대출", "일수대출", "저신용자",
  "신용대출", "추가대출", "자동차대출", "부동산대출",
  "24시대출", "급전대출", "일용직대출", "주부대출",
  "프리랜서", "전당포대출", "신불자대출", "대환대출",
  "회생파산", "모바일대출", "카드소지자", "무서류대출",
  "무담보대출", "대학생대출", "비상금대출", "기타대출",
];

const allCards = [
  { id: 1, thumb: "24시 비대면\n월변대출", title: "24시 비대면 월변대출", desc: "상담 후 송금 OK\n신속한 당일 간편 대출", company: "24시전국당일승인대..", region: "전국", tags: ["월변대출", "당일대출", "무방문대출", "24시대출"] },
  { id: 2, thumb: "24시 비대면\n당일입금", title: "24시 비대면 당일입금", desc: "무직자·저신용·외국인 OK\n무방문 월변 빠른진행", company: "구조대부", region: "서울", tags: ["무직자대출", "당일대출", "저신용자", "무방문대출"] },
  { id: 3, thumb: "1개월 비대면\n월변대출", title: "1개월 비대면 월변대출", desc: "직장인·자영업자 OK\n신속 비대면 빠른진행", company: "드림파이낸셜", region: "경기", tags: ["직장인대출", "월변대출", "비대면대출"] },
  { id: 4, thumb: "24시 비대면\n당일대출", title: "24시 비대면 당일대출", desc: "소액 가능·당일송금\n전국 어디서나 OK", company: "미래대부", region: "부산", tags: ["당일대출", "소액대출", "24시대출"] },
  { id: 5, thumb: "소액 급전\n당일송금", title: "소액 급전 당일송금", desc: "10만~300만원 소액\n신용불량 가능", company: "희망대부", region: "대구", tags: ["소액대출", "급전대출", "신불자대출"] },
  { id: 6, thumb: "사업자\n비대면대출", title: "사업자 비대면대출", desc: "자영업·개인사업자 OK\n매출 기반 한도산정", company: "성장파이낸셜", region: "인천", tags: ["사업자대출", "비대면대출"] },
];

type Card = typeof allCards[0];

function CardItem({ card }: { card: Card }) {
  return (
    <div className="card">
      <div className="card-thumb">
        {card.thumb.split("\n").map((line, i) => (
          <span key={i}>{line}{i < card.thumb.split("\n").length - 1 && <br />}</span>
        ))}
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

export default function RegionSection({ hideCards = false }: { hideCards?: boolean }) {
  const [activeTab, setActiveTab] = useState<"region" | "product">("region");
  const [activeRegion, setActiveRegion] = useState("전체");
  const [activeProduct, setActiveProduct] = useState("전체");

  const items = activeTab === "region" ? regions : products;
  const activeItem = activeTab === "region" ? activeRegion : activeProduct;
  const setActive = activeTab === "region" ? setActiveRegion : setActiveProduct;
  const linkHref = activeTab === "region" ? "/region" : "/product";

  const filteredCards = allCards.filter((card) => {
    if (activeTab === "region") {
      return activeRegion === "전체" || card.region === activeRegion;
    } else {
      return activeProduct === "전체" || card.tags.includes(activeProduct);
    }
  });

  const label = activeTab === "region"
    ? (activeRegion === "전체" ? "전체 지역" : activeRegion)
    : (activeProduct === "전체" ? "전체 상품" : activeProduct);

  return (
    <>
      <section className="region-section">
        <div className="region-tabs">
          <button
            className={`region-tab ${activeTab === "region" ? "active" : ""}`}
            onClick={() => setActiveTab("region")}
          >
            지역별 업체찾기
          </button>
          <button
            className={`region-tab ${activeTab === "product" ? "active" : ""}`}
            onClick={() => setActiveTab("product")}
          >
            상품별 업체찾기
          </button>
        </div>

        <div className={activeTab === "product" ? "region-grid region-grid--product" : "region-grid"}>
          {items.map((item) => (
            <button
              key={item}
              className={`region-btn ${activeItem === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {hideCards && (
          <Link href={linkHref} className="realtime-more">
            🔍 업체 찾아보기
          </Link>
        )}
      </section>

      {!hideCards && (
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
              <p style={{ fontSize: "12.5px", color: "#999", marginTop: "4px" }}>다른 지역이나 상품을 선택해보세요</p>
            </div>
          )}
        </section>
      )}
    </>
  );
}
