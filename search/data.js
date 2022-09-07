

var data = [
  {
    url: "/docs/what_is_markdown/",
    title: "What Is Markdown",
    date: "2022-07-08T05:01:41Z",
    body: "What Is Markdown Markdownとは？ Markdownは、プレーンテキストテキストドキュメントに書式設定要素を追加するために使用できる軽量マークアップ言語です。 現在、世界で最も人気のあるマークアップ言語の1つです。 なぜMarkdownを使うのか？ 人々がMarkdownを使用する理由はいくつかあります。 マークダウンはすべてに使用できます。人々はそれを使用して、Webサイト、ドキュメント、メモ、書籍、プレゼンテーション、電子メールメッセージ、および技術ドキュメントを作成します。 Markdownはポータブルです。マークダウン形式のテキストを含むファイルは、事実上すべてのアプリケーションを使用して開くことができます。現在使用しているMarkdownアプリケーションが気に入らない場合は、Markdownファイルを別のMarkdownアプリケーションにインポートできます。これは、コンテンツを独自のファイル形式にロックするMicrosoftWordのようなワードプロセッシングアプリケーションとはまったく対照的です。 Markdownはプラットフォームに依存しません。任意のオペレーティングシステムを実行している任意のデバイスで、マークダウン形式のテキストを作成できます。 値下げは将来の保証です。使用しているアプリケーションが将来的に機能しなくなった場合でも、テキスト編集アプリケーションを使用して、マークダウン形式のテキストを読み取ることができます。これは、本、大学の論文、および無期限に保存する必要があるその他のマイルストーンドキュメントに関して重要な考慮事項です。 値下げはいたるところにあります。RedditやGitHubなどのWebサイトはMarkdownをサポートしており、多くのデスクトップおよびWebベースのアプリケーションがMarkdownをサポートしています。 内容に不備がある場合はこちらまで"
  },
  {
    url: "/docs/handson/",
    title: "ドキュメント更新ハンズオン",
    date: "2022-09-01T00:00:00Z",
    body: "ドキュメント更新ハンズオン ゴール Markdown の基本的な記法が理解できる VS Code Remote Continer 上の Hugo で Markdown を Web サイトコンテンツに変換できる GitHub Action を利用する方法がわかる 【Want】 Hugo の設定を変更して、Web サイトコンテンツをカスタマイズできる 目次 VS Code Remote Container で Hugo を動かしてみよう Markdown でドキュメントを書いてみよう 自由練習１～　好きに Markdown を書いて、Web サイトに記事を追加してみましょう GitHubAction で作業を自動化してみよう 自由練習２ Hugo の設定を変更して、Web サイトコンテンツをカスタマイズしてみよう VS Code Remote Container で Hugo を動かしてみよう VS Code Remote Continer の設定がされた Git リポジトリをクローンして、さっそく Hugo がどんなものなのか体験してみましょう (A) Windows端末 WSL2 を起動します（Windowsキーを押下→Ubuntuを入力） Docker を起動しておきます： sudo service docker start 任意の作業用のフォルダに移動します（例：ホームディレクトリでよければ cd を打てばＯＫ） 演習用の GitHub リポジトリを取得します（ git clone --recursive https://github.com/kazuo278/hugo-sample.git ） cd hugo-sample でリポジトリに移動します code . で VS Code を起動します(初めて実行する場合はインストールが発生します) もし、VSCode を起動した際に信頼するかの警告が出たら「はい、作成者を信頼します」を選択します 右下に「Folder containes a Dev Container configuration file\u0026hellip;」というポップアップが出たら「Reopen in Container」を選択します 開発用のコンテナが起動するまで待ちます（初回は時間がかかります） 上部メニュー＞ターミナル＞新しいターミナルを選択します 開いたターミナルで hugo server -w のコマンドを実行します ブラウザで「http://localhost:1313/hugo-sample/」を開きます md ファイルの１つを更新して保存したときに、すぐにブラウザ側に反映されていることを確認します (B) Mac端末 VSCodeを起動します shift + command + p を押します shell commandを入力し、「Shell Command: Install \u0026lsquo;code\u0026rsquo; command in PATH」を選択します。 Docker Desktopを起動します。 ターミナルを開き、任意の作業用のフォルダに移動します（例：ホームディレクトリでよければ cd を打てばＯＫ） 演習用の GitHub リポジトリを取得します（ git clone --recursive https://github.com/kazuo278/hugo-sample.git ） cd hugo-sample でリポジトリに移動します code . で VS Code を起動します うまくいかない場合は、VSCodeの「File -\u0026gt; Open Folder」から取得したリポジトリを選択してください。 もし、VSCode を起動した際に信頼するかの警告が出たら「はい、作成者を信頼します」を選択します 右下に「Folder containes a Dev Container configuration file\u0026hellip;」というポップアップが出たら「Reopen in Container」を選択します 開発用のコンテナが起動するまで待ちます（初回は時間がかかります） 上部メニュー＞ターミナル＞新しいターミナルを選択します(ctrl + shift + @ でも可) 開いたターミナルで hugo server -w のコマンドを実行します ブラウザで「http://localhost:1313/hugo-sample/」を開きます md ファイルの１つを更新して保存したときに、すぐにブラウザ側に反映されていることを確認します Markdwon でドキュメントを書いてみよう Markdown記法 サンプル集 を参考にさせてもらいながら、 Markdown の記述方法を学びましょう ＋α で Hugo の記事を作成する際に必要になる「メタデータ」の記載方法は以下のようになります。 --- title: \u0026#34;タイトル名を書きます\u0026#34; date: 2022-09-08 --- ドキュメントの冒頭に\u0026#34;---\u0026#34;で囲んだ範囲に、yaml形式(ざっくりいうとパラメータと値を : で区切って表現する形式)でメタ情報を記載します！ 自由練習１：好きに Markdown を書いて、Web サイトに記事を追加してみましょう 拡張子.mdでファイルを新規に作成します。 冒頭に title と date のメタデータを書いて保存します。 ブラウザで「http://localhost:1313/hugo-sample/」を開いて記事が追加されていることを確認します あとは自由に Markdown で記事を書いてみてください GitHubAction で作業を自動化してみよう Qiita GitHub ActionsでHello Worldを参考にさせてもらいながら、GitHub Actionsを動かしてみましょう。 参考： GitHub Actionsについて学ぶ GitHub Actionsのワークフロー構文 GitHub Marketplace 自由練習２：任意のブランチにPush時にソースコードを取得(checkout)するActionsを呼び、好きなLinuxコマンドを実行させてみよう helloworld.ymlのon以下を変更します on: - workflow_dispatch - \u0026lt;ブランチPushイベント\u0026gt; 参考：ワークフローをトリガーするイベント \u0026lsquo;steps\u0026rsquo;以下を自由に変更します steps: - run: echo \u0026#34;Hello World!\u0026#34; - uses: \u0026lt;アクション\u0026gt; with: \u0026lt;呼び出すアクションに応じて指定する\u0026gt; - run: \u0026lt;好きなlinuxコマンド\u0026gt; Hugo の設定を変更して、Web サイトコンテンツをカスタマイズしてみよう Hugo の設定ファイルを変更してみよう（参考 ） layouts にファイルを作成して theme を上書きしてみよう（参考）"
  },
  {
    url: "/",
    title: "My New Hugo Site",
    date: "2022-09-01T00:00:00Z",
    body: "My New Hugo Site"
  },
  {
    url: "/docs/",
    title: "Markdown によるドキュメント管理の紹介",
    date: "2022-07-08T05:01:41Z",
    body: "Markdown によるドキュメント管理の紹介"
  },
  {
    url: "/search/",
    title: "全文検索",
    date: "2022-07-08T05:01:41Z",
    body: "全文検索"
  },
  {
    url: "/search/data.js",
    title: "",
    date: "0001-01-01T00:00:00Z",
    body: ""
  },
  {
    url: "/categories/",
    title: "Categories",
    date: "0001-01-01T00:00:00Z",
    body: "Categories"
  },
  {
    url: "/tags/",
    title: "Tags",
    date: "0001-01-01T00:00:00Z",
    body: "Tags"
  },
];