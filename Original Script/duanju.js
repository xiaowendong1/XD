/*************************************

项目名称：星芽短剧
下载地址：appstore下载
脚本作者：xiaowendong1
使用说明：解锁VIP

**************************************
[rewrite_local]
^https:\/\/app\.whjzjx\.cn\/v1\/account\/detail url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/duanju.js

[mitm]
hostname = app.whjzjx.cn

*************************************/

var xd = JSON.parse($response.body);

xd.data. expiration_date = "9999-12-31";

xd.data. is_auto_play_ad = "true";

xd.data. vip_status = "2";

xd.data. vip_expired_timestamp = "253402247078";

$done({body: JSON.stringify(xd)});