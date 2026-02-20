"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "실시간대출상담", href: "/realtime" },
  { label: "지역별 업체찾기", href: "/region" },
  { label: "상품별 업체찾기", href: "/product" },
  { label: "오늘의 추천업체", href: "/recommend" },
  { label: "사기번호조회", href: "/scam-check" },
  { label: "이용후기", href: "/reviews" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-list">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
