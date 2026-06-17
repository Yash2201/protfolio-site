import { useState } from "react";

// Renders a card icon: an <img> when the value is a logo path (served from
// /public/logos), otherwise the raw emoji/text. If a logo file is missing or
// fails to load, falls back to clean initials so the card never shows a
// broken-image placeholder.
export function Icon({ icon, alt }: { icon: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const isPath = icon.startsWith("/");

  if (isPath && !failed) {
    return (
      <img
        className="ico-img"
        src={icon}
        alt={`${alt} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  if (isPath) {
    const initials = alt
      .replace(/[^A-Za-z0-9 ]/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    return <span className="ico-fallback">{initials}</span>;
  }

  return <>{icon}</>;
}
