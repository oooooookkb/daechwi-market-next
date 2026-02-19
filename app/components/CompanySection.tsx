const companies = [
  { name: "전국무방문 24시 당일입금", tag: "조건없이 빠르게 진행" },
  { name: "전국무방문 24시 당일입금", tag: "무직자·저신용 OK" },
  { name: "24시 비대면 월변대출", tag: "상담 후 송금 OK" },
  { name: "소액 급전 당일송금", tag: "10만~300만원 소액" },
  { name: "사업자 비대면대출", tag: "자영업·개인사업자 OK" },
];

export default function CompanySection() {
  return (
    <section className="company-section">
      <div className="company-header">
        <span className="company-title">전국 대출업체 등록 현황</span>
        <span className="company-count">
          254<span className="company-unit">개</span>
        </span>
      </div>

      <ul className="company-list">
        {companies.map((company, i) => (
          <li className="company-item" key={i}>
            <div className="company-info">
              <span className="company-name">{company.name}</span>
              <span className="company-badge">N</span>
            </div>
            <span className="company-tag">{company.tag}</span>
            <span className="company-arrow">›</span>
          </li>
        ))}
      </ul>

      <button className="company-more">더보기 ∨</button>
    </section>
  );
}
