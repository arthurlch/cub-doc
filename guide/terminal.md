# Integrated terminal

Cub embeds real shells in a panel across the bottom of the editor, powered by a
built-in VT emulator — so colors, prompts, and full-screen programs work. You
can run several at once, switch between them, resize, and close them without
leaving the editor.

## Toggle & focus

`Ctrl+G` is smart:

- **Hidden** → shows the panel and focuses it.
- **Visible but the editor has focus** → focuses the terminal.
- **Focused** → hides the panel.

While the terminal is focused, keystrokes go straight to the shell. Press
**`Esc`** to hand focus back to the editor **without closing the panel**. Click
either pane to focus it. `Ctrl+Q` always quits Cub.

| Key | Action |
| --- | --- |
| `Ctrl+G` | Toggle / focus the terminal panel |
| `Esc` | Return focus to the editor (panel stays open) |

## Multiple terminals

While the terminal is focused:

| Key | Action |
| --- | --- |
| `Ctrl+N` | Open another shell |
| `Ctrl+W` | Close the current shell |
| `Ctrl+←` / `Ctrl+→` | Switch between shells |

The panel header shows numbered tabs like `1 ✕  2 ✕  +`. With the mouse you can:

- **click a number** to switch to that shell,
- **click its `✕`** to close it,
- **click `+`** to open a new one.

## Resize

While the terminal is focused:

| Key / gesture | Action |
| --- | --- |
| `Ctrl+↑` / `Ctrl+↓` | Grow / shrink the panel |
| Drag the header bar | Resize with the mouse |

Each panel remembers its size, resizes with the window, and every shell is
cleaned up when you quit.

::: warning Sending `Esc` to the shell
Because `Esc` returns focus to the editor, it isn't forwarded to the shell. If a
full-screen program running in the terminal needs `Esc`, that's the one key the
panel intercepts — everything else (including `Ctrl+C`, `Ctrl+D`, arrows, and
tab completion) goes straight through.
:::
