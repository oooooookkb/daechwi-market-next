import Link from "next/link";

export default function RealtimeHero() {
  return (
    <section style={{ background: "#112A52", padding: "20px 20px 24px", position: "relative" }}>
      <h1 style={{ fontSize: "22px", fontWeight: 900, color: "#fff", letterSpacing: "-0.8px", marginBottom: "6px" }}>
        실시간 대출상담
      </h1>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
        지금 이 순간 올라오는 대출 문의를 확인하세요
      </p>
      <Link href="/chat-request" className="chat-open-btn" style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        borderRadius: "8px",
        padding: "7px 13px",
        fontSize: "12.5px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
        실시간 상담등록
      </Link>
    </section>
  );
}
