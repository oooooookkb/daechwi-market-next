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
              style={{
                position: "relative",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#1a1f36",
                height: 100,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: 6,
                  bottom: 5,
                  fontSize: 10,
                  fontWeight: 800,
                  padding: "2px 8px",
                  letterSpacing: "-0.2px",
                  color: card.tagColor === "yellow" ? "#1a1f36" : "#fff",
                  background:
                    card.tagColor === "red"    ? "#E8443A" :
                    card.tagColor === "orange" ? "#E8873A" :
                    card.tagColor === "blue"   ? "#3A7BE8" :
                    card.tagColor === "yellow" ? "#F5D23A" :
                    card.tagColor === "purple" ? "#9B59B6" :
                    card.tagColor === "green"  ? "#27AE60" :
                    card.tagColor === "pink"   ? "#E84393" :
                    card.tagColor === "navy"   ? "#2C3E7B" : "#3A7BE8",
                }}
              >
                {card.badge}
              </span>
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
