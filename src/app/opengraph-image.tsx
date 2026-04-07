import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "松井 慶太 — ITエンジニア ポートフォリオ";
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#888888",
              fontSize: "22px",
              letterSpacing: "2px",
            }}
          >
            ITエンジニア
          </div>
          <div
            style={{
              color: "#f5f0e8",
              fontSize: "80px",
              fontWeight: "700",
              lineHeight: "1.1",
              letterSpacing: "-1px",
            }}
          >
            松井 慶太
          </div>
          <div
            style={{
              color: "#aaaaaa",
              fontSize: "26px",
              marginTop: "8px",
              lineHeight: "1.5",
            }}
          >
            TypeScript・Next.js・AIでモダンWebを開発。
          </div>
        </div>

        {/* 下部：タグ */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["TypeScript / Next.js", "React", "AI開発", "DX推進"].map((tag) => (
            <div
              key={tag}
              style={{
                border: "1px solid #333333",
                borderRadius: "4px",
                padding: "8px 18px",
                color: "#888888",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
