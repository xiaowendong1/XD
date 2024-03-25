/*

[rewrite_local]

^https:\/\/mb\.xinghengedu\.com\/api\/v5\.3\.0\/getUserByToken\.do url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk2/xtk2.js

[mitm]
hostname = mb.xinghengedu.com

*************************************/
let xiaodong = JSON.parse($response.body);

xiaodong.data.vipStatus = "1";
xiaodong.data.vipType = "1";
xiaodong.data.vip = "true";

$done({body: JSON.stringify(xiaodong)});
