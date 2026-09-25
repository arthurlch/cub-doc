# Tabs

Open multiple files at once, shown as a clickable tab strip along the top. Each
tab is fully independent — its own cursor, selection, viewport, and undo
history.

## Keys

| Key | Action |
| --- | --- |
| `Ctrl+N` | Open a new empty tab |
| `Ctrl+→` / `Ctrl+←` | Next / previous tab (wraps around) |
| `Ctrl+W` | Close the current tab |

## Behavior

- Opening a file (from the [sidebar](./sidebar) or [command palette](./command-palette))
  opens it in a tab, or focuses its existing tab if it's already open. An empty,
  unsaved scratch buffer is reused instead of adding a tab.
- **Closing with unsaved changes:** `Ctrl+W` warns first — press it again to
  discard. Closing the last tab leaves a fresh empty buffer.
- The active tab shows an accent marker; `●` marks unsaved changes.

## Mouse

- **Click** a tab to switch to it.
- **Click its `✕`** to close it. A dirty (unsaved) tab warns first — click the
  `✕` again to discard.
- The strip scrolls to keep the active tab visible when there are more tabs than
  fit.
