import { $ } from 'bun'

const STATIC_FILES = [
  'src/llms.txt',
  'src/robots.txt',
  'src/sitemap.xml',
  'src/.generated/og-image.jpg',
] as const

await $`bun src/scripts/optimize-images.ts`
await $`bun src/scripts/bundle-html.ts`
await $`bun src/scripts/minify-html.ts`
await $`cp ${STATIC_FILES} build/`
