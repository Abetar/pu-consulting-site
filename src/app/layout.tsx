import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PU Consulting",
  description: "Dirección técnica estratégica para proyectos de construcción",
}

// Subcomponente cliente embebido
function Navbar() {
  'use client'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 px-6 py-4 md:px-16 lg:px-24 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-white font-bold text-lg tracking-wide">
        PU Consulting
      </Link>

      {/* Hamburguesa móvil */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navegación desktop */}
      <nav className="hidden md:flex gap-6 text-sm text-white font-medium">
        <Link href="/nosotros">Quiénes Somos</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/por-que-pu">¿Por qué PU?</Link>
        <Link href="/contacto" className="underline underline-offset-4">Contacto</Link>
      </nav>

      {/* Menú mobile */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black text-white px-6 py-4 flex flex-col gap-4 md:hidden z-20">
          <Link href="/nosotros" onClick={() => setIsOpen(false)}>Quiénes Somos</Link>
          <Link href="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link href="/por-que-pu" onClick={() => setIsOpen(false)}>¿Por qué PU?</Link>
          <Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
        </nav>
      )}
    </header>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow mt-[72px]">{children}</main>
        <footer className="bg-gray-100 text-center text-xs py-4 text-gray-600">
          PU Consulting · San Pedro Garza García, N.L. · © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}