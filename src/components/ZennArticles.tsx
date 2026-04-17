import ZennArticleList from "./ZennArticleList";

type ZennArticle = {
  id: number;
  title: string;
  slug: string;
  emoji: string;
  liked_count: number;
  published_at: string;
};

async function fetchZennArticles(): Promise<ZennArticle[]> {
  try {
    const res = await fetch(
      "https://zenn.dev/api/articles?username=keita2399&order=latest&count=3",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.articles?.slice(0, 3) ?? [];
  } catch {
    return [];
  }
}

export default async function ZennArticles() {
  const articles = await fetchZennArticles();
  if (articles.length === 0) return null;

  return (
    <section style={{ padding: "60px 32px 40px", background: "#0f172a", position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 10, color: "rgba(147,197,253,0.8)", letterSpacing: 4, marginBottom: 12 }}>
          // ARTICLES
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 24 }}>最近の記事</h3>
        <ZennArticleList articles={articles} />
        <div style={{ marginTop: 16, textAlign: "right" }}>
          <a
            href="https://zenn.dev/keita2399"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#60a5fa", textDecoration: "none", letterSpacing: 0.5 }}
          >
            すべての記事を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
