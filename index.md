---
layout: home

hero:
  name: Cub
  text: A fast, modern terminal text editor
  tagline: Modal editing, an integrated terminal, multiple cursors, and truecolor themes — all in your terminal.
  image:
    src: /logo.webp
    alt: Cub logo
  actions:
    - theme: brand
      text: Get started
      link: /guide/what-is-cub
    - theme: alt
      text: Install
      link: /guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/arthurlch/cub

features:
  - icon: ⚡
    title: Instant on large files
    details: Edits and undo are O(change), not O(file). A keystroke costs the same in a 10-line file or a 100k-line one.
  - icon: ⌨️
    title: Modal, vim-style editing
    details: hjkl motions, visual mode, line registers (yy / dd / p), gg / G, and go-to-line — the muscle memory you already have.
  - icon: 🖥️
    title: Integrated terminal
    details: Real shells in a bottom panel through a built-in VT emulator. Multiple terminals, switch, resize, and close — without leaving the editor.
  - icon: 🪄
    title: Multiple cursors
    details: Stack cursors across lines and edit them all at once, with a single grouped undo.
  - icon: 🎨
    title: Truecolor themes
    details: 24 colorschemes (dark and light) and per-token syntax highlighting for 250+ languages, powered by chroma.
  - icon: 🧩
    title: Tabs & sidebar
    details: Open many files at once, browse with a resizable file tree, and jump anywhere with a fuzzy command palette.
  - icon: 🖱️
    title: Full mouse support
    details: Click to place the cursor, drag to select, resize panels by dragging, click tabs to switch or close.
  - icon: ⚙️
    title: Configurable & persistent
    details: Rebind every key in one JSON file. Your theme and layout are remembered across sessions.
---
