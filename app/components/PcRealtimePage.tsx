"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import allCards from "../data/cards";

/* ── 타입 ── */
type Consultation = {
  id: number;
  query: string;
  region: string;
  amount: string;
  job: string;
  loan_types: string[];
  memo: string;
  nickname: string;
  created_at: string;
};

/* ── 시간 표시 ── */
function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
}

/* ── 지역 통계 바 데이터 (기본값, 실제 데이터와 합산) ── */
const regionStats = [
  { label: "서울", base: 412 },
  { label: "경기", base: 328 },
  { label: "부산", base: 156 },
  { label: "인천", base: 112 },
  { label: "대구", base: 89 },
  { label: "대전", base: 67 },
  { label: "광주", base: 45 },
  { label: "기타", base: 38 },
];

/* allCards는 ../data/cards에서 import */

const PAGE_SIZE = 10;

export default function PcRealtimePage() {
  const router = useRouter();

  /* 실시간 피드: Supabase에서 데이터 로드 */
  const [items, setItems] = useState<Consultation[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerPaused, setTickerPaused] = useState(false);

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const totalDisplay = 1247 + total;

  /* 오늘 문의 수 계산 */
  const todayCount = useMemo(() => {
    const today = new Date().toDateString();
    return items.filter((item) => new Date(item.created_at).toDateString() === today).length;
  }, [items]);

  /* 지역별 실제 카운트 */
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      if (item.region) {
        counts[item.region] = (counts[item.region] || 0) + 1;
      }
    });
    return counts;
  }, [items]);

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

  /* ticker 자동 스크롤 */
  useEffect(() => {
    if (tickerPaused || !tickerRef.current || items.length === 0) return;
    const el = tickerRef.current;
    const t = setInterval(() => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 2) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ top: 48, behavior: "smooth" });
      }
    }, 2500);
    return () => clearInterval(t);
  }, [tickerPaused, items]);

  const maxRegion = Math.max(...regionStats.map((r) => r.base));

  return (
    <div className="pc-region-page">

      {/* ── 네이비 영역: 풀너비 배경 ── */}
      <div className="pc-rp-navy-area">
        <div className="pc-rp-navy-inner">

          {/* ── 브레드크럼 + 타이틀 ── */}
          <div className="pc-rp-topbar">
            <h1 className="pc-rp-title">실시간 대출상담</h1>
            <nav className="pc-rp-breadcrumb">
              <Link href="/">HOME</Link>
              <span className="pc-rp-bc-sep">›</span>
              <span className="pc-rp-bc-cur">실시간 대출상담</span>
            </nav>
          </div>

          {/* ── 2컬럼: 좌측 통계 + 우측 리스트 ── */}
          <div className="pc-rt-main">

            {/* ─── 좌측: 실시간 통계 요약 (30%) ─── */}
            <div className="pc-rt-stats">
              {/* 총 문의 건수 */}
              <div className="pc-rt-stats-total">
                <span className="pc-rt-stats-live-row">
                  <span className="pc-rt-live-dot" />
                  <span className="pc-rt-stats-label">총 문의</span>
                </span>
                <span className="pc-rt-stats-num">{totalDisplay.toLocaleString()}</span>
                <span className="pc-rt-stats-unit">건</span>
              </div>

              {/* 오늘 / 이번달 */}
              <div className="pc-rt-stats-row2">
                <div className="pc-rt-stats-box">
                  <span className="pc-rt-stats-box-label">오늘 신규</span>
                  <span className="pc-rt-stats-box-val">{(todayCount + 48).toLocaleString()}<small>건</small></span>
                </div>
                <div className="pc-rt-stats-box">
                  <span className="pc-rt-stats-box-label">등록 업체</span>
                  <span className="pc-rt-stats-box-val">254<small>개</small></span>
                </div>
              </div>

              {/* 지역별 문의 바 차트 */}
              <div className="pc-rt-stats-chart">
                <span className="pc-rt-stats-chart-title">지역별 문의 현황</span>
                <div className="pc-rt-stats-bars">
                  {regionStats.map((r) => {
                    const val = r.base + (regionCounts[r.label] || 0);
                    const pct = Math.round((val / maxRegion) * 100);
                    return (
                      <div key={r.label} className="pc-rt-bar-row">
                        <span className="pc-rt-bar-label">{r.label}</span>
                        <div className="pc-rt-bar-track">
                          <div className="pc-rt-bar-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="pc-rt-bar-val">{val}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 상담등록 CTA */}
              <Link href="/chat-request" className="pc-rt-stats-cta">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                실시간 상담등록
              </Link>
            </div>

            {/* ─── 우측: 문의 리스트 (70%) ─── */}
            <div
              className="pc-rt-feed"
              onMouseEnter={() => setTickerPaused(true)}
              onMouseLeave={() => setTickerPaused(false)}
            >
              <div className="pc-rt-feed-colhead">
                <span>문의 내용</span>
                <span>지역</span>
                <span>금액</span>
                <span>시간</span>
              </div>
              <div className="pc-rt-ticker" ref={tickerRef}>
                {loading ? (
                  <div className="pc-rt-feed-loading">불러오는 중...</div>
                ) : items.length === 0 ? (
                  <div className="pc-rt-feed-loading">등록된 문의가 없습니다</div>
                ) : (
                  items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/chat/${item.id}`}
                      className="pc-rt-feed-row"
                    >
                      <span className="pc-rt-feed-query">
                        {(() => {
                          const cats = ["월변","당일","소액","비대면","급전","대환","신용"];
                          const jobs = ["무직자","직장인","사업자","여성","주부","저신용","프리랜서","학생","자영업","알바"];
                          const catFound = cats.find(k => item.query.includes(k));
                          const jobFound = jobs.find(k => item.query.includes(k));
                          let rest = item.query;
                          if (catFound) rest = rest.replace(catFound, "");
                          if (jobFound) rest = rest.replace(jobFound, "");
                          rest = rest.replace(/\s+/g, " ").trim();
                          return (
                            <>
                              {catFound && <span className="pc-rt-feed-badge pc-rt-badge-cat">{catFound}</span>}
                              {jobFound && <span className="pc-rt-feed-badge pc-rt-badge-job">{jobFound}</span>}
                              {rest}
                            </>
                          );
                        })()}
                      </span>
                      <span className="pc-rt-feed-region">{item.region || "-"}</span>
                      <span className="pc-rt-feed-amount">{item.amount || "-"}</span>
                      <span className="pc-rt-feed-time">{timeAgo(item.created_at)}</span>
                    </Link>
                  ))
                )}
              </div>
              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className="pc-rt-feed-pagination">
                  <button className="pc-rt-pg-btn" disabled={page === 1} onClick={() => setPage(1)}>«</button>
                  <button className="pc-rt-pg-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                    .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                      if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((p, i) =>
                      p === "..." ? (
                        <span key={`dot-${i}`} className="pc-rt-pg-ellipsis">...</span>
                      ) : (
                        <button
                          key={p}
                          className={`pc-rt-pg-btn${page === p ? " active" : ""}`}
                          onClick={() => setPage(p as number)}
                        >{p}</button>
                      )
                    )}
                  <button className="pc-rt-pg-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
                  <button className="pc-rt-pg-btn" disabled={page === totalPages} onClick={() => setPage(totalPages)}>»</button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>{/* /pc-rp-navy-area */}

      <div className="pc-inner">

        {/* ── 섹션 타이틀 ── */}
        <div className="pc-rp-section-title-bar">
          <span className="pc-rp-section-notice">• 배너위치는 실시간으로 랜덤 배치됩니다.</span>
          <span className="pc-rp-section-heading">전체 업체 등록 현황</span>
          <a href="/about" className="pc-rp-section-ad">광고문의 ?</a>
        </div>

        {/* ── 업체 카드 그리드 ── */}
        <div className="pc-rp-cards-grid">
          {allCards.map((card) => (
            <div key={card.id} className="pc-rp-card" onClick={() => router.push(`/recommend/${card.id}`)}>
              <div className="pc-card-top" style={{ backgroundImage: `url(${card.img})` }}>
                <span className={`pc-card-tag tag--${card.tagColor}`}>{card.badge}</span>
              </div>
              <div className="pc-card-bottom">
                <div className="pc-card-title">{card.title}</div>
                <ul className="pc-card-features">
                  {card.features.map((f, i) => (
                    <li key={i} className={`pc-card-feat feat-${i}`}>{f}</li>
                  ))}
                </ul>
                <div className="pc-card-info-row">
                  <div className="pc-card-info-left">
                    <span className="pc-card-company">{card.company}</span>
                    <span className="pc-card-region-row">{card.region}</span>
                  </div>
                  <a href={`tel:${card.phone}`} className="pc-card-phone" onClick={(e) => e.stopPropagation()}>{card.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
