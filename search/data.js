

var data = [
  {
    url: "https://kazuo278.github.io/intern-example/docs/what_is_markdown/",
    title: "What Is Markdown",
    date: "2022-07-08T05:01:41Z",
    body: "What Is Markdown Markdownとは？ Markdownは、プレーンテキストテキストドキュメントに書式設定要素を追加するために使用できる軽量マークアップ言語です。 現在、世界で最も人気のあるマークアップ言語の1つです。 なぜMarkdownを使うのか？ 人々がMarkdownを使用する理由はいくつかあります。 マークダウンはすべてに使用できます。人々はそれを使用して、Webサイト、ドキュメント、メモ、書籍、プレゼンテーション、電子メールメッセージ、および技術ドキュメントを作成します。 Markdownはポータブルです。マークダウン形式のテキストを含むファイルは、事実上すべてのアプリケーションを使用して開くことができます。現在使用しているMarkdownアプリケーションが気に入らない場合は、Markdownファイルを別のMarkdownアプリケーションにインポートできます。これは、コンテンツを独自のファイル形式にロックするMicrosoftWordのようなワードプロセッシングアプリケーションとはまったく対照的です。 Markdownはプラットフォームに依存しません。任意のオペレーティングシステムを実行している任意のデバイスで、マークダウン形式のテキストを作成できます。 値下げは将来の保証です。使用しているアプリケーションが将来的に機能しなくなった場合でも、テキスト編集アプリケーションを使用して、マークダウン形式のテキストを読み取ることができます。これは、本、大学の論文、および無期限に保存する必要があるその他のマイルストーンドキュメントに関して重要な考慮事項です。 値下げはいたるところにあります。RedditやGitHubなどのWebサイトはMarkdownをサポートしており、多くのデスクトップおよびWebベースのアプリケーションがMarkdownをサポートしています。 内容に不備がある場合はこちらまで"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/document-for-git/",
    title: "Document for Git",
    date: "2022-09-02T05:42:11Z",
    body: "Document for Git GitによるDocumentの管理のすゝめ 従来のドキュメント管理の方法 こんなドキュメント管理してませんか？ 日付ごとのフォルダで管理 同じ資料を色々な場所に配置 このような管理では… (最新の)資料がどこにあるか探しにくい！ 前回との差分が何か分かりにくい！ そこで、Gitによるドキュメント管理はいかがでしょうか。 Gitによるドキュメント管理とは…? Markdown形式で記載したドキュメントをGitリポジトリで管理すること Gitとは…? チーム開発における同時更新を防ぐために、ソースコードなどの変更履歴を記録するバージョン管理システム。 管理対象リソースは、リモートリポジトリと呼ばれる場所に保管される。 編集時、開発(編集)者はリモートリポジトリの複製(ローカルリポジトリ)を作成し、ローカルリポジトリを更新する。 作業完了後、開発(編集)者はローカルリポジトリの内容をリモートリポジトリに反映する。 Gitでできること ファイルの変更履歴(更新日、更新者、更新箇所)管理 過去の状態に簡単に戻せる。 差分がわかりやすい。 プル(マージ)リクエストによるレビュー 従来のドキュメント管理の課題解決 (最新の)資料がどこにあるか探しにくい！ → ファイルが一元管理されるので、いつも同じ場所に最新の資料がある！ 前回との差分が何か分かりにくい！ → 変更履歴が残るので更新差分が分かりやすい！ → レビューの仕組みがあるので差分に対しコメントしやすい！ Gitリモートリポジトリ、Gitコマンド、エディタ(VSCodeがおすすめ)があれば作成可能！ リモートリポジトリはMarkdwon形式で書かれたドキュメントをHTMLに変換し描画することができるため、ドキュメントはMarkdown記法で作成する。 Gitによるドキュメント管理方法 ~レビュー機能(MR,PR)活用~ ■ ブランチ戦略例 ブランチ名 役割 master/main 常にレビュー済みの最新のドキュメントを管理するブランチ。 feature 個別の作業を行うブランチ。コンテンツや章などの単位で作成する。 Gitによるドキュメント管理への疑念 Gitでドキュメント管理できることは分かったけど… 画像の作成や編集はできないんでしょう…？ markdownでは、jpgやpng, svgといった画像形式を描画できるけど、 画像自体は別のツールで作ってmarkdownで表示するんでしょ…めんどくさそう。 スライドで発表する場合は向いてなくない…？ markdownで書いても、発表時にはpowerpointで作成し直すの大変そう Gitによるドキュメント管理への疑念 ~画像作成・編集~ VSCodeには、Draw.io Integrationという拡張機能が用意されており、VSCodeから直接の画像作成・編集可能です！ また、これにより画像データもバージョン管理可能に！ (パワポだと画像が図として保存されている場合があったりする…) Gitによるドキュメント管理への疑念 ~スライド作成~ VSCodeには、Marp for VS Codeという拡張機能が用意されており、Markdownで記載されたドキュメントをスライド(pdf)に変換です！ ただし、Powerpointのように画像や文字を直観的に配置できないなど課題もあります。 →スライドを作成することが目的な場合やリッチなスライドの作成には向いていなそう。 最後に Gitによるドキュメント管理 Markdownで作成したDocumentをGitリポジトリで管理する。 メリット デメリット ・いつも同じ場所に最新の資料がある ・レビューがしやすい ・パワポやその他形式への変換はまだまだ難しい 私が考えるGitドキュメント管理の使いどころ すべてのドキュメントをGit管理するのではなく、まずは テンプレート指定のない内部向け文書(運用手順書、システム構成) からGitでのドキュメント管理を初めてみてはいかがでしょうか。"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/handson/",
    title: "ドキュメント更新ハンズオン",
    date: "2022-09-01T00:00:00Z",
    body: "ドキュメント更新ハンズオン ゴール Markdown の基本的な記法が理解できる VS Code Remote Continer 上の Hugo で Markdown を Web サイトコンテンツに変換できる GitHub Action を利用する方法がわかる 【Want】 Hugo の設定を変更して、Web サイトコンテンツをカスタマイズできる 目次 VS Code Remote Container で Hugo を動かしてみよう Markdown でドキュメントを書いてみよう 自由練習１～　好きに Markdown を書いて、Web サイトに記事を追加してみましょう GitHubAction で作業を自動化してみよう 自由練習２ Hugo の設定を変更して、Web サイトコンテンツをカスタマイズしてみよう VS Code Remote Container で Hugo を動かしてみよう VS Code Remote Continer の設定がされた Git リポジトリをクローンして、さっそく Hugo がどんなものなのか体験してみましょう (A) Windows端末 WSL2 を起動します（Windowsキーを押下→Ubuntuを入力） Docker を起動しておきます： sudo service docker start 任意の作業用のフォルダに移動します（例：ホームディレクトリでよければ cd を打てばＯＫ） 演習用の GitHub リポジトリを取得します（ git clone --recursive https://github.com/kazuo278/hugo-sample.git ） cd hugo-sample でリポジトリに移動します code . で VS Code を起動します(初めて実行する場合はインストールが発生します) もし、VSCode を起動した際に信頼するかの警告が出たら「はい、作成者を信頼します」を選択します 右下に「Folder containes a Dev Container configuration file\u0026hellip;」というポップアップが出たら「Reopen in Container」を選択します 開発用のコンテナが起動するまで待ちます（初回は時間がかかります） 上部メニュー＞ターミナル＞新しいターミナルを選択します 開いたターミナルで hugo server -w のコマンドを実行します ブラウザで「http://localhost:1313/hugo-sample/」を開きます md ファイルの１つを更新して保存したときに、すぐにブラウザ側に反映されていることを確認します (B) Mac端末 VSCodeを起動します shift + command + p を押します shell commandを入力し、「Shell Command: Install \u0026lsquo;code\u0026rsquo; command in PATH」を選択します。 Docker Desktopを起動します。 ターミナルを開き、任意の作業用のフォルダに移動します（例：ホームディレクトリでよければ cd を打てばＯＫ） 演習用の GitHub リポジトリを取得します（ git clone --recursive https://github.com/kazuo278/hugo-sample.git ） cd hugo-sample でリポジトリに移動します code . で VS Code を起動します うまくいかない場合は、VSCodeの「File -\u0026gt; Open Folder」から取得したリポジトリを選択してください。 もし、VSCode を起動した際に信頼するかの警告が出たら「はい、作成者を信頼します」を選択します 右下に「Folder containes a Dev Container configuration file\u0026hellip;」というポップアップが出たら「Reopen in Container」を選択します 開発用のコンテナが起動するまで待ちます（初回は時間がかかります） 上部メニュー＞ターミナル＞新しいターミナルを選択します(ctrl + shift + @ でも可) 開いたターミナルで hugo server -w のコマンドを実行します ブラウザで「http://localhost:1313/hugo-sample/」を開きます md ファイルの１つを更新して保存したときに、すぐにブラウザ側に反映されていることを確認します Markdwon でドキュメントを書いてみよう Markdown記法 サンプル集 を参考にさせてもらいながら、 Markdown の記述方法を学びましょう ＋α で Hugo の記事を作成する際に必要になる「メタデータ」の記載方法は以下のようになります。 --- title: \u0026#34;タイトル名を書きます\u0026#34; date: 2022-09-08 --- ドキュメントの冒頭に\u0026#34;---\u0026#34;で囲んだ範囲に、yaml形式(ざっくりいうとパラメータと値を : で区切って表現する形式)でメタ情報を記載します！ 自由練習１：好きに Markdown を書いて、Web サイトに記事を追加してみましょう 拡張子.mdでファイルを新規に作成します。 冒頭に title と date のメタデータを書いて保存します。 ブラウザで「http://localhost:1313/hugo-sample/」を開いて記事が追加されていることを確認します あとは自由に Markdown で記事を書いてみてください GitHubAction で作業を自動化してみよう Qiita GitHub ActionsでHello Worldを参考にさせてもらいながら、GitHub Actionsを動かしてみましょう。 参考： GitHub Actionsについて学ぶ GitHub Actionsのワークフロー構文 GitHub Marketplace 自由練習２：任意のブランチにPush時にソースコードを取得(checkout)するActionsを呼び、好きなLinuxコマンドを実行させてみよう helloworld.ymlのon以下を変更します on: - workflow_dispatch - \u0026lt;ブランチPushイベント\u0026gt; 参考：ワークフローをトリガーするイベント \u0026lsquo;steps\u0026rsquo;以下を自由に変更します steps: - run: echo \u0026#34;Hello World!\u0026#34; - uses: \u0026lt;アクション\u0026gt; with: \u0026lt;呼び出すアクションに応じて指定する\u0026gt; - run: \u0026lt;好きなlinuxコマンド\u0026gt; Hugo の設定を変更して、Web サイトコンテンツをカスタマイズしてみよう Hugo の設定ファイルを変更してみよう（参考 ） layouts にファイルを作成して theme を上書きしてみよう（参考）"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/cicd/",
    title: "CICD",
    date: "2022-09-02T05:42:11Z",
    body: "CICD CICD ##　実現したこと mainブランチPush時に以下を実行 checkout hugoドキュメントのビルド GitHub Pagesに公開 ハマりそうなポイント checkout submodulesオプションでrecursive指定が必要 理由 trueでは、１階層のサブモジュールしかひっぱってこないっぽい。 利用するテーマがさらに別のサブモジュールを参照している場合はrecursiveが指定必要。 想定される事象 github actionsで、テーマが参照するリソースが存在しない旨のエラーがでる Hugoドキュメントのビルド commandオプションで-b https://\u0026lt;ユーザ名\u0026gt;.github.io/\u0026lt;リポジトリ名\u0026gt;指定が必要 理由 ローカルでのbaseURLはconfig.tomlで\\が指定されている。 しかし、GitHub Pagesに公開するとURLがhttps://\u0026lt;ユーザ名\u0026gt;.github.io/\u0026lt;リポジトリ名\u0026gt;となるため、baseURLを明示的に合わせる必要がある 想定される事象 GitHub Pagesでページ遷移できない。（404） imageオプションでは、ext-xxxという名前のイメージを使う 理由 テーマでSCSS、SASSを利用している場合、ビルドができない。 extendedバージョンを利用する必要がある 想定される事象 ビルドに失敗 備考 Dev Containerと同様のイメージが好ましい。(環境に差異が出ない) image: ext-ubuntu version: 0.101.0 config.tomlにcanonifyurls = trueを追加する 理由 これにより、画像の参照先やページ遷移先が絶対パス形式になる 想定される事象 GitHub Pagesから画像参照できない（404） 詳細は未確認だが、Shortcode 方式で画像参照、かつ、basuURLを指定すると、html描画後の画像のパスにbaseURLが反映されていないことがあった 前提条件 baseURL=https://\u0026lt;ユーザ名\u0026gt;.github.io/\u0026lt;リポジトリ名\u0026gt;/ canonifyurls = false(未定義) 期待する値 https://\u0026lt;ユーザ名\u0026gt;.github.io/\u0026lt;リポジトリ名\u0026gt;/images/xxxx.png 実際の値 https://\u0026lt;ユーザ名\u0026gt;.github.io/images/xxxx.png 備考 ローカルで動作確認するときもGitHub Pagesに公開するときと合わせて、以下のコマンドで起動すると良さそう。 $ hudo -b http://localhost:1313/\u0026lt;リポジトリ名\u0026gt;/ server"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/google-forms/",
    title: "Google Forms",
    date: "2022-09-02T05:42:11Z",
    body: "Google Forms Google Forms フィードバックようページとして用意。 手順 Googleアカウントでログイン後以下にアクセス https://docs.google.com/forms/u/0/?tgif=d フォームを適当に作成 「送信」→「\u0026lt; \u0026gt;」とたどり埋め込みリンクを取得する"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/google-analytics/",
    title: "Google Analytics",
    date: "2022-09-02T05:42:11Z",
    body: "Google Analytics Google Analytics PV数取得で利用検討。 ##　調査結果 以下の理由から利用を断念。 Google Analyticsがビジネス利用前提で作られており、登録時にビジネス情報を入れる必要があったが、入力すべき相応しい情報がなかったため。"
  },
  {
    url: "https://kazuo278.github.io/intern-example/",
    title: "My New Hugo Site",
    date: "2022-09-02T05:42:11Z",
    body: "My New Hugo Site"
  },
  {
    url: "https://kazuo278.github.io/intern-example/feedback/",
    title: "feedback",
    date: "2022-07-08T05:01:41Z",
    body: "feedback"
  },
  {
    url: "https://kazuo278.github.io/intern-example/issue/",
    title: "issue",
    date: "2022-07-08T05:01:41Z",
    body: "issue"
  },
  {
    url: "https://kazuo278.github.io/intern-example/docs/",
    title: "Markdown によるドキュメント管理の紹介",
    date: "2022-07-08T05:01:41Z",
    body: "Markdown によるドキュメント管理の紹介"
  },
  {
    url: "https://kazuo278.github.io/intern-example/search/",
    title: "全文検索",
    date: "2022-07-08T05:01:41Z",
    body: "全文検索"
  },
  {
    url: "https://kazuo278.github.io/intern-example/search/data.js",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: ""
  },
  {
    url: "https://kazuo278.github.io/intern-example/categories/",
    title: "Categories",
    date: "0001-01-01T00:00:00Z",
    body: "Categories"
  },
  {
    url: "https://kazuo278.github.io/intern-example/tags/",
    title: "Tags",
    date: "0001-01-01T00:00:00Z",
    body: "Tags"
  },
];