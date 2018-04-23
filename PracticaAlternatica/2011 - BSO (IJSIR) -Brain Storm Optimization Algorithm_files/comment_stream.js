define(["require","exports","tslib","react","classnames","spectrum/comments/thread/index"],function(e,t,r,n,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={activeThreadID:""},t.onThreadActivated=function(e){return function(){t.setState({activeThreadID:e})}},t}return r.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,d=t.className,o=void 0===d?"":d,i=t.user,c=r.__rest(t,["className","user"]),u=this.state.activeThreadID,m=a(o,{"sc-comment-stream":!0,"sc-comment-stream-enabled":c.enabled}),h=c.threads.map(function(t){return n.createElement(s.Thread,{actions:{onMarkAsRead:function(){return c.actionsAdapter.onThreadMarkedAsRead(t.id)},onMarkAsUnread:function(){return c.actionsAdapter.onThreadMarkedAsUnread(t.id)},onResolve:function(){return c.actionsAdapter.onThreadResolved(t.id)},onUnresolve:function(){return c.actionsAdapter.onThreadUnresolved(t.id)}},active:t.id===u,thread:t,user:i,onActivated:e.onThreadActivated(t.id)})});return n.createElement("ul",{className:m},h)},t})(n.PureComponent);t.CommentStream=d,s.Thread.displayName="Thread"});
//# sourceMappingURL=comment_stream.bundled.min.js-vfl8Baf34.map