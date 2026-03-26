// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rubens2005.github.io',

  // IMPORTANTE: Se for o seu site principal (seu-usuario.github.io), deixe apenas '/'
  base: '/',

  outDir: 'dist',

  vite: {
    plugins: [tailwindcss()],
  },
});