import viteConfig from "./vite.config";
import { defineConfig, mergeConfig } from 'vitest/config';
import path from 'path';
const __dirname = path.resolve();

export default mergeConfig(viteConfig, defineConfig({
    test: {
        coverage: {
            provider: 'v8'
        }
    },
    resolve: {
        alias: {
            '@api-lib': path.resolve(__dirname, './src/lib'),
        }
    }
}))