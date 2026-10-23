import { siteConfig } from '../site.config'
import type { StructuredData, StructuredDataParams } from './structured-data.types'

export const buildStructuredData = ({ siteUrl, canonicalUrl, imageUrl, text }: StructuredDataParams): StructuredData => {
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const appId = `${canonicalUrl}#app`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/favicon-32.png`,
        sameAs: [siteConfig.repositoryUrl],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: siteConfig.name,
        inLanguage: ['en', 'ru'],
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: text.title,
        description: text.description,
        inLanguage: text.htmlLang,
        isPartOf: { '@id': websiteId },
        about: { '@id': appId },
        primaryImageOfPage: imageUrl,
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['#hero-title', '#hero-summary'],
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': appId,
        name: siteConfig.name,
        description: text.applicationDescription,
        applicationCategory: siteConfig.application.category,
        applicationSubCategory: 'AI coding assistant',
        operatingSystem: siteConfig.application.operatingSystems,
        inLanguage: text.htmlLang,
        url: canonicalUrl,
        downloadUrl: siteConfig.latestReleaseUrl,
        image: imageUrl,
        featureList: text.features.map((feature) => `${feature.title}. ${feature.description}`).join(' '),
        provider: { '@id': organizationId },
        sameAs: [siteConfig.repositoryUrl],
      },
      {
        '@type': 'FAQPage',
        '@id': `${canonicalUrl}#faq`,
        url: canonicalUrl,
        inLanguage: text.htmlLang,
        mainEntity: text.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }
}
