import { defineConfig } from 'vite'
import path from 'path';
const __dirname = path.resolve();

export default defineConfig({
  resolve: {
    alias: {
      "@api-lib": path.resolve(__dirname, "src/lib")
    }
  },
  build: {
    rollupOptions: {
      input: "src/acc-api.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [],
  server: {
    host: "localhost",
    port: 5174
  }
});
