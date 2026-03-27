"use client";

import FadeIn from "./FadeIn";
import SectionCTA from "./SectionCTA";

const serviceTypes = [
  {
    title: "「こんなサービスを作りたい」を形にする",
    desc: "アイデア段階から入り、要件を一緒に整理して、動くシステムとして本番稼働させます。SaaS・業務アプリ・管理画面など。",
    example: "例: 建設業向けマッチングSaaSを企画から3ヶ月で本番稼働",
    icon: "01",
  },
  {
    title: "古いシステムを、今の技術で作り直す",
    desc: "COBOL・VB6・RPG等の既存システムを、仕様書がなくてもソースコードから業務を読み解き、モダンWebに移行します。",
    example: "例: 10言語・41万行のレガシーコードをモダン化",
    icon: "02",
  },
  {
    title: "業務の手作業を、AIで自動化する",
    desc: "書類のOCR、データの自動分類、見積もり生成など、人手で行っている業務にAIを組み込み、工数を削減します。",
    example: "例: 許可証のOCR検証、契約書のリスク自動判定",
    icon: "03",
  },
  {
    title: "今あるシステムを改善・拡張する",
    desc: "既存システムへの機能追加や改修。業務を理解した上で、影響範囲を見極めて対応します。",
    example: "例: Spring Boot業務システムの追加開発・保守（20ヶ月）",
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
            // 05 — SERVICES
          </div>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: 12, color: "#1a1a1a" }}>
            こんな<span style={{ color: "var(--accent)" }}>課題</span>に対応します
          </h2>
          <p className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 40 }}>
            業務を理解した上で、企画から本番運用まで一貫して対応します
          </p>
        </FadeIn>

        {/* Service types */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 40 }}>
          {serviceTypes.map((s) => (
            <FadeIn key={s.title}>
              <div style={{
                border: "1px solid var(--border)", borderRadius: 4,
                padding: "24px 28px", background: "#fff", height: "100%",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", opacity: 0.3, marginBottom: 8 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 }}>
                  {s.title}
                </div>
                <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 12, flex: 1 }}>
                  {s.desc}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-faint)", borderTop: "1px solid var(--border)", paddingTop: 10 }}>
                  {s.example}
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

      <SectionCTA />
    </section>
  );
}
