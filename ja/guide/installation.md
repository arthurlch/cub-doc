# インストール

## Homebrew

macOS（および Linuxbrew）で最も手早い方法です。

```bash
brew tap arthurlch/cub
brew install cub
```

あとから更新するには `brew upgrade cub` を実行します。

## ソースからビルド

**Go 1.24 以降**が必要です。

```bash
git clone https://github.com/arthurlch/cub.git
cd cub
make build      # ./cub を生成します
```

生成されたバイナリを `PATH` の通った場所へ移動します。

```bash
sudo mv cub /usr/local/bin/
```

## ビルド済みバイナリ

[リリースページ](https://github.com/arthurlch/cub/releases) から、お使いのプラット
フォーム向けのバイナリ（macOS・Linux・Windows、amd64／arm64）を取得できます。実行権限
を付与し、`PATH` の通った場所に置いてください。

## ターミナルの要件

- **トゥルーカラー対応ターミナル** — テーマは、[kitty](https://sw.kovidgoyal.net/kitty/)、
  [WezTerm](https://wezfurlong.org/wezterm/)、[Alacritty](https://alacritty.org/)、
  [Ghostty](https://ghostty.org/)、iTerm2 などのトゥルーカラー対応ターミナルで最も
  美しく表示されます。
- **Nerd Font（任意）** — UI はファイルアイコンやパワーライン区切りに Nerd Font の
  グリフを使用します。Nerd Font を使っていない場合は、`CUB_ASCII=1` を付けて起動すると
  プレーンな文字にフォールバックします。

  ```bash
  CUB_ASCII=1 cub main.go
  ```

## 動作確認

```bash
cub --version
cub --help
```

準備ができたら [クイックスタート](./quick-start) へ。
