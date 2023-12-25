// In your vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // other configurations...
  resolve: {
    alias: {
      '@components': '/path/to/your/components',
    },
  },
});
