import Link from "next/link";
import type { Metadata } from "next";
import ResumeExcelDownload from "@/components/ResumeExcelDownload";

export const metadata: Metadata = {
  title: "業務経歴書 — 松井 慶太",
  description: "AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア。業務経歴書。",
};

const skills = [
  { category: "主軸技術", detail: "TypeScript, React, Next.js (App Router), Node.js, Prisma, Tailwind CSS" },
  { category: "対応可能", detail: "Python, Flutter/Dart, Java（Spring Boot）, JavaScript, jQuery, C#.NET, SQL" },
  { category: "DB・インフラ", detail: "PostgreSQL（Neon / Aurora RDS）, Oracle, MySQL / Vercel, AWS, Azure" },
  { category: "外部サービス連携", detail: "Google Maps API, LINE Messaging API, Gemini AI, Claude API, 決済サービス（ZEUS）, 美術館API（MET/AIC等）" },
  { category: "AI開発ツール", detail: "Claude Code（主力）, Claude API, GitHub Copilot" },
  { category: "開発手法", detail: "アジャイル（スクラム）、ウォーターフォール、全工程対応（要件定義〜運用）" },
  { category: "レガシー言語", detail: "COBOL, PL/I, RPG, VB6, MUMPS, Fortran, QBasic, Ada, MAD-SLIP" },
  { category: "業務知識", detail: "金融（生命保険・変額保険）、建設、B2B取引DX、ECサイト" },
];

const aiWorkflow = [
  { phase: "設計", desc: "要件をAIと壁打ちし、DB設計・API設計・画面構成を短時間で固める" },
  { phase: "実装", desc: "AIとのペアプログラミングで、コード品質を維持しながら高速に実装" },
  { phase: "レビュー", desc: "AIによるコードレビュー・セキュリティチェック・ドキュメント整合性検証" },
  { phase: "ドキュメント", desc: "設計書・運用手順書・操作マニュアルをコードベースと常に同期" },
];

const careerHighlights = [
  {
    title: "建設現場向け発生土・受入土マッチングプラットフォーム新規開発",
    meta: "建設 ｜ フルスタック（1人請負） ｜ 3ヶ月（2026/01〜2026/03）",
    desc: "建設現場間で発生土・受入土をマッチングするSaaSプラットフォームを、企画ヒアリングから本番デプロイ・運用まで単独で担当。AIペア開発（Claude Code）により、当初見積もり136人日を大幅に超える機能を3ヶ月で実装・リリース。",
    tech: "Next.js 14 (App Router), TypeScript, React 18, Prisma, PostgreSQL (Neon), Tailwind CSS, Vercel, Vercel Blob",
    features: [
      { cat: "地図検索", detail: "Google Maps API連携。ジオコーディング、最大500件ピン同時表示、Haversine距離計算" },
      { cat: "認証・セキュリティ", detail: "HMAC-SHA256署名付きCookie認証、CSRF対策、アカウントロック、ロールベースアクセス制御" },
      { cat: "決済連携", detail: "ZEUS Payment Service CGIコールバック処理、IP検証、サブスクリプション管理" },
      { cat: "LINE連携", detail: "LINE Messaging API。6桁コード認証によるアカウント紐付け、各種通知配信" },
      { cat: "AI検証", detail: "Gemini APIによる許可証OCR検証・現場情報の整合性チェック。AI使用量管理画面" },
      { cat: "管理ダッシュボード", detail: "会員・現場・決済・トラブル・メール配信・CSV出力・メンテナンスモード" },
      { cat: "自動処理", detail: "cronによるトライアル期限通知・工期完了自動チェック" },
      { cat: "ドキュメント", detail: "設計書・運用手順書・操作マニュアル（コードベースとの整合性をAIレビューで担保）" },
    ],
  },
  {
    title: "レガシーコード近代化・コード鑑定書シリーズ",
    meta: "IT ｜ 設計・開発・記事執筆（1人請負） ｜ 2026/03〜継続中",
    desc: "COBOL・PL/I・RPG・VB6・MUMPS・Fortran・QBasic・Ada・MAD-SLIP等13言語のレガシーコードをモダンWebアプリに変換。さらに歴史的ソフトウェア38件の「コード鑑定書」を制作し、技術考古学シリーズとして展開。",
    tech: "Python 3.11, FastAPI, React, Vite, SQLite, Rust, Claude Code",
    bullets: [
      "13言語・合計44万行超のレガシーコードを平均85%削減してモダンWeb化",
      "コード鑑定書38本制作（ELIZA, CP/M, Smalltalk-80, SQLite, TeX, Multics, Rogue等）",
      "Legacy Code Museum（Webアプリ）で383,418件のコードコメントを収集・感情分析",
      "変換・鑑定パターンを体系化した技術記事48本を執筆",
    ],
  },
  {
    title: "B2B取引DXプラットフォーム開発・保守",
    meta: "金融 ｜ メンバー ｜ 20ヶ月（2024/04〜2025/11）",
    desc: "B2B取引DXプラットフォームの開発・保守に継続参画。要件定義・基本設計からPostgreSQLバージョンアップ対応、データ加工ツール開発、リリース対応まで幅広く担当。",
    tech: "Spring Boot, PostgreSQL (Aurora RDS), AWS, Shell, Git",
  },
  {
    title: "変額保険WEBシステム開発・インターネット拡張",
    meta: "保険 ｜ 開発リーダー兼PM（4名体制） ｜ 26ヶ月（2021/03〜2023/05）",
    desc: "複雑な変額保険WEBシステムの要件定義から製造を一貫して主導。プロジェクトのインターネット展開に伴い、Azureへの移行とアジャイル（スクラム）開発の導入を技術面から推進。",
    tech: "Java, jQuery, Oracle, VB, Azure",
  },
];

const projectList = [
  { no: 1, industry: "IT", system: "レガシーコード近代化・鑑定書", role: "設計・開発・執筆", period: "26/03〜（継続中）", tech: "Python, FastAPI, React, Rust, Claude Code, 13レガシー言語" },
  { no: 2, industry: "建設", system: "マッチングプラットフォーム", role: "フルスタック", period: "26/01-26/03（3）", tech: "Next.js 14, TypeScript, Prisma, PostgreSQL, Google Maps API, LINE, Gemini AI" },
  { no: 3, industry: "金融", system: "B2B取引DX", role: "メンバー", period: "24/04-25/11（20）", tech: "Spring Boot, PostgreSQL, Aurora RDS, AWS" },
  { no: 4, industry: "金融", system: "免税管理", role: "メンバー", period: "24/09-24/10（2）", tech: "AWS" },
  { no: 5, industry: "通信", system: "電柱管理", role: "メンバー", period: "23/12-24/02（3）", tech: "—" },
  { no: 6, industry: "商社", system: "ECサイト移行", role: "PM", period: "23/06-23/11（6）", tech: "MySQL, SQL" },
  { no: 7, industry: "保険", system: "変額保険管理システム", role: "PM兼開発リーダー", period: "21/03-23/05（26）", tech: "Java, jQuery, Oracle, VB, Azure" },
  { no: 8, industry: "小売業", system: "ECサイト管理", role: "PMOメンバー", period: "20/10-21/02（5）", tech: "Oracle" },
  { no: 9, industry: "輸送機器", system: "販売支援", role: "PMリーダー", period: "19/07-20/09（15）", tech: "Linux, Oracle, Java, VBA" },
  { no: 10, industry: "小売業", system: "ECサイト管理", role: "PMリーダー", period: "19/04-19/06（3）", tech: "Linux, MySQL, Java" },
  { no: 11, industry: "生保", system: "営業サポート", role: "メンバー", period: "18/07-19/03（9）", tech: "PostgreSQL, VBA" },
  { no: 12, industry: "生保", system: "保全ペーパーレス対応", role: "PMリーダー", period: "17/04-18/06（15）", tech: "Oracle, Java, JavaScript, jQuery, COBOL" },
  { no: 13, industry: "新聞", system: "会員サイト管理", role: "PMリーダー兼メンバー", period: "16/08-17/03（8）", tech: "PostgreSQL, Hibernate, Java, JavaScript" },
  { no: 14, industry: "公共", system: "年金管理", role: "サブリーダー", period: "16/03-16/07（5）", tech: "Oracle, Java" },
  { no: 15, industry: "証券", system: "取引管理", role: "サブリーダー兼メンバー", period: "15/04-16/01（10）", tech: "Oracle, Java" },
  { no: 16, industry: "商社", system: "建機リース・レンタル管理", role: "PMリーダー兼メンバー", period: "14/10-15/03（6）", tech: "Oracle, Java" },
  { no: 17, industry: "商社", system: "船便貿易管理", role: "サブリーダー兼メンバー", period: "13/07-14/01（7）", tech: "Oracle, Java, JavaScript" },
  { no: 18, industry: "通信", system: "システム開発工程管理", role: "サブリーダー兼メンバー", period: "13/01-13/06（6）", tech: "Oracle, PostgreSQL, Java, C#.NET, Spring" },
  { no: 19, industry: "公共", system: "音声コード管理", role: "PM", period: "10/06-12/12（30）", tech: "C, C++, C#" },
  { no: 20, industry: "電機", system: "人事管理", role: "PM", period: "02/04-09/04（85）", tech: "COBOL, PLI, Java" },
  { no: 21, industry: "電機", system: "健康管理", role: "PM", period: "00/04-02/03（23）", tech: "Java, JavaScript" },
];

const portfolio = [
  { name: "BtoB業種特化マッチングSaaS", desc: "業務課題を事業化。企画から3ヶ月で本番稼働（約30画面・40API・24テーブル）", tech: "Next.js, TypeScript, Prisma, PostgreSQL, LINE API, Gemini API, Claude API", url: "NDA" },
  { name: "DX提案アシスタント", desc: "業務の流れを言葉で説明するだけでAIが業務フロー図・ボトルネック分析・要件定義書を自動生成", tech: "Next.js, TypeScript, Gemini API, Claude API, SSE", url: "https://estimate-ai-xi.vercel.app/flow" },
  { name: "Excel→Web/GAS化", desc: "Excelアップロード→構造分析→Web化プロトタイプ自動生成。VBA・ActiveX対応", tech: "Next.js, TypeScript, SheetJS, Gemini API, CFB", url: "https://estimate-ai-xi.vercel.app/excel" },
  { name: "AI見積もりアシスタント", desc: "作りたいアプリを説明するだけで画面設計・技術選定・工数見積もりを自動生成", tech: "Next.js, TypeScript, Gemini API, Claude API", url: "https://estimate-ai-xi.vercel.app/estimate" },
  { name: "AI書類分析ツール", desc: "書類画像をアップロード→文書種別判定・記載内容の自動読み取り・構造化", tech: "Next.js, TypeScript, Gemini API", url: "https://ai-document-checker-keita2399s-projects.vercel.app" },
  { name: "AI契約書チェッカー", desc: "契約書をアップロードするとAIがリスク条項の検出・不利な条件の指摘・修正案を提示", tech: "Next.js, TypeScript, Gemini API", url: "https://contract-checker-vert.vercel.app" },
  { name: "AIレシートスキャナー", desc: "レシートを撮影するだけで店名・日付・金額・品目を自動データ化", tech: "Next.js, TypeScript, Gemini API", url: "https://receipt-scanner-iota.vercel.app" },
  { name: "LINE×Claude連携ボット", desc: "LINEでの会話をClaude AIが応答。モバイルとデスクトップで会話履歴を同期", tech: "Next.js, TypeScript, LINE Messaging API, Claude API, GitHub Gist", url: "/demo/chat" },
  { name: "AIチャットボット", desc: "ポートフォリオ内AIアシスタント。業務経歴書全情報をナレッジベース化し訪問者の質問に回答", tech: "Next.js, TypeScript, Gemini API", url: "このサイトで稼働中" },
  { name: "移動時間計算アプリ", desc: "Google Maps APIで4移動手段の所要時間・ルートを比較表示", tech: "Next.js, TypeScript, Google Maps API", url: "https://travel-time-app-keita2399s-projects.vercel.app" },
  { name: "LINE 通知デモアプリ", desc: "LINE Messaging APIでテキスト・画像・スタンプの3種メッセージをBot送信", tech: "Next.js, TypeScript, LINE Messaging API", url: "https://line-notify-app-keita2399s-projects.vercel.app" },
  { name: "アートさんぽシリーズ", desc: "4美術館API+Wikidata SPARQL で作品取得、GLSL Shader・Three.js 3Dオランジュリー、7アプリ展開", tech: "Flutter, Dart, Three.js, GLSL, Vercel", url: "https://sanpo-monet.vercel.app" },
  { name: "レガシーコード変換プロジェクト", desc: "13言語・44万行超→3万行（平均85%削減）コード変換", tech: "COBOL, PL/I, RPG, VB6, FastAPI, React, Claude Code", url: "/works/legacy-conversions" },
  { name: "Legacy Code Museum & コード鑑定書", desc: "383K件のコードコメント収集・感情分析・インタラクティブ展示＋鑑定書38本", tech: "Python, Next.js, TypeScript, D3.js", url: "https://gstate-gk.github.io/legacy-code-museum/" },
];

/* ──────────────── shared inline‑style helpers ──────────────── */
const sectionTitle = (text: string) => (
  <h2 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 700, marginBottom: 24, paddingBottom: 8, borderBottom: "2px solid var(--accent)" }}>
    {text}
  </h2>
);

const tableCell: React.CSSProperties = { padding: "8px 12px", borderBottom: "1px solid var(--border)", fontSize: 13, verticalAlign: "top" };
const tableHead: React.CSSProperties = { ...tableCell, background: "var(--bg-alt)", fontWeight: 600, whiteSpace: "nowrap" };

export default function ResumePage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 60px" }}>
      {/* Back link */}
      <Link href="/" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none", letterSpacing: 1 }}>
        ← ポートフォリオに戻る
      </Link>

      {/* Header */}
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, marginBottom: 6 }}>
          業務<span style={{ color: "var(--accent)" }}>経歴書</span>
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 12 }}>
          更新日: 2026年3月28日
        </p>

        {/* Download buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/業務経歴書_松井慶太.pdf"
            download
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", fontSize: 13, fontWeight: 600,
              background: "var(--accent)", color: "#fff",
              borderRadius: 4, textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseOver={undefined}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            PDF ダウンロード
          </a>
          <ResumeExcelDownload projectList={projectList} skills={skills} portfolio={portfolio} />
        </div>
      </div>

      {/* Profile hero — Web: dark / Print(PDF): white */}
      <style>{`
        .profile-hero {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2520 100%);
          border: 1px solid rgba(200,134,10,0.2);
          border-radius: 8px; padding: 28px 32px; margin-bottom: 32px;
        }
        .profile-hero .profile-name { color: #c8860a; }
        .profile-hero .profile-name-en { color: #b0a594; }
        .profile-hero .profile-tagline { color: #d4c5a9; }
        .profile-hero .profile-meta { color: #b0a594; }
        .profile-hero .profile-link { color: #c8860a; border-bottom: 1px solid rgba(200,134,10,0.3); }
        @media print {
          .profile-hero {
            background: #fff !important;
            border: 1px solid var(--border) !important;
            border-top: 3px solid var(--accent) !important;
          }
          .profile-hero .profile-name { color: #1a1a1a !important; }
          .profile-hero .profile-name-en { color: var(--text-muted) !important; }
          .profile-hero .profile-tagline { color: #333 !important; }
          .profile-hero .profile-meta { color: var(--text-light) !important; }
          .profile-hero .profile-link { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }
        }
      `}</style>
      <div className="profile-hero">
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <div className="profile-name" style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 800, lineHeight: 1.2 }}>
            松井 慶太
          </div>
          <div className="profile-name-en" style={{ fontSize: 12, letterSpacing: 1 }}>Keita Matsui</div>
        </div>

        <p className="profile-tagline" style={{ fontSize: 14, marginTop: 14, lineHeight: 1.6, fontStyle: "italic", borderLeft: "2px solid var(--accent)", paddingLeft: 16 }}>
          AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア
        </p>

        <div className="profile-meta" style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", marginTop: 16, fontSize: 13 }}>
          <span>IT業界 約40年（1985年〜）</span>
          <span>拠点: 山梨県</span>
          <span>フルスタック ／ AI協働開発</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 14, fontSize: 12 }}>
          <a className="profile-link" href="https://portfolio-two-orpin-45.vercel.app" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none" }}>
            Portfolio Site ↗
          </a>
          <a className="profile-link" href="https://github.com/keita2399/portfolio" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: "none" }}>
            GitHub ↗
          </a>
        </div>
      </div>

      {/* AI協働開発 */}
      <section style={{ marginBottom: 32 }}>
        {sectionTitle("AI協働開発")}
        <p className="font-serif-jp" style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.7, marginBottom: 16 }}>
          AIを補助ツールとしてではなく、設計パートナーとして活用するスタイルを確立。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {aiWorkflow.map((w) => (
            <div key={w.phase} style={{
              border: "1px solid var(--border)", borderRadius: 4,
              padding: "16px 20px", background: "#fff",
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", marginBottom: 6, letterSpacing: 1 }}>{w.phase}</div>
              <div className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.7 }}>{w.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* スキルサマリー */}
      <section style={{ marginBottom: 48, breakBefore: "page" }}>
        {sectionTitle("スキルサマリー")}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {skills.map((s) => (
              <tr key={s.category}>
                <td style={tableHead}>{s.category}</td>
                <td className="font-serif-jp" style={tableCell}>{s.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 業務経歴（抜粋） */}
      <section style={{ marginBottom: 48 }}>
        {sectionTitle("業務経歴（抜粋）")}
        <div style={{ display: "grid", gap: 24 }}>
          {careerHighlights.map((c, i) => (
            <div key={i} style={{
              border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)",
              borderRadius: 4, background: "#fff", padding: "20px 24px",
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{i + 1}. {c.title}</h3>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 12 }}>{c.meta}</div>
              <p className="font-serif-jp" style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.8, marginBottom: 12 }}>{c.desc}</p>
              <div style={{ fontSize: 12, marginBottom: 12 }}>
                <span style={{ fontWeight: 600 }}>技術構成: </span>
                <span style={{ color: "var(--text-light)" }}>{c.tech}</span>
              </div>
              {c.features && (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {c.features.map((f) => (
                      <tr key={f.cat}>
                        <td style={{ ...tableHead, fontSize: 11, width: 120 }}>{f.cat}</td>
                        <td className="font-serif-jp" style={{ ...tableCell, fontSize: 12 }}>{f.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {c.bullets && (
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {c.bullets.map((b) => (
                    <li key={b} className="font-serif-jp" style={{ fontSize: 12, color: "var(--text-light)", lineHeight: 1.8 }}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ポートフォリオ */}
      <section style={{ marginBottom: 48 }}>
        {sectionTitle("ポートフォリオ（デモ公開中）")}
        <div style={{ display: "grid", gap: 8 }}>
          {portfolio.map((p) => (
            <div key={p.name} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "12px 16px", border: "1px solid var(--border)", borderRadius: 4, background: "#fff",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</div>
                <div className="font-serif-jp" style={{ fontSize: 11, color: "var(--text-light)" }}>{p.desc}</div>
                <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{p.tech}</div>
              </div>
              {!["NDA", "非公開", "社内ツール", "このサイトで稼働中"].includes(p.url) ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 10, color: "#10b981", fontWeight: 600, textDecoration: "none", flexShrink: 0, marginLeft: 12 }}>
                  DEMO ↗
                </a>
              ) : (
                <span style={{ fontSize: 10, color: "var(--text-muted)", flexShrink: 0, marginLeft: 12 }}>{p.url}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 自己PR */}
      <section style={{ marginBottom: 48 }}>
        {sectionTitle("自己PR")}
        <div className="font-serif-jp" style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.9 }}>
          <p style={{ marginBottom: 16 }}>
            ユーザーの業務や利用シーンを理解した上で「実際に動くもの」を作ることを最も重視している。40年のキャリアの中で、COBOL/PLIの汎用機時代からJava、C#.NETを経て、現在のTypeScript/React/Next.jsに至るまで、常に実装の現場に身を置いてきた。
          </p>
          <p style={{ marginBottom: 16 }}>
            現在はAIエージェントとの協働開発により、一人でも設計から本番運用まで完結できる体制を確立している。これは単にコードを速く書けるということではなく、設計の壁打ち、コードレビュー、セキュリティチェック、ドキュメント整合性検証までを含む、開発プロセス全体の質と速度を両立させるものである。
          </p>
          <p>
            チーム開発でも同じ手法を持ち込むことで、メンバーとしての生産性を大幅に引き上げることが可能。PM/リーダー経験（最大26ヶ月・4名チーム）もあるが、現在は実装を主軸とした価値提供を志向している。
          </p>
        </div>
      </section>

      {/* プロジェクト一覧 */}
      <section style={{ marginBottom: 48 }}>
        {sectionTitle("プロジェクト一覧（全21件）")}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead>
              <tr>
                {["No.", "業種", "システム名", "役割", "期間", "主要技術"].map((h) => (
                  <th key={h} style={{ ...tableHead, fontSize: 11, borderBottom: "2px solid var(--accent)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectList.map((p) => (
                <tr key={p.no}>
                  <td style={{ ...tableCell, textAlign: "center", fontWeight: 600 }}>{p.no}</td>
                  <td style={{ ...tableCell, whiteSpace: "nowrap" }}>{p.industry}</td>
                  <td style={{ ...tableCell, fontWeight: 500, whiteSpace: "nowrap" }}>{p.system}</td>
                  <td style={{ ...tableCell, fontSize: 11, whiteSpace: "nowrap" }}>{p.role}</td>
                  <td style={{ ...tableCell, fontSize: 11, whiteSpace: "nowrap" }}>{p.period}</td>
                  <td style={{ ...tableCell, fontSize: 11, color: "var(--text-light)" }}>{p.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Download footer */}
      <div style={{
        textAlign: "center", padding: "32px 0", borderTop: "1px solid var(--border)",
      }}>
        <a
          href="/業務経歴書_松井慶太.pdf"
          download
          className="cta-primary"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "12px 28px", fontSize: 14, fontWeight: 600,
            background: "var(--accent)", color: "#fff",
            borderRadius: 4, textDecoration: "none",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          PDF ダウンロード
        </a>
        <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 12 }}>
          A4 サイズ・印刷対応
        </p>
      </div>
    </div>
  );
}
