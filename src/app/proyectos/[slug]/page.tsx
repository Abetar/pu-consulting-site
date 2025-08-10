import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const unique = Array.from(new Set(projects.map((p) => p.slug)));
  return unique.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Proyecto no encontrado | PU Consulting" };

  const title = `${p.title} | Proyectos | PU Consulting`;
  const description =
    p.summary ??
    `${p.title}${p.location ? ` — ${p.location}` : ""}${
      p.year ? ` (${p.year})` : ""
    }`;

  const ogImage = p.cover?.startsWith("/") ? `${p.cover}` : p.cover;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default function ProyectoDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <main className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-500 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/proyectos" className="hover:underline">
                Proyectos
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-neutral-800">{project.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            {project.client ? `${project.client} · ` : ""}
            {project.location ? `${project.location} · ` : ""}
            {project.year ?? ""}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.category && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                {project.category}
              </span>
            )}
            {project.areaM2 ? (
              <span className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                {project.areaM2.toLocaleString()} m²
              </span>
            ) : null}
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.summary ? (
            <p className="mt-4 text-sm text-neutral-700 max-w-3xl">
              {project.summary}
            </p>
          ) : null}
        </header>

        {/* Galería completa */}
        <section aria-label="Galería de imágenes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.gallery.map((src, idx) => (
              <figure
                key={`${src}-${idx}`}
                className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-black"
              >
                <div className="relative w-full h-[42vh] sm:h-[45vh] lg:h-[50vh]">
                  <Image
                    src={src}
                    alt={`${project.title} — imagen ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    priority={idx < 2}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            ← Volver a Proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
