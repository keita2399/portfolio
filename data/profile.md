## 基本情報
名前：松井 慶太
拠点：山梨県
経験年数：IT業界約40年（1985年〜）
一言：AIペア開発で、一人で「チーム」の成果を出すフルスタックエンジニア

## AI協働開発について
AIを補助ツールとしてではなく、設計パートナーとして活用するスタイルを確立している。
- 設計フェーズ: 要件をAIと壁打ちし、DB設計・API設計・画面構成を短時間で固める
- 実装フェーズ: AIとのペアプログラミングで、コード品質を維持しながら高速に実装
- レビューフェーズ: AIによるコードレビュー・セキュリティチェック・ドキュメント整合性検証
- ドキュメント: 設計書・運用手順書・操作マニュアルをコードベースと常に同期

この開発スタイルにより、従来チーム体制で行う規模の開発を一人で完遂できる。

## スキル

### 主軸技術（現在積極的に使用）
- TypeScript / React / Next.js (App Router) — フルスタックWeb開発
- Node.js / Prisma — バックエンドAPI、DB設計
- Python / FastAPI — バックエンドAPI、AI連携
- Tailwind CSS — モダンUI構築
- PostgreSQL — データベース設計（Neon / Aurora RDS）

### AI開発ツール
- Claude Code（主力） — 設計・実装・レビュー・ドキュメント全工程で活用
- Gemini API — OCR、書類解析、チャットボット
- GitHub Copilot — コード補完

### 対応可能
- Java（Spring Boot）— 既存基盤との連携開発
- SQL — 複雑なクエリ、DB移行

### 経験あり（過去の業務級実績）
- COBOL / PL/I — 金融系基幹システム開発
- IBM メインフレーム — 人事管理システム等
- C#.NET / VB.NET — 業務システム

### DB・インフラ
- PostgreSQL（Neon / Supabase / Aurora PostgreSQL）, pgvector（ベクトル検索）, Oracle, MySQL
- RLS（行レベルセキュリティ）によるマルチテナント分離設計
- 認証: NextAuth / Auth.js v5（Google OAuth）, LINE Login, Firebase Auth
- Vercel（Pro）, AWS, Azure, Cloudflare R2
- Docker, nginx, GitHub Actions

### 外部サービス連携
- Google Maps API（ジオコーディング、ルート検索）
- LINE Messaging API（Webhook、プッシュ通知）
- Gemini AI（Vision API、テキスト生成）
- 決済サービス（ZEUS Payment Service）

## 得意なこと
- AIペア開発による高速フルスタック開発（一人でチーム規模の成果）
- ユーザー業務や利用シーンを理解した上での機能設計・UI設計
- 企画段階から本番デプロイ・運用まで一貫した対応
- 外部API連携（Google Maps、LINE、決済、AI）
- セキュリティを考慮した実装（認証・CSRF対策・XSS防止）

## 受けたい案件
- フルスタックWebアプリ開発（Next.js + TypeScript + PostgreSQL）
- AIを活用した業務効率化ツールの開発
- SaaS型プロダクト開発
- 外部API連携が必要なWebシステム
- Java（Spring Boot）等の既存基盤との連携開発

## 業務知識
- 金融（生命保険、変額保険、銀行、証券）
- 建設業（残土マッチング、許可証管理、図面積算・見積）
- SES業界（案件マッチング、エンジニア管理、粗利計算、提案営業）
- ITセキュリティ（中小企業向けIT資産管理、vCISO、セキュリティスコア・EOL管理）
- BtoB取引DX
- ECサイト

## 主要プロジェクト（ポートフォリオ掲載）

### TechnoBridge（自社法人）プロダクトスイート — メイン実績
自社法人「TechnoBridge」のプロダクトとして、複数のマルチテナントSaaSを企画・設計・実装・本番デプロイまで単独で構築・運用している。基盤は Vercel Pro + Supabase（東京リージョン）+ Google Cloud（Vertex AI）。全アプリで DB層のRLS（行レベルセキュリティ）によるテナント分離を標準化し、データの国内化を進めている。

1. **SES Brain AI** — SES企業の営業を自動化するAIエージェント型SaaS。「案件を探さないSESへ」がコンセプト。案件メールの自動取込（Gmail API・毎時cron）→ AI構造化解析 → エンジニアとのAIマッチング → 粗利計算 → 提案文生成までを一気通貫で支援。マッチングは「決定的ロジック（粗利・ランク）→ pgvectorで上位20名に絞り込み → Claudeで適合率採点」の三層構成。参画管理・工数・請求書発行まで実装。Next.js 16 + React 19 + Prisma 7 + Neon + pgvector + NextAuth v5 + Gemini + Claude。本番稼働中（https://sesbrain-ai.vercel.app）
2. **SecureBase** — 中小企業向けの統合ITセキュリティ管理SaaS。顧問型セキュリティコンサルタント（vCISO）が顧客企業のIT資産・EOL・Windows Updateを管理し、セキュリティスコア化とAI月次レポート（DRAFT→REVIEWED→PUBLISHED）を提供。RLSを27テーブルに完全実装した参照実装で、データはSupabase東京リージョンで国内化済み。Next.js 14 + Prisma 5 + PostgreSQL（Supabase）+ Auth.js v5 + Gemini/Vertex AI。本番稼働・営業利用中（https://securebase-five.vercel.app）
3. **積算AI** — 建設業向けの図面見積AIツール。設計図面PDFをアップロードするだけでAIが工事項目・数量を自動抽出、70項目の単価マスタを適用して編集可能な見積書を生成・Excel出力。最大10ファイル並列解析。Next.js 16 + React 19 + Prisma 7 + pgvector + NextAuth v5 + Gemini/Vertex AI + Vercel Blob。MVP公開・顧客検証準備中（https://sekisan-ai.vercel.app）

### 本番稼働中（受託・自社）
4. **The Vintage Salon（GoldenMUGI合同会社）** — クラシックキャンピングカーオーナー向け会員制プラットフォーム。3階層メンバーシップ・Stripe決済・LINE Login・YouTube連携・Vertex AI Search RAG 故障診断。商標登録済み、2026/06 本番リリース済み
5. **BtoBマッチングプラットフォーム** — 建設現場向け発生土・受入土マッチング。Next.js 14 + Prisma + PostgreSQL。約30画面・40API・24テーブル。AIペア開発で3ヶ月で構築（NDA）

### AIアプリ（デモ公開中）
6. **契約書リスクチェッカー** — 契約書をAIが条項ごとにリスク判定、修正案を提示
7. **AIレシートスキャナー** — レシート撮影→OCR→勘定科目自動判定、信頼度スコア付き
8. **AI書類解析** — Gemini Vision APIで書類を構造化データに変換
9. **AIチャットボット（このサイト）** — 業務経歴書をナレッジベースにGemini AIで回答

### LINE連携
10. **LINE Claude Sync** — スマホLINE↔PC Claude Code自動同期
11. **LINE通知デモ** — LINE Messaging API テキスト・画像・スタンプ送信
12. **移動時間計算** — Google Maps API連携

### レガシーコード変換（副業的な関心事）
13. **Legacy Code Museum** — 383K件のコメントを収集・分析するWebアプリ
14. **PL/I → Web（Habitat 1986）** — 世界初MMOをブラウザで動作するデモに変換（82%削減）
15. 他、C→Rust / COBOL→Web / VB6→Web / RPG→Web 等、合計10言語・41万行の変換実績

## 業務経歴（抜粋）
- 建設現場マッチングプラットフォーム新規開発（フルスタック、1人請負 / 3ヶ月）
- レガシーコード近代化PoC・技術記事制作（1人請負 / 1ヶ月）
- B2B取引DXプラットフォーム開発・保守（メンバー / 20ヶ月）
- 変額保険WEBシステム開発（開発リーダー兼PM / 26ヶ月、4名チーム）
- 保全解約システムペーパーレス対応（PMリーダー / 15ヶ月、COBOL→Java刷新）

## 自己PR
ユーザーの業務や利用シーンを理解した上で「実際に動くもの」を作ることを最も重視している。40年のキャリアの中で、COBOL/PLIの汎用機時代からJava、C#.NETを経て、現在のTypeScript/React/Next.jsに至るまで、常に実装の現場に身を置いてきた。

現在はAIエージェントとの協働開発により、一人でも設計から本番運用まで完結できる体制を確立している。これは単にコードを速く書けるということではなく、設計の壁打ち、コードレビュー、セキュリティチェック、ドキュメント整合性検証までを含む、開発プロセス全体の質と速度を両立させるもの。

チーム開発でも同じ手法を持ち込むことで、メンバーとしての生産性を大幅に引き上げることが可能。PM/リーダー経験もあるが、現在は実装を主軸とした価値提供を志向している。
