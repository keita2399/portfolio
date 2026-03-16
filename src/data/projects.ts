export type Project = {
  slug: string;
  title: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  stats: string[];
  tags: string[];
  externalUrl?: string;
  thumbnail?: string;
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
      designDoc: {
        architecture:
          "クライアント（ブラウザ）\n  LoginScreen → プレイヤー名入力\n       │ WebSocket接続\n       ▼\n  /ws/{player_name}\n       │\n       ▼\n  FastAPIサーバー（Python）\n  ├─ WebSocketエンドポイント\n  ├─ Avatar読込/作成（DB）\n  └─ リージョン参加\n       │\n       ▼\n  RegionProcessor（リージョン状態管理）\n  ├─ OBJECT_REGISTRY[class_id]\n  │   └─ 25ハンドラー → 108+クラス\n  ├─ broadcast()（全員へ）\n  ├─ send_to()（個別送信）\n  └─ SQLite（永続化）\n       │\n       ▼ WebSocket JSON\n  クライアント（React）\n  ├─ GameCanvas（640x400 レトロ描画）\n  ├─ ActionPanel / ChatLog\n  ├─ Inventory / StatusBar\n  └─ MiniMap（リージョン移動）\n─────────────────────────────\nPL/I → Python 変換マッピング:\n  Class_Table vtable → OBJECT_REGISTRY dict\n  s$task_wait_event  → asyncio event loop\n  n_msg/b_msg/p_msg  → broadcast()/send_to()\n  Stratus keyed files → SQLite\n  C64 6502 ASM client → React + Canvas 2D",
        dataFlow: [
          "プレイヤー名を入力 → WebSocket接続（/ws/{player_name}）",
          "サーバーがAvatar読込/作成 → リージョンに参加 → INITメッセージ送信（全状態同期）",
          "クライアント操作（クリック/ボタン）→ {action, noid, args} をJSON送信",
          "RegionProcessorがOBJECT_REGISTRY[class_id]でハンドラーをディスパッチ",
          "ハンドラーが処理（状態更新、DB永続化）→ broadcast/send_toで結果送信",
          "リージョン移動時: AVATAR_LEAVE→DB更新→新リージョン参加→REGION_CHANGE送信",
          "切断時: AVATAR_LEAVE送信、アバター状態をDB保存、クリーンアップ",
        ],
        apiSpecs: [
          { method: "GET", path: "/api/regions", description: "全リージョン一覧をJSON配列で返却" },
          { method: "GET", path: "/api/regions/{id}", description: "リージョン詳細（オブジェクト・アバター含む）" },
          { method: "WS", path: "/ws/{player_name}", description: "双方向JSON通信（15種類のメッセージタイプ）" },
        ],
        dataModels:
          "# SQLite 3テーブル構成\n\nregions:\n  region_id(PK), name, terrain_type\n  neighbor_west/east/north/south\n\nobjects:\n  noid(PK AUTO), class_id(161種),\n  region_id(FK), x, y,\n  container_noid, extra(JSON)\n\navatars:\n  noid(PK), name(UNIQUE),\n  health, bank_account, tokens_in_hand,\n  curse_type(0=なし,2=SMILEY,4=FLY),\n  deaths, kills, travel\n\n# オブジェクトクラス: 108+種類\n# ハンドラー: 25モジュール\n# アクション: 13種類(GO,DO,GRAB,WALK...)",
      },
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
    slug: "btob-matching",
    title: "業務系マッチングWebアプリ",
    badge: "開発中",
    badgeColor: "#d4850a",
    borderColor: "#d4850a",
    description:
      "建設業界向けのBtoBマッチングプラットフォーム。認証・検索・決済・メール通知を備えたフルスタック構成。Dockerによる本番環境構築まで対応。詳細はNDAにより非公開。",
    stats: ["フルスタック開発", "9割完了"],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    detail: {
      overview:
        "建設業界向けのBtoBマッチングプラットフォーム。企業間のマッチング、認証、検索、決済、メール通知など、実務で必要な機能をフルスタックで開発中。詳細はNDAにより非公開。",
      challenges: [
        "複雑な検索条件（地域・業種・資格等）の組み合わせ最適化",
        "認証・認可の多層設計（企業管理者/一般ユーザー/管理者）",
        "決済システムとの連携",
        "本番環境のDocker構成設計",
      ],
      approach: [
        "Next.js App Routerによるフルスタック構成",
        "Prisma ORMによる型安全なデータベースアクセス",
        "Server Actionsを活用したフォーム処理",
        "Docker Composeによる開発・本番環境の統一",
      ],
      results: [
        "全体の約9割を実装完了",
        "認証・検索・決済・メール通知の主要機能を実装",
        "Docker環境での本番デプロイ準備完了",
        "※NDAにより詳細な数値・画面は非公開",
      ],
      techDetail:
        "Next.js 14 + TypeScript + Tailwind CSS + Prisma + PostgreSQL + Docker。認証はNextAuth.js。メール通知はNodemailer。",
    },
  },
  {
    slug: "ai-document-checker",
    title: "AI 書類解析アプリ",
    badge: "デモ公開中",
    badgeColor: "#6366f1",
    borderColor: "#6366f1",
    externalUrl: "https://ai-document-checker-keita2399s-projects.vercel.app",
    thumbnail: "/thumbnails/ai-document-checker.svg",
    description:
      "Gemini Vision APIを使った書類自動解析アプリ。画像をアップロードするだけで、AIが書類の種類・記載内容・有効期限・注意点を自動判定。建設業許可証など業務書類の確認を効率化。",
    stats: ["Gemini Vision API", "画像→構造化データ"],
    tags: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
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
    slug: "travel-time-app",
    title: "移動時間計算アプリ",
    badge: "デモ公開中",
    badgeColor: "#0ea5e9",
    borderColor: "#0ea5e9",
    externalUrl: "https://travel-time-app-keita2399s-projects.vercel.app",
    thumbnail: "/thumbnails/travel-time-app.svg",
    description:
      "Google Maps APIを活用した移動時間・距離計算アプリ。住所入力のオートコンプリート、地図クリックでの地点選択、車・電車・徒歩・自転車の4つの移動手段に対応。ルートも地図上に表示。",
    stats: ["Google Maps API", "4移動手段対応"],
    tags: ["Next.js", "TypeScript", "Google Maps API", "Tailwind CSS"],
    detail: {
      overview:
        "出発地と目的地を入力すると、Google Maps Directions APIでルート検索を行い、移動時間・距離・ルートを地図上に表示するWebアプリケーション。",
      challenges: [
        "Google Maps JavaScript APIの新しいfunctional API（setOptions/importLibrary）への対応",
        "地図クリックイベントのstale closure問題（useRef パターンで解決）",
        "移動手段によってルートが存在しない場合のエラーハンドリング",
      ],
      approach: [
        "Google Places Autocompleteで住所入力を補完",
        "地図クリック→Geocoderで逆ジオコーディング（座標→住所）",
        "DirectionsServiceで4つの移動手段（車/電車/徒歩/自転車）のルート計算",
        "DirectionsRendererでルートを地図上に描画",
      ],
      results: [
        "住所入力・地図クリックの2つの方法で地点選択可能",
        "4つの移動手段でリアルタイムにルート計算",
        "ルートが見つからない場合のエラー表示",
        "ポートフォリオ利用通知（LINE連携）",
      ],
      techDetail:
        "Next.js 14 + TypeScript + Tailwind CSS + @googlemaps/js-api-loader。Maps JavaScript API, Directions API, Places API, Geocoding APIを使用。",
      designDoc: {
        architecture:
          "クライアント（ブラウザ）\n  AddressInput(出発地) ←→ Places Autocomplete\n  AddressInput(目的地) ←→ Places Autocomplete\n  TravelModeSelector（車/電車/徒歩/自転車）\n       │\n       ▼\n  MapDisplay\n  ├─ DirectionsService.route()（ルート計算）\n  ├─ DirectionsRenderer（ルート描画）\n  ├─ Marker（出発地:青A、目的地:赤B）\n  └─ 地図クリック → Geocoder（逆ジオコーディング）\n       │\n       ▼\n  ResultCard（距離・時間表示）\n       │ POST /api/notify（非同期）\n       ▼\n  LINE Messaging API（利用通知）",
        dataFlow: [
          "Google Maps JavaScript APIを初期化（日本語/日本リージョン、デフォルト中心: 東京駅）",
          "ユーザーが出発地を入力 → Placesオートコンプリートで候補表示（日本限定）",
          "ユーザーが目的地を入力（入力 or 地図クリック→逆ジオコーディング）",
          "移動手段を選択（車🚗/電車🚃/徒歩🚶/自転車🚲）",
          "DirectionsService.route() でルート計算 → 地図上に緑色ポリラインで描画",
          "ResultCardに距離・所要時間を表示、非同期でLINE通知を送信",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/notify", description: "出発地・目的地・移動手段をLINE Messaging APIで通知" },
        ],
        dataModels:
          "type TravelMode = 'driving' | 'transit'\n                 | 'walking' | 'bicycling';\n\ninterface TravelResult {\n  origin: string;\n  destination: string;\n  distance: string;   // 例: \"15.2 km\"\n  duration: string;   // 例: \"25分\"\n  mode: TravelMode;\n}\n\ninterface LocationInput {\n  address: string;\n  lat: number;\n  lng: number;\n}",
        envVars: [
          { name: "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", required: true, description: "Google Maps APIキー（クライアント公開）" },
          { name: "LINE_NOTIFY_TOKEN", required: false, description: "LINE通知用アクセストークン" },
          { name: "LINE_NOTIFY_USER_ID", required: false, description: "LINE通知先ユーザーID" },
        ],
      },
    },
  },
  {
    slug: "line-notify-app",
    title: "LINE 通知デモアプリ",
    badge: "デモ公開中",
    badgeColor: "#06c755",
    borderColor: "#06c755",
    externalUrl: "https://line-notify-app-keita2399s-projects.vercel.app",
    thumbnail: "/thumbnails/line-notify-app.svg",
    description:
      "LINE Messaging APIを使ったプッシュ通知デモアプリ。テキスト・画像・スタンプの3種類のメッセージをBotからLINEユーザーに送信可能。Webhookによるメッセージ受信にも対応。",
    stats: ["LINE Messaging API", "3種メッセージ対応"],
    tags: ["Next.js", "TypeScript", "LINE Messaging API", "Tailwind CSS"],
    detail: {
      overview:
        "LINE Messaging APIを活用し、Webアプリからワンクリックでテキスト・画像・スタンプをLINEに送信できるデモアプリケーション。送信履歴の管理やWebhookでのメッセージ受信にも対応。",
      challenges: [
        "LINE Developers ConsoleとOfficial Account Managerの設定手順の整理",
        "Webhook署名検証（HMAC-SHA256）の実装",
        "Channel Access TokenとUser IDの安全な管理",
      ],
      approach: [
        "@line/bot-sdk でMessaging APIクライアントを構築",
        "pushMessage APIでテキスト・画像・スタンプの3種類に対応",
        "Webhookエンドポイントで受信メッセージの署名検証",
        "送信履歴をクライアント側で管理・表示",
      ],
      results: [
        "テキスト・画像URL・LINE公式スタンプの送信に対応",
        "送信成功/失敗のステータス表示",
        "Webhook署名検証によるセキュアなメッセージ受信",
        "ポートフォリオ利用通知（LINE連携）",
      ],
      techDetail:
        "Next.js 14 + TypeScript + Tailwind CSS + @line/bot-sdk。LINE Messaging API（pushMessage / Webhook）。",
      designDoc: {
        architecture:
          "クライアント（ブラウザ）\n  MessageForm\n  ├─ メッセージ種別選択（テキスト/画像/スタンプ）\n  ├─ 内容入力\n  └─ 送信ボタン\n       │ POST /api/send\n       ▼\n  MessageHistory ←── 送信結果を追記\n─────────────────────────────\nサーバー（Next.js API Routes）\n  /api/send\n  ├─ バリデーション\n  ├─ LINE SDK → pushMessage\n  └─ 利用通知（非同期）\n\n  /api/webhook\n  ├─ HMAC-SHA256署名検証\n  └─ イベントログ出力\n─────────────────────────────\n       ▼\n  LINE Messaging API → ユーザーのLINE",
        dataFlow: [
          "ユーザーがメッセージ種別を選択（テキスト/画像URL/スタンプ）",
          "対応する入力欄に内容を入力し、送信ボタンを押下",
          "POST /api/send にリクエスト → サーバーで入力バリデーション",
          "LINE SDK の MessagingApiClient でプッシュメッセージ送信",
          "利用通知を非同期送信（Fire & Forget）",
          "成功/失敗レスポンスをクライアントに返却、MessageHistoryに追加表示",
        ],
        apiSpecs: [
          { method: "POST", path: "/api/send", description: "テキスト/画像/スタンプをLINE Messaging APIで送信" },
          { method: "POST", path: "/api/webhook", description: "LINE Webhookイベント受信（HMAC-SHA256署名検証）" },
        ],
        dataModels:
          "interface SendMessageRequest {\n  type: 'text' | 'image' | 'sticker';\n  text?: string;\n  imageUrl?: string;\n  packageId?: string;\n  stickerId?: string;\n}\n\ninterface MessageLog {\n  id: string;\n  type: 'text' | 'image' | 'sticker';\n  content: string;\n  status: 'sent' | 'failed';\n  timestamp: Date;\n}",
        envVars: [
          { name: "LINE_CHANNEL_ACCESS_TOKEN", required: true, description: "LINE Bot認証トークン" },
          { name: "LINE_CHANNEL_SECRET", required: true, description: "Webhook署名検証用シークレット" },
          { name: "LINE_DEFAULT_USER_ID", required: true, description: "メッセージ送信先ユーザーID" },
        ],
      },
    },
  },
  {
    slug: "line-claude-sync",
    title: "LINE Claude Sync",
    badge: "デモ公開中",
    badgeColor: "#06c755",
    borderColor: "#06c755",
    externalUrl: "/demo/chat",
    thumbnail: "/thumbnails/line-claude-sync.svg",
    description:
      "スマホのLINEからAIに相談 → 会話が自動でPCのClaude Code CLIに共有される仕組み。Gemini/Claude切替対応。GitHub Gistをストレージにしたサーバーレス構成で、手動操作ゼロの完全自動同期を実現。",
    stats: ["LINE → Gist → CLI 自動同期", "Gemini/Claude 切替"],
    tags: ["Next.js", "TypeScript", "LINE Messaging API", "Gemini API", "Claude API", "GitHub Gist"],
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
    slug: "hengband-web",
    title: "C+Lua → Python+React 変換（Hengband Web）",
    badge: "98.7%削減",
    badgeColor: "#c8860a",
    borderColor: "#c8860a",
    description:
      "日本製ローグライクRPG「Hengband」のC+Lua 33万行をPython+React 4,245行に変換。ブラウザ上でプレイ可能なWebアプリとして再実装。Lua 5.0バインディング3万行を含むレガシーコードの完全現代化。",
    stats: ["330,000行 → 4,245行", "ブラウザで動作"],
    tags: ["C言語", "Lua", "FastAPI", "React", "Claude Code"],
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
    slug: "legacy-code-archive",
    title: "Legacy Code Museum & コード鑑定書",
    badge: "383K件収集",
    badgeColor: "#d4a574",
    borderColor: "#d4a574",
    externalUrl: "https://gstate-gk.github.io/legacy-code-museum/",
    thumbnail: "/thumbnails/legacy-code-museum.svg",
    description:
      "12リポジトリ・8言語から383,418件のコメントを収集し、感情分析・タグ検出パイプラインを構築。インタラクティブWebアプリ「Legacy Code Museum」と、コード鑑定書シリーズ（BRL-CAD、QEMU、NASA NASTRAN等）を制作。",
    stats: ["383,418コメント収集", "鑑定書6本制作"],
    tags: ["Python", "Next.js", "TypeScript", "AI活用", "データ分析"],
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
        "鑑定書6本のドラフトを1日で制作（BRL-CAD, DSPython, QEMU, Whitaker's WORDS, NASA NASTRAN, DikuMUD）",
        "Legacy Code Museum をGitHub Pagesにデプロイ",
        "コード考古学の手法とパイプラインを確立",
      ],
      techDetail: "Python（収集パイプライン）+ Next.js + TypeScript + Tailwind CSS（Museum）。GitHub Actions で自動デプロイ。データは JSON 形式で管理。",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}
