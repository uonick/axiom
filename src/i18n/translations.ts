import type { Locale, Translation } from './translations.types'

export const translations: Readonly<Record<Locale, Translation>> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    languageLabel: 'Language',
    title: 'Axiom: AI chat for the whole repo',
    description:
      'Desktop app for macOS, Windows and Linux. The chat sees your files, Git, terminal and Docker. History and API keys stay on the machine.',
    shortDescription: 'Desktop AI chat with your repo, Git, terminal and Docker. Local-first.',
    keywords: 'Axiom, AI coding assistant, local-first, desktop app, Git, Docker, Ollama, MCP, GGUF',
    tagline: 'Desktop AI chat with your repo, Git, terminal and Docker.',
    download: 'Download',
    github: 'GitHub',
    screenshotAlt: 'Axiom on macOS: project chat, Git panel and terminal',
    ogImageAlt: 'Axiom desktop window with project chat, Git and a terminal',
    applicationDescription:
      'Local-first desktop app. The chat reads and edits the open project, uses Git, a terminal and Docker, and calls a cloud or local model. Chats and API keys stay on the machine.',
    headerDownload: 'Download',
    headerGithub: 'GitHub',
    heroTitle: 'The repo is already open in the chat',
    heroSubtitle:
      'Axiom is a desktop app. It reads the project, works with Git, a terminal and Docker, and keeps the chat history and API keys on your machine.',
    downloadBeta: 'Download beta',
    featuresTitle: 'What it does',
    features: [
      {
        title: 'Four modes',
        description:
          'Agent edits files and runs sandboxed commands. Plan and Ask only read. Debug runs commands and leaves the files alone.',
      },
      {
        title: 'Git, terminal, Docker',
        description:
          'Several terminal sessions. Diff, commit, worktrees and sync. npm, Composer and Docker Compose sit in the same window.',
      },
      {
        title: 'It stays put',
        description:
          'Chats, settings and provider keys are stored locally. The beta is a GitHub Release. No Axiom account.',
      },
    ],
    faqTitle: 'Questions',
    faq: [
      {
        question: 'What is Axiom?',
        answer:
          'A desktop app for developers. You open a project folder and chat with a model that can see those files. Git, a terminal and Docker Compose are in the same window. The beta runs on macOS, Windows and Linux.',
      },
      {
        question: 'Does my code stay on the machine?',
        answer:
          'Chats, settings and provider keys are stored locally. Ollama or a GGUF file does not upload the repo. A cloud provider receives the prompt for that request, including files you attached.',
      },
      {
        question: 'Which models can I connect?',
        answer:
          'Claude, GPT, Gemini, Grok, Qwen, DeepSeek and OpenRouter through their APIs. Also Ollama, a GGUF file on disk, or any compatible endpoint. You switch the model in the chat.',
      },
      {
        question: 'What can Agent mode do?',
        answer:
          'It reads and edits project files and runs sandboxed commands. Plan and Ask only read. Debug runs commands and diagnostics and does not change files. @ in the composer inserts a file, an older chat, a rule, a skill, or a pipeline of up to three steps.',
      },
    ],
    providersTitle: 'Your model, your key',
    providersSubtitle:
      'Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, OpenRouter, Ollama, a GGUF file, or any compatible endpoint. Switch in the chat.',
    providerCaptions: {
      anthropic: 'Claude',
      openai: 'GPT',
      grok: 'xAI Grok',
      google: 'Gemini',
      qwen: 'Qwen',
      deepseek: 'DeepSeek',
      openrouter: 'Many models, one key',
      ollama: 'Local server',
      local: 'GGUF on disk',
      custom: 'Your endpoint',
    },
    ctaTitle: 'Download the beta',
    ctaSubtitle: 'macOS, Windows and Linux. Source is on GitHub.',
    footerGroups: { product: 'Product', resources: 'Resources', legal: 'Legal' },
    footerLinks: { releases: 'Releases', source: 'Source code', issues: 'Issues', license: 'License' },
    footerRights: 'All rights reserved.',
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    languageLabel: 'Язык',
    title: 'Axiom: чат с ИИ по всему репозиторию',
    description:
      'Десктоп для macOS, Windows и Linux. Чат видит файлы, Git, терминал и Docker. История и ключи API остаются на компьютере.',
    shortDescription: 'Десктопный чат с ИИ по репозиторию, Git, терминалу и Docker. Данные на вашей машине.',
    keywords: 'Axiom, ИИ для кода, десктоп, Git, Docker, Ollama, MCP, GGUF, локально',
    tagline: 'Десктопный чат с ИИ по репозиторию, Git, терминалу и Docker.',
    download: 'Скачать',
    github: 'GitHub',
    screenshotAlt: 'Axiom на macOS: чат проекта, панель Git и терминал',
    ogImageAlt: 'Окно Axiom: чат проекта, Git и терминал',
    applicationDescription:
      'Десктопное приложение. Чат читает и правит открытый проект, работает с Git, терминалом и Docker, вызывает облачную или локальную модель. Чаты и ключи API остаются на компьютере.',
    headerDownload: 'Скачать',
    headerGithub: 'GitHub',
    heroTitle: 'Репозиторий уже открыт в чате',
    heroSubtitle:
      'Axiom, десктопное приложение. Читает проект, работает с Git, терминалом и Docker. История чата и ключи API остаются на вашем компьютере.',
    downloadBeta: 'Скачать бету',
    featuresTitle: 'Что умеет',
    features: [
      {
        title: 'Четыре режима',
        description:
          'Agent правит файлы и запускает команды в песочнице. Plan и Ask только читают. Debug гоняет команды и файлы не трогает.',
      },
      {
        title: 'Git, терминал, Docker',
        description:
          'Несколько сессий терминала. Diff, коммит, worktree и sync. В том же окне npm, Composer и Docker Compose.',
      },
      {
        title: 'Остаётся у вас',
        description:
          'Чаты, настройки и ключи провайдеров хранятся локально. Бета качается с GitHub Releases. Аккаунт Axiom не нужен.',
      },
    ],
    faqTitle: 'Вопросы',
    faq: [
      {
        question: 'Что такое Axiom?',
        answer:
          'Десктопная программа для разработчиков. Открываете папку проекта и пишете модели, которая видит эти файлы. В том же окне Git, терминал и Docker Compose. Бета для macOS, Windows и Linux.',
      },
      {
        question: 'Код остаётся на компьютере?',
        answer:
          'Чаты, настройки и ключи провайдеров лежат локально. Ollama и файл GGUF репозиторий никуда не отправляют. Облачному провайдеру уходит промпт этого запроса, вместе с файлами, которые вы приложили.',
      },
      {
        question: 'Какие модели подключаются?',
        answer:
          'Claude, GPT, Gemini, Grok, Qwen, DeepSeek и OpenRouter по их API. Ещё Ollama, файл GGUF на диске или свой endpoint. Модель переключается в чате.',
      },
      {
        question: 'Что делает режим Agent?',
        answer:
          'Читает и правит файлы проекта, запускает команды в песочнице. Plan и Ask только читают. Debug запускает команды и диагностику, файлы не меняет. @ в поле ввода подставляет файл, старый чат, правило, навык или пайплайн до трёх шагов.',
      },
    ],
    providersTitle: 'Своя модель и свой ключ',
    providersSubtitle:
      'Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, OpenRouter, Ollama, файл GGUF или свой endpoint. Переключается в чате.',
    providerCaptions: {
      anthropic: 'Claude',
      openai: 'GPT',
      grok: 'xAI Grok',
      google: 'Gemini',
      qwen: 'Qwen',
      deepseek: 'DeepSeek',
      openrouter: 'Много моделей, один ключ',
      ollama: 'Локальный сервер',
      local: 'GGUF на диске',
      custom: 'Свой endpoint',
    },
    ctaTitle: 'Скачайте бету',
    ctaSubtitle: 'macOS, Windows и Linux. Исходники на GitHub.',
    footerGroups: { product: 'Продукт', resources: 'Материалы', legal: 'Документы' },
    footerLinks: { releases: 'Релизы', source: 'Исходный код', issues: 'Баги', license: 'Лицензия' },
    footerRights: 'Все права защищены.',
  },
}

export const localeCodes = ['en', 'ru'] as const satisfies readonly Locale[]

const localeLabels: Readonly<Record<Locale, string>> = {
  en: 'EN',
  ru: 'RU',
}

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'ru'
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : 'en'
}

export function translationFor(value: string | undefined): Translation {
  return translations[resolveLocale(value)]
}

export function localeLabel(locale: Locale): string {
  return localeLabels[locale]
}
