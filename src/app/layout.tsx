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
    "レガシーからクラウドへ。40年の経験を持つITエンジニア松井慶太のポートフォリオ。COBOL/PL/I → TypeScript/Next.js のレガシー現代化を専門とし、AIを活用したDX推進を支援します。",
  keywords: [
    "松井慶太",
    "ITエンジニア",
    "レガシー変換",
    "COBOL",
    "TypeScript",
    "Next.js",
    "DX推進",
    "AIアプリ開発",
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
      "40年の経験を持つITエンジニア。COBOL/PL/I → TypeScript/Next.js のレガシー現代化 & AIアプリ開発。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "松井 慶太 ポートフォリオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "松井 慶太 — ITエンジニア ポートフォリオ",
    description:
      "40年の経験を持つITエンジニア。COBOL/PL/I → TypeScript/Next.js のレガシー現代化 & AIアプリ開発。",
    images: ["/og-image.png"],
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
