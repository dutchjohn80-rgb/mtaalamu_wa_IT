import { Suspense } from "react";
import { notFound } from "next/navigation";
import CaseDetailClient from "@/components/CaseDetailClient";
import { projectsByLocale } from "@/data/site";

export function generateStaticParams() {
  return projectsByLocale.sw.map((p) => ({ slug: p.slug }));
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsByLocale.sw.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <Suspense fallback={<div className="wrap section" /> }>
      <CaseDetailClient slug={slug} />
    </Suspense>
  );
}
