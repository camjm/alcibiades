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
  //base: path.resolve(__dirname, "./dist/"), // set the base for the entire project to be the dist folder
  base: './', // prefixes all assets with ./ to work with electron's file:// protocol
  plugins: [vue()]
})
