# Keybindings reference

Every key below is a default. Global and view-mode bindings are fully rebindable
from the [config file](/guide/configuration); insert-mode typing and the
visual-mode operators are fixed.

## Global (any mode)

| Key | Action |
| --- | --- |
| `Ctrl+S` | Save |
| `Ctrl+Q` | Quit |
| `Ctrl+H` | Toggle help overlay |
| `Ctrl+P` | Command palette (fuzzy file finder) |
| `Ctrl+T` | Theme switcher |
| `Ctrl+B` | File sidebar (show / focus / return focus) |
| `Ctrl+E` | Move the sidebar to the other side (left / right) |
| `Ctrl+←` / `Ctrl+→` | Previous / next tab |
| `Ctrl+N` | New tab |
| `Ctrl+W` | Close tab |
| `Ctrl+↑` / `Ctrl+↓` | Add a cursor above / below |
| `Ctrl+G` | Toggle the integrated terminal |

## View mode

| Key | Action |
| --- | --- |
| `i` / `a` | Insert before / append after the cursor |
| `o` / `O` | Open a new line below / above and insert |
| `h` `j` `k` `l` or arrows | Move left / down / up / right |
| `0` / `^` / `$` | Line start / first non-blank / line end |
| `w` / `b` | Next / previous word |
| `gg` / `G` | Top / bottom of file (`<number>G` jumps to a line) |
| `PgUp` / `PgDn` | Scroll half a screen |
| `x` | Delete the character under the cursor |
| `dd` / `yy` | Delete / yank the current line |
| `p` / `P` | Paste after / before |
| `u` / `Ctrl+R` | Undo / redo |

## Visual (selection)

Press `v` to start a selection, then move to extend it.

| Key | Action |
| --- | --- |
| `v` | Start / cancel visual selection |
| `y` | Yank (copy) the selection |
| `d` / `x` | Delete (cut) the selection |
| `p` | Paste over the selection |
| `Esc` | Cancel the selection |

## Insert mode

| Key | Action |
| --- | --- |
| `Esc` | Return to view mode |
| any character | Insert it |
| `Enter` | New line |
| `Tab` | Insert 4 spaces |
| `Backspace` / `Delete` | Delete before / at the cursor |
| arrows, `Home`/`End`, `PgUp`/`PgDn` | Move the cursor |

## Terminal (while focused)

| Key | Action |
| --- | --- |
| `Ctrl+G` | Hide the panel |
| `Esc` | Return focus to the editor |
| `Ctrl+N` / `Ctrl+W` | New / close shell |
| `Ctrl+←` / `Ctrl+→` | Switch shells |
| `Ctrl+↑` / `Ctrl+↓` | Grow / shrink the panel |

## Sidebar (while focused)

| Key | Action |
| --- | --- |
| `Ctrl+B` | Return focus to the editor |
| `Esc` | Close the sidebar |
| `j` / `k` or ↑ / ↓ | Move the selection |
| `Enter` / `l` | Open file or expand folder |
| `h` | Collapse folder |
| `<` / `>` (or `-` / `+`) | Resize the sidebar |
