/*

[rewrite_local]

^https:\/\/mb\.xinghengedu\.com\/api\/v5\.3\.0\/getUserByToken\.do url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/xtk2/xtk2.js

[mitm]
hostname = mb.xinghengedu.com

*************************************/
let xiaodong = JSON.parse($response.body);

xiaodong = {
  "msg" : "操作成功",
  "code" : 200,
  "data" : {
    "key" : "",
    "username" : "xx",
    "agentAddress" : "default",
    "code" : 1,
    "agentTel" : "4008079767",
    "img" : "default",
    "agentName" : " ",
    "bindPhoneNumber" : "12312341234",
    "agentQq" : "",
    "cs" : "",
    "videoSource" : 0,
    "endTime" : 0,
    "crmName" : "",
    "vipType" : "",
    "name" : "xx",
    "info" : "让我们一起加油做题吧~",
    "id" : 10003014977,
    "gender" : 0,
    "vipStatus" : "1",
    "everstarName" : "",
    "serverPhone" : "4008079767",
    "phone" : "",
    "dedicated" : 0,
    "vip" : false,
    "qq" : "",
    "integral" : 0
  }
}

$done({body: JSON.stringify(xiaodong)});