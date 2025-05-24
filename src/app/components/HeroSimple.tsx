'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSimple() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Imagen de fondo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/ia_fondo.png"
          alt="Equipo de consultores trabajando"
          fill
          className="object-cover brightness-[.5]"
          priority
        />
      </motion.div>

      {/* Texto superpuesto */}
      <motion.div
        className="relative z-10 h-full flex items-center px-6 md:px-24"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-2xl md:text-4xl font-semibold max-w-xl leading-snug">
          La próxima generación de consultores de estrategia está aquí para dar forma al futuro.
        </h2>
      </motion.div>
    </section>
  )
}
