import { useState } from 'react'
import pythonLogo from '../images/pythonLogo.webp'
import sqlLogo from '../images/sqlLogo.jpg'
import bigqueryLogo from '../images/BigqueryLogo.webp'
import javaLogo from '../images/Java-logo.png'
import springBootLogo from '../images/springbootlogo.png'
import powerbiLogo from '../images/PowerbiLogo.jpg'
import dataStudioLogo from '../images/DataStudioLogo.jpg'
import excelLogo from '../images/excelLogo.webp'
import reactLogo from '../images/reactlogo.webp'
import gitLogo from '../images/gitLogo.png'
import typelogo from '../images/typelogo.webp'
import airflowlogo from '../images/airflowLogo.png'
import dockerlogo from '../images/dockerLogo.png'
import fastapilogo from '../images/FastAPILogo.png'
import scikitlearnlogo from '../images/scikitLearnLogo.png'
import xgboostlogo from '../images/XGBoostLogo.png'


type SkillLogo = {
  name: string
  src?: string
  mark?: string
}

type SkillCategory = {
  title: string
  logos: SkillLogo[]
}

const stack: SkillCategory[] = [
  {
    title: 'Data Science',
    logos: [
      { name: 'Python', src: pythonLogo },
      { name: 'SQL', src: sqlLogo },
      { name: 'BigQuery', src: bigqueryLogo },
    ],
  },
  {
    title: 'ML & MLOps',
    logos: [
      { name: 'Scikit-Learn', src: scikitlearnlogo },
      { name: 'XGBoost', src: xgboostlogo },
      { name: 'FastAPI', src: fastapilogo },
      { name: 'Docker', src: dockerlogo },
      { name: 'Airflow', src: airflowlogo },
    ],
  },
  {
    title: 'Herramientas',
    logos: [
      { name: 'Power BI', src: powerbiLogo },
      { name: 'Data Studio', src: dataStudioLogo },
      { name: 'Excel', src: excelLogo },
      { name: 'Git', src: gitLogo },
    ],
  },
  {
    title: 'Backend',
    logos: [
      { name: 'Java', src: javaLogo },
      { name: 'Spring Boot', src: springBootLogo },
    ],
  },
  {
    title: 'Frontend',
    logos: [
      { name: 'React', src: reactLogo },
      { name: 'TypeScript', src: typelogo },
    ],
  },
]

function SkillsPage() {
  const [expandedStack, setExpandedStack] = useState<boolean[]>(() => stack.map(() => false))

  const toggleStack = (index: number) => {
    setExpandedStack((prev) => prev.map((value, i) => (i === index ? !value : value)))
  }

  return (
    <div className="max-w-4xl w-full mx-auto px-6 py-16 flex flex-col gap-6 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        Mi Stack Tecnológico
      </h1>
      <p className="text-center text-gray-600">
        Haz clic en cada card para ver las herramientas que domino en esa área.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {stack.map(({ title, logos }, index) => {
          const isExpanded = expandedStack[index]
          return (
            <button
              key={title}
              type="button"
              onClick={() => toggleStack(index)}
              className="stack-card w-full rounded-lg border border-gray-200 bg-gray-50 p-6 text-left transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-medium text-gray-800">{title}</h3>
                <div className="flex flex-wrap justify-end gap-1">
                  {logos.map(({ name, src, mark }) =>
                    src ? (
                      <img
                        key={name}
                        src={src}
                        alt={name}
                        className="h-10 w-10 rounded-full border-2 border-gray-50 bg-white object-contain p-1 shadow-sm"
                      />
                    ) : (
                      <span
                        key={name}
                        aria-label={name}
                        title={name}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-50 bg-blue-100 text-[10px] font-bold text-blue-700 shadow-sm"
                      >
                        {mark}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col gap-4">
                  <div className="flex flex-wrap justify-center gap-6">
                    {logos.map(({ name, src, mark }) => (
                      <div key={name} className="flex flex-col items-center gap-2">
                        {src ? (
                          <img src={src} alt={name} className="h-24 w-24 object-contain" />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700"
                          >
                            {mark}
                          </span>
                        )}
                        <span className="text-xs text-gray-600">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsPage
