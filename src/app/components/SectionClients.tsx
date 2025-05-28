'use client'

import { motion } from 'framer-motion'
import {
    Building2,
    Hammer,
    UserCheck,
    Briefcase
} from 'lucide-react'

const clientes = [
    {
        icon: <Building2 className="w-6 h-6 text-gray-700" />,
        titulo: 'Desarrolladoras',
        descripcion:
            'Consultoría técnica y financiera integral. Optimizamos rentabilidad y reducimos riesgos en cada etapa del proyecto.',
    },
    {
        icon: <Hammer className="w-6 h-6 text-gray-700" />,
        titulo: 'Constructoras / Contratistas',
        descripcion:
            'Dirección técnica operativa con foco en productividad. Mejoramos procesos constructivos y controlamos financieramente el proyecto.',
    },
    {
        icon: <UserCheck className="w-6 h-6 text-gray-700" />,
        titulo: 'Profesionales Independientes',
        descripcion:
            'Coaching técnico personalizado y consultoría estratégica. Aumentamos tu eficiencia y claridad en proyectos clave.',
    },
    {
        icon: <Briefcase className="w-6 h-6 text-gray-700" />,
        titulo: 'Gerencias / Construction Management',
        descripcion:
            'Apoyo técnico en decisiones clave, auditoría operativa y control financiero para una gestión efectiva.',
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
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Soluciones por Tipo de Cliente</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {clientes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start"
                        >
                            <div className="mb-3">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-sm text-gray-700">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
