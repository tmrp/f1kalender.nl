import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://f1kalender.nl',
  integrations: [preact({ compat: true }), tailwind(), sitemap()],
  vite: {
    optimizeDeps: {
      include: ['preact/hooks', 'preact/compat', 'preact'],
    },
  },
});
