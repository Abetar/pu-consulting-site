'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import heroImg from '/public/business-data-analysis.jpg'
import SeccionEstrategia from './components/SeccionEstrategia'
import SeccionValores from './components/SeccionValores'
import SeccionHeroSimple from './components/HeroSimple'
import SeccionFAQ from './components/SeccionFAQ'
import FooterConsultoria from './components/FooterConsultoria'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden text-white">
        <Image
          src={heroImg}
          alt="Equipo de consultores trabajando"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-[.5]"
          priority
        />
        <motion.div
          className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-sm uppercase tracking-wide text-white/70">
            Dirección técnica estratégica
          </p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            Activamos inteligencia <br /> operativa desde adentro.
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            PU Consulting no construye, pero hace que todo funcione. Integramos arquitectura,
            ingeniería y estrategia para evitar sobrecostos y decisiones impulsivas.
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
