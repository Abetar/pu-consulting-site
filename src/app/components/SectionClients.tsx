'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientes = [
    {
        titulo: 'Propietarios de Departamentos',
        problemas: 'Entregas sin manual ni checklist. Fallas de post-venta constantes. Incertidumbre sobre lo que recibes.',
        descripcion:
            'Manual técnico de propietario, checklist validado por expertos, y entregas profesionales con certeza documental.',
        img: '/think_woman.png',
    },
    {
        titulo: 'Constructoras y Contratistas',
        problemas: 'Estimaciones rechazadas, procesos sin estandarización, retrabajos costosos.',
        descripcion:
            'Supervisión técnica en sitio, generación de precios unitarios claros, metodología PU 5X para reducir retrabajos y facilitar tu trabajo.',
        img: '/planificacion_civil.png',
    },
    {
        titulo: 'Desarrolladores Inmobiliarios',
        problemas:'Sobrecostos, falta de coordinación entre áreas, informes poco claros para inversionistas.',
        descripcion:
            'Dirección técnica externa, optimización de costos, informes ejecutivos que facilitan decisiones rápidas.',
        img: '/constructoras.jpg',
    },
    {
        titulo: 'Profesionales Independientes',
        problemas: 'Sobrecarga operativa, estrés laboral, dificultad para ganar licitaciones.',
        descripcion:
            'Coaching técnico, consultoría estratégica, plantillas PU para aumentar tu eficiencia y efectividad.',
        img: '/freelancer.jpg',
    },
    {
        titulo: 'Inversionistas y Socios Estratégicos',
        problemas: 'Capital sin control técnico, decisiones lentas, falta de incubación de proyectos.',
        descripcion:
            'Informes ejecutivos claros, validación de estimaciones, incubadora de proyectos y desarrollo profesional. Operamos como una firma de inversión técnica accesible, orientada a escalar proyectos de manera segura y rentable.',
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
                            <p className="text-sm text-gray-700"><span className='font-bold'>Problemas:</span> {item.problemas}</p>
                            <br />
                            <p className="text-sm text-gray-700"><span className='font-bold'>Solución:</span> {item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
