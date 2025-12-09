import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), tailwindcss(), ghPages()],
  base: './',            // ensures relative paths for Android
  build: {
    outDir: 'dist',      // output folder
    emptyOutDir: true,   // clear folder before building
  },
});
