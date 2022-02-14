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
          /***
           * i18n
           * 
          '/zh/': {
            message: '发现新内容可用',
            buttonText: '刷新',
          },
          '/zh-TW/': {
            message: '已偵測到新内容',
            buttonText: '刷新',
          },
          '/ja/': {
            message: '新しいコンテンツが利用可能です',
            buttonText: 'リロード',
          },
          ***/
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
    /***
     * i18n
     * 
    '/ja/': {
      lang: 'ja-JP',
      title: "とこまち Wiki",
      description: "戌亥とこ × 星街すいせい とこまちの活動記録。",
    },
    '/zh/': {
      lang: 'zh-CN',
      title: "星床 Wiki",
      description: "关于星街彗星的音乐排行以及演唱会纪录",
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      title: "星床 Wiki",
      description: "關於星街彗星的音樂榜單以及演唱會紀錄",
    },
    */
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
                // link:'/topics/music/',
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

      /*** 
      '/zh/': {
        lang: 'zh-CN',
        navbar: [
          {
            text: "Timeline",
            link: "/zh/timeline/",
            children: [
              "/zh/timeline/2019/",
              "/zh/timeline/2020/",
              "/zh/timeline/2021/",
              "/zh/timeline/2022/",
            ],
          },
        ],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: '选择语言',
      },
      */
    },
  },
})
