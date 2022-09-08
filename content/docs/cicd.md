---
title: "CICD"
date: 2022-09-02T05:42:11Z
weight: 30
---
# CICD

## 実現したこと

- mainブランチPush時に以下を実行
  - checkout
  - hugoドキュメントのビルド
  - GitHub Pagesに公開

## ハマりそうなポイント

### checkout

- submodulesオプションで`recursive`指定が必要
  - 理由
    - `true`では、１階層のサブモジュールしかひっぱってこないっぽい。
    - 利用するテーマがさらに別のサブモジュールを参照している場合は`recursive`が指定必要。
  - 想定される事象
    - github actionsで、テーマが参照するリソースが存在しない旨のエラーがでる

### Hugoドキュメントのビルド

- hugoコマンドのオプションで`-b https://<ユーザ名>.github.io/<リポジトリ名>`指定が必要
  - 前提
    - `hugo server`ではmdがリアルタイムでレンダリングされる
    - `hugo`のみで実行すると静的サイトが`public`ディレクトリ配下に生成される。
  - 理由
    - ローカルでのbaseURLはconfig.tomlで`\`が指定されている。
    - しかし、GitHub Pagesに公開するとURLが`https://<ユーザ名>.github.io/<リポジトリ名>`となるため、baseURLを明示的に合わせる必要がある
  - 想定される事象
    - GitHub Pagesでページ遷移できない。（404）

- imageオプションでは、ext-xxxという名前のイメージを使う
  - 理由
    - テーマでSCSS、SASSを利用している場合、ビルドができない。
    - extendedバージョンを利用する必要がある
  - 想定される事象
    - ビルドに失敗
  - 備考
    - Dev Containerと同様のイメージが好ましい。(環境に差異が出ない)

      ```yaml
      image: ext-ubuntu
      version: 0.101.0
      ```

- config.tomlに`canonifyurls = true`を追加する
  - 理由
    - これにより、画像の参照先やページ遷移先が絶対パス形式になる
  - 想定される事象
    - GitHub Pagesから画像参照できない（404）
      - 詳細は未確認だが、Shortcode 方式で画像参照、かつ、basuURLを指定すると、html描画後の画像のパスにbaseURLが反映されていないことがあった
        - 前提条件
          - baseURL=https://<ユーザ名>.github.io/<リポジトリ名>/
          - canonifyurls = false(未定義)
        - 期待する値
          - https://<ユーザ名>.github.io/<リポジトリ名>/images/xxxx.png
        - 実際の値
          - https://<ユーザ名>.github.io/images/xxxx.png
  - 備考
    - ローカルで動作確認するときもGitHub Pagesに公開するときと合わせて、以下のコマンドで起動すると良さそう。

      ```cmd
      $ hudo -b http://localhost:1313/<リポジトリ名>/ server
      ```
