define(["require","exports","tslib","external/react","external/prop-types","modules/clean/react/bubble_menu","modules/clean/react/file_action_button_type","modules/clean/react/file_action_button_group"],function(e,t,n,o,l,c,i,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FileActionButtonType=i.FileActionButtonType,t.FileActionButtonGroup=u.FileActionButtonGroup;var r=o.createElement,s=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){return r(c.BubbleMenuItem,{onClick:this.props.callback,closeFunc:this.props.closeFunc,className:this.props.className},i.getFileActionButtonText(this.props.type))},t.displayName="FileActionButton",t.propTypes={type:l.string.isRequired,callback:l.func.isRequired,closeFunc:l.func,className:l.string},t.defaultProps={closeFunc:null},t})(o.Component);t.FileActionButton=s});
//# sourceMappingURL=file_action_button.min.js-vflmH7iSj.map