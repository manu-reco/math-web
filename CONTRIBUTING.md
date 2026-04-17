# Contributing / Como contribuir

Thanks for contributing to MathEdu Web.
Gracias por contribuir a MathEdu Web.

## Scope / Alcance

- EN: This repository contains educational content and interactive activities for math teaching.
- ES: Este repositorio contiene contenido educativo y actividades interactivas para la ensenanza de matematicas.

## Local Setup / Entorno local

1. Install dependencies / Instala dependencias:

```bash
npm ci
```

2. Run the project / Arranca el proyecto:

```bash
npm run dev
```

3. Validate before opening PR / Valida antes de abrir PR:

```bash
npm run lint
npm run build
```

## Content Contributions / Contribuciones de contenido

EN: 
- For new Pildoras articles, follow the full process in CREAR_ARTICULOS.md.
- For new interactive stories, follow CREAR_CUENTOS.md.
- If your change modifies the authoring flow, update those docs in the same PR.

ES: 
- Para nuevos articulos de Pildoras, sigue el proceso completo en CREAR_ARTICULOS.md.
- Para nuevos cuentos interactivos, sigue CREAR_CUENTOS.md.
- Si tu cambio modifica el flujo de creacion, actualiza esos documentos en el mismo PR.

## Pull Request Guidelines / Guia de Pull Requests

EN:
- Keep PRs focused and small.
- Explain clearly the purpose of the change and its impact. 
- Link related issues when available.
- Include screenshots for UI changes.
- Do not include unrelated refactors in the same PR.

ES:
- Las PR deben ser concretas y reducidas.
- Explica con claridad el objetivo del cambio y sus consecuencias.
- Incluye enlaces a temas relacionados, cuando estén disponibles.
- Incluye capturas de pantalla de los cambios en la UI.
- No incluyas refactorizaciones que no estén relacionadas en la misma PR

## Notes on Static Deployment / Notas de despliegue estatico

EN:
- This project is deployed to GitHub Pages from the «out» folder.
- Keep base path compatibility in mind when adding routes or static assets. 

ES: 
- Este proyecto se publica en GitHub Pages desde la carpeta «out».
- Ten en cuenta la compatibilidad de las rutas de base al añadir rutas o recursos estáticos.
