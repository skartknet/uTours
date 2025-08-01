import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: '../wwwroot/App_Plugins/uTours',
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'umd'],
      name: 'UToursEditor',
      fileName: (format) => `utours-editor.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
})
