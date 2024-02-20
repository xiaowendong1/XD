/*************************************
项目名称：少年得道
下载地址：appstore下载（https://apps.apple.com/cn/app/id1279715325）
脚本作者：xiaowendong1（阿猫阿狗）
使用说明：解锁付费资源，免费观看，仅限视频和音频

**************************************

[rewrite_local]

^https:\/\/igetcool-gateway\.igetcool\.com url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/dedao/dedao.js

[mitm]
hostname = igetcool-gateway.igetcool.com

*************************************/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Ox10feb5=["\x62\x6F\x64\x79","\x2F\x61\x70\x70\x2D\x61\x70\x69\x2D\x70\x72\x6F\x64\x75\x63\x74\x2D\x73\x65\x72\x76\x65\x72\x2F\x77\x68\x69\x74\x65\x2F\x63\x6F\x75\x72\x73\x65\x2F\x76\x69\x64\x65\x6F\x73\x2E\x6A\x73\x6F\x6E","\x2F\x61\x70\x69\x2F\x70\x72\x6F\x64\x75\x63\x74\x2F\x63\x6F\x75\x72\x73\x65\x2F\x6F\x70\x74\x69\x6F\x6E\x2F\x63\x6F\x75\x72\x73\x65\x2F\x61\x75\x64\x69\x6F\x73","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x22\x62\x75\x79\x22\x3A\x31","\x72\x65\x70\x6C\x61\x63\x65","\x22\x75\x73\x65\x72\x41\x75\x64\x69\x6F\x4C\x6F\x63\x6B\x53\x74\x61\x74\x75\x73\x22\x3A\x32","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var body=$response[__Ox10feb5[0x0]];const video=__Ox10feb5[0x1];const Audio=__Ox10feb5[0x2];if($request[__Ox10feb5[0x4]][__Ox10feb5[0x3]](video)!=  -1){body= body[__Ox10feb5[0x6]](/\"buy":\d+/g,__Ox10feb5[0x5])};if($request[__Ox10feb5[0x4]][__Ox10feb5[0x3]](Audio)!=  -1){body= body[__Ox10feb5[0x6]](/\"userAudioLockStatus":\d+/g,__Ox10feb5[0x7])};$done({body});;;(function(_0x44c4x4,_0x44c4x5,_0x44c4x6,_0x44c4x7,_0x44c4x8,_0x44c4x9){_0x44c4x9= __Ox10feb5[0x8];_0x44c4x7= function(_0x44c4xa){if( typeof alert!== _0x44c4x9){alert(_0x44c4xa)};if( typeof console!== _0x44c4x9){console[__Ox10feb5[0x9]](_0x44c4xa)}};_0x44c4x6= function(_0x44c4xb,_0x44c4x4){return _0x44c4xb+ _0x44c4x4};_0x44c4x8= _0x44c4x6(__Ox10feb5[0xa],_0x44c4x6(_0x44c4x6(__Ox10feb5[0xb],__Ox10feb5[0xc]),__Ox10feb5[0xd]));try{_0x44c4x4= __encode;if(!( typeof _0x44c4x4!== _0x44c4x9&& _0x44c4x4=== _0x44c4x6(__Ox10feb5[0xe],__Ox10feb5[0xf]))){_0x44c4x7(_0x44c4x8)}}catch(e){_0x44c4x7(_0x44c4x8)}})({})