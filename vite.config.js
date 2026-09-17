import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps it working on Vercel, Netlify AND GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
