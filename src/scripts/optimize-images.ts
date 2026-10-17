import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'

type ImageJob = Readonly<{
  name: string
  source: string
  widths: readonly number[]
}>

const root = join(import.meta.dir, '..')
const OUTPUT_DIRECTORY = join(root, '.generated')
const WEBP_QUALITY = 80

const jobs: readonly ImageJob[] = [
  {
    name: 'screenshot',
    source: join(root, 'img', 'screenshot.png'),
    widths: [640, 1024, 1600, 2104],
  },
]

const optimizeJob = async (job: ImageJob): Promise<void> => {
  const source = await Bun.file(job.source).bytes()

  await Promise.all(
    job.widths.map(async (width) => {
      const outputPath = join(OUTPUT_DIRECTORY, `${job.name}-${width}.webp`)
      const image = new Bun.Image(source)
        .resize(width, undefined, { withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
      const size = await image.write(outputPath)
      console.log(`${outputPath}  ${image.width}x${image.height}  ${(size / 1024).toFixed(0)} KB`)
    }),
  )
}

const OPEN_GRAPH_WIDTH = 1200
const OPEN_GRAPH_QUALITY = 85

const writeOpenGraphImage = async (): Promise<void> => {
  const source = await Bun.file(join(root, 'img', 'screenshot.png')).bytes()
  const image = new Bun.Image(source)
    .resize(OPEN_GRAPH_WIDTH, undefined, { withoutEnlargement: true })
    .jpeg({ quality: OPEN_GRAPH_QUALITY })
  const outputPath = join(OUTPUT_DIRECTORY, 'og-image.jpg')
  const size = await image.write(outputPath)
  console.log(`${outputPath}  ${image.width}x${image.height}  ${(size / 1024).toFixed(0)} KB`)
}

await mkdir(OUTPUT_DIRECTORY, { recursive: true })
await Promise.all([...jobs.map(optimizeJob), writeOpenGraphImage()])
