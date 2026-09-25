# 設定アクション

[設定ファイル](/ja/guide/configuration)の `keys` ブロックで再割り当てできるすべての
アクションと、そのデフォルトのコードです。任意のアクションに新しいコードを設定できます。
記載しなかったものはデフォルトのままになります。

## グローバル

| アクション | デフォルト |
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

## ビューモード

| アクション | デフォルト |
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

## 固定（再割り当て不可）

- **インサートモードの入力** — 印字可能な文字、`Enter`、`Tab`、`Backspace`、`Delete`、
  矢印、`Home`/`End`、`PgUp`/`PgDn`。
- **ビジュアルモードの操作子** — ビジュアルモード（`v`）では、`y` でヤンク、`d`/`x` で
  削除、`p` で選択範囲に貼り付け。

::: tip
コード値の書き方（1 文字キー、名前付きキー、`ctrl+`/`alt+` の接頭辞、2 文字シーケンス）
は、[設定 → コードの書き方](/ja/guide/configuration#コード-chord-の書き方) を参照して
ください。
:::
