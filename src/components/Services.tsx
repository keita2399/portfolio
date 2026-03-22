"use client";

import FadeIn from "./FadeIn";

const serviceTypes = [
  {
    title: "業務系Webアプリ新規開発",
    desc: "要件定義から設計・実装・本番デプロイまで一貫対応。SaaS・管理画面・マッチングサイトなど。",
    icon: "01",
  },
  {
    title: "レガシーシステム刷新",
    desc: "COBOL・VB6・RPG等の既存システムをモダンWeb（React/Next.js）に移行。40年の業務知識で仕様を読み解きます。",
    icon: "02",
  },
  {
    title: "AI機能の組み込み",
    desc: "既存システムへのAI機能追加。OCR検証・自動分類・チャットボット・見積もり自動生成など。",
    icon: "03",
  },
  {
    title: "既存システムの機能追加・改修",
    desc: "Next.js / React / Spring Boot等のモダン技術スタックでの追加開発・保守対応。",
    icon: "04",
  },
];

const conditions = [
  { label: "稼働形態", value: "フルタイム / パートタイム（週3日〜）" },
  { label: "契約形態", value: "準委任 / 請負" },
  { label: "勤務地", value: "フルリモート（山梨県在住）" },
  { label: "即日対応", value: "相談可" },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 32px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: 10, color: "var(--accent)", letterSpacing: 4, marginBottom: 12 }}>
            // 04 — SERVICES
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
            対応可能な<span style={{ color: "var(--accent)" }}>案件</span>
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 40 }}>
            AIペア開発により、一人でも短期間で本番品質のシステムを構築します
          </p>
        </FadeIn>

        {/* Service types */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
          {serviceTypes.map((s) => (
            <FadeIn key={s.title}>
              <div style={{
                border: "1px solid var(--border)", borderRadius: 4,
                padding: "24px 28px", background: "#fff", height: "100%",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", opacity: 0.3, marginBottom: 8 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 }}>
                  {s.title}
                </div>
                <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8 }}>
                  {s.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Conditions */}
        <FadeIn>
          <div style={{
            border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)",
            borderRadius: 4, padding: "20px 28px", background: "#fff",
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>
              稼働条件
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {conditions.map((c) => (
                <div key={c.label} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", flexShrink: 0, width: 80 }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: "#1a1a1a", fontWeight: 500 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
