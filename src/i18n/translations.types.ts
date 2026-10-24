import type { ProviderKey } from '../site.config'

export type Locale = 'en' | 'ru'

export type FeatureText = Readonly<{ title: string; description: string; alt: string }>

export type ScreenText = Readonly<{ title: string; description: string; alt: string }>

export type RoadmapText = Readonly<{ title: string; description: string }>

export type FaqText = Readonly<{ question: string; answer: string }>

export type Translation = Readonly<{
  htmlLang: string
  ogLocale: string
  languageLabel: string
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
  headerDownload: string
  headerGithub: string
  heroTitle: string
  heroSubtitle: string
  download: string
  betaBadge: string
  featuresTitle: string
  features: readonly FeatureText[]
  faqTitle: string
  faq: readonly FaqText[]
  providersTitle: string
  providersSubtitle: string
  providerCaptions: Readonly<Record<ProviderKey, string>>
  screens: readonly ScreenText[]
  roadmapTitle: string
  roadmapBadge: string
  roadmap: readonly RoadmapText[]
  ctaTitle: string
  ctaSubtitle: string
  footerGroups: Readonly<{ product: string; resources: string; legal: string }>
  footerLinks: Readonly<{ releases: string; source: string; issues: string; license: string }>
  footerRights: string
}>
