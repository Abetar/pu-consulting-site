// src/app/proyectos/data.ts

export type ProjectItem = {
  slug: string; // URL: /proyectos/[slug]
  title: string;
  category: "Residencial" | "Comercial" | "Industrial" | "PMO" | "Otro";
  cover: string; // portada de la card
  featured: string[]; // imágenes destacadas para modal/lightbox
  gallery: string[]; // todas las imágenes para el detalle
  client?: string;
  location?: string;
  areaM2?: number;
  year?: string;
  tags?: string[];
  summary?: string; // breve descripción para el detalle
  kpis?: { label: string; value: string }[];
};

export const projects: ProjectItem[] = [
  {
    slug: "obra-civil",
    title: "Obra Civil",
    category: "Comercial",
    cover: "/proyectos/proyecto-a/cover.jpg",
    featured: [
      "/proyectos/proyecto-a/01.jpg",
      "/proyectos/proyecto-a/02.jpg",
      "/proyectos/proyecto-a/03.jpg",
      "/proyectos/proyecto-a/05.jpeg",
      "/proyectos/proyecto-a/06.jpg",
      "/proyectos/proyecto-a/07.jpg",
      "/proyectos/proyecto-a/08.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-a/01.jpg",
      "/proyectos/proyecto-a/02.jpg",
      "/proyectos/proyecto-a/03.jpg",
      "/proyectos/proyecto-a/05.jpeg",
      "/proyectos/proyecto-a/06.jpg",
      "/proyectos/proyecto-a/07.jpg",
      "/proyectos/proyecto-a/08.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    // areaM2: 12500,
    year: "2024",
    tags: ["PMO", "Estandarización", "Trazabilidad"],
    // summary: "Implementación de células fractales y control de frentes...",
    // kpis: [
    //   { label: "Ahorro de costo", value: "8.3%" },
    //   { label: "Reducción de desviación", value: "-12 días" },
    // ],
  },
  {
    slug: "remodelaciones",
    title: "Remodelaciones",
    category: "Comercial",
    cover: "/proyectos/proyecto-b/cover.jpg",
    featured: [
      "/proyectos/proyecto-b/01.jpg",
      "/proyectos/proyecto-b/02.jpg",
      "/proyectos/proyecto-b/03.jpg",
      "/proyectos/proyecto-b/04.jpg",
      "/proyectos/proyecto-b/05.jpg",
      "/proyectos/proyecto-b/06.jpg",
      "/proyectos/proyecto-b/07.jpg",
      "/proyectos/proyecto-b/cover.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-b/01.jpg",
      "/proyectos/proyecto-b/02.jpg",
      "/proyectos/proyecto-b/03.jpg",
      "/proyectos/proyecto-b/04.jpg",
      "/proyectos/proyecto-b/05.jpg",
      "/proyectos/proyecto-b/06.jpg",
      "/proyectos/proyecto-b/07.jpg",
      "/proyectos/proyecto-b/cover.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    // areaM2: 5000,
    year: "2024",
    tags: ["Remodelación", "Trazabilidad"],
    // summary: "Estandarización de entregables y tablero de criticidad...",
    // kpis: [
    //   { label: "Ahorro de costo", value: "8.3%" },
    //   // { label: "Reducción de desviación", value: "-12 días" },
    // ],
  },
  {
    slug: "restauracion",
    title: "Restauracion",
    category: "Comercial",
    cover: "/proyectos/proyecto-c/cover.jpg",
    featured: [
      "/proyectos/proyecto-c/01.jpg",
      "/proyectos/proyecto-c/02.jpg",
      "/proyectos/proyecto-c/03.jpg",
      "/proyectos/proyecto-c/04.jpg",
      "/proyectos/proyecto-c/cover.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-c/01.jpg",
      "/proyectos/proyecto-c/02.jpg",
      "/proyectos/proyecto-c/03.jpg",
      "/proyectos/proyecto-c/04.jpg",
      "/proyectos/proyecto-c/cover.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    // areaM2: 5000,
    year: "2024",
    tags: ["Remodelación", "Trazabilidad"],
    // summary: "Estandarización de entregables y tablero de criticidad...",
    // kpis: [
    //   { label: "Ahorro de costo", value: "6%" },
    //   // { label: "Reducción de desviación", value: "-12 días" },
    // ],
  },
  {
    slug: "desarrollo-de-proyectos",
    title: "Desarrollo de Proyectos",
    category: "Residencial",
    cover: "/proyectos/proyecto-d/cover.jpg",
    featured: [
      "/proyectos/proyecto-d/01.jpg",
      "/proyectos/proyecto-d/02.jpg",
      "/proyectos/proyecto-d/03.jpg",
      "/proyectos/proyecto-d/04.jpg",
      "/proyectos/proyecto-d/cover.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-d/01.jpg",
      "/proyectos/proyecto-d/02.jpg",
      "/proyectos/proyecto-d/03.jpg",
      "/proyectos/proyecto-d/04.jpg",
      "/proyectos/proyecto-d/cover.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    // areaM2: 2500,
    year: "2024",
    tags: ["Remodelación", "Trazabilidad"],
    // summary: "Estandarización de entregables y tablero de criticidad...",
    // kpis: [
    //   { label: "Ahorro de costo", value: "2%" },
    //   // { label: "Reducción de desviación", value: "-12 días" },
    // ],
  },
    {
    slug: "mep",
    title: "MEP",
    category: "Residencial",
    cover: "/proyectos/proyecto-d/04.jpg",
    featured: [
      "/proyectos/proyecto-e/01.jpg",
      "/proyectos/proyecto-e/02.jpg",
      "/proyectos/proyecto-e/03.jpg",
      "/proyectos/proyecto-e/04.jpg",
      "/proyectos/proyecto-e/05.jpg",
      "/proyectos/proyecto-e/06.jpg",
      "/proyectos/proyecto-e/07.jpg",
      "/proyectos/proyecto-e/cover.jpg",
    ],
    gallery: [
      "/proyectos/proyecto-e/01.jpg",
      "/proyectos/proyecto-e/02.jpg",
      "/proyectos/proyecto-e/03.jpg",
      "/proyectos/proyecto-e/04.jpg",
      "/proyectos/proyecto-e/05.jpg",
      "/proyectos/proyecto-e/06.jpg",
      "/proyectos/proyecto-e/07.jpg",
      "/proyectos/proyecto-e/cover.jpg",
    ],
    client: "PU Consulting",
    location: "Monterrey, MX",
    // areaM2: 2500,
    year: "2024",
    tags: ["Remodelación", "Trazabilidad"],
    // summary: "Estandarización de entregables y tablero de criticidad...",
    // kpis: [
    //   { label: "Ahorro de costo", value: "2%" },
    //   // { label: "Reducción de desviación", value: "-12 días" },
    // ],
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
    // areaM2: 0,
    year: "YYYY",
    tags: ["Etiqueta1", "Etiqueta2"],
    // summary: "Breve descripción del proyecto.",
    kpis: [
      { label: "Indicador", value: "Valor" },
      { label: "Otro indicador", value: "Valor" },
    ],
  }
  */

export const categories = Array.from(new Set(projects.map((p) => p.category)));

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
