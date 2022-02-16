import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({

  // Site Meta Info
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/android-chrome-192x192.png',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: '/android-chrome-192x192.png',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:site',
        content: 'Tokomachi Wiki | Treasure every moment',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: '/android-chrome-192x192.png',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'This is a Wikipedia-like site to record Tokomachi activities and details.',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'article',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Tokomachi Wiki | Treasure every moment',
      },
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'Tokomachi Wiki',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://toko.suisei.cc/',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/android-chrome-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#9d3757',
      },
    ],
    [
      'script',
      {
        defer: true,
        src: 'https://beacon.suisei.cc/app.js',
        'data-domain': 'toko.suisei.cc',
      },
    ],
  ],

  // Plugin Settings
  plugins: [
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
    [
      '@vuepress/plugin-pwa-popup',
      {
        locales: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
      },
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: '5f99591946e906eb23522719122e3882',
        appId: 'MWDE3H8IGO',
        indexName: 'main',
        locales: {
          '/': {
            placeholder: 'Search',
            translations: {
              button: {
                buttonText: 'Search',
              },
            },
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],

  // Language i18n
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Tokomachi Wiki',
      description: 'This is a Wikipedia-like site to record Tokomachi activities and details.',
    },
  },

  // Theme Configuration
  themeConfig: {
    logo: '/android-chrome-192x192.png',

    // Repo and Dev branch
    repo: 'aozaki-kuro/suisei-toko-history',
    docsDir: 'docs',
    docsBranch: 'dev',

    // Meta info
    contributors: false,
    lastUpdated: true,

    // Navbar
    locales: {
      '/': {
        navbar: [
          {
            text: '📅 Timeline',
            children: ['/timeline/2019/', '/timeline/2020/', '/timeline/2021/', '/timeline/2022/'],
          },
          {
            text: '💭 Topics',
            children: [
              {
                text: 'Tokomachi Music',
                children: [
                  '/topics/music/list/',
                  '/topics/music/toko_whoiam/',
                  '/topics/music/suisei_ghost/',
                  '/topics/music/suisei_galaxy/',
                ],
              },
              {
                text: 'Tokomachi Radio',
                children: ['/topics/tokomachi_radio_s01/', '/topics/tokomachi_radio_s02/'],
              },
            ],
          },
        ],
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Languages',
      },
    },
  },
})
