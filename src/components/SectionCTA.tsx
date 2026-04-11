"use client";

export default function SectionCTA() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ marginTop: 56, textAlign: "center" }}>
      <p style={{ fontSize: 13, color: "rgba(219,234,254,0.6)", marginBottom: 16, letterSpacing: 0.5 }}>
        まずは30分、お気軽にご相談ください
      </p>
      <a
        href="#contact"
        onClick={scrollTo}
        style={{
          fontSize: 14, color: "#fff", textDecoration: "none",
          letterSpacing: 2, fontWeight: 700,
          padding: "16px 48px", background: "#2563eb",
          borderRadius: 2, transition: "all 0.2s", display: "inline-block",
          boxShadow: "0 4px 24px rgba(37,99,235,0.4)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1d4ed8";
          e.currentTarget.style.boxShadow = "0 6px 32px rgba(37,99,235,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#2563eb";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,99,235,0.4)";
        }}
      >
        相談する →
      </a>
    </div>
  );
}
