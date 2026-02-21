"use client";

import { useRouter } from "next/navigation";
import allCards from "../data/cards";

const cards = allCards.slice(0, 6);

export default function MobileCardsSection() {
  const router = useRouter();

  return (
    <section className="cards-section">
      <p className="section-head">
        <span>여러 업체와 <strong>상담</strong>해보세요</span>
      </p>
      <div className="cards-grid">
        {cards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => router.push(`/recommend/${card.id}`)}
            style={{ cursor: "pointer" }}
          >
            {/* PC와 동일하게 실제 이미지 배경 사용 */}
            <div
              className="card-thumb"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className={`pc-card-tag tag--${card.tagColor}`}>{card.badge}</span>
            </div>
            <div className="card-body">
              <div className="card-title">{card.title}</div>
              <p className="card-desc">
                {card.features.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < card.features.length - 1 && <br />}
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
                🔍 상세
              </button>
              <a
                href={`tel:${card.phone}`}
                className="btn-call"
                onClick={(e) => e.stopPropagation()}
              >
                📞 통화
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
