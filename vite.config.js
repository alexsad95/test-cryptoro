import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  base: process.env.NODE_ENV === 'production' ? '/test-cryptoro/' : '/',
  publicDir: 'public',
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf']
})
