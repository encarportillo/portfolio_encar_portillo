const projects = [
  {
    name: 'Cloud-Native ML Pipeline',
    description:
      'Implementación de modelos de regresión y clasificación directamente en BigQuery.',
    icon: '☁️',
    href: 'https://github.com/encarportillo/ML-cloud-BQ-casos-de-uso.git',
  },
  {
    name: 'Sales & Marketing Dataset Transformation',
    description:
      'Transformación y estandarización de un dataset sucio de ventas/marketing con notebooks reproducibles y métricas de validación.',
    icon: '📊',
    href: 'https://github.com/encarportillo/sales-marketing-dataset-transformation.git',
  },
  {
    name: 'San Valentín',
    description: 'Un regalo de San Valentín al mejor estilo geek para esa persona especial.',
    icon: '💌',
    href: 'https://github.com/encarportillo/SanValentin.git',
  },
]

function PortafolioPage() {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-800 py-10 px-6 text-center">
        <h1 className="!text-white text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
          Proyectos Realizados
        </h1>
      </div>

      <div className="max-w-5xl w-full mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, description, icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-40 items-center justify-center bg-gray-200 text-5xl">
                {icon}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5 text-left">
                <h2 className="font-semibold text-gray-800">{name}</h2>
                <p className="text-sm leading-relaxed text-gray-600">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortafolioPage
