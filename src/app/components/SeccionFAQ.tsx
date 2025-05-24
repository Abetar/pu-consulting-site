

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SeccionFAQ() {
    return (
        <motion.section
            className="bg-white px-6 md:px-16 lg:px-24 py-20 text-black"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="flex flex-col md:flex-row items-start gap-12">
                {/* FAQ texto */}
                <div className="md:w-1/2 space-y-8">
                    <h2 className="text-2xl md:text-3xl font-semibold uppercase">Preguntas Frecuentes</h2>

                    <div>
                        <h3 className="text-sm md:text-base font-bold mb-1">¿A qué mercados prestas servicio actualmente?</h3>
                        <p className="text-sm md:text-base text-gray-700">
                            Tenemos oficinas centrales en América del Norte, Asia Pacífico y Europa, lo que nos da un amplio alcance.
                            Actualmente estamos bien posicionados para servir a los clientes en mercados emergentes y desarrollados.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm md:text-base font-bold mb-1">¿Cómo puedo configurar una consulta y demo?</h3>
                        <p className="text-sm md:text-base text-gray-700">
                            Ofrecemos una consulta inicial gratis a nuevos clientes, para entender mejor sus necesidades y explicar
                            nuestros servicios. Simplemente envíanos un correo para reservar tu sesión.
                        </p>
                    </div>
                </div>

                {/* Imagen */}
                <div className="md:w-1/2">
                    <Image
                        src="/think_woman.png" // Asegúrate de tener esta imagen en /public
                        alt="Consultoras hablando"
                        width={600}
                        height={500}
                        className="rounded-md shadow"
                    />
                </div>
            </div>
        </motion.section>
    )
}
