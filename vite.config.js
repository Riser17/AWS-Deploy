import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {"/api": "https://54.160.72.194:9090/" },
  },
  plugins: [react()],
})
