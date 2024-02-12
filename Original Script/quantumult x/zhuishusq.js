/*************************************

项目名称：追书神器
下载地址：appstore下载
脚本作者：xiaowendong1
使用说明：解锁VIP

**************************************
[rewrite_local]
^https:\/\/api\.zhuishushenqi\.com\/user\/account url script-response-body  https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/quantumult%20x/zhuishusq.js

[mitm]
hostname = api.zhuishushenqi.com

*************************************/

var body = $response.body;

body = body.replace(/"isMonthly":\s*false/g, '"isMonthly":true');

body = body.replace(/"isFree":\s*false/g, '"isFree":true');

body = body.replace(/"isAppstoreAutoMonthly":\s*false/g, '"isAppstoreAutoMonthly":true');

body = body.replace(/"vipStatus":\s*0/g, '"vipStatus":1');

body = body.replace(/"freeTime":\d
+/g, '"freeTime": 253402250317');


body = body.replace(/"isSVIPUser":\s*false/g, '"isSVIPUser":true');

$done({ body });

