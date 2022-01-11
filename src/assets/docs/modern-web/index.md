## DOM とは

[MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model) では、DOM を下記のように定義しています。

> Document Object Model (DOM) は、— ウェブページを表す HTML のように — 文書の構造をメモリー内に表現することで、ウェブページとスクリプトやプログラミング言語を接続するものです。ふつうは JavaScript を使用しますが、 HTML、 SVG、 XML などの文書をオブジェクトとしてモデリングすることはコア JavaScript 言語の一部ではありません。

要は、JavaScript から HTML 文書を操作するために必要なインターフェースが DOM なのです。

下記は HTML を DOM ツリー表現したものです。
Web ブラウザは HTML をレンダリングするために HTML をパースし、DOM ツリーを生成します。

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <h1>タイトルだよ</h1>
    <p>本文だよ</p>
    <p>本文だよ</p>
  </body>
</html>
```

![](https://vba-code.net/ie/wp-content/uploads/sites/3/2014/05/DOM.png)

> 出典: https://vba-code.net/basic/dom/

## 仮想 DOM とは

Web サイトのページ間を移動する際、通常であれば DOM を 1 から再構築する必要があります。
しかし、これだと非効率であり毎回画面がロードされる煩わしさを与える恐れがあります。

そのソリューションの一つとして、Web サイト内のヘッダーやナビゲーションバーなどページ間で共通化されたコンポーネントはそのままにして、メインコンテンツのみ差し替える方法が考えられます。

<br/>

![](assets/images/manaba_diff.png)

<br/>

そこで登場した概念が**仮想 DOM** です。仮想 DOM の火付け役となった技術ブログに[『なぜ仮想 DOM という概念が俺達の魂を震えさせるのか』](https://qiita.com/mizchi/items/4d25bc26def1719d52e6)がありますが、本記事では仮想 DOM のメリットを下記のように説明しています。

> HTML とはツリー構造であり、2 つのツリー構造の diff を算出して、それを DOM に patch するアクションを作れば、常に最小のコストで状態遷移を表現できるよね、ってのが Virtual DOM という発想のスタート地点となります。

ここでキーとなってくるのが差分検出処理です。ページ A （遷移前）とページ B（遷移後） それぞれの仮想 DOM ツリーを用意しておき、その差分のみをリアル DOM に反映するのが、現在の Web フロントエンドにおけるデファクトスタンダードとなっています。

![](assets/images/diff.png)
