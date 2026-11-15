import { Link } from 'react-router-dom'
import businessHypothesesChart from '../images/1_Visualización de Hipótesis de Negocio.png'
import technologyCorrelationChart from '../images/2_Cruce Tecnológico y Matriz de Correlación.png'
import baselineCurvesChart from '../images/3_Análisis de Curvas y Viabilidad Operativa.png'
import precisionRecallChart from '../images/4_Curvas Precision_Recall Baseline vs XGBoost Optimizado.png'
import shapBeeswarmChart from '../images/5_Impacto Global de Variables en la Probabilidad de Churn (SHAP Beeswarm).png'
import shapWaterfallChart from '../images/6_Waterfall Plot para un Cliente Específico en Riesgo.png'

const GITHUB_REPO = 'https://github.com/encarportillo/telecom-churn-intelligence'

const techStack = [
  'Python',
  'Google BigQuery',
  'SQL',
  'Scikit-Learn',
  'Optuna',
  'XGBoost',
  'SHAP',
  'FastAPI',
  'Docker',
  'Streamlit',
]

const executiveMetrics = [
  { value: '26.54%', label: 'de clientes con churn' },
  { value: '$139.1K', label: 'de MRR mensual perdido' },
  { value: '0.6817', label: 'PR-AUC · XGBoost ajustado' },
  { value: '$242.9K', label: 'beneficio neto anual proyectado' },
]

const dataGroups = [
  {
    title: 'Perfil del cliente',
    fields: 'Género, ciudadanía senior, pareja y dependientes',
  },
  {
    title: 'Servicios y relación',
    fields: 'Internet, soporte, seguridad, streaming, contrato y pago',
  },
  {
    title: 'Valor y antigüedad',
    fields: 'Tenure, cargos mensuales y acumulados, CLTV y cohorte',
  },
  {
    title: 'Variables derivadas',
    fields: 'Contrato mensual, conteo VAS y riesgo de fibra sin soporte',
  },
]

const benchmarkModels = [
  {
    name: 'XGBoost ajustado (Optuna)',
    rocAuc: '0.8434',
    prAuc: '0.6817',
    f1: '0.6120',
    decision: 'Mejor resultado en el conjunto de prueba',
    winner: true,
  },
  {
    name: 'Regresión logística',
    rocAuc: '0.8362',
    prAuc: '0.6653',
    f1: '0.6105',
    decision: 'Baseline de referencia',
    winner: false,
  },
  {
    name: 'Random Forest',
    rocAuc: '0.8265',
    prAuc: '0.6067',
    f1: '0.5887',
    decision: 'Configuración por defecto',
    winner: false,
  },
  {
    name: 'XGBoost por defecto',
    rocAuc: '0.8214',
    prAuc: '0.6069',
    f1: '0.5988',
    decision: 'Configuración por defecto',
    winner: false,
  },
]

const architectureSteps = [
  {
    title: 'BigQuery · datos y features',
    description:
      'Consulta de la tabla de clientes enriquecida con variables de ciclo de vida, servicios y señales de riesgo.',
  },
  {
    title: 'Pipeline de ML · predicción explicable',
    description:
      'Preprocesamiento con ColumnTransformer, selección del modelo por PR-AUC y explicación global y por cliente con SHAP.',
  },
  {
    title: 'FastAPI + Docker · servicio de scoring',
    description:
      'API para evaluar clientes de forma individual o por lotes, con validación de datos y niveles de riesgo.',
  },
  {
    title: 'Streamlit · operación y seguimiento',
    description:
      'Dashboard para revisar la cartera, comprender los factores de fuga y probar escenarios de retención.',
  },
]

const roiAssumptions = [
  { label: 'Población objetivo', value: '20% de la cartera · 1,408 clientes' },
  { label: 'Costo de contacto', value: '$15 USD por cliente · $21,120 total' },
  { label: 'Rescate supuesto', value: '30% de retención exitosa' },
  { label: 'Ingresos anuales rescatados', value: '$264,057 USD' },
]

type SectionHeadingProps = {
  number: string
  eyebrow: string
  title: string
  description?: string
}

function SectionHeading({ number, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        {number} · {eyebrow}
      </span>
      <h2 className="mt-1 text-2xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">{description}</p>}
    </div>
  )
}

type ChartFigureProps = {
  src: string
  alt: string
  caption: string
}

function ChartFigure({ src, alt, caption }: ChartFigureProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img src={src} alt={alt} loading="lazy" className="block h-auto max-h-[560px] w-full object-contain" />
      <figcaption className="border-t border-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-600">
        {caption}
      </figcaption>
    </figure>
  )
}

function TelecomChurnPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12 text-gray-700 sm:py-16">
      <Link
        to="/portafolio"
        className="self-start text-sm font-medium text-gray-500 transition-colors hover:text-gray-800"
      >
        ← Volver al portafolio
      </Link>

      <header className="flex flex-col items-center gap-5 text-center">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
          Caso de analítica · Telecomunicaciones
        </span>
        <h1 className="!my-0 text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Telecom Churn Intelligence
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
          Flujo de datos y machine learning
          diseñado para priorizar clientes en riesgo y explicar por qué podrían irse.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Repositorio y solución ↗
          </a>
          <a
            href={`${GITHUB_REPO}/tree/main/notebooks`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Explorar notebooks ↗
          </a>
        </div>

        <div className="mt-4 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {executiveMetrics.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-5"
            >
              <div className="text-2xl font-extrabold tracking-tight text-blue-700">{value}</div>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="01"
          eyebrow="Contexto del cliente"
          title="Resumen ejecutivo"
          description="El análisis parte de una cartera de telecomunicaciones donde la fuga afecta de forma desproporcionada a los ingresos recurrentes. 
          El objetivo fue convertir datos de clientes y servicios en prioridades de retención accionables."
        />

        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900">Problema de negocio detectado</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              De 7,043 clientes analizados, 1,869 habían cancelado. Esa fuga representa el{' '}
              <strong className="text-gray-900">30.50% del MRR</strong>, o{' '}
              <strong className="text-gray-900">$139,130.85 USD mensuales</strong>. Además, los
              clientes que cancelaron pagaban en promedio $74.44 al mes, frente a $61.27 entre
              quienes permanecieron.
            </p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Decisión central
            </span>
            <p className="mt-2 text-sm leading-relaxed text-blue-950">
              Los primeros Insights evaluados del dataset nos aportan las primeras preguntas a considerar:
              <dl>
                <li>¿A quién deberíamos llamar primero?</li>
                <li>¿Por qué un cliente está en riesgo de Churn?</li>
                <li>¿Qué podemos hacer para evitar el Churn?</li>
              </dl>
              <br></br>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-blue-800">
              Para responderlo, combinamos un análisis de la cartera actual con modelos que predicen y explican cada caso. 
              Todo esto acompañado de una estimación realista de lo que podrías recuperar, planteada como una proyección y no como un resultado garantizado.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="02"
          eyebrow="Dataset y metodología"
          title="Análisis de la tabla de clientes"
          description="La tabla de features en BigQuery reúne atributos de clientes, servicios, facturación y churn. 
          El modelado conserva las variables conductuales y excluye identificadores y campos que podrían inducir fuga de información."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '7,043', label: 'registros de clientes' },
            { value: '33', label: 'columnas en la tabla analítica' },
            { value: '0', label: 'valores nulos detectados' },
            { value: '36', label: 'variables tras aplicar One-Hot Encoding' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <p className="mt-1 text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {dataGroups.map(({ title, fields }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{fields}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-sm font-semibold text-gray-900">Diseño de evaluación</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Se usaron 23 predictores (7 numéricos y 16 categóricos) y una partición estratificada
            80/20: 5,634 registros para entrenamiento y 1,409 para prueba. La imputación,
            estandarización y codificación se ajustan dentro del pipeline; se excluyeron
            identificadores, geografía y CLTV <b>(Customer Lifetime Value)</b> del conjunto predictivo.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="03"
          eyebrow="Insights de negocio"
          title="Visualización de Hipótesis de Negocio"
          description="El EDA conecta patrones de contrato, antigüedad y servicio con hipótesis de intervención. 
          Son asociaciones que se generan en este dataset que por sí solas no prueban causalidad."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
              Riesgo por tipo de contrato
            </span>
            <br></br>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              El primer riesgo detectado es la falta de permanencia, cerca del 43% de los contratos mensuales termina en churn; la tasa cae a ~11% en
              contratos anuales y ~3% en contratos de dos años.
            </p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Adopción de servicios adicionales
            </span>
            <br></br>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Los servicios de valor pueden crear adhesión, al observar el gráfico se muestra una tasa alta en clientes con un solo servicio adicional (~46%) y
              una tendencia menor de churn al sumar varios. Sin emabrgo scnviene revisar el paquete y el soporte, no
              asumir que agregar cualquier servicio reduce el churn.
            </p>
          </article>
          <article className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Ciclo de vida detectado
            </span>
            <br></br>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              El onboarding es una ventana crítica, la mayor pérdida de usuarios ocurre durante su primer año (~48%) de churn;
              mientras que quienes logran superar esa etapa inicial tienden a quedarse por mucho tiempo, entre clientes con 49 meses o más,
              la tasa cae por debajo del 10%.
            </p>
          </article>
        </div>

        <ChartFigure
          src={businessHypothesesChart}
          alt="Tres gráficos de churn por tipo de contrato, cantidad de servicios adicionales y cohorte de antigüedad."
          caption="La mayor brecha aparece entre contratos mensuales y de largo plazo; el riesgo también es más alto durante el primer año de relación."
        />

        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-700">
              Cruce Tecnológico y Análisis de Correlación
            </span>
            <br></br>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Se detecta que la fibra sin soporte destaca como foco de fricción, en el EDA, la fuga ronda el 49% para fibra óptica sin soporte técnico y baja a ~22%
              cuando hay soporte. La interacción <code>high_risk_fiber_no_support</code> muestra
              una asociación positiva con churn (correlación +0.352), detrás del contrato mensual
              (+0.405).
            </p>
          </div>
          <ChartFigure
            src={technologyCorrelationChart}
            alt="Tasa de churn por tipo de internet y soporte técnico, junto con correlaciones lineales de variables frente al churn."
            caption="El contraste fibra/soporte y la matriz de correlación ayudaron a definir una señal de riesgo específica para el pipeline."
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="04"
          eyebrow="Performance del producto"
          title="Optimizar el ranking mejora la priorización comercial"
          description="Como el churn es una clase minoritaria (26.54%), la comparación prioriza PR-AUC: permite valorar qué tan bien se identifican clientes en riesgo sin depender de una accuracy engañosa."
        />

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 font-semibold">Modelo</th>
                  <th className="px-4 py-3 font-semibold">ROC-AUC</th>
                  <th className="px-4 py-3 font-semibold">PR-AUC</th>
                  <th className="px-4 py-3 font-semibold">F1</th>
                  <th className="px-4 py-3 font-semibold">Lectura</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkModels.map(({ name, rocAuc, prAuc, f1, decision, winner }) => (
                  <tr
                    key={name}
                    className={`border-b border-gray-100 ${winner ? 'bg-emerald-50' : ''}`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
                    <td className="px-4 py-3 text-gray-600">{rocAuc}</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{prAuc}</td>
                    <td className="px-4 py-3 text-gray-600">{f1}</td>
                    <td className="px-4 py-3 text-gray-600">{decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="text-2xl font-bold text-gray-900">+1.64 pp</div>
            <p className="mt-1 text-sm text-gray-600">de PR-AUC frente a la regresión logística</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="text-2xl font-bold text-gray-900">50</div>
            <p className="mt-1 text-sm text-gray-600">trials Optuna con validación cruzada estratificada de 5 folds</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="text-2xl font-bold text-gray-900">0.6877</div>
            <p className="mt-1 text-sm text-gray-600">mejor PR-AUC promedio durante el tuning</p>
          </div>
        </div>

        <ChartFigure
          src={baselineCurvesChart}
          alt="Curvas ROC y Precision-Recall del benchmark inicial para regresión logística, Random Forest y XGBoost."
          caption="El benchmark inicial estableció la regresión logística como referencia; la curva PR pone en contexto el baseline aleatorio de 26.54%."
        />
        <ChartFigure
          src={precisionRecallChart}
          alt="Comparación de las curvas Precision-Recall del baseline de regresión logística y XGBoost ajustado con Optuna."
          caption="XGBoost ajustado alcanza 0.6817 de PR-AUC en prueba frente a 0.6653 del baseline. En el tramo inicial, la curva reporta precisión cercana al 100% hasta ~14% de recall; ese valor es cobertura de los casos de churn, no porcentaje de toda la cartera contactada."
        />
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="05"
          eyebrow="Explicabilidad del modelo"
          title="Análisis de explicabilidad del modelo XGBoost con SHAP"
          description="A través de SHAP podemos observar qué muestra de atributos desplazan cada predicción. 
          Éstas explicaciones ayudan a diseñar y auditar intervenciones por lo que no se recomienda que se interpreten  como causas demostradas."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Señales globales</h3>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              El contrato mensual, la antigüedad, los cargos mensuales, servicios adicionales (SVA) y la señal de
              fibra sin soporte aparecen entre los principales factores que determinan el churn. La antigüedad y contar con
              (SVA) suelen empujar la predicción hacia un menor riesgo de churn; mientras que cargos altos y un tipo de contrato
              mensual, empujan la predicción hacia un mayor riesgo de churn.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Ejemplo de un caso individual</h3>
            <br></br>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              En el ejemplo del conjunto de prueba el cliente recibió una probabilidad de churn de 92.13% y
              efectivamente el cliente había cancelado. Factores como la poca antigüedad, el tipo de contrato mensual, el alto cargo del servicio
              y la fibra sin soporte elevaron su score; el waterfall permite revisar la suma de
              contribuciones.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <ChartFigure
            src={shapBeeswarmChart}
            alt="Gráfico SHAP beeswarm con la importancia global y dirección del impacto de las variables sobre el riesgo de churn."
            caption="Lectura global: variables más importantes y cómo sus valores empujan la salida del modelo hacia mayor o menor riesgo."
          />
          <ChartFigure
            src={shapWaterfallChart}
            alt="Gráfico SHAP waterfall que descompone la predicción de 92.1% de churn de un cliente de prueba."
            caption="Lectura local: un cliente concreto con predicción de 92.1%, explicada desde el valor base hasta el score final."
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="06"
          eyebrow="Producto y operación"
          title="Resumen del flujo end-to-end de la solución propuesta"
          description="La solución conecta la preparación de datos y la explicación del modelo con superficies de operación para analistas y equipos de retención."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {architectureSteps.map(({ title, description }, index) => (
            <article key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeading
          number="07"
          eyebrow="Impacto estimado"
          title="Proyección de retención: qué esperar antes de ampliar la estrategia"
          description="Esta simulación estima el impacto financiero que se obtendría al lograr retener efectivamente a los posibles casos de cancelaciones.
          Sin embargo, no se trata de ingresos garantizados, sino de un cálculo basado en nuestro alcance de contacto, el presupuesto de campaña y el porcentaje de clientes que logremos recuperar."
        />

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-gray-900">Supuestos del escenario anual</h3>
              <dl className="mt-4 flex flex-col divide-y divide-gray-200 text-sm">
                {roiAssumptions.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-gray-500">{label}</dt>
                    <dd className="text-right font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col justify-center gap-4 lg:col-span-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Beneficio neto proyectado
                </span>
                <div className="mt-1 text-3xl font-extrabold tracking-tight text-emerald-700">
                  $242,937
                </div>
                <p className="mt-1 text-xs text-emerald-800">USD · escenario estimado</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">
                  ROI proyectado
                </span>
                <div className="mt-1 text-3xl font-extrabold tracking-tight text-blue-700">
                  &gt; 1,000%
                </div>
                <p className="mt-1 text-xs text-blue-800">sujeto a validar los supuestos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Acciones que se desprenden del análisis</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-gray-600 sm:grid-cols-2">
            <li>• Probar beneficios de permanencia para clientes mes a mes.</li>
            <li>• Priorizar acompañamiento durante el primer año y el onboarding.</li>
            <li>• Revisar soporte y experiencia en clientes de fibra con cargos altos.</li>
            <li>• Medir una campaña piloto antes de atribuirle el ROI proyectado.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default TelecomChurnPage
