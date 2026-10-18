import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

// 🎨 Estilos globales de Radix Themes
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

// 🧱 Estilos globales personalizados con Stitches
import { globalStyles } from './stitches.config';

// 🧪 Aplica estilos globales
globalStyles();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Sin fondo propio: el fondo (y su aurora) lo pinta el tema de Stitches sobre <body>. */}
    <Theme
      accentColor="blue"
      grayColor="sand"
      radius="medium"
      scaling="95%"
      hasBackground={false}
    >
      <App />
    </Theme>
  </React.StrictMode>
);

