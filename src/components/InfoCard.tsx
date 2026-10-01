import { Link } from 'react-router-dom'

type InfoCardProps = {
  title: string
  description: string
  linkLabel: string
  to?: string
  href?: string
}

function InfoCard({ title, description, linkLabel, to, href }: InfoCardProps) {
  const linkClasses = 'text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors'

  return (
    <div className="stack-card flex flex-col gap-2 rounded-lg border border-gray-400 bg-gray-200 p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-md">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      {to ? (
        <Link to={to} className={linkClasses}>
          {linkLabel} →
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
          {linkLabel} →
        </a>
      )}
    </div>
  )
}

export default InfoCard
