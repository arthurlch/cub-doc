# What is Cub?

**Cub** is a fast, modern, terminal-based text editor. It pairs a modal,
Vim/Kakoune-style editing model with a polished TUI — a file sidebar, tabs, a
fuzzy file finder, an integrated terminal, mouse support, and truecolor
themes — built on the [Charm](https://charm.sh) stack (Bubble Tea + Lip Gloss).

It's small, keyboard-first, and stays instant even on very large files.

## Two modes

Cub is modal. You're always in one of two modes:

- **View mode** — navigate, select, and manipulate text (this is where you land).
- **Insert mode** — type and edit text. Press `i` to enter, `Esc` to leave.

If you've used Vim, you'll feel at home immediately. If you haven't, the
[Quick start](./quick-start) walks you through the handful of keys you need.

## Highlights

- **⚡ Instant on large files** — edits and undo are O(change), not O(file), so a
  keystroke costs the same whether the file has 10 lines or 100,000.
- **⌨️ Modal editing** — `hjkl` motions, `w`/`b` words, `gg`/`G`, visual mode
  (`v`), and line registers (`yy`/`dd`/`p`).
- **🪄 Multiple cursors** — stack cursors across lines and edit them all at once,
  with grouped undo.
- **🖥️ Integrated terminal** — one or more real shells in a bottom panel, powered
  by a built-in VT emulator.
- **🎨 Truecolor themes** — 24 colorschemes (dark and light) and per-token syntax
  highlighting for 250+ languages via [chroma](https://github.com/alecthomas/chroma).
- **🧩 Tabs & sidebar** — many files at once, each with its own cursor and undo
  history, plus a resizable file explorer.
- **🔍 Command palette** — fuzzy file finder (`Ctrl+P`).
- **🖱️ Full mouse support** — click, drag-select, drag-to-resize, wheel, click
  tabs.
- **⚙️ Configurable** — rebind every global and view-mode key; your theme and
  sidebar side are remembered, all in one JSON config.

## Next steps

<div class="vp-doc">

- [Install Cub →](./installation)
- [Quick start →](./quick-start)
- [Keybindings reference →](/reference/keybindings)

</div>
