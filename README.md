# Amiguitos del Rey — Landing page

Sitio web de la Unidad Educativa de Educación Inicial **Amiguitos del Rey**, construido con
Angular 22 (standalone, signals, SCSS).

## Requisitos

- Node.js 20.19+ o 22.12+ (probado con Node 24)
- npm 10+

## Desarrollo

```bash
npm install
npm start
```

Abre `http://localhost:4200`.

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/amiguitos-del-rey/browser`.

## Estructura

```
src/
├── app/
│   ├── core/
│   │   └── site-content.ts        # Todo el contenido editable (textos, programas, FAQ…)
│   ├── features/home/
│   │   ├── home.ts                # Página que compone las secciones
│   │   └── sections/              # hero, stats, about, programs, methodology, day,
│   │                              # gallery, testimonials, team, admissions, faq, contact, social
│   ├── shared/                    # header, footer, logo, icon, directiva reveal
│   ├── app.ts / app.html          # Shell: header + router-outlet + footer + WhatsApp
│   └── app.routes.ts
├── styles.scss                    # Tokens de diseño, utilidades y estilos globales
└── index.html                     # SEO, fuentes, JSON-LD
public/
├── favicon.svg
└── img/                           # Ilustraciones SVG propias
```

## Personalización rápida

| Qué cambiar | Dónde |
| --- | --- |
| Textos, programas, testimonios, FAQ | `src/app/core/site-content.ts` |
| Paleta y tipografías | `src/styles.scss` (`:root`) |
| Logo | `src/app/shared/logo/logo.html` + `public/favicon.svg` |
| Imágenes | `public/img/` |
| Metadatos / SEO | `src/index.html` |

## Estado

Landing page funcional. El formulario de contacto aún no envía a un backend (ver `TODO` en
`contact.ts`). El teléfono y la dirección ya son los reales; el correo, las cifras, los
testimonios y el equipo siguen siendo de ejemplo. Las redes sociales están maquetadas con el
estado «Próximamente»: al cargar las URLs en `SOCIALS` (`site-content.ts`) las tarjetas se
convierten en enlaces automáticamente.

Ver `PLAN.md` para el roadmap del sistema completo.
