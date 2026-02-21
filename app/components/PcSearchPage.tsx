"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const popularKeywords = ["월변대출", "당일대출", "무직자대출", "소액대출", "사업자대출", "비대면대출", "저신용자", "급전대출"];

const allCompanies = [
  { id: 1, name: "24시전국당일승인대부", tags: ["월변대출", "당일대출", "24시대출"], region: "전국" },
  { id: 2, name: "구조대부", tags: ["무직자대출", "당일대출", "저신용자"], region: "서울" },
  { id: 3, name: "드림파이낸셜", tags: ["직장인대출", "월변대출", "비대면대출"], region: "경기" },
  { id: 4, name: "미래대부", tags: ["당일대출", "소액대출", "24시대출"], region: "부산" },
  { id: 5, name: "희망대부", tags: ["소액대출", "급전대출", "신불자대출"], region: "대구" },
  { id: 6, name: "성장파이낸셜", tags: ["사업자대출", "비대면대출"], region: "인천" },
];

export default function PcSearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const results = query.trim().length > 0
    ? allCompanies.filter(c =>
        c.name.includes(query) || c.tags.some(t => t.includes(query)) || c.region.includes(query)
      )
    : [];

  return (
    <>
      {/* 네이비 타이틀 */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">맞춤검색</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/" className="pc-rp-bc-home">HOME</Link>
              <span className="pc-rp-bc-sep">/</span>
              <span className="pc-rp-bc-current">맞춤검색</span>
            </nav>
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="pc-inner" style={{ paddingTop: 24, paddingBottom: 40 }}>
        {/* 검색 바 */}
        <div className="pc-srch-bar">
          <div className="pc-srch-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="pc-srch-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="업체명, 대출상품, 지역 검색..."
            />
            {query && (
              <button className="pc-srch-clear" onClick={() => setQuery("")}>x</button>
            )}
          </div>
        </div>

        {query.trim().length > 0 ? (
          <div className="pc-srch-results">
            {results.length > 0 ? (
              <>
                <p className="pc-srch-count">&apos;{query}&apos; 검색결과 <strong>{results.length}건</strong></p>
                <div className="pc-srch-list">
                  {results.map(c => (
                    <div key={c.id} className="pc-srch-item" onClick={() => router.push(`/recommend/${c.id}`)}>
                      <div className="pc-srch-item-icon" />
                      <div className="pc-srch-item-info">
                        <p className="pc-srch-item-name">{c.name}</p>
                        <p className="pc-srch-item-tags">{c.tags.slice(0, 3).join(" · ")}</p>
                      </div>
                      <span className="pc-srch-item-region">{c.region}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="pc-srch-empty">
                <p className="pc-srch-empty-title">검색 결과가 없어요</p>
                <p className="pc-srch-empty-sub">다른 검색어를 입력해보세요</p>
              </div>
            )}
          </div>
        ) : (
          <div className="pc-srch-default">
            {/* 인기 검색어 */}
            <div className="pc-srch-section">
              <h3 className="pc-srch-section-title">인기 검색어</h3>
              <div className="pc-srch-tags">
                {popularKeywords.map((kw, i) => (
                  <button key={kw} className="pc-srch-tag" onClick={() => setQuery(kw)}>
                    <span className="pc-srch-tag-num">{i + 1}</span>
                    {kw}
                  </button>
                ))}
              </div>
            </div>

            {/* 카테고리 */}
            <div className="pc-srch-section">
              <h3 className="pc-srch-section-title">카테고리별 검색</h3>
              <div className="pc-srch-cats">
                {[
                  { label: "지역별", sub: "서울·경기·전국", href: "/region" },
                  { label: "상품별", sub: "월변·당일·소액", href: "/product" },
                  { label: "실시간", sub: "최신 대출상담", href: "/realtime" },
                  { label: "추천업체", sub: "검증된 업체", href: "/recommend" },
                ].map(cat => (
                  <Link key={cat.label} href={cat.href} className="pc-srch-cat">
                    <p className="pc-srch-cat-label">{cat.label}</p>
                    <p className="pc-srch-cat-sub">{cat.sub}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
