/*************************************

项目名称：趣配音
下载地址：appstore下载

使用说明：解锁终身vip，永久使用vip功能

**************************************
[rewrite_local]

^https:\/\/apis40\.qupeiyin\.com\/member\/index url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/qpy/qpy.js

hostname = apis40.qupeiyin.com

*************************************/

var xd = JSON.parse($response.body);
xd.data.is_svip = 1;
xd.data.svip_endtime = 4076230383;

$done({body : JSON.stringify(xd)});
