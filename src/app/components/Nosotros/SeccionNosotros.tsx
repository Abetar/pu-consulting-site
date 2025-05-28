'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import heroImg2 from '/public/planificacion_civil.png'
import FooterConsultoria from '../FooterConsultoria'
import SeccionQuienesSomos from '../SeccionQuienesSomos'
import SeccionFilosofia from '../SeccionFilosofia'

export default function Nosotros() {
    return (
        <>
            <section className="relative h-screen w-full overflow-hidden text-white">
                <Image
                    src={heroImg2}
                    alt="Equipo de consultores trabajando"
                    layout="fill"
                    objectFit="cover"
                    className="z-0 brightness-[.5]"
                    priority
                />
                <motion.div
                    className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
                        Misión
                    </h1>
                    <p className="mt-4 text-lg text-white/90 max-w-xl">
                        Ser la firma de referencia en Latinoamérica en dirección técnica externa, liderando con procesos eficientes, tecnología operativa y autonomía estratégica.
                    </p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight" style={{ marginTop: '5rem' }}>
                        Visión
                    </h1>
                    <p className="mt-4 text-lg text-white/90 max-w-xl">
                        Optimizar el abastecimiento, la gestión técnica y la toma de decisiones en proyectos de construcción mediante sistemas replicables, medibles y alineados con resultados.
                    </p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight" style={{ marginTop: '5rem' }}>
                        Valores
                    </h1>
                    <p className="mt-4 text-lg text-white/90 max-w-xl">
                        Transparencia, eficiencia, replicabilidad, independencia, innovación técnica y enfoque colaborativo.
                    </p>


                </motion.div>
            </section>
            <SeccionFilosofia />
            <SeccionQuienesSomos />
            <FooterConsultoria />
        </>

    )
}
