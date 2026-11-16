"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = -100, y = -100, tx = -100, ty = -100, raf = 0;
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; el.classList.add("on"); };
    const over = (e: MouseEvent) => {
      const t = (e.target as Element).closest<HTMLElement>("a, button, [data-cursor]");
      el.classList.toggle("is-link", !!t);
      if (label.current) label.current.textContent = t?.dataset.cursor ?? "";
    };
    const leave = () => el.classList.remove("on");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span ref={label} />
    </div>
  );
}
