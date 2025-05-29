'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientes = [
    {
        titulo: 'Desarrolladoras inmobiliarias',
        descripcion:
            'Consultoría técnica y financiera integral. Optimizamos rentabilidad y reducimos riesgos en cada etapa del proyecto.',
        img: '/planificacion_civil.png',
    },
    {
        titulo: 'Constructoras / Contratistas',
        descripcion:
            'Dirección técnica operativa con foco en productividad. Mejoramos procesos constructivos y controlamos financieramente el proyecto.',
        img: '/constructoras.jpg',
    },
    {
        titulo: 'Profesionales Independientes',
        descripcion:
            'Coaching técnico personalizado y consultoría estratégica. Aumentamos tu eficiencia y claridad en proyectos clave.',
        img: '/freelancer.jpg',
    },
    {
        titulo: 'Gerencias de Proyectos',
        descripcion:
            'Apoyo técnico en decisiones clave, auditoría operativa y control financiero para una gestión efectiva.',
        img: '/online-analysis-teamwork.jpg',
    },
]

export default function SeccionClientes() {
    return (
        <motion.section
            className="bg-gray-100 text-black px-6 md:px-16 lg:px-24 py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Soluciones Integrales
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {clientes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start text-left"
                        >
                            <div className="w-full mb-4">
                                <Image
                                    src={item.img}
                                    alt={item.titulo}
                                    width={400} // puedes ajustar según tu diseño
                                    height={120}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-sm text-gray-700">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
