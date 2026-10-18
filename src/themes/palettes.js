// Temas visuales (datos puros, sin Stitches): se pueden probar sin DOM de estilos.
// Port a React de los temas de CmdVault. Cada tema define TODOS los tokens de color y de
// fuentes que consumen los componentes; `stitches.config.js` arma con ellos una clase
// `theme-<key>` que se aplica sobre <html> (así también la heredan los Portal de Radix).

export const STORAGE_KEY = 'portafolio-theme';

const MONO = "'JetBrains Mono', 'Fira Code', Consolas, Menlo, monospace";
const BODY = "'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif";

export const THEMES = [
  {
    key: 'cian',
    label: 'Cian',
    tagline: 'Medianoche eléctrica: aurora cian y violeta.',
    dark: true,
    swatch: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 55%, #e879f9 100%)',
    colors: {
      background: '#070b14',
      surface: '#0d1424',
      panel: '#121b31',
      border: '#1f2b47',
      text: '#e6edf7',
      muted: '#8b9bb8',
      accent: '#22d3ee',
      accentHover: '#67e8f9',
      onAccent: '#04111a',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      shadow: 'rgba(0, 0, 0, 0.55)',
      glow: 'rgba(34, 211, 238, 0.32)',
      gradient: 'linear-gradient(110deg, #22d3ee 0%, #818cf8 50%, #e879f9 100%)',
      backdrop:
        'radial-gradient(1100px 600px at 12% -10%, rgba(34, 211, 238, 0.16) 0%, transparent 60%),' +
        'radial-gradient(900px 520px at 95% 0%, rgba(129, 140, 248, 0.20) 0%, transparent 60%),' +
        'radial-gradient(900px 700px at 50% 115%, rgba(232, 121, 249, 0.10) 0%, transparent 70%)',
      syntaxFunction: '#22d3ee',
      syntaxString: '#c7d2fe',
      syntaxKeyword: '#a78bfa',
      syntaxVariable: '#67e8f9',
      syntaxComment: '#94a3b8',
      syntaxError: '#f87171',
    },
    fonts: {
      body: BODY,
      mono: MONO,
      heading: "'Space Grotesk', 'Segoe UI', sans-serif",
    },
  },
  {
    // Inspirado en la Quinta Marcha: blanco nube, violeta del cielo, rojo y dorado.
    key: 'violeta',
    label: 'Violeta',
    tagline: 'Claro y vibrante: blanco nube, violeta y dorado.',
    dark: false,
    swatch: 'linear-gradient(135deg, #7c4dff 0%, #e63946 60%, #ffbe0b 100%)',
    colors: {
      background: '#fbf8ff',
      surface: '#ffffff',
      panel: '#f4eeff',
      border: '#e2d6ff',
      text: '#2a1f3d',
      muted: '#6b5d85',
      accent: '#7c4dff',
      accentHover: '#6a3df0',
      onAccent: '#ffffff',
      success: '#0f8a7a',
      warning: '#b7791f',
      error: '#d62839',
      shadow: 'rgba(124, 77, 255, 0.16)',
      glow: 'rgba(124, 77, 255, 0.26)',
      // El dorado puro se pierde sobre blanco: el degradado del texto termina en ámbar.
      gradient: 'linear-gradient(110deg, #7c4dff 0%, #e63946 55%, #f59e0b 100%)',
      backdrop:
        'radial-gradient(900px 420px at 85% -5%, #ffe8a3 0%, transparent 55%),' +
        'radial-gradient(800px 500px at 0% 0%, #e9ddff 0%, transparent 60%),' +
        'radial-gradient(600px 400px at 50% 110%, #ffffff 0%, transparent 70%)',
      syntaxFunction: '#6a3df0',
      syntaxString: '#3d2f57',
      syntaxKeyword: '#c81d32',
      syntaxVariable: '#9a6412',
      syntaxComment: '#6b5d85',
      syntaxError: '#d62839',
    },
    fonts: {
      body: BODY,
      mono: MONO,
      heading: "'Fredoka', 'Segoe UI', sans-serif",
    },
  },
  {
    // Inspirado en el Titán Fundador: hueso, cielo color brasa, tierra quemada y óxido.
    key: 'ambar',
    label: 'Ámbar',
    tagline: 'Brasa y hueso: sobrio, cálido e imponente.',
    dark: true,
    swatch: 'linear-gradient(135deg, #f1e3c8 0%, #e0a43a 45%, #d9622b 100%)',
    colors: {
      background: '#130d0a',
      surface: '#1f1611',
      panel: '#2a1d16',
      border: '#3d2a1f',
      text: '#efe6d6',
      muted: '#b8a58c',
      accent: '#d9622b',
      accentHover: '#e97a43',
      onAccent: '#160d08',
      success: '#7fa36b',
      warning: '#e0a43a',
      error: '#e5533f',
      shadow: 'rgba(0, 0, 0, 0.6)',
      glow: 'rgba(217, 98, 43, 0.30)',
      gradient: 'linear-gradient(110deg, #f1e3c8 0%, #e0a43a 45%, #d9622b 100%)',
      backdrop:
        'radial-gradient(1100px 520px at 50% -15%, #5a2410 0%, transparent 60%),' +
        'linear-gradient(180deg, #1c120d 0%, #130d0a 70%)',
      syntaxFunction: '#e9773d',
      syntaxString: '#e8dcc4',
      syntaxKeyword: '#e0a43a',
      syntaxVariable: '#c9a27a',
      syntaxComment: '#b8a58c',
      syntaxError: '#e5533f',
    },
    fonts: {
      body: BODY,
      mono: MONO,
      heading: "'Cinzel', Georgia, serif",
    },
  },
];

export const DEFAULT_THEME = 'cian';

export function getTheme(key) {
  return THEMES.find((t) => t.key === key) ?? THEMES.find((t) => t.key === DEFAULT_THEME);
}

export const themeClass = (key) => `theme-${key}`;

// localStorage puede no existir o lanzar (modo privado, cookies bloqueadas): nunca rompe el sitio.
export function readStoredTheme() {
  try {
    return getTheme(window.localStorage.getItem(STORAGE_KEY)).key;
  } catch {
    return DEFAULT_THEME;
  }
}

export function storeTheme(key) {
  try {
    window.localStorage.setItem(STORAGE_KEY, key);
  } catch {
    // Sin persistencia: el tema dura lo que la pestaña.
  }
}

// Aplica el tema sobre <html>: clase de Stitches, data-theme (lo usa el CSS anti-parpadeo de
// index.html), color-scheme (scrollbars y controles nativos) y la barra del navegador móvil.
export function applyTheme(key, root = document.documentElement) {
  const theme = getTheme(key);
  THEMES.forEach((t) => root.classList.remove(themeClass(t.key)));
  root.classList.add(themeClass(theme.key));
  root.dataset.theme = theme.key;
  root.style.colorScheme = theme.dark ? 'dark' : 'light';
  const meta = root.ownerDocument?.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme.colors.background);
  return theme.key;
}
