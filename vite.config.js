import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
  ],
  css: {
    postcss:{
      plugins: [
        postcss
      ]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://autumnfish.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
