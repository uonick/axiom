# SEO Verify

Дата: 2026-10-23. Проверено по `bun run build`, файлы `build/index.html` и `build/ru/index.html`.

## Что изменили
- `src/i18n/translations.ts`, `src/i18n/translations.types.ts`
- `src/lib/structured-data.ts`
- `src/components/HeroSection.astro`, `FeaturesSection.astro`, `ProvidersSection.astro`, `FaqSection.astro`, `CtaSection.astro`, `Landing.astro`, `SiteFooter.astro`
- `src/styles/global.css`
- `public/robots.txt`, `public/llms.txt`, `public/pricing.md`

## Проверки
- [x] В `<head>` есть title, description, canonical. EN: `https://getaxiom.ru/`. RU: `https://getaxiom.ru/ru/`.
- [x] OG и Twitter заполнены, `og:image` абсолютный JPEG.
- [x] JSON-LD в исходном HTML. Типы: Organization, WebSite, WebPage, SoftwareApplication, FAQPage. У русской страницы свои `@id` для страницы, приложения и FAQ.
- [x] `robots.txt` есть, Sitemap `https://getaxiom.ru/sitemap-index.xml`. GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Bingbot открыты. Bytespider закрыт. Глобального noindex нет.
- [x] Sitemap после сборки содержит `/` и `/ru/` с `hreflang`.
- [x] Один `h1`, дальше `h2` и `h3`. Скриншот с `fetchpriority="high"` и без lazy. У иконки заданы width и height.
- [x] `build/llms.txt` и `build/pricing.md` попадают в вывод.

## Скоринг после правок: 86/100
- Meta/Head: 28/30. Нет отдельного крупного логотипа в OG кроме скриншота, это нормально для продукта.
- Schema: 17/20. Логотип организации 32px.
- Indexability: 18/20. `pricing.md` отдаётся как файл и не входит в sitemap интеграции: она индексирует только страницы Astro.
- Performance: 15/20. Hero в WebP и с приоритетом. AVIF нет. Исходный PNG большой, в выдачу идут нарезанные ширины.
- GEO: 8/10. FAQ, `llms.txt`, цена и допуск ботов на месте. Отдельных страниц под смежные запросы нет.

## Что не стал выдумывать
Юрлицо, соцсети и логотип крупнее favicon. В репозитории этого нет.
