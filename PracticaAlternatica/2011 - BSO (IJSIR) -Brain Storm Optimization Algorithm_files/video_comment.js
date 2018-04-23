define(["require","exports","tslib","external/react","modules/clean/video_annotations_prototype/components/time_button","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/avatar/photo_avatar","modules/clean/avatar/viewer_avatar","modules/clean/datetime","modules/clean/video_annotations_prototype/components/avatar","modules/clean/video_annotations_prototype/components/base_comment_input","modules/clean/video_annotations_prototype/components/notify_hint","modules/core/i18n","external/lodash","modules/clean/video_annotations_prototype/components/deleted_top_comment","external/react-dom"],function(e,t,n,o,l,a,m,r,c,s,i,d,p,u,h,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDeleteClick=function(){var e=t.props,n=e.comment;(0,e.deleteComment)(n)},t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.collapsed,n=e.comment,i=e.deleteComment,d=e.user,p=e.videoLength,u=n.comment_text,h=n.comment_metadata.frame_time,_=n.commenter_info,v=_.dbx_account_id,f=_.display_name,y=_.photo_circle_url,E=n.when_created,C=n.is_deleted,N=n.permissions.can_delete;if(C)return null;var g=!t&&N&&i,T=o.createElement(s.InitialsAvatar,{displayName:f});d&&v===d.account_id?T=o.createElement(r,{photoUrl:d.photo_circle_url,alt:f,dimension:24,defaultAvatar:T}):y&&(T=o.createElement(m.PhotoAvatar,{photoUrl:y,alt:f,dimension:24}));var b="reply_count"in n,x=b&&h!==-1&&o.createElement(l.TimeButton,{time:a.VideoAnnotationPrototypeHelper.unitConvertDomainObjectTimeToSeconds(h),videoLength:p});return o.createElement("div",{className:"single-comment-holder"},o.createElement("div",{className:"commenter-photo"},T),o.createElement("div",{className:"comment"},!t&&o.createElement("div",{className:"comment-info"},o.createElement("span",{className:"commenter-name"},f),o.createElement("span",{className:"comment-spacer"}),o.createElement("span",{className:"comment-when"},c.ago(E,!1,!0,!0))),o.createElement("div",{className:"comment-body"},x,u),g&&o.createElement("div",null,o.createElement("button",{className:"delete-button button-as-link",onClick:this.handleDeleteClick},"Delete"))))},t})(o.Component),f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={replyText:""},t.handleClick=function(){var e=t.props,n=e.onClick,o=e.onExpand;n&&n(),t.collapsed&&o&&o()},t.handleReplyChange=function(e){t.setState({replyText:e})},t.handleReplySubmit=function(){var e=t.props,n=e.user,o=e.replyToComment,l=t.state.replyText;n&&o&&o({comment_text:l,comment_metadata:{frame_time:-1}})},t}return n.__extends(t,e),t.prototype.componentDidUpdate=function(e,n){if(e.collapsed&&0===n.replyText.length&&!this.props.collapsed){var o=_.findDOMNode(this),l=o.parentElement,a=l.scrollTop;o.offsetParent!==l&&(a+=l.offsetTop),a>o.offsetTop&&(l.scrollTop-=a-o.offsetTop,a=o.offsetTop);var m=a+l.clientHeight,r=o.offsetTop+o.clientHeight,c=r-m;c>0&&(l.scrollTop+=c+t.ADDITIONAL_SCROLL_MARGIN)}},Object.defineProperty(t.prototype,"collapsed",{get:function(){return this.props.collapsed&&0===this.state.replyText.length},enumerable:!0,configurable:!0}),t.prototype.renderCollapsed=function(){var e=this.props,t=e.comment,n=e.deleteComment,l=e.user,a=e.videoLength,m=t.is_deleted,r=t.reply_comments,c=u.filter(r,function(e){return!e.is_deleted}),s=u.last(c),i=c.length-1,d=l&&!m;return o.createElement("div",{className:"comment-thread-with-hint"},o.createElement("div",{className:"comment-thread collapsed",onClick:this.handleClick},o.createElement("div",{className:"comment-thread__comments"},o.createElement("div",null,m?o.createElement(h.DeletedTopComment,{comment:t,videoLength:a}):o.createElement(v,{comment:t,deleteComment:n,user:l,videoLength:a,collapsed:!0}),i>0&&o.createElement("div",{className:"hidden-replies"},o.createElement("a",{className:"replies-count-button"},p.ungettext("%(num)s comment","%(num)s comments",i).format({num:i}))),s&&o.createElement(v,{key:s.comment_gid,comment:s,deleteComment:n,user:l,videoLength:a,collapsed:!0})),d&&o.createElement("div",{className:"reply-hint"},"Reply..."))))},t.prototype.getFooterInfo=function(){var e=this.props,t=e.user,n=e.comment,o=n.is_deleted,l=n.repliers_to_notify,a=e.ownersToNotify,m=t&&!o,r=u.uniqBy(l.concat(a),function(e){return e.dbx_account_id});return{enableReplyFooter:m,shouldShowNotifyHint:m&&r.length>0,usersToNotify:r}},t.prototype.render=function(){var e=this.props,t=e.comment,n=e.deleteComment,l=e.user,a=e.videoLength,m=t.comment_gid,r=t.is_deleted,c=t.is_resolved,s=t.reply_comments,p=s.filter(function(e){return!e.is_deleted}).length;if(c||r&&0===p)return null;if(this.collapsed)return this.renderCollapsed();var u=this.getFooterInfo(),_=u.enableReplyFooter,f=u.shouldShowNotifyHint,y=u.usersToNotify,E=this.state.replyText;return o.createElement("div",{className:"comment-thread-with-hint"},o.createElement("div",{className:"comment-thread",onClick:this.handleClick},o.createElement("div",{className:"comment-thread__comments"},o.createElement("div",null,r?o.createElement(h.DeletedTopComment,{comment:t,videoLength:a}):o.createElement(v,{key:m,comment:t,deleteComment:n,user:l,videoLength:a,collapsed:!1}),s.map(function(e){return o.createElement(v,{key:e.comment_gid,comment:e,deleteComment:n,user:l,videoLength:a,collapsed:!1})}))),_&&o.createElement("div",{className:"comment-thread__reply-footer"},o.createElement(i.BaseCommentInput,{autoFocus:!0,onChange:this.handleReplyChange,onSubmit:this.handleReplySubmit,placeholderText:"Reply...",user:l,text:E}))),f&&o.createElement(d.NotifyHint,{usersToNotify:y}))},t.ADDITIONAL_SCROLL_MARGIN=25,t})(o.Component);t.VideoCommentSubthread=f});
//# sourceMappingURL=video_comment.min.js-vfltFER_q.map