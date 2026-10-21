import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is set by CI (GitHub Pages) and defaults to "/" (local dev, Docker)
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1000 }, // the 3D chunk is lazy-loaded
})
