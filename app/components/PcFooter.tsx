import Link from "next/link";

export default function PcFooter() {
  return (
    <footer className="pc-footer">
      {/* 기관 로고 영역 (height:67px) */}
      <div className="pc-footer-logos">
        <div className="pc-inner">
          <ul className="pc-footer-logo-list">
            <li><span className="pc-footer-logo-item">🏛 금융위원회</span></li>
            <li><span className="pc-footer-logo-item">📋 금감원</span></li>
            <li><span className="pc-footer-logo-item">🤝 신용회복위원회</span></li>
            <li><span className="pc-footer-logo-item">🏢 한국대부금융협회</span></li>
            <li><span className="pc-footer-logo-item">🔒 NICE지키미</span></li>
          </ul>
        </div>
      </div>

      {/* 검정 메뉴바 (height:72px, bg:#3a3a3a) */}
      <div className="pc-footer-nav">
        <div className="pc-inner">
          <ul className="pc-footer-nav-list">
            <li><Link href="/about">회사소개</Link></li>
            <li><Link href="/guide">이용안내</Link></li>
            <li><Link href="/terms">이용약관</Link></li>
            <li><Link href="/privacy">개인정보처리방침</Link></li>
            <li><Link href="/legal">법적고지</Link></li>
            <li><Link href="/noemail">이메일수집거부</Link></li>
            <li><Link href="/report">오류신고</Link></li>
          </ul>
          <button className="pc-footer-illegal-btn">불법추심 피해 신고</button>
        </div>
      </div>

      {/* 회색 정보영역 (bg:#f0f2f7) */}
      <div className="pc-footer-info">
        <div className="pc-inner">
          <div className="pc-footer-info-grid">
            {/* 고객센터 */}
            <div className="pc-footer-info-col">
              <h4 className="pc-footer-info-title">고객센터</h4>
              <p className="pc-footer-tel">1800-0000</p>
              <p className="pc-footer-hours">평일 09:00 ~ 18:00 (주말·공휴일 휴무)</p>
              <Link href="/realtime" className="pc-footer-consult-btn">대출상담 바로가기</Link>
            </div>
            {/* 대출중개플랫폼 안내 */}
            <div className="pc-footer-info-col">
              <h4 className="pc-footer-info-title">대출중개플랫폼 안내</h4>
              <ul className="pc-footer-info-list">
                <li>본 사이트는 대출중개 서비스를 제공합니다.</li>
                <li>대출금리 및 수수료는 업체마다 상이합니다.</li>
                <li>과도한 대출은 신용등급 하락의 원인이 됩니다.</li>
                <li>상환능력 범위 내에서 대출하시기 바랍니다.</li>
              </ul>
            </div>
            {/* 금리 및 상환안내 */}
            <div className="pc-footer-info-col">
              <h4 className="pc-footer-info-title">금리 및 상환안내</h4>
              <ul className="pc-footer-info-list">
                <li>법정 최고금리: 연 20%</li>
                <li>연체이자율: 약정금리 + 3% (법정 최고금리 내)</li>
                <li>중개수수료: 없음 (무료 중개)</li>
                <li>상환방식: 원리금균등/원금균등/만기일시</li>
              </ul>
            </div>
          </div>

          {/* 사업자 정보 */}
          <div className="pc-footer-biz">
            <p>주식회사 대출마켓대부중개 &nbsp;|&nbsp; 대표이사: 홍길동 &nbsp;|&nbsp; 사업자등록번호: 000-00-00000</p>
            <p>대부중개업 등록번호: 제2025-서울강남-0001호 &nbsp;|&nbsp; 주소: 서울특별시 강남구 테헤란로 00길 00</p>
            <p className="pc-footer-copyright">© 2025 대출마켓. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
