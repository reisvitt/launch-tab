import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      '@/ui': path.resolve(__dirname, './src/components/ui'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
