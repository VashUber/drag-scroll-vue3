import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      dts({
        entryRoot: resolve(__dirname, 'src'),
        outDir: resolve(__dirname, 'dist'),
        insertTypesEntry: true
      })
    ],
    root: resolve(__dirname, mode === 'production' ? '' : 'playground'),
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/drag-scroll.ts'),
        name: 'index',
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },
    server: {
      port: 3000
    }
  }
})
