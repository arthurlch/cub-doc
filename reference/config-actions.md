# Config actions

Every action you can rebind in the `keys` block of your
[config file](/guide/configuration), with its default chord. Set a new chord for
any of these; anything you leave out keeps its default.

## Global

| Action | Default |
| --- | --- |
| `quit` | `ctrl+q` |
| `save` | `ctrl+s` |
| `help` | `ctrl+h` |
| `palette` | `ctrl+p` |
| `theme` | `ctrl+t` |
| `sidebar` | `ctrl+b` |
| `sidebar_side` | `ctrl+e` |
| `tab_next` / `tab_prev` | `ctrl+right` / `ctrl+left` |
| `tab_new` / `tab_close` | `ctrl+n` / `ctrl+w` |
| `cursor_add_below` / `cursor_add_above` | `ctrl+down` / `ctrl+up` |
| `terminal` | `ctrl+g` |

## View mode

| Action | Default |
| --- | --- |
| `insert` / `append` | `i` / `a` |
| `open_below` / `open_above` | `o` / `O` |
| `move_left` / `move_down` / `move_up` / `move_right` | `h` / `j` / `k` / `l` |
| `line_start` / `first_nonblank` / `line_end` | `0` / `^` / `$` |
| `word_next` / `word_prev` | `w` / `b` |
| `goto_top` / `goto_bottom` | `gg` / `G` |
| `delete_char` / `delete_line` | `x` / `dd` |
| `yank_line` / `paste` / `paste_before` | `yy` / `p` / `P` |
| `visual` | `v` |
| `undo` / `redo` | `u` / `ctrl+r` |

## Fixed (not rebindable)

- **Insert-mode typing** — printable characters, `Enter`, `Tab`, `Backspace`,
  `Delete`, arrows, `Home`/`End`, `PgUp`/`PgDn`.
- **Visual-mode operators** — in visual mode (`v`), `y` yanks, `d`/`x` delete,
  and `p` pastes over the selection.

::: tip
See [Configuration → Chord syntax](/guide/configuration#chord-syntax) for how to
write a chord value (single keys, named keys, `ctrl+`/`alt+` prefixes, and
two-character sequences).
:::
