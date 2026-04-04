import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

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
  title: "松井 慶太 — ポートフォリオ",
  description:
    "レガシーからクラウドへ。40年の経験を持つITエンジニア松井慶太のポートフォリオ。COBOL/PL/I → TypeScript/Next.js のレガシー現代化を専門とする。",
  keywords: ["ポートフォリオ", "エンジニア", "レガシー変換", "Next.js", "TypeScript", "COBOL"],
  openGraph: {
    title: "松井 慶太 — ポートフォリオ",
    description: "レガシーからクラウドへ。40年の経験を持つITエンジニア。",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
