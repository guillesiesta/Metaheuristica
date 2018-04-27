define(["require","exports","modules/clean/browse_interface","modules/clean/multiaccount_login","modules/clean/sharing/api/mount_client","modules/clean/sharing/role_selector_modal","modules/clean/sharing/ui_notifications_util","modules/clean/viewer","modules/core/browser","modules/core/exception","modules/core/i18n"],function(e,r,o,i,n,t,a,s,u,l,_){"use strict";function d(e,r,c,f,m){void 0===f&&(f=!1),void 0===m&&(m=null);var g,p=_.i18n_default_project("sharing")._;if(r)s.Viewer.get_viewer().is_role_signed_in(r)||i.show_modal({role:r,on_success:function(){d(e,r,c)}});else if(s.Viewer.get_viewer().is_paired){var w=function(r){c="PREVIEW_PAGE",d(e,r,c)};new t.RoleSelectorModal(w).show()}var v=s.Viewer.get_viewer();if(r){var h=v.get_uid_by_role(r);l.assert(!!h,"selected role should have corresponding uid"),g=h?h:-1}else l.assert(!v.is_paired,"role can not be unspecified for paired viewer"),g=v.get_user_ids()[0];var b=p("Adding to your Dropbox...");v.is_paired&&(v.get_user_by_id(g).is_team?(b=p("Adding to your %(team_name)s Dropbox..."),b=b.format({team_name:v.team_name})):b=p("Adding to your personal Dropbox...")),a.sharingNotificationSuccess(b);var y=function(e){var r=e;m&&(r+=m.ns_path);var i=s.Viewer.get_viewer().get_user_by_id(g),n=o.browse_uri_for_fq_path(i,r),t=f?"1":"0";n.updateQuery({from_scl_sync_modal:t}),u.redirect(n.toString())};new n.MountFolderApiClient({userId:g}).mount({contentId:e}).then(function(e){return y(e.path_lower)}).catch(function(e){e&&e.error&&"insufficient_quota"===e.error[".tag"]?a.sharingNotificationError(p("Can’t add folder. Your Dropbox account is full.")):a.sharingNotificationError(p("We were unable to complete your request."))})}Object.defineProperty(r,"__esModule",{value:!0}),r.mountSharedFolder=d});
//# sourceMappingURL=shared_content_link_mount_folder.min.js-vflORltMG.map