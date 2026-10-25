type Rgb = Readonly<{ red: number; green: number; blue: number; alpha: number }>

type FadeStop = Readonly<{ at: number; alpha: number }>

type PulledDot = {
  column: number
  row: number
  offsetX: number
  offsetY: number
  targetOffsetX: number
  targetOffsetY: number
  brightness: number
  targetBrightness: number
}

const GRID_SPACING_REM = 1.25
const DOT_RADIUS = 1
const COVER_RADIUS = 3
const NEIGHBOR_REACH = 2
const FOLLOW_RATE = 9
const LIT_ALPHA_BOOST = 0.22
const LIT_RADIUS_BOOST = 0.12
const PULL_SHARE = 0.25

const verticalFade: readonly FadeStop[] = [
  { at: 0, alpha: 0 },
  { at: 0.14, alpha: 1 },
  { at: 0.38, alpha: 1 },
  { at: 0.68, alpha: 0 },
  { at: 1, alpha: 0 },
]

const TEXT_DIM = 0.34
const TEXT_CENTER_X = 0.32
const TEXT_CENTER_Y = 0.15
const TEXT_RADIUS_X = 0.4
const TEXT_RADIUS_Y = 0.13
const TEXT_DIM_REACH = 0.4

const lightDot: Rgb = { red: 15, green: 23, blue: 42, alpha: 0.16 }
const darkDot: Rgb = { red: 242, green: 243, blue: 244, alpha: 0.14 }

function sampleFade(stops: readonly FadeStop[], ratio: number): number {
  const first = stops[0]
  if (!first || ratio <= first.at) return first?.alpha ?? 0
  for (let index = 1; index < stops.length; index += 1) {
    const previous = stops[index - 1]
    const next = stops[index]
    if (!previous || !next || ratio > next.at) continue
    const span = next.at - previous.at
    if (span <= 0) return next.alpha
    const mix = (ratio - previous.at) / span
    return previous.alpha + (next.alpha - previous.alpha) * mix
  }
  return stops[stops.length - 1]?.alpha ?? 0
}

function fieldAlpha(x: number, y: number, width: number, height: number): number {
  if (width <= 0 || height <= 0) return 0
  const xRatio = x / width
  const yRatio = y / height
  const distance = Math.hypot((xRatio - TEXT_CENTER_X) / TEXT_RADIUS_X, (yRatio - TEXT_CENTER_Y) / TEXT_RADIUS_Y)
  const textFade = distance <= TEXT_DIM_REACH ? TEXT_DIM : distance >= 1 ? 1 : TEXT_DIM + (1 - TEXT_DIM) * ((distance - TEXT_DIM_REACH) / (1 - TEXT_DIM_REACH))
  return sampleFade(verticalFade, yRatio) * textFade
}

function parseRgb(value: string): Rgb | null {
  const channels = value.match(/[\d.]+/g)
  if (!channels || channels.length < 3) return null
  const red = Number(channels[0])
  const green = Number(channels[1])
  const blue = Number(channels[2])
  const alpha = channels.length > 3 ? Number(channels[3]) : 1
  if ([red, green, blue, alpha].some((channel) => Number.isNaN(channel))) return null
  return { red, green, blue, alpha }
}

function readSpacing(): number {
  const rootSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize)
  return GRID_SPACING_REM * (Number.isNaN(rootSize) ? 16 : rootSize)
}

function readCoverColor(): string {
  const color = getComputedStyle(document.body).backgroundColor
  if (color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)') return color
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? '#17181a' : '#f8fafc'
}

function readDotColor(section: HTMLElement): Rgb {
  const specified = getComputedStyle(section, '::before').getPropertyValue('--hero-grid-dot')
  return parseRgb(specified) ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? darkDot : lightDot)
}

export function mountHeroDotGrid(section: HTMLElement): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const canvas = section.querySelector('.hero-grid-dots')
  if (!(canvas instanceof HTMLCanvasElement)) return
  const context = canvas.getContext('2d')
  if (!context) return

  const pulledDots = new Map<string, PulledDot>()
  let spacing = readSpacing()
  let viewWidth = 0
  let viewHeight = 0
  let dotColor = readDotColor(section)
  let coverColor = readCoverColor()
  let frame = 0

  function resize(): void {
    spacing = readSpacing()
    viewWidth = section.clientWidth
    viewHeight = section.clientHeight
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 3)
    canvas.width = Math.max(1, Math.round(viewWidth * pixelRatio))
    canvas.height = Math.max(1, Math.round(viewHeight * pixelRatio))
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    draw()
  }

  function dotKey(column: number, row: number): string {
    return column + ':' + row
  }

  function origin(column: number, row: number): Readonly<{ x: number; y: number }> {
    return { x: spacing / 2 + column * spacing, y: spacing / 2 + row * spacing }
  }

  function aim(pointerX: number | null, pointerY: number | null): void {
    for (const pulled of pulledDots.values()) {
      pulled.targetOffsetX = 0
      pulled.targetOffsetY = 0
      pulled.targetBrightness = 0
    }
    if (pointerX === null || pointerY === null) return
    const column = Math.round((pointerX - spacing / 2) / spacing)
    const row = Math.round((pointerY - spacing / 2) / spacing)
    const maxPull = spacing * PULL_SHARE
    for (let rowOffset = -NEIGHBOR_REACH; rowOffset <= NEIGHBOR_REACH; rowOffset += 1) {
      for (let columnOffset = -NEIGHBOR_REACH; columnOffset <= NEIGHBOR_REACH; columnOffset += 1) {
        const dotColumn = column + columnOffset
        const dotRow = row + rowOffset
        if (dotColumn < 0 || dotRow < 0) continue
        const dotOrigin = origin(dotColumn, dotRow)
        if (fieldAlpha(dotOrigin.x, dotOrigin.y, viewWidth, viewHeight) <= 0) continue
        const deltaX = pointerX - dotOrigin.x
        const deltaY = pointerY - dotOrigin.y
        const distance = Math.hypot(deltaX, deltaY)
        const pull = distance === 0 ? 0 : Math.min(maxPull, distance)
        const key = dotKey(dotColumn, dotRow)
        const pulled = pulledDots.get(key) ?? {
          column: dotColumn,
          row: dotRow,
          offsetX: 0,
          offsetY: 0,
          targetOffsetX: 0,
          targetOffsetY: 0,
          brightness: 0,
          targetBrightness: 0,
        }
        pulled.targetOffsetX = distance === 0 ? 0 : (deltaX / distance) * pull
        pulled.targetOffsetY = distance === 0 ? 0 : (deltaY / distance) * pull
        pulled.targetBrightness = 1
        pulledDots.set(key, pulled)
      }
    }
  }

  function ease(deltaSeconds: number): boolean {
    const blend = 1 - Math.exp(-FOLLOW_RATE * deltaSeconds)
    let isMoving = false
    for (const [key, pulled] of pulledDots) {
      pulled.offsetX += (pulled.targetOffsetX - pulled.offsetX) * blend
      pulled.offsetY += (pulled.targetOffsetY - pulled.offsetY) * blend
      pulled.brightness += (pulled.targetBrightness - pulled.brightness) * blend
      const gap = Math.hypot(pulled.targetOffsetX - pulled.offsetX, pulled.targetOffsetY - pulled.offsetY)
      const lightGap = Math.abs(pulled.targetBrightness - pulled.brightness)
      if (gap >= 0.04 || lightGap >= 0.01) {
        isMoving = true
        continue
      }
      pulled.offsetX = pulled.targetOffsetX
      pulled.offsetY = pulled.targetOffsetY
      pulled.brightness = pulled.targetBrightness
      if (pulled.targetBrightness === 0) pulledDots.delete(key)
    }
    return isMoving
  }

  function draw(): void {
    context.clearRect(0, 0, viewWidth, viewHeight)
    const litAlpha = Math.min(0.92, dotColor.alpha + LIT_ALPHA_BOOST)
    for (const pulled of pulledDots.values()) {
      const dotOrigin = origin(pulled.column, pulled.row)
      const mask = fieldAlpha(dotOrigin.x, dotOrigin.y, viewWidth, viewHeight)
      if (mask <= 0) continue
      context.fillStyle = coverColor
      context.globalAlpha = 1
      context.beginPath()
      context.arc(dotOrigin.x, dotOrigin.y, COVER_RADIUS, 0, Math.PI * 2)
      context.fill()
      context.fillStyle = 'rgb(' + dotColor.red + ' ' + dotColor.green + ' ' + dotColor.blue + ')'
      context.globalAlpha = mask * (dotColor.alpha + (litAlpha - dotColor.alpha) * pulled.brightness)
      context.beginPath()
      context.arc(
        dotOrigin.x + pulled.offsetX,
        dotOrigin.y + pulled.offsetY,
        DOT_RADIUS + LIT_RADIUS_BOOST * pulled.brightness,
        0,
        Math.PI * 2,
      )
      context.fill()
    }
    context.globalAlpha = 1
  }

  function start(): void {
    if (frame !== 0) return
    let last = performance.now()
    const step = (now: number) => {
      const deltaSeconds = Math.min(0.05, (now - last) / 1000)
      last = now
      const isMoving = ease(deltaSeconds)
      draw()
      frame = isMoving ? requestAnimationFrame(step) : 0
    }
    frame = requestAnimationFrame(step)
  }

  function onPointerMove(event: PointerEvent): void {
    if (event.pointerType === 'touch') return
    const bounds = canvas.getBoundingClientRect()
    aim(event.clientX - bounds.left, event.clientY - bounds.top)
    start()
  }

  function onPointerLeave(): void {
    aim(null, null)
    start()
  }

  function onThemeChange(): void {
    dotColor = readDotColor(section)
    coverColor = readCoverColor()
    draw()
  }

  resize()
  const resizeObserver = new ResizeObserver(() => {
    resize()
  })
  resizeObserver.observe(section)
  section.addEventListener('pointermove', onPointerMove)
  section.addEventListener('pointerleave', onPointerLeave)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', onThemeChange)
}
