"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";

type ChatRoom = {
  id: string;
  consultation_id: number;
  company_name: string;
  created_at: string;
};

type Message = {
  id: number;
  chat_room_id: string;
  sender: string;
  content: string;
  created_at: string;
};

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return "방금 전";
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
}

export default function ChatRoomPage() {
  const { id, roomId } = useParams();
  const router = useRouter();
  const [room, setRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sender, setSender] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadData();

    const channel = supabase
      .channel(`room-${roomId}`)
      .on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "messages",
        filter: `chat_room_id=eq.${roomId}`,
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as Message]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [roomId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function loadData() {
    const [{ data: r }, { data: m }] = await Promise.all([
      supabase.from("chat_rooms").select("*").eq("id", roomId).single(),
      supabase.from("messages").select("*").eq("chat_room_id", roomId).order("created_at"),
    ]);
    setRoom(r);
    setMessages(m ?? []);
  }

  async function sendMessage() {
    if (!input.trim() || !sender.trim() || sending) return;
    setSending(true);
    await supabase.from("messages").insert({
      chat_room_id: roomId,
      consultation_id: Number(id),
      sender: sender.trim(),
      content: input.trim(),
    });
    setInput("");
    setSending(false);
  }

  if (!room) return <div className="chat-loading">불러오는 중...</div>;

  return (
    <div className="chatroom-wrap">
      {/* 헤더 */}
      <div className="chatroom-header">
        <button className="chatroom-back" onClick={() => router.push(`/chat/${id}`)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div className="chatroom-header-info">
          <span className="chatroom-header-nick">{room.company_name}</span>
          <span className="chatroom-header-sub">업체 상담</span>
        </div>
      </div>

      {/* 메시지 목록 */}
      <div className="chatroom-messages">
        {messages.length === 0 && (
          <div className="chatroom-empty">
            <p>아직 메시지가 없어요</p>
            <p>먼저 인사를 건네보세요!</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className="chatroom-msg">
            <div className="chatroom-msg-sender">{msg.sender}</div>
            <div className="chatroom-msg-bubble">{msg.content}</div>
            <div className="chatroom-msg-time">{timeAgo(msg.created_at)}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* 입력창 */}
      <div className="chatroom-input-wrap">
        <input
          className="chatroom-sender-input"
          placeholder="닉네임"
          value={sender}
          onChange={e => setSender(e.target.value.slice(0, 20))}
          maxLength={20}
        />
        <div className="chatroom-input-row">
          <textarea
            className="chatroom-textarea"
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            rows={2}
          />
          <button
            className={`chatroom-send-btn ${input.trim() && sender.trim() ? "active" : ""}`}
            onClick={sendMessage}
            disabled={!input.trim() || !sender.trim() || sending}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
