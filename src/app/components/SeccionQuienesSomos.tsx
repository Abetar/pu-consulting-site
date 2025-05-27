'use client'

import { motion } from 'framer-motion'
import { Building2, BrainCircuit, CheckCircle } from 'lucide-react'

export default function SeccionQuienesSomos() {
    return (
        <motion.section
            className="text-black px-6 md:px-16 lg:px-24 py-20"
            initial={{ opacity: 0, y: 40 }}
            style={{ backgroundColor: '#f9f9f9' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Quiénes Somos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto text-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <Building2 className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold">Dirección Técnica Externa</h3>
                    <p className="text-sm text-gray-600">Especialistas en proyectos de construcción.</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <BrainCircuit className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold">Sistemas Replicables</h3>
                    <p className="text-sm text-gray-600">Metodologías eficientes y auditables.</p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                        <CheckCircle className="w-8 h-8 text-gray-800" />
                    </div>
                    <h3 className="text-lg font-semibold">Ejecución Sin Conflictos</h3>
                    <p className="text-sm text-gray-600">Máxima claridad y sin sobrecostos.</p>
                </div>
            </div>
        </motion.section>
    )
}
