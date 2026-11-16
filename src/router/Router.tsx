import { createHashRouter } from 'react-router-dom'

import PublicLayout from '../layout/PublicLayout'
import MainPage from '../pages/MainPage'
import AboutMePage from '../pages/AboutMePage'
import PortafolioPage from '../pages/PortafolioPage'
import SkillsPage from '../pages/SkillsPage'
import CertificacionesPage from '../pages/CertificacionesPage'
import EducacionPage from '../pages/EducacionPage'
import TelecomChurnPage from '../projects/telecom-churn'

export const Router = createHashRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'about-me', element: <AboutMePage /> },
      { path: 'portafolio', element: <PortafolioPage /> },
      { path: 'portafolio/telecom-churn', element: <TelecomChurnPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'certificaciones', element: <CertificacionesPage /> },
      { path: 'educacion', element: <EducacionPage /> },
    ],
  },
])
