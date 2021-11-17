## Developer Portal とは

![Version 1.0](https://img.shields.io/badge/version-1.0-yellow.svg)
![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)

Developer Portal はメディアプロジェクト演習 1 の制作物として開発した、立命館大学生が Web 技術を学ぶためのポータルサイトです。

Web の基本から歴史、モダンな技術まで幅広く解説しています。

## コントリビューション

本プロジェクトは OSS としてオープンに公開されています。

プルリクエストや機能要求などのコントリビューションは歓迎です。
早速 GitHub にアクセスしリポジトリを Fork してみましょう！

> [リポジトリ](https://github.com/averak/media-project-exercise1)へアクセスしてください

![](https://docs.github.com/assets/images/help/repository/fork_button.jpg)

```bash
# リポジトリをclone
$ git clone https://github.com/{アカウント名}/media-project-exercise1
$ cd media-project-exercise1

# 最新のmasterを取り込む
$ git remote add upstream https://github.com/averak/media-project-exercise1
$ git pull upstream master
```

最新のソースコードをローカルに反映したら、issue 起票後にブランチを切って作業を進めてください。

```bash
# 作業ブランチを作成
# 例) feature/21_modify_uri_structure
$ git switch feature/{issue番号}_{作業内容}

# 作業...

# push & pull request
$ git push origin feature/{issue番号}_{作業内容}
```

## 機能要求

本ページは Web の基本と歴史、モダンな技術のみを扱っています。

他にも追加して欲しい機能があれば、[issues](https://github.com/averak/media-project-exercise1/issues)から報告してください！

1. リポジトリにアクセス
2. [New Issue]をクリック
3. Issue のタイトルと説明文を記入
