"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError("");
    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("通信エラーが発生しました");
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const userMsgCount = messages.filter((m) => m.role === "user").length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250, 249, 246, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/#works"
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            &larr; Back
          </Link>
          <div>
            <h1
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              LINE Claude Sync
            </h1>
            <span
              style={{
                fontSize: "12px",
                color: "#06c755",
                fontWeight: 500,
              }}
            >
              Demo &middot; Gemini 2.0 Flash
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          {userMsgCount}/20
        </span>
      </header>

      {/* Info banner */}
      <div
        style={{
          background: "var(--bg-alt)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 24px",
          fontSize: "13px",
          color: "var(--text-light)",
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        LINE Bot のデモ版です。実際の製品ではスマホの LINE
        からメッセージを送り、PC の Claude Code CLI
        と会話ログが自動で共有されます。
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 16px",
          maxWidth: "720px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              marginTop: "60px",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>
              LINE Claude Sync
            </div>
            <div>
              アプリのアイデアを相談してみてください
            </div>
            <div style={{ fontSize: "12px", marginTop: "8px" }}>
              例: 「タスク管理アプリを作りたい」「飲食店の予約システムってどう作る？」
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "12px 16px",
                borderRadius:
                  msg.role === "user"
                    ? "16px 16px 4px 16px"
                    : "16px 16px 16px 4px",
                background:
                  msg.role === "user" ? "#06c755" : "white",
                color: msg.role === "user" ? "white" : "var(--text)",
                fontSize: "14px",
                lineHeight: 1.7,
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                padding: "12px 20px",
                borderRadius: "16px 16px 16px 4px",
                background: "white",
                color: "var(--text-muted)",
                fontSize: "14px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
              }}
            >
              <span className="typing-dots">...</span>
            </div>
          </div>
        )}

        {error && (
          <div
            style={{
              textAlign: "center",
              color: "#e53e3e",
              fontSize: "13px",
              padding: "8px",
            }}
          >
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "rgba(250, 249, 246, 0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border)",
          padding: "12px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            gap: "8px",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="メッセージを入力..."
            disabled={loading || userMsgCount >= 20}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: "24px",
              border: "1px solid var(--border)",
              background: "white",
              fontSize: "14px",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim() || userMsgCount >= 20}
            style={{
              padding: "12px 20px",
              borderRadius: "24px",
              border: "none",
              background:
                loading || !input.trim() ? "var(--border)" : "#06c755",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              cursor:
                loading || !input.trim() ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
