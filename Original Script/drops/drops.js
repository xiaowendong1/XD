/*************************************

项目名称：drops
下载地址：appstore下载
脚本作者：xiaowendong1（xx）
使用说明：解锁vip

**************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/drops/drops.js 
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/drops/drops.js

[mitm] 
hostname = api.revenuecat.com

************************************/

const xd1 = {};
const xd2 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "premium";
const appid = "premium_yearly_full_price_tier_b_free_trial_7_lang_ko";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  xd1.headers = $request.headers;
} else if (xd2 && xd2.subscriber) {
  xd2.subscriber.subscriptions = xd2.subscriber.subscriptions || {};
  xd2.subscriber.entitlements = xd2.subscriber.entitlements || {};

const data = {
	"product_identifier": (appid),
	"expires_date": "2099-03-10T10:15:27Z",
	"purchase_date": "2024-03-03T11:15:27Z"
	};
  xd2.subscriber.entitlements[(name)] = (data);
  xd2.subscriber.subscriptions[(appid)] = {  ...data,	"original_purchase_date": "2024-03-03T11:15:27Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  xd1.body = JSON.stringify(xd2);
}

$done(xd1);
