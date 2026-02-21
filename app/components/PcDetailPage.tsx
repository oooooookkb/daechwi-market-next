"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface CardData {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  company: string;
  regNo: string;
  phone: string;
  region: string;
  regOrg: string;
  office: string;
  monthRate: string;
  limit: string;
  extraFee: string;
  repayType: string;
  yearRate: string;
  overRate: string;
  earlyFee: string;
  repayPeriod: string;
  extra: string;
  warning: string;
  color: string;
}

export default function PcDetailPage({ card }: { card: CardData }) {
  const router = useRouter();

  return (
    <>
      {/* 네이비 타이틀 */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">{card.company}</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/" className="pc-rp-bc-home">HOME</Link>
              <span className="pc-rp-bc-sep">/</span>
              <Link href="/recommend" className="pc-rp-bc-home">오늘의 추천업체</Link>
              <span className="pc-rp-bc-sep">/</span>
              <span className="pc-rp-bc-current">{card.company}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="pc-inner" style={{ paddingTop: 24, paddingBottom: 40 }}>
        {/* 히어로 배너 */}
        <div className="pc-dtl-hero" style={{ background: `linear-gradient(160deg, ${card.color} 0%, #1E4A8A 100%)` }}>
          <span className="pc-dtl-badge">{card.badge}</span>
          <h2 className="pc-dtl-title">{card.title}</h2>
          <p className="pc-dtl-sub">{card.subtitle}</p>
        </div>

        {/* 2컬럼: 좌측 정보 / 우측 연락처 */}
        <div className="pc-dtl-body">
          <div className="pc-dtl-left">
            {/* 업체정보 */}
            <div className="pc-dtl-card">
              <h3 className="pc-dtl-card-title">업체정보</h3>
              <table className="pc-dtl-table">
                <tbody>
                  <tr><td className="pc-dtl-label">업체명</td><td className="pc-dtl-value pc-dtl-fw">{card.company}</td></tr>
                  <tr><td className="pc-dtl-label">등록번호</td><td className="pc-dtl-value">{card.regNo}</td></tr>
                  <tr><td className="pc-dtl-label">연락처</td><td className="pc-dtl-value">{card.phone}</td></tr>
                  <tr><td className="pc-dtl-label">지역</td><td className="pc-dtl-value">{card.region}</td></tr>
                  <tr><td className="pc-dtl-label">등록기관</td><td className="pc-dtl-value">{card.regOrg}</td></tr>
                  <tr><td className="pc-dtl-label">영업소</td><td className="pc-dtl-value">{card.office}</td></tr>
                </tbody>
              </table>
            </div>

            {/* 상품정보 */}
            <div className="pc-dtl-card">
              <h3 className="pc-dtl-card-title">상품정보</h3>
              <table className="pc-dtl-table">
                <tbody>
                  {[
                    { label: "월금리", value: card.monthRate },
                    { label: "대출한도", value: card.limit },
                    { label: "추가비용", value: card.extraFee },
                    { label: "상환방식", value: card.repayType },
                    { label: "연금리", value: card.yearRate },
                    { label: "연체금리", value: card.overRate },
                    { label: "조기상환수수료", value: card.earlyFee },
                    { label: "상환기간", value: card.repayPeriod },
                  ].map((row, i) => (
                    <tr key={i}><td className="pc-dtl-label">{row.label}</td><td className="pc-dtl-value">{row.value}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 부가설명 */}
            <div className="pc-dtl-card">
              <h3 className="pc-dtl-card-title">부가설명</h3>
              <p className="pc-dtl-extra">
                {card.extra.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>

            {/* 주의사항 */}
            <div className="pc-dtl-warning">
              <p className="pc-dtl-warning-title">주의사항</p>
              <p className="pc-dtl-warning-text">
                {card.warning.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>

          {/* 우측 사이드바 */}
          <aside className="pc-dtl-right">
            <div className="pc-dtl-contact">
              <div className="pc-dtl-contact-phone">{card.phone}</div>
              <a href={`tel:${card.phone}`} className="pc-dtl-btn-call">전화하기</a>
              <a href={`sms:${card.phone}`} className="pc-dtl-btn-sms">문자하기</a>
              <p className="pc-dtl-contact-tip">&quot;대출마켓&quot;을 보고 연락드렸다고 하시면 상담이 빠릅니다.</p>
            </div>
            <button className="pc-dtl-btn-list" onClick={() => router.push("/recommend")}>목록으로 돌아가기</button>
          </aside>
        </div>

        {/* 저작권 */}
        <div className="pc-dtl-copyright">
          본 정보는 [{card.company}]에 등록한 자료를 바탕으로 대출마켓에서 편집한 것입니다.
          대출마켓 동의없이 무단전재 또는 재배포, 재가공 할 수 없습니다.
        </div>
      </div>
    </>
  );
}
