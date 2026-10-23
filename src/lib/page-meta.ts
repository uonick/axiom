import { getImage } from 'astro:assets'
import { getRelativeLocaleUrl } from 'astro:i18n'
import screenshot from '../assets/screenshot.png'
import { localeCodes, resolveLocale, translationFor } from '../i18n/translations'
import type { Locale, Translation } from '../i18n/translations.types'
import { buildStructuredData } from './structured-data'
import type { StructuredData } from './structured-data.types'

type LocaleAlternate = Readonly<{
  hreflang: Locale
  href: string
}>

export type PageMeta = Readonly<{
  text: Translation
  canonicalUrl: string
  defaultLocaleUrl: string
  openGraphImageUrl: string
  openGraphImageHeight: number
  openGraphLocaleAlternates: readonly string[]
  alternates: readonly LocaleAlternate[]
  structuredData: StructuredData
}>

type PageMetaSource = Readonly<{
  currentLocale: string | undefined
  site: URL | undefined
}>

export async function buildPageMeta({ currentLocale, site }: PageMetaSource): Promise<PageMeta> {
  const locale = resolveLocale(currentLocale)
  const text = translationFor(locale)
  const siteUrl = site?.origin ?? ''
  const localeHref = (code: Locale): string => new URL(getRelativeLocaleUrl(code, ''), siteUrl).href
  const canonicalUrl = localeHref(locale)
  const openGraphImage = await getImage({ src: screenshot, width: 1200, format: 'jpg', quality: 85 })
  const openGraphImageUrl = new URL(openGraphImage.src, siteUrl).href
  const openGraphImageHeight = openGraphImage.attributes.height
  const alternates = localeCodes.map((code) => ({ hreflang: code, href: localeHref(code) }))

  return {
    text,
    canonicalUrl,
    defaultLocaleUrl: localeHref('en'),
    openGraphImageUrl,
    openGraphImageHeight,
    openGraphLocaleAlternates: localeCodes
      .filter((code) => code !== locale)
      .map((code) => translationFor(code).ogLocale),
    alternates,
    structuredData: buildStructuredData({ siteUrl, canonicalUrl, imageUrl: openGraphImageUrl, text }),
  }
}
