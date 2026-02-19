"use client";

import { useState } from "react";
import Link from "next/link";

const regions = ["전체", "서울", "경기", "인천", "대전", "대구", "부산", "광주", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const products = ["전체", "월변대출", "당일대출", "비대면대출", "소액대출", "사업자대출", "무직자대출", "저신용대출", "담보대출"];

export default function RegionSection() {
  const [activeTab, setActiveTab] = useState<"region" | "product">("region");
  const [activeRegion, setActiveRegion] = useState("전체");
  const [activeProduct, setActiveProduct] = useState("전체");

  const items = activeTab === "region" ? regions : products;
  const activeItem = activeTab === "region" ? activeRegion : activeProduct;
  const setActive = activeTab === "region" ? setActiveRegion : setActiveProduct;

  return (
    <section className="region-section">
      <div className="region-tabs">
        <button
          className={`region-tab ${activeTab === "region" ? "active" : ""}`}
          onClick={() => setActiveTab("region")}
        >
          지역별 업체찾기
        </button>
        <button
          className={`region-tab ${activeTab === "product" ? "active" : ""}`}
          onClick={() => setActiveTab("product")}
        >
          상품별 업체찾기
        </button>
      </div>

      <div className="region-grid">
        {items.map((item) => (
          <button
            key={item}
            className={`region-btn ${activeItem === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
