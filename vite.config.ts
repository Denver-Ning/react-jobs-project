import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default (({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const API_BASE_URL = process.env.VITE_API_BASE_URL;
  console.log('API_BASE_URL', API_BASE_URL);

  return defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    }
  })
})

