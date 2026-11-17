import { Suspense } from "react";
import AboutClient from "@/components/AboutClient";

export default function About() {
  return (
    <Suspense fallback={<div className="wrap section" /> }>
      <AboutClient />
    </Suspense>
  );
}
