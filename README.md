# Nuvant

Sitio web de **Nuvant**, consultora tecnológica con sede en **Monterrey, Nuevo León, México**.

**Slogan:** *Soluciones con sentido de negocio.*

Ofrecemos:

- Consultoría e implementación de **Salesforce** (Sales Cloud, Service Cloud, Field Service, Marketing Cloud, Agentforce)
- **Desarrollo de software a medida**
- Administración, optimización y acompañamiento con equipo con experiencia en estas plataformas

> Este proyecto **no afirma** ser Salesforce Partner. La experiencia se comunica por trayectoria, certificaciones y dominio de productos.

---

## Créditos de la plantilla

Este sitio parte de la plantilla **[Luna Landing](https://github.com/JimmyCamus/luna-landing)** de **Jeremy Camus (JimmyCamus)**, licenciada bajo **MIT**.

Se reutilizó la base en **Astro + Tailwind + contenido vía JSON**, adaptada y reescrita por completo para la marca y el contenido de Nuvant.

El archivo `LICENSE` del repositorio conserva el aviso de copyright original de la plantilla, como exige la licencia MIT.

---

## Stack

| Tecnología | Uso |
|------------|-----|
| [Astro 4](https://astro.build/) | Sitio estático |
| TypeScript | Tipado |
| Tailwind CSS | Estilos |
| Rubik Variable | Tipografía |

---

## Requisitos

- **Node.js** 18 o superior (recomendado LTS)
- **npm** (o pnpm, si lo prefieres)

---

## Cómo levantar el proyecto

### 1. Clonar e instalar

Este proyecto usa **npm** (archivo `package-lock.json`). No uses `pnpm-lock.yaml` en el repo: Vercel lo detecta y puede fallar el deploy.

```bash
git clone https://github.com/josuemdzmt/Nuvant.git
cd Nuvant
npm install
```

### 2. Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:4321/](http://localhost:4321/).

Rutas principales:

| Ruta | Descripción |
|------|-------------|
| `/` | Landing |
| `/privacidad` | Aviso de privacidad |

### 3. Build de producción

```bash
npm run build
```

Genera el sitio en `dist/` (HTML comprimido, JS/CSS minificados, sin source maps).

### 4. Previsualizar el build

```bash
npm run preview
```

### Otros comandos

```bash
npm run lint    # ESLint
```

---

## Estructura importante

```
src/
  data/
    landing.json      # Copy de la landing (textos, links, servicios, casos…)
    privacy.json      # Contenido del aviso de privacidad
  pages/
    index.astro       # Home
    privacidad.astro  # Aviso de privacidad
  sections/           # Secciones de la landing
  components/         # Componentes reutilizables
  config/             # Tipos TypeScript
public/
  brands/             # Iconos de productos Salesforce
  logo-nuvant.svg
  favicon.svg
```

### Editar contenido

Casi todo el texto de la landing se edita en:

- [`src/data/landing.json`](src/data/landing.json) — hero, servicios, expertise, casos, contacto, footer, email, etc.
- [`src/data/privacy.json`](src/data/privacy.json) — aviso de privacidad

Colores de marca en [`tailwind.config.mjs`](tailwind.config.mjs) (`primary`, `secondary`).

URL del sitio (sitemap / SEO) en [`astro.config.mjs`](astro.config.mjs) → `site`.

---

## Contacto (sitio)

- **Ubicación:** Monterrey, Nuevo León, México  
- **Email:** contacto@nuvant.mx  

Actualiza el correo en `landing.json` y `privacy.json` cuando tengas el definitivo.

---

## Despliegue

El output es **estático** (`dist/`). Puedes publicarlo en Vercel, Netlify, Cloudflare Pages, GitHub Pages u otro hosting estático.

1. `npm run build`
2. Publica la carpeta `dist/`
3. Configura el dominio y actualiza `site` en `astro.config.mjs`

---

## Licencia

- Plantilla base: **MIT** — Copyright (c) 2024 Jeremy Camus ([Luna Landing](https://github.com/JimmyCamus/luna-landing)).
- Contenido, marca e iconografía propios de **Nuvant** (salvo logos de terceros / Salesforce usados con fines de referencia de experiencia).
