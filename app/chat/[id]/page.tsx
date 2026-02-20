"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import BottomNav from "../../components/BottomNav";

type Consultation = {
  id: number;
  query: string;
  region: string;
  amount: string;
  job: string;
  memo: string;
  nickname: string;
  created_at: string;
};

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
}

export default function ChatPage() {
  const { id } = useParams();
  const router = useRouter();

  const [consultation, setConsultation] = useState<Consultation | null>(null);

  // 채팅 요청 모달
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [reqCompanyName, setReqCompanyName] = useState("");
  const [reqMessage, setReqMessage] = useState("");
  const [reqSending, setReqSending] = useState(false);
  const [reqDone, setReqDone] = useState(false);

  useEffect(() => {
    const compNick = localStorage.getItem("company_nick");
    if (compNick) setReqCompanyName(compNick);

    supabase
      .from("consultations")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => setConsultation(data));
  }, [id]);

  async function sendChatRequest() {
    if (!reqCompanyName.trim() || !reqMessage.trim() || reqSending) return;
    setReqSending(true);
    localStorage.setItem("company_nick", reqCompanyName.trim());

    await supabase.from("chat_requests").insert({
      consultation_id: Number(id),
      company_nick: reqCompanyName.trim(),
      company_name: reqCompanyName.trim(),
      intro_message: reqMessage.trim(),
      status: "REQUESTED",
    });

    setReqSending(false);
    setReqDone(true);
  }

  if (!consultation) return <div className="chat-loading">불러오는 중...</div>;

  return (
    <>
      <Header />
      <NavTabs />

      <div className="feed-wrap">
        <div className="feed-post">
          {/* 상단: 아바타 + 닉네임 + 뒤로가기 */}
          <div className="feed-post-top">
            <div className="feed-avatar">{consultation.nickname?.[0] ?? "?"}</div>
            <div className="feed-post-info">
              <span className="feed-nick">{consultation.nickname}</span>
              <span className="feed-sub">
                {consultation.region} · {consultation.amount} · {timeAgo(consultation.created_at)}
              </span>
            </div>
            <button className="feed-back" onClick={() => {
              if (window.history.length > 1) router.back();
              else router.push("/realtime");
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
          </div>

          {/* 상담 내용 */}
          <p className="feed-query">{consultation.query}</p>
          {consultation.memo && <p className="feed-memo">{consultation.memo}</p>}

          {/* 태그 */}
          <div className="feed-tags">
            {consultation.region && <span className="feed-tag">{consultation.region}</span>}
            {consultation.amount && <span className="feed-tag">{consultation.amount}</span>}
            {consultation.job    && <span className="feed-tag">{consultation.job}</span>}
          </div>

          {/* 채팅 요청 버튼 */}
          <button
            className="feed-chat-request-btn"
            onClick={() => setShowRequestModal(true)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            채팅 요청 보내기
          </button>
        </div>
      </div>

      <div className="spacer" />
      <BottomNav />

      {/* 채팅 요청 모달 */}
      {showRequestModal && (
        <div className="modal-overlay" onClick={() => { if (!reqDone) setShowRequestModal(false); }}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            {reqDone ? (
              <div className="modal-done">
                <div className="modal-done-icon">✅</div>
                <p className="modal-done-title">채팅 요청을 보냈어요!</p>
                <p className="modal-done-sub">고객이 수락하면 채팅이 시작됩니다</p>
                <button
                  className="modal-done-btn"
                  onClick={() => { setShowRequestModal(false); setReqDone(false); }}
                >
                  확인
                </button>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-title">채팅 요청 보내기</span>
                  <button className="modal-close" onClick={() => setShowRequestModal(false)}>✕</button>
                </div>

                <div className="modal-target">
                  <div className="modal-target-avatar">{consultation.nickname?.[0] ?? "?"}</div>
                  <div>
                    <p className="modal-target-name">{consultation.nickname}</p>
                    <p className="modal-target-query">
                      {consultation.query?.slice(0, 40)}{consultation.query?.length > 40 ? "..." : ""}
                    </p>
                  </div>
                </div>

                <div className="modal-fields">
                  <label className="modal-label">업체명 / 닉네임</label>
                  <input
                    className="modal-input"
                    placeholder="예) 빠른대출 김대리"
                    value={reqCompanyName}
                    onChange={e => setReqCompanyName(e.target.value.slice(0, 30))}
                  />
                  <label className="modal-label">첫 인사 메시지</label>
                  <textarea
                    className="modal-textarea"
                    placeholder={"예) 안녕하세요! 소액대출 전문 업체입니다.\n조건 맞춰드릴 수 있을 것 같아서 연락드려요 😊"}
                    value={reqMessage}
                    onChange={e => setReqMessage(e.target.value.slice(0, 200))}
                    rows={4}
                  />
                  <span className="modal-char">{reqMessage.length}/200</span>
                </div>

                <button
                  className={`modal-submit ${reqCompanyName.trim() && reqMessage.trim() ? "active" : ""}`}
                  onClick={sendChatRequest}
                  disabled={!reqCompanyName.trim() || !reqMessage.trim() || reqSending}
                >
                  {reqSending ? "전송 중..." : "채팅 요청 보내기"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
