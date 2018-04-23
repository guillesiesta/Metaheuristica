define(["require","exports","tslib","classnames","react","spectrum/comments/comment/index","spectrum/comments/thread/thread_editor"],function(e,t,n,r,o,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isEditorEmpty:!0},t.onEditorCancel=function(){},t.onEditorContentChange=function(e){t.setState({isEditorEmpty:""===e.text})},t.onEditorPost=function(e){},t}return n.__extends(t,e),Object.defineProperty(t.prototype,"active",{get:function(){return this.props.active||!this.state.isEditorEmpty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"className",{get:function(){var e=this.props,t=e.className,n=void 0===t?"":t,o=e.thread;return r(n,{"sc-thread":!0,"sc-thread-active":this.active===!0,"sc-thread-read":o.read,"sc-thread-unread":!o.read,"sc-thread-resolved":o.resolved,"sc-thread-unresolved":!o.resolved})},enumerable:!0,configurable:!0}),t.prototype.renderActive=function(){var e=this.props,t=e.actions,n=e.thread,r=e.user;return o.createElement("li",{className:this.className},o.createElement("div",null,o.createElement("button",{onClick:t.onMarkAsRead},"Mark As Read"),o.createElement("button",{onClick:t.onMarkAsUnread},"Mark As Unread"),o.createElement("button",{onClick:t.onResolve},"Resolve"),o.createElement("button",{onClick:t.onUnresolve},"Unresolve")),o.createElement("ul",null,n.comments.map(function(e){return o.createElement(a.Comment,{active:!0,comment:e})})),o.createElement(c.ThreadEditor,{author:r,onCancel:this.onEditorCancel,onContentChange:this.onEditorContentChange,onPost:this.onEditorPost}))},t.prototype.renderInactive=function(){var e=this.props,t=e.onActivated,n=e.thread,r=[o.createElement(a.Comment,{active:!1,comment:n.comments[0]})];return n.comments.length>2&&r.push(o.createElement("div",{className:"sc-thread-comment-number"},n.comments.length-2," comment")),n.comments.length>1&&r.push(o.createElement(a.Comment,{active:!1,comment:n.comments[n.comments.length-1]})),o.createElement("li",{className:this.className,tabIndex:0,onClick:t},o.createElement("ul",null,r))},t.prototype.render=function(){return this.active?this.renderActive():this.renderInactive()},t})(o.PureComponent);t.Thread=s});
//# sourceMappingURL=thread.bundled.min.js-vfl9uACX4.map