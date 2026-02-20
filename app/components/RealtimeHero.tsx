import Link from "next/link";

export default function RealtimeHero() {
  return (
    <section style={{ background: "#112A52", padding: "20px 20px 24px" }}>
      <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
        실시간 대출상담
      </h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
          지금 이 순간 올라오는 대출 문의를 확인하세요
        </p>
        <Link href="/chat-request" className="chat-open-btn" style={{ flexShrink: 0, padding: "7px 14px", fontSize: "12.5px" }}>
          💬 실시간 상담등록
        </Link>
      </div>
    </section>
  );
}
