import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

// @ts-ignore
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      '#': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
