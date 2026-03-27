"use client";

export default function SectionCTA() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ marginTop: 40, textAlign: "center" }}>
      <a
        href="#contact"
        onClick={scrollTo}
        style={{
          fontSize: 12, color: "var(--accent)", textDecoration: "none",
          letterSpacing: 1, fontWeight: 600,
          padding: "8px 20px", border: "1px solid var(--accent)",
          borderRadius: 2, transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--accent)";
        }}
      >
        相談してみる →
      </a>
    </div>
  );
}
