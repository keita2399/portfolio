"use client";

export default function SectionCTA() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ marginTop: 48, textAlign: "center" }}>
      <a
        href="#contact"
        onClick={scrollTo}
        style={{
          fontSize: 12, color: "#93c5fd", textDecoration: "none",
          letterSpacing: 2, fontWeight: 600,
          padding: "10px 28px", border: "1px solid rgba(147,197,253,0.4)",
          borderRadius: 2, transition: "all 0.2s", display: "inline-block",
          backdropFilter: "blur(4px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(147,197,253,0.15)";
          e.currentTarget.style.borderColor = "#93c5fd";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(147,197,253,0.4)";
        }}
      >
        相談してみる →
      </a>
    </div>
  );
}
