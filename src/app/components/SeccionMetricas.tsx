'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Metric = ({
    end,
    suffix = '',
    label,
    sublabel,
}: {
    end: number
    suffix?: string
    label: string
    sublabel: string
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const duration = 2000 // en ms
        const increment = end / (duration / 16)

        const interval = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(interval)
            } else {
                setCount(start)
            }
        }, 16)

        return () => clearInterval(interval)
    }, [isInView, end])

    return (
        <motion.div
            ref={ref}
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-4xl md:text-5xl font-bold">
                {Math.floor(count).toLocaleString()}
                {suffix}
            </span>
            <h3 className="text-lg font-semibold">{label}</h3>
            <p className="text-sm text-gray-600">{sublabel}</p>
        </motion.div>
    )
}

export default function SeccionMetricas() {
    return (
        <>
            <section className="bg-white px-6 md:px-16 lg:px-24 py-20 text-black text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-8">Resultados y Diferenciales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <Metric
                        end={20}
                        suffix="%"
                        label="Reducción Administrativa"
                        sublabel="Menor carga y tiempos de decisión"
                    />
                    <Metric
                        end={100}
                        suffix="%"
                        label="Digital"
                        sublabel="Control de pagos y estimaciones"
                    />
                    <Metric
                        end={40000}
                        suffix="m²"
                        label="Proyectos"
                        sublabel="Escala de implementación metodológica"
                    />
                </div>
            </section>
        </>
    )
}
