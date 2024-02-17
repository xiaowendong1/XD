/*
疯狂刷题

[rewrite_local]

^https:\/\/api\.yaerxing\.com\/GetSTMyData5  url script-response-body   https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/shuati/shuati.js

[mitm] 

hostname = api.yaerxing.com
*/

var body = $response.body;

let obj = JSON.parse($response.body);

obj = {
  "download_count" : "0",
  "checker1" : [

  ],
  "res" : 0,
  "checker_flag" : 0,
  "follow_count" : 0,
  "fans_count" : 0,
  "messages" : [
    {
      "type" : 1,
      "count" : 2
    },
    {
      "type" : 2,
      "count" : 0
    },
    {
      "type" : 3,
      "count" : 0
    },
    {
      "type" : 4,
      "count" : null
    }
  ],
  "follow_note" : 0,
  "friend_visit_count" : 0,
  "experience_value" : 0,
  "get_coin_day" : 9999,
  "checker" : {
    "flag" : 0,
    "manager" : true,
    "level" : 0,
    "checker1" : {
      "ect" : 0,
      "level" : 0,
      "max" : 100
    }
  },
  "device_token" : "",
  "get_coin_status" : 0,
  "award_count" : "9999",
  "coin_count" : 9999,
  "answer_question_count" : 0

$done({body: JSON.stringify(obj)});
