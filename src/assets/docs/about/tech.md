## 概要

Developer Portal では[Angular](https://angular.io/)を採用しています。

ここでは、本ページの技術構成とローカル環境での実行方法について解説していきます。

## Angular とは

Angular は下記の特徴を持つフロントエンドフレームワークで、宣言的 UI による柔軟な開発を可能とします。

> ・スケーラブルなウェブアプリケーションを構築するためのコンポーネントベースのフレームワーク<br/>
> ・ルーティング、フォーム管理、クライアントとサーバー間の通信など、さまざまな機能をカバーする、十分に統合されたライブラリのコレクション<br/>
> ・コードの開発、ビルド、テスト、更新を支援する一連の開発者ツール<br/>

Angular では SPA を簡単に構築できます。

SPA ではクライアントサイドで JavaScript を実行するので、初期ロード以降通信を必要としない高速なアプリケーションとなりユーザ体験を向上できます。

またコンポーネント指向で開発していくので、開発者体験の向上も期待できます。

## インフラストラクチャ

Developer Portal は開発者の個人 VPS 上にデプロイしています。

Nginx で Web サーバを起動し、SSG された Angular プロジェクトの静的ファイルをホスティングします。

## 環境構築

Developer Portal はソースコードを公開しているので、ローカル環境で実行することが可能です。

### 開発環境

- Node.js 14
- yarn

### ローカルで実行する

まずはリポジトリを clone しましょう。
ついでに、依存関係のインストールも行います。

```bash
# リポジトリをclone
$ git clone https://github.com/averak/media-project-exercise1
$ cd media-project-exercise1

# 依存関係をインストール
$ yarn
```

clone できたら、下記コマンドでアプリケーションを起動できます。

実行できたら、[localhost:4200](http://localhost:4200)へアクセスできます。

```bash
$ yarn start
```

## 参考文献

- [Angular とは何か？](https://angular.jp/guide/what-is-angular)
