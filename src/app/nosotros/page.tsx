import type { Metadata } from 'next'
import HomeNosotros from '../components/Nosotros/HomeNosotros'

export const metadata: Metadata = {
  title: "Quiénes Somos | PU Consulting",
  description:
    "Conoce a PU Consulting: firma experta en dirección técnica estratégica que combina experiencia operativa y claridad metodológica para transformar proyectos constructivos.",
  keywords: [
    "PU Consulting",
    "quiénes somos",
    "equipo técnico",
    "filosofía operativa",
    "consultoría en construcción",
    "dirección técnica",
    "visión y misión"
  ],
  openGraph: {
    title: "Nuestro equipo | PU Consulting",
    description:
      "Especialistas en dirección técnica externa, procesos replicables y ejecución sin sobrecostos. Conoce nuestra visión y experiencia.",
    url: "https://pu-consulting.com/nosotros",
    siteName: "PU Consulting",
    locale: "es_MX",
    type: "website"
  }
}

export default function NosotrosPage() {
  return <HomeNosotros />
}
