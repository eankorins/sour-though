import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    devtools({
      locator: {
        targetIDE: 'vscode',
        componentLocation: true,
        jsxLocation: true
      }
    }),
    solidPlugin()
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
