"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg2 from "/public/planificacion_civil.png";
import FooterConsultoria from "../FooterConsultoria";
import SeccionQuienesSomos from "../SeccionQuienesSomos";
import SeccionFilosofia from "../SeccionFilosofia";

export default function Nosotros() {
  return (
    <>
      <section className="relative w-full min-h-[100svh] md:min-h-[90vh] overflow-hidden text-white">
        {/* Fondo */}
        <Image
          src={heroImg2}
          alt="Equipo de consultores trabajando"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover brightness-[.55]"
        />

        {/* Contenido */}
        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 md:px-16 lg:px-24 py-16 md:py-20 flex flex-col justify-center gap-6 pb-[env(safe-area-inset-bottom)]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* H1 único para SEO */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Misión
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Ser la firma de referencia en Latinoamérica en dirección técnica externa,
            liderando con procesos eficientes, tecnología operativa y autonomía estratégica.
          </p>

          <h2 className="pt-4 md:pt-6 text-3xl md:text-5xl font-bold leading-tight">
            Visión
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Optimizar el abastecimiento, la gestión técnica y la toma de decisiones en
            proyectos de construcción mediante sistemas replicables, medibles y alineados
            con resultados.
          </p>

          <h2 className="pt-4 md:pt-6 text-3xl md:text-5xl font-bold leading-tight">
            Valores
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Transparencia, eficiencia, replicabilidad, independencia, innovación técnica y
            enfoque colaborativo.
          </p>
        </motion.div>
      </section>

      <SeccionFilosofia />
      <SeccionQuienesSomos />
      <FooterConsultoria />
    </>
  );
}
