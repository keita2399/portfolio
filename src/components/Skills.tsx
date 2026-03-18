"use client";

import FadeIn from "./FadeIn";

const skills = [
  { name: "AI活用 (Claude Code)", pct: 95, color: "#2d8f4e", level: "主力ツール" },
  { name: "TypeScript", pct: 85, color: "#c8860a", level: "業務級" },
  { name: "React / Next.js", pct: 85, color: "#c8860a", level: "業務級" },
  { name: "Node.js / Prisma", pct: 80, color: "#c8860a", level: "業務級" },
  { name: "Python / FastAPI", pct: 70, color: "#c8860a", level: "業務級" },
  { name: "Java / Spring Boot", pct: 85, color: "#4a90d9", level: "業務級" },
  { name: "PostgreSQL", pct: 80, color: "#4a90d9", level: "業務級" },
  { name: "COBOL / PL/I", pct: 95, color: "#999", level: "業務級" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 32px", background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
            // 02 — SKILLS
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 60, color: "#1a1a1a" }}>
            技術<span style={{ color: "var(--accent)" }}>スタック</span>
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gap: 20, maxWidth: 600 }}>
          {skills.map((s) => (
            <FadeIn key={s.name}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 160, flexShrink: 0, fontSize: 12, color: "var(--text-light)" }}>
                  {s.name}
                </div>
                <div style={{ flex: 1, height: 6, background: "#ddd", borderRadius: 3, overflow: "hidden" }}>
                  <div className="skill-bar" style={{ height: "100%", width: `${s.pct}%`, background: s.color, borderRadius: 3 }} />
                </div>
                <div style={{ width: 52, fontSize: 10, color: s.color, textAlign: "right", letterSpacing: 0.5 }}>
                  {s.level}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div style={{ marginTop: 48, padding: "20px 24px", border: "1px solid #ddd", borderLeft: "3px solid var(--accent)", borderRadius: 2, maxWidth: 600, background: "#fff" }}>
            <div style={{ fontSize: 11, color: "var(--accent)", marginBottom: 8, letterSpacing: 1 }}>NOTE</div>
            <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8 }}>
              AIエージェント（Claude Code）との協働開発を標準ワークフローとし、設計・実装・レビュー・ドキュメント作成を一人で完結。直近ではSaaSプラットフォームを3ヶ月で本番稼働させた実績があります。40年の業務理解力 × AIの開発速度で、一人でチーム規模の成果を出すスタイルです。
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
