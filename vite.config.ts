import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// VITE_BASE is set by CI (GitHub Pages) and defaults to "/" (local dev, Docker)
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    react(),
    {
      name: 'restore-resume-links',
      transformIndexHtml() {
        return [{
          tag: 'script',
          injectTo: 'body',
          children: `document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('span.btn[aria-disabled="true"]').forEach((button) => { if (!button.textContent?.trim().startsWith('Resume')) return; const link = document.createElement('a'); link.className = button.className; link.href = '/Vikas_AK_Resume.docx'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Resume'; if (button.querySelector('small')) { const detail = document.createElement('small'); detail.textContent = 'Open resume'; link.append(detail); } button.replaceWith(link); }));`,
        }]
      },
    },
  ],
  build: { chunkSizeWarningLimit: 1000 }, // the 3D chunk is lazy-loaded
})
