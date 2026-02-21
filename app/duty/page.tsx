import type { Metadata } from "next";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "책임한계와법적고지 · 주의사항 | 대출마켓",
};

export default function DutyPage() {
  return (
    <div style={{ background: "#f2f3f7", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 480, margin: "0 auto", background: "#fff", minHeight: "100vh", paddingBottom: 80 }}>

        {/* 탭 */}
        <div style={{ display: "flex", borderBottom: "2px solid #E8EAF0" }}>
          <div style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#E07B00", borderBottom: "2.5px solid #E07B00", marginBottom: -2 }}>책임한계와법적고지</div>
          <div style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: "#999" }}>주의사항</div>
        </div>

        {/* 내용 */}
        <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 1.9, letterSpacing: "-0.2px" }}>
          <p style={{ fontWeight: 800, fontSize: 15, color: "#111", marginBottom: 16 }}>책임한계와 법적고지</p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>■ 서비스 성격</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            대출마켓은 대부중개 플랫폼으로, 직접 대출을 취급하거나 금전을 대여하지 않습니다. 본 사이트에 게재된 정보는 각 등록 업체가 제공한 자료를 바탕으로 편집한 것입니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>■ 정보의 정확성</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            대출마켓은 등록 업체가 게재한 자료에 대한 오류와 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지 않습니다. 금리, 한도, 조건 등은 업체 사정에 따라 변경될 수 있으므로 반드시 해당 업체에 직접 확인하시기 바랍니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>■ 저작권</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            대출마켓 동의없이 무단전재 또는 재배포, 재가공 할 수 없습니다.<br />
            [저작권 대출마켓. 무단전재·재배포 금지]
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>■ 대출 관련 주의사항</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            • 계약 체결 전 상품설명서와 약관을 꼭 읽어보시기 바랍니다.<br />
            • 대출 시 귀하의 신용등급 또는 개인신용평점이 하락할 수 있습니다.<br />
            • 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.<br />
            • 중개수수료를 요구하거나 받는 것은 불법입니다.<br />
            • 금리 연 20% 이내 (연체이자율 포함 20% 이내)
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>■ 불법 사금융 신고</p>
          <p style={{ marginBottom: 32, color: "#666" }}>
            불법 사금융 피해를 입으신 경우 금융감독원(1332) 또는 경찰청(112)에 신고하시기 바랍니다.
          </p>

          <div style={{ background: "#FFF8F0", border: "1px solid #FFD9A0", borderRadius: 8, padding: "14px 16px", fontSize: 11.5, color: "#B05000", lineHeight: 1.7 }}>
            ⚠️ 대출마켓에 등록된 모든 업체는 금융당국에 등록된 합법적인 대부(중개)업체입니다.<br />
            등록 여부는 금융감독원 파인(fine.fss.or.kr)에서 확인하실 수 있습니다.
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
