"use client";

import Link from "next/link";

export default function PcMyPage() {
  return (
    <>
      {/* 네이비 타이틀 */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">마이페이지</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/" className="pc-rp-bc-home">HOME</Link>
              <span className="pc-rp-bc-sep">/</span>
              <span className="pc-rp-bc-current">MY</span>
            </nav>
          </div>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="pc-inner" style={{ paddingTop: 24, paddingBottom: 40 }}>
        <div className="pc-my-wrap">
          {/* 좌측 사이드바 */}
          <aside className="pc-my-sidebar">
            <div className="pc-my-profile">
              <div className="pc-my-avatar">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="pc-my-profile-msg">로그인이 필요해요</p>
              <p className="pc-my-profile-sub">로그인 후 이용 내역을 확인하세요</p>
              <button className="pc-my-login-btn">로그인</button>
              <button className="pc-my-register-btn">회원가입</button>
            </div>
          </aside>

          {/* 우측 메인 */}
          <main className="pc-my-main">
            <h3 className="pc-my-main-title">내 메뉴</h3>
            <div className="pc-my-menu-grid">
              {[
                { icon: "📋", label: "내 상담 내역", desc: "대출 상담 기록을 확인합니다" },
                { icon: "❤️", label: "찜한 업체", desc: "관심 업체 목록을 관리합니다" },
                { icon: "✍️", label: "내가 쓴 후기", desc: "작성한 업체 후기를 확인합니다" },
                { icon: "🔔", label: "알림 설정", desc: "알림 수신 설정을 변경합니다" },
                { icon: "⚙️", label: "고객센터", desc: "문의 및 도움말을 확인합니다" },
                { icon: "📢", label: "공지사항", desc: "최신 공지를 확인합니다" },
              ].map(item => (
                <div key={item.label} className="pc-my-menu-item">
                  <span className="pc-my-menu-icon">{item.icon}</span>
                  <div>
                    <p className="pc-my-menu-label">{item.label}</p>
                    <p className="pc-my-menu-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pc-my-empty">
              <p>로그인 후 이용 내역을 확인하세요</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
