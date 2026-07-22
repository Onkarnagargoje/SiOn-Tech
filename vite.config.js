import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { BLOG_POSTS } from './src/data/blog.js'

const SITE_URL = 'https://siontechsolutions.com'

const staticRoutes = [
  '/about',
  '/services',
  '/portfolio',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/careers',
  '/technologies',
  '/case-studies',
]

const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.id}`)

export default defineConfig({
  // Custom domain (siontechsolutions.com) must use root base
  base: '/',
  plugins: [
    react(),
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: [...staticRoutes, ...blogRoutes],
      exclude: ['/404'],
      readable: true,
      // Keep custom public/robots.txt (AI crawlers + Host)
      generateRobotsTxt: false,
      changefreq: {
        '*': 'monthly',
        '/': 'weekly',
        '/blog': 'weekly',
        '/contact': 'monthly',
        '/services': 'monthly',
      },
      priority: {
        '*': 0.6,
        '/': 1.0,
        '/services': 0.95,
        '/contact': 0.95,
        '/about': 0.85,
        '/blog': 0.85,
        '/portfolio': 0.7,
      },
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/')) {
              return 'vendor'
            }
          }
        },
      },
    },
  },
})
