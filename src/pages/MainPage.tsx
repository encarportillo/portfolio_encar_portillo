import profileImg from '../images/FotoPerfil.jpg'
import bannerImg from '../images/Header.jpg'
import gitLogo from '../images/gitLogo.png'
import inLogo from '../images/inLogo.png'
import mailLogo from '../images/mailLogo.jpg'
import cvPdf from '../docs/CV_Encar_Portillo_Data_Scientist.pdf'
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
    description: 'Certificado por Google Cloud, Google Analytics y OpenEDG Python Institute.',
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

const cards = leftCards.flatMap((card, index) => [card, rightCards[index]])

function MainPage() {
  return (
    <div className="main-page-shell mx-auto w-full max-w-5xl px-6 py-16">
      <section className="main-profile-card flex flex-col overflow-hidden rounded-lg border border-gray-400 bg-gray-200 shadow-sm md:flex-row">
        <div
          className="h-24 w-full shrink-0 bg-gray-300 bg-cover bg-center md:h-auto md:w-2/5"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-5 text-center md:px-8 md:py-4">
          <img
            src={profileImg}
            alt="Foto de perfil de Encar Portillo"
            className="-mt-14 h-24 w-24 rounded-full border-4 border-gray-50 object-cover shadow-md md:mt-0 md:h-30 md:w-30"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Encar Portillo</h1>
            <p className="text-sm text-gray-600">
              Científico de Datos · Ingeniero en Informática · FullStack Developer
            </p>
          </div>
          {/* <a
            href="mailto:encarportillo@gmail.com"
            className="mt-1 rounded-full bg-gray-800 px-5 py-1.5 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-700"
          >
            Conversemos
          </a> */}
          <div className="mt-1 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/encarportillo"
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
              <img src={gitLogo} alt="GitHub" className="h-7 w-7 object-contain" />
            </a>
            <a
              href="mailto:encarportillo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <img src={mailLogo} alt="Correo electrónico" className="h-7 w-7 object-contain" />
            </a>
          </div>
        </div>
      </section>

      <section className="main-page-card-area" aria-label="Secciones del portafolio">
        <div className="main-page-connector-stem" aria-hidden="true" />
        <div className="main-page-connector-branch" aria-hidden="true" />
        <div className="main-page-card-grid">
          {cards.map((card) => (
            <div className="main-page-card-slot" key={card.title}>
              <InfoCard {...card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MainPage
