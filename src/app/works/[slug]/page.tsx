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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — 松井 慶太`,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
