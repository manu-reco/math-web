# MathEdu Web

ES: Plataforma educativa para formacion en didactica de matematicas (Infantil y Primaria).
EN: Educational platform for math teaching training (Early Childhood and Primary).

- Live site: https://manu-reco.github.io/math-web
- Framework: Next.js 16 (App Router)
- Target: static export for GitHub Pages

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- Zod
- ESLint 9

## Quick Start

EN
1. Install dependencies: `npm ci`
2. Start local dev server: `npm run dev`
3. Open: `http://localhost:3000`

## Scripts

- `npm run dev` - local development
- `npm run build` - production build + static export to `out/`
- `npm run start` - run production server locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
	app/               # routes, layout, sitemap, robots
	components/        # reusable UI and domain components
	data/              # pildoras, activities, stories data
	hooks/             # custom React hooks
	lib/               # SEO, URL, assets, validation helpers
	types/             # TypeScript types
public/              # static assets
.github/workflows/   # CI/CD to GitHub Pages
```

## Deployment (GitHub Pages)

Deployment runs automatically on push to `main`.

- Workflow: `.github/workflows/deploy-pages.yml`
- Artifact: `out/`
- Next config uses:
	- `output: "export"`
	- `basePath: "/math-web"`
	- custom image loader for prefixed assets

## Environment Variables

Optional / Opcionales:

- `NEXT_PUBLIC_SITE_URL` (default: `https://manu-reco.github.io`)
- `NEXT_PUBLIC_BASE_PATH` (default: `/math-web`)

## Content Authoring Docs

- `CREAR_ARTICULOS.md` - crear nuevos articulos de pildoras
- `CREAR_CUENTOS.md` - crear cuentos interactivos en JSON

## Contributing

EN: If you want to contribute, start here:

- `CONTRIBUTING.md` (PR workflow, checks, and project conventions)
- Follow `CREAR_ARTICULOS.md` and `CREAR_CUENTOS.md` for content changes
- If you change the content workflow, update those docs in the same PR

ES: Si quieres colaborar, empieza por aquí:
- `CONTRIBUTING.md` (PR workflow, validaciones y convenciones del proyecto)
- Sigue `CREAR_ARTICULOS.md` y `CREAR_CUENTOS.md` para cambios en estos apartados
- Si cambias el workflow del contenidos, actualiza esos documentos en la misma PR.

## License

All rights reserved.
