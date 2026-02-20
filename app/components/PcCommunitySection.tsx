import Link from "next/link";

const tips = [
  { id: 1, tag: "금리안내", title: "2025년 대부업 법정최고금리 20% 완전정복", date: "2025.02.18", views: 3412 },
  { id: 2, tag: "대출팁",  title: "무직자도 받을 수 있는 대출 종류 총정리", date: "2025.02.15", views: 5821 },
  { id: 3, tag: "주의사항", title: "불법 대부업체 구별하는 5가지 핵심 방법", date: "2025.02.12", views: 7203 },
  { id: 4, tag: "절약팁",  title: "고금리 대출 대환 시 꼭 확인해야 할 것들", date: "2025.02.10", views: 2918 },
  { id: 5, tag: "신용관리", title: "신용점수 올리는 실전 방법 — 3개월 만에 50점 상승", date: "2025.02.07", views: 4155 },
];

const news = [
  { id: 1, tag: "금융뉴스", title: "금융위, 대부업 등록요건 강화 방침 발표", date: "2025.02.19", src: "금융위원회" },
  { id: 2, tag: "정책",    title: "서민금융진흥원, 소액대출 한도 확대 검토", date: "2025.02.17", src: "서민금융진흥원" },
  { id: 3, tag: "시장동향", title: "1분기 가계대출 증가세 둔화…금리 인하 기대감 반영", date: "2025.02.14", src: "한국은행" },
  { id: 4, tag: "금융뉴스", title: "무등록 불법 대부업체 적발 건수 전년 대비 23% 증가", date: "2025.02.11", src: "금감원" },
  { id: 5, tag: "정책",    title: "최저신용자 특례보증 대출 대상 확대 — 신청방법은?", date: "2025.02.08", src: "신용보증재단" },
];

const qnas = [
  { id: 1, tag: "Q&A",    title: "무직자인데 월변대출 가능한가요?", replies: 12, date: "2025.02.19" },
  { id: 2, tag: "Q&A",    title: "신용점수 600점대인데 어떤 대출이 가능할까요?", replies: 8,  date: "2025.02.18" },
  { id: 3, tag: "Q&A",    title: "대출 이용 후 사기번호 조회는 어디서 하나요?", replies: 5,  date: "2025.02.17" },
  { id: 4, tag: "Q&A",    title: "외국인도 소액대출 신청 가능한 업체가 있나요?", replies: 9,  date: "2025.02.16" },
  { id: 5, tag: "Q&A",    title: "당일대출 신청 시 필요한 서류는 무엇인가요?", replies: 14, date: "2025.02.15" },
];

function TagBadge({ text }: { text: string }) {
  return <span className="pc-comm-tag">{text}</span>;
}

export default function PcCommunitySection() {
  return (
    <section className="pc-comm-wrap">
      <div className="pc-inner">
        <div className="pc-comm-inner">

          {/* ① 금융 TIP */}
          <div className="pc-comm-col">
            <div className="pc-comm-head">
              <span className="pc-comm-head-icon">💡</span>
              <span className="pc-comm-head-title">금융 TIP</span>
              <Link href="/community/tip" className="pc-comm-head-more">더보기 +</Link>
            </div>
            <ul className="pc-comm-list">
              {tips.map((item) => (
                <li key={item.id} className="pc-comm-item">
                  <Link href={`/community/tip/${item.id}`} className="pc-comm-item-link">
                    <TagBadge text={item.tag} />
                    <span className="pc-comm-item-title">{item.title}</span>
                    <span className="pc-comm-item-meta">{item.date} · 조회 {item.views.toLocaleString()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ② 금융 뉴스 */}
          <div className="pc-comm-col">
            <div className="pc-comm-head">
              <span className="pc-comm-head-icon">📰</span>
              <span className="pc-comm-head-title">금융 뉴스</span>
              <Link href="/community/news" className="pc-comm-head-more">더보기 +</Link>
            </div>
            <ul className="pc-comm-list">
              {news.map((item) => (
                <li key={item.id} className="pc-comm-item">
                  <Link href={`/community/news/${item.id}`} className="pc-comm-item-link">
                    <TagBadge text={item.tag} />
                    <span className="pc-comm-item-title">{item.title}</span>
                    <span className="pc-comm-item-meta">{item.date} · {item.src}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ③ Q&A */}
          <div className="pc-comm-col">
            <div className="pc-comm-head">
              <span className="pc-comm-head-icon">💬</span>
              <span className="pc-comm-head-title">Q&amp;A</span>
              <Link href="/community/qna" className="pc-comm-head-more">더보기 +</Link>
            </div>
            <ul className="pc-comm-list">
              {qnas.map((item) => (
                <li key={item.id} className="pc-comm-item">
                  <Link href={`/community/qna/${item.id}`} className="pc-comm-item-link">
                    <TagBadge text={item.tag} />
                    <span className="pc-comm-item-title">{item.title}</span>
                    <span className="pc-comm-item-meta">{item.date} · 답변 {item.replies}개</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
