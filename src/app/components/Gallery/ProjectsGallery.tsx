"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type Project = {
  id: string;
  title: string;
  client?: string;
  location?: string;
  areaM2?: number;
  year?: string;
  category: string; // "Residencial" | "Comercial" | "Industrial" | "PMO"
  cover: string; // ej: "/projects/pu_001.jpg"
  tags?: string[];
};

type Props = {
  projects: Project[];
  initialCategory?: string | "Todos";
  showFilter?: boolean;
  className?: string;
};

export default function ProjectsGallery({
  projects,
  initialCategory = "Todos",
  showFilter = true,
  className = "",
}: Props) {
  const [active, setActive] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["Todos", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    const base =
      active === "Todos"
        ? projects
        : projects.filter((p) => p.category === active);
    if (!search.trim()) return base;
    const q = search.toLowerCase();
    return base.filter((p) =>
      [p.title, p.client, p.location, p.year, p.category, ...(p.tags ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [projects, active, search]);

  const open = (idx: number) => setLightboxIndex(idx);
  const close = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <section id="proyectos" className={`w-full ${className}`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Header + controles */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Proyectos
              </h1>
              <p className="text-sm text-neutral-500">
                Filtra por categoría o busca por cliente, ubicación o etiqueta.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              {showFilter && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActive(c)}
                      className={`px-3 py-1.5 rounded-full text-sm border transition
                    ${
                      active === c
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                    }`}
                      aria-pressed={active === c}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
              <input
                placeholder="Buscar…"
                className="px-3 py-2 rounded-xl border border-neutral-200 w-full md:w-64 outline-none focus:ring-2 focus:ring-black/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar proyectos"
              />
            </div>
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            role="list"
          >
            {filtered.map((p, idx) => (
              <article
                key={p.id}
                role="listitem"
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => open(idx)}
                  className="block text-left w-full"
                  aria-label={`Abrir ${p.title}`}
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
                    <h3 className="text-base font-semibold line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {p.client ?? "Proyecto"}
                      {p.location ? ` — ${p.location}` : ""}
                      {p.year ? ` — ${p.year}` : ""}
                    </p>
                    {p.areaM2 ? (
                      <p className="text-sm text-neutral-600 mt-1">
                        {p.areaM2.toLocaleString()} m²
                      </p>
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
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Vista de proyecto"
            onClick={close}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].cover}
                alt={filtered[lightboxIndex].title}
                width={1600}
                height={1066}
                className="w-full h-auto rounded-2xl"
                priority
              />
              <div className="mt-3 flex items-center justify-between text-white">
                <div className="text-sm md:text-base">
                  <strong className="font-semibold">
                    {filtered[lightboxIndex].title}
                  </strong>
                  {filtered[lightboxIndex].client
                    ? ` · ${filtered[lightboxIndex].client}`
                    : ""}
                  {filtered[lightboxIndex].location
                    ? ` · ${filtered[lightboxIndex].location}`
                    : ""}
                  {filtered[lightboxIndex].year
                    ? ` · ${filtered[lightboxIndex].year}`
                    : ""}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Anterior"
                  >
                    ←
                  </button>
                  <button
                    onClick={goNext}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Siguiente"
                  >
                    →
                  </button>
                  <button
                    onClick={close}
                    className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
