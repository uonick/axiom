import { siteConfig } from '../site.config'
import type { StructuredData, StructuredDataParams } from './structured-data.types'

export const buildStructuredData = ({ siteUrl, canonicalUrl, imageUrl, text }: StructuredDataParams): StructuredData => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: canonicalUrl,
      name: siteConfig.name,
      description: text.shortDescription,
      inLanguage: text.htmlLang,
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name: siteConfig.name,
      description: text.applicationDescription,
      applicationCategory: siteConfig.application.category,
      operatingSystem: siteConfig.application.operatingSystems,
      url: canonicalUrl,
      downloadUrl: siteConfig.latestReleaseUrl,
      image: imageUrl,
      offers: { '@type': 'Offer', price: siteConfig.application.price, priceCurrency: siteConfig.application.priceCurrency },
      sameAs: [siteConfig.repositoryUrl],
    },
  ],
})
