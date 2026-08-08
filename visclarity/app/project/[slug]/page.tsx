import Image from "next/image";
import { notFound } from "next/navigation";
import { client, PROJECT_QUERY, urlFor } from "@/lib/sanity";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await client.fetch(PROJECT_QUERY, { slug: params.slug });
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await client.fetch(PROJECT_QUERY, { slug: params.slug });
  if (!project) notFound();

  return (
    <main className="px-6 pb-24 pt-36 sm:px-10">
      <div className="mx-auto max-w-5xl">
        {project.client && <p className="eyebrow">{project.client}</p>}
        <h1 className="font-display mt-2 text-4xl font-semibold tracking-tightest text-bone sm:text-5xl">
          {project.title}
        </h1>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-mist/70">
          {project.services?.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-line">
          {project.coverImage && (
            <Image
              src={urlFor(project.coverImage).width(1600).height(900).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        {project.summary && <p className="mt-10 max-w-2xl text-lg text-mist">{project.summary}</p>}

        {project.gallery?.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((img: any, i: number) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden bg-line">
                <Image
                  src={urlFor(img).width(900).height(675).url()}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
