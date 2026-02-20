"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

// ── 타입 ─────────────────────────────────────────────
type RequestStatus = "REQUESTED" | "ACCEPTED" | "REJECTED" | "CLOSED";

type ChatRequest = {
  id: number;
  consultation_id: number;
  company_name: string;
  company_nick: string;
  intro_message: string;  // 업체가 보낸 첫 메시지
  status: RequestStatus;
  created_at: string;
  // join
  consultation?: {
    query: string;
    region: string;
    amount: string;
  };
};

type ChatRoom = {
  id: string;
  consultation_id: number;
  company_name: string;
  company_nick: string;
  last_message: string;
  last_time: string;
  unread: number;
};

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  const d = Math.floor(diff / 86400);
  if (d < 7) return `${d}일 전`;
  return new Date(dateStr).toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
}

// ── 컴포넌트 ─────────────────────────────────────────
export default function MyChatPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"requests" | "rooms">("requests");
  const [myConsultationId, setMyConsultationId] = useState<string | null>(null);

  const [requests, setRequests] = useState<ChatRequest[]>([]);
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("my_chat_id");
    setMyConsultationId(id);
    if (id) {
      loadRequests(id);
      loadRooms(id);
    } else {
      setLoading(false);
    }
  }, []);

  async function loadRequests(consultationId: string) {
    const { data } = await supabase
      .from("chat_requests")
      .select("*, consultation:consultations(query, region, amount)")
      .eq("consultation_id", consultationId)
      .order("created_at", { ascending: false });
    setRequests(data ?? []);
    setLoading(false);
  }

  async function loadRooms(consultationId: string) {
    // chat_rooms에서 수락된 것들 가져오기
    const { data } = await supabase
      .from("chat_rooms")
      .select("*")
      .eq("consultation_id", consultationId)
      .eq("status", "ACCEPTED")
      .order("updated_at", { ascending: false });
    setRooms(data ?? []);
  }

  async function handleAccept(req: ChatRequest) {
    setActionLoading(req.id);
    // 1) chat_requests 상태 변경
    await supabase
      .from("chat_requests")
      .update({ status: "ACCEPTED" })
      .eq("id", req.id);

    // 2) chat_rooms 생성 (또는 업데이트)
    await supabase.from("chat_rooms").upsert({
      consultation_id: req.consultation_id,
      company_nick: req.company_nick,
      company_name: req.company_name,
      status: "ACCEPTED",
      last_message: req.intro_message,
      last_time: new Date().toISOString(),
      unread: 0,
    });

    // 3) 상태 업데이트
    setRequests(prev =>
      prev.map(r => r.id === req.id ? { ...r, status: "ACCEPTED" } : r)
    );
    setActionLoading(null);

    // 4) 진행중 탭으로 이동
    setTab("rooms");
    if (myConsultationId) loadRooms(myConsultationId);
  }

  async function handleReject(reqId: number) {
    setActionLoading(reqId);
    await supabase
      .from("chat_requests")
      .update({ status: "REJECTED" })
      .eq("id", reqId);

    setRequests(prev =>
      prev.map(r => r.id === reqId ? { ...r, status: "REJECTED" } : r)
    );
    setActionLoading(null);
  }

  // 표시할 요청 = REJECTED 제외하고 다 보여주되, ACCEPTED는 배지만 다르게
  const activeRequests = requests.filter(r => r.status !== "REJECTED");
  const newRequestCount = requests.filter(r => r.status === "REQUESTED").length;
  const unreadTotal = rooms.reduce((a, r) => a + (r.unread ?? 0), 0);

  // ── 렌더 ────────────────────────────────────────────
  return (
    <>
      <Header />

      <div className="mychat-wrap">
        {/* 페이지 타이틀 */}
        <div className="mychat-title-row">
          <h2 className="mychat-title">채팅방</h2>
        </div>

        {/* 탭 */}
        <div className="mychat-tabs">
          <button
            className={`mychat-tab ${tab === "requests" ? "active" : ""}`}
            onClick={() => setTab("requests")}
          >
            요청함
            {newRequestCount > 0 && (
              <span className="mychat-badge">{newRequestCount}</span>
            )}
          </button>
          <button
            className={`mychat-tab ${tab === "rooms" ? "active" : ""}`}
            onClick={() => setTab("rooms")}
          >
            진행중
            {unreadTotal > 0 && (
              <span className="mychat-badge">{unreadTotal}</span>
            )}
          </button>
        </div>

        {/* 컨텐츠 */}
        <div className="mychat-content">
          {loading ? (
            <div className="mychat-loading">불러오는 중...</div>
          ) : !myConsultationId ? (
            // ── 상담글 없음 ─────────────────────────────
            <div className="mychat-empty">
              <div className="mychat-empty-icon">💬</div>
              <p className="mychat-empty-text">아직 채팅 내역이 없어요</p>
              <p className="mychat-empty-sub">업체를 찾아 채팅을 요청하거나{"\n"}실시간 상담을 등록해보세요</p>
              <div className="mychat-empty-cta">
                <button
                  className="mychat-empty-btn primary"
                  onClick={() => router.push("/search")}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  업체 찾고 채팅 요청하기
                </button>
                <button
                  className="mychat-empty-btn secondary"
                  onClick={() => router.push("/realtime")}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  실시간 문의 보기
                </button>
              </div>
              <div className="mychat-guide">
                <span className="mychat-guide-icon">🔒</span>
                <span>채팅 내용은 암호화 저장됩니다 · 사기 피해 주의 안내</span>
              </div>
            </div>
          ) : tab === "requests" ? (
            // ── 요청함 탭 ───────────────────────────────
            activeRequests.length === 0 ? (
              <div className="mychat-empty">
                <div className="mychat-empty-icon">📭</div>
                <p className="mychat-empty-text">아직 업체 채팅 요청이 없어요</p>
                <p className="mychat-empty-sub">업체에서 요청을 보내면 여기 표시돼요</p>
                <div className="mychat-empty-cta">
                  <button
                    className="mychat-empty-btn primary"
                    onClick={() => router.push("/search")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    업체 찾고 채팅 요청하기
                  </button>
                  <button
                    className="mychat-empty-btn secondary"
                    onClick={() => router.push("/realtime")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                    실시간 문의 보기
                  </button>
                </div>
                <div className="mychat-guide">
                  <span className="mychat-guide-icon">🔒</span>
                  <span>채팅 내용은 암호화 저장됩니다 · 사기 피해 주의 안내</span>
                </div>
              </div>
            ) : (
              <ul className="mychat-request-list">
                {activeRequests.map(req => (
                  <li key={req.id} className={`mychat-request-card ${req.status === "ACCEPTED" ? "accepted" : ""}`}>
                    {/* 카드 상단: 업체명 + 시간 */}
                    <div className="mrc-top">
                      <div className="mrc-company">
                        <div className="mrc-avatar">{req.company_name?.[0] ?? "업"}</div>
                        <div className="mrc-info">
                          <span className="mrc-name">{req.company_name || req.company_nick}</span>
                          <span className="mrc-time">{timeAgo(req.created_at)}</span>
                        </div>
                      </div>
                      {req.status === "ACCEPTED" && (
                        <span className="mrc-accepted-badge">수락됨</span>
                      )}
                    </div>

                    {/* 미리보기 메시지 */}
                    <p className="mrc-preview">&ldquo;{req.intro_message}&rdquo;</p>

                    {/* 내 상담 정보 */}
                    {req.consultation && (
                      <div className="mrc-consult-ref">
                        <span className="mrc-consult-label">내 상담글</span>
                        <span className="mrc-consult-text">
                          {req.consultation.query?.slice(0, 30)}
                          {req.consultation.query?.length > 30 ? "..." : ""}
                        </span>
                      </div>
                    )}

                    {/* 버튼 */}
                    {req.status === "REQUESTED" && (
                      <div className="mrc-actions">
                        <button
                          className="mrc-btn reject"
                          onClick={() => handleReject(req.id)}
                          disabled={actionLoading === req.id}
                        >
                          거절
                        </button>
                        <button
                          className="mrc-btn accept"
                          onClick={() => handleAccept(req)}
                          disabled={actionLoading === req.id}
                        >
                          {actionLoading === req.id ? "처리 중..." : "수락"}
                        </button>
                      </div>
                    )}

                    {req.status === "ACCEPTED" && (
                      <button
                        className="mrc-btn enter"
                        onClick={() => router.push(`/chat/${req.consultation_id}/${req.id}`)}
                      >
                        채팅방 입장 →
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )
          ) : (
            // ── 진행중 탭 ───────────────────────────────
            rooms.length === 0 ? (
              <div className="mychat-empty">
                <div className="mychat-empty-icon">💬</div>
                <p className="mychat-empty-text">진행 중인 채팅이 없어요</p>
                <p className="mychat-empty-sub">요청함에서 업체 요청을 수락하면{"\n"}여기서 대화할 수 있어요</p>
                <div className="mychat-empty-cta">
                  <button
                    className="mychat-empty-btn primary"
                    onClick={() => setTab("requests")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                    요청함 확인하기
                    {newRequestCount > 0 && <span className="cta-badge">{newRequestCount}</span>}
                  </button>
                  <button
                    className="mychat-empty-btn secondary"
                    onClick={() => router.push("/search")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    업체 찾고 채팅 요청하기
                  </button>
                </div>
                <div className="mychat-guide">
                  <span className="mychat-guide-icon">🔒</span>
                  <span>채팅 내용은 암호화 저장됩니다 · 사기 피해 주의 안내</span>
                </div>
              </div>
            ) : (
              <ul className="mychat-room-list">
                {rooms.map(room => (
                  <li
                    key={room.id}
                    className="mychat-room-item"
                    onClick={() => router.push(`/chat/${room.consultation_id}/${room.id}`)}
                  >
                    <div className="mrm-avatar">{room.company_name?.[0] ?? "업"}</div>
                    <div className="mrm-body">
                      <div className="mrm-top">
                        <span className="mrm-name">{room.company_name || room.company_nick}</span>
                        <span className="mrm-time">{room.last_time ? timeAgo(room.last_time) : ""}</span>
                      </div>
                      <p className="mrm-preview">{room.last_message || "대화를 시작해보세요"}</p>
                    </div>
                    {room.unread > 0 && (
                      <span className="mrm-unread">{room.unread}</span>
                    )}
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>

      <div className="spacer" />
      <BottomNav />
    </>
  );
}
