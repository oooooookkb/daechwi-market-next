"use client";

import { useRouter } from "next/navigation";
import allCards from "../data/cards";

const tagColorMap: Record<string, string> = {
  red:    "#0B2347",
  orange: "#12284A",
  blue:   "#0D2240",
  yellow: "#0B2347",
  purple: "#122B50",
  green:  "#0D2240",
  pink:   "#1a1a3e",
  navy:   "#0a1a30",
};

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
            <div
              className="card-thumb"
              style={{ background: `linear-gradient(160deg, ${tagColorMap[card.tagColor] ?? "#0B2347"} 0%, #1E4A8A 100%)` }}
            >
              <span className="card-thumb-badge">{card.badge}</span>
              <span className="card-thumb-co">{card.company}</span>
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
