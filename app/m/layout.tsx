import type { Metadata } from "next";
import "./mobile.css";

export const metadata: Metadata = {
  title: "대출마켓 - 대출중개플랫폼 1위",
  description: "전국 1,118,612건 대출 상담 · 나에게 맞는 대출업체 찾기! 24시 빠른 연결",
};

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
