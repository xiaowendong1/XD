/*************************************
软件名：星题库
脚本作者：xiaowendong1（xx）
使用说明：解锁会员，解锁星榜提名

**************************************
[rewrite_local]

^https:\/\/mb\.xinghengedu\.com\/*\/*\/*\.do  url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk/xtk.js

[mitm]
hostname = mb.xinghengedu.com

*************************************/
var body = $response.body;

body = body.replace(/\"isvip8":\w+/g, '\"isvip8":true');

body = body.replace(/\"isVip":\w+/g, '\"isVip":true');

body = body.replace(/\"vipType":"\d+"/g, '\"vipType":"1"');

body = body.replace(/\"vipStatus":"\d+"/g, '\"vipStatus":"1"');

body = body.replace(/\"vip":\w+/g, '\"vip":true');

$done({ body });


