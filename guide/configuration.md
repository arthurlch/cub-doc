# Configuration

Cub reads a JSON config from `~/.config/cub/config.json` (or
`$XDG_CONFIG_HOME/cub/config.json`). It's written with the defaults on first
run, so you can open it and start editing right away.

```json
{
  "theme": "catppuccin-mocha",
  "sidebar_right": false,
  "keys": {
    "quit": "ctrl+q",
    "save": "ctrl+s",
    "insert": "i",
    "move_left": "h",
    "delete_line": "dd"
  }
}
```

## Fields

- **`theme`** and **`sidebar_right`** are saved automatically whenever you switch
  theme (`Ctrl+T`) or flip the sidebar side (`Ctrl+E`).
- **`keys`** maps an [action](/reference/config-actions) to a chord. Every global
  and view-mode action is rebindable; insert-mode typing is fixed. Any action you
  leave out keeps its default.
- Cub also writes a `version` field it manages for config migrations — leave it
  alone. When defaults change across versions, Cub refreshes your keymap while
  keeping your theme and sidebar side.

## Chord syntax

A chord is one of:

- a single character — `i`, `$`, `0`
- a named key — `enter`, `esc`, `tab`, `space`, `backspace`, `delete`, `home`,
  `end`, `pgup`, `pgdn`, or an arrow name `left` / `right` / `up` / `down`
- any of the above with a `ctrl+` and/or `alt+` prefix — `ctrl+s`, `ctrl+right`
- a **two-character sequence** — `dd`, `gg`, `yy`

::: details Example: remap undo to Ctrl+Z
```json
{
  "keys": {
    "undo": "ctrl+z",
    "redo": "ctrl+y"
  }
}
```
Anything you don't list keeps its default.
:::

See the [full action reference](/reference/config-actions) for every rebindable
action and its default chord.
