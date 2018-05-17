define("modules/clean/react/async_file_modal_controller",["require","exports","modules/core/exception"],function(e,t,n){"use strict";function r(t){e(["modules/clean/react/file_modal_controller"],t)}function i(e,t){r(function(n){return(0,n.showOverquota)(e,t)})}function o(e,t,n,i){r(function(r){return(0,r.showRestore)(e,t,n,i)})}function s(t){e(["modules/clean/react/file_modals"],function(e){(0,e.showUnifiedTrashModal)(t)})}function l(e,t,n){r(function(r){return(0,r.showPermanentlyDelete)(e,t,n)})}function a(e,t,n,i,o,s){void 0===s&&(s=!1),r(function(r){(0,r.showDelete)(e,t,n,i,o,s)})}function c(e,t,n){r(function(r){return(0,r.showNoAccess)(e,t,n)})}function u(e,t,n){r(function(r){return(0,r.showContentManagerBridge)(e,t,n)})}function h(e){r(function(t){return(0,t.showConfirmOwnershipTransferModal)(e)})}function d(e){if(!(e.fsws.length>0))return void n.reportStack("Opening FSW modal without fsws",{severity:n.SEVERITY.NONCRITICAL,tags:["x_platform_fsw"]});r(function(t){return(0,t.showFileSystemWarningsModal)(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.showOverquota=i,t.showRestore=o,t.showUnifiedTrashModal=s,t.showPermanentlyDelete=l,t.showDelete=a,t.showNoAccess=c,t.showContentManagerBridge=u,t.showConfirmOwnershipTransferModal=h,t.showFileSystemWarningsModal=d}),define("modules/clean/react/icon/file_folder_icon",["require","exports","tslib","external/react","modules/clean/filetypes","modules/clean/react/icon/file_icon","modules/clean/react/icon/folder_icon"],function(e,t,n,r,i,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props.file.type;return e===i.FileTypes.FILE||e===i.FileTypes.PACKAGE?r.createElement(o.FileIcon,n.__assign({},this.props)):r.createElement(s.FolderIcon,n.__assign({},this.props))},t})(r.Component);t.FileOrFolderIcon=l}),define("modules/clean/react/icon/file_icon",["require","exports","tslib","external/react","spectrum/file_icon","spectrum/icon_content"],function(e,t,n,r,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s;(function(e){e[e.READY=0]="READY",e[e.LOADED=1]="LOADED",e[e.ERROR=2]="ERROR"})(s||(s={}));var l=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={previewState:s.READY},t.handleImageLoad=function(){t.setState({previewState:s.LOADED})},t.handleImageError=function(){t.setState({previewState:s.ERROR})},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.showPreview&&this.preloadImage()},t.prototype.componentWillReceiveProps=function(e){!this.props.showPreview&&e.showPreview&&this.preloadImage()},t.prototype.componentDidUpdate=function(e){var t=this.props.file.thumbnail_url_tmpl;this.props.showPreview&&t!==e.file.thumbnail_url_tmpl&&(this.setState({previewState:s.READY}),this.preloadImage())},t.prototype.preloadImage=function(){var e=this.props.file.thumbnail_url_tmpl;if(e){var t=new Image;t.onload=this.handleImageLoad,t.onerror=this.handleImageError,t.src=e}},t.prototype.render=function(){var e=this.props,t=e.file,l=e.variant,a=e.showPreview,c=n.__rest(e,["file","variant","showPreview"]),u=t.fq_path,h=t.thumbnail_url_tmpl,d=t.isDeleted,p=t.is_symlink,f=this.state.previewState;if(a&&h&&f===s.LOADED)return r.createElement("img",n.__assign({src:h,alt:t.fq_path,draggable:!1,onError:this.handleImageError},c));if(p){var m=l?l:"small",g="symlink-"+m;return r.createElement(o.IconContent,n.__assign({name:g,disabled:d},c))}return r.createElement(i.FileIcon,n.__assign({path:u,variant:l,disabled:d},c))},t.defaultProps={showPreview:!0,variant:"small"},t})(r.Component);t.FileIcon=l}),define("modules/clean/react/no-jquery",["require","exports"],function(e,t){"use strict";function n(e,t){if(e.closest)return e.closest(t);for(var n=e;n;){var i=r(n);if(i&&i.call(n,t))return n;n=n.parentElement}return null}function r(e){return e.matches||e.msMatchesSelector||e.webkitMatchesSelector}function i(){if(null===s)try{var e=new window.XMLHttpRequest;s=!!e&&"withCredentials"in e}catch(e){s=!1}return s}Object.defineProperty(t,"__esModule",{value:!0}),t.closestElement=n;var o=(function(){function e(e){this.handlers={},this.element=e}return e.prototype.add=function(e,t,n){this.handlers[e]=this.handlers[e]||{},this.handlers[e][t]=n,this.element.addEventListener(t,n)},e.prototype.remove=function(e,t,n){this.handlers[e]&&this.handlers[e][t]&&(this.element.removeEventListener(t,n||this.handlers[e][t]),this.handlers[e][t]===n&&delete this.handlers[e][t])},e.prototype.removeAll=function(e){if(this.handlers[e])for(var t in this.handlers[e])this.handlers[e].hasOwnProperty(t)&&(this.element.removeEventListener(t,this.handlers[e][t]),delete this.handlers[e][t])},e})();t.ScopedEventHandlers=o;var s=null;t.corsSupport=i}),define("modules/clean/react/path_filter_button",["require","exports","external/react","spectrum/dropdown_button","modules/clean/react/title_bubble","modules/clean/em_string","modules/clean/filepath"],function(e,t,n,r,i,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PathFilterButton=function(e){var t=e.path,l=e.defaultText,a=e.dropdownClasses,c=e.disabled,u=e.onClick,h=t&&!s.paths_are_equal(t,"/")?o.Emstring.em_snippet(s.filename(t),10,.6):null,d=n.createElement(r.DropdownButton,{className:a,disabled:c,onClick:u},h||l);return h?n.createElement(i.TitleBubble,{content:t,position:i.TitleBubble.POSITIONS.BOTTOM},d):d}}),define("modules/clean/search/search_highlights",["require","exports","external/classnames","react"],function(e,t,n,r){"use strict";function i(e,t){if(!t||!t.length)return[];var n=[],r=0;return t.forEach(function(t){var i=t.pos;i>r&&(r=i);var o=e.indexOf(t.string,r);o>=0&&n.push({pos:o,len:t.string.length,string:t.string})}),n}function o(e,t){if(!t)return[{text:e,isHighlighted:!1}];t=i(e,t);for(var n=0,r=0,o=[];n<e.length;){var s=void 0,l=void 0,a=t[r];r>=t.length?(l=!1,s=n+e.length):a.pos>n?(l=!1,s=a.pos):(l=!0,s=a.pos+a.len);var c=e.substring(n,s);o.push({text:c,isHighlighted:l}),n=s,l&&r++}return o}function s(e,t){return c(o(e,t))}function l(e,t){return t?t.map(function(e){return{text:e.string,isHighlighted:e.is_highlighted}}):[{text:e,isHighlighted:!1}]}function a(e,t){return c(l(e,t))}function c(e){return r.createElement("span",null,e.map(function(e,t){return r.createElement("span",{className:n({highlighted:e.isHighlighted,"is-highlighted":e.isHighlighted}),key:t},e.text)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.highlightMatchSections=o,t.highlightMatchReact=s,t.highlightSectionsFromHighlightSpans=l,t.highlightReactFromHighlightSpans=a});
//# sourceMappingURL=pkg-browse-more.min.js-vflWIADBG.map