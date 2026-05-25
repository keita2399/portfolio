import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";

const BASE_URL = "https://portfolio-two-orpin-45.vercel.app";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "松井慶太 | AIエージェント開発・技術顧問 / フリーランスエンジニア",
    template: "%s — 松井 慶太",
  },
  description:
    "Claude Code・Gemini を主軸にしたAI協働開発で、SaaS立ち上げからレガシー刷新まで一人で完結。技術顧問・業務委託受付中。山梨拠点フルリモート。",
  keywords: [
    "AIエージェント開発",
    "Claude Code",
    "フリーランスエンジニア",
    "技術顧問",
    "Next.js",
    "TypeScript",
    "レガシー刷新",
    "RAG",
    "Gemini",
    "Vertex AI",
    "MCP",
    "松井慶太",
  ],
  authors: [{ name: "松井 慶太" }],
  creator: "松井 慶太",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "松井 慶太 ポートフォリオ",
    title: "松井慶太 | AIエージェント開発・技術顧問",
    description:
      "設計は人間、実装はAIエージェント。企画から本番運用まで一人で完結。",
  },
  twitter: {
    card: "summary_large_image",
    title: "松井慶太 | AIエージェント開発・技術顧問",
    description:
      "設計は人間、実装はAIエージェント。企画から本番運用まで一人で完結。",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${ibmPlexMono.variable} ${notoSerifJP.variable}`}>
      <body>
        <GoogleAnalytics />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
