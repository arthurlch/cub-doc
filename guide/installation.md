# Installation

## Homebrew

The quickest way on macOS (and Linuxbrew):

```bash
brew tap arthurlch/cub
brew install cub
```

Update later with `brew upgrade cub`.

## From source

Requires **Go 1.24+**.

```bash
git clone https://github.com/arthurlch/cub.git
cd cub
make build      # builds ./cub
```

Then move the binary somewhere on your `PATH`:

```bash
sudo mv cub /usr/local/bin/
```

## Prebuilt binaries

Grab a binary for your platform from the
[releases page](https://github.com/arthurlch/cub/releases) (macOS, Linux, and
Windows, amd64/arm64), then make it executable and put it on your `PATH`.

## Terminal requirements

- **Truecolor terminal** — themes look their best in a truecolor-capable
  terminal such as [kitty](https://sw.kovidgoyal.net/kitty/),
  [WezTerm](https://wezfurlong.org/wezterm/),
  [Alacritty](https://alacritty.org/),
  [Ghostty](https://ghostty.org/), or iTerm2.
- **Nerd Font (optional)** — the UI uses Nerd Font glyphs for file-type icons and
  powerline separators. If your terminal isn't using a Nerd Font, run with
  `CUB_ASCII=1` to fall back to plain characters:

  ```bash
  CUB_ASCII=1 cub main.go
  ```

## Verify

```bash
cub --version
cub --help
```

Ready? Head to the [Quick start](./quick-start).
