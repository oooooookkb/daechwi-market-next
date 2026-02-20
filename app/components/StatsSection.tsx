"use client";

import { useEffect, useRef } from "react";

function useCountUp(target: number, suffix: string, ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.innerHTML = `<span>${Math.floor(current).toLocaleString()}</span>${suffix}`;
    }, 16);
    return () => clearInterval(timer);
  }, [target, suffix, ref]);
}

export default function StatsSection() {
  const amountRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useCountUp(15690, "억원", amountRef);
  useCountUp(1118612, "건", countRef);

  return (
    <div className="stats">
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-label">누적 상담금액</div>
          <div className="stat-val" ref={amountRef}>
            <span>15,690</span>억원
          </div>
        </div>
        <div className="stat">
          <div className="stat-label">누적 상담문의</div>
          <div className="stat-val" ref={countRef}>
            <span>1,118,612</span>건
          </div>
        </div>
      </div>
    </div>
  );
}
