"use client";
import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import MobileFooter from "../components/MobileFooter";

export default function DutyPage() {
  const [activeTab, setActiveTab] = useState<"duty" | "warning">("duty");

  return (
    <div style={{ background: "#f2f3f7", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 480, margin: "0 auto", background: "#fff", minHeight: "100vh", paddingBottom: 80 }}>

        {/* 탭 */}
        <div style={{ display: "flex", borderBottom: "2px solid #E8EAF0" }}>
          <button
            onClick={() => setActiveTab("duty")}
            style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: activeTab === "duty" ? 700 : 600, color: activeTab === "duty" ? "#E07B00" : "#999", borderBottom: activeTab === "duty" ? "2.5px solid #E07B00" : "none", marginBottom: -2, background: "none", border: "none", cursor: "pointer" }}
          >책임한계와법적고지</button>
          <button
            onClick={() => setActiveTab("warning")}
            style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: activeTab === "warning" ? 700 : 600, color: activeTab === "warning" ? "#E07B00" : "#999", borderBottom: activeTab === "warning" ? "2.5px solid #E07B00" : "none", marginBottom: -2, background: "none", border: "none", cursor: "pointer" }}
          >주의사항</button>
        </div>

        {/* 책임의 한계와 법적고지 */}
        {activeTab === "duty" && (
          <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 2, letterSpacing: "-0.2px" }}>
            <p style={{ fontWeight: 800, fontSize: 16, color: "#111", marginBottom: 20, textAlign: "center" }}>책임의 한계와 법적고지</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>1. 목적</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              대출마켓(이하 "회사"라고 합니다)이 제공하는 인터넷 관련 서비스(이하 '서비스'라고 합니다.)를 회사가 운영하는 웹사이트(이하 "대출마켓"이라고 합니다.)를 통해 서비스 이용자(이하 "이용자"라고 합니다.)에게 제공할 때 다음과 같은 내용으로 그 법적인 책임의 한계를 고지합니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>2. 서비스 운영 책임</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              회사는 웹사이트 서비스 이용약관 및 기타 관련 법령에 따라 타인의 권리를 존중하며 이에 위반되는 사항이 없도록 노력합니다. 또한, 이용자 중 이를 위반하는 경우 사전 통지 없이 서비스 이용에 제한 조치를 받을 수 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>3. 서비스에 대한 책임</p>
            <div style={{ marginBottom: 20, color: "#555" }}>
              <p style={{ marginBottom: 8 }}>– 회사는 통신판매 중개자로서 효율적인 서비스를 위한 시스템 운영 및 관리 책임만을 부담하며, 대출거래와 관련하여 대출업체와 소비자를 대리하지 아니하고, 대출업체와 소비자 사이에 성립된 대부거래계약 및 대출업체 또는 소비자가 제공하고 등록한 정보에 대해서는 해당 대출업체 또는 소비자가 그에 대한 책임을 부담하여야 합니다.</p>
              <p style={{ marginBottom: 8 }}>– 회사는 회사가 제공하는 시스템을 통하여 이루어지는 대출업체와 소비자 간의 대부거래와 관련하여 대부거래의사의 존부 및 진정성, 대출업체가 등록한 광고의 적법성, 대출업체 또는 소비자가 입력하는 정보 및 그 정보를 통하여 링크된 URL에 게재된 자료의 진실성 또는 적법성 등 일체에 대하여 보증하지 아니하며, 이와 관련한 일체의 위험과 책임은 해당 대출업체 또는 소비자가 전적으로 부담합니다.</p>
              <p style={{ marginBottom: 8 }}>– 이용자는 자료에 대한 신뢰 여부가 전적으로 이용자의 책임임을 인정합니다.</p>
              <p style={{ marginBottom: 8 }}>– 웹사이트는 자료 및 서비스의 내용을 수정할 의무를 지지 않으며, 필요에 따라 개선할 수는 있습니다.</p>
              <p style={{ marginBottom: 8 }}>– 웹사이트는 지적재산권을 포함한 타인의 권리를 존중하며, 이용자들도 마찬가지로 행동해 주시길 기대합니다.</p>
              <p style={{ marginBottom: 8 }}>– 어떠한 경우에도 웹사이트는 서비스 자료 및 관련하여 직접, 간접, 부수적, 징벌적, 파생적인 손해에 대해서 책임을 지지 않습니다.</p>
              <p style={{ marginBottom: 8 }}>– 제휴업체 등이 제공하는 다양한 서비스에 대한 질문과 불만에 대하여는 해당 업체 등에 직접 연락을 취하시기 바랍니다.</p>
              <p style={{ marginBottom: 0 }}>– 대출마켓은 개인 고객들께 대출업체의 정보를 무료로 제공하며 이용자와 업체들 간 직접거래가 이루어지므로 민·형사상 책임은 이용자와 대출업체에 있으며 대출마켓에서는 법적 책임을 지지 않습니다.</p>
            </div>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>4. 책임의 한계와 법적고지의 변경</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              회사는 본 책임의 한계와 법적고지의 내용을 인터넷산업의 상관례에 맞추어 적절한 방법으로 사전 통지 없이 수시로 변경할 수 있습니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>5. 책임의 한계와 법적고지의 효력</p>
            <p style={{ marginBottom: 32, color: "#555" }}>
              본 책임의 한계와 법적고지 사항에서 다루고 있는 세부사항들은 관계 당사자들 간의 총체적인 합의사항이며, 회사의 개별 서비스에서 정하고 있는 별도의 약관, 고지사항 등과 상충되는 경우에는 별도의 약관 또는 고지사항을 우선 적용합니다.
            </p>

            <div style={{ background: "#F7F8FC", padding: "14px 16px", fontSize: 11.5, color: "#888", lineHeight: 1.7 }}>
              문의사항이 있으시면 연락 바랍니다.<br />
              고객센터: 070-1234-5678 / 이메일: info@daechwi.com
            </div>
          </div>
        )}

        {/* 주의사항 */}
        {activeTab === "warning" && (
          <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 2, letterSpacing: "-0.2px" }}>
            <p style={{ fontWeight: 800, fontSize: 16, color: "#111", marginBottom: 20, textAlign: "center" }}>주의사항</p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>■ 대출 관련 필수 유의사항</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              • 계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을 읽어보시기 바랍니다.<br />
              • 관계법령에 따라 금융상품에 관한 중요 사항을 설명받을 권리가 있습니다.<br />
              • 대출 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다.<br />
              • 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.<br />
              • 중개수수료를 요구하거나 받는 것은 불법입니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>■ 대출 비용 예시</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              금리 연20% 이내 (연체이자율 포함 20% 이내), 취급수수료 없음, 중도상환 수수료 없음, 중개수수료 없음, 추가비용 없음.<br />
              상환기간: 12개월 ~ 60개월<br />
              총 대출 비용 예시: 100만원을 12개월 기간 동안 최대 금리 연20% 적용 시 총 상환금액 1,111,614원.<br />
              채무의 조기상환수수료율 등 조기상환조건 없음.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>■ 서비스 성격</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              대출마켓은 대부중개 플랫폼으로, 직접 대출을 취급하거나 금전을 대여하지 않습니다. 본 사이트에 게재된 정보는 각 등록 업체가 제공한 자료를 바탕으로 편집한 것입니다. 금리, 한도, 조건 등은 업체 사정에 따라 변경될 수 있으므로 반드시 해당 업체에 직접 확인하시기 바랍니다.
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>■ 저작권</p>
            <p style={{ marginBottom: 20, color: "#555" }}>
              대출마켓 동의없이 무단전재 또는 재배포, 재가공 할 수 없습니다.<br />
              [저작권 대출마켓. 무단전재·재배포 금지]
            </p>

            <p style={{ fontWeight: 700, color: "#222", marginBottom: 8, fontSize: 14 }}>■ 불법 사금융 신고</p>
            <p style={{ marginBottom: 32, color: "#555" }}>
              불법 사금융 피해를 입으신 경우 금융감독원(1332) 또는 경찰청(182)에 신고하시기 바랍니다.<br />
              등록 여부는 금융감독원 파인(fine.fss.or.kr)에서 확인하실 수 있습니다.
            </p>

            <div style={{ background: "#FFF8F0", border: "1px solid #FFD9A0", padding: "14px 16px", fontSize: 11.5, color: "#B05000", lineHeight: 1.7 }}>
              ⚠️ 대출마켓에 등록된 모든 업체는 금융당국에 등록된 합법적인 대부(중개)업체입니다.<br />
              등록 여부는 금융감독원 파인(fine.fss.or.kr)에서 확인하실 수 있습니다.
            </div>
          </div>
        )}
      </div>
      <MobileFooter />
      <BottomNav />
    </div>
  );
}
