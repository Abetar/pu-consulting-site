'use client'

import { motion } from 'framer-motion'
import {
    UserCog,
    HardHat,
    GraduationCap,
    FileText,
    FolderOpen,
} from 'lucide-react'
import Image from 'next/image'
import SeccionMetricas from '../SeccionMetricas'
import FooterConsultoria from '../FooterConsultoria'
import SeccionSistemaPU5X from '../SeccionSistemasPU5X'


export default function SeccionModeloOperativo() {
    const items = [
        {
            icon: <UserCog className="w-6 h-6 text-gray-700" />,
            title: 'Director Técnico',
            description: 'Experiencia directa en campo',
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
            title: 'Consultor Externo',
            description: 'Según especialidad requerida',
        },
        {
            icon: <HardHat className="w-6 h-6 text-gray-700" />,
            title: 'Coordinador Operativo',
            description: 'Seguimiento técnico en campo',
        },
        {
            icon: <FileText className="w-6 h-6 text-gray-700" />,
            title: 'Administrador Técnico',
            description: 'Contratos, costos, entregables',
        },
        {
            icon: <FolderOpen className="w-6 h-6 text-gray-700" />,
            title: 'Soporte Documental',
            description: 'Entregables, trazabilidad, archivo',
        },
    ]

    return (
        <>
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden px-6 md:px-16 lg:px-24 py-20 bg-transparent text-gray-600">
                {/* Imagen de fondo opcional */}
                <Image
                    src="/online-analysis-teamwork.jpg" // Pon aquí tu imagen real
                    alt="Fondo modelo operativo"
                    fill
                    className="object-cover brightness-95 opacity-10 absolute inset-0 -z-10"
                />

                {/* Contenido */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full max-w-screen-xl text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Modelo Operativo Escalable</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-base font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <SeccionMetricas />

            <SeccionSistemaPU5X />


            <FooterConsultoria />
        </>
    )
}
