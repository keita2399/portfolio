import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "松井慶太 | AIエージェント開発・技術顧問";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0d",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 左上アクセントライン */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            backgroundColor: "#c8860a",
          }}
        />

        {/* 上部：ラベル */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#c8860a",
            }}
          />
          <span
            style={{
              color: "#c8860a",
              fontSize: "18px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* 中央：メインコンテンツ */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              color: "#f5f0e8",
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: "1.2",
              letterSpacing: "-1px",
            }}
          >
            設計は人間、実装はAIエージェント。
          </div>
          <div
            style={{
              color: "#c8860a",
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "1.3",
              letterSpacing: "-0.5px",
              marginTop: "8px",
            }}
          >
            一人でチーム規模の開発速度を出します。
          </div>
        </div>

        {/* 下部：署名 + スタック */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #333333",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ color: "#f5f0e8", fontSize: "22px", fontWeight: 600 }}>
              松井慶太 / フリーランスエンジニア
            </div>
            <div style={{ color: "#888888", fontSize: "16px", letterSpacing: "1px" }}>
              AIエージェント開発・技術顧問
            </div>
          </div>
          <div
            style={{
              color: "#888888",
              fontSize: "18px",
              letterSpacing: "2px",
            }}
          >
            Claude · Next.js · Gemini
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
