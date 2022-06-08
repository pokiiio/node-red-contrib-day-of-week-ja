# node-red-contrib-day-of-week-ja
 
A Node-RED node for Japanese 曜日 (day of the week).

曜日（日本語）や祝日かどうか、祝日だった場合はその名前（日本語）を取得するノードです。

## Install 
ご利用になられる環境に応じて、インストールを行ってください。

```
cd ~/.node-red
npm install node-red-contrib-day-of-week-ja
```

[ノードライブラリ](https://flows.nodered.org/)からもインストール可能です。

## Usage
このようなデータが取得できます。

```json
{ "dayNum": 4, "dayName": "木曜日", "isHoliday": true, "holidayName": "こどもの日" }
```