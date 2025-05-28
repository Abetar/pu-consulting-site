import type { Metadata } from 'next'
import HomePage from './components/HomePage'

export const metadata: Metadata = {
  title: "Inicio | PU Consulting",
  description:
    "Consultoría técnica especializada en proyectos de construcción. Optimizamos tus decisiones técnicas, financieras y operativas.",
  openGraph: {
    title: "Inicio | PU Consulting",
    description: "Soluciones estratégicas para desarrolladoras, constructoras y gerencias.",
    url: "https://pu-consulting.com",
    siteName: "PU Consulting",
    locale: "es_MX",
    type: "website"
  }
}

export default function Page() {
  return <HomePage />
}
