import type { CSSProperties } from "react";

type Props = { kind: string; label: string; color?: string };

const rows = [0, 1, 2, 3, 4];
const bars = [60, 90, 70, 120, 100, 140, 110];
const pts = bars.map((h, i) => `${52 + i * 36},${196 - h * 0.8}`).join(" ");

export default function ProjectArt({ kind, label, color = "#ff4f1f" }: Props) {
  return (
    <figure className="frame" style={{ "--c": color } as CSSProperties}>
      <div className="top"><span className="tab">{label}</span></div>
      <svg viewBox="0 0 400 240" role="img" aria-label={`Mchoro wa skrini ya ${label}`}>
        {kind === "map" && (
          <g>
            <path className="gl" d="M0 60H400M0 120H400M0 180H400M80 0V240M160 0V240M240 0V240M320 0V240" />
            <path className="route" d="M40 190 C120 190 120 110 200 110 S300 60 360 50" />
            <circle cx="40" cy="190" r="7" className="start" />
            <circle cx="360" cy="50" r="9" className="pin" />
            <rect x="120" y="146" width="148" height="30" rx="15" className="chipx" />
            <text x="194" y="166" textAnchor="middle" className="label">Anafika baada ya dk 4</text>
          </g>
        )}
        {kind === "table" && (
          <g>
            <rect x="24" y="20" width="352" height="34" rx="10" className="head" />
            {rows.map((i) => (
              <g key={i}>
                <rect x="24" y={68 + i * 30} width="352" height="24" rx="8" className="rw" />
                <rect x="38" y={76 + i * 30} width="92" height="8" rx="4" className="bar" />
                <rect x="176" y={76 + i * 30} width="44" height="8" rx="4" className="bar" />
                <rect x="302" y={72 + i * 30} width="58" height="16" rx="8" className={i % 3 === 1 ? "tg warn" : "tg"} />
              </g>
            ))}
          </g>
        )}
        {kind === "lang" && (
          <g>
            <rect x="24" y="20" width="352" height="200" rx="12" className="pg" />
            <rect x="40" y="36" width="64" height="10" rx="5" className="bar" />
            <rect x="296" y="30" width="68" height="24" rx="12" className="toggle" />
            <text x="314" y="46" className="label on-accent">EN</text>
            <text x="342" y="46" className="label">SW</text>
            <rect x="40" y="76" width="190" height="16" rx="8" className="bar dk" />
            <rect x="40" y="100" width="140" height="16" rx="8" className="bar dk" />
            <rect x="40" y="130" width="96" height="28" rx="14" className="btnx" />
            <rect x="256" y="72" width="104" height="86" rx="14" className="im" />
            <rect x="40" y="176" width="96" height="30" rx="8" className="rw" />
            <rect x="152" y="176" width="96" height="30" rx="8" className="rw" />
            <rect x="264" y="176" width="96" height="30" rx="8" className="rw" />
          </g>
        )}
        {kind === "dash" && (
          <g>
            {[24, 146, 268].map((x) => (
              <g key={x}>
                <rect x={x} y="20" width="108" height="52" rx="10" className="rw" />
                <rect x={x + 14} y="34" width="46" height="8" rx="4" className="bar" />
                <rect x={x + 14} y="50" width="72" height="12" rx="6" className="bar dk" />
              </g>
            ))}
            <path className="gl" d="M24 196H376M24 156H376M24 116H376" />
            {bars.map((h, i) => (
              <rect key={i} x={38 + i * 36} y={196 - h * 0.8} width="22" height={h * 0.8} rx="5" className="cl" />
            ))}
            <polyline points={pts} className="trend" />
          </g>
        )}
      </svg>
    </figure>
  );
}
