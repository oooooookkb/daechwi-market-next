"use client";

import { useRouter } from "next/navigation";
import allCards from "../data/cards";

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
      <div className="pc-rp-cards-grid" style={{ padding: "10px 0" }}>
        {allCards.map((card) => (
          <div key={card.id} className="pc-rp-card" onClick={() => router.push(`/recommend/${card.id}`)}>
            <div className="pc-card-top" style={{ backgroundImage: `url(${card.img})` }}>
              <span className={`pc-card-tag tag--${card.tagColor}`}>{card.badge}</span>
            </div>
            <div className="pc-card-bottom">
              <div className="pc-card-title">{card.title}</div>
              <ul className="pc-card-features">
                {card.features.map((f, i) => (
                  <li key={i} className={`pc-card-feat feat-${i}`}>{f}</li>
                ))}
              </ul>
              <div className="pc-card-info-row">
                <div className="pc-card-info-left">
                  <span className="pc-card-company">{card.company}</span>
                  <span className="pc-card-region-row">{card.region}</span>
                </div>
                <a href={`tel:${card.phone}`} className="pc-card-phone" onClick={(e) => e.stopPropagation()}>{card.phone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
