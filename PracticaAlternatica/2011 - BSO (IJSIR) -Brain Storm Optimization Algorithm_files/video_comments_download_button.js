define(["require","exports","tslib","external/react","modules/clean/react/css","modules/clean/video_annotations_prototype/store/selectors","external/react-redux","modules/clean/react/file_viewer/file_utils","modules/clean/datetime","modules/clean/video_annotations_prototype/video_annotation_prototype_helper"],function(e,t,n,o,r,m,a,i,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=["Top Comment Id","Time Code","Commenter","Commenter Email","Timestamp","Comment"],l=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.singleCommentToCSV=function(e,n,o){var r=[];if(r.push(o?o:""),r.push(n!==-1?c.VideoAnnotationPrototypeHelper.secondsToTimeString(c.VideoAnnotationPrototypeHelper.unitConvertDomainObjectTimeToSeconds(n)):""),e.is_deleted)r=r.concat(["","","","(This comment was deleted)"]);else{var m=e.comment_text,a=e.when_created,i=e.commenter_info,d=i.display_name,l=i.email;r=r.concat([d,l,s.format_date(new Date(a),"hh:mm:ss MMM d y"),t.formatCommentText(m)])}return r.join(",")},t.formatCommentText=function(e){return'"'+e.replace(/"/g,'""')+'"'},t.commentThreadToCSV=function(e,n){var o=[];return o.push(t.singleCommentToCSV(e,e.comment_metadata.frame_time,n)),e.reply_comments.filter(function(e){return!e.is_deleted}).forEach(function(e){return o.push(t.singleCommentToCSV(e,-1))}),o.join("\n")},t.commentsToCSV=function(){var e=t.props.comments,n=[];n.push(d.join(","));for(var o=1,r=0,m=e;r<m.length;r++){var a=m[r];(!a.is_deleted||a.reply_comments.filter(function(e){return!e.is_deleted}).length>0)&&n.push(t.commentThreadToCSV(a,o++))}return n.join("\n")},t.downloadComments=function(){var e=t.props.file,n=i.getFilename(e);n=n.split(".")[0]+".csv";var o=t.commentsToCSV(),r=encodeURI(o);r="data:text/csv;charset=utf-8,"+r;var m=document.createElement("a");m.setAttribute("href",r),m.setAttribute("download",n),document.body.appendChild(m),m.click(),document.body.removeChild(m)},t}return n.__extends(t,e),t.prototype.render=function(){return o.createElement("div",{className:"comments-download"},o.createElement("a",{onClick:this.downloadComments},"Download comments"))},t})(o.Component),u=function(e){return{comments:m.getComments(e)}},p=a.connect(u)(l),f=r(p,["/static/css/video_annotation_prototype-vfly3pQQA.css"]);t.VideoCommentsDownloadButton=f});
//# sourceMappingURL=video_comments_download_button.min.js-vflSm5hmi.map