export type Locale = 'en' | 'ru'

export type Translation = Readonly<{
  htmlLang: string
  ogLocale: string
  title: string
  description: string
  shortDescription: string
  keywords: string
  tagline: string
  download: string
  github: string
  screenshotAlt: string
  ogImageAlt: string
  applicationDescription: string
}>
