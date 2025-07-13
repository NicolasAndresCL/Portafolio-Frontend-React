# Portafolio Frontend React

Este proyecto corresponde al frontend de mi portafolio personal como Backend Developer. Fue desarrollado utilizando **React**, **Vite** y **TailwindCSS**, tecnologías modernas que permiten una experiencia de usuario fluida y un diseño adaptable.

## 🚀 Tecnologías principales

- **React**: Librería de JavaScript para construir interfaces interactivas.
- **Vite**: Bundler ultra-rápido para desarrollo moderno.
- **TailwindCSS**: Framework de utilidades para estilos responsivos y personalizados.

## 📦 Estructura del proyecto

```Portafolio-Frontend-React
├── public/                 # Archivos estáticos que se copian directamente a la raíz de la compilación
│   └── assets/             # Imágenes y otros recursos estáticos
├── src/                    # Código fuente principal de la aplicación
│   ├── components/         # Componentes de React reutilizables (ContactoCard, Footer, ProjectCard, SkillCard, TituloCard)
│   ├── App.css             # Estilos globales de la aplicación
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos base/globales (Tailwind CSS se integra aquí)
│   ├── main.jsx            # Punto de entrada de la aplicación (renderiza el componente App)
│   └── .env                # Variables de entorno (IGNORADO por Git)
├── .gitignore              # Archivos y directorios ignorados por Git
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Archivo HTML principal de la aplicación (punto de montaje de React)
├── package-lock.json       # Registra las versiones exactas de las dependencias
├── package.json            # Metadatos del proyecto y lista de dependencias
├── postcss.config.cjs      # Configuración de PostCSS (usado por Tailwind CSS)
├── README.md               # Este archivo
├── tailwind.config.js      # Configuración de Tailwind CSS
└── vite.config.js          # Configuración de Vite
```


## 🛠 Instalación del proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/NicolasAndresCL/Portafolio-Frontend-React.git
cd Portafolio-Frontend-React
```

2. **Instalar dependencias**

```npm install
```

3. **Ejecutar el entorno de desarrollo**

```bash
npm run dev
```

4. **Compilar para producción**

```bash
npm run build
```

## 🔧 Configuración de Tailwind CSS con Vite (Shadcn/UI)

Esta configuración permite usar Tailwind CSS v4 en un entorno basado en React + Vite, compatible con Shadcn/UI. Fue necesaria una adaptación manual debido a cambios en la CLI y en la integración con PostCSS.

✅ Pasos realizados
- Instalación del plugin correcto de PostCSS:

```bash
npm install @tailwindcss/postcss
```

- Archivo postcss.config.cjs (con “c” agregado):

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.js',
    },
    autoprefixer: {},
  }
}
```

- Archivo tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Estilos base en src/index.css o src/style.css:
```css
@import "tailwindcss";

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  /* ...otros estilos generales */
}
```

- Scripts de ejecución:
```bash
npm run dev     # Desarrollo
npm run build   # Producción
```

## 🧠 Notas útiles

Esta solución fue necesaria debido a incompatibilidades entre Tailwind v4 y la integración tradicional con Vite.

El plugin @tailwindcss/postcss permite compilar correctamente sin depender del CLI clásico.

El archivo postcss.config.cjs funciona mejor que .js en este contexto.

