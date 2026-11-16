"use client";

import { useEffect, useState } from "react";

export default function RotatingWords({ words }: { words: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span>
      <span className="sr-only">{words.join(", ")}</span>
      <span key={i} className="rot-w" aria-hidden="true">{words[i]}</span>
    </span>
  );
}
