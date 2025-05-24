'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SeccionValores() {
    return (
        <motion.section
            className="bg-white text-black px-6 md:px-16 lg:px-24 py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Imagen */}
                <div className="md:w-1/2">
                    <Image
                        src="/business-woman.jpg" // Asegúrate de tener esta imagen en public/
                        alt="Sesión de trabajo en equipo"
                        width={500}
                        height={600}
                        className="rounded-md shadow-md"
                    />
                </div>

                {/* Texto */}
                <div className="md:w-1/2 flex flex-col justify-center h-full space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
                        Nuestros valores son la base de nuestro trabajo.
                    </h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                        Los negocios del mañana deben construirse sobre bases equilibradas: empatía y pragmatismo;
                        previsión y conocimiento; humanidad y tecnología. En una corporación de consultoría,
                        tratamos a las organizaciones como socios, con un fuerte enfoque en la colaboración.
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold leading-snug text-black">
                        Vemos a nuestros clientes como humanos <br />
                        y trabajamos con los desafíos que enfrentan.
                    </p>
                </div>
            </div>
        </motion.section>
    )
}
