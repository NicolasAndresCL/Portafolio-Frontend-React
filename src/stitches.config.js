import { createStitches } from '@stitches/react';

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
    colors: {
      // 🎨 VSCode Dark+ inspired palette
      background: '#1e1e1e',
      surface: '#252526',
      panel: '#2d2d2d',
      border: '#3c3c3c',
      text: '#d4d4d4',
      muted: '#a0a0a0',
      accent: '#569cd6',
      accentHover: '#4fa3d1',
      success: '#6a9955',
      warning: '#d7ba7d',
      error: '#f44747',
      shadow: 'rgba(0, 0, 0, 0.5)',

      // 🧠 VSCode syntax-inspired tokens
      syntaxFunction: '#569CD6',
      syntaxString: '#CE9178',
      syntaxKeyword: '#DCDCAA',
      syntaxVariable: '#9CDCFE',
      syntaxComment: '#6A9955',
      syntaxError: '#F44747',
    },
    fonts: {
      body: 'Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif',
      mono: 'Fira Code, Consolas, Menlo, monospace',
    },
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

// 🌍 Estilos globales aplicables desde main.jsx
export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  html: {
    backgroundColor: '$background',
    scrollBehavior: 'smooth',
    fontFamily: '$body',
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
    fontFamily: '$body',
    lineHeight: 1.6,
    minHeight: '100vh',
    overflowX: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  h1: {
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
    color: '$syntaxFunction',
  },
  h2: {
    fontFamily: '$mono',
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
});
