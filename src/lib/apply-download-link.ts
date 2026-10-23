import { installerAssetSuffix, siteConfig } from '../site.config'

type DesktopPlatform = 'mac' | 'windows' | 'linux'
type InstallerKind = keyof typeof installerAssetSuffix

type UserAgentData = Readonly<{
  platform: string
  getHighEntropyValues: (hints: readonly string[]) => Promise<Readonly<{ architecture?: string; platform?: string }>>
}>

const handheldPattern = /Android|iPhone|iPad|iPod/i

function isUserAgentData(value: unknown): value is UserAgentData {
  if (typeof value !== 'object' || value === null) return false
  if (!('platform' in value) || typeof value.platform !== 'string') return false
  return 'getHighEntropyValues' in value && typeof value.getHighEntropyValues === 'function'
}

function readUserAgentData(): UserAgentData | null {
  if (!('userAgentData' in navigator)) return null
  return isUserAgentData(navigator.userAgentData) ? navigator.userAgentData : null
}

function isHandheld(): boolean {
  if (handheldPattern.test(navigator.userAgent)) return true
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
}

function isAppleSiliconGpu(): boolean {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('webgl')
  if (!context) return true
  const debugInfo = context.getExtension('WEBGL_debug_renderer_info')
  if (!debugInfo) return true
  const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
  if (typeof renderer !== 'string' || renderer.length === 0) return true
  return !/Intel/i.test(renderer)
}

function installerKindForMac(architecture: string | undefined): InstallerKind {
  if (architecture === 'arm' || architecture === 'arm64') return 'macSilicon'
  if (architecture === 'x86' || architecture === 'x86_64') return 'macIntel'
  return isAppleSiliconGpu() ? 'macSilicon' : 'macIntel'
}

async function detectInstallerKind(): Promise<InstallerKind | null> {
  if (isHandheld()) return null

  const userAgentData = readUserAgentData()
  if (userAgentData) {
    const hints = await userAgentData.getHighEntropyValues(['architecture', 'platform'])
    const platformName = (hints.platform ?? userAgentData.platform).toLowerCase()
    if (platformName.includes('windows')) return 'windows'
    if (platformName.includes('linux')) return 'linux'
    if (platformName.includes('mac')) return installerKindForMac(hints.architecture)
    return null
  }

  const userAgent = navigator.userAgent
  if (/Windows/i.test(userAgent)) return 'windows'
  if (/Linux/i.test(userAgent)) return 'linux'
  if (/Mac/i.test(userAgent)) return isAppleSiliconGpu() ? 'macSilicon' : 'macIntel'
  return null
}

function desktopPlatform(installerKind: InstallerKind): DesktopPlatform {
  if (installerKind === 'windows' || installerKind === 'linux') return installerKind
  return 'mac'
}

function readInstallerUrl(body: unknown, suffix: string): string | null {
  if (typeof body !== 'object' || body === null || !('assets' in body) || !Array.isArray(body.assets)) return null

  for (const asset of body.assets) {
    if (typeof asset !== 'object' || asset === null) continue
    if (!('name' in asset) || typeof asset.name !== 'string' || !asset.name.endsWith(suffix)) continue
    if (!('browser_download_url' in asset) || typeof asset.browser_download_url !== 'string') continue
    return asset.browser_download_url
  }

  return null
}

async function findLatestInstallerUrl(suffix: string): Promise<string | null> {
  const response = await fetch(siteConfig.latestReleaseApiUrl, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!response.ok) return null
  return readInstallerUrl(await response.json(), suffix)
}

const downloadButtons = document.querySelectorAll<HTMLAnchorElement>('[data-download]')
if (downloadButtons.length > 0) {
  void (async () => {
    try {
      const installerKind = await detectInstallerKind()
      if (!installerKind) return
      const platform = desktopPlatform(installerKind)
      downloadButtons.forEach((button) => {
        button.dataset.platform = platform
      })
      const installerUrl = await findLatestInstallerUrl(installerAssetSuffix[installerKind])
      if (installerUrl) downloadButtons.forEach((button) => (button.href = installerUrl))
    } catch {
      return
    }
  })()
}
