import { NextRequest, NextResponse } from "next/server";

/* ─── 인메모리 Rate Limiter ─── */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1분
const RATE_LIMIT_MAX = 10; // 분당 최대 요청 수

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "요청이 너무 많습니다. 1분 후 다시 시도해주세요." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => null);
  const telNum = body?.telNum;

  // 전화번호 검증: 최소 8자리, 최대 15자리 숫자
  if (!telNum || typeof telNum !== "string" || !/^[0-9]{8,15}$/.test(telNum)) {
    return NextResponse.json(
      { error: "올바른 전화번호를 입력하세요. (8~15자리 숫자)" },
      { status: 400 }
    );
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5초 타임아웃

    const response = await fetch(
      "https://www.counterscam112.go.kr/main/voiceNumSearchAjax.do",
      {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ telNum, rowCnt: 10 }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    const data = await response.json();

    return NextResponse.json({
      totCnt: data.totCnt || 0,
      voiceCnt: data.voiceCnt || 0,
      smsCnt: data.smsCnt || 0,
    });
  } catch (err: unknown) {
    if (err instanceof Error && err.name === "AbortError") {
      return NextResponse.json(
        { error: "외부 API 응답 시간 초과입니다." },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { error: "외부 API 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
