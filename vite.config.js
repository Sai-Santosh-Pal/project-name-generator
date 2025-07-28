import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true
  },
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          'marked': ['marked']
        }
      }
    }
  }
})
