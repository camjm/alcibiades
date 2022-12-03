import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  //   strictPort: true
  // },
  // build: {
  //   outDir: 'dist'
  // },
  base: './', // prefixes all assets with ./ to work with electron's file:// protocol
  plugins: [vue()]
})
