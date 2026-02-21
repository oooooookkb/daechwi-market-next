"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">

      {/* 1층: 등록번호 Top Bar */}
      <div className="header-topbar">
        <span>주식회사대출마켓대부중개 · 2025-서울강남-0111(대부중개업)</span>
      </div>

      {/* 2층: 로고 + 버튼 Main Bar */}
      <div className="header-inner">
        <div className="h-left-btns">
          <Link href="/" className="h-btn" aria-label="홈으로">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </Link>
          <Link href="/search" className="h-btn" aria-label="검색">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
        </div>

        <Link href="/m" className="logo">
          <span className="logo-name">대출마켓</span>
        </Link>

        <div className="h-right-btn">
          <button className="h-btn" aria-label="전체메뉴">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

    </header>
  );
}
