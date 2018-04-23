define(["require","exports","tslib","external/react","external/prop-types","modules/clean/avatar/avatar_with_default","modules/clean/avatar/initials_avatar","modules/clean/avatar/style","modules/clean/avatar/viewer_avatar","modules/clean/datetime","modules/clean/em_string","modules/clean/previews/util","modules/clean/react/pass/constants","modules/clean/react/pass/utils","modules/clean/react/title_bubble","modules/clean/react_format","modules/core/browser","modules/core/user_i18n","modules/core/i18n","modules/clean/react/pass/upsell/tooltip/pass_upsell_tooltip","modules/clean/react/pass/upsell/simple_upsell"],function(e,t,o,n,s,r,a,i,l,p,u,c,m,d,h,f,w,_,g,v,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var T=(function(e){function t(t){var o=e.call(this,t)||this;return o.allowInteractingWithTooltip=function(){return!1},o.renderAvatarButton=function(){return n.createElement("button",{className:"pass-facepile-avatar"},o.getAvatar())},o.state={loadResult:"loaded"},o}return o.__extends(t,e),t.prototype.getInitialsColor=function(){},t.prototype.render=function(){var e=this.wrapAvatarWithTooltip(),t="pending"===this.state.loadResult?"react-pass__face-no-display":"react-pass__face-container";return n.createElement("div",{className:t},e)},t.prototype.wrapAvatarWithTooltip=function(){return n.createElement(h.TitleBubble,{content:this.getTooltipElement(),position:h.TitleBubble.POSITIONS.BOTTOM,distanceFromTarget:9,isTargetPositionFixed:!0,onMouseEnter:this.props.onMouseEnter,className:this.getTooltipClass(),backgroundColor:this.getInitialsColor(),allowInteractTooltip:this.allowInteractingWithTooltip()},this.renderAvatarButton())},t})(n.Component),I=(function(e){function t(t){var o=e.call(this,t)||this;return o.allowInteractingWithTooltip=function(){return o.showPassUpsell},o.state={loadResult:null==o.props.userInfo.photoUrl?"loaded":"pending"},o.boundOnLoad=o.onFinalize.bind(o,!0),o.boundOnError=o.onFinalize.bind(o,!1),o}return o.__extends(t,e),Object.defineProperty(t.prototype,"showPassUpsell",{get:function(){return this.context.isInSimpleUpsellExperiment()&&b.shouldShowSimpleUpsellForAvatar(this.props.userInfo)&&!!this.props.upsellInfo&&this.props.upsellInfo.isViewerEligibleForUpsell},enumerable:!0,configurable:!0}),t.prototype.offlineTooltipTemplate=function(){var e=g._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s",{comment:'Format like "userName <newline> Viewed 5 days ago'});if(c.shouldShowPlatformInfo()){var t=this.props.userInfo.platformType;t===m.PASS_PLATFORM.DESKTOP?e=g._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on desktop",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on desktop'}):t===m.PASS_PLATFORM.WEB?e=g._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on web",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on web'}):t===m.PASS_PLATFORM.MOBILE&&(e=g._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on mobile",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on mobile'}))}return e.replace("%(ago)s",p.ago(1e3*this.props.userInfo.whenLastSeen,!1,!0,!0))},t.prototype.onlineTooltipTemplate=function(){return g._("<b>%(user_name)s</b> <newline/> Viewing now",{comment:'Format like "user_name <newline> Viewing now"'})},t.prototype.accessNameTooltipTemplate=function(e){switch(e){case"owner":return g._("<b>%(user_name)s</b> <newline/> Owner",{comment:'Format like "user_name <newline> Owner"'});case"writer":return g._("<b>%(user_name)s</b> <newline/> Can edit",{comment:'Format like "user_name <newline> Can edit"'});case"reader":return g._("<b>%(user_name)s</b> <newline/> Can comment",{comment:'Format like "user_name <newline> Can comment"'});case"reader_no_comment":case void 0:return g._("<b>%(user_name)s</b> <newline/> Can view",{comment:'Format like "user_name <newline> Can view"'})}},t.prototype.isGuestAvatar=function(){return this.props.userInfo.userId&&d.AnonymousViewerUtils.isAnonymousUserId(this.props.userInfo.userId)},t.prototype.getUserAvatarProps=function(){var e=this.props.userInfo,t=e.displayName,s=e.isActive,r=this.isGuestAvatar()?d.AnonymousViewerUtils.getAnonymousViewerInitials(t):_.getInitials(t),i={dimension:32,initials:r,color:this.getInitialsColor(),shape:"CIRCLE"};s||(i.optionalClass="c-avatar--inactive",w.msie&&(i.color="#7B8994"));var l=n.createElement(a.InitialsAvatar,o.__assign({},i));return s||(l=n.createElement("span",{className:"c-avatar-initials-wrapper"},l)),{alt:t,dimension:32,photoUrl:this.getEffectivePhotoUrl(),defaultAvatar:l,optionalClass:i.optionalClass,shape:"CIRCLE",onLoad:this.boundOnLoad,onError:this.boundOnError}},t.prototype.getEffectivePhotoUrl=function(){return"error"===this.state.loadResult?void 0:this.props.userInfo.photoUrl},t.prototype.getAvatar=function(){var e=this.getUserAvatarProps();return this.props.userInfo.isViewer&&"error"!==this.state.loadResult?n.createElement(l,o.__assign({},e)):n.createElement(r,o.__assign({},e))},t.prototype.onFinalize=function(e){if(null!=this.getEffectivePhotoUrl()){this.setState({loadResult:e?"loaded":"error"});var t=this.props,o=t.userInfo.photoUrl,n=t.onLoad;n&&o&&n(o)}},t.prototype.getTooltipClass=function(){return this.showPassUpsell?"seen-state-title-bubble-with-upsell":"seen-state-title-bubble"},t.prototype.getInitialsColor=function(){return this.isGuestAvatar()?i.colorValueForAvatarName(this.props.userInfo.userId):i.colorValueForAvatarName(this.props.userInfo.displayName)},t.prototype.getTooltipElement=function(){var e=u.Emstring.em_snippet(this.props.userInfo.displayName,10);if(this.showPassUpsell&&this.context.getTracker()&&this.context.getUpsellUrl()&&this.context.getVariant()&&this.props.upsellInfo)return n.createElement(v.PassUpsellTooltip,{displayName:e,baseColor:this.getInitialsColor(),tracker:this.context.getTracker(),info:this.props.upsellInfo,upsellUrl:this.context.getUpsellUrl(),variant:this.context.getVariant()});var t=void 0;t=this.props.userInfo.isActive?this.onlineTooltipTemplate():null!=this.props.userInfo.whenLastSeen?this.offlineTooltipTemplate():this.accessNameTooltipTemplate(this.props.userInfo.accessLevel);var o=f.reactFormat(t,{user_name:e,b:n.createElement("b",{key:"thebold"}),newline:n.createElement("br",null)});return n.createElement("span",null,o)},t.contextTypes={getTracker:s.func,getUpsellUrl:s.func,getVariant:s.func,isInSimpleUpsellExperiment:s.func},t})(T);t.UserAvatar=I;var y=(function(e){function t(t){return e.call(this,t)||this}return o.__extends(t,e),t.prototype.getDisplayNum=function(){return this.props.moreFacepileCount>=m.MAX_OVERFLOW_BUTTON_INDICATOR?m.MAX_OVERFLOW_BUTTON_INDICATOR:this.props.moreFacepileCount},t.prototype.getMoreFacepileCountText=function(){return this.props.moreFacepileCount>=m.MAX_OVERFLOW_BUTTON_INDICATOR?m.MAX_OVERFLOW_BUTTON_INDICATOR+"+":""+this.props.moreFacepileCount},t.prototype.getAvatar=function(){return n.createElement(a.InitialsAvatar,{alt:this.getMoreFacepileCountText(),dimension:32,initials:this.getMoreFacepileCountText(),color:"#7B8994",shape:"CIRCLE",optionalClass:"c-avatar--overflow"})},t.prototype.getTooltipClass=function(){return"seen-state-title-bubble facepile-overflow"},t.prototype.getTooltipElement=function(){return g.ungettext("%(display_num)s other","%(display_num)s others",this.getDisplayNum()).format({display_num:this.getMoreFacepileCountText()})},t})(T);t.OverflowAvatar=y});
//# sourceMappingURL=avatars.min.js-vflOGTxqR.map