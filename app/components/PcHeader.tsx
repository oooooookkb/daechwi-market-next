"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PcHeader() {
  const pathname = usePathname();

  const gnbItems = [
    { label: "실시간 대출상담", href: "/realtime", w: 130, highlight: true },
    { label: "지역별 업체찾기", href: "/region", w: 125 },
    { label: "상품별 업체찾기", href: "/product", w: 135 },
    { label: "오늘의 추천업체", href: "/recommend", w: 135 },
    { label: "맞춤검색", href: "/search", w: 91 },
    { label: "사기번호조회", href: "/scam-check", w: 120 },
    { label: "정식업체조회", href: "/verified", w: 119 },
    { label: "커뮤니티", href: "/community", w: 96 },
    { label: "이용안내", href: "/guide", w: 96 },
    { label: "고객센터", href: "/cs", w: 83 },
  ];

  return (
    <>
      {/* ── 1단: 유틸 바 (h:71px) ── */}
      <div className="pc-util-bar">
        <div className="pc-inner">
          <ul className="pc-util-left">
            <li>주식회사 대출마켓대부중개 &nbsp;/&nbsp; 등록번호 제2025-서울강남-0001호</li>
          </ul>
          <ul className="pc-util-links">
            <li><Link href="/my">즐겨찾기</Link></li>
            <li><Link href="/my">회원가입</Link></li>
            <li><Link href="/about">회사소개</Link></li>
          </ul>
        </div>
      </div>

      {/* ── 2단: 메인 헤더 (h:87px) ── */}
      <div className="pc-main-header">
        <div className="pc-inner">

          {/* 로고 */}
          <Link href="/" className="pc-logo-wrap">
            <div className="pc-logo-main">대출<span>마켓</span></div>
            <div className="pc-logo-sub">대출중개플랫폼 1위</div>
          </Link>

          {/* 검색바 영역 (550px) */}
          <div className="pc-search-area">
            {/* ① 통합 검색 */}
            <div className="pc-search-wrap">
              <input
                className="pc-search-input"
                type="text"
                placeholder="통합검색 (지역, 상품, 업체명)"
              />
              <button className="pc-search-btn" aria-label="검색">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </button>
            </div>

          </div>

          {/* 아이콘 메뉴 (266px, 4개) */}
          <ul className="pc-header-icons">
            <li>
              <Link href="/my" className="pc-header-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
                업체로그인
              </Link>
            </li>
            <li>
              <Link href="/about" className="pc-header-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                광고문의
              </Link>
            </li>
            <li>
              <Link href="/recent" className="pc-header-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                최근 본 업체
              </Link>
            </li>
            <li>
              <Link href="/guide" className="pc-header-icon-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                주의사항
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── 3단: GNB (h:51px) ── */}
      <nav className="pc-gnb">
        <div className="pc-inner">
          {gnbItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.highlight) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="pc-gnb-item pc-gnb-realtime"
                  style={{ width: item.w }}
                >
                  ✏️ {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pc-gnb-item${isActive ? " active" : ""}`}
                style={{ width: item.w }}
              >
                {item.label}
                {isActive && <span className="pc-gnb-ac-line" />}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
