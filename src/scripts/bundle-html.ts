await Bun.build({
  entrypoints: ['./src/index.html'],
  outdir: 'build',
  minify: true,
  target: 'browser',
  naming: {
    asset: 'img/[name]-[hash].[ext]',
  },
})
