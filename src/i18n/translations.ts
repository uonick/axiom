import type { Locale, Translation } from './translations.types'

export const translations: Readonly<Record<Locale, Translation>> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    languageLabel: 'Language',
    title: 'Axiom: the AI that already knows your repo',
    description:
      'Desktop app for macOS, Windows and Linux. Axiom reads your project, works in Git, a terminal and Docker, and runs any model. Chats and API keys stay on your machine.',
    shortDescription: 'Desktop AI that works in your repo, Git, terminal and Docker. Local-first.',
    keywords: 'Axiom, AI coding assistant, local-first, desktop app, Git, Docker, Ollama, MCP, GGUF',
    tagline: 'Desktop AI that works in your repo, Git, terminal and Docker.',
    download: 'Download',
    github: 'GitHub',
    screenshotAlt: 'Axiom on macOS: project chat, Git panel and terminal',
    ogImageAlt: 'Axiom desktop window with project chat, Git and a terminal',
    applicationDescription:
      'Local-first desktop app. The chat reads and edits the open project, uses Git, a terminal and Docker, and calls a cloud or local model. Chats and API keys stay on the machine.',
    headerDownload: 'Download',
    headerGithub: 'GitHub',
    heroTitle: 'Meet Axiom, the AI that already knows your repo',
    heroSubtitle:
      'Runs on your machine, works in your Git, terminal and Docker, and keeps chats and API keys local. Bring any model.',
    downloadBeta: 'Download beta',
    featuresTitle: 'Built for real engineering work',
    features: [
      {
        title: 'Works in your real environment',
        description:
          'Axiom reads the project, edits files with precise diffs and runs commands in a sandbox. Git, several terminals, npm, Composer and Docker Compose live in the same window.',
      },
      {
        title: 'Four modes, one chat',
        description:
          'Agent edits and runs. Plan and Ask only read. Debug runs diagnostics and leaves your files alone. Type @ to pull in a file, an old chat, a rule, a skill or a pipeline.',
      },
      {
        title: 'Stays on your machine',
        description:
          'Chats, settings and provider keys are stored locally. No Axiom account, no cloud workspace. With Ollama or a GGUF file the repo never leaves the disk.',
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
    providersTitle: 'Bring your own model and key',
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
    ctaTitle: 'Stop pasting code into chats',
    ctaSubtitle: 'Download the beta for macOS, Windows and Linux. Source is on GitHub.',
    footerGroups: { product: 'Product', resources: 'Resources', legal: 'Legal' },
    footerLinks: { releases: 'Releases', source: 'Source code', issues: 'Issues', license: 'License' },
    footerRights: 'All rights reserved.',
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    languageLabel: 'Язык',
    title: 'Axiom: ИИ, который уже знает ваш репозиторий',
    description:
      'Десктоп для macOS, Windows и Linux. Axiom читает проект, работает с Git, терминалом и Docker и подключает любую модель. Чаты и ключи API остаются на вашем компьютере.',
    shortDescription: 'Десктопный ИИ, который работает в репозитории, Git, терминале и Docker. Данные на вашей машине.',
    keywords: 'Axiom, ИИ для кода, десктоп, Git, Docker, Ollama, MCP, GGUF, локально',
    tagline: 'Десктопный ИИ, который работает в репозитории, Git, терминале и Docker.',
    download: 'Скачать',
    github: 'GitHub',
    screenshotAlt: 'Axiom на macOS: чат проекта, панель Git и терминал',
    ogImageAlt: 'Окно Axiom: чат проекта, Git и терминал',
    applicationDescription:
      'Десктопное приложение. Чат читает и правит открытый проект, работает с Git, терминалом и Docker, вызывает облачную или локальную модель. Чаты и ключи API остаются на компьютере.',
    headerDownload: 'Скачать',
    headerGithub: 'GitHub',
    heroTitle: 'Знакомьтесь, Axiom: ИИ, который уже знает ваш репозиторий',
    heroSubtitle:
      'Работает на вашей машине, в вашем Git, терминале и Docker. Чаты и ключи API остаются локально. Модель берите любую.',
    downloadBeta: 'Скачать бету',
    featuresTitle: 'Для настоящей инженерной работы',
    features: [
      {
        title: 'Работает в вашем окружении',
        description:
          'Axiom читает проект, правит файлы точечными диффами и запускает команды в песочнице. Git, несколько терминалов, npm, Composer и Docker Compose в том же окне.',
      },
      {
        title: 'Четыре режима, один чат',
        description:
          'Agent правит и запускает. Plan и Ask только читают. Debug гоняет диагностику и файлы не трогает. @ подставляет файл, старый чат, правило, навык или пайплайн.',
      },
      {
        title: 'Остаётся у вас',
        description:
          'Чаты, настройки и ключи провайдеров хранятся локально. Аккаунт Axiom не нужен, облачного рабочего места нет. С Ollama или файлом GGUF репозиторий не покидает диск.',
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
    ctaTitle: 'Хватит копировать код в чат',
    ctaSubtitle: 'Скачайте бету для macOS, Windows и Linux. Исходники на GitHub.',
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
