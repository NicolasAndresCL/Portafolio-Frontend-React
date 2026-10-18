# Portafolio Frontend — la cara de mi portafolio, en React con tres temas

[![CI](https://github.com/NicolasAndresCL/Portafolio-Frontend-React/actions/workflows/ci.yml/badge.svg)](https://github.com/NicolasAndresCL/Portafolio-Frontend-React/actions/workflows/ci.yml)
![Versión](https://img.shields.io/badge/versi%C3%B3n-2.0.1-blue)
![React](https://img.shields.io/badge/react-19-61DAFB)
![Node](https://img.shields.io/badge/node-22-339933)

| | |
|---|---|
| **Versión** | 2.0.1 |
| **Fecha** | 18 de octubre de 2026 |
| **Autor** | [Nicolás Andrés Cano Leal](#autor) |

Interfaz desacoplada de mi portafolio técnico. Construida con **React 19**, **Vite 7**, **Stitches** y
**Radix UI**, consume la API REST Django/DRF y presenta mi experiencia laboral, proyectos, habilidades y
un formulario de contacto funcional. Desde la **v2.0.0** trae **tres temas visuales** (Cian, Violeta y
Ámbar) que se cambian desde la esquina superior derecha.

- **Frontend**: React 19 + Vite 7 · Stitches (tokens por tema) · Radix DropdownMenu · Swiper
- **Backend**: [MiPortafolioDjango](https://github.com/NicolasAndresCL/MiPortafolioDjango) (Django 5.2 + DRF)
- **Despliegue**: el build se **embebe en el backend** y Django lo sirve en PythonAnywhere
- **Fuente de verdad de los datos**: la API (el contenido se gestiona vía Swagger en producción)

---

## Arquitectura

```
src/
├── themes/
│   └── palettes.js           # los 3 temas como datos puros + leer/guardar/aplicar el tema
├── components/
│   ├── ui/                   # primitivos reutilizables (Button, Card, Input)
│   ├── ThemeSwitcher.jsx     # selector de tema fijo arriba a la derecha (Radix RadioGroup)
│   ├── TituloCard.jsx        # hero: nombre en degradado del tema, avatar, CV, navegación
│   ├── BasicMenu.jsx         # menú (Radix DropdownMenu): no se sale de la pantalla en celular
│   ├── SobreMi.jsx           # sección sobre mí (texto fijo)
│   ├── Experience.jsx        # timeline de experiencia laboral
│   ├── ExperienceCard.jsx    # tarjeta de experiencia con highlights
│   ├── CarruselProjects.jsx  # carrusel de proyectos (Swiper)
│   ├── ProjectCard.jsx       # badge destacado + links condicionales
│   ├── SkillsCarousel.jsx    # carrusel de habilidades
│   ├── SkillCard.jsx         # tarjeta de habilidad (iconMap por nombre exacto)
│   ├── ContactCard.jsx       # formulario conectado a POST /api/contacto/
│   └── FooterCard.jsx        # redes sociales + versión (desde package.json)
├── tests/                    # Vitest + RTL (35 tests)
├── App.jsx                   # recorre todas las páginas de la API; degrada si falla
├── main.jsx                  # entry point (Radix Theme sin fondo propio)
└── stitches.config.js        # tokens base (= tema Cian) + una clase theme-<key> por tema
index.html                    # fuentes + script anti-parpadeo del tema (solo en desarrollo)
```

**Flujo:** navegador → React → Axios → API Django (`/api/...`). En producción el HTML lo sirve Django
desde `templates/index.html` del backend, no el `index.html` de Vite.

---

## Temas

| Tema | Carácter | Paleta | Titulares |
|---|---|---|---|
| **Cian** (por defecto) | Medianoche eléctrica, aurora y brillo | `#070b14` · cian `#22d3ee` → índigo `#818cf8` → magenta `#e879f9` | Space Grotesk |
| **Violeta** | Claro y vibrante | blanco nube `#fbf8ff` · violeta `#7c4dff` · rojo `#e63946` · dorado `#ffbe0b` | Fredoka |
| **Ámbar** | Sobrio, cálido e imponente | brasa `#130d0a` · hueso `#efe6d6` · óxido `#d9622b` | Cinzel |

- El botón de la esquina superior derecha abre el selector (teclado, Escape y lector de pantalla
  incluidos: cada tema es un `menuitemradio`).
- La elección se guarda en `localStorage` (`portafolio-theme`). Si el navegador lo bloquea, se usa Cian.
- Al recargar no hay parpadeo: un script inline aplica la clase del tema antes de que cargue React.
- **Agregar un tema**: un objeto más en `src/themes/palettes.js` con **todos** los tokens (un test lo
  exige) + su clave en el script anti-parpadeo de `index.html` **y** de `templates/index.html` del backend.

---

## Correr en local

Requiere Node 22 (el mismo del CI) y el backend en `:8000`.

```bash
cp .env.example .env      # VITE_API_BASE_URL=http://localhost:8000
npm install
npm run dev               # http://localhost:5173
```

Para verlo tal como en producción (frontend embebido en Django, con Postgres), desde el backend:

```bash
npm run build                                   # escribe el dist/ en el repo backend
cd ../../backend/MiPortafolioDjango
docker compose -p portafolio-temas up -d --build --wait   # http://localhost:8000
docker compose -p portafolio-temas down -v      # al terminar (borra el volumen de prueba)
```

> Con el `dist/` de producción, la API se consulta en PythonAnywhere y desde `localhost` la bloquea CORS:
> el sitio muestra el aviso de contenido parcial. Es lo esperado en esa prueba local.

---

## La interfaz

- Hero con el nombre en el degradado del tema, avatar con brillo y descarga del CV (ES / EN).
- Titular **Backend Engineer → SRE | Python · Django · Kubernetes · Terraform · CI/CD**: el mismo de
  LinkedIn y del CV (`TituloCard.jsx`, `SobreMi.jsx` y `docs/cv/` del backend se cambian juntos).
- Menú de navegación por secciones + Swagger y Admin.
- Experiencia laboral, carrusel de proyectos y de habilidades, formulario de contacto.
- **Si la API cae** (o falla un endpoint), el sitio igual se renderiza con lo disponible y muestra un aviso
  `role="alert"`; el nombre, el contacto y el CV siguen visibles.

---

## Variables de entorno

| Variable | Por defecto | Para qué |
|---|---|---|
| **`VITE_API_BASE_URL`** | — | Base de la API. Local: `http://localhost:8000`; producción: `https://nicolasandrescl.pythonanywhere.com` (`.env.production`) |

---

## Verificación

```bash
npm test               # 35 tests
npm run test:coverage  # con cobertura
npm run build          # build de producción (dist/ en el repo backend)
```

| Archivo | Qué cubre |
|---|---|
| `App.test.jsx` | Respuestas paginadas, recorrido de `next`, sitio visible con aviso si la API cae, fallo de un solo endpoint |
| `BasicMenu.test.jsx` | `aria-haspopup`, los 7 enlaces como `menuitem`, externos en pestaña nueva, cierre con Escape y al elegir |
| `ThemeSwitcher.test.jsx` | Arranca en Cian, respeta el tema guardado, lista 3 temas y aplica/guarda el elegido |
| `palettes.test.js` | 3 temas con nombre de color, mismos tokens en todos, fallback ante clave desconocida o `localStorage` bloqueado, una sola clase sobre `<html>` |
| `ContactCard.test.jsx` | Render, campos, carga, éxito, error, payload, rehabilitación del botón |
| `ExperienceCard.test.jsx` | Campos, highlights como lista, "Presente" vs. rango cerrado |
| `Experience.test.jsx` | Una tarjeta por experiencia, tolerancia a array vacío |
| `ProjectCard.test.jsx` | Badge destacado condicional, botones GitHub/demo según links |

El CI (`.github/workflows/ci.yml`, Node 22) corre `npm ci` → `npm test` → `npm run build` (con
`VITE_API_BASE_URL` desde secrets) y sube el `dist/` como artefacto por 7 días.

---

## Decisiones de diseño

- **`createTheme` de Stitches en vez de un ThemeProvider de React**: los componentes ya usaban tokens
  (`$accent`, `$syntaxFunction`…), así que cambiar de tema es cambiar una clase en `<html>`; ningún
  componente se re-renderiza por el tema y los Portal de Radix (que montan en `<body>`) lo heredan solos.
- **Paletas como datos puros** (`palettes.js`, sin Stitches): se testean sin DOM de estilos y un test
  obliga a que cada tema defina todos los tokens, para que ninguno herede a medias el color de otro.
- **Anti-parpadeo en el HTML, no en React**: el script inline pone la clase antes del primer pintado; las
  reglas de los temas se inyectan al cargar el módulo, no al primer uso.
- **Nombres de color, no de personajes**: Violeta y Ámbar nacen de los temas de
  [CmdVault](https://github.com/NicolasAndresCL/CmdVault), pero en un portafolio profesional el nombre
  describe la paleta.
- **La versión sale de `package.json`**: Vite la inyecta (`import.meta.env.VITE_APP_VERSION`) y el footer
  la muestra; no hay un número escrito a mano que se desincronice.

---

## Autor

**Nicolás Andrés Cano Leal**\
Backend Engineer → SRE | Python · Django · Kubernetes · Terraform · CI/CD

- LinkedIn: [linkedin.com/in/nicolasandrescl](https://www.linkedin.com/in/nicolasandrescl/)
- Portafolio: [nicolasandrescl.github.io](https://nicolasandrescl.github.io/)
- Correo: [nicolas.cano.leal@gmail.com](mailto:nicolas.cano.leal@gmail.com)

Portafolio Frontend v2.0.1 · 18 de octubre de 2026
