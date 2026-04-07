import { notFound } from "next/navigation";
import { projects, legacyProjects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...projects, ...legacyProjects].map((p) => ({ slug: p.slug }));
}

const BASE_URL = "https://portfolio-two-orpin-45.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `${BASE_URL}/works/${slug}`;
  const ogImage = project.thumbnail
    ? `${BASE_URL}${project.thumbnail}`
    : `${BASE_URL}/og-image.png`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — 松井 慶太`,
      description: project.description,
      url,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — 松井 慶太`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
