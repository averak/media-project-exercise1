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
