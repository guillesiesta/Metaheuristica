define(["require","exports","tslib","external/classnames","external/react","jquery","modules/clean/video_annotations_prototype/components/video_comment","modules/clean/video_annotations_prototype/store/selectors","external/react-redux","modules/clean/video_annotations_prototype/store/actions","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/video_annotations_prototype/video_preview_event_emitter","modules/clean/video_annotations_prototype/constants","modules/clean/react/css","modules/clean/video_annotations_prototype/components/video_comment_input_box","modules/clean/video_annotations_prototype/components/video_comments_download_button"],function(e,t,n,o,i,r,d,a,m,s,c,l,u,p,v,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var _=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={focusedGid:null},t.handleVideoToggled=function(e,n,o){t.setState({videoLength:n})},t.setFocusedComment=function(e){t.setState({focusedGid:e})},t.handleExpandComment=function(e){var t=e.comment_metadata.frame_time;if(t!==-1){var n=c.VideoAnnotationPrototypeHelper.unitConvertDomainObjectTimeToSeconds(t);l.videoPreviewEventEmitter.emit(u.EventTypes.SEEK_POSITION_AND_PAUSE,n)}},t.handlePaneClick=function(e){e.target===e.currentTarget&&t.setState({focusedGid:null})},t}return n.__extends(t,e),t.prototype.refreshWidth=function(){if(r(".video-js").length)return r(".video-js").css("width","100%")},t.prototype.componentDidMount=function(){this.refreshWidth(),l.videoPreviewEventEmitter.addListener(u.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled)},t.prototype.componentWillUnmount=function(){l.videoPreviewEventEmitter.removeListener(u.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled)},t.prototype.render=function(){var e=this,t=o({"file-feedback":!0,"file-feedback--minimized":!1,"preview-ready":!0,hidden:!1}),n=this.props,r=n.comments,a=n.ownersToNotify,m=n.file,s=n.linkUrl,l=n.user,u=n.hasOnboarded,p=n.addComment,_=n.deleteComment,h=n.resolveComment,y=n.dismissOnboardingBubble,C=l&&l.id,g=this.state,E=g.focusedGid,b=g.videoLength;if(!m)return null;var T=c.VideoAnnotationPrototypeHelper.shouldShowSimplifiedVideoPrototype(m),w=c.VideoAnnotationPrototypeHelper.shouldShowDownloadButton(),O=!T&&C?function(e){return _(C,m,s,e)}:void 0,S=!T&&C?function(e){return h(C,m,s,e)}:void 0,x=void 0,P=function(e){};C&&m&&(x=function(e){return p(C,m,s,e)},P=function(e){return function(t){return p(C,m,s,t,e)}});var V=C?function(){return y(C)}:void 0,k=function(t){return function(){return e.setFocusedComment(t)}},N=function(t){return function(){return e.handleExpandComment(t)}},D=i.createElement("div",{className:"logged-out-hint"},"Sign in to leave a comment"),A=this.copyAndSortCommentThreads(r);return i.createElement("div",{className:"experimental-annotations-pane",tabIndex:-1},l?i.createElement(v.VideoCommentInputBox,{addComment:x,user:l,renderCoachmark:!u,onCoachmarkClose:V,ownersToNotify:a}):D,w&&i.createElement(f.VideoCommentsDownloadButton,{file:m}),i.createElement("div",{className:t,onClick:this.handlePaneClick},A.map(function(e){return i.createElement(d.VideoCommentSubthread,{key:e.comment_gid,collapsed:e.comment_gid!==E,comment:e,deleteComment:O,onClick:k(e.comment_gid),onExpand:N(e),resolveComment:S,replyToComment:P(e.comment_gid),user:l,videoLength:b,ownersToNotify:a})})))},t.prototype.copyAndSortCommentThreads=function(e){var t=e.slice();return t.sort(function(e,t){var n=e.comment_metadata.frame_time,o=t.comment_metadata.frame_time;return n===o?t.when_created-e.when_created:n===-1?1:o===-1?-1:n-o}),t},t})(i.Component),h=function(e){return{comments:a.getComments(e),hasOnboarded:a.getHasOnboarded(e),ownersToNotify:a.getOwnersToNotify(e)}},y=p(_,["/static/css/video_annotation_prototype-vfly3pQQA.css"]),C=m.connect(h,{addComment:s.addComment,deleteComment:s.deleteComment,resolveComment:s.resolveComment,dismissOnboardingBubble:s.dismissOnboardingBubble})(y);t.VideoAnnotationsPane=C});
//# sourceMappingURL=video_annotations_pane.min.js-vfl5C8eAN.map