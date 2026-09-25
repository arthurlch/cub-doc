# Multiple cursors

Edit many lines at once. Cub lets you stack extra cursors and then type, move,
or delete at every one simultaneously — and it all collapses into a single undo
step.

## Adding cursors

| Key | Action |
| --- | --- |
| `Ctrl+↓` | Add a cursor on the line below |
| `Ctrl+↑` | Add a cursor on the line above |

Press either repeatedly to stack more cursors. The status bar shows the active
cursor count.

## Editing with them

- Enter insert mode (`i`) and type: **every cursor inserts at once**.
- Motions — `hjkl`, arrows, `Home`/`End` — move all cursors together.
- Backspace, delete, and newline apply at every cursor.
- A single `u` undoes the whole multi-cursor edit as **one** step.

## Collapsing back

Any of these returns you to a single cursor:

- `Esc`
- a mouse click in the editor
- a jump command (word motions, `gg`/`G`, page up/down)

## Example

```text
apple
banana
cherry
```

1. Put the cursor at the start of `apple`.
2. `Ctrl+↓` `Ctrl+↓` — now three cursors, one per line.
3. `i` then type `- ` — every line gets the prefix:

```text
- apple
- banana
- cherry
```

4. `Esc` collapses back to one cursor. `u` undoes all three edits together.
