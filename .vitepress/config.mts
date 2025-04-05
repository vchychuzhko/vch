import { defineConfig } from 'vitepress'
import 'dotenv/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vladyslav Chychuzhko',
  description: 'Personal Website & Portfolio',
  head: [
    ['meta', { property: 'og:title', content: 'Vladyslav Chychuzhko' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Vladyslav Chychuzhko' }],
    ['meta', { property: 'og:description', content: 'Personal Website & Portfolio' }],
    ['meta', { property: 'og:url', content: process.env.BASE_URL + '/' }],
    ['meta', { property: 'og:image', content: process.env.BASE_URL + '/og.jpg' }],
    ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
    ['meta', { property: 'og:image:height', content: '200' }],
    ['meta', { property: 'og:image:width', content: '200' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png', sizes: '180x180' }],
  ],
  transformPageData({ title, description, frontmatter }) {
    if (!title || !description) return

    frontmatter.head ??= []
    frontmatter.head.push(
      ['meta', { property: 'og:title', content: title + ' | VCH' }],
      ['meta', { property: 'og:description', content: description }],
    )
  },
  srcExclude: ['**/README.md', '**/LICENSE.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'VCH',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
      { text: 'Portfolio', link: '/portfolio' },
      { text: 'Certifications', link: '/certifications' },
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/in/vchychuzhko' },
      { icon: 'github', link: 'https://github.com/vchychuzhko' },
    ],

    sidebar: [
      { text: 'Introduction', link: '/blog/' },
      {
        text: 'Web',
        base: '/blog/web',
        items: [
          { text: 'Property document.forms', link: '/forms' },
          { text: 'Attribute novalidate', link: '/novalidate' },
        ],
      },
      {
        text: 'Linux',
        base: '/blog/linux',
        items: [
          { text: 'Nginx + Apache', link: '/nginx-apache' },
        ],
      },
    ],

    outline: 'deep',

    editLink: {
      pattern: 'https://github.com/vchychuzhko/vch/blob/master/:path',
      text: 'View this page on GitHub',
    },

    lastUpdated: true,

    footer: {
      copyright: 'Copyright © Vladyslav Chychuzhko',
    },
  }
})
