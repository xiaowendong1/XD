/*

[rewrite_local]

^https:\/\/www\.xiaomaigongkao\.com\/AppApi\/*\/* url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xmzx/xmzx.js

^https:\/\/www\.xiaomaigongkao\.com\/AppApi\/ShenQuestion\/correctTimes url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xmzx/xmzx.js

[mitm]
hostname = www.xiaomaigongkao.com

*************************************/

var body = $response.body;
var xiaodong = JSON.parse(body);

const jx = '/correctTimes';

const vip = '/vip/index';

const ce = '/Course/details';

if ($request.url.indexOf(jx) != -1){

xiaodong = {
  "code" : 2000,
  "msg" : "成功",
  "data" : {
    "correct_times" : 999999999999
  }
}

body = JSON.stringify(xiaodong);
}

if ($request.url.indexOf(vip) != -1){

body = body.replace(/\"is_free":\d+/g, '\"is_free":"1"');

body = body.replace(/\"vip_user":\d+/g, '\"vip_user":"1"');

body = body.replace(/\"is_vip_user":\w+/g, '\"is_vip_user":true');
}

if ($request.url.indexOf(ce) != -1){

body = body.replace(/\"is_buy":\d+/g, '\"is_buy":"1"');
}

$done({body});
