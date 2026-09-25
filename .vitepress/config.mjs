import { defineConfig } from 'vitepress'

// Served from https://<user>.github.io/cub-doc/ by default.
// Change `base` to '/' if you deploy at a domain root.
export default defineConfig({
  base: '/cub-doc/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  appearance: true, // light / dark toggle in the nav

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/cub-doc/logo.webp' }],
    ['meta', { name: 'theme-color', content: '#e0913a' }],
    ['meta', { property: 'og:title', content: 'Cub — a fast, modern terminal text editor' }],
    ['meta', { property: 'og:description', content: 'Modal editing, an integrated terminal, multiple cursors, and truecolor themes, in your terminal.' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    logo: '/logo.webp',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arthurlch/cub' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          ja: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: 'リセット',
                backButtonTitle: '戻る',
                noResultsText: '結果が見つかりません',
                footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Cub',
      description: 'A fast, modern terminal text editor — modal editing, an integrated terminal, multiple cursors, and truecolor themes.',
      themeConfig: {
        siteTitle: 'Cub',
        nav: [
          { text: 'Guide', link: '/guide/what-is-cub', activeMatch: '/guide/' },
          { text: 'Keybindings', link: '/reference/keybindings' },
          { text: 'Config', link: '/guide/configuration' },
          {
            text: 'Download',
            items: [
              { text: 'Install', link: '/guide/installation' },
              { text: 'Releases', link: 'https://github.com/arthurlch/cub/releases' },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                { text: 'What is Cub?', link: '/guide/what-is-cub' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Quick start', link: '/guide/quick-start' },
              ],
            },
            {
              text: 'Editing',
              collapsed: false,
              items: [
                { text: 'Modal editing', link: '/guide/editing' },
                { text: 'Multiple cursors', link: '/guide/multiple-cursors' },
              ],
            },
            {
              text: 'Interface',
              collapsed: false,
              items: [
                { text: 'Tabs', link: '/guide/tabs' },
                { text: 'File sidebar', link: '/guide/sidebar' },
                { text: 'Command palette', link: '/guide/command-palette' },
                { text: 'Integrated terminal', link: '/guide/terminal' },
                { text: 'Mouse', link: '/guide/mouse' },
              ],
            },
            {
              text: 'Customization',
              collapsed: false,
              items: [
                { text: 'Themes & languages', link: '/guide/themes' },
                { text: 'Configuration', link: '/guide/configuration' },
              ],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              items: [
                { text: 'Keybindings', link: '/reference/keybindings' },
                { text: 'Config actions', link: '/reference/config-actions' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/arthurlch/cub-doc/edit/master/:path',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025 · Built with VitePress',
        },
        outline: { level: [2, 3] },
      },
    },

    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Cub',
      description: '高速でモダンなターミナルテキストエディタ — モーダル編集、統合ターミナル、マルチカーソル、トゥルーカラーテーマ。',
      themeConfig: {
        siteTitle: 'Cub',
        nav: [
          { text: 'ガイド', link: '/ja/guide/what-is-cub', activeMatch: '/ja/guide/' },
          { text: 'キーバインド', link: '/ja/reference/keybindings' },
          { text: '設定', link: '/ja/guide/configuration' },
          {
            text: 'ダウンロード',
            items: [
              { text: 'インストール', link: '/ja/guide/installation' },
              { text: 'リリース', link: 'https://github.com/arthurlch/cub/releases' },
            ],
          },
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'はじめに',
              collapsed: false,
              items: [
                { text: 'Cub とは？', link: '/ja/guide/what-is-cub' },
                { text: 'インストール', link: '/ja/guide/installation' },
                { text: 'クイックスタート', link: '/ja/guide/quick-start' },
              ],
            },
            {
              text: '編集',
              collapsed: false,
              items: [
                { text: 'モーダル編集', link: '/ja/guide/editing' },
                { text: 'マルチカーソル', link: '/ja/guide/multiple-cursors' },
              ],
            },
            {
              text: 'インターフェース',
              collapsed: false,
              items: [
                { text: 'タブ', link: '/ja/guide/tabs' },
                { text: 'ファイルサイドバー', link: '/ja/guide/sidebar' },
                { text: 'コマンドパレット', link: '/ja/guide/command-palette' },
                { text: '統合ターミナル', link: '/ja/guide/terminal' },
                { text: 'マウス', link: '/ja/guide/mouse' },
              ],
            },
            {
              text: 'カスタマイズ',
              collapsed: false,
              items: [
                { text: 'テーマと言語', link: '/ja/guide/themes' },
                { text: '設定', link: '/ja/guide/configuration' },
              ],
            },
          ],
          '/ja/reference/': [
            {
              text: 'リファレンス',
              items: [
                { text: 'キーバインド', link: '/ja/reference/keybindings' },
                { text: '設定アクション', link: '/ja/reference/config-actions' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/arthurlch/cub-doc/edit/master/:path',
          text: 'GitHub でこのページを編集',
        },
        footer: {
          message: 'MIT ライセンスのもとで公開されています。',
          copyright: 'Copyright © 2025 · VitePress で構築',
        },
        outline: { label: '目次', level: [2, 3] },
        docFooter: { prev: '前のページ', next: '次のページ' },
        lastUpdatedText: '最終更新',
        returnToTopLabel: 'トップへ戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: '外観',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        langMenuLabel: '言語を変更',
      },
    },
  },
})
