const certifications = [
  {
    name: 'Google Analytics Certification',
    issuer: 'Google Skill Shop',
    href: 'https://skillshop.credential.net/652ccd53-2a3c-41d1-b4c4-493e5147865b?record_view=true'
  },
  {
    name: 'Derive Insights from BigQuery Data',
    issuer: 'Google Cloud',
    href: 'https://www.credly.com/badges/99e1149c-e927-4837-a582-97cdc6544844',
  },
  {
    name: 'Create ML Models with BigQuery ML',
    issuer: 'Google Cloud',
    href: 'https://www.credly.com/badges/cd743327-c831-4fde-9ffd-63a8f0c11fab',
  },
  {
    name: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud',
    href: 'https://www.credly.com/badges/4d4f5a35-a2db-4c86-be89-f0d29fc8d898',
  },
  {
    name: 'PCEP™ – Certified Entry-Level Python Programmer',
    issuer: 'OpenEDG Python Institute',
    href: 'https://verify.openedg.org/?id=5p2R.JJyW.Kctj',
  },

]

function CertificacionesPage() {
  return (
    <div className="max-w-3xl w-full mx-auto px-6 py-16 flex flex-col gap-8 text-gray-700">
      <h1 className="text-3xl font-semibold text-gray-600 text-center">
        Certificaciones
      </h1>

      <div className="flex flex-col gap-4">
        {certifications.map(({ name, issuer, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-left transition-colors hover:bg-gray-100"
          >
            <h2 className="font-medium text-gray-800">{name}</h2>
            <p className="mt-1 text-sm text-gray-600">{issuer}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CertificacionesPage
