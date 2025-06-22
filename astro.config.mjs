import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  adapter: netlify()
});
