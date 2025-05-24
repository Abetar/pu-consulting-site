'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SeccionEstrategia() {
  return (
    <motion.section
      className="bg-black text-white px-6 md:px-16 lg:px-24 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Empoderamos a los negocios <br /> a través de la estrategia y previsión.
          </h2>
          <a
            href="/servicios"
            className="inline-block bg-white hover:bg-gray-400 text-black font-semibold text-sm px-6 py-3 rounded-full transition"
          >
            Conoce más
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/online-analysis-teamwork.jpg"
            alt="Consultores estratégicos"
            className="rounded-md shadow"
            width={600}
            height={400}
          />
        </div>
      </div>
    </motion.section>
  )
}
