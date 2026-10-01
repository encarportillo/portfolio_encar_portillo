import profileImg from '../images/FotoPerfil.jpg'
import bannerImg from '../images/Header.jpg'
import gitLogo from '../images/gitLogo.png'
import inLogo from '../images/inLogo.png'
import mailLogo from '../images/mailLogo.jpg'
import cvPdf from '../docs/Encar Portillo Data Analyst.pdf'
import InfoCard from '../components/InfoCard'

const leftCards = [
  {
    title: 'Sobre mí',
    description: 'Ingeniero en Informática especializado en Ciencia de Datos y BI.',
    linkLabel: 'Lee mi historia',
    to: '/about-me',
  },
  {
    title: 'Proyectos',
    description: 'Una colección de mis trabajos en ciencia de datos, BI y machine learning.',
    linkLabel: 'Ver todos los proyectos',
    to: '/portafolio',
  },
  {
    title: 'Certificaciones',
    description: 'Certificado por Google Cloud, OpenEDG Python Institute y LinkedIn Learning.',
    linkLabel: 'Ver certificados',
    to: '/certificaciones',
  },
]

const rightCards = [
  {
    title: 'Currículum',
    description: 'Un resumen completo de mi experiencia profesional y formación académica.',
    linkLabel: 'Ver currículum',
    href: cvPdf,
  },
  {
    title: 'Core Skills',
    description: 'Python, SQL, BigQuery, Power BI, Java, Spring Boot, React y más.',
    linkLabel: 'Ver stack completo',
    to: '/skills',
  },
  {
    title: 'Educación',
    description: 'Ingeniería en Informática (Duoc UC) y Licenciatura en Educación (UNERMB).',
    linkLabel: 'Ver detalles',
    to: '/educacion',
  },
]

function MainPage() {
  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-16">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center">
        <div className="flex flex-1 flex-col gap-6 lg:max-w-xs">
          {leftCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="flex flex-1 flex-col items-center overflow-hidden rounded-lg border border-gray-400 bg-gray-200 shadow-sm lg:max-w-sm">
          <div
            className="h-28 w-full bg-gray-300 bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
          />
          <div className="flex flex-1 flex-col items-center gap-3 px-6 pb-8 text-center">
            <img
              src={profileImg}
              alt="Foto de perfil de Encar Portillo"
              className="-mt-14 h-28 w-28 rounded-full border-4 border-gray-50 object-cover shadow-md"
            />
            <h1 className="text-2xl font-semibold text-gray-800">Encar Portillo</h1>
            <p className="text-sm text-gray-600">
              Científico de Datos · Ingeniero en Informática · FullStack Developer
            </p>
            <a
              href="mailto:encarportillo@gmail.com"
              className="mt-2 rounded-full bg-gray-800 px-6 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-700"
            >
              Conversemos
            </a>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/encar-portillo-3b124211a/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <img src={inLogo} alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://github.com/encarportillo"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <img src={gitLogo} alt="GitHub" className="h-8 w-8 object-contain" />
              </a>
              <a
                href="mailto:encarportillo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <img src={mailLogo} alt="GitHub" className="h-8 w-8 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:max-w-xs">
          {rightCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage

