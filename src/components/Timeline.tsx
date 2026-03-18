"use client";

import FadeIn from "./FadeIn";

const entries = [
  {
    era: "1980s–90s",
    color: "#999",
    title: "COBOL / PL/I / IBM Assembler",
    desc: "金融系基幹システム開発",
    pct: 95,
    showLine: true,
  },
  {
    era: "2000s–10s",
    color: "#4a90d9",
    title: "Java / J2EE / Oracle",
    desc: "大規模業務システム設計・開発",
    pct: 85,
    showLine: true,
  },
  {
    era: "2020s–",
    color: "#c8860a",
    isAccent: true,
    title: "TypeScript / React / Next.js + AI協働開発",
    desc: "AIペア開発でフルスタック × 一人完結スタイルを確立",
    pct: 80,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-inner">
      <FadeIn>
        <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
          // 01 — CAREER
        </div>
        <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 60, color: "#1a1a1a" }}>
          キャリアの<span style={{ color: "var(--accent)" }}>旅路</span>
        </h2>
      </FadeIn>

      {entries.map((e) => (
        <FadeIn key={e.era}>
          <div style={{ display: "flex", gap: 24, marginBottom: 48, position: "relative" }}>
            <div style={{ width: 90, flexShrink: 0, paddingTop: 4 }}>
              <div style={{ fontSize: 11, color: e.isAccent ? "var(--accent)" : "#999", fontWeight: 700, letterSpacing: 1 }}>
                {e.era}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 6 }}>
              <div style={{
                width: 12, height: 12, borderRadius: "50%", background: e.color, flexShrink: 0,
                boxShadow: e.isAccent ? "0 0 12px rgba(200,134,10,0.4)" : undefined,
              }} />
              {e.showLine && <div style={{ width: 1, height: 48, background: "#ddd", marginTop: 8 }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "clamp(14px, 2.5vw, 18px)", fontWeight: 600, color: e.isAccent ? "var(--accent)" : "#333", marginBottom: 4 }}>
                {e.title}
              </div>
              <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>
                {e.desc}
              </div>
              <div style={{ height: 4, background: "#eee", borderRadius: 2, overflow: "hidden", maxWidth: 400 }}>
                <div className="skill-bar" style={{ height: "100%", width: `${e.pct}%`, background: e.color, borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
