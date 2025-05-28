

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
                    <h2 className="text-2xl md:text-3xl font-semibold">Casos de Éxito</h2>

                    <div>
                        <h3 className="text-sm md:text-base font-bold mb-1">Experiencia y Resultados</h3>
                        <p className="text-sm md:text-base text-gray-700">
                            Hemos brindado asesoría estratégica y técnica clave para la ejecución de más de 500,000 m² de construcción, gestionando presupuestos individuales de hasta 1.8 mil millones de pesos y sumando en conjunto más de 5,000 millones de pesos gestionados con mejores prácticas y resultados comprobados
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm md:text-base font-bold mb-1">Sección Modelo Operativo (Células Fractales)</h3>
                        <p className="text-sm md:text-base text-gray-700">
                            Operamos con un modelo innovador de células autónomas, replicables y especializadas en cada cliente o proyecto. Cada célula funciona como una microfirma independiente, garantizando eficiencia, rentabilidad y adaptabilidad.
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
