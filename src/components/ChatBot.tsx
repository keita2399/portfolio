"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "こんにちは！松井慶太のポートフォリオへようこそ。\nスキルや実績について、何でもお気軽にお聞きください。" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: newMessages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "申し訳ありません、エラーが発生しました。" }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "通信エラーが発生しました。" }]);
    } finally {
      setLoading(false);
    }
  };

  // Floating button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1000,
          width: 56, height: 56, borderRadius: "50%",
          background: "var(--accent)", color: "#fff", border: "none",
          fontSize: 24, cursor: "pointer",
          boxShadow: "0 4px 20px rgba(200,134,10,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="チャットを開く"
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 1000,
        width: 380, maxWidth: "calc(100vw - 32px)",
        height: 520, maxHeight: "calc(100vh - 48px)",
        borderRadius: 12, overflow: "hidden",
        border: "1px solid #ddd",
        boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
        display: "flex", flexDirection: "column",
        background: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "var(--accent)", color: "#fff",
          padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>💬 AIアシスタント</div>
          <div style={{ fontSize: 10, opacity: 0.8 }}>スキル・実績について何でもどうぞ</div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "none", border: "none", color: "#fff",
            fontSize: 20, cursor: "pointer", padding: 4,
          }}
          aria-label="チャットを閉じる"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        style={{
          flex: 1, overflowY: "auto", padding: 16,
          display: "flex", flexDirection: "column", gap: 12,
          background: "#f9f8f6",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
            }}
          >
            <div
              style={{
                padding: "10px 14px", borderRadius: 12,
                fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap",
                ...(msg.role === "user"
                  ? { background: "var(--accent)", color: "#fff", borderBottomRightRadius: 4 }
                  : { background: "#fff", color: "#333", border: "1px solid #e5e2dc", borderBottomLeftRadius: 4 }),
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: "flex-start", maxWidth: "85%" }}>
            <div
              style={{
                padding: "10px 14px", borderRadius: 12, borderBottomLeftRadius: 4,
                background: "#fff", border: "1px solid #e5e2dc",
                fontSize: 13, color: "#999",
              }}
            >
              考え中...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: 12, borderTop: "1px solid #e5e2dc", background: "#fff" }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.nativeEvent.isComposing && sendMessage()}
            placeholder="例：どんな案件を受けていますか？"
            style={{
              flex: 1, border: "1px solid #ddd", borderRadius: 8,
              padding: "10px 14px", fontSize: 13, outline: "none",
              fontFamily: "inherit",
            }}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              background: loading || !input.trim() ? "#ccc" : "var(--accent)",
              color: "#fff", border: "none", borderRadius: 8,
              padding: "10px 16px", fontSize: 13, fontWeight: 600,
              cursor: loading || !input.trim() ? "default" : "pointer",
              transition: "background 0.2s",
            }}
          >
            送信
          </button>
        </div>
        <div style={{ fontSize: 9, color: "#bbb", textAlign: "center", marginTop: 6 }}>
          Powered by Gemini AI — 回答は参考情報です
        </div>
      </div>
    </div>
  );
}
