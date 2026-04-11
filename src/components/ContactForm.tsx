"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormStatus = "idle" | "sending" | "success" | "error";

const FORMSPREE_URL = "https://formspree.io/f/mlgpjyzp";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px",
  background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.2)", borderRadius: 2,
  color: "#fff", fontSize: 13, fontFamily: "inherit",
  outline: "none", transition: "border-color 0.2s",
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
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
    <section id="contact" style={{ padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(30,58,138,0.91) 50%, rgba(15,23,42,0.96) 100%)",
        }} />
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontSize: 10, color: "rgba(147,197,253,0.8)", letterSpacing: 4, marginBottom: 12 }}>
            // 06 — CONTACT
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#fff" }}>
            ご<span style={{ color: "#93c5fd" }}>連絡</span>
          </h2>
          <div className="font-serif-jp" style={{ fontSize: 13, color: "rgba(219,234,254,0.7)", marginBottom: 24 }}>
            案件のご依頼・お問い合わせはこちらからお送りください
          </div>

          {/* まず話す CTA */}
          <div style={{
            padding: "20px 24px", marginBottom: 24,
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(147,197,253,0.4)",
            borderLeft: "3px solid #60a5fa",
            borderRadius: 2,
          }}>
            <div style={{ fontSize: 11, color: "#93c5fd", letterSpacing: 2, marginBottom: 6 }}>FIRST STEP</div>
            <div className="font-serif-jp" style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
              まずは30分、気軽にお話しください
            </div>
            <div className="font-serif-jp" style={{ fontSize: 12, color: "rgba(219,234,254,0.7)", marginBottom: 14, lineHeight: 1.7 }}>
              「こんなことできますか？」「どのくらいかかりますか？」<br />
              ざっくりした相談から大歓迎です。
            </div>
            <a
              href="https://calendar.app.google/S7jaFLrqfjLzBAQo8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", padding: "10px 24px",
                background: "#2563eb", color: "#fff",
                borderRadius: 2, fontSize: 12, letterSpacing: 2,
                fontWeight: 700, textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#2563eb"; }}
            >
              空き時間を確認して予約する →
            </a>
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", marginBottom: 48,
            background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: 2,
          }}>
            <span style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", flexShrink: 0 }}>MAIL</span>
            <a
              href="mailto:keita2399@gmail.com"
              style={{ fontSize: 13, color: "rgba(219,234,254,0.9)", textDecoration: "none", letterSpacing: 0.5 }}
            >
              keita2399@gmail.com
            </a>
          </div>
        </motion.div>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: 40, textAlign: "center",
              background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(96,165,250,0.4)", borderRadius: 2,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 12, color: "#60a5fa" }}>✓</div>
            <div style={{ color: "#93c5fd", fontSize: 14, letterSpacing: 2 }}>送信しました</div>
            <div className="font-serif-jp" style={{ color: "rgba(219,234,254,0.7)", fontSize: 12, marginTop: 8 }}>内容を確認のうえ、ご連絡いたします</div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: 40, textAlign: "center",
              background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(220,38,38,0.4)", borderRadius: 2,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 12, color: "#f87171" }}>!</div>
            <div style={{ color: "#f87171", fontSize: 14, letterSpacing: 2 }}>送信に失敗しました</div>
            <div className="font-serif-jp" style={{ color: "rgba(219,234,254,0.7)", fontSize: 12, marginTop: 8 }}>
              お手数ですが、時間をおいて再度お試しください
            </div>
            <button
              onClick={() => setStatus("idle")}
              style={{ marginTop: 16, fontSize: 12, color: "#93c5fd", textDecoration: "underline", cursor: "pointer", background: "none", border: "none" }}
            >
              もう一度試す
            </button>
          </motion.div>
        )}

        {(status === "idle" || status === "sending") && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input type="hidden" name="_subject" value="ポートフォリオからのお問い合わせ" />
            <input type="hidden" name="_language" value="ja" />

            <div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", marginBottom: 6, letterSpacing: 1 }}>お名前</div>
              <input
                type="text" name="name" required placeholder="山田 太郎"
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", marginBottom: 6, letterSpacing: 1 }}>メールアドレス</div>
              <input
                type="email" name="_replyto" required placeholder="taro@example.com"
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", marginBottom: 6, letterSpacing: 1 }}>ご相談の種別</div>
              <select
                name="inquiry_type" required
                style={{
                  ...inputStyle,
                  appearance: "none" as const,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(147,197,253,0.8)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: 40,
                  cursor: "pointer",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              >
                <option value="" disabled selected style={{ background: "#0f172a" }}>選択してください</option>
                <option value="新規開発の依頼" style={{ background: "#0f172a" }}>新規開発の依頼</option>
                <option value="レガシーシステムの刷新" style={{ background: "#0f172a" }}>レガシーシステムの刷新</option>
                <option value="既存システムの改修・拡張" style={{ background: "#0f172a" }}>既存システムの改修・拡張</option>
                <option value="AI活用の相談" style={{ background: "#0f172a" }}>AI活用の相談</option>
                <option value="まず話を聞きたい" style={{ background: "#0f172a" }}>まず話を聞きたい</option>
                <option value="その他" style={{ background: "#0f172a" }}>その他</option>
              </select>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(147,197,253,0.7)", marginBottom: 6, letterSpacing: 1 }}>ご用件</div>
              <textarea
                name="message" required
                placeholder="案件の概要・背景・ご要望など、ざっくりで構いません"
                rows={5}
                style={{ ...inputStyle, resize: "vertical" as const }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                padding: "14px 32px", background: "#2563eb", color: "#fff",
                border: "none", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                cursor: "pointer", fontWeight: 700, width: "100%",
                opacity: status === "sending" ? 0.6 : 1,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2563eb"; }}
            >
              {status === "sending" ? "送信中..." : "送信する →"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
