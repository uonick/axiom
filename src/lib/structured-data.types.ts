import type { Translation } from '../i18n/translations.types'

export type StructuredDataParams = Readonly<{
  siteUrl: string
  canonicalUrl: string
  imageUrl: string
  text: Translation
}>

export type StructuredData = Readonly<{
  '@context': 'https://schema.org'
  '@graph': readonly Readonly<Record<string, unknown>>[]
}>
