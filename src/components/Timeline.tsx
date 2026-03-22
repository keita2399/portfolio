"use client";

import FadeIn from "./FadeIn";

const entries = [
  {
    era: "1985–99",
    color: "#999",
    title: "金融の基幹業務を支えるシステムを設計・構築",
    desc: "生命保険・人事管理など、止まることが許されない基幹システムを開発。業務の根幹を理解する力はこの時期に培われた。",
    tech: "COBOL / PL/I / IBM Assembler",
    showLine: true,
  },
  {
    era: "2000–19",
    color: "#4a90d9",
    title: "数万人が使う業務システムのPM・リーダー",
    desc: "証券・保険・B2B取引・ECなど多業種で、要件定義から本番リリースまでチームを率いて遂行。業務理解 × 技術判断の両輪で20年。",
    tech: "Java / Spring Boot / Oracle / AWS / Azure",
    showLine: true,
  },
  {
    era: "2020–",
    color: "#c8860a",
    isAccent: true,
    title: "一人で事業を形にするスタイルを確立",
    desc: "AI協働開発により、企画段階から設計・実装・運用まで単独で完結。建設業向けSaaSを3ヶ月で本番稼働させた実績を持つ。",
    tech: "TypeScript / React / Next.js / AI協働開発",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-inner">
      <FadeIn>
        <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
          // 02 — CAREER
        </div>
        <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 60, color: "#1a1a1a" }}>
          40年の<span style={{ color: "var(--accent)" }}>現場</span>から
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
              {e.showLine && <div style={{ width: 1, height: 60, background: "#ddd", marginTop: 8 }} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "clamp(14px, 2.5vw, 18px)", fontWeight: 600, color: e.isAccent ? "var(--accent)" : "#333", marginBottom: 6 }}>
                {e.title}
              </div>
              <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", marginBottom: 8, lineHeight: 1.8 }}>
                {e.desc}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-faint)", letterSpacing: 0.5 }}>
                {e.tech}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
