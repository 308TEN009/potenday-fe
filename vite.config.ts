import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@', replacement: '/src' },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          VITE_BASE_URL: process.env.VITE_BASE_URL,
        },
      },
    },
  },
});
