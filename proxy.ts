import { NextRequest, NextResponse } from "next/server";

const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") ?? "";
  const isMobile = MOBILE_UA.test(ua);

  // 루트(/) 접근 시
  if (pathname === "/") {
    if (isMobile) {
      // 모바일 → /m 으로 리다이렉트
      return NextResponse.redirect(new URL("/m", req.url));
    }
    // PC → 그대로 통과
    return NextResponse.next();
  }

  // /m 접근 시
  if (pathname === "/m") {
    if (!isMobile) {
      // PC가 /m 접근 → / 로 리다이렉트
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/m"],
};
