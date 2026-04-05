"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type FormStatus = "idle" | "sending" | "success" | "error";

const FORMSPREE_URL = "https://formspree.io/f/mlgpjyzp";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px", background: "#fff",
  border: "1px solid #ddd", borderRadius: 2, color: "var(--text)",
  fontSize: 13, fontFamily: "inherit",
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 32px", background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
            // 06 — CONTACT
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
            ご<span style={{ color: "var(--accent)" }}>連絡</span>
          </h2>
          <div className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
            案件のご依頼・お問い合わせはこちらからお送りください
          </div>

          {/* まず話す CTA */}
          <div style={{
            padding: "20px 24px", marginBottom: 24,
            border: "1px solid var(--accent)", borderRadius: 2, background: "#fffdf5",
          }}>
            <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: 2, marginBottom: 6 }}>FIRST STEP</div>
            <div className="font-serif-jp" style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 4 }}>
              まずは30分、気軽にお話しください
            </div>
            <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 14, lineHeight: 1.7 }}>
              「こんなことできますか？」「どのくらいかかりますか？」<br />
              ざっくりした相談から大歓迎です。
            </div>
            <a
              href="https://calendar.app.google/S7jaFLrqfjLzBAQo8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", padding: "10px 24px",
                background: "var(--accent)", color: "#fff",
                borderRadius: 2, fontSize: 12, letterSpacing: 2,
                fontWeight: 700, textDecoration: "none",
              }}
            >
              空き時間を確認して予約する →
            </a>
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", marginBottom: 48,
            border: "1px solid var(--border)", borderRadius: 2, background: "#fff",
          }}>
            <span style={{ fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }}>MAIL</span>
            <a
              href="mailto:keita2399@gmail.com"
              style={{ fontSize: 13, color: "var(--text)", textDecoration: "none", letterSpacing: 0.5 }}
            >
              keita2399@gmail.com
            </a>
          </div>
        </FadeIn>

        {status === "success" && (
          <div style={{ padding: 40, textAlign: "center", border: "1px solid var(--accent)", borderRadius: 2, background: "#fff" }}>
            <div style={{ fontSize: 24, marginBottom: 12, color: "var(--accent)" }}>✓</div>
            <div style={{ color: "var(--accent)", fontSize: 14, letterSpacing: 2 }}>送信しました</div>
            <div className="font-serif-jp" style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 8 }}>内容を確認のうえ、ご連絡いたします</div>
          </div>
        )}

        {status === "error" && (
          <div style={{ padding: 40, textAlign: "center", border: "1px solid #c44", borderRadius: 2, background: "#fff" }}>
            <div style={{ fontSize: 24, marginBottom: 12, color: "#c44" }}>!</div>
            <div style={{ color: "#c44", fontSize: 14, letterSpacing: 2 }}>送信に失敗しました</div>
            <div className="font-serif-jp" style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 8 }}>
              お手数ですが、時間をおいて再度お試しください
            </div>
            <button
              onClick={() => setStatus("idle")}
              style={{ marginTop: 16, fontSize: 12, color: "var(--accent)", textDecoration: "underline", cursor: "pointer", background: "none", border: "none" }}
            >
              もう一度試す
            </button>
          </div>
        )}

        {(status === "idle" || status === "sending") && (
          <FadeIn>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input type="hidden" name="_subject" value="ポートフォリオからのお問い合わせ" />
              <input type="hidden" name="_language" value="ja" />

              <div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, letterSpacing: 1 }}>お名前</div>
                <input className="input-field" type="text" name="name" required placeholder="山田 太郎" style={inputStyle} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, letterSpacing: 1 }}>メールアドレス</div>
                <input className="input-field" type="email" name="_replyto" required placeholder="taro@example.com" style={inputStyle} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, letterSpacing: 1 }}>ご用件</div>
                <textarea
                  className="input-field"
                  name="message"
                  required
                  placeholder="ご依頼内容・案件概要をお書きください"
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-primary"
                style={{
                  padding: "14px 32px", background: "var(--accent)", color: "#fff",
                  border: "none", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                  cursor: "pointer", fontWeight: 700, alignSelf: "flex-start",
                  opacity: status === "sending" ? 0.6 : 1,
                }}
              >
                {status === "sending" ? "送信中..." : "送信する →"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
