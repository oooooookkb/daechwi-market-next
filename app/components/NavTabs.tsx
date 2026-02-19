"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "지역별 업체찾기", href: "/region", badge: true },
  { label: "상품별 업체찾기", href: "/product", badge: true },
  { label: "오늘의 추천업체", href: "/recommend", badge: true },
  { label: "사기번호조회", href: "/scam-check", badge: false },
  { label: "이용후기", href: "/reviews", badge: false },
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
            {item.badge && <span className="badge">N</span>}
          </Link>
        ))}
      </div>
    </nav>
  );
}
