/* eslint-disable camelcase */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA as vitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePWA({
      registerType: 'prompt',
      manifest: {
        scope: '/',
        name: 'Galvanicium',
        short_name: 'Galvanicium',
        description: 'Galvanicium description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
