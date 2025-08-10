"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./data";

export default function ProyectosPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [photoIdx, setPhotoIdx] = useState(0);

  const close = () => {
    setOpenIdx(null);
    setPhotoIdx(0);
  };

  const goPrev = useCallback(() => {
    if (openIdx === null) return;
    const imgs = projects[openIdx].featured;
    setPhotoIdx((i) => (i - 1 + imgs.length) % imgs.length);
  }, [openIdx]);

  const goNext = useCallback(() => {
    if (openIdx === null) return;
    const imgs = projects[openIdx].featured;
    setPhotoIdx((i) => (i + 1) % imgs.length);
  }, [openIdx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIdx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, goPrev, goNext]);

  return (
    <main className="py-10 md:py-14">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Encabezado */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Proyectos
          </h1>
          <p className="text-sm text-neutral-500">
            Explora nuestros proyectos recientes. Haz clic para ver una selección de imágenes.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((p, idx) => (
            <article
              key={`${p.slug}-${idx}`} // ← clave única aunque haya slugs repetidos por error
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => {
                  setOpenIdx(idx);
                  setPhotoIdx(0);
                }}
                aria-label={`Abrir galería de ${p.title}`}
                className="block text-left w-full"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={idx < 2}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-base font-semibold text-black line-clamp-2">{p.title}</h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    {p.client ?? "Proyecto"}
                    {p.location ? ` — ${p.location}` : ""}
                    {p.year ? ` — ${p.year}` : ""}
                  </p>
                  {p.areaM2 ? (
                    <p className="text-sm text-neutral-600 mt-1">{p.areaM2.toLocaleString()} m²</p>
                  ) : null}
                  {p.tags?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-sm text-black underline underline-offset-4">Ver imágenes</span>
                    <Link
                      href={`/proyectos/${p.slug}`}
                      className="text-sm text-neutral-700 hover:text-black"
                      aria-label={`Ver caso completo de ${p.title}`}
                    >
                      Ver caso completo →
                    </Link>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox por proyecto */}
      {openIdx !== null && projects[openIdx] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galería del proyecto"
          onClick={close}
        >
          <div
            className="w-[94vw] md:w-[80vw] mx-auto flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen principal: siempre visible con overlay de controles */}
            <div className="relative w-full h-[66vh] md:h-[78vh]">
              <Image
                src={projects[openIdx].featured[photoIdx]}
                alt={`${projects[openIdx].title} — imagen ${photoIdx + 1}`}
                fill
                sizes="94vw"
                className="object-contain rounded-2xl"
                priority
              />

              {/* Controles (overlay) */}
              <div className="absolute inset-x-0 bottom-2 px-2 sm:px-3">
                <div className="flex items-center justify-between gap-2 rounded-xl bg-black/45 backdrop-blur px-2.5 py-2 text-white shadow-lg pb-[env(safe-area-inset-bottom)]">
                  <div className="min-w-0 text-xs sm:text-sm">
                    <strong className="font-semibold">{projects[openIdx].title}</strong>
                    {projects[openIdx].client ? ` · ${projects[openIdx].client}` : ""}
                    {projects[openIdx].location ? ` · ${projects[openIdx].location}` : ""}
                    {projects[openIdx].year ? ` · ${projects[openIdx].year}` : ""}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={goPrev}
                      className="h-10 w-10 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30"
                      aria-label="Anterior"
                    >
                      ←
                    </button>
                    <button
                      onClick={goNext}
                      className="h-10 w-10 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30"
                      aria-label="Siguiente"
                    >
                      →
                    </button>
                    <Link
                      href={`/proyectos/${projects[openIdx].slug}`}
                      className="hidden xs:inline-flex h-10 items-center rounded-lg bg-white px-3 text-black hover:bg-neutral-100"
                      aria-label="Ver caso completo"
                    >
                      Ver caso
                    </Link>
                    <button
                      onClick={close}
                      className="h-10 w-10 rounded-lg bg-white/15 hover:bg-white/25 active:bg-white/30"
                      aria-label="Cerrar"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails: scroll horizontal en mobile */}
            {projects[openIdx].featured.length > 1 && (
              <div className="mx-auto w-full max-w-[94vw] md:max-w-[80vw] overflow-x-auto">
                <div className="flex gap-2">
                  {projects[openIdx].featured.map((src, i) => (
                    <button
                      key={`${src}-${i}`} // ← clave única
                      onClick={() => setPhotoIdx(i)}
                      className={`relative h-16 w-24 sm:h-20 sm:w-32 rounded-lg overflow-hidden border ${
                        i === photoIdx ? "border-white" : "border-white/25"
                      }`}
                      aria-label={`Miniatura ${i + 1}`}
                    >
                      <Image src={src} alt={`Miniatura ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
