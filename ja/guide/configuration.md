# 設定

Cub は `~/.config/cub/config.json`（または `$XDG_CONFIG_HOME/cub/config.json`）から
JSON 設定を読み込みます。初回起動時にデフォルト値で書き出されるので、すぐに開いて編集
できます。

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

## フィールド

- **`theme`** と **`sidebar_right`** は、テーマ切り替え（`Ctrl+T`）やサイドバーの
  左右切り替え（`Ctrl+E`）のたびに自動保存されます。
- **`keys`** は[アクション](/ja/reference/config-actions)をコード（chord）に対応づけます。
  グローバルとビューモードのアクションはすべて再割り当て可能です。インサートモードの
  入力は固定です。記載しなかったアクションはデフォルトのままになります。
- Cub は設定移行のために管理する `version` フィールドも書き込みます — これはそのまま
  にしてください。バージョン間でデフォルトが変わると、テーマとサイドバーの位置を保った
  まま、キーマップが更新されます。

## コード（chord）の書き方

コードは次のいずれかです。

- 1 文字 — `i`、`$`、`0`
- 名前付きキー — `enter`、`esc`、`tab`、`space`、`backspace`、`delete`、`home`、
  `end`、`pgup`、`pgdn`、または矢印名 `left` / `right` / `up` / `down`
- 上記に `ctrl+` や `alt+` の接頭辞を付けたもの — `ctrl+s`、`ctrl+right`
- **2 文字のシーケンス** — `dd`、`gg`、`yy`

::: details 例：取り消しを Ctrl+Z に変更する
```json
{
  "keys": {
    "undo": "ctrl+z",
    "redo": "ctrl+y"
  }
}
```
記載しなかったものはデフォルトのままです。
:::

再割り当て可能なすべてのアクションとデフォルトのコードは、
[アクション一覧](/ja/reference/config-actions) を参照してください。
