import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'Payment System',
        short_name: 'Payment System',
        start_url: '/index.html',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
      },
      registerType: 'auto',
      swSrc: 'service-worker.js',
    }),
  ],
})
