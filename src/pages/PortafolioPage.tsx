import { Link } from 'react-router-dom'

const projects = [
  {
    name: 'Telecom Churn Intelligence',
    description:
      'Pipeline ML end-to-end con XGBoost, Optuna y SHAP para predecir el churn y proteger el MRR. FastAPI, Docker y dashboard Streamlit.',
    icon: '📡',
    to: '/portafolio/telecom-churn',
  }
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
          {projects.map(({ name, description, icon, to }) => {
            const cardClasses =
              'flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm transition-shadow hover:shadow-md'
            const cardContent = (
              <>
                <div className="flex h-40 items-center justify-center bg-gray-200 text-5xl">
                  {icon}
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 text-left">
                  <h2 className="font-semibold text-gray-800">{name}</h2>
                  <p className="text-sm leading-relaxed text-gray-600">{description}</p>
                </div>
              </>
            )

            return to ? (
              <Link key={name} to={to} className={cardClasses}>
                {cardContent}
              </Link>
            ) : (
              <a
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PortafolioPage
