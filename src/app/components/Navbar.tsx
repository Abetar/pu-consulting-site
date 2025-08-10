"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = useMemo(
    () => [
      { href: "/nosotros", label: "Quiénes Somos" },
      { href: "/servicios", label: "Servicios" },
      { href: "/proyectos", label: "Proyectos" }, // 👈 nuevo
      { href: "/por-que-pu", label: "¿Por qué PU?" },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const baseLink =
    "transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md px-1";
  const activeLink = "underline underline-offset-4";

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/100 px-6 py-4 md:px-16 lg:px-24">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pu-consulting-logo-nobg.png"
            alt="PU Consulting"
            width={36}
            height={36}
            priority
            className="invert"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            PU Consulting
          </span>
        </Link>

        {/* Hamburguesa */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${baseLink} ${isActive(link.href) ? activeLink : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contacto
          </Link>
        </nav>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <nav className="md:hidden mt-3 rounded-xl bg-black text-white px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${baseLink} ${isActive(link.href) ? activeLink : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-white text-black px-4 py-2 text-center text-sm font-semibold shadow-sm"
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
