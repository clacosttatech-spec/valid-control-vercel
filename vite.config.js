import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 🔧 ESSENCIAL para funcionar no Netlify
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
