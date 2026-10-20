import type { Locale, Translation } from './translations.types'

export const translations: Readonly<Record<Locale, Translation>> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Axiom — The unified AI workspace for modern team development',
    description:
      'The unified AI workspace for modern team development. Axiom gives an AI agent your whole project: chat, files, Git, terminal and Docker.',
    shortDescription: 'The unified AI workspace for modern team development',
    keywords:
      'Axiom, AI workspace, AI agent, agent orchestration, team development, desktop app, AI coding assistant, MCP, Ollama, Git, Docker, terminal',
    tagline: 'The unified AI workspace for modern team development',
    download: 'Download',
    github: 'GitHub',
    screenshotAlt: 'Axiom app screenshot',
    ogImageAlt: 'Axiom desktop app: AI chat next to project files, Git and terminal',
    applicationDescription:
      'The unified AI workspace for modern team development: local-first desktop app with chat, files, Git, terminal and Docker.',
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Axiom — единое AI-пространство для современной командной разработки',
    description:
      'Единое AI-пространство для современной командной разработки. Axiom даёт AI-агенту весь проект: чат, файлы, Git, терминал и Docker.',
    shortDescription: 'Единое AI-пространство для современной командной разработки',
    keywords:
      'Axiom, AI-пространство, AI-агент, оркестрация агентов, командная разработка, десктопное приложение, AI-ассистент для кода, MCP, Ollama, Git, Docker, терминал',
    tagline: 'Единое AI-пространство для современной командной разработки',
    download: 'Скачать',
    github: 'GitHub',
    screenshotAlt: 'Скриншот приложения Axiom',
    ogImageAlt: 'Десктопное приложение Axiom: AI-чат рядом с файлами проекта, Git и терминалом',
    applicationDescription:
      'Единое AI-пространство для современной командной разработки: локальное десктопное приложение с чатом, файлами, Git, терминалом и Docker.',
  },
}
