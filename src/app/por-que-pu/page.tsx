import type { Metadata } from 'next'
import SeccionPorQuePU from '../components/por-que-pu/PorQuePu'

export const metadata: Metadata = {
  title: "¿Por qué PU? | PU Consulting",
  description:
    "Descubre qué hace diferente a PU Consulting: metodología 5X, dirección técnica replicable, control financiero y ejecución sin conflictos.",
  keywords: [
    "PU Consulting",
    "diferencial constructivo",
    "metodología 5X",
    "control de obra",
    "dirección técnica replicable",
    "consultoría estratégica",
    "gestión constructiva"
  ],
  openGraph: {
    title: "¿Por qué elegir PU Consulting?",
    description:
      "Nuestra metodología 5X garantiza claridad operativa, replicabilidad, trazabilidad y eficiencia. Conoce nuestros diferenciales.",
    url: "https://pu-consulting.com/por-que-pu",
    siteName: "PU Consulting",
    locale: "es_MX",
    type: "website"
  }
}

export default function PorQuePUPage() {
  return <SeccionPorQuePU />
}
