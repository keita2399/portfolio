"use client";

import FadeIn from "./FadeIn";

const skills = [
  { name: "COBOL / PL/I", pct: 95, color: "#999", level: "業務級" },
  { name: "IBM Mainframe ASM", pct: 88, color: "#999", level: "業務級" },
  { name: "Java", pct: 85, color: "#4a90d9", level: "業務級" },
  { name: "Python", pct: 65, color: "#c8860a", level: "実践中" },
  { name: "TypeScript", pct: 60, color: "#c8860a", level: "実践中" },
  { name: "React / Next.js", pct: 55, color: "#c8860a", level: "実践中" },
  { name: "Rust", pct: 40, color: "#c8860a", level: "習得中" },
  { name: "AI活用 (Claude Code)", pct: 90, color: "#2d8f4e", level: "実践中" },
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
              モダン技術は現在も積極的に習得中です。40年の経験とAIを組み合わせ、レガシーとモダンの橋渡しができることが私の強みです。直近では8言語のレガシーシステム変換を完了し、383,418件のコードコメント分析プロジェクトを推進しています。
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
