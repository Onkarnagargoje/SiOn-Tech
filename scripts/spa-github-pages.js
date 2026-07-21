import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

/** GitHub Pages SPA fallback: unknown routes serve index via 404.html */
const dist = join(process.cwd(), 'dist')
const index = join(dist, 'index.html')
const fallback = join(dist, '404.html')

if (!existsSync(index)) {
  console.error('spa-github-pages: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

copyFileSync(index, fallback)
console.log('spa-github-pages: wrote dist/404.html')
