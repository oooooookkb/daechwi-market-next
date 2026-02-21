"use client";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <>
      {/* 고객센터 / 계좌 섹션 */}
      <div className="detail-cs-section">
        <div className="detail-cs-box">
          <p className="detail-cs-label">CUSTOMER</p>
          <p className="detail-cs-number">070-1234-5678</p>
          <p className="detail-cs-info">상담가능시간:평일 10:00 - 17:00<br />점심시간:12:30 - 13:30<br />주말,공휴일휴무</p>
          <a href="tel:07012345678" className="detail-cs-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            고객센터 연결
          </a>
        </div>
        <div className="detail-cs-divider" />
        <div className="detail-cs-box">
          <p className="detail-cs-label">ACCOUNT</p>
          <p className="detail-cs-bank">🏦 국민은행</p>
          <p className="detail-cs-number">000000-00-000000</p>
          <p className="detail-cs-info">예금주: 대출마켓<br />이메일: info@daechwi.com</p>
          <a href="mailto:info@daechwi.com" className="detail-cs-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            이메일 문의
          </a>
        </div>
      </div>

      {/* 대부중개 플랫폼 협의회 배너 */}
      <div className="detail-lpa-banner">
        <div className="detail-lpa-logo">
          <span className="detail-lpa-badge">LpA</span>
          <div>
            <p className="detail-lpa-name">대부중개 플랫폼 협의회</p>
            <p className="detail-lpa-sub">Loan Platform Association</p>
          </div>
        </div>
      </div>

      {/* 기관 로고 자동 슬라이드 */}
      <div className="detail-org-logos">
        <div className="detail-org-track">
          <a href="https://www.fss.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/fss.png" alt="금융감독원" className="detail-org-img" /></a>
          <a href="https://www.ccrs.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/ccrs.png" alt="신용회복위원회" className="detail-org-img" /></a>
          <a href="https://www.clfa.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/clfa.png" alt="한국대부금융협회" className="detail-org-img" /></a>
          <a href="https://www.nicecredit.co.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/nice.png" alt="NICE지키미" className="detail-org-img" /></a>
          <a href="https://www.fsc.go.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/fsc.png" alt="금융위원회" className="detail-org-img" /></a>
          {/* 복제 (무한루프용) */}
          <a href="https://www.fss.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/fss.png" alt="금융감독원" className="detail-org-img" /></a>
          <a href="https://www.ccrs.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/ccrs.png" alt="신용회복위원회" className="detail-org-img" /></a>
          <a href="https://www.clfa.or.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/clfa.png" alt="한국대부금융협회" className="detail-org-img" /></a>
          <a href="https://www.nicecredit.co.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/nice.png" alt="NICE지키미" className="detail-org-img" /></a>
          <a href="https://www.fsc.go.kr" target="_blank" rel="noopener noreferrer" className="detail-org-item"><img src="/logos/fsc.png" alt="금융위원회" className="detail-org-img" /></a>
        </div>
      </div>

      {/* 하단 메뉴 링크 */}
      <div className="detail-footer-menu">
        <Link href="#">회사소개</Link><span>|</span>
        <Link href="#">업체로그인</Link><span>|</span>
        <Link href="#">이용안내</Link><span>|</span>
        <Link href="#">PC화면보기</Link><span>|</span>
        <Link href="#">전체메뉴</Link>
      </div>

      {/* 법적 고지 */}
      <div className="detail-legal-footer">
        <p>대출마켓은 대부중개 플랫폼으로 직접 대출을 취급하지 않습니다.</p>
        <div className="detail-legal-links">
          <Link href="/policy">이용약관</Link>
          <span>|</span>
          <Link href="/policy" className="detail-legal-bold">개인정보처리방침</Link>
          <span>|</span>
          <Link href="/duty">책임한계와법적고지</Link>
          <span>|</span>
          <Link href="/duty">주의사항</Link>
          <span>|</span>
          <a href="mailto:info@daechwi.com">오류신고</a>
        </div>
      </div>
    </>
  );
}
