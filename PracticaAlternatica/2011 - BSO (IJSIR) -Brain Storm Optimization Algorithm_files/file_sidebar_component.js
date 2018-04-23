define(["require","exports","tslib","external/react","modules/core/i18n","modules/clean/react/css","modules/clean/react/file_sidebar/file_sidebar_base","modules/clean/file_activity/clients/file_activity_data_source","modules/clean/react/file_sidebar/store/sidebar/helpers","modules/clean/react/file_sidebar/store/sidebar/actions","modules/clean/react/file_sidebar/store/sidebar/selectors","modules/clean/react/file_sidebar/store/file_activity/actions","modules/clean/react/file_sidebar/store/file_activity/selectors","modules/clean/react/file_sidebar/file_sidebar_connect","modules/clean/react/file_sidebar/comments_wrapper_component","modules/clean/react/file_activity_stream/file_activity_stream","modules/clean/react/file_sidebar/file_sidebar_logger","modules/clean/video_annotations_prototype/video_annotation_wrapper_component","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/react/comments2/components/comments_wrapper_component","modules/clean/react/comments2/helper"],function(e,t,i,n,o,s,r,a,c,l,m,p,u,d,_,f,b,y,h,v,C){"use strict";function F(e){return{activityContext:e.activityContext,commentsDisabledOnFile:e.commentsDisabledOnFile,shouldInitiallyFocusInput:e.shouldInitiallyFocusInput,currentFile:e.currentFile,sharedLinkInfo:e.sharedLinkInfo,user:e.user}}function S(e){return i.__assign({},m.getSidebarState(e),{fileActivityCount:u.getVisibleActivityCount(e),tabs:m.getTabsState(e),isComments2PermissionDenied:m.getIsComments2PermissionDenied(e),isComments2PermissionFetchComplete:m.getIsComments2PermissionFetchComplete(e)})}Object.defineProperty(t,"__esModule",{value:!0});var T=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.notifyStore=function(e){t.props.dispatch(l.openFile({file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user})),e.user&&t.props.dispatch(p.getActivityStream(e.user.id,e.currentFile))},t.onSelectTab=function(e){var i=t.props,n=i.dispatch,o=i.fileActivityCount,s=i.tabs.comments,r=i.user;n(l.selectTab(e)),b.logSidebarTabSelected({selected_tab:e,num_comments:s.extra.commentCount,num_events:o,viewing_user_id:r?r.id:null})},t}return i.__extends(t,e),t.prototype.componentWillMount=function(){a.initInstance()},t.prototype.componentDidMount=function(){this.notifyStore(this.props)},t.prototype.componentWillReceiveProps=function(e){var t={file:this.props.currentFile,isVersionHistoryMode:this.props.isVersionHistoryMode,user:this.props.user},i={file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user};c.isContextChanged(t,i)&&this.notifyStore(e)},t.prototype.componentWillUnmount=function(){this.props.dispatch(p.reset()),this.props.dispatch(l.reset())},t.prototype.renderCommentsTab=function(){var e=this.props,t=e.isComments2PermissionDenied,s=e.isComments2PermissionFetchComplete,a=e.currentFile,c=e.activityContext,l=e.sharedLinkInfo,m=e.user;if(C.Comments2Helper.shouldAttemptComments2Fetch(a)){if(!t)return n.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:0},n.createElement(v.CommentsWrapperComponent,{currentFile:a,user:m,shouldShowComments:s}))}else if(h.VideoAnnotationPrototypeHelper.shouldTryToShowVideoPrototype(a)&&!t)return n.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:0},n.createElement(y.VideoAnnotationWrapperComponent,{activityContext:c,currentFile:a,sharedLinkInfo:l,user:m,shouldShowComments:s}));return n.createElement(r.FileSidebarBase.Tab,{key:"comments",name:o._("Comments"),count:this.props.tabs.comments.count},n.createElement(_.CommentsWrapperComponent,i.__assign({},F(this.props))))},t.prototype.renderFileActivityTab=function(){var e=this.props,t=e.currentFile,i=e.user;return n.createElement(r.FileSidebarBase.Tab,{key:"activity",name:o._("Activity")},n.createElement(f.FileActivityStream,{file:t,user:i}))},t.prototype.render=function(){var e=this.props,t=e.activeTab,i=e.open,o=e.ready,s=e.tabs,a=s.comments,c=s.activity,l=[a.show?this.renderCommentsTab():null,c.show?this.renderFileActivityTab():null].filter(function(e){return e});return 0===l.length?n.createElement("div",{className:"file-sidebar"}):n.createElement(r.FileSidebarBase,{activeTabKey:t,isOpen:o&&i,onSelectTab:this.onSelectTab,headerComponent:this.props.headerComponent},l)},t})(n.Component);t.FileSidebarComponent=T,t.FileSidebar=s(d.fileSidebarConnect(S)(T),["/static/css/file-sidebar-vfl4fDuBX.css"])});
//# sourceMappingURL=file_sidebar_component.min.js-vflW-Ne4f.map