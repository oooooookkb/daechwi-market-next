"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import BottomNav from "../components/BottomNav";
import { supabase } from "../../lib/supabase";

type Message = {
  id: number;
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

// 공개 오픈채팅방 ID (고정)
const OPEN_ROOM_ID = "open-chatroom-v1";

export default function ChatroomPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sender, setSender] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // 저장된 닉네임 불러오기
    const savedNick = localStorage.getItem("chatroom_nick");
    if (savedNick) setSender(savedNick);

    loadMessages();

    // 실시간 구독
    const channel = supabase
      .channel("open-chatroom")
      .on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "open_messages",
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as Message]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function loadMessages() {
    setLoading(true);
    const { data } = await supabase
      .from("open_messages")
      .select("*")
      .order("created_at", { ascending: true })
      .limit(100);
    setMessages(data ?? []);
    setLoading(false);
  }

  async function sendMessage() {
    if (!input.trim() || !sender.trim() || sending) return;
    setSending(true);
    localStorage.setItem("chatroom_nick", sender);
    await supabase.from("open_messages").insert({
      sender: sender.trim(),
      content: input.trim(),
    });
    setInput("");
    setSending(false);
    inputRef.current?.focus();
  }

  return (
    <>
      <Header />
      <NavTabs />
      <div className="cr-open-wrap">
        {/* 헤더 */}
        <div className="cr-open-head">
          <span className="realtime-dot" style={{ width: 8, height: 8, flexShrink: 0 }}></span>
          <span className="cr-open-title">실시간 오픈 채팅</span>
          <span className="cr-open-sub">대출 정보를 자유롭게 나눠보세요</span>
        </div>

        {/* 메시지 목록 */}
        <div className="cr-open-messages">
          {loading ? (
            <div className="cr-open-empty">불러오는 중...</div>
          ) : messages.length === 0 ? (
            <div className="cr-open-empty">
              <p>💬 첫 번째 메시지를 남겨보세요!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="cr-open-msg">
                <div className="cr-open-avatar">{msg.sender?.[0] ?? "?"}</div>
                <div className="cr-open-msg-body">
                  <div className="cr-open-msg-top">
                    <span className="cr-open-sender">{msg.sender}</span>
                    <span className="cr-open-time">{timeAgo(msg.created_at)}</span>
                  </div>
                  <div className="cr-open-bubble">{msg.content}</div>
                </div>
              </div>
            ))
          )}
          <div ref={bottomRef} />
        </div>

        {/* 입력창 */}
        <div className="cr-open-input-wrap">
          <input
            className="cr-open-nick"
            placeholder="닉네임"
            value={sender}
            onChange={e => setSender(e.target.value.slice(0, 20))}
            maxLength={20}
          />
          <div className="cr-open-input-row">
            <textarea
              ref={inputRef}
              className="cr-open-textarea"
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
              className={`cr-open-send ${input.trim() && sender.trim() ? "active" : ""}`}
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
      <BottomNav />
    </>
  );
}
