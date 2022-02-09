module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/android-chrome-192x192.png' }],
    ['meta', { name: 'twitter:card', content: '/android-chrome-192x192.png' }],
    ['meta', { name: 'twitter:site', content: 'Tokomachi Wiki | Treasure every moment' }],
    ['meta', { name: 'twitter:image', content: '/android-chrome-192x192.png' }],
    ['meta', { name: 'twitter:description', content: "This is a Wikipedia-like site to record Tokomachi activities and details." }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Tokomachi Wiki | Treasure every moment' }],
    ['meta', { property: 'og:site_name', content: 'Tokomachi Wiki' }],
    ['meta', { property: 'og:url', content: 'https://toko.suisei.cc/' }],
    ['meta', { property: 'og:image', content: '/android-chrome-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#9d3757' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
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
        },
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
          '/zh-TW/': {
            placeholder: '檢索',
          },
          '/ja/': {
            placeholder: '検索',
          },
        },
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: "Tokomachi Wiki",
      description: "A Compilation Site for Hoshimachi Suisei's music ranking and live event recordings.",
    },
    '/ja/': {
      lang: 'ja-JP',
      title: "とこまち Wiki",
      description: "すいちゃんのオリジナルソングランキングとライブリストのまとめサイト",
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
  },
  themeConfig: {
    logo: '/android-chrome-192x192.png',
    docsDir: 'docs',
    contributors: false,
    lastUpdated: true,
    locales: {
      '/': {
        navbar: [
          {
            text: "Timeline",
            link: "/timeline/",
            children: [
              "/timeline/2019/",
              "/timeline/2020/",
              "/timeline/2021/",
              "/timeline/2022/",
            ],
          },
          {
            text: "Credit",
            link: "/credit/",
          },
        ],
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        selectLanguageAriaLabel: 'Languages',
      },
      '/zh/': {
        lang: 'zh-CN',
        navbar: [
          {
            text: "Credit",
            link: "/credit/",
          },
        ],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: '选择语言',
      },
      '/zh-tw/': {
        lang: 'zh-TW',
        navbar: [
          {
            text: "音樂榜單",
            link: "/zh-tw/ranking/",
          },
          {
            text: "演唱會紀錄",
            link: "/zh-tw/live/",
          },
        ],
        selectLanguageText: '選擇語言',
        selectLanguageName: '繁體中文',
        selectLanguageAriaLabel: '選擇語言',
      },
      '/ja/': {
        lang: 'ja-JP',
        navbar: [
          {
            text: "ランキング",
            link: "/ja/ranking/",
          },
          {
            text: "ライブ",
            link: "/ja/live/",
          },
        ],
        selectLanguageText: '言語切替',
        selectLanguageName: '日本語',
        selectLanguageAriaLabel: '言語切替',
      },
    },
  }
}
