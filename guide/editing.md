# Modal editing

Cub is modal, in the Vim tradition. **View mode** is for navigating and
manipulating text; **insert mode** is for typing. Everything below is a default —
every global and view-mode key is [rebindable](./configuration).

## View mode

| Key | Action |
| --- | --- |
| `i` / `a` | Insert before / append after the cursor |
| `o` / `O` | Open a new line below / above and insert |
| `h` `j` `k` `l` or arrows | Move left / down / up / right |
| `0` / `^` / `$` | Line start / first non-blank / line end |
| `w` / `b` | Next / previous word |
| `gg` / `G` | Top / bottom of file |
| `<number>G` | Go to a line number (e.g. `42G`) |
| `PgUp` / `PgDn` | Scroll half a screen |
| `x` | Delete the character under the cursor |
| `dd` / `yy` | Delete / yank the current line |
| `p` / `P` | Paste after / before |
| `u` / `Ctrl+R` | Undo / redo |

Line-wise `dd` and `yy` remember whether they captured a whole line, so `p`
pastes it on a new line below (and `P` above) — just like Vim.

## Visual (selection)

Press `v` to start a selection, then move (`hjkl`, word, or line motions) to
extend it.

| Key | Action |
| --- | --- |
| `v` | Start / cancel visual selection |
| `y` | Yank (copy) the selection |
| `d` / `x` | Delete (cut) the selection |
| `p` | Paste over the selection |
| `Esc` | Cancel the selection |

::: info
In visual mode the operators `y`, `d`, `x`, and `p` are fixed — they always act
on the selection and aren't rebindable.
:::

## Insert mode

| Key | Action |
| --- | --- |
| `Esc` | Return to view mode |
| any character | Insert it |
| `Enter` | New line |
| `Tab` | Insert 4 spaces |
| `Backspace` / `Delete` | Delete before / at the cursor |
| arrows, `Home`/`End`, `PgUp`/`PgDn` | Move the cursor |

## Undo model

Undo and redo are **delta-based**: each change records only what actually
changed, so a keystroke costs the same on a huge file as on a tiny one. A
multi-cursor edit collapses into a single undo step — one `u` reverts it all.

## Global keys (any mode)

| Key | Action |
| --- | --- |
| `Ctrl+S` | Save |
| `Ctrl+Q` | Quit |
| `Ctrl+H` | Toggle help overlay |
| `Ctrl+P` | Command palette (fuzzy file finder) |
| `Ctrl+T` | Theme switcher |
| `Ctrl+B` | File sidebar (show / focus / return focus) |
| `Ctrl+E` | Move the sidebar to the other side |
| `Ctrl+←` / `Ctrl+→` | Previous / next tab |
| `Ctrl+N` | New tab |
| `Ctrl+W` | Close tab |
| `Ctrl+↑` / `Ctrl+↓` | Add a cursor above / below |
| `Ctrl+G` | Toggle the integrated terminal |
