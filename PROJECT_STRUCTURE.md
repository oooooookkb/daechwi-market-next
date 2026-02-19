# 대출마켓 Next.js 프로젝트 구조

## 배포 URL
- **Production:** https://daechwi-market-next.vercel.app

## 프로젝트 위치
`/Users/h/Desktop/daechwi-market-next/`

## 폴더 구조

```
app/
├── layout.tsx          ← SEO 메타태그, Noto Sans KR 폰트
├── globals.css         ← 깔끔한 단일 CSS (중첩 style 태그 제거)
├── page.tsx            ← 메인 홈
├── components/
│   ├── Header.tsx      ← 헤더 (고정)
│   ├── NavTabs.tsx     ← 상단 탭 네비
│   ├── BottomNav.tsx   ← 하단 네비 (active 자동 감지)
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx  ← 카운트업 애니메이션
│   ├── CardsSection.tsx
│   ├── RealtimeSection.tsx
│   ├── RegionSection.tsx ← 지역/상품 탭 전환
│   └── CompanySection.tsx
├── region/page.tsx     ← 지역별 업체찾기 페이지
├── product/page.tsx    ← 상품별 업체찾기 페이지
├── recommend/page.tsx  ← 오늘의 추천업체 페이지
├── search/page.tsx     ← 업체검색 페이지
├── reviews/page.tsx    ← 이용후기 페이지
├── my/page.tsx         ← MY 페이지
└── scam-check/page.tsx ← 사기번호조회 페이지
```

## 기술 스택
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** 단일 globals.css (CSS 변수)
- **Font:** Noto Sans KR (Google Fonts)
- **Deploy:** Vercel (Static SSG)

## 테마 색상 (CSS 변수)
| 변수 | 값 | 용도 |
|------|-----|------|
| `--navy` | `#0B1D3A` | 기본 네이비 |
| `--navy-mid` | `#112A52` | 중간 네이비 |
| `--navy-light` | `#1A3A6B` | 밝은 네이비 |
| `--gold` | `#C9A84C` | 골드 포인트 |
| `--gold-light` | `#E8C97A` | 밝은 골드 |
| `--bg` | `#EDEEF4` | 배경색 |

## 재배포 방법
```bash
cd /Users/h/Desktop/daechwi-market-next
npx vercel --prod
```
