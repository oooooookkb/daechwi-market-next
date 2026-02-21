import type { Metadata } from "next";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "이용약관 · 개인정보처리방침 | 대출마켓",
};

export default function PolicyPage() {
  return (
    <div style={{ background: "#f2f3f7", minHeight: "100vh" }}>
      <Header />
      <div style={{ maxWidth: 480, margin: "0 auto", background: "#fff", minHeight: "100vh", paddingBottom: 80 }}>

        {/* 탭 */}
        <div style={{ display: "flex", borderBottom: "2px solid #E8EAF0" }}>
          <div style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#E07B00", borderBottom: "2.5px solid #E07B00", marginBottom: -2 }}>이용약관</div>
          <div style={{ flex: 1, padding: "14px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: "#999" }}>개인정보처리방침</div>
        </div>

        {/* 내용 */}
        <div style={{ padding: "24px 20px", fontSize: 13, color: "#444", lineHeight: 1.9, letterSpacing: "-0.2px" }}>
          <p style={{ fontWeight: 800, fontSize: 15, color: "#111", marginBottom: 16 }}>대출마켓 이용약관</p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>제1조 (목적)</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            이 약관은 대출마켓(이하 "회사")이 운영하는 대출마켓 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>제2조 (용어의 정의)</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            ① "서비스"란 회사가 제공하는 대부중개 플랫폼 서비스를 의미합니다.<br />
            ② "이용자"란 본 약관에 따라 서비스를 이용하는 자를 의미합니다.<br />
            ③ "업체"란 서비스에 등록된 대부업 또는 대부중개업 등록 사업자를 의미합니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>제3조 (서비스의 제공)</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            회사는 대부중개 플랫폼으로서 직접 대출을 취급하지 않으며, 등록 업체와 이용자 간의 연결을 중개하는 역할만을 수행합니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>제4조 (면책조항)</p>
          <p style={{ marginBottom: 16, color: "#666" }}>
            회사는 등록 업체가 제공하는 정보의 정확성, 신뢰성에 대해 책임을 지지 않습니다. 이용자는 대출 계약 전 반드시 해당 업체의 등록 여부와 조건을 직접 확인하시기 바랍니다.
          </p>

          <p style={{ fontWeight: 700, color: "#333", marginBottom: 6 }}>제5조 (준거법)</p>
          <p style={{ marginBottom: 32, color: "#666" }}>
            본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 관할 법원은 민사소송법에 따릅니다.
          </p>

          <div style={{ background: "#F7F8FC", borderRadius: 8, padding: "14px 16px", fontSize: 11.5, color: "#888", lineHeight: 1.7 }}>
            본 약관은 2025년 1월 1일부터 시행됩니다.<br />
            문의: info@daechwi.com
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
