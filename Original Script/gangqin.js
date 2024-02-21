/*************************************

项目名称：星芽短剧
下载地址：appstore下载
脚本作者：xiaowendong1
使用说明：解锁VIP

**************************************
[rewrite_local]
^https:\/\/gangqinpu\.lzjoy\.com\/ url script-response-body

hostname = gangqinpu.lzjoy.com

*************************************/
var xd = JSON.parse($response.body);

xd = {"returnCode":"0000","returnMsg":"ok","workDatas":{"is_score":0},"PHPSESSID":null,"datas":{"userinfo":{"id":"15081726","uid":"15081726","register_type":"1","third_party_qquid":"","third_party_qqportrait":"","third_party_qqnickname":"","third_party_wxuid":"","third_party_wxgzh_openid":"","third_party_wxportrait":"","third_party_wxnickname":"","third_party_wbuid":"","third_party_wbportrait":"","third_party_wbnickname":"","email":"","username":"","user_phone":"18169110486","head_portrait_image":"https:\/\/uc.gangqinpu.com\/avatar.php?uid=15081726","head_portrait_type":"0","is_phone":"1","nickname":"181****0486","gender":"0","birthday":null,"province":"","city":"","area":"","personal_profile":"","status":"1","checktime":"2024-02-21 20:40:01","addtime":"2024-02-21 20:40:01","phone_area_code":"","old_username":"","old_password":"","old_salt":"","ysuid":"0","third_party_qq_unionid":"","third_party_wx_unionid":"","is_email":"0","home_photo":"","version":"5.1.3","platform":"iphone","channel":"default","eqid":"66a6dac4828a42ce96cf8781597e497f","openid":null,"third_party_googleuid":null,"third_party_facebookuid":null,"firsttime":"0000-01-01 00:00:00","has_old_photo":0,"user_photo":"https:\/\/uc.gangqinpu.com\/avatar.php?uid=15081726","cg_uid":"15081726","signature":"","is_teacher":"1","is_vip":"1","is_yinyueren":"1","total_collect_by_num":"0","total_opern_num":"0","vip_expire_time":"","vip_expire_date":"","svip_expire_date":"","svip_create":"","vip_create":"","is_buy_vip":"1","equity":"http:\/\/s201.lzjoy.com\/res\/statics\/fileupload\/84db9abf8d9d79ac8a7e2964bc6e265a.png","pad_equity":"https:\/\/s201.lzjoy.com\/res\/statics\/fileupload\/1fc33dd14a842ae2b59f62272ff48305.jpg","chong_age":"0年","is_followed_by":"0","total_follow_num":"0","total_fans_num":"0","total_comment_num":"0","total_collect_num":"0","total_collect_album_num":"0","total_collect_singer_num":"0","total_shortvideo_num":"0","total_orbit_num":"0","perform":"0","level":"1","total_like_num":"0","album":{"total":"0","collect_total":"0","made_total":"0","original_made_num":"0","not_original_made_num":"0"},"vip_will_expire":"0","is_black":"0","total_fans_num_plus":"0","visit":{"unread":0,"be_visited_num":0,"be_visited_num_plus":"0"},"save_money_by_vip":"0","today_is_sign":false,"is_svip_forever":"1","is_svip_five":"1"}}}