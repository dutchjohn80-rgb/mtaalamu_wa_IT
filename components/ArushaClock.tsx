"use client";

import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 15000);
  return () => clearInterval(id);
};
const now = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Dar_es_Salaam" }).format(new Date());

export default function ArushaClock() {
  const time = useSyncExternalStore(subscribe, now, () => "");
  return (
    <span className="clock">
      <i aria-hidden="true" />
      Arusha {time}
    </span>
  );
}
