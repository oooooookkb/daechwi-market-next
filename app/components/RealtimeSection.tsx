"use client";

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

const PAGE_SIZE = 10;

export default function RealtimeSection() {
  const [items, setItems] = useState<Consultation[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(() => {
    load(page);
  }, [page]);

  async function load(p: number) {
    setLoading(true);
    const from = (p - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const [{ data }, { count }] = await Promise.all([
      supabase.from("consultations").select("*").order("created_at", { ascending: false }).range(from, to),
      supabase.from("consultations").select("*", { count: "exact", head: true }),
    ]);

    setItems(data ?? []);
    setTotal(count ?? 0);
    setLoading(false);
  }

  return (
    <section className="realtime-section">
      <div className="realtime-header">
        <div className="realtime-title-row">
          <span className="realtime-dot"></span>
          <h2 className="realtime-title">실시간 대출 문의</h2>
        </div>
        <span className="realtime-total">
          총 <strong>{(1247 + total).toLocaleString()}</strong>건
        </span>
      </div>

      <div className="realtime-col-head">
        <span>다른 사람들의 대출 문의</span>
        <span>지역 · 요청금액</span>
      </div>

      {loading ? (
        <div className="realtime-loading">불러오는 중...</div>
      ) : (
        <ul className="realtime-list">
          {items.map((item) => (
            <li className="realtime-item" key={item.id}>
              <div className="realtime-left">
                <p className="realtime-query">{item.query}</p>
                <p className="realtime-meta">
                  <span className="realtime-cnt">
                    상담가능업체 <b>{(item.id % 10) + 5}</b>
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
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="realtime-pagination">
          <button
            className="rt-page-btn"
            disabled={page === 1}
            onClick={() => setPage(1)}
          >«</button>
          <button
            className="rt-page-btn"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >‹</button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
            .reduce<(number | "...")[]>((acc, p, idx, arr) => {
              if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...");
              acc.push(p);
              return acc;
            }, [])
            .map((p, i) =>
              p === "..." ? (
                <span key={`dot-${i}`} className="rt-page-dot">…</span>
              ) : (
                <button
                  key={p}
                  className={`rt-page-btn ${page === p ? "active" : ""}`}
                  onClick={() => setPage(p as number)}
                >{p}</button>
              )
            )}

          <button
            className="rt-page-btn"
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
          >›</button>
          <button
            className="rt-page-btn"
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
          >»</button>
        </div>
      )}
    </section>
  );
}
