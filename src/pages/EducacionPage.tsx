const education = [
  {
    school: 'Duoc UC',
    location: 'Santiago, Chile',
    degree: 'Ingeniería en Informática (En curso)',
    period: '2024 – Actualidad',
    description:
      'Foco académico en Ciencia de Datos, Modelamiento de Bases de Datos, Estadística y Arquitectura de Software.',
  },
  {
    school: 'UNERMB',
    location: '',
    degree: 'Licenciatura en Educación (Graduado)',
    period: '2007 – 2012',
    description:
      'Habilidades pedagógicas y de comunicación estructurada aplicadas a la facilitación de datos (Data Storytelling) y negociación con stakeholders.',
  },
]

function EducacionPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-6 py-16 flex flex-col gap-8 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">Educación</h1>

      <div className="flex flex-col gap-6">
        {education.map(({ school, location, degree, period, description }) => (
          <div
            key={school}
            className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-left"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold text-gray-800">
                {school}
                {location && <span className="font-normal text-gray-500"> · {location}</span>}
              </h2>
              <span className="text-sm text-gray-500">{period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-700">{degree}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducacionPage
