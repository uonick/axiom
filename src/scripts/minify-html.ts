import { unlink } from 'node:fs/promises'
import { minify } from 'html-minifier-terser'

const htmlPath = 'build/index.html'

const stripEmptyEntry = async (html: string): Promise<string> => {
  const match = html.match(/<script type="module" crossorigin src="\.\/([^"]+)"><\/script>/)
  if (!match) return html

  const scriptPath = `build/${match[1]}`
  const scriptFile = Bun.file(scriptPath)
  if (!(await scriptFile.exists()) || (await scriptFile.text()).trim() !== '') return html

  await unlink(scriptPath)
  return html.replace(match[0], '')
}

const html = await stripEmptyEntry(await Bun.file(htmlPath).text())
const minified = await minify(html, {
  caseSensitive: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  removeComments: true,
})

await Bun.write(htmlPath, minified)
