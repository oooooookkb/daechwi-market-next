"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    label: "최근 실시간 대출 문의 기준",
    highlight: "경기",
    suffix: " 지역 문의가\n가장 많았어요!",
    bars: [
      { name: "경남", value: 1061, max: false },
      { name: "부산", value: 1235, max: false },
      { name: "인천", value: 1372, max: false },
      { name: "서울", value: 4116, max: false },
      { name: "경기", value: 4786, max: true },
    ],
  },
  {
    label: "최근 실시간 대출 문의 기준",
    highlight: "5백만원",
    suffix: " 문의가\n가장 많았어요!",
    bars: [
      { name: "4백", value: 625, max: false },
      { name: "2백", value: 2678, max: false },
      { name: "1백", value: 3044, max: false },
      { name: "3백", value: 4100, max: false },
      { name: "5백", value: 6706, max: true },
    ],
  },
  {
    label: "최근 실시간 대출 문의 기준",
    highlight: "20대",
    suffix: " 문의가\n가장 많았어요!",
    bars: [
      { name: "50대", value: 647, max: false },
      { name: "기타", value: 955, max: false },
      { name: "40대", value: 2571, max: false },
      { name: "30대", value: 6942, max: false },
      { name: "20대", value: 7726, max: true },
    ],
  },
  {
    label: "최근 실시간 대출 문의 기준",
    highlight: "신용대출",
    suffix: " 문의가\n가장 많았어요!",
    bars: [
      { name: "담보대출", value: 892, max: false },
      { name: "신용대출", value: 17947, max: true },
    ],
  },
];

export default function InfoSlider() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimated(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimated(true);
      }, 200);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];
  const maxVal = Math.max(...slide.bars.map((b) => b.value));

  return (
    <div className="info-slider">
      <div className={`info-slide ${animated ? "info-slide--in" : "info-slide--out"}`}>
        <div className="info-text">
          <p className="info-label">{slide.label}</p>
          <p className="info-title">
            <em>{slide.highlight}</em>
            {slide.suffix.split("\n").map((line, i) => (
              <span key={i}>{i > 0 && <br />}{line}</span>
            ))}
          </p>
        </div>

        <div className="info-chart">
          {slide.bars.map((bar) => {
            const heightPct = (bar.value / maxVal) * 100;
            return (
              <div key={bar.name} className="info-bar-wrap">
                <div
                  className={`info-bar ${bar.max ? "info-bar--max" : ""}`}
                  style={{ height: `${heightPct}%` }}
                >
                  <span className="info-bar-val">{bar.value.toLocaleString()}</span>
                  {bar.max && <div className="info-bar-arrow" />}
                </div>
                <span className="info-bar-name">{bar.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="info-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`info-dot ${i === current ? "info-dot--active" : ""}`}
            onClick={() => {
              setAnimated(false);
              setTimeout(() => { setCurrent(i); setAnimated(true); }, 150);
            }}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
