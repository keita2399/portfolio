"use client";

import FadeIn from "./FadeIn";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 32px 40px", position: "relative", overflow: "hidden" }}>
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(200,134,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,134,10,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "20%", right: "-10%", width: 500, height: 500,
        background: "radial-gradient(circle, rgba(200,134,10,0.06) 0%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeIn>
          <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: 4, marginBottom: 16, opacity: 0.8 }}>
            // KEITA MATSUI
          </div>
          <div style={{ fontSize: "clamp(28px, 6vw, 48px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
            <span style={{ color: "#999" }}>松井</span>{" "}
            <span style={{ color: "var(--accent)" }}>慶太</span>
          </div>
        </FadeIn>

        <FadeIn>
          <h1 style={{ fontSize: "clamp(18px, 4vw, 32px)", fontWeight: 600, lineHeight: 1.4, marginBottom: 20, color: "var(--text)" }}>
            やりたいことを伝えるだけで、
            <br />
            <span style={{ color: "var(--accent)" }}>動くシステムが手に入る</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="font-serif-jp" style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--text-light)", marginBottom: 32, lineHeight: 1.9, maxWidth: 560, fontWeight: 300 }}>
            40年の業務システム経験 × AI協働開発。
            <br />
            企画から運用まで、一人でチーム規模の成果を出します。
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {["業務系Webアプリ", "レガシー刷新", "AI活用", "上流から実装まで一貫対応"].map((t) => (
              <span key={t} style={{ fontSize: 11, padding: "5px 14px", border: "1px solid var(--border)", borderRadius: 2, color: "var(--text-muted)", letterSpacing: 0.5 }}>
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#works"
              onClick={(e) => scrollTo(e, "#works")}
              className="cta-primary"
              style={{
                padding: "12px 28px", background: "var(--accent)", color: "#fff",
                border: "none", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                cursor: "pointer", fontWeight: 700, textDecoration: "none",
              }}
            >
              実績を見る
            </a>
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 1 }}>ARTICLES</span>
            <div style={{ width: 24, height: 1, background: "var(--border)" }} />
            <a
              href="https://zenn.dev/keita2399"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 12, color: "var(--text-light)", textDecoration: "none",
                padding: "6px 16px", border: "1px solid var(--border)", borderRadius: 2,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-light)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Zenn で技術記事を書いています
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </section>
  );
}
