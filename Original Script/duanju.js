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

var body = $response.body;

body = body.replace(/\"expiration_date":"0001-01-01"g,'\"expiration_date":9999-12-31');

body = body.replace(/\"is_auto_play_ad": "\w+"/ g,'\"is_auto_play_ad":true');

body = body.replace(/\"vip_status": "\d+"/ g,'\"vip_status":2');

body = body.replace(/\"vip_expired_timestamp": "\d+"/g,'\"vip_expired_timestamp":253402247078');

$done({ body });
