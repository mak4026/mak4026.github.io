---
name: プラベでガチマbot
title: splatoon rating bot
subtitle: Splatoonのプライベートマッチにレーティングシステムを導入するbot
external_url: https://maktopia.hatenablog.com/entry/2018/08/13/192204
image_path: /images/works/private_rating_bot.jpg
date: 2018-8-30
---

### 概要
スプラトゥーン2のプライベートマッチの戦績から、プレイヤーのレーティング数値を計算し、
スプラトゥーンプレイヤーによく使われているボイスチャットツール Discord へ投稿するツールを作成しました。

試合が行われると自動的に新しいレーティングを投稿します。

レーティングはGlicko2レーティングを用いて計算します。
### 使ったもの
- Node.js
