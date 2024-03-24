/*************************************
软件名：星题库
脚本作者：xiaowendong1（xx）
使用说明：解锁会员，解锁星榜提名

**************************************
[rewrite_local]

^https:\/\/mb\.xinghengedu\.com\/api\/v5\.3\.0\/getUserByToken\.do url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk/xtk.js
^https:\/\/mb\.xinghengedu\.com\/questionBank\/v5\.1\.0\/getTopQuestionList\.do url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk/xtk.js

[mitm]
hostname = mb.xinghengedu.com

*************************************/

var body = $response.body;
var xiaodong = JSON.parse(body);
const xd = '/questionBank/v5.1.0/getTopQuestionList.do';
const xx = '/api/v5.3.0/getUserByToken.do';
if ($request.url.indexOf(xd) != -1){
body = body.replace(/\"isvip8":\w+/g, '\"isvip8":true');
body = body.replace(/\"isVip":\w+/g, '\"isVip":true');
}
if ($request.url.indexOf(xx) != -1){
xiaodong.data.viptype = "1";
xiaodong.data.vipStatus = "1";
xiaodong.data.vip = "true";
body = JSON.stringify(xiaodong);
}


$done({body});



