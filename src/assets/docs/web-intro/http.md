## HTTP とは

HTTP とは Hypertext Transfer Protocol の略で、ハイパーメディア文書を転送するためのプロトコルです。

HTTP の名前にある通り、初期の HTTP/0.9 はハイパーテキスト（HTML）の転送を目的に設計されました。
しかし HTTP/0.9 は制約がとても多いため、画像や動画などの転送を含む多目的なニーズに応えた HTTP/1.0 が提案され、その後 RFC2016 にて HTTP/1.1 が標準化されました。

curl コマンドを用いて、本 Web サイトの HTTP リクエスト及びレスポンスを見てみましょう。

```bash
$ curl --verbose https://media-project-exercise1.abelab.dev
```

```
GET / HTTP/1.1
Host: media-project-exercise1.abelab.dev
User-Agent: curl/7.77.0
Accept: */*

HTTP/1.1 200 OK
Server: nginx/1.16.1
Date: Tue, 11 Jan 2022 04:35:42 GMT
Content-Type: text/html
Content-Length: 1549
Last-Modified: Tue, 11 Jan 2022 04:13:14 GMT
Connection: keep-alive
ETag: "61dd03da-60d"
Accept-Ranges: bytes
```

## HTTP メソッド

HTTP メソッドとは、URI で指定したリソースに対して行いたいアクションを示すもので、全部で 9 種類あります。
ここでは主要な HTTP メソッドを紹介していきます。

- GET
- POST
- PUT
- DELETE

これらはデータのライフサイクルを表現する CRUD（Create, Read, Update, Delete）にそれぞれ対応しており、HTTP 経由でデータの取得や編集機能などを提供します。

## ステータスコード

ステータスコードとは、HTTP リクエストが正常に完了したかどうかを示す数値で、タイプごとに 5 つのクラスに分類することができます。

- `100-199`: 情報レスポンス
- `200-299`: 成功レスポンス
  - 200 OK: リクエストの成功
  - 201 Created: リクエストにより新しくリソースが作成された
- `300-399`: リダイレクト
  - 301 Moved Permanently: 恒久的に移動した
  - 302 Found: サーバダウンしているため一時的に移動
- `400-499`: クライアントエラー
  - 400 Bad Request: 構文が無効
  - 401 Unauthorized: 認証されていない
  - 403 Forbidden: 許可されていない
  - 404 Not Found: リソースが存在しない
- `500-599`: サーバエラー
  - 500 Internal Server Error: サーバ側で予期せぬエラーが発生
  - 503 Service Unavailable: メンテナンス中
