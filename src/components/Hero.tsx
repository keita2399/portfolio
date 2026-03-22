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
          <div style={{ fontSize: 11, color: "var(--accent)", letterSpacing: 4, marginBottom: 24, opacity: 0.8 }}>
            // KEITA MATSUI
          </div>
        </FadeIn>

        <FadeIn>
          <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ color: "var(--text)" }}>やりたいことを伝えるだけで、</span>
            <br />
            <span style={{ color: "var(--accent)" }}>動くシステムが手に入る</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="font-serif-jp" style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--text-light)", marginBottom: 32, lineHeight: 1.9, maxWidth: 560, fontWeight: 300 }}>
            業務の課題を理解し、企画から設計・実装・運用まで一貫して対応。
            <br />
            40年の業務システム経験 × AI協働開発で、
            <br />
            一人でチーム規模の成果を出します。
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
              href="#process"
              onClick={(e) => scrollTo(e, "#process")}
              className="cta-primary"
              style={{
                padding: "12px 28px", background: "var(--accent)", color: "#fff",
                border: "none", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                cursor: "pointer", fontWeight: 700, textDecoration: "none",
              }}
            >
              進め方を見る
            </a>
            <a
              href="#works"
              onClick={(e) => scrollTo(e, "#works")}
              className="cta-secondary"
              style={{
                padding: "12px 28px", background: "transparent", color: "var(--text)",
                border: "1px solid #ccc", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                cursor: "pointer", textDecoration: "none",
              }}
            >
              実績を見る
            </a>
          </div>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </section>
  );
}
