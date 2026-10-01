import gitLogo from '../images/gitLogo.png'
import inLogo from '../images/inLogo.png'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-6 px-6">
      <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
        <p>&copy; {year} <i>Encar Portillo | Data Scientist.</i> Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/encarportillo/encarportillo"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
          >
            <img src={gitLogo} alt="GitHub" className="h-5 w-5 object-contain" />

          </a>
          <a
            href="https://www.linkedin.com/in/encar-portillo-3b124211a/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
          >
            <img src={inLogo} alt="LinkedIn" className="h-5 w-5 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
