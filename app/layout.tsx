import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대출마켓 - 대출중개플랫폼 1위",
  description: "전국 1,118,612건 대출 상담 · 나에게 맞는 대출업체 찾기! 24시 빠른 연결, 무직자·저신용·외국인 OK",
  keywords: "대출마켓, 대출중개, 월변대출, 당일대출, 비대면대출, 소액대출, 무직자대출, 저신용대출",
  openGraph: {
    title: "대출마켓 - 대출중개플랫폼 1위",
    description: "나에게 맞는 대출업체 찾기! 전국 254개 등록 업체",
    type: "website",
    locale: "ko_KR",
    url: "https://daechwi-market-next.vercel.app",
    siteName: "대출마켓",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard — 한글 가독성 최적화 웹폰트 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;600;700;800;900&family=Noto+Serif+KR:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
