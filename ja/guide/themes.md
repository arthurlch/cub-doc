# テーマと言語

Cub は **250 以上の言語**をハイライトし、**24 種のトゥルーカラーカラースキーム**（ダーク
とライト）を同梱しています。すべて [chroma](https://github.com/alecthomas/chroma) によって
動作します。

カラースキームはトークン単位のシンタックスカラー*と*、そこから導かれる UI カラー
（カーソル行、ステータスバー、サイドバー、枠線）を決定します。ダークでもライトでも、
全体が一貫した見た目になります。

## テーマの切り替え

**`Ctrl+T`** でテーマ切り替えを開きます。

| キー | 動作 |
| --- | --- |
| ↑ / ↓ | 次 / 前のテーマをその場でプレビュー |
| `Enter` | ハイライト中のテーマを適用 |
| `Esc` | キャンセルして元に戻す |

選んだテーマは[設定ファイル](./configuration)に自動保存され、次回起動時に復元されます。

## 同梱スキーム

同梱されているものの一部です。

- **catppuccin** — mocha, macchiato, latte
- **tokyonight** — night, storm, day
- **rose-pine** — main, moon, dawn
- **gruvbox** — dark, light
- **solarized** — dark, light
- dracula、nord、monokai、onedark、github-dark、doom-one、xcode など。

## 言語

シンタックスハイライトはトークン単位で、250 以上の言語に対応します。言語はファイルの
拡張子から判定されるため、ファイルを開くだけで機能します。
