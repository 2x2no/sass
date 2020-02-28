# sass

## 環境構築

`yarn install`

多分結構かかります。

## sass のビルド

### `yarn run sass`

変更を watch しない。  
ビルドだけしたいときはこちらでOK。  

### `yarn run watch`

変更を watch する。  

scssファイルを変更したときに、自動で再ビルドして欲しいときはこちらを使用する。  

## css をインライン化

### `yarn run inline`  

`html/**/*.html` を対象とし、 `htmlMail` に css をインライン化した状態で出力する。  
sass のビルドとは連携していないので、 `yarn run sass` を実行後に実施することを想定している。

## ディレクトリ構成

### sass

sassファイルを格納する。  
このディレクトリの中にある `.scss` ファイルのみがビルド対象になっている。  

### css

sass をビルドし出来上がった css を格納するディレクトリ。  
html からはここにある css を参照している。  
