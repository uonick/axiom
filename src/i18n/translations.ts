import type { Locale, Translation } from './translations.types'

export const translations: Readonly<Record<Locale, Translation>> = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    languageLabel: 'Language',
    title: 'Axiom: the unified AI workspace for modern team development',
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
    heroTitle: 'The unified AI workspace for modern team development',
    heroSubtitle:
      'Axiom brings full-project context to your chat. It works in your Git, terminal and Docker, runs any model, and keeps chats and API keys on your machine.',
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
    screens: [
      {
        title: 'Projects and chats, side by side',
        description:
          'The open folder, its chats and token use. Switch projects without leaving the window.',
        alt: 'Axiom project list, chats and token use',
      },
      {
        title: 'Git next to the chat',
        description:
          'Context, commits and branches in the same column. Pull, push and Docker stay in this window.',
        alt: 'Axiom project context and Git panel',
      },
    ],
    ctaTitle: 'Stop pasting code into chats',
    ctaSubtitle: 'Axiom is a multi-agent desktop client for managing code, environment and agents. Built for companies and teams. Beta for macOS, Windows and Linux.',
    footerGroups: { product: 'Product', resources: 'Resources', legal: 'Legal' },
    footerLinks: { releases: 'Releases', source: 'Source code', issues: 'Issues', license: 'License' },
    footerRights: 'All rights reserved.',
  },
  ru: {
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    languageLabel: 'Язык',
    title: 'Axiom: код, окружение и агенты в одном окне',
    description:
      'Десктоп для macOS, Windows и Linux. Агенты работают с вашим кодом, Git, терминалом и Docker. Модель любая, чаты и ключи API хранятся у вас.',
    shortDescription: 'Десктоп для команд: код, Git, терминал, Docker и агенты в одном окне. Всё хранится локально.',
    keywords: 'Axiom, нейросеть для кода, десктоп, Git, Docker, Ollama, MCP, GGUF, локально',
    tagline: 'Код, окружение и агенты в одном окне.',
    download: 'Скачать',
    github: 'GitHub',
    screenshotAlt: 'Axiom на macOS: чат проекта, панель Git и терминал',
    ogImageAlt: 'Окно Axiom: чат проекта, Git и терминал',
    applicationDescription:
      'Десктопный клиент для компаний и команд. Агенты читают и правят открытый проект, работают с Git, терминалом и Docker, ходят в облачную или локальную модель. Чаты и ключи API остаются на компьютере.',
    headerDownload: 'Скачать',
    headerGithub: 'GitHub',
    heroTitle: 'Код, окружение и агенты в одном окне',
    heroSubtitle:
      'Десктопный клиент для компаний и команд. Агенты читают проект, правят код, ходят в Git, терминал и Docker, а чаты и ключи лежат у вас на диске.',
    downloadBeta: 'Скачать бету',
    featuresTitle: 'Для настоящей работы с кодом',
    features: [
      {
        title: 'Работает там же, где вы',
        description:
          'Читает проект, правит файлы точечными диффами, гоняет команды в песочнице. Git, терминалы, npm, Composer и Docker Compose, всё в этом же окне.',
      },
      {
        title: 'Четыре режима',
        description:
          'Agent правит и запускает. Plan и Ask только читают. Debug гоняет диагностику, файлы не трогает. Через @ в чат попадает файл, старый диалог, правило, навык или пайплайн.',
      },
      {
        title: 'Всё у вас на диске',
        description:
          'Чаты, настройки и ключи лежат локально. Аккаунт не нужен, облака нет. С Ollama или GGUF код вообще не уходит с машины.',
      },
    ],
    faqTitle: 'Вопросы',
    faq: [
      {
        question: 'Что такое Axiom?',
        answer:
          'Мультиагентный десктопный клиент для работы с кодом, окружением и агентами. Рассчитан на компании и команды. Открываете папку проекта и общаетесь с моделью, которая видит файлы. Git, терминал и Docker Compose в том же окне. Бета для macOS, Windows и Linux.',
      },
      {
        question: 'Код остаётся на компьютере?',
        answer:
          'Чаты, настройки и ключи провайдеров лежат локально. Ollama и GGUF репозиторий никуда не отправляют. Облачный провайдер получает только промпт конкретного запроса и файлы, которые вы приложили.',
      },
      {
        question: 'Какие модели подключаются?',
        answer:
          'Claude, GPT, Gemini, Grok, Qwen, DeepSeek и OpenRouter через их API. Плюс Ollama, GGUF на диске или свой endpoint. Модель меняется прямо в чате.',
      },
      {
        question: 'Что делает режим Agent?',
        answer:
          'Читает и правит файлы проекта, запускает команды в песочнице. Удаление файла, команда на хосте и push ждут вашего подтверждения. Plan и Ask только читают. Debug запускает команды и диагностику, файлы не меняет. @ в поле ввода подставляет файл, старый чат, правило, навык или пайплайн до трёх шагов.',
      },
    ],
    providersTitle: 'Своя модель, свой ключ',
    providersSubtitle:
      'Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, OpenRouter, Ollama, файл GGUF или свой endpoint. Переключайте прямо в чате.',
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
    screens: [
      {
        title: 'Проекты и чаты рядом',
        description: 'Открытая папка, её чаты и расход токенов. Переключение между проектами в том же окне.',
        alt: 'Axiom: список проектов, чаты и расход токенов',
      },
      {
        title: 'Git рядом с чатом',
        description: 'Контекст, коммиты и ветки в той же колонке. Pull, push и Docker остаются в этом окне.',
        alt: 'Axiom: контекст проекта и панель Git',
      },
    ],
    ctaTitle: 'Хватит копировать код в чат',
    ctaSubtitle: 'Axiom, мультиагентный десктопный клиент для работы с кодом, окружением и агентами. Для компаний и команд. Бета для macOS, Windows и Linux.',
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
