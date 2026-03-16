"use client";

import FadeIn from "./FadeIn";
import ScrollIndicator from "./ScrollIndicator";

const oldTech = ["COBOL", "PL/I", "ASM", "MUMPS", "Fortran"];
const newTech = ["TypeScript", "React", "Python", "Rust", "AI"];

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
            // PORTFOLIO — 2025
          </div>
        </FadeIn>

        <FadeIn>
          <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 700, lineHeight: 1.05, marginBottom: 12 }}>
            <span style={{ color: "#999" }}>松井</span>
            <br />
            <span style={{ color: "var(--accent)" }}>慶太</span>
          </h1>
        </FadeIn>

        <FadeIn>
          <div className="font-serif-jp" style={{ fontSize: "clamp(13px, 2vw, 16px)", color: "var(--text-light)", marginBottom: 32, lineHeight: 1.7, maxWidth: 560, fontWeight: 300 }}>
            レガシーからクラウドへ —<br />
            <strong style={{ color: "var(--accent)" }}>10言語・41万行</strong>のレガシーシステム変換実績を持つ<br />
            40年の経験を持つITエンジニア
          </div>
        </FadeIn>

        <FadeIn>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40, alignItems: "center" }}>
            {oldTech.map((t) => (
              <span key={t} style={{ fontSize: 11, padding: "4px 12px", border: "1px solid #ccc", borderRadius: 2, color: "var(--text-muted)", letterSpacing: 1 }}>
                {t}
              </span>
            ))}
            <span style={{ color: "var(--accent)", fontSize: 14, margin: "0 4px" }}>→</span>
            {newTech.map((t) => (
              <span key={t} style={{ fontSize: 11, padding: "4px 12px", border: "1px solid var(--accent)", borderRadius: 2, color: "var(--accent)", letterSpacing: 1 }}>
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
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="cta-secondary"
              style={{
                padding: "12px 28px", background: "transparent", color: "var(--text)",
                border: "1px solid #ccc", borderRadius: 2, fontSize: 12, letterSpacing: 2,
                cursor: "pointer", textDecoration: "none",
              }}
            >
              お問い合わせ
            </a>
          </div>
        </FadeIn>
      </div>

      <ScrollIndicator />
    </section>
  );
}
