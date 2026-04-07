const BASE_URL = "https://portfolio-two-orpin-45.vercel.app";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "松井 慶太",
    alternateName: "Keita Matsui",
    jobTitle: "ITエンジニア",
    description:
      "COBOL・PL/I などのレガシーシステムを TypeScript・Next.js・クラウドへ移行するレガシー現代化を専門とする40年の経験を持つITエンジニア。AI活用によるDX推進を支援する。",
    url: BASE_URL,
    sameAs: ["https://zenn.dev/keita2399"],
    knowsAbout: [
      "COBOL",
      "PL/I",
      "TypeScript",
      "Next.js",
      "React",
      "Python",
      "AI開発",
      "DX推進",
      "レガシーシステム現代化",
      "クラウド移行",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "ITエンジニア",
      occupationLocation: { "@type": "Country", name: "日本" },
      skills: "COBOL, PL/I, TypeScript, Next.js, React, AI開発",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "松井 慶太 ポートフォリオ",
    url: BASE_URL,
    description: "40年の経験を持つITエンジニア松井慶太のポートフォリオ",
    author: { "@type": "Person", name: "松井 慶太" },
    inLanguage: "ja",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "松井慶太はどんな仕事を専門としていますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "COBOL・PL/Iなどのレガシーシステムを TypeScript・Next.js・クラウドへ移行するレガシー現代化を専門としています。また、AIを活用したDXアプリの開発も得意としており、Claude API・Gemini API を使った実用アプリを複数リリースしています。",
        },
      },
      {
        "@type": "Question",
        name: "どのようなプログラミング言語・技術を扱えますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "COBOL、PL/I、TypeScript、JavaScript、Next.js、React、Python、Rust、Go などを扱います。40年にわたる開発経験があり、レガシー言語から最新のクラウドネイティブ技術まで対応可能です。",
        },
      },
      {
        "@type": "Question",
        name: "レガシーシステムの現代化にはどのくらいの期間がかかりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "プロジェクトの規模・複雑さによって異なりますが、小規模なCOBOLプログラムの変換であれば数週間から数ヶ月、大規模なシステム全体の移行には数ヶ月から1年以上かかる場合があります。まずはお気軽にご相談ください。",
        },
      },
      {
        "@type": "Question",
        name: "AIを活用したアプリ開発も依頼できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい。Claude API・Gemini API を活用した業務効率化ツール、チャットボット、書類チェックツールなどの開発実績があります。AIと組み合わせた Next.js フルスタックアプリの開発が得意です。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
