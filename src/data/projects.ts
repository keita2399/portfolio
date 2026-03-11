export type Project = {
  slug: string;
  title: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  description: string;
  stats: string[];
  tags: string[];
  // 詳細ページ用
  detail: {
    overview: string;
    challenges: string[];
    approach: string[];
    results: string[];
    techDetail: string;
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet);
}
