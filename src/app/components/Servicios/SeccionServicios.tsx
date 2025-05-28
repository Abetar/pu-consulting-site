'use client'

import { motion } from 'framer-motion'
import {
  HardHat,
  PackageSearch,
  Users,
  BarChart,
  ClipboardCheck,
  Clock4,
  FileSearch,
  FileText,
  Briefcase,
  GraduationCap,
  Settings,
  Wrench,
} from 'lucide-react'

import FooterConsultoria from '../FooterConsultoria'
import SeccionClientes from '../SectionClients'

const servicios = [
  {
    nombre: 'Dirección Técnica Integral',
    tiempo: '15 días',
    icon: <HardHat className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Abastecimiento de Obra',
    tiempo: '10 días',
    icon: <PackageSearch className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Capacitación a Contratistas',
    tiempo: '7 días',
    icon: <Users className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Control de Proyecto',
    tiempo: '10 días',
    icon: <BarChart className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Implementación Metodología PU',
    tiempo: '3 meses',
    icon: <ClipboardCheck className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Reporte de Avance de Obra',
    tiempo: '48 horas',
    icon: <Clock4 className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Estimación con generadores',
    tiempo: '3 días',
    icon: <FileSearch className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Tarjeta de Precio Unitario',
    tiempo: '2 días',
    icon: <FileText className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Soporte a Licitación',
    tiempo: '5 días',
    icon: <Briefcase className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Coaching Técnico Personalizado',
    tiempo: 'Agenda abierta',
    icon: <GraduationCap className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Implementación Metodología PU',
    tiempo: '3 semanas',
    icon: <Settings className="w-5 h-5 text-gray-700" />,
  },
  {
    nombre: 'Herramientas Personalizadas',
    tiempo: '10 días',
    icon: <Wrench className="w-5 h-5 text-gray-700" />,
  },
]

export default function SeccionServicios() {
  return (
    <>
      <motion.section
        className="bg-gray-100 text-black px-6 md:px-16 lg:px-24 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <SeccionClientes />
      </motion.section>

      <motion.section
        className="bg-white text-black px-6 md:px-16 lg:px-24 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Servicios</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-start"
              >
                <div className="mb-3">{servicio.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{servicio.nombre}</h3>
                <p className="text-sm text-gray-600">Tiempo estimado: {servicio.tiempo}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <FooterConsultoria />
    </>
  )
}
