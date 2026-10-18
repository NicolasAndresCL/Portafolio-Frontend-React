import { createStitches } from '@stitches/react';
import { THEMES, getTheme, DEFAULT_THEME, themeClass } from '@/themes/palettes';

const baseTheme = getTheme(DEFAULT_THEME);

export const {
  styled,
  css,
  globalCss,
  theme,
  createTheme,
  getCssText,
  keyframes,
} = createStitches({
  theme: {
    // Tema base (:root) = tema por defecto. Las paletas viven en src/themes/palettes.js.
    colors: baseTheme.colors,
    fonts: baseTheme.fonts,
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '2rem',
      6: '3rem',
      7: '4rem',
    },
    shadows: {
      soft: '0 0 10px $colors$shadow',
      strong: '0 0 30px $colors$shadow',
      glow: '0 0 0 1px $colors$border, 0 18px 50px -18px $colors$glow',
      inset: 'inset 0 1px 2px rgba(0,0,0,0.2)',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  utils: {
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    size: (value) => ({ width: value, height: value }),
    flexCenter: () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    textGradient: (value) => ({
      backgroundImage: value,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }),
  },
});

// Una clase `theme-<key>` por tema, aplicada sobre <html> (ver applyTheme). Se lee
// `.className` al cargar el módulo para que Stitches inyecte las reglas de inmediato: así la
// clase que pone el script anti-parpadeo de index.html ya tiene estilos cuando monta React.
export const themes = Object.fromEntries(
  THEMES.map((t) => [t.key, createTheme(themeClass(t.key), { colors: t.colors, fonts: t.fonts })]),
);
Object.values(themes).forEach((t) => t.className);

// 🌍 Estilos globales aplicables desde main.jsx
export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  html: {
    backgroundColor: '$background',
    // Swiper lee esta variable para flechas y paginación.
    '--swiper-theme-color': 'var(--colors-accent)',
    scrollBehavior: 'smooth',
    fontFamily: '$body',
  },
  body: {
    backgroundColor: '$background',
    // Fondo de aurora del tema; fijo para que no se corte al hacer scroll largo.
    backgroundImage: 'var(--colors-backdrop)',
    backgroundAttachment: 'fixed',
    transition: 'background-color 0.4s ease, color 0.4s ease',
    color: '$text',
    fontFamily: '$body',
    lineHeight: 1.6,
    minHeight: '100vh',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  h1: {
    fontFamily: '$heading',
    fontSize: '$xxl',
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
    color: '$syntaxFunction',
  },
  h2: {
    fontFamily: '$heading',
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$syntaxKeyword',
  },
  a: {
    color: '$accent',
    textDecoration: 'none',
    '&:hover': { color: '$accentHover' },
  },
  button: {
    fontFamily: '$body',
  },
  '::selection': {
    backgroundColor: '$accent',
    color: '$onAccent',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*': { transition: 'none !important', animation: 'none !important' },
    html: { scrollBehavior: 'auto' },
  },
});
