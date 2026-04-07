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
    default: "松井 慶太 — ITエンジニア ポートフォリオ",
    template: "%s — 松井 慶太",
  },
  description:
    "TypeScript・Next.js・AIを軸にモダンWebアプリを開発するITエンジニア松井慶太のポートフォリオ。40年の経験をベースに、AIを活用したDXアプリや業務システムを設計・開発します。",
  keywords: [
    "松井慶太",
    "ITエンジニア",
    "モダンWeb開発",
    "TypeScript",
    "Next.js",
    "React",
    "AIアプリ開発",
    "DX推進",
    "ポートフォリオ",
    "フリーランスエンジニア",
  ],
  authors: [{ name: "松井 慶太" }],
  creator: "松井 慶太",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "松井 慶太 ポートフォリオ",
    title: "松井 慶太 — ITエンジニア ポートフォリオ",
    description:
      "TypeScript・Next.js・AIを軸にモダンWebアプリを開発するITエンジニア。40年の経験をベースにDXアプリ・業務システムを設計・開発。",
  },
  twitter: {
    card: "summary_large_image",
    title: "松井 慶太 — ITエンジニア ポートフォリオ",
    description:
      "TypeScript・Next.js・AIを軸にモダンWebアプリを開発するITエンジニア。40年の経験をベースにDXアプリ・業務システムを設計・開発。",
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
