import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client, PROJECTS_QUERY, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Project",
  description: "Selected branding, website, and campaign work by Visclarity Studio.",
};

export const revalidate = 60;

export default async function ProjectPage() {
  let projects: any[] = [];
  try {
    projects = await client.fetch(PROJECTS_QUERY);
  } catch {
    projects = [];
  }

  return (
    <main className="px-6 pb-24 pt-36 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-4">Selected Project</p>
        <h1 className="font-display text-4xl font-semibold tracking-tightest text-bone sm:text-5xl">
          Work we're proud to show
        </h1>

        {projects.length === 0 ? (
          <p className="mt-16 text-mist">
            No projects published yet. Add one from the CMS at{" "}
            <Link href="/studio" className="text-brass underline">
              /studio
            </Link>
            .
          </p>
        ) : (
          <div className="mt-16 grid gap-16">
            {projects.map((p) => (
              <Link key={p._id} href={`/project/${p.slug?.current}`} className="group focus-ring block">
                <div className="grid gap-8 sm:grid-cols-[1.3fr_0.7fr] sm:items-center">
                  <div className="relative aspect-[16/10] overflow-hidden bg-line">
                    {p.coverImage && (
                      <Image
                        src={urlFor(p.coverImage).width(1200).height(750).url()}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div>
                    {p.client && <p className="eyebrow">{p.client}</p>}
                    <h2 className="font-display mt-2 text-2xl font-semibold text-bone">
                      {p.title}
                    </h2>
                    {p.summary && <p className="mt-3 text-sm text-mist">{p.summary}</p>}
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-mist/70">
                      {p.services?.map((s: string) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
