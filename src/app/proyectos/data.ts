// src/app/proyectos/data.ts

export type ProjectItem = {
  slug: string;                 // URL: /proyectos/[slug]
  title: string;
  category: "Residencial" | "Comercial" | "Industrial" | "PMO" | "Otro";
  cover: string;                // portada de la card
  featured: string[];           // imágenes destacadas para modal/lightbox
  gallery: string[];            // todas las imágenes para el detalle
  client?: string;
  location?: string;
  areaM2?: number;
  year?: string;
  tags?: string[];
  summary?: string;             // breve descripción para el detalle
  kpis?: { label: string; value: string }[];
};


export const projects: ProjectItem[] = [
  {
    slug: "proyecto-safi-exterior",
    title: "Proyecto Safi — Optimización de Obra (Exterior)",
    category: "Comercial",
    cover: "/proyectos/proyecto-a/cover.jpg",
    featured: [
      "/proyectos/proyecto-a/01.jpg",
      "/proyectos/proyecto-a/02.jpg",
      "/proyectos/proyecto-a/03.jpg",
      "/proyectos/proyecto-a/04.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-a/01.jpg",
      "/proyectos/proyecto-a/02.jpg",
      "/proyectos/proyecto-a/03.jpg",
      "/proyectos/proyecto-a/04.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    areaM2: 12500,
    year: "2024",
    tags: ["PMO", "Estandarización", "Trazabilidad"],
    summary: "Implementación de células fractales y control de frentes...",
    kpis: [
      { label: "Ahorro de costo", value: "8.3%" },
      { label: "Reducción de desviación", value: "-12 días" },
    ],
  },
  {
    slug: "proyecto-safi-interiores",
    title: "Proyecto Safi — Optimización de Obra (Interiores)",
    category: "Comercial",
    cover: "/proyectos/proyecto-b/cover.jpg",
    featured: [
      "/proyectos/proyecto-b/01.jpg",
      "/proyectos/proyecto-b/02.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-b/01.jpg",
      "/proyectos/proyecto-b/02.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    areaM2: 5000,
    year: "2024",
    tags: ["Remodelación", "Trazabilidad"],
    summary: "Estandarización de entregables y tablero de criticidad...",
    kpis: [
      { label: "Ahorro de costo", value: "8.3%" },
      // { label: "Reducción de desviación", value: "-12 días" },
    ],
  },
];


  /*
  //  TEMPLATE PARA AGREGAR MÁS PROYECTOS
  {
    slug: "nombre-del-proyecto-en-url",
    title: "Título del Proyecto",
    category: "Residencial" | "Comercial" | "Industrial" | "PMO" | "Otro",
    cover: "/projects/<slug>/cover.jpg",
    featured: [
      "/projects/<slug>/01.jpg",
      "/projects/<slug>/02.jpg",
      // ...
    ],
    gallery: [
      "/projects/<slug>/01.jpg",
      "/projects/<slug>/02.jpg",
      // ...
    ],
    client: "Nombre del cliente",
    location: "Ciudad, País",
    areaM2: 0,
    year: "YYYY",
    tags: ["Etiqueta1", "Etiqueta2"],
    summary: "Breve descripción del proyecto.",
    kpis: [
      { label: "Indicador", value: "Valor" },
      { label: "Otro indicador", value: "Valor" },
    ],
  }
  */


export const categories = Array.from(
  new Set(projects.map((p) => p.category))
);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
