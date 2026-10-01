import { Link } from 'react-router-dom'

function AboutMePage() {
  return (
    <div className="max-w-4xl w-full mx-auto px-6 py-16 flex flex-col gap-14 text-gray-700">

      <section className="flex flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-200">
          Data Science & Analytics · Cloud Architecture · Full Stack
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Hola, soy Encar Portillo 👋
        </h1>
        <h2 className="text-lg sm:text-xl font-medium text-gray-600 max-w-2xl">
          Transformo grandes volúmenes de datos e infraestructuras dispersas en decisiones estratégicas de alto impacto.
        </h2>
      </section>

      <section className="flex flex-col gap-6 max-w-3xl mx-auto leading-relaxed text-gray-600 text-base sm:text-lg">
        <p>
          Mi entrada al mundo de la tecnología tiene un origen que define mi forma de trabajar:
          cuento con una formación previa en <strong className="text-gray-900 font-semibold">Educación</strong>, 
          lo que me otorgó una capacidad pedagógica y estructurada única para el 
          <em className="text-gray-800"> Data Storytelling</em> y la alineación entre equipos técnicos y directivos.
        </p>
        <p>
          Actualmente curso el tramo final de <strong className="text-gray-900 font-semibold">Ingeniería en Informática 
          (especialización Ciencia de Datos) en Duoc UC</strong>. No me limito a entrenar modelos o escribir scripts aislados: 
          diseño arquitecturas extremo a extremo (ETL/ELT en entornos Cloud como GCP/BigQuery), desarrollo APIs e interfaces, 
          y aseguro que cada insight técnico responda directamente a una necesidad real del negocio.
        </p>
      </section>

      <section className="flex flex-col gap-8 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Impacto comprobado en la operación</h2>
          <p className="text-sm text-gray-500 mt-1">Resultados medibles combinando analítica avanzada, automatización y visión de negocio</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Control Operativo</span>
              <div className="mt-2 text-3xl font-extrabold text-blue-600 tracking-tight">18% → 3.4%</div>
              <h3 className="mt-1 font-semibold text-gray-800">Reducción de anomalías</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Trazabilidad automatizada en tiempo real y alertas predictivas para equipos en tránsito, 
                logrando un <strong className="text-gray-800 font-semibold">ahorro comprobado de +$600M CLP</strong> en activos gestionados y controlados.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Eficiencia & SLA</span>
              <div className="mt-2 text-3xl font-extrabold text-emerald-600 tracking-tight">-87%</div>
              <h3 className="mt-1 font-semibold text-gray-800">Tiempos de procesamiento</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Transformación de procesos manuales de 4–6 horas a ejecuciones automáticas en minutos mediante Python, SQL y orquestado en Airflow, 
                agilizando la toma de decisiones con un impacto estimado en <strong className="text-gray-800 font-semibold">+$200M CLP</strong>.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Integración Técnica</span>
              <div className="mt-2 text-3xl font-extrabold text-indigo-600 tracking-tight">End-to-End</div>
              <h3 className="mt-1 font-semibold text-gray-800">Ciclo completo del dato</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Capacidad integral para desarrollar la ingesta y modelado de datos en BigQuery (GCP), orquestación a través de Airflow, disponibilizar capas semánticas en Power BI / Looker Studio y desplegar interfaces analíticas full-stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Explora mi trabajo</h2>
        <p className="max-w-xl text-gray-600 text-sm sm:text-base">
          Profundiza en la implementación técnica de mis proyectos, las tecnologías que domino o las certificaciones cloud que respaldan mi metodología.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/portafolio"
            className="rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Ver proyectos
          </Link>
          <Link
            to="/skills"
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Stack tecnológico
          </Link>
          <Link
            to="/certificaciones"
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Certificaciones
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-xl font-semibold text-gray-800">¿Conversamos?</h3>
        <p className="text-gray-600 max-w-md">
          Siempre estoy abierto a discutir nuevas oportunidades de negocio, proyectos de ingeniería de datos o desafíos de automatización analítica.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/encarportillo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            LinkedIn ↗
          </a>
          <span className="text-gray-300">·</span>
          <a
            href="mailto:encarportillo@gmail.com"
            className="text-sm font-medium text-gray-800 hover:underline"
          >
            encarportillo@gmail.com
          </a>
        </div>
      </section>

      <section className="text-center text-xs sm:text-sm text-gray-400 border-t border-gray-100 pt-6">
        ⚡ <span className="font-medium text-gray-500">Dato curioso:</span> Encuentro estereogramas en segundos 👁️‍🗨️ y me mantengo enfocado combinando boxeo y burpees.
      </section>
    </div>
  )
}

export default AboutMePage