# SMTP Setup Guide

LS 採用フォームのメール送信設定手順です。

対象機能:
- 応募が来たときの採用担当者向け通知メール
- 応募者向けの受付完了メール自動返信

現在の実装:
- フロント: [Entry.tsx](/D:/senaa_dev/LS_HP/client/src/pages/careers/Entry.tsx)
- API: [index.ts](/D:/senaa_dev/LS_HP/server/index.ts)
- 環境変数例: [.env.example](/D:/senaa_dev/LS_HP/.env.example)

## 1. まず決めること

以下を先に決めてください。

1. 送信元メールアドレス
- 応募者に自動返信するときに差出人として表示されるアドレスです。
- 例: `recruit.lsgroup2025@gmail.com`

2. 通知先メールアドレス
- 応募が来たときに通知を受けるアドレスです。
- 現在の設定想定:
  - `recruit.lsgroup2025@gmail.com`
  - `t.homma@ls-holdings.co.jp`

3. SMTP 利用方法
- Gmail を使うのか
- 独自ドメインメールを使うのか
- サーバー会社の SMTP を使うのか

## 2. この実装で必要な設定値

`.env` に以下を設定します。

```env
RECRUIT_RECEIVER_EMAIL="recruit.lsgroup2025@gmail.com,t.homma@ls-holdings.co.jp"
RECRUIT_FROM_EMAIL="recruit.lsgroup2025@gmail.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="recruit.lsgroup2025@gmail.com"
SMTP_PASS="ここにSMTPパスワード or アプリパスワード"
```

各項目の意味:

- `RECRUIT_RECEIVER_EMAIL`
  - 応募通知の送信先
  - 複数ある場合はカンマ区切り

- `RECRUIT_FROM_EMAIL`
  - 応募者への自動返信の差出人
  - 通常は `SMTP_USER` と同じにします

- `SMTP_HOST`
  - SMTP サーバー名

- `SMTP_PORT`
  - SMTP ポート
  - 587 が一般的

- `SMTP_USER`
  - SMTP ログイン ID

- `SMTP_PASS`
  - SMTP ログイン用パスワード
  - Gmail の場合は通常のログインパスワードではなくアプリパスワード推奨

## 3. Gmail を使う場合の手順

送信元を `recruit.lsgroup2025@gmail.com` にする場合の一般的な流れです。

1. Gmail アカウントにログイン
2. Google アカウントの 2 段階認証を有効化
3. Google の「アプリ パスワード」を発行
4. 発行された 16 桁のパスワードを `SMTP_PASS` に設定
5. `.env` を以下で埋める

```env
RECRUIT_RECEIVER_EMAIL="recruit.lsgroup2025@gmail.com,t.homma@ls-holdings.co.jp"
RECRUIT_FROM_EMAIL="recruit.lsgroup2025@gmail.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="recruit.lsgroup2025@gmail.com"
SMTP_PASS="発行したアプリパスワード"
```

補足:
- Gmail 本体の通常パスワードをそのまま使う運用は避けてください
- 2 段階認証が有効でないとアプリパスワードが使えないことがあります

## 4. 独自ドメインメールを使う場合

例: `recruit@ls-holdings.co.jp`

管理会社またはサーバー管理者に、以下を確認してください。

- SMTP サーバー名
- SMTP ポート
- SMTP ログイン ID
- SMTP パスワード
- TLS/SSL 利用有無

その情報を `.env` に設定すれば動きます。

例:

```env
RECRUIT_RECEIVER_EMAIL="recruit.lsgroup2025@gmail.com,t.homma@ls-holdings.co.jp"
RECRUIT_FROM_EMAIL="recruit@ls-holdings.co.jp"
SMTP_HOST="mail.ls-holdings.co.jp"
SMTP_PORT="587"
SMTP_USER="recruit@ls-holdings.co.jp"
SMTP_PASS="管理会社から発行されたSMTPパスワード"
```

## 5. どこに設定するか

ローカル開発ではルートの `.env` に設定します。

対象ファイル:
- [.env](/D:/senaa_dev/LS_HP/.env)

本番環境では、サーバーやホスティング側の環境変数設定にも同じ値を入れてください。

## 6. 設定後の確認方法

1. サーバーを起動
2. 採用フォームからテスト応募
3. 以下を確認

- `RECRUIT_RECEIVER_EMAIL` 側に通知メールが届く
- 応募者入力メールアドレスに自動返信が届く
- サーバー側でエラーが出ていない
- 保存ファイルにも応募データが残る

保存先:
- [entries.jsonl](/D:/senaa_dev/LS_HP/artifacts/careers-entries/entries.jsonl)

## 7. 今の状態

現状は SMTP 実値が未設定でもフォーム送信自体は動きます。

その場合の挙動:
- 応募内容は保存される
- メールは送信されない
- API 上は `stored_only` として処理される

つまり、SMTP 設定が入ると初めて「通知メール」と「自動返信メール」が実際に飛ぶ状態になります。

## 8. 管理者に依頼するときの文面例

以下をそのまま送れば足ります。

「採用フォームの自動返信設定のため、送信元メールアドレスとして使用するアカウントの SMTP 情報をご共有ください。
必要な情報は以下です。

- 送信元メールアドレス
- SMTP ホスト
- SMTP ポート
- SMTP ログインID
- SMTP パスワード

Gmail を利用する場合は、2段階認証を有効にしたうえで、アプリパスワードの発行をお願いします。」 

