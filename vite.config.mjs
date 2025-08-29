import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'; // Importar con ESM

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(), // Utilizar la función tailwindcss
  ],
});