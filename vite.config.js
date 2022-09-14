import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {resolve} from 'path'

// const root=resolve(__dirname,'src')
// https://vitejs.dev/config/
export default defineConfig({
  //root,
  plugins: [svelte()],
  build:{
    emptyOutDir:true,
    outDir:resolve(__dirname,'dist'),
    rollupOptions: {
      //external: resolve(__dirname,'src/main.js'),
      
      input: {
        main: resolve(__dirname, 'index.html'),
        search_results: resolve(__dirname, 'search_results/index.html'),
        serie_details: resolve(__dirname, 'serie_details/index.html')
      }
    }
  }
})
