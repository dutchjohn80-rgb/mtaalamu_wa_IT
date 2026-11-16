import type { CSSProperties } from "react";

function Line({ text, out = false, offset = 0 }: { text: string; out?: boolean; offset?: number }) {
  return (
    <span className={`line${out ? " out" : ""}`} aria-hidden="true">
      {[...text].map((c, i) => (
        <span key={i} className="ch" style={{ "--d": i + offset } as CSSProperties}>{c}</span>
      ))}
    </span>
  );
}

export default function HeroTitle({ first, last }: { first: string; last: string }) {
  return (
    <h1 className="mega" aria-label={`${first} ${last}`}>
      <Line text={first} />
      <Line text={last} out offset={first.length} />
    </h1>
  );
}
