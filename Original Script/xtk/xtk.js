/*

[rewrite_local]

^https:\/\/mb\.xinghengedu\.com\/questionBank\/v5\.1\.0\/getTopQuestionList\.do url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk/xtk.js

[mitm]
hostname = mb.xinghengedu.com

*************************************/

var body = $response.body;

body = body.replace(/\"isvip8":\w+/g, '\"isvip8":true');
body = body.replace(/\"isVip":\w+/g, '\"isVip":true');

$done({body});
