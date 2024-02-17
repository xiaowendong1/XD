/*************************************
项目名称：少年得道
下载地址：appstore下载（http://985.so/wf7qs）
脚本作者：xiaowendong1（阿猫阿狗）
使用说明：解锁付费资源，免费观看，仅限视频和音频

**************************************

[rewrite_local]

^https:\/\/igetcool-gateway\.igetcool\.com url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/dedao/dedao.js

[mitm]
hostname = igetcool-gateway.igetcool.com

var body = $response.body;

const video = '/app-api-product-server/white/course/videos.json';

const Audio  = '/api/product/course/option/course/audios';

if ($request.url.indexOf(video) != -1){

body = body.replace(/\"buy":\d+/g, '\"buy":1');

}

if ($request.url.indexOf(Audio) != -1){

body = body.replace(/\"userAudioLockStatus":\d+/g, '\"userAudioLockStatus":2');

}

$done({body});
