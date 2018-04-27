define(["require","exports","modules/clean/ajax"],function(t,e,r){"use strict";var i=(function(){var t=void 0,e=void 0;return i=(function(){function i(){}return i.initClass=function(){var i=this;this.start_times={},this.DEFAULT_TIMER_NAME="view_time",this.get_timer_name=function(t){return null==t||"boolean"==typeof t?i.DEFAULT_TIMER_NAME:t},this.set_start_time=function(t){var e=i.get_timer_name(t);return i.start_times[e]=Date.now()},this.do_log_view_time=function(t,e){var r=i.get_timer_name(e);return t[r]=Math.round((Date.now()-i.start_times[r])/1e3)},t={},e=[5,15,60,120,300],this.log=function(t,e,n,a){switch(void 0===a&&(a=!1),n=n||{},t){case"paywall_device_limit":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/growth_paywall_device_limit_log",data:{evt:e,extra:JSON.stringify(n)}});case"paywall_shared_folder":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/growth_paywall_shared_folder_log",data:{evt:e,extra:JSON.stringify(n)}});case"onboarding":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/growth_onboarding_log",data:{evt:e,extra:JSON.stringify(n)}});case"sharing":return i.do_log_view_time(n),r.SilentBackgroundRequest({url:"/growth_sharing_log",data:{evt:e,extra:JSON.stringify(n)}});case"post_client_install_tab":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/growth_post_client_install_tab_log",data:{evt:e,extra:JSON.stringify(n)}});case"secondary_client_link":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/secondary_client_link_upsell_log",data:{evt:e,extra:JSON.stringify(n)}});case"plus_account_sharing":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/plus_account_sharing_upsell_log",data:{evt:e,extra:JSON.stringify(n)}});case"biz_trial_onboarding":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/biz_trial_onboarding_log",data:{evt:e,extra:JSON.stringify(n)}});case"uj_shared_folder_upsell_v1":return a&&i.do_log_view_time(n,a),r.SilentBackgroundRequest({url:"/uj_shared_folder_upsell_v1_log",data:{evt:e,extra:JSON.stringify(n)}});default:throw new Error("Invalid series name")}}},i.start_counter=function(r,i){return Array.from(e).map(function(e){return(function(e){return t[r+e]=setTimeout(function(){return i(r,{time_since_first_view:e})},1e3*e)})(e)})},i.stop_counter=function(r){return Array.from(e).map(function(e){return clearTimeout(t[r+e])})},i})(),i.initClass(),i})();return i});
//# sourceMappingURL=logger.min.js-vfl011Np7.map