import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  build: {
    assetsDir: 'assets',
  },
  site: 'https://nexoit-site.pages.dev',
  integrations: [sitemap()],
});
