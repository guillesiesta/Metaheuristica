define("modules/clean/base64",["require","exports"],function(e,t){"use strict";function i(e){var t=[],i=0,s=0,r=0,o=0,n=0;for(e+="";i<e.length;)r=e.charCodeAt(i),r<128?(t[s++]=String.fromCharCode(r),i++):r>191&&r<224?(o=e.charCodeAt(i+1),t[s++]=String.fromCharCode((31&r)<<6|63&o),i+=2):(o=e.charCodeAt(i+1),n=e.charCodeAt(i+2),t[s++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&n),i+=3);return t.join("")}function s(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=void 0,s=void 0,r=void 0,o=void 0,n=void 0,a=void 0,l=void 0,d=void 0,u=0,c=0,_="",h=[];if(!e)return e;for(;;)if(i=e.charCodeAt(u++),s=e.charCodeAt(u++),r=e.charCodeAt(u++),d=i<<16|s<<8|r,o=d>>18&63,n=d>>12&63,a=d>>6&63,l=63&d,h[c++]=t.charAt(o)+t.charAt(n)+t.charAt(a)+t.charAt(l),!(u<e.length))break;_=h.join("");var p=e.length%3;return(p?_.slice(0,p-3):_)+"===".slice(p||3)}function r(e,t){var s=function(e){return e},r=t?s:i;if("function"==typeof window.atob)return r(window.atob(e));var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=0,a=0,l=[];if(!e)return e;for(e+="";;){var d=o.indexOf(e.charAt(n++)),u=o.indexOf(e.charAt(n++)),c=o.indexOf(e.charAt(n++)),_=o.indexOf(e.charAt(n++)),h=d<<18|u<<12|c<<6|_,p=h>>16&255,f=h>>8&255,S=255&h;if(l[a++]=64===c?String.fromCharCode(p):64===_?String.fromCharCode(p,f):String.fromCharCode(p,f,S),!(n<e.length))break}var F=l.join("");return F=r(F)}Object.defineProperty(t,"__esModule",{value:!0}),t.encode=s,t.decode=r}),define("modules/clean/react/browse/action_logger",["require","exports","tslib","modules/clean/filepath","modules/clean/react/browse/logger_util","modules/clean/search/search_bar/data/store","modules/clean/search/search_bar/data/selectors","modules/clean/web_user_action_logger","modules/clean/web_user_action_events","modules/clean/analytics"],function(e,t,i,s,r,o,n,a,l,d){"use strict";function u(e,t,o,n,l,d,u){var c={num_files_selected:n,num_folders_selected:l,source:t,view_type:d};if(r.isFile(u)){var _=u,h=_.request_id,p=_.ns_id,f=_.sjid,S=_.file_id,F=_.fq_path,E=_.bytes,y=_.ext;c=i.__assign({},c,{request_id:h,file_nsid:p,file_sjid:f,file_id:S,file_name:s.filename(F),file_path:F,file_size:E,file_extension:y})}else if(r.isPaper(u)){var _=u,h=_.request_id;c=i.__assign({},c,{request_id:h})}a.WebUserActionLog.log(e,o,c)}function c(e){var t=e.uid,i=e.entity_type,s=e.view_type,r=e.file_nsid,o=e.file_sjid,n=e.file_id,d=e.file_name,u=e.file_path,c=e.file_size,_=e.file_extension,h=e.request_id;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.SELECT_ROW,{entity_type:i,view_type:s,file_nsid:r,file_sjid:o,file_id:n,file_name:d,file_path:u,file_size:c,file_extension:_,request_id:h})}function _(e){var t=e.uid,i=e.entity_type,s=e.source,r=e.view_type,o=e.file_nsid,n=e.file_sjid,d=e.file_id,u=e.file_name,c=e.file_path,_=e.file_size,h=e.file_extension,p=e.request_id;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.OPEN_ROW,{entity_type:i,source:s,view_type:r,file_nsid:o,file_sjid:n,file_id:d,file_name:u,file_path:c,file_size:_,file_extension:h,request_id:p})}function h(e){var t=e.uid,i=e.view_type;e.file_nsid,e.file_path,e.file_name;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.CREATE_FOLDER,{view_type:i})}function p(e){var t=e.uid,i=e.modal_session_id,s=e.file_nsid,r=e.file_sjid,o=e.file_id,n=e.file_name,d=e.file_path;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.VIEW_SHARE_MODEL,{modal_session_id:i,file_nsid:s,file_sjid:r,file_id:o,file_name:n,file_path:d})}function f(e){var t=e.uid,i=e.show_deleted_files,s=e.view_type;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.TOGGLE_DELETED_FILES,{show_deleted_files:i,view_type:s})}function S(e){var t=e.uid,i=e.sort_by,s=e.sort_direction,r=e.view_type;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.SORT_RECORDS,{sort_by:i,sort_direction:s,view_type:r})}function F(e){var t=e.uid,i=e.isSearchMode,s=e.viewType;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.SWITCH_VIEW_TYPE,{view_type:s}),i&&d.SearchClientActivityLogger.log("switch_view_type",t,{search_session_id:n.searchSessionId(o.getStoreForSearchBar().getState()),view_type:s})}function E(e){var t=e.uid,i=e.source,s=e.view_type,r=e.file_nsid,o=e.file_path,n=e.file_name,d=e.num_files_selected,u=e.num_folders_selected;a.WebUserActionLog.log(t,l.WebUserActionLogEvent.RESTORE,{num_files_selected:d,num_folders_selected:u,source:i,view_type:s,file_nsid:r,file_path:o,file_name:n})}function y(e){var t=e.uid,i=e.source,s=e.view_type,r=e.result,o=e.num_files_selected,n=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.MOVE,o,n,s,r)}function T(e){var t=e.uid,i=e.source,s=e.view_type,r=e.result,o=e.num_files_selected,n=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.OPEN_ADD_TO_COLLECTION_MODAL,o,n,s,r)}function m(e){var t=e.uid,i=e.source,s=e.view_type,r=e.result,o=e.num_files_selected,n=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.COPY,o,n,s,r)}function v(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.VERSIONS,r,o,s)}function w(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.OPEN_MOVE_MODAL,r,o,s)}function g(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.RENAME,r,o,s)}function A(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.ADD_COMMENT,r,o,s)}function O(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.DOWNLOAD,r,o,s)}function D(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.OPEN_COPY_MODAL,r,o,s)}function C(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.DELETE,r,o,s)}function b(e){var t=e.uid,i=e.source,s=e.view_type,r=e.num_files_selected,o=e.num_folders_selected;u(t,i,l.WebUserActionLogEvent.PERMANENT_DELETE,r,o,s)}Object.defineProperty(t,"__esModule",{value:!0});(function(e){e.MAESTRO_RIGHT_SIDEBAR="MAESTRO_RIGHT_SIDEBAR",e.MAESTRO_PHOTOS_RIGHT_SIDEBAR="MAESTRO_PHOTOS_RIGHT_SIDEBAR",e.LEGACY_HEADER_ACTIONS="LEGACY_HEADER_ACTIONS",e.DRAG="DRAG"})(t.BrowseLogEventSource||(t.BrowseLogEventSource={})),t.logBrowseAction=u,t.logSelectRow=c,t.logOpenRow=_,t.logCreateFolder=h,t.logViewShareModel=p,t.logToggleDeletedFiles=f,t.logSortRecords=S,t.logSwitchViewType=F,t.logRestore=E,t.logMoveFiles=y,t.logOpenAddToCollectionModal=T,t.logCopyFiles=m,t.logVersions=v,t.logOpenMoveModal=w,t.logRenameFiles=g,t.logAddComment=A,t.logDownload=O,t.logOpenCopyModal=D,t.logDeleteFiles=C,t.logPermanentDeleteFiles=b}),define("modules/clean/react/browse/data/action_creators",["require","exports","modules/clean/react/browse/action_logger","modules/clean/react/browse/constants","modules/clean/react/browse/data/selectors","modules/clean/react/browse/data/types","modules/core/cookies"],function(e,t,i,s,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setAndStoreViewType=function(e){var t=e.user,r=e.viewType,o=e.isSearchMode;return function(e,l){var d=t.id;n.Cookies.delete(s.VIEW_TYPE_COOKIE_NAME),n.Cookies.create(s.VIEW_TYPE_COOKIE_NAME,r,1095),i.logSwitchViewType({uid:d,isSearchMode:o,viewType:r}),e(a({viewType:r}))}};var a=function(e){var t=e.viewType;return{type:o.ActionTypes.SET_VIEW_TYPE,payload:{viewType:t}}};t.restoreViewType=function(){return function(e,t){var i=n.Cookies.read(s.VIEW_TYPE_COOKIE_NAME);null!==i&&i!==r.viewType(t())&&e(a({viewType:i}))}},t.setShouldShowDeletedFiles=function(e){var t=e.shouldShowDeletedFiles;return{type:o.ActionTypes.SET_SHOULD_SHOW_DELETED_FILES,payload:{shouldShowDeletedFiles:t}}}}),define("modules/clean/react/browse/data/reducer",["require","exports","tslib","modules/clean/react/files_view/types","modules/clean/react/browse/data/types"],function(e,t,i,s,r){"use strict";function o(e,t){var s=t.payload.viewType;return i.__assign({},e,{viewType:s})}function n(e,t){var s=t.payload.shouldShowDeletedFiles;return i.__assign({},e,{shouldShowDeletedFiles:s})}function a(e,i){switch(void 0===e&&(e=t.defaultBrowseState),i.type){case r.ActionTypes.SET_VIEW_TYPE:return o(e,i);case r.ActionTypes.SET_SHOULD_SHOW_DELETED_FILES:return n(e,i)}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.BROWSE_REDUCER_KEY="BROWSE",t.defaultBrowseState={viewType:s.ViewType.List,shouldShowDeletedFiles:!1},t.browseReducer=a}),define("modules/clean/react/browse/data/selectors",["require","exports","modules/clean/react/browse/data/reducer"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e[i.BROWSE_REDUCER_KEY]||i.defaultBrowseState};t.viewType=function(e){return s(e).viewType},t.shouldShowDeletedFiles=function(e){return s(e).shouldShowDeletedFiles}}),define("modules/clean/react/browse/data/store",["require","exports","modules/clean/react/browse/data/reducer","modules/clean/redux/store"],function(e,t,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;t.getStoreForBrowse=function(){if(!r){var e=(t={},t[i.BROWSE_REDUCER_KEY]=i.browseReducer,t);r=s.getStoreAndRegisterReducers(e)}return r;var t}}),define("modules/clean/react/browse/data/types",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});(function(e){e.SET_VIEW_TYPE="BROWSE/SET_VIEW_TYPE",e.SET_SHOULD_SHOW_DELETED_FILES="BROWSE/SET_SHOULD_SHOW_DELETED_FILES "})(t.ActionTypes||(t.ActionTypes={}))}),define("modules/clean/react/browse/selectors",["require","exports","external/reselect","modules/clean/filetypes"],function(e,t,i,s){"use strict";function r(e,t){return e.withMutations(function(i){t.forEach(function(t,s){var r=e.get(s);if(r&&t){var o=r.updateSize(t.size,t.state);i.set(s,o)}})})}function o(e,t){return e.map(function(e){var i=t.get(e.fq_path);return i?e.updateSize(i.size,i.state):e})}Object.defineProperty(t,"__esModule",{value:!0}),t.makeFilesWithoutTeamSharedFolders=function(){return i.createSelector(function(e){return e.sortedFiles},function(e){return e.filter(function(e){return e.type!==s.FileTypes.TEAM_SHARED_FOLDER})})},t.makeUnsortedFilesWithFolderSizes=function(){return i.createSelector(function(e){return e.unsortedFiles},function(e){return e.folderSizes},function(e,t){return r(e,t)})},t.makeSortedFilesWithFolderSizes=function(){return i.createSelector(function(e){return e.sortedFiles},function(e){return e.folderSizes},function(e){return e.currentSort},function(e,t){return o(e,t)})}}),define("modules/clean/react/browse/sort_helpers",["require","exports"],function(e,t){"use strict";function i(e,t,i){for(var s="=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<Math.max(e.length,t.length);r++){var o=e.charAt(r),n=t.charAt(r);if(!o)return-i;if(!n)return i;var a=s.indexOf(o),l=s.indexOf(n);if(a<l)return-i;if(l<a)return i}return 0}function s(e,t,s){if(Array.isArray(e)&&Array.isArray(t)){for(var r=0;r<Math.max(e.length,t.length);r++){var o=e[r],n=t[r];if(null==o)return-s;if(null==n)return s;if("number"==typeof o&&"string"==typeof n)return-s;if("number"==typeof n&&"string"==typeof o)return s;if("string"==typeof o&&"string"==typeof n){var a=i(o,n,s);if(0!==a)return a}else{if(o<n)return-s;if(n<o)return s}}return 0}return e===t?0:e<t?-s:s}Object.defineProperty(t,"__esModule",{value:!0}),t.compare=s}),define("modules/clean/react/browse/store",["require","exports","tslib","external/immutable","modules/clean/filepath","modules/clean/filetypes","modules/clean/flux/base_store","modules/clean/react/browse/constants","modules/clean/react/browse/data/action_creators","modules/clean/react/browse/data/selectors","modules/clean/react/browse/data/store","modules/clean/react/files_view/constants","modules/clean/react/files_view/types","modules/clean/react/browse/models","modules/clean/react/browse/selectors","modules/clean/react/browse/sort_helpers","modules/clean/react/browse/util","modules/clean/react/selection","modules/clean/storage","modules/core/browser","modules/core/cookies","modules/core/exception"],function(e,t,i,s,r,o,n,a,l,d,u,c,_,h,p,f,S,F,E,y,T,m){"use strict";function v(){return null===L&&(L=new b,O(!1)),L}function w(){return null!==L}function g(e){O(e),P=e}function A(){return O(P),P}function O(e){null===I?I=e:m.assert(I===e,"content manager page switched store implementation mid session",{tags:["content-manager"]})}function D(){P=!1,I=null}function C(){L=null}Object.defineProperty(t,"__esModule",{value:!0});var b=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.unsortedFilesWithFolderSizes=p.makeUnsortedFilesWithFolderSizes(),t.sortedFilesWithFolderSizes=p.makeSortedFilesWithFolderSizes(),t.filesWithoutTeamSharedFolders=p.makeFilesWithoutTeamSharedFolders(),t}return i.__extends(t,e),t.prototype._init=function(){this._reduxStore=u.getStoreForBrowse(),this._unsortedFiles=s.Map(),this._sortedFiles=s.List(),this._paginatedTotalNumFiles=0,this._teamFolders=s.List(),this._path="",this._user=null,this._urlPrefix="",this._loadingState=_.LoadingState.LOADING_FIRST_PAGE,this._mountPoints=null,this._activeDropTarget=null,this._clipboardFiles=[],this._currentSort={sortField:_.SortField.FILENAME,sortDirection:_.SortDirection.ASCENDING},this._canDisplayFolderSizes=!1,this._viewTypeColumns={},this._viewTypeColumns[_.ViewType.List]=c.LIST_VIEW_COLUMNS,this._viewTypeColumns[_.ViewType.Grid]=c.GRID_VIEW_COLUMNS,this._viewTypeColumns[_.ViewType.LargeGrid]=c.GRID_VIEW_COLUMNS,this._fileRename=null,this._newFolderCreationState=_.NewFolderCreationState.CREATE_FOLDER_INACTIVE,this._filePathsToSelectOnNextUpdate=s.Set(),this._activeFileJumpFilter="",this._fileJumpIndex=[],this._activeTab=void 0,this._folderSizes=s.Map(),this._currentFolderSizesQuery=s.Set(),this._isQueryingFolderSizes=!1,this._tilesPerRow=1,this._selection=void 0,this._context=void 0,this._reduxStore.dispatch(l.restoreViewType())},t.prototype.isPathEqualsTo=function(e){return!(e&&"/"!==e||this._path&&"/"!==this._path)||e===this._path},t.prototype.files=function(){return this._folderSizes.size>0?this.sortedFilesWithFolderSizes({sortedFiles:this._sortedFiles,folderSizes:this._folderSizes,currentSort:this._currentSort}):this._sortedFiles},t.prototype.filesMap=function(){return this._folderSizes.size>0?this.unsortedFilesWithFolderSizes({unsortedFiles:this._unsortedFiles,folderSizes:this._folderSizes}):this._unsortedFiles},t.prototype.filesWithoutTeamFolders=function(){return this._folderSizes.size>0?this.sortedFilesWithFolderSizes({sortedFiles:this._sortedFiles,folderSizes:this._folderSizes,currentSort:this._currentSort}).filter(function(e){return e.type!==o.FileTypes.TEAM_SHARED_FOLDER}):this._sortedFiles.size>0?this.filesWithoutTeamSharedFolders({sortedFiles:this._sortedFiles}):s.List()},t.prototype.teamFolders=function(){return this.context().showPinnedTeamFolder?this._sortedFiles.filter(function(e){return e.type===o.FileTypes.TEAM_SHARED_FOLDER}):this._folderSizes.size>0?this.sortedFilesWithFolderSizes({sortedFiles:this._sortedFiles,folderSizes:this._folderSizes,currentSort:this._currentSort}).filter(function(e){return e.type===o.FileTypes.TEAM_SHARED_FOLDER}):this._teamFolders},t.prototype.path=function(){return this._path},t.prototype.user=function(){return this._user},t.prototype.urlPrefix=function(){return this._urlPrefix},t.prototype.selection=function(){return this._selection||(this._selection=F.createSelection())},t.prototype.paginatedTotalNumFiles=function(){return this._paginatedTotalNumFiles},t.prototype.selectedFiles=function(){var e=this;if(this.selection().selected.isEmpty()||this._sortedFiles.isEmpty())return s.OrderedMap();var t=this._sortedFiles.filter(function(t){return e.selection().selected.has(t.fq_path)});return s.OrderedMap(t.map(function(e){return[e.fq_path,e]}))},t.prototype.activeTab=function(){return this._activeTab},t.prototype.loadingState=function(){return this._loadingState},t.prototype.context=function(){return this._context||(this._context=new h.BrowseContext)},t.prototype.mountPoints=function(){return this._mountPoints},t.prototype.shouldShowDeletedFiles=function(){return d.shouldShowDeletedFiles(this._reduxStore.getState())},t.prototype.activeDropTarget=function(){return this._activeDropTarget},t.prototype.currentSort=function(){return this._currentSort},t.prototype.sortIsAscending=function(){return this._currentSort.sortDirection===_.SortDirection.ASCENDING},t.prototype.sortLabel=function(){return c.SortIsFilename.includes(this._currentSort.sortField)?_.SortLabel.FILENAME:this._currentSort.sortField===_.SortField.MODIFIED?_.SortLabel.MODIFIED:_.SortLabel.SIZE},t.prototype.viewType=function(){return d.viewType(this._reduxStore.getState())},t.prototype.viewTypeColumns=function(){return this._viewTypeColumns},t.prototype.getIndexOfFile=function(e){return this._sortedFiles.findIndex(function(t){return t.sjid===e.sjid&&t.ns_id===e.ns_id})},t.prototype.getFileByFilename=function(e){return this._sortedFiles.find(function(t){return r.filename(t.fq_path)===e})||null},t.prototype.getFileByFullPath=function(e){return this._sortedFiles.find(function(t){return t.fq_path===e})||null},t.prototype.clipboardFiles=function(){return this._clipboardFiles},t.prototype.fileRename=function(){return this._fileRename},t.prototype.newFolderCreationState=function(){return this._newFolderCreationState},t.prototype.isFileJumping=function(){return this._activeFileJumpFilter.length>0},t.prototype.canDisplayFolderSizes=function(){return this._canDisplayFolderSizes},t.prototype.isQueryingFolderSizes=function(){return this._isQueryingFolderSizes},t.prototype.tilesPerRow=function(){return this._tilesPerRow},t.prototype.countFilesAndFolders=function(){var e=this.selectedFiles().toArray(),t=e.filter(function(e){return e.is_dir}).length;return{num_files_selected:e.filter(function(e){return!e.is_dir}).length,num_folders_selected:t}},t.prototype.initializeEverything=function(e){var t=e.user,i=e.path,r=e.files,o=e.paginatedTotalNumFiles,n=e.urlPrefix,a=e.context,d=e.mountPoints,u=e.fqPathsToSelect,c=e.loadingState,h=e.shouldShowDeletedFiles,p=e.teamFolders;this._user=t,this._path=i,this._urlPrefix=n,this.updateUserPrefData(t.id),this.appendFiles({path:i,files:r,paginatedTotalNumFiles:o},!1),this._context=a,this._mountPoints=s.Map(d),this._loadingState=c,this.setTeamFolders({teamFolders:p}),c===_.LoadingState.LOADED?this.selectFqPaths({fqPathsToSelect:u},!1):this._filePathsToSelectOnNextUpdate=s.Set(u),this._reduxStore.dispatch(l.setShouldShowDeletedFiles({shouldShowDeletedFiles:!!h})),this.emit_change()},t.prototype.setUser=function(e){var t=e.user;null==this.user()&&(this._user=t,this.updateUserPrefData(t.id))},t.prototype.updateUserPrefData=function(e){var t=this,i=this.getCurrentSortCookie();i&&(this._currentSort=i),c.AllViewTypes.forEach(function(i){t.updateViewTypeColumns(e,i)})},t.prototype.updateViewTypeColumns=function(e,t){var i=this.getUserLocalStorage(e,a.COLUMNS_STORAGE_KEY+"_"+t);i&&(this._viewTypeColumns[t]=i)},t.prototype.setPathData=function(e,t){var i=e.path,s=e.files,o=e.paginatedTotalNumFiles,n=e.context;void 0===t&&(t=!0),r.paths_are_equal(i,this._path)&&(this._unsortedFiles=this._unsortedFiles.clear(),this._sortedFiles=this._sortedFiles.clear(),this._selection=void 0,this.appendFiles({path:i,files:s,paginatedTotalNumFiles:o},!1),this._context=n,t&&this.emit_change())},t.prototype.clearFiles=function(e){var t=e.path,i=e.context;r.paths_are_equal(t,this._path)&&(this._unsortedFiles=this._unsortedFiles.clear(),this._sortedFiles=this._sortedFiles.clear(),this._selection=void 0,this._paginatedTotalNumFiles=0,this._context=i,this.buildFileJumpIndex(),this.emit_change())},t.prototype.appendFiles=function(e,t){var i=e.path,o=e.files,n=e.paginatedTotalNumFiles;if(void 0===t&&(t=!0),r.paths_are_equal(i,this._path)){for(var a=[],l=[],d=0,u=o;d<u.length;d++){var c=u[d],_=c instanceof h.File?c:h.File.fromServerObject(c);a.push([c.fq_path,_]),this._unsortedFiles.has(c.fq_path)||l.push(_)}this._unsortedFiles=this._unsortedFiles.merge(s.Map(a)),this._sortedFiles=this._sortedFiles.concat(s.List(l)),m.assert(this._unsortedFiles.size===this._sortedFiles.size,"appendFiles ended up with mismatched data structures"),this.sortFiles(this._currentSort,!1),this._filePathsToSelectOnNextUpdate.count()&&this.selectFqPaths({fqPathsToSelect:this._filePathsToSelectOnNextUpdate.toArray()},!1),this.buildFileJumpIndex(),this._paginatedTotalNumFiles=n,t&&this.emit_change()}},t.prototype.applyFileDeltas=function(e){var t=e.path,i=e.fileDeltas;if(r.paths_are_equal(t,this._path)){for(var o=0,n=i;o<n.length;o++){var a=n[o],l=a.before,d=a.after;this.applyFileDelta({before:l,after:d,pathForDelta:t})}if(this._filePathsToSelectOnNextUpdate.size){this.selectFqPaths({fqPathsToSelect:this._filePathsToSelectOnNextUpdate.toArray()},!1).size===this._filePathsToSelectOnNextUpdate.size&&(this._filePathsToSelectOnNextUpdate=s.Set())}m.assert(this._unsortedFiles.size===this._sortedFiles.size,"applyFileDeltas ended up with mismatched file collections (map vs. sorted list)"),this.sortFiles(this._currentSort,!1),this.buildFileJumpIndex(),this.emit_change()}},t.prototype.setPath=function(e){var t=e.path;this._path=t,this.emit_change()},t.prototype.setUrlPrefix=function(e){var t=e.prefix;this._urlPrefix=t,this.emit_change()},t.prototype.setLoadingState=function(e){var t=e.path,i=e.loadingState;r.paths_are_equal(t,this._path)&&(this._loadingState=i,i===_.LoadingState.LOADED&&(this._filePathsToSelectOnNextUpdate=s.Set()),this.emit_change())},t.prototype.setMountPoints=function(e){var t=e.mountPoints;this._mountPoints=s.Map(t)},t.prototype.setTeamFolders=function(e){var t=e.teamFolders;this._teamFolders=s.List((t||[]).map(h.File.fromServerObject))},t.prototype.setSelection=function(e){var t=e.selection;this._selection=t,this.emit_change()},t.prototype.selectFilesAfterUpload=function(e){var t=this,i=e.fqPathsToSelect;i.every(function(e){return t.filesMap().has(e)})?this.selectFqPaths({fqPathsToSelect:i}):this.setFilePathsToSelectOnNextUpdate({fqPathsToSelect:i})},t.prototype.selectFqPaths=function(e,t){var i=e.fqPathsToSelect;void 0===t&&(t=!0);var r=i.map(function(e){return e.toLowerCase()}),o=this._sortedFiles.filter(function(e){return r.includes(e.fq_path.toLowerCase())}),n=o.map(function(e){return e.fq_path}),a=s.OrderedSet(n),l=n.size?n.get(0):null;return this._selection=this.selection().set("selected",a).set("anchor",l),t&&this.emit_change(),n},t.prototype.setActiveTab=function(e){var t=e.tabName;this._activeTab=t,this.emit_change()},t.prototype.setShouldShowDeletedFiles=function(e){var t=e.shouldShowDeletedFiles;this._reduxStore.dispatch(l.setShouldShowDeletedFiles({shouldShowDeletedFiles:t})),this.emit_change()},t.prototype.setDropTarget=function(e){var t=e.target;this._activeDropTarget=t,this.emit_change()},t.prototype.setViewType=function(e){var t=e.viewType,i=e.isSearchMode;this._reduxStore.dispatch(l.setAndStoreViewType({user:this._user,viewType:t,isSearchMode:!!i})),this.emit_change()},t.prototype._setColumnDependentCapabilities=function(e){var t=e.canDisplayFolderSizes;this._canDisplayFolderSizes=t},t.prototype.setColumnDependentCapabilities=function(e){var t=e.canDisplayFolderSizes;this._canDisplayFolderSizes!==t&&(this._setColumnDependentCapabilities({canDisplayFolderSizes:t}),this.emit_change())},t.prototype._setViewTypeColumns=function(e,t){this._viewTypeColumns[t]=e,this.setUserLocalStorage(a.COLUMNS_STORAGE_KEY+"_"+t,e)},t.prototype.setColumnConfiguration=function(e){var t=e.columns,i=e.viewType,s=e.canDisplayFolderSizes;this._setViewTypeColumns(t,i),this._setColumnDependentCapabilities({canDisplayFolderSizes:s}),this.emit_change()},t.prototype.getCurrentSortCookie=function(){var e=T.Cookies.read(a.BROWSE_SORT_COOKIE_NAME);if(e&&e.length&&e.indexOf("|")>-1){var t=e.split("|",2);return{sortField:t[0],sortDirection:t[1]}}},t.prototype.setCurrentSortCookie=function(e){T.Cookies.delete(a.BROWSE_SORT_COOKIE_NAME);var t=e.sortField+"|"+e.sortDirection;T.Cookies.create(a.BROWSE_SORT_COOKIE_NAME,t,1095)},t.prototype.setUserLocalStorage=function(e,t){this._user&&E.UserLocalStorage.set(this._user.id,e,t)},t.prototype.getUserLocalStorage=function(e,t){return E.UserLocalStorage.get(e,t)},t.prototype.setTilesPerRow=function(e){var t=e.tilesPerRow;this._tilesPerRow=t,this.emit_change()},t.prototype.sortFiles=function(e,t){function i(e,t){var i=e.value,s=e.isTMF,r=t.value;return n(s,t.isTMF)||f.compare(i,r,u)}function s(e,t){var i=e.isFolder,s=e.value,r=e.isTMF,o=t.isFolder,a=t.value,l=t.isTMF,d=n(r,l);return d?d:(s||(s=1/0*u),a||(a=1/0*u),i&&o?f.compare(s,a,u):i?-u:o?u:f.compare(s,a,u))}function r(e,t){var i=e.isFolder,s=e.value,r=e.isTMF,o=t.isFolder,a=t.value,l=t.isTMF,d=n(r,l);return d?d:i&&o?f.compare(s,a,u):i?1:o?-1:""===s?1:""===a?-1:f.compare(s,a,u)}function o(e,t){var i=e.isFolder,s=e.value,r=e.isTMF,o=t.isFolder,a=t.value,l=t.isTMF,d=n(r,l);return d?d:i&&o?""===s?1:""===a?-1:f.compare(s,a,u):i?-1:o?1:""===s?1:""===a?-1:f.compare(s,a,u)}function n(e,t){if(c){if(e)return-1;if(t)return 1}return 0}var a=this,l=e.sortField,d=e.sortDirection;void 0===t&&(t=!0);var u=d===_.SortDirection.ASCENDING?1:-1,c=!this.context().isNonUserRelativeContext,p=l===_.SortField.FILENAME||l===_.SortField.SHARED_WITH,F=y.mac?i:s;p?this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:e.sort_key,isTMF:h.File.isTeamMemberFolder(e)}},F):l===_.SortField.MODIFIED?this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:e.ts,isTMF:h.File.isTeamMemberFolder(e)}},r):l===_.SortField.CATEGORY?this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:h.File.getCategoryDescription(e),isTMF:h.File.isTeamMemberFolder(e)}},r):l===_.SortField.EXTENSION?this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:h.File.getExtension(e),isTMF:h.File.isTeamMemberFolder(e)}},r):l===_.SortField.SIZE?this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:e.is_dir&&a._folderSizes.has(e.fq_path)?a._folderSizes.get(e.fq_path).size:e.bytes,isTMF:h.File.isTeamMemberFolder(e)}},F):l===_.SortField.SYNC_SETTING&&(this._sortedFiles=this._sortedFiles.sortBy(function(e){return{isFolder:e.is_dir,value:S.getSyncSettingDescription(e),isTMF:h.File.isTeamMemberFolder(e)}},o)),this._currentSort={sortField:l,sortDirection:d},this.setCurrentSortCookie(this._currentSort),t&&this.emit_change()},t.prototype.setClipboardToFiles=function(e){this._clipboardFiles=e,this.emit_change()},t.prototype.updateRenameState=function(e,t){this._fileRename=t?{file:e,state:t}:null,this.emit_change()},t.prototype.setNewFolderCreationState=function(e){this._newFolderCreationState=e,this.emit_change()},t.prototype.setFilePathsToSelectOnNextUpdate=function(e){var t=e.fqPathsToSelect,i=void 0===t?[]:t;this._filePathsToSelectOnNextUpdate=s.Set(i)},t.prototype.addCommentStatusBatch=function(e){var t=this,i=e.commentStatusByFqPath;Object.keys(i).map(function(e){var s=t._unsortedFiles.get(e);if(null!=s){var r=s.merge(i[e]);t.insertOrUpdateFile({file:r,forceUpdate:!0})}}),this.emit_change()},t.prototype.addFileJumpKeyCode=function(e){var t=e.keyChar;this._activeFileJumpFilter+=t.toLowerCase();for(var i=null,s=0,r=this._fileJumpIndex;s<r.length;s++){var o=r[s],n=o.fqPath;if(o.filename>=this._activeFileJumpFilter){i=n;break}}null!=i&&this.selectFqPaths({fqPathsToSelect:[i]})},t.prototype.resetFileJump=function(){this._activeFileJumpFilter=""},t.prototype.buildFileJumpIndex=function(){this._fileJumpIndex=this._unsortedFiles.keySeq().toArray().map(function(e){return{filename:r.filename(e).toLowerCase(),fqPath:e}}),this._fileJumpIndex.sort(function(e,t){var i=e.filename,s=t.filename;return i<s?-1:i>s?1:0})},t.prototype.applyFileDelta=function(e){var t=e.before,i=e.after,s=e.pathForDelta;if(i&&!r.paths_are_equal(r.parent_dir(i.fq_path),s)&&(i=null),i!==t){var o=i&&this._unsortedFiles.get(i.fq_path);if(!(o&&o.sjid>=i.sjid)){if(this._fileRename&&i&&t){var n=this._folderSizes.get(t.fq_path);n&&(this._folderSizes=this._folderSizes.set(i.fq_path,{size:n.size,state:n.state}))}return t&&(this._folderSizes=this._folderSizes.delete(t.fq_path)),i&&t?this.replaceFile({existingFile:t,newFile:i}):i&&!t?this.insertOrUpdateFile({file:i}):t&&!i?this.removeFile({file:t}):void 0}}},t.prototype.insertOrUpdateFile=function(e){function t(e){return e.fq_path.toLowerCase()===o}var i=e.file,s=e.forceUpdate,r=void 0!==s&&s;this._unsortedFiles=this._unsortedFiles.set(i.fq_path,i);var o=i.fq_path.toLowerCase(),n=this._sortedFiles.findEntry(t)||[null,null],a=n[0],l=n[1];l?(r||i.sjid>l.sjid)&&(this._sortedFiles=this._sortedFiles.set(a,i)):this._sortedFiles=this._sortedFiles.push(i)},t.prototype.removeFile=function(e){function t(e){return e.fq_path.toLowerCase()===r}var i=e.file;m.assert(this._unsortedFiles.has(i.fq_path),"trying to remove a file that doesn't exist in the file map");var s=this._sortedFiles.indexOf(i),r=i.fq_path.toLowerCase(),o=this._sortedFiles.findEntry(t),n=o?o[0]:-1;m.assert(n!==-1,"tried to remove file that doesn't exist in the sorted file list"),this._unsortedFiles=this._unsortedFiles.delete(i.fq_path),this._sortedFiles=this._sortedFiles.delete(s)},t.prototype.replaceFile=function(e){function t(e){return e.fq_path.toLowerCase()===r}var i=e.existingFile,s=e.newFile;m.assert(this._unsortedFiles.has(i.fq_path),"tried to replace file, but previous file doesn't exist in map");var r=i.fq_path.toLowerCase(),o=this._sortedFiles.findEntry(t),n=o?o[0]:-1;m.assert(n!==-1,"tried to update file, but previous file doesn't exist in sorted list"),i.fq_path===s.fq_path?(this._sortedFiles=this._sortedFiles.set(n,s),this._unsortedFiles=this._unsortedFiles.set(i.fq_path,s)):(this._sortedFiles=this._sortedFiles.delete(n),this._unsortedFiles=this._unsortedFiles.delete(i.fq_path),this._unsortedFiles=this._unsortedFiles.set(s.fq_path,s),this._sortedFiles=this._sortedFiles.push(s),this._fileRename&&this._fileRename.state===_.RenameState.SAVING_INPUT&&(this.updateRenameState(i,null),this.selectFqPaths({fqPathsToSelect:[s.fq_path]})))},t.prototype.requestFolderSizes=function(e){this._isQueryingFolderSizes||(this._isQueryingFolderSizes=!0,this._folderSizes=this._folderSizes.withMutations(function(t){t.set(e,{size:0,state:_.FetchFolderSizeState.LOADING})}),this.emit_change())},t.prototype.setFolderSizesPending=function(e){var t=this;this._folderSizes=this._folderSizes.withMutations(function(i){for(var s=function(e){i.update(e.fq_path,{size:0,state:_.FetchFolderSizeState.LOADING},function(t){return{size:t.size+e.size,state:_.FetchFolderSizeState.LOADING}}),t._currentFolderSizesQuery=t._currentFolderSizesQuery.add(e.fq_path)},r=0,o=e.sizes_dict;r<o.length;r++){s(o[r])}}),this.emit_change()},t.prototype.completeFolderSizes=function(e){var t=this;this._folderSizes=this._folderSizes.withMutations(function(i){t._currentFolderSizesQuery.forEach(function(s){var r=t._folderSizes.get(s);r&&i.update(s,function(){return{size:r.size,state:e}})})}),this._currentFolderSizesQuery=s.Set(),this._isQueryingFolderSizes=!1,this.emit_change()},t.prototype._new_payload=function(e){var t=e.action;switch(t.type){case a.BrowseActionType.INITIALIZE_EVERYTHING:this.initializeEverything(t.data);break;case a.BrowseActionType.LOAD_PATH:this.setPathData(t.data,!1),this.setLoadingState({path:t.data.path,loadingState:_.LoadingState.LOADED});break;case a.BrowseActionType.CLEAR_FILES:this.clearFiles(t.data);break;case a.BrowseActionType.ADD_FILES:this.appendFiles(t.data);break;case a.BrowseActionType.ADD_FILES_AND_SET_LOADING_STATE:this.appendFiles(t.data,!1),this.setLoadingState(t.data);break;case a.BrowseActionType.SET_PATH:this.setPath(t.data);break;case a.BrowseActionType.SET_USER:this.setUser(t.data);break;case a.BrowseActionType.SET_URL_PREFIX:this.setUrlPrefix(t.data);break;case a.BrowseActionType.CHANGE_FILES:
this.applyFileDeltas(t.data);break;case a.BrowseActionType.SET_ACTIVE_TAB:this.setActiveTab(t.data);break;case a.BrowseActionType.SET_SELECTION:this.setSelection(t.data);break;case a.BrowseActionType.SELECT_FILES_AFTER_UPLOAD:this.selectFilesAfterUpload(t.data);break;case a.BrowseActionType.SELECT_FILES_BY_FQ_PATH:this.selectFqPaths(t.data);break;case a.BrowseActionType.SET_LOADING_STATE:this.setLoadingState(t.data);break;case a.BrowseActionType.SET_MOUNT_POINTS:this.setMountPoints(t.data);break;case a.BrowseActionType.SET_TEAM_FOLDERS:this.setTeamFolders(t.data);break;case a.BrowseActionType.SET_SHOULD_SHOW_DELETED_FILES:this.setShouldShowDeletedFiles(t.data);break;case a.BrowseActionType.SET_DROP_TARGET:this.setDropTarget(t.data);break;case a.BrowseActionType.COPY_FILES_TO_CLIPBOARD:this.setClipboardToFiles(t.data.files);break;case a.BrowseActionType.SET_VIEW_TYPE:this.setViewType(t.data);break;case a.BrowseActionType.SORT_FILES:this.sortFiles(t.data);break;case a.BrowseActionType.REQUEST_NEW_FILE_NAME:this.updateRenameState(t.data.file,_.RenameState.PENDING_INPUT);break;case a.BrowseActionType.SET_FILE_RENAME_PENDING:this.updateRenameState(t.data.file,_.RenameState.SAVING_INPUT);break;case a.BrowseActionType.SET_FILE_RENAME_COMPLETE:case a.BrowseActionType.CANCEL_FILE_RENAME:this.updateRenameState(t.data.file,null);break;case a.BrowseActionType.REQUEST_FOLDER_NAME:this.setNewFolderCreationState(_.NewFolderCreationState.PENDING_INPUT);break;case a.BrowseActionType.CREATE_FOLDER_PENDING:this.setNewFolderCreationState(_.NewFolderCreationState.SAVING_INPUT);break;case a.BrowseActionType.CREATE_FOLDER_COMPLETE:case a.BrowseActionType.CANCEL_CREATE_FOLDER:this.setNewFolderCreationState(_.NewFolderCreationState.CREATE_FOLDER_INACTIVE);break;case a.BrowseActionType.SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE:this.setFilePathsToSelectOnNextUpdate(t.data);break;case a.BrowseActionType.ADD_COMMENT_STATUS_BATCH:this.addCommentStatusBatch(t.data);break;case a.BrowseActionType.ADD_FILE_JUMP_KEY_CODE:this.addFileJumpKeyCode(t.data);break;case a.BrowseActionType.RESET_FILE_JUMP:this.resetFileJump();break;case a.BrowseActionType.REQUEST_FETCH_FOLDER_SIZES:this.requestFolderSizes(t.data.fqPath);break;case a.BrowseActionType.FETCHED_FOLDER_SIZES:this.setFolderSizesPending(t.data.resp);break;case a.BrowseActionType.COMPLETE_FETCH_FOLDER_SIZES:this.completeFolderSizes(t.data.state);break;case a.BrowseActionType.SET_COLUMN_DEPENDENT_CAPABILITIES:this.setColumnDependentCapabilities(t.data);break;case a.BrowseActionType.SET_COLUMN_CONFIGURATION:this.setColumnConfiguration(t.data);break;case a.BrowseActionType.SET_TILES_PER_ROW:this.setTilesPerRow(t.data)}},t})(n.Store);t.BrowseStore=b;var L=null;t.getBrowseStore=v,t.browseStoreInstantiated=w;var P=!1;t.setUseContentManagerStore=g,t.getUseContentManagerStore=A;var I=null;t.testOnlyResetUseContentManagerStore=D,t.testOnlyNullBrowseStoreInstance=C});
//# sourceMappingURL=pkg-browse.min.js-vfl7dUqi2.map