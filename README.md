# 🔧 Configuración de Tailwind CSS con Vite (Shadcn/UI)
Esta configuración permite usar Tailwind CSS v4 en un entorno basado en React + Vite, compatible con Shadcn/UI. Fue necesaria una adaptación manual debido a cambios en la CLI y en la integración con PostCSS.

## ✅ Pasos realizados
Instalación del plugin correcto de PostCSS:

```bash
npm install @tailwindcss/postcss
```
## Archivo postcss.config.cjs (con "c" agregado):

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
## Archivo tailwind.config.js:

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

## Estilos base en src/index.css o src/style.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
Estilos adicionales del proyecto:

css
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

## Scripts de ejecución:

```bash
npm run dev     # Desarrollo
npm run build   # Producción
```

## 🧠 Notas útiles

Esta solución fue necesaria debido a incompatibilidades entre Tailwind v4 y la integración tradicional con Vite.

El plugin @tailwindcss/postcss permite compilar correctamente sin depender del CLI clásico.

El archivo postcss.config.cjs funciona mejor que .js en este contexto.