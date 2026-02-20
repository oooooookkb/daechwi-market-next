"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Consultation = {
  id: number;
  query: string;
  region: string;
  amount: string;
  job: string;
  loan_types: string[];
  memo: string;
  created_at: string;
};

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
}

const fallbackData = [
  { id: -1, query: "무직자도 가능한 곳", region: "광주", amount: "150만원", job: "무직자", loan_types: ["소액급전"], memo: "", created_at: new Date(Date.now() - 60000).toISOString() },
  { id: -2, query: "300만원 급합니다", region: "대구", amount: "300만원", job: "직장인", loan_types: ["월변대출"], memo: "", created_at: new Date(Date.now() - 120000).toISOString() },
  { id: -3, query: "당일 송금 되는 곳 있나요", region: "서울", amount: "100만원", job: "자영업자", loan_types: ["소액급전"], memo: "", created_at: new Date(Date.now() - 180000).toISOString() },
  { id: -4, query: "신용불량자도 되나요", region: "부산", amount: "200만원", job: "무직자", loan_types: ["무직자대출"], memo: "", created_at: new Date(Date.now() - 300000).toISOString() },
  { id: -5, query: "월변 빠르게 부탁드립니다", region: "인천", amount: "50만원 이하", job: "주부", loan_types: ["월변대출"], memo: "", created_at: new Date(Date.now() - 600000).toISOString() },
];

export default function RealtimeSection() {
  const [items, setItems] = useState<Consultation[]>([]);
  const [total, setTotal] = useState(1247);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("consultations")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);

      if (data && data.length > 0) {
        setItems(data);
        setTotal(1247 + data.length);
      } else {
        setItems(fallbackData as Consultation[]);
      }
    }
    load();

    // 30초마다 자동 새로고침
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="realtime-section">
      <div className="realtime-header">
        <div className="realtime-title-row">
          <span className="realtime-dot"></span>
          <h2 className="realtime-title">실시간 대출 문의</h2>
        </div>
        <span className="realtime-total">
          총 <strong>{total.toLocaleString()}</strong>건
        </span>
      </div>

      <div className="realtime-col-head">
        <span>다른 사람들의 대출 문의</span>
        <span>지역 · 요청금액</span>
      </div>

      <ul className="realtime-list">
        {items.map((item) => (
          <li className="realtime-item" key={item.id}>
            <div className="realtime-left">
              <p className="realtime-query">{item.query}</p>
              <p className="realtime-meta">
                <span className="realtime-cnt">
                  상담가능업체 <b>{Math.floor(Math.random() * 10) + 5}</b>
                </span>
                <span className="realtime-sep">|</span>
                <span className="realtime-time">{timeAgo(item.created_at)}</span>
              </p>
            </div>
            <div className="realtime-right">
              <span className="realtime-region">{item.region}</span>
              <span className="realtime-amount">{item.amount}</span>
            </div>
          </li>
        ))}
      </ul>

      <Link href="/realtime" className="realtime-more">
        🔍 실시간 대출 문의 더보기
      </Link>
    </section>
  );
}
