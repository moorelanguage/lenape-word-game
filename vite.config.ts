import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/lenape-word-game/', // set base path for GitHub Pages           
  build: {
    outDir: 'dist',      // output folder
    emptyOutDir: true,   // clear folder before building
  },
});
