'use client'

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export default function SeccionFilosofia() {
  return (
    <motion.section
      className="bg-white text-black px-6 md:px-16 lg:px-24 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Título e ícono */}
        <div className="flex flex-col items-center gap-4">
          <Brain className="w-10 h-10 text-gray-800" />
          <h2 className="text-2xl md:text-3xl font-bold">Filosofía Operativa</h2>
        </div>

        {/* Texto principal */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          PU opera como un <strong>cerebro externo</strong>. Integra arquitectura, ingeniería, compras, contratistas y cliente en un solo flujo funcional.
          Sustituye burocracia por metodología, y confusión por claridad técnica. Cada entregable tiene un propósito, cada paso un sentido.
        </p>

        {/* Frase destacada */}
        <p className="text-xl md:text-2xl font-semibold text-gray-900 italic">
          Diseñamos estructuras vivas que operan por sí mismas.
        </p>
      </div>
    </motion.section>
  )
}
