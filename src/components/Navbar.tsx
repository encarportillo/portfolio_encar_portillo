import { Link } from 'react-router-dom'
import cvPdf from '../docs/Encar Portillo Data Analyst.pdf'

const navLinks = [
    {label: 'Sobre mí', to: '/about-me'},
    { label: 'Portafolio', to: '/portafolio' },
    { label: 'CV', href: cvPdf },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/encar-portillo-3b124211a/' },
    { label: 'GitHub', href: 'https://github.com/encarportillo' },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200">
      <Link to="/" className="text-lg font-semibold text-gray-800">
        HOME
      </Link>

      <ul className="flex items-center gap-8">
        {navLinks.map(({ label, to, href }) => (
          <li key={label}>
            {to ? (
              <Link
                to={to}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
