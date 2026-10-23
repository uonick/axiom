import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

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
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ru: 'ru',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
