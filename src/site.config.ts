const GITHUB_REPOSITORY = 'uonick/axiom'
const REPOSITORY_URL = `https://github.com/${GITHUB_REPOSITORY}`

export const providerKeys = [
  'anthropic',
  'openai',
  'grok',
  'google',
  'qwen',
  'deepseek',
  'openrouter',
  'ollama',
  'local',
  'custom',
] as const

export type ProviderKey = (typeof providerKeys)[number]

export const providerNames: Readonly<Record<ProviderKey, string>> = {
  anthropic: 'Anthropic',
  openai: 'OpenAI',
  grok: 'Grok',
  google: 'Google',
  qwen: 'Qwen',
  deepseek: 'DeepSeek',
  openrouter: 'OpenRouter',
  ollama: 'Ollama',
  local: 'Local',
  custom: 'Custom',
}

export const installerAssetSuffix = {
  macSilicon: 'silicon.dmg',
  macIntel: 'intel.dmg',
  windows: 'install.exe',
  linux: 'install.deb',
} as const

export const siteConfig = {
  name: 'Axiom',
  repositoryUrl: REPOSITORY_URL,
  releasesUrl: `${REPOSITORY_URL}/releases`,
  latestReleaseUrl: `${REPOSITORY_URL}/releases/latest`,
  latestReleaseApiUrl: `https://api.github.com/repos/${GITHUB_REPOSITORY}/releases/latest`,
  application: {
    category: 'DeveloperApplication',
    operatingSystems: 'macOS, Windows, Linux',
  },
} as const
