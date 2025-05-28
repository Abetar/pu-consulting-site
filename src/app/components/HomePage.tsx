'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import heroImg from '/public/business-data-analysis.jpg'
import SeccionEstrategia from './SeccionEstrategia'
import SeccionValores from './SeccionValores'
import SeccionHeroSimple from './HeroSimple'
import SeccionFAQ from './SeccionFAQ'
import FooterConsultoria from './FooterConsultoria'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden text-white">
        <Image
          src={heroImg}
          alt="Equipo de consultores trabajando"
          fill
          className="z-0 object-cover brightness-[.5]"
          priority
        />
        <motion.div
          className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            La Inteligencia Técnica También se Diseña.
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            PU Consulting transforma el conocimiento técnico en sistemas replicables y eficientes para proyectos de construcción e inversión inmobiliaria.
          </p>
          <a
            href="/contacto"
            className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-neutral-200 transition w-fit"
          >
            Contacto
          </a>
        </motion.div>
      </section>

      <main>
        <SeccionEstrategia />
        <SeccionValores />
        <SeccionHeroSimple />
        <SeccionFAQ />
        <FooterConsultoria />
      </main>
    </>
  )
}
