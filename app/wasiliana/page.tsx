import { Suspense } from "react";
import ContactClient from "@/components/ContactClient";

export default function Contact() {
  return (
    <Suspense fallback={<div className="wrap section" /> }>
      <ContactClient />
    </Suspense>
  );
}
