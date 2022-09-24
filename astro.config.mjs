import { defineConfig } from 'astro/config';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), sitemap()],
  vite: {
    optimizeDeps: {
      include: ['preact/hooks', 'preact/compat', 'preact'],
    },
    //   resolve: {
    //     alias: [
    //       // {
    //       //   find: 'preact',
    //       //   replacement: require.resolve('preact'),
    //       // },
    //       {
    //         find: 'preact/hooks',
    //         replacement: require.resolve('preact/hooks'),
    //       },
    //     ],
    //   },
    // optimizeDeps: {
    //   include: ['preact/hooks', 'preact/compat', 'preact'],
    // },
  },
});
