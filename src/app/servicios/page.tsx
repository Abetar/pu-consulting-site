import type { Metadata } from 'next'
import SeccionServicios from '../components/Servicios/SeccionServicios'

export const metadata: Metadata = {
  title: "Servicios | PU Consulting",
  description:
    "Descubre nuestros servicios técnicos: dirección de obra, control de proyecto, licitaciones, coaching técnico y más.",
  keywords: [
    "consultoría técnica",
    "servicios de construcción",
    "dirección de obra",
    "control de proyecto",
    "consultoría constructiva",
    "coaching técnico"
  ],
  openGraph: {
    title: "Servicios Técnicos | PU Consulting",
    description: "Soluciones para desarrolladoras, constructoras y CM.",
    url: "https://pu-consulting.com/servicios",
    siteName: "PU Consulting",
    locale: "es_MX",
    type: "website"
  }
}

export default function ServiciosPage() {
  return <SeccionServicios />
}
