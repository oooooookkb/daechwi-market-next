"use client";
import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms");

  return (
    <div style={{ background: "#f2f3f7", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 480, margin: "0 auto", background: "#fff", minHeight: "100vh", paddingBottom: 80 }}>

        {/* 탭 */}
        <div style={{ display: "flex", borderBottom: "2px solid #E8EAF0" }}>
          <button
            onClick={() => setActiveTab("terms")}
            style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: activeTab === "terms" ? 700 : 600, color: activeTab === "terms" ? "#E07B00" : "#999", borderBottom: activeTab === "terms" ? "2.5px solid #E07B00" : "none", marginBottom: -2, background: "none", border: "none", cursor: "pointer" }}
          >이용약관</button>
          <button
            onClick={() => setActiveTab("privacy")}
            style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: activeTab === "privacy" ? 700 : 600, color: activeTab === "privacy" ? "#E07B00" : "#999", borderBottom: activeTab === "privacy" ? "2.5px solid #E07B00" : "none", marginBottom: -2, background: "none", border: "none", cursor: "pointer" }}
          >개인정보처리방침</button>
        </div>

        {/* 이용약관 */}
        {activeTab === "terms" && (
          <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 2, letterSpacing: "-0.2px" }}>
            <p style={{ fontWeight: 800, fontSize: 16, color: "#111", marginBottom: 20, textAlign: "center" }}>이용약관</p>
            <p style={{ marginBottom: 20, color: "#555" }}>이 약관은 대출마켓(이하 "회사"라고 합니다)이 운영하는 대출마켓 사이트(이하 "사이트"라고 합니다)에서 제공하는 대출중개 서비스를 포함한 모든 웹 서비스(이하 "서비스"라 합니다)를 이용함에 있어, '회사'와 '회원'간의 권리, 의무 및 책임 사항을 규정함으로써 상호 발전을 도모하는 것을 목적으로 합니다.</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제 1 조(약관의 적용)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>본 약관은 "회사"가 인터넷 상에서 제공하는 모든 서비스의 이용절차 및 기타 필요한 사항에 적용됩니다.</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제 2 조(용어의 정의)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. "사이트"란 "회사"가 "서비스" 또는 용역을 "회원"에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 제공할 수 있도록 설정한 가상의 영업장 또는 서비스 공간을 말합니다.<br />
              2. "서비스"는 "회사"의 홈페이지 및 "회사"가 직접 운영하는 웹사이트 등에서 제공하는 온라인 상의 모든 서비스를 말합니다.<br />
              3. "대출중개 서비스"는 "회사"가 개발·운영하는 플랫폼을 통해 대출업체가 대출광고를 게재하고, 소비자가 실시간으로 대출문의를 할 수 있는 서비스를 말합니다.<br />
              4. "대출업체"란 영업소 관할 행정청에 대부업 등록을 필한 자를 말합니다.<br />
              5. "회원"은 전항의 대출업체로서 본 약관에 동의하고 "회사"가 운영하는 사이트에서 "서비스"를 제공받는 자를 말합니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제3조(약관의 명시, 효력과 개정)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. "회사"는 이 약관의 내용을 "회사"의 상호, 소재지, 대표자 성명, 사업자등록번호, 연락처 등과 함께 이용자가 확인할 수 있도록 사이트에 게시합니다.<br />
              2. "회사"는 관련 법률을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.<br />
              3. 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 적용일자 7일 이전부터 공지합니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제4조(서비스)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. "회사"가 제공하는 서비스는 다음과 같습니다.<br />
              &nbsp;&nbsp;1) 대출중개 플랫폼 개발 및 운영서비스 (대출업체 정보검색 서비스)<br />
              &nbsp;&nbsp;2) 광고 집행 및 프로모션 서비스<br />
              2. "회사"는 대부중개 플랫폼으로서 직접 대출을 취급하지 않으며, "대출업체"와 소비자 간의 연결을 중개하는 역할만을 수행합니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제5조(대리행위의 부인)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>"회사"는 통신판매 중개자로서 시스템 운영 및 관리 책임만을 부담하며, 대출거래와 관련하여 "대출업체"와 소비자를 대리하지 아니합니다. "대출업체"와 소비자 사이에 성립된 대부거래계약에 대해서는 해당 당사자가 책임을 부담합니다.</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제6조(보증의 부인)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>"회사"는 "대출업체"가 등록한 광고의 적법성, 입력 정보의 진실성 등 일체에 대하여 보증하지 아니하며, 이와 관련한 일체의 위험과 책임은 해당 "대출업체" 또는 소비자가 전적으로 부담합니다.</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제7조(서비스 이용계약의 성립)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. 이용계약은 "회사"가 제공하는 서비스를 이용하고자 하는 자의 이용신청에 대하여 "회사"가 이를 승낙함으로써 성립합니다.<br />
              2. "회원"가입은 영업소 관할 행정청에 대부업 등록을 필한 "대출업체"만 할 수 있습니다.<br />
              3. 이용신청자는 실명으로 가입신청을 해야 하며, 실명이 아니거나 타인의 정보를 도용하는 경우 서비스이용이 제한될 수 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제8조(소비자 정보의 보호)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>"대출업체"는 서비스 이용에 따라 취득한 소비자의 개인정보를 이 약관에서 정한 목적 이외의 용도로 사용할 수 없으며, 이를 위반할 경우 관련 법령에 의한 모든 민·형사상의 법적 책임을 집니다.</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제9조("회사"의 면책)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. "회사"는 대출중개 시스템만을 제공할 뿐, "대출업체"와 소비자 간 대출거래에 관하여 분쟁이 발생한 경우 그 분쟁에 개입하지 않으며 분쟁의 결과로 인한 모든 책임은 "대출업체" 및 소비자가 부담합니다.<br />
              2. "회사"는 정보통신설비의 보수, 점검 등의 사유가 발생한 경우 서비스를 일시적으로 중단할 수 있으며, 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제10조(저작권의 귀속 및 이용제한)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1. "회사"가 작성한 웹 화면(문구 및 디자인)에 관한 저작권, 기타 지적재산권은 "회사"에 귀속됩니다.<br />
              2. "회원"은 "회사"의 사전승낙 없이 서비스를 통해 얻은 정보를 출판, 복제, 방송 등의 방법으로 유포하거나 제3자에게 이용하게 해서는 아니 됩니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>제11조(관할법원)</p>
            <p style={{ marginBottom: 32, color: "#555" }}>이 약관과 관련한 분쟁에 대해 소송이 제기될 경우 "회사"의 본사 소재지를 관할하는 법원을 합의관할법원으로 정합니다.</p>

            <div style={{ background: "#F7F8FC", padding: "14px 16px", fontSize: 11.5, color: "#888", lineHeight: 1.7 }}>
              본 약관은 2025년 1월 1일부터 시행됩니다.<br />
              문의: info@daechwi.com
            </div>
          </div>
        )}

        {/* 개인정보처리방침 */}
        {activeTab === "privacy" && (
          <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 2, letterSpacing: "-0.2px" }}>
            <p style={{ fontWeight: 800, fontSize: 16, color: "#111", marginBottom: 20, textAlign: "center" }}>개인정보처리방침</p>

            <p style={{ marginBottom: 20, color: "#555" }}>
              대출마켓(이하 "회사"라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보 보호법 등 준수하여야 할 관련 법규상의 개인정보 보호 규정을 준수하고 있으며, 관련 법규에 의거한 개인정보 처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>1. 개인정보 수집항목 및 수집방법</p>
            <p style={{ marginBottom: 12, color: "#555" }}>회사는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 20 }}>
              <thead>
                <tr style={{ background: "#F0F2F8" }}>
                  <th style={{ border: "1px solid #DDE1EC", padding: "8px 6px", fontWeight: 700, color: "#333" }}>단계</th>
                  <th style={{ border: "1px solid #DDE1EC", padding: "8px 6px", fontWeight: 700, color: "#333" }}>수집항목</th>
                  <th style={{ border: "1px solid #DDE1EC", padding: "8px 6px", fontWeight: 700, color: "#333" }}>수집방법</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>홈페이지 회원가입 및 관리</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>아이디, 비밀번호, 비상연락처, 대부(중개)등록번호, 상호명, 사업장소재지, 광고용 전화번호, 대표자, 쿠키, 접속IP, 접속 로그</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>회원가입 및 희망광고 신청 단계에서 수집</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>서비스 제공 및 요금정산</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>결제계좌정보, 휴대전화번호, 환불계좌정보, 결제기록</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>서비스 이용과정에서 수집</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>1:1 문의</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>이름, 연락처, 문의내용, 접속IP</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555", verticalAlign: "top" }}>1:1문의 웹페이지</td>
                </tr>
              </tbody>
            </table>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>2. 개인정보의 수집 및 이용목적</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              1) 홈페이지 회원가입 및 관리: 회원 가입의사 확인, 본인확인, 회원자격 유지·관리, 민원처리 등<br />
              2) 서비스 제공에 관한 계약이행 및 요금정산: 광고승인 등 서비스 제공에 관한 계약이행 및 요금정산<br />
              3) 1:1 문의: 문의사항 또는 불만처리, 서비스 개선 통계자료 활용
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>3. 개인정보의 보유 및 이용기간</p>
            <p style={{ marginBottom: 12, color: "#555" }}>"회사"는 이용자가 서비스 회원으로 가입한 날부터 서비스를 제공받는 기간 동안 개인정보를 보유 및 이용합니다. 관계법령에 따른 보존기간은 다음과 같습니다.</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              • 계약 또는 청약철회에 관한 기록: 5년<br />
              • 대금결제 및 재화 공급에 관한 기록: 5년<br />
              • 소비자 불만 또는 분쟁처리 기록: 3년<br />
              • 표시/광고에 관한 기록: 6개월<br />
              • 전자금융에 관한 기록: 5년<br />
              • 접속로그 등 서비스 이용 기록: 3개월
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>4. 개인정보의 처리위탁</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 20 }}>
              <thead>
                <tr style={{ background: "#F0F2F8" }}>
                  <th style={{ border: "1px solid #DDE1EC", padding: "8px 6px", fontWeight: 700, color: "#333" }}>수탁자</th>
                  <th style={{ border: "1px solid #DDE1EC", padding: "8px 6px", fontWeight: 700, color: "#333" }}>위탁업무</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555" }}>나이스평가정보(주)</td>
                  <td style={{ border: "1px solid #DDE1EC", padding: "8px 6px", color: "#555" }}>휴대폰 본인인증 서비스</td>
                </tr>
              </tbody>
            </table>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>5. 개인정보의 파기 절차 및 방법</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              "회사"는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.<br />
              • 파기절차: 목적이 달성된 후 별도의 DB로 이전, 내부방침 및 관련법령에 따라 일정기간 보관 후 파기<br />
              • 파기방법: 전자적 파일은 기술적 방법으로 삭제, 출력물은 분쇄기로 분쇄 또는 소각
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>6. 이용자 및 법정대리인의 권리와 행사방법</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              이용자 및 법정대리인은 언제든지 등록된 개인정보를 열람하거나 정정할 수 있으며, 개인정보의 수집·이용·제공에 대한 동의를 철회할 수 있습니다. 개인정보 보호 책임자에게 서면, 전화 또는 이메일을 통해 요청하실 수 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>7. 개인정보 자동수집 장치(쿠키)</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              "회사"는 이용자의 정보를 수시로 저장하고 불러오는 쿠키(cookie)를 운용합니다. 이용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 서비스 제공에 어려움이 있을 수 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>8. 개인정보 보호책임자</p>
            <div style={{ background: "#F7F8FC", padding: "14px 16px", fontSize: 12, color: "#555", lineHeight: 1.9, marginBottom: 20 }}>
              • 성명: 대출마켓 개인정보보호 담당자<br />
              • 이메일: info@daechwi.com<br />
              <br />
              기타 개인정보침해 신고 및 상담:<br />
              • 개인정보침해신고센터: privacy.kisa.or.kr<br />
              • 대검찰청 사이버수사과: spo.go.kr / 1301<br />
              • 경찰청 사이버안전국: cyberbureau.police.go.kr / 182
            </div>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>9. 개인정보 처리방침의 개정</p>
            <p style={{ marginBottom: 32, color: "#555" }}>법률, 정부의 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 개인정보 처리방침을 개정하는 경우 변경된 내용을 사이트에 7일 전 공지합니다.</p>

            <div style={{ background: "#F7F8FC", padding: "14px 16px", fontSize: 11.5, color: "#888", lineHeight: 1.7 }}>
              본 방침은 2025년 1월 1일부터 시행됩니다.<br />
              문의: info@daechwi.com
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
