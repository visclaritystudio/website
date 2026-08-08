import type { MetadataRoute } from "next";
import { client, PROJECTS_QUERY } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://visclaritystudio.com";
  let projects: any[] = [];
  try {
    projects = await client.fetch(PROJECTS_QUERY);
  } catch {
    projects = [];
  }

  const staticRoutes = ["", "/about", "/project", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/project/${p.slug?.current}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
