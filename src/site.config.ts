const GITHUB_REPOSITORY = 'uonick/axiom'
const REPOSITORY_URL = `https://github.com/${GITHUB_REPOSITORY}`

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
    price: '0',
    priceCurrency: 'USD',
  },
} as const
