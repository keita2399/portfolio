export type ProjectCategory = "flagship" | "demo" | "personal" | "tools";

export type Project = {
  slug: string;
  title: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  stats: string[];
  tags: string[];
  updatedAt?: string;
  githubRepo?: string;
  githubPublic?: boolean;
  category?: ProjectCategory;
  externalUrl?: string;
  thumbnail?: string;
  screenshots?: { src: string; caption: string }[];
  // 詳細ページ用
  detail: {
    overview: string;
    challenges: string[];
    approach: string[];
    results: string[];
    techDetail: string;
    // 設計書セクション（任意）
    designDoc?: {
      architecture: string;
      dataFlow: string[];
      apiSpecs?: { method: string; path: string; description: string }[];
      dataModels?: string;
      envVars?: { name: string; required: boolean; description: string }[];
    };
  };
};

export const projects: Project[] = [
  // === 主要実績（flagship） ===
  {
    slug: "btob-matching",
    category: "flagship",
    title: "BtoB業種特化マッチングSaaS",
    badge: "提案用システム",
    badgeColor: "#2563eb",
    borderColor: "#2563eb",
    description:
      "特定業種の企業間マッチングを、電話とFAXからWebプラットフォームに置き換える提案用システム。企画段階のヒアリングから参画し、双方合意の136人日見積もりをAI協働開発で2週間強に短縮。LINE連携・AI判定・チャット・PWA対応など継続的に機能拡張中。",
    stats: ["32画面", "67 APIエンドポイント", "19モデル"],
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel", "Neon DB", "Cookie認証", "Google Maps API", "LINE Messaging API", "Gemini API", "PWA", "nodemailer", "Python", "Playwright"],
    updatedAt: "2026-03",
    thumbnail: "/thumbnails/btob-matching-arch.svg",
    detail: {
      overview:
        "特定業種の企業間マッチングを支援するWebプラットフォーム。地図ベースの直感的な検索UI、会員登録から承認までのワークフロー、サブスクリプション決済、メールテンプレート管理に加え、LINE連携によるプッシュ通知、Gemini AIによる登録情報の自動判定、業者間チャット、PWA対応など、業務システムに必要な機能をフルスタックで実装。企画提案書の作成段階からクライアントと協議し、設計・実装・継続的な機能拡張まで一貫して担当。",
      challenges: [
        "Google Maps上に最大500件のピンを同時表示しつつ、パフォーマンスを維持する検索UI",
        "会員登録→一時保存→本登録→管理者承認という多段階ワークフローの設計",
        "Cookie認証（httpOnly sessionToken）＋ HMAC署名による改ざん防止の実装",
        "外部決済サービスとのWebhook連携・署名検証",
        "19モデル・日本語Enumを含むPrismaスキーマの設計と運用",
        "メールテンプレートの変数埋め込み時のXSS対策（HTMLエスケープ）",
        "LINE Messaging APIのWebhook署名検証（HMAC-SHA256）と双方向メッセージング",
        "Gemini AIによる登録情報の自動判定（プロンプト設計・構造化出力）",
        "PWA対応（manifest.json・Service Worker・オフラインキャッシュ戦略）",
        "会員間リアルタイムチャット機能の設計（未読管理・ルーム管理）",
      ],
      approach: [
        "Next.js 14 App Routerでフロントエンド・APIを統合し、フルスタック構成を実現",
        "Prisma ORM＋PostgreSQLで型安全なデータアクセス。日本語Enumで業務ロジックを直感的に表現",
        "ミドルウェアでセッション検証・CSRF対策・管理者権限チェックを一元管理",
        "Vercel（ホスティング）＋ Neon（PostgreSQL）＋ Vercel Blob（ファイルストレージ）のサーバーレス構成",
        "nodemailerによるメール通知。テンプレート管理画面でマークダウン編集・リアルタイムプレビュー",
        "タイムゾーン統一設計（DB/サーバーはUTC、フロント表示はJST変換）で日時の不整合を防止",
        "LINE Messaging API連携でプッシュ通知・Webhook受信を実装。新規登録・期限通知など10種類以上の通知に対応",
        "Gemini 2.5 FlashでAI判定機能を実装。管理者の審査業務をAIが支援し、判定理由を構造化出力",
        "PWA（manifest.json + Service Worker）でモバイルアプリ化。ホーム画面追加でスタンドアロン起動に対応",
        "Vercel Cronによる日次バッチで、各種期限を自動通知（メール＋LINE）",
        "Pythonスクリプト（psycopg2）で開発・運用補助ツールを整備。ダミーデータ投入・DBエクスポート・Prismaスキーマからの定義書自動生成・メールテンプレートのCSVインポートなどを自動化",
      ],
      results: [
        "32画面・67APIエンドポイント・19モデルの業務システムを一人で構築",
        "企画提案から設計・実装まで一人で完遂し、継続的に機能拡張",
        "セキュリティレビューを実施し、セッション署名・CSRF対策・XSS防止・エラー情報漏洩対策を強化",
        "Vercel＋Neonのサーバーレス構成でインフラ管理コストを最小化",
        "LINE連携・AI判定・チャット・PWAなど、リリース後に4つの主要機能を追加",
        "管理者向けダッシュボード・メールテンプレート管理・AI使用量管理・利用料設定など運用機能も充実",
        "Pythonによる運用補助スクリプト群を整備し、DB管理・スキーマ定義書生成・データインポートを自動化",
      ],
      techDetail:
        "Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS。DB: Prisma 6 + PostgreSQL (Neon)。認証: Cookie (httpOnly) + HMAC-SHA256署名。決済: 外部決済サービス (Webhook)。メール: nodemailer。地図: Google Maps JavaScript API。通知: LINE Messaging API (Webhook + Push)。AI: Gemini 2.5 Flash (構造化出力)。PWA: manifest.json + Service Worker。ホスティング: Vercel + Vercel Blob + Vercel Cron。日付: dayjs (UTC/JST変換)。運用ツール: Python（psycopg2）によるDBダミーデータ投入・テーブルエクスポート・スキーマ定義書自動生成・メールテンプレートインポートなど開発・運用補助スクリプト群。",
    },
  },
  {
    slug: "matching-app",
    category: "flagship",
    title: "マッチングアプリ",
    badge: "公開中",
    badgeColor: "#db2777",
    borderColor: "#db2777",
    externalUrl: "https://matching-app-jet.vercel.app",
    description:
      "Next.js 15 + Firebase + Stripe + Vercel Blob で構築したマッチングWebアプリ。ユーザー登録・プロフィール設定・いいね・マッチング・リアルタイムチャット・掲示板・プレミアム課金・管理画面をフルスタックで実装。ランサーズ案件（50〜100万円）の提案用デモとして開発し、本番環境にデプロイ済み。",
    stats: ["10画面+管理画面", "Firebase Auth + Firestore", "Stripe Checkout連携"],
    tags: ["Next.js 15", "TypeScript", "Firebase Auth", "Firestore", "Vercel Blob", "Stripe", "Tailwind CSS", "Vercel", "shadcn/ui", "react-webcam"],
    updatedAt: "2026-04",
    detail: {
      overview:
        "ユーザー登録（メール認証）からプロフィール設定・写真アップロード・ユーザー一覧・いいね・マッチング・リアルタイムチャット・掲示板・プレミアム課金・管理画面まで、マッチングサービスに必要な全機能をフルスタックで実装。Firebase StorageがSparkプランで利用不可のためVercel Blobで代替し、Stripe Checkoutでサブスクリプション課金、Firebase Admin SDKでサーバーサイド管理操作を実現。",
      challenges: [
        "Firebase StorageがSparkプランで利用不可 → Vercel Blobで代替（/api/upload Route Handler経由）",
        "Firestoreセキュリティルールでチャット参加者のみがメッセージを読み書きできる権限設計",
        "リアルタイムチャットの未読バッジ管理（送信時increment・開封時reset）",
        "無料プランのいいね上限（10回）・メッセージ上限（5通）管理とStripeプレミアムへの誘導",
        "BANユーザーのログイン拒否（Firebase Authログイン後にFirestoreのbannedフラグを確認してsignOut）",
        "Firestore複合インデックス（chats: uids CONTAINS + updatedAt DESC）のデプロイ",
      ],
      approach: [
        "Next.js 15 App Routerで認証フロー（(auth)）とアプリ本体（(app)）をRoute Groupで分離",
        "Firebase Auth + FirestoreクライアントSDKで認証・DB操作を一元管理。セキュリティルールで権限制御",
        "Vercel Blob（/api/upload）で写真アップロード。Firebase Storageの代替として完全に機能",
        "Firestore onSnapshotでリアルタイムチャットを実装。unread_{uid}フィールドで未読管理",
        "Stripe Checkout → Webhook（/api/stripe/webhook）→ Firebase Admin SDK でプレミアム付与",
        "管理画面はADMIN_EMAILSホワイトリストでアクセス制限。BAN・通報確認をFirestoreで管理",
      ],
      results: [
        "マッチングアプリのMVP全機能を一人・短期間で実装・本番デプロイ",
        "ユーザー登録〜チャットまでの全フローが動作するデモを https://matching-app-jet.vercel.app で公開",
        "ダミーユーザー10人・チャット7組・掲示板8件のサンプルデータで即デモ可能な状態に",
        "Stripe Checkoutによるプレミアムサブスクリプション課金フロー実装",
        "管理画面でユーザーBAN・通報確認が可能な運用機能も実装",
      ],
      techDetail:
        "Next.js 15 (App Router) + TypeScript + Tailwind CSS。認証・DB: Firebase Auth / Firestore（クライアントSDK + セキュリティルール）。画像: Vercel Blob（/api/upload Route Handler）。決済: Stripe Checkout + Webhook（Firebase Admin SDKでプレミアム付与）。リアルタイム: Firestore onSnapshot。デプロイ: Vercel。",
    },
  },
  {
    slug: "sanpo-series",
    category: "flagship",
    title: "アートさんぽシリーズ",
    badge: "公開中",
    badgeColor: "#b45309",
    borderColor: "#b45309",
    thumbnail: "/thumbnails/sanpo-series-hero.png",
    externalUrl: "https://sanpo-monet.vercel.app",
    description:
      "世界の美術館・博物館のコレクションをスマホで気軽に楽しめるFlutter Webアプリシリーズ。Three.jsによる3Dオランジュリー美術館、GPUシェーダーによるスポットライト演出、毎日1作品との出会い（ガチャ）、作品クイズなど、アート体験をデジタルで再現。LINEボットが毎朝おすすめ作品を届ける。美術館さんぽ・博物館さんぽ・画家さんぽ・特集さんぽの4カテゴリで7アプリを展開中。",
    stats: ["Flutter Web + LINE Bot", "4つの美術館API + Wikidata連携", "7アプリ展開中"],
    tags: ["Flutter", "Dart", "Three.js", "GLSL Shader", "LINE Messaging API", "Vercel", "Met Museum API", "AIC API", "Cleveland API", "Smithsonian API", "Wikidata SPARQL", "Next.js", "PWA"],
    updatedAt: "2026-04-07",
    githubRepo: "keita2399/met_gallery",
    githubPublic: true,
    detail: {
      overview:
        "メトロポリタン美術館・シカゴ美術館・クリーブランド美術館・スミソニアン博物館のパブリックAPIとWikidata SPARQLを活用し、数十万点のコレクションをスマホで鑑賞できるWebアプリシリーズ。Flutter Webでクロスプラットフォーム対応し、Three.jsによる3Dオランジュリー美術館（モネの睡蓮）とGPUフラグメントシェーダーによるスポットライト演出を実現。LINEボットが毎朝6時に6作品のカルーセルをプッシュ配信。美術館さんぽ3種・画家さんぽ3種・特集さんぽ1種の計7アプリを公開中。",
      challenges: [
        "Three.jsで楕円形の部屋・金フレーム・OrbitControlsを組み合わせた3Dオランジュリー美術館の構築",
        "GPUフラグメントシェーダー（GLSL）によるリアルタイム光シミュレーションの実装",
        "4つの異なる美術館API + Wikidata SPARQLを単一データモデル（Artwork）に統一",
        "1リポジトリから7アプリをビルドするAppConfig + 抽象APIクラス + ImageProxyServiceの設計",
        "美術館APIの画像URL仕様の違い（IIIF / CDN / Wikimedia）とCORS制約への対応",
      ],
      approach: [
        "Three.js（OrbitControls + TubeGeometry + Raycasting）でブラウザ上に3Dオランジュリー美術館を再現。Flutter WebからiframeでURLSearchParams経由でプロキシURLを注入",
        "Flutter + カスタムGLSLシェーダー（lighting.frag）でスポットライトの光と影をリアルタイム描画",
        "ImageProxyService・ArtworkCard・SearchFilterMixinを共通化し、5箇所の重複プロキシ処理と4画面の重複UIを統一",
        "AppConfig + ArtApi抽象クラスで美術館ごとの差異を吸収。String.fromEnvironment + --dart-defineでボットURLを一元管理",
        "全APIをNext.jsプロキシサーバー経由にしてCORS/CDN制約を回避。Vercel Cronで毎朝6時にLINEカルーセル自動配信",
      ],
      results: [
        "美術館さんぽ2種（メトロポリタン・クリーブランド）・博物館さんぽ1種（スミソニアン）・画家さんぽ3種（モネ・フェルメール・レンブラント）・特集さんぽ1種（印象派）の計7アプリを公開",
        "Three.jsによる3Dオランジュリー美術館をブラウザで実現（モネさんぽ限定機能）",
        "ImageProxyService / ArtworkCard / SearchFilterMixinのリファクタリングで約300行の重複コードを削減",
        "LINEボットで毎朝6時に6作品のカルーセルを自動配信",
        "新シリーズ追加はconfig + API + エントリポイントの3ファイルで完結する拡張性の高いアーキテクチャ",
      ],
      techDetail:
        "Flutter (Dart) + Material 3 + カスタムGLSLフラグメントシェーダー + Three.js（3Dオランジュリー）。API: Met Museum / AIC / Cleveland / Smithsonian / Wikidata SPARQL。共通化: ImageProxyService / ArtworkCard widget / SearchFilterMixin。プロキシ: Next.js（CORS回避・APIキー管理・画像配信・TTS）。LINEボット: Next.js + Vercel Cron（毎朝6時に6作品カルーセル配信）。ビルド設定: --dart-define + String.fromEnvironment でURLを環境変数管理。デプロイ: Vercel（7アプリ + Bot）。PWA対応。",
    },
  },
  {
    slug: "estimate-ai",
    category: "tools",
    title: "AI開発アシスタント",
    badge: "社内ツール",
    badgeColor: "#2563eb",
    borderColor: "#2563eb",
    thumbnail: "/thumbnails/dx-proposal-flow.png",
    screenshots: [
      { src: "/thumbnails/dx-proposal-flow.png", caption: "DX提案: 業務内容を入力するだけで業務フロー図を自動生成" },
      { src: "/thumbnails/dx-proposal-analysis.png", caption: "DX提案: 工程ごとのボトルネック・リスクを可視化" },
      { src: "/thumbnails/dx-proposal-suggest.png", caption: "DX提案: システム化提案（優先度・期待効果付き）" },
      { src: "/thumbnails/dx-proposal-summary.png", caption: "AI見積もり: 一般版と自社版の工数比較" },
    ],
    description:
      "DX提案・Excel変換・AI見積もりの3つの機能を統合。業務分析から見積もり、製造資料の生成までを一気通貫で支援。発注者との初回打ち合わせで「その場で提案書と見積もり」が出せる営業ツール。",
    stats: ["DX提案 + Excel変換 + AI見積もり", "一般版/自社版の2モード見積もり", "製造資料自動生成"],
    tags: ["Next.js", "TypeScript", "Gemini API", "Claude API", "LangChain", "LangGraph", "Upstash Redis", "Mermaid.js", "ExcelJS", "Resend", "AI活用", "SSE"],
    updatedAt: "2026-04-03",
    githubRepo: "keita2399/estimate-ai",
    detail: {
      overview:
        "業務のDX化を支援する統合アシスタント。【DX提案】業務フロー図の自動生成 → ボトルネック分析 → システム化提案 → 要件定義書生成。【Excel変換】ExcelのWebアプリ化/GAS化提案 + プロトタイプ生成。VBA/ActiveX対応。【AI見積もり】画面設計 → 技術スタック比較 → 一般版/自社版の2モード工数見積もり → 製造資料（DB設計・API設計・実装順序）の自動生成。",
      challenges: [
        "曖昧な業務記述から正確なフロー図を生成するプロンプト設計",
        "一般的な開発会社とAI活用開発の2モード見積もりの係数設計",
        "VBA/ActiveXを含むExcelの構造解析とGAS/Web化の判定ロジック",
        "Vercel Hobbyプランの60秒制限 + Render無料プランのスリープ対策",
        "Gemini API無料枠の制限対策（複数キー + Claude フォールバック）",
      ],
      approach: [
        "DX提案: 6段階AIパイプライン（フロー図→現状分析→提案→質問→要件定義→総合提案）",
        "Excel変換: VBA/ActiveX検出 → Web化 vs GAS化の適性判定 → プロトタイプ自動生成",
        "見積もり: 一般版（100%）と自社版（50-60%）を並行生成・タブ切替表示",
        "製造資料: 画面設計+技術スタックからDB設計・API設計・実装順序をMarkdown出力",
        "Renderリトライ・起動待ち処理でスリープ対策、タイムアウト階層設計",
      ],
      results: [
        "業務分析から見積もり・製造資料まで一気通貫で5分で完成",
        "DX提案書・要件定義書・概算見積書・製造資料の4種類の出力に対応",
        "一般版/自社版の比較で「AI活用の価値」を可視化",
        "Excel変換ではVBA/ActiveXの検出・Web化/GAS化の自動判定",
      ],
      techDetail: "Next.js + TypeScript + Tailwind CSS。Gemini 2.5 Flash / Claude Haiku 4.5 のデュアルAI構成（SSEストリーミング）。フロー図はMermaid記法で生成しSVGレンダリング。ExcelJSによる帳票出力。バックエンドはExpress.js（Render）でAI API呼び出しを集約。",
    },
  },
  {
    slug: "excel-to-web",
    category: "tools",
    title: "Excel → Web/GAS化",
    badge: "デモ公開中",
    badgeColor: "#059669",
    borderColor: "#059669",
    thumbnail: "/thumbnails/dx-proposal-flow.png",
    screenshots: [],
    description:
      "Excelファイルをアップロードするだけで、AIがシート構造・数式・VBAマクロを読み解き、Webアプリ化またはGAS化の提案と動作するプロトタイプを自動生成。VBA・ActiveXにも対応。",
    stats: ["Excel構造自動分析", "Web/GASプロトタイプ自動生成", "VBA/ActiveX対応"],
    tags: ["Next.js", "TypeScript", "SheetJS", "Gemini API", "CFB", "AI活用"],
    detail: {
      overview:
        "「Excelで管理しているけど限界が来ている」業務を、Webアプリに変換するツール。Excelファイル（xlsx/xls/xlsm）をアップロードすると、AIがシート構造・列定義・数式・VBAマクロを解析し、業務目的の推定・課題の指摘・Web化提案・動作するHTMLプロトタイプの生成までを自動で行う。生成されたプロトタイプはCRUD操作・検索・集計が実際に動作し、「Excelがこう変わります」をその場で体験できる。分析結果はそのままAI見積もりアシスタントに連携し、概算工数・費用まで一気通貫で算出可能。",
      challenges: [
        "Excelの多様なフォーマット（管理表・帳票・マスタ等）から業務目的を正確に推定",
        "VBAマクロのバイナリからソースコードを抽出するCFBパース処理",
        "AIが生成するHTMLプロトタイプの品質確保（CRUD・集計・レスポンシブ対応）",
        "大きなExcelファイルのクライアント側解析とAPI送信サイズの最適化",
      ],
      approach: [
        "クライアント側でSheetJSによるExcel解析 → 構造情報のみをAPIに送信（413エラー対策）",
        "VBAマクロはSheetJS bookVBAオプション + CFBライブラリでソースコード抽出",
        "Gemini Streaming APIで長時間処理もタイムアウトなく安定動作",
        "Excel↔Webの機能マッピングをビフォーアフター形式で視覚的に対比表示",
        "分析結果からsessionStorage経由でAI見積もりアシスタントにシームレス連携",
      ],
      results: [
        "Excelをアップするだけで、数分でWebアプリのプロトタイプが完成",
        "Excel構造分析・Web化提案・プロトタイプ・見積もりまで一気通貫",
        "VBAマクロのロジックもJavaScriptで再実装したプロトタイプを生成",
        "DX提案アシスタントと統合し、テキスト入力・Excelアップロードの2つの入口を提供",
      ],
      techDetail: "Next.js + TypeScript + Tailwind CSS。SheetJS（xlsx）でクライアント側Excel解析。CFBライブラリでVBAマクロのバイナリからソースコード抽出。Gemini 2.5 Flash Streaming API。プロトタイプはTailwind CSS CDN + vanilla JSの単一HTMLとして生成。",
    },
  },
  // === 技術デモ ===
  {
    slug: "portfolio-chatbot",
    category: "tools",
    title: "AIチャットボット（このサイト）",
    badge: "このサイトで稼働中",
    badgeColor: "#c8860a",
    borderColor: "#c8860a",
    description:
      "このポートフォリオサイトに搭載されたAIアシスタント。右下の💬ボタンから、スキル・実績・受けたい案件について何でも質問可能。業務経歴書の全情報をナレッジベースとしてGemini AIに渡し、正確かつ親しみやすく回答。",
    stats: ["Gemini 2.5 Flash", "業務経歴ナレッジベース"],
    tags: ["Next.js", "TypeScript", "Gemini API", "AI活用"],
    updatedAt: "2026-04-20",
    githubRepo: "keita2399/portfolio",
    githubPublic: true,
    detail: {
      overview:
        "ポートフォリオサイトの訪問者が、スキル・実績・受けたい案件について自由に質問できるAIチャットボット。業務経歴書の全情報（40年分のプロジェクト履歴、スキル、業務知識等）をprofile.mdとしてGemini AIに渡し、RAG的にナレッジベースとして活用。プロフィールにない情報は「お問い合わせください」と正直に回答する設計。",
      challenges: [
        "業務経歴書の情報量（30件以上のプロジェクト）を正確に伝えるプロンプト設計",
        "Markdownで返答すると小さなチャット窓では見づらい問題",
        "既存のLINE Claude Syncデモ用APIとの共存",
        "IME確定時のEnter誤送信防止",
      ],
      approach: [
        "業務経歴書をprofile.mdに構造化し、システムプロンプトに全文注入",
        "プレーンテキスト限定の回答ルールで視認性を確保",
        "APIパスを/api/portfolio-chatに分離し既存機能と共存",
        "isComposingチェックで日本語入力時のEnter誤送信を防止",
      ],
      results: [
        "訪問者がスキル・実績を対話的に把握できるUXを実現",
        "40年分の業務経歴から的確な回答を生成",
        "Gemini無料枠で運用コストゼロ",
        "フローティングボタン型UIでページ遷移なしに利用可能",
      ],
      techDetail: "Next.js API Route + Gemini 2.5 Flash。profile.md（業務経歴書）をビルド時に読み込み、システムプロンプトに注入するRAG的アプローチ。会話履歴（直近10件）をコンテキストに含めて文脈を維持。",
    },
  },
  {
    slug: "contract-checker",
    category: "tools",
    title: "契約書リスクチェッカー",
    badge: "デモ公開中",
    badgeColor: "#10b981",
    borderColor: "#10b981",
    externalUrl: "https://contract-checker-vert.vercel.app",
    thumbnail: "/thumbnails/contract-checker.svg",
    description:
      "契約書をアップロードするだけで、AIが条項ごとにリスクを判定。自動更新・違約金・損害賠償上限なし・知的財産権の全譲渡・競業避止など、フリーランスが見落としがちな不利条項を検出し、具体的な修正案を提示。",
    stats: ["Gemini Vision API", "条項別リスク判定"],
    tags: ["Next.js", "TypeScript", "Gemini API", "LangChain", "pdf-to-img", "AI活用", "Tailwind CSS"],
    updatedAt: "2026-04-18",
    githubRepo: "keita2399/contract-checker",
    githubPublic: true,
    detail: {
      overview:
        "契約書の画像をアップロードすると、Gemini 2.5 Flash が全条項を読み取り、フリーランス・個人事業主にとって不利な条項をHIGH/MEDIUM/LOW/SAFEの4段階で判定。条項ごとに問題点と具体的な修正案を提示し、欠落している条項（損害賠償上限、解除条件等）も検出する。",
      challenges: [
        "契約書の法的な文脈を正確に理解するプロンプト設計",
        "条項ごとのリスク判定基準の策定（自動更新、違約金、競業避止等）",
        "欠落条項の検出（あるべきなのに書かれていない条項）",
        "法的助言にならない範囲でのリスク提示のバランス",
      ],
      approach: [
        "フリーランス契約のリスクパターンをプロンプトに体系化",
        "HIGH/MEDIUM/LOW/SAFEの4段階判定 + リスクスコア算出",
        "条項ごとに原文抜粋・問題点・修正案を構造化出力",
        "推測禁止ルールで読めない部分の幻覚を防止",
      ],
      results: [
        "条項別のリスク判定と具体的な修正案を自動生成",
        "欠落条項（損害賠償上限、反社排除等）の検出",
        "リスクスコアの可視化（メーター + 危険/注意/欠落の件数表示）",
        "法的免責事項を明示したUX設計",
      ],
      techDetail: "Next.js + TypeScript + Tailwind CSS + Gemini 2.5 Flash（Vision API）。契約書リスクの体系的なプロンプト設計が核心。",
    },
  },
  {
    slug: "receipt-scanner",
    category: "tools",
    title: "経費仕分けツール",
    badge: "デモ公開中",
    badgeColor: "#f59e0b",
    borderColor: "#f59e0b",
    externalUrl: "https://receipt-scanner-iota.vercel.app",
    thumbnail: "/thumbnails/receipt-scanner.svg",
    description:
      "ネットワークスキャナー・カメラ・ファイルの3経路でレシートを取り込み、Gemini 2.5 Flashのマルチモーダル機能が単なる文字起こしではなく「文脈を理解して構造化」。30品目超のスーパーレシートも一発で店舗名・税率・勘定科目まで判定。仕分け・Google Drive保存・期間指定CSVで確定申告に直結。",
    stats: ["Gemini 2.5 Flash マルチモーダル", "Chrome拡張+Native Messaging"],
    tags: ["Next.js", "TypeScript", "Gemini API", "Chrome拡張", "Google Drive API", "Google OAuth", "next-auth", "eSCL"],
    updatedAt: "2026-04-18",
    githubRepo: "keita2399/receipt-scanner",
    githubPublic: true,
    detail: {
      overview:
        "ネットワークスキャナー（eSCLプロトコル）・スマホカメラ・ファイルアップロードの3経路でレシートを取り込み、Gemini 2.5 Flashのマルチモーダル機能で解析する。従来のOCRが「文字を読む」だけなのに対し、Geminiは画像全体の文脈を理解して構造化するため、手書きメモ・デザイン文字のロゴ・軽減税率の※マーク・30品目超のスーパーレシートも高精度で処理できる。読み取った明細を仕事/家庭/按分で仕分けし、勘定科目を設定。Google Driveに月別JSONで保存し、期間指定でCSV出力して確定申告に使う。",
      challenges: [
        "Vercel 60秒制限を回避するためGemini Streaming API（SSE）を採用",
        "Chrome拡張のNative Messaging 1MB制限を回避するため、host.exeがVercelへ直接POST",
        "eSCLプロトコルでスキャナーとHTTP通信し、ジョブ生成→ポーリング→画像取得を実装",
        "Native Messagingホスト（Node.js）をpkgでexe化し、McAfee・Defenderの除外設定も含めたインストーラーを構築",
        "OCRブレを考慮した重複チェック（日付＋合計金額による判定、品目一覧付き確認モーダル）",
      ],
      approach: [
        "Chrome拡張（Manifest V3）+ Native Messaging Hostでブラウザ←→スキャナーをブリッジ",
        "Gemini streamGenerateContent（SSE）でVercelタイムアウトを回避",
        "Google Drive API v3で月別JSONファイルを管理（ログイン必須・localStorage不使用）",
        "NextAuth + Googleトークン自動リフレッシュでセッション切れを防止",
        "install.bat（Shift-JIS/PowerShell）でレジストリ登録・Defender除外・IPキャッシュを一括設定",
      ],
      results: [
        "スキャナーボタンを押すだけでOCR→仕分け画面まで全自動で到達",
        "仕事/家庭/按分の3択仕分けと按分比率・勘定科目を品目ごとに設定可能",
        "Google Driveに月別保存、期間指定CSVダウンロードで確定申告に直結",
        "重複レシートを品目一覧付きモーダルで確認・選択できるUX",
      ],
      techDetail: "Next.js + TypeScript + Tailwind CSS + Gemini 2.5 Flash（SSE）+ Chrome拡張（MV3）+ Native Messaging + eSCL + Google Drive API v3 + NextAuth。フロントからスキャナーハードウェアまでフルスタックで実装。",
    },
  },
  {
    slug: "ai-document-checker",
    category: "tools",
    title: "AI書類チェッカー",
    badge: "デモ公開中",
    badgeColor: "#6366f1",
    borderColor: "#6366f1",
    externalUrl: "https://ai-document-checker-keita2399s-projects.vercel.app",
    thumbnail: "/thumbnails/ai-document-checker.svg",
    description:
      "Gemini Vision APIを使った書類自動解析アプリ。画像をアップロードするだけで、AIが書類の種類・記載内容・有効期限・注意点を自動判定。建設業許可証など業務書類の確認を効率化。",
    stats: ["Gemini Vision API", "画像→構造化データ"],
    tags: ["Next.js", "TypeScript", "Gemini API", "Claude API", "LangChain", "Tailwind CSS"],
    updatedAt: "2026-03-15",
    githubRepo: "keita2399/ai-document-checker",
    detail: {
      overview:
        "書類画像をアップロードすると、Gemini Vision APIが書類の種類を自動判別し、記載内容を構造化データとして抽出するWebアプリケーション。建設業許可証などの業務書類確認を想定。",
      challenges: [
        "多様な書類フォーマットへの対応（許可証、契約書、請求書等）",
        "画像品質（傾き、ぼけ、影）による認識精度への影響",
        "AIレスポンスの構造化（自由テキスト→JSON変換）",
      ],
      approach: [
        "Gemini Vision APIのマルチモーダル機能で画像を直接解析",
        "プロンプトエンジニアリングで構造化JSON出力を実現",
        "PNG/JPEG/WebP/GIF対応、4MBまでのサイズ制限",
      ],
      results: [
        "画像アップロードからAI解析結果表示までワンステップ",
        "書類種別・内容・有効期限・注意点を自動抽出",
        "ポートフォリオ利用通知（LINE連携）",
      ],
      techDetail:
        "Next.js 14 + TypeScript + Tailwind CSS + Gemini API（Vision）。サーバーサイドでAPI呼び出し、クライアントはBase64エンコードで画像送信。",
      designDoc: {
        architecture:
          "クライアント（ブラウザ）\n  UploadArea ──→ ImagePreview\n       │ Base64変換\n       ▼\n  page.tsx ──→ POST /api/analyze\n       │\n       ▼\n  AnalysisResult ──→ ResultField × N\n                 ──→ AlertBadge × N\n─────────────────────────────\nサーバー（Next.js API Route）\n  route.ts\n  ├─ 画像データ検証（MIME型、4MB制限）\n  ├─ Gemini API呼び出し\n  ├─ JSONレスポンス解析\n  └─ LINE通知送信（非同期）\n─────────────────────────────\n       ├─→ Gemini API（主系統）\n       ├─→ Claude API（代替系統）\n       └─→ LINE API（利用通知）",
        dataFlow: [
          "ユーザーが画像をドラッグ＆ドロップまたはクリック選択でアップロード",
          "クライアント側で検証（MIME型チェック、4MB以下）→ FileReaderでBase64変換",
          "POST /api/analyze にBase64データとMIME型を送信",
          "サーバーで再検証（多層防御）後、Gemini 2.5 Flash APIに画像を送信",
          "AIが書類種別を判定、各項目を信頼度スコア付きで抽出（JSON形式）",
          "LINE Messaging APIで利用通知を非同期送信（失敗してもアプリに影響なし）",
          "構造化された解析結果をクライアントに返却、信頼度バー・アラートバッジ付きで表示",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/analyze", description: "画像をBase64+MIME型で送信 → AIが書類種別・項目・信頼度・アラートをJSON返却" },
        ],
        dataModels:
          "interface AnalysisResult {\n  documentType: string;\n  fields: AnalysisField[];  // 各項目\n  alerts: AnalysisAlert[];  // 警告\n  summary: string;\n  overallConfidence: number; // 0.0〜1.0\n}\n\ninterface AnalysisField {\n  label: string;\n  value: string;\n  confidence: number;\n}\n\ninterface AnalysisAlert {\n  type: 'error' | 'warning' | 'info';\n  message: string;\n}",
        envVars: [
          { name: "GEMINI_API_KEY", required: true, description: "Google Gemini API キー" },
          { name: "LINE_NOTIFY_TOKEN", required: false, description: "LINE通知用アクセストークン" },
          { name: "LINE_NOTIFY_USER_ID", required: false, description: "LINE通知先ユーザーID" },
        ],
      },
    },
  },
  {
    slug: "buildscan-ai",
    category: "tools",
    title: "BuildScan AI",
    badge: "デモ公開中",
    badgeColor: "#0369a1",
    borderColor: "#0369a1",
    externalUrl: "https://buildscan-front.onrender.com",
    thumbnail: "/thumbnails/buildscan-ai.svg",
    description:
      "建設書類（見積書・工程表・仕様書）のPDF・画像をアップロードするだけで、GeminiのマルチモーダルAIが工事名・金額・工期・工事項目を自動抽出し、構造化JSONとCSVで出力。Figmaで設計→React実装→Renderデプロイまで一貫して構築したポートフォリオデモ。",
    stats: ["Gemini 2.5 Flash", "PDF/画像→構造化JSON"],
    tags: ["Python", "FastAPI", "React", "TypeScript", "Gemini API", "Render", "Figma"],
    updatedAt: "2026-04-12",
    githubRepo: "keita2399/Figmabuildscanaidemoscreen",
    detail: {
      overview:
        "建設書類をAIで瞬時に構造化するデモアプリ。PDF・JPG・PNGをアップロードするだけで、Gemini 2.5 FlashのマルチモーダルAPIが書類を解析し、工事名・会社名・合計金額・工期・工事項目を構造化JSONとして抽出。信頼度スコア（総合・工事名・金額・工期）付きで結果を表示し、JSONコピー・CSVダウンロードに対応。",
      challenges: [
        "建設書類の多様なフォーマット（手書き・印刷・スキャン品質差）への対応",
        "GeminiへのPDF・画像送信とBase64エンコーディングの実装",
        "フロントエンド（Render Static Site）とバックエンド（Render Web Service）の分離デプロイ",
      ],
      approach: [
        "Gemini 2.5 FlashのマルチモーダルAPIでPDF・画像を直接解析",
        "FastAPIバックエンドでファイル受け取り→Gemini API呼び出し→JSON返却",
        "Figmaで画面設計後、AIコード生成でReact実装を加速",
        "フロント：Render Static Site、バックエンド：Render Web Serviceで分離デプロイ",
      ],
      results: [
        "見積書・工程表・仕様書の主要フィールドを自動抽出",
        "信頼度スコア（総合・工事名・金額・工期）で抽出精度を可視化",
        "JSONコピー・BOM付きCSVダウンロードでデータ活用を即時化",
      ],
      techDetail:
        "Python FastAPI + Gemini 2.5 Flash（マルチモーダル）+ React + TypeScript + Vite + Tailwind CSS。フロントエンドはFigmaで設計してAI生成コードをベースに実装。バックエンドはuvicorn + python-multipartでファイル受信、google-generativeaiでGemini APIを呼び出し。Render（Web Service + Static Site）にデプロイ。",
    },
  },
  {
    slug: "juusetsu-checker",
    category: "demo",
    title: "不動産書類チェッカー",
    badge: "デモ公開中",
    badgeColor: "#3577A6",
    borderColor: "#3577A6",
    externalUrl: "https://doc-reader-pied.vercel.app",
    thumbnail: "/thumbnails/juusetsu-checker.svg",
    description:
      "不動産書類のPDFをアップロードするだけで、AIが書類の種類を自動判定してリスク・注意点・確認事項を分かりやすく解説。重要事項説明書・賃貸借契約書・登記簿謄本・売買契約書・収支内訳書の5種類に対応。",
    stats: ["Gemini 2.5 Flash", "5書類対応"],
    tags: ["Next.js", "TypeScript", "LangChain", "Gemini API"],
    updatedAt: "2026-04-20",
    githubRepo: "keita2399/juusetsu-checker",
    githubPublic: true,
    detail: {
      overview:
        "不動産書類のPDFをアップロードすると、AIが書類の種類を自動判定し、リスク・注意事項・問題ない項目・担当者への質問リストをJSON形式で返すWebアプリ。重要事項説明書・賃貸借契約書・登記簿謄本・売買契約書（譲渡所得計算）・収支内訳書（不動産所得申告）の5種類に対応。不動産業者が顧客への説明時にタブレットやPCで見せながら使うBtoBtoCユースケースを想定。",
      challenges: [
        "PDFアップロード→書類種別自動判定→本解析の2段階API設計",
        "書類タイプごとに異なるプロンプトと出力スキーマの設計（税務系はcalculationフィールドを追加）",
        "アニメーション完了とAPI完了のタイミング同期（useRef dual-flag パターン）",
        "PC/タブレット両対応の2カラムレスポンシブレイアウト",
      ],
      approach: [
        "LangChainのChatGoogleGenerativeAIでPDFをマルチモーダル解析",
        "/api/detectで書類種別を高速判定してから/api/analyzeで詳細解析",
        "書類タイプ別プロンプト設計で重説・賃貸・登記・譲渡所得・不動産所得に最適化",
        "左カラムでアイテム一覧・右カラムで詳細表示の2ペインUI",
      ],
      results: [
        "5種類の不動産書類をPDF1枚から自動判定・解析",
        "再考を推奨（最大5件）・注意（最大5件）・OK項目・質問リストを自動生成",
        "税務系書類では取得費・譲渡所得・税額試算などの計算結果を表示",
        "各書類のサンプルPDFでワンクリックデモ可能",
      ],
      techDetail:
        "Next.js + TypeScript + LangChain（@langchain/google-genai）+ Gemini 2.5 Flash。フロントはインラインスタイル＋globals.cssのメディアクエリでレスポンシブ対応。Vercelにデプロイ。",
      designDoc: {
        architecture:
          "クライアント（ブラウザ）\n  TopScreen（PDFドロップゾーン）\n       │ File\n       ▼\n  AnalyzingScreen（アニメーション）\n       │ POST /api/analyze\n       ▼\n  ResultScreen\n  ├─ 左ペイン: ItemList（risks / watches / oks）\n  ├─ 右ペイン: DetailPanel（title / summary / question）\n  ├─ QuestionsModal（全質問一覧）\n  └─ PrintLayout（@media print 専用）\n─────────────────────────────\nサーバー（Next.js API Route）\n  /api/analyze\n  ├─ PDF → base64変換\n  ├─ LangChain ChatGoogleGenerativeAI\n  └─ JSON パース → レスポンス",
        dataFlow: [
          "ユーザーがPDFをドロップまたは選択",
          "POST /api/analyze にFormDataでアップロード",
          "サーバーでbase64変換してGemini 2.5 Flashにマルチモーダルリクエスト",
          "JSONレスポンスをパースしてAnalyzeResult型に変換",
          "ResultScreenで2カラム表示。左ペインのアイテムをクリックで右ペインに詳細表示",
          "印刷ボタンでPrintLayoutを出力（画面UIは非表示）",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/analyze", description: "PDFを受け取りGemini解析結果をJSONで返す" },
        ],
        dataModels:
          "type AnalyzeResult = {\n  doc: string;\n  risks: RiskItem[];\n  watches: WatchItem[];\n  oks: string[];\n  questions: string[];\n};\n\ntype RiskItem = {\n  id: string;\n  title: string;\n  summary: string;\n  detail: string;\n  question?: string;\n};\n\ntype WatchItem = {\n  id: string;\n  title: string;\n  summary: string;\n  question?: string;\n};",
        envVars: [
          { name: "GEMINI_API_KEY", required: true, description: "Google Gemini APIキー" },
        ],
      },
    },
  },
  {
    slug: "machikoe",
    category: "demo",
    title: "マチコエ",
    badge: "デモ公開中",
    badgeColor: "#0ea57e",
    borderColor: "#0ea57e",
    externalUrl: "https://machikoe.vercel.app",
    thumbnail: "/thumbnails/machikoe.svg",
    description:
      "地方議会の議事録をAIが要約し、住民が自分ごととして意見を届けられるWebアプリ。富士河口湖町・船橋市の議事録を自動収集し、スタンス選択→AI下書き生成→X投稿/パブコメ送付まで一気通貫で対応。",
    stats: ["LangChain", "Gemini 2.5 Flash", "議事録AI要約"],
    tags: ["Next.js", "TypeScript", "Prisma", "Neon", "LangChain", "Gemini API", "Playwright"],
    updatedAt: "2026-04-20",
    githubRepo: "keita2399/machikoe",
    githubPublic: true,
    detail: {
      overview:
        "地方議会の議事録をスクレイピングで自動収集し、Gemini 2.5 Flashで要約・住民への影響説明・意見下書きを生成するWebアプリ。住民がスタンスを選ぶだけで意見文が生成され、X（@役場公式）への投稿またはパブリックコメントのコピー＋フォーム起動で意見表明まで完結する。",
      challenges: [
        "kaigiroku.net（Playwright必須）とVOICES/Web（JSON API直叩き）という2種類の異なる議事録システムへの対応",
        "発言個別URLの取得（data-doc属性からcouncil_id/schedule_id/minute_idを逆算）",
        "ブラウザのSame-Origin Policyによりパブコメフォームへの自動入力が不可能な問題",
        "AIの下書きが「応援文」になりがちな問題（箇条書き＋主張を言い切る形式への誘導）",
      ],
      approach: [
        "Next.js App Router + Prisma + Neon PostgreSQLでフルスタック構成",
        "スクレイパーは議事録システムごとに分離（scrape-kaigiroku.ts / scrape-funabashi.ts）",
        "LangChain（@langchain/google-genai）でAI呼び出しを抽象化し、モデル変更・複数プロバイダー追加に対応できる構成",
        "Gemini 2.5 Flashで要約・影響説明・意見下書きの3種類のプロンプトを設計",
        "コピー＋フォームを開くUXで「貼るだけ」導線を実現",
      ],
      results: [
        "富士河口湖町35件・船橋市直近1年分のデータをDBに自動収集",
        "スタンス選択→AI下書き生成→X投稿/パブコメまで30秒で完了",
        "みんなの声ダッシュボードで賛成/反対/条件付き賛成の集計をグラフ表示",
        "発言の個別URLリンクで議案原文へのダイレクトアクセスを実現",
      ],
      techDetail:
        "Next.js 16 + TypeScript + Prisma v7 + Neon PostgreSQL + LangChain（@langchain/google-genai）+ Gemini 2.5 Flash + Playwright。スクレイピングはPlaywright（kaigiroku.net）とfetch（VOICES/Web JSON API）を使い分け。Vercelにデプロイ。",
      designDoc: {
        architecture:
          "スクレイパー（Playwright / fetch）\n  └─ data/kaigiroku-raw.json / funabashi-raw.json\n       │ import-to-db.ts / import-funabashi.ts\n       ▼\n  Neon PostgreSQL（Topic / Opinion）\n       │ Prisma Client\n       ▼\n  Next.js API Routes\n  ├─ /api/topics/[id]          GET\n  ├─ /api/topics/[id]/impact   POST（AI影響説明）\n  ├─ /api/topics/[id]/draft    POST（AI意見下書き）\n  └─ /api/opinions             POST/GET\n       ▼\n  Next.js Pages\n  ├─ /                        議題一覧\n  ├─ /topics/[id]             議題詳細＋影響説明\n  ├─ /topics/[id]/opinion     意見投稿\n  └─ /dashboard               みんなの声集計",
        dataFlow: [
          "スクレイパーが議事録サイトから発言テキスト・URL・日付を収集",
          "インポートスクリプトがGemini APIで要約を生成しDBに登録",
          "ユーザーがトップページで議題を選択",
          "立場（住民/事業者）を選ぶとAIが影響説明を生成",
          "スタンス（賛成/条件付き/反対）を選ぶとAIが意見下書きを生成",
          "編集後にみんなの声投稿・X送信・パブコメコピーのいずれかで意見表明",
        ],
        apiSpecs: [
          { method: "GET", path: "/api/topics/[id]", description: "議題詳細を返す" },
          { method: "POST", path: "/api/topics/[id]/impact", description: "住民/事業者への影響説明をAI生成" },
          { method: "POST", path: "/api/topics/[id]/draft", description: "スタンスに応じた意見下書きをAI生成" },
          { method: "POST", path: "/api/opinions", description: "意見をDBに記録" },
        ],
        dataModels:
          "model Topic {\n  id          String\n  title       String\n  summary     String\n  rawText     String\n  meetingDate DateTime\n  meetingName String\n  keywords    String[]\n  sourceUrl   String?\n  status      String\n  opinions    Opinion[]\n}\n\nmodel Opinion {\n  id        String\n  topicId   String\n  stance    String  // agree / conditional / disagree\n  userType  String  // resident / business / other\n  content   String\n  anonymous Boolean\n}",
        envVars: [
          { name: "DATABASE_URL", required: true, description: "Neon PostgreSQL接続文字列" },
          { name: "GEMINI_API_KEY", required: true, description: "Google Gemini APIキー" },
        ],
      },
    },
  },
  {
    slug: "line-claude-sync",
    category: "tools",
    title: "LINE Claude Sync",
    badge: "デモ公開中",
    badgeColor: "#06c755",
    borderColor: "#06c755",
    externalUrl: "/demo/chat",
    thumbnail: "/thumbnails/line-claude-sync.svg",
    description:
      "移動中にスマホで思いついたアイデアを、LINEでAIに伝えるだけでPCの開発環境に自動で共有。「いつでもどこでも開発を止めない」ワークフローを実現した、自分のために作ったツール。",
    stats: ["LINE → Gist → CLI 自動同期", "Gemini/Claude 切替"],
    tags: ["Next.js", "TypeScript", "LINE Messaging API", "Gemini API", "Claude API", "LangChain", "GitHub Gist"],
    updatedAt: "2026-04-18",
    githubRepo: "keita2399/line-claude-sync",
    githubPublic: true,
    detail: {
      overview:
        "スマホのLINEからアプリのアイデアをAIに相談し、その会話ログがPCのClaude Code CLIに自動で共有される仕組み。外出先での思いつきを帰宅後の開発にシームレスに繋げる。",
      challenges: [
        "スマホ（LINE）とPC（Claude Code CLI）の間にネイティブな連携手段がない",
        "「メモして」などの手動トリガーではユーザーが忘れる",
        "複数のCLIインスタンス間での情報共有",
        "サーバーレスでデータベースを使わない設計",
      ],
      approach: [
        "LINE Messaging API + Vercel Serverless Functionsでwebhookを処理",
        "GitHub Gistをストレージとして活用（会話ログ + 設定を保存）",
        "毎メッセージ自動保存（バッチ処理・手動トリガー不要）",
        "PC側はタスクスケジューラで5分おきにGist→CLAUDE.mdに同期",
      ],
      results: [
        "ユーザー操作ゼロの完全自動同期を実現",
        "Gemini（無料）/ Claude（有料）のLINE上での切替機能",
        "全CLIインスタンスで共有される~/.claude/CLAUDE.mdへの自動反映",
        "サーバーレス＆DB不要のシンプル構成",
      ],
      techDetail:
        "Next.js 15 + TypeScript + Vercel Serverless Functions。LINE Messaging API（Webhook）+ Gemini API / Claude API（切替可能）。GitHub Gist API をストレージとして使用。PC側はPowerShellスクリプト + Windows タスクスケジューラで自動同期。",
      designDoc: {
        architecture:
          "モバイル層（LINE）\n  ユーザー → LINE App → LINE Messaging API\n       │ Webhook POST\n       ▼\nサーバー層（Vercel / Next.js）\n  /api/webhook/route.ts\n  1. LINE署名検証（HMAC-SHA256）\n  2. Gist読取: conversation.json + settings\n  3. AIルーティング（Claude or Gemini）\n  4. 会話履歴に追記\n  5. Gist更新（JSON + Markdown）\n  6. LINEへ応答返信\n       │\n       ├─→ GitHub Gist API（ストレージ）\n       ├─→ Claude API / Gemini API\n       │\n       │ 5分間隔で同期\n       ▼\nデスクトップ層（Windows / Unix）\n  sync-gist.ps1 / sync-gist.sh\n  ├─ GitHub API経由でGist取得\n  └─ ~/.claude/CLAUDE.md に書き込み\n  → Claude Code CLI が更新コンテキストを読込",
        dataFlow: [
          "ユーザーがLINEでメッセージ送信 → LINE PlatformがWebhook POSTを送信",
          "HMAC-SHA256で署名検証 → GitHub GistからGist読取（conversation.json, settings.json）",
          "モデル切替コマンドチェック（\"claude\"/\"gemini\"/\"クロード\"/\"ジェミニ\"）",
          "直近20メッセージをコンテキストとしてAI APIに送信 → 応答を受信",
          "conversation.jsonに会話追加、claude-memo.mdにタイムスタンプ付きログを追記",
          "Gist更新（PATCH API）→ LINEにreplyTokenで応答返信（4900文字制限）",
          "PC側: タスクスケジューラが5分間隔でGist→CLAUDE.mdに同期",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/webhook", description: "LINE Webhookイベント受信 → AI応答 → Gist保存 → LINE返信" },
        ],
        dataModels:
          "// GitHub Gist ストレージ構成\n\nconversation.json:\n[\n  { \"role\": \"user\", \"content\": \"...\" },\n  { \"role\": \"assistant\", \"content\": \"...\" }\n]  // 直近20件保持\n\nsettings.json:\n{ \"model\": \"claude\" | \"gemini\" }\n\nclaude-memo.md:\n# LINE会話ログ\n**[2026/3/14 9:28:01]**\n**ユーザー:** こんにちは\n**Claude:** こんにちは！",
        envVars: [
          { name: "LINE_CHANNEL_SECRET", required: true, description: "LINE署名検証用シークレット" },
          { name: "LINE_CHANNEL_ACCESS_TOKEN", required: true, description: "LINE API認証トークン" },
          { name: "ANTHROPIC_API_KEY", required: true, description: "Claude API アクセスキー" },
          { name: "GEMINI_API_KEY", required: true, description: "Google Gemini API アクセスキー" },
          { name: "GITHUB_TOKEN", required: true, description: "GitHub Gist読み書き用トークン" },
          { name: "GIST_ID", required: true, description: "対象GistのID" },
        ],
      },
    },
  },
  {
    slug: "invoice-app",
    category: "personal",
    title: "フリーランス向け請求書管理システム",
    badge: "本番稼働中",
    badgeColor: "#7c3aed",
    borderColor: "#7c3aed",
    externalUrl: "https://invoice-app-djb3.onrender.com",
    githubRepo: "keita2399/invoice-app",
    description:
      "フリーランスが実際に使えることを目標に、見積書・請求書・顧客管理を一元化したWebアプリ。Ruby on Rails 8 + Hotwire のモダン構成でゼロから構築し、Render + PostgreSQL に本番デプロイ済み。",
    stats: ["顧客・見積書・請求書の一元管理", "Devise認証でマルチユーザー対応", "Render + PostgreSQL 本番デプロイ済み"],
    tags: ["Ruby on Rails", "Ruby", "PostgreSQL", "Devise", "Tailwind CSS", "Hotwire", "Render"],
    updatedAt: "2026-04-08",
    detail: {
      overview:
        "「Railsも書ける」をポートフォリオで証明するために作成した実用ツール。顧客管理・見積書・請求書の作成から一覧・詳細表示まで、フリーランスの請求業務をカバーするCRUDアプリ。Rails 8 + Hotwire + Tailwind CSS のモダン構成で、開発から本番デプロイまで一気通貫で実施。",
      challenges: [
        "accepts_nested_attributes_for による明細行のネスト入力（動的行追加）",
        "SQLite（開発）/ PostgreSQL（本番）の切り替えとRenderへのデプロイ設定",
        "Tailwind CSS の本番ビルド順序（tailwindcss:build → assets:precompile）の解決",
        "Devise + i18n による全メッセージの日本語化",
      ],
      approach: [
        "current_user スコープでデータを完全分離し、マルチユーザー対応を実現",
        "bin/render-build.sh でビルド手順を管理し、Render の CI/CD に対応",
        "rails-i18n gem + devise.ja.yml でUI・バリデーション・フラッシュメッセージを全日本語化",
        "Solid Cache / Solid Queue / Solid Cable を PostgreSQL の別テーブルで運用",
      ],
      results: [
        "本番環境（Render）への完全デプロイ達成",
        "見積書から請求書への転記機能で業務フローを効率化",
        "Railsの基本設計（MVC・認証・DB設計・デプロイ）を網羅した実装",
      ],
      techDetail:
        "Ruby 3.4 + Rails 8.1 + Propshaft + Tailwind CSS。Devise による認証、accepts_nested_attributes_for による明細行管理。開発環境は SQLite、本番は PostgreSQL（Render）。Hotwire（Turbo + Stimulus）によるSPA的UX。",
    },
  },
  {
    slug: "freelance-manager",
    category: "personal",
    title: "案件管理ツール",
    badge: "本番稼働中",
    badgeColor: "#4f46e5",
    borderColor: "#4f46e5",
    externalUrl: "https://freelance-manager-production-f7c9.up.railway.app",
    githubRepo: "keita2399/FreelanceManager",
    description:
      "「PHPもLaravelも書ける」をポートフォリオで証明するために作成した実用ツール。クライアント・案件・請求書を一元管理するフリーランス向けWebアプリ。Laravel 13 + Blade のサーバーサイドレンダリング構成で、Docker + Railway に本番デプロイ済み。",
    stats: ["クライアント・案件・請求書のCRUD", "Policyクラスによるユーザー認可", "Docker + Railway 本番デプロイ済み"],
    tags: ["PHP 8.3", "Laravel", "Blade", "PostgreSQL", "Tailwind CSS", "Docker", "Railway"],
    updatedAt: "2026-04-10",
    detail: {
      overview:
        "フリーランス向けの案件・クライアント・請求書を一元管理するWebアプリ。Laravel 13 + Blade のサーバーサイドレンダリング構成でゼロから構築し、Docker マルチステージビルド + Railway に本番デプロイ済み。デモアカウントのワンクリックログインでポートフォリオとして即体験できる。",
      challenges: [
        "PHPネイティブ未対応のRailwayへのDockerデプロイ設定",
        "Apache MPM競合（mpm_event vs mpm_prefork）の解消",
        "リバースプロキシ経由のHTTPS強制（Mixed Content対策）",
        "PostgreSQLの外部キー制約によるマイグレーション順序の管理",
      ],
      approach: [
        "Dockerマルチステージビルド（Node.js→PHP Apache）でNode.jsとApacheを分離",
        "docker-entrypoint.sh でApache起動前にMPMシンボリックリンクを削除",
        "TrustProxies設定でRailwayのリバースプロキシ経由HTTPSに対応",
        "Laravel Policyクラスでユーザーごとのデータ完全分離を実現",
        "Observerパターンでプロジェクトステータス変更履歴を自動記録",
      ],
      results: [
        "本番環境（Railway + PostgreSQL）への完全デプロイ達成",
        "ブラウザ印刷APIを活用した請求書PDF出力を実装",
        "デモアカウントワンクリックログインで採用担当者がすぐ体験可能",
        "PHPの基本設計（MVC・認証・ポリシー・Observer・デプロイ）を網羅した実装",
      ],
      techDetail:
        "PHP 8.3 + Laravel 13 + Blade テンプレート + Tailwind CSS + Vite。Laravel Breeze による認証、Policy クラスによるユーザー認可、Observer パターンによるステータス変更履歴。開発環境は SQLite、本番は PostgreSQL（Railway）。Docker マルチステージビルドで Node.js ビルドと Apache 実行環境を分離。",
    },
  },
  {
    slug: "skin-diagnosis",
    category: "tools",
    title: "AI肌診断",
    badge: "本番稼働中",
    badgeColor: "#ec4899",
    borderColor: "#ec4899",
    externalUrl: "https://skin-diagnosis-gold.vercel.app",
    githubRepo: "keita2399/skin-diagnosis",
    githubPublic: true,
    description:
      "美容クリニック向けのAI肌診断Webアプリ。スマホカメラで顔を撮影し、5ステップの問診に答えるだけで、Gemini Vision APIが肌年齢・悩み・施術提案を生成。カメラ・問診・結果表示をすべてNext.jsで実装し、Vercelに本番デプロイ済み。",
    stats: ["Gemini 2.5 Flash Vision", "5ステップ問診", "施術提案3件生成"],
    tags: ["Next.js", "TypeScript", "Gemini API", "LangChain", "react-webcam", "shadcn/ui", "Tailwind CSS", "Framer Motion", "Zod", "Vercel"],
    updatedAt: "2026-04-10",
    thumbnail: undefined,
    detail: {
      overview:
        "美容クリニック向けのAI肌診断Webアプリ。スマホカメラで顔写真を撮影し、肌の悩み・状態・気になる部位・年齢・ダウンタイム許容の5ステップ問診を組み合わせることで、Gemini 2.5 Flash Vision APIが推定肌年齢・懸念事項ランキング・施術提案3件・総評を生成。Next.js App RouterでカメラUI・問診フロー・結果表示を一貫実装し、Vercelに本番デプロイ済み。",
      challenges: [
        "カメラ撮影UIに顔ガイド楕円オーバーレイを重ねるCanvas合成",
        "Gemini Vision APIへの画像＋テキスト混在プロンプト設計",
        "APIレスポンスのZodスキーマバリデーションによる型安全化",
        "Framer Motionを使ったウェルカム・ローディング・結果画面のアニメーション",
        "gemini-2.0-flash廃止による新規ユーザー向けモデル切り替え対応",
      ],
      approach: [
        "Next.js App RouterでUIフロー（welcome→camera→diagnosis→loading→result）をステート管理",
        "buildDiagnosisPrompt()で問診情報をGemini向けのプロンプトに変換",
        "DiagnosisResultSchemaでレスポンスをZod検証し、不正形式を早期検知",
        "カメラはMediaDevices APIで実装。顔ガイドはCSSオーバーレイで表示",
        "Framer Motionで各画面に自然なトランジションとローディングアニメーションを追加",
      ],
      results: [
        "カメラ撮影〜AI診断〜結果表示まで一気通貫で動作するMVPを完成",
        "Vercel本番デプロイ済み・スマホブラウザで即体験可能",
        "ランサーズの肌診断サポートツール開発案件に提案実績あり",
      ],
      techDetail:
        "Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion。Google Gemini 2.5 Flash Vision APIをinlineData形式で呼び出し、Zod (DiagnosisResultSchema) でレスポンスを型安全に検証。Vercelにデプロイ済み。",
    },
  },
  // === 不動産書類AI自動入力 ===
  {
    slug: "real-estate-ai",
    category: "tools",
    title: "不動産書類AI自動入力",
    badge: "デモ公開中",
    badgeColor: "#2563EB",
    borderColor: "#2563EB",
    externalUrl: "https://real-estate-ai-zb95.onrender.com",
    githubRepo: "keita2399/real-estate-ai",
    githubPublic: true,
    description:
      "登記簿謄本・ハザードマップ等のPDFをアップロードするだけで、Gemini AIが34項目を自動抽出し、重要事項説明書のExcelに書き込む不動産業務特化ツール。",
    stats: ["Gemini 2.5 Flash", "34項目自動抽出", "Renderデプロイ済み"],
    tags: ["Python", "Flask", "Gemini API", "openpyxl", "Render"],
    updatedAt: "2026-04-12",
    detail: {
      overview:
        "不動産取引で必須の重要事項説明書作成を効率化するWebツール。登記簿謄本・ハザードマップ・都市計画図などのPDFを複数まとめてアップロードすると、Gemini 2.5 Flash APIが所在・地番・地目・所有者・抵当権・用途地域・ハザード情報など34項目を自動抽出し、Excelテンプレートに書き込んで返却する。宅建業者情報はブラウザのlocalStorageに保存されるため、入力は初回のみ。Renderにデプロイ済みで即デモ可能。",
      challenges: [
        "openpyxlの結合セルへの書き込み（先頭セルを特定するロジックが必要）",
        "Gemini Files APIで複数PDFを一括送信し34項目のJSONを安定出力させるプロンプト設計",
        "Vercelの4.5MB/10秒制限を回避するためRenderを選択",
        "Excelテンプレートをゼロから設計（重要事項説明書の書式を再現）",
      ],
      approach: [
        "google-genai SDKのFiles APIでPDFをアップロードし、generate_contentでJSON出力を指定",
        "openpyxlでmerged_cells.rangesを走査して結合セルの先頭セルを特定し書き込み",
        "宅建業者情報をFormData経由でサーバーに送信し、localStorageで永続化",
        "gunicorn --timeout 120でPDF処理の待機時間に対応",
      ],
      results: [
        "登記簿謄本サンプルで34項目中20項目を自動抽出・入力",
        "Renderにデプロイ済み・デモURLで即体験可能",
        "Lancers案件（予算50〜100万円）に提案実績あり",
      ],
      techDetail:
        "Python + Flask + Google Gemini 2.5 Flash（Files API）+ openpyxl + gunicorn。フロントはHTML/CSS/JSのシングルページ（ドラッグ&ドロップ＋localStorage）。Renderにデプロイ。",
    },
  },
  // === レガシーコード変換（サマリー） ===
  {
    slug: "legacy-conversions",
    category: "flagship",
    title: "レガシーコード変換プロジェクト",
    badge: "13言語対応",
    badgeColor: "#999",
    borderColor: "#999",
    description:
      "「仕様書がない」「読める人がいない」——そんなレガシーシステムを、ソースコードだけを頼りにモダンWebアプリに変換。COBOL・VB6・RPG・QBasic・Ada・MAD-SLIP等13言語、合計44万行超の実績。さらにコード鑑定書38本を制作し、歴史的ソフトウェアの技術考古学を展開。40年の業務知識があるからこそ、コードの裏にある業務を読み解ける。",
    stats: ["13言語対応", "44万行 → 3万行", "鑑定書38本"],
    tags: ["COBOL", "PL/I", "RPG", "VB6", "MUMPS", "Fortran", "C", "Rust", "QBasic", "Ada", "MAD-SLIP", "FastAPI", "React", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    externalUrl: "/works/legacy-conversions",
    detail: {
      overview: "レガシーコード変換プロジェクトの一覧ページへ",
      challenges: [],
      approach: [],
      results: [],
      techDetail: "",
    },
  },
];

// === レガシーコード変換（個別プロジェクト） ===
export const legacyProjects: Project[] = [
  {
    slug: "legacy-code-archive",
    title: "Legacy Code Museum",
    badge: "鑑定書38本",
    badgeColor: "#d4a574",
    borderColor: "#d4a574",
    externalUrl: "https://gstate-gk.github.io/legacy-code-museum/",
    thumbnail: "/thumbnails/legacy-code-museum.svg",
    description:
      "12リポジトリ・8言語から383,418件のコメントを収集し、感情分析・タグ検出パイプラインを構築。インタラクティブWebアプリ「Legacy Code Museum」と、コード鑑定書38本（ELIZA、CP/M、Mosaic、QEMU、Smalltalk-80、SQLite、NASA NASTRAN等）を制作。1960年代のチャットボットから2000年代のメディアプレイヤーまで、歴史的ソフトウェアの技術考古学を展開。",
    stats: ["383,418コメント収集", "鑑定書38本制作"],
    tags: ["Python", "Next.js", "TypeScript", "AI活用", "データ分析"],
    updatedAt: "2026-03-28",
    githubRepo: "gstate-gk/legacy-code-archive",
    detail: {
      overview:
        "90年代以前のレガシーコードを系統的に収集・分析するプロジェクト。12リポジトリから383,418件のコメントを抽出し、感情分析（frustration, humor等8感情）とタグ検出（TODO/FIXME/HACK等）を自動実行。成果物としてインタラクティブWebアプリとコード鑑定書シリーズを制作。",
      challenges: [
        "8言語（C, COBOL, PL/I, RPG, VB6, Lua, Fortran, Ada）のコメント解析パーサー開発",
        "383,418件のコメントの感情分析・スコアリング",
        "鑑定書のストーリー構築（コメントから歴史を読み解く）",
        "Museum Webアプリのインタラクティブ機能（クイズ、鑑定対決等）",
      ],
      approach: [
        "言語別パーサーによるコメント抽出パイプライン構築",
        "キーワードベースの感情分析（8カテゴリ）+ 興味度スコアリング",
        "AIによるソースコード深掘り解析 → ストーリー素材発掘",
        "Next.js + GitHub Pages でMuseumアプリをデプロイ",
      ],
      results: [
        "12リポジトリ・8言語から383,418件のコメントを収集",
        "コード鑑定書38本を制作（ELIZA, CP/M, Mosaic, Minix, Mocha, QEMU, Smalltalk-80, SQLite, NASA NASTRAN, BRL-CAD等）",
        "Legacy Code Museum をGitHub Pagesにデプロイ",
        "コード考古学の手法とパイプラインを確立",
        "変換実装4件（Oregon Trail, Whitaker's WORDS, Mako VM, ELIZA）を追加制作",
      ],
      techDetail: "Python（収集パイプライン）+ Next.js + TypeScript + Tailwind CSS（Museum）。GitHub Actions で自動デプロイ。データは JSON 形式で管理。",
    },
  },
  {
    slug: "habitat-pli",
    title: "PL/I → Web 変換（Habitat）",
    badge: "82%削減",
    badgeColor: "#8b5cf6",
    borderColor: "#8b5cf6",
    externalUrl: "https://habitat-1986.onrender.com",
    thumbnail: "/thumbnails/habitat-pli.svg",
    description:
      "1986年にLucasfilm Games Divisionが開発した世界初のグラフィカルMMO「Habitat」。PL/I（Stratus VOS）26,218行をPython+React 4,622行に変換。108種類のオブジェクトクラスを全実装し、ブラウザ上で動作するデモを公開。",
    stats: ["26,218行 → 4,622行", "108クラス全実装"],
    tags: ["PL/I", "Stratus VOS", "FastAPI", "React", "WebSocket"],
    updatedAt: "2026-03-12",
    githubRepo: "gstate-gk/habitat-1986",
    githubPublic: true,
    detail: {
      overview:
        "Lucasfilm Games Division（現LucasArts）が1986年にPL/Iで開発した世界初のグラフィカルMMO「Habitat」を、Python + Reactに完全変換。Stratus VOSという消滅したプラットフォームからの救出作業。「アバター」という用語を仮想空間の分身として初めて使ったのがこのHabitat。",
      challenges: [
        "PL/IのBASED構造体＋ENTRY変数による事実上のvtable（仮想関数テーブル）の解読",
        "Stratus VOS固有API（s$task_wait_event, s$keyed_read等）——OSごと消滅した技術の現代等価物への置換",
        "108種類のオブジェクトクラス（アバター、ATM、銃、テレポーター、自販機、ゴースト等）の全実装",
        "5種類のメッセージング（n_msg/b_msg/p_msg/e_msg/r_msg）の再現",
      ],
      approach: [
        "PL/IのClass_TableディスパッチをPython辞書 + getattrディスパッチに変換",
        "s$task_wait_eventループをasyncio + WebSocketに変換",
        "Stratus VOSキー付きファイルをSQLiteに変換",
        "C64クライアント（6502アセンブラ）をHTML5 Canvas 2D + Reactで再現",
      ],
      results: [
        "コード量82%削減（26,218行 → 4,622行）",
        "ファイル数83%削減（261 → 44ファイル）",
        "108種類のオブジェクトクラスを全て実装",
        "1986年の設計パターンが現代のWebSocket/asyncioパターンとほぼ同一であることを実証",
      ],
      techDetail:
        "Python 3.12 + FastAPI + WebSocket + aiosqlite / React 19 + TypeScript 5.9 + Vite + Canvas 2D。元ソースはMITライセンス（Museum of Art and Digital Entertainment公開）。",
    },
  },
  {
    slug: "hengband-rust",
    title: "C → Rust 言語変換",
    badge: "97%削減",
    badgeColor: "#c8860a",
    borderColor: "#c8860a",
    description:
      '日本製ローグライクRPG「Hengband」のC言語33万行をRust 1万行に変換。ソースコード読解のみで完全動作するゲームを2日間で再実装。rustcコンパイラのICEバグも発見。',
    stats: ["330,000行 → 10,300行", "2日間で完了"],
    tags: ["C言語", "Rust", "crossterm", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "1990年代に開発された日本製ローグライクRPG「Hengband」は、C言語で書かれた33万行の巨大コードベース。これをRust言語に完全変換し、約1万行で同等の機能を持つゲームを再実装しました。",
      challenges: [
        "33万行のC言語コード（ドキュメントなし）の全体構造把握",
        "C言語のポインタ操作・グローバル変数をRustの所有権モデルに適合させる設計",
        "ターミナル描画のクロスプラットフォーム対応（Windows/Linux/Mac）",
        "ゲームバランスや動作の忠実な再現",
      ],
      approach: [
        "ソースコードの静的解析で主要モジュール（ダンジョン生成、戦闘、アイテム管理等）を特定",
        "AIを活用してC→Rustの変換パターンを効率化",
        "crossterm crateによるターミナルUI再構築",
        "段階的なテスト（モジュール単位 → 統合テスト → プレイテスト）",
      ],
      results: [
        "コード量97%削減（330,000行 → 10,300行）",
        "2日間で完全動作するゲームを実装",
        "変換過程でrustcコンパイラのICE（Internal Compiler Error）バグを発見・報告",
        "メモリ安全性の向上（Rustの所有権システムにより未定義動作を排除）",
      ],
      techDetail:
        "Rust + crossterm（ターミナルUI）。EUC-JP→UTF-8の文字コード変換、Cargo workspaceによるモジュール管理。CI/CDはGitHub Actions。",
      designDoc: {
        architecture:
          "main.rs\n  ├─→ init.rs ──→ init_txt.rs（データファイル読込）\n  ├─→ birth.rs ──→ birth_data.rs（キャラ作成データ）\n  ├─→ dungeon.rs（ゲームループ）\n  │     ├─→ game_state.rs（状態管理）\n  │     ├─→ game_types.rs（型定義）\n  │     ├─→ spell_data.rs（魔法データ）\n  │     ├─→ store.rs（店舗）\n  │     ├─→ save.rs（永続化）\n  │     └─→ z_rand.rs（乱数）\n  ├─→ z_term.rs（ターミナル抽象化）\n  │     └─→ main_gcu.rs（crossterm実装）\n  └─→ z_util.rs, z_form.rs（ユーティリティ群）",
        dataFlow: [
          "CLIフラグ解析（--dungeon で完全ゲーム起動）",
          "GameState初期化: k_info.txt, r_info.txt, f_info.txt 等のデータファイルを読込",
          "キャラクター作成: 性別→種族(37)→職業(27)→性格(12)→ステータスロール",
          "ダンジョン生成: 部屋配置→通路接続→階段→罠→モンスター(3-8体)配置",
          "ゲームループ: プレイヤー入力→モンスターAI→戦闘→経験値→レベルアップ",
          "セーブ/ロード: バイナリ形式（マジックヘッダー 0x48454E47 + v2フォーマット）",
        ],
        dataModels:
          "struct PlayerType {\n  name: String,\n  race: usize,        // 37種族\n  class: usize,       // 27職業\n  stat_max: [i32; 6], // STR,INT,WIS,DEX,CON,CHR\n  lev: i32,           // 最大50\n  hp: i32, mhp: i32,\n  mp: i32, mmp: i32,\n  ac: i32, to_h: i32, to_d: i32,\n}\n\nstruct MonsterRace {\n  name: String,\n  level: i32,\n  hp_dice: (i32, i32),\n  blows: Vec<MonsterBlow>, // 最大4攻撃\n  flags: u64,\n}\n\nstruct GameState {\n  player: PlayerType,\n  dungeon_level: i32,     // 1-50\n  cave: [[CaveType; MAX_WID]; MAX_HGT],\n  monsters: Vec<MonsterInstance>,\n  // C言語の約200グローバル変数を統合\n}",
      },
    },
  },
  {
    slug: "carddemo-cobol",
    title: "COBOL → Web 変換",
    badge: "93%削減",
    badgeColor: "#4a90d9",
    borderColor: "#4a90d9",
    description:
      "AWS公開のメインフレーム・クレジットカード管理システム。COBOL 31プログラム+BMS 17画面+VSAM 10ファイルをFastAPI+Reactに全変換。CICS画面遷移もSPA化。",
    stats: ["30,451行 → 2,250行", "119ファイル → 22"],
    tags: ["COBOL", "CICS/BMS", "FastAPI", "React"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "AWSが公開しているメインフレーム・デモアプリケーション「CardDemo」（クレジットカード管理システム）を、モダンWebアプリケーションに完全変換したプロジェクト。",
      challenges: [
        "COBOL 31プログラム＋BMS 17画面＋VSAM 10ファイルの複雑な依存関係の解析",
        "CICS画面遷移（SEND MAP/RECEIVE MAP）のSPA化",
        "VSAMファイル（KSDS/ESDS）のリレーショナルDB設計への変換",
        "COBOL独特のデータ型（COMP-3, REDEFINES等）のマッピング",
      ],
      approach: [
        "COBOL DATA DIVISIONの解析でデータモデルを抽出",
        "BMS画面定義をReactコンポーネントに1対1マッピング",
        "CICS SEND/RECEIVE MAPをREST API + React Routerに変換",
        "VSAMファイル構造をSQLiteテーブルに正規化",
      ],
      results: [
        "コード量93%削減（30,451行 → 2,250行）",
        "ファイル数81%削減（119 → 22ファイル）",
        "全17画面の機能を完全再現",
        "REST APIによる拡張性の向上",
      ],
      techDetail:
        "FastAPI（Python）+ React + SQLite。OpenAPI自動ドキュメント生成。元のCOBOLはGnuCOBOLでビルド検証済み。",
    },
  },
  {
    slug: "vb6-pos",
    title: "VB6 → Web 変換",
    badge: "89%削減",
    badgeColor: "#7c5cbf",
    borderColor: "#7c5cbf",
    description:
      '小売店向けPOSシステム。3,150行の「神フォーム」を6コンポーネントに分割。SQLインジェクション40箇所超を修正、Access MDBをSQLiteに正規化移行。',
    stats: ["12,500行 → 1,414行", "脆弱性40箇所修正"],
    tags: ["VB6", "ActiveX", "FastAPI", "React"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "小売店向けPOSシステム（VB6 + Access MDB）をモダンWebアプリに変換。セキュリティ脆弱性の修正とアーキテクチャの近代化を同時に実現。",
      challenges: [
        "3,150行の「神フォーム」（1つのフォームに全機能が集約）の分解",
        "40箇所以上のSQLインジェクション脆弱性",
        "Access MDBの非正規化テーブル設計",
        "ActiveXコントロール依存の帳票印刷機能",
      ],
      approach: [
        "神フォームを責務ごとに6つのReactコンポーネントに分割",
        "全SQL文をパラメータ化クエリに書き換え",
        "Access MDBを正規化してSQLiteに移行",
        "帳票はブラウザのCSS Print機能で再実装",
      ],
      results: [
        "コード量89%削減（12,500行 → 1,414行）",
        "SQLインジェクション40箇所超を完全修正",
        "ActiveX依存を排除しブラウザのみで動作",
        "コンポーネント分割により保守性が大幅向上",
      ],
      techDetail:
        "FastAPI + React + SQLite。元のVB6コードはソースのみ（実行環境なし）から解析。バーコードリーダー連携はWeb Serial API対応設計。",
    },
  },
  {
    slug: "rpg-custmast",
    title: "RPG → Web 変換",
    badge: "71%削減",
    badgeColor: "#2d8f4e",
    borderColor: "#2d8f4e",
    description:
      "IBM i（AS/400）の顧客マスタ保守アプリ。5250緑画面のサブファイルをReactテーブルに変換、DB2 for iからSQLiteへ移行。ソース読解のみ、約15分で実装完了。",
    stats: ["2,286行 → 650行", "約15分で完了"],
    tags: ["ILE RPG", "5250画面", "FastAPI", "React"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "IBM i（AS/400）上で動作する顧客マスタ保守アプリケーション。ILE RPGで書かれた5250緑画面アプリをWebアプリに変換。",
      challenges: [
        "5250画面のサブファイル（ページング付きリスト表示）のWeb再現",
        "RPG固有のインジケータ（*INxx）ベースの制御フロー",
        "DB2 for iのDDS定義からのスキーマ変換",
        "固定長レコードのデータ型マッピング",
      ],
      approach: [
        "DDS画面定義を解析してReactコンポーネントを設計",
        "サブファイルをページネーション付きテーブルに変換",
        "RPGインジケータをboolean状態変数に置換",
        "DB2 DDSをSQLite CREATE TABLEに変換",
      ],
      results: [
        "コード量71%削減（2,286行 → 650行）",
        "約15分で変換完了（AIペアプログラミング）",
        "5250画面の操作性をWebで完全再現",
        "レガシー→モダン変換の高速パターンを確立",
      ],
      techDetail:
        "FastAPI + React + SQLite。元のRPGソースはILE RPG（/FREE形式含む）。DDSファイル（DSPF/PF/LF）の完全解析。",
    },
  },
  {
    slug: "acas-gl",
    title: "COBOL会計システム分析",
    badge: "100K行",
    badgeColor: "#999",
    borderColor: "#999",
    description:
      "英国製実務会計システム ACAS-GL（273ファイル、10万行）。GnuCOBOL 3.2をソースビルドし、仕様書不在の状態からビルド・動作確認環境を構築。修正はわずか3箇所。",
    stats: ["100,000行 / 273ファイル", "ビルド成功"],
    tags: ["COBOL", "GnuCOBOL", "Berkeley DB", "WSL2"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "英国で実務使用されていた会計システム ACAS-GL（General Ledger）。仕様書が存在しない状態から、ソースコードのみでビルド・動作確認環境を構築した分析プロジェクト。",
      challenges: [
        "10万行・273ファイルの巨大COBOLコードベースの構造把握",
        "仕様書・ドキュメント一切なし",
        "GnuCOBOL 3.2のソースビルドが必要（パッケージマネージャ版では不足）",
        "Berkeley DB（ISAM代替）との連携設定",
      ],
      approach: [
        "COBOL COPY句の依存関係グラフを生成して全体構造を把握",
        "GnuCOBOL 3.2をWSL2上でソースからビルド",
        "Berkeley DBをISAMバックエンドとして設定",
        "段階的コンパイル（個別→モジュール→全体）で問題箇所を特定",
      ],
      results: [
        "修正わずか3箇所でフルビルド成功",
        "273ファイルの依存関係マップを作成",
        "仕様書不在からの動作環境構築手法を確立",
        "レガシーCOBOL分析の再現可能な手順書を作成",
      ],
      techDetail:
        "GnuCOBOL 3.2（ソースビルド）+ Berkeley DB + WSL2（Ubuntu）。COPY句解析にPythonスクリプトを使用。",
    },
  },
  {
    slug: "hengband-web",
    title: "C+Lua → Python+React 変換（Hengband Web）",
    badge: "98.7%削減",
    badgeColor: "#c8860a",
    borderColor: "#c8860a",
    description:
      "日本製ローグライクRPG「Hengband」のC+Lua 33万行をPython+React 4,245行に変換。ブラウザ上でプレイ可能なWebアプリとして再実装。Lua 5.0バインディング3万行を含むレガシーコードの完全現代化。",
    stats: ["330,000行 → 4,245行", "ブラウザで動作"],
    tags: ["C言語", "Lua", "FastAPI", "React", "Claude Code"],
    updatedAt: "2026-03-13",
    githubRepo: "gstate-gk/hengband-web",
    detail: {
      overview:
        "C言語33万行+Lua 5.0スクリプティングで構成された日本製ローグライクRPGを、Python+Reactのモダンなフルスタック構成に変換。ブラウザ上でターミナルUIを再現。",
      challenges: [
        "C言語33万行+Lua 5.0バインディング3万行の巨大コードベース",
        "tolua自動生成コードの解読",
        "ターミナルベースのゲームUIをWebで再現",
        "EUC-JP→UTF-8の文字コード変換",
      ],
      approach: [
        "ソースコード静的解析で主要モジュールを特定",
        "C→Python、Lua→React State管理への変換パターンを確立",
        "WebSocketによるリアルタイムゲーム通信",
        "HTML5 Canvasでターミナル描画を再現",
      ],
      results: [
        "コード量98.7%削減（330,000行 → 4,245行）",
        "ブラウザ上で完全にプレイ可能",
        "ローグライクの全機能（ダンジョン生成、戦闘、魔法、アイテム）を再現",
        "レガシーC+Lua→モダンWeb変換のパターンを確立",
      ],
      techDetail: "FastAPI + React + WebSocket + Canvas 2D。tolua 3万行の自動バインディングをPython辞書ディスパッチに変換。",
    },
  },
  {
    slug: "mumps-vista",
    title: "MUMPS → Web 変換",
    badge: "78%削減",
    badgeColor: "#e55b3c",
    borderColor: "#e55b3c",
    description:
      "米国退役軍人省の医療情報システム VistA の Problem List モジュール。MUMPS（M言語）7,677行をPython+React 1,650行に変換。グローバル変数ベースの階層型DBをSQLiteに移行。",
    stats: ["7,677行 → 1,650行", "MUMPS → Python"],
    tags: ["MUMPS", "VistA", "FastAPI", "React"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "米国退役軍人省（VA）の電子健康記録システムVistAのProblem List（問題リスト）モジュールを、MUMPS言語からPython+Reactに変換。",
      challenges: [
        "MUMPS独特の構文（省略形コマンド、後置条件、グローバル変数）",
        "階層型データベース（グローバル ^AUPNPROB）のリレーショナル化",
        "FileMan（VistA独自のデータ辞書）の解読",
        "医療用語コード体系（ICD/SNOMED CT）への対応",
      ],
      approach: [
        "MUMPSのグローバル変数パターンをSQLiteテーブルに変換",
        "FileManデータ辞書からスキーマを自動生成",
        "MUMPS省略形コマンドの完全マッピング表を作成",
        "医療用語のバリデーションロジックを再実装",
      ],
      results: [
        "コード量78%削減（7,677行 → 1,650行）",
        "MUMPS→Python変換パターンを確立",
        "階層型DB→リレーショナルDB変換の手法を確立",
        "医療システム特有のデータ整合性を維持",
      ],
      techDetail: "FastAPI + React + SQLite。元のMUMPS/VistAソースを完全解析し、FileManデータ辞書から型情報を抽出。",
    },
  },
  {
    slug: "saturn-fortran",
    title: "Fortran → Web 変換",
    badge: "22%削減",
    badgeColor: "#6366f1",
    borderColor: "#6366f1",
    description:
      "NASAの土星磁場モデル（Fortran 77）をPython+React+Plotlyに変換。科学計算の精度を維持しつつ、3Dインタラクティブ可視化をブラウザで実現。",
    stats: ["2,334行 → 1,808行", "3D可視化対応"],
    tags: ["Fortran", "Python", "React", "Plotly"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "1980年代にNASAが開発した土星の磁場モデルをFortran 77からPython+Reactに変換。球面調和関数による磁場計算を維持しつつ、Plotlyで3Dインタラクティブ可視化を追加。",
      challenges: [
        "Fortran 77固有の固定形式コード（桁位置の意味）",
        "科学計算の精度維持（浮動小数点の扱い）",
        "球面調和関数・ルジャンドル多項式の正確な移植",
        "COMMONブロックの変換",
      ],
      approach: [
        "Fortran→NumPy配列への変換パターンを確立",
        "COMMONブロックをPythonクラスに変換",
        "Plotlyで磁力線・ベクトル場の3D描画を実装",
        "計算結果の元Fortranとの数値比較検証",
      ],
      results: [
        "科学計算の精度を完全に維持",
        "ブラウザ上で3Dインタラクティブ可視化を実現",
        "Fortran→Python科学計算変換のパターンを確立",
        "コード量22%削減（科学計算は圧縮率が低い傾向）",
      ],
      techDetail: "FastAPI + React + NumPy + Plotly。球面調和関数の計算精度は元Fortranと10^-12以内の一致を確認。",
    },
  },
  {
    slug: "oregon-trail",
    title: "QBasic → React 変換（Oregon Trail）",
    badge: "1971年作",
    badgeColor: "#8b6914",
    borderColor: "#8b6914",
    description:
      "1971年にミネソタの教師が生徒のために書いた教育ゲーム「The Oregon Trail」。QBasic 685行（GOTO 105個、変数名は1-2文字）をReact+TypeScript 1,519行に変換。ブラウザ上でプレイ可能なWebアプリとして再実装。",
    stats: ["685行 → 1,519行", "GOTO 105個を構造化"],
    tags: ["QBasic", "React", "TypeScript", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "1971年にDon Rawitschが8年生の歴史授業のために書いた教育ゲーム「The Oregon Trail」。GOTO文105個、変数名が1-2文字（T9, F2等）という典型的な初期BASICコードを、React+TypeScriptのモダンWebアプリに変換。ゲームの雰囲気（葬式のブラックユーモア等）を忠実に再現。",
      challenges: [
        "GOTO文105個によるスパゲッティコードの構造化",
        "1-2文字の変数名32個（T9, F2, S4等）の意味解読",
        "BASICのTAB関数によるテキスト整形のCSS再現",
        "ランダムイベントの確率バランスの忠実な再現",
      ],
      approach: [
        "GOTO/GOSUBのジャンプ先を分析し、状態遷移図を作成",
        "変数名を文脈から推定し意味のある名前に置換（T9→totalMileage等）",
        "ゲームフェーズをReactコンポーネント（買い物→行動選択→イベント→結果）に分割",
        "元のランダム確率テーブルをそのまま移植し、ゲームバランスを維持",
      ],
      results: [
        "GOTO 105個を完全に構造化（状態管理 + コンポーネント分割）",
        "1971年のゲーム体験をブラウザで完全に再現",
        "変数名・ロジックの意味を解読しドキュメント化",
        "コード鑑定書（#014）も同時制作",
      ],
      techDetail: "React + TypeScript + Tailwind CSS。QBasicの制御フローをuseState + イベントハンドラに変換。元コードの確率テーブルを忠実に移植。",
    },
  },
  {
    slug: "whitakers-words",
    title: "Ada → React 変換（Whitaker's WORDS）",
    badge: "98%削減",
    badgeColor: "#2d8f4e",
    borderColor: "#2d8f4e",
    description:
      "米空軍大佐William Whitakerが13年間かけてAdaで書いたラテン語辞書「WORDS」。Ada 27,670行をReact+TypeScript 547行の辞書検索Webアプリに変換。品詞別色分け表示でラテン語学習を支援。",
    stats: ["27,670行 → 547行", "ラテン語辞書検索"],
    tags: ["Ada", "React", "TypeScript", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "米空軍大佐（退役）William Whitakerが1993年から13年間、個人プロジェクトとしてAdaで開発したラテン語辞書プログラム。語形変化の解析、品詞判定、英訳を行う本格的な自然言語処理システムを、ブラウザで使えるReactアプリに変換。",
      challenges: [
        "Ada固有の型システム（レコード型、列挙型、配列制約）の変換",
        "ラテン語の語形変化テーブル（格変化・活用）のデータモデル設計",
        "辞書データ（約39,000エントリ）のJSON変換と検索最適化",
        "品詞判定ロジックの正確な移植",
      ],
      approach: [
        "Ada列挙型をTypeScript union型に変換",
        "語形変化テーブルをJSON辞書として構造化",
        "前方一致＋部分一致のハイブリッド検索を実装",
        "品詞別色分け（名詞:青、動詞:赤、形容詞:緑等）で視覚的に把握しやすいUIを設計",
      ],
      results: [
        "コード量98%削減（27,670行 → 547行）",
        "ブラウザ上でラテン語辞書検索が可能",
        "品詞別色分け表示で学習を支援",
        "コード鑑定書（#005）も制作",
      ],
      techDetail: "React + TypeScript。Ada の DICTLINE.GEN（39,000エントリ）をJSONに変換し、クライアントサイド検索を実装。",
    },
  },
  {
    slug: "mako-vm",
    title: "Java/Forth → TypeScript 変換（Mako VM）",
    badge: "46%削減",
    badgeColor: "#6366f1",
    borderColor: "#6366f1",
    description:
      "John Earnestが設計した仮想ゲームコンソール「Mako」。Java 1,965行のVM実装をTypeScript+Canvas 1,054行に変換。Forthのデュアルスタックアーキテクチャをブラウザ上で再現し、ROMファイルを読み込んで実行可能。",
    stats: ["1,965行 → 1,054行", "仮想ゲームコンソール"],
    tags: ["Java", "Forth", "TypeScript", "Canvas 2D", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "スタックベースの仮想マシン「Mako」をブラウザで動作するTypeScriptアプリに変換。Forth言語で書かれたゲームのROMファイルを読み込み、Canvas 2Dで描画。デュアルスタック（データスタック＋リターンスタック）アーキテクチャを忠実に再現。",
      challenges: [
        "Forthのデュアルスタック（データスタック＋リターンスタック）の実装",
        "VM命令セット（30命令）の正確な移植",
        "タイルベースのグラフィック描画（Canvas 2D）",
        "ROMバイナリフォーマットのパース",
      ],
      approach: [
        "JavaのVM実行ループをTypeScript classに変換",
        "Canvas 2DでMakoのタイルグラフィックスを描画",
        "requestAnimationFrameでゲームループを実装",
        "File APIでROMファイルのアップロード・実行に対応",
      ],
      results: [
        "コード量46%削減（1,965行 → 1,054行）",
        "ブラウザ上でMako ROMを実行可能",
        "テストROMで描画・入力・サウンドを確認",
        "コード鑑定書（#017）も制作",
      ],
      techDetail: "TypeScript + Canvas 2D。Forthのスタックマシンアーキテクチャを忠実に再現。ROMバイナリをArrayBufferで読み込み実行。",
    },
  },
  {
    slug: "eliza-chatbot",
    title: "MAD-SLIP → TypeScript 変換（ELIZA）",
    badge: "1966年作",
    badgeColor: "#e55b3c",
    borderColor: "#e55b3c",
    description:
      "1966年にMITのJoseph Weizenbaumが開発した世界初のチャットボット「ELIZA」。MAD-SLIP約2,600行をTypeScript+React 196行に変換。ChatGPT風のチャットUIで、パターンマッチング型の対話を体験可能。",
    stats: ["~2,600行 → 196行", "世界初のチャットボット"],
    tags: ["MAD-SLIP", "React", "TypeScript", "Claude Code"],
    updatedAt: "2026-03-27",
    githubRepo: "keita2399/G.state",
    detail: {
      overview:
        "1966年にMITのJoseph Weizenbaumが開発した世界初のチャットボット「ELIZA」。パターンマッチングと変換ルールによるロジャーズ派心理療法シミュレーション「DOCTOR」スクリプトを、モダンなチャットUIで再現。秘書が「部屋から出てください」と言った逸話（ELIZA効果）で知られる歴史的プログラム。",
      challenges: [
        "MAD-SLIP（1960年代のMIT独自言語）の構文解読",
        "SLIPリスト処理構造の現代的データ構造への変換",
        "パターンマッチングと変換ルールの忠実な再現",
        "DOCTORスクリプトのキーワード優先度・分解ルールの正確な移植",
      ],
      approach: [
        "MAD-SLIPのリスト処理をTypeScript配列・Map操作に変換",
        "パターンマッチングエンジンを正規表現ベースで再実装",
        "DOCTORスクリプト（キーワード→分解→再組立）をJSONルールとして構造化",
        "ChatGPT風のチャットUIでレトロな対話体験をモダンに演出",
      ],
      results: [
        "コード量92%削減（~2,600行 → 196行）",
        "1966年のELIZAの対話パターンをブラウザで再現",
        "ChatGPT風UIで歴史的AIとの対話を体験可能",
        "コード鑑定書（#019）も制作",
      ],
      techDetail: "React + TypeScript。パターンマッチングエンジンを正規表現で再実装。DOCTORスクリプトのルールセットをJSON構造化。",
    },
  },
  {
    slug: "elearning-demo",
    category: "demo",
    title: "eラーニングプラットフォーム",
    badge: "提案用デモ",
    badgeColor: "#4f46e5",
    borderColor: "#4f46e5",
    externalUrl: "https://elearning-demo-sage.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&q=80",
    description:
      "ランサーズ案件（50〜100万円）の提案用に作成したeラーニングプラットフォームのデモ。Figmaでデザインを設計・React コードを生成し、認証・受講登録・進捗管理・学習履歴をフル実装。バックエンドなし・localStorage のみで本格的な学習フローを再現。",
    stats: ["Figmaデザイン → React生成", "7画面フル実装", "localStorage認証・進捗管理"],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router v7", "Figma", "Vercel"],
    updatedAt: "2026-04",
    detail: {
      overview:
        "ランサーズに掲載されたeラーニングプラットフォーム開発案件（予算50〜100万円）への提案用デモ。「動くもので提案したい」という方針のもと、Figmaでデザインを設計してReactコードを生成し、そこに認証・受講フロー・進捗管理を実装。バックエンドなし・localStorageのみで会員登録からレッスン完了まで一連の学習体験を再現した。",
      challenges: [
        "Figma生成のVite/React SPAをベースに、ルート認証ガード・コンテキスト・永続化を後付けで組み込む設計",
        "バックエンドなしでログイン・会員登録・ログアウト・デモアカウントを動作させる仕組み",
        "受講登録→レッスン完了→進捗バー更新という一連のフローをlocalStorageで整合性を保って実装",
        "未受講ユーザーにカリキュラムをロック表示し、受講後に解放する状態管理",
      ],
      approach: [
        "Figmaがエクスポートした完成度の高いReact/Tailwindコードをそのまま活用し、最短で動くデモを構築",
        "localStorage認証をauth.tsに集約。デモアカウント2種（学習者・管理者）を固定値で内蔵",
        "progress.tsでenrollment・lesson完了をlocalStorageに永続化。getCourseProgress()で進捗率を動的算出",
        "RequireAuth コンポーネントでルートガードを実装。未ログインは /login にリダイレクト",
        "React Context（useAuth）で認証状態をアプリ全体に伝播",
      ],
      results: [
        "提案当日にデモURLを提示できる状態でランサーズに応募",
        "ダッシュボード・コース一覧・コース詳細・レッスン・学習履歴・設定・管理者の7画面を実装",
        "Figmaデザイン → 実装 → Vercelデプロイまでを短期間で完遂",
      ],
      techDetail:
        "React 18 + TypeScript + Vite 6。UIはFigma生成のshadcn/ui + Tailwind CSS v4。ルーティングはReact Router v7（RequireAuthガード）。認証・進捗はlocalStorage（バックエンドなし）。Vercel（vercel.json SPAリライト設定）にデプロイ。",
    },
  },
  {
    slug: "es-correction-ai",
    category: "demo",
    title: "ES添削AIシステム",
    badge: "デモ公開中",
    badgeColor: "#2563eb",
    borderColor: "#2563eb",
    externalUrl: "https://es-correction-demo.vercel.app/input",
    description:
      "就職活動のエントリーシートをAIが添削するWebアプリ。業界・職種ごとに評価観点を切り替え、論理性・具体性・熱意の3軸でスコアリング。良い点・改善点・改善提案文をGemini APIで生成。",
    stats: ["業界×職種で評価観点切替", "Gemini 2.5 Flash"],
    tags: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "Vercel"],
    updatedAt: "2026-04",
    githubRepo: "keita2399/es-correction-demo",
    githubPublic: true,
    detail: {
      overview:
        "就職活動支援サービス向けに開発したES添削AIシステムのデモ。業界（IT・メーカー・金融・コンサルティング）と職種（営業・エンジニア・企画・マーケティング）の組み合わせに応じてプロンプトの評価観点を動的に切り替え、Gemini 2.5 Flashが論理性・具体性・熱意の3軸でスコアリングし、改善提案文を生成する。",
      challenges: [
        "業界×職種ごとに異なる評価観点をプロンプトに落とし込む設計",
        "Gemini APIのJSONレスポンスの安定したパースと異常系ハンドリング",
        "入力画面→添削結果画面へのデータ受け渡し（sessionStorage活用）",
      ],
      approach: [
        "業界×職種マトリクスで評価観点を定義し、APIルート内でプロンプトを動的生成",
        "Gemini 2.5 FlashにJSONのみ返却するよう指示し、コードブロック混入も除去して安定パース",
        "Next.js App Router + Route HandlersでAPI構成をシンプルに統一",
        "sessionStorageで画面間データを受け渡し、URLを汚さない設計",
      ],
      results: [
        "業界4×職種4の16パターンで評価観点を切り替え可能",
        "総合スコア・3軸スコア・良い点・改善点・改善提案文を一画面で表示",
        "Vercelにデプロイ済み・即デモ可能",
      ],
      techDetail:
        "Next.js 16 + TypeScript + Tailwind CSS。Gemini 2.5 Flash（@google/generative-ai）をRoute Handlersから呼び出し。Vercelでホスティング。",
      designDoc: {
        architecture:
          "ブラウザ（Client Component）\n  業界・職種選択 + ES本文入力\n       │ POST /api/correct\n       ▼\n  Route Handler（Server）\n  ├─ 業界×職種 → 評価観点プロンプト生成\n  ├─ Gemini 2.5 Flash API呼び出し\n  └─ JSONパース → レスポンス返却\n       │ sessionStorage保存\n       ▼\n  フィードバック画面\n  ├─ 総合スコア\n  ├─ 3軸スコア（論理性/具体性/熱意）\n  ├─ 良い点・改善点\n  └─ 改善提案文",
        dataFlow: [
          "ユーザーが業界・職種・設問タイトル・ES本文を入力",
          "POST /api/correct に送信",
          "サーバー側で業界×職種の評価観点をプロンプトに埋め込み",
          "Gemini 2.5 Flash APIを呼び出してJSON形式のフィードバックを取得",
          "sessionStorageに保存してフィードバック画面へリダイレクト",
          "フィードバック画面でスコア・コメント・改善提案文を表示",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/correct", description: "業界・職種・設問・ES本文を受け取り、Gemini APIでフィードバックJSONを返す" },
        ],
        envVars: [
          { name: "GEMINI_API_KEY", required: true, description: "Google AI Studio で発行したGemini APIキー" },
        ],
      },
    },
  },
  {
    slug: "kaitori-ai",
    category: "demo",
    title: "AI連携リユース買取システム",
    badge: "デモ公開中",
    badgeColor: "#0891b2",
    borderColor: "#0891b2",
    githubRepo: "keita2399/Figmakaitoriai",
    description:
      "リユースショップ向けのAI買取査定Webアプリ。商品情報を入力するだけでAIが相場を検索・分析し、買取価格を自動算出。LangChain + LangGraph による多段階AI処理と Prisma + Neon DB によるデータ管理を組み合わせたフルスタック実装。",
    stats: ["AI相場検索・買取価格自動算出", "LangGraph 多段階処理", "Prisma + Neon DB"],
    tags: ["Next.js", "TypeScript", "LangChain", "LangGraph", "Gemini API", "Prisma", "Neon DB", "Tailwind CSS", "shadcn/ui"],
    updatedAt: "2026-04",
    detail: {
      overview:
        "リユースショップの買取業務を効率化するAI査定システム。商品名・状態・ブランド等を入力するとLangGraphの多段階パイプラインが相場検索・価格分析・買取価格算出を自動実行。Figmaデザインから実装まで一貫して構築し、Prisma + Neon DB でユーザー認証とデータ永続化を実現。",
      challenges: [
        "LangGraph StateGraph による多段階AI処理フローの設計と状態管理",
        "Gemini API の複数キーフォールバックによる安定稼働",
        "Prisma + Neon DB (PostgreSQL) のスキーマ設計とマイグレーション管理",
      ],
      approach: [
        "LangGraph の Annotation.Root で状態を型安全に管理し、ノード間でデータを引き継ぐ設計",
        "複数の Gemini API キーをラウンドロビンで切り替え、レート制限に対応",
        "Next.js App Router のサーバーコンポーネントと Route Handlers でフロントとAPIを統合",
      ],
      results: [
        "商品情報入力から買取価格提示まで自動化",
        "LangChain / LangGraph を活用した実践的なAIパイプライン実装",
        "Figmaデザインからフルスタック実装まで一貫開発",
      ],
      techDetail:
        "Next.js + TypeScript + Tailwind CSS + shadcn/ui。LangChain + LangGraph（StateGraph）でAI処理パイプラインを構築。Prisma ORM + Neon DB（PostgreSQL）でデータ管理。Gemini API をメインLLMとして使用。",
    },
  },
  {
    slug: "project-manager",
    category: "personal",
    title: "Laravelプロジェクト管理アプリ",
    badge: "本番稼働中",
    badgeColor: "#dc2626",
    borderColor: "#dc2626",
    description:
      "フリーランス向けのクライアント・案件・請求書・アクティビティを一元管理するWebアプリ。PHP 8.3 + Laravel + Blade のサーバーサイドレンダリング構成で構築し、DomPDF による請求書PDF出力、Dockerマルチステージビルドでデプロイ。",
    stats: ["クライアント・案件・請求書・活動履歴のCRUD", "DomPDF で請求書PDF出力", "Dockerマルチステージビルド"],
    tags: ["PHP 8.3", "Laravel", "Blade", "PostgreSQL", "DomPDF", "Docker", "Tailwind CSS"],
    updatedAt: "2026-04",
    detail: {
      overview:
        "クライアント管理・案件管理・請求書管理・プロジェクト活動履歴の4軸でフリーランス業務をカバーするWebアプリ。Laravel のリソースコントローラで RESTful な設計を実現し、barryvdh/laravel-dompdf で請求書PDFを出力。Docker マルチステージビルド（Node.js → PHP/Apache）で本番環境に対応。",
      challenges: [
        "Laravel Policyクラスによるユーザーごとのデータ完全分離",
        "DomPDFでの日本語フォント対応と請求書レイアウト調整",
        "Dockerマルチステージビルド（フロントビルド → PHP/Apache）の構成",
      ],
      approach: [
        "Route::resource で CRUD エンドポイントを簡潔に定義",
        "ProjectActivityObserver でステータス変更を自動記録",
        "デモログイン機能で即体験できるUXを実現",
      ],
      results: [
        "クライアント・案件・請求書・活動履歴の一元管理を実現",
        "DomPDF で請求書を即時PDF出力",
        "Docker対応でポータブルな本番環境を構築",
      ],
      techDetail:
        "PHP 8.3 + Laravel + Blade テンプレート。barryvdh/laravel-dompdf で請求書PDF生成。PostgreSQL + Eloquent ORM。Docker マルチステージビルド（Node.js でフロントビルド → PHP 8.3/Apache で本番稼働）。",
    },
  },
  {
    slug: "estimate-ai-api",
    category: "personal",
    title: "AI見積もりAPIサーバー（LangGraph）",
    badge: "本番稼働中",
    badgeColor: "#7c3aed",
    borderColor: "#7c3aed",
    githubRepo: "keita2399/estimate-ai-api",
    description:
      "AI開発アシスタント（estimate-ai）のバックエンドAPIサーバー。Express.js + LangGraph の StateGraph で Gemini/Claude のマルチモデルフォールバックを実装。複数の Gemini API キーをラウンドロビンで切り替え、レート制限時は Claude API に自動フォールバックする堅牢なAI推論基盤。",
    stats: ["Gemini 複数キーのラウンドロビン", "Claude API へ自動フォールバック", "LangGraph StateGraph"],
    tags: ["Node.js", "Express", "LangChain", "LangGraph", "Gemini API", "Claude API", "TypeScript"],
    updatedAt: "2026-04",
    detail: {
      overview:
        "estimate-ai フロントエンドから呼び出されるバックエンドAPIサーバー。LangGraph の StateGraph でAI推論フローを状態機械として管理し、複数の Gemini API キー（最大3つ）をラウンドロビンで消費、すべて失敗した場合は Claude API（Anthropic）へ自動フォールバックする高可用性設計。JSON の不完全なレスポンスも自動修復して安定稼働を実現。",
      challenges: [
        "LangGraph StateGraph による AI フォールバックフローの型安全な設計",
        "不完全な JSON レスポンスの自動修復ロジック（括弧補完・クォート修正）",
        "CORS ホワイトリスト管理と本番・ローカル環境の切り替え",
      ],
      approach: [
        "Annotation.Root で state を定義し、keyIndex / round でリトライ制御",
        "tryParseJSON で正規表現ベースのJSONフォールバックパースを実装",
        "環境変数で複数 Gemini キーを管理し、インデックスをラウンドロビン更新",
      ],
      results: [
        "Gemini API のレート制限を複数キーのフォールバックで回避",
        "Claude API への自動切り替えで単一LLM障害への耐性を確保",
        "不完全JSONの自動修復でAPIの安定稼働を実現",
      ],
      techDetail:
        "Node.js + Express + TypeScript。LangChain（@langchain/google-genai, @langchain/anthropic）+ LangGraph（StateGraph）。Gemini 2.5 Flash / Claude Sonnet をマルチモデルで運用。CORS設定で本番フロントエンドURLをホワイトリスト管理。",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug) || legacyProjects.find((p) => p.slug === slug);
}

export function getFlagshipProjects(): Project[] {
  return projects.filter((p) => p.category === "flagship");
}

export function getDemoProjects(): Project[] {
  return projects.filter((p) => p.category === "demo");
}

export function getPersonalProjects(): Project[] {
  return projects.filter((p) => p.category === "personal");
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}
