import Link from "next/link";
import type { Metadata } from "next";
import ResumeExcelDownload from "@/components/ResumeExcelDownload";
import CollapsibleProjectList from "@/components/CollapsibleProjectList";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "業務経歴書",
  description: "AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア松井慶太の業務経歴書。TypeScript・Next.js・AI開発・レガシー現代化の実績。",
  alternates: {
    canonical: "https://portfolio-two-orpin-45.vercel.app/resume",
  },
  openGraph: {
    title: "業務経歴書 — 松井 慶太",
    description: "AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア。TypeScript・Next.js・AI開発・レガシー現代化の実績。",
    url: "https://portfolio-two-orpin-45.vercel.app/resume",
    type: "profile",
  },
};

const skills = [
  { category: "主軸技術", detail: "TypeScript, React, Next.js (App Router), Node.js, Prisma, Tailwind CSS" },
  { category: "対応可能", detail: "PHP（Laravel）, Ruby（Rails）, Python, Flutter/Dart, Java（Spring Boot）, JavaScript, jQuery, C#.NET, SQL" },
  { category: "DB・インフラ", detail: "PostgreSQL（Neon / Aurora RDS）, Oracle, MySQL / Vercel, AWS, Azure, Railway, Docker" },
  { category: "外部サービス連携", detail: "Google Maps API, LINE Messaging API, Gemini AI, Claude API, 決済サービス（ZEUS）, 美術館API（MET/AIC等）" },
  { category: "AI開発ツール", detail: "Claude Code（主力）, Claude API, GitHub Copilot" },
  { category: "デザインツール", detail: "Figma（UIデザイン・仕様書作成・Reactコード生成）" },
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
    title: "BtoB業種特化マッチングSaaS新規開発",
    meta: "建設 ｜ フルスタック（1人請負） ｜ 2026/01〜（継続中）",
    desc: "特定業種の企業間マッチングを電話・FAXからWebプラットフォームに置き換えるSaaS。企画ヒアリングから参画し、双方合意の136人日見積もりをAI協働開発（Claude Code）で2週間強に短縮して初期リリース。その後も継続的に機能拡張中（LINE連携・AI判定・チャット・PWA対応等）。",
    tech: "Next.js 14 (App Router), TypeScript, React 18, Prisma 6, PostgreSQL (Neon), Tailwind CSS, Vercel, Vercel Blob, Vercel Cron, Google Maps API, LINE Messaging API, Gemini API, nodemailer, PWA, dayjs, Python, Playwright",
    features: [
      { cat: "地図検索", detail: "Google Maps API連携。ジオコーディング、最大500件ピン同時表示。32画面・67 APIエンドポイント・19モデル" },
      { cat: "認証・セキュリティ", detail: "Cookie (httpOnly) + HMAC-SHA256署名認証、CSRF対策、ロールベースアクセス制御、XSS防止" },
      { cat: "決済連携", detail: "外部決済サービス Webhook連携・署名検証、サブスクリプション管理" },
      { cat: "LINE連携", detail: "LINE Messaging API。Webhook受信・Push通知、10種類以上の通知に対応" },
      { cat: "AI判定", detail: "Gemini 2.5 Flash による登録情報の自動判定（構造化出力）。AI使用量管理画面" },
      { cat: "管理ダッシュボード", detail: "会員・決済・メールテンプレート管理・CSV出力・AI使用量・利用料設定" },
      { cat: "自動処理", detail: "Vercel Cronによる日次バッチで各種期限を自動通知（メール＋LINE）" },
      { cat: "運用補助", detail: "Python（psycopg2）でDBダミーデータ投入・スキーマ定義書自動生成・メールテンプレートCSVインポート" },
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
  { no: 2, industry: "建設", system: "BtoBマッチングSaaS", role: "フルスタック", period: "26/01〜（継続中）", tech: "Next.js 14, TypeScript, Prisma, PostgreSQL, Google Maps API, LINE Messaging API, Gemini API, PWA, Playwright" },
  { no: 3, industry: "教育", system: "eラーニングプラットフォーム（提案用デモ）", role: "個人開発", period: "26/04", tech: "React, TypeScript, Vite, shadcn/ui, Tailwind CSS, React Router v7, Figma, Vercel" },
  { no: 4, industry: "一般", system: "マッチングWebアプリ（ポートフォリオ）", role: "個人開発", period: "26/04", tech: "Next.js 15, TypeScript, Firebase Auth, Firestore, Vercel Blob, Stripe, Tailwind CSS, Vercel" },
  { no: 5, industry: "IT", system: "フリーランス向け請求書管理システム", role: "個人開発", period: "26/04", tech: "Ruby on Rails 8, Ruby, PostgreSQL, Devise, Tailwind CSS, Hotwire, Render" },
  { no: 6, industry: "IT", system: "FreelanceManager（案件管理ツール）", role: "個人開発", period: "26/04", tech: "PHP 8.3, Laravel 13, Blade, PostgreSQL, Tailwind CSS, Docker, Railway" },
  { no: 7, industry: "金融", system: "B2B取引DX", role: "メンバー", period: "24/04-25/11（20）", tech: "Spring Boot, PostgreSQL, Aurora RDS, AWS" },
  { no: 8, industry: "金融", system: "免税管理", role: "メンバー", period: "24/09-24/10（2）", tech: "AWS" },
  { no: 9, industry: "通信", system: "電柱管理", role: "メンバー", period: "23/12-24/02（3）", tech: "—" },
  { no: 10, industry: "商社", system: "ECサイト移行", role: "PM", period: "23/06-23/11（6）", tech: "MySQL, SQL" },
  { no: 11, industry: "保険", system: "変額保険管理システム", role: "PM兼開発リーダー", period: "21/03-23/05（26）", tech: "Java, jQuery, Oracle, VB, Azure" },
  { no: 12, industry: "小売業", system: "ECサイト管理", role: "PMOメンバー", period: "20/10-21/02（5）", tech: "Oracle" },
  { no: 13, industry: "輸送機器", system: "販売支援", role: "PMリーダー", period: "19/07-20/09（15）", tech: "Linux, Oracle, Java, VBA" },
  { no: 14, industry: "小売業", system: "ECサイト管理", role: "PMリーダー", period: "19/04-19/06（3）", tech: "Linux, MySQL, Java" },
  { no: 15, industry: "生保", system: "営業サポート", role: "メンバー", period: "18/07-19/03（9）", tech: "PostgreSQL, VBA" },
  { no: 16, industry: "生保", system: "保全ペーパーレス対応", role: "PMリーダー", period: "17/04-18/06（15）", tech: "Oracle, Java, JavaScript, jQuery, COBOL" },
  { no: 17, industry: "新聞", system: "会員サイト管理", role: "PMリーダー兼メンバー", period: "16/08-17/03（8）", tech: "PostgreSQL, Hibernate, Java, JavaScript" },
  { no: 18, industry: "公共", system: "年金管理", role: "サブリーダー", period: "16/03-16/07（5）", tech: "Oracle, Java" },
  { no: 19, industry: "証券", system: "取引管理", role: "サブリーダー兼メンバー", period: "15/04-16/01（10）", tech: "Oracle, Java" },
  { no: 20, industry: "商社", system: "建機リース・レンタル管理", role: "PMリーダー兼メンバー", period: "14/10-15/03（6）", tech: "Oracle, Java" },
  { no: 21, industry: "商社", system: "船便貿易管理", role: "サブリーダー兼メンバー", period: "13/07-14/01（7）", tech: "Oracle, Java, JavaScript" },
  { no: 22, industry: "通信", system: "システム開発工程管理", role: "サブリーダー兼メンバー", period: "13/01-13/06（6）", tech: "Oracle, PostgreSQL, Java, C#.NET, Spring" },
  { no: 23, industry: "公共", system: "音声コード管理", role: "PM", period: "10/06-12/12（30）", tech: "C, C++, C#" },
  { no: 24, industry: "電機", system: "人事管理", role: "PM", period: "02/04-09/04（85）", tech: "COBOL, PLI, Java" },
  { no: 25, industry: "電機", system: "健康管理", role: "PM", period: "00/04-02/03（23）", tech: "Java, JavaScript" },
];

const portfolio = [
  { name: "BtoB業種特化マッチングSaaS", desc: "136人日見積もりをAI協働開発で2週間強に短縮。32画面・67 API・19モデル、継続拡張中", tech: "Next.js 14, TypeScript, Prisma, PostgreSQL, LINE Messaging API, Gemini API, Google Maps API, PWA, Playwright", url: "NDA" },
  { name: "マッチングWebアプリ", desc: "ユーザー登録・いいね・マッチング・リアルタイムチャット・Stripe課金・管理画面をフルスタックで実装", tech: "Next.js 15, TypeScript, Firebase Auth, Firestore, Vercel Blob, Stripe, Tailwind CSS", url: "https://matching-app-jet.vercel.app" },
  { name: "eラーニングプラットフォーム デモ", desc: "Figmaでデザイン設計・Reactコード生成後、認証・受講登録・進捗管理・学習履歴を7画面フル実装。ランサーズ案件への提案用デモ", tech: "React, TypeScript, Vite, shadcn/ui, Tailwind CSS, React Router v7, Figma", url: "https://elearning-demo-sage.vercel.app" },
  { name: "フリーランス向け請求書管理システム", desc: "顧客・見積書・請求書を一元管理。Rails 8 + Hotwire + Tailwind CSSでゼロから構築し、Render + PostgreSQLに本番デプロイ", tech: "Ruby on Rails 8, Ruby, PostgreSQL, Devise, Tailwind CSS, Hotwire, Render", url: "https://invoice-app-djb3.onrender.com" },
  { name: "FreelanceManager（案件管理ツール）", desc: "クライアント・案件・請求書を一元管理。Laravel 13 + Blade構成でDockerマルチステージビルド + Railwayに本番デプロイ", tech: "PHP 8.3, Laravel 13, Blade, PostgreSQL, Tailwind CSS, Docker, Railway", url: "https://freelance-manager-production-f7c9.up.railway.app" },
  { name: "ES添削AIシステム", desc: "業界・職種ごとに評価観点を切り替え、論理性・具体性・熱意の3軸でスコアリング。Gemini APIで改善提案文を生成", tech: "Next.js, TypeScript, Gemini API, Tailwind CSS, Vercel", url: "https://es-correction-demo.vercel.app/input" },
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

/* ── shared helpers ────────────────────── */
const inner: React.CSSProperties = { maxWidth: 900, margin: "0 auto", padding: "0 32px" };
const sectionPad = "64px 0";

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{ fontSize: 11, color: "#9ca3af", letterSpacing: 3, marginBottom: 8, textTransform: "uppercase" }}>{label}</p>
    <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "#111827" }}>{title}</h2>
  </div>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          .resume-hero { padding-top: 24px !important; }
          .collapsible-content { max-height: none !important; overflow: visible !important; }
          .career-card { break-inside: avoid; }
          .section-gray { background: #fff !important; }
          .section-black { background: #fff !important; color: #111827 !important; }
          .section-black h2, .section-black p, .section-black span { color: #111827 !important; }
        }
        .career-card { transition: box-shadow 0.2s; }
        .career-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.10); }
      `}</style>

      {/* ── Hero + AI協働開発 ── 共通背景画像 ─────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* 共通背景画像 */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.13,
        }} />

        {/* Hero */}
        <section className="resume-hero" style={{ position: "relative", zIndex: 1, paddingTop: "88px", paddingBottom: "64px" }}>
          <div style={{ ...inner }}>
            <Link href="/" className="no-print" style={{ fontSize: 12, color: "#6b7280", textDecoration: "none", letterSpacing: 1 }}>
              ← ポートフォリオに戻る
            </Link>
            <div style={{ marginTop: 24 }}>
              <p style={{ fontSize: 11, color: "#9ca3af", letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>Resume</p>
              <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, color: "#111827", lineHeight: 1.1, marginBottom: 8 }}>
                松井 慶太
              </h1>
              <p style={{ fontSize: 14, color: "#6b7280", letterSpacing: 1, marginBottom: 20 }}>Keita Matsui</p>
              <p style={{ fontSize: "clamp(14px, 2vw, 17px)", fontWeight: 600, color: "#374151", borderLeft: "4px solid #111827", paddingLeft: 16, lineHeight: 1.5, marginBottom: 20 }}>
                AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px", fontSize: 13, color: "#6b7280", marginBottom: 28 }}>
                <span>IT業界 約40年（1985年〜）</span>
                <span>拠点: 山梨県</span>
                <span>フルスタック ／ AI協働開発</span>
                <span>更新日: 2026年4月12日</span>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a href="/業務経歴書_松井慶太.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, background: "#111827", color: "#fff", borderRadius: 4, textDecoration: "none" }}>
                  <DownloadIcon /> PDF ダウンロード
                </a>
                <ResumeExcelDownload projectList={projectList} skills={skills} portfolio={portfolio} />
                <div style={{ display: "flex", gap: 16, alignItems: "center", marginLeft: 8 }}>
                  <a href="https://portfolio-two-orpin-45.vercel.app" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#6b7280", textDecoration: "none", borderBottom: "1px solid #d1d5db" }}>Portfolio ↗</a>
                  <a href="https://github.com/keita2399" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#6b7280", textDecoration: "none", borderBottom: "1px solid #d1d5db" }}>GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI協働開発（背景半透明でふんわり区切り） */}
        <section className="section-gray" style={{ position: "relative", zIndex: 1, padding: sectionPad }}>
          <div style={{ ...inner }}>
            <SectionHeader label="AI Workflow" title="AI協働開発" />
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8, marginBottom: 24 }}>
              AIを補助ツールとしてではなく、設計パートナーとして活用するスタイルを確立。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
              {aiWorkflow.map((w) => (
                <div key={w.phase} style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid #e5e7eb", borderTop: "3px solid #111827", borderRadius: 12, padding: "20px 22px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 8, letterSpacing: 1 }}>{w.phase}</div>
                  <div style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.7 }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── スキルサマリー ── bg-white ────────────── */}
      <section style={{ background: "#fff", padding: sectionPad }}>
        <div style={inner}>
          <SectionHeader label="Skills" title="スキルサマリー" />
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {skills.map((s, i) => (
                  <tr key={s.category} style={{ borderBottom: i < skills.length - 1 ? "1px solid #e5e7eb" : "none" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, fontSize: 12, color: "#111827", whiteSpace: "nowrap", background: "#f9fafb", width: 140, verticalAlign: "top" }}>{s.category}</td>
                    <td style={{ padding: "12px 16px", fontSize: 13, color: "#374151", lineHeight: 1.6, verticalAlign: "top" }}>{s.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 業務経歴（抜粋） ── bg-gray-50 ──────── */}
      <section className="section-gray" style={{ background: "#f9fafb", padding: sectionPad }}>
        <div style={inner}>
          <SectionHeader label="Career" title="業務経歴（抜粋）" />
          <div style={{ display: "grid", gap: 20 }}>
            {careerHighlights.map((c, i) => (
              <div key={i} className="career-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderLeft: "4px solid #111827", borderRadius: 12, padding: "24px 28px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{c.title}</h3>
                <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14 }}>{c.meta}</div>
                <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.8, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ fontSize: 12, marginBottom: c.features || c.bullets ? 14 : 0 }}>
                  <span style={{ fontWeight: 700, color: "#111827" }}>技術構成: </span>
                  <span style={{ color: "#6b7280" }}>{c.tech}</span>
                </div>
                {c.features && (
                  <div style={{ border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {c.features.map((f, fi) => (
                          <tr key={f.cat} style={{ borderBottom: fi < c.features!.length - 1 ? "1px solid #e5e7eb" : "none" }}>
                            <td style={{ padding: "8px 12px", fontWeight: 700, fontSize: 11, color: "#111827", background: "#f9fafb", whiteSpace: "nowrap", width: 120, verticalAlign: "top" }}>{f.cat}</td>
                            <td style={{ padding: "8px 12px", fontSize: 12, color: "#374151", lineHeight: 1.6, verticalAlign: "top" }}>{f.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {c.bullets && (
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {c.bullets.map((b) => (
                      <li key={b} style={{ fontSize: 13, color: "#374151", lineHeight: 1.8 }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ポートフォリオ ── bg-white ────────────── */}
      <section style={{ background: "#fff", padding: sectionPad }}>
        <div style={inner}>
          <SectionHeader label="Portfolio" title="ポートフォリオ" />
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
            {portfolio.map((p, i) => (
              <div
                key={p.name}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  padding: "14px 18px",
                  borderBottom: i < portfolio.length - 1 ? "1px solid #e5e7eb" : "none",
                  background: i % 2 === 0 ? "#fff" : "#f9fafb",
                  gap: 12,
                  transition: "background 0.15s",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 2 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>{p.desc}</div>
                  <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2 }}>{p.tech}</div>
                </div>
                {!["NDA", "非公開", "社内ツール", "このサイトで稼働中"].includes(p.url) ? (
                  <a href={p.url} target={p.url.startsWith("/") ? undefined : "_blank"} rel="noopener noreferrer"
                    style={{ fontSize: 11, color: "#059669", fontWeight: 700, textDecoration: "none", flexShrink: 0 }}>
                    DEMO ↗
                  </a>
                ) : (
                  <span style={{ fontSize: 11, color: "#9ca3af", flexShrink: 0 }}>{p.url}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 自己PR ── bg-gray-50 ──────────────────── */}
      <section className="section-gray" style={{ background: "#f9fafb", padding: sectionPad }}>
        <div style={inner}>
          <SectionHeader label="About" title="自己PR" />
          <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.9 }}>
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
        </div>
      </section>

      {/* ── 業務経歴一覧（折り畳み） ── bg-white ─── */}
      <section style={{ background: "#fff", padding: sectionPad }}>
        <div style={inner}>
          <CollapsibleProjectList projectList={projectList} />
        </div>
      </section>

      {/* ── Footer ── bg-black ────────────────────── */}
      <footer className="section-black no-print" style={{ background: "#111827", color: "#fff", padding: "48px 0" }}>
        <div style={{ ...inner, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 20 }}>A4 サイズ・印刷対応</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/業務経歴書_松井慶太.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", fontSize: 14, fontWeight: 600, background: "#fff", color: "#111827", borderRadius: 4, textDecoration: "none" }}>
              <DownloadIcon /> PDF ダウンロード
            </a>
            <ResumeExcelDownload projectList={projectList} skills={skills} portfolio={portfolio} />
          </div>
          <p style={{ fontSize: 11, color: "#4b5563", marginTop: 28 }}>
            © 2026 Keita Matsui — フルスタックエンジニア
          </p>
        </div>
      </footer>
    </>
  );
}
