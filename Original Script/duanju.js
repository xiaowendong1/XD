/*************************************

项目名称：星芽短剧
下载地址：appstore下载
脚本作者：xiaowendong1
使用说明：解锁VIP

**************************************
[rewrite_local]
^https:\/\/app\.whjzjx\.cn\/v1\/account\/detail url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/duanju.js

[mitm]
hostname = app.whjzjx.cn

*************************************/

var xd = JSON.parse($response.body);

xd = {
  "code": "ok",
  "data": {
    "register_time": "2024-01-26",
    "theater_parent_id": 0,
   
    "is_history_theater_jump": false,
    "ecpm": 0,
    "tickets": 0,
    "send_tickets": 0,
    "expiration_date": "9999-01-01",
    "is_vip": 1,
    "mobile": "12345678901",
    "is_auto_play_ad": true,
    "ticket_total": 0,
    "ad_num": 0,
    "vip_first_at": "",
    "ecmp_avg": 0,
    "play_channel": 0,
    "report_class": 0,
    "report_ad_rule": 0,
    "report_theater_num": 0,
    "report_ad_rule_num": 0,
    "is_active_report": true,
    "species": "0",
    "cash_remain": "0.03",
    "user_next_task_time": 300,
    "user_next_task_specie": 166,
    "today_sign_task_specie": 266,
    "perday_sign_view_time": 900,
    "vip_status": 2,
    "current_timestamp": 1707295988,
    "vip_expired_timestamp": 253402247078,
    "avatar": "",
    "nickname": "",
    "scheme": "",
    "set_id": 0,
    "register_timestamp": 1706245102,
    "device_register_timestamp": 1706245102
  },
  "msg": "成功",
  "status": 0
}
$done({body: JSON.stringify(xd)});