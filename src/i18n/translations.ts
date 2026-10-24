import type { Locale, Translation } from "./translations.types";

export const translations: Readonly<Record<Locale, Translation>> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    languageLabel: "Language",
    title: "Axiom: the unified AI workspace for modern team development",
    description:
      "Desktop app for macOS, Windows and Linux. Axiom reads your project, works in Git, a terminal and Docker, and runs any model. Chats and API keys stay on your machine.",
    shortDescription:
      "Desktop AI that works in your repo, Git, terminal and Docker. Local-first.",
    keywords:
      "Axiom, AI coding assistant, local-first, desktop app, Git, Docker, Ollama, MCP, GGUF",
    tagline: "Desktop AI that works in your repo, Git, terminal and Docker.",
    download: "Download",
    github: "GitHub",
    screenshotAlt: "Axiom on macOS: project chat, Git panel and terminal",
    screenshotCaption: "* Not another VSCode fork",
    ogImageAlt: "Axiom desktop window with project chat, Git and a terminal",
    applicationDescription:
      "Local-first desktop app. The chat reads and edits the open project, uses Git, a terminal and Docker, and calls a cloud or local model. Chats and API keys stay on the machine.",
    headerDownload: "Download",
    headerGithub: "GitHub",
    heroTitle: "A multi-agent development environment",
    heroSubtitle:
      "One workspace for the project, the environment, models, pipelines, and agent orchestration",
    betaBadge: "beta",
    featuresTitle: "Agent modes",
    features: [
      {
        title: "Environment control",
        description:
          "Run Docker, Git, Composer, and npm without launching other apps",
        alt: "Docker and npm scripts in the Axiom environment panel",
      },
      {
        title: "Work modes",
        description:
          "Agent edits the code. Ask advises on the code. Plan scopes the feature",
        alt: "Agent, Plan and Ask mode menu in the Axiom composer",
      },
      {
        title: "Any model",
        description:
          "Connect your own local models, or any other model as a GGUF file",
        alt: "Model providers in Axiom: Anthropic, OpenAI, Grok, Google, Qwen, DeepSeek and OpenRouter",
      },
    ],
    faqTitle: "Questions",
    faq: [
      {
        question: "What is Axiom?",
        answer:
          "A multi-agent desktop client for code, the environment, and agents. Built for companies and teams. Open a project folder and talk to a model that can see those files. Git, a terminal, and Docker Compose stay in the same window",
      },
      {
        question: "Does my code stay on the machine?",
        answer:
          "Chats, settings and provider keys are stored locally. Ollama or a GGUF file does not upload the repo. A cloud provider receives the prompt for that request, including files you attached",
      },
      {
        question: "Which models can I connect?",
        answer:
          "Claude, GPT, Gemini, Grok, Qwen, DeepSeek and OpenRouter through their APIs. Also Ollama, a GGUF file on disk, or any compatible endpoint. You switch the model in the chat",
      },
      {
        question: "What can Agent mode do?",
        answer:
          "It reads and edits project files and runs sandboxed commands. Plan and Ask only read. Debug runs commands and diagnostics and does not change files. @ in the composer inserts a file, an older chat, a rule, a skill, or a pipeline of up to three steps",
      },
    ],
    usageEyebrow: "Ways to use",
    usageTitle: "Pick how you use it",
    usageSubtitle:
      "From a solo setup on your laptop to a whole company on one config",
    usageSoonBadge: "WIP",
    usage: [
      {
        title: "Free",
        description:
          "Install local models with no extra tools, set up your environment and use it free, always",
      },
      {
        title: "Your own keys",
        description:
          "Use your own keys from your favorite providers, such as OpenAI or Anthropic, and keep track of spending across projects and the app",
      },
      {
        title: "Corporate",
        description:
          "Skills, MCP, models and company settings load automatically. An employee opens the app and everything is already set up, while a manager handles the accounts",
      },
      {
        title: "Subscription",
        description:
          "One subscription for all well-known models plus our own, at the same price. Sign in, pay and start working",
      },
    ],
    providersEyebrow: "Flexible AI",
    providersTitle: "Bring your own model and key",
    providersSubtitle:
      "Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, OpenRouter, Ollama, a GGUF file, or any compatible endpoint. Switch easily during the conversation",
    providerCaptions: {
      anthropic: "Claude",
      openai: "GPT",
      grok: "xAI Grok",
      google: "Gemini",
      qwen: "Qwen",
      deepseek: "DeepSeek",
      openrouter: "Many models, one key",
      ollama: "Local server",
      local: "GGUF on disk",
      custom: "Your endpoint",
    },
    screens: [
      {
        title: "Easy project grouping",
        description: "Group chats by namespace, project, or group.",
        alt: "Axiom project list with chats grouped by folder",
      },
      {
        title: "Control Git, npm, and Docker",
        description: "Run your stack without extra apps.",
        alt: "Axiom project context and Git panel",
      },
      {
        title: "Pipelines",
        description:
          "Compose your own action chains and build your own pipeline.",
        alt: "Axiom pipelines: Quick fix, Plan and implement, Feature delivery, Bug hunt, Code review, and Security audit",
      },
    ],
    roadmapTitle: "Roadmap",
    roadmapBadge: "WIP",
    roadmap: [
      {
        title: "Team sync",
        description:
          "Your teammates only need the link. The company environment is already set up",
      },
      {
        title: "Automatic setup",
        description:
          "Rules, MCP, skills, and models for your team or company load automatically",
      },
      {
        title: "Control at hand",
        description: "Set limits, models, and prompts for your teammates",
      },
    ],
    ctaTitle: "A new level of project orchestration",
    ctaSubtitle:
      "A multi-agent desktop client for code, the environment, and agents. Built for companies and teams",
    footerGroups: {
      product: "Product",
      resources: "Resources",
      legal: "Legal",
    },
    footerLinks: {
      releases: "Releases",
      source: "Source code",
      issues: "Issues",
      license: "License",
    },
    footerRights: "All rights reserved.",
  },
  ru: {
    htmlLang: "ru",
    ogLocale: "ru_RU",
    languageLabel: "Язык",
    title: "Axiom: код, окружение и агенты в одном окне",
    description:
      "Десктоп для macOS, Windows и Linux. Агенты работают с вашим кодом, Git, терминалом и Docker. Модель любая, чаты и ключи API хранятся у вас.",
    shortDescription:
      "Десктоп для команд: код, Git, терминал, Docker и агенты в одном окне. Всё хранится локально.",
    keywords:
      "Axiom, нейросеть для кода, десктоп, Git, Docker, Ollama, MCP, GGUF, локально",
    tagline: "Код, окружение и агенты в одном окне.",
    download: "Скачать",
    github: "GitHub",
    screenshotAlt: "Axiom на macOS: чат проекта, панель Git и терминал",
    screenshotCaption: "* Не очереднойфорк VS Code. Создано в России",
    ogImageAlt: "Окно Axiom: чат проекта, Git и терминал",
    applicationDescription:
      "Десктопный клиент для компаний и команд. Агенты читают и правят открытый проект, работают с Git, терминалом и Docker, ходят в облачную или локальную модель. Чаты и ключи API остаются на компьютере.",
    headerDownload: "Скачать",
    headerGithub: "GitHub",
    heroTitle: "Мультиагентная среда разработки",
    heroSubtitle:
      "Единое пространство для проекта, окружения, моделей, пайплайнов и оркестрации агентов",
    betaBadge: "beta",
    featuresTitle: "Агентные режимы",
    features: [
      {
        title: "Управление окружением",
        description:
          "Управляйте Docker, Git, Composer и npm, не запуская дополнительных приложений",
        alt: "Панель окружения Axiom: вкладки Docker и npm со скриптами",
      },
      {
        title: "Режимы работы",
        description:
          "Agent правит код, Ask — умный советник по коду, Plan планирует фичу",
        alt: "Меню режимов Axiom: Agent, Plan и Ask",
      },
      {
        title: "Любые модели",
        description:
          "Подключайте свои локальные модели или любые другие в формате GGUF",
        alt: "Провайдеры моделей в Axiom: Anthropic, OpenAI, Grok, Google, Qwen, DeepSeek и OpenRouter",
      },
    ],
    faqTitle: "Вопросы",
    faq: [
      {
        question: "Что такое Axiom?",
        answer:
          "Мультиагентный десктопный клиент для работы с кодом, окружением и агентами. Рассчитан на компании и команды. Открываете папку проекта и общаетесь с моделью, которая видит файлы. Git, терминал и Docker Compose в том же окне",
      },
      {
        question: "Код остаётся на компьютере?",
        answer:
          "Чаты, настройки и ключи провайдеров лежат локально. Ollama и GGUF репозиторий никуда не отправляют. Облачный провайдер получает только промпт конкретного запроса и файлы, которые вы приложили",
      },
      {
        question: "Какие модели подключаются?",
        answer:
          "Claude, GPT, Gemini, Grok, Qwen, DeepSeek и OpenRouter через их API. Плюс Ollama, GGUF на диске или свой endpoint. Модель меняется прямо в чате",
      },
      {
        question: "Что делает режим Agent?",
        answer:
          "Читает и правит файлы проекта, запускает команды в песочнице. Удаление файла, команда на хосте и push ждут вашего подтверждения. Plan и Ask только читают. Debug запускает команды и диагностику, файлы не меняет. @ в поле ввода подставляет файл, старый чат, правило, навык или пайплайн до трёх шагов",
      },
    ],
    usageEyebrow: "Как использовать",
    usageTitle: "Выбирайте, как использовать",
    usageSubtitle:
      "От личной установки на ноутбуке до целой компании с единой настройкой. Платить удобно, ведь все цены в рублях",
    usageSoonBadge: "В разработке",
    usage: [
      {
        title: "Бесплатно",
        description:
          "Установите локальные модели без дополнительных инструментов, настройте окружение и пользуйтесь бесплатно всегда",
      },
      {
        title: "Свои ключи",
        description:
          "Используйте свои собственные ключи от любимых поставщиков, например OpenAI или Anthropic, и контролируйте расходы в проектах и приложении",
      },
      {
        title: "Корпоративный",
        description:
          "Skills, MCP, модели и настройки компании подгружаются автоматически. Сотрудник открывает приложение, и всё уже настроено, а руководитель управляет учётными записями",
      },
      {
        title: "Подписка",
        description:
          "Одна подписка на все известные модели и наши собственные, по той же цене. Авторизуетесь, оплачиваете и пользуетесь",
      },
    ],
    providersEyebrow: "Гибкий ИИ",
    providersTitle: "Своя модель, свой ключ",
    providersSubtitle:
      "Anthropic, OpenAI, Google, xAI, Qwen, DeepSeek, OpenRouter, Ollama, файл GGUF или свой endpoint. Легко поменять прямо во время диалога",
    providerCaptions: {
      anthropic: "Claude",
      openai: "GPT",
      grok: "xAI Grok",
      google: "Gemini",
      qwen: "Qwen",
      deepseek: "DeepSeek",
      openrouter: "Много моделей, один ключ",
      ollama: "Локальный сервер",
      local: "GGUF на диске",
      custom: "Свой endpoint",
    },
    screens: [
      {
        title: "Легкая группировка проектов",
        description: "Группируйте чаты по неймспейсам, проектам или группам.",
        alt: "Axiom: список проектов и чаты по папкам",
      },
      {
        title: "Управляйте git, npm и Docker",
        description: "Управляйте своим стеком без дополнительных приложений.",
        alt: "Axiom: контекст проекта и панель Git",
      },
      {
        title: "Пайплайны",
        description:
          "Составляйте свои цепочки действий, формируйте свой пайплайн.",
        alt: "Пайплайны Axiom: Quick fix, Plan and implement, Feature delivery, Bug hunt, Code review и Security audit",
      },
    ],
    roadmapTitle: "Роадмап",
    roadmapBadge: "в разработке",
    roadmap: [
      {
        title: "Синхронизация команды",
        description:
          "Вашим сотрудникам останется только перейти по ссылке, и окружение вашей компании уже настроено",
      },
      {
        title: "Автоматические настройки",
        description:
          "Автоматически подгружаемые правила, MCP, Skills и модели вашей команды или компании",
      },
      {
        title: "Управление под рукой",
        description:
          "Легко контролируйте лимиты, модели и промпты ваших сотрудников",
      },
    ],
    ctaTitle: "Новый уровень оркестрации проектами",
    ctaSubtitle:
      "Мультиагентный десктопный клиент для работы с кодом, окружением и агентами. Для компаний и команд",
    footerGroups: {
      product: "Продукт",
      resources: "Материалы",
      legal: "Документы",
    },
    footerLinks: {
      releases: "Релизы",
      source: "Исходный код",
      issues: "Баги",
      license: "Лицензия",
    },
    footerRights: "Все права защищены.",
  },
};

export const localeCodes = ["en", "ru"] as const satisfies readonly Locale[];

const localeLabels: Readonly<Record<Locale, string>> = {
  en: "EN",
  ru: "RU",
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ru";
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : "en";
}

export function translationFor(value: string | undefined): Translation {
  return translations[resolveLocale(value)];
}

export function localeLabel(locale: Locale): string {
  return localeLabels[locale];
}
