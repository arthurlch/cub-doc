# File sidebar

A toggleable, resizable file explorer for navigating your project.

## Keys

| Key | Action |
| --- | --- |
| `Ctrl+B` | Show and focus the sidebar; press again to flip focus between the sidebar and the editor |
| `Ctrl+E` | Dock the sidebar on the other side (left ↔ right) |
| `Esc` | Close the sidebar (returns focus to the editor) |
| `j` / `k` or ↑ / ↓ | Move the selection |
| `Enter` or `l` | Open the selected file, or expand / collapse the folder |
| `h` | Collapse the current folder |
| `<` / `>` (also `-` / `+`) | Resize the sidebar |

## Focus

The focused pane is highlighted (accent border and selection); the other is
dimmed, so it's always clear where your keystrokes go. `Ctrl+B` toggles focus
back and forth without closing the sidebar.

The file that's currently open in the editor is highlighted in the tree.

## Mouse

- **Click** an entry to open a file or toggle a folder.
- **Drag the border** (`│`) to resize the sidebar; text reflows live.
- **Scroll** over the sidebar to move through the file tree.
