import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Plugin for React support
    dynamicImport(), // Plugin for dynamic import support
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' to the src directory
    },
  },
  server: {
    port: 5173, // Default port for Vite
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Proxy API requests to the backend
        changeOrigin: true, // Change the origin header to the target URL
        secure: false, // Allow insecure connections
      },
    },
  },
  build: {
    outDir: 'build', // Output directory for the production build
    sourcemap: true, // Generate source maps for debugging
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor code into a specific chunk
          }
        },
      },
    },
  },
  assetsInclude: ['**/*.md'], // Include Markdown files as assets
});