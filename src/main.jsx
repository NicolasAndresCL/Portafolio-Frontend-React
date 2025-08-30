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
    <Theme
      accentColor="blue"
      grayColor="sand"
      radius="medium"
      scaling="95%"
    >
      <App />
    </Theme>
  </React.StrictMode>
);

