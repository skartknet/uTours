import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../wwwroot/App_Plugins/uTours',
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'umd'],
      name: 'UToursEditor',
      fileName: (format) => `utours-editor.${format}.js`
    },
    rollupOptions: {
      // Externalize dependencies that should be loaded separately
      // Comment out the external array if you want to bundle everything
      // external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
})
