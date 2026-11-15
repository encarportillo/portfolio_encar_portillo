# Portafolio de Encar Portillo

Portafolio personal desarrollado con React, TypeScript y Vite para presentar proyectos de ciencia de datos, analítica y desarrollo de software.

## Contenido

- **Inicio**: presentación y acceso a las secciones del portafolio.
- **Sobre mí**: perfil profesional.
- **Sobre mí**: resumen completo de mi experiencia profesional y formación académica.
- **Proyectos**: proyectos destacados.
- **Skills, certificaciones y educación**: herramientas, credenciales y formación.

## Tecnologías

- React 19 y TypeScript
- Vite 8
- React Router 7
- Tailwind CSS 4
- ESLint

## Requisitos

- Node.js 22.12 o posterior (o Node.js 20.19 o posterior)
- npm

## Desarrollo local

```bash
npm ci
npm run dev
```

Vite mostrará la dirección local en la terminal, normalmente `http://localhost:5173`.

## Validación y build

```bash
npm run lint
npm run build
npm run preview
```

El build de producción se genera en `dist/`. `npm run preview` sirve localmente ese build.

## Despliegue en GitHub Pages

En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**. El workflow existente compila la aplicación con Vite y publica `dist/` en cada push a `main`, o manualmente desde la pestaña **Actions** mediante **Run workflow**.

Si el despliegue falla con un error 404 al crear el deployment, verifica que GitHub Pages esté habilitado y que la fuente sea **GitHub Actions**; después vuelve a ejecutar el workflow. La opción **Deploy from a branch** publica el código fuente con Jekyll, no el build de Vite.

## Estructura del proyecto

```text
src/
├── components/     # Componentes compartidos
├── images/         # Imágenes y gráficos de los proyectos
├── layout/         # Layout público
├── pages/          # Páginas principales del portafolio
├── projects/       # Páginas de detalle de proyectos
└── router/         # Rutas de React Router
public/             # Archivos estáticos servidos sin transformación
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Ejecuta el chequeo TypeScript y crea el build |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Ejecuta ESLint |

## Licencia y contacto

Este repositorio presenta proyectos y materiales del portafolio personal. Para consultas profesionales, visita los enlaces de contacto publicados en el sitio.
