'use client'

import { motion } from 'framer-motion'

const items = [
    {
        numero: '1',
        titulo: 'eXactitud',
        descripcion: 'Tareas claras, entregables definidos, objetivos validados',
    },
    {
        numero: '2',
        titulo: 'eXecución',
        descripcion: 'Avances funcionales, cero retrabajo, precisión',
    },
    {
        numero: '3',
        titulo: 'eXperiencia Compartida',
        descripcion: 'Comunicación constante y efectiva',
    },
    {
        numero: '4',
        titulo: 'eXistencia de Orden',
        descripcion: 'Trazabilidad, formatos consistentes',
    },
    {
        numero: '5',
        titulo: 'eXcelencia Progresiva',
        descripcion: 'Mejora continua, aprendizaje postmortem',
    },
]

export default function SeccionSistemaPU5X() {
    return (
        <motion.section
            className="text-black px-6 md:px-16 lg:px-24 py-20"
            style={{ backgroundColor: '#f9f9f9' }} // Fondo claro
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <div className="max-w-screen-lg mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Sistema PU 5X</h2>

                <div className="space-y-8 flex flex-col items-center">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Número en bloque */}
                            <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center font-semibold text-lg mb-2">
                                {item.numero}
                            </div>

                            {/* Texto centrado */}
                            <h3 className="text-lg font-semibold">{item.titulo}</h3>
                            <p className="text-sm text-gray-600 max-w-md">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
