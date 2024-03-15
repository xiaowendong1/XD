/*************************************
项目名称：企查查
下载地址：appstore下载
脚本作者：xiaowendong1（xx）
使用说明：解锁会员

**************************************

[rewrite_local]

^https:\/\/apph5\.qichacha\.com\/api\/basic\/getUserInfo url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/qcc/qcc.js

[mitm]
hostname = apph5.qichacha.com

*************************************/
var body = $response.body;

body = body.replace(/\"lastVipEndDate":".*?"/g, '\"lastVipEndDate":"2099-1-1"');

body = body.replace(/\"isSVIP":\w+/g, '\"isSVIP":true');

body = body.replace(/\"isVIP":\w+/g, '\"isVIP":true');

$done({ body });


