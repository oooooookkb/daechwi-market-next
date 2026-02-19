"use client";

const cards = [
  {
    id: 1,
    thumb: "24시 비대면\n월변대출",
    title: "24시 비대면 월변대출",
    desc: "상담 후 송금 OK\n신속한 당일 간편 대출",
    company: "24시전국당일승인대..",
    region: "전국",
  },
  {
    id: 2,
    thumb: "24시 비대면\n당일입금",
    title: "24시 비대면 당일입금",
    desc: "무직자·저신용·외국인 OK\n무방문 월변 빠른진행",
    company: "구조대부",
    region: "전국",
  },
  {
    id: 3,
    thumb: "1개월 비대면\n월변대출",
    title: "1개월 비대면 월변대출",
    desc: "직장인·자영업자 OK\n신속 비대면 빠른진행",
    company: "드림파이낸셜",
    region: "전국",
  },
  {
    id: 4,
    thumb: "24시 비대면\n당일대출",
    title: "24시 비대면 당일대출",
    desc: "소액 가능·당일송금\n전국 어디서나 OK",
    company: "미래대부",
    region: "전국",
  },
  {
    id: 5,
    thumb: "소액 급전\n당일송금",
    title: "소액 급전 당일송금",
    desc: "10만~300만원 소액\n신용불량 가능",
    company: "희망대부",
    region: "전국",
  },
  {
    id: 6,
    thumb: "사업자\n비대면대출",
    title: "사업자 비대면대출",
    desc: "자영업·개인사업자 OK\n매출 기반 한도산정",
    company: "성장파이낸셜",
    region: "전국",
  },
];

export default function CardsSection() {
  return (
    <section className="cards-section">
      <p className="section-head">
        여러 업체와 <em>상담</em>해보세요
      </p>
      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-thumb">
              {card.thumb.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < card.thumb.split("\n").length - 1 && <br />}
                </span>
              ))}
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
              <button className="btn-detail">🔍 상세</button>
              <button
                className="btn-call"
                onClick={() => alert("업체 연결 중...")}
              >
                📞 통화
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
