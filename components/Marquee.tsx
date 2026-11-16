type Props = { items: string[]; variant?: "solid" | "stroke"; reverse?: boolean };

export default function Marquee({ items, variant = "solid", reverse = false }: Props) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`marq ${variant}${reverse ? " rev" : ""}`} aria-hidden="true">
      <ul>{row.map((m, i) => <li key={i}>{m}</li>)}</ul>
    </div>
  );
}
