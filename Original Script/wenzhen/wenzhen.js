/*************************************

项目名称：问真
下载地址：appstore下载
脚本作者：xiaowendong1（xx）
使用说明：解锁终身钻石vip

**************************************
[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/wenzhen/wenzhen.js

hostname = bzpp2.iwzbz.com

*************************************/

var xd = JSON.parse($response.body);

xd = {
  "data": {
    "vipLevel": 3,
    "expires": "9999-01-01 00:00:00"
  },
  "code": -1,
  "message": "",
  "validateKey": "",
  "isSuccess": true
}

$done({body: JSON.stringify(xd)});
