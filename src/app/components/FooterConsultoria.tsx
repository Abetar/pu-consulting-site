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
            <p className="text-sm"> <a href="mailto:jr.puconsulting@gmail.com">jr.puconsulting@gmail.com</a></p>
            <p className="text-sm"> <a href="mailto:ug.puconsulting@gmail.com">ug.puconsulting@gmail.com</a></p>
            <p className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-neutral-200 transition w-fit"><a href="https://www.linkedin.com/company/p-u-consulting/?viewAsMember=true" target="_blank">Linkedin</a></p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase mb-1">Nuestra ubicación</h4>
            <p className="text-sm">Epigmenio Garcia 125, Valle de Vasconcelos. San Pedro Garza Garcia,  c.p. 66238.</p>
            <p className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold shadow hover:bg-neutral-200 transition w-fit"><a href="https://maps.app.goo.gl/Bi9VavJps7G3F8dD9" target="_blank">Google Maps</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
