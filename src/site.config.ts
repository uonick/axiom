const REPOSITORY_URL = 'https://github.com/uonick/axiom'

export const siteConfig = {
  name: 'Axiom',
  repositoryUrl: REPOSITORY_URL,
  releasesUrl: `${REPOSITORY_URL}/releases`,
  latestReleaseUrl: `${REPOSITORY_URL}/releases/latest`,
  application: {
    category: 'DeveloperApplication',
    operatingSystems: 'macOS, Windows, Linux',
    price: '0',
    priceCurrency: 'USD',
  },
} as const
