'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-70 px-6 py-4 md:px-16 lg:px-24 flex justify-between items-center">
      <Link href="/" className="text-white font-bold text-lg tracking-wide">
        PU Consulting
      </Link>

      {/* Hamburguesa */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menú Desktop */}
      <nav className="hidden md:flex gap-6 text-sm text-white font-medium">
        <Link href="/nosotros">Quiénes Somos</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/por-que-pu">¿Por qué PU?</Link>
        <Link href="/contacto" className="underline underline-offset-4">Contacto</Link>
      </nav>

      {/* Menú Mobile */}
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
