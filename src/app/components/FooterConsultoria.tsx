'use client'

export default function FooterConsultoria() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-24 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-screen-xl mx-auto">
        {/* Logo o nombre de la empresa */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-semibold">PU Consulting</h3>
        </div>

        {/* Frase institucional */}
        <div className="md:w-1/3 flex items-start justify-start md:justify-center">
          <p className="text-base md:text-lg text-white/80">
            Construyendo los negocios del mañana.
          </p>
        </div>

        {/* Contacto y ubicación */}
        <div className="md:w-1/3 space-y-6">
          <div>
            <h4 className="text-sm font-bold uppercase mb-1">Contáctanos</h4>
            <p className="text-sm">info@puconsulting.com</p>
            <p className="text-sm">+52 1 55 1234 5678</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase mb-1">Nuestra ubicación</h4>
            <p className="text-sm">San Pedro Garza García, N.L.</p>
            <p className="text-sm">México</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
