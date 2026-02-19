import type { Metadata } from "next";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "이용후기 | 대출마켓",
  description: "대출마켓 실제 이용자 후기. 빠른 승인, 친절한 상담 등 생생한 후기를 확인하세요.",
};

const reviews = [
  {
    id: 1,
    author: "이*현",
    rating: 5,
    company: "구조대부",
    content: "당일에 바로 입금해줘서 너무 좋았어요. 상담사도 친절하게 안내해주셨습니다.",
    date: "2025.02.18",
    amount: "200만원",
  },
  {
    id: 2,
    author: "김*수",
    rating: 5,
    company: "드림파이낸셜",
    content: "무직자인데 가능하다고 해서 반신반의했는데 정말 됐네요. 빠른 진행 감사합니다.",
    date: "2025.02.17",
    amount: "100만원",
  },
  {
    id: 3,
    author: "박*민",
    rating: 4,
    company: "희망대부",
    content: "소액이라 걱정했는데 50만원도 가능하더라고요. 이자가 좀 있지만 급할 때 좋네요.",
    date: "2025.02.16",
    amount: "50만원",
  },
  {
    id: 4,
    author: "최*영",
    rating: 5,
    company: "성장파이낸셜",
    content: "자영업자라 대출이 어려웠는데 매출 기반으로 심사해줘서 좋았습니다.",
    date: "2025.02.15",
    amount: "500만원",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <NavTabs />

      <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
          이용후기
        </h1>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          실제 이용자들의 생생한 후기
        </p>
      </section>

      <div style={{ background: "#fff" }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              padding: "16px 16px",
              borderBottom: "1px solid #F2F3F8",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <div>
                <span style={{ fontSize: "13px", fontWeight: 800, color: "#111" }}>{review.author}</span>
                <span style={{ fontSize: "11px", color: "#999", marginLeft: "8px" }}>{review.date}</span>
              </div>
              <div style={{ display: "flex", gap: "2px" }}>
                {"★".repeat(review.rating).split("").map((star, i) => (
                  <span key={i} style={{ color: "#C9A84C", fontSize: "14px" }}>{star}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "11px",
                  background: "#0B1D3A",
                  color: "#E8C97A",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontWeight: 700,
                }}
              >
                {review.company}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  background: "#F0F3FA",
                  color: "#1A3A6B",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  fontWeight: 600,
                }}
              >
                {review.amount}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#444", lineHeight: 1.6 }}>{review.content}</p>
          </div>
        ))}
      </div>

      <div className="spacer"></div>
      <BottomNav />
    </>
  );
}
