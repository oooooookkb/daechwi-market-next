import Link from "next/link";

const realtimeData = [
  { query: "무직자도 가능한 곳", count: 11, time: "1분 전", region: "광주", amount: "150만 원" },
  { query: "300만원 급합니다", count: 8, time: "방금 전", region: "대구", amount: "300만 원" },
  { query: "당일 송금 되는 곳 있나요", count: 14, time: "2분 전", region: "서울", amount: "100만 원" },
  { query: "무직자도 가능한 곳", count: 11, time: "1분 전", region: "광주", amount: "150만 원" },
  { query: "300만원 급합니다", count: 8, time: "방금 전", region: "대구", amount: "300만 원" },
  { query: "당일 송금 되는 곳 있나요", count: 14, time: "2분 전", region: "서울", amount: "100만 원" },
  { query: "무직자도 가능한 곳", count: 11, time: "1분 전", region: "광주", amount: "150만 원" },
];

export default function RealtimeSection() {
  return (
    <section className="realtime-section">
      <div className="realtime-header">
        <div className="realtime-title-row">
          <span className="realtime-dot"></span>
          <h2 className="realtime-title">실시간 대출 문의</h2>
        </div>
        <span className="realtime-total">
          총 <strong>1,247</strong>건
        </span>
      </div>

      <ul className="realtime-list">
        {realtimeData.map((item, i) => (
          <li className="realtime-item" key={i}>
            <div className="realtime-left">
              <p className="realtime-query">{item.query}</p>
              <p className="realtime-meta">
                <span className="realtime-cnt">
                  상담가능업체 <b>{item.count}</b>
                </span>
                <span className="realtime-sep">|</span>
                <span className="realtime-time">{item.time}</span>
              </p>
            </div>
            <div className="realtime-right">
              <span className="realtime-region">{item.region}</span>
              <span className="realtime-amount">{item.amount}</span>
            </div>
          </li>
        ))}
      </ul>

      <Link href="/realtime" className="realtime-more">
        🔍 실시간 대출 문의 더보기
      </Link>
    </section>
  );
}
