/*************************************

项目名称：drops
下载地址：appstore下载
脚本作者：xiaowendong1（xx）
使用说明：解锁vip

**************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body 

[mitm] 
hostname = api.revenuecat.com

************************************/

var xd = JSON.parse($response.body);

xd = {
  "request_date_ms" : 1709470947875,
  "request_date" : "2024-03-03T13:02:27Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-03-03T12:37:35Z",
    "original_application_version" : "38.8.12",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "premium_yearly_full_price_tier_b_free_trial_7_lang_ko" : {
        "original_purchase_date" : "2024-03-03T11:15:28Z",
        "expires_date" : "2099-03-10T10:15:27Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "430001741225607",
        "unsubscribe_detected_at" : "2024-03-03T11:20:36Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-03-03T11:15:27Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-03-03T11:15:27Z",
        "product_identifier" : "premium_yearly_full_price_tier_b_free_trial_7_lang_ko",
        "expires_date" : "2099-03-10T10:15:27Z"
      }
    },
    "original_purchase_date" : "2024-03-03T10:57:10Z",
    "original_app_user_id" : "us-east-1:36698d82-9ee2-c8df-2a13-af39a42149bf",
    "last_seen" : "2024-03-03T12:38:11Z"
  }
}

$done({body: JSON.stringify(xd)});
