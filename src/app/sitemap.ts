import { MetadataRoute } from "next";
import { projects, legacyProjects } from "@/data/projects";

const BASE_URL = "https://portfolio-two-orpin-45.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = [...projects, ...legacyProjects].map((project) => ({
    url: `${BASE_URL}/works/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/works/legacy-conversions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...workPages,
  ];
}
