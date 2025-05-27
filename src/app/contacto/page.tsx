'use client'

import { Mail, User, MessageSquare } from 'lucide-react'
import FooterConsultoria from '../components/FooterConsultoria'

export default function SeccionContacto() {
    return (
        <>
            <section className="text-black px-6 md:px-16 lg:px-24 py-20 bg-gray-50">
                <div className="max-w-screen-md mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10">Contáctanos</h2>
                    <form
                        action="https://formsubmit.co/TU_CORREO@gmail.com"
                        method="POST"
                        className="space-y-6 text-left"
                    >
                        {/* Nombre */}
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="name">
                                Nombre
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                        </div>

                        {/* Correo */}
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="email">
                                Correo electrónico
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="tucorreo@dominio.com"
                                />
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label className="block mb-1 font-medium" htmlFor="message">
                                Mensaje
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                    placeholder="Cuéntanos sobre tu proyecto o consulta"
                                />
                            </div>
                        </div>

                        {/* Botón */}
                        <button
                            type="submit"
                            className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-900 transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </section>
            <FooterConsultoria />
        </>
    )
}
