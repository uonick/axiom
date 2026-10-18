import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://getaxiom.ru',
  outDir: 'build',
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
    assets: 'assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp', config: { limitInputPixels: false } },
  },
  integrations: [
    sitemap(),
  ],
})
