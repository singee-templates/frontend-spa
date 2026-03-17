import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { devtools } from '@tanstack/devtools-vite';

const config = defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    devtools(),
    viteReact(),
  ],
});

export default config;
