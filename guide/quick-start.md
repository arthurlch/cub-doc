# Quick start

Open a file (it's created on save if it doesn't exist yet):

```bash
cub main.go
```

Or start with an empty buffer:

```bash
cub
```

## The five keys to remember

You can be productive with just these:

| Key | What it does |
| --- | --- |
| `i` | Enter **insert mode** — start typing |
| `Esc` | Back to **view mode** |
| `Ctrl+S` | Save |
| `Ctrl+Q` | Quit |
| `Ctrl+H` | Show the in-app keybinding help |

## A 30-second tour

1. Cub opens in **view mode**. Move around with `h` `j` `k` `l` (or the arrow keys).
2. Press `i` to insert, type some text, then `Esc` to go back to view mode.
3. Duplicate the current line: `yy` then `p`. Delete a line: `dd`.
4. Select text: press `v`, move to extend, then `y` (copy) or `d` (delete).
5. Save with `Ctrl+S`, quit with `Ctrl+Q`.

::: tip Try the extras
- **Open a file fast:** `Ctrl+P` for the fuzzy finder, or `Ctrl+B` for the sidebar.
- **Drop a shell:** `Ctrl+G` toggles the [integrated terminal](./terminal).
- **Change the look:** `Ctrl+T` opens the [theme switcher](./themes).
- **Multiple cursors:** `Ctrl+↓` / `Ctrl+↑` stack cursors, then type once to edit every line.
:::

## Where to go next

- [Modal editing →](./editing) — the full view-mode / visual / insert keymap.
- [Configuration →](./configuration) — rebind keys and persist your setup.
- [Keybindings reference →](/reference/keybindings) — every default, in one place.
