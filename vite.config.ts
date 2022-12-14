/* eslint-disable camelcase */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA as vitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  plugins: [
    // @ts-expect-error wrong has no call signatures
    react(),
    vitePWA({
      registerType: 'prompt',
      manifest: {
        scope: '/',
        lang: 'en',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',

        name: 'Galvanicium',
        short_name: 'Galvanicium',
        description:
          'Display and superimpose measurements from potentiostats and battery cyclers.',

        icons: [
          {
            src: 'logo/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'logo/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
});
