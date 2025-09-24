import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Project root directory
  server: {
    port: 5173, // Default Vite dev server port
    open: true, // Open browser on server start
  },
  build: {
    outDir: 'dist', // Output directory for build
  },
});